import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Request an Assessment",
  description: "Request minimum-intake coordination for an SNS RN assessment or care-plan service."
};

const fieldClass = "mt-2 w-full rounded-md border border-navy/15 bg-white px-3 py-3 text-navy outline-none transition focus:border-teal";

export default function RequestAssessmentPage() {
  return (
    <main>
      <Section eyebrow="Request" title="Request an Assessment" intro="Submit minimum intake information only. SNS will provide secure next steps when clinical records are needed.">
        <form className="grid max-w-4xl gap-5 rounded-md border border-navy/10 bg-soft p-6" method="get" action="/contact">
          <div className="rounded-md border border-alert/25 bg-white p-4 text-sm font-semibold leading-6 text-alert">
            Please do not submit detailed medical information through this public form. SNS will provide secure next steps when clinical records are needed.
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="font-semibold text-navy">Requesting person<input className={fieldClass} name="requestingPerson" required /></label>
            <label className="font-semibold text-navy">Organization / Adult Family Home<input className={fieldClass} name="organization" /></label>
            <label className="font-semibold text-navy">Email<input className={fieldClass} name="email" required type="email" /></label>
            <label className="font-semibold text-navy">Phone<input className={fieldClass} name="phone" type="tel" /></label>
            <label className="font-semibold text-navy">Requested service<select className={fieldClass} name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Comprehensive RN Assessment</option><option>Annual Reassessment</option><option>Significant-Change Assessment</option><option>Negotiated Care Plan</option><option>Care-Plan Review</option><option>External Assessment Review</option></select></label>
            <label className="font-semibold text-navy">City / service location<input className={fieldClass} name="location" /></label>
            <label className="font-semibold text-navy">Preferred date<input className={fieldClass} name="preferredDate" type="date" /></label>
            <label className="font-semibold text-navy">Urgency<select className={fieldClass} name="urgency" defaultValue="Routine"><option>Routine</option><option>Soon</option><option>Time-sensitive</option></select></label>
          </div>
          <label className="font-semibold text-navy">General notes<textarea className={`${fieldClass} min-h-32`} name="notes" placeholder="Do not include diagnoses, medications, Social Security numbers, insurance identifiers, or detailed resident medical information." /></label>
          <label className="flex items-start gap-3 text-sm font-semibold text-navy">
            <input className="mt-1 h-4 w-4" name="consent" required type="checkbox" />
            I consent to be contacted by SNS about this request and understand this public form is not for detailed medical information.
          </label>
          <button className="w-full rounded-md bg-navy px-5 py-3 text-sm font-bold text-white sm:w-fit" type="submit">Continue to Contact</button>
        </form>
      </Section>
    </main>
  );
}

