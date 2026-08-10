"use client";

import { FormEvent, useState } from "react";
import {
  PublicFormConsent,
  PublicFormField,
  PublicFormPrivacyNotice,
  PublicFormSection,
  PublicFormSelect,
  publicFieldClass,
  publicFormCardClass,
} from "@/components/public-form-ui";
import { buttonVariants } from "@/components/ui";
import { site } from "@/lib/site";

const serviceOptions = ["RN Assessment", "Individualized / Negotiated Care Plan", "Assessment + Care Plan", "Not Sure"] as const;
const contextOptions = ["New admission / placement", "Annual reassessment", "Significant change in needs", "Care-plan update", "90-day assessment / care-plan review", "Other / Not Sure"] as const;

export function ReferralForm() {
  const [status, setStatus] = useState("");

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const body = [
      "REFERRING CONTACT",
      `Name: ${data.get("referrerName")}`,
      `Organization: ${data.get("organization")}`,
      `Role: ${data.get("role")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      "",
      "CLIENT / PROSPECTIVE RESIDENT CONTEXT",
      `Current setting: ${data.get("currentSetting")}`,
      `Referral context: ${data.get("referralContext")}`,
      "",
      "SERVICE REQUEST",
      `Service requested: ${data.get("service")}`,
      `Reason / timing: ${data.get("context") || "Not specified"}`,
      `Preferred timeline: ${data.get("timeline") || "Not specified"}`,
      `Service location: ${data.get("location")}`,
      "",
      "Brief non-clinical coordination note:",
      String(data.get("message") || "Not provided"),
    ].join("\n");

    setStatus("Your email app should open with the referral ready for you to review and send.");
    window.location.href = `mailto:${site.primaryEmail}?subject=${encodeURIComponent("Professional referral to SNS")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className={`${publicFormCardClass} !gap-7`} onSubmit={prepareEmail}>
      <p className="text-sm leading-6 text-slate"><span className="font-black text-navy">Required fields are marked *</span></p>

      <PublicFormSection legend="Referring Contact" intro="Provide your professional contact information so SNS can follow up about the referral.">
        <div className="grid gap-5 md:grid-cols-2">
          <PublicFormField autoComplete="name" label="Name" name="referrerName" required />
          <PublicFormField autoComplete="organization" label="Organization" name="organization" required />
          <PublicFormField autoComplete="organization-title" label="Role" name="role" required />
          <PublicFormField autoComplete="email" label="Email" name="email" required type="email" />
          <PublicFormField autoComplete="tel" label="Phone" name="phone" required type="tel" />
        </div>
      </PublicFormSection>

      <PublicFormSection legend="Client / Prospective Resident" intro="Share only the non-clinical context needed to begin coordination.">
        <div className="grid gap-5 md:grid-cols-2">
          <PublicFormSelect label="Current Setting" name="currentSetting" options={["Hospital / Care Setting", "Assisted Living Community", "Adult Family Home", "Private Residence", "Other / Not Sure"]} required />
          <PublicFormSelect label="Referral Context" name="referralContext" options={["Prospective Adult Family Home Admission", "Hospital or Care-Setting Discharge", "Transition Between Residential Care Settings", "Current Resident Follow-Up", "Other / Not Sure"]} required />
        </div>
        <div className="mt-5"><PublicFormPrivacyNotice>Do not enter the client or resident&apos;s name, date of birth, diagnoses, medications, insurance information, or other clinical details. SNS will provide separate instructions when clinical records are needed.</PublicFormPrivacyNotice></div>
      </PublicFormSection>

      <PublicFormSection legend="Service Request" intro="Select an RN assessment, individualized care plan, both primary services, or Not Sure.">
        <div className="grid gap-5 md:grid-cols-2">
          <PublicFormSelect label="Service Requested" name="service" options={serviceOptions} required />
          <PublicFormSelect label="Reason / Timing" name="context" options={contextOptions} />
          <PublicFormField label="Preferred Timeline" name="timeline" placeholder="For example: within two weeks" />
        </div>
      </PublicFormSection>

      <PublicFormSection legend="Location" intro="Availability is confirmed based on the service location.">
        <PublicFormField label="Service Location" name="location" placeholder="City or general facility location" required />
      </PublicFormSection>

      <div>
        <label className="font-bold text-navy" htmlFor="referral-message">Brief Coordination Note</label>
        <textarea aria-describedby="referral-message-privacy" className={`${publicFieldClass} min-h-32 resize-y`} id="referral-message" maxLength={1000} name="message" />
        <PublicFormPrivacyNotice id="referral-message-privacy">Please do not submit detailed medical or protected health information through this public form or ordinary email. SNS will provide separate instructions for securely sharing clinical records when needed.</PublicFormPrivacyNotice>
      </div>

      <PublicFormConsent name="authorization">I am authorized to coordinate this referral and consent to be contacted by SNS. I understand this public form is not for clinical records. *</PublicFormConsent>

      <button className={`inline-flex min-h-12 w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-extrabold transition-colors sm:w-fit ${buttonVariants.referral}`} type="submit">Prepare Referral Email</button>
      <p className="text-xs leading-5 text-slate">This opens your email app so you can review the non-clinical referral before sending it to SNS.</p>
      {status ? <p className="text-sm font-bold text-green-700" role="status">{status}</p> : null}
    </form>
  );
}
