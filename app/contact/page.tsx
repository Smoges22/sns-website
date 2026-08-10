import { ContactForm } from "@/components/contact-form";
import { PageHero, PageShell, SectionContainer } from "@/components/section";
import { ButtonLink, LineIcon } from "@/components/ui";
import { createPageMetadata, site } from "@/lib/site";

export const metadata = createPageMetadata({ title: "Contact SNS", description: "Contact Sosena Nursing Solutions about RN assessments and individualized care plans. Do not send medical records through public email.", path: "/contact" });

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        breadcrumbLabel="Contact"
        eyebrow="Contact SNS"
        title="Let's clarify the next clinical step"
        intro={`Contact ${site.provider} about an RN assessment, individualized care plan, or upcoming Adult Family Home care transition.`}
      />

      <SectionContainer className="bg-soft">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)] md:items-start lg:gap-10">
          <section aria-labelledby="contact-form-heading">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-teal">Contact SNS</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl" id="contact-form-heading">Send Us a Message</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate">Share basic contact and scheduling information. Clinical records are handled separately when needed.</p>
            <ContactForm />
          </section>

          <aside className="grid gap-5" aria-label="SNS contact details">
            <section className="rounded-[18px] border border-[#CCD9E1] bg-white p-5 shadow-[0_6px_18px_rgba(23,50,77,0.035)] sm:p-7" aria-labelledby="contact-information-heading">
              <h2 className="font-display text-3xl font-bold text-navy" id="contact-information-heading">Contact Information</h2>
              <div className="mt-5 divide-y divide-navy/15">
                <a className="grid min-h-24 grid-cols-[2.75rem_1fr] gap-4 py-5" href={`tel:${site.phone.replaceAll("-", "")}`}>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#E8F5F6] text-teal"><LineIcon className="h-5 w-5" name="people" /></span>
                  <span className="min-w-0"><span className="block text-xs font-black uppercase tracking-[0.14em] text-teal">Phone</span><span className="mt-2 block font-display text-xl font-bold text-navy">{site.phone}</span><span className="mt-2 block text-sm leading-6 text-slate">Call to discuss the type of service needed and scheduling availability. Leave only basic contact information in voicemail.</span></span>
                </a>
                <a className="grid min-h-24 grid-cols-[2.75rem_1fr] gap-4 py-5" href={`mailto:${site.primaryEmail}`}>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#E8F5F6] text-teal"><LineIcon className="h-5 w-5" name="document" /></span>
                  <span className="min-w-0"><span className="block text-xs font-black uppercase tracking-[0.14em] text-teal">Email</span><span className="mt-2 block break-all font-display text-lg font-bold text-navy xl:text-xl">{site.primaryEmail}</span><span className="mt-2 block text-sm leading-6 text-slate">Email basic contact and scheduling information. Do not email detailed medical records until SNS provides separate sharing instructions.</span></span>
                </a>
              </div>
            </section>

            <section className="rounded-[18px] border border-[#C7D9E1] bg-[#EDF6FA] p-5 sm:p-7" aria-labelledby="contact-service-area-heading">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-teal"><LineIcon className="h-5 w-5" name="location" /></span>
                <div className="min-w-0">
                  <h2 className="font-display text-2xl font-bold text-navy" id="contact-service-area-heading">Service Area</h2>
                  <p className="mt-3 leading-7 text-slate">SNS serves clients in Washington State. Availability is confirmed based on the service location, access, clinical need, and scheduling.</p>
                  <ButtonLink className="mt-5" href="/service-area" variant="secondary">View Service Area</ButtonLink>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </SectionContainer>
    </PageShell>
  );
}
