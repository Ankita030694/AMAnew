import ClientPage from "./ClientPage";

export const metadata = {
  title: "Intellectual Property Rights Services in Andaman and Nicobar | Trademark & Patent",
  description:
    "Expert IPR services in Andaman and Nicobar. We assist with Trademark Registration, Patent Filing, Copyright Protection, and GI Tags. Secure your intellectual assets today.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/intellectual-property-rights/andaman-nicobar',
  },
  openGraph: {
    title: "Intellectual Property Rights Services in Andaman and Nicobar | Trademark & Patent",
    description: "Expert IPR services in Andaman and Nicobar. We assist with Trademark Registration, Patent Filing, Copyright Protection, and GI Tags. Secure your intellectual assets today.",
    url: "https://www.amalegalsolutions.com/services/intellectual-property-rights/andaman-nicobar",
    type: "website",
    images: [
      {
        url: "/services/ipr-andaman-nicobar.jpg",
        width: 1200,
        height: 630,
        alt: "IPR Services Andaman and Nicobar",
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
      "name": "Andaman and Nicobar",
      "item": "https://www.amalegalsolutions.com/services/intellectual-property-rights/andaman-nicobar"
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
