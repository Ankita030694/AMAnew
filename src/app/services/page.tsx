import ServicesClient from "./client";
import Script from "next/script";

export const metadata = {
  title: 'Legal Services & Expert Consultation | AMA Legal Solutions',
  description: 'Explore expert legal services including banking law, loan settlement, recovery defense, and corporate litigation across India.',
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services',
  },
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions",
  "url": "https://www.amalegalsolutions.com/services",
  "logo": "https://www.amalegalsolutions.com/logo.png",
  "image": "https://www.amalegalsolutions.com/anujbhiya.png",
  "founder": {
    "@type": "Person",
    "name": "Adv. Anuj Anand Malik",
    "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik",
    "sameAs": [
      "https://www.linkedin.com/in/iamanujmalik/"
    ],
    "jobTitle": "Founder & Managing Partner"
  },
  "areaServed": "India",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Legal Services Catalog",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Loan Settlement & Debt Resolution",
          "url": "https://www.amalegalsolutions.com/services/loan-settlement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lok Adalat Debt Resolution",
          "url": "https://www.amalegalsolutions.com/services/loan-settlement/lok-adalat"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Banking & Financial Dispute Litigation",
          "url": "https://www.amalegalsolutions.com/services/banking-and-finance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Salary & Employment Recovery",
          "url": "https://www.amalegalsolutions.com/where-to-file-a-complaint-if-your-employer-doesnt-pay-you"
        }
      }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.amalegalsolutions.com/services"
    }
  ]
};

export default function Services() {
  return (
    <>
      <Script
        id="legal-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="text-justify">
        <ServicesClient />
      </div>
    </>
  );
}