import type { Metadata } from "next";
import { Card, Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Nurse Delegation - Coming Soon",
  description: "Nurse delegation is a future SNS service area and is not currently available for booking."
};

export default function NurseDelegationPage() {
  return (
    <main>
      <Section eyebrow="Future service" title="Nurse Delegation - Coming Soon" intro="This service is planned for a future SNS milestone and is not currently available for booking.">
        <Card>
          <p className="text-lg leading-8 text-slate">SNS will announce nurse delegation availability only after the service workflow, staffing, documentation, and safeguards are ready.</p>
        </Card>
      </Section>
    </main>
  );
}

