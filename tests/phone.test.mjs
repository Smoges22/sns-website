import assert from "node:assert/strict";
import test from "node:test";
import { formatUsPhoneInput, isValidUsPhoneNumber, normalizeUsPhoneNumber } from "../lib/phone.ts";

const normalizedPhone = "(206) 555-1234";

for (const input of [
  "2065551234",
  "206-555-1234",
  "206 555 1234",
  "(206) 555-1234",
  "+1 206 555 1234",
  "+12065551234",
  "12065551234",
]) {
  test(`normalizes ${input} to the standard U.S. display`, () => {
    assert.equal(normalizeUsPhoneNumber(input), normalizedPhone);
  });
}

test("progressively formats digits while typing", () => {
  assert.deepEqual(
    ["2", "20", "206", "2065", "206555", "2065551", "2065551234"].map(formatUsPhoneInput),
    ["2", "20", "206", "(206) 5", "(206) 555", "(206) 555-1", normalizedPhone],
  );
});

test("blank optional phone is valid but blank required phone is not", () => {
  assert.equal(isValidUsPhoneNumber(""), true);
  assert.equal(isValidUsPhoneNumber("", { required: true }), false);
});

test("rejects unsupported phone values", () => {
  assert.equal(normalizeUsPhoneNumber("206555123"), null);
  assert.equal(normalizeUsPhoneNumber("20655512345"), null);
  assert.equal(normalizeUsPhoneNumber("call 2065551234"), null);
});
