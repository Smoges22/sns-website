import Image from "next/image";
import Link from "next/link";
import { premiumCardClass, PageHero, PageShell, SectionContainer } from "@/components/section";
import { ButtonLink, LineIcon } from "@/components/ui";
import {
  sampleDocumentDisclaimer,
  sampleDocuments,
  sampleDocumentsIntro,
  sampleDocumentsNote,
  sampleSafetyLabel,
  type SampleDocument,
  type SampleDocumentItem,
  type SampleDocumentPage as SamplePage,
} from "@/lib/sample-documents";

function DocumentThumbnail({ document }: { document: SampleDocument }) {
  const imagePath = document.id === "assessment"
    ? "/images/samples/sample-rn-assessment-preview.png"
    : "/images/samples/sample-care-plan-preview.png";
  const imageAlt = document.id === "assessment"
    ? "Fictional SNS comprehensive RN assessment document page preview"
    : "Fictional SNS individualized and negotiated care plan document page preview";

  return (
    <div className="relative isolate rounded-[16px] bg-[#E8EFF2] p-2.5 sm:p-3.5">
      <span aria-hidden="true" className="absolute inset-x-8 bottom-1 top-5 -z-10 translate-x-2 rounded-sm border border-[#C6D5DC] bg-white" />
      <div className="relative aspect-[16/10] overflow-hidden rounded-[6px] border border-[#BFCFD7] bg-white shadow-[0_14px_32px_rgba(23,50,77,0.12)]">
        <Image alt={imageAlt} className="object-cover object-top" fill sizes="(min-width: 1024px) 42vw, 92vw" src={imagePath} />
        <span className="absolute bottom-2.5 left-2.5 rounded-full border border-white/80 bg-navy/95 px-3 py-1.5 text-[0.6rem] font-black uppercase tracking-[0.14em] text-white shadow-sm">Fictional sample</span>
      </div>
    </div>
  );
}

export function SampleDocumentsSection({ className = "bg-[#EDF6FA]", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <SectionContainer compact={compact} className={className} eyebrow="Sample Documents" title="See the clinical documentation SNS provides" intro={sampleDocumentsIntro}>
      <p className={`${premiumCardClass} ${compact ? "mb-4" : "mb-5"} max-w-4xl border-l-4 !border-l-teal px-4 py-3 text-sm font-semibold leading-6 text-navy`}>{sampleDocumentsNote}</p>
      <div className="grid gap-5 lg:grid-cols-2">
        {sampleDocuments.map((document) => (
          <article className="flex min-w-0 flex-col rounded-[20px] border border-[#C8D8E0] bg-white p-3 shadow-[0_10px_30px_rgba(23,50,77,.06)] sm:p-4" key={document.id}>
            <DocumentThumbnail document={document} />
            <div className="flex flex-1 flex-col px-1 pb-1 pt-4 sm:px-2 sm:pt-5">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.17em] text-teal">Sample · Fictional Example</p>
              <h3 className={`mt-2 font-display font-bold tracking-[-0.02em] text-navy ${compact ? "text-xl sm:text-2xl" : "text-2xl"}`}>{document.title}</h3>
              <p className={`mt-2 text-slate ${compact ? "text-sm leading-6" : "text-sm leading-6 sm:text-base sm:leading-7"}`}>{document.description}</p>
              <ButtonLink className={`${compact ? "mt-3 !px-0" : "mt-5"} self-start`} href={document.route} variant={compact ? "text" : "secondary"}>{document.ctaLabel}</ButtonLink>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}

export function SampleDocumentLink({ document }: { document: SampleDocument }) {
  return (
    <aside className={`${premiumCardClass} mt-10 border-l-4 !border-l-teal bg-[#F4F9FA] px-5 py-6 sm:px-8 sm:py-7`} aria-labelledby={`${document.id}-sample-link-title`}>
      <p className="text-xs font-black uppercase tracking-[0.18em] text-teal">Fictional Sample Document</p>
      <h2 className="mt-3 font-display text-2xl font-bold text-navy" id={`${document.id}-sample-link-title`}>{document.title}</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate">Preview a static fictional SNS document based on the real section structure used for this service. No patient information is included.</p>
      <ButtonLink className="mt-4 !px-0" href={document.route} variant="text">{document.ctaLabel}</ButtonLink>
    </aside>
  );
}

function AssessmentRow({ item }: { item: SampleDocumentItem }) {
  return (
    <div className="grid border-t border-[#D4E0E5] first:border-t-0 sm:grid-cols-[13rem_1fr]">
      <div className="bg-[#F2F6F7] px-3 py-2 font-bold text-navy sm:px-4 sm:py-2.5">{item.label}</div>
      <div className="px-3 py-2 leading-5 text-[#405668] sm:px-4 sm:py-2.5 sm:leading-6">{item.finding}</div>
    </div>
  );
}

function CarePlanRow({ item }: { item: SampleDocumentItem }) {
  return (
    <div className="border-t border-[#CAD9E0] first:border-t-0">
      <div className="bg-[#EAF2F4] px-3 py-2 font-display text-sm font-bold text-navy sm:px-4 sm:text-base">{item.label}</div>
      <div className="grid lg:grid-cols-3">
        <div className="border-t border-[#D8E3E8] px-3 py-2.5 text-xs leading-5 text-[#405668] lg:border-r lg:border-t-0 sm:px-4 sm:text-sm sm:leading-6">
          <span className="mb-1 block text-[0.6rem] font-black uppercase tracking-[0.12em] text-teal">Care and services</span>
          {item.finding}
        </div>
        <div className="border-t border-[#D8E3E8] px-3 py-2.5 text-xs leading-5 text-[#405668] lg:border-r lg:border-t-0 sm:px-4 sm:text-sm sm:leading-6">
          <span className="mb-1 block text-[0.6rem] font-black uppercase tracking-[0.12em] text-teal">Strengths and preferences</span>
          {item.preference}
        </div>
        <div className="border-t border-[#D8E3E8] px-3 py-2.5 text-xs leading-5 text-[#405668] lg:border-t-0 sm:px-4 sm:text-sm sm:leading-6">
          <span className="mb-1 block text-[0.6rem] font-black uppercase tracking-[0.12em] text-teal">Caregiver does · when and how</span>
          {item.instruction}
        </div>
      </div>
    </div>
  );
}

function DocumentPage({ document, page }: { document: SampleDocument; page: SamplePage }) {
  const isCarePlan = document.id === "care-plan";

  return (
    <section
      aria-labelledby={`${document.id}-page-${page.number}-title`}
      className="relative border border-[#BFCFD7] bg-white shadow-[0_18px_48px_rgba(23,50,77,0.09)]"
      data-sample-capture={page.number === 1 ? document.id : undefined}
      id={`${document.id}-page-${page.number}`}
    >
      <p className="bg-navy px-3 py-2 text-center text-[0.56rem] font-black uppercase tracking-[0.13em] text-white sm:px-5 sm:text-[0.64rem]">{sampleSafetyLabel}</p>
      <div className="p-3.5 sm:p-6 lg:p-8">
        <header className="border-b-2 border-navy pb-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <Image alt="Sosena Nursing Solutions" className="h-auto w-[138px] sm:w-[170px]" height={74} src="/images/branding/sns-logo-horizontal.png" width={222} />
            <div className="sm:text-right">
              <p className="text-[0.6rem] font-black uppercase tracking-[0.14em] text-teal">Fictional clinical documentation sample</p>
              <p className="mt-1 font-display text-lg font-bold text-navy sm:text-xl">{document.shortTitle}</p>
            </div>
          </div>
          <div className="mt-4 grid gap-2 border-t border-navy/10 pt-3 text-[0.68rem] font-semibold text-slate sm:grid-cols-[1fr_auto] sm:items-end sm:text-xs">
            <div>
              <p><span className="font-black text-navy">Resident:</span> {document.subjectName} — fictional</p>
              <p className="mt-1">Specific dates, addresses, contacts, clinical identifiers, medication names, providers, and signatures are intentionally omitted.</p>
            </div>
            <p className="font-black text-navy sm:text-right">Page {page.number} of {document.pages.length}</p>
          </div>
        </header>

        <h2 className="mt-5 font-display text-xl font-bold tracking-[-0.02em] text-navy sm:text-2xl" id={`${document.id}-page-${page.number}-title`}>{page.title}</h2>
        <div className="mt-4 space-y-5">
          {page.sections.map((section) => (
            <section className="overflow-hidden border border-[#C9D8E0]" key={section.title}>
              <header className="bg-navy px-3 py-2.5 text-white sm:px-4">
                <h3 className="font-display text-sm font-bold sm:text-base">{section.title}</h3>
                {section.summary ? <p className="mt-1 max-w-4xl text-[0.68rem] leading-5 text-[#DCE8EE] sm:text-xs">{section.summary}</p> : null}
              </header>
              <div className="text-xs sm:text-sm">
                {section.items.map((item) => isCarePlan
                  ? <CarePlanRow item={item} key={item.label} />
                  : <AssessmentRow item={item} key={item.label} />)}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-5 flex flex-col gap-2 border-t border-navy/20 pt-3 text-[0.56rem] font-black uppercase tracking-[0.11em] text-[#667785] sm:flex-row sm:items-center sm:justify-between sm:text-[0.62rem]">
          <span>Fictional sample · No real patient information</span>
          <span>Not for clinical use</span>
        </footer>
      </div>
    </section>
  );
}

export function SampleDocumentPage({ document }: { document: SampleDocument }) {
  return (
    <PageShell>
      <PageHero breadcrumbLabel={document.title} eyebrow="Sample Document · Fictional Example" title={document.title} intro={document.pageIntro} breadcrumbParent={{ href: "/sample-documents", label: "Sample Documents" }}>
        <ButtonLink href="/request-assessment" variant="primary">Request an Assessment</ButtonLink>
      </PageHero>
      <SectionContainer className="bg-[#F4F7F8]" compact>
        <p className="mb-5 max-w-5xl rounded-[14px] border border-teal/25 bg-white px-4 py-3 text-sm font-bold leading-6 text-navy shadow-[0_6px_20px_rgba(23,50,77,0.04)] sm:px-5 sm:py-4">{sampleDocumentDisclaimer}</p>
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start xl:grid-cols-[minmax(0,1fr)_19rem]">
          <article aria-label={`${document.title} document preview`} className="min-w-0 space-y-5 rounded-[18px] border border-[#CAD8DF] bg-[#E8EEF1] p-2.5 sm:space-y-7 sm:p-5 lg:p-6">
            {document.pages.map((page) => <DocumentPage document={document} key={page.number} page={page} />)}
          </article>

          <aside aria-labelledby={`${document.id}-demonstrates-title`} className="border-t-2 border-navy pt-5 lg:sticky lg:top-28">
            <LineIcon className="mb-3 text-teal" name="document" />
            <h2 className="font-display text-2xl font-bold text-navy" id={`${document.id}-demonstrates-title`}>Inside this sample</h2>
            <nav aria-label={`${document.title} pages`} className="mt-4 border-y border-navy/15">
              {document.pages.map((page) => (
                <Link className="flex min-h-11 items-center gap-3 border-b border-navy/10 py-2.5 text-sm font-bold text-navy last:border-b-0 hover:text-teal" href={`#${document.id}-page-${page.number}`} key={page.number}>
                  <span aria-hidden="true" className="text-xs font-black text-teal">{String(page.number).padStart(2, "0")}</span>
                  {page.title}
                </Link>
              ))}
            </nav>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate">
              {document.demonstrates.map((item) => <li className="flex gap-3" key={item}><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />{item}</li>)}
            </ul>
            <div className="mt-6 grid gap-2">
              <ButtonLink href={document.serviceRoute} variant="secondary">{document.serviceLabel}</ButtonLink>
              <ButtonLink href="/request-assessment" variant="primary">Request an Assessment</ButtonLink>
            </div>
          </aside>
        </div>
      </SectionContainer>
    </PageShell>
  );
}
