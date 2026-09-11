import type { Metadata } from "next";
import HowToFileAComplaintAgainstBankNbfcInNCHClient from "./HowToFileAComplaintAgainstBankNbfcInNCHClient";

const PAGE_URL =
  "https://www.amalegalsolutions.com/how-to-file-a-complaint-against-bank-nbfc-in-NCH";
const OG_IMAGE =
  "/images/og/how-to-file-a-complaint-against-bank-nbfc-in-NCH.png";

export const metadata: Metadata = {
  title:
    "How to File a Complaint Against a Bank or an NBFC in NCH: Legal Guide & Consumer Helpline Procedure | AMA Legal Solutions",
  description:
    "Comprehensive legal guide on how to file a complaint against a bank or an NBFC in NCH under the Consumer Protection Act, 2019. Learn INGRAM portal escalation, 1915 helpline protocol, recovery harassment defense, and advocate-led fixed advisory.",
  keywords: [
    "how to file a complaint against a bank or an nbfc in NCH",
    "how to file complaint against bank in national consumer helpline",
    "nch complaint against nbfc online procedure",
    "consumer protection act 2019 banking deficiency",
    "national consumer helpline ingram portal complaint",
    "legal notice to bank before nch complaint",
    "complaint against recovery agent harassment nch",
    "e-daakhil consumer commission escalation bank nbfc",
    "advocate for nch consumer grievance representation",
    "transparent fixed legal advisory consumer court banking",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "How to File a Complaint Against a Bank or an NBFC in NCH: Legal Guide & Consumer Helpline Procedure | AMA Legal Solutions",
    description:
      "Comprehensive legal guide on how to file a complaint against a bank or an NBFC in NCH under the Consumer Protection Act, 2019. Learn INGRAM portal escalation, 1915 helpline protocol, recovery harassment defense, and advocate-led fixed advisory.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "How to File a Complaint Against a Bank or an NBFC in NCH – AMA Legal Solutions Infographic",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to File a Complaint Against a Bank or an NBFC in NCH: Legal Guide & Consumer Helpline Procedure | AMA Legal Solutions",
    description:
      "Comprehensive legal guide on how to file a complaint against a bank or an NBFC in NCH under the Consumer Protection Act, 2019. Learn INGRAM portal escalation, 1915 helpline protocol, recovery harassment defense, and advocate-led fixed advisory.",
    images: [OG_IMAGE],
    site: "@AMALegalSol",
    creator: "@AnujAnandMalik",
  },
  authors: [{ name: "Anuj Anand Malik", url: "/author/anuj-anand-malik" }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function Page() {
  return <HowToFileAComplaintAgainstBankNbfcInNCHClient />;
}
