import type { Metadata } from "next";
import WrittenOffCreditReportClient from "./WrittenOffCreditReportClient";

const PAGE_URL =
  "https://www.amalegalsolutions.com/how-to-remove-a-written-off-status-from-a-credit-report";
const OG_IMAGE = "/images/og/how-to-remove-a-written-off-status-from-a-credit-report.jpg";

export const metadata: Metadata = {
  title:
    "How to Remove a Written-Off Status from a Credit Report | AMA Legal Solutions",
  description:
    "A written-off status on your CIBIL report can block loans for 7 years. Learn the exact legal steps — dispute filings, RBI Ombudsman complaints, and bank negotiation strategies — to remove or rectify a written-off entry. Expert guidance by Advocate Anuj Anand Malik.",
  keywords: [
    "how to remove a written off status from a credit report",
    "written off cibil report removal",
    "remove written off from credit report india",
    "cibil written off dispute",
    "rbi guidelines written off loan",
    "written off vs settled cibil",
    "how to fix written off loan",
    "credit report dispute india",
    "loan written off removal lawyer",
    "amalegalsolutions credit repair",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "How to Remove a Written-Off Status from a Credit Report | AMA Legal Solutions",
    description:
      "Discover the step-by-step legal process to challenge, dispute, and remove a written-off entry from your CIBIL or credit report. Authored by Advocate Anuj Anand Malik.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "How to Remove a Written-Off Status from a Credit Report – AMA Legal Solutions Infographic",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Remove a Written-Off Status from a Credit Report | AMA Legal Solutions",
    description:
      "Step-by-step legal guide to dispute and remove a written-off entry from your CIBIL report. Expert legal advice from AMA Legal Solutions.",
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

export default function WrittenOffCreditReportPage() {
  return <WrittenOffCreditReportClient />;
}
