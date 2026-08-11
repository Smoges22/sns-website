/**
 * Sosena Nursing Solutions public website form endpoint.
 *
 * This endpoint is only for non-clinical business inquiries, assessment intake,
 * and professional referral coordination. It is not a clinical record system.
 */

const SNS_FORM_CONFIG = Object.freeze({
  contact: {
    sheetName: "Contact Leads",
    fields: [
      { key: "name", header: "Name", maxLength: 120, required: true },
      { key: "role", header: "Role / I Am A", maxLength: 120, required: true, allowed: ["Adult Family Home", "Referral / Placement Professional", "Hospital / Care Team", "Assisted Living", "Family", "Other"] },
      { key: "email", header: "Email", maxLength: 254, required: true, email: true },
      { key: "phone", header: "Phone", maxLength: 40 },
      { key: "message", header: "Message", maxLength: 1000, required: true },
    ],
  },
  assessment_request: {
    sheetName: "Assessment Requests",
    fields: [
      { key: "name", header: "Name", maxLength: 120, required: true },
      { key: "organization", header: "Organization / Facility", maxLength: 160 },
      { key: "requesterType", header: "Role", maxLength: 120, required: true, allowed: ["Adult Family Home", "Referral / Placement Professional", "Hospital / Care Team", "Assisted Living", "Family", "Other"] },
      { key: "email", header: "Email", maxLength: 254, required: true, email: true },
      { key: "phone", header: "Phone", maxLength: 40, required: true },
      { key: "service", header: "Primary Service", maxLength: 120, required: true, allowed: ["RN Assessment", "Individualized / Negotiated Care Plan", "Assessment + Care Plan", "Not Sure"] },
      { key: "context", header: "Reason / Timing", maxLength: 120, allowed: ["New admission / placement", "Annual reassessment", "Significant change in needs", "Care-plan update", "90-day assessment / care-plan review", "Other / Not Sure"] },
      { key: "timeline", header: "Preferred Timeline", maxLength: 120 },
      { key: "message", header: "Message / Additional Notes", maxLength: 1000 },
      { key: "consent", header: "Consent", boolean: true, required: true },
    ],
  },
  client_referral: {
    sheetName: "Client Referrals",
    fields: [
      { key: "referrerName", header: "Referring Contact Name", maxLength: 120, required: true },
      { key: "organization", header: "Organization", maxLength: 160, required: true },
      { key: "role", header: "Role", maxLength: 120, required: true },
      { key: "email", header: "Email", maxLength: 254, required: true, email: true },
      { key: "phone", header: "Phone", maxLength: 40, required: true },
      { key: "currentSetting", header: "Current Setting", maxLength: 120, required: true, allowed: ["Hospital / Care Setting", "Assisted Living Community", "Adult Family Home", "Private Residence", "Other / Not Sure"] },
      { key: "referralContext", header: "Referral Context", maxLength: 160, required: true, allowed: ["Prospective Adult Family Home Admission", "Hospital or Care-Setting Discharge", "Transition Between Residential Care Settings", "Current Resident Follow-Up", "Other / Not Sure"] },
      { key: "service", header: "Primary Service", maxLength: 120, required: true, allowed: ["RN Assessment", "Individualized / Negotiated Care Plan", "Assessment + Care Plan", "Not Sure"] },
      { key: "context", header: "Reason / Timing", maxLength: 120, allowed: ["New admission / placement", "Annual reassessment", "Significant change in needs", "Care-plan update", "90-day assessment / care-plan review", "Other / Not Sure"] },
      { key: "timeline", header: "Preferred Timeline", maxLength: 120 },
      { key: "location", header: "Service Location", maxLength: 200, required: true },
      { key: "message", header: "Message / Referral Notes", maxLength: 1000 },
      { key: "authorization", header: "Consent", boolean: true, required: true },
    ],
  },
});

const SNS_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function doPost(event) {
  try {
    if (!event || !event.postData || typeof event.postData.contents !== "string") {
      throw snsApiError("VALIDATION_ERROR", "A JSON request body is required.");
    }
    if (event.postData.contents.length > 25000) {
      throw snsApiError("VALIDATION_ERROR", "The request is too large.");
    }

    let request;
    try {
      request = JSON.parse(event.postData.contents);
    } catch (_error) {
      throw snsApiError("VALIDATION_ERROR", "The request body must be valid JSON.");
    }

    if (!snsIsPlainObject(request)) {
      throw snsApiError("VALIDATION_ERROR", "The request body is invalid.");
    }

    snsRejectUnknownFields(request, ["formType", "payload", "secret", "sourcePage", "submissionId", "userAgent"]);

    const properties = PropertiesService.getScriptProperties();
    const expectedSecret = properties.getProperty("SNS_FORMS_SHARED_SECRET");
    const spreadsheetId = properties.getProperty("SNS_SPREADSHEET_ID");
    if (!expectedSecret || !spreadsheetId) throw snsApiError("SERVER_ERROR");
    if (!snsSecretsEqual(request.secret, expectedSecret)) throw snsApiError("UNAUTHORIZED");

    const config = SNS_FORM_CONFIG[request.formType];
    if (!config) throw snsApiError("VALIDATION_ERROR", "Unsupported form type.");

    const submissionId = snsNormalizeString(request.submissionId, 80, true);
    if (!/^sns_[A-Za-z0-9-]{12,76}$/.test(submissionId)) {
      throw snsApiError("VALIDATION_ERROR", "Invalid submission ID.");
    }

    const sourcePage = snsNormalizeString(request.sourcePage, 200, true);
    const userAgent = snsNormalizeString(request.userAgent || "", 500, false);
    const payload = snsValidatePayload(request.payload, config.fields);
    const headers = ["Timestamp", "Submission ID"]
      .concat(config.fields.map(function (field) { return field.header; }))
      .concat(["Source Page", "User Agent", "Status"]);

    const lock = LockService.getScriptLock();
    if (!lock.tryLock(10000)) throw snsApiError("SERVER_ERROR");

    try {
      const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
      const sheet = spreadsheet.getSheetByName(config.sheetName) || spreadsheet.insertSheet(config.sheetName);
      snsEnsureHeaders(sheet, headers);

      if (snsSubmissionExists(sheet, submissionId)) {
        return snsJsonResponse({ ok: true, submissionId: submissionId, message: "Submission received." });
      }

      const row = [new Date(), submissionId]
        .concat(config.fields.map(function (field) {
          const value = payload[field.key];
          return field.boolean ? (value ? "Yes" : "No") : snsSafeSheetText(value);
        }))
        .concat([snsSafeSheetText(sourcePage), snsSafeSheetText(userAgent), "New"]);

      sheet.getRange(sheet.getLastRow() + 1, 1, 1, row.length).setValues([row]);
      SpreadsheetApp.flush();
      return snsJsonResponse({ ok: true, submissionId: submissionId, message: "Submission received." });
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    if (error && error.snsCode === "UNAUTHORIZED") {
      return snsJsonResponse({ ok: false, error: "UNAUTHORIZED" });
    }
    if (error && error.snsCode === "VALIDATION_ERROR") {
      return snsJsonResponse({ ok: false, error: "VALIDATION_ERROR", message: error.message || "The submission is invalid." });
    }
    return snsJsonResponse({ ok: false, error: "SERVER_ERROR" });
  }
}

function snsValidatePayload(payload, fields) {
  if (!snsIsPlainObject(payload)) throw snsApiError("VALIDATION_ERROR", "Payload must be an object.");
  snsRejectUnknownFields(payload, fields.map(function (field) { return field.key; }));

  const normalized = {};
  fields.forEach(function (field) {
    const value = payload[field.key];
    if (field.boolean) {
      if (typeof value !== "boolean" || (field.required && value !== true)) {
        throw snsApiError("VALIDATION_ERROR", field.header + " is required.");
      }
      normalized[field.key] = value;
      return;
    }

    const text = snsNormalizeString(value === undefined && !field.required ? "" : value, field.maxLength, Boolean(field.required));
    if (field.email && text && !SNS_EMAIL_PATTERN.test(text)) {
      throw snsApiError("VALIDATION_ERROR", "Email is invalid.");
    }
    if (field.allowed && text && field.allowed.indexOf(text) === -1) {
      throw snsApiError("VALIDATION_ERROR", field.header + " is not an allowed value.");
    }
    normalized[field.key] = text;
  });
  return normalized;
}

function snsNormalizeString(value, maxLength, required) {
  if (typeof value !== "string") throw snsApiError("VALIDATION_ERROR", "A text field is invalid.");
  const normalized = value.normalize("NFKC").replace(/\u0000/g, "").replace(/\r\n?/g, "\n").trim();
  if (required && !normalized) throw snsApiError("VALIDATION_ERROR", "A required field is missing.");
  if (normalized.length > maxLength) throw snsApiError("VALIDATION_ERROR", "A field is too long.");
  return normalized;
}

function snsSafeSheetText(value) {
  if (typeof value !== "string") return value;
  return /^\s*[=+\-@]/.test(value) ? "'" + value : value;
}

function snsEnsureHeaders(sheet, headers) {
  const existing = sheet.getRange(1, 1, 1, headers.length).getDisplayValues()[0];
  const isBlank = existing.every(function (value) { return !value; });
  if (isBlank) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight("bold");
  } else if (existing.some(function (value, index) { return value !== headers[index]; })) {
    throw snsApiError("SERVER_ERROR");
  }
  if (sheet.getFrozenRows() < 1) sheet.setFrozenRows(1);
}

function snsSubmissionExists(sheet, submissionId) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return false;
  return Boolean(
    sheet.getRange(2, 2, lastRow - 1, 1)
      .createTextFinder(submissionId)
      .matchEntireCell(true)
      .findNext(),
  );
}

function snsRejectUnknownFields(object, allowedFields) {
  const allowed = {};
  allowedFields.forEach(function (field) { allowed[field] = true; });
  if (Object.keys(object).some(function (field) { return !allowed[field]; })) {
    throw snsApiError("VALIDATION_ERROR", "The request contains an unsupported field.");
  }
}

function snsSecretsEqual(provided, expected) {
  if (typeof provided !== "string" || typeof expected !== "string" || provided.length !== expected.length) return false;
  let difference = 0;
  for (let index = 0; index < provided.length; index += 1) {
    difference |= provided.charCodeAt(index) ^ expected.charCodeAt(index);
  }
  return difference === 0;
}

function snsIsPlainObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

function snsApiError(code, message) {
  const error = new Error(message || "");
  error.snsCode = code;
  return error;
}

function snsJsonResponse(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
