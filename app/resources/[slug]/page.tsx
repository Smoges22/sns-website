import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RegulatoryReference } from "@/components/regulatory-reference";
import { FinalCta, interactiveCardClass, PageHero, PageShell, SectionContainer } from "@/components/section";
import { ButtonLink, LineIcon } from "@/components/ui";
import { getResource, resourcePath, resources } from "@/lib/resources";
import { getService, servicePath } from "@/lib/services";
import { absoluteUrl, createPageMetadata, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  return resource
    ? createPageMetadata({ title: resource.title, description: resource.description, path: resourcePath(resource) })
    : {};
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  const relatedResources = resource.relatedResources
    ? resources.filter((item) => resource.relatedResources?.includes(item.slug))
    : [];
  const relatedService = resource.relatedService ? getService(resource.relatedService) : null;
  const category = resource.regulatory ? "WAC & Compliance" : resource.categories[0];
  const path = resourcePath(resource);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${absoluteUrl(path)}#article`,
        headline: resource.title,
        description: resource.description,
        mainEntityOfPage: absoluteUrl(path),
        publisher: { "@id": `${site.url}/#organization` },
        ...(resource.regulatory ? { citation: resource.regulatory.officialUrl } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Resources", item: absoluteUrl("/resources") },
          { "@type": "ListItem", position: 3, name: resource.title, item: absoluteUrl(path) },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />
      <PageHero
        breadcrumbLabel={category}
        breadcrumbParent={{ label: "Resources", href: "/resources" }}
        eyebrow={category}
        title={resource.title}
        intro={resource.intro}
      />

      <SectionContainer innerClassName="max-w-5xl">
        <article>
          <div className="divide-y divide-navy/15 border-y border-navy/15">
            {resource.sections.map((section, index) => (
              <section className="grid gap-5 py-8 sm:grid-cols-[3rem_1fr] sm:py-10" key={section.heading}>
                <span aria-hidden="true" className="font-display text-lg font-bold text-teal">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => <p className="mt-4 leading-7 text-slate" key={paragraph}>{paragraph}</p>)}
                  {section.bullets ? (
                    <ul className="mt-5 grid gap-3 text-slate sm:grid-cols-2">
                      {section.bullets.map((item) => <li className="flex gap-3 leading-7" key={item}><LineIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal" name="check" /><span>{item}</span></li>)}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>

          {resource.regulatory ? (
            <div className="mt-10">
              <RegulatoryReference reference={resource.regulatory} />
              <p className="mt-4 rounded-xl border border-[#D5E0E6] bg-[#F7FAFB] px-4 py-3 text-sm leading-6 text-slate">
                This resource is provided for general informational purposes. Washington requirements may change. Providers should review the current WAC and DSHS guidance applicable to their circumstances.
              </p>
            </div>
          ) : null}

          {relatedService ? (
            <section className="mt-10 rounded-[20px] border border-[#BFD6DF] bg-[#EFF7F8] p-6 sm:p-8" aria-labelledby="related-service-heading">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-teal">Related SNS Service</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-navy sm:text-3xl" id="related-service-heading">{relatedService.title}</h2>
              <p className="mt-3 max-w-3xl leading-7 text-slate">{relatedService.description}</p>
              <ButtonLink className="mt-5" href={servicePath(relatedService)} variant="secondary">View {relatedService.shortTitle}</ButtonLink>
            </section>
          ) : null}

          {relatedResources.length ? (
            <section className="mt-12" aria-labelledby="related-resources-heading">
              <h2 className="font-display text-3xl font-bold text-navy" id="related-resources-heading">Related resources</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {relatedResources.map((item) => (
                  <article className={`${interactiveCardClass} flex flex-col p-5`} key={item.slug}>
                    <p className={`text-xs font-black uppercase tracking-[0.12em] ${item.regulatory ? "text-[#8A641E]" : "text-teal"}`}>{item.regulatory ? item.regulatory.wacNumber : "SNS Guide"}</p>
                    <h3 className="mt-3 font-display text-xl font-bold leading-tight text-navy">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-slate">{item.description}</p>
                    <ButtonLink className="mt-4 !min-h-11 !px-0 !py-2" href={resourcePath(item)} variant="text">Read Guide</ButtonLink>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </article>
      </SectionContainer>
      <FinalCta />
    </PageShell>
  );
}
