import type { Metadata } from "next";
import DebtRecoverySystemForNbfcsClient from "./DebtRecoverySystemForNbfcsClient";

const PAGE_URL = "https://www.amalegalsolutions.com/debt-recovery-system-for-nbfcs";
const OG_IMAGE = "/images/og/debt-recovery-system-for-nbfcs.png";

export const metadata: Metadata = {
  title: "Debt Recovery System for NBFCs | Automated 3-Notice Cadence & Legal Escalation",
  description:
    "End-to-end statutory debt recovery system for NBFCs and fintech lenders. Automated 3-notice weekly cadence, physical Speed Post, email, WhatsApp service proof, and police escalation under BNS.",
  keywords: [
    "debt recovery system for nbfcs",
    "nbfc debt recovery software",
    "legal recovery system for nbfc loans",
    "automated loan recovery for fintechs",
    "statutory legal notices for nbfcs",
    "bulk legal notice sending for digital lenders",
    "bns police complaint against loan defaulter",
    "nbfc bad loan legal recovery system",
    "section 25 pssa recovery for nbfcs",
    "rbi compliant debt collection system",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Debt Recovery System for NBFCs | Automated 3-Notice Cadence & Legal Escalation",
    description:
      "End-to-end statutory debt recovery system for NBFCs and fintech lenders. Automated 3-notice weekly cadence, physical Speed Post, email, WhatsApp service proof, and police escalation under BNS.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Debt Recovery System for NBFCs - AMA Legal Solutions",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Debt Recovery System for NBFCs | Automated 3-Notice Cadence & Legal Escalation",
    description:
      "End-to-end statutory debt recovery system for NBFCs and fintech lenders. Automated 3-notice weekly cadence, physical Speed Post, email, WhatsApp service proof, and police escalation under BNS.",
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

export default function DebtRecoverySystemForNbfcsPage() {
  return <DebtRecoverySystemForNbfcsClient />;
}
