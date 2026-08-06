import Link from "next/link";
import { BrandMark } from "@/components/brand";
import { PortalLink } from "@/components/portal-link";
import { serviceGroups, site } from "@/lib/site";

export function SiteFooter() {
  const services = serviceGroups.flatMap((group) => group.services.map((service) => service.name)).slice(0, 7);

  return (
    <footer className="bg-soft px-4 pb-5 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_12%_0%,rgba(24,183,201,0.24),transparent_35%),radial-gradient(circle_at_92%_18%,rgba(255,255,255,0.08),transparent_30%),linear-gradient(135deg,#10283F_0%,#17324D_58%,#0F5260_100%)] text-white shadow-[0_28px_90px_rgba(23,50,77,0.2)]">
        <div className="grid gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.25fr_1fr_0.85fr] lg:px-10 lg:py-12">
          <div>
            <BrandMark inverse />
            <p className="mt-6 max-w-md text-sm leading-6 text-white/68">
              {site.legalName} provides RN-led assessment and care-planning services for Adult Family Homes with practical clinical documentation workflows.
            </p>
            <div className="mt-7 grid gap-2 rounded-2xl border border-white/12 bg-white/7 p-4 text-sm backdrop-blur">
              <p><a className="font-bold text-white transition hover:text-teal" href={`tel:${site.phone.replaceAll("-", "")}`}>{site.phone}</a></p>
              <p><a className="text-white/72 transition hover:text-teal" href={`mailto:${site.primaryEmail}`}>{site.primaryEmail}</a></p>
              <p className="text-white/58">{site.domain}</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-teal">Services</p>
            <ul className="mt-5 grid gap-2.5 break-words text-sm text-white/72">
              {services.map((service) => <li key={service}>{service}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-teal">Company</p>
            <ul className="mt-5 grid gap-2.5 break-words text-sm text-white/72">
              <li><Link className="transition hover:text-white" href="/about">About</Link></li>
              <li><Link className="transition hover:text-white" href="/contact">Contact</Link></li>
              <li><Link className="transition hover:text-white" href="/privacy">Privacy</Link></li>
              <li><Link className="transition hover:text-white" href="/terms">Terms</Link></li>
              <li><PortalLink className="transition hover:text-white" comingSoonClassName="text-white/72" /></li>
            </ul>
            <div className="mt-6 rounded-2xl border border-teal/25 bg-white/7 p-4 text-xs font-semibold leading-5 text-white/68">
              No detailed medical information should be submitted through public website forms.
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-xs leading-6 text-white/58 sm:px-8 lg:px-10">
          <p>© {new Date().getFullYear()} {site.legalName}.</p>
          <p className="mt-2 text-[12px] text-white/45">
            Website by{" "}
            <a
              className="rounded-full underline decoration-white/25 underline-offset-4 transition hover:bg-white/8 hover:px-1 hover:text-white/75 hover:decoration-white/55 focus-visible:text-white"
              href="https://www.afhdesignsbysam.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Web Designs by Sam
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
