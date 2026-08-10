import { ResourceLibrary } from "@/components/resource-library";
import { FinalCta, PageHero, PageShell, SectionContainer } from "@/components/section";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Washington AFH Clinical & Compliance Resources",
  description: "Practical Washington Adult Family Home guides about RN assessments, negotiated care plans, clinical documentation, and current WAC requirements.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbLabel="Resources"
        eyebrow="Washington AFH Resources"
        title="Practical clinical and compliance guidance for Adult Family Homes"
        intro="Clear guides for AFH providers, referral professionals, and families—grounded in current Washington sources and the clinical documentation SNS provides."
      />
      <SectionContainer
        eyebrow="Resource Center"
        title="Browse practical AFH guides"
        intro="Filter by topic to find concise explanations, direct official-source links, and the related SNS service when one applies."
      >
        <ResourceLibrary />
      </SectionContainer>
      <FinalCta />
    </PageShell>
  );
}
