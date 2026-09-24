import type { Metadata } from "next";
import Section25PssaVsSection138NiActLoanRecoveryClient from "./Section25PssaVsSection138NiActLoanRecoveryClient";

const PAGE_URL = "https://www.amalegalsolutions.com/section-25-pssa-vs-section-138-ni-act-loan-recovery";
const OG_IMAGE = "/images/og/section-25-pssa-vs-section-138-ni-act-loan-recovery.png";

export const metadata: Metadata = {
  title: "Section 25 PSSA vs Section 138 NI Act: Loan Recovery Legal Playbook",
  description:
    "Comprehensive statutory and judicial comparison between Section 25 PSSA (electronic NACH / e-Mandate dishonour) and Section 138 NI Act (cheque bounce) for loan recovery by NBFCs, banks, and fintech lenders.",
  keywords: [
    "section 25 pssa vs section 138 ni act loan recovery",
    "section 25 payment and settlement systems act",
    "section 138 negotiable instruments act",
    "nach bounce legal notice format",
    "cheque bounce vs nach bounce legal difference",
    "section 25 pssa territorial jurisdiction",
    "section 143a interim compensation pssa",
    "nbfc loan recovery legal notice",
    "section 63 bsa nach bounce evidence",
    "e-mandate bounce criminal complaint",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Section 25 PSSA vs Section 138 NI Act: Loan Recovery Legal Playbook",
    description:
      "Comprehensive statutory and judicial comparison between Section 25 PSSA (electronic NACH / e-Mandate dishonour) and Section 138 NI Act (cheque bounce) for loan recovery by NBFCs, banks, and fintech lenders.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Section 25 PSSA vs Section 138 NI Act Loan Recovery Comparison - AMA Legal Solutions",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Section 25 PSSA vs Section 138 NI Act: Loan Recovery Legal Playbook",
    description:
      "Comprehensive statutory and judicial comparison between Section 25 PSSA (electronic NACH / e-Mandate dishonour) and Section 138 NI Act (cheque bounce) for loan recovery by NBFCs, banks, and fintech lenders.",
    images: [OG_IMAGE],
    site: "@AMALegalSol",
    creator: "@AnujAnandMalik",
  },
  authors: [{ name: "Anuj Anand Malik", url: "/author/anuj-anand-malik" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Section25PssaVsSection138NiActLoanRecoveryPage() {
  return <Section25PssaVsSection138NiActLoanRecoveryClient />;
}
