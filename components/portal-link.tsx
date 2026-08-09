import { site } from "@/lib/site";

export function PortalLink({ className, label = "Client Portal" }: { className?: string; label?: string }) {
  return <a className={className} href={site.portalUrl} rel="noopener noreferrer">{label}</a>;
}
