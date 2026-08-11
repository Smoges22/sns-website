import Image from "next/image";
import Link from "next/link";
import { AudienceTabs } from "@/components/audience-tabs";
import { ProcessTimeline } from "@/components/process-timeline";
import { SampleDocumentsSection } from "@/components/sample-documents";
import { HomeServiceAreaPreview } from "@/components/service-area";
import { ServiceCard } from "@/components/service-card";
import { FinalCta, PageShell, SectionContainer } from "@/components/section";
import { ButtonLink, LineIcon } from "@/components/ui";
import { absoluteUrl, createPageMetadata, site } from "@/lib/site";
import { primaryServices, servicePath, supportingContexts } from "@/lib/services";

export const metadata = createPageMetadata({
  title: "Professional RN Assessments & Individualized / Negotiated Care Plans",
  description:
    "Professional RN assessments and individualized or negotiated care plans for Adult Family Homes and care transitions in Washington.",
  path: "/",
});

const faqs = [
  ["Who can request an RN assessment?", "Adult Family Home providers, authorized referral or placement professionals, hospital care teams, assisted living communities, and families may contact SNS. Authorization is confirmed before clinical information is shared."],
  ["When is an RN assessment needed for Adult Family Home placement?", "An assessment may be requested before admission to document current health, functional, cognitive, behavioral, medication, safety, and personal-care needs for the receiving provider’s review."],
  ["Can a referral or placement professional coordinate an assessment?", "Yes. An authorized referral or placement professional may coordinate an assessment for a client preparing for an Adult Family Home transition."],
  ["Can SNS assess someone in a hospital or assisted living community?", "SNS can coordinate with an authorized hospital or assisted living contact based on the person’s needs, service location, access, and scheduling availability."],
  ["What information is needed to begin?", "Start with basic contact, location, reason for the request, and authorization information. SNS provides separate instructions when relevant clinical records are needed."],
  ["How are completed documents provided?", "Completed assessments and care plans are provided to the authorized party using the agreed delivery method. Clinical records are not collected through the public website."],
  ["Does SNS decide whether an Adult Family Home can accept someone?", "No. SNS documents assessed care needs. The receiving Adult Family Home determines whether it can appropriately meet those needs."],
] as const;

export default function HomePage() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      ...primaryServices.map((service) => ({
        "@type": "Service",
        "@id": `${absoluteUrl(servicePath(service))}#service`,
        name: service.title,
        provider: { "@id": `${site.url}/#organization` },
        areaServed: { "@type": "State", name: "Washington" },
        url: absoluteUrl(servicePath(service)),
      })),
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faqs.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text },
        })),
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema).replace(/</g, "\\u003c") }} />
      <section className="relative overflow-hidden border-b border-navy/10 bg-white px-5 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <span aria-hidden="true" className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-teal/10" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-14">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-teal sm:text-sm">Registered nurse services in Washington State</p>
            <h1 className="text-balance mt-3 max-w-4xl font-display text-[2.2rem] font-bold leading-[1.07] tracking-[-0.038em] text-navy sm:text-[2.85rem] lg:text-[3.35rem] xl:text-[3.55rem]">Professional RN Assessments & Individualized Care Plans</h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate sm:text-lg sm:leading-8">Sosena Nursing Solutions provides professional RN assessments and individualized or negotiated care plans for adults entering or receiving care in Adult Family Homes.</p>
            <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-navy sm:text-base sm:leading-7">Serving AFH providers, referral professionals, hospitals, assisted living communities, and families. Services are provided by Sosena Mekuria, RN.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/request-assessment">Request an Assessment</ButtonLink>
              <ButtonLink href="/services" variant="secondary">View RN Services</ButtonLink>
            </div>
            <p className="mt-4 text-sm text-slate">Serving Washington State; availability is confirmed based on the service location.</p>
          </div>
          <div className="relative mx-auto w-full max-w-[18rem] pb-7 pl-4 sm:max-w-[29rem] sm:pl-7 lg:pb-8">
            <div aria-hidden="true" className="absolute bottom-0 left-0 h-[82%] w-[86%] bg-[#EAF3F5]" />
            <div className="relative overflow-hidden border border-[#D3E0E6] bg-white p-2 shadow-[0_20px_60px_rgba(23,50,77,0.10)]">
              <Image alt="Sosena Mekuria, RN, founder of Sosena Nursing Solutions" className="h-auto w-full object-contain" height={1122} priority sizes="(min-width:1024px) 40vw, 92vw" src="/images/team/sosena-mekuria-rn-approved.webp" width={1402} />
            </div>
            <div className="absolute bottom-0 right-0 border-l-4 border-teal bg-white px-5 py-4 shadow-[0_10px_30px_rgba(23,50,77,0.10)]">
              <p className="font-display text-xl font-bold text-navy">Sosena Mekuria, RN</p>
              <p className="mt-1 text-xs font-extrabold uppercase tracking-[.12em] text-teal">Founder and Registered Nurse</p>
            </div>
          </div>
        </div>
      </section>

      <SectionContainer compact eyebrow="Primary services" title="Start with the clinical foundation" intro="Two focused services establish current needs and practical daily-care guidance."><div className="grid gap-5 lg:grid-cols-2">{primaryServices.map((service,index)=><ServiceCard home index={index} key={service.slug} service={service}/>)}</div></SectionContainer>

      <SectionContainer compact className="bg-[#F4F8F9]" eyebrow="Assessment & Care Plan Updates" title="When assessments and care plans need updating" intro="Common reasons to revisit an RN assessment or individualized care plan as needs change.">
        <div className="border-y border-navy/15 md:hidden">
          {supportingContexts.map((service, index) => (
            <details className="border-b border-navy/15 last:border-b-0" key={service.slug}>
              <summary className="relative grid cursor-pointer grid-cols-[2.25rem_1fr] gap-3 py-4 pr-10 text-navy transition-colors hover:text-teal focus-visible:text-teal">
                <span aria-hidden="true" className="font-display text-base font-bold text-teal">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-display text-lg font-bold leading-tight">{service.shortTitle}</span>
              </summary>
              <div className="pb-4 pl-[3rem] pr-3">
                <p className="text-sm leading-6 text-slate">{service.description}</p>
                <Link className="mt-2 inline-flex min-h-10 items-center font-extrabold text-teal underline decoration-teal/30 underline-offset-4" href={servicePath(service)}>{service.detailCta}</Link>
              </div>
            </details>
          ))}
        </div>
        <div className="hidden gap-x-10 md:grid md:grid-cols-2">
          {supportingContexts.map((service, index) => (
            <article className="grid min-w-0 grid-cols-[2.25rem_1fr] gap-3 border-t border-navy/15 py-4" key={service.slug}>
              <span aria-hidden="true" className="pt-0.5 font-display text-base font-bold text-teal">{String(index + 1).padStart(2, "0")}</span>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold leading-tight tracking-[-0.02em] text-navy">{service.shortTitle}</h3>
                <p className="mt-1 text-[0.82rem] leading-5 text-slate">{service.description}</p>
                <Link className="mt-1.5 inline-flex min-h-9 items-center text-sm font-extrabold text-teal underline decoration-teal/30 underline-offset-4" href={servicePath(service)}>{service.detailCta}</Link>
              </div>
            </article>
          ))}
        </div>
        <Link className="mt-4 inline-flex min-h-11 items-center font-extrabold text-teal underline decoration-teal/30 underline-offset-4" href="/services">Explore assessment and care-plan updates</Link>
      </SectionContainer>

      <SampleDocumentsSection compact />

      <SectionContainer compact className="bg-soft" eyebrow="Who we serve" title="Clinical support across care transitions" intro="SNS works with authorized providers, professionals, care teams, and families who need a clear picture of an adult’s current care needs.">
        <AudienceTabs compact />
      </SectionContainer>

      <HomeServiceAreaPreview />

      <SectionContainer compact eyebrow="Why choose SNS" title="Professional judgment with practical AFH understanding">
        <div className="grid max-w-5xl gap-x-10 gap-y-5 md:grid-cols-2">
          {[["RN-Led Clinical Expertise","Assessments and care plans are completed and reviewed by an experienced Registered Nurse."],["Practical AFH Experience","Clinical documentation reflects an understanding of how Adult Family Homes provide day-to-day care."],["Clear Documentation","Information is organized so authorized providers, caregivers, families, and care teams can understand it."],["Responsive Communication","SNS communicates clearly with authorized contacts throughout the assessment process."]].map(([title,text]) => <div className="grid grid-cols-[1.5rem_1fr] gap-2.5" key={title}><LineIcon className="mt-0.5 h-5 w-5 text-teal" name="check"/><div><h2 className="font-display text-lg font-bold text-navy">{title}</h2><p className="mt-1 text-[0.82rem] leading-5 text-slate sm:text-sm sm:leading-6">{text}</p></div></div>)}
        </div>
      </SectionContainer>

      <SectionContainer compact className="bg-[#EDF6FA]" eyebrow="How it works" title="A clear four-step process">
        <ProcessTimeline compact tinted />
      </SectionContainer>

      <SectionContainer compact eyebrow="Meet your RN" title="Meet Sosena Mekuria, RN">
        <div className="grid items-center gap-7 lg:grid-cols-[.82fr_1.18fr] lg:gap-12">
          <div className="relative mx-auto w-full max-w-[18rem] overflow-hidden border border-[#D2E0E6] bg-[#EEF3F5] p-3 shadow-[0_18px_48px_rgba(23,50,77,0.07)] sm:max-w-sm lg:max-w-md">
            <Image alt="Sosena Mekuria, RN, founder of Sosena Nursing Solutions" className="h-auto w-full" height={1122} sizes="(min-width:1024px) 38vw, 92vw" src="/images/team/sosena-mekuria-rn-approved.webp" width={1402} />
          </div>
          <div><p className="leading-7 text-slate sm:text-lg sm:leading-8">Sosena brings more than 10 years of healthcare experience and firsthand Adult Family Home provider and administrator experience. Through SNS, she focuses on professional RN assessments and individualized or negotiated care plans, including reassessments and updates when needs change.</p><ButtonLink className="mt-5 !px-0" href="/about" variant="text">Meet Sosena</ButtonLink></div>
        </div>
      </SectionContainer>

      <SectionContainer compact className="bg-soft" eyebrow="Frequently asked questions" title="Common questions about RN assessments">
        <div className="grid max-w-6xl border-t border-navy/15 md:grid-cols-2 md:gap-x-10">{faqs.map(([question,answer]) => <details className="border-b border-navy/15" key={question}><summary className="relative cursor-pointer py-3 pr-12 text-[0.95rem] font-black text-navy transition-colors hover:text-teal focus-visible:text-teal sm:py-4 sm:text-lg">{question}</summary><p className="max-w-4xl pb-4 pr-10 leading-7 text-slate">{answer}</p></details>)}</div>
      </SectionContainer>
      <FinalCta compact />
    </PageShell>
  );
}
