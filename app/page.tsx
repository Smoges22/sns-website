import Image from "next/image";
import Link from "next/link";
import { SampleDocumentsSection } from "@/components/sample-documents";
import { ServiceCard } from "@/components/service-card";
import { FinalCta, PageShell, SectionContainer } from "@/components/section";
import { ButtonLink, LineIcon } from "@/components/ui";
import { absoluteUrl, audiences, createPageMetadata, processSteps, site } from "@/lib/site";
import { ongoingServices, primaryServices, serviceDefinitions, servicePath } from "@/lib/services";

export const metadata = createPageMetadata({
  title: "RN Assessments, Care Plans & Clinical Follow-Up",
  description:
    "RN assessments, negotiated care plans, annual reviews, and clinical follow-up for Adult Family Homes and care transitions in Washington.",
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
      ...serviceDefinitions.map((service) => ({
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
      <section className="relative overflow-hidden border-b border-navy/10 bg-white px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <span aria-hidden="true" className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-teal/10" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-teal sm:text-sm">Registered nurse services in Washington State</p>
            <h1 className="text-balance mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-navy sm:text-6xl lg:text-[4.5rem]">Professional RN Assessments, Care Plans & Clinical Follow-Up</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate sm:text-xl">Sosena Nursing Solutions provides RN assessment, individualized care planning, and focused clinical review for adults entering or receiving care in Adult Family Homes.</p>
            <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-navy">Serving AFH providers, referral professionals, hospitals, assisted living communities, and families. Services are provided by Sosena Mekuria, RN.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/request-assessment">Request an Assessment</ButtonLink>
              <ButtonLink href="/services" variant="secondary">View RN Services</ButtonLink>
            </div>
            <p className="mt-5 text-sm text-slate">Serving Washington State; availability is confirmed based on the service location.</p>
          </div>
          <div className="relative mx-auto w-full max-w-xl pb-8 pl-4 sm:pl-8 lg:pb-10">
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

      <SectionContainer eyebrow="Primary services" title="Start with the clinical foundation" intro="Two focused services establish current needs and practical daily-care guidance."><div className="grid gap-6 lg:grid-cols-2">{primaryServices.map((service,index)=><ServiceCard index={index} key={service.slug} service={service}/>)}</div></SectionContainer>

      <SectionContainer className="bg-[#F4F8F9]" eyebrow="Ongoing Clinical Review" title="Keep assessments and care guidance current" intro="Concise RN follow-up services for annual review and meaningful changes in care needs."><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{ongoingServices.map((service,index)=><ServiceCard compact index={index} key={service.slug} service={service}/>)}</div><Link className="mt-8 inline-flex min-h-11 items-center font-extrabold text-teal underline decoration-teal/30 underline-offset-4" href="/services">Compare all RN services</Link></SectionContainer>

      <SampleDocumentsSection />

      <SectionContainer className="bg-soft" eyebrow="Who we serve" title="Clinical support across care transitions" intro="SNS works with authorized providers, professionals, care teams, and families who need a clear picture of an adult’s current care needs.">
        <div className="divide-y divide-navy/10 border-y border-navy/10 lg:grid lg:grid-cols-5 lg:divide-x lg:divide-y-0">{audiences.map((audience, index) => <article className="px-3 py-6 sm:px-5 lg:py-8" key={audience.title}><LineIcon className="text-teal" name={index === 0 ? "home" : index === 2 || index === 3 ? "hospital" : index === 4 ? "family" : "people"} /><h2 className="mt-4 font-display text-xl font-bold text-navy">{audience.title}</h2><p className="mt-3 text-sm leading-6 text-slate">{audience.text}</p></article>)}</div>
        <ButtonLink className="mt-7 !px-0" href="/who-we-serve" variant="text">See how SNS supports each audience</ButtonLink>
      </SectionContainer>

      <SectionContainer eyebrow="Why choose SNS" title="Professional judgment with practical AFH understanding">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[["RN-Led Clinical Expertise","Assessments and care plans are completed and reviewed by an experienced Registered Nurse."],["Practical AFH Experience","Clinical documentation reflects an understanding of how Adult Family Homes provide day-to-day care."],["Clear Documentation","Information is organized so authorized providers, caregivers, families, and care teams can understand it."],["Responsive Communication","SNS communicates clearly with authorized contacts throughout the assessment process."]].map(([title,text]) => <div className="border-t-2 border-navy pt-5" key={title}><LineIcon className="text-teal" name="check"/><h2 className="mt-4 font-display text-xl font-bold text-navy">{title}</h2><p className="mt-3 text-sm leading-6 text-slate">{text}</p></div>)}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-[#EDF6FA]" eyebrow="How it works" title="A clear four-step process">
        <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10"><span aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-navy/20 lg:block" />{processSteps.map((step,index) => <li className="relative" key={step.title}><span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-navy text-sm font-black text-white ring-8 ring-[#EDF6FA]">{index+1}</span><h2 className="mt-6 text-xl font-black text-navy">{step.title}</h2><p className="mt-3 text-sm leading-6 text-slate">{step.text}</p></li>)}</ol>
        <ButtonLink className="mt-7" href="/request-assessment">Request an Assessment</ButtonLink>
      </SectionContainer>

      <SectionContainer eyebrow="Meet your RN" title="Meet Sosena Mekuria, RN" intro="Registered nurse experience, Adult Family Home understanding, and a commitment to clear person-centered documentation.">
        <div className="grid items-center gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[24px] bg-[#EEF3F5] p-3"><Image alt="Sosena Mekuria, RN, founder of Sosena Nursing Solutions" className="object-contain" fill sizes="(min-width:1024px) 38vw, 92vw" src="/images/team/sosena-mekuria-rn-approved.webp" /></div>
          <div><h2 className="font-display text-3xl font-bold tracking-[-0.025em] text-navy sm:text-4xl">Clinical experience grounded in real-world care</h2><p className="mt-5 leading-8 text-slate">Sosena brings more than 10 years of healthcare experience across hospital care, skilled nursing and rehabilitation, home health, long-term care, senior care, and Adult Family Home settings. Her earlier hospital-based healthcare experience includes Virginia Mason, and her RN experience includes Valley Medical Center.</p><p className="mt-4 leading-8 text-slate">With firsthand experience as an Adult Family Home provider and administrator, she now focuses SNS on professional RN assessments, individualized care plans, and focused clinical follow-up.</p><ButtonLink className="mt-7 !px-0" href="/about" variant="text">Meet Sosena</ButtonLink></div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-soft" eyebrow="Frequently asked questions" title="Common questions about RN assessments">
        <div className="max-w-5xl border-t border-navy/15">{faqs.map(([question,answer]) => <details className="border-b border-navy/15" key={question}><summary className="relative cursor-pointer py-6 pr-12 text-lg font-black text-navy transition-colors hover:text-teal focus-visible:text-teal">{question}</summary><p className="max-w-4xl pb-6 pr-10 leading-7 text-slate">{answer}</p></details>)}</div>
      </SectionContainer>
      <FinalCta />
    </PageShell>
  );
}
