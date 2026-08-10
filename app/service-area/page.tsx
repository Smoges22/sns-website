import { ServiceAreaVisual } from "@/components/service-area";
import { FeatureBox, PageHero, PageShell, SectionContainer } from "@/components/section";
import { ButtonLink, LineIcon } from "@/components/ui";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Service Area",
  description: "Sosena Nursing Solutions serves clients in Washington State. Confirm availability for your service location, access needs, clinical need, and scheduling.",
  path: "/service-area",
});

const availabilityFactors = [
  ["Service location", "SNS confirms whether service is available for the requested location."],
  ["Access", "Access to the setting is considered when coordinating an assessment."],
  ["Clinical need", "SNS reviews the requested RN service before confirming the next step."],
  ["Scheduling", "Timing and scheduling availability are confirmed for each request."],
] as const;

export default function ServiceAreaPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbLabel="Service Area"
        eyebrow="Coverage information"
        intro="SNS serves clients in Washington State. Availability is confirmed based on the service location, access, clinical need, and scheduling."
        title="Service Area"
      />

      <SectionContainer className="bg-white">
        <div className="grid min-w-0 items-center gap-8 md:grid-cols-[1.15fr_.85fr] md:gap-10 lg:gap-14">
          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal sm:text-sm">Washington service-area overview</p>
            <h2 className="text-balance mt-3 font-display text-3xl font-bold leading-[1.14] tracking-[-0.025em] text-navy sm:text-4xl">Request service for your location</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate sm:text-lg sm:leading-8">Share basic service, location, and timing information without sending clinical records. SNS will follow up to confirm availability and the appropriate next step.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/request-assessment">Request an Assessment</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Contact SNS</ButtonLink>
            </div>
          </div>
          <ServiceAreaVisual />
        </div>
      </SectionContainer>

      <SectionContainer
        className="bg-[#F4F8F9]"
        eyebrow="Availability"
        intro="SNS confirms availability for each request using the information provided by the authorized contact."
        title="How service availability is confirmed"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {availabilityFactors.map(([title, text]) => (
            <FeatureBox className="h-full !bg-white" key={title}>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#E8F5F6] text-teal"><LineIcon className="h-5 w-5" name="check" /></span>
              <h3 className="mt-5 font-display text-xl font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate">{text}</p>
            </FeatureBox>
          ))}
        </div>
      </SectionContainer>

      <section className="bg-white px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[22px] border border-[#E3C98F] bg-[#FBF5E8] p-6 shadow-[0_12px_36px_rgba(91,67,22,0.06)] sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8A6218]">Not sure whether SNS serves your location?</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-navy sm:text-3xl">Ask SNS to confirm availability</h2>
            <p className="mt-3 leading-7 text-slate">Availability is confirmed based on the service location, access, clinical need, and scheduling.</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <ButtonLink href="/request-assessment">Request an Assessment</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">Contact SNS</ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
