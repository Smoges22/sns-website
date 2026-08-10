import { premiumCardClass, FinalCta, PageHero, PageShell, SectionContainer } from "@/components/section";
import { ButtonLink, LineIcon } from "@/components/ui";
import {
  sampleDocumentDisclaimer,
  sampleDocuments,
  sampleDocumentsIntro,
  sampleDocumentsNote,
  type SampleDocument,
} from "@/lib/sample-documents";

function DocumentThumbnail({ document }: { document: SampleDocument }) {
  return (
    <div aria-hidden="true" className="border border-[#CFDDE4] bg-[#EEF4F6] p-3 sm:p-4">
      <div className="mx-auto max-w-sm border border-[#D6E2E8] bg-white p-3 shadow-[0_8px_20px_rgba(23,50,77,0.06)] sm:p-4">
        <div className="flex items-center justify-between gap-3 border-b border-navy/10 pb-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-teal">Fictional example</p>
            <p className="mt-1 text-sm font-black text-navy">{document.shortTitle}</p>
          </div>
          <span className="rounded-full bg-[#E4F2F4] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-teal">Sample</span>
        </div>
        <div className="mt-3 grid gap-2.5">
          {document.previewSections.slice(0, 4).map((section) => (
            <div className="grid grid-cols-[1fr_.7fr] items-center gap-3" key={section.title}>
              <p className="text-[10px] font-bold text-navy">{section.title}</p>
              <span className="h-1.5 rounded-full bg-[#DCE8EC]" />
            </div>
          ))}
        </div>
        <p className="mt-4 border-t border-navy/10 pt-3 text-[9px] font-bold uppercase tracking-[0.12em] text-[#667785]">Not for clinical use</p>
      </div>
    </div>
  );
}

export function SampleDocumentsSection({ className = "bg-[#EDF6FA]" }: { className?: string }) {
  return (
    <SectionContainer className={className} eyebrow="Sample Documents" title="See the clinical documentation SNS provides" intro={sampleDocumentsIntro}>
      <p className={`${premiumCardClass} mb-5 max-w-4xl border-l-4 !border-l-teal px-4 py-3 text-sm font-semibold leading-6 text-navy`}>{sampleDocumentsNote}</p>
      <div className="grid gap-5 lg:grid-cols-2">
        {sampleDocuments.map((document) => (
          <article className="grid min-w-0 gap-5 rounded-[16px] border border-[#D5E0E6] border-t-[3px] border-t-navy bg-white p-4 shadow-[0_6px_18px_rgba(23,50,77,.045)] sm:grid-cols-[.76fr_1.24fr] sm:items-center sm:p-5" key={document.id}>
            <DocumentThumbnail document={document} />
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-teal">Sample · Fictional Example</p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-navy">{document.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate">{document.description}</p>
              <ButtonLink className="mt-4 min-h-11" href={document.route} variant="secondary">{document.ctaLabel}</ButtonLink>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}

export function SampleDocumentLink({ document }: { document: SampleDocument }) {
  return (
    <aside className={`${premiumCardClass} mt-12 border-l-4 !border-l-teal bg-[#F4F9FA] px-6 py-7 sm:px-8`} aria-labelledby={`${document.id}-sample-link-title`}>
      <p className="text-xs font-black uppercase tracking-[0.18em] text-teal">Sample Document</p>
      <h2 className="mt-3 font-display text-2xl font-bold text-navy" id={`${document.id}-sample-link-title`}>{document.title}</h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate">See how SNS organizes this type of clinical documentation using a fictional, non-patient example.</p>
      <ButtonLink className="mt-5 !px-0" href={document.route} variant="text">{document.ctaLabel}</ButtonLink>
    </aside>
  );
}

export function SampleDocumentPage({ document }: { document: SampleDocument }) {
  return (
    <PageShell>
      <PageHero breadcrumbLabel="Sample Documents" eyebrow="Sample Document · Fictional Example" title={document.title} intro={document.pageIntro}>
        <ButtonLink href="/request-assessment" variant="primary">Request an Assessment</ButtonLink>
      </PageHero>
      <SectionContainer>
        <p className="mb-8 max-w-5xl rounded-[16px] border border-teal/25 bg-[#EAF5F6] px-5 py-4 text-sm font-bold leading-6 text-navy">{sampleDocumentDisclaimer}</p>
        <div className="grid gap-10 lg:grid-cols-[1fr_.38fr] lg:items-start">
          <article aria-labelledby={`${document.id}-preview-title`} className="min-w-0 border border-[#CEDCE4] bg-[#EEF3F5] p-3 shadow-[0_16px_44px_rgba(23,50,77,0.05)] sm:p-5 lg:p-7">
            <div className="border border-[#D5E1E7] bg-white p-5 shadow-[0_18px_50px_rgba(23,50,77,0.07)] sm:p-7 lg:p-9">
              <header className="flex flex-col gap-4 border-b border-navy/15 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-teal">Fictional Example</p>
                  <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-navy sm:text-3xl" id={`${document.id}-preview-title`}>{document.shortTitle}</h2>
                  <p className="mt-2 text-sm font-semibold text-slate">Representative document structure</p>
                </div>
                <span className="w-fit rounded-full bg-[#E4F2F4] px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-teal">Sample · Not for clinical use</span>
              </header>
              <dl className="mt-7 grid gap-5 sm:grid-cols-2">
                {document.previewSections.map((section, index) => (
                  <div className="border-t border-navy/15 pt-4" key={section.title}>
                    <dt className="flex items-baseline gap-3 font-display text-base font-bold text-navy"><span className="font-sans text-xs text-teal">{String(index + 1).padStart(2, "0")}</span>{section.title}</dt>
                    <dd className="mt-2 text-sm leading-6 text-slate">{section.description}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 border-t border-navy/15 pt-5 text-xs font-black uppercase tracking-[0.14em] text-[#667785]">Fictional example · No patient information · Not for clinical use</p>
            </div>
          </article>
          <aside aria-labelledby={`${document.id}-demonstrates-title`} className="border-t-2 border-navy pt-6 lg:sticky lg:top-44">
            <LineIcon className="mb-4 text-teal" name="document" />
            <h2 className="font-display text-2xl font-bold text-navy" id={`${document.id}-demonstrates-title`}>What this sample demonstrates</h2>
            <ul className="mt-5 grid gap-4 text-sm leading-6 text-slate">
              {document.demonstrates.map((item) => <li className="flex gap-3" key={item}><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />{item}</li>)}
            </ul>
            <ButtonLink className="mt-7 !px-0" href={document.serviceRoute} variant="text">{document.serviceLabel}</ButtonLink>
          </aside>
        </div>
      </SectionContainer>
      <FinalCta />
    </PageShell>
  );
}
