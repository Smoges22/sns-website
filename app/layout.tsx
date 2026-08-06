import type { Metadata } from "next";
import Script from "next/script";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "SNS | Sosena Nursing Solutions",
    template: "%s | Sosena Nursing Solutions"
  },
  description: "Registered nurse-led assessments, negotiated care planning, and clinical services for Adult Family Homes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sosena Nursing Solutions",
    description: "Professional RN assessments and practical care planning for Adult Family Homes.",
    url: site.url,
    siteName: "Sosena Nursing Solutions",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Sosena Nursing Solutions",
    description: "Professional RN assessments and practical care planning for Adult Family Homes."
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.legalName,
  url: site.url,
  telephone: site.phone,
  email: site.primaryEmail,
  areaServed: "Washington",
  description: "Registered nurse-led assessment and care-planning services for Adult Family Homes.",
  serviceType: [
    "Comprehensive RN Assessments",
    "Negotiated Care Plans",
    "Care-Plan Reviews"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
