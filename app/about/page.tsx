import Image from "next/image";
import Link from "next/link";
import { interactiveCardClass, FinalCta, PageHero, PageShell, SectionContainer } from "@/components/section";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({ title: "About Sosena Mekuria, RN", description: "Meet Sosena Mekuria, RN, founder of Sosena Nursing Solutions and provider of professional RN assessments and individualized care plans in Washington.", path: "/about" });

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero eyebrow="About Sosena Nursing Solutions" title="Sosena Mekuria, RN" intro="Registered Nurse providing professional assessments and individualized care plans with a practical understanding of Adult Family Home care.">
        <Link className="inline-flex min-h-12 items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-extrabold text-white" href="/request-assessment">Request an Assessment</Link>
      </PageHero>
      <SectionContainer>
        <div className="grid items-center gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
          <div className="overflow-hidden rounded-[26px] bg-[#EEF3F5] p-3 shadow-[0_22px_60px_rgba(23,50,77,0.1)]">
            <Image alt="Sosena Mekuria, RN, founder of Sosena Nursing Solutions" className="h-auto w-full rounded-[20px] object-contain" height={1122} priority sizes="(min-width:1024px) 42vw, 92vw" src="/images/team/sosena-mekuria-rn-approved.webp" width={1402} />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[.18em] text-teal">Registered Nurse</p>
            <h2 className="mt-4 text-4xl font-black leading-[1.12] tracking-[-0.03em] text-navy sm:text-5xl">Clinical experience grounded in real-world care</h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-slate">
              <p>Sosena brings more than 10 years of healthcare experience across hospital, skilled nursing and rehabilitation, home health, long-term care, senior care, and Adult Family Home settings.</p>
              <p>Her earlier hospital-based healthcare experience includes Virginia Mason, while her RN experience includes Valley Medical Center. She also brings firsthand experience as an Adult Family Home provider and administrator.</p>
              <p>Today, her work through Sosena Nursing Solutions focuses on professional RN assessments, individualized care plans, and focused clinical follow-up that authorized providers, care teams, and families can understand and use.</p>
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="bg-soft" eyebrow="Mission" title="Clear clinical information should support real care decisions">
        <div className="grid gap-8 md:grid-cols-3">
          {[['RN-led expertise','Professional nursing judgment guides each assessment and care plan.'],['Practical AFH context','Documentation reflects an understanding of day-to-day residential care needs.'],['Person-centered clarity','Needs, preferences, abilities, risks, and care approaches are documented in clear language.']].map(([title,text]) => <div className={`${interactiveCardClass} p-6 sm:p-7`} key={title}><h2 className="text-xl font-black text-navy">{title}</h2><p className="mt-3 leading-7 text-slate">{text}</p></div>)}
        </div>
      </SectionContainer>
      <FinalCta />
    </PageShell>
  );
}
