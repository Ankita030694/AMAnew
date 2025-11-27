import React from "react";
import Script from "next/script";
import SikkimBankingClient from "./SikkimBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Sikkim | NBFC Registration & Tax-Free Investment",
  description:
    "Expert legal consultancy for Banking & Finance in Sikkim. Services include NBFC Registration, Industrial Finance in Tax-Free Zones, Nidhi Company, Money Lenders License & DRT Litigation in Gangtok.",
  alternates: {
    canonical: "https://amalegalsolutions.com/services/banking-and-finance/sikkim",
  },
  openGraph: {
    title: "Banking and Finance Services in Sikkim | NBFC Registration & Tax-Free Investment",
    description:
      "Expert legal consultancy for Banking & Finance in Sikkim. Services include NBFC Registration, Industrial Finance in Tax-Free Zones, Nidhi Company, Money Lenders License & DRT Litigation in Gangtok.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/sikkim",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Sikkim",
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
      name: "Sikkim",
      item: "https://amalegalsolutions.com/services/banking-and-finance/sikkim",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Sikkim: Legal Registration & Compliance",
  description:
    "Comprehensive guide to banking and finance laws in Sikkim. Learn how to register NBFC, Microfinance, and Nidhi Companies in Gangtok with expert legal help.",
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
      url: "https://amalegalsolutions.com/logo.png",
    },
  },
  datePublished: "2024-11-27",
  dateModified: "2024-11-27",
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Banking and Finance Legal Services Sikkim",
  image: "https://amalegalsolutions.com/services/3.png",
  description: "Expert legal registration and compliance services for financial institutions in Sikkim.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
    url: "https://amalegalsolutions.com"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "110",
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
        name: "Karma Bhutia",
      },
      reviewBody:
        "We needed legal help for our pharmaceutical unit in Rangpo regarding project finance. AMA Legal Solutions understood the special status of Sikkim and structured the deal perfectly.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Tenzing Dorjee",
      },
      reviewBody:
        "Setting up a Nidhi Company in Gangtok was smooth with their guidance. They helped us comply with the Nidhi Rules and local trade license requirements.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Sandeep Sharma",
      },
      reviewBody:
        "We hired them for a recovery suit. Since DRT jurisdiction for Sikkim is in Guwahati (formerly Kolkata), we needed a firm with reach. They handled the case very professionally.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Pema Lepcha",
      },
      reviewBody:
        "Great advice on money lending laws in Sikkim. They helped us get the necessary licenses and drafted compliant loan agreements.",
    },
  ],
};

export default function SikkimBankingPage() {
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
      <SikkimBankingClient />
    </>
  );
}

