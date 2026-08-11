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
    <footer className="bg-[#123354] font-sans text-white">
      <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-12 px-5 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.35fr_.75fr_.8fr_1fr] lg:px-8 lg:py-16">
        <div>
          <BrandMark footer />
          <p className="mt-6 max-w-md text-sm leading-6 text-[#D6E1EA]">Professional RN assessments and individualized or negotiated care plans provided by Sosena Mekuria, RN in Washington.</p>
          <p className="mt-4 text-xs leading-5 text-[#AFC1CF]">Service availability is confirmed based on the service location.</p>
        </div>
        <div>
          <p className="footer-heading">Services</p>
          <ul className="mt-3 grid text-[15px] lg:text-sm">{serviceLinks.map(([label, href]) => <li key={href}><Link className="footer-link" href={href}>{label}</Link></li>)}</ul>
        </div>
        <div>
          <p className="footer-heading">Information</p>
          <ul className="mt-3 grid text-[15px] lg:text-sm">{informationLinks.map(([label, href]) => <li key={href}><Link className="footer-link" href={href}>{label}</Link></li>)}</ul>
        </div>
        <div>
          <p className="footer-heading">Contact</p>
          <div className="mt-3 grid text-[15px] lg:text-sm">
            <a className="footer-link font-bold text-white" href={`tel:${site.phone.replaceAll("-", "")}`}>{site.phone}</a>
            <a className="footer-link" href={`mailto:${site.primaryEmail}`}>{site.primaryEmail}</a>
          </div>
          <div className="mt-3 grid text-[15px] lg:text-sm">
            <Link className="footer-link" href="/privacy">Privacy</Link>
            <Link className="footer-link" href="/terms">Terms</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-5 py-5 text-center sm:px-6 lg:px-8">
          <p className="text-xs text-[#AFC1CF]">© {new Date().getFullYear()} {site.legalName}.</p>
          <a className="text-[0.68rem] text-[#8FA6B7] underline-offset-4 transition-colors duration-200 hover:text-[#8BE4EA] hover:underline" href="https://www.afhdesignsbysam.com/" rel="noopener noreferrer" target="_blank">Web Design by Sam</a>
        </div>
      </div>
    </footer>
  );
}
