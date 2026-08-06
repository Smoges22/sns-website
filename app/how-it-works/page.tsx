import type { Metadata } from "next";
import { WorkflowTimeline } from "@/components/clinical-visuals";
import { Card, FinalCta, PageHero, Section } from "@/components/section";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How SNS coordinates requests, secure next steps, RN assessment, review, care planning, and documentation delivery."
};

export default function HowItWorksPage() {
  return (
    <main>
      <PageHero
        eyebrow="How it works"
        title="From Request to Professional Documentation"
        intro="The public website collects only minimum intake details. SNS coordinates secure next steps when clinical records are needed."
      >
        <Card>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Public intake</p>
          <p className="mt-3 text-2xl font-black text-navy">Minimum details first. Secure clinical exchange later.</p>
        </Card>
      </PageHero>

      <Section>
        <WorkflowTimeline />
      </Section>

      <Section className="bg-white" eyebrow="Safety by design" title="The public workflow is intentionally limited.">
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h2 className="font-black text-navy">Minimum intake</h2><p className="mt-3 text-slate">The request form asks for contact, service, location, timing, and general coordination notes only.</p></Card>
          <Card><h2 className="font-black text-navy">Secure next steps</h2><p className="mt-3 text-slate">When clinical records are needed, SNS provides secure instructions instead of collecting records through the public website.</p></Card>
          <Card><h2 className="font-black text-navy">RN review</h2><p className="mt-3 text-slate">Assessment and care-plan documentation is reviewed and finalized through RN clinical judgment.</p></Card>
        </div>
      </Section>

      <FinalCta />
    </main>
  );
}
