import { Card, PageHero, PageShell, SectionContainer } from "@/components/section";
import { ButtonLink, LineIcon } from "@/components/ui";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({ title: "Contact SNS", description: "Contact Sosena Nursing Solutions about RN assessments and individualized care plans. Do not send medical records through public email.", path: "/contact" });

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero breadcrumbLabel="Contact" eyebrow="Contact SNS" title="Let's clarify the next clinical step" intro={`Contact ${site.provider} about an RN assessment, individualized care plan, or upcoming Adult Family Home care transition.`}>
        <ButtonLink href="/request-assessment" variant="light">Request an Assessment</ButtonLink>
      </PageHero>
      <SectionContainer className="bg-soft">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <div><p className="text-xs font-black uppercase tracking-[.16em] text-teal">Direct contact</p><h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">Speak with SNS about your request</h2><p className="mt-5 leading-7 text-slate">Use phone or email for basic contact and scheduling information. Clinical records are handled separately when needed.</p></div>
          <div className="divide-y divide-navy/15 border-y border-navy/15 bg-white px-5 sm:px-8">
            <a className="grid min-h-28 gap-4 py-7 sm:grid-cols-[3rem_1fr]" href={`tel:${site.phone.replaceAll("-","")}`}><span className="grid h-12 w-12 place-items-center rounded-xl bg-[#E8F5F6] text-teal"><LineIcon name="people" /></span><span><span className="block text-xs font-black uppercase tracking-[.16em] text-teal">Phone</span><span className="mt-2 block font-display text-2xl font-bold text-navy">{site.phone}</span><span className="mt-2 block text-sm leading-6 text-slate">Call to discuss the type of service needed and scheduling availability. Leave only basic contact information in voicemail.</span></span></a>
            <a className="grid min-h-28 gap-4 py-7 sm:grid-cols-[3rem_1fr]" href={`mailto:${site.primaryEmail}`}><span className="grid h-12 w-12 place-items-center rounded-xl bg-[#E8F5F6] text-teal"><LineIcon name="document" /></span><span><span className="block text-xs font-black uppercase tracking-[.16em] text-teal">Email</span><span className="mt-2 block break-all font-display text-xl font-bold text-navy sm:text-2xl">{site.primaryEmail}</span><span className="mt-2 block text-sm leading-6 text-slate">Email basic contact and scheduling information. Do not email detailed medical records until SNS provides separate sharing instructions.</span></span></a>
          </div>
        </div>
        <Card className="mt-10 !bg-[#EDF6FA]"><h2 className="font-display text-2xl font-bold text-navy">Washington service area</h2><p className="mt-3 leading-7 text-slate">SNS serves clients in Washington State. Availability is confirmed based on the service location, access, clinical need, and scheduling.</p></Card>
      </SectionContainer>
    </PageShell>
  );
}
