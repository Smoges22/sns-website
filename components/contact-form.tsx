"use client";

import { FormEvent, useState } from "react";
import { buttonVariants } from "@/components/ui";
import { site } from "@/lib/site";

const fieldClass = "mt-2 min-h-12 w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-base text-navy outline-none transition placeholder:text-slate/60 focus:border-teal focus:ring-4 focus:ring-teal/15";

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
    <form className="mt-6 grid gap-5 rounded-[18px] border border-[#CCD9E1] bg-white p-5 shadow-[0_8px_24px_rgba(23,50,77,0.045)] sm:p-7" onSubmit={prepareEmail}>
      <p className="text-sm leading-6 text-slate"><span className="font-black text-navy">Required fields are marked *</span></p>

      <Field autoComplete="name" label="Name" name="name" required />

      <div className="grid gap-5 lg:grid-cols-2">
        <Field autoComplete="email" label="Email" name="email" required type="email" />
        <Field autoComplete="tel" label="Phone" name="phone" type="tel" />
      </div>

      <div>
        <label className="font-bold text-navy" htmlFor="contact-role">I am a *</label>
        <select className={fieldClass} defaultValue="" id="contact-role" name="role" required>
          <option disabled value="">Select one</option>
          {[
            "Adult Family Home",
            "Referral / Placement Professional",
            "Hospital / Care Team",
            "Assisted Living",
            "Family",
            "Other",
          ].map((option) => <option key={option}>{option}</option>)}
        </select>
      </div>

      <div>
        <label className="font-bold text-navy" htmlFor="contact-message">Message *</label>
        <textarea aria-describedby="contact-message-privacy" className={`${fieldClass} min-h-36 resize-y`} id="contact-message" maxLength={1000} name="message" required />
        <p className="mt-2 rounded-xl border border-alert/25 bg-[#FFF8F8] p-3 text-sm font-semibold leading-6 text-alert" id="contact-message-privacy">Please do not submit detailed medical or protected health information through this public form or ordinary email. SNS will provide separate instructions when clinical records are needed.</p>
      </div>

      <button className={`inline-flex min-h-12 w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-extrabold transition-colors ${buttonVariants.primary}`} type="submit">Send Message</button>
      <p className="text-xs leading-5 text-slate">This opens your email app so you can review the non-clinical message before sending it to SNS.</p>
      {status ? <p className="text-sm font-bold text-green-700" role="status">{status}</p> : null}
    </form>
  );
}

function Field({ label, name, required = false, type = "text", ...props }: { label: string; name: string; required?: boolean; type?: string; autoComplete?: string }) {
  const id = `contact-${name}`;
  return <div><label className="font-bold text-navy" htmlFor={id}>{label}{required ? " *" : ""}</label><input className={fieldClass} id={id} name={name} required={required} type={type} {...props} /></div>;
}
