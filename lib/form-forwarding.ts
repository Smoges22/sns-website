export const FORM_FORWARD_TIMEOUT_MS = 30_000;
export const FORM_FORWARD_RETRY_DELAY_MS = 250;

const MAX_APPS_SCRIPT_RESPONSE_BYTES = 5_000;

type FetchImplementation = typeof fetch;

type FormForwardLogger = Pick<Console, "error" | "info" | "warn">;

type FormForwardOptions = {
  appsScriptUrl: string;
  fetchImplementation?: FetchImplementation;
  logger?: FormForwardLogger;
  requestBody: string;
  retryDelayMs?: number;
  submissionId: string;
  timeoutMs?: number;
};

type FormForwardResult =
  | { attempts: 1 | 2; duplicate: boolean; ok: true }
  | { attempts: 1 | 2; errorCode: string; ok: false };

type AttemptResult =
  | { duplicate: boolean; ok: true }
  | { errorCode: string; ok: false; retryable: false }
  | { errorCode: "NETWORK_UNCERTAIN" | "TIMEOUT"; ok: false; retryable: true };

function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isAbortError(error: unknown) {
  return error instanceof Error && error.name === "AbortError";
}

function isNetworkError(error: unknown) {
  return error instanceof TypeError;
}

async function forwardAttempt({
  appsScriptUrl,
  fetchImplementation,
  requestBody,
  submissionId,
  timeoutMs,
}: Required<Pick<FormForwardOptions, "appsScriptUrl" | "requestBody" | "submissionId">> & {
  fetchImplementation: FetchImplementation;
  timeoutMs: number;
}): Promise<AttemptResult> {
  const controller = new AbortController();
  let timedOut = false;
  const timeout = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);

  try {
    const response = await fetchImplementation(appsScriptUrl, {
      body: requestBody,
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      method: "POST",
      redirect: "follow",
      signal: controller.signal,
    });

    if (!response.ok) return { errorCode: `HTTP_${response.status}`, ok: false, retryable: false };
    const responseText = await response.text();
    if (responseText.length > MAX_APPS_SCRIPT_RESPONSE_BYTES) {
      return { errorCode: "INVALID_RESPONSE", ok: false, retryable: false };
    }

    let result: unknown;
    try {
      result = JSON.parse(responseText) as unknown;
    } catch {
      return { errorCode: "INVALID_RESPONSE", ok: false, retryable: false };
    }

    if (!isPlainRecord(result) || result.ok !== true || result.submissionId !== submissionId) {
      const errorCode = isPlainRecord(result) && typeof result.error === "string"
        ? result.error
        : "INVALID_RESPONSE";
      return { errorCode, ok: false, retryable: false };
    }

    if (result.duplicate !== undefined && typeof result.duplicate !== "boolean") {
      return { errorCode: "INVALID_RESPONSE", ok: false, retryable: false };
    }

    return { duplicate: result.duplicate === true, ok: true };
  } catch (error) {
    if (timedOut && isAbortError(error)) return { errorCode: "TIMEOUT", ok: false, retryable: true };
    if (isNetworkError(error)) return { errorCode: "NETWORK_UNCERTAIN", ok: false, retryable: true };
    return { errorCode: "FORWARD_FAILED", ok: false, retryable: false };
  } finally {
    clearTimeout(timeout);
  }
}

function delay(milliseconds: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, milliseconds));
}

export async function forwardFormSubmission({
  appsScriptUrl,
  fetchImplementation = fetch,
  logger = console,
  requestBody,
  retryDelayMs = FORM_FORWARD_RETRY_DELAY_MS,
  submissionId,
  timeoutMs = FORM_FORWARD_TIMEOUT_MS,
}: FormForwardOptions): Promise<FormForwardResult> {
  logger.info(`[forms] Initial form forward: ${submissionId}`);
  const firstAttempt = await forwardAttempt({
    appsScriptUrl,
    fetchImplementation,
    requestBody,
    submissionId,
    timeoutMs,
  });

  if (firstAttempt.ok) {
    if (firstAttempt.duplicate) logger.info(`[forms] Submission already captured: ${submissionId}`);
    return { attempts: 1, duplicate: firstAttempt.duplicate, ok: true };
  }

  if (!firstAttempt.retryable) {
    logger.warn(`[forms] Form forward rejected: ${submissionId} (${firstAttempt.errorCode})`);
    return { attempts: 1, errorCode: firstAttempt.errorCode, ok: false };
  }

  const uncertainty = firstAttempt.errorCode === "TIMEOUT" ? "timed out" : "had a network uncertainty";
  logger.warn(`[forms] Form forward ${uncertainty}: ${submissionId}`);
  logger.info(`[forms] Retrying form submission: ${submissionId}`);
  if (retryDelayMs > 0) await delay(retryDelayMs);

  const secondAttempt = await forwardAttempt({
    appsScriptUrl,
    fetchImplementation,
    requestBody,
    submissionId,
    timeoutMs,
  });

  if (secondAttempt.ok) {
    if (secondAttempt.duplicate) logger.info(`[forms] Submission already captured: ${submissionId}`);
    return { attempts: 2, duplicate: secondAttempt.duplicate, ok: true };
  }

  logger.error(`[forms] Form forward failed after retry: ${submissionId} (${secondAttempt.errorCode})`);
  return { attempts: 2, errorCode: secondAttempt.errorCode, ok: false };
}
