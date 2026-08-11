"use client";

import {
  PublicFormField,
  PublicFormConsent,
  PublicFormHoneypot,
  PublicFormPrivacyNotice,
  PublicFormSelect,
  PublicFormSubmissionStatus,
  publicFieldClass,
  publicFormCardClass,
} from "@/components/public-form-ui";
import { usePublicFormSubmit } from "@/components/use-public-form-submit";
import { buttonVariants } from "@/components/ui";
import { contextOptions, publicFormFieldNames, requesterOptions, serviceOptions } from "@/lib/public-form-config";

export function RequestAssessmentForm() {
  const { handleSubmit, message, state } = usePublicFormSubmit({
    booleanFields: ["consent"],
    fields: publicFormFieldNames.assessment_request,
    formType: "assessment_request",
    successMessage: "Thank you. Your assessment request has been received. SNS will review the request and contact you regarding availability and next steps.",
  });

  return (
    <form aria-busy={state === "submitting"} className={`relative ${publicFormCardClass}`} onSubmit={handleSubmit}>
      <PublicFormHoneypot id="assessment-website" />
      <p className="text-sm leading-6 text-slate"><span className="font-black text-navy">Required fields are marked *</span></p>
      <div className="grid gap-5 md:grid-cols-2">
        <PublicFormField autoComplete="name" label="Name" maxLength={120} name="name" required />
        <PublicFormField autoComplete="organization" label="Organization / Facility" maxLength={160} name="organization" />
        <PublicFormField autoComplete="email" label="Email" maxLength={254} name="email" required type="email" />
        <PublicFormField autoComplete="tel" label="Phone" maxLength={40} name="phone" required type="tel" />
        <PublicFormSelect label="I am a" name="requesterType" options={requesterOptions} required />
        <PublicFormSelect label="Service Needed" name="service" options={serviceOptions} required />
        <PublicFormSelect label="Reason / Timing" name="context" options={contextOptions} />
        <PublicFormField label="Preferred Timeline" maxLength={120} name="timeline" placeholder="For example: within two weeks" />
      </div>
      <div>
        <label className="font-bold text-navy" htmlFor="request-message">Brief Message</label>
        <textarea aria-describedby="message-privacy" className={`${publicFieldClass} min-h-32 resize-y`} id="request-message" maxLength={1000} name="message" />
        <PublicFormPrivacyNotice id="message-privacy" />
      </div>
      <PublicFormConsent name="consent">I consent to be contacted by SNS about this request and understand this public form is not for clinical records. *</PublicFormConsent>
      <button className={`inline-flex min-h-12 w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-extrabold transition-colors disabled:cursor-wait disabled:opacity-70 sm:w-fit ${buttonVariants.primary}`} disabled={state === "submitting"} type="submit">{state === "submitting" ? "Submitting Request..." : "Submit Assessment Request"}</button>
      <PublicFormSubmissionStatus message={message} state={state} />
    </form>
  );
}
