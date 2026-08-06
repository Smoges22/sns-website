import Link from "next/link";
import { BrandMark } from "@/components/brand";
import { PortalLink } from "@/components/portal-link";
import { serviceGroups, site } from "@/lib/site";

export function SiteFooter() {
  const services = serviceGroups.flatMap((group) => group.services.map((service) => service.name)).slice(0, 7);

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.25fr_1fr_0.85fr] lg:px-8">
        <div>
          <BrandMark inverse />
          <p className="mt-5 max-w-md text-sm leading-6 text-white/68">
            {site.legalName} provides RN-led assessment and care-planning services for Adult Family Homes with practical clinical documentation workflows.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <p><a className="font-bold text-white transition hover:text-teal" href={`tel:${site.phone.replaceAll("-", "")}`}>{site.phone}</a></p>
            <p><a className="text-white/72 transition hover:text-teal" href={`mailto:${site.primaryEmail}`}>{site.primaryEmail}</a></p>
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-teal">Services</p>
          <ul className="mt-4 grid gap-2 break-words text-sm text-white/72">
            {services.map((service) => <li key={service}>{service}</li>)}
          </ul>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-teal">Company</p>
          <ul className="mt-4 grid gap-2 break-words text-sm text-white/72">
            <li><Link className="transition hover:text-white" href="/about">About</Link></li>
            <li><Link className="transition hover:text-white" href="/contact">Contact</Link></li>
            <li><Link className="transition hover:text-white" href="/privacy">Privacy</Link></li>
            <li><Link className="transition hover:text-white" href="/terms">Terms</Link></li>
            <li><PortalLink className="transition hover:text-white" comingSoonClassName="text-white/72" /></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs leading-6 text-white/58">
        © {new Date().getFullYear()} {site.legalName}. No detailed medical information should be submitted through public website forms.
      </div>
    </footer>
  );
}
