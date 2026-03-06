import React from "react";
import OdishaBankingClient from "./OdishaBankingClient";

export const metadata = {
  title: "Banking and Finance Services in Odisha | AMA Legal Solutions",
  description:
    "Expert legal consultancy for banking and finance in Odisha. NBFC registration in Bhubaneswar, mining finance, and SHG lending compliance.",
  openGraph: {
    title: "Banking and Finance Services in Odisha | AMA Legal Solutions",
    description:
      "Expert legal consultancy for banking and finance in Odisha. NBFC registration in Bhubaneswar, mining finance, and SHG lending compliance.",
    url: "https://www.amalegalsolutions.com/services/banking-and-finance/odisha",
    siteName: "AMA Legal Solutions",
    locale: "en_US",
    type: "article",
  },
};

export default function OdishaBankingPage() {
  return <OdishaBankingClient />;
}
