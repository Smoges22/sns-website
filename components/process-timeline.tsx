import { processSteps } from "@/lib/site";

export function ProcessTimeline({ tinted = false }: { tinted?: boolean }) {
  return (
    <ol className="relative grid gap-7 before:absolute before:bottom-8 before:left-5 before:top-6 before:w-px before:bg-navy/20 md:grid-cols-2 md:before:hidden lg:grid-cols-4 lg:gap-6 lg:before:left-[12.5%] lg:before:right-[12.5%] lg:before:top-5 lg:before:block lg:before:h-px lg:before:w-auto">
      {processSteps.map((step, index) => (
        <li className="relative grid grid-cols-[2.5rem_1fr] gap-4 md:block" key={step.title}>
          <span className={`relative z-10 grid h-10 w-10 place-items-center rounded-full bg-navy text-sm font-black text-white ring-[6px] ${tinted ? "ring-[#EDF6FA]" : "ring-white"}`}>{index + 1}</span>
          <div className="min-w-0 md:mt-5">
            <h3 className="font-display text-xl font-bold text-navy">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
