import React from "react";
import AndhraPradeshBankingClient from "./AndhraPradeshBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Andhra Pradesh | AMA Legal Solutions",
  description:
    "Expert legal consultancy for banking and finance in Andhra Pradesh. NBFC registration, Fintech compliance in Vizag, and agricultural finance services.",
  openGraph: {
    title: "Banking and Finance Services in Andhra Pradesh | AMA Legal Solutions",
    description:
      "Expert legal consultancy for banking and finance in Andhra Pradesh. NBFC registration, Fintech compliance in Vizag, and agricultural finance services.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/andhra-pradesh",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
  },
};

export default function AndhraPradeshBankingPage() {
  return <AndhraPradeshBankingClient />;
}
