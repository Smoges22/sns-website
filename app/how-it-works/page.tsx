import type { Metadata } from "next";
import { Card, Section } from "@/components/section";
import { howItWorks } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How SNS coordinates requests, secure next steps, RN assessment, and care-plan documentation."
};

export default function HowItWorksPage() {
  return (
    <main>
      <Section eyebrow="How it works" title="A careful process for clinical documentation" intro="The public website collects only minimum intake details. SNS coordinates secure next steps when clinical records are needed.">
        <div className="grid gap-5 md:grid-cols-4">
          {howItWorks.map((step, index) => (
            <Card key={step.title}>
              <p className="text-sm font-bold text-teal">0{index + 1}</p>
              <h2 className="mt-3 font-bold text-navy">{step.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate">{step.text}</p>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}

