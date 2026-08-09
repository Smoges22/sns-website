import Link from "next/link";
import { Card, FinalCta, PageHero, PageShell, SectionContainer } from "@/components/section";
import { audiences, createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Who SNS Serves",
  description: "RN assessment and care-plan support for Adult Family Homes, referral professionals, hospitals, assisted living, and families in Washington.",
  path: "/who-we-serve",
});

export default function WhoWeServePage() {
  return (
    <PageShell>
      <PageHero eyebrow="Who we serve" title="Clinical clarity across care transitions" intro={`SNS works with authorized providers, professionals, care teams, and families who need a reliable understanding of an adult's current care needs. Services are provided by ${site.provider}.`}>
        <Link className="inline-flex min-h-12 items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-extrabold text-white" href="/request-assessment">Request an Assessment</Link>
      </PageHero>
      <SectionContainer>
        <div className="grid gap-6 md:grid-cols-2">
          {audiences.map((audience, index) => (
            <Card className="p-6 sm:p-8" key={audience.title}>
              <p className="text-xs font-black uppercase tracking-[.16em] text-teal">0{index + 1}</p>
              <h2 className="mt-3 text-2xl font-black text-navy">{audience.title}</h2>
              <p className="mt-4 leading-7 text-slate">{audience.text}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 rounded-[24px] bg-[#EDF6FA] p-6 sm:p-8">
          <h2 className="text-2xl font-black text-navy">Clinical assessment - not placement</h2>
          <p className="mt-3 max-w-4xl leading-7 text-slate">SNS provides the clinical assessment and care plan. Referral professionals and families may use that information during a placement process, while each receiving Adult Family Home makes its own decision about whether it can appropriately meet the individual&apos;s needs.</p>
        </div>
      </SectionContainer>
      <FinalCta />
    </PageShell>
  );
}
