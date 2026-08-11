"use client";

import { type FormEvent, useState } from "react";
import type { PublicFormType } from "@/lib/public-form-config";

export type PublicFormSubmissionState = "idle" | "submitting" | "success" | "error";

type UsePublicFormSubmitOptions = {
  booleanFields?: readonly string[];
  fields: readonly string[];
  formType: PublicFormType;
  successMessage: string;
};

export function usePublicFormSubmit({
  booleanFields = [],
  fields,
  formType,
  successMessage,
}: UsePublicFormSubmitOptions) {
  const [state, setState] = useState<PublicFormSubmissionState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "submitting") return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const payload = Object.fromEntries(
      fields.map((field) => [
        field,
        booleanFields.includes(field) ? data.get(field) === "on" : String(data.get(field) ?? ""),
      ]),
    );

    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/forms/submit", {
        body: JSON.stringify({
          formType,
          payload,
          website: String(data.get("website") ?? ""),
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const result = (await response.json()) as { ok?: boolean };
      if (!response.ok || result.ok !== true) throw new Error("Submission failed.");

      form.reset();
      setMessage(successMessage);
      setState("success");
    } catch {
      setMessage("We couldn't submit your request right now. Please try again.");
      setState("error");
    }
  }

  return { handleSubmit, message, state };
}
