import React from "react";
import PunjabBankingClient from "./PunjabBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Punjab | AMA Legal Solutions",
  description:
    "Expert legal consultancy for banking and finance in Punjab. NBFC registration in Ludhiana, agricultural loans, and NRI financial services.",
  openGraph: {
    title: "Banking and Finance Services in Punjab | AMA Legal Solutions",
    description:
      "Expert legal consultancy for banking and finance in Punjab. NBFC registration in Ludhiana, agricultural loans, and NRI financial services.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/punjab",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
  },
};

export default function PunjabBankingPage() {
  return <PunjabBankingClient />;
}
