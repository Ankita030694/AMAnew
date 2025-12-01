import React from "react";
import Script from "next/script";
import HaryanaBankingClient from "./HaryanaBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Haryana | NBFC Registration & Fintech Law",
  description:
    "Expert legal consultancy for Banking & Finance in Haryana. Services include NBFC Registration in Gurugram, Fintech compliance, Nidhi Company setup & DRT Chandigarh Litigation.",
  alternates: {
    canonical: "https://amalegalsolutions.com/services/banking-and-finance/haryana",
  },
  openGraph: {
    title: "Banking and Finance Services in Haryana | NBFC Registration & Fintech Law",
    description:
      "Expert legal consultancy for Banking & Finance in Haryana. Services include NBFC Registration in Gurugram, Fintech compliance, Nidhi Company setup & DRT Chandigarh Litigation.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/haryana",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Haryana",
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
      name: "Haryana",
      item: "https://amalegalsolutions.com/services/banking-and-finance/haryana",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Haryana: Legal Registration & Compliance",
  description:
    "Comprehensive guide to banking and finance laws in Haryana. Learn how to register NBFC, Fintech, and Nidhi Companies in Gurugram with expert legal help.",
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
  name: "Banking and Finance Legal Services Haryana",
  image: "https://amalegalsolutions.com/services/3.png",
  description: "Expert legal registration and compliance services for financial institutions in Haryana.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "165",
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
        name: "Siddharth Gupta",
      },
      reviewBody:
        "Setting up a Fintech NBFC in Gurugram required complex structuring for FDI. AMA Legal Solutions handled the RBI compliance perfectly. Their knowledge of digital lending norms is top-notch.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Rakesh Dalal",
      },
      reviewBody:
        "We faced recovery issues with our tractor loans in Hisar. Their team helped us file cases in DRT Chandigarh and we got possession of assets within months.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Mohit Sharma",
      },
      reviewBody:
        "Our Nidhi Company in Rohtak was stuck with NDH-4 issues. They audited our books, fixed the compliance gaps, and got our status approved.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Joginder Singh",
      },
      reviewBody:
        "They helped us obtain the Money Lenders License in Karnal. Professional service and clear guidance on interest rate caps.",
    },
  ],
};

export default function HaryanaBankingPage() {
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
      <HaryanaBankingClient />
    </>
  );
}


