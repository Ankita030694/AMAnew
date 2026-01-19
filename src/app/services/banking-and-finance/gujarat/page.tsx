import React from "react";
import Script from "next/script";
import GujaratBankingClient from "./GujaratBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Gujarat | GIFT City & NBFC Registration",
  description:
    "Expert legal consultancy for Banking & Finance in Gujarat. Services include NBFC Registration in Ahmedabad, GIFT City IFSC setup, Nidhi Company & DRT Litigation.",
  alternates: {
    canonical: "https://amalegalsolutions.com/services/banking-and-finance/gujarat",
  },
  openGraph: {
    title: "Banking and Finance Services in Gujarat | GIFT City & NBFC Registration",
    description:
      "Expert legal consultancy for Banking & Finance in Gujarat. Services include NBFC Registration in Ahmedabad, GIFT City IFSC setup, Nidhi Company & DRT Litigation.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/gujarat",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Gujarat",
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
      name: "Gujarat",
      item: "https://amalegalsolutions.com/services/banking-and-finance/gujarat",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Gujarat: Legal Registration & Compliance",
  description:
    "Comprehensive guide to banking and finance laws in Gujarat. Learn how to register NBFC, Nidhi Company, and set up in GIFT City IFSC with expert legal help.",
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
  name: "Banking and Finance Legal Services Gujarat",
  image: "https://amalegalsolutions.com/services/3.png",
  description: "Expert legal registration and compliance services for financial institutions in Gujarat.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "180",
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
        name: "Patel Brothers",
      },
      reviewBody:
        "Registering an NBFC in Ahmedabad is tough, but AMA Legal Solutions made it smooth. They handled the RBI queries regarding our capital source professionally. Highly recommended.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Ankit Shah",
      },
      reviewBody:
        "We wanted to set up a unit in GIFT City. Their team guided us through the IFSCA regulations and tax benefits. They are true experts in corporate finance law.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Vijay Desai",
      },
      reviewBody:
        "The Money Lenders License process was confusing until we met them. They sorted our paperwork and got the license from the Mamlatdar office in Surat quickly.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Mehul Jhaveri",
      },
      reviewBody:
        "They handled our SARFAESI case in DRT Ahmedabad efficiently. We recovered possession of a factory in Sanand GIDC within 6 months.",
    },
  ],
};

export default function GujaratBankingPage() {
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
      <GujaratBankingClient />
    </>
  );
}


