import type { Metadata } from "next";
import LoanSettlementKarwanaHaiClient from "./LoanSettlementKarwanaHaiClient";

const PAGE_URL = "https://www.amalegalsolutions.com/loan-settlement-karwana-hai";
const OG_IMAGE = "/images/og/loan-settlement-karwana-hai.png";

export const metadata: Metadata = {
  title: "Loan Settlement Karwana Hai? Complete Legal Process & RBI OTS Guide",
  description:
    "Agar aapko loan settlement karwana hai toh janein Reserve Bank of India (RBI) OTS guidelines, advocate-led debt negotiation, recovery agent protection, aur authentic No Dues Certificate lene ka certified legal process.",
  keywords: [
    "loan settlement karwana hai",
    "loan settlement kaise kare",
    "bank loan settlement process in hindi",
    "rbi loan settlement guidelines 2026",
    "personal loan settlement karwana hai",
    "credit card settlement karwana hai",
    "advocate for loan settlement india",
    "stop recovery agent harassment legally",
    "one time settlement legal advice",
    "transparent fixed legal debt advisory india",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Loan Settlement Karwana Hai? Complete Legal Process & RBI OTS Guide",
    description:
      "Agar aapko loan settlement karwana hai toh janein Reserve Bank of India (RBI) OTS guidelines, advocate-led debt negotiation, recovery agent protection, aur authentic No Dues Certificate lene ka certified legal process.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Loan Settlement Karwana Hai – Complete Legal Process & RBI OTS Guide Infographic",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Settlement Karwana Hai? Complete Legal Process & RBI OTS Guide",
    description:
      "Agar aapko loan settlement karwana hai toh janein Reserve Bank of India (RBI) OTS guidelines, advocate-led debt negotiation, recovery agent protection, aur authentic No Dues Certificate lene ka certified legal process.",
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

export default function LoanSettlementKarwanaHaiPage() {
  return <LoanSettlementKarwanaHaiClient />;
}
