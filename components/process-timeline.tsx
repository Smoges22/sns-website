import { processSteps } from "@/lib/site";

const processIcons = ["request", "schedule", "assess", "deliver"] as const;

function ProcessStepIcon({ name }: { name: (typeof processIcons)[number] }) {
  const paths = {
    request: <><path d="M8 5h8M9 3h6v4H9z"/><path d="M6 5H4v17h16V5h-2M8 11h8M8 15h8M8 19h5"/></>,
    schedule: <><path d="M4 7h16v14H4zM4 10h16M8 3v4M16 3v4"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></>,
    assess: <><path d="M7 3v5a5 5 0 0 0 10 0V3M5 3h4M15 3h4"/><path d="M12 13v2a5 5 0 0 0 10 0v-1"/><circle cx="22" cy="11" r="2"/></>,
    deliver: <><path d="M6 2h8l4 4v9M14 2v5h5M6 2v20h7"/><circle cx="18" cy="18" r="4"/><path d="m16.5 18 1 1 2-2"/></>,
  };

  return (
    <svg aria-hidden="true" className="h-7 w-7 text-teal" fill="none" focusable="false" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65">
      {paths[name]}
    </svg>
  );
}

export function ProcessTimeline({ tinted = false, compact = false }: { tinted?: boolean; compact?: boolean }) {
  if (compact && tinted) {
    return (
      <div className="mx-auto max-w-[74rem]">
        <ol className="relative grid gap-6 before:absolute before:bottom-8 before:left-4 before:top-5 before:w-px before:bg-teal/25 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:before:hidden xl:grid-cols-4 xl:gap-x-8 xl:gap-y-0">
          {processSteps.map((step, index) => (
            <li className="relative min-w-0 xl:after:absolute xl:after:left-4 xl:after:top-5 xl:after:h-px xl:after:-right-8 xl:after:bg-teal/25 xl:last:after:hidden" key={step.title}>
              <div className="relative z-10 flex w-fit max-w-full items-center gap-3 bg-[#EDF6FA] pr-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal-action text-xs font-black text-white ring-[3px] ring-[#EDF6FA]">{index + 1}</span>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[12px] border border-teal/20 bg-white/80 shadow-[0_5px_14px_rgba(23,50,77,0.05)]">
                  <ProcessStepIcon name={processIcons[index]} />
                </span>
                <h3 className="min-w-0 font-display text-lg font-bold leading-tight text-navy xl:text-[1.18rem]">{step.title}</h3>
              </div>
              <p className="mt-3 max-w-[17rem] pl-[3.25rem] text-sm leading-6 text-slate md:pl-[3.25rem] xl:max-w-[15.75rem] xl:pl-0">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <ol className={`relative grid ${compact ? "gap-4" : "gap-7"} before:absolute before:bottom-8 before:left-5 before:top-6 before:w-px before:bg-navy/20 md:grid-cols-2 md:before:hidden lg:grid-cols-4 lg:gap-6 lg:before:left-[12.5%] lg:before:right-[12.5%] lg:before:top-5 lg:before:block lg:before:h-px lg:before:w-auto`}>
      {processSteps.map((step, index) => (
        <li className="relative grid grid-cols-[2.5rem_1fr] gap-4 md:block" key={step.title}>
          <span className={`relative z-10 grid h-10 w-10 place-items-center rounded-full bg-navy text-sm font-black text-white ring-[6px] ${tinted ? "ring-[#EDF6FA]" : "ring-white"}`}>{index + 1}</span>
          <div className={`min-w-0 ${compact ? "md:mt-4" : "md:mt-5"}`}>
            <h3 className={`font-display font-bold text-navy ${compact ? "text-lg" : "text-xl"}`}>{step.title}</h3>
            <p className={`${compact ? "mt-1 text-[0.82rem] leading-5 sm:text-sm sm:leading-6" : "mt-2 text-sm leading-6"} text-slate`}>{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
