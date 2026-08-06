import type { ReactNode } from "react";

function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  center?: boolean;
}) {
  if (!eyebrow && !title && !intro) {
    return null;
  }

  return (
    <div className={`mb-9 max-w-3xl sm:mb-10 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-teal sm:text-sm sm:tracking-[0.18em]">{eyebrow}</p> : null}
      {title ? <h2 className="mt-2.5 break-words text-3xl font-black tracking-tight text-navy sm:text-4xl">{title}</h2> : null}
      {intro ? <p className="mt-3 max-w-2xl text-base leading-7 text-slate sm:text-lg sm:leading-8">{intro}</p> : null}
    </div>
  );
}

export function PageShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <main className={`bg-white ${className}`}>{children}</main>;
}

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
        <SectionHeading eyebrow={eyebrow} intro={intro} title={title} />
        {children}
      </div>
    </section>
  );
}

export function SectionContainer({
  children,
  className = "",
  innerClassName = "",
  eyebrow,
  title,
  intro,
  centerHeading = false
}: {
  children?: ReactNode;
  className?: string;
  innerClassName?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  centerHeading?: boolean;
}) {
  return (
    <section className={`px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className={`min-w-0 overflow-hidden rounded-[28px] border border-[#D9E3EA] bg-white p-5 shadow-[0_18px_56px_rgba(23,50,77,0.085)] sm:p-7 lg:p-9 ${innerClassName}`}>
          <SectionHeading center={centerHeading} eyebrow={eyebrow} intro={intro} title={title} />
          {children}
        </div>
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`min-w-0 overflow-hidden rounded-[22px] border border-[#D9E3EA] bg-white p-5 shadow-[0_12px_36px_rgba(23,50,77,0.075)] transition duration-200 hover:-translate-y-0.5 hover:border-teal/45 hover:shadow-[0_18px_54px_rgba(23,50,77,0.12)] sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

export function FeatureBox({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`min-w-0 rounded-[20px] border border-[#C8D8E2] bg-[#FBFCFD] p-4 ring-1 ring-white sm:p-5 ${className}`}>
      {children}
    </div>
  );
}

export function SplitPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`grid min-w-0 gap-7 rounded-[28px] border border-[#D9E3EA] bg-white p-5 shadow-[0_18px_56px_rgba(23,50,77,0.085)] sm:p-7 lg:grid-cols-2 lg:p-9 ${className}`}>
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
    <section className="bg-white px-4 pb-8 pt-7 sm:px-6 sm:pt-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid min-w-0 gap-7 overflow-hidden rounded-[30px] border border-[#D9E3EA] bg-[radial-gradient(circle_at_82%_18%,rgba(24,183,201,0.16),transparent_28%),linear-gradient(135deg,#ffffff_0%,#FBFCFD_58%,#EDF6FA_100%)] p-5 shadow-[0_20px_64px_rgba(23,50,77,0.095)] sm:p-7 lg:grid-cols-[0.95fr_0.62fr] lg:items-end lg:p-9">
          <div className="min-w-0 max-w-4xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-teal sm:text-sm sm:tracking-[0.18em]">{eyebrow}</p>
            <h1 className="mt-3.5 max-w-[14ch] break-words text-4xl font-black tracking-tight text-navy sm:max-w-none sm:text-5xl">{title}</h1>
            <p className="mt-4 max-w-[32ch] text-base leading-7 text-slate sm:max-w-3xl sm:text-lg sm:leading-8">{intro}</p>
          </div>
          {children ? <div className="min-w-0">{children}</div> : null}
        </div>
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
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_88%_14%,rgba(94,210,221,0.22),transparent_30%),linear-gradient(135deg,#17324D_0%,#102A43_64%,#0F2740_100%)] p-6 text-white shadow-[0_24px_72px_rgba(16,42,67,0.24)] sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-9">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight">{title}</h2>
          <p className="mt-3 leading-7 text-[#D6E1EA]">{text}</p>
        </div>
        <a className="inline-flex min-h-12 items-center justify-center rounded-xl bg-teal px-5 py-3 text-sm font-extrabold text-[#102A43] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white" href="/request-assessment">
          Request an Assessment
        </a>
      </div>
    </section>
  );
}
