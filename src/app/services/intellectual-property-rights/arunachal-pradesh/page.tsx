import ArunachalPradeshClient from "./ArunachalPradeshClient";

export const metadata = {
  title: "Intellectual Property Rights Services in Arunachal Pradesh | Trademark & Patent",
  description:
    "Expert IPR services in Arunachal Pradesh. We assist with Trademark Registration, Patent Filing, Copyright Protection, and GI Tags. Secure your intellectual assets today.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/intellectual-property-rights/arunachal-pradesh',
  },
  openGraph: {
    title: "Intellectual Property Rights Services in Arunachal Pradesh | Trademark & Patent",
    description: "Expert IPR services in Arunachal Pradesh. We assist with Trademark Registration, Patent Filing, Copyright Protection, and GI Tags. Secure your intellectual assets today.",
    url: "https://amalegalsolutions.com/services/intellectual-property-rights/arunachal-pradesh",
    type: "website",
    images: [
      {
        url: "/services/ipr-arunachal-pradesh.jpg",
        width: 1200,
        height: 630,
        alt: "IPR Services Arunachal Pradesh",
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
      "item": "https://amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Intellectual Property Rights",
      "item": "https://amalegalsolutions.com/services/intellectual-property-rights"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Arunachal Pradesh",
      "item": "https://amalegalsolutions.com/services/intellectual-property-rights/arunachal-pradesh"
    }
  ]
};

export default function ArunachalPradeshIPRPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ArunachalPradeshClient />
    </>
  );
}
