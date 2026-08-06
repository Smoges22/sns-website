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
  comingSoonLabel = "Secure Portal — Coming Soon"
}: PortalLinkProps) {
  if (!site.portalUrl) {
    return (
      <span aria-disabled="true" className={comingSoonClassName ?? className}>
        {comingSoonLabel}
      </span>
    );
  }

  return (
    <a className={className} href={site.portalUrl}>
      {label}
    </a>
  );
}
