import type { Metadata } from "next";
import { Card, Section } from "@/components/section";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Sosena Mekuria, RN, Founder and Clinical Director of Sosena Nursing Solutions."
};

export default function AboutPage() {
  return (
    <main>
      <Section eyebrow="About" title="Sosena Mekuria, RN" intro="Founder and Clinical Director of Sosena Nursing Solutions LLC.">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Card>
            <p className="text-2xl font-bold text-navy">Registered Nurse-led clinical services</p>
            <p className="mt-4 text-slate">SNS is built around practical assessment, documentation, and care-planning support for Adult Family Homes.</p>
          </Card>
          <div className="space-y-5 text-lg leading-8 text-slate">
            <p>Sosena brings registered nurse leadership and Adult Family Home operating experience to clinical documentation and care planning.</p>
            <p>Her work emphasizes practical understanding of resident care, individualized care planning, and collaboration with residents, representatives, providers, and AFH teams.</p>
            <p>SNS does not make unsupported credential claims and does not collect detailed medical information through public website forms.</p>
          </div>
        </div>
      </Section>
    </main>
  );
}

