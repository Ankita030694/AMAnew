import type { Metadata } from "next";
import LoanSettlementKabKrnaChaiyeClient from "./LoanSettlementKabKrnaChaiyeClient";

const PAGE_URL = "https://www.amalegalsolutions.com/loan-settlement-kab-krna-chaiye";
const OG_IMAGE = "/images/og/loan-settlement-kab-krna-chaiye.png";

export const metadata: Metadata = {
  title: "Loan Settlement Kab Krna Chaiye? Right Time | AMA Legal",
  description:
    "Janein loan settlement kab krna chaiye. Discover the right time for settlement in India under RBI compromise norms, NPA triggers, and legal advisory.",
  keywords: [
    "loan settlement kab krna chaiye",
    "loan settlement kab karna chahiye",
    "right time for loan settlement in india",
    "when to settle loan with bank india",
    "loan settlement after npa classification",
    "rbi compromise settlement guidelines 2026",
    "debt settlement timing personal loan credit card",
    "stop recovery harassment advocate india",
    "one time settlement ots legal representation",
    "transparent fixed legal debt advisory india",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Loan Settlement Kab Krna Chaiye? Right Time | AMA Legal",
    description:
      "Janein loan settlement kab krna chaiye. Discover the right time for settlement in India under RBI compromise norms, NPA triggers, and legal advisory.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Loan Settlement Kab Krna Chaiye – Right Time & Legal Evaluation Guide by AMA Legal Solutions",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Settlement Kab Krna Chaiye? Right Time | AMA Legal",
    description:
      "Janein loan settlement kab krna chaiye. Discover the right time for settlement in India under RBI compromise norms, NPA triggers, and legal advisory.",
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

export default function LoanSettlementKabKrnaChaiyePage() {
  return <LoanSettlementKabKrnaChaiyeClient />;
}
