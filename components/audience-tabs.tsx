"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ButtonLink, LineIcon } from "@/components/ui";
import { audiences } from "@/lib/site";

const audienceDetails = [
  { visual: "afh", points: ["Prospective admissions", "Current residents", "Annual reassessments", "Significant changes in care needs"] },
  { visual: "referral", points: ["Independent clinical documentation", "Authorized referral and placement professionals", "Receiving provider review", "Assessed care needs during an AFH transition"] },
  { visual: "hospital", points: ["Adults preparing for discharge", "Adult Family Home transitions", "Other residential care settings", "Authorized hospital and discharge teams"] },
  { visual: "assisted-living", points: ["Updated assessment support", "Care-planning support", "Changes in current needs", "Adult Family Home transition planning"] },
  { visual: "family", points: ["Professional nursing assessment", "Authorized family involvement", "Understanding current care needs", "Documenting current care needs"] },
] as const;

type AudienceVisualKind = (typeof audienceDetails)[number]["visual"];

function AudienceVisual({ kind }: { kind: AudienceVisualKind }) {
  const visuals = {
    afh: { main: "home", supporting: ["document", "check"], mainColor: "bg-[#F6E7C5] text-[#A76F12]", accentColor: "border-[#D6A13A]" },
    referral: { main: "people", supporting: ["document", "check"], mainColor: "bg-[#DDF1F3] text-teal", accentColor: "border-teal" },
    hospital: { main: "hospital", supporting: ["home", "document"], mainColor: "bg-[#DFEAF5] text-navy", accentColor: "border-navy" },
    "assisted-living": { main: "hospital", supporting: ["plan", "check"], mainColor: "bg-[#E5EFF8] text-[#285D82]", accentColor: "border-[#5685A7]" },
    family: { main: "family", supporting: ["home", "check"], mainColor: "bg-[#E3F2F1] text-teal", accentColor: "border-teal" },
  } as const;
  const visual = visuals[kind];

  return (
    <div aria-hidden="true" className={`relative hidden min-h-64 overflow-hidden rounded-xl border border-[#D4E0E6] border-t-4 bg-[#F1F6F8] md:grid md:place-items-center ${visual.accentColor}`} data-audience-visual={kind}>
      <span className="absolute left-5 top-5 h-2 w-12 rounded-full bg-navy/10" />
      <span className="absolute right-5 top-5 h-2 w-7 rounded-full bg-teal/20" />
      <div className="relative grid h-44 w-44 place-items-center">
        <span className="absolute inset-4 rounded-full border border-navy/10" />
        <span className={`relative z-10 grid h-24 w-24 place-items-center rounded-2xl border border-white/80 shadow-[0_12px_26px_rgba(23,50,77,.08)] ${visual.mainColor}`}>
          <LineIcon className="h-12 w-12" name={visual.main} />
        </span>
        <span className="absolute left-0 top-8 h-px w-10 bg-navy/20" />
        <span className="absolute right-0 top-8 h-px w-10 bg-navy/20" />
        <span className="absolute bottom-0 left-1 grid h-12 w-12 place-items-center rounded-xl border border-[#CFDDE4] bg-white text-teal shadow-[0_8px_18px_rgba(23,50,77,.06)]">
          <LineIcon className="h-6 w-6" name={visual.supporting[0]} />
        </span>
        <span className="absolute bottom-0 right-1 grid h-12 w-12 place-items-center rounded-xl border border-[#CFDDE4] bg-white text-navy shadow-[0_8px_18px_rgba(23,50,77,.06)]">
          <LineIcon className="h-6 w-6" name={visual.supporting[1]} />
        </span>
      </div>
      <div className="absolute inset-x-5 bottom-5 grid grid-cols-[1fr_.7fr_.45fr] gap-2">
        <span className="h-1.5 rounded-full bg-navy/15" />
        <span className="h-1.5 rounded-full bg-teal/20" />
        <span className="h-1.5 rounded-full bg-navy/10" />
      </div>
    </div>
  );
}

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
        <section aria-labelledby={`audience-tab-${index}`} className={`${active === index ? "grid" : "hidden"} min-w-0 gap-6 bg-white px-5 py-7 sm:px-7 sm:py-8 md:min-h-[31.5rem] md:grid-cols-[minmax(0,1.35fr)_minmax(14rem,.85fr)] md:items-center md:gap-8 lg:min-h-[27.25rem] lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,.8fr)] lg:gap-10 xl:min-h-[22rem]`} hidden={active !== index} id={`audience-panel-${index}`} key={audience.title} role="tabpanel" tabIndex={0}>
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[.16em] text-teal">Who we serve</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">{audience.title}</h3>
            <p className="mt-3 max-w-3xl leading-7 text-slate">{audience.text}</p>
            <ul className="mt-5 grid gap-x-7 gap-y-2 text-sm font-semibold text-navy sm:grid-cols-2">
              {audienceDetails[index].points.map((point) => <li className="flex gap-2.5" key={point}><LineIcon className="h-5 w-5 shrink-0 text-teal" name="check" />{point}</li>)}
            </ul>
            <ButtonLink className="mt-6" href={ctaHref}>{ctaLabel}</ButtonLink>
          </div>
          <AudienceVisual kind={audienceDetails[index].visual} />
        </section>
      ))}
    </div>
  );
}
