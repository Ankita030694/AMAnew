import type { Metadata } from "next";
import RecoveryForNbfcsClient from "./RecoveryForNbfcsClient";

const PAGE_URL = "https://www.amalegalsolutions.com/recovery-for-nbfcs";
const OG_IMAGE = "/images/og/recovery-for-nbfcs.png";

export const metadata: Metadata = {
  title: "Legal Recovery for NBFCs | Automated 3-Notice Cadence & Police Escalation",
  description:
    "End-to-end statutory recovery for NBFCs & fintechs. Automated 3 weekly custom legal notices + police complaint. Multi-channel delivery via Speed Post, Email & WhatsApp at ₹999/case.",
  keywords: [
    "recovery for nbfcs",
    "nbfc legal recovery service",
    "legal notice for nbfc loan default",
    "automated debt recovery for fintech lenders",
    "bulk legal notice sending for nbfcs",
    "police complaint against loan defaulter bns",
    "nbfc bad loan recovery lawyer",
    "statutory recovery product for digital lenders",
    "actoloan implantium legal recovery partner",
    "cheque bounce and nach bounce legal notice nbfc",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Legal Recovery for NBFCs | Automated 3-Notice Cadence & Police Escalation",
    description:
      "End-to-end statutory recovery for NBFCs & fintechs. Automated 3 weekly custom legal notices + police complaint. Multi-channel delivery via Speed Post, Email & WhatsApp at ₹999/case.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Legal Recovery Product Suite for NBFCs - AMA Legal Solutions",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Recovery for NBFCs | Automated 3-Notice Cadence & Police Escalation",
    description:
      "End-to-end statutory recovery for NBFCs & fintech lenders. Send 3 customized weekly legal notices + police complaint at flat ₹999/case via Speed Post, Email & WhatsApp.",
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

export default function RecoveryForNbfcsPage() {
  return <RecoveryForNbfcsClient />;
}
