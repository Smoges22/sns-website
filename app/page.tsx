import Link from "next/link";
import { ClinicalWorkflowMockup, DocumentationShowcase, ServiceGroups, WorkflowTimeline } from "@/components/clinical-visuals";
import { PortalLink } from "@/components/portal-link";
import { Card, FinalCta, Section } from "@/components/section";
import { differentiation, site, trustPoints } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <section className="overflow-hidden border-b border-navy/10 bg-[radial-gradient(circle_at_80%_10%,#edf6fa_0%,transparent_30%),linear-gradient(180deg,#ffffff_0%,#f5f7f9_100%)] px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-teal">RN-Led Clinical Services for Adult Family Homes</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-navy sm:text-6xl">
              Professional RN Assessments and Practical Care Planning for Adult Family Homes
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate">
              Sosena Nursing Solutions provides comprehensive nursing assessments, negotiated care plans, and clinical documentation support built around the practical needs of residents, providers, families, and Adult Family Home teams.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex min-h-12 items-center justify-center rounded-lg bg-navy px-5 py-3 text-center text-sm font-extrabold text-white transition hover:bg-[#214562]" href="/request-assessment">
                Request an Assessment
              </Link>
              <Link className="inline-flex min-h-12 items-center justify-center rounded-lg border border-navy/15 bg-white px-5 py-3 text-center text-sm font-extrabold text-navy transition hover:border-teal hover:text-teal" href="/services">
                Explore Services
              </Link>
            </div>
            <div className="mt-5">
              <PortalLink className="text-sm font-extrabold text-navy transition hover:text-teal" comingSoonClassName="text-sm font-extrabold text-slate" />
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div className="rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm font-extrabold text-navy shadow-sm" key={point}>
                  {point}
                </div>
              ))}
            </div>
          </div>
          <ClinicalWorkflowMockup />
        </div>
      </section>

      <Section eyebrow="Why Adult Family Homes Choose SNS" title="RN-led documentation support designed for practical AFH workflows.">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-2xl bg-navy p-8 text-white shadow-soft">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Clinical partner</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Clear assessment-to-care-plan continuity.</h2>
            <p className="mt-4 leading-7 text-white/70">
              SNS supports professional documentation with RN clinical judgment, AFH operating context, and a structured path from review to care planning.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {differentiation.map((point) => (
              <Card className="p-5" key={point}>
                <p className="text-base font-extrabold text-navy">{point}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white" eyebrow="Clinical workflow" title="From Request to Professional Documentation" intro="A focused process keeps public intake minimal and clinical records moving through secure next steps.">
        <WorkflowTimeline />
      </Section>

      <Section eyebrow="Services" title="Assessment, care planning, and document review without generic service-card clutter.">
        <ServiceGroups />
      </Section>

      <Section className="bg-white" eyebrow="Clinical documentation showcase" title="Premium documentation workflows, finalized through RN review.">
        <DocumentationShowcase />
      </Section>

      <Section eyebrow="Meet Your Clinical Partner" title="Sosena Mekuria, RN" intro="Founder and Clinical Director of Sosena Nursing Solutions LLC.">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-soft">
            <div className="grid aspect-[4/5] place-items-center rounded-xl bg-[linear-gradient(145deg,#edf6fa,#ffffff)] ring-1 ring-navy/10">
              <div className="text-center">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-navy text-2xl font-black tracking-[0.16em] text-white">SM</div>
                <p className="mt-4 font-extrabold text-navy">Professional portrait placeholder</p>
                <p className="mt-1 text-sm text-slate">Recommended image: 1200×1500px</p>
              </div>
            </div>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate">
            <p>SNS is guided by registered nurse leadership and practical Adult Family Home operating experience.</p>
            <p>Sosena’s work emphasizes individualized assessment, usable documentation, and collaboration with residents, representatives, providers, and AFH teams.</p>
            <p>The goal is simple: make clinical documentation easier to understand, easier to review, and more useful for care planning.</p>
          </div>
        </div>
      </Section>

      <Section className="bg-[#EDF6FA]" eyebrow="Future service" title="Nurse Delegation — Coming Soon" intro="Nurse Delegation is planned as a future SNS service. Availability will be announced after the clinical workflows, documentation standards, and operational safeguards are ready.">
        <Card className="max-w-3xl">
          <p className="text-lg leading-8 text-slate">This service is not currently available for booking, and pricing is not listed during the launch phase.</p>
        </Card>
      </Section>

      <FinalCta title={`Request assessment support from ${site.brand}`} />
    </main>
  );
}
