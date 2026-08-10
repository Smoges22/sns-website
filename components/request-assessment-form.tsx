"use client";

import { FormEvent, useState } from "react";
import {
  PublicFormField,
  PublicFormConsent,
  PublicFormPrivacyNotice,
  PublicFormSelect,
  publicFieldClass,
  publicFormCardClass,
} from "@/components/public-form-ui";
import { buttonVariants } from "@/components/ui";
import { site } from "@/lib/site";

const requesterOptions = ["Adult Family Home", "Referral / Placement Professional", "Hospital / Care Team", "Assisted Living", "Family", "Other"] as const;
const serviceOptions = ["Initial RN Assessment", "Negotiated Care Plan", "Initial Assessment + Care Plan", "Annual Assessment Renewal", "Annual Patient Care Plan", "90-Day Supervisory Visit", "Change in Condition Assessment", "Not Sure"] as const;

export function RequestAssessmentForm() {
  const [status, setStatus] = useState("");
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const body = [
      `Name: ${data.get("name")}`,
      `Organization / Facility: ${data.get("organization") || "Not provided"}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Requester type: ${data.get("requesterType")}`,
      `Service needed: ${data.get("service")}`,
      `Preferred timeline: ${data.get("timeline") || "Not specified"}`,
      "",
      "Brief non-clinical message:",
      String(data.get("message") || "Not provided"),
    ].join("\n");
    setStatus("Your email app should open with the request ready for you to review and send.");
    window.location.href = `mailto:${site.primaryEmail}?subject=${encodeURIComponent("RN assessment request")}&body=${encodeURIComponent(body)}`;
  }
  return (
    <form className={publicFormCardClass} onSubmit={prepareEmail}>
      <p className="text-sm leading-6 text-slate"><span className="font-black text-navy">Required fields are marked *</span></p>
      <div className="grid gap-5 md:grid-cols-2">
        <PublicFormField autoComplete="name" label="Name" name="name" required />
        <PublicFormField autoComplete="organization" label="Organization / Facility" name="organization" />
        <PublicFormField autoComplete="email" label="Email" name="email" required type="email" />
        <PublicFormField autoComplete="tel" label="Phone" name="phone" required type="tel" />
        <PublicFormSelect label="I am a" name="requesterType" options={requesterOptions} required />
        <PublicFormSelect label="Service Needed" name="service" options={serviceOptions} required />
        <PublicFormField label="Preferred Timeline" name="timeline" placeholder="For example: within two weeks" />
      </div>
      <div>
        <label className="font-bold text-navy" htmlFor="request-message">Brief Message</label>
        <textarea aria-describedby="message-privacy" className={`${publicFieldClass} min-h-32 resize-y`} id="request-message" maxLength={1000} name="message" />
        <PublicFormPrivacyNotice id="message-privacy" />
      </div>
      <PublicFormConsent name="consent">I consent to be contacted by SNS about this request and understand this public form is not for clinical records. *</PublicFormConsent>
      <button className={`inline-flex min-h-12 w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-extrabold transition-colors sm:w-fit ${buttonVariants.primary}`} type="submit">Prepare Email Request</button>
      <p className="text-xs leading-5 text-slate">This opens your email app so you can review the non-clinical request before sending it to SNS.</p>
      {status ? <p className="text-sm font-bold text-green-700" role="status">{status}</p> : null}
    </form>
  );
}
