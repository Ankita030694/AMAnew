import React from "react";
import Script from "next/script";
import KarnatakaBankingClient from "./KarnatakaBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Karnataka | NBFC Registration & Fintech Law",
  description:
    "Expert legal consultancy for Banking & Finance in Karnataka. Services include NBFC Registration, Fintech Compliance, Nidhi Company, Money Lenders License & DRT Litigation in Bengaluru.",
  alternates: {
    canonical: "https://amalegalsolutions.com/services/banking-and-finance/karnataka",
  },
  openGraph: {
    title: "Banking and Finance Services in Karnataka | NBFC Registration & Fintech Law",
    description:
      "Expert legal consultancy for Banking & Finance in Karnataka. Services include NBFC Registration, Fintech Compliance, Nidhi Company, Money Lenders License & DRT Litigation in Bengaluru.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/karnataka",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Karnataka",
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
      name: "Karnataka",
      item: "https://amalegalsolutions.com/services/banking-and-finance/karnataka",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Banking and Finance Services in Karnataka: Legal Registration & Compliance",
  description:
    "Comprehensive guide to banking and finance laws in Karnataka. Learn how to register NBFC, Fintech, and Nidhi Companies in Bengaluru with expert legal help.",
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
  name: "Banking and Finance Legal Services Karnataka",
  image: "https://amalegalsolutions.com/services/3.png",
  description: "Expert legal registration and compliance services for financial institutions in Karnataka.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
    url: "https://amalegalsolutions.com"
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
        name: "Anand Rao",
      },
      reviewBody:
        "As a Fintech startup in Indiranagar, we needed help with RBI's Digital Lending Guidelines. AMA Legal Solutions audited our entire app flow and user agreements. Highly recommended for tech-savvy legal advice.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Deepa Reddy",
      },
      reviewBody:
        "They helped us register our NBFC-MFI in record time. The team in Bengaluru is very knowledgeable about the local money lending compliances and RBI nodal officer interactions.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Srinivas Gowda",
      },
      reviewBody:
        "We engaged them for a complex SARFAESI matter involving industrial land in Peenya. They handled the DM application and physical possession seamlessly.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Kiran Kumar",
      },
      reviewBody:
        "Best legal firm for Nidhi Company registration in Mysore. They guided us on the NDH-4 filing and membership norms clearly.",
    },
  ],
};

export default function KarnatakaBankingPage() {
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
      <KarnatakaBankingClient />
    </>
  );
}

