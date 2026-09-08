import type { Metadata } from "next";
import WillDraftingServicesInGurugramClient from "./WillDraftingServicesInGurugramClient";

const PAGE_URL = "https://www.amalegalsolutions.com/will-drafting-services-in-gurugram";
const OG_IMAGE = "/images/og/will-drafting-services-in-gurugram.png";

export const metadata: Metadata = {
  title: "Will Drafting Services in Gurugram: Top Estate & Succession Lawyers | AMA Legal Solutions",
  description:
    "Expert will drafting services in Gurugram by senior High Court advocates. Secure your family's assets with court-admissible, dispute-proof testamentary drafting compliant with the Indian Succession Act, 1925.",
  keywords: [
    "will drafting services",
    "will drafting services in gurugram",
    "will drafting lawyer gurgaon",
    "estate planning lawyers gurugram",
    "will registration sub registrar gurgaon",
    "succession advocate sector 57 gurgaon",
    "haryana will drafting rules",
    "property will registration gurugram",
    "ama legal solutions will drafting",
    "testamentary lawyer gurugram",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Will Drafting Services in Gurugram: Top Estate & Succession Lawyers | AMA Legal Solutions",
    description:
      "Protect your estate with premier will drafting services in Gurugram. Customized testamentary structuring, HSVP/MCG mutation compliance, and sub-registrar registration by senior advocates.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Will Drafting Services in Gurugram - Expert Estate Planning & Succession Legal Advisory by AMA Legal Solutions",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Will Drafting Services in Gurugram: Top Estate & Succession Lawyers",
    description:
      "Draft a legally binding, dispute-proof will in Gurugram with senior advocates. Avoid probate hurdles, protect real estate assets, and ensure seamless succession.",
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

export default function WillDraftingGurugramPage() {
  return <WillDraftingServicesInGurugramClient />;
}
