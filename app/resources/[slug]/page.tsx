import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCta, PageHero, PageShell, SectionContainer } from "@/components/section";
import { ButtonLink, LineIcon } from "@/components/ui";
import { resourcePath, resources } from "@/lib/resources";
import { createPageMetadata } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() { return resources.map((resource) => ({ slug: resource.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const resource = resources.find((item) => item.slug === slug); return resource ? createPageMetadata({ title: resource.title, description: resource.description, path: resourcePath(resource) }) : {}; }

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = resources.find((item) => item.slug === slug);
  if (!resource) notFound();
  return (
    <PageShell>
      <PageHero eyebrow="SNS Resource" title={resource.title} intro={resource.intro} />
      <SectionContainer innerClassName="max-w-5xl">
        <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap gap-2 text-sm text-slate"><Link className="underline underline-offset-4" href="/">Home</Link><span aria-hidden="true">/</span><Link className="underline underline-offset-4" href="/resources">Resources</Link><span aria-hidden="true">/</span><span aria-current="page">{resource.title}</span></nav>
        <div className="divide-y divide-navy/15 border-y border-navy/15">
          {resource.sections.map((section, index) => <section className="grid gap-5 py-8 sm:grid-cols-[3rem_1fr] sm:py-10" key={section.heading}><span className="font-display text-lg font-bold text-teal">0{index + 1}</span><div><h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">{section.heading}</h2>{section.paragraphs?.map((paragraph)=><p className="mt-4 leading-7 text-slate" key={paragraph}>{paragraph}</p>)}{section.bullets?<ul className="mt-5 grid gap-3 text-slate sm:grid-cols-2">{section.bullets.map((item)=><li className="flex gap-3" key={item}><LineIcon className="h-5 w-5 shrink-0 text-teal" name="check"/>{item}</li>)}</ul>:null}</div></section>)}
        </div>
        {resource.relatedService ? <ButtonLink className="mt-8" href={`/services/${resource.relatedService}`}>View the related SNS service</ButtonLink> : null}
      </SectionContainer>
      <FinalCta />
    </PageShell>
  );
}
