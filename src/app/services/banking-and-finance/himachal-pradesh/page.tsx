import React from "react";
import Script from "next/script";
import HimachalPradeshBankingClient from "./HimachalPradeshBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Himachal Pradesh | NBFC & MFI Registration",
  description:
    "Expert legal consultancy for Banking & Finance in Himachal Pradesh. Services include NBFC Registration, Microfinance setup, Nidhi Company, Money Lenders License & DRT Litigation in Shimla.",
  alternates: {
    canonical: "https://amalegalsolutions.com/services/banking-and-finance/himachal-pradesh",
  },
  openGraph: {
    title: "Banking and Finance Services in Himachal Pradesh | NBFC & MFI Registration",
    description:
      "Expert legal consultancy for Banking & Finance in Himachal Pradesh. Services include NBFC Registration, Microfinance setup, Nidhi Company, Money Lenders License & DRT Litigation in Shimla.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/himachal-pradesh",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Himachal Pradesh",
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
      item: "https://amalegalsolutions.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://amalegalsolutions.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Banking & Finance",
      item: "https://amalegalsolutions.com/services/banking-and-finance",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Himachal Pradesh",
      item: "https://amalegalsolutions.com/services/banking-and-finance/himachal-pradesh",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Himachal Pradesh: Legal Registration & Compliance",
  description:
    "Comprehensive guide to banking and finance laws in Himachal Pradesh. Learn how to register NBFC, Microfinance, and Nidhi Companies in Shimla with expert legal help.",
  image: "https://amalegalsolutions.com/services/3.png",
  author: {
    "@type": "Organization",
    name: "AMA Legal Solutions",
    url: "https://amalegalsolutions.com",
  },
  publisher: {
    "@type": "Organization",
    name: "AMA Legal Solutions",
    logo: {
      "@type": "ImageObject",
      url: "https://amalegalsolutions.com/ama-legal-solutions-logo.png",
    },
  },
  datePublished: "2024-11-27",
  dateModified: "2024-11-27",
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Banking and Finance Legal Services Himachal Pradesh",
  image: "https://amalegalsolutions.com/services/3.png",
  description: "Expert legal registration and compliance services for financial institutions in Himachal Pradesh.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
    url: "https://amalegalsolutions.com"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "120",
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
        "We struggled for months to get our Nidhi Company registered due to compliance issues. AMA Legal Solutions streamlined the entire process. Their knowledge of local and central laws is impressive.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Priya Sharma",
      },
      reviewBody:
        "As a Microfinance NGO, we needed guidance on JLG documentation. The team provided us with watertight contracts that have significantly improved our recovery rates in the hill districts.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Rahul Verma",
      },
      reviewBody:
        "Their expertise in DRT litigation is impressive. We engaged them for a high-value recovery case involving a default in the hospitality sector, and they secured a favorable order.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Amit Kapoor",
      },
      reviewBody:
        "We wanted to start a private finance business but were worried about the legalities. They helped us get the Money Lenders License from the DC office. Professional and reliable.",
    },
  ],
};

export default function HimachalPradeshBankingPage() {
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
      <HimachalPradeshBankingClient />
    </>
  );
}

