import type { Metadata } from "next";
import Link from "next/link";
import { Card, Section } from "@/components/section";

export const metadata: Metadata = {
  title: "RN Assessments",
  description: "Comprehensive, annual, and significant-change RN assessments for Adult Family Home care planning."
};

export default function RnAssessmentsPage() {
  return (
    <main>
      <Section eyebrow="Service" title="Comprehensive RN Assessments" intro="Registered nurse-led assessment documentation for Adult Family Home residents and care-planning teams.">
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h2 className="font-bold text-navy">Comprehensive assessments</h2><p className="mt-3 text-slate">Organized review of resident needs, risks, preferences, and care considerations.</p></Card>
          <Card><h2 className="font-bold text-navy">Annual reassessments</h2><p className="mt-3 text-slate">Periodic review to support updated documentation and care planning.</p></Card>
          <Card><h2 className="font-bold text-navy">Significant-change assessments</h2><p className="mt-3 text-slate">Assessment support when resident needs or care conditions change materially.</p></Card>
        </div>
        <Link className="mt-10 inline-flex rounded-md bg-navy px-5 py-3 text-sm font-bold text-white" href="/request-assessment">Request an Assessment</Link>
      </Section>
    </main>
  );
}

