import type { Metadata } from "next";
import CreditCardSettlementInSeptember2026Client from "./CreditCardSettlementInSeptember2026Client";

const PAGE_URL =
  "https://www.amalegalsolutions.com/credit-card-settlement-in-september-2026";
const OG_IMAGE =
  "/images/og/credit-card-settlement-in-september-2026.png";

export const metadata: Metadata = {
  title: "Credit Card Settlement in September 2026 | AMA Legal",
  description:
    "Settle credit card debt in September 2026 under RBI compromise norms. Leverage Q2 bank balance sheet write-offs, stop collection agent harassment, and obtain official NDCs.",
  keywords: [
    "credit card settlement in september 2026",
    "credit card settlement legal advisory",
    "rbi credit card compromise settlement 2026",
    "one time settlement credit card september",
    "credit card debt settlement advocate india",
    "stop credit card recovery harassment legally",
    "section 138 credit card bounce settlement",
    "quarter end credit card ots waiver september 2026",
    "no dues certificate credit card settlement",
    "transparent fixed fee legal debt advisory india",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Credit Card Settlement in September 2026 | AMA Legal",
    description:
      "Settle credit card debt in September 2026 under RBI compromise norms. Leverage Q2 bank balance sheet write-offs, stop collection agent harassment, and obtain official NDCs.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Credit Card Settlement in September 2026 – AMA Legal Solutions Infographic",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Credit Card Settlement in September 2026 | AMA Legal",
    description:
      "Settle credit card debt in September 2026 under RBI compromise norms. Leverage Q2 bank balance sheet write-offs, stop collection agent harassment, and obtain official NDCs.",
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

export default function CreditCardSettlementInSeptember2026Page() {
  return <CreditCardSettlementInSeptember2026Client />;
}
