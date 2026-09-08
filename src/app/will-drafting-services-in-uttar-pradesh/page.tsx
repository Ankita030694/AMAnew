import type { Metadata } from "next";
import WillDraftingUttarPradeshClient from "./WillDraftingUttarPradeshClient";

const PAGE_URL = "https://www.amalegalsolutions.com/will-drafting-services-in-uttar-pradesh";
const OG_IMAGE = "/images/og/will-drafting-services-in-uttar-pradesh.png";

export const metadata: Metadata = {
  title: "Will Drafting Services in Uttar Pradesh: Top Estate & Succession Lawyers | AMA Legal Solutions",
  description:
    "Expert will drafting services in Uttar Pradesh by senior High Court advocates. Secure your family estate, NOIDA, GNIDA, YEIDA, LDA properties, and agricultural Bhumidhari land with court-admissible testamentary drafting.",
  keywords: [
    "will drafting services in uttar pradesh",
    "will drafting services uttar pradesh",
    "will drafting lawyer uttar pradesh",
    "estate planning lawyers uttar pradesh",
    "will registration sub registrar uttar pradesh",
    "noida authority property will transfer",
    "yeida will transfer protocol",
    "up revenue code will drafting bhumidhari",
    "up bhulekh will mutation",
    "succession advocate allahabad high court",
    "nri will drafting uttar pradesh",
    "lucknow development authority will mutation",
    "ama legal solutions will drafting uttar pradesh",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Will Drafting Services in Uttar Pradesh: Top Estate & Succession Lawyers | AMA Legal Solutions",
    description:
      "Protect your estate with premier will drafting services in Uttar Pradesh. Customized testamentary structuring, NOIDA/YEIDA/LDA property transfer, Bhumidhari revenue mutation compliance, industrial & NRI succession safeguards, and IGRSUP Sub-Registrar registration by senior advocates.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Will Drafting Services in Uttar Pradesh - Expert Estate Planning & Succession Legal Advisory by AMA Legal Solutions",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Will Drafting Services in Uttar Pradesh: Top Estate & Succession Lawyers",
    description:
      "Draft a legally binding, dispute-proof will in Uttar Pradesh with senior High Court advocates. Avoid probate delays, protect NOIDA, GNIDA, YEIDA, LDA, and agricultural Bhumidhari land holdings, and secure family estates.",
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

export default function WillDraftingUttarPradeshPage() {
  return <WillDraftingUttarPradeshClient />;
}
