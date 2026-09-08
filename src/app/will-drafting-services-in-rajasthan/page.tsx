import type { Metadata } from "next";
import WillDraftingRajasthanClient from "./WillDraftingRajasthanClient";

const PAGE_URL = "https://www.amalegalsolutions.com/will-drafting-services-in-rajasthan";
const OG_IMAGE = "/images/og/will-drafting-services-in-rajasthan.png";

export const metadata: Metadata = {
  title: "Will Drafting Services in Rajasthan: Top Estate & Succession Lawyers | AMA Legal Solutions",
  description:
    "Expert will drafting services in Rajasthan by senior High Court advocates. Protect your family's estate, JDA/UIT plots, Marwari & NRI assets, and agricultural Jamabandi land with court-admissible, dispute-proof testamentary drafting.",
  keywords: [
    "will drafting services in rajasthan",
    "will drafting services rajasthan",
    "will drafting lawyer rajasthan",
    "estate planning lawyers rajasthan",
    "will registration sub registrar rajasthan",
    "jda property will transfer",
    "rajasthan tenancy act will drafting",
    "jamabandi will mutation rajasthan",
    "succession advocate rajasthan high court",
    "nri will drafting rajasthan",
    "marwari family estate planning",
    "ama legal solutions will drafting rajasthan",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Will Drafting Services in Rajasthan: Top Estate & Succession Lawyers | AMA Legal Solutions",
    description:
      "Protect your estate with premier will drafting services in Rajasthan. Customized testamentary structuring, JDA/UIT property transfer, Jamabandi revenue mutation compliance, Marwari business & NRI succession safeguards, and Sub-Registrar registration by senior advocates.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Will Drafting Services in Rajasthan - Expert Estate Planning & Succession Legal Advisory by AMA Legal Solutions",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Will Drafting Services in Rajasthan: Top Estate & Succession Lawyers",
    description:
      "Draft a legally binding, dispute-proof will in Rajasthan with senior High Court advocates. Avoid probate delays, protect JDA, UIT, and agricultural Khatedari land holdings, and secure family estates.",
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

export default function WillDraftingRajasthanPage() {
  return <WillDraftingRajasthanClient />;
}
