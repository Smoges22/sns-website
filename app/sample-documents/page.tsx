import { SampleDocumentsSection } from "@/components/sample-documents";
import { FinalCta, PageHero, PageShell } from "@/components/section";
import { createPageMetadata } from "@/lib/site";
export const metadata = createPageMetadata({ title: "Sample RN Assessment & Care Plan Documents", description: "Preview fictional sample RN assessment and individualized care-plan documents from Sosena Nursing Solutions.", path: "/sample-documents" });
export default function SampleDocumentsPage(){return <PageShell><PageHero breadcrumbLabel="Sample Documents" eyebrow="Sample Documents" title="Explore fictional SNS document samples" intro="Review polished examples of the structure SNS uses for RN assessments and individualized care plans."/><SampleDocumentsSection className="bg-[#F7FAFB]"/><FinalCta/></PageShell>}
