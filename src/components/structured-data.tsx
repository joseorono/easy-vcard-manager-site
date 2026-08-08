import {
  APP_URL,
  AUTHOR_NAME,
  AUTHOR_URL,
  FAQS,
  REPO_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/constants/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}#app`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: APP_URL,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web, Windows",
      isAccessibleForFree: true,
      license: "https://opensource.org/licenses/MIT",
      codeRepository: REPO_URL,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@type": "Person",
        name: AUTHOR_NAME,
        url: AUTHOR_URL,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}#faq`,
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
