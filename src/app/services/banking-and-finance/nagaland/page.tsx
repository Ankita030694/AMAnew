import React from "react";
import { Metadata } from "next";
import NagalandBankingClient from "./NagalandBankingClient";

export const metadata: Metadata = {
  title: "Banking and Finance Services in Nagaland | NBFC & DRT Lawyers",
  description:
    "Premier legal consultancy for Banking & Finance in Nagaland. Expert guidance on Article 371A land issues, Money Lenders Act, CMMFI Scheme, and DRT Guwahati litigation.",
  keywords: [
    "Banking and Finance Services Nagaland",
    "NBFC Registration Dimapur",
    "Nagaland Money Lenders Act License",
    "Article 371A Banking Lawyer",
    "DRT Lawyer Nagaland",
    "CMMFI Scheme Consultant",
    "Hornbill Festival Tourism Finance",
    "Debt Recovery Tribunal Guwahati",
    "Finance Company Registration Kohima",
    "Nidhi Company Registration Dimapur",
  ],
  openGraph: {
    title: "Banking and Finance Legal Services in Nagaland",
    description:
      "Expert legal support for financial institutions in Nagaland. From Article 371A compliance to DRT litigation and CMMFI schemes.",
    url: "https://www.amalegalsolutions.com/services/banking-and-finance/nagaland",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.amalegalsolutions.com/services/banking-and-finance/nagaland/og-image.png", // Placeholder
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Nagaland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banking and Finance Services in Nagaland | AMA Legal Solutions",
    description:
      "Specialized legal services for NBFCs, Startups, and Banks in Nagaland. Expert in DRT Guwahati and Article 371A.",
  },
  alternates: {
    canonical: "https://www.amalegalsolutions.com/services/banking-and-finance/nagaland",
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
        "item": "https://www.amalegalsolutions.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.amalegalsolutions.com/services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Banking & Finance",
        "item": "https://www.amalegalsolutions.com/services/banking-and-finance",
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Nagaland",
        "item": "https://www.amalegalsolutions.com/services/banking-and-finance/nagaland",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Banking and Finance Legal Services in Nagaland",
    "description":
      "Comprehensive legal guide for banking and finance entities in Nagaland. Covering Article 371A land rights, Money Lenders Act, CMMFI loans, and DRT Guwahati.",
    "author": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "url": "https://www.amalegalsolutions.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
      },
    },
    "datePublished": "2025-11-27",
    "dateModified": "2025-11-27",
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Banking and Finance Legal Services Nagaland",
    "image": "https://www.amalegalsolutions.com/services/3.png",
    "description": "Expert legal registration and compliance services for financial institutions in Nagaland.",
    "brand": {
      "@type": "Brand",
      "name": "AMA Legal Solutions",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "105",
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
          "name": "Akum Jamir",
        },
        "reviewBody":
          "I applied for a CMMFI loan for my food processing unit in Dimapur. The paperwork was overwhelming. AMA Legal Solutions helped me organize my documents and get the subsidy approved.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Temjen Ao",
        },
        "reviewBody":
          "We are a private finance firm. We needed the Money Lenders License to operate legally. They guided us through the DC office procedures smoothly.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Kevi Rengma",
        },
        "reviewBody":
          "My hotel project in Kohima was stalled due to land collateral issues with the bank. Their legal opinion on Article 371A helped convince the bank manager.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Limasunep",
        },
        "reviewBody":
          "We had a complex recovery case in DRT Guwahati. Since we are based in Mokokchung, travelling was hard. They represented us effectively in Guwahati.",
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
      <NagalandBankingClient />
    </>
  );
};

export default page;


