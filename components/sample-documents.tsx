import Image from "next/image";
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
  const imagePath = document.id === "assessment"
    ? "/images/samples/sample-rn-assessment-preview.png"
    : "/images/samples/sample-care-plan-preview.png";
  const imageAlt = document.id === "assessment"
    ? "Fictional sample RN assessment document preview"
    : "Fictional sample individualized care plan document preview";

  return (
    <div className="relative isolate rounded-[16px] bg-[#EEF4F6] p-2.5 sm:p-4">
      <span aria-hidden="true" className="absolute inset-x-7 bottom-1 top-5 -z-10 translate-x-2 rounded-sm border border-[#CCD9E0] bg-white" />
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[#C8D6DE] bg-white shadow-[0_12px_28px_rgba(23,50,77,0.10)]">
        <Image alt={imageAlt} className="object-cover object-top" fill sizes="(min-width: 640px) 30vw, 88vw" src={imagePath} />
        <span className="absolute bottom-3 left-3 rounded-full border border-white/80 bg-navy/90 px-3 py-1.5 text-[0.62rem] font-black uppercase tracking-[0.15em] text-white shadow-sm">Fictional sample</span>
      </div>
    </div>
  );
}

export function SampleDocumentsSection({ className = "bg-[#EDF6FA]", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <SectionContainer compact={compact} className={className} eyebrow="Sample Documents" title="See the clinical documentation SNS provides" intro={sampleDocumentsIntro}>
      <p className={`${premiumCardClass} ${compact ? "mb-4" : "mb-5"} max-w-4xl border-l-4 !border-l-teal px-4 py-3 text-sm font-semibold leading-6 text-navy`}>{sampleDocumentsNote}</p>
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
        {sampleDocuments.map((document) => (
          <article className={`grid min-w-0 gap-4 rounded-[20px] border border-[#CEDCE3] bg-white shadow-[0_10px_30px_rgba(23,50,77,.055)] min-[390px]:grid-cols-[.62fr_1.38fr] min-[390px]:items-center sm:grid-cols-[.82fr_1.18fr] ${compact ? "p-3 sm:p-4" : "p-4 sm:p-5"}`} key={document.id}>
            <DocumentThumbnail document={document} />
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-teal">Sample · Fictional Example</p>
              <h3 className={`mt-2 font-display font-bold tracking-[-0.02em] text-navy ${compact ? "text-xl sm:text-2xl" : "text-2xl"}`}>{document.title}</h3>
              <p className={`mt-2 text-slate ${compact ? "text-xs leading-5 sm:text-sm sm:leading-6" : "text-sm leading-6"}`}>{document.description}</p>
              <ButtonLink className={compact ? "mt-2 !px-0" : "mt-4 min-h-11"} href={document.route} variant={compact ? "text" : "secondary"}>{document.ctaLabel}</ButtonLink>
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
          <article aria-labelledby={`${document.id}-preview-title`} className="min-w-0 rounded-[18px] border border-[#C8D8E0] bg-[#EEF3F5] p-3 shadow-[0_16px_44px_rgba(23,50,77,0.06)] sm:p-5 lg:p-7">
            <div className="border border-[#C9D8E0] bg-white p-5 shadow-[0_18px_50px_rgba(23,50,77,0.08)] sm:p-7 lg:p-9" data-sample-preview={document.id}>
              <header className="border-b-2 border-navy pb-6">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <Image alt="Sosena Nursing Solutions" className="h-auto w-[150px] sm:w-[175px]" height={74} src="/images/branding/sns-logo-horizontal.png" width={222} />
                    <p className="mt-5 text-[0.68rem] font-black uppercase tracking-[0.18em] text-teal">Clinical documentation · Fictional example</p>
                    <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-navy sm:text-3xl" id={`${document.id}-preview-title`}>{document.shortTitle}</h2>
                  </div>
                  <span className="w-fit rounded-full border border-teal/30 bg-[#E8F4F5] px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.14em] text-teal">Fictional sample</span>
                </div>
                <div className="mt-5 grid gap-2 border-t border-navy/10 pt-4 text-xs font-semibold text-slate sm:grid-cols-2">
                  <p>Representative SNS document structure</p>
                  <p className="sm:text-right">Not for clinical use</p>
                </div>
              </header>
              <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                {document.previewSections.map((section, index) => (
                  <div className="overflow-hidden rounded-[10px] border border-[#D2DEE4]" key={section.title}>
                    <dt className="flex min-h-11 items-center gap-3 border-b border-[#DCE5E9] bg-[#F3F7F8] px-4 py-2 font-display text-sm font-bold text-navy sm:text-base"><span className="font-sans text-[0.65rem] font-black text-teal">{String(index + 1).padStart(2, "0")}</span>{section.title}</dt>
                    <dd className="min-h-[4.5rem] px-4 py-3 text-xs leading-5 text-slate sm:text-sm sm:leading-6">{section.description}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-7 border-t border-navy/15 pt-5 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#667785]">Fictional example · No patient information · Not for clinical use</p>
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
