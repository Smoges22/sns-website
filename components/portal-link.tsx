import { site } from "@/lib/site";

type PortalLinkProps = {
  className?: string;
  comingSoonClassName?: string;
  label?: string;
  comingSoonLabel?: string;
};

export function PortalLink({
  className,
  comingSoonClassName,
  label = "Secure Portal Login",
  comingSoonLabel = "Launching Soon"
}: PortalLinkProps) {
  if (!site.portalUrl) {
    return (
      <span aria-disabled="true" aria-label="Secure Portal - Coming Soon" className={`inline-flex items-center gap-2 ${comingSoonClassName ?? className ?? ""}`}>
        <span>Secure Portal</span>
        <span className="rounded-full border border-teal/25 bg-[#EDF6FA] px-2 py-0.5 text-[11px] font-black uppercase tracking-[0.12em] text-teal">
          {comingSoonLabel}
        </span>
      </span>
    );
  }

  return (
    <a className={className} href={site.portalUrl}>
      {label}
    </a>
  );
}
