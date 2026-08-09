import Link from "next/link";
import { BrandMark } from "@/components/brand";
import { PortalLink } from "@/components/portal-link";
import { site } from "@/lib/site";

const footerLinks = [
  ["RN Assessments", "/services/rn-assessments"],
  ["Individualized Care Plans", "/services/negotiated-care-plans"],
  ["Who We Serve", "/who-we-serve"],
  ["How It Works", "/how-it-works"],
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#102A43] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.25fr_1fr_1fr] lg:px-8">
        <div>
          <BrandMark inverse />
          <p className="mt-5 max-w-md text-sm leading-6 text-[#D6E1EA]">RN assessments and individualized care plans provided by Sosena Mekuria, RN for authorized care providers, professionals, and families in Washington.</p>
          <p className="mt-4 text-xs leading-5 text-[#AFC1CF]">Service availability is confirmed based on the service location.</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Services & information</p>
          <ul className="mt-3 grid gap-1 text-sm text-[#D6E1EA]">{footerLinks.map(([label, href]) => <li key={href}><Link className="block rounded-lg py-2 hover:text-white" href={href}>{label}</Link></li>)}</ul>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Contact</p>
          <a className="mt-3 block rounded-lg py-2 text-sm font-bold text-white" href={`tel:${site.phone.replaceAll("-", "")}`}>{site.phone}</a>
          <a className="block rounded-lg py-2 text-sm text-[#D6E1EA] hover:text-white" href={`mailto:${site.primaryEmail}`}>{site.primaryEmail}</a>
          <div className="mt-3 grid text-sm text-[#D6E1EA]">
            <Link className="rounded-lg py-2 hover:text-white" href="/privacy">Privacy</Link>
            <Link className="rounded-lg py-2 hover:text-white" href="/terms">Terms</Link>
            <PortalLink className="rounded-lg py-2 hover:text-white" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10"><div className="mx-auto max-w-7xl px-5 py-5 text-xs text-[#AFC1CF] sm:px-6 lg:px-8">© {new Date().getFullYear()} {site.legalName}.</div></div>
    </footer>
  );
}
