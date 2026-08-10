import Link from "next/link";
import type { ReactNode } from "react";

export const buttonVariants = {
  primary: "bg-teal-action text-white hover:bg-teal-dark focus-visible:outline-white focus-visible:shadow-[0_0_0_5px_#0F6F7A]",
  referral: "border border-teal-action bg-white text-teal hover:bg-[#EAF5F6] hover:text-teal-dark",
  secondary: "border border-navy/30 bg-white text-navy hover:border-navy hover:bg-soft",
  text: "text-teal underline decoration-teal/35 underline-offset-4 hover:text-teal-dark",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

export function ButtonLink({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: ButtonVariant; className?: string }) {
  return <Link className={`inline-flex min-h-12 w-fit items-center justify-center rounded-[10px] px-5 py-3 text-sm font-extrabold transition-colors ${buttonVariants[variant]} ${className}`} href={href}>{children}{variant === "text" ? <span aria-hidden="true" className="ml-2">→</span> : null}</Link>;
}

export function LineIcon({ name, className = "" }: { name: "assessment" | "plan" | "review" | "people" | "hospital" | "home" | "family" | "document" | "check" | "location"; className?: string }) {
  const paths: Record<string, ReactNode> = {
    assessment: <><path d="M9 5h6M9 9h6M9 13h4"/><path d="M7 3h10a2 2 0 0 1 2 2v16H5V5a2 2 0 0 1 2-2Z"/><path d="m8 17 1.5 1.5L12 16"/></>,
    plan: <><path d="M6 3h12v18H6z"/><path d="M9 7h6M9 11h6M9 15h3"/><path d="m14 17 1.5 1.5L19 15"/></>,
    review: <><path d="M4 12a8 8 0 1 0 3-6"/><path d="M4 4v5h5"/><path d="M12 8v5l3 2"/></>,
    people: <><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2"/><circle cx="17" cy="9" r="2"/><path d="M16 14h1a4 4 0 0 1 4 4v2"/></>,
    hospital: <><path d="M4 21V5h10v16M14 10h6v11M8 9h2M8 13h2M8 17h2M17 14h1M17 18h1"/><path d="M7 5V2h4v3"/></>,
    home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v11h14V10M9 21v-7h6v7"/></>,
    family: <><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2.5 20v-2a5.5 5.5 0 0 1 11 0v2M14 15a4.5 4.5 0 0 1 7.5 3.3V20"/></>,
    document: <><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 11h6M9 15h6M9 19h4"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  };
  return <svg aria-hidden="true" className={className} fill="none" height="24" viewBox="0 0 24 24" width="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75">{paths[name]}</svg>;
}
