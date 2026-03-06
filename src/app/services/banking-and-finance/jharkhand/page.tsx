import React from "react";
import Script from "next/script";
import JharkhandBankingClient from "./JharkhandBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Jharkhand | NBFC Registration & DRT",
  description:
    "Expert legal consultancy for Banking & Finance in Jharkhand. Services include NBFC Registration in Ranchi, Tribal Finance (CNT/SPT) compliance, Money Lenders License & DRT Litigation.",
  alternates: {
    canonical: "https://www.amalegalsolutions.com/services/banking-and-finance/jharkhand",
  },
  openGraph: {
    title: "Banking and Finance Services in Jharkhand | NBFC Registration & DRT",
    description:
      "Expert legal consultancy for Banking & Finance in Jharkhand. Services include NBFC Registration in Ranchi, Tribal Finance (CNT/SPT) compliance, Money Lenders License & DRT Litigation.",
    url: "https://www.amalegalsolutions.com/services/banking-and-finance/jharkhand",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Jharkhand",
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
      name: "Jharkhand",
      item: "https://www.amalegalsolutions.com/services/banking-and-finance/jharkhand",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Jharkhand: Legal Registration & Compliance",
  description:
    "Comprehensive guide to banking and finance laws in Jharkhand. Learn how to register NBFC, Microfinance, and Nidhi Companies in Ranchi with expert legal help.",
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
  name: "Banking and Finance Legal Services Jharkhand",
  image: "https://www.amalegalsolutions.com/services/3.png",
  description: "Expert legal registration and compliance services for financial institutions in Jharkhand.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "135",
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
        name: "Vikram Singh",
      },
      reviewBody:
        "Registering an NBFC in Ranchi was daunting due to the strict RBI norms. AMA Legal Solutions handled the entire COSMOS application and liaison with the regional office. We got our license smoothly.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Anjali Soren",
      },
      reviewBody:
        "We faced huge issues recovering loans in tribal areas due to CNT Act restrictions. Their team helped us restructure our loan agreements and use the JLG model effectively.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Rahul Gupta",
      },
      reviewBody:
        "Excellent support for DRT Ranchi cases. They know the procedures inside out and helped us vacate a stay order on a SARFAESI property in Jamshedpur.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Manoj Prasad",
      },
      reviewBody:
        "They helped us get the Money Lenders License in Hazaribagh. The process was transparent and quick. Now we operate without any legal fear.",
    },
  ],
};

export default function JharkhandBankingPage() {
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
      <JharkhandBankingClient />
    </>
  );
}


