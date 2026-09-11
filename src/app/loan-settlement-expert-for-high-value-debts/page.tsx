import type { Metadata } from "next";
import LoanSettlementExpertForHighValueDebtsClient from "./LoanSettlementExpertForHighValueDebtsClient";

const PAGE_URL =
  "https://www.amalegalsolutions.com/loan-settlement-expert-for-high-value-debts";
const OG_IMAGE =
  "/images/og/loan-settlement-expert-for-high-value-debts.png";

export const metadata: Metadata = {
  title: "Loan Settlement Lawyer for High Value Debts | AMA Legal Solutions",
  description:
    "Consult a premier loan settlement lawyer for high value debts. Advocate-led commercial debt compromise, DRT litigation defense, SARFAESI quashing, guarantor immunity, and transparent fixed advisory.",
  keywords: [
    "loan settlement lawyer for high value debts",
    "high value debt settlement expert india",
    "commercial loan settlement advocate",
    "drt debt recovery tribunal lawyer high value loans",
    "sarfaesi section 13 defense lawyer",
    "rbi compromise settlement high value commercial loans",
    "personal guarantor ibc section 95 defense advocate",
    "consortium loan settlement lawyer india",
    "one time settlement lawyer for business debts",
    "transparent fixed legal debt advisory india",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Loan Settlement Lawyer for High Value Debts | AMA Legal Solutions",
    description:
      "Consult a premier loan settlement lawyer for high value debts. Advocate-led commercial debt compromise, DRT litigation defense, SARFAESI quashing, guarantor immunity, and transparent fixed advisory.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Loan Settlement Lawyer for High Value Debts – AMA Legal Solutions Infographic",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Settlement Lawyer for High Value Debts | AMA Legal Solutions",
    description:
      "Consult a premier loan settlement lawyer for high value debts. Advocate-led commercial debt compromise, DRT litigation defense, SARFAESI quashing, guarantor immunity, and transparent fixed advisory.",
    images: [OG_IMAGE],
    site: "@AMALegalSol",
    creator: "@AnujAnandMalik",
  },
  authors: [{ name: "Anuj Anand Malik", url: "/author/anuj-anand-malik" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function LoanSettlementExpertForHighValueDebtsPage() {
  return <LoanSettlementExpertForHighValueDebtsClient />;
}
