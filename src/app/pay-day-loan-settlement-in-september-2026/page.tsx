import type { Metadata } from "next";
import PayDayLoanSettlementInSeptember2026Client from "./PayDayLoanSettlementInSeptember2026Client";

const PAGE_URL =
  "https://www.amalegalsolutions.com/pay-day-loan-settlement-in-september-2026";
const OG_IMAGE =
  "/images/og/pay-day-loan-settlement-in-september-2026.png";

export const metadata: Metadata = {
  title: "Pay Day Loan Settlement in September 2026 | AMA Legal",
  description:
    "Settle predatory payday loans, instant short-term app debt, and fintech credit in September 2026 under RBI compromise norms. Stop recovery harassment and secure authentic No Dues Certificates with expert legal advisory.",
  keywords: [
    "pay day loan settlement in september 2026",
    "payday loan debt settlement india",
    "instant loan app compromise settlement 2026",
    "rbi digital lending compromise guidelines",
    "settle short term payday loans legally",
    "stop payday loan recovery agent harassment",
    "section 25 nach mandate bounce payday loan defense",
    "one time settlement payday loan apps q2 2026",
    "advocate for payday loan settlement india",
    "transparent fixed legal debt advisory india",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Pay Day Loan Settlement in September 2026 | AMA Legal",
    description:
      "Settle predatory payday loans, instant short-term app debt, and fintech credit in September 2026 under RBI compromise norms. Stop recovery harassment and secure authentic No Dues Certificates with expert legal advisory.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Pay Day Loan Settlement in September 2026 – AMA Legal Solutions Infographic",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pay Day Loan Settlement in September 2026 | AMA Legal",
    description:
      "Settle predatory payday loans, instant short-term app debt, and fintech credit in September 2026 under RBI compromise norms. Stop recovery harassment and secure authentic No Dues Certificates with expert legal advisory.",
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

export default function PayDayLoanSettlementInSeptember2026Page() {
  return <PayDayLoanSettlementInSeptember2026Client />;
}
