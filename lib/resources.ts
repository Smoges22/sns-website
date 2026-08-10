export const resourceCategories = [
  "All",
  "AFH Providers",
  "Referral Professionals",
  "Families",
  "Clinical Documentation",
  "WAC & Compliance",
] as const;

export type ResourceCategory = Exclude<(typeof resourceCategories)[number], "All">;

export type RegulatoryReference = {
  wacNumber: string;
  title: string;
  summary: string;
  officialUrl: string;
};

export type ResourceDefinition = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  categories: readonly ResourceCategory[];
  sections: readonly {
    heading: string;
    paragraphs?: readonly string[];
    bullets?: readonly string[];
  }[];
  relatedService?: string;
  relatedResources?: readonly string[];
  regulatory?: RegulatoryReference;
};

const officialWacUrl = (citation: string) =>
  `https://app.leg.wa.gov/WAC/default.aspx?cite=${citation}`;

export const resources: readonly ResourceDefinition[] = [
  {
    slug: "what-is-an-rn-assessment-for-an-adult-family-home",
    title: "What Is an RN Assessment for an Adult Family Home?",
    description: "Learn what an RN assessment documents for Adult Family Home placement and ongoing care planning.",
    intro: "An RN assessment is a structured clinical review of a person’s current health, function, cognition, behavior, medications, safety, and daily support needs.",
    categories: ["AFH Providers", "Referral Professionals", "Families", "Clinical Documentation"],
    sections: [
      {
        heading: "Why the assessment matters",
        paragraphs: ["The assessment gives authorized providers and care teams a clear clinical picture. A receiving Adult Family Home uses that information as part of its own review of whether it can appropriately meet the person’s needs."],
      },
      {
        heading: "What is commonly reviewed",
        bullets: ["Health history and diagnoses", "Medication support", "Cognition and communication", "Mobility and personal care", "Behavioral and safety needs", "Preferences and routines"],
      },
      {
        heading: "What happens next",
        paragraphs: ["Assessment findings can provide the clinical foundation for an individualized or negotiated care plan. SNS explains the appropriate next step based on the requested service."],
      },
    ],
    relatedService: "initial-rn-assessment",
    relatedResources: ["rn-assessment-before-washington-afh-admission", "what-is-a-negotiated-care-plan", "initial-assessment-vs-annual-assessment-renewal"],
  },
  {
    slug: "when-is-an-assessment-needed-before-afh-placement",
    title: "When Is an Assessment Needed Before AFH Placement?",
    description: "Understand common situations when an RN assessment may support an Adult Family Home placement decision.",
    intro: "An assessment is often requested when an adult is preparing for a new residential-care setting and current care needs must be clearly documented.",
    categories: ["AFH Providers", "Referral Professionals", "Families"],
    sections: [
      {
        heading: "Common transition points",
        bullets: ["Hospital discharge to an Adult Family Home", "Move from assisted living or another care setting", "Family preparing for AFH placement", "Referral professional coordinating a transition", "Receiving home reviewing prospective care needs"],
      },
      {
        heading: "The assessment does not make the placement decision",
        paragraphs: ["SNS documents assessed care needs. The receiving Adult Family Home determines whether it can appropriately meet those needs and whether admission is suitable."],
      },
      {
        heading: "Start with basic coordination information",
        paragraphs: ["A public request should include only contact, location, timing, and service information. SNS provides separate instructions when authorized clinical records are needed."],
      },
    ],
    relatedService: "initial-rn-assessment",
    relatedResources: ["rn-assessment-before-washington-afh-admission", "what-is-an-rn-assessment-for-an-adult-family-home", "what-is-a-negotiated-care-plan"],
  },
  {
    slug: "what-is-a-negotiated-care-plan",
    title: "What Is a Negotiated Care Plan?",
    description: "Learn how an individualized negotiated care plan connects assessed needs with practical daily-care guidance.",
    intro: "A negotiated care plan is the written, person-centered plan used to organize how assessed needs, preferences, risks, and daily support will be addressed.",
    categories: ["AFH Providers", "Families", "Clinical Documentation"],
    sections: [
      {
        heading: "Assessment first, plan second",
        paragraphs: ["A current assessment provides the clinical foundation. The care plan then translates relevant findings into understandable support instructions and care approaches."],
      },
      {
        heading: "What the plan can organize",
        bullets: ["Personal-care assistance", "Mobility and transfer support", "Medication support", "Safety precautions", "Preferences and routines", "Monitoring and communication expectations"],
      },
      {
        heading: "A practical document",
        paragraphs: ["The goal is clear direction for authorized providers and caregivers without losing the individual’s preferences and daily routines."],
      },
    ],
    relatedService: "negotiated-care-plan",
    relatedResources: ["washington-afh-negotiated-care-plan-30-day-requirement", "washington-afh-negotiated-care-plan-signatures", "when-to-update-washington-afh-negotiated-care-plan"],
  },
  {
    slug: "initial-assessment-vs-annual-assessment-renewal",
    title: "Initial Assessment vs. Annual Reassessment",
    description: "Compare an initial Adult Family Home RN assessment with an annual reassessment.",
    intro: "Both services document current care needs, but they begin from different points in the person’s care journey.",
    categories: ["AFH Providers", "Clinical Documentation"],
    sections: [
      {
        heading: "Initial RN Assessment",
        paragraphs: ["An initial assessment establishes a comprehensive clinical picture for a new admission, placement, or transition. It documents current needs at the start of the care relationship."],
      },
      {
        heading: "Annual Reassessment",
        paragraphs: ["An annual renewal revisits the current picture, reviews changes since the prior assessment, and identifies information that may require updated care planning."],
      },
      {
        heading: "Which service is appropriate?",
        paragraphs: ["The answer depends on the resident’s situation, existing documentation, timing, and the purpose of the review. SNS can clarify the service during basic coordination."],
      },
    ],
    relatedService: "annual-assessment-renewal",
    relatedResources: ["what-is-an-rn-assessment-for-an-adult-family-home", "when-is-a-change-in-condition-assessment-needed", "when-to-update-washington-afh-negotiated-care-plan"],
  },
  {
    slug: "when-is-a-change-in-condition-assessment-needed",
    title: "When Is a Significant-Change Assessment Needed?",
    description: "Learn when a focused RN reassessment may be appropriate after a significant change in an AFH resident’s needs.",
    intro: "A significant-change assessment focuses on a meaningful new development that may affect health, function, safety, or the level of support required.",
    categories: ["AFH Providers", "Clinical Documentation"],
    sections: [
      {
        heading: "Common reasons for reassessment",
        bullets: ["Hospitalization or emergency-care episode", "Functional or mobility decline", "New cognitive or behavioral change", "Significant fall", "Major medication or treatment change", "New level of personal-care support"],
      },
      {
        heading: "Focused, but still person-centered",
        paragraphs: ["The RN evaluates the reported change within the resident’s broader clinical context and documents how current support or safety needs may be affected."],
      },
      {
        heading: "Care planning may also need review",
        paragraphs: ["When assessed needs change, the individualized or negotiated care plan may need to be updated so daily guidance remains current."],
      },
    ],
    relatedService: "change-in-condition-assessment",
    relatedResources: ["when-to-update-washington-afh-negotiated-care-plan", "initial-assessment-vs-annual-assessment-renewal", "what-is-a-negotiated-care-plan"],
  },
  {
    slug: "rn-assessment-before-washington-afh-admission",
    title: "When Is an RN Assessment Needed Before AFH Admission?",
    description: "A practical guide to Washington’s written assessment requirement before Adult Family Home admission.",
    intro: "Washington Adult Family Homes generally need a current written assessment before admitting a prospective resident. This guide explains the rule and how an independent RN assessment can support an authorized admission review.",
    categories: ["AFH Providers", "Referral Professionals", "WAC & Compliance"],
    sections: [
      {
        heading: "What the rule requires",
        paragraphs: ["Before admission, an Adult Family Home must obtain a written assessment containing accurate information about the prospective resident’s current needs and preferences. The rule provides a narrow exception for a genuine emergency when the resident needs more care and support than the current setting can provide. If required assessment information cannot be obtained, the home must document its attempt and ensure it is knowledgeable about the prospective resident’s needs and preferences before admission."],
      },
      {
        heading: "What this means for an AFH",
        paragraphs: ["The home should confirm that it has a current written assessment before completing a routine admission and should treat the emergency provision as the limited exception described in the rule. The AFH remains responsible for its admission decision and for determining whether it can meet the person’s assessed needs."],
      },
      {
        heading: "How SNS can help",
        paragraphs: ["SNS can complete an Initial RN Assessment that documents current health, functional, cognitive, medication, safety, and daily-support needs for authorized review. SNS supplies clinical documentation; the Adult Family Home makes its own admission and regulatory decisions."],
      },
    ],
    relatedService: "initial-rn-assessment",
    relatedResources: ["what-is-an-rn-assessment-for-an-adult-family-home", "when-is-an-assessment-needed-before-afh-placement", "washington-afh-negotiated-care-plan-30-day-requirement"],
    regulatory: {
      wacNumber: "WAC 388-76-10330",
      title: "Assessment before admission",
      summary: "An Adult Family Home generally must obtain a written assessment with accurate information about a prospective resident’s current needs and preferences before admission, subject to the rule’s emergency provisions.",
      officialUrl: officialWacUrl("388-76-10330"),
    },
  },
  {
    slug: "washington-afh-negotiated-care-plan-30-day-requirement",
    title: "Washington AFH Negotiated Care Plan: 30-Day Requirement",
    description: "Understand when a negotiated care plan must be developed and completed after admission to a Washington Adult Family Home.",
    intro: "The negotiated care plan turns assessed needs and preferences into a practical plan for daily care. Washington sets a specific completion timeline after admission.",
    categories: ["AFH Providers", "Clinical Documentation", "WAC & Compliance"],
    sections: [
      {
        heading: "What the rule requires",
        paragraphs: ["The Adult Family Home must ensure the negotiated care plan is developed and completed within 30 days of the resident’s admission."],
      },
      {
        heading: "What this means for an AFH",
        paragraphs: ["The admission date starts the 30-day period. Homes should coordinate the assessment, care-plan development, resident participation, and completion process early enough to meet the current requirement."],
      },
      {
        heading: "How SNS can help",
        paragraphs: ["SNS can prepare an individualized negotiated care plan using current assessment findings, the resident’s preferences, and practical caregiver guidance. The AFH remains responsible for completing its required review, participation, signatures, and regulatory process."],
      },
    ],
    relatedService: "negotiated-care-plan",
    relatedResources: ["what-is-a-negotiated-care-plan", "washington-afh-negotiated-care-plan-signatures", "medication-assistance-washington-afh-negotiated-care-plan"],
    regulatory: {
      wacNumber: "WAC 388-76-10360",
      title: "Negotiated care plan — Timing",
      summary: "An Adult Family Home must ensure the negotiated care plan is developed and completed within 30 days of the resident’s admission.",
      officialUrl: officialWacUrl("388-76-10360"),
    },
  },
  {
    slug: "washington-afh-negotiated-care-plan-signatures",
    title: "Negotiated Care Plan Signature Requirements for Washington AFHs",
    description: "Learn who must agree to, sign, and date a completed negotiated care plan in a Washington Adult Family Home.",
    intro: "A negotiated care plan is not complete simply because its clinical content has been drafted. Washington also identifies who must agree to, sign, and date the plan.",
    categories: ["AFH Providers", "Clinical Documentation", "WAC & Compliance"],
    sections: [
      {
        heading: "What the rule requires",
        paragraphs: ["The completed negotiated care plan must be agreed to, signed, and dated by the resident and the Adult Family Home."],
      },
      {
        heading: "What this means for an AFH",
        paragraphs: ["The home should include resident participation and the signature process in its completion workflow. A clinically prepared plan still needs the agreement, signatures, and dates required by the rule."],
      },
      {
        heading: "How SNS can help",
        paragraphs: ["SNS can prepare the care-plan content and organize assessed needs into clear daily-care guidance. The AFH coordinates final review and obtains the required agreement, signatures, and dates."],
      },
    ],
    relatedService: "negotiated-care-plan",
    relatedResources: ["washington-afh-negotiated-care-plan-30-day-requirement", "sending-negotiated-care-plan-to-dshs-case-manager", "what-is-a-negotiated-care-plan"],
    regulatory: {
      wacNumber: "WAC 388-76-10375",
      title: "Negotiated care plan — Signatures",
      summary: "The completed negotiated care plan must be agreed to, signed, and dated by the resident and the Adult Family Home.",
      officialUrl: officialWacUrl("388-76-10375"),
    },
  },
  {
    slug: "when-to-update-washington-afh-negotiated-care-plan",
    title: "When Must a Washington AFH Update a Negotiated Care Plan?",
    description: "Review the events that require a Washington Adult Family Home to review and revise a negotiated care plan.",
    intro: "A negotiated care plan must continue to reflect the resident’s current assessed needs and preferences. Washington identifies several events that trigger review and revision.",
    categories: ["AFH Providers", "Clinical Documentation", "WAC & Compliance"],
    sections: [
      {
        heading: "What the rule requires",
        bullets: ["After an assessment identifies a significant change in the resident’s physical or mental condition", "When the plan, or part of the plan, no longer addresses the resident’s needs and preferences", "At the resident’s or resident representative’s request", "At least every 12 months"],
      },
      {
        heading: "What this means for an AFH",
        paragraphs: ["The home should not rely only on an annual calendar reminder. A significant change, an outdated instruction, or a resident request can require earlier review and revision."],
      },
      {
        heading: "How SNS can help",
        paragraphs: ["SNS can provide annual reassessment, care-plan update, and significant-change assessment support. This work can provide current clinical information and updated care-plan content; the AFH remains responsible for its ongoing review and regulatory process."],
      },
    ],
    relatedService: "annual-patient-care-plan",
    relatedResources: ["when-is-a-change-in-condition-assessment-needed", "initial-assessment-vs-annual-assessment-renewal", "washington-afh-negotiated-care-plan-signatures"],
    regulatory: {
      wacNumber: "WAC 388-76-10380",
      title: "Negotiated care plan — Review and revision",
      summary: "The plan must be reviewed and revised after certain significant changes, when it no longer addresses needs and preferences, at the resident’s or representative’s request, and at least every 12 months.",
      officialUrl: officialWacUrl("388-76-10380"),
    },
  },
  {
    slug: "sending-negotiated-care-plan-to-dshs-case-manager",
    title: "Sending a Negotiated Care Plan to the DSHS Case Manager",
    description: "Understand when a Washington Adult Family Home must provide a completed negotiated care plan to a department case manager.",
    intro: "For residents whose services are paid for by the department, Washington requires the Adult Family Home to share the completed plan with the department case manager.",
    categories: ["AFH Providers", "Clinical Documentation", "WAC & Compliance"],
    sections: [
      {
        heading: "What the rule requires",
        paragraphs: ["When a resident’s services are paid for by the department, the Adult Family Home must give the department case manager a copy of the negotiated care plan each time the plan is completed or updated and after it has been signed and dated."],
      },
      {
        heading: "What this means for an AFH",
        paragraphs: ["The home should include case-manager delivery in its completion workflow for department-paid services. The copy is provided after the plan has been completed or updated and the required signatures and dates are in place."],
      },
      {
        heading: "How SNS can help",
        paragraphs: ["SNS can prepare and update negotiated care-plan content for authorized review. The AFH is responsible for final signatures, delivery to the appropriate department case manager, and its recordkeeping process."],
      },
    ],
    relatedService: "negotiated-care-plan",
    relatedResources: ["washington-afh-negotiated-care-plan-signatures", "washington-afh-negotiated-care-plan-30-day-requirement", "when-to-update-washington-afh-negotiated-care-plan"],
    regulatory: {
      wacNumber: "WAC 388-76-10385",
      title: "Negotiated care plan — Department case manager copy",
      summary: "For department-paid services, the AFH must provide the department case manager a copy whenever the plan is completed or updated, after it is signed and dated.",
      officialUrl: officialWacUrl("388-76-10385"),
    },
  },
  {
    slug: "medication-assistance-washington-afh-negotiated-care-plan",
    title: "Medication Assistance in a Washington AFH Negotiated Care Plan",
    description: "Learn what a Washington Adult Family Home negotiated care plan must address about medication assistance.",
    intro: "Medication support should be documented in a way that reflects the resident’s assessed needs and the practical situations the home may need to manage.",
    categories: ["AFH Providers", "Clinical Documentation", "WAC & Compliance"],
    sections: [
      {
        heading: "What the rule requires",
        paragraphs: ["The negotiated care plan must address the amount of medication assistance the resident needs, the reasons for that assistance, and the reasons more than one type of assistance may be needed. It must also address how medications will be obtained when the resident is away from the home or when an assisting family member or resident representative is unavailable."],
      },
      {
        heading: "What this means for an AFH",
        paragraphs: ["The plan should describe the resident-specific level and purpose of assistance rather than relying on a generic medication statement. It should also anticipate how access to medications will be handled in the situations identified by the rule."],
      },
      {
        heading: "How SNS can help",
        paragraphs: ["SNS can document assessed medication-support needs in an RN assessment and translate relevant findings into individualized negotiated care-plan guidance. Medication management and regulatory responsibility remain with the authorized providers and the AFH."],
      },
    ],
    relatedService: "negotiated-care-plan",
    relatedResources: ["what-is-a-negotiated-care-plan", "washington-afh-negotiated-care-plan-30-day-requirement", "when-to-update-washington-afh-negotiated-care-plan"],
    regulatory: {
      wacNumber: "WAC 388-76-10460",
      title: "Negotiated care plan — Medication assistance",
      summary: "The plan must address the resident’s medication-assistance needs and reasons, including how medications will be obtained in certain situations away from the home or when an assisting person is unavailable.",
      officialUrl: officialWacUrl("388-76-10460"),
    },
  },
] as const;

export function resourcePath(resource: ResourceDefinition) {
  return `/resources/${resource.slug}`;
}

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
