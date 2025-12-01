import React from "react";
import Script from "next/script";
import TamilNaduBankingClient from "./TamilNaduBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Tamil Nadu | Chit Funds & Nidhi Company",
  description:
    "Expert legal consultancy for Banking & Finance in Tamil Nadu. Services include Chit Fund Registration, Nidhi Company setup, Industrial Finance (TIIC) & DRT Litigation in Chennai.",
  alternates: {
    canonical: "https://amalegalsolutions.com/services/banking-and-finance/tamil-nadu",
  },
  openGraph: {
    title: "Banking and Finance Services in Tamil Nadu | Chit Funds & Nidhi Company",
    description:
      "Expert legal consultancy for Banking & Finance in Tamil Nadu. Services include Chit Fund Registration, Nidhi Company setup, Industrial Finance (TIIC) & DRT Litigation in Chennai.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/tamil-nadu",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Tamil Nadu",
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
      name: "Tamil Nadu",
      item: "https://amalegalsolutions.com/services/banking-and-finance/tamil-nadu",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Tamil Nadu: Legal Registration & Compliance",
  description:
    "Comprehensive guide to banking and finance laws in Tamil Nadu. Learn how to register Chit Funds, Nidhi Companies, and NBFCs in Chennai with expert legal help.",
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
  name: "Banking and Finance Legal Services Tamil Nadu",
  image: "https://amalegalsolutions.com/services/3.png",
  description: "Expert legal registration and compliance services for financial institutions in Tamil Nadu.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "210",
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
        name: "Karthik Raja",
      },
      reviewBody:
        "We wanted to start a Chit Fund in Salem. AMA Legal Solutions guided us through the deposit requirements and bylaws drafting. Excellent service.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Senthil Kumar",
      },
      reviewBody:
        "Registering our Nidhi Company in Chennai was smooth with their help. They handled the NDH-4 compliance which is very strict now. We are now operating successfully.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Ramesh Bala",
      },
      reviewBody:
        "Our textile unit in Tirupur faced a DRT case in Coimbatore. Their legal team defended us well and helped negotiate a One Time Settlement (OTS) with the bank.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Ganesh Moorthy",
      },
      reviewBody:
        "They helped us get the Money Lenders License in Madurai. They explained the interest rate caps clearly so we don't violate the Kandhu Vatti Act.",
    },
  ],
};

export default function TamilNaduBankingPage() {
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
      <TamilNaduBankingClient />
    </>
  );
}


