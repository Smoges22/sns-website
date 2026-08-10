import { RequestAssessmentForm } from "@/components/request-assessment-form";
import { PageHero, PageShell, SectionContainer } from "@/components/section";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({ title: "Request an RN Assessment", description: "Request an RN assessment or individualized care-plan service from Sosena Nursing Solutions using non-clinical coordination details only.", path: "/request-assessment" });

export default function RequestAssessmentPage(){return <PageShell><PageHero breadcrumbLabel="Request Assessment" eyebrow="Request an assessment" title="Tell SNS what support you need" intro={`Share basic contact, scheduling, and service information. ${site.provider} will follow up to confirm availability and the appropriate next step.`}/><SectionContainer className="bg-soft"><div className="mx-auto max-w-4xl"><RequestAssessmentForm /></div></SectionContainer></PageShell>}
