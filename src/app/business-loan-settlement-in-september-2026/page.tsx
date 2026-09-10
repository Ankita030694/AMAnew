import type { Metadata } from "next";
import BusinessLoanSettlementInSeptember2026Client from "./BusinessLoanSettlementInSeptember2026Client";

const PAGE_URL =
  "https://www.amalegalsolutions.com/business-loan-settlement-in-september-2026";
const OG_IMAGE =
  "/images/og/business-loan-settlement-in-september-2026.png";

export const metadata: Metadata = {
  title: "Business Loan Settlement in September 2026 | AMA Legal",
  description:
    "Settle business loans in September 2026 under RBI compromise norms. Secure maximum commercial waivers before Q2 closing, resolve DRT & SARFAESI actions, and get authentic NDCs.",
  keywords: [
    "business loan settlement in september 2026",
    "commercial debt settlement legal advisory",
    "rbi compromise settlement business loan 2026",
    "one time settlement commercial loan q2 2026",
    "advocate for business loan settlement india",
    "drt debt recovery tribunal lawyer",
    "sarfaesi act section 13 notice defense",
    "msme business loan debt restructuring",
    "no dues certificate commercial loan",
    "transparent fixed legal debt advisory india",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Business Loan Settlement in September 2026 | AMA Legal",
    description:
      "Settle business loans in September 2026 under RBI compromise norms. Secure maximum commercial waivers before Q2 closing, resolve DRT & SARFAESI actions, and get authentic NDCs.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Business Loan Settlement in September 2026 – AMA Legal Solutions Infographic",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Loan Settlement in September 2026 | AMA Legal",
    description:
      "Settle business loans in September 2026 under RBI compromise norms. Secure maximum commercial waivers before Q2 closing, resolve DRT & SARFAESI actions, and get authentic NDCs.",
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

export default function BusinessLoanSettlementInSeptember2026Page() {
  return <BusinessLoanSettlementInSeptember2026Client />;
}
