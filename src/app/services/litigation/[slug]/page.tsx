import { Metadata } from 'next';
import Script from 'next/script';
import LitigationClient from './LitigationClient';

// State-specific content data for litigation
const stateContent = {
  'andhra-pradesh': {
    title: 'Litigation Lawyers in Andhra Pradesh | Expert Legal Services',
    description: 'Professional litigation lawyers in Andhra Pradesh. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Andhra Pradesh.',
    city: 'Hyderabad',
    state: 'Andhra Pradesh',
    jurisdiction: 'Andhra Pradesh High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'arunachal-pradesh': {
    title: 'Litigation Lawyers in Arunachal Pradesh | Expert Legal Services',
    description: 'Professional litigation lawyers in Arunachal Pradesh. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Arunachal Pradesh.',
    city: 'Itanagar',
    state: 'Arunachal Pradesh',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'assam': {
    title: 'Litigation Lawyers in Assam | Expert Legal Services',
    description: 'Professional litigation lawyers in Assam. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Assam.',
    city: 'Guwahati',
    state: 'Assam',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'bihar': {
    title: 'Litigation Lawyers in Bihar | Expert Legal Services',
    description: 'Professional litigation lawyers in Bihar. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Bihar.',
    city: 'Patna',
    state: 'Bihar',
    jurisdiction: 'Patna High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'chhattisgarh': {
    title: 'Litigation Lawyers in Chhattisgarh | Expert Legal Services',
    description: 'Professional litigation lawyers in Chhattisgarh. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Chhattisgarh.',
    city: 'Raipur',
    state: 'Chhattisgarh',
    jurisdiction: 'Chhattisgarh High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'goa': {
    title: 'Litigation Lawyers in Goa | Expert Legal Services',
    description: 'Professional litigation lawyers in Goa. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Goa.',
    city: 'Panaji',
    state: 'Goa',
    jurisdiction: 'Bombay High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'gujarat': {
    title: 'Litigation Lawyers in Gujarat | Expert Legal Services',
    description: 'Professional litigation lawyers in Gujarat. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Gujarat.',
    city: 'Ahmedabad',
    state: 'Gujarat',
    jurisdiction: 'Gujarat High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'haryana': {
    title: 'Litigation Lawyers in Haryana | Expert Legal Services',
    description: 'Professional litigation lawyers in Haryana. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Haryana.',
    city: 'Chandigarh',
    state: 'Haryana',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'himachal-pradesh': {
    title: 'Litigation Lawyers in Himachal Pradesh | Expert Legal Services',
    description: 'Professional litigation lawyers in Himachal Pradesh. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Himachal Pradesh.',
    city: 'Shimla',
    state: 'Himachal Pradesh',
    jurisdiction: 'Himachal Pradesh High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'jharkhand': {
    title: 'Litigation Lawyers in Jharkhand | Expert Legal Services',
    description: 'Professional litigation lawyers in Jharkhand. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Jharkhand.',
    city: 'Ranchi',
    state: 'Jharkhand',
    jurisdiction: 'Jharkhand High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'karnataka': {
    title: 'Litigation Lawyers in Karnataka | Expert Legal Services',
    description: 'Professional litigation lawyers in Karnataka. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Karnataka.',
    city: 'Bangalore',
    state: 'Karnataka',
    jurisdiction: 'Karnataka High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'kerala': {
    title: 'Litigation Lawyers in Kerala | Expert Legal Services',
    description: 'Professional litigation lawyers in Kerala. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Kerala.',
    city: 'Kochi',
    state: 'Kerala',
    jurisdiction: 'Kerala High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'madhya-pradesh': {
    title: 'Litigation Lawyers in Madhya Pradesh | Expert Legal Services',
    description: 'Professional litigation lawyers in Madhya Pradesh. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Madhya Pradesh.',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    jurisdiction: 'Madhya Pradesh High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'maharashtra': {
    title: 'Litigation Lawyers in Maharashtra | Expert Legal Services',
    description: 'Professional litigation lawyers in Maharashtra. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Maharashtra.',
    city: 'Mumbai',
    state: 'Maharashtra',
    jurisdiction: 'Bombay High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'manipur': {
    title: 'Litigation Lawyers in Manipur | Expert Legal Services',
    description: 'Professional litigation lawyers in Manipur. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Manipur.',
    city: 'Imphal',
    state: 'Manipur',
    jurisdiction: 'Manipur High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'meghalaya': {
    title: 'Litigation Lawyers in Meghalaya | Expert Legal Services',
    description: 'Professional litigation lawyers in Meghalaya. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Meghalaya.',
    city: 'Shillong',
    state: 'Meghalaya',
    jurisdiction: 'Meghalaya High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'mizoram': {
    title: 'Litigation Lawyers in Mizoram | Expert Legal Services',
    description: 'Professional litigation lawyers in Mizoram. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Mizoram.',
    city: 'Aizawl',
    state: 'Mizoram',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'nagaland': {
    title: 'Litigation Lawyers in Nagaland | Expert Legal Services',
    description: 'Professional litigation lawyers in Nagaland. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Nagaland.',
    city: 'Kohima',
    state: 'Nagaland',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'odisha': {
    title: 'Litigation Lawyers in Odisha | Expert Legal Services',
    description: 'Professional litigation lawyers in Odisha. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Odisha.',
    city: 'Bhubaneswar',
    state: 'Odisha',
    jurisdiction: 'Orissa High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'punjab': {
    title: 'Litigation Lawyers in Punjab | Expert Legal Services',
    description: 'Professional litigation lawyers in Punjab. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Punjab.',
    city: 'Chandigarh',
    state: 'Punjab',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'rajasthan': {
    title: 'Litigation Lawyers in Rajasthan | Expert Legal Services',
    description: 'Professional litigation lawyers in Rajasthan. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Rajasthan.',
    city: 'Jaipur',
    state: 'Rajasthan',
    jurisdiction: 'Rajasthan High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'sikkim': {
    title: 'Litigation Lawyers in Sikkim | Expert Legal Services',
    description: 'Professional litigation lawyers in Sikkim. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Sikkim.',
    city: 'Gangtok',
    state: 'Sikkim',
    jurisdiction: 'Sikkim High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'tamil-nadu': {
    title: 'Litigation Lawyers in Tamil Nadu | Expert Legal Services',
    description: 'Professional litigation lawyers in Tamil Nadu. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Tamil Nadu.',
    city: 'Chennai',
    state: 'Tamil Nadu',
    jurisdiction: 'Madras High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'telangana': {
    title: 'Litigation Lawyers in Telangana | Expert Legal Services',
    description: 'Professional litigation lawyers in Telangana. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Telangana.',
    city: 'Hyderabad',
    state: 'Telangana',
    jurisdiction: 'Telangana High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'tripura': {
    title: 'Litigation Lawyers in Tripura | Expert Legal Services',
    description: 'Professional litigation lawyers in Tripura. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Tripura.',
    city: 'Agartala',
    state: 'Tripura',
    jurisdiction: 'Tripura High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'uttar-pradesh': {
    title: 'Litigation Lawyers in Uttar Pradesh | Expert Legal Services',
    description: 'Professional litigation lawyers in Uttar Pradesh. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Uttar Pradesh.',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    jurisdiction: 'Allahabad High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'uttarakhand': {
    title: 'Litigation Lawyers in Uttarakhand | Expert Legal Services',
    description: 'Professional litigation lawyers in Uttarakhand. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Uttarakhand.',
    city: 'Dehradun',
    state: 'Uttarakhand',
    jurisdiction: 'Uttarakhand High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'west-bengal': {
    title: 'Litigation Lawyers in West Bengal | Expert Legal Services',
    description: 'Professional litigation lawyers in West Bengal. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across West Bengal.',
    city: 'Kolkata',
    state: 'West Bengal',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  }
};

// Union Territories content for litigation
const unionTerritoryContent = {
  'andaman-and-nicobar': {
    title: 'Litigation Lawyers in Andaman and Nicobar | Expert Legal Services',
    description: 'Professional litigation lawyers in Andaman and Nicobar. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Andaman and Nicobar.',
    city: 'Port Blair',
    state: 'Andaman and Nicobar',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'chandigarh': {
    title: 'Litigation Lawyers in Chandigarh | Expert Legal Services',
    description: 'Professional litigation lawyers in Chandigarh. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Chandigarh.',
    city: 'Chandigarh',
    state: 'Chandigarh',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'daman-and-diu': {
    title: 'Litigation Lawyers in Daman and Diu | Expert Legal Services',
    description: 'Professional litigation lawyers in Daman and Diu. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Daman and Diu.',
    city: 'Daman',
    state: 'Daman and Diu',
    jurisdiction: 'Bombay High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'delhi': {
    title: 'Litigation Lawyers in Delhi | Expert Legal Services',
    description: 'Professional litigation lawyers in Delhi. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Delhi.',
    city: 'New Delhi',
    state: 'Delhi',
    jurisdiction: 'Delhi High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'jammu-and-kashmir': {
    title: 'Litigation Lawyers in Jammu and Kashmir | Expert Legal Services',
    description: 'Professional litigation lawyers in Jammu and Kashmir. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Jammu and Kashmir.',
    city: 'Srinagar',
    state: 'Jammu and Kashmir',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'ladakh': {
    title: 'Litigation Lawyers in Ladakh | Expert Legal Services',
    description: 'Professional litigation lawyers in Ladakh. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Ladakh.',
    city: 'Leh',
    state: 'Ladakh',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'lakshadweep': {
    title: 'Litigation Lawyers in Lakshadweep | Expert Legal Services',
    description: 'Professional litigation lawyers in Lakshadweep. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Lakshadweep.',
    city: 'Kavaratti',
    state: 'Lakshadweep',
    jurisdiction: 'Kerala High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  },
  'puducherry': {
    title: 'Litigation Lawyers in Puducherry | Expert Legal Services',
    description: 'Professional litigation lawyers in Puducherry. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across Puducherry.',
    city: 'Puducherry',
    state: 'Puducherry',
    jurisdiction: 'Madras High Court',
    specializations: ['Civil Litigation', 'Commercial Litigation', 'Court Representation', 'Litigation Strategy']
  }
};

// FAQ data for litigation services
const faqs = [
  {
    question: "What types of litigation services do you provide?",
    answer: "We provide comprehensive litigation services including civil litigation, commercial litigation, court representation, litigation strategy, and legal advocacy. Our litigation lawyers handle all aspects of court proceedings and legal disputes."
  },
  {
    question: "How do you handle civil litigation cases?",
    answer: "We handle civil litigation cases including property disputes, contract disputes, family law matters, and civil rights cases. Our litigation lawyers provide expert court representation and legal advocacy."
  },
  {
    question: "Can you help with commercial litigation?",
    answer: "Yes, we specialize in commercial litigation including business disputes, contract litigation, corporate litigation, and commercial law matters with comprehensive legal representation and strategic advocacy."
  },
  {
    question: "Do you handle court representation?",
    answer: "Absolutely. We handle court representation including trial advocacy, court appearances, legal arguments, and comprehensive court representation in all types of legal proceedings."
  },
  {
    question: "What is the process for litigation consultation?",
    answer: "Our litigation consultation process includes case analysis, legal strategy development, court representation planning, and ongoing litigation support throughout the legal proceedings."
  },
  {
    question: "How long do litigation cases take?",
    answer: "Litigation case timelines vary depending on case complexity, court schedules, and legal procedures. We work efficiently to resolve cases while ensuring thorough legal representation and advocacy."
  }
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return {
      title: 'Litigation Lawyers in India | Expert Legal Services',
      description: 'Professional litigation lawyers in India. AMA Legal Solutions provides expert litigation services, civil litigation, commercial litigation, and court representation across India.',
    };
  }

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `https://www.amalegalsolutions.com/services/litigation/${slug}`,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `https://www.amalegalsolutions.com/services/litigation/${slug}`,
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
    "url": `https://www.amalegalsolutions.com/services/litigation/${content.slug}`,
    "mainEntity": {
      "name": "Litigation Services FAQs",
      "description": "Frequently asked questions about litigation services, civil litigation, and court representation",
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

export default async function LitigationSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested litigation page could not be found.</p>
        </div>
      </div>
    );
  }

  const webPageSchema = generateWebPageSchema({ ...content, slug });

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="litigation-law-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      
      <LitigationClient content={content} faqs={faqs} />
    </>
  );
}
