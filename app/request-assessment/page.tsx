import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, PageShell, SectionContainer } from "@/components/section";

export const metadata: Metadata = {
  title: "Request an Assessment",
  description: "Request minimum-intake coordination for an SNS RN assessment or care-plan service."
};

const fieldClass = "mt-2 w-full rounded-xl border border-navy/15 bg-white px-3 py-3 text-navy outline-none transition placeholder:text-slate/60 focus:border-teal focus:ring-4 focus:ring-teal/15";

export default function RequestAssessmentPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Request"
        title="Request an Assessment"
        intro="Submit minimum intake information only. SNS will provide secure next steps when clinical records are needed."
      />

      <SectionContainer>
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="rounded-[26px] bg-navy p-6 text-white shadow-soft sm:p-8">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Public form safety</p>
            <h2 className="mt-3 text-2xl font-black">Minimum coordination details only.</h2>
            <p className="mt-4 leading-7 text-white/70">
              This form routes to the contact step and does not collect or upload clinical records. SNS will provide secure instructions when records are needed.
            </p>
            <div className="mt-6 rounded-2xl border border-white/12 bg-white/7 p-4 text-sm leading-6 text-white/70">
              Do not include diagnoses, medications, Social Security numbers, insurance identifiers, or detailed resident medical information.
            </div>
            <Link className="mt-6 inline-flex font-extrabold text-teal transition hover:text-white" href="/contact">
              Prefer direct contact?
            </Link>
          </aside>
          <form className="grid gap-5 rounded-[26px] border border-navy/10 bg-white p-5 shadow-[0_18px_58px_rgba(23,50,77,0.08)] sm:p-6" method="get" action="/contact">
            <div className="rounded-2xl border border-alert/25 bg-[#fff8f8] p-4 text-sm font-semibold leading-6 text-alert">
              Please do not submit detailed medical information through this public form. SNS will provide secure next steps when clinical records are needed.
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="font-bold text-navy">Requesting person<input className={fieldClass} name="requestingPerson" required /></label>
              <label className="font-bold text-navy">Organization / Adult Family Home<input className={fieldClass} name="organization" /></label>
              <label className="font-bold text-navy">Email<input className={fieldClass} name="email" required type="email" /></label>
              <label className="font-bold text-navy">Phone<input className={fieldClass} name="phone" type="tel" /></label>
              <label className="font-bold text-navy">Requested service<select className={fieldClass} name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Comprehensive RN Assessment</option><option>Annual Reassessment</option><option>Significant-Change Assessment</option><option>Preliminary Negotiated Service Plan</option><option>Negotiated Care Plan</option><option>Care-Plan Review</option><option>External Assessment Review</option></select></label>
              <label className="font-bold text-navy">City / service location<input className={fieldClass} name="location" /></label>
              <label className="font-bold text-navy">Preferred date<input className={fieldClass} name="preferredDate" type="date" /></label>
              <label className="font-bold text-navy">Urgency<select className={fieldClass} name="urgency" defaultValue="Routine"><option>Routine</option><option>Soon</option><option>Time-sensitive</option></select></label>
            </div>
            <label className="font-bold text-navy">General notes<textarea className={`${fieldClass} min-h-32`} name="notes" placeholder="Coordination notes only. Do not include clinical details or resident identifiers." /></label>
            <label className="flex items-start gap-3 text-sm font-semibold leading-6 text-navy">
              <input className="mt-1 h-4 w-4 accent-teal" name="consent" required type="checkbox" />
              I consent to be contacted by SNS about this request and understand this public form is not for detailed medical information.
            </label>
            <button className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#214562] sm:w-fit" type="submit">
              Send Request
            </button>
          </form>
        </div>
      </SectionContainer>
    </PageShell>
  );
}
