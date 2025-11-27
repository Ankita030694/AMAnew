import TelanganaBankingClient from "./TelanganaBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Telangana | NBFC & Fintech Legal Experts",
  description:
    "Expert legal services for Banking, Finance, and NBFC registration in Telangana. We assist with RBI compliance, Fintech regulations, and Money Lending licenses in Hyderabad and T-Hub.",
  alternates: {
    canonical: "https://amalegalsolutions.com/services/banking-and-finance/telangana",
  },
  openGraph: {
    title: "Banking and Finance Services in Telangana | NBFC & Fintech Legal Experts",
    description:
      "Expert legal services for Banking, Finance, and NBFC registration in Telangana. We assist with RBI compliance, Fintech regulations, and Money Lending licenses in Hyderabad and T-Hub.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/telangana",
    type: "website",
    images: [
      {
        url: "/services/banking-finance-telangana.png",
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Telangana",
      },
    ],
  },
};

export default function Page() {
  return <TelanganaBankingClient />;
}
