import assert from "node:assert/strict";
import test from "node:test";
import { forwardFormSubmission } from "../lib/form-forwarding.ts";

const endpoint = "https://script.google.com/macros/s/example/exec";
const submissionId = "sns_12345678-1234-1234-1234-123456789abc";
const requestBody = JSON.stringify({ submissionId, payload: { name: "Fictional Test" } });
const silentLogger = { error() {}, info() {}, warn() {} };

function jsonResponse(body) {
  return new Response(JSON.stringify(body), { status: 200 });
}

function timeoutResponse() {
  return (_url, init) => new Promise((_resolve, reject) => {
    init?.signal?.addEventListener("abort", () => reject(new DOMException("Timed out", "AbortError")), { once: true });
  });
}

test("normal success uses one attempt", async () => {
  let calls = 0;
  const result = await forwardFormSubmission({
    appsScriptUrl: endpoint,
    fetchImplementation: async () => {
      calls += 1;
      return jsonResponse({ ok: true, submissionId });
    },
    logger: silentLogger,
    requestBody,
    retryDelayMs: 0,
    submissionId,
    timeoutMs: 10,
  });

  assert.deepEqual(result, { attempts: 1, duplicate: false, ok: true });
  assert.equal(calls, 1);
});

test("timeout after persistence retries once with the same body and accepts an exact duplicate confirmation", async () => {
  const forwardedBodies = [];
  const firstFetch = timeoutResponse();
  let calls = 0;
  const result = await forwardFormSubmission({
    appsScriptUrl: endpoint,
    fetchImplementation: async (url, init) => {
      calls += 1;
      forwardedBodies.push(init?.body);
      if (calls === 1) return firstFetch(url, init);
      return jsonResponse({ duplicate: true, ok: true, submissionId });
    },
    logger: silentLogger,
    requestBody,
    retryDelayMs: 0,
    submissionId,
    timeoutMs: 5,
  });

  assert.deepEqual(result, { attempts: 2, duplicate: true, ok: true });
  assert.equal(calls, 2);
  assert.deepEqual(forwardedBodies, [requestBody, requestBody]);
  assert.equal(JSON.parse(String(forwardedBodies[0])).submissionId, submissionId);
  assert.equal(JSON.parse(String(forwardedBodies[1])).submissionId, submissionId);
});

test("timeout before persistence retries once and accepts a normal success", async () => {
  const firstFetch = timeoutResponse();
  let calls = 0;
  const result = await forwardFormSubmission({
    appsScriptUrl: endpoint,
    fetchImplementation: async (url, init) => {
      calls += 1;
      if (calls === 1) return firstFetch(url, init);
      return jsonResponse({ ok: true, submissionId });
    },
    logger: silentLogger,
    requestBody,
    retryDelayMs: 0,
    submissionId,
    timeoutMs: 5,
  });

  assert.deepEqual(result, { attempts: 2, duplicate: false, ok: true });
  assert.equal(calls, 2);
});

test("both uncertain attempts return failure after one retry", async () => {
  const fetchImplementation = timeoutResponse();
  let calls = 0;
  const result = await forwardFormSubmission({
    appsScriptUrl: endpoint,
    fetchImplementation: async (url, init) => {
      calls += 1;
      return fetchImplementation(url, init);
    },
    logger: silentLogger,
    requestBody,
    retryDelayMs: 0,
    submissionId,
    timeoutMs: 5,
  });

  assert.deepEqual(result, { attempts: 2, errorCode: "TIMEOUT", ok: false });
  assert.equal(calls, 2);
});

test("an explicit Apps Script rejection is not retried", async () => {
  let calls = 0;
  const result = await forwardFormSubmission({
    appsScriptUrl: endpoint,
    fetchImplementation: async () => {
      calls += 1;
      return jsonResponse({ error: "UNAUTHORIZED", ok: false });
    },
    logger: silentLogger,
    requestBody,
    retryDelayMs: 0,
    submissionId,
    timeoutMs: 10,
  });

  assert.deepEqual(result, { attempts: 1, errorCode: "UNAUTHORIZED", ok: false });
  assert.equal(calls, 1);
});

test("an explicit HTTP failure is not retried", async () => {
  let calls = 0;
  const result = await forwardFormSubmission({
    appsScriptUrl: endpoint,
    fetchImplementation: async () => {
      calls += 1;
      return new Response("Unavailable", { status: 503 });
    },
    logger: silentLogger,
    requestBody,
    retryDelayMs: 0,
    submissionId,
    timeoutMs: 10,
  });

  assert.deepEqual(result, { attempts: 1, errorCode: "HTTP_503", ok: false });
  assert.equal(calls, 1);
});

test("a duplicate response for another Submission ID is rejected", async () => {
  const result = await forwardFormSubmission({
    appsScriptUrl: endpoint,
    fetchImplementation: async () => jsonResponse({ duplicate: true, ok: true, submissionId: "sns_different-id-123456" }),
    logger: silentLogger,
    requestBody,
    retryDelayMs: 0,
    submissionId,
    timeoutMs: 10,
  });

  assert.deepEqual(result, { attempts: 1, errorCode: "INVALID_RESPONSE", ok: false });
});
