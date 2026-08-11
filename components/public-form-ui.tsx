import { type FocusEvent, type FormEvent, type InputHTMLAttributes, type ReactNode, type SelectHTMLAttributes, useEffect, useRef, useState } from "react";
import type { PublicFormSubmissionState } from "@/components/use-public-form-submit";
import { formatUsPhoneInput, normalizeUsPhoneNumber } from "@/lib/phone";
import { site } from "@/lib/site";

export const publicFormCardClass =
  "grid gap-5 rounded-[20px] border border-[#CCD9E1] border-t-[3px] border-t-navy bg-white p-5 shadow-[0_12px_34px_rgba(23,50,77,0.06)] sm:p-8";

export const publicFieldClass =
  "mt-2 min-h-12 w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-base text-navy outline-none transition placeholder:text-slate/60 focus:border-teal focus:ring-4 focus:ring-teal/15";

type PublicFormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export function PublicFormField({ label, name, required = false, type = "text", ...props }: PublicFormFieldProps) {
  return (
    <div>
      <label className="font-bold text-navy" htmlFor={name}>{label}{required ? " *" : ""}</label>
      <input className={publicFieldClass} id={name} name={name} required={required} type={type} {...props} />
    </div>
  );
}

type PublicPhoneFieldProps = Omit<PublicFormFieldProps, "autoComplete" | "defaultValue" | "inputMode" | "onBlur" | "onChange" | "onInput" | "type" | "value">;

const phoneValidationMessage = "Enter a valid 10-digit U.S. phone number.";

function updatePhoneValidity(input: HTMLInputElement) {
  const value = input.value.trim();
  input.setCustomValidity(value && normalizeUsPhoneNumber(value) === null ? phoneValidationMessage : "");
}

export function PublicPhoneField({ label, maxLength = 40, name, placeholder = "(206) 555-1234", required = false, ...props }: PublicPhoneFieldProps) {
  const errorId = `${name}-phone-error`;
  const hintId = `${name}-phone-format`;
  const inputRef = useRef<HTMLInputElement>(null);
  const [showError, setShowError] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const form = inputRef.current?.form;
    if (!form) return;
    const handleReset = () => {
      setShowError(false);
      setValue("");
    };
    form.addEventListener("reset", handleReset);
    return () => form.removeEventListener("reset", handleReset);
  }, []);

  function handleInput(event: FormEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    const nextValue = input.selectionStart === input.value.length ? formatUsPhoneInput(input.value) : input.value;
    setValue(nextValue);
    input.value = nextValue;
    updatePhoneValidity(input);
    setShowError(false);
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    const normalized = normalizeUsPhoneNumber(input.value);
    if (normalized) {
      input.value = normalized;
      setValue(normalized);
    }
    updatePhoneValidity(input);
    setShowError(Boolean(input.value.trim()) && normalized === null);
  }

  function handleInvalid(event: FormEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    setShowError(Boolean(input.value.trim()) && normalizeUsPhoneNumber(input.value) === null);
  }

  return (
    <div>
      <label className="font-bold text-navy" htmlFor={name}>{label}{required ? " *" : ""}</label>
      <input
        aria-describedby={showError ? `${hintId} ${errorId}` : hintId}
        aria-invalid={showError || undefined}
        autoComplete="tel"
        className={publicFieldClass}
        id={name}
        inputMode="tel"
        maxLength={maxLength}
        name={name}
        onBlur={handleBlur}
        onInput={handleInput}
        onInvalid={handleInvalid}
        placeholder={placeholder}
        ref={inputRef}
        required={required}
        type="tel"
        value={value}
        {...props}
      />
      <p className="mt-2 text-sm leading-5 text-slate" id={hintId}>U.S. number, for example (206) 555-1234.</p>
      {showError ? <p className="mt-2 text-sm font-semibold text-alert" id={errorId} role="alert">{phoneValidationMessage}</p> : null}
    </div>
  );
}

type PublicFormSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  name: string;
  options: readonly string[];
};

export function PublicFormSelect({ label, name, options, required = false, ...props }: PublicFormSelectProps) {
  return (
    <div>
      <label className="font-bold text-navy" htmlFor={name}>{label}{required ? " *" : ""}</label>
      <select className={publicFieldClass} defaultValue="" id={name} name={name} required={required} {...props}>
        <option disabled value="">Select one</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </div>
  );
}

export function PublicFormPrivacyNotice({ children, id }: { children?: ReactNode; id?: string }) {
  return (
    <p className="mt-2 rounded-xl border border-alert/25 bg-[#FFF8F8] p-3 text-sm font-semibold leading-6 text-alert" id={id}>
      {children ?? "Please do not submit detailed medical or protected health information through this public form or ordinary email. SNS will provide separate instructions when clinical records are needed."}
    </p>
  );
}

export function PublicFormConsent({ children, name }: { children: ReactNode; name: string }) {
  return (
    <label className="flex min-h-11 items-start gap-3 text-sm font-semibold leading-6 text-navy">
      <input className="mt-1 h-5 w-5 shrink-0 accent-navy" name={name} required type="checkbox" />
      <span>{children}</span>
    </label>
  );
}

export function PublicFormHoneypot({ id }: { id: string }) {
  return (
    <div aria-hidden="true" className="absolute left-[-10000px] h-px w-px overflow-hidden">
      <label htmlFor={id}>Website</label>
      <input autoComplete="off" id={id} name="website" tabIndex={-1} type="text" />
    </div>
  );
}

export function PublicFormSubmissionStatus({
  message,
  state,
}: {
  message: string;
  state: PublicFormSubmissionState;
}) {
  if (state !== "success" && state !== "error") return null;

  return (
    <div
      className={`rounded-xl border p-4 text-sm font-semibold leading-6 ${state === "success" ? "border-green-700/20 bg-green-50 text-green-800" : "border-alert/25 bg-[#FFF8F8] text-alert"}`}
      role={state === "error" ? "alert" : "status"}
    >
      <p>{message}</p>
      {state === "error" ? (
        <a className="mt-2 inline-flex font-extrabold underline underline-offset-4" href={`mailto:${site.primaryEmail}`}>
          Prefer email instead?
        </a>
      ) : null}
    </div>
  );
}

export function PublicFormSection({ children, intro, legend }: { children: ReactNode; intro: string; legend: string }) {
  return (
    <fieldset className="min-w-0 border-t border-[#D8E3E9] pt-6">
      <legend className="pr-4 font-display text-2xl font-bold text-navy">{legend}</legend>
      <p className="mb-5 mt-2 max-w-3xl text-sm leading-6 text-slate">{intro}</p>
      {children}
    </fieldset>
  );
}
