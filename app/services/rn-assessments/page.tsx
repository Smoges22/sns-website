import type { Metadata } from "next";
import { WorkflowTimeline } from "@/components/clinical-visuals";
import { Card, FinalCta, PageHero, PageShell, SectionContainer } from "@/components/section";

export const metadata: Metadata = {
  title: "RN Assessments",
  description: "Comprehensive, annual, and significant-change RN assessments for Adult Family Home care planning."
};

export default function RnAssessmentsPage() {
  return (
    <PageShell>
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

      <SectionContainer eyebrow="What the service includes" title="Assessment types shaped around documentation needs.">
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h2 className="text-xl font-black text-navy">Comprehensive assessments</h2><p className="mt-3 leading-7 text-slate">A structured review of resident needs, risks, preferences, support patterns, and care considerations.</p></Card>
          <Card><h2 className="text-xl font-black text-navy">Annual reassessments</h2><p className="mt-3 leading-7 text-slate">Periodic review to support updated documentation and current care-planning conversations.</p></Card>
          <Card><h2 className="text-xl font-black text-navy">Significant-change assessments</h2><p className="mt-3 leading-7 text-slate">Focused assessment support when resident needs, function, or care context changes materially.</p></Card>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-[#F5F7F9]" eyebrow="Who it helps" title="Designed for providers who need clearer clinical records.">
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h2 className="font-black text-navy">AFH providers</h2><p className="mt-3 text-slate">Support for assessment review, care planning, and documentation readiness.</p></Card>
          <Card><h2 className="font-black text-navy">Families and representatives</h2><p className="mt-3 text-slate">Clearer language around care needs, supports, risks, and preferences.</p></Card>
          <Card><h2 className="font-black text-navy">Care teams</h2><p className="mt-3 text-slate">Documentation that can translate findings into practical daily-care priorities.</p></Card>
        </div>
      </SectionContainer>

      <SectionContainer eyebrow="Process" title="Built for review, care planning, and professional PDF output.">
        <WorkflowTimeline />
      </SectionContainer>

      <FinalCta title="Request RN assessment support" />
    </PageShell>
  );
}
