import type { Metadata } from "next";
import Link from "next/link";
import { Card, PageHero, PageShell, SectionContainer } from "@/components/section";

export const metadata: Metadata = {
  title: "Nurse Delegation - Coming Soon",
  description: "Nurse delegation is a future SNS service area and is not currently available for booking."
};

export default function NurseDelegationPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Future service"
        title="Nurse Delegation - Coming Soon"
        intro="Nurse Delegation is planned as a future SNS service. Availability will be announced after clinical workflows, documentation standards, and operational safeguards are ready."
      >
        <Card>
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Launch boundary</p>
          <p className="mt-3 text-2xl font-black text-navy">Not currently available for booking.</p>
        </Card>
      </PageHero>

      <SectionContainer className="bg-[#F5F7F9]" eyebrow="Future readiness" title="SNS will announce this service only when the clinical safeguards are ready.">
        <div className="grid gap-5 md:grid-cols-3">
          <Card><h2 className="font-black text-navy">Workflow readiness</h2><p className="mt-3 text-slate">SNS will announce this service only after the clinical workflow is ready.</p></Card>
          <Card><h2 className="font-black text-navy">Documentation standards</h2><p className="mt-3 text-slate">Future launch will require clear documentation practices and service boundaries.</p></Card>
          <Card><h2 className="font-black text-navy">Operational safeguards</h2><p className="mt-3 text-slate">Availability depends on staffing, coordination, and safeguards being prepared.</p></Card>
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="rounded-[26px] border border-teal/20 bg-[#EDF6FA] p-6 sm:p-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Current status</p>
          <h2 className="mt-3 text-3xl font-black text-navy">Launching Soon, not available for booking yet.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate">For currently available services, request RN assessment or care-plan documentation support.</p>
          <Link className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#214562]" href="/services">
            View Available Services
          </Link>
        </div>
      </SectionContainer>
    </PageShell>
  );
}
