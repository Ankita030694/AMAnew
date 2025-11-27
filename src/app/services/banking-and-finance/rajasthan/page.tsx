import React from "react";
import RajasthanBankingClient from "./RajasthanBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Rajasthan | AMA Legal Solutions",
  description:
    "Expert legal consultancy for banking and finance in Rajasthan. NBFC registration in Jaipur, tourism finance, and solar project lending compliance.",
  openGraph: {
    title: "Banking and Finance Services in Rajasthan | AMA Legal Solutions",
    description:
      "Expert legal consultancy for banking and finance in Rajasthan. NBFC registration in Jaipur, tourism finance, and solar project lending compliance.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/rajasthan",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
  },
};

export default function RajasthanBankingPage() {
  return <RajasthanBankingClient />;
}
