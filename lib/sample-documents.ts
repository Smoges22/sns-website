export const sampleDocumentDisclaimer =
  "Sample document for informational purposes only. All names, details, and clinical information are fictional and do not represent a real patient record.";

export const sampleDocumentsIntro =
  "Sosena Nursing Solutions provides clear, professional RN assessments and individualized care plans for authorized providers, professionals, and families. Review sample documents to better understand the type of documentation SNS prepares.";

export const sampleDocumentsNote =
  "All samples below are for demonstration purposes only and use fictional, non-patient information.";

export type SampleDocument = {
  id: "assessment" | "care-plan";
  title: string;
  shortTitle: string;
  route: "/sample-assessment" | "/sample-care-plan";
  serviceRoute: "/services/initial-rn-assessment" | "/services/negotiated-care-plan";
  serviceLabel: string;
  description: string;
  ctaLabel: string;
  pageIntro: string;
  previewSections: ReadonlyArray<{ title: string; description: string }>;
  demonstrates: ReadonlyArray<string>;
};

export const sampleDocuments: ReadonlyArray<SampleDocument> = [
  {
    id: "assessment",
    title: "Sample RN Assessment",
    shortTitle: "RN Assessment",
    route: "/sample-assessment",
    serviceRoute: "/services/initial-rn-assessment",
    serviceLabel: "Learn about RN Assessments",
    description:
      "Preview a sample nursing assessment showing the structure SNS uses to document health history, diagnoses, medications, functional needs, safety concerns, and clinical observations.",
    ctaLabel: "Preview Sample Assessment",
    pageIntro:
      "Review a fictional example of the organized sections used to present an adult’s assessed needs clearly to authorized providers, professionals, and families.",
    previewSections: [
      { title: "Assessment Overview", description: "Purpose, referral context, and scope of the RN review." },
      { title: "Health History", description: "Organized summary of reported history and current considerations." },
      { title: "Diagnoses & Treatments", description: "Structured area for clinically relevant conditions and treatment context." },
      { title: "Medication Support", description: "Documentation of support level, oversight, and observation needs." },
      { title: "Functional Needs", description: "Clear summary of mobility, personal-care, and daily-living support." },
      { title: "Cognition & Communication", description: "Communication preferences, understanding, and support considerations." },
      { title: "Safety Considerations", description: "Identified precautions, supervision needs, and risk-reduction context." },
      { title: "RN Clinical Observations", description: "Professional synthesis of findings and documented care needs." },
    ],
    demonstrates: [
      "A consistent structure for reviewing current care needs",
      "Clear separation of clinical, functional, medication, and safety information",
      "Professional RN observations presented in understandable language",
    ],
  },
  {
    id: "care-plan",
    title: "Sample Individualized Care Plan",
    shortTitle: "Individualized Care Plan",
    route: "/sample-care-plan",
    serviceRoute: "/services/negotiated-care-plan",
    serviceLabel: "Learn about Individualized Care Plans",
    description:
      "Preview a sample individualized care plan that shows how assessed needs are translated into practical caregiver guidance, support instructions, and daily care planning.",
    ctaLabel: "Preview Sample Care Plan",
    pageIntro:
      "Review a fictional example of how assessed needs can be organized into clear, person-centered guidance for authorized caregivers and care teams.",
    previewSections: [
      { title: "Assessed Need", description: "The documented need that provides the clinical foundation for planning." },
      { title: "Individual Preferences", description: "Person-centered routines, choices, and communication preferences." },
      { title: "Caregiver Guidance", description: "Clear description of the support approach connected to the assessed need." },
      { title: "Daily Support Instructions", description: "Organized direction for consistent assistance during everyday care." },
      { title: "Safety & Monitoring", description: "Relevant precautions, observations, and communication expectations." },
      { title: "Follow-up & Review", description: "When the plan should be reviewed as needs, preferences, or circumstances change." },
    ],
    demonstrates: [
      "A direct connection between assessed needs and caregiver guidance",
      "Person-centered preferences integrated into daily support",
      "Clear organization for consistent care and future review",
    ],
  },
] as const;

export const sampleAssessment = sampleDocuments[0];
export const sampleCarePlan = sampleDocuments[1];
