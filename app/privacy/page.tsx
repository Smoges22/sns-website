import type { Metadata } from "next";
import { Card, PageHero, Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy notice for the Sosena Nursing Solutions public website."
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Privacy"
        title="Public Website Privacy Notice"
        intro="This public website is for general business information and minimum intake coordination."
      />
      <Section>
        <Card className="max-w-4xl">
          <div className="space-y-5 leading-7 text-slate">
            <p>This public website is not intended for submitting detailed medical information.</p>
            <p>SNS does not use third-party trackers by default on this website. Information submitted through the public request flow should be limited to contact and scheduling details.</p>
            <p>When clinical records are needed, SNS will provide secure next steps. Do not submit diagnoses, medications, Social Security numbers, insurance identifiers, or uploaded clinical documents through the public website.</p>
          </div>
        </Card>
      </Section>
    </main>
  );
}
