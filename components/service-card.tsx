import { interactiveCardClass } from "@/components/section";
import { ButtonLink, LineIcon } from "@/components/ui";
import { servicePath, type ServiceDefinition } from "@/lib/services";

export function ServiceCard({ service, index, compact = false }: { service: ServiceDefinition; index?: number; compact?: boolean }) {
  const icon = service.sample === "assessment" ? "assessment" : service.sample === "care-plan" ? "plan" : "review";
  return (
    <article className={`${interactiveCardClass} flex h-full flex-col p-5 sm:p-6`}>
      <div className="flex items-center justify-between gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#E8F5F6] text-teal"><LineIcon name={icon} /></span>
        {index !== undefined ? <span className="font-display text-lg font-bold text-navy/35">{String(index + 1).padStart(2, "0")}</span> : null}
      </div>
      <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-teal">{service.category}</p>
      <h3 className={`${compact ? "text-xl" : "text-2xl sm:text-[1.7rem]"} mt-2 font-display font-bold leading-tight tracking-[-0.02em] text-navy`}>{service.shortTitle}</h3>
      <p className={`mt-2 flex-1 text-sm text-slate ${compact ? "leading-6" : "leading-6 sm:text-base sm:leading-7"}`}>{service.description}</p>
      <ButtonLink className="mt-4 min-h-11 !border-navy/20 !px-4" href={servicePath(service)} variant="secondary">View service details</ButtonLink>
    </article>
  );
}
