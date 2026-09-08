import type { Metadata } from "next";
import WillDraftingHaryanaClient from "./WillDraftingHaryanaClient";

const PAGE_URL = "https://www.amalegalsolutions.com/will-drafting-services-in-haryana";
const OG_IMAGE = "/images/og/will-drafting-services-in-haryana.png";

export const metadata: Metadata = {
  title: "Will Drafting Services in Haryana: Top Estate & Succession Lawyers | AMA Legal Solutions",
  description:
    "Expert will drafting services in Haryana by senior High Court advocates. Secure your family's estate with dispute-proof testamentary drafting compliant with the Indian Succession Act, HSVP guidelines, and Jamabandi mutation rules.",
  keywords: [
    "will drafting services in haryana",
    "will drafting services haryana",
    "will drafting lawyer haryana",
    "estate planning lawyers haryana",
    "will registration sub registrar haryana",
    "succession advocate punjab and haryana high court",
    "hsvp will transfer rules",
    "jamabandi will mutation haryana",
    "agricultural land will drafting haryana",
    "ama legal solutions will drafting haryana",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Will Drafting Services in Haryana: Top Estate & Succession Lawyers | AMA Legal Solutions",
    description:
      "Protect your estate with premier will drafting services in Haryana. Customized testamentary structuring, HSVP plot transfer, Jamabandi revenue mutation compliance, and Sub-Registrar registration by senior advocates.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Will Drafting Services in Haryana - Expert Estate Planning & Succession Legal Advisory by AMA Legal Solutions",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Will Drafting Services in Haryana: Top Estate & Succession Lawyers",
    description:
      "Draft a legally binding, dispute-proof will in Haryana with senior advocates. Avoid probate delays, protect HSVP and agricultural land holdings, and ensure seamless succession.",
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

export default function WillDraftingHaryanaPage() {
  return <WillDraftingHaryanaClient />;
}
