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

function CheckMark({ cx, cy }: { cx: number; cy: number }) {
  return <path d={`M${cx - 7} ${cy}l5 5 10-12`} fill="none" stroke="#137F8D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />;
}

function DocumentShape({ x, y, height = 142, width = 106 }: { x: number; y: number; height?: number; width?: number }) {
  return (
    <g className="drop-shadow-[0_10px_14px_rgba(23,50,77,.10)]">
      <rect fill="#FFFFFF" height={height} rx="12" stroke="#17324D" strokeWidth="2.2" width={width} x={x} y={y} />
      <rect fill="#DDF0F2" height="12" rx="6" width={width - 34} x={x + 17} y={y + 18} />
      <path d={`M${x + 18} ${y + 51}h${width - 36}M${x + 18} ${y + 70}h${width - 48}M${x + 18} ${y + 89}h${width - 40}`} stroke="#9CB3BF" strokeLinecap="round" strokeWidth="3" />
      <circle cx={x + width - 26} cy={y + height - 26} fill="#E7F4F5" r="17" stroke="#137F8D" strokeWidth="2" />
      <CheckMark cx={x + width - 27} cy={y + height - 26} />
    </g>
  );
}

function AudienceScene({ kind }: { kind: AudienceVisualKind }) {
  const shared = <ellipse cx="220" cy="246" fill="#DCE8EC" rx="174" ry="13" />;

  if (kind === "afh") {
    return <>{shared}<g className="drop-shadow-[0_10px_14px_rgba(23,50,77,.08)]"><path d="M52 137L142 67l90 70" fill="#F3DEAF" stroke="#17324D" strokeLinejoin="round" strokeWidth="3" /><path d="M72 128h140v105H72z" fill="#FFFFFF" stroke="#17324D" strokeLinejoin="round" strokeWidth="3" /><path d="M125 168h36v65h-36z" fill="#F3DEAF" stroke="#B77C18" strokeWidth="2.5" /><path d="M91 154h25v27H91zm78 0h25v27h-25z" fill="#D8EEF1" stroke="#137F8D" strokeWidth="2.5" /><circle cx="152" cy="201" fill="#B77C18" r="3" /></g><path d="M215 150c28-5 35-24 55-32" fill="none" stroke="#137F8D" strokeDasharray="6 7" strokeLinecap="round" strokeWidth="3" /><DocumentShape height={154} width={116} x={264} y={55} /></>;
  }

  if (kind === "referral") {
    return <>{shared}<path d="M115 105c25-27 49-35 76-34m58 0c28 0 52 9 77 34" fill="none" stroke="#137F8D" strokeDasharray="7 7" strokeLinecap="round" strokeWidth="3" /><g className="drop-shadow-[0_8px_12px_rgba(23,50,77,.08)]"><circle cx="87" cy="116" fill="#DDF0F2" r="30" stroke="#17324D" strokeWidth="2.5" /><circle cx="87" cy="108" fill="#17324D" r="9" /><path d="M69 133c4-14 31-14 36 0" fill="none" stroke="#17324D" strokeLinecap="round" strokeWidth="5" /><circle cx="353" cy="116" fill="#E5EDF5" r="30" stroke="#17324D" strokeWidth="2.5" /><circle cx="353" cy="108" fill="#17324D" r="9" /><path d="M335 133c4-14 31-14 36 0" fill="none" stroke="#17324D" strokeLinecap="round" strokeWidth="5" /></g><DocumentShape height={166} width={122} x={159} y={52} /><path d="M111 170c35 30 70 40 109 40s75-10 109-40" fill="none" stroke="#8BA8B5" strokeLinecap="round" strokeWidth="2.5" /><circle cx="220" cy="210" fill="#137F8D" r="6" /></>;
  }

  if (kind === "hospital") {
    return <>{shared}<g className="drop-shadow-[0_8px_12px_rgba(23,50,77,.08)]"><rect fill="#FFFFFF" height="142" rx="8" stroke="#17324D" strokeWidth="2.8" width="116" x="35" y="86" /><rect fill="#DDEAF3" height="18" width="58" x="64" y="69" /><path d="M93 97v28m-14-14h28" stroke="#137F8D" strokeLinecap="round" strokeWidth="7" /><path d="M55 143h18m15 0h18m15 0h12M55 164h18m15 0h18m15 0h12M55 185h18m48 0h12" stroke="#9CB3BF" strokeLinecap="round" strokeWidth="5" /><rect fill="#E4F2F4" height="29" stroke="#137F8D" strokeWidth="2" width="25" x="89" y="199" /></g><path d="M151 151h54" stroke="#137F8D" strokeDasharray="6 7" strokeLinecap="round" strokeWidth="3" /><path d="M196 143l12 8-12 8" fill="none" stroke="#137F8D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" /><DocumentShape height={132} width={94} x={177} y={76} /><path d="M272 151h38" stroke="#137F8D" strokeDasharray="6 7" strokeLinecap="round" strokeWidth="3" /><path d="M302 143l12 8-12 8" fill="none" stroke="#137F8D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" /><g className="drop-shadow-[0_8px_12px_rgba(23,50,77,.08)]"><path d="M292 163l57-45 57 45" fill="#DDF0F2" stroke="#17324D" strokeLinejoin="round" strokeWidth="2.8" /><path d="M306 157h86v71h-86z" fill="#FFFFFF" stroke="#17324D" strokeWidth="2.8" /><path d="M339 188h22v40h-22z" fill="#DDF0F2" stroke="#137F8D" strokeWidth="2" /><path d="M317 174h16m34 0h16" stroke="#137F8D" strokeLinecap="round" strokeWidth="6" /></g></>;
  }

  if (kind === "assisted-living") {
    return <>{shared}<g className="drop-shadow-[0_9px_13px_rgba(23,50,77,.08)]"><path d="M63 104l104-48 104 48" fill="#E1ECF5" stroke="#17324D" strokeLinejoin="round" strokeWidth="3" /><path d="M78 101h178v132H78z" fill="#FFFFFF" stroke="#17324D" strokeWidth="3" /><path d="M145 181h43v52h-43z" fill="#D8EEF1" stroke="#137F8D" strokeWidth="2.5" /><path d="M99 126h27v24H99zm53 0h27v24h-27zm53 0h27v24h-27zM99 166h27v24H99zm106 0h27v24h-27z" fill="#E5EEF5" stroke="#6E94AC" strokeWidth="2" /></g><path d="M258 151c20-4 28-16 42-24" fill="none" stroke="#137F8D" strokeDasharray="6 7" strokeLinecap="round" strokeWidth="3" /><DocumentShape height={150} width={110} x={291} y={70} /></>;
  }

  return <>{shared}<g className="drop-shadow-[0_8px_12px_rgba(23,50,77,.07)]"><circle cx="89" cy="122" fill="#DDF0F2" r="25" stroke="#17324D" strokeWidth="2.5" /><circle cx="89" cy="115" fill="#17324D" r="8" /><path d="M72 139c5-13 29-13 34 0" fill="none" stroke="#17324D" strokeLinecap="round" strokeWidth="5" /><circle cx="146" cy="104" fill="#E5EDF5" r="29" stroke="#17324D" strokeWidth="2.5" /><circle cx="146" cy="96" fill="#17324D" r="9" /><path d="M126 124c5-16 35-16 40 0" fill="none" stroke="#17324D" strokeLinecap="round" strokeWidth="5" /><circle cx="203" cy="126" fill="#DDF0F2" r="24" stroke="#17324D" strokeWidth="2.5" /><circle cx="203" cy="119" fill="#17324D" r="8" /><path d="M187 143c4-12 28-12 32 0" fill="none" stroke="#17324D" strokeLinecap="round" strokeWidth="5" /></g><path d="M217 150c22 1 34-10 51-23" fill="none" stroke="#137F8D" strokeDasharray="6 7" strokeLinecap="round" strokeWidth="3" /><DocumentShape height={156} width={116} x={270} y={62} /><circle cx="183" cy="204" fill="#E7F4F5" r="21" stroke="#137F8D" strokeWidth="2" /><CheckMark cx={183} cy={204} /></>;
}

function AudienceVisual({ kind }: { kind: AudienceVisualKind }) {
  return (
    <div aria-hidden="true" className="relative hidden min-h-64 overflow-hidden rounded-[18px] border border-[#CBD9E0] bg-[#F0F6F8] shadow-[0_14px_34px_rgba(23,50,77,.06)] md:block" data-audience-visual={kind}>
      <span className="absolute left-5 top-5 z-10 h-2 w-12 rounded-full bg-navy/10" />
      <span className="absolute right-5 top-5 z-10 h-2 w-7 rounded-full bg-teal/20" />
      <svg className="absolute inset-0 h-full w-full" fill="none" viewBox="0 0 440 280">
        <circle cx="380" cy="42" fill="none" opacity="0.35" r="54" stroke="#B9D5DC" />
        <circle cx="380" cy="42" fill="none" opacity="0.25" r="38" stroke="#B9D5DC" />
        <AudienceScene kind={kind} />
      </svg>
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
      <div className="scrollbar-none -mx-5 snap-x snap-mandatory scroll-px-5 overflow-x-auto border-b border-[#C9D8E0] px-5 sm:-mx-7 sm:scroll-px-7 sm:px-7 md:mx-0 md:px-0" role="tablist" aria-label="Who SNS serves">
        <div className="flex min-w-max gap-1 px-0.5">
          {audiences.map((audience, index) => (
            <button
              aria-controls={`audience-panel-${index}`}
              aria-selected={active === index}
              className={`relative min-h-12 snap-start whitespace-nowrap px-4 py-3 text-sm font-bold transition-colors focus-visible:z-10 ${active === index ? "text-teal after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-teal" : "text-slate hover:bg-[#F4F8F9] hover:text-navy"}`}
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
        <section aria-labelledby={`audience-tab-${index}`} className={`${active === index ? "grid" : "hidden"} min-w-0 gap-6 bg-white px-5 py-7 sm:px-7 sm:py-8 md:min-h-[28rem] md:grid-cols-[minmax(0,1.35fr)_minmax(14rem,.85fr)] md:items-center md:gap-8 lg:min-h-[25rem] lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,.8fr)] lg:gap-10 xl:min-h-[22rem]`} hidden={active !== index} id={`audience-panel-${index}`} key={audience.title} role="tabpanel" tabIndex={0}>
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[.16em] text-teal">Who we serve</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">{audience.title}</h3>
            <p className="mt-3 max-w-3xl leading-7 text-slate">{audience.text}</p>
            <ul className="mt-5 grid gap-x-7 gap-y-2 text-sm font-semibold text-navy sm:grid-cols-2">
              {audienceDetails[index].points.map((point) => <li className="flex gap-2.5" key={point}><LineIcon className="h-5 w-5 shrink-0 text-teal" name="check" />{point}</li>)}
            </ul>
            <ButtonLink className="mt-6" href={index >= 1 && index <= 3 ? "/refer-a-client" : ctaHref} variant={index >= 1 && index <= 3 ? "referral" : "primary"}>{index >= 1 && index <= 3 ? "Refer a Client" : ctaLabel}</ButtonLink>
          </div>
          <AudienceVisual kind={audienceDetails[index].visual} />
        </section>
      ))}
    </div>
  );
}
