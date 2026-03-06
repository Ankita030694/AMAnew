import React from "react";
import { Metadata } from "next";
import AssamBankingClient from "./AssamBankingClient";

export const metadata: Metadata = {
  title: "Banking and Finance Services in Assam | NBFC, MFI & DRT Lawyers",
  description:
    "Premier legal consultancy for Banking & Finance in Assam. Expert guidance on NBFC Registration, Microfinance Act 2020 compliance, Tea Industry Loans, NEDFi schemes, and DRT Guwahati litigation.",
  keywords: [
    "Banking and Finance Services Assam",
    "NBFC Registration Guwahati",
    "Microfinance License Assam",
    "Assam Microfinance Act 2020",
    "DRT Lawyer Guwahati",
    "Tea Industry Finance Lawyer",
    "Assam Money Lenders Act License",
    "NEDFi Loan Consultant",
    "Debt Recovery Tribunal Guwahati",
    "Finance Company Registration Assam",
  ],
  openGraph: {
    title: "Banking and Finance Legal Services in Assam",
    description:
      "Expert legal support for financial institutions in Assam. From NBFC setup in Guwahati to DRT litigation and Tea Industry finance.",
    url: "https://www.amalegalsolutions.com/services/banking-and-finance/assam",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.amalegalsolutions.com/services/banking-and-finance/assam/og-image.png", // Placeholder if no specific image
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Assam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banking and Finance Services in Assam | AMA Legal Solutions",
    description:
      "Specialized legal services for NBFCs, MFIs, and Banks in Assam. Expert in DRT Guwahati and local financial regulations.",
  },
  alternates: {
    canonical: "https://www.amalegalsolutions.com/services/banking-and-finance/assam",
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
        "name": "Assam",
        "item": "https://www.amalegalsolutions.com/services/banking-and-finance/assam",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Banking and Finance Legal Services in Assam",
    "description":
      "Comprehensive legal guide for banking and finance entities in Assam. Covering Microfinance Regulation, NBFC registration, Tea Industry finance, and DRT Guwahati.",
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
    "name": "Banking and Finance Legal Services Assam",
    "image": "https://www.amalegalsolutions.com/services/3.png",
    "description": "Expert legal registration and compliance services for financial institutions in Assam.",
    "brand": {
      "@type": "Brand",
      "name": "AMA Legal Solutions",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
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
          "name": "Rafiqul Islam",
        },
        "reviewBody":
          "We wanted to start a microfinance operation in Barpeta. The new Act was confusing. AMA Legal Solutions helped us register and set up our loan documentation to be fully compliant.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Bipul Baruah",
        },
        "reviewBody":
          "Our tea garden needed working capital restructuring. They handled the legal liaison with the bank consortium and the Tea Board subsidy process efficiently.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Sanjay Agarwal",
        },
        "reviewBody":
          "Setting up an NBFC in Guwahati required a lot of RBI coordination. Their team in Delhi and Guwahati managed it seamlessly. Highly recommended.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Pranab Das",
        },
        "reviewBody":
          "We faced a tough recovery case in DRT Guwahati. Their lawyers are aggressive and knowledgeable. We got our property possession order in record time.",
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
      <AssamBankingClient />
    </>
  );
};

export default page;


