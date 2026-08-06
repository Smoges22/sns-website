import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for the Sosena Nursing Solutions public website."
};

export default function TermsPage() {
  return (
    <main>
      <Section eyebrow="Terms" title="Website Terms">
        <div className="max-w-3xl space-y-5 text-slate">
          <p>The information on this website is for general business and service-description purposes only. It does not replace professional clinical judgment or provider direction.</p>
          <p>Service availability, scope, and timing are confirmed directly with SNS. Nurse Delegation is listed as Coming Soon and is not currently available for booking through this website.</p>
          <p>Do not submit detailed medical information through public website forms or general email until SNS provides secure next steps.</p>
        </div>
      </Section>
    </main>
  );
}

