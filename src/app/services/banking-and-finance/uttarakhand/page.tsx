import React from "react";
import UttarakhandBankingClient from "./UttarakhandBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Uttarakhand | AMA Legal Solutions",
  description:
    "Expert legal consultancy for banking and finance in Uttarakhand. NBFC registration in Dehradun, tourism finance, and hydropower project lending.",
  openGraph: {
    title: "Banking and Finance Services in Uttarakhand | AMA Legal Solutions",
    description:
      "Expert legal consultancy for banking and finance in Uttarakhand. NBFC registration in Dehradun, tourism finance, and hydropower project lending.",
    url: "https://amalegalsolutions.com/services/banking-and-finance/uttarakhand",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
  },
};

export default function UttarakhandBankingPage() {
  return <UttarakhandBankingClient />;
}
