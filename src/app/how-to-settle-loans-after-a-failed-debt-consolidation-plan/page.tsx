import type { Metadata } from "next";
import SettleLoansAfterFailedDebtConsolidationClient from "./SettleLoansAfterFailedDebtConsolidationClient";

const PAGE_URL =
  "https://www.amalegalsolutions.com/how-to-settle-loans-after-a-failed-debt-consolidation-plan";
const OG_IMAGE =
  "/images/og/how-to-settle-loans-after-a-failed-debt-consolidation-plan.png";

export const metadata: Metadata = {
  title: "Settle Loans After Failed Debt Consolidation | AMA Legal",
  description:
    "Failed debt consolidation? Legally settle multiple loans under RBI compromise norms, stop agent harassment, and secure 40%-75% waivers with authentic NDCs.",
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
    title: "Settle Loans After Failed Debt Consolidation | AMA Legal",
    description:
      "Failed debt consolidation? Legally settle multiple loans under RBI compromise norms, stop agent harassment, and secure 40%-75% waivers with authentic NDCs.",
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
    title: "Settle Loans After Failed Debt Consolidation | AMA Legal",
    description:
      "Failed debt consolidation? Legally settle multiple loans under RBI compromise norms, stop agent harassment, and secure 40%-75% waivers with authentic NDCs.",
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
