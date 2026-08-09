import Image from "next/image";
import Link from "next/link";
import { SampleDocumentsSection } from "@/components/sample-documents";
import { ServiceCard } from "@/components/service-card";
import { interactiveCardClass, FinalCta, PageShell, SectionContainer } from "@/components/section";
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
      <section className="border-b border-navy/10 bg-[radial-gradient(circle_at_88%_12%,rgba(94,210,221,0.18),transparent_26%),linear-gradient(135deg,#ffffff_0%,#F8FAFB_56%,#EAF4F7_100%)] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-teal sm:text-sm">Registered nurse services in Washington State</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.04] tracking-[-0.045em] text-navy sm:text-6xl lg:text-[4.5rem]">Professional RN Assessments, Care Plans & Clinical Follow-Up</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate sm:text-xl">Sosena Nursing Solutions provides RN assessment, individualized care planning, and focused clinical review for adults entering or receiving care in Adult Family Homes.</p>
            <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-navy">Serving AFH providers, referral professionals, hospitals, assisted living communities, and families. Services are provided by Sosena Mekuria, RN.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="inline-flex min-h-12 items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#214562]" href="/request-assessment">Request an Assessment</Link>
              <Link className="inline-flex min-h-12 items-center justify-center rounded-xl border border-navy/20 bg-white px-5 py-3 text-sm font-extrabold text-navy transition hover:border-navy hover:bg-soft" href="/services">View RN Services</Link>
            </div>
            <p className="mt-5 text-sm text-slate">Serving Washington State; availability is confirmed based on the service location.</p>
          </div>
          <div className="overflow-hidden rounded-[28px] bg-white p-3 shadow-[0_28px_80px_rgba(23,50,77,0.14)] ring-1 ring-navy/10 sm:p-4">
            <Image alt="Sosena Mekuria, RN, founder of Sosena Nursing Solutions" className="h-auto w-full rounded-[20px] object-contain" height={1122} priority sizes="(min-width:1024px) 40vw, 92vw" src="/images/team/sosena-mekuria-rn-approved.webp" width={1402} />
            <div className="px-3 pb-3 pt-5 sm:px-4 sm:pb-4">
              <p className="text-2xl font-black tracking-tight text-navy">Sosena Mekuria, RN</p>
              <p className="mt-1 text-sm font-semibold text-teal">Founder and Registered Nurse</p>
              <div className="mt-5 divide-y divide-navy/10 border-y border-navy/10 text-sm font-bold leading-6 text-navy">
                {["More than 10 years of healthcare experience", "Registered Nurse and Adult Family Home experience", "Clear clinical assessments and care planning"].map((item) => <p className="py-3" key={item}>{item}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionContainer eyebrow="Primary services" title="Start with the clinical foundation" intro="Two focused services establish current needs and practical daily-care guidance."><div className="grid gap-6 lg:grid-cols-2">{primaryServices.map((service,index)=><ServiceCard index={index} key={service.slug} service={service}/>)}</div></SectionContainer>

      <SectionContainer className="bg-[#F4F8F9]" eyebrow="Ongoing Clinical Review" title="Keep assessments and care guidance current" intro="Concise RN follow-up services for annual review and meaningful changes in care needs."><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{ongoingServices.map((service,index)=><ServiceCard compact index={index} key={service.slug} service={service}/>)}</div><Link className="mt-8 inline-flex min-h-11 items-center font-extrabold text-teal underline decoration-teal/30 underline-offset-4" href="/services">Compare all RN services</Link></SectionContainer>

      <SampleDocumentsSection />

      <SectionContainer className="bg-soft" eyebrow="Who we serve" title="Clinical support across care transitions" intro="SNS works with authorized providers, professionals, care teams, and families who need a clear picture of an adult’s current care needs.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{audiences.map((audience, index) => <article className={`${interactiveCardClass} p-6`} key={audience.title}><span className="grid h-10 w-10 place-items-center rounded-full border border-[#D2E1E7] bg-[#F1F7F9] text-xs font-black text-navy">0{index + 1}</span><h2 className="mt-4 text-xl font-black text-navy">{audience.title}</h2><p className="mt-3 text-sm leading-6 text-slate">{audience.text}</p></article>)}</div>
        <Link className="mt-7 inline-flex min-h-11 items-center font-extrabold text-teal underline decoration-teal/30 underline-offset-4" href="/who-we-serve">See how SNS supports each audience</Link>
      </SectionContainer>

      <SectionContainer eyebrow="Why choose SNS" title="Professional judgment with practical AFH understanding">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[["RN-Led Clinical Expertise","Assessments and care plans are completed and reviewed by an experienced Registered Nurse."],["Practical AFH Experience","Clinical documentation reflects an understanding of how Adult Family Homes provide day-to-day care."],["Clear Documentation","Information is organized so authorized providers, caregivers, families, and care teams can understand it."],["Responsive Communication","SNS communicates clearly with authorized contacts throughout the assessment process."]].map(([title,text]) => <div className={`${interactiveCardClass} border-t-4 !border-t-navy p-6`} key={title}><h2 className="text-lg font-black text-navy">{title}</h2><p className="mt-3 text-sm leading-6 text-slate">{text}</p></div>)}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-[#EDF6FA]" eyebrow="How it works" title="A clear four-step process">
        <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10"><span aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-navy/20 lg:block" />{processSteps.map((step,index) => <li className="relative" key={step.title}><span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-navy text-sm font-black text-white ring-8 ring-[#EDF6FA]">{index+1}</span><h2 className="mt-6 text-xl font-black text-navy">{step.title}</h2><p className="mt-3 text-sm leading-6 text-slate">{step.text}</p></li>)}</ol>
        <Link className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-extrabold text-white" href="/request-assessment">Request an Assessment</Link>
      </SectionContainer>

      <SectionContainer eyebrow="Meet your RN" title="Meet Sosena Mekuria, RN" intro="Registered nurse experience, Adult Family Home understanding, and a commitment to clear person-centered documentation.">
        <div className="grid items-center gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[24px] bg-[#EEF3F5] p-3"><Image alt="Sosena Mekuria, RN, founder of Sosena Nursing Solutions" className="object-contain" fill sizes="(min-width:1024px) 38vw, 92vw" src="/images/team/sosena-mekuria-rn-approved.webp" /></div>
          <div><h2 className="text-3xl font-black tracking-[-0.025em] text-navy sm:text-4xl">Clinical experience grounded in real-world care</h2><p className="mt-5 leading-8 text-slate">Sosena brings more than 10 years of healthcare experience across hospital care, skilled nursing and rehabilitation, home health, long-term care, senior care, and Adult Family Home settings. Her earlier hospital-based healthcare experience includes Virginia Mason, and her RN experience includes Valley Medical Center.</p><p className="mt-4 leading-8 text-slate">With firsthand experience as an Adult Family Home provider and administrator, she now focuses SNS on professional RN assessments, individualized care plans, and focused clinical follow-up.</p><Link className="mt-7 inline-flex min-h-11 items-center font-extrabold text-teal underline decoration-teal/30 underline-offset-4 hover:text-navy" href="/about">Meet Sosena</Link></div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-soft" eyebrow="Frequently asked questions" title="Common questions about RN assessments">
        <div className="max-w-5xl border-t border-navy/15">{faqs.map(([question,answer]) => <details className="border-b border-navy/15" key={question}><summary className="relative cursor-pointer py-6 pr-12 text-lg font-black text-navy transition-colors hover:text-teal focus-visible:text-teal">{question}</summary><p className="max-w-4xl pb-6 pr-10 leading-7 text-slate">{answer}</p></details>)}</div>
      </SectionContainer>
      <FinalCta />
    </PageShell>
  );
}
