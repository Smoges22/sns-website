import Image from "next/image";
import Link from "next/link";
import { Card, FinalCta, PageShell, SectionContainer } from "@/components/section";
import { absoluteUrl, audiences, createPageMetadata, processSteps, services, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "RN Assessments & Care Plans",
  description:
    "RN-led assessments and individualized care plans for Adult Family Homes, care teams, referral professionals, assisted living, and families in Washington.",
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
      ...services.map((service) => ({
        "@type": "Service",
        "@id": `${absoluteUrl(service.href)}#service`,
        name: service.title,
        provider: { "@id": `${site.url}/#organization` },
        areaServed: { "@type": "State", name: "Washington" },
        url: absoluteUrl(service.href),
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
      <section className="border-b border-navy/10 bg-[linear-gradient(135deg,#ffffff_0%,#F8FAFC_58%,#EDF6FA_100%)] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-teal sm:text-sm">Registered nurse services in Washington State</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.04em] text-navy sm:text-6xl lg:text-7xl">RN Assessments & Individualized Care Plans</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate sm:text-xl">Sosena Nursing Solutions provides professional RN assessments and individualized, negotiated care plans for adults entering or receiving care in Adult Family Homes.</p>
            <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-navy">Serving AFH providers, referral professionals, hospitals, assisted living communities, and families. Services are provided by Sosena Mekuria, RN.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="inline-flex min-h-12 items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#214562]" href="/request-assessment">Request an Assessment</Link>
              <Link className="inline-flex min-h-12 items-center justify-center rounded-xl border border-navy/20 bg-white px-5 py-3 text-sm font-extrabold text-navy transition hover:border-navy hover:bg-soft" href="/services">View RN Services</Link>
            </div>
            <p className="mt-5 text-sm text-slate">Serving Washington State; availability is confirmed based on the service location.</p>
          </div>
          <div className="grid gap-4 rounded-[28px] border border-[#C8D8E2] bg-white p-5 shadow-[0_20px_60px_rgba(23,50,77,0.1)] sm:p-7">
            <div className="grid grid-cols-[88px_1fr] items-center gap-4 border-b border-navy/10 pb-5">
              <Image alt="Sosena Mekuria, RN, founder of Sosena Nursing Solutions" className="aspect-square rounded-2xl object-cover object-[57%_center]" height={176} priority sizes="88px" src="/images/team/sosena-mekuria-rn-approved.webp" width={176} />
              <div><p className="text-xl font-black text-navy">Sosena Mekuria, RN</p><p className="mt-1 text-sm leading-6 text-slate">Registered Nurse providing assessment and care-planning services.</p></div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {["Comprehensive RN assessment", "Person-centered care planning", "Practical Adult Family Home perspective", "Clear documentation for authorized parties"].map((item) => <p className="rounded-xl bg-soft px-4 py-3 text-sm font-bold text-navy" key={item}>✓ {item}</p>)}
            </div>
            <p className="text-xs leading-5 text-slate">SNS documents assessed care needs. The receiving Adult Family Home makes its own decision about whether it can appropriately meet those needs.</p>
          </div>
        </div>
      </section>

      <SectionContainer eyebrow="Professional nursing services" title="Two focused services for clear care decisions" intro="SNS focuses on understanding current care needs and turning them into practical, person-centered guidance.">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => <Card key={service.href} className="p-6 sm:p-8"><p className="text-xs font-black uppercase tracking-[0.16em] text-teal">Service 0{index + 1}</p><h2 className="mt-3 text-3xl font-black tracking-tight text-navy">{service.title}</h2><p className="mt-4 leading-7 text-slate">{service.description}</p><ul className="mt-5 grid gap-2 text-sm text-slate">{service.examples.map((example) => <li className="flex gap-3" key={example}><span aria-hidden="true" className="text-teal">●</span>{example}</li>)}</ul><Link className="mt-6 inline-flex min-h-11 items-center font-extrabold text-teal underline decoration-teal/30 underline-offset-4" href={service.href}>Learn about {service.title.toLowerCase()}</Link></Card>)}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-soft" eyebrow="Who we serve" title="Clinical support across care transitions" intro="SNS works with authorized providers, professionals, care teams, and families who need a clear picture of an adult’s current care needs.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{audiences.map((audience) => <Card key={audience.title}><h2 className="text-xl font-black text-navy">{audience.title}</h2><p className="mt-3 text-sm leading-6 text-slate">{audience.text}</p></Card>)}</div>
        <Link className="mt-7 inline-flex min-h-11 items-center font-extrabold text-teal underline decoration-teal/30 underline-offset-4" href="/who-we-serve">See how SNS supports each audience</Link>
      </SectionContainer>

      <SectionContainer eyebrow="Why choose SNS" title="Professional judgment with practical AFH understanding">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[["RN-Led Clinical Expertise","Assessments and care plans are completed and reviewed by an experienced Registered Nurse."],["Practical AFH Experience","Clinical documentation reflects an understanding of how Adult Family Homes provide day-to-day care."],["Clear Documentation","Information is organized so authorized providers, caregivers, families, and care teams can understand it."],["Responsive Communication","SNS communicates clearly with authorized contacts throughout the assessment process."]].map(([title,text]) => <div className="border-t-4 border-navy pt-5" key={title}><h2 className="text-lg font-black text-navy">{title}</h2><p className="mt-2 text-sm leading-6 text-slate">{text}</p></div>)}
        </div>
      </SectionContainer>

      <SectionContainer className="bg-[#EDF6FA]" eyebrow="How it works" title="A clear four-step process">
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{processSteps.map((step,index) => <li className="rounded-[20px] border border-navy/10 bg-white p-5" key={step.title}><span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-sm font-black text-white">{index+1}</span><h2 className="mt-4 text-xl font-black text-navy">{step.title}</h2><p className="mt-2 text-sm leading-6 text-slate">{step.text}</p></li>)}</ol>
        <Link className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-extrabold text-white" href="/request-assessment">Request an Assessment</Link>
      </SectionContainer>

      <SectionContainer eyebrow="Meet your RN" title="Sosena Mekuria, RN" intro="Registered nurse experience, Adult Family Home understanding, and a commitment to clear person-centered documentation.">
        <div className="grid items-center gap-8 lg:grid-cols-[.58fr_1.42fr]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[24px] bg-soft"><Image alt="Sosena Mekuria, RN, founder of Sosena Nursing Solutions" className="object-cover object-[57%_center]" fill sizes="(min-width:1024px) 28vw, 90vw" src="/images/team/sosena-mekuria-rn-approved.webp" /></div>
          <div><h2 className="text-3xl font-black tracking-tight text-navy">Clinical experience grounded in residential care</h2><p className="mt-4 leading-7 text-slate">Sosena brings more than 10 years of healthcare experience across hospital, skilled nursing and rehabilitation, home health, long-term care, senior care, and Adult Family Home settings. Her broader healthcare background includes Virginia Mason, and her RN experience includes Valley Medical Center.</p><p className="mt-4 leading-7 text-slate">With firsthand experience as an Adult Family Home provider and administrator, she now focuses SNS on professional RN assessments and individualized, negotiated care plans.</p><Link className="mt-6 inline-flex min-h-11 items-center font-extrabold text-teal underline decoration-teal/30 underline-offset-4" href="/about">Meet Sosena</Link></div>
        </div>
      </SectionContainer>

      <section className="border-y border-navy/10 bg-soft px-5 py-10 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-teal">For existing clients</p><h2 className="mt-2 text-2xl font-black text-navy">Private clinical workspace</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-slate">The client portal supports authorized access to clinical work. It is supporting infrastructure—not the service SNS sells.</p></div><a className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl border border-navy/20 bg-white px-4 py-3 text-sm font-extrabold text-navy" href={site.portalUrl} rel="noopener noreferrer">Client Portal</a></div></section>

      <SectionContainer eyebrow="Frequently asked questions" title="Common questions about RN assessments">
        <div className="divide-y divide-navy/10 border-y border-navy/10">{faqs.map(([question,answer]) => <details className="py-5" key={question}><summary className="cursor-pointer pr-8 text-lg font-black text-navy">{question}</summary><p className="mt-3 max-w-4xl leading-7 text-slate">{answer}</p></details>)}</div>
      </SectionContainer>
      <FinalCta />
    </PageShell>
  );
}
