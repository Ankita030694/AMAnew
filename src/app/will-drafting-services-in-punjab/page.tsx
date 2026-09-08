import type { Metadata } from "next";
import WillDraftingPunjabClient from "./WillDraftingPunjabClient";

const PAGE_URL = "https://www.amalegalsolutions.com/will-drafting-services-in-punjab";
const OG_IMAGE = "/images/og/will-drafting-services-in-punjab.png";

export const metadata: Metadata = {
  title: "Will Drafting Services in Punjab: Top Estate & Succession Lawyers | AMA Legal Solutions",
  description:
    "Expert will drafting services in Punjab by senior High Court advocates. Protect your family's estate, GMADA/GLADA plots, NRI assets, and agricultural Jamabandi land with court-admissible, dispute-proof testamentary drafting.",
  keywords: [
    "will drafting services in punjab",
    "will drafting services punjab",
    "will drafting lawyer punjab",
    "estate planning lawyers punjab",
    "will registration sub registrar punjab",
    "nri will drafting punjab",
    "succession advocate punjab and haryana high court",
    "gmada will transfer rules",
    "jamabandi will mutation punjab",
    "agricultural land will drafting punjab",
    "ama legal solutions will drafting punjab",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Will Drafting Services in Punjab: Top Estate & Succession Lawyers | AMA Legal Solutions",
    description:
      "Protect your estate with premier will drafting services in Punjab. Customized testamentary structuring, GMADA/GLADA property transfer, Jamabandi revenue mutation compliance, NRI succession safeguards, and Sub-Registrar registration by senior advocates.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Will Drafting Services in Punjab - Expert Estate Planning & Succession Legal Advisory by AMA Legal Solutions",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Will Drafting Services in Punjab: Top Estate & Succession Lawyers",
    description:
      "Draft a legally binding, dispute-proof will in Punjab with senior High Court advocates. Avoid probate delays, protect GMADA, GLADA, and agricultural land holdings, and secure NRI estates.",
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

export default function WillDraftingPunjabPage() {
  return <WillDraftingPunjabClient />;
}
