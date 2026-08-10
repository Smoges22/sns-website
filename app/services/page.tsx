import { SampleDocumentsSection } from "@/components/sample-documents";
import { ServiceCard } from "@/components/service-card";
import { FinalCta, PageHero, PageShell, SectionContainer } from "@/components/section";
import { ButtonLink, LineIcon } from "@/components/ui";
import { createPageMetadata, site } from "@/lib/site";
import { primaryServices, supportingContexts } from "@/lib/services";

export const metadata = createPageMetadata({ title: "RN Assessment & Individualized Care Plan Services", description: "Explore professional RN assessments and individualized or negotiated care plans from SNS, including reassessment and update contexts.", path: "/services" });

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero breadcrumbLabel="Services" eyebrow="Professional nursing services" title="RN Assessments & Individualized Care Plans" intro={`Two focused clinical services provided by ${site.provider} for authorized providers, professionals, care teams, and families in Washington.`}>
        <ButtonLink href="/request-assessment" variant="primary">Request an Assessment</ButtonLink>
      </PageHero>
      <SectionContainer eyebrow="Primary services" title="Assessment and care-planning foundation" intro="Begin with a clear clinical picture, then translate assessed needs into practical daily-care guidance.">
        <div className="grid gap-6 lg:grid-cols-2">{primaryServices.map((service,index)=><ServiceCard index={index} key={service.slug} service={service}/>)}</div>
      </SectionContainer>
      <SectionContainer className="bg-[#F4F8F9]" eyebrow="Supporting contexts" title="When updates may be needed" intro="Annual review, significant changes, and focused follow-up may indicate that an RN assessment or care plan should be revisited.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{supportingContexts.map((service,index)=><ServiceCard compact index={index} key={service.slug} service={service}/>)}</div>
      </SectionContainer>
      <SampleDocumentsSection />
      <SectionContainer>
        <div className="grid gap-6 border-y border-navy/15 py-9 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-7"><span className="grid h-12 w-12 place-items-center rounded-xl bg-[#E8F5F6] text-teal"><LineIcon name="check" /></span><div><h2 className="font-display text-2xl font-bold text-navy">Clear clinical scope</h2><p className="mt-3 max-w-4xl leading-7 text-slate">SNS documents assessed care needs so the receiving Adult Family Home can determine whether it can appropriately meet those needs. SNS is not a placement agency and does not make admission decisions.</p></div></div>
      </SectionContainer>
      <FinalCta />
    </PageShell>
  );
}
