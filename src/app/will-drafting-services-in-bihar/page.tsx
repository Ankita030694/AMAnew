import type { Metadata } from "next";
import WillDraftingServicesInBiharClient from "./WillDraftingServicesInBiharClient";

const PAGE_URL = "https://www.amalegalsolutions.com/will-drafting-services-in-bihar";
const OG_IMAGE = "/images/og/will-drafting-services-in-bihar.png";

export const metadata: Metadata = {
  title: "Will Drafting Services in Bihar: Top Estate & Succession Lawyers | AMA Legal Solutions",
  description:
    "Expert will drafting services in Bihar by senior High Court advocates. Secure your family estate, Patna urban properties, BIADA industrial assets, and agricultural Raiyati land with court-admissible testamentary drafting.",
  keywords: [
    "will drafting services in bihar",
    "will drafting services bihar",
    "will drafting lawyer bihar",
    "estate planning lawyers bihar",
    "will registration sub registrar bihar",
    "patna will drafting lawyer",
    "bihar bhumi dakhil kharij will mutation",
    "bihar land mutation act 2011 will",
    "succession advocate patna high court",
    "nri will drafting bihar",
    "patna municipal corporation property will transfer",
    "e-nibandhan bihar will registration",
    "raiyati land will drafting bihar",
    "ama legal solutions will drafting bihar",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Will Drafting Services in Bihar: Top Estate & Succession Lawyers | AMA Legal Solutions",
    description:
      "Protect your estate with premier will drafting services in Bihar. Customized testamentary structuring, Patna & Muzaffarpur real estate succession, BIADA industrial lease transfers, Raiyati land mutation under Bihar Land Mutation Act, and Sub-Registrar registration by senior advocates.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Will Drafting Services in Bihar - Expert Estate Planning & Succession Legal Advisory by AMA Legal Solutions",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Will Drafting Services in Bihar: Top Estate & Succession Lawyers",
    description:
      "Draft a legally binding, dispute-proof will in Bihar with senior High Court advocates. Avoid probate delays, protect Patna urban assets, BIADA plots, and agricultural Raiyati land, and secure family estates.",
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

export default function WillDraftingBiharPage() {
  return <WillDraftingServicesInBiharClient />;
}
