import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "RN Assessments, Care Plans & Clinical Follow-Up | Sosena Nursing Solutions",
    template: "%s | Sosena Nursing Solutions",
  },
  description:
    "RN assessments, individualized care plans, and clinical follow-up for Adult Family Homes, care teams, and families in Washington.",
  applicationName: site.name,
  icons: {
    icon: "/images/branding/sns-icon-64.png",
    shortcut: "/images/branding/sns-icon-64.png",
    apple: "/images/branding/sns-icon-64.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const entityGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: absoluteUrl("/images/branding/sns-logo-horizontal.png"),
      telephone: site.phone,
      email: site.primaryEmail,
      areaServed: { "@type": "State", name: "Washington" },
      founder: { "@id": `${site.url}/#sosena-mekuria` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#sosena-mekuria`,
      name: "Sosena Mekuria",
      honorificSuffix: "RN",
      jobTitle: "Registered Nurse",
      worksFor: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entityGraph).replace(/</g, "\\u003c") }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
