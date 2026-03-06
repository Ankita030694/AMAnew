import React from "react";
import { Metadata } from "next";
import TripuraBankingClient from "./TripuraBankingClient";

export const metadata: Metadata = {
  title: "Banking and Finance Services in Tripura | NBFC & DRT Lawyers",
  description:
    "Premier legal consultancy for Banking & Finance in Tripura. Expert guidance on TIIPIS Subsidy, Rubber Plantation Loans, Border Trade Finance, and DRT Guwahati.",
  keywords: [
    "Banking and Finance Services Tripura",
    "NBFC Registration Agartala",
    "Rubber Plantation Loan Lawyer Tripura",
    "TIIPIS Incentive Scheme Consultant",
    "DRT Lawyer Tripura",
    "Indo-Bangla Trade Finance Agartala",
    "Swabalamban Scheme Tripura",
    "Debt Recovery Tribunal Guwahati",
    "Finance Company Registration Udaipur",
    "Letter of Credit Lawyer Agartala",
  ],
  openGraph: {
    title: "Banking and Finance Legal Services in Tripura",
    description:
      "Expert legal support for financial institutions in Tripura. From Rubber Industry finance to DRT litigation and TIIPIS subsidies.",
    url: "https://www.amalegalsolutions.com/services/banking-and-finance/tripura",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.amalegalsolutions.com/services/banking-and-finance/tripura/og-image.png", // Placeholder
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Tripura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banking and Finance Services in Tripura | AMA Legal Solutions",
    description:
      "Specialized legal services for NBFCs, Exporters, and Banks in Tripura. Expert in DRT Guwahati and Rubber Industry finance.",
  },
  alternates: {
    canonical: "https://www.amalegalsolutions.com/services/banking-and-finance/tripura",
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
        "name": "Tripura",
        "item": "https://www.amalegalsolutions.com/services/banking-and-finance/tripura",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Banking and Finance Legal Services in Tripura",
    "description":
      "Comprehensive legal guide for banking and finance entities in Tripura. Covering Rubber Loans, TIIPIS subsidies, Border Trade, and DRT Guwahati.",
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
    "name": "Banking and Finance Legal Services Tripura",
    "image": "https://www.amalegalsolutions.com/services/3.png",
    "description": "Expert legal registration and compliance services for financial institutions in Tripura.",
    "brand": {
      "@type": "Brand",
      "name": "AMA Legal Solutions",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "100",
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
          "name": "Subrata Debnath",
        },
        "reviewBody":
          "I wanted to expand my rubber plantation in Udaipur. The bank loan process was stuck on land valuation. AMA Legal Solutions helped clarify the title issues and got the loan sanctioned.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Manish Saha",
        },
        "reviewBody":
          "We are an export house in Agartala. We had a payment dispute with a buyer in Bangladesh. Their team helped us enforce the LC terms and recover our money.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Ratan Das",
        },
        "reviewBody":
          "Applying for the TIIPIS subsidy was complicated. They prepared our project report and handled the single window clearance efficiently.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Bimal Roy",
        },
        "reviewBody":
          "Our SARFAESI case was transferred to DRT Guwahati. Since we couldn't travel often, their local team represented us there and kept us updated.",
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
      <TripuraBankingClient />
    </>
  );
};

export default page;


