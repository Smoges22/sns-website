import type { Metadata } from "next";
import { WorkflowTimeline } from "@/components/clinical-visuals";
import { Card, FinalCta, PageHero, PageShell, SectionContainer } from "@/components/section";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How SNS coordinates requests, secure next steps, RN assessment, review, care planning, and documentation delivery."
};

export default function HowItWorksPage() {
  return (
    <PageShell>
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

      <SectionContainer eyebrow="Six-step workflow" title="A professional service path from request to delivery.">
        <WorkflowTimeline />
      </SectionContainer>

      <SectionContainer eyebrow="Safety by design" title="The public workflow is intentionally limited.">
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h2 className="font-black text-navy">Minimum intake</h2><p className="mt-3 text-slate">The request form asks for contact, service, location, timing, and general coordination notes only.</p></Card>
          <Card><h2 className="font-black text-navy">Secure next steps</h2><p className="mt-3 text-slate">When clinical records are needed, SNS provides secure instructions instead of collecting records through the public website.</p></Card>
          <Card><h2 className="font-black text-navy">RN review</h2><p className="mt-3 text-slate">Assessment and care-plan documentation is reviewed and finalized through RN clinical judgment.</p></Card>
        </div>
      </SectionContainer>

      <SectionContainer eyebrow="What clients receive" title="Clear outputs for review and care planning.">
        <div className="grid gap-5 md:grid-cols-2">
          <Card><h2 className="font-black text-navy">Professional assessment documentation</h2><p className="mt-3 leading-7 text-slate">Structured clinical content organized for review, finalization, and secure delivery.</p></Card>
          <Card><h2 className="font-black text-navy">Care-plan language connected to findings</h2><p className="mt-3 leading-7 text-slate">Practical wording for interventions, abilities, preferences, and care-team coordination.</p></Card>
        </div>
      </SectionContainer>

      <FinalCta />
    </PageShell>
  );
}
