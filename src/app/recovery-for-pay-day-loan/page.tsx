import type { Metadata } from "next";
import RecoveryForPayDayLoanClient from "./RecoveryForPayDayLoanClient";

const PAGE_URL = "https://www.amalegalsolutions.com/recovery-for-pay-day-loan";
const OG_IMAGE = "/images/og/recovery-for-pay-day-loan.png";

export const metadata: Metadata = {
  title: "Legal Recovery for Payday Loans | Automated 3-Notice Cadence & Police Escalation",
  description:
    "Statutory loan recovery for payday lenders & salary advance apps. Automated 3 weekly custom legal notices + police complaint. Speed Post, Email & WhatsApp delivery at ₹999/case.",
  keywords: [
    "recovery for pay day loan",
    "payday loan legal recovery",
    "salary advance loan recovery service",
    "instant loan app debt recovery legal notice",
    "legal notice for payday loan default",
    "bulk legal notice for digital lending apps",
    "police complaint against salary loan defaulter",
    "nach bounce legal notice payday loans",
    "fintech micro loan recovery advocate",
    "actoloan implantium payday recovery partner",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Legal Recovery for Payday Loans | Automated 3-Notice Cadence & Police Escalation",
    description:
      "Statutory loan recovery for payday lenders & salary advance apps. Automated 3 weekly custom legal notices + police complaint. Speed Post, Email & WhatsApp delivery at ₹999/case.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Legal Recovery Product Suite for Payday Loans - AMA Legal Solutions",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Recovery for Payday Loans | Automated 3-Notice Cadence & Police Escalation",
    description:
      "Statutory recovery suite for payday loan companies. 3 customized weekly legal notices + police complaint at flat ₹999/case via Speed Post, Email & WhatsApp.",
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

export default function RecoveryForPayDayLoanPage() {
  return <RecoveryForPayDayLoanClient />;
}
