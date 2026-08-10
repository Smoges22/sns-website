"use client";

import { FormEvent, useState } from "react";
import {
  PublicFormField,
  PublicFormPrivacyNotice,
  PublicFormSelect,
  publicFieldClass,
  publicFormCardClass,
} from "@/components/public-form-ui";
import { buttonVariants } from "@/components/ui";
import { site } from "@/lib/site";

const roleOptions = [
  "Adult Family Home",
  "Referral / Placement Professional",
  "Hospital / Care Team",
  "Assisted Living",
  "Family",
  "Other",
] as const;

export function ContactForm() {
  const [status, setStatus] = useState("");

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "Not provided"}`,
      `Role: ${data.get("role")}`,
      "",
      "Brief non-clinical message:",
      String(data.get("message")),
    ].join("\n");

    setStatus("Your email app should open with the message ready for you to review and send.");
    window.location.href = `mailto:${site.primaryEmail}?subject=${encodeURIComponent("Website contact inquiry")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className={`mt-6 ${publicFormCardClass}`} onSubmit={prepareEmail}>
      <p className="text-sm leading-6 text-slate"><span className="font-black text-navy">Required fields are marked *</span></p>

      <div className="grid gap-5 lg:grid-cols-2">
        <PublicFormField autoComplete="name" label="Name" name="name" required />
        <PublicFormSelect label="I am a" name="role" options={roleOptions} required />
        <PublicFormField autoComplete="email" label="Email" name="email" required type="email" />
        <PublicFormField autoComplete="tel" label="Phone" name="phone" type="tel" />
      </div>

      <div>
        <label className="font-bold text-navy" htmlFor="contact-message">Message *</label>
        <textarea aria-describedby="contact-message-privacy" className={`${publicFieldClass} min-h-36 resize-y`} id="contact-message" maxLength={1000} name="message" required />
        <PublicFormPrivacyNotice id="contact-message-privacy" />
      </div>

      <button className={`inline-flex min-h-12 w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-extrabold transition-colors ${buttonVariants.primary}`} type="submit">Send Message</button>
      <p className="text-xs leading-5 text-slate">This opens your email app so you can review the non-clinical message before sending it to SNS.</p>
      {status ? <p className="text-sm font-bold text-green-700" role="status">{status}</p> : null}
    </form>
  );
}
