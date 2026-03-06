import JammuKashmirClient from "./JammuKashmirClient";

export const metadata = {
  title: "Intellectual Property Rights Services in Jammu & Kashmir | Trademark & Patent",
  description:
    "Expert IPR services in Jammu & Kashmir. We assist with Trademark Registration, Patent Filing, Copyright Protection, and GI Tags. Secure your intellectual assets today.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/intellectual-property-rights/jammu-and-kashmir',
  },
  openGraph: {
    title: "Intellectual Property Rights Services in Jammu & Kashmir | Trademark & Patent",
    description: "Expert IPR services in Jammu & Kashmir. We assist with Trademark Registration, Patent Filing, Copyright Protection, and GI Tags. Secure your intellectual assets today.",
    url: "https://www.amalegalsolutions.com/services/intellectual-property-rights/jammu-and-kashmir",
    type: "website",
    images: [
      {
        url: "/services/ipr-jammu-kashmir.jpg",
        width: 1200,
        height: 630,
        alt: "IPR Services Jammu & Kashmir",
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Intellectual Property Rights",
      "item": "https://www.amalegalsolutions.com/services/intellectual-property-rights"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Jammu & Kashmir",
      "item": "https://www.amalegalsolutions.com/services/intellectual-property-rights/jammu-and-kashmir"
    }
  ]
};

export default function JammuKashmirIPRPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <JammuKashmirClient />
    </>
  );
}
