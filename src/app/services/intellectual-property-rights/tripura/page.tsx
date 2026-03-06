import TripuraClient from "./TripuraClient";

export const metadata = {
  title: "Intellectual Property Rights Services in Tripura | Trademark & Patent",
  description:
    "Expert IPR services in Tripura. We assist with Trademark Registration, Patent Filing, Copyright Protection, and GI Tags. Secure your intellectual assets today.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/intellectual-property-rights/tripura',
  },
  openGraph: {
    title: "Intellectual Property Rights Services in Tripura | Trademark & Patent",
    description: "Expert IPR services in Tripura. We assist with Trademark Registration, Patent Filing, Copyright Protection, and GI Tags. Secure your intellectual assets today.",
    url: "https://www.amalegalsolutions.com/services/intellectual-property-rights/tripura",
    type: "website",
    images: [
      {
        url: "/services/ipr-tripura.jpg",
        width: 1200,
        height: 630,
        alt: "IPR Services Tripura",
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
      "name": "Tripura",
      "item": "https://www.amalegalsolutions.com/services/intellectual-property-rights/tripura"
    }
  ]
};

export default function TripuraIPRPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TripuraClient />
    </>
  );
}
