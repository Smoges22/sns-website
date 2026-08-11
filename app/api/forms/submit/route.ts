import { NextRequest, NextResponse } from "next/server";
import { isPublicFormType, validatePublicFormPayload } from "@/lib/public-form-validation";
import type { PublicFormType } from "@/lib/public-form-config";

export const runtime = "nodejs";

const MAX_REQUEST_BYTES = 25_000;
const FORWARD_TIMEOUT_MS = 10_000;
const genericFailureMessage = "We couldn't submit your request right now. Please try again.";

const sourcePages: Record<PublicFormType, string> = {
  contact: "/contact",
  assessment_request: "/request-assessment",
  client_referral: "/refer-a-client",
};

function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function jsonResponse(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, {
    headers: { "Cache-Control": "no-store" },
    status,
  });
}

function acceptedWithoutForwarding() {
  return jsonResponse(
    {
      message: "Submission received.",
      ok: true,
      submissionId: `sns_${crypto.randomUUID()}`,
    },
    200,
  );
}

function configurationFailure(message: string) {
  console.error(`[forms] ${message}`);
  return jsonResponse(
    { error: "SUBMISSION_UNAVAILABLE", message: genericFailureMessage, ok: false },
    503,
  );
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return jsonResponse(
      { error: "UNSUPPORTED_MEDIA_TYPE", message: genericFailureMessage, ok: false },
      415,
    );
  }

  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_REQUEST_BYTES) {
    return jsonResponse({ error: "PAYLOAD_TOO_LARGE", message: genericFailureMessage, ok: false }, 413);
  }

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (rawBody.length > MAX_REQUEST_BYTES) {
      return jsonResponse({ error: "PAYLOAD_TOO_LARGE", message: genericFailureMessage, ok: false }, 413);
    }
    body = JSON.parse(rawBody) as unknown;
  } catch {
    return jsonResponse({ error: "INVALID_JSON", message: genericFailureMessage, ok: false }, 400);
  }

  if (!isPlainRecord(body)) {
    return jsonResponse({ error: "VALIDATION_ERROR", message: genericFailureMessage, ok: false }, 400);
  }

  const allowedTopLevelFields = new Set(["formType", "payload", "website"]);
  if (Object.keys(body).some((field) => !allowedTopLevelFields.has(field))) {
    return jsonResponse({ error: "VALIDATION_ERROR", message: genericFailureMessage, ok: false }, 400);
  }

  if (typeof body.website === "string" && body.website.trim()) return acceptedWithoutForwarding();

  if (!isPublicFormType(body.formType)) {
    return jsonResponse({ error: "VALIDATION_ERROR", message: genericFailureMessage, ok: false }, 400);
  }

  const validation = validatePublicFormPayload(body.formType, body.payload);
  if (!validation.ok) {
    return jsonResponse({ error: "VALIDATION_ERROR", message: genericFailureMessage, ok: false }, 400);
  }

  const appsScriptUrl = process.env.SNS_APPS_SCRIPT_URL?.trim();
  const sharedSecret = process.env.SNS_FORMS_SHARED_SECRET?.trim();
  if (!appsScriptUrl) return configurationFailure("SNS_APPS_SCRIPT_URL is not configured.");
  if (!sharedSecret) return configurationFailure("SNS_FORMS_SHARED_SECRET is not configured.");

  try {
    const endpoint = new URL(appsScriptUrl);
    if (endpoint.protocol !== "https:" || endpoint.hostname !== "script.google.com") {
      return configurationFailure("SNS_APPS_SCRIPT_URL must be a Google Apps Script HTTPS web-app URL.");
    }
  } catch {
    return configurationFailure("SNS_APPS_SCRIPT_URL is invalid.");
  }

  const submissionId = `sns_${crypto.randomUUID()}`;
  const userAgent = (request.headers.get("user-agent") ?? "")
    .normalize("NFKC")
    .replaceAll("\u0000", "")
    .trim()
    .slice(0, 500);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FORWARD_TIMEOUT_MS);

  try {
    const response = await fetch(appsScriptUrl, {
      body: JSON.stringify({
        formType: body.formType,
        payload: validation.payload,
        secret: sharedSecret,
        sourcePage: sourcePages[body.formType],
        submissionId,
        userAgent,
      }),
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      method: "POST",
      redirect: "follow",
      signal: controller.signal,
    });

    const responseText = await response.text();
    if (!response.ok || responseText.length > 5_000) throw new Error("AppsScriptResponseError");

    const result = JSON.parse(responseText) as unknown;
    if (!isPlainRecord(result) || result.ok !== true || result.submissionId !== submissionId) {
      const errorCode = isPlainRecord(result) && typeof result.error === "string" ? result.error : "INVALID_RESPONSE";
      console.warn(`[forms] Apps Script rejected a submission: ${errorCode}`);
      return jsonResponse({ error: "SUBMISSION_FAILED", message: genericFailureMessage, ok: false }, 502);
    }

    return jsonResponse({ message: "Submission received.", ok: true, submissionId }, 200);
  } catch (error) {
    console.error("[forms] Apps Script request failed.", error instanceof Error ? error.name : "UnknownError");
    return jsonResponse({ error: "SUBMISSION_FAILED", message: genericFailureMessage, ok: false }, 502);
  } finally {
    clearTimeout(timeout);
  }
}
