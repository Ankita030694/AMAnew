import MaharashtraBankingClient from "./MaharashtraBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Maharashtra | AMA Legal",
  description:
    "Expert legal services for Banking, Finance, and NBFC registration in Maharashtra. We assist with RBI compliance, Fintech regulations, and Money Lending.",
  alternates: {
    canonical: "https://www.amalegalsolutions.com/services/banking-and-finance/maharashtra",
  },
  openGraph: {
    title: "Banking and Finance Services in Maharashtra | AMA Legal",
    description:
    "Expert legal services for Banking, Finance, and NBFC registration in Maharashtra. We assist with RBI compliance, Fintech regulations, and Money Lending.",
    url: "https://www.amalegalsolutions.com/services/banking-and-finance/Maharashtra",
    type: "website",
    images: [
      {
        url: "/services/banking-finance.png",
        width: 1200,
        height: 630,
        alt: "Banking and Finance Services Maharashtra",
      },
    ],
  },
};

export default function MaharashtraBankingPage() {
  return <MaharashtraBankingClient />;
}
