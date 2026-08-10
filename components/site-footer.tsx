import Link from "next/link";
import { BrandMark } from "@/components/brand";
import { site } from "@/lib/site";

const serviceLinks = [
  ["RN Assessments", "/services/initial-rn-assessment"],
  ["Individualized / Negotiated Care Plans", "/services/negotiated-care-plan"],
] as const;

const informationLinks = [
  ["Who We Serve", "/who-we-serve"],
  ["Sample Documents", "/sample-documents"],
  ["Resources", "/resources"],
  ["Service Area", "/service-area"],
  ["Refer a Client", "/refer-a-client"],
  ["How It Works", "/how-it-works"],
  ["About", "/about"],
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#123354] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.35fr_.75fr_.8fr_1fr] lg:px-8 lg:py-16">
        <div>
          <BrandMark footer />
          <p className="mt-6 max-w-md text-sm leading-6 text-[#D6E1EA]">Professional RN assessments and individualized or negotiated care plans provided by Sosena Mekuria, RN in Washington.</p>
          <p className="mt-4 text-xs leading-5 text-[#AFC1CF]">Service availability is confirmed based on the service location.</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Services</p>
          <ul className="mt-3 grid gap-1 text-sm text-[#D6E1EA]">{serviceLinks.map(([label, href]) => <li key={href}><Link className="block rounded-lg py-2 hover:text-white" href={href}>{label}</Link></li>)}</ul>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Information</p>
          <ul className="mt-3 grid gap-1 text-sm text-[#D6E1EA]">{informationLinks.map(([label, href]) => <li key={href}><Link className="block rounded-lg py-2 hover:text-white" href={href}>{label}</Link></li>)}</ul>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">Contact</p>
          <a className="mt-3 block rounded-lg py-2 text-sm font-bold text-white" href={`tel:${site.phone.replaceAll("-", "")}`}>{site.phone}</a>
          <a className="block rounded-lg py-2 text-sm text-[#D6E1EA] hover:text-white" href={`mailto:${site.primaryEmail}`}>{site.primaryEmail}</a>
          <div className="mt-3 grid text-sm text-[#D6E1EA]">
            <Link className="rounded-lg py-2 hover:text-white" href="/privacy">Privacy</Link>
            <Link className="rounded-lg py-2 hover:text-white" href="/terms">Terms</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-5 py-5 text-center sm:px-6 lg:px-8">
          <p className="text-xs text-[#AFC1CF]">© {new Date().getFullYear()} {site.legalName}.</p>
          <a className="text-[0.68rem] text-[#8FA6B7] transition-colors hover:text-white hover:underline" href="https://www.afhdesignsbysam.com/" rel="noopener noreferrer" target="_blank">Web Design by Sam</a>
        </div>
      </div>
    </footer>
  );
}
