import React from "react";
import Script from "next/script";
import GoaBankingClient from "./GoaBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Goa | NBFC Registration & Casino Finance Law",
  description:
    "Expert legal consultancy for Banking & Finance in Goa. Services include NBFC Registration, Casino & Tourism Finance, Nidhi Company, Money Lenders License & DRT Litigation in Panaji.",
  alternates: {
    canonical: "https://www.amalegalsolutions.com/services/banking-and-finance/goa",
  },
  openGraph: {
    title: "Banking and Finance Services in Goa | NBFC Registration & Casino Finance Law",
    description:
      "Expert legal consultancy for Banking & Finance in Goa. Services include NBFC Registration, Casino & Tourism Finance, Nidhi Company, Money Lenders License & DRT Litigation in Panaji.",
    url: "https://www.amalegalsolutions.com/services/banking-and-finance/goa",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Goa",
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
      name: "Goa",
      item: "https://www.amalegalsolutions.com/services/banking-and-finance/goa",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Goa: Legal Registration & Compliance",
  description:
    "Comprehensive guide to banking and finance laws in Goa. Learn how to register NBFC, Microfinance, and Nidhi Companies in Panaji with expert legal help.",
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
  name: "Banking and Finance Legal Services Goa",
  image: "https://www.amalegalsolutions.com/services/3.png",
  description: "Expert legal registration and compliance services for financial institutions in Goa.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
    url: "https://www.amalegalsolutions.com"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "145",
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
        name: "Anthony D'Souza",
      },
      reviewBody:
        "We needed legal structuring for a boutique hotel project finance. AMA Legal Solutions handled the loan syndication and due diligence flawlessly. Their knowledge of Portuguese Civil Code implications on property mortgage was crucial.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Rajesh Naik",
      },
      reviewBody:
        "As a Nidhi Company in Margao, we were facing compliance issues. The team guided us through the NDH-4 filing process and helped us restructure our loan portfolio.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Sima Fernandes",
      },
      reviewBody:
        "Excellent support for our NBFC registration. They managed the RBI liaison in Mumbai effectively and got us our CoR without any major hassles.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Vijay Kamat",
      },
      reviewBody:
        "We engaged them for a DRT matter regarding a resort property auction. Their aggressive representation helped us secure a stay and negotiate a settlement.",
    },
  ],
};

export default function GoaBankingPage() {
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
      <GoaBankingClient />
    </>
  );
}

