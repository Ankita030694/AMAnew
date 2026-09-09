import type { Metadata } from "next";
import PersonalLoanSettlementInSeptember2026Client from "./PersonalLoanSettlementInSeptember2026Client";

const PAGE_URL =
  "https://www.amalegalsolutions.com/personal-loan-settlement-in-september-2026";
const OG_IMAGE =
  "/images/og/personal-loan-settlement-in-september-2026.png";

export const metadata: Metadata = {
  title: "Personal Loan Settlement in September 2026 | AMA Legal",
  description:
    "Settle personal loans in September 2026 under RBI compromise norms. Secure maximum waivers before Q2 balance-sheet closing, stop recovery harassment, and get authentic NDCs.",
  keywords: [
    "personal loan settlement in september 2026",
    "personal loan settlement legal advisory",
    "rbi compromise settlement september 2026",
    "one time settlement personal loan 2026",
    "advocate for loan settlement india",
    "stop recovery agent harassment legally",
    "section 138 cheque bounce personal loan settlement",
    "bank quarter end ots settlement september",
    "no dues certificate personal loan",
    "transparent legal debt advisory india",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Personal Loan Settlement in September 2026 | AMA Legal",
    description:
      "Settle personal loans in September 2026 under RBI compromise norms. Secure maximum waivers before Q2 balance-sheet closing, stop recovery harassment, and get authentic NDCs.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Personal Loan Settlement in September 2026 – AMA Legal Solutions Infographic",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan Settlement in September 2026 | AMA Legal",
    description:
      "Settle personal loans in September 2026 under RBI compromise norms. Secure maximum waivers before Q2 balance-sheet closing, stop recovery harassment, and get authentic NDCs.",
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

export default function PersonalLoanSettlementInSeptember2026Page() {
  return <PersonalLoanSettlementInSeptember2026Client />;
}
