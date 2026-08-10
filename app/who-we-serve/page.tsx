import { AudienceTabs } from "@/components/audience-tabs";
import { ButtonLink } from "@/components/ui";
import { Card, FinalCta, PageHero, PageShell, SectionContainer } from "@/components/section";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({ title: "Who SNS Serves", description: "RN assessment and care-plan support for Adult Family Homes, referral professionals, hospitals, assisted living, and families in Washington.", path: "/who-we-serve" });

export default function WhoWeServePage() {
  return (
    <PageShell>
      <PageHero breadcrumbLabel="Who We Serve" eyebrow="Who we serve" title="Clinical clarity across care transitions" intro={`SNS works with authorized providers, professionals, care teams, and families who need a reliable understanding of an adult's current care needs. Services are provided by ${site.provider}.`}>
        <ButtonLink href="/request-assessment" variant="primary">Request an Assessment</ButtonLink>
      </PageHero>
      <SectionContainer>
        <AudienceTabs ctaHref="/request-assessment" ctaLabel="Request an Assessment" />
        <Card className="mt-12 border-l-4 !border-l-teal !bg-[#F4F9FA] sm:p-8"><h2 className="font-display text-2xl font-bold text-navy">Clinical assessment — not placement</h2><p className="mt-3 max-w-4xl leading-7 text-slate">SNS documents assessed care needs so the receiving Adult Family Home can determine whether it can appropriately meet those needs. SNS does not act as a placement agency or make the admission decision.</p></Card>
      </SectionContainer>
      <FinalCta />
    </PageShell>
  );
}
