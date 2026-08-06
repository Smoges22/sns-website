import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  innerClassName = "",
  eyebrow,
  title,
  intro
}: {
  children?: ReactNode;
  className?: string;
  innerClassName?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <section className={`px-5 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className={`mx-auto max-w-7xl min-w-0 ${innerClassName}`}>
        {eyebrow || title || intro ? (
          <div className="mb-12 max-w-3xl">
            {eyebrow ? <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">{eyebrow}</p> : null}
            {title ? <h2 className="mt-3 break-words text-3xl font-black tracking-tight text-navy sm:text-4xl">{title}</h2> : null}
            {intro ? <p className="mt-4 text-lg leading-8 text-slate">{intro}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`min-w-0 overflow-hidden rounded-xl border border-navy/10 bg-white p-6 shadow-soft ${className}`}>
      {children}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-navy/10 bg-[linear-gradient(180deg,#ffffff_0%,#f5f7f9_100%)] px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl min-w-0 gap-8 lg:grid-cols-[0.9fr_0.55fr] lg:items-end">
        <div className="min-w-0 max-w-4xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">{eyebrow}</p>
          <h1 className="mt-4 max-w-[12ch] break-words text-4xl font-black tracking-tight text-navy sm:max-w-none sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-[28ch] text-lg leading-8 text-slate sm:max-w-3xl">{intro}</p>
        </div>
        {children ? <div className="min-w-0">{children}</div> : null}
      </div>
    </section>
  );
}

export function FinalCta({
  title = "Ready to streamline your clinical documentation?",
  text = "SNS provides RN-led assessments and practical care-planning documentation designed for Adult Family Homes."
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2xl bg-navy p-8 text-white shadow-[0_28px_80px_rgba(23,50,77,0.2)] sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight">{title}</h2>
          <p className="mt-3 leading-7 text-white/72">{text}</p>
        </div>
        <a className="inline-flex min-h-12 items-center justify-center rounded-lg bg-teal px-5 py-3 text-sm font-extrabold text-navy shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white" href="/request-assessment">
          Request an Assessment
        </a>
      </div>
    </section>
  );
}
