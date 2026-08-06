import type { Metadata } from "next";
import Link from "next/link";
import { Card, Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Negotiated Care Plans",
  description: "Preliminary negotiated service plans, negotiated care plans, care-plan reviews, and external assessment review."
};

export default function NegotiatedCarePlansPage() {
  return (
    <main>
      <Section eyebrow="Service" title="Negotiated Care Plans" intro="Practical, resident-centered care-plan documentation based on assessed needs and care-team context.">
        <div className="grid gap-5 md:grid-cols-2">
          <Card><h2 className="font-bold text-navy">Preliminary negotiated service plans</h2><p className="mt-3 text-slate">Clear draft planning support connected to assessment findings.</p></Card>
          <Card><h2 className="font-bold text-navy">Care-plan reviews</h2><p className="mt-3 text-slate">Review and preparation support for external assessments and changing care needs.</p></Card>
        </div>
        <Link className="mt-10 inline-flex rounded-md bg-navy px-5 py-3 text-sm font-bold text-white" href="/request-assessment">Request Care-Plan Support</Link>
      </Section>
    </main>
  );
}

