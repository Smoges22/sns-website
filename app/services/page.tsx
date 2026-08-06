import type { Metadata } from "next";
import Link from "next/link";
import { ServiceGroups } from "@/components/clinical-visuals";
import { Card, FinalCta, PageHero, Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Services",
  description: "RN assessments, reassessments, negotiated care plans, and care-plan review services for Adult Family Homes."
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Clinical services for Adult Family Homes"
        intro="SNS focuses on RN assessment, care-plan preparation, and document review workflows that help AFH teams move from clinical findings to practical care documentation."
      >
        <Card>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Launch focus</p>
          <p className="mt-3 max-w-[18ch] break-words text-2xl font-black text-navy sm:max-w-none">Assessments, care planning, and document review.</p>
        </Card>
      </PageHero>

      <Section>
        <ServiceGroups />
      </Section>

      <Section className="bg-white" eyebrow="Service detail" title="Choose the path that matches your documentation need.">
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-black text-navy">RN assessment support</h2>
            <p className="mt-3 leading-7 text-slate">For comprehensive assessments, annual reassessments, and significant changes that require updated clinical review.</p>
            <Link className="mt-5 inline-flex font-extrabold text-teal" href="/services/rn-assessments">View assessment services</Link>
          </Card>
          <Card>
            <h2 className="text-xl font-black text-navy">Care-plan documentation</h2>
            <p className="mt-3 leading-7 text-slate">For preliminary service plans, negotiated care plans, care-plan reviews, and external assessment preparation.</p>
            <Link className="mt-5 inline-flex font-extrabold text-teal" href="/services/negotiated-care-plans">View care-plan services</Link>
          </Card>
        </div>
      </Section>

      <FinalCta />
    </main>
  );
}
