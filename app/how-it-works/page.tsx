import { ButtonLink, LineIcon } from "@/components/ui";
import { FinalCta, PageHero, PageShell, SectionContainer } from "@/components/section";
import { createPageMetadata, processSteps, site } from "@/lib/site";

export const metadata = createPageMetadata({ title: "How RN Assessments & Care Plans Work", description: "See how Sosena Nursing Solutions coordinates a request, RN assessment, individualized care plan, and delivery to the authorized party.", path: "/how-it-works" });

export default function HowItWorksPage() {
  return (
    <PageShell>
      <PageHero eyebrow="How it works" title="A straightforward path from request to completed documentation" intro={`SNS coordinates with authorized contacts, keeps communication clear, and explains what is needed at each step. Clinical services are provided by ${site.provider}.`}>
        <ButtonLink href="/request-assessment" variant="light">Start a Request</ButtonLink>
      </PageHero>
      <SectionContainer eyebrow="Four-step process" title="Clear next steps from the beginning">
        <ol className="relative mx-auto max-w-5xl before:absolute before:bottom-10 before:left-6 before:top-7 before:w-px before:bg-[#B9CED7] lg:before:left-1/2 lg:before:-translate-x-1/2">
          {processSteps.map((step, index) => (
            <li className={`relative grid gap-5 pb-12 pl-20 last:pb-0 lg:grid-cols-2 lg:gap-20 lg:pl-0 ${index % 2 ? "lg:text-left" : "lg:text-right"}`} key={step.title}>
              <span className="absolute left-0 top-0 z-10 grid h-12 w-12 place-items-center rounded-full bg-navy text-sm font-black text-white ring-8 ring-white lg:left-1/2 lg:-translate-x-1/2">{index + 1}</span>
              <div className={index % 2 ? "lg:col-start-2" : "lg:col-start-1"}>
                <p className="text-xs font-black uppercase tracking-[.16em] text-teal">Step {index + 1}</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">{step.title}</h2>
                <p className="mt-3 leading-7 text-slate">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </SectionContainer>
      <SectionContainer className="bg-soft" eyebrow="Privacy by design" title="Public intake stays intentionally non-clinical">
        <div className="grid gap-8 md:grid-cols-3">{[["Basic coordination only","The request form asks for contact, organization, service, timing, and a brief non-clinical message."],["Separate record sharing","Do not send clinical records through the public website or ordinary email. SNS provides separate instructions when records are needed."],["Authorized delivery","Completed documents are provided only to the authorized party using the agreed delivery method."]].map(([title,text], index) => <div className="border-t-2 border-navy pt-5" key={title}><LineIcon className="text-teal" name={index === 1 ? "document" : "check"}/><h2 className="mt-4 font-display text-xl font-bold text-navy">{title}</h2><p className="mt-3 leading-7 text-slate">{text}</p></div>)}</div>
      </SectionContainer>
      <FinalCta />
    </PageShell>
  );
}
