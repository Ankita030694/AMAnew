import type { Metadata } from "next";
import SettleLoansAfterFailedDebtConsolidationClient from "./SettleLoansAfterFailedDebtConsolidationClient";

const PAGE_URL =
  "https://www.amalegalsolutions.com/how-to-settle-loans-after-a-failed-debt-consolidation-plan";
const OG_IMAGE =
  "/images/og/how-to-settle-loans-after-a-failed-debt-consolidation-plan.png";

export const metadata: Metadata = {
  title:
    "How to Settle Loans After a Failed Debt Consolidation Plan | AMA Legal Solutions",
  description:
    "Did your debt consolidation loan or balance transfer fail? Learn how to legally settle multiple loans individually under RBI compromise settlement norms, halt recovery agent harassment, defend against legal notices, and secure 40%–75% waivers with authentic No Dues Certificates.",
  keywords: [
    "how to settle loans after a failed debt consolidation plan",
    "failed debt consolidation what to do",
    "settle loans after balance transfer default",
    "debt management plan failed legal settlement",
    "rbi compromise settlement after consolidation failure",
    "multiple loan default one time settlement",
    "stop recovery agents after failed consolidation",
    "advocate for loan settlement india",
    "personal loan settlement lawyer",
    "amalegalsolutions debt resolution",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "How to Settle Loans After a Failed Debt Consolidation Plan | AMA Legal Solutions",
    description:
      "When debt consolidation fails, multiple EMIs and compounding interest create an immediate legal crisis. Learn the step-by-step advocate-led strategy to settle each loan for 40%–75% less under RBI guidelines.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "How to Settle Loans After a Failed Debt Consolidation Plan – AMA Legal Solutions Infographic",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Settle Loans After a Failed Debt Consolidation Plan | AMA Legal Solutions",
    description:
      "Comprehensive legal guide to negotiate One Time Settlements (OTS) after a debt consolidation loan fails. Expert advice by Advocate Anuj Anand Malik.",
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

export default function SettleLoansAfterFailedDebtConsolidationPage() {
  return <SettleLoansAfterFailedDebtConsolidationClient />;
}
