import Link from "next/link";
import { SampleDocumentLink } from "@/components/sample-documents";
import { Card, FinalCta, PageHero, PageShell, SectionContainer } from "@/components/section";
import { sampleAssessment, sampleCarePlan } from "@/lib/sample-documents";
import { absoluteUrl, site } from "@/lib/site";
import { servicePath, type ServiceDefinition } from "@/lib/services";

export function ServiceDetailPage({ service }: { service: ServiceDefinition }) {
  const path = servicePath(service);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": `${absoluteUrl(path)}#service`, name: service.title, serviceType: service.searchLabel, description: service.metaDescription, provider: { "@id": `${site.url}/#organization` }, areaServed: { "@type": "State", name: "Washington" }, url: absoluteUrl(path) },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
        { "@type": "ListItem", position: 3, name: service.title, item: absoluteUrl(path) },
      ] },
    ],
  };
  const sample = service.sample === "assessment" ? sampleAssessment : service.sample === "care-plan" ? sampleCarePlan : null;

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <PageHero eyebrow={service.category} title={service.title} intro={service.description}>
        <Link className="inline-flex min-h-12 items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-[#214562]" href="/request-assessment">Request This Service</Link>
      </PageHero>
      <SectionContainer>
        <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap gap-2 text-sm text-slate"><Link className="underline underline-offset-4" href="/">Home</Link><span aria-hidden="true">/</span><Link className="underline underline-offset-4" href="/services">Services</Link><span aria-hidden="true">/</span><span aria-current="page">{service.title}</span></nav>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-black tracking-[-0.025em] text-navy">What this service is</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate">{service.intro}</p>
            <p className="mt-4 max-w-3xl leading-7 text-slate">Services are provided by {site.provider}. Availability is confirmed based on location, access, clinical need, and scheduling.</p>
          </div>
          <Card className="!bg-[#F4F9FA]">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-teal">When you may need this service</p>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate">{service.whenNeeded.map((item) => <li className="flex gap-3" key={item}><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />{item}</li>)}</ul>
          </Card>
        </div>
        <Card className="mt-10 sm:p-8">
          <h2 className="text-3xl font-black tracking-[-0.025em] text-navy">What SNS reviews and provides</h2>
          <ul className="mt-6 grid gap-4 text-sm leading-6 text-slate sm:grid-cols-2 lg:grid-cols-3">{service.reviews.map((item) => <li className="flex gap-3 rounded-[16px] border border-[#DFE8ED] bg-[#FAFCFC] p-4" key={item}><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />{item}</li>)}</ul>
        </Card>
        {sample ? <SampleDocumentLink document={sample} /> : null}
      </SectionContainer>
      <FinalCta title={`Request ${service.shortTitle}`} text="Share basic coordination details only. SNS will confirm the appropriate service, availability, and next steps." />
    </PageShell>
  );
}
