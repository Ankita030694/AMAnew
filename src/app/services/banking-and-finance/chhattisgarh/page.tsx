import React from "react";
import Script from "next/script";
import ChhattisgarhBankingClient from "./ChhattisgarhBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Chhattisgarh | NBFC Registration & Industrial Finance",
  description:
    "Expert legal consultancy for Banking & Finance in Chhattisgarh. Services include NBFC Registration, Mining & Industrial Finance, Nidhi Company, Money Lenders License & DRT Litigation in Raipur.",
  alternates: {
    canonical: "https://amalegalsolutions.com/services/banking-and-finance/chhattisgarh",
  },
  openGraph: {
    title: "Banking and Finance Services in Chhattisgarh | NBFC Registration & Industrial Finance",
    description:
      "Expert legal consultancy for Banking & Finance in Chhattisgarh. Services include NBFC Registration, Mining & Industrial Finance, Nidhi Company, Money Lenders License & DRT Litigation in Raipur.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/chhattisgarh",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Chhattisgarh",
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
      name: "Chhattisgarh",
      item: "https://amalegalsolutions.com/services/banking-and-finance/chhattisgarh",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Chhattisgarh: Legal Registration & Compliance",
  description:
    "Comprehensive guide to banking and finance laws in Chhattisgarh. Learn how to register NBFC, Microfinance, and Nidhi Companies in Raipur with expert legal help.",
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
  name: "Banking and Finance Legal Services Chhattisgarh",
  image: "https://amalegalsolutions.com/services/3.png",
  description: "Expert legal registration and compliance services for financial institutions in Chhattisgarh.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
    url: "https://amalegalsolutions.com"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "160",
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
        name: "Rakesh Agrawal",
      },
      reviewBody:
        "We needed legal assistance for syndicating a large loan for our steel plant in Bhilai. AMA Legal Solutions handled the documentation and bank consortium meetings professionally.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Sunita Sahu",
      },
      reviewBody:
        "They helped us register our Nidhi Company in Bilaspur. The team is very knowledgeable about the NDH-4 filing requirements and guided us through the entire process.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Manish Verma",
      },
      reviewBody:
        "Excellent support for our NBFC registration. They managed the liaison with RBI Bhopal (which covers CG) effectively and resolved all queries promptly.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Prakash Chand",
      },
      reviewBody:
        "We engaged them for a DRT Jabalpur matter regarding a defaulted commercial loan. Their legal strategy was sound and helped us recover a significant portion of the dues.",
    },
  ],
};

export default function ChhattisgarhBankingPage() {
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
      <ChhattisgarhBankingClient />
    </>
  );
}

