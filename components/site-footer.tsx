import Link from "next/link";
import { BrandMark } from "@/components/brand";
import { PortalLink } from "@/components/portal-link";
import { serviceGroups, site } from "@/lib/site";

export function SiteFooter() {
  const services = serviceGroups.flatMap((group) => group.services.map((service) => service.name)).slice(0, 7);

  return (
    <footer className="bg-white px-4 pb-5 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_12%_0%,rgba(94,210,221,0.2),transparent_34%),radial-gradient(circle_at_92%_18%,rgba(255,255,255,0.08),transparent_30%),linear-gradient(135deg,#0F2740_0%,#102A43_62%,#0B3448_100%)] text-white shadow-[0_26px_82px_rgba(16,42,67,0.26)]">
        <div className="grid gap-8 px-5 py-9 sm:px-8 lg:grid-cols-[1.25fr_1fr_0.85fr] lg:px-9 lg:py-10">
          <div>
            <BrandMark inverse />
            <p className="mt-6 max-w-md text-sm leading-6 text-[#D6E1EA]">
              {site.legalName} provides RN-led assessment and care-planning services for Adult Family Homes with practical clinical documentation workflows.
            </p>
            <div className="mt-6 grid gap-2 rounded-[20px] border border-white/15 bg-white/9 p-4 text-sm backdrop-blur">
              <p><a className="font-bold text-white transition hover:text-[#5ED2DD]" href={`tel:${site.phone.replaceAll("-", "")}`}>{site.phone}</a></p>
              <p><a className="text-[#D6E1EA] transition hover:text-[#5ED2DD]" href={`mailto:${site.primaryEmail}`}>{site.primaryEmail}</a></p>
              <p className="text-[#AFC1CF]">{site.domain}</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#5ED2DD]">Services</p>
            <ul className="mt-5 grid gap-2.5 break-words text-sm text-[#D6E1EA]">
              {services.map((service) => <li key={service}>{service}</li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#5ED2DD]">Company</p>
            <ul className="mt-5 grid gap-2.5 break-words text-sm text-[#D6E1EA]">
              <li><Link className="transition hover:text-white" href="/about">About</Link></li>
              <li><Link className="transition hover:text-white" href="/contact">Contact</Link></li>
              <li><Link className="transition hover:text-white" href="/privacy">Privacy</Link></li>
              <li><Link className="transition hover:text-white" href="/terms">Terms</Link></li>
              <li><PortalLink className="transition hover:text-white" comingSoonClassName="text-[#D6E1EA]" /></li>
            </ul>
            <div className="mt-6 rounded-[20px] border border-[#5ED2DD]/30 bg-white/9 p-4 text-xs font-semibold leading-5 text-[#D6E1EA]">
              No detailed medical information should be submitted through public website forms.
            </div>
          </div>
        </div>
        <div className="border-t border-white/12 px-5 py-5 text-center text-xs leading-6 text-[#AFC1CF] sm:px-8 lg:px-9">
          <p>&copy; {new Date().getFullYear()} {site.legalName}.</p>
          <p className="mt-2 text-[12px] text-[#AFC1CF]">
            Website by{" "}
            <a
              className="rounded-full underline decoration-[#AFC1CF]/45 underline-offset-4 transition hover:bg-white/8 hover:px-1 hover:text-white hover:decoration-[#5ED2DD] focus-visible:text-white"
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
