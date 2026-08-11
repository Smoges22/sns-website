export const publicFormTypes = ["contact", "assessment_request", "client_referral"] as const;

export type PublicFormType = (typeof publicFormTypes)[number];

export const contactRoleOptions = [
  "Adult Family Home",
  "Referral / Placement Professional",
  "Hospital / Care Team",
  "Assisted Living",
  "Family",
  "Other",
] as const;

export const requesterOptions = contactRoleOptions;

export const serviceOptions = [
  "RN Assessment",
  "Individualized / Negotiated Care Plan",
  "Assessment + Care Plan",
  "Not Sure",
] as const;

export const contextOptions = [
  "New admission / placement",
  "Annual reassessment",
  "Significant change in needs",
  "Care-plan update",
  "90-day assessment / care-plan review",
  "Other / Not Sure",
] as const;

export const currentSettingOptions = [
  "Hospital / Care Setting",
  "Assisted Living Community",
  "Adult Family Home",
  "Private Residence",
  "Other / Not Sure",
] as const;

export const referralContextOptions = [
  "Prospective Adult Family Home Admission",
  "Hospital or Care-Setting Discharge",
  "Transition Between Residential Care Settings",
  "Current Resident Follow-Up",
  "Other / Not Sure",
] as const;

type StringFieldRule = {
  allowed?: readonly string[];
  email?: boolean;
  kind: "string";
  maxLength: number;
  required?: boolean;
};

type BooleanFieldRule = {
  kind: "boolean";
  required?: boolean;
};

export type PublicFormFieldRule = StringFieldRule | BooleanFieldRule;

export const publicFormSchemas = {
  contact: {
    name: { kind: "string", maxLength: 120, required: true },
    role: { allowed: contactRoleOptions, kind: "string", maxLength: 120, required: true },
    email: { email: true, kind: "string", maxLength: 254, required: true },
    phone: { kind: "string", maxLength: 40 },
    message: { kind: "string", maxLength: 1000, required: true },
  },
  assessment_request: {
    name: { kind: "string", maxLength: 120, required: true },
    organization: { kind: "string", maxLength: 160 },
    email: { email: true, kind: "string", maxLength: 254, required: true },
    phone: { kind: "string", maxLength: 40, required: true },
    requesterType: { allowed: requesterOptions, kind: "string", maxLength: 120, required: true },
    service: { allowed: serviceOptions, kind: "string", maxLength: 120, required: true },
    context: { allowed: contextOptions, kind: "string", maxLength: 120 },
    timeline: { kind: "string", maxLength: 120 },
    message: { kind: "string", maxLength: 1000 },
    consent: { kind: "boolean", required: true },
  },
  client_referral: {
    referrerName: { kind: "string", maxLength: 120, required: true },
    organization: { kind: "string", maxLength: 160, required: true },
    role: { kind: "string", maxLength: 120, required: true },
    email: { email: true, kind: "string", maxLength: 254, required: true },
    phone: { kind: "string", maxLength: 40, required: true },
    currentSetting: { allowed: currentSettingOptions, kind: "string", maxLength: 120, required: true },
    referralContext: { allowed: referralContextOptions, kind: "string", maxLength: 160, required: true },
    service: { allowed: serviceOptions, kind: "string", maxLength: 120, required: true },
    context: { allowed: contextOptions, kind: "string", maxLength: 120 },
    timeline: { kind: "string", maxLength: 120 },
    location: { kind: "string", maxLength: 200, required: true },
    message: { kind: "string", maxLength: 1000 },
    authorization: { kind: "boolean", required: true },
  },
} as const satisfies Record<PublicFormType, Record<string, PublicFormFieldRule>>;

export const publicFormFieldNames = {
  contact: Object.keys(publicFormSchemas.contact),
  assessment_request: Object.keys(publicFormSchemas.assessment_request),
  client_referral: Object.keys(publicFormSchemas.client_referral),
} as const;
