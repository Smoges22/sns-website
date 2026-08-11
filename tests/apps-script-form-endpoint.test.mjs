import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const scriptSource = await readFile(new URL("../docs/google-apps-script/sns-form-endpoint.gs", import.meta.url), "utf8");
const headers = ["Timestamp", "Name", "Role / I Am A", "Email", "Phone", "Message", "Status", "Submission ID"];

function createHarness({ mailFails = false } = {}) {
  const rows = [headers.slice()];
  let mailAttempts = 0;
  const mailMessages = [];

  function getRange(row, column, rowCount = 1, columnCount = 1) {
    return {
      createTextFinder(value) {
        return {
          matchEntireCell() { return this; },
          findNext() {
            return rows.slice(1).some((entry) => entry[column - 1] === value) ? {} : null;
          },
        };
      },
      getDisplayValue() {
        return String(rows[row - 1]?.[column - 1] ?? "");
      },
      getDisplayValues() {
        return Array.from({ length: rowCount }, (_, rowOffset) =>
          Array.from({ length: columnCount }, (_, columnOffset) =>
            String(rows[row - 1 + rowOffset]?.[column - 1 + columnOffset] ?? ""),
          ),
        );
      },
      setFontWeight() { return this; },
      setValues(values) {
        values.forEach((valuesRow, rowOffset) => {
          const target = row - 1 + rowOffset;
          rows[target] ??= [];
          valuesRow.forEach((value, columnOffset) => { rows[target][column - 1 + columnOffset] = value; });
        });
        return this;
      },
    };
  }

  const sheet = {
    getFrozenRows: () => 1,
    getLastColumn: () => headers.length,
    getLastRow: () => rows.length,
    getRange,
    setFrozenRows() {},
  };
  const context = vm.createContext({
    console: { error() {}, log() {}, warn() {} },
    ContentService: {
      MimeType: { JSON: "application/json" },
      createTextOutput(text) {
        return { text, setMimeType() { return this; } };
      },
    },
    LockService: { getScriptLock: () => ({ releaseLock() {}, tryLock: () => true }) },
    MailApp: {
      getRemainingDailyQuota: () => 100,
      sendEmail(message) {
        mailAttempts += 1;
        mailMessages.push(message);
        if (mailFails) throw new Error("Synthetic mail failure");
      },
    },
    PropertiesService: {
      getScriptProperties: () => ({
        getProperty(key) {
          return {
            SNS_FORMS_SHARED_SECRET: "test-secret",
            SNS_LEAD_NOTIFICATION_EMAIL: "notifications@example.com",
            SNS_SPREADSHEET_ID: "test-sheet",
          }[key] ?? "";
        },
      }),
    },
    Session: { getScriptTimeZone: () => "America/Los_Angeles" },
    SpreadsheetApp: {
      flush() {},
      openById: () => ({ getSheetByName: () => sheet, insertSheet: () => sheet }),
    },
    Utilities: { formatDate: () => "Aug 11, 2026 12:00 PM PDT" },
  });
  vm.runInContext(scriptSource, context);

  function submit(submissionId) {
    const request = {
      formType: "contact",
      payload: {
        email: "fictional@example.com",
        message: "Fictional non-clinical test",
        name: "Fictional Test",
        phone: "(206) 555-0100",
        role: "Family",
      },
      secret: "test-secret",
      sourcePage: "/contact",
      submissionId,
      userAgent: "test-agent",
    };
    return JSON.parse(context.doPost({ postData: { contents: JSON.stringify(request) } }).text);
  }

  return { get mailAttempts() { return mailAttempts; }, mailMessages, rows, submit };
}

test("an exact duplicate confirms capture without another row or email", () => {
  const harness = createHarness();
  const submissionId = "sns_12345678-1234-1234-1234-123456789abc";

  const first = harness.submit(submissionId);
  const duplicate = harness.submit(submissionId);

  assert.deepEqual(first, { message: "Submission received.", ok: true, submissionId });
  assert.deepEqual(duplicate, { duplicate: true, message: "Submission received.", ok: true, submissionId });
  assert.equal(harness.rows.length, 2);
  assert.equal(harness.rows[1][headers.indexOf("Status")], "New");
  assert.equal(harness.mailAttempts, 1);
});

test("MailApp failure remains non-blocking after Sheet persistence", () => {
  const harness = createHarness({ mailFails: true });
  const submissionId = "sns_abcdef12-3456-7890-abcd-ef1234567890";

  const result = harness.submit(submissionId);

  assert.deepEqual(result, { message: "Submission received.", ok: true, submissionId });
  assert.equal(harness.rows.length, 2);
  assert.equal(harness.rows[1][headers.indexOf("Status")], "New");
  assert.equal(harness.mailAttempts, 1);
});

test("the server-normalized phone reaches the Sheet and notification email unchanged", () => {
  const harness = createHarness();
  const submissionId = "sns_24681357-1357-2468-abcd-246813572468";

  const result = harness.submit(submissionId);

  assert.equal(result.ok, true);
  assert.equal(harness.rows[1][headers.indexOf("Phone")], "(206) 555-0100");
  assert.match(harness.mailMessages[0].body, /Phone: \(206\) 555-0100/);
});
