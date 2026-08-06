export const site = {
  legalName: "Sosena Nursing Solutions LLC",
  brand: "SNS",
  domain: "sosenanursingsolutions.com",
  url: "https://sosenanursingsolutions.com",
  primaryEmail: "info@sosenanursingsolutions.com",
  generalEmail: "info@sosenanursingsolutions.com",
  phone: "425-246-6220",
  portalUrl: process.env.NEXT_PUBLIC_PORTAL_URL || "https://portal.sosenanursingsolutions.com",
  descriptor: "RN Assessments, Care Planning & Clinical Services",
  tagline: "Professional Assessments. Practical Care Solutions."
};

export const launchServices = [
  "Comprehensive RN Assessments",
  "Annual Reassessments",
  "Significant-Change Assessments",
  "Preliminary Negotiated Service Plans",
  "Negotiated Care Plans",
  "Care-Plan Reviews",
  "External Assessment Review and Care-Plan Preparation"
];

export const trustPoints = [
  "Registered Nurse-led",
  "Adult Family Home experience",
  "Professional clinical documentation",
  "Practical, resident-centered care planning"
];

export const howItWorks = [
  {
    title: "Request",
    text: "Share basic contact details and the type of assessment or care-plan support needed."
  },
  {
    title: "Coordinate",
    text: "SNS confirms scope, timing, secure record exchange, and next steps without collecting clinical details in the public form."
  },
  {
    title: "Assess",
    text: "A registered nurse completes the assessment or review using professional documentation practices."
  },
  {
    title: "Plan",
    text: "SNS prepares practical care-planning documentation that supports residents, representatives, providers, and AFH teams."
  }
];

export const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/request-assessment", label: "Request" },
  { href: "/contact", label: "Contact" }
];
