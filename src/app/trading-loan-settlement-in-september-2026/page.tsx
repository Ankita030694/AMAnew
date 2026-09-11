import type { Metadata } from "next";
import TradingLoanSettlementInSeptember2026Client from "./TradingLoanSettlementInSeptember2026Client";

const PAGE_URL =
  "https://www.amalegalsolutions.com/trading-loan-settlement-in-september-2026";
const OG_IMAGE =
  "/images/og/trading-loan-settlement-in-september-2026.png";

export const metadata: Metadata = {
  title: "Trading Loan Settlement in September 2026 | AMA Legal",
  description:
    "Settle trading loans, margin funding shortfalls, and commercial trade credit in September 2026 under RBI compromise norms. Secure maximum waivers before Q2 closing with expert legal advisory.",
  keywords: [
    "trading loan settlement in september 2026",
    "margin funding debt settlement india",
    "commercial trade loan compromise legal advisory",
    "rbi compromise settlement trading loans 2026",
    "loan against securities shortfall settlement",
    "one time settlement commercial trading debt q2 2026",
    "advocate for trading loan settlement india",
    "drt debt recovery tribunal lawyer for traders",
    "sarfaesi section 13 notice defense trading business",
    "transparent fixed legal debt advisory india",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Trading Loan Settlement in September 2026 | AMA Legal",
    description:
      "Settle trading loans, margin funding shortfalls, and commercial trade credit in September 2026 under RBI compromise norms. Secure maximum waivers before Q2 closing with expert legal advisory.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Trading Loan Settlement in September 2026 – AMA Legal Solutions Infographic",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trading Loan Settlement in September 2026 | AMA Legal",
    description:
      "Settle trading loans, margin funding shortfalls, and commercial trade credit in September 2026 under RBI compromise norms. Secure maximum waivers before Q2 closing with expert legal advisory.",
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

export default function TradingLoanSettlementInSeptember2026Page() {
  return <TradingLoanSettlementInSeptember2026Client />;
}
