import type { Metadata } from "next";
import { DocumentationShowcase } from "@/components/clinical-visuals";
import { Card, FinalCta, PageHero, Section } from "@/components/section";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Sosena Mekuria, RN, Founder and Clinical Director of Sosena Nursing Solutions."
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Meet Your Clinical Partner"
        title="Sosena Mekuria, RN"
        intro="Founder and Clinical Director of Sosena Nursing Solutions LLC, providing RN-led assessment and care-planning support for Adult Family Homes."
      >
        <Card>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">SNS approach</p>
          <p className="mt-3 text-2xl font-black text-navy">Clinical judgment with practical AFH context.</p>
        </Card>
      </PageHero>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-soft">
            <div className="grid aspect-[4/5] place-items-center rounded-xl bg-[linear-gradient(145deg,#edf6fa,#ffffff)] ring-1 ring-navy/10">
              <div className="text-center">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-navy text-2xl font-black tracking-[0.16em] text-white">SM</div>
                <p className="mt-4 font-extrabold text-navy">Portrait placeholder</p>
                <p className="mt-1 text-sm text-slate">Use approved 1200×1500px portrait when available.</p>
              </div>
            </div>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate">
            <p>Sosena brings registered nurse leadership and Adult Family Home operating experience to clinical documentation and care planning.</p>
            <p>SNS emphasizes practical understanding of resident care, individualized assessment, and collaboration with residents, representatives, providers, and AFH teams.</p>
            <p>The work is designed to produce clear documentation that supports review, care planning, and next-step coordination.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-white" eyebrow="Documentation standards" title="Assessment and care-plan work stays organized from request to final PDF.">
        <DocumentationShowcase />
      </Section>

      <FinalCta />
    </main>
  );
}
