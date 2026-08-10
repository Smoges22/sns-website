"use client";

import { FormEvent, useState } from "react";
import { buttonVariants } from "@/components/ui";
import { serviceDefinitions } from "@/lib/services";
import { site } from "@/lib/site";

const fieldClass = "mt-2 min-h-12 w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-base text-navy outline-none transition placeholder:text-slate/60 focus:border-teal focus:ring-4 focus:ring-teal/15";
const serviceOptions = [...serviceDefinitions.map((service) => service.shortTitle), "Not Sure"];

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
    <form className="grid gap-7 rounded-[20px] border border-[#CCD9E1] border-t-[3px] border-t-[#C39236] bg-white p-5 shadow-[0_16px_42px_rgba(23,50,77,0.07)] sm:p-8" onSubmit={prepareEmail}>
      <p className="text-sm leading-6 text-slate"><span className="font-black text-navy">Required fields are marked *</span></p>

      <FormSection legend="Referring Contact" intro="Provide your professional contact information so SNS can follow up about the referral.">
        <div className="grid gap-5 md:grid-cols-2">
          <Field autoComplete="name" label="Name" name="referrerName" required />
          <Field autoComplete="organization" label="Organization" name="organization" required />
          <Field autoComplete="organization-title" label="Role" name="role" required />
          <Field autoComplete="email" label="Email" name="email" required type="email" />
          <Field autoComplete="tel" label="Phone" name="phone" required type="tel" />
        </div>
      </FormSection>

      <FormSection legend="Client / Prospective Resident" intro="Share only the non-clinical context needed to begin coordination.">
        <div className="grid gap-5 md:grid-cols-2">
          <Select label="Current Setting" name="currentSetting" options={["Hospital / Care Setting", "Assisted Living Community", "Adult Family Home", "Private Residence", "Other / Not Sure"]} required />
          <Select label="Referral Context" name="referralContext" options={["Prospective Adult Family Home Admission", "Hospital or Care-Setting Discharge", "Transition Between Residential Care Settings", "Current Resident Follow-Up", "Other / Not Sure"]} required />
        </div>
        <p className="mt-5 rounded-xl border border-alert/25 bg-[#FFF8F8] p-4 text-sm font-semibold leading-6 text-alert">Do not enter the client or resident&apos;s name, date of birth, diagnoses, medications, insurance information, or other clinical details. SNS will provide separate instructions when clinical records are needed.</p>
      </FormSection>

      <FormSection legend="Service Request" intro="Select one of the current SNS services or choose Not Sure.">
        <div className="grid gap-5 md:grid-cols-2">
          <Select label="Service Requested" name="service" options={serviceOptions} required />
          <Field label="Preferred Timeline" name="timeline" placeholder="For example: within two weeks" />
        </div>
      </FormSection>

      <FormSection legend="Location" intro="Availability is confirmed based on the service location.">
        <Field label="Service Location" name="location" placeholder="City or general facility location" required />
      </FormSection>

      <div>
        <label className="font-bold text-navy" htmlFor="referral-message">Brief Coordination Note</label>
        <textarea aria-describedby="referral-message-privacy" className={`${fieldClass} min-h-32 resize-y`} id="referral-message" maxLength={1000} name="message" />
        <p className="mt-2 rounded-xl border border-alert/25 bg-[#FFF8F8] p-3 text-sm font-semibold leading-6 text-alert" id="referral-message-privacy">Please do not submit detailed medical or protected health information through this public form or ordinary email. SNS will provide separate instructions for securely sharing clinical records when needed.</p>
      </div>

      <label className="flex min-h-11 items-start gap-3 text-sm font-semibold leading-6 text-navy">
        <input className="mt-1 h-5 w-5 shrink-0 accent-navy" name="authorization" required type="checkbox" />
        <span>I am authorized to coordinate this referral and consent to be contacted by SNS. I understand this public form is not for clinical records. *</span>
      </label>

      <button className={`inline-flex min-h-12 w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-extrabold transition-colors sm:w-fit ${buttonVariants.referral}`} type="submit">Prepare Referral Email</button>
      <p className="text-xs leading-5 text-slate">This opens your email app so you can review the non-clinical referral before sending it to SNS.</p>
      {status ? <p className="text-sm font-bold text-green-700" role="status">{status}</p> : null}
    </form>
  );
}

function FormSection({ children, legend, intro }: { children: React.ReactNode; legend: string; intro: string }) {
  return <fieldset className="min-w-0 border-t border-[#D8E3E9] pt-6"><legend className="pr-4 font-display text-2xl font-bold text-navy">{legend}</legend><p className="mb-5 mt-2 max-w-3xl text-sm leading-6 text-slate">{intro}</p>{children}</fieldset>;
}

function Field({ label, name, required = false, type = "text", ...props }: { label: string; name: string; required?: boolean; type?: string; autoComplete?: string; placeholder?: string }) {
  const id = `referral-${name}`;
  return <div><label className="font-bold text-navy" htmlFor={id}>{label}{required ? " *" : ""}</label><input className={fieldClass} id={id} name={name} required={required} type={type} {...props} /></div>;
}

function Select({ label, name, options, required = false }: { label: string; name: string; options: readonly string[]; required?: boolean }) {
  const id = `referral-${name}`;
  return <div><label className="font-bold text-navy" htmlFor={id}>{label}{required ? " *" : ""}</label><select className={fieldClass} defaultValue="" id={id} name={name} required={required}><option disabled value="">Select one</option>{options.map((option)=><option key={option}>{option}</option>)}</select></div>;
}
