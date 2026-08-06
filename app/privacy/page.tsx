import type { Metadata } from "next";
import { Card, PageHero, PageShell, SectionContainer } from "@/components/section";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy notice for the Sosena Nursing Solutions public website."
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Privacy"
        title="Public Website Privacy Notice"
        intro="This public website is for general business information and minimum intake coordination."
      />
      <SectionContainer>
        <Card className="max-w-4xl p-6 sm:p-8">
          <div className="space-y-6 leading-7 text-slate">
            <section>
              <h2 className="text-xl font-black text-navy">Public website use</h2>
              <p className="mt-3">This public website is not intended for submitting detailed medical information.</p>
            </section>
            <section>
              <h2 className="text-xl font-black text-navy">Tracking and intake</h2>
              <p className="mt-3">SNS does not use third-party trackers by default on this website. Information submitted through the public request flow should be limited to contact and scheduling details.</p>
            </section>
            <section>
              <h2 className="text-xl font-black text-navy">Secure next steps</h2>
              <p className="mt-3">When clinical records are needed, SNS will provide secure next steps. Do not submit diagnoses, medications, Social Security numbers, insurance identifiers, or uploaded clinical documents through the public website.</p>
            </section>
          </div>
        </Card>
      </SectionContainer>
    </PageShell>
  );
}
