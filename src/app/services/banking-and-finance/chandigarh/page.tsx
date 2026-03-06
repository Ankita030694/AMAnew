import React from "react";
import ChandigarhBankingClient from "./ChandigarhBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Chandigarh | AMA Legal Solutions",
  description:
    "Expert legal consultancy for banking and finance in Chandigarh. NBFC registration, Wealth Management compliance, and financial services in the Tri-City area.",
  openGraph: {
    title: "Banking and Finance Services in Chandigarh | AMA Legal Solutions",
    description:
      "Expert legal consultancy for banking and finance in Chandigarh. NBFC registration, Wealth Management compliance, and financial services in the Tri-City area.",
    url: "https://www.amalegalsolutions.com/services/banking-and-finance/chandigarh",
    siteName: "AMA Legal Solutions",
    images: [
      {
        url: "https://www.amalegalsolutions.com/services/banking-finance-chandigarh.png",
        width: 800,
        height: 600,
        alt: "Banking and Finance Services in Chandigarh",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  alternates: {
    canonical: "https://www.amalegalsolutions.com/services/banking-and-finance/chandigarh",
  },
};

export default function ChandigarhBankingPage() {
  return <ChandigarhBankingClient />;
}
