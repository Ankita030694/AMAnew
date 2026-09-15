import type { Metadata } from "next";
import WrittenOffCreditReportClient from "./WrittenOffCreditReportClient";

const PAGE_URL =
  "https://www.amalegalsolutions.com/how-to-remove-a-written-off-status-from-a-credit-report";
const OG_IMAGE = "/images/og/how-to-remove-a-written-off-status-from-a-credit-report.jpg";

export const metadata: Metadata = {
  title:
    "Remove Written-Off Status from Credit Report | AMA Legal",
  description:
    "Learn legal steps to remove or rectify a written-off status on your CIBIL report. Expert guide on dispute filings, RBI complaints, and bank negotiations.",
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
      "Remove Written-Off Status from Credit Report | AMA Legal",
    description:
      "Learn legal steps to remove or rectify a written-off status on your CIBIL report. Expert guide on dispute filings, RBI complaints, and bank negotiations.",
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
      "Remove Written-Off Status from Credit Report | AMA Legal",
    description:
      "Learn legal steps to remove or rectify a written-off status on your CIBIL report. Expert guide on dispute filings, RBI complaints, and bank negotiations.",
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
