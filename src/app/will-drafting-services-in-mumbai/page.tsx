import type { Metadata } from "next";
import WillDraftingMumbaiClient from "./WillDraftingMumbaiClient";

const PAGE_URL = "https://www.amalegalsolutions.com/will-drafting-services-in-mumbai";
const OG_IMAGE = "/images/og/will-drafting-services-in-mumbai.png";

export const metadata: Metadata = {
  title: "Will Drafting Services in Mumbai: Top Estate & Succession Lawyers | AMA Legal Solutions",
  description:
    "Expert will drafting services in Mumbai by senior High Court advocates. Secure family estates, Co-operative Housing Society (CHS) flats, commercial assets, and corporate equities with Bombay High Court probate-admissible drafting.",
  keywords: [
    "will drafting services in mumbai",
    "will drafting services mumbai",
    "will drafting lawyer mumbai",
    "estate planning lawyers mumbai",
    "will registration sub registrar mumbai",
    "bombay high court probate will",
    "cooperative housing society will transfer mumbai",
    "chs flat nomination vs will mumbai",
    "section 213 indian succession act mumbai probate",
    "south mumbai succession advocate",
    "bandra will drafting lawyer",
    "nri will drafting mumbai",
    "ama legal solutions will drafting mumbai",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Will Drafting Services in Mumbai: Top Estate & Succession Lawyers | AMA Legal Solutions",
    description:
      "Protect your estate with premier will drafting services in Mumbai. Customized testamentary structuring, Co-operative Housing Society (CHS) share transfers, Bombay High Court probate compliance, and Sub-Registrar registration by senior advocates.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Will Drafting Services in Mumbai - Expert Estate Planning & Succession Legal Advisory by AMA Legal Solutions",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Will Drafting Services in Mumbai: Top Estate & Succession Lawyers",
    description:
      "Draft a legally binding, dispute-proof will in Mumbai with senior High Court advocates. Comply with mandatory Bombay High Court probate rules, safeguard CHS flats, corporate equities, and family business estates.",
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

export default function WillDraftingMumbaiPage() {
  return <WillDraftingMumbaiClient />;
}
