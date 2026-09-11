import type { Metadata } from "next";
import WillSalaryAccountBeAutoDebitedClient from "./WillSalaryAccountBeAutoDebitedClient";

const PAGE_URL =
  "https://www.amalegalsolutions.com/will-my-salary-account-be-auto-debited-if-loan-settlement";
const OG_IMAGE =
  "/images/og/will-my-salary-account-be-auto-debited-if-loan-settlement.png";

export const metadata: Metadata = {
  title:
    "Will My Salary Account Be Auto Debited If I Go for Loan Settlement? Freeze & Lien Legal Guide | AMA Legal Solutions",
  description:
    "Critical legal guide: Will your salary account be auto debited if you go for loan settlement, or can it be marked freeze or lien? Learn Section 171 Banker's Lien, Section 60 CPC salary exemptions, NACH revocation, and advocate-led protection.",
  keywords: [
    "will my salary account be auto debited if i go for loan settlement or can it be marked freeze or lein",
    "can bank freeze salary account for loan settlement",
    "bankers lien on salary account section 171 indian contract act",
    "nach auto debit cancellation during loan settlement",
    "can bank put lien on salary account in another bank",
    "section 60 cpc salary exemption from attachment",
    "stop emi auto debit from salary account legally",
    "bank freeze salary account without court order illegal",
    "advocate for salary account lien removal",
    "transparent fixed legal advisory loan settlement",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "Will My Salary Account Be Auto Debited If I Go for Loan Settlement? Freeze & Lien Legal Guide | AMA Legal Solutions",
    description:
      "Critical legal guide: Will your salary account be auto debited if you go for loan settlement, or can it be marked freeze or lien? Learn Section 171 Banker's Lien, Section 60 CPC salary exemptions, NACH revocation, and advocate-led protection.",
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Will My Salary Account Be Auto Debited If Loan Settlement? Freeze and Lien Legal Guide – AMA Legal Solutions",
      },
    ],
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Will My Salary Account Be Auto Debited If I Go for Loan Settlement? Freeze & Lien Legal Guide | AMA Legal Solutions",
    description:
      "Critical legal guide: Will your salary account be auto debited if you go for loan settlement, or can it be marked freeze or lien? Learn Section 171 Banker's Lien, Section 60 CPC salary exemptions, NACH revocation, and advocate-led protection.",
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
  return <WillSalaryAccountBeAutoDebitedClient />;
}
