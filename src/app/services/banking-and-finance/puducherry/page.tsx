import React from "react";
import { Metadata } from "next";
import PuducherryBankingClient from "./PuducherryBankingClient";

export const metadata: Metadata = {
  title: "Banking and Finance Services in Puducherry | NBFC & DRT Lawyers",
  description:
    "Premier legal consultancy for Banking & Finance in Puducherry. Expert guidance on Chit Fund Registration, Money Lenders Act, PIPDIC subsidies, and DRT Chennai litigation.",
  keywords: [
    "Banking and Finance Services Puducherry",
    "NBFC Registration Puducherry",
    "Chit Fund Registration Pondicherry",
    "Puducherry Money Lenders Act License",
    "DRT Lawyer Puducherry",
    "PIPDIC Subsidy Consultant",
    "Nidhi Company Registration Puducherry",
    "Debt Recovery Tribunal Chennai",
    "Finance Company Registration Pondicherry",
    "Pondicherry Pawn Brokers Act",
  ],
  openGraph: {
    title: "Banking and Finance Legal Services in Puducherry",
    description:
      "Expert legal support for financial institutions in Puducherry. From Chit Funds to DRT litigation and PIPDIC schemes.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/puducherry",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://amalegalsolutions.com/services/banking-and-finance/puducherry/og-image.png", // Placeholder
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Puducherry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banking and Finance Services in Puducherry | AMA Legal Solutions",
    description:
      "Specialized legal services for NBFCs, Chit Funds, and Banks in Puducherry. Expert in DRT Chennai and local financial regulations.",
  },
  alternates: {
    canonical: "https://amalegalsolutions.com/services/banking-and-finance/puducherry",
  },
};

const page = () => {
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
        "name": "Puducherry",
        "item": "https://amalegalsolutions.com/services/banking-and-finance/puducherry",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Banking and Finance Legal Services in Puducherry",
    "description":
      "Comprehensive legal guide for banking and finance entities in Puducherry. Covering Chit Fund Regulation, NBFC registration, PIPDIC subsidies, and DRT Chennai.",
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
        "url": "https://amalegalsolutions.com/logo.png",
      },
    },
    "datePublished": "2025-11-27",
    "dateModified": "2025-11-27",
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Banking and Finance Legal Services Puducherry",
    "image": "https://amalegalsolutions.com/services/3.png",
    "description": "Expert legal registration and compliance services for financial institutions in Puducherry.",
    "brand": {
      "@type": "Brand",
      "name": "AMA Legal Solutions",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "110",
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
          "name": "Kumaravel P.",
        },
        "reviewBody":
          "We run a Chit Fund in Villianur. The registration process was complex, but AMA Legal Solutions handled the Registrar of Chits efficiently. Their ongoing compliance support is excellent.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Jean-Pierre M.",
        },
        "reviewBody":
          "As an NRI based in France, I had issues with my property loan and FEMA regulations. Their team guided me through the legalities and resolved the bank dispute.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Lakshmi Narayanan",
        },
        "reviewBody":
          "Getting a subsidy from PIPDIC required perfect documentation. They prepared our project report and legal due diligence, helping us secure the capital investment subsidy.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Ramesh Gupta",
        },
        "reviewBody":
          "Our hotel faced a SARFAESI notice from a bank. AMA Legal Solutions represented us in DRT Chennai and got a stay, giving us time to settle the loan.",
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
      <PuducherryBankingClient />
    </>
  );
};

export default page;

