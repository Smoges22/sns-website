import Image from "next/image";
import Link from "next/link";
import { ClinicalWorkflowMockup, DocumentationShowcase, ServiceGroups, WorkflowTimeline } from "@/components/clinical-visuals";
import { OutlineIcon, type OutlineIconName } from "@/components/outline-icon";
import { PortalLink } from "@/components/portal-link";
import { Card, FeatureBox, FinalCta, PageShell, SectionContainer, SplitPanel } from "@/components/section";
import { differentiation, trustPoints } from "@/lib/site";

export default function HomePage() {
  return (
    <PageShell>
      <section className="bg-white px-4 pb-10 pt-7 sm:px-6 sm:pt-8 lg:px-8 lg:pb-14">
        <div className="mx-auto grid max-w-7xl min-w-0 gap-8 overflow-hidden rounded-[30px] border border-[#D9E3EA] bg-[radial-gradient(circle_at_82%_12%,rgba(24,183,201,0.16),transparent_28%),linear-gradient(135deg,#ffffff_0%,#FBFCFD_58%,#EDF6FA_100%)] p-5 shadow-[0_22px_72px_rgba(23,50,77,0.11)] sm:p-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:p-9">
          <div className="min-w-0">
            <p className="break-words text-xs font-black uppercase tracking-[0.12em] text-teal sm:text-sm sm:tracking-[0.18em]">
              <span className="sm:hidden">RN-Led Clinical Services</span>
              <span className="hidden sm:inline">RN-Led Clinical Services for Adult Family Homes</span>
            </p>
            <h1 className="mt-5 max-w-[13ch] break-words text-4xl font-black tracking-tight text-navy sm:max-w-4xl sm:text-6xl">
              <span className="block">Professional RN</span>
              <span className="block">Assessments and</span>
              <span className="block">Practical Care</span>
              <span className="block">Planning for</span>
              <span className="block">Adult Family Homes</span>
            </h1>
            <p className="mt-6 max-w-[28ch] text-lg leading-8 text-slate sm:max-w-3xl">
              Sosena Nursing Solutions provides comprehensive nursing assessments, negotiated care plans, and clinical documentation support built around the practical needs of residents, providers, families, and Adult Family Home teams.
            </p>
            <div className="mt-8 flex max-w-full flex-col items-start gap-3 sm:flex-row">
              <Link className="inline-flex min-h-12 max-w-full items-center justify-center rounded-xl bg-navy px-4 py-3 text-center text-xs font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#214562] sm:w-auto sm:px-5 sm:text-sm" href="/request-assessment">
                Request an Assessment
              </Link>
              <Link className="inline-flex min-h-12 max-w-full items-center justify-center rounded-xl border border-navy/15 bg-white px-4 py-3 text-center text-xs font-extrabold text-navy transition hover:-translate-y-0.5 hover:border-teal hover:text-teal sm:w-auto sm:px-5 sm:text-sm" href="/services">
                Explore Services
              </Link>
            </div>
            <div className="mt-5">
              <PortalLink className="text-sm font-extrabold text-navy transition hover:text-teal" comingSoonClassName="text-sm font-extrabold text-slate" />
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div className="rounded-[20px] border border-[#C8D8E2] bg-white px-4 py-3 text-sm font-extrabold text-navy shadow-sm" key={point}>
                  {point}
                </div>
              ))}
            </div>
          </div>
          <ClinicalWorkflowMockup />
        </div>
      </section>

      <SectionContainer className="bg-[#F5F7F9]" eyebrow="Why Adult Family Homes Choose SNS" title="A clinical partner with modern documentation discipline.">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="rounded-[22px] bg-[#102A43] p-6 text-white shadow-soft sm:p-7">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Clinical partner</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Clinical expertise connected to a real documentation platform.</h2>
            <p className="mt-4 leading-7 text-[#D6E1EA]">
              SNS pairs RN judgment with structured assessment, review, care-plan, and PDF workflows built for Adult Family Home documentation.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {differentiation.map((point) => (
              <Card className="p-5" key={point.title}>
                <span className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[#EDF6FA] text-teal ring-1 ring-teal/20">
                  <OutlineIcon className="h-5 w-5" name={point.icon as OutlineIconName} />
                </span>
                <p className="text-base font-extrabold text-navy">{point.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate">{point.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer eyebrow="Clinical workflow" title="From Request to Professional Documentation" intro="A focused process keeps public intake minimal and clinical records moving through secure next steps.">
        <WorkflowTimeline />
      </SectionContainer>

      <SectionContainer className="bg-[#EDF6FA]" eyebrow="Services" title="Assessment, care planning, and document review without generic service-card clutter.">
        <ServiceGroups />
      </SectionContainer>

      <SectionContainer eyebrow="Clinical documentation showcase" title="Premium documentation workflows, finalized through RN review.">
        <DocumentationShowcase />
      </SectionContainer>

      <SectionContainer className="bg-[#F5F7F9]" eyebrow="Meet Your Clinical Partner" title="Sosena Mekuria, RN" intro="Founder and Clinical Director of Sosena Nursing Solutions LLC.">
        <SplitPanel className="bg-[linear-gradient(135deg,#ffffff_0%,#f8fbfc_100%)] lg:grid-cols-[0.68fr_1.32fr] lg:items-center">
          <div className="rounded-[24px] border border-navy/10 bg-soft p-4 shadow-inner">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-soft ring-1 ring-navy/10">
              <Image
                alt="Sosena Mekuria, RN, Founder and Clinical Director of Sosena Nursing Solutions LLC"
                className="h-full w-full object-cover object-[57%_center]"
                fill
                sizes="(min-width: 1024px) 30vw, 90vw"
                src="/images/team/sosena-mekuria-rn.webp"
              />
            </div>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate">
            <p>SNS is guided by registered nurse leadership and practical Adult Family Home operating experience.</p>
            <p>Sosena&apos;s work emphasizes individualized assessment, usable documentation, and collaboration with residents, representatives, providers, and AFH teams.</p>
            <p>The goal is simple: make clinical documentation easier to understand, easier to review, and more useful for care planning.</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Founder", "Registered Nurse", "Clinical Director"].map((item) => (
                <FeatureBox className="text-sm font-black text-navy" key={item}>{item}</FeatureBox>
              ))}
            </div>
          </div>
        </SplitPanel>
      </SectionContainer>

      <SectionContainer className="bg-[#EFF9FA]" eyebrow="Future service" title="Nurse Delegation - Coming Soon" intro="Nurse Delegation is planned as a future SNS service. Availability will be announced after the clinical workflows, documentation standards, and operational safeguards are ready.">
        <Card className="max-w-3xl">
          <p className="text-lg leading-8 text-slate">This service is not currently available for booking, and pricing is not listed during the launch phase.</p>
        </Card>
      </SectionContainer>

      <FinalCta />
    </PageShell>
  );
}
