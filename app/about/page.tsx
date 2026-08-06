import type { Metadata } from "next";
import Image from "next/image";
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
        title="Meet Your Clinical Partner"
        intro="Founder and Clinical Director of Sosena Nursing Solutions LLC, providing RN-led assessment and care-planning support for Adult Family Homes."
      >
        <Card className="flex min-w-0 flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Image
            alt="SNS — Sosena Nursing Solutions"
            className="h-16 w-24 shrink-0 rounded-xl object-cover"
            height={96}
            src="/images/branding/sns-logo-horizontal.png"
            width={144}
          />
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">SNS approach</p>
            <p className="mt-2 max-w-[16ch] break-words text-xl font-black text-navy sm:max-w-none sm:text-2xl">Clinical judgment with practical AFH context.</p>
          </div>
        </Card>
      </PageHero>

      <Section>
        <div className="grid min-w-0 gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-soft">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] bg-soft ring-1 ring-navy/10">
              <Image
                alt="Sosena Mekuria, RN, Founder and Clinical Director of Sosena Nursing Solutions LLC"
                className="h-full w-full object-cover object-[57%_center]"
                fill
                sizes="(min-width: 1024px) 34vw, 90vw"
                src="/images/team/sosena-mekuria-rn.webp"
              />
            </div>
          </div>
          <div className="space-y-8 text-lg leading-8 text-slate">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">Founder</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-navy">Sosena Mekuria, RN</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Founder", "Registered Nurse", "Clinical Director"].map((role) => (
                  <span className="rounded-full border border-navy/10 bg-white px-3 py-1 text-sm font-black text-navy shadow-sm" key={role}>
                    {role}
                  </span>
                ))}
              </div>
            </div>
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
