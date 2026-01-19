import React from "react";
import { Metadata } from "next";
import MizoramBankingClient from "./MizoramBankingClient";

export const metadata: Metadata = {
  title: "Banking and Finance Services in Mizoram | NBFC & DRT Lawyers",
  description:
    "Premier legal consultancy for Banking & Finance in Mizoram. Expert guidance on Land Settlement Certificates (LSC), SEDP Loans, Money Lenders Act, and DRT Guwahati.",
  keywords: [
    "Banking and Finance Services Mizoram",
    "NBFC Registration Aizawl",
    "Mizoram Money Lenders Act License",
    "SEDP Loan Consultant Mizoram",
    "DRT Lawyer Mizoram",
    "Land Settlement Certificate Mortgage",
    "Bamboo Industry Finance Mizoram",
    "Debt Recovery Tribunal Guwahati",
    "Finance Company Registration Lunglei",
    "Startup Mizoram Legal Advisor",
  ],
  openGraph: {
    title: "Banking and Finance Legal Services in Mizoram",
    description:
      "Expert legal support for financial institutions in Mizoram. From LSC mortgage issues to DRT litigation and SEDP funding.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/mizoram",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://amalegalsolutions.com/services/banking-and-finance/mizoram/og-image.png", // Placeholder
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Mizoram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banking and Finance Services in Mizoram | AMA Legal Solutions",
    description:
      "Specialized legal services for NBFCs, Startups, and Banks in Mizoram. Expert in DRT Guwahati and Land Settlement Certificates.",
  },
  alternates: {
    canonical: "https://amalegalsolutions.com/services/banking-and-finance/mizoram",
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
        "name": "Mizoram",
        "item": "https://amalegalsolutions.com/services/banking-and-finance/mizoram",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Banking and Finance Legal Services in Mizoram",
    "description":
      "Comprehensive legal guide for banking and finance entities in Mizoram. Covering LSC mortgages, Money Lenders Act, SEDP loans, and DRT Guwahati.",
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
    "name": "Banking and Finance Legal Services Mizoram",
    "image": "https://amalegalsolutions.com/services/3.png",
    "description": "Expert legal registration and compliance services for financial institutions in Mizoram.",
    "brand": {
      "@type": "Brand",
      "name": "AMA Legal Solutions",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "98",
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
          "name": "Zothanpuii",
        },
        "reviewBody":
          "I had only a Periodic Patta for my land, and the bank refused my housing loan. AMA Legal Solutions guided me through the process of converting it to an LSC with the Revenue Department.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Lalremruata",
        },
        "reviewBody":
          "We run a bamboo processing unit. Applying for the National Bamboo Mission subsidy was confusing. They handled the paperwork and legal agreements perfectly.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Vanlalhriata",
        },
        "reviewBody":
          "As a private lender, I wanted to be 100% legal. They helped me get the Money Lenders License from the DC office and drafted proper loan agreements.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Rualthankhuma",
        },
        "reviewBody":
          "My business faced a SARFAESI notice. I was worried about losing my shop. Their team represented me in DRT Guwahati and got a stay order.",
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
      <MizoramBankingClient />
    </>
  );
};

export default page;


