"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

const fieldClass = "mt-2 min-h-12 w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-base text-navy outline-none transition placeholder:text-slate/60 focus:border-teal focus:ring-4 focus:ring-teal/15";

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
    <form className="grid gap-5 rounded-[18px] border border-[#CCD9E1] border-t-[3px] border-t-navy bg-white p-5 shadow-[0_12px_34px_rgba(23,50,77,0.06)] sm:p-8" onSubmit={prepareEmail}>
      <p className="text-sm leading-6 text-slate"><span className="font-black text-navy">Required fields are marked *</span></p>
      <div className="grid gap-5 md:grid-cols-2">
        <Field autoComplete="name" label="Name" name="name" required />
        <Field autoComplete="organization" label="Organization / Facility" name="organization" />
        <Field autoComplete="email" label="Email" name="email" required type="email" />
        <Field autoComplete="tel" label="Phone" name="phone" required type="tel" />
        <Select label="I am a" name="requesterType" required options={["Adult Family Home", "Referral / Placement Professional", "Hospital / Care Team", "Assisted Living", "Family", "Other"]} />
        <Select label="Service Needed" name="service" required options={["Initial RN Assessment", "Negotiated Care Plan", "Initial Assessment + Care Plan", "Annual Assessment Renewal", "Annual Patient Care Plan", "90-Day Supervisory Visit", "Change in Condition Assessment", "Not Sure"]} />
        <Field label="Preferred Timeline" name="timeline" placeholder="For example: within two weeks" />
      </div>
      <div>
        <label className="font-bold text-navy" htmlFor="request-message">Brief Message</label>
        <textarea aria-describedby="message-privacy" className={`${fieldClass} min-h-32 resize-y`} id="request-message" maxLength={1000} name="message" />
        <p className="mt-2 rounded-xl border border-alert/25 bg-[#fff8f8] p-3 text-sm font-semibold leading-6 text-alert" id="message-privacy">Please do not submit detailed medical or protected health information through this public form or ordinary email. SNS will provide separate instructions when clinical records are needed.</p>
      </div>
      <label className="flex min-h-11 items-start gap-3 text-sm font-semibold leading-6 text-navy">
        <input className="mt-1 h-5 w-5 shrink-0 accent-navy" name="consent" required type="checkbox" />
        <span>I consent to be contacted by SNS about this request and understand this public form is not for clinical records. *</span>
      </label>
      <button className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#214562] sm:w-fit" type="submit">Prepare Email Request</button>
      <p className="text-xs leading-5 text-slate">This opens your email app so you can review the non-clinical request before sending it to SNS.</p>
      {status ? <p className="text-sm font-bold text-green-700" role="status">{status}</p> : null}
    </form>
  );
}

function Field({ label, name, required = false, type = "text", ...props }: { label: string; name: string; required?: boolean; type?: string; autoComplete?: string; placeholder?: string }) {
  return <div><label className="font-bold text-navy" htmlFor={name}>{label}{required ? " *" : ""}</label><input className={fieldClass} id={name} name={name} required={required} type={type} {...props} /></div>;
}

function Select({ label, name, options, required = false }: { label: string; name: string; options: string[]; required?: boolean }) {
  return <div><label className="font-bold text-navy" htmlFor={name}>{label}{required ? " *" : ""}</label><select className={fieldClass} defaultValue="" id={name} name={name} required={required}><option disabled value="">Select one</option>{options.map((option)=><option key={option}>{option}</option>)}</select></div>;
}
