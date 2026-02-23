import React from "react";
import west-bengalBankingClient from "./west-bengalBankingClient";

export const metadata = {
  title: "Banking and Finance Services in West Bengal | AMA Legal Solutions",
  description:
    "Expert legal consultancy for banking and finance in West Bengal. NBFC registration, Microfinance, and Money Lending License services in Kolkata.",
  openGraph: {
    title: "Banking and Finance Services in West Bengal | AMA Legal Solutions",
    description:
      "Expert legal consultancy for banking and finance in West Bengal. NBFC registration, Microfinance, and Money Lending License services in Kolkata.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/west-bengal",
    siteName: "AMA Legal Solutions",
    images: [
      {
        url: "https://amalegalsolutions.com/services/banking-finance-west-bengal.png",
        width: 800,
        height: 600,
        alt: "Banking and Finance Services in West Bengal",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  alternates: {
    canonical: "https://amalegalsolutions.com/services/banking-and-finance/west-bengal",
  },
};

export default function west-bengalBankingPage() {
  return <west-bengalBankingClient />;
}
