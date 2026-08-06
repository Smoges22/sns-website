import type { Metadata } from "next";
import { Card, Section } from "@/components/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Sosena Nursing Solutions for RN assessment and care-planning services."
};

export default function ContactPage() {
  return (
    <main>
      <Section eyebrow="Contact" title="Contact Sosena Nursing Solutions" intro="For assessment requests, send minimum coordination details only. Do not email detailed clinical records until secure next steps are provided.">
        <Card className="max-w-3xl">
          <p className="text-xl font-bold text-navy">Sosena Mekuria, RN</p>
          <p className="mt-1 text-slate">{site.legalName}</p>
          <div className="mt-6 space-y-2 text-navy">
            <p><span className="font-bold">Phone:</span> {site.phone}</p>
            <p><span className="font-bold">Primary email:</span> {site.primaryEmail}</p>
            <p><span className="font-bold">General email:</span> {site.generalEmail}</p>
            <p><span className="font-bold">Website:</span> {site.domain}</p>
          </div>
        </Card>
      </Section>
    </main>
  );
}

