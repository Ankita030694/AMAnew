import React from "react";
import Script from "next/script";
import ArunachalPradeshBankingClient from "./ArunachalPradeshBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Arunachal Pradesh | NBFC & LPC Loans",
  description:
    "Expert legal consultancy for Banking & Finance in Arunachal Pradesh. Services include NBFC Registration in Itanagar, Land Possession Certificate (LPC) loan compliance, ILP & Trading Licenses.",
  alternates: {
    canonical: "https://www.amalegalsolutions.com/services/banking-and-finance/arunachal-pradesh",
  },
  openGraph: {
    title: "Banking and Finance Services in Arunachal Pradesh | NBFC & LPC Loans",
    description:
      "Expert legal consultancy for Banking & Finance in Arunachal Pradesh. Services include NBFC Registration in Itanagar, Land Possession Certificate (LPC) loan compliance, ILP & Trading Licenses.",
    url: "https://www.amalegalsolutions.com/services/banking-and-finance/arunachal-pradesh",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Arunachal Pradesh",
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
      name: "Arunachal Pradesh",
      item: "https://www.amalegalsolutions.com/services/banking-and-finance/arunachal-pradesh",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Arunachal Pradesh: Legal Registration & Compliance",
  description:
    "Comprehensive guide to banking and finance laws in Arunachal Pradesh. Learn how to register NBFC, obtain Trade Licenses, and navigate LPC land laws in Itanagar.",
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
  name: "Banking and Finance Legal Services Arunachal Pradesh",
  image: "https://www.amalegalsolutions.com/services/3.png",
  description: "Expert legal registration and compliance services for financial institutions in Arunachal Pradesh.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
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
        name: "Tashi Dorjee",
      },
      reviewBody:
        "Starting a finance company in Itanagar was tough because of the Trading License issue. AMA Legal Solutions helped us structure a Joint Venture with a local partner that satisfied all legal norms.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Kago Yubbey",
      },
      reviewBody:
        "We needed a loan under DDUSY for our Kiwi wine plant in Ziro. The legal team helped us get a Non-Encumbrance Certificate and CGTMSE cover, and the loan was sanctioned.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Subhash Agarwal",
      },
      reviewBody:
        "Recovering dues in Pasighat was impossible until we engaged them. They guided us on how to file a case in DRT Guwahati and use the local administration for pressure.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Lobsang Wangchu",
      },
      reviewBody:
        "They handled our Section 8 Microfinance registration smoothly. Their knowledge of NEDFi schemes and local tribal laws is exceptional.",
    },
  ],
};

export default function ArunachalPradeshBankingPage() {
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
      <ArunachalPradeshBankingClient />
    </>
  );
}


