import type { Metadata } from "next";
import SettleLoansRepaymentCapacityClient from "./SettleLoansRepaymentCapacityClient";

const PAGE_URL =
  "https://www.amalegalsolutions.com/settle-loans-when-your-monthly-debt-payments-cross-your-repayment-capacity";
const OG_IMAGE =
  "/images/og/settle-loans-when-your-monthly-debt-payments-cross-your-repayment-capacity.png";

export const metadata: Metadata = {
  title:
    "Settle Loans When Monthly Debt Payments Cross Repayment Capacity | AMA Legal Solutions",
  description:
    "Drowning in EMIs exceeding your income? Learn how to legally settle loans under RBI compromise settlement frameworks, stop recovery agent harassment, defend against Section 138/25 notices, and secure 40%–75% waivers with authentic No Dues Certificates.",
  keywords: [
    "settle loans when your monthly debt payments cross your repayment capacity",
    "emi exceeds income debt settlement",
    "how to settle loans when unable to pay emi",
    "rbi compromise settlement guidelines",
    "personal loan debt settlement india",
    "stop recovery harassment legal notice",
    "one time settlement scheme personal loan",
    "debt to income ratio crisis solution",
    "section 138 legal defense loan default",
    "advocate for loan settlement india",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "Settle Loans When Monthly Debt Payments Cross Repayment Capacity | AMA Legal Solutions",
    description:
      "Legal guide for borrowers whose debt obligations exceed monthly income. Learn RBI OTS compromise rules, anti-harassment protections, and advocate-led negotiation strategies for 40%–75% waivers.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Settle Loans When Monthly Debt Payments Cross Repayment Capacity – AMA Legal Solutions Infographic",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Settle Loans When Monthly Debt Payments Cross Repayment Capacity | AMA Legal Solutions",
    description:
      "Comprehensive legal guide to negotiate One Time Settlements (OTS) when debt obligations cross repayment capacity. Expert advice by Advocate Anuj Anand Malik.",
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

export default function SettleLoansRepaymentCapacityPage() {
  return <SettleLoansRepaymentCapacityClient />;
}
