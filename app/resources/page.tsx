import { FinalCta, PageHero, PageShell, SectionContainer } from "@/components/section";
import { ButtonLink, LineIcon } from "@/components/ui";
import { resourcePath, resources } from "@/lib/resources";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({ title: "RN Assessment & AFH Care Resources", description: "Concise guides about RN assessments, negotiated care plans, annual reviews, and changes in condition for Adult Family Home care.", path: "/resources" });

export default function ResourcesPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Resources" title="Practical guidance for Adult Family Home care decisions" intro="A small collection of clear, useful guides about RN assessments, care plans, and clinical review." />
      <SectionContainer>
        <div className="mb-8 flex items-center gap-3 border-b border-navy/15 pb-5"><LineIcon className="text-teal" name="document"/><p className="text-sm font-bold text-navy">SNS clinical guides</p></div>
        <div className="grid gap-px overflow-hidden border border-[#D5E0E6] bg-[#D5E0E6] md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <article className="group flex min-h-[290px] flex-col bg-white p-6 transition-colors hover:bg-[#F8FBFC] sm:p-8" key={resource.slug}>
              <div className="flex items-center justify-between"><p className="text-xs font-black uppercase tracking-[.16em] text-teal">SNS Guide</p><span className="font-display text-lg font-bold text-navy/30">0{index + 1}</span></div>
              <h2 className="mt-5 font-display text-2xl font-bold leading-tight tracking-[-.02em] text-navy">{resource.title}</h2>
              <p className="mt-4 flex-1 leading-7 text-slate">{resource.description}</p>
              <ButtonLink className="mt-6 !px-0" href={resourcePath(resource)} variant="text">Read the guide</ButtonLink>
            </article>
          ))}
        </div>
      </SectionContainer>
      <FinalCta />
    </PageShell>
  );
}
