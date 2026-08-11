import {
  publicFormSchemas,
  publicFormTypes,
  type PublicFormFieldRule,
  type PublicFormType,
} from "@/lib/public-form-config";

export type NormalizedPublicFormPayload = Record<string, boolean | string>;

type ValidationResult =
  | { ok: true; payload: NormalizedPublicFormPayload }
  | { ok: false; reason: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizeString(value: string) {
  return value
    .normalize("NFKC")
    .replaceAll("\u0000", "")
    .replace(/\r\n?/g, "\n")
    .trim();
}

export function isPublicFormType(value: unknown): value is PublicFormType {
  return typeof value === "string" && publicFormTypes.includes(value as PublicFormType);
}

export function validatePublicFormPayload(formType: PublicFormType, input: unknown): ValidationResult {
  if (!isPlainRecord(input)) return { ok: false, reason: "Payload must be an object." };

  const schema = publicFormSchemas[formType] as Record<string, PublicFormFieldRule>;
  const allowedFields = new Set(Object.keys(schema));
  const unknownField = Object.keys(input).find((field) => !allowedFields.has(field));
  if (unknownField) return { ok: false, reason: "Payload contains an unsupported field." };

  const payload: NormalizedPublicFormPayload = {};

  for (const [field, rule] of Object.entries(schema)) {
    const value = input[field];

    if (rule.kind === "boolean") {
      if (typeof value !== "boolean") return { ok: false, reason: `${field} must be a boolean.` };
      if (rule.required && value !== true) return { ok: false, reason: `${field} is required.` };
      payload[field] = value;
      continue;
    }

    if (typeof value !== "string") return { ok: false, reason: `${field} must be a string.` };
    const normalized = normalizeString(value);
    if (rule.required && !normalized) return { ok: false, reason: `${field} is required.` };
    if (normalized.length > rule.maxLength) return { ok: false, reason: `${field} is too long.` };
    if (rule.email && normalized && !emailPattern.test(normalized)) return { ok: false, reason: `${field} is invalid.` };
    if (rule.allowed && normalized && !rule.allowed.includes(normalized)) return { ok: false, reason: `${field} is not an allowed value.` };
    payload[field] = normalized;
  }

  return { ok: true, payload };
}
