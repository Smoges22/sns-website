const permittedPhoneCharacters = /^[\d\s()+.-]+$/;

function nationalPhoneDigits(value: string) {
  const normalized = value.normalize("NFKC").trim();
  if (!normalized) return "";
  if (!permittedPhoneCharacters.test(normalized)) return null;

  const digits = normalized.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) return digits.slice(1);
  return digits.length === 10 ? digits : null;
}

function formatNationalPhoneDigits(digits: string) {
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function normalizeUsPhoneNumber(value: string) {
  const digits = nationalPhoneDigits(value);
  if (digits === null) return null;
  return digits ? formatNationalPhoneDigits(digits) : "";
}

export function isValidUsPhoneNumber(value: string, { required = false } = {}) {
  const normalized = normalizeUsPhoneNumber(value);
  return normalized !== null && (!required || normalized !== "");
}

export function formatUsPhoneInput(value: string) {
  const normalized = value.normalize("NFKC").replaceAll("\u0000", "");
  if (!normalized || !permittedPhoneCharacters.test(normalized)) return normalized;
  if (/^\s*\+1?[\s().-]*$/.test(normalized)) return normalized.trim();

  let digits = normalized.replace(/\D/g, "");
  const hasExplicitCountryCode = normalized.trimStart().startsWith("+1");
  if ((hasExplicitCountryCode || digits.length === 11) && digits.startsWith("1")) {
    digits = digits.slice(1);
  }
  if (digits.length > 10) return normalized;
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}
