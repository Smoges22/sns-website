import { ButtonLink, LineIcon } from "@/components/ui";
import { ProcessTimeline } from "@/components/process-timeline";
import { FinalCta, PageHero, PageShell, SectionContainer } from "@/components/section";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({ title: "How RN Assessments & Care Plans Work", description: "See how Sosena Nursing Solutions coordinates a request, RN assessment, individualized care plan, and delivery to the authorized party.", path: "/how-it-works" });

export default function HowItWorksPage() {
  return (
    <PageShell>
      <PageHero breadcrumbLabel="How It Works" eyebrow="How it works" title="A straightforward path from request to completed documentation" intro={`SNS coordinates with authorized contacts, keeps communication clear, and explains what is needed at each step. Clinical services are provided by ${site.provider}.`}>
        <ButtonLink href="/request-assessment" variant="primary">Start a Request</ButtonLink>
      </PageHero>
      <SectionContainer eyebrow="Four-step process" title="Clear next steps from the beginning">
        <ProcessTimeline />
      </SectionContainer>
      <SectionContainer className="bg-soft" eyebrow="Privacy by design" title="Public intake stays intentionally non-clinical">
        <div className="grid gap-8 md:grid-cols-3">{[["Basic coordination only","The request form asks for contact, organization, service, timing, and a brief non-clinical message."],["Separate record sharing","Do not send clinical records through the public website or ordinary email. SNS provides separate instructions when records are needed."],["Authorized delivery","Completed documents are provided only to the authorized party using the agreed delivery method."]].map(([title,text], index) => <div className="border-t-2 border-navy pt-5" key={title}><LineIcon className="text-teal" name={index === 1 ? "document" : "check"}/><h2 className="mt-4 font-display text-xl font-bold text-navy">{title}</h2><p className="mt-3 leading-7 text-slate">{text}</p></div>)}</div>
      </SectionContainer>
      <FinalCta />
    </PageShell>
  );
}
