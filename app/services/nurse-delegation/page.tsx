import type { Metadata } from "next";
import { Card, PageHero, Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Nurse Delegation — Coming Soon",
  description: "Nurse delegation is a future SNS service area and is not currently available for booking."
};

export default function NurseDelegationPage() {
  return (
    <main>
      <PageHero
        eyebrow="Future service"
        title="Nurse Delegation — Coming Soon"
        intro="Nurse Delegation is planned as a future SNS service. Availability will be announced after clinical workflows, documentation standards, and operational safeguards are ready."
      >
        <Card>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Launch boundary</p>
          <p className="mt-3 text-2xl font-black text-navy">Not currently available for booking.</p>
        </Card>
      </PageHero>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h2 className="font-black text-navy">Workflow readiness</h2><p className="mt-3 text-slate">SNS will announce this service only after the clinical workflow is ready.</p></Card>
          <Card><h2 className="font-black text-navy">Documentation standards</h2><p className="mt-3 text-slate">Future launch will require clear documentation practices and service boundaries.</p></Card>
          <Card><h2 className="font-black text-navy">Operational safeguards</h2><p className="mt-3 text-slate">Availability depends on staffing, coordination, and safeguards being prepared.</p></Card>
        </div>
      </Section>
    </main>
  );
}
