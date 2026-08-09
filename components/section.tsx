import type { ReactNode } from "react";

export const premiumCardClass =
  "min-w-0 overflow-hidden rounded-[24px] border border-[#CCD9E1] bg-white shadow-[0_1px_2px_rgba(23,50,77,0.04),0_14px_38px_rgba(23,50,77,0.075)]";

export const interactiveCardClass =
  `${premiumCardClass} transition-[transform,box-shadow,border-color] duration-200 motion-safe:hover:-translate-y-1 hover:border-[#9FB7C5] hover:shadow-[0_2px_4px_rgba(23,50,77,0.05),0_22px_52px_rgba(23,50,77,0.11)] focus-within:border-teal`;

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
    <div className={`mb-10 max-w-3xl sm:mb-12 ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal sm:text-sm">{eyebrow}</p> : null}
      {title ? <h2 className="mt-3 break-words text-3xl font-black leading-[1.12] tracking-[-0.025em] text-navy sm:text-4xl lg:text-[2.75rem]">{title}</h2> : null}
      {intro ? <p className="mt-4 max-w-2xl text-base leading-7 text-slate sm:text-lg sm:leading-8">{intro}</p> : null}
    </div>
  );
}

export function PageShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <main id="main-content" className={`bg-[#FCFDFD] ${className}`}>{children}</main>;
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
    <section className={`px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 ${className}`}>
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
    <section className={`px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 ${className}`}>
      <div className={`mx-auto max-w-7xl min-w-0 ${innerClassName}`}>
        <SectionHeading center={centerHeading} eyebrow={eyebrow} intro={intro} title={title} />
        {children}
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`${premiumCardClass} p-5 sm:p-7 ${className}`}>
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
    <div className={`min-w-0 rounded-[20px] border border-[#D8E3E9] bg-[#F7FAFB] p-5 shadow-[0_8px_24px_rgba(23,50,77,0.045)] sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

export function SplitPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`grid min-w-0 gap-8 lg:grid-cols-2 ${className}`}>
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
    <section className="border-b border-navy/10 bg-[radial-gradient(circle_at_84%_12%,rgba(94,210,221,0.16),transparent_28%),linear-gradient(135deg,#ffffff_0%,#F8FAFB_58%,#EDF6FA_100%)] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-14">
          <div className="min-w-0 max-w-4xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal sm:text-sm">{eyebrow}</p>
            <h1 className="mt-4 max-w-[18ch] break-words text-4xl font-black leading-[1.08] tracking-[-0.035em] text-navy sm:max-w-none sm:text-5xl lg:text-[3.5rem]">{title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate sm:text-lg sm:leading-8">{intro}</p>
          </div>
          {children ? <div className="min-w-0">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function FinalCta({
  title = "Need an RN Assessment?",
  text = "SNS provides RN assessments, individualized care plans, and focused clinical follow-up for Adult Family Homes, care teams, referral professionals, assisted living communities, and families."
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-[linear-gradient(135deg,#17324D_0%,#102A43_70%,#0F2740_100%)] px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight">{title}</h2>
          <p className="mt-3 leading-7 text-[#D6E1EA]">{text}</p>
        </div>
        <a className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-[#102A43] transition-colors hover:bg-[#EAF5F8]" href="/request-assessment">
          Request an Assessment
        </a>
      </div>
    </section>
  );
}
