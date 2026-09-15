import type { Metadata } from "next";
import LoanSettlementKeLiyeKonsiCompanySabseAchiHaiClient from "./LoanSettlementKeLiyeKonsiCompanySabseAchiHaiClient";

const PAGE_URL = "https://www.amalegalsolutions.com/loan-settlement-ke-liye-konsi-company-sabse-achi-hai";
const OG_IMAGE = "/images/og/loan-settlement-ke-liye-konsi-company-sabse-achi-hai.png";

export const metadata: Metadata = {
  title: "Loan Settlement Ke Liye Konsi Company Sabse Achi Hai?",
  description:
    "Janein loan settlement ke liye konsi company sabse achi hai. Compare High Court advocates vs private agencies, RBI OTS framework, and legal defense.",
  keywords: [
    "loan settlement ke liye konsi company sabse achi hai",
    "best loan settlement company in india",
    "best debt settlement lawyer india",
    "loan settlement agency vs advocate",
    "rbi compromise settlement legal guidelines",
    "stop recovery agent harassment legally",
    "one time settlement ots legal representation",
    "transparent fixed legal debt advisory india",
    "section 138 ni act settlement defense",
    "no dues certificate bank verification",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Loan Settlement Ke Liye Konsi Company Sabse Achi Hai?",
    description:
      "Janein loan settlement ke liye konsi company sabse achi hai. Compare High Court advocates vs private agencies, RBI OTS framework, and legal defense.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Loan Settlement Ke Liye Konsi Company Sabse Achi Hai – Strategic Legal Evaluation Guide",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Settlement Ke Liye Konsi Company Sabse Achi Hai?",
    description:
      "Janein loan settlement ke liye konsi company sabse achi hai. Compare High Court advocates vs private agencies, RBI OTS framework, and legal defense.",
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

export default function LoanSettlementKeLiyeKonsiCompanySabseAchiHaiPage() {
  return <LoanSettlementKeLiyeKonsiCompanySabseAchiHaiClient />;
}
