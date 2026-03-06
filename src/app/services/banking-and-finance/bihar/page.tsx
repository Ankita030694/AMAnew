import React from "react";
import Script from "next/script";
import BiharBankingClient from "./BiharBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Bihar | NBFC Registration & DRT Patna",
  description:
    "Expert legal consultancy for Banking & Finance in Bihar. Services include NBFC Registration in Patna, Nidhi Company setup, Bihar Money Lenders License & DRT Litigation.",
  alternates: {
    canonical: "https://www.amalegalsolutions.com/services/banking-and-finance/bihar",
  },
  openGraph: {
    title: "Banking and Finance Services in Bihar | NBFC Registration & DRT Patna",
    description:
      "Expert legal consultancy for Banking & Finance in Bihar. Services include NBFC Registration in Patna, Nidhi Company setup, Bihar Money Lenders License & DRT Litigation.",
    url: "https://www.amalegalsolutions.com/services/banking-and-finance/bihar",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Bihar",
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
      name: "Bihar",
      item: "https://www.amalegalsolutions.com/services/banking-and-finance/bihar",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Bihar: Legal Registration & Compliance",
  description:
    "Comprehensive guide to banking and finance laws in Bihar. Learn how to register NBFC, Microfinance, and Nidhi Companies in Patna with expert legal help.",
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
  name: "Banking and Finance Legal Services Bihar",
  image: "https://www.amalegalsolutions.com/services/3.png",
  description: "Expert legal registration and compliance services for financial institutions in Bihar.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
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
        name: "Ravi Shankar Prasad",
      },
      reviewBody:
        "We wanted to register an NBFC in Patna. AMA Legal Solutions guided us through the 'fund flow' documentation and we got our CoR within 5 months.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Amit Kumar",
      },
      reviewBody:
        "Their knowledge of the Bihar Money Lenders Act saved us. They helped us get a license from the Circle Officer in Muzaffarpur, legalizing our business.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Suresh Jha",
      },
      reviewBody:
        "Best lawyers for DRT Patna cases. They handled our SARFAESI matter professionally and helped us recover a bad loan of ₹45 Lakhs.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Md. Aslam",
      },
      reviewBody:
        "We set up a Nidhi Company in Gaya. The AMA team handled everything from RoC incorporation to NDH-4 filing. Very professional service.",
    },
  ],
};

export default function BiharBankingPage() {
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
      <BiharBankingClient />
    </>
  );
}


