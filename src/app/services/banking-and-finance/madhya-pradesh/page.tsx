import React from "react";
import MadhyaPradeshBankingClient from "./MadhyaPradeshBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Madhya Pradesh | AMA Legal Solutions",
  description:
    "Expert legal consultancy for banking and finance in Madhya Pradesh. NBFC registration in Indore, MSME finance in Pithampur, and agricultural lending compliance.",
  openGraph: {
    title: "Banking and Finance Services in Madhya Pradesh | AMA Legal Solutions",
    description:
      "Expert legal consultancy for banking and finance in Madhya Pradesh. NBFC registration in Indore, MSME finance in Pithampur, and agricultural lending compliance.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/madhya-pradesh",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
  },
};

export default function MadhyaPradeshBankingPage() {
  return <MadhyaPradeshBankingClient />;
}
