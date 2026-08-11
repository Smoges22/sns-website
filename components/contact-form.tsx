"use client";

import {
  PublicFormField,
  PublicFormHoneypot,
  PublicFormPrivacyNotice,
  PublicFormSelect,
  PublicFormSubmissionStatus,
  publicFieldClass,
  publicFormCardClass,
} from "@/components/public-form-ui";
import { usePublicFormSubmit } from "@/components/use-public-form-submit";
import { buttonVariants } from "@/components/ui";
import { contactRoleOptions, publicFormFieldNames } from "@/lib/public-form-config";

export function ContactForm() {
  const { handleSubmit, message, state } = usePublicFormSubmit({
    fields: publicFormFieldNames.contact,
    formType: "contact",
    successMessage: "Thank you. Your message has been received. SNS will review your inquiry and follow up using the contact information you provided.",
  });

  return (
    <form aria-busy={state === "submitting"} className={`relative mt-6 ${publicFormCardClass}`} onSubmit={handleSubmit}>
      <PublicFormHoneypot id="contact-website" />
      <p className="text-sm leading-6 text-slate"><span className="font-black text-navy">Required fields are marked *</span></p>

      <div className="grid gap-5 lg:grid-cols-2">
        <PublicFormField autoComplete="name" label="Name" maxLength={120} name="name" required />
        <PublicFormSelect label="I am a" name="role" options={contactRoleOptions} required />
        <PublicFormField autoComplete="email" label="Email" maxLength={254} name="email" required type="email" />
        <PublicFormField autoComplete="tel" label="Phone" maxLength={40} name="phone" type="tel" />
      </div>

      <div>
        <label className="font-bold text-navy" htmlFor="contact-message">Message *</label>
        <textarea aria-describedby="contact-message-privacy" className={`${publicFieldClass} min-h-36 resize-y`} id="contact-message" maxLength={1000} name="message" required />
        <PublicFormPrivacyNotice id="contact-message-privacy" />
      </div>

      <button className={`inline-flex min-h-12 w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-extrabold transition-colors disabled:cursor-wait disabled:opacity-70 ${buttonVariants.primary}`} disabled={state === "submitting"} type="submit">{state === "submitting" ? "Sending..." : "Send Message"}</button>
      <PublicFormSubmissionStatus message={message} state={state} />
    </form>
  );
}
