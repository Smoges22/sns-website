import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy notice for the Sosena Nursing Solutions public website."
};

export default function PrivacyPage() {
  return (
    <main>
      <Section eyebrow="Privacy" title="Public Website Privacy Notice">
        <div className="max-w-3xl space-y-5 text-slate">
          <p>This public website is for general business information and minimum intake coordination. It is not intended for submitting detailed medical information.</p>
          <p>SNS does not use third-party trackers by default on this website. Information submitted through the public request flow should be limited to contact and scheduling details.</p>
          <p>When clinical records are needed, SNS will provide secure next steps. Do not submit diagnoses, medications, Social Security numbers, insurance identifiers, or uploaded clinical documents through the public website.</p>
        </div>
      </Section>
    </main>
  );
}

