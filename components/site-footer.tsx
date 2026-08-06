import Link from "next/link";
import { BrandMark } from "@/components/brand";
import { PortalLink } from "@/components/portal-link";
import { launchServices, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-md text-sm leading-6 text-slate">
            {site.legalName} provides registered nurse-led assessment and care-planning services for Adult Family Homes.
          </p>
          <p className="mt-4 text-sm font-semibold text-navy">{site.phone}</p>
          <p className="text-sm text-slate">{site.primaryEmail}</p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-navy">
            {launchServices.slice(0, 5).map((service) => <li key={service}>{service}</li>)}
            <li>Nurse Delegation - Coming Soon</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-navy">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            <li><PortalLink /></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy/10 px-5 py-5 text-center text-xs text-slate">
        © {new Date().getFullYear()} {site.legalName}. No detailed medical information should be submitted through public website forms.
      </div>
    </footer>
  );
}
