import Link from "next/link";
import { SampleDocumentLink } from "@/components/sample-documents";
import { Card, FinalCta, PageHero, PageShell, SectionContainer } from "@/components/section";
import { ButtonLink, LineIcon } from "@/components/ui";
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
        <ButtonLink href="/request-assessment" variant="light">Request This Service</ButtonLink>
      </PageHero>
      <SectionContainer>
        <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap gap-2 text-sm text-slate"><Link className="underline underline-offset-4" href="/">Home</Link><span aria-hidden="true">/</span><Link className="underline underline-offset-4" href="/services">Services</Link><span aria-hidden="true">/</span><span aria-current="page">{service.title}</span></nav>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-[-0.025em] text-navy">What this service is</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate">{service.intro}</p>
            <p className="mt-4 max-w-3xl leading-7 text-slate">Services are provided by {site.provider}. Availability is confirmed based on location, access, clinical need, and scheduling.</p>
          </div>
          <Card className="border-t-2 !border-t-navy !bg-[#F4F9FA]">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-teal">When you may need this service</p>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate">{service.whenNeeded.map((item) => <li className="flex gap-3" key={item}><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />{item}</li>)}</ul>
          </Card>
        </div>
        <section className="mt-12 border-y border-navy/15 py-10" aria-labelledby="reviews-heading">
          <h2 className="font-display text-3xl font-bold tracking-[-0.025em] text-navy" id="reviews-heading">What SNS reviews and provides</h2>
          <ul className="mt-7 grid gap-x-8 gap-y-5 text-sm leading-6 text-slate sm:grid-cols-2 lg:grid-cols-3">{service.reviews.map((item) => <li className="flex gap-3 border-t border-navy/10 pt-4" key={item}><LineIcon className="h-5 w-5 shrink-0 text-teal" name="check" />{item}</li>)}</ul>
        </section>
        {sample ? <SampleDocumentLink document={sample} /> : null}
      </SectionContainer>
      <FinalCta title={`Request ${service.shortTitle}`} text="Share basic coordination details only. SNS will confirm the appropriate service, availability, and next steps." />
    </PageShell>
  );
}
