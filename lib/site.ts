export const site = {
  legalName: "Sosena Nursing Solutions LLC",
  brand: "SNS",
  domain: "sosenanursingsolutions.com",
  url: "https://sosenanursingsolutions.com",
  primaryEmail: "info@sosenanursingsolutions.com",
  generalEmail: "info@sosenanursingsolutions.com",
  phone: "425-246-6220",
  portalUrl: process.env.NEXT_PUBLIC_PORTAL_URL?.trim() || "",
  descriptor: "RN Assessments, Care Planning & Clinical Services",
  tagline: "Professional Assessments. Practical Care Solutions."
};

export const trustPoints = [
  "Registered Nurse-led",
  "Adult Family Home experience",
  "Professional clinical documentation",
  "Resident-centered care planning"
];

export const howItWorks = [
  {
    title: "Request",
    text: "Submit minimum intake details through the public website."
  },
  {
    title: "Coordinate",
    text: "SNS confirms scope, scheduling, and secure record exchange."
  },
  {
    title: "Assess",
    text: "A registered nurse completes or reviews the assessment."
  },
  {
    title: "Review",
    text: "Clinical findings and narratives are reviewed by the RN."
  },
  {
    title: "Plan",
    text: "SNS prepares negotiated care-plan or service-plan documentation."
  },
  {
    title: "Deliver",
    text: "Finalized assessment and care-plan PDFs are delivered securely."
  }
];

export const serviceGroups = [
  {
    title: "Assessments",
    eyebrow: "RN assessment",
    description: "Assessment work for new, annual, or significant-change care planning.",
    services: [
      {
        name: "Comprehensive RN Assessments",
        text: "A structured RN assessment that helps AFH teams understand needs, risks, preferences, and practical care considerations."
      },
      {
        name: "Annual Reassessments",
        text: "Periodic review to refresh documentation and support current care planning conversations."
      },
      {
        name: "Significant-Change Assessments",
        text: "Focused assessment support when care needs, function, or service conditions materially change."
      }
    ]
  },
  {
    title: "Care Planning",
    eyebrow: "Plan preparation",
    description: "Care-plan documentation shaped around assessed needs and daily care workflows.",
    services: [
      {
        name: "Preliminary Negotiated Service Plans",
        text: "Early planning documentation connected to assessment findings and immediate care-team coordination."
      },
      {
        name: "Negotiated Care Plans",
        text: "Resident-centered care-plan preparation with caregiver interventions, abilities, and preferences organized clearly."
      },
      {
        name: "Care-Plan Reviews",
        text: "Review support for updating care plans after reassessment, external review, or changing needs."
      }
    ]
  },
  {
    title: "Document Review",
    eyebrow: "Clinical review",
    description: "External assessment and care-plan preparation support for clearer next steps.",
    services: [
      {
        name: "External Assessment Review",
        text: "RN-guided review of assessment information to identify documentation needs and care-planning priorities."
      },
      {
        name: "Care-Plan Preparation",
        text: "Practical preparation support for AFH providers who need clear, usable care-plan documentation."
      }
    ]
  },
  {
    title: "Future",
    eyebrow: "Coming soon",
    description: "Nurse Delegation is planned after workflows and safeguards are ready.",
    services: [
      {
        name: "Nurse Delegation — Coming Soon",
        text: "Availability will be announced after clinical workflows, documentation standards, and operational safeguards are ready."
      }
    ]
  }
];

export const differentiation = [
  {
    title: "RN Leadership",
    text: "Clinical documentation guided by registered nurse judgment, review, and finalization.",
    icon: "rn"
  },
  {
    title: "Adult Family Home Expertise",
    text: "Workflows shaped around provider needs, family communication, and day-to-day care realities.",
    icon: "shield"
  },
  {
    title: "Professional Documentation",
    text: "Assessment findings and care-plan language organized for secure review and clean final PDFs.",
    icon: "document"
  },
  {
    title: "Assessment to Care Plan Workflow",
    text: "A consistent path from assessment builder to RN review, negotiated care plan, and PDF output.",
    icon: "workflow"
  },
  {
    title: "Future Nurse Delegation",
    text: "Planned service expansion only after workflow, documentation, and safeguard readiness.",
    icon: "calendar"
  },
  {
    title: "Resident-Centered Planning",
    text: "Care-plan support focused on preferences, abilities, caregiver interventions, and practical next steps.",
    icon: "carePlan"
  }
];

export const documentationStages = [
  {
    title: "Assessment",
    items: ["Structured RN assessment", "Screening and physical assessment", "ADL and service-plan sections"]
  },
  {
    title: "RN Review",
    items: ["Clinical narrative review", "Corrections and finalization", "Signature and certification"]
  },
  {
    title: "Care Plan",
    items: ["Negotiated care-plan preparation", "Caregiver interventions", "Abilities and preferences"]
  },
  {
    title: "Professional PDF",
    items: ["Consistent formatting", "Portrait and landscape pages", "Finalized document output"]
  }
];

export const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/request-assessment", label: "Request" },
  { href: "/contact", label: "Contact" }
];
