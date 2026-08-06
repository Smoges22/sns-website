import type { Metadata } from "next";
import { Card, FinalCta, PageHero, Section } from "@/components/section";

export const metadata: Metadata = {
  title: "RN Assessments",
  description: "Comprehensive, annual, and significant-change RN assessments for Adult Family Home care planning."
};

export default function RnAssessmentsPage() {
  return (
    <main>
      <PageHero
        eyebrow="RN Assessments"
        title="Comprehensive assessment support for Adult Family Homes"
        intro="SNS provides RN-led assessment documentation that helps AFH teams understand resident needs, risks, preferences, and practical care-planning priorities."
      >
        <Card>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Outputs</p>
          <p className="mt-3 text-2xl font-black text-navy">Assessment documentation ready for review and planning.</p>
        </Card>
      </PageHero>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h2 className="text-xl font-black text-navy">Comprehensive assessments</h2><p className="mt-3 leading-7 text-slate">A structured review of resident needs, risks, preferences, support patterns, and care considerations.</p></Card>
          <Card><h2 className="text-xl font-black text-navy">Annual reassessments</h2><p className="mt-3 leading-7 text-slate">Periodic review to support updated documentation and current care-planning conversations.</p></Card>
          <Card><h2 className="text-xl font-black text-navy">Significant-change assessments</h2><p className="mt-3 leading-7 text-slate">Focused assessment support when resident needs, function, or care context changes materially.</p></Card>
        </div>
      </Section>

      <Section className="bg-white" eyebrow="Practical workflow" title="Built for review, care planning, and professional PDF output.">
        <div className="grid gap-5 md:grid-cols-2">
          <Card><h2 className="font-black text-navy">Clear clinical sections</h2><p className="mt-3 text-slate">Assessment content is organized around screening, physical assessment, ADLs, services, and care-planning needs.</p></Card>
          <Card><h2 className="font-black text-navy">RN finalization</h2><p className="mt-3 text-slate">Clinical narratives and final documentation are reviewed through RN judgment before delivery.</p></Card>
        </div>
      </Section>

      <FinalCta title="Request RN assessment support" />
    </main>
  );
}
