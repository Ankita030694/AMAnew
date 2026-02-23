import React from "react";
import { Metadata } from "next";
import JammuKashmirBankingClient from "./JammuKashmirBankingClient";

export const metadata: Metadata = {
  title: "Banking and Finance Services in Jammu & Kashmir | NBFC & DRT Lawyers",
  description:
    "Premier legal consultancy for Banking & Finance in J&K. Expert guidance on SARFAESI post-370, Horticulture Loans, Industrial Policy 2021-30, and DRT Chandigarh litigation.",
  keywords: [
    "Banking and Finance Services Jammu Kashmir",
    "NBFC Registration Jammu",
    "Horticulture Loan Lawyer Kashmir",
    "SARFAESI Act J&K Article 370",
    "DRT Lawyer Jammu",
    "Apple Orchard Loan Finance",
    "J&K Industrial Policy Subsidy",
    "Debt Recovery Tribunal Chandigarh",
    "Finance Company Registration Srinagar",
    "PMEGP Loan Consultant J&K",
  ],
  openGraph: {
    title: "Banking and Finance Legal Services in Jammu & Kashmir",
    description:
      "Expert legal support for financial institutions in J&K. From Apple Industry finance to DRT litigation and NBFC setup.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/jammu-and-kashmir",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://amalegalsolutions.com/services/banking-and-finance/jammu-and-kashmir/og-image.png", // Placeholder
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Jammu Kashmir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banking and Finance Services in J&K | AMA Legal Solutions",
    description:
      "Specialized legal services for NBFCs, Apple Growers, and Banks in J&K. Expert in DRT Chandigarh and local land laws.",
  },
  alternates: {
    canonical: "https://amalegalsolutions.com/services/banking-and-finance/jammu-and-kashmir",
  },
};

const JammuKashmirBankingPage = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://amalegalsolutions.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://amalegalsolutions.com/services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Banking & Finance",
        "item": "https://amalegalsolutions.com/services/banking-and-finance",
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Jammu & Kashmir",
        "item": "https://amalegalsolutions.com/services/banking-and-finance/jammu-and-kashmir",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Banking and Finance Legal Services in Jammu & Kashmir",
    "description":
      "Comprehensive legal guide for banking and finance entities in J&K. Covering SARFAESI post-370, NBFC registration, Horticulture finance, and DRT Chandigarh.",
    "author": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "url": "https://amalegalsolutions.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://amalegalsolutions.com/ama-legal-solutions-logo.png",
      },
    },
    "datePublished": "2025-11-27",
    "dateModified": "2025-11-27",
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Banking and Finance Legal Services Jammu & Kashmir",
    "image": "https://amalegalsolutions.com/services/3.png",
    "description": "Expert legal registration and compliance services for financial institutions in Jammu & Kashmir.",
    "brand": {
      "@type": "Brand",
      "name": "AMA Legal Solutions",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "125",
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Fayaz Ahmed",
        },
        "reviewBody":
          "We wanted to convert our apple orchard to high-density. The bank loan process was stuck due to revenue record errors. AMA Legal Solutions got the records corrected with the Patwari and facilitated the loan.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Rajesh Gupta",
        },
        "reviewBody":
          "Starting a manufacturing unit in Samba required navigating the new industrial policy. They helped us prepare the DPR and get the 30% capital subsidy approved.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Ghulam Nabi",
        },
        "reviewBody":
          "Our hotel in Pahalgam was facing auction under SARFAESI. Their team represented us in DRT Chandigarh and secured a stay, giving us time to restructure our debt.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Vikram Singh",
        },
        "reviewBody":
          "Registering an NBFC in Jammu was tough due to strict RBI checks. Their professional guidance through the documentation and interview process was invaluable.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <JammuKashmirBankingClient />
    </>
  );
};

export default JammuKashmirBankingPage;


