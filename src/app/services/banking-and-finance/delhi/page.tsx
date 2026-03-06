import DelhiBankingClient from "./DelhiBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Delhi | NBFC & Fintech Legal Experts",
  description:
    "Expert legal services for Banking, Finance, and NBFC registration in Delhi. We assist with RBI compliance, Fintech regulations, and Money Lending licenses in New Delhi and NCR.",
  alternates: {
    canonical: "https://www.amalegalsolutions.com/services/banking-and-finance/delhi",
  },
  openGraph: {
    title: "Banking and Finance Services in Delhi | NBFC & Fintech Legal Experts",
    description:
      "Expert legal services for Banking, Finance, and NBFC registration in Delhi. We assist with RBI compliance, Fintech regulations, and Money Lending licenses in New Delhi and NCR.",
    url: "https://www.amalegalsolutions.com/services/banking-and-finance/delhi",
    type: "website",
    images: [
      {
        url: "/services/banking-finance-delhi.png",
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Delhi",
      },
    ],
  },
};

export default function Page() {
  return <DelhiBankingClient />;
}
