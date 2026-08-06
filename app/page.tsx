import Link from "next/link";
import { PortalLink } from "@/components/portal-link";
import { Card, Section } from "@/components/section";
import { howItWorks, launchServices, site, trustPoints } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <section className="border-b border-navy/10 bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal">SNS</p>
            <p className="mt-3 text-lg font-semibold text-slate">Sosena Nursing Solutions</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-navy sm:text-6xl">
              Professional RN Assessments and Practical Care Planning for Adult Family Homes
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate">
              Sosena Nursing Solutions provides comprehensive nursing assessments, negotiated care planning, and clinical support designed around the needs of Adult Family Home residents, providers, and families.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="rounded-md bg-navy px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#214562]" href="/request-assessment">
                Request an Assessment
              </Link>
              <PortalLink className="rounded-md border border-navy/15 px-5 py-3 text-center text-sm font-bold text-navy transition hover:border-teal hover:text-teal" />
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div className="rounded-md border border-navy/10 bg-soft px-4 py-3 text-sm font-semibold text-navy" key={point}>
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-navy/10 bg-soft p-6 shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal">{site.tagline}</p>
            <div className="mt-8 space-y-4">
              {launchServices.slice(0, 5).map((service) => (
                <div className="rounded-md border border-navy/10 bg-white p-5" key={service}>
                  <p className="font-bold text-navy">{service}</p>
                  <p className="mt-2 text-sm leading-6 text-slate">Clear, organized documentation designed for practical care decisions.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Core services" title="RN-led assessment and care-planning support">
        <div className="grid gap-5 md:grid-cols-3">
          {launchServices.slice(0, 6).map((service) => (
            <Card key={service}>
              <h3 className="text-lg font-bold text-navy">{service}</h3>
              <p className="mt-3 text-sm leading-6 text-slate">Professional support for AFH care planning, documentation, and review workflows.</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-soft" eyebrow="Why choose SNS" title="Clinical judgment with practical Adult Family Home context">
        <div className="grid gap-5 md:grid-cols-2">
          <Card><h3 className="font-bold text-navy">Registered Nurse leadership</h3><p className="mt-3 text-slate">Assessment and care-planning work is guided by RN clinical judgment.</p></Card>
          <Card><h3 className="font-bold text-navy">Practical documentation</h3><p className="mt-3 text-slate">Outputs are built to be clear, usable, and centered on resident needs.</p></Card>
        </div>
      </Section>

      <Section eyebrow="How it works" title="A careful workflow from request to documentation">
        <div className="grid gap-5 md:grid-cols-4">
          {howItWorks.map((step, index) => (
            <Card key={step.title}>
              <p className="text-sm font-bold text-teal">0{index + 1}</p>
              <h3 className="mt-3 font-bold text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate">{step.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-navy text-white" eyebrow="About Sosena" title="Founded by Sosena Mekuria, RN">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-md border border-white/15 bg-white/5 p-6">
            <p className="text-2xl font-bold">Sosena Mekuria, RN</p>
            <p className="mt-2 text-white/75">Founder and Clinical Director</p>
          </div>
          <p className="text-lg leading-8 text-white/80">
            SNS combines registered nurse leadership with Adult Family Home operating experience, practical understanding of resident care, and individualized care planning in collaboration with residents, representatives, providers, and AFH teams.
          </p>
        </div>
      </Section>

      <Section eyebrow="Future services" title="Nurse Delegation - Coming Soon" intro="Nurse delegation is planned as a future service area. It is not currently presented as available for booking.">
        <Card>
          <p className="text-slate">SNS will announce availability only after the workflow, staffing, and documentation safeguards are ready.</p>
        </Card>
      </Section>

      <Section className="bg-soft" title="Ready to request an assessment?">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link className="rounded-md bg-navy px-5 py-3 text-center text-sm font-bold text-white" href="/request-assessment">Request an Assessment</Link>
          <Link className="rounded-md border border-navy/15 px-5 py-3 text-center text-sm font-bold text-navy" href="/services">Explore Services</Link>
        </div>
      </Section>
    </main>
  );
}
