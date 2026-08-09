import { SampleDocumentPage } from "@/components/sample-documents";
import { sampleAssessment } from "@/lib/sample-documents";
import { absoluteUrl, createPageMetadata, site } from "@/lib/site";

const description =
  "Preview a sample RN assessment from Sosena Nursing Solutions. See the format and documentation style used for clinical assessment services.";

export const metadata = createPageMetadata({
  title: "Sample RN Assessment",
  description,
  path: sampleAssessment.route,
});

export default function SampleAssessmentPage() {
  const url = absoluteUrl(sampleAssessment.route);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name: sampleAssessment.title,
        description,
        url,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${absoluteUrl(sampleAssessment.serviceRoute)}#service` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Sample Documents", item: absoluteUrl("/sample-documents") },
          { "@type": "ListItem", position: 3, name: sampleAssessment.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <SampleDocumentPage document={sampleAssessment} />
    </>
  );
}
