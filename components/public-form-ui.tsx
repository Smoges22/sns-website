import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";

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

export function PublicFormSection({ children, intro, legend }: { children: ReactNode; intro: string; legend: string }) {
  return (
    <fieldset className="min-w-0 border-t border-[#D8E3E9] pt-6">
      <legend className="pr-4 font-display text-2xl font-bold text-navy">{legend}</legend>
      <p className="mb-5 mt-2 max-w-3xl text-sm leading-6 text-slate">{intro}</p>
      {children}
    </fieldset>
  );
}
