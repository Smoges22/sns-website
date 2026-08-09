import { SampleDocumentPage } from "@/components/sample-documents";
import { sampleCarePlan } from "@/lib/sample-documents";
import { absoluteUrl, createPageMetadata, site } from "@/lib/site";

const description =
  "Preview a sample individualized care plan from Sosena Nursing Solutions. See how assessed needs are translated into clear caregiver guidance.";

export const metadata = createPageMetadata({
  title: "Sample Individualized Care Plan",
  description,
  path: sampleCarePlan.route,
});

export default function SampleCarePlanPage() {
  const url = absoluteUrl(sampleCarePlan.route);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name: sampleCarePlan.title,
        description,
        url,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${absoluteUrl(sampleCarePlan.serviceRoute)}#service` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Sample Documents", item: absoluteUrl("/sample-documents") },
          { "@type": "ListItem", position: 3, name: sampleCarePlan.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <SampleDocumentPage document={sampleCarePlan} />
    </>
  );
}
