import React from "react";
import { Metadata } from "next";
import MeghalayaBankingClient from "./MeghalayaBankingClient";

export const metadata: Metadata = {
  title: "Banking and Finance Services in Meghalaya | NBFC & DRT Lawyers",
  description:
    "Premier legal consultancy for Banking & Finance in Meghalaya. Expert guidance on Land Transfer Act, PRIME Meghalaya funding, FOCUS scheme, and DRT Guwahati.",
  keywords: [
    "Banking and Finance Services Meghalaya",
    "NBFC Registration Shillong",
    "Meghalaya Transfer of Land Act Lawyer",
    "PRIME Meghalaya Consultant",
    "DRT Lawyer Meghalaya",
    "FOCUS Scheme Meghalaya",
    "Homestay Loan Shillong",
    "Debt Recovery Tribunal Guwahati",
    "Finance Company Registration Tura",
    "Cooperative Society Registration Meghalaya",
  ],
  openGraph: {
    title: "Banking and Finance Legal Services in Meghalaya",
    description:
      "Expert legal support for financial institutions in Meghalaya. From Land Act compliance to DRT litigation and Startup funding.",
    url: "https://www.amalegalsolutions.com/services/banking-and-finance/meghalaya",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.amalegalsolutions.com/services/banking-and-finance/meghalaya/og-image.png", // Placeholder
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Meghalaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banking and Finance Services in Meghalaya | AMA Legal Solutions",
    description:
      "Specialized legal services for NBFCs, Startups, and Banks in Meghalaya. Expert in DRT Guwahati and Land Transfer Act.",
  },
  alternates: {
    canonical: "https://www.amalegalsolutions.com/services/banking-and-finance/meghalaya",
  },
};

const page = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.amalegalsolutions.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.amalegalsolutions.com/services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Banking & Finance",
        "item": "https://www.amalegalsolutions.com/services/banking-and-finance",
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Meghalaya",
        "item": "https://www.amalegalsolutions.com/services/banking-and-finance/meghalaya",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Banking and Finance Legal Services in Meghalaya",
    "description":
      "Comprehensive legal guide for banking and finance entities in Meghalaya. Covering Land Transfer Act barriers, PRIME Meghalaya, FOCUS scheme, and DRT Guwahati.",
    "author": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "url": "https://www.amalegalsolutions.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
      },
    },
    "datePublished": "2025-11-27",
    "dateModified": "2025-11-27",
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Banking and Finance Legal Services Meghalaya",
    "image": "https://www.amalegalsolutions.com/services/3.png",
    "description": "Expert legal registration and compliance services for financial institutions in Meghalaya.",
    "brand": {
      "@type": "Brand",
      "name": "AMA Legal Solutions",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "115",
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Banrishisha L.",
        },
        "reviewBody":
          "I run a homestay in Cherrapunji. Getting a bank loan was tough because of land papers. AMA Legal Solutions helped me get the Headman's NOC and the PMEGP subsidy.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Rahul Jain",
        },
        "reviewBody":
          "We needed working capital for our cement plant in Byrnihat. They handled the leasehold mortgage documentation with MIDC and the bank consortium professionally.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Wansuk M.",
        },
        "reviewBody":
          "Our Cooperative Society needed guidance on the FOCUS scheme. They helped us draft our bylaws and open the group account.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "James K.",
        },
        "reviewBody":
          "We faced a SARFAESI notice on our commercial complex. Their legal team in Guwahati DRT fought for us and got a settlement approved.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <MeghalayaBankingClient />
    </>
  );
};

export default page;


