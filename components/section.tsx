import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  eyebrow,
  title,
  intro
}: {
  children?: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <section className={`px-5 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {eyebrow || title || intro ? (
          <div className="mb-10 max-w-3xl">
            {eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal">{eyebrow}</p> : null}
            {title ? <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">{title}</h2> : null}
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
    <div className={`rounded-md border border-navy/10 bg-white p-6 shadow-soft ${className}`}>
      {children}
    </div>
  );
}

