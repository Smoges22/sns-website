import type { Metadata } from "next";
import Link from "next/link";
import { Card, Section } from "@/components/section";
import { launchServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "RN assessments, reassessments, negotiated care plans, and care-plan review services for Adult Family Homes."
};

export default function ServicesPage() {
  return (
    <main>
      <Section eyebrow="Services" title="Clinical services for Adult Family Homes" intro="SNS focuses on professional RN assessment and practical care-planning documentation.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {launchServices.map((service) => (
            <Card key={service}>
              <h2 className="font-bold text-navy">{service}</h2>
              <p className="mt-3 text-sm leading-6 text-slate">Structured support for assessment, review, and documentation workflows.</p>
            </Card>
          ))}
          <Card>
            <h2 className="font-bold text-navy">Nurse Delegation - Coming Soon</h2>
            <p className="mt-3 text-sm leading-6 text-slate">Future service. Not currently available for booking.</p>
          </Card>
        </div>
        <div className="mt-10 flex gap-3">
          <Link className="rounded-md bg-navy px-5 py-3 text-sm font-bold text-white" href="/request-assessment">Request an Assessment</Link>
        </div>
      </Section>
    </main>
  );
}

