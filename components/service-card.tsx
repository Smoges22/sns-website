import Link from "next/link";
import { interactiveCardClass } from "@/components/section";
import { servicePath, type ServiceDefinition } from "@/lib/services";

export function ServiceCard({ service, index, compact = false }: { service: ServiceDefinition; index?: number; compact?: boolean }) {
  return (
    <article className={`${interactiveCardClass} flex h-full flex-col p-6 sm:p-7 ${compact ? "lg:p-7" : "lg:p-8"}`}>
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-teal">{service.category}</p>
        {index !== undefined ? <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#D2E1E7] bg-[#F2F8FA] text-xs font-black text-navy">{String(index + 1).padStart(2, "0")}</span> : null}
      </div>
      <h3 className={`${compact ? "text-xl" : "text-2xl sm:text-[1.7rem]"} mt-5 font-black leading-tight tracking-[-0.02em] text-navy`}>{service.shortTitle}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate sm:text-base sm:leading-7">{service.description}</p>
      <Link className="mt-6 inline-flex min-h-11 w-fit items-center font-extrabold text-teal underline decoration-teal/30 underline-offset-4 transition-colors hover:text-navy" href={servicePath(service)}>View service details<span aria-hidden="true" className="ml-2">→</span></Link>
    </article>
  );
}
