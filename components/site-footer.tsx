import Link from "next/link";
import { BrandMark } from "@/components/brand";
import { site } from "@/lib/site";

const serviceLinks = [
  ["Initial RN Assessment", "/services/initial-rn-assessment"],
  ["Negotiated Care Plan", "/services/negotiated-care-plan"],
  ["Annual Assessment Renewal", "/services/annual-assessment-renewal"],
  ["Annual Patient Care Plan", "/services/annual-patient-care-plan"],
  ["90-Day Supervisory Visit", "/services/90-day-supervisory-visit"],
  ["Change in Condition", "/services/change-in-condition-assessment"],
] as const;

const informationLinks = [
  ["Who We Serve", "/who-we-serve"],
  ["Sample Documents", "/sample-documents"],
  ["Resources", "/resources"],
  ["How It Works", "/how-it-works"],
  ["About", "/about"],
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#102A43] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.35fr_.75fr_.8fr_1fr] lg:px-8 lg:py-16">
        <div>
          <BrandMark footer />
          <p className="mt-5 max-w-md text-sm leading-6 text-[#D6E1EA]">RN assessments, individualized care plans, and focused clinical follow-up provided by Sosena Mekuria, RN in Washington.</p>
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
      <div className="border-t border-white/10"><div className="mx-auto max-w-7xl px-5 py-5 text-xs text-[#AFC1CF] sm:px-6 lg:px-8">© {new Date().getFullYear()} {site.legalName}.</div></div>
    </footer>
  );
}
