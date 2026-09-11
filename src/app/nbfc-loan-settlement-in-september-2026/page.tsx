import type { Metadata } from "next";
import NbfcLoanSettlementInSeptember2026Client from "./NbfcLoanSettlementInSeptember2026Client";

const PAGE_URL =
  "https://www.amalegalsolutions.com/nbfc-loan-settlement-in-september-2026";
const OG_IMAGE =
  "/images/og/nbfc-loan-settlement-in-september-2026.png";

export const metadata: Metadata = {
  title: "NBFC Loan Settlement in September 2026 | AMA Legal",
  description:
    "Settle NBFC personal, business, and digital app loans in September 2026 under RBI compromise norms. Secure maximum waivers before Q2 audit closing with expert legal advisory.",
  keywords: [
    "nbfc loan settlement in september 2026",
    "nbfc debt settlement india 2026",
    "non banking financial company loan compromise",
    "rbi compromise settlement nbfc loans 2026",
    "digital lending app loan settlement legal process",
    "one time settlement nbfc debt q2 2026",
    "advocate for nbfc loan settlement india",
    "stop nbfc recovery agent harassment legally",
    "section 138 ni act nbfc loan defense",
    "transparent fixed legal debt advisory india",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "NBFC Loan Settlement in September 2026 | AMA Legal",
    description:
      "Settle NBFC personal, business, and digital app loans in September 2026 under RBI compromise norms. Secure maximum waivers before Q2 audit closing with expert legal advisory.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "NBFC Loan Settlement in September 2026 – AMA Legal Solutions Infographic",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "NBFC Loan Settlement in September 2026 | AMA Legal",
    description:
      "Settle NBFC personal, business, and digital app loans in September 2026 under RBI compromise norms. Secure maximum waivers before Q2 audit closing with expert legal advisory.",
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

export default function NbfcLoanSettlementInSeptember2026Page() {
  return <NbfcLoanSettlementInSeptember2026Client />;
}
