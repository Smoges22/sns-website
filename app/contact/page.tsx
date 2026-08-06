import type { Metadata } from "next";
import Image from "next/image";
import { Card, PageHero, Section } from "@/components/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Sosena Nursing Solutions for RN assessment and care-planning services."
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Contact Sosena Nursing Solutions"
        intro="For assessment requests, send minimum coordination details only. Do not email detailed clinical records until secure next steps are provided."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Card className="!bg-navy text-white">
            <div className="mb-6 inline-flex rounded-xl bg-white p-2 shadow-sm">
              <Image
                alt="SNS — Sosena Nursing Solutions"
                className="h-16 w-24 rounded-lg object-cover"
                height={96}
                src="/images/branding/sns-logo-transparent.png"
                width={144}
              />
            </div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-teal">Clinical Director</p>
            <h2 className="mt-3 text-3xl font-black">Sosena Mekuria, RN</h2>
            <p className="mt-2 text-white/70">{site.legalName}</p>
          </Card>
          <Card>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-teal">Phone</p>
                <a className="mt-2 block text-xl font-black text-navy transition hover:text-teal" href={`tel:${site.phone.replaceAll("-", "")}`}>{site.phone}</a>
              </div>
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-teal">Email</p>
                <a className="mt-2 block break-all text-lg font-black text-navy transition hover:text-teal sm:text-xl" href={`mailto:${site.primaryEmail}`}>{site.primaryEmail}</a>
              </div>
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-teal">Website</p>
                <a className="mt-2 block break-all text-xl font-black text-navy transition hover:text-teal" href={site.url}>{site.domain}</a>
              </div>
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-teal">Service area</p>
                <p className="mt-2 text-xl font-black text-navy">Washington Adult Family Homes</p>
              </div>
            </div>
            <div className="mt-8 rounded-xl border border-alert/25 bg-[#fff8f8] p-4 text-sm font-semibold leading-6 text-alert">
              Please do not send detailed clinical records through public email until SNS provides secure next steps.
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
