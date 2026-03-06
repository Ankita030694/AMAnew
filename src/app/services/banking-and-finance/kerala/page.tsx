import React from "react";
import Script from "next/script";
import KeralaBankingClient from "./KeralaBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Kerala | Gold Loan & NBFC Registration",
  description:
    "Expert legal consultancy for Banking & Finance in Kerala. Services include Gold Loan NBFC Registration, Chitty Business, Nidhi Company, & DRT Litigation in Kochi.",
  alternates: {
    canonical: "https://www.amalegalsolutions.com/services/banking-and-finance/kerala",
  },
  openGraph: {
    title: "Banking and Finance Services in Kerala | Gold Loan & NBFC Registration",
    description:
      "Expert legal consultancy for Banking & Finance in Kerala. Services include Gold Loan NBFC Registration, Chitty Business, Nidhi Company, & DRT Litigation in Kochi.",
    url: "https://www.amalegalsolutions.com/services/banking-and-finance/kerala",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Kerala",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.amalegalsolutions.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.amalegalsolutions.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Banking & Finance",
      item: "https://www.amalegalsolutions.com/services/banking-and-finance",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Kerala",
      item: "https://www.amalegalsolutions.com/services/banking-and-finance/kerala",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Kerala: Legal Registration & Compliance",
  description:
    "Comprehensive guide to banking and finance laws in Kerala. Learn how to register NBFC, Chitty, and Nidhi Companies in Kochi with expert legal help.",
  image: "https://www.amalegalsolutions.com/services/3.png",
  author: {
    "@type": "Organization",
    name: "AMA Legal Solutions",
    url: "https://www.amalegalsolutions.com",
  },
  publisher: {
    "@type": "Organization",
    name: "AMA Legal Solutions",
    logo: {
      "@type": "ImageObject",
      url: "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
    },
  },
  datePublished: "2024-11-27",
  dateModified: "2024-11-27",
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Banking and Finance Legal Services Kerala",
  image: "https://www.amalegalsolutions.com/services/3.png",
  description: "Expert legal registration and compliance services for financial institutions in Kerala.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "225",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Mathew Joseph",
      },
      reviewBody:
        "We faced huge hurdles registering our Nidhi company in Palakkad due to the new NDH-4 rules. AMA Legal Solutions audited our files and handled the compliance perfectly.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Anand Nair",
      },
      reviewBody:
        "Starting a private Chitty business in Kottayam seemed impossible. Their team guided us through the Treasury deposit and Registrar sanction process step-by-step.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Fathima Beevi",
      },
      reviewBody:
        "We needed a large term loan from KFC for our resort project. They handled the legal scrutiny of our land documents and project report, ensuring smooth disbursement.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Krishnan Unni",
      },
      reviewBody:
        "Their expertise in DRT Ernakulam is unmatched. They helped our bank recover a bad loan of ₹80 Lakhs through SARFAESI action within 8 months.",
    },
  ],
};

export default function KeralaBankingPage() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <KeralaBankingClient />
    </>
  );
}


