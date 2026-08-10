"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ButtonLink, LineIcon } from "@/components/ui";
import { audiences } from "@/lib/site";

const audienceDetails = [
  { icon: "home", points: ["Prospective admissions", "Current residents", "Annual reassessments", "Significant changes in care needs"] },
  { icon: "people", points: ["Independent clinical documentation", "Authorized referral and placement professionals", "Receiving provider review", "Assessed care needs during an AFH transition"] },
  { icon: "hospital", points: ["Adults preparing for discharge", "Adult Family Home transitions", "Other residential care settings", "Authorized hospital and discharge teams"] },
  { icon: "hospital", points: ["Updated assessment support", "Care-planning support", "Changes in current needs", "Adult Family Home transition planning"] },
  { icon: "family", points: ["Professional nursing assessment", "Authorized family involvement", "Understanding current care needs", "Documenting current care needs"] },
] as const;

export function AudienceTabs({ ctaHref = "/who-we-serve", ctaLabel = "Learn more about who SNS serves" }: { ctaHref?: string; ctaLabel?: string }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);

  function selectFromKeyboard(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % audiences.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + audiences.length) % audiences.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = audiences.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="min-w-0">
      <div className="scrollbar-none overflow-x-auto border-b border-[#C9D8E0]" role="tablist" aria-label="Who SNS serves">
        <div className="flex min-w-max gap-1 px-0.5">
          {audiences.map((audience, index) => (
            <button
              aria-controls={`audience-panel-${index}`}
              aria-selected={active === index}
              className={`relative min-h-12 whitespace-nowrap px-4 py-3 text-sm font-bold transition-colors focus-visible:z-10 ${active === index ? "text-teal after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-teal" : "text-slate hover:bg-[#F4F8F9] hover:text-navy"}`}
              id={`audience-tab-${index}`}
              key={audience.title}
              onClick={() => setActive(index)}
              onKeyDown={(event) => selectFromKeyboard(event, index)}
              ref={(node) => { tabs.current[index] = node; }}
              role="tab"
              tabIndex={active === index ? 0 : -1}
              type="button"
            >
              {audience.title}
            </button>
          ))}
        </div>
      </div>
      {audiences.map((audience, index) => (
        <section aria-labelledby={`audience-tab-${index}`} className={`${active === index ? "grid" : "hidden"} min-w-0 gap-6 bg-white px-5 py-7 sm:px-7 sm:py-8 lg:grid-cols-[1fr_15rem] lg:items-center lg:gap-10`} hidden={active !== index} id={`audience-panel-${index}`} key={audience.title} role="tabpanel" tabIndex={0}>
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[.16em] text-teal">Who we serve</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">{audience.title}</h3>
            <p className="mt-3 max-w-3xl leading-7 text-slate">{audience.text}</p>
            <ul className="mt-5 grid gap-x-7 gap-y-2 text-sm font-semibold text-navy sm:grid-cols-2">
              {audienceDetails[index].points.map((point) => <li className="flex gap-2.5" key={point}><LineIcon className="h-5 w-5 shrink-0 text-teal" name="check" />{point}</li>)}
            </ul>
            <ButtonLink className="mt-6" href={ctaHref}>{ctaLabel}</ButtonLink>
          </div>
          <div aria-hidden="true" className="grid min-h-36 place-items-center rounded-xl bg-[#EAF5F6] text-teal">
            <LineIcon className="h-16 w-16" name={audienceDetails[index].icon} />
          </div>
        </section>
      ))}
    </div>
  );
}
