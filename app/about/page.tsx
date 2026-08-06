import type { Metadata } from "next";
import Image from "next/image";
import { DocumentationShowcase } from "@/components/clinical-visuals";
import { Card, FeatureBox, FinalCta, PageHero, PageShell, SectionContainer, SplitPanel } from "@/components/section";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Sosena Mekuria, RN, Founder and Clinical Director of Sosena Nursing Solutions."
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Meet Your Clinical Partner"
        title="Meet Your Clinical Partner"
        intro="Founder and Clinical Director of Sosena Nursing Solutions LLC, providing RN-led assessment and care-planning support for Adult Family Homes."
      >
        <Card className="flex min-w-0 flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Image
            alt="SNS - Sosena Nursing Solutions"
            className="h-16 w-28 shrink-0 rounded-xl object-contain"
            height={96}
            src="/images/branding/sns-logo-horizontal.png"
            width={168}
          />
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">SNS approach</p>
            <p className="mt-2 max-w-[16ch] break-words text-xl font-black text-navy sm:max-w-none sm:text-2xl">Clinical judgment with practical AFH context.</p>
          </div>
        </Card>
      </PageHero>

      <SectionContainer>
        <SplitPanel className="lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="rounded-[24px] border border-navy/10 bg-soft p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-soft ring-1 ring-navy/10">
              <Image
                alt="Sosena Mekuria, RN, Founder and Clinical Director of Sosena Nursing Solutions LLC"
                className="h-full w-full object-cover object-[57%_center]"
                fill
                sizes="(min-width: 1024px) 34vw, 90vw"
                src="/images/team/sosena-mekuria-rn.webp"
              />
            </div>
          </div>
          <div className="space-y-7 text-lg leading-8 text-slate">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">Founder</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-navy">Sosena Mekuria, RN</h2>
              <p className="mt-2 text-xl font-extrabold text-navy">Founder & Clinical Director</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Founder", "Registered Nurse", "Clinical Director"].map((role) => (
                <FeatureBox className="text-sm font-black text-navy" key={role}>{role}</FeatureBox>
              ))}
            </div>
            <p>Sosena brings registered nurse leadership and Adult Family Home operating experience to clinical documentation and care planning.</p>
            <p>SNS emphasizes practical understanding of resident care, individualized assessment, and collaboration with residents, representatives, providers, and AFH teams.</p>
          </div>
        </SplitPanel>
      </SectionContainer>

      <SectionContainer className="bg-[#F5F7F9]" eyebrow="Care philosophy" title="Clear documentation should support real care decisions.">
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h2 className="font-black text-navy">Practical AFH experience</h2><p className="mt-3 text-slate">Services are shaped around the real coordination needs of Adult Family Homes.</p></Card>
          <Card><h2 className="font-black text-navy">Resident-centered planning</h2><p className="mt-3 text-slate">Care-plan language stays focused on preferences, abilities, risks, and caregiver interventions.</p></Card>
          <Card><h2 className="font-black text-navy">Collaborative review</h2><p className="mt-3 text-slate">SNS works with providers, representatives, and care teams through clear next steps.</p></Card>
        </div>
      </SectionContainer>

      <SectionContainer eyebrow="Documentation standards" title="Assessment and care-plan work stays organized from request to final PDF.">
        <DocumentationShowcase />
      </SectionContainer>

      <FinalCta />
    </PageShell>
  );
}
