import type { Metadata } from "next";
import HowToFileAComplaintAgainstBankNbfcInRbiClient from "./HowToFileAComplaintAgainstBankNbfcInRbiClient";

const PAGE_URL =
  "https://www.amalegalsolutions.com/how-to-file-a-complaint-against-bank-nbfc-in-rbi";
const OG_IMAGE =
  "/images/og/how-to-file-a-complaint-against-bank-nbfc-in-rbi.png";

export const metadata: Metadata = {
  title:
    "How to File a Complaint Against a Bank or an NBFC in RBI: Legal Guide & CMS Procedure | AMA Legal Solutions",
  description:
    "Authoritative legal guide on how to file a complaint against a bank or an NBFC in RBI under the Integrated Ombudsman Scheme 2021. Learn mandatory 30-day pre-complaint notice protocols, CMS portal escalation, recovery harassment defense, and advocate-led fixed advisory.",
  keywords: [
    "how to file a complaint against a bank or an nbfc in rbi",
    "how to file complaint against bank in rbi ombudsman",
    "rbi complaint against nbfc online procedure",
    "rbi integrated ombudsman scheme 2021",
    "rbi cms portal complaint filing step by step",
    "legal notice to bank principal nodal officer",
    "complaint against recovery agent harassment rbi",
    "rbi ombudsman compensation clause 15",
    "advocate for rbi banking grievance representation",
    "transparent fixed legal advisory banking ombudsman",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "How to File a Complaint Against a Bank or an NBFC in RBI: Legal Guide & CMS Procedure | AMA Legal Solutions",
    description:
      "Authoritative legal guide on how to file a complaint against a bank or an NBFC in RBI under the Integrated Ombudsman Scheme 2021. Learn mandatory 30-day pre-complaint notice protocols, CMS portal escalation, recovery harassment defense, and advocate-led fixed advisory.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "How to File a Complaint Against a Bank or an NBFC in RBI – AMA Legal Solutions Infographic",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to File a Complaint Against a Bank or an NBFC in RBI: Legal Guide & CMS Procedure | AMA Legal Solutions",
    description:
      "Authoritative legal guide on how to file a complaint against a bank or an NBFC in RBI under the Integrated Ombudsman Scheme 2021. Learn mandatory 30-day pre-complaint notice protocols, CMS portal escalation, recovery harassment defense, and advocate-led fixed advisory.",
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

export default function HowToFileAComplaintAgainstBankNbfcInRbiPage() {
  return <HowToFileAComplaintAgainstBankNbfcInRbiClient />;
}
