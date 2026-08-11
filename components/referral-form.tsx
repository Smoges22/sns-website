"use client";

import {
  PublicFormConsent,
  PublicFormField,
  PublicFormHoneypot,
  PublicPhoneField,
  PublicFormPrivacyNotice,
  PublicFormSection,
  PublicFormSelect,
  PublicFormSubmissionStatus,
  publicFieldClass,
  publicFormCardClass,
} from "@/components/public-form-ui";
import { usePublicFormSubmit } from "@/components/use-public-form-submit";
import { buttonVariants } from "@/components/ui";
import {
  contextOptions,
  currentSettingOptions,
  publicFormFieldNames,
  referralContextOptions,
  serviceOptions,
} from "@/lib/public-form-config";

export function ReferralForm() {
  const { handleSubmit, message, state } = usePublicFormSubmit({
    booleanFields: ["authorization"],
    fields: publicFormFieldNames.client_referral,
    formType: "client_referral",
    successMessage: "Thank you. Your referral has been received. SNS will review the request and follow up with the referring contact regarding next steps.",
  });

  return (
    <form aria-busy={state === "submitting"} className={`relative ${publicFormCardClass} !gap-7`} onSubmit={handleSubmit}>
      <PublicFormHoneypot id="referral-website" />
      <p className="text-sm leading-6 text-slate"><span className="font-black text-navy">Required fields are marked *</span></p>

      <PublicFormSection legend="Referring Contact" intro="Provide your professional contact information so SNS can follow up about the referral.">
        <div className="grid gap-5 md:grid-cols-2">
          <PublicFormField autoComplete="name" label="Name" maxLength={120} name="referrerName" required />
          <PublicFormField autoComplete="organization" label="Organization" maxLength={160} name="organization" required />
          <PublicFormField autoComplete="organization-title" label="Role" maxLength={120} name="role" required />
          <PublicFormField autoComplete="email" label="Email" maxLength={254} name="email" required type="email" />
          <PublicPhoneField label="Phone" name="phone" required />
        </div>
      </PublicFormSection>

      <PublicFormSection legend="Client / Prospective Resident" intro="Share only the non-clinical context needed to begin coordination.">
        <div className="grid gap-5 md:grid-cols-2">
          <PublicFormSelect label="Current Setting" name="currentSetting" options={currentSettingOptions} required />
          <PublicFormSelect label="Referral Context" name="referralContext" options={referralContextOptions} required />
        </div>
        <div className="mt-5"><PublicFormPrivacyNotice>Do not enter the client or resident&apos;s name, date of birth, diagnoses, medications, insurance information, or other clinical details. SNS will provide separate instructions when clinical records are needed.</PublicFormPrivacyNotice></div>
      </PublicFormSection>

      <PublicFormSection legend="Service Request" intro="Select an RN assessment, individualized care plan, both primary services, or Not Sure.">
        <div className="grid gap-5 md:grid-cols-2">
          <PublicFormSelect label="Service Requested" name="service" options={serviceOptions} required />
          <PublicFormSelect label="Reason / Timing" name="context" options={contextOptions} />
          <PublicFormField label="Preferred Timeline" maxLength={120} name="timeline" placeholder="For example: within two weeks" />
        </div>
      </PublicFormSection>

      <PublicFormSection legend="Location" intro="Availability is confirmed based on the service location.">
        <PublicFormField label="Service Location" maxLength={200} name="location" placeholder="City or general facility location" required />
      </PublicFormSection>

      <div>
        <label className="font-bold text-navy" htmlFor="referral-message">Brief Coordination Note</label>
        <textarea aria-describedby="referral-message-privacy" className={`${publicFieldClass} min-h-32 resize-y`} id="referral-message" maxLength={1000} name="message" />
        <PublicFormPrivacyNotice id="referral-message-privacy">Please do not submit detailed medical or protected health information through this public form or ordinary email. SNS will provide separate instructions for securely sharing clinical records when needed.</PublicFormPrivacyNotice>
      </div>

      <PublicFormConsent name="authorization">I am authorized to coordinate this referral and consent to be contacted by SNS. I understand this public form is not for clinical records. *</PublicFormConsent>

      <button className={`inline-flex min-h-12 w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-extrabold transition-colors disabled:cursor-wait disabled:opacity-70 sm:w-fit ${buttonVariants.referral}`} disabled={state === "submitting"} type="submit">{state === "submitting" ? "Submitting Referral..." : "Submit Referral"}</button>
      <PublicFormSubmissionStatus message={message} state={state} />
    </form>
  );
}
