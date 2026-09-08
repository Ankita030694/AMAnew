import type { Metadata } from "next";
import WillDraftingServicesCheapClient from "./WillDraftingServicesCheapClient";

const PAGE_URL = "https://www.amalegalsolutions.com/will-drafting-services-cheap";
const OG_IMAGE = "/images/og/will-drafting-services-cheap.png";

export const metadata: Metadata = {
  title: "Will Drafting Cheap: Affordable & Legally Valid Services in India | AMA Legal Solutions",
  description:
    "Looking for affordable will drafting services in India without compromising legal validity? Get custom, court-admissible, advocate-drafted wills compliant with the Indian Succession Act, 1925. Consult Advocate Anuj Anand Malik.",
  keywords: [
    "will drafting cheap",
    "cheap will drafting services in india",
    "affordable will drafting online",
    "low cost will lawyer india",
    "court admissible will drafting cheap",
    "indian succession act will drafting",
    "cheap online will maker india",
    "ama legal solutions will drafting",
    "budget estate planning advocate",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Will Drafting Cheap: Affordable & Legally Valid Services in India | AMA Legal Solutions",
    description:
      "Secure your family's future with affordable, court-admissible will drafting services in India. Customized testamentary drafting by senior advocates under the Indian Succession Act, 1925.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Will Drafting Cheap - Affordable and Legally Valid Will Drafting Services in India by AMA Legal Solutions",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Will Drafting Cheap: Affordable & Legally Valid Services in India",
    description:
      "Draft a legally valid, dispute-proof will in India at accessible rates. Avoid boilerplate template traps with advocate-certified estate planning.",
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

export default function WillDraftingCheapPage() {
  return <WillDraftingServicesCheapClient />;
}
