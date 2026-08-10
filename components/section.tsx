import type { ReactNode } from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui";

export const premiumCardClass =
  "min-w-0 overflow-hidden rounded-[20px] border border-[#D2DEE4] bg-white shadow-[0_1px_2px_rgba(23,50,77,0.035),0_8px_24px_rgba(23,50,77,0.025)]";

export const interactiveCardClass =
  `${premiumCardClass} transition-[transform,box-shadow,border-color] duration-200 motion-safe:hover:-translate-y-0.5 hover:border-[#A9C0CA] hover:shadow-[0_14px_34px_rgba(23,50,77,0.075)] focus-within:border-teal`;

function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
  compact = false,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  center?: boolean;
  compact?: boolean;
}) {
  if (!eyebrow && !title && !intro) {
    return null;
  }

  return (
    <div className={`${compact ? "mb-4 sm:mb-5" : "mb-7 sm:mb-9"} max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal sm:text-sm">{eyebrow}</p> : null}
      {title ? <h2 className={`text-balance mt-3 break-words font-display font-bold leading-[1.14] tracking-[-0.025em] text-navy ${compact ? "text-3xl sm:text-[2.15rem] lg:text-[2.35rem]" : "text-3xl sm:text-4xl lg:text-[2.75rem]"}`}>{title}</h2> : null}
      {intro ? <p className={`${compact ? "mt-3 text-base leading-7" : "mt-4 text-base leading-7 sm:text-lg sm:leading-8"} max-w-2xl text-slate`}>{intro}</p> : null}
    </div>
  );
}

export function PageShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <main id="main-content" className={`bg-white ${className}`}>{children}</main>;
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
    <section className={`px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16 ${className}`}>
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
  centerHeading = false,
  compact = false,
}: {
  children?: ReactNode;
  className?: string;
  innerClassName?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  centerHeading?: boolean;
  compact?: boolean;
}) {
  return (
    <section className={`${compact ? "px-5 py-5 sm:px-6 sm:py-7 lg:px-8" : "px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16"} ${className}`}>
      <div className={`mx-auto max-w-7xl min-w-0 ${innerClassName}`}>
        <SectionHeading center={centerHeading} compact={compact} eyebrow={eyebrow} intro={intro} title={title} />
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
  children,
  breadcrumbLabel,
  breadcrumbParent,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
  breadcrumbLabel?: string;
  breadcrumbParent?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-[#173B60] px-5 py-8 text-white sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <span aria-hidden="true" className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
      <span aria-hidden="true" className="absolute -right-8 -top-16 h-56 w-56 rounded-full border border-aqua/20" />
      <div className="mx-auto max-w-7xl">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-14">
          <div className="min-w-0 max-w-4xl">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#BFE8EC]">
              <Link className="rounded-sm underline-offset-4 hover:underline" href="/">Home</Link>
              <span aria-hidden="true">/</span>
              {breadcrumbParent ? <><Link className="rounded-sm underline-offset-4 hover:underline" href={breadcrumbParent.href}>{breadcrumbParent.label}</Link><span aria-hidden="true">/</span></> : null}
              <span aria-current="page">{breadcrumbLabel ?? eyebrow}</span>
            </nav>
            <h1 className="text-balance mt-3 max-w-[22ch] break-words font-display text-[2.15rem] font-bold leading-[1.08] tracking-[-0.035em] text-white sm:max-w-none sm:text-5xl lg:text-[3.25rem]">{title}</h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[#D9E6EF] sm:mt-4 sm:text-lg sm:leading-8">{intro}</p>
          </div>
          {children ? <div className="min-w-0">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function FinalCta({
  title = "Need an RN Assessment?",
  text = "SNS provides professional RN assessments and individualized or negotiated care plans for Adult Family Homes, care teams, referral professionals, assisted living communities, and families.",
  compact = false,
}: {
  title?: string;
  text?: string;
  compact?: boolean;
}) {
  return (
    <section className={`bg-[#173B60] px-5 text-white sm:px-6 lg:px-8 ${compact ? "py-7 sm:py-9" : "py-12 sm:py-14"}`}>
      <div className={`mx-auto flex max-w-7xl flex-col lg:flex-row lg:items-center lg:justify-between ${compact ? "gap-5" : "gap-7"}`}>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 leading-7 text-[#D6E1EA]">{text}</p>
        </div>
        <ButtonLink href="/request-assessment">Request an Assessment</ButtonLink>
      </div>
    </section>
  );
}
