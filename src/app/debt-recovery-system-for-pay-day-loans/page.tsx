import type { Metadata } from "next";
import DebtRecoverySystemForPayDayLoansClient from "./DebtRecoverySystemForPayDayLoansClient";

const PAGE_URL = "https://www.amalegalsolutions.com/debt-recovery-system-for-pay-day-loans";
const OG_IMAGE = "/images/og/debt-recovery-system-for-pay-day-loans.png";

export const metadata: Metadata = {
  title: "Debt Recovery System for Pay Day Loans | Automated 3-Notice Cadence & Legal Escalation",
  description:
    "End-to-end statutory debt recovery system for payday lenders and salary advance applications. Automated 3-notice weekly cadence, physical Speed Post, email, WhatsApp service proof, and police escalation under BNS.",
  keywords: [
    "debt recovery system for pay day loans",
    "payday loan recovery system",
    "salary advance loan debt collection",
    "automated loan recovery for fintechs",
    "legal notice for payday loan default",
    "bulk legal notice sending for micro-lenders",
    "bns police complaint against loan defaulter",
    "digital credit recovery system india",
    "section 25 pssa payday recovery",
    "rbi compliant digital lending collection",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Debt Recovery System for Pay Day Loans | Automated 3-Notice Cadence & Legal Escalation",
    description:
      "End-to-end statutory debt recovery system for payday lenders and salary advance applications. Automated 3-notice weekly cadence, physical Speed Post, email, WhatsApp service proof, and police escalation under BNS.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Debt Recovery System for Pay Day Loans - AMA Legal Solutions",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Debt Recovery System for Pay Day Loans | Automated 3-Notice Cadence & Legal Escalation",
    description:
      "End-to-end statutory debt recovery system for payday lenders and salary advance applications. Automated 3-notice weekly cadence, physical Speed Post, email, WhatsApp service proof, and police escalation under BNS.",
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

export default function DebtRecoverySystemForPayDayLoansPage() {
  return <DebtRecoverySystemForPayDayLoansClient />;
}
