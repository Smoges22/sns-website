import Link from "next/link";
import { SampleDocumentsSection } from "@/components/sample-documents";
import { ServiceCard } from "@/components/service-card";
import { Card, FinalCta, PageHero, PageShell, SectionContainer } from "@/components/section";
import { createPageMetadata, site } from "@/lib/site";
import { ongoingServices, primaryServices } from "@/lib/services";

export const metadata = createPageMetadata({ title: "RN Assessment, Care Plan & Follow-Up Services", description: "Explore initial and annual RN assessments, negotiated care plans, supervisory visits, and change-in-condition reviews from SNS.", path: "/services" });

export default function ServicesPage() {
  return <PageShell><PageHero eyebrow="Professional nursing services" title="RN Assessments, Care Plans & Clinical Follow-Up" intro={`Focused clinical services provided by ${site.provider} for authorized providers, professionals, care teams, and families in Washington.`}><Link className="inline-flex min-h-12 items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-extrabold text-white" href="/request-assessment">Request an Assessment</Link></PageHero><SectionContainer eyebrow="Primary services" title="Assessment and care-planning foundation"><div className="grid gap-6 lg:grid-cols-2">{primaryServices.map((service,index)=><ServiceCard index={index} key={service.slug} service={service}/>)}</div></SectionContainer><SectionContainer className="bg-[#F4F8F9]" eyebrow="Ongoing Clinical Review" title="Current information for changing needs"><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{ongoingServices.map((service,index)=><ServiceCard compact index={index} key={service.slug} service={service}/>)}</div></SectionContainer><SampleDocumentsSection /><SectionContainer><Card className="border-l-4 !border-l-teal !bg-[#F4F9FA]"><h2 className="text-2xl font-black text-navy">Clear clinical scope</h2><p className="mt-3 max-w-4xl leading-7 text-slate">SNS documents assessed care needs so the receiving Adult Family Home can determine whether it can appropriately meet those needs. SNS is not a placement agency and does not make admission decisions.</p></Card></SectionContainer><FinalCta /></PageShell>;
}
