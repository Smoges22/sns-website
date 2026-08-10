import { processSteps } from "@/lib/site";

export function ProcessTimeline({ tinted = false, compact = false }: { tinted?: boolean; compact?: boolean }) {
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
