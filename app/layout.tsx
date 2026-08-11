import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl, site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Professional RN Assessments & Individualized / Negotiated Care Plans | Sosena Nursing Solutions",
    template: "%s | Sosena Nursing Solutions",
  },
  description:
    "Professional RN assessments and individualized or negotiated care plans for Adult Family Homes, care teams, and families in Washington.",
  applicationName: site.name,
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Professional RN Assessments & Individualized / Negotiated Care Plans",
    description:
      "Professional RN assessments and individualized or negotiated care plans for Adult Family Homes, care teams, and families in Washington.",
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/branding/sns-og.png",
        width: 1200,
        height: 630,
        alt: "Sosena Nursing Solutions — Professional RN Assessments and Individualized or Negotiated Care Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional RN Assessments & Individualized / Negotiated Care Plans",
    description:
      "Professional RN assessments and individualized or negotiated care plans for Adult Family Homes, care teams, and families in Washington.",
    images: ["/images/branding/sns-og.png"],
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
      <body className={`${inter.variable} font-sans antialiased`}>
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
