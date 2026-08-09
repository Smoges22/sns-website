import type { Metadata } from "next";

export const site = {
  legalName: "Sosena Nursing Solutions LLC",
  name: "Sosena Nursing Solutions",
  brand: "SNS",
  domain: "sosenanursingsolutions.com",
  url: "https://sosenanursingsolutions.com",
  primaryEmail: "info@sosenanursingsolutions.com",
  phone: "425-246-6220",
  provider: "Sosena Mekuria, RN",
  serviceArea: "Washington State",
  descriptor: "Professional RN Assessments, Care Plans & Clinical Follow-Up",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/sample-documents", label: "Sample Documents" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const audiences = [
  {
    title: "Adult Family Homes",
    text: "RN assessments and care plans for prospective admissions, current residents, annual reassessments, and significant changes in care needs.",
  },
  {
    title: "Referral & Placement Professionals",
    text: "Independent clinical documentation that helps authorized professionals and receiving providers understand assessed care needs during an AFH transition.",
  },
  {
    title: "Hospitals & Discharge Teams",
    text: "RN assessment support for adults preparing to discharge to an Adult Family Home or another residential care setting.",
  },
  {
    title: "Assisted Living Communities",
    text: "Updated assessment and care-planning support when needs change or an Adult Family Home transition is being considered.",
  },
  {
    title: "Families",
    text: "Professional nursing assessment to help authorized family members understand and document a loved one’s current care needs.",
  },
] as const;

export const processSteps = [
  {
    title: "Request",
    text: "Share basic contact, service, location, and timing information without sending clinical records.",
  },
  {
    title: "Schedule",
    text: "SNS confirms the appropriate service and coordinates with the authorized contact or care team.",
  },
  {
    title: "Assess",
    text: "Sosena Mekuria, RN completes the clinical assessment and reviews relevant records when available.",
  },
  {
    title: "Plan & Deliver",
    text: "SNS prepares the appropriate care plan and provides completed documentation to the authorized party.",
  },
] as const;

export function absoluteUrl(path = "") {
  return `${site.url}${path}`;
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title: path === "/" ? { absolute: `${title} | ${site.name}` } : title,
    description,
    alternates: { canonical: path || "/" },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/images/branding/sns-og.png",
          width: 1200,
          height: 630,
          alt: "Sosena Nursing Solutions — RN Assessments and Individualized Care Plans",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/branding/sns-og.png"],
    },
  };
}
