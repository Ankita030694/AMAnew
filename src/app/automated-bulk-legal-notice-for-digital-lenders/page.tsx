import type { Metadata } from "next";
import AutomatedBulkLegalNoticeForDigitalLendersClient from "./AutomatedBulkLegalNoticeForDigitalLendersClient";

const PAGE_URL = "https://www.amalegalsolutions.com/automated-bulk-legal-notice-for-digital-lenders";
const OG_IMAGE = "/images/og/automated-bulk-legal-notice-for-digital-lenders.png";

export const metadata: Metadata = {
  title: "Automated Bulk Legal Notice for Digital Lenders | Fast Dispatch & Section 63 BSA Proof",
  description:
    "End-to-end automated bulk legal notice solution for fintechs, NBFCs, and digital lending apps. Advocate-vetted generation, Speed Post barcode integration, verified WhatsApp delivery, and Section 63 BSA court-admissible audit trails.",
  keywords: [
    "automated bulk legal notice for digital lenders",
    "bulk legal notice software for fintech",
    "automated debt recovery notice system",
    "bulk legal notice sending for nbfcs",
    "digital lending legal notice automation",
    "section 63 bsa electronic notice certificate",
    "bulk speed post dispatch for loan default",
    "section 25 pssa bulk notice platform",
    "rbi compliant legal notice workflow",
    "loan default legal notice generator",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Automated Bulk Legal Notice for Digital Lenders | Fast Dispatch & Section 63 BSA Proof",
    description:
      "End-to-end automated bulk legal notice solution for fintechs, NBFCs, and digital lending apps. Advocate-vetted generation, Speed Post barcode integration, verified WhatsApp delivery, and Section 63 BSA court-admissible audit trails.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Automated Bulk Legal Notice for Digital Lenders - AMA Legal Solutions",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automated Bulk Legal Notice for Digital Lenders | Fast Dispatch & Section 63 BSA Proof",
    description:
      "End-to-end automated bulk legal notice solution for fintechs, NBFCs, and digital lending apps. Advocate-vetted generation, Speed Post barcode integration, verified WhatsApp delivery, and Section 63 BSA court-admissible audit trails.",
    images: [OG_IMAGE],
    site: "@AMALegalSol",
    creator: "@AnujAnandMalik",
  },
  authors: [{ name: "Anuj Anand Malik", url: "/author/anuj-anand-malik" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function AutomatedBulkLegalNoticeForDigitalLendersPage() {
  return <AutomatedBulkLegalNoticeForDigitalLendersClient />;
}
