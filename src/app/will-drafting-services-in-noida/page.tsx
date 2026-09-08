import type { Metadata } from "next";
import WillDraftingNoidaClient from "./WillDraftingNoidaClient";

const PAGE_URL = "https://www.amalegalsolutions.com/will-drafting-services-in-noida";
const OG_IMAGE = "/images/og/will-drafting-services-in-noida.png";

export const metadata: Metadata = {
  title: "Will Drafting Services in Noida: Top Estate & Succession Lawyers | AMA Legal Solutions",
  description:
    "Expert will drafting services in Noida by senior High Court advocates. Secure your family estate, NOIDA authority leasehold apartments, commercial plots, and UP Bhumidhari land with court-admissible testamentary drafting.",
  keywords: [
    "will drafting services in noida",
    "will drafting services noida",
    "will drafting lawyer noida",
    "estate planning lawyers noida",
    "will registration sub registrar noida",
    "noida authority property will transfer",
    "transfer of memorandum noida will",
    "sector 33 sub registrar noida will registration",
    "greater noida will drafting lawyer",
    "nri will drafting noida",
    "up revenue code will mutation noida",
    "succession advocate noida high court",
    "ama legal solutions will drafting noida",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Will Drafting Services in Noida: Top Estate & Succession Lawyers | AMA Legal Solutions",
    description:
      "Protect your estate with premier will drafting services in Noida. Customized testamentary structuring, NOIDA Authority leasehold property transfers, high-rise flat succession, UP Revenue Code compliance, and Sector 33 Sub-Registrar registration by senior advocates.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Will Drafting Services in Noida - Expert Estate Planning & Succession Legal Advisory by AMA Legal Solutions",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Will Drafting Services in Noida: Top Estate & Succession Lawyers",
    description:
      "Draft a legally binding, dispute-proof will in Noida with senior High Court advocates. Avoid probate delays, protect NOIDA authority flats, commercial units, and ancestral landholdings, and secure family estates.",
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

export default function WillDraftingNoidaPage() {
  return <WillDraftingNoidaClient />;
}
