import type { Metadata } from "next";
import { DocumentationShowcase } from "@/components/clinical-visuals";
import { Card, FinalCta, PageHero, Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Negotiated Care Plans",
  description: "Preliminary negotiated service plans, negotiated care plans, care-plan reviews, and external assessment review."
};

export default function NegotiatedCarePlansPage() {
  return (
    <main>
      <PageHero
        eyebrow="Care Planning"
        title="Negotiated care-plan documentation shaped around assessed needs"
        intro="SNS prepares practical care-plan documentation that helps AFH teams connect assessment findings to caregiver interventions, resident abilities, and preferences."
      >
        <Card>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Care-plan outputs</p>
          <p className="mt-3 text-2xl font-black text-navy">Organized planning language for daily care workflows.</p>
        </Card>
      </PageHero>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <Card><h2 className="text-xl font-black text-navy">Preliminary negotiated service plans</h2><p className="mt-3 leading-7 text-slate">Early planning support that connects assessment findings to care-team coordination and next steps.</p></Card>
          <Card><h2 className="text-xl font-black text-navy">Negotiated care plans</h2><p className="mt-3 leading-7 text-slate">Resident-centered documentation for caregiver interventions, preferences, abilities, and support needs.</p></Card>
          <Card><h2 className="text-xl font-black text-navy">Care-plan reviews</h2><p className="mt-3 leading-7 text-slate">Review support when care plans need to reflect reassessments, changing needs, or external documentation.</p></Card>
          <Card><h2 className="text-xl font-black text-navy">External assessment review</h2><p className="mt-3 leading-7 text-slate">RN-guided review to identify documentation priorities and care-planning implications.</p></Card>
        </div>
      </Section>

      <Section className="bg-white" eyebrow="Documentation flow" title="Assessment findings become practical care-plan language.">
        <DocumentationShowcase />
      </Section>

      <FinalCta title="Request care-plan support" />
    </main>
  );
}
