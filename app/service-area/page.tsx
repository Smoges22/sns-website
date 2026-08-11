import { ServiceAreaVisual } from "@/components/service-area";
import { FeatureBox, PageHero, PageShell, SectionContainer } from "@/components/section";
import { ButtonLink, LineIcon } from "@/components/ui";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Service Area — King County, Washington",
  description: "RN assessments and individualized care plans in King County, Washington. Additional locations may be available based on scheduling and clinical needs.",
  path: "/service-area",
});

const availabilityFactors = [
  ["Location", "SNS reviews the requested location and practical travel considerations."],
  ["Scheduling", "Timing and scheduling availability are confirmed for each request."],
  ["Clinical needs", "SNS confirms that the requested assessment or care-plan work fits the clinical need."],
] as const;

export default function ServiceAreaPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbLabel="Service Area"
        eyebrow="Service Area"
        intro={`SNS primarily serves clients and care partners throughout King County. ${site.additionalServiceArea}`}
        title="King County, Washington"
      />

      <SectionContainer className="bg-white">
        <div className="grid min-w-0 items-center gap-8 md:grid-cols-[1.15fr_.85fr] md:gap-10 lg:gap-14">
          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal sm:text-sm">Primary Service Area</p>
            <h2 className="text-balance mt-3 font-display text-3xl font-bold leading-[1.14] tracking-[-0.025em] text-navy sm:text-4xl">RN assessment and care-plan services in King County</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate sm:text-lg sm:leading-8">SNS primarily serves Adult Family Homes, referral professionals, hospitals, assisted living communities, and families throughout King County.</p>
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
        eyebrow="Additional Areas"
        intro="For requests outside King County, SNS reviews the information provided by the authorized contact before confirming availability."
        title="How additional-area requests are reviewed"
      >
        <div className="grid gap-4 md:grid-cols-3">
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
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8A6218]">Outside King County?</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-navy sm:text-3xl">Ask SNS to confirm availability</h2>
            <p className="mt-3 leading-7 text-slate">Services may be available in surrounding Washington communities depending on location, scheduling, and clinical needs.</p>
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
