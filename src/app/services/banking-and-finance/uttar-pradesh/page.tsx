import React from "react";
import UttarPradeshBankingClient from "./UttarPradeshBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Uttar Pradesh | AMA Legal Solutions",
  description:
    "Expert legal consultancy for banking and finance in Uttar Pradesh. NBFC registration in Noida, ODOP finance, and infrastructure project lending.",
  openGraph: {
    title: "Banking and Finance Services in Uttar Pradesh | AMA Legal Solutions",
    description:
      "Expert legal consultancy for banking and finance in Uttar Pradesh. NBFC registration in Noida, ODOP finance, and infrastructure project lending.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/uttar-pradesh",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
  },
};

export default function UttarPradeshBankingPage() {
  return <UttarPradeshBankingClient />;
}
