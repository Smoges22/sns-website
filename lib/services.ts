export type ServiceDefinition = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Primary Service" | "Ongoing Clinical Review";
  description: string;
  intro: string;
  whenNeeded: readonly string[];
  reviews: readonly string[];
  metaDescription: string;
  searchLabel: string;
  sample?: "assessment" | "care-plan";
};

export const serviceDefinitions: readonly ServiceDefinition[] = [
  {
    slug: "initial-rn-assessment",
    title: "Initial RN Assessment",
    shortTitle: "Initial RN Assessment",
    category: "Primary Service",
    description: "A comprehensive nursing assessment for a new admission, placement, or transition to an Adult Family Home.",
    intro: "SNS documents the person’s current health, functional, cognitive, behavioral, medication, safety, and personal-care needs. The assessment gives authorized providers and care teams a clear clinical picture for care planning and review.",
    whenNeeded: ["New Adult Family Home admission", "Hospital discharge to an AFH", "Assisted living to AFH transition", "Referral or placement evaluation", "Family preparing for AFH placement"],
    reviews: ["Medical history and diagnoses", "Medication profile", "Cognition and communication", "Mobility, transfers, and activities of daily living", "Continence and nutrition", "Behavioral needs and safety risks", "Emergency evacuation needs"],
    metaDescription: "Initial RN assessments for Adult Family Home admission, hospital discharge, placement, and care transitions in Washington.",
    searchLabel: "Initial RN assessment for an Adult Family Home",
    sample: "assessment",
  },
  {
    slug: "negotiated-care-plan",
    title: "Negotiated Care Plan",
    shortTitle: "Negotiated Care Plan",
    category: "Primary Service",
    description: "An individualized care plan that turns assessed needs into clear, practical direction for daily care.",
    intro: "SNS organizes assessment findings into person-centered guidance for authorized caregivers and providers. The plan reflects health needs, preferences, routines, risks, support instructions, and appropriate care approaches.",
    whenNeeded: ["After an initial RN assessment", "Before or shortly after AFH admission", "When care responsibilities need clarification", "When an existing plan no longer reflects current needs"],
    reviews: ["Assessed care needs and preferences", "Daily routines and personal-care support", "Medication and health-monitoring guidance", "Mobility and transfer support", "Safety precautions and response steps", "Caregiver responsibilities and communication"],
    metaDescription: "Negotiated and individualized care plans for Adult Family Homes, translating assessed needs into clear caregiver guidance.",
    searchLabel: "Negotiated care plan for an Adult Family Home",
    sample: "care-plan",
  },
  {
    slug: "annual-assessment-renewal",
    title: "Annual Assessment Renewal",
    shortTitle: "Annual Assessment Renewal",
    category: "Ongoing Clinical Review",
    description: "An updated RN assessment reviewing current status and changes since the previous assessment.",
    intro: "The annual renewal revisits the resident’s current clinical and daily-care needs. SNS compares available information with the prior assessment and documents meaningful changes for authorized review.",
    whenNeeded: ["Annual clinical review", "Updated medication or diagnosis review", "Changes since the prior assessment", "Preparation for an annual care-plan update"],
    reviews: ["Current health status", "Medication changes", "Function, mobility, and cognition", "Safety and behavioral needs", "Changes in personal-care support", "Items requiring care-plan updates"],
    metaDescription: "Annual AFH assessment renewal reviewing health, medications, function, cognition, safety, and changing care needs.",
    searchLabel: "Annual AFH assessment renewal",
  },
  {
    slug: "annual-patient-care-plan",
    title: "Annual Patient Care Plan",
    shortTitle: "Annual Care Plan",
    category: "Ongoing Clinical Review",
    description: "An annual review and update of the resident’s individualized or negotiated care plan.",
    intro: "SNS updates the care plan so it reflects the current assessment, preferences, support needs, safety considerations, and daily-care direction. The result is a current plan for authorized providers and caregivers.",
    whenNeeded: ["Annual care-plan review", "After an annual assessment renewal", "When prior instructions need updating", "When responsibilities or routines have changed"],
    reviews: ["Current assessment findings", "Daily-care instructions", "Resident preferences and routines", "Safety precautions", "Monitoring and communication needs", "Provider and caregiver responsibilities"],
    metaDescription: "Annual Adult Family Home care-plan updates based on current assessment findings, resident preferences, and daily support needs.",
    searchLabel: "Annual care plan for an Adult Family Home",
  },
  {
    slug: "90-day-supervisory-visit",
    title: "90-Day Supervisory Visit",
    shortTitle: "90-Day Supervisory Visit",
    category: "Ongoing Clinical Review",
    description: "An RN follow-up visit reviewing current condition, care delivery, support needs, and meaningful changes.",
    intro: "This focused visit provides a clinical check-in between broader assessment cycles. SNS reviews current status and care delivery, then documents observations and follow-up items within the agreed service scope.",
    whenNeeded: ["Scheduled 90-day clinical follow-up", "Review of current care delivery", "Follow-up after recent care changes", "Monitoring of new support needs"],
    reviews: ["Current condition and observations", "Care delivery and support needs", "Medication or treatment changes", "Mobility, function, and safety", "Caregiver questions", "Items requiring further clinical review"],
    metaDescription: "90-day RN supervisory visits for Adult Family Homes, reviewing current condition, care delivery, and changing support needs.",
    searchLabel: "90-day RN supervisory visit",
  },
  {
    slug: "change-in-condition-assessment",
    title: "Change in Condition Assessment",
    shortTitle: "Change in Condition Assessment",
    category: "Ongoing Clinical Review",
    description: "A focused RN reassessment after a significant change in health, function, cognition, behavior, mobility, or care needs.",
    intro: "SNS evaluates the reported change and documents how it affects current support and safety needs. This assessment is focused on the change while considering the resident’s broader clinical picture.",
    whenNeeded: ["Recent hospitalization", "Functional decline", "New cognitive or behavioral change", "Significant fall", "Major medication or care change"],
    reviews: ["Nature and timing of the change", "Current symptoms and clinical context", "Function, cognition, and behavior", "Mobility and safety risks", "Medication or treatment changes", "Updated support and care-planning needs"],
    metaDescription: "Change in condition RN assessments for AFH residents after hospitalization, decline, falls, or significant care changes.",
    searchLabel: "Change in condition assessment for an Adult Family Home",
  },
] as const;

export const primaryServices = serviceDefinitions.filter((service) => service.category === "Primary Service");
export const ongoingServices = serviceDefinitions.filter((service) => service.category === "Ongoing Clinical Review");

export const serviceNavigation = [
  { label: "Assessments", services: serviceDefinitions.filter((service) => ["initial-rn-assessment", "annual-assessment-renewal", "change-in-condition-assessment"].includes(service.slug)) },
  { label: "Care Planning & Follow-Up", services: serviceDefinitions.filter((service) => ["negotiated-care-plan", "annual-patient-care-plan", "90-day-supervisory-visit"].includes(service.slug)) },
] as const;

export function servicePath(service: ServiceDefinition) {
  return `/services/${service.slug}`;
}

export function getService(slug: string) {
  const service = serviceDefinitions.find((item) => item.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
