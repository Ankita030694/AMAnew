import ClientPage from "./ClientPage";

export const metadata = {
  title: "Intellectual Property Rights Services in Nagaland | Trademark & Patent",
  description:
    "Expert IPR services in Nagaland. We assist with Trademark Registration, Patent Filing, Copyright Protection, and GI Tags. Secure your intellectual assets today.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/intellectual-property-rights/nagaland',
  },
  openGraph: {
    title: "Intellectual Property Rights Services in Nagaland | Trademark & Patent",
    description: "Expert IPR services in Nagaland. We assist with Trademark Registration, Patent Filing, Copyright Protection, and GI Tags. Secure your intellectual assets today.",
    url: "https://www.amalegalsolutions.com/services/intellectual-property-rights/nagaland",
    type: "website",
    images: [
      {
        url: "/services/ipr-nagaland.jpg",
        width: 1200,
        height: 630,
        alt: "IPR Services Nagaland",
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
      "name": "Nagaland",
      "item": "https://www.amalegalsolutions.com/services/intellectual-property-rights/nagaland"
    }
  ]
};

export default function AndhraPradeshIPRPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ClientPage />
    </>
  );
}
