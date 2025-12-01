import React from "react";
import { Metadata } from "next";
import LadakhBankingClient from "./LadakhBankingClient";

export const metadata: Metadata = {
  title: "Banking and Finance Services in Ladakh | NBFC & DRT Lawyers",
  description:
    "Premier legal consultancy for Banking & Finance in Ladakh. Expert guidance on SARFAESI in tribal areas, Hotel Financing, Solar Projects, and DRT litigation for Leh & Kargil.",
  keywords: [
    "Banking and Finance Services Ladakh",
    "NBFC Registration Leh",
    "Hotel Finance Lawyer Ladakh",
    "SARFAESI Act Ladakh Land Rights",
    "DRT Lawyer Ladakh",
    "Solar Project Finance Ladakh",
    "LAHDC Finance Schemes",
    "Debt Recovery Tribunal Chandigarh",
    "Finance Company Registration Kargil",
    "PMEGP Loan Consultant Ladakh",
  ],
  openGraph: {
    title: "Banking and Finance Legal Services in Ladakh",
    description:
      "Expert legal support for financial institutions in Ladakh. From Tourism Finance to DRT litigation and Solar Energy projects.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/ladakh",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://amalegalsolutions.com/services/banking-and-finance/ladakh/og-image.png", // Placeholder
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Ladakh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banking and Finance Services in Ladakh | AMA Legal Solutions",
    description:
      "Specialized legal services for NBFCs, Hoteliers, and Banks in Ladakh. Expert in DRT Chandigarh and local land laws.",
  },
  alternates: {
    canonical: "https://amalegalsolutions.com/services/banking-and-finance/ladakh",
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
        "item": "https://amalegalsolutions.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://amalegalsolutions.com/services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Banking & Finance",
        "item": "https://amalegalsolutions.com/services/banking-and-finance",
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Ladakh",
        "item": "https://amalegalsolutions.com/services/banking-and-finance/ladakh",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Banking and Finance Legal Services in Ladakh",
    "description":
      "Comprehensive legal guide for banking and finance entities in Ladakh. Covering SARFAESI land issues, NBFC registration, Tourism finance, and DRT Chandigarh.",
    "author": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "url": "https://amalegalsolutions.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://amalegalsolutions.com/logo.png",
      },
    },
    "datePublished": "2025-11-27",
    "dateModified": "2025-11-27",
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Banking and Finance Legal Services Ladakh",
    "image": "https://amalegalsolutions.com/services/3.png",
    "description": "Expert legal registration and compliance services for financial institutions in Ladakh.",
    "brand": {
      "@type": "Brand",
      "name": "AMA Legal Solutions",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "95",
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
          "name": "Tsering Namgyal",
        },
        "reviewBody":
          "Building a luxury camp in Nubra required a big loan. The bank was stuck on land papers. AMA Legal Solutions helped clarify the title issues with the Tehsildar and got our loan sanctioned.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Mohd. Hussain",
        },
        "reviewBody":
          "I am a contractor for BRO. I needed a Bank Guarantee quickly for a tender. They guided me through the documentation and compliance with the bank in Leh.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Stanzin Dorjee",
        },
        "reviewBody":
          "We faced a SARFAESI notice. Since we are in a remote area, we didn't know what to do. Their team handled the case in DRT Chandigarh and saved our property.",
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Rahul Sharma",
        },
        "reviewBody":
          "For our solar power project, land acquisition was a nightmare. Their understanding of LAHDC rules helped us navigate the approvals smoothly.",
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
      <LadakhBankingClient />
    </>
  );
};

export default page;


