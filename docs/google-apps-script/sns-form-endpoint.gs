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

const SNS_NOTIFICATION_CONFIG = Object.freeze({
  contact: {
    leadType: "Contact",
    title: "New Contact Lead",
    subjectPrefix: "New SNS Contact Lead",
    subjectKeys: ["name"],
    replyToSubmittedEmail: true,
    sections: [
      {
        title: "Contact Details",
        fields: [
          { key: "name", label: "Name" },
          { key: "role", label: "Role / I Am A" },
          { key: "email", label: "Email" },
          { key: "phone", label: "Phone" },
          { key: "message", label: "Message" },
        ],
      },
    ],
  },
  assessment_request: {
    leadType: "Assessment Request",
    title: "New Assessment Request",
    subjectPrefix: "New SNS Assessment Request",
    subjectKeys: ["name"],
    sections: [
      {
        title: "Contact Details",
        fields: [
          { key: "name", label: "Name" },
          { key: "organization", label: "Organization / Facility" },
          { key: "requesterType", label: "Role" },
          { key: "email", label: "Email" },
          { key: "phone", label: "Phone" },
        ],
      },
      {
        title: "Request Details",
        fields: [
          { key: "service", label: "Primary Service" },
          { key: "context", label: "Reason / Timing" },
          { key: "timeline", label: "Preferred Timeline" },
          { key: "message", label: "Message / Additional Notes" },
        ],
      },
    ],
  },
  client_referral: {
    leadType: "Client Referral",
    title: "New Client Referral",
    subjectPrefix: "New SNS Client Referral",
    subjectKeys: ["organization", "referrerName"],
    sections: [
      {
        title: "Referring Professional",
        fields: [
          { key: "referrerName", label: "Referring Contact Name" },
          { key: "organization", label: "Organization" },
          { key: "role", label: "Role" },
          { key: "email", label: "Email" },
          { key: "phone", label: "Phone" },
        ],
      },
      {
        title: "Referral Details",
        fields: [
          { key: "currentSetting", label: "Current Setting" },
          { key: "referralContext", label: "Referral Context" },
          { key: "service", label: "Primary Service" },
          { key: "context", label: "Reason / Timing" },
          { key: "timeline", label: "Preferred Timeline" },
          { key: "location", label: "Service Location" },
          { key: "message", label: "Message / Referral Notes" },
        ],
      },
    ],
  },
});

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

    // These request fields remain accepted for backward compatibility with the
    // website API, but they are intentionally not persisted or trusted.
    snsNormalizeString(request.sourcePage, 200, true);
    snsNormalizeString(request.userAgent || "", 500, false);
    const payload = snsValidatePayload(request.payload, config.fields);
    const preferredHeaders = snsPreferredHeaders(config);

    const lock = LockService.getScriptLock();
    if (!lock.tryLock(10000)) throw snsApiError("SERVER_ERROR");

    let persistedTimestamp;

    try {
      const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
      const sheet = spreadsheet.getSheetByName(config.sheetName) || spreadsheet.insertSheet(config.sheetName);
      const layout = snsEnsureHeaders(sheet, preferredHeaders);

      if (snsSubmissionExists(sheet, submissionId, layout.indexByHeader["Submission ID"] + 1)) {
        return snsJsonResponse({ ok: true, submissionId: submissionId, message: "Submission received." });
      }

      persistedTimestamp = new Date();
      const valuesByHeader = {
        "Timestamp": persistedTimestamp,
        "Submission ID": submissionId,
        "Status": "New",
      };
      config.fields.forEach(function (field) {
        const value = payload[field.key];
        valuesByHeader[field.header] = field.boolean ? (value ? "Yes" : "No") : snsSafeSheetText(value);
      });
      const row = layout.headers.map(function (header) {
        return Object.prototype.hasOwnProperty.call(valuesByHeader, header) ? valuesByHeader[header] : "";
      });

      const targetRow = sheet.getLastRow() + 1;
      sheet.getRange(targetRow, 1, 1, row.length).setValues([row]);
      SpreadsheetApp.flush();
      if (sheet.getRange(targetRow, layout.indexByHeader["Submission ID"] + 1).getDisplayValue() !== submissionId) {
        throw snsApiError("SERVER_ERROR");
      }
    } finally {
      lock.releaseLock();
    }

    snsTrySendLeadNotification(request.formType, payload, submissionId, persistedTimestamp, properties);
    return snsJsonResponse({ ok: true, submissionId: submissionId, message: "Submission received." });
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

function snsTrySendLeadNotification(formType, payload, submissionId, timestamp, properties) {
  try {
    const config = SNS_NOTIFICATION_CONFIG[formType];
    if (!config) return;

    const recipient = (properties.getProperty("SNS_LEAD_NOTIFICATION_EMAIL") || "").trim();
    if (!SNS_EMAIL_PATTERN.test(recipient)) {
      console.warn("Notification skipped for submission: " + submissionId + " (recipient not configured)");
      return;
    }

    if (MailApp.getRemainingDailyQuota() < 1) {
      console.warn("Notification skipped for submission: " + submissionId + " (daily quota unavailable)");
      return;
    }

    const sheetUrl = snsSafeLeadsSheetUrl(properties.getProperty("SNS_LEADS_SHEET_URL") || "");
    const notification = snsBuildLeadNotification(config, payload, submissionId, timestamp, sheetUrl);
    const message = {
      to: recipient,
      subject: notification.subject,
      body: notification.body,
      htmlBody: notification.htmlBody,
      name: "Sosena Nursing Solutions",
    };

    if (config.replyToSubmittedEmail && SNS_EMAIL_PATTERN.test(payload.email)) {
      message.replyTo = payload.email;
    }

    MailApp.sendEmail(message);
    console.log("Notification sent for submission: " + submissionId);
  } catch (_error) {
    console.error("Notification failed for submission: " + submissionId);
  }
}

function snsBuildLeadNotification(config, payload, submissionId, timestamp, sheetUrl) {
  const subjectValue = snsNotificationSubjectValue(payload, config.subjectKeys);
  const subject = config.subjectPrefix + " \u2014 " + subjectValue;
  const timestampText = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "MMM d, yyyy h:mm a z");
  const privacyNotice = "Please do not send protected health information or detailed medical records by ordinary email. Use SNS's approved clinical-record sharing process when requested.";
  const bodyLines = [
    "SNS WEBSITE LEAD",
    "",
    config.title,
    "Lead Type: " + config.leadType,
    "",
  ];

  const htmlSections = config.sections.map(function (section) {
    bodyLines.push(section.title);
    const rows = section.fields.map(function (field) {
      const displayValue = snsNotificationDisplayValue(payload[field.key]);
      bodyLines.push(field.label + ": " + displayValue);
      return '<tr>'
        + '<td style="width:34%;padding:9px 12px;border-bottom:1px solid #E3EAEE;vertical-align:top;color:#526675;font-size:13px;font-weight:700;">' + snsEscapeHtml(field.label) + '</td>'
        + '<td style="padding:9px 12px;border-bottom:1px solid #E3EAEE;vertical-align:top;color:#17324D;font-size:14px;line-height:1.55;">' + snsEscapeHtml(displayValue).replace(/\n/g, "<br>") + '</td>'
        + '</tr>';
    }).join("");
    bodyLines.push("");
    return '<h2 style="margin:24px 0 8px;color:#17324D;font-family:Arial,sans-serif;font-size:16px;line-height:1.3;">' + snsEscapeHtml(section.title) + '</h2>'
      + '<table role="presentation" style="width:100%;border-collapse:collapse;border:1px solid #D7E2E7;border-radius:8px;">' + rows + '</table>';
  }).join("");

  bodyLines.push("Submission ID: " + submissionId);
  bodyLines.push("Timestamp: " + timestampText);
  if (sheetUrl) bodyLines.push("Open SNS Website Leads: " + sheetUrl);
  bodyLines.push("");
  bodyLines.push(privacyNotice);

  const sheetLink = sheetUrl
    ? '<p style="margin:24px 0 0;"><a href="' + snsEscapeHtml(sheetUrl) + '" style="display:inline-block;border-radius:8px;background:#137F8D;color:#FFFFFF;padding:11px 16px;font-family:Arial,sans-serif;font-size:14px;font-weight:700;text-decoration:none;">Open SNS Website Leads</a></p>'
    : "";

  const htmlBody = '<!doctype html><html><body style="margin:0;background:#F3F6F7;padding:0;">'
    + '<table role="presentation" style="width:100%;border-collapse:collapse;background:#F3F6F7;"><tr><td align="center" style="padding:24px 12px;">'
    + '<table role="presentation" style="width:100%;max-width:640px;border-collapse:separate;border-spacing:0;overflow:hidden;border:1px solid #D7E2E7;border-radius:12px;background:#FFFFFF;">'
    + '<tr><td style="background:#17324D;padding:22px 24px;color:#FFFFFF;">'
    + '<p style="margin:0;color:#BFE8EC;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;">Sosena Nursing Solutions</p>'
    + '<p style="margin:7px 0 0;font-family:Arial,sans-serif;font-size:20px;font-weight:700;">SNS Website Lead</p>'
    + '</td></tr>'
    + '<tr><td style="padding:24px;">'
    + '<span style="display:inline-block;border-radius:999px;background:#EAF5F6;color:#0F6F7A;padding:6px 10px;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;">' + snsEscapeHtml(config.leadType) + '</span>'
    + '<h1 style="margin:12px 0 0;color:#17324D;font-family:Georgia,serif;font-size:27px;line-height:1.2;">' + snsEscapeHtml(config.title) + '</h1>'
    + htmlSections
    + '<table role="presentation" style="width:100%;margin-top:24px;border-collapse:collapse;background:#F3F6F7;"><tr><td style="padding:12px;color:#526675;font-family:Arial,sans-serif;font-size:12px;line-height:1.6;">'
    + '<strong style="color:#17324D;">Submission ID:</strong> ' + snsEscapeHtml(submissionId) + '<br>'
    + '<strong style="color:#17324D;">Timestamp:</strong> ' + snsEscapeHtml(timestampText)
    + '</td></tr></table>'
    + sheetLink
    + '</td></tr>'
    + '<tr><td style="border-top:1px solid #D7E2E7;background:#F8FAFB;padding:18px 24px;color:#647786;font-family:Arial,sans-serif;font-size:11px;line-height:1.6;">' + snsEscapeHtml(privacyNotice) + '</td></tr>'
    + '</table></td></tr></table></body></html>';

  return { subject: subject, body: bodyLines.join("\n"), htmlBody: htmlBody };
}

function snsNotificationSubjectValue(payload, keys) {
  for (let index = 0; index < keys.length; index += 1) {
    const value = payload[keys[index]];
    if (typeof value === "string" && value.trim()) {
      return value.replace(/[\r\n]+/g, " ").trim().slice(0, 160);
    }
  }
  return "Website Lead";
}

function snsNotificationDisplayValue(value) {
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return typeof value === "string" && value ? value : "Not provided";
}

function snsSafeLeadsSheetUrl(value) {
  const normalized = typeof value === "string" ? value.trim() : "";
  return /^https:\/\/docs\.google\.com\/spreadsheets\/d\/[A-Za-z0-9_-]+(?:\/.*)?$/.test(normalized) ? normalized : "";
}

function snsEscapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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

function snsPreferredHeaders(config) {
  const operationalHeaders = [];
  const auditHeaders = [];
  config.fields.forEach(function (field) {
    if (field.boolean) auditHeaders.push(field.header);
    else operationalHeaders.push(field.header);
  });
  return ["Timestamp"]
    .concat(operationalHeaders)
    .concat(["Status"])
    .concat(auditHeaders)
    .concat(["Submission ID"]);
}

function snsEnsureHeaders(sheet, preferredHeaders) {
  let headers;
  if (sheet.getLastRow() < 1 || sheet.getLastColumn() < 1) {
    headers = preferredHeaders.slice();
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight("bold");
  } else {
    headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getDisplayValues()[0]
      .map(function (header) { return header.trim(); });
    const allowedHeaders = preferredHeaders.concat(["Source Page", "User Agent"]);
    const counts = {};
    headers.forEach(function (header) { counts[header] = (counts[header] || 0) + 1; });
    const hasInvalidHeader = headers.some(function (header) {
      return !header || allowedHeaders.indexOf(header) === -1 || counts[header] !== 1;
    });
    const isMissingRequiredHeader = preferredHeaders.some(function (header) { return counts[header] !== 1; });
    if (hasInvalidHeader || isMissingRequiredHeader) throw snsApiError("SERVER_ERROR");
  }
  if (sheet.getFrozenRows() < 1) sheet.setFrozenRows(1);

  const indexByHeader = {};
  headers.forEach(function (header, index) { indexByHeader[header] = index; });
  return { headers: headers, indexByHeader: indexByHeader };
}

function snsSubmissionExists(sheet, submissionId, submissionIdColumn) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return false;
  return Boolean(
    sheet.getRange(2, submissionIdColumn, lastRow - 1, 1)
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
