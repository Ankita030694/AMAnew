import { Metadata } from 'next';
import Script from 'next/script';
import ArbitrationClient from './ArbitrationClient';

// State-specific content data
const stateContent = {
  'andhra-pradesh': {
    title: 'Arbitration Lawyers in Andhra Pradesh | Expert Legal Services',
    description: 'Professional arbitration lawyers in Andhra Pradesh. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Andhra Pradesh.',
    city: 'Hyderabad',
    state: 'Andhra Pradesh',
    jurisdiction: 'Andhra Pradesh High Court',
    specializations: ['Commercial Arbitration', 'Construction Disputes', 'Banking Arbitration', 'Real Estate Disputes']
  },
  'arunachal-pradesh': {
    title: 'Arbitration Lawyers in Arunachal Pradesh | Expert Legal Services',
    description: 'Professional arbitration lawyers in Arunachal Pradesh. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Arunachal Pradesh.',
    city: 'Itanagar',
    state: 'Arunachal Pradesh',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Commercial Arbitration', 'Land Disputes', 'Contract Arbitration', 'Business Disputes']
  },
  'assam': {
    title: 'Arbitration Lawyers in Assam | Expert Legal Services',
    description: 'Professional arbitration lawyers in Assam. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Assam.',
    city: 'Guwahati',
    state: 'Assam',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Commercial Arbitration', 'Oil & Gas Disputes', 'Banking Arbitration', 'Construction Disputes']
  },
  'bihar': {
    title: 'Arbitration Lawyers in Bihar | Expert Legal Services',
    description: 'Professional arbitration lawyers in Bihar. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Bihar.',
    city: 'Patna',
    state: 'Bihar',
    jurisdiction: 'Patna High Court',
    specializations: ['Commercial Arbitration', 'Agricultural Disputes', 'Banking Arbitration', 'Real Estate Disputes']
  },
  'chhattisgarh': {
    title: 'Arbitration Lawyers in Chhattisgarh | Expert Legal Services',
    description: 'Professional arbitration lawyers in Chhattisgarh. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Chhattisgarh.',
    city: 'Raipur',
    state: 'Chhattisgarh',
    jurisdiction: 'Chhattisgarh High Court',
    specializations: ['Commercial Arbitration', 'Mining Disputes', 'Industrial Arbitration', 'Land Disputes']
  },
  'goa': {
    title: 'Arbitration Lawyers in Goa | Expert Legal Services',
    description: 'Professional arbitration lawyers in Goa. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Goa.',
    city: 'Panaji',
    state: 'Goa',
    jurisdiction: 'Bombay High Court',
    specializations: ['Commercial Arbitration', 'Tourism Disputes', 'Real Estate Arbitration', 'Hospitality Disputes']
  },
  'gujarat': {
    title: 'Arbitration Lawyers in Gujarat | Expert Legal Services',
    description: 'Professional arbitration lawyers in Gujarat. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Gujarat.',
    city: 'Ahmedabad',
    state: 'Gujarat',
    jurisdiction: 'Gujarat High Court',
    specializations: ['Commercial Arbitration', 'Textile Disputes', 'Banking Arbitration', 'Industrial Disputes']
  },
  'haryana': {
    title: 'Arbitration Lawyers in Haryana | Expert Legal Services',
    description: 'Professional arbitration lawyers in Haryana. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Haryana.',
    city: 'Chandigarh',
    state: 'Haryana',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Commercial Arbitration', 'Automobile Disputes', 'Real Estate Arbitration', 'Banking Disputes']
  },
  'himachal-pradesh': {
    title: 'Arbitration Lawyers in Himachal Pradesh | Expert Legal Services',
    description: 'Professional arbitration lawyers in Himachal Pradesh. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Himachal Pradesh.',
    city: 'Shimla',
    state: 'Himachal Pradesh',
    jurisdiction: 'Himachal Pradesh High Court',
    specializations: ['Commercial Arbitration', 'Tourism Disputes', 'Land Disputes', 'Agricultural Arbitration']
  },
  'jharkhand': {
    title: 'Arbitration Lawyers in Jharkhand | Expert Legal Services',
    description: 'Professional arbitration lawyers in Jharkhand. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Jharkhand.',
    city: 'Ranchi',
    state: 'Jharkhand',
    jurisdiction: 'Jharkhand High Court',
    specializations: ['Commercial Arbitration', 'Mining Disputes', 'Industrial Arbitration', 'Land Disputes']
  },
  'karnataka': {
    title: 'Arbitration Lawyers in Karnataka | Expert Legal Services',
    description: 'Professional arbitration lawyers in Karnataka. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Karnataka.',
    city: 'Bangalore',
    state: 'Karnataka',
    jurisdiction: 'Karnataka High Court',
    specializations: ['Commercial Arbitration', 'IT Disputes', 'Banking Arbitration', 'Real Estate Disputes']
  },
  'kerala': {
    title: 'Arbitration Lawyers in Kerala | Expert Legal Services',
    description: 'Professional arbitration lawyers in Kerala. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Kerala.',
    city: 'Kochi',
    state: 'Kerala',
    jurisdiction: 'Kerala High Court',
    specializations: ['Commercial Arbitration', 'Tourism Disputes', 'Banking Arbitration', 'Real Estate Disputes']
  },
  'madhya-pradesh': {
    title: 'Arbitration Lawyers in Madhya Pradesh | Expert Legal Services',
    description: 'Professional arbitration lawyers in Madhya Pradesh. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Madhya Pradesh.',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    jurisdiction: 'Madhya Pradesh High Court',
    specializations: ['Commercial Arbitration', 'Agricultural Disputes', 'Banking Arbitration', 'Land Disputes']
  },
  'maharashtra': {
    title: 'Arbitration Lawyers in Maharashtra | Expert Legal Services',
    description: 'Professional arbitration lawyers in Maharashtra. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Maharashtra.',
    city: 'Mumbai',
    state: 'Maharashtra',
    jurisdiction: 'Bombay High Court',
    specializations: ['Commercial Arbitration', 'Banking Disputes', 'Real Estate Arbitration', 'Industrial Disputes']
  },
  'manipur': {
    title: 'Arbitration Lawyers in Manipur | Expert Legal Services',
    description: 'Professional arbitration lawyers in Manipur. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Manipur.',
    city: 'Imphal',
    state: 'Manipur',
    jurisdiction: 'Manipur High Court',
    specializations: ['Commercial Arbitration', 'Land Disputes', 'Agricultural Arbitration', 'Business Disputes']
  },
  'meghalaya': {
    title: 'Arbitration Lawyers in Meghalaya | Expert Legal Services',
    description: 'Professional arbitration lawyers in Meghalaya. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Meghalaya.',
    city: 'Shillong',
    state: 'Meghalaya',
    jurisdiction: 'Meghalaya High Court',
    specializations: ['Commercial Arbitration', 'Mining Disputes', 'Land Disputes', 'Agricultural Arbitration']
  },
  'mizoram': {
    title: 'Arbitration Lawyers in Mizoram | Expert Legal Services',
    description: 'Professional arbitration lawyers in Mizoram. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Mizoram.',
    city: 'Aizawl',
    state: 'Mizoram',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Commercial Arbitration', 'Land Disputes', 'Agricultural Arbitration', 'Business Disputes']
  },
  'nagaland': {
    title: 'Arbitration Lawyers in Nagaland | Expert Legal Services',
    description: 'Professional arbitration lawyers in Nagaland. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Nagaland.',
    city: 'Kohima',
    state: 'Nagaland',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Commercial Arbitration', 'Land Disputes', 'Agricultural Arbitration', 'Business Disputes']
  },
  'odisha': {
    title: 'Arbitration Lawyers in Odisha | Expert Legal Services',
    description: 'Professional arbitration lawyers in Odisha. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Odisha.',
    city: 'Bhubaneswar',
    state: 'Odisha',
    jurisdiction: 'Orissa High Court',
    specializations: ['Commercial Arbitration', 'Mining Disputes', 'Industrial Arbitration', 'Land Disputes']
  },
  'punjab': {
    title: 'Arbitration Lawyers in Punjab | Expert Legal Services',
    description: 'Professional arbitration lawyers in Punjab. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Punjab.',
    city: 'Chandigarh',
    state: 'Punjab',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Commercial Arbitration', 'Agricultural Disputes', 'Banking Arbitration', 'Real Estate Disputes']
  },
  'rajasthan': {
    title: 'Arbitration Lawyers in Rajasthan | Expert Legal Services',
    description: 'Professional arbitration lawyers in Rajasthan. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Rajasthan.',
    city: 'Jaipur',
    state: 'Rajasthan',
    jurisdiction: 'Rajasthan High Court',
    specializations: ['Commercial Arbitration', 'Mining Disputes', 'Banking Arbitration', 'Real Estate Disputes']
  },
  'sikkim': {
    title: 'Arbitration Lawyers in Sikkim | Expert Legal Services',
    description: 'Professional arbitration lawyers in Sikkim. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Sikkim.',
    city: 'Gangtok',
    state: 'Sikkim',
    jurisdiction: 'Sikkim High Court',
    specializations: ['Commercial Arbitration', 'Tourism Disputes', 'Land Disputes', 'Agricultural Arbitration']
  },
  'tamil-nadu': {
    title: 'Arbitration Lawyers in Tamil Nadu | Expert Legal Services',
    description: 'Professional arbitration lawyers in Tamil Nadu. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Tamil Nadu.',
    city: 'Chennai',
    state: 'Tamil Nadu',
    jurisdiction: 'Madras High Court',
    specializations: ['Commercial Arbitration', 'IT Disputes', 'Banking Arbitration', 'Real Estate Disputes']
  },
  'telangana': {
    title: 'Arbitration Lawyers in Telangana | Expert Legal Services',
    description: 'Professional arbitration lawyers in Telangana. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Telangana.',
    city: 'Hyderabad',
    state: 'Telangana',
    jurisdiction: 'Telangana High Court',
    specializations: ['Commercial Arbitration', 'IT Disputes', 'Banking Arbitration', 'Real Estate Disputes']
  },
  'tripura': {
    title: 'Arbitration Lawyers in Tripura | Expert Legal Services',
    description: 'Professional arbitration lawyers in Tripura. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Tripura.',
    city: 'Agartala',
    state: 'Tripura',
    jurisdiction: 'Tripura High Court',
    specializations: ['Commercial Arbitration', 'Land Disputes', 'Agricultural Arbitration', 'Business Disputes']
  },
  'uttar-pradesh': {
    title: 'Arbitration Lawyers in Uttar Pradesh | Expert Legal Services',
    description: 'Professional arbitration lawyers in Uttar Pradesh. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Uttar Pradesh.',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    jurisdiction: 'Allahabad High Court',
    specializations: ['Commercial Arbitration', 'Agricultural Disputes', 'Banking Arbitration', 'Real Estate Disputes']
  },
  'uttarakhand': {
    title: 'Arbitration Lawyers in Uttarakhand | Expert Legal Services',
    description: 'Professional arbitration lawyers in Uttarakhand. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Uttarakhand.',
    city: 'Dehradun',
    state: 'Uttarakhand',
    jurisdiction: 'Uttarakhand High Court',
    specializations: ['Commercial Arbitration', 'Tourism Disputes', 'Land Disputes', 'Agricultural Arbitration']
  },
  'west-bengal': {
    title: 'Arbitration Lawyers in West Bengal | Expert Legal Services',
    description: 'Professional arbitration lawyers in West Bengal. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across West Bengal.',
    city: 'Kolkata',
    state: 'West Bengal',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Commercial Arbitration', 'Banking Disputes', 'Real Estate Arbitration', 'Industrial Disputes']
  }
};

// Union Territories content
const unionTerritoryContent = {
  'andaman-and-nicobar': {
    title: 'Arbitration Lawyers in Andaman and Nicobar | Expert Legal Services',
    description: 'Professional arbitration lawyers in Andaman and Nicobar. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Andaman and Nicobar.',
    city: 'Port Blair',
    state: 'Andaman and Nicobar',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Commercial Arbitration', 'Tourism Disputes', 'Maritime Arbitration', 'Business Disputes']
  },
  'chandigarh': {
    title: 'Arbitration Lawyers in Chandigarh | Expert Legal Services',
    description: 'Professional arbitration lawyers in Chandigarh. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Chandigarh.',
    city: 'Chandigarh',
    state: 'Chandigarh',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Commercial Arbitration', 'Real Estate Disputes', 'Banking Arbitration', 'Business Disputes']
  },
  'daman-and-diu': {
    title: 'Arbitration Lawyers in Daman and Diu | Expert Legal Services',
    description: 'Professional arbitration lawyers in Daman and Diu. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Daman and Diu.',
    city: 'Daman',
    state: 'Daman and Diu',
    jurisdiction: 'Bombay High Court',
    specializations: ['Commercial Arbitration', 'Tourism Disputes', 'Real Estate Arbitration', 'Business Disputes']
  },
  'delhi': {
    title: 'Arbitration Lawyers in Delhi | Expert Legal Services',
    description: 'Professional arbitration lawyers in Delhi. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Delhi.',
    city: 'New Delhi',
    state: 'Delhi',
    jurisdiction: 'Delhi High Court',
    specializations: ['Commercial Arbitration', 'Banking Disputes', 'Real Estate Arbitration', 'Corporate Disputes']
  },
  'jammu-and-kashmir': {
    title: 'Arbitration Lawyers in Jammu and Kashmir | Expert Legal Services',
    description: 'Professional arbitration lawyers in Jammu and Kashmir. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Jammu and Kashmir.',
    city: 'Srinagar',
    state: 'Jammu and Kashmir',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Commercial Arbitration', 'Tourism Disputes', 'Land Disputes', 'Agricultural Arbitration']
  },
  'ladakh': {
    title: 'Arbitration Lawyers in Ladakh | Expert Legal Services',
    description: 'Professional arbitration lawyers in Ladakh. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Ladakh.',
    city: 'Leh',
    state: 'Ladakh',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Commercial Arbitration', 'Tourism Disputes', 'Land Disputes', 'Agricultural Arbitration']
  },
  'lakshadweep': {
    title: 'Arbitration Lawyers in Lakshadweep | Expert Legal Services',
    description: 'Professional arbitration lawyers in Lakshadweep. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Lakshadweep.',
    city: 'Kavaratti',
    state: 'Lakshadweep',
    jurisdiction: 'Kerala High Court',
    specializations: ['Commercial Arbitration', 'Tourism Disputes', 'Maritime Arbitration', 'Business Disputes']
  },
  'puducherry': {
    title: 'Arbitration Lawyers in Puducherry | Expert Legal Services',
    description: 'Professional arbitration lawyers in Puducherry. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across Puducherry.',
    city: 'Puducherry',
    state: 'Puducherry',
    jurisdiction: 'Madras High Court',
    specializations: ['Commercial Arbitration', 'Tourism Disputes', 'Real Estate Arbitration', 'Business Disputes']
  }
};

// FAQ data for arbitration services
const faqs = [
  {
    question: "What types of arbitration services do you provide?",
    answer: "We provide comprehensive arbitration services including arbitration agreement drafting, arbitration proceedings, arbitral awards, interim relief, banking and finance arbitration, commercial disputes, and international arbitration. Our arbitration lawyers handle all aspects of alternative dispute resolution."
  },
  {
    question: "How does arbitration differ from court litigation?",
    answer: "Arbitration is a private, confidential alternative to court litigation that offers faster resolution, flexibility in procedure, and expert arbitrators. It's often less expensive and more efficient than traditional court proceedings, with enforceable awards."
  },
  {
    question: "Can you help with international arbitration cases?",
    answer: "Yes, we specialize in international arbitration including cross-border disputes, enforcement of foreign arbitral awards, and representation in international arbitration institutions. Our lawyers have experience with various international arbitration rules and procedures."
  },
  {
    question: "What should I include in an arbitration agreement?",
    answer: "A well-drafted arbitration agreement should include the scope of disputes covered, choice of arbitrators, governing law, seat of arbitration, language of proceedings, and enforcement mechanisms. Our arbitration lawyers can draft comprehensive agreements to protect your interests."
  },
  {
    question: "How long does the arbitration process take?",
    answer: "Arbitration typically takes 6-12 months from initiation to award, which is significantly faster than traditional court litigation. The exact timeline depends on the complexity of the dispute, number of parties, and procedural requirements."
  },
  {
    question: "Are arbitral awards enforceable?",
    answer: "Yes, arbitral awards are legally binding and enforceable in courts. In India, arbitral awards are enforceable under the Arbitration and Conciliation Act, 2015, and internationally under the New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards."
  }
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return {
      title: 'Arbitration Lawyers in India | Expert Legal Services',
      description: 'Professional arbitration lawyers in India. AMA Legal Solutions provides expert arbitration services, dispute resolution, and legal representation across India.',
    };
  }

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `https://www.amalegalsolutions.com/services/arbitration/${slug}`,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `https://www.amalegalsolutions.com/services/arbitration/${slug}`,
      siteName: 'AMA Legal Solutions',
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
    },
  };
}

// WebPage Schema with FAQ content for SEO
function generateWebPageSchema(content: any) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": content.title,
    "description": content.description,
    "url": `https://www.amalegalsolutions.com/services/arbitration/${content.slug}`,
    "mainEntity": {
      "@type": "FAQPage",
      "name": "Arbitration Services FAQs",
      "description": "Frequently asked questions about arbitration services, alternative dispute resolution, and arbitration legal services",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  };
}

export default async function ArbitrationSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested arbitration page could not be found.</p>
        </div>
      </div>
    );
  }

  const webPageSchema = generateWebPageSchema({ ...content, slug });

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="arbitration-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      
      <ArbitrationClient content={content} faqs={faqs} />
    </>
  );
}
