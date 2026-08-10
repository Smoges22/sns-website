import { ReferralForm } from "@/components/referral-form";
import { PageHero, PageShell, SectionContainer } from "@/components/section";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Refer a Client",
  description: "Initiate a professional referral to Sosena Nursing Solutions for current RN assessment, care-plan, and clinical follow-up services using non-clinical coordination details.",
  path: "/refer-a-client",
});

export default function ReferAClientPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbLabel="Refer a Client"
        eyebrow="Refer a client"
        intro="Authorized referral professionals, care teams, assisted living communities, and Adult Family Home providers can initiate a referral for current SNS RN services. SNS provides clinical documentation services and does not act as a placement agency or make admission decisions."
        title="Professional Referral to SNS"
      />
      <SectionContainer
        className="bg-[#F4F8F9]"
        eyebrow="Referral intake"
        intro="Provide basic professional, service, setting, location, and timing information. Do not include a client or resident name or detailed clinical information."
        title="Start a professional referral"
      >
        <div className="mx-auto max-w-5xl"><ReferralForm /></div>
      </SectionContainer>
    </PageShell>
  );
}
