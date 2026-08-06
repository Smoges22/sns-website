import type { Metadata } from "next";
import { Card, PageHero, PageShell, SectionContainer } from "@/components/section";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for the Sosena Nursing Solutions public website."
};

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Terms"
        title="Website Terms"
        intro="General terms for using the Sosena Nursing Solutions public website."
      />
      <SectionContainer>
        <Card className="max-w-4xl p-6 sm:p-8">
          <div className="space-y-6 leading-7 text-slate">
            <section>
              <h2 className="text-xl font-black text-navy">General information</h2>
              <p className="mt-3">The information on this website is for general business and service-description purposes only. It does not replace professional clinical judgment or provider direction.</p>
            </section>
            <section>
              <h2 className="text-xl font-black text-navy">Service availability</h2>
              <p className="mt-3">Service availability, scope, and timing are confirmed directly with SNS. Nurse Delegation is listed as Coming Soon and is not currently available for booking through this website.</p>
            </section>
            <section>
              <h2 className="text-xl font-black text-navy">Public forms</h2>
              <p className="mt-3">Do not submit detailed medical information through public website forms or general email until SNS provides secure next steps.</p>
            </section>
          </div>
        </Card>
      </SectionContainer>
    </PageShell>
  );
}
