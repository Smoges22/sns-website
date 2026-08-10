import { ButtonLink, LineIcon } from "@/components/ui";
import { Card, FinalCta, PageHero, PageShell, SectionContainer } from "@/components/section";
import { audiences, createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({ title: "Who SNS Serves", description: "RN assessment and care-plan support for Adult Family Homes, referral professionals, hospitals, assisted living, and families in Washington.", path: "/who-we-serve" });

const icons = ["home", "people", "hospital", "hospital", "family"] as const;

export default function WhoWeServePage() {
  return (
    <PageShell>
      <PageHero eyebrow="Who we serve" title="Clinical clarity across care transitions" intro={`SNS works with authorized providers, professionals, care teams, and families who need a reliable understanding of an adult's current care needs. Services are provided by ${site.provider}.`}>
        <ButtonLink href="/request-assessment" variant="light">Request an Assessment</ButtonLink>
      </PageHero>
      <SectionContainer>
        <nav aria-label="Audience sections" className="mb-12 flex flex-wrap gap-2 border-b border-navy/15 pb-5">
          {audiences.map((audience, index) => <a className="inline-flex min-h-11 items-center rounded-full border border-navy/15 bg-white px-4 text-sm font-bold text-navy transition hover:border-teal hover:text-teal" href={`#audience-${index + 1}`} key={audience.title}>{audience.title}</a>)}
        </nav>
        <div className="divide-y divide-navy/15 border-y border-navy/15">
          {audiences.map((audience, index) => (
            <article className="grid scroll-mt-32 gap-5 py-9 sm:grid-cols-[5rem_1fr] sm:py-12 lg:grid-cols-[7rem_.8fr_1.2fr] lg:items-start" id={`audience-${index + 1}`} key={audience.title}>
              <div className="flex items-center gap-3 sm:block"><span className="grid h-12 w-12 place-items-center rounded-xl bg-[#E7F4F6] text-teal"><LineIcon name={icons[index]} /></span><span className="font-display text-lg font-bold text-navy/35 sm:mt-3 sm:block">0{index + 1}</span></div>
              <h2 className="font-display text-2xl font-bold leading-tight text-navy sm:text-3xl">{audience.title}</h2>
              <p className="max-w-2xl text-base leading-7 text-slate sm:text-lg sm:leading-8">{audience.text}</p>
            </article>
          ))}
        </div>
        <Card className="mt-12 border-l-4 !border-l-teal !bg-[#F4F9FA] sm:p-8"><h2 className="font-display text-2xl font-bold text-navy">Clinical assessment — not placement</h2><p className="mt-3 max-w-4xl leading-7 text-slate">SNS documents assessed care needs so the receiving Adult Family Home can determine whether it can appropriately meet those needs. SNS does not act as a placement agency or make the admission decision.</p></Card>
      </SectionContainer>
      <FinalCta />
    </PageShell>
  );
}
