export type ServiceDefinition = {
  slug: string;
  title: string;
  shortTitle: string;
  navigationLabel: string;
  category: "Primary Service" | "Supporting Context";
  contextType: "assessment" | "care-plan" | "assessment-care-plan";
  description: string;
  intro: string;
  whenNeeded: readonly string[];
  reviews: readonly string[];
  metaDescription: string;
  searchLabel: string;
  detailCta: string;
  relatedPrimaryServices?: readonly string[];
  sample?: "assessment" | "care-plan";
};

export const serviceDefinitions: readonly ServiceDefinition[] = [
  {
    slug: "initial-rn-assessment",
    title: "Initial RN Assessment",
    shortTitle: "Initial RN Assessment",
    navigationLabel: "RN Assessment",
    category: "Primary Service",
    contextType: "assessment",
    description: "A comprehensive nursing assessment for a new admission, placement, or transition to an Adult Family Home.",
    intro: "SNS documents assessment context, health history, diagnoses and treatments, medications and allergies, cognition and communication, psychosocial and behavioral needs, physical health, mobility, daily-living support, nutrition, safety, therapies, and emergency-evacuation needs. The assessment gives authorized providers and care teams a clear clinical picture for care planning and review.",
    whenNeeded: ["New Adult Family Home admission", "Hospital discharge to an AFH", "Assisted living to AFH transition", "Referral or placement evaluation", "Family preparing for AFH placement"],
    reviews: ["Assessment context, health history, diagnoses, and treatments", "Medication profile, allergies, and assistance needs", "Cognition, decision-making, communication, and psychosocial screening", "Sensory, cardiopulmonary, physical-system, skin, and pain review", "Mobility, transfers, continence, nutrition, sleep, and activities of daily living", "Behavioral needs, safety concerns, therapies, and emergency evacuation"],
    metaDescription: "Initial RN assessments for Adult Family Home admission, hospital discharge, placement, and care transitions in Washington.",
    searchLabel: "Initial RN assessment for an Adult Family Home",
    detailCta: "View RN assessment",
    sample: "assessment",
  },
  {
    slug: "negotiated-care-plan",
    title: "Negotiated Care Plan",
    shortTitle: "Negotiated Care Plan",
    navigationLabel: "Individualized / Negotiated Care Plan",
    category: "Primary Service",
    contextType: "care-plan",
    description: "An individualized care plan that turns assessed needs into clear, practical direction for daily care.",
    intro: "SNS organizes assessment findings into person-centered guidance for authorized caregivers and providers. The plan connects each care need with resident strengths and preferences, the assistance to be provided, who provides it, and when and how support should occur.",
    whenNeeded: ["After an initial RN assessment", "Before or shortly after AFH admission", "When care responsibilities need clarification", "When an existing plan no longer reflects current needs"],
    reviews: ["Communication, cognition, behavior, strengths, and preferences", "Medication management, administration, monitoring, treatments, and therapies", "Mobility, transfers, eating, toileting, bathing, hygiene, dressing, and body care", "Activities, transportation, community access, and case-management needs", "Safety precautions, emergency needs, caregiver responsibilities, timing, and review expectations"],
    metaDescription: "Negotiated and individualized care plans for Adult Family Homes, translating assessed needs into clear caregiver guidance.",
    searchLabel: "Negotiated care plan for an Adult Family Home",
    detailCta: "View care-plan details",
    sample: "care-plan",
  },
  {
    slug: "annual-assessment-renewal",
    title: "Annual Reassessment",
    shortTitle: "Annual Reassessment",
    navigationLabel: "Annual Reassessment",
    category: "Supporting Context",
    contextType: "assessment",
    description: "An updated RN assessment reviewing current status and changes since the previous assessment.",
    intro: "The annual reassessment revisits the resident’s current clinical and daily-care needs. SNS compares available information with the prior assessment and documents meaningful changes for authorized review.",
    whenNeeded: ["Annual clinical review", "Updated medication or diagnosis review", "Changes since the prior assessment", "Preparation for an annual care-plan update"],
    reviews: ["Current health status", "Medication changes", "Function, mobility, and cognition", "Safety and behavioral needs", "Changes in personal-care support", "Items requiring care-plan updates"],
    metaDescription: "Annual RN reassessment context for Adult Family Homes, reviewing current health, function, safety, and changing care needs.",
    searchLabel: "Annual reassessment context for an Adult Family Home",
    detailCta: "Learn about annual reassessment",
    relatedPrimaryServices: ["initial-rn-assessment"],
  },
  {
    slug: "annual-patient-care-plan",
    title: "Annual Care Plan Update",
    shortTitle: "Annual Care Plan Update",
    navigationLabel: "Annual Care Plan Update",
    category: "Supporting Context",
    contextType: "care-plan",
    description: "An annual review and update of the resident’s individualized or negotiated care plan.",
    intro: "SNS updates the care plan so it reflects the current assessment, preferences, support needs, safety considerations, and daily-care direction. The result is a current plan for authorized providers and caregivers.",
    whenNeeded: ["Annual care-plan review", "After an annual reassessment", "When prior instructions need updating", "When responsibilities or routines have changed"],
    reviews: ["Current assessment findings", "Daily-care instructions", "Resident preferences and routines", "Safety precautions", "Monitoring and communication needs", "Provider and caregiver responsibilities"],
    metaDescription: "Annual care-plan update context for Adult Family Homes, based on current assessment findings, preferences, and daily support needs.",
    searchLabel: "Annual care-plan update context for an Adult Family Home",
    detailCta: "Learn about care-plan updates",
    relatedPrimaryServices: ["negotiated-care-plan"],
  },
  {
    slug: "90-day-supervisory-visit",
    title: "90-Day Assessment & Care Plan Review",
    shortTitle: "90-Day Assessment & Care Plan Review",
    navigationLabel: "90-Day Assessment & Care Plan Review",
    category: "Supporting Context",
    contextType: "assessment-care-plan",
    description: "A focused RN review of the current assessment, care plan, support needs, and meaningful changes.",
    intro: "This focused review compares the resident’s current status and care delivery with the existing assessment and care plan. SNS documents observations and identifies items that may require reassessment or a care-plan update within the agreed scope.",
    whenNeeded: ["Planned 90-day review of existing documentation", "Review after recent care changes", "Questions about whether current guidance remains accurate", "Potential need for reassessment or a care-plan update"],
    reviews: ["Current condition and observations", "Existing assessment and care-plan guidance", "Medication or treatment changes", "Mobility, function, and safety", "Caregiver questions", "Items that may require reassessment or an update"],
    metaDescription: "90-day assessment and care-plan review context for Adult Family Homes, focused on current needs, care guidance, and meaningful changes.",
    searchLabel: "90-day review of an Adult Family Home assessment and care plan",
    detailCta: "Learn about 90-day review",
    relatedPrimaryServices: ["initial-rn-assessment", "negotiated-care-plan"],
  },
  {
    slug: "change-in-condition-assessment",
    title: "Significant-Change Assessment",
    shortTitle: "Significant-Change Assessment",
    navigationLabel: "Significant-Change Assessment",
    category: "Supporting Context",
    contextType: "assessment",
    description: "A focused RN reassessment after a significant change in health, function, cognition, behavior, mobility, or care needs.",
    intro: "SNS evaluates the reported change and documents how it affects current support and safety needs. This assessment is focused on the change while considering the resident’s broader clinical picture.",
    whenNeeded: ["Recent hospitalization", "Functional decline", "New cognitive or behavioral change", "Significant fall", "Major medication or care change"],
    reviews: ["Nature and timing of the change", "Current symptoms and clinical context", "Function, cognition, and behavior", "Mobility and safety risks", "Medication or treatment changes", "Updated support and care-planning needs"],
    metaDescription: "Significant-change RN assessment context for AFH residents after hospitalization, decline, falls, or major care changes.",
    searchLabel: "Significant-change assessment context for an Adult Family Home",
    detailCta: "Learn about significant-change assessment",
    relatedPrimaryServices: ["initial-rn-assessment"],
  },
] as const;

export const primaryServices = serviceDefinitions.filter((service) => service.category === "Primary Service");
export const supportingContexts = serviceDefinitions.filter((service) => service.category === "Supporting Context");

export function servicePath(service: ServiceDefinition) {
  return `/services/${service.slug}`;
}

export function getService(slug: string) {
  const service = serviceDefinitions.find((item) => item.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
