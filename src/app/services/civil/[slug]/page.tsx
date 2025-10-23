import { Metadata } from 'next';
import Script from 'next/script';
import CivilClient from './CivilClient';

// State-specific content data for civil law
const stateContent = {
  'andhra-pradesh': {
    title: 'Civil Law Lawyers in Andhra Pradesh | Expert Legal Services',
    description: 'Professional civil law lawyers in Andhra Pradesh. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Andhra Pradesh.',
    city: 'Hyderabad',
    state: 'Andhra Pradesh',
    jurisdiction: 'Andhra Pradesh High Court',
    specializations: ['Civil Litigation', 'Contract Disputes', 'Property Disputes', 'Civil Rights']
  },
  'arunachal-pradesh': {
    title: 'Civil Law Lawyers in Arunachal Pradesh | Expert Legal Services',
    description: 'Professional civil law lawyers in Arunachal Pradesh. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Arunachal Pradesh.',
    city: 'Itanagar',
    state: 'Arunachal Pradesh',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Civil Litigation', 'Land Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'assam': {
    title: 'Civil Law Lawyers in Assam | Expert Legal Services',
    description: 'Professional civil law lawyers in Assam. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Assam.',
    city: 'Guwahati',
    state: 'Assam',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Civil Litigation', 'Oil & Gas Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'bihar': {
    title: 'Civil Law Lawyers in Bihar | Expert Legal Services',
    description: 'Professional civil law lawyers in Bihar. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Bihar.',
    city: 'Patna',
    state: 'Bihar',
    jurisdiction: 'Patna High Court',
    specializations: ['Civil Litigation', 'Agricultural Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'chhattisgarh': {
    title: 'Civil Law Lawyers in Chhattisgarh | Expert Legal Services',
    description: 'Professional civil law lawyers in Chhattisgarh. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Chhattisgarh.',
    city: 'Raipur',
    state: 'Chhattisgarh',
    jurisdiction: 'Chhattisgarh High Court',
    specializations: ['Civil Litigation', 'Mining Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'goa': {
    title: 'Civil Law Lawyers in Goa | Expert Legal Services',
    description: 'Professional civil law lawyers in Goa. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Goa.',
    city: 'Panaji',
    state: 'Goa',
    jurisdiction: 'Bombay High Court',
    specializations: ['Civil Litigation', 'Tourism Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'gujarat': {
    title: 'Civil Law Lawyers in Gujarat | Expert Legal Services',
    description: 'Professional civil law lawyers in Gujarat. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Gujarat.',
    city: 'Ahmedabad',
    state: 'Gujarat',
    jurisdiction: 'Gujarat High Court',
    specializations: ['Civil Litigation', 'Textile Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'haryana': {
    title: 'Civil Law Lawyers in Haryana | Expert Legal Services',
    description: 'Professional civil law lawyers in Haryana. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Haryana.',
    city: 'Chandigarh',
    state: 'Haryana',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Civil Litigation', 'Automobile Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'himachal-pradesh': {
    title: 'Civil Law Lawyers in Himachal Pradesh | Expert Legal Services',
    description: 'Professional civil law lawyers in Himachal Pradesh. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Himachal Pradesh.',
    city: 'Shimla',
    state: 'Himachal Pradesh',
    jurisdiction: 'Himachal Pradesh High Court',
    specializations: ['Civil Litigation', 'Tourism Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'jharkhand': {
    title: 'Civil Law Lawyers in Jharkhand | Expert Legal Services',
    description: 'Professional civil law lawyers in Jharkhand. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Jharkhand.',
    city: 'Ranchi',
    state: 'Jharkhand',
    jurisdiction: 'Jharkhand High Court',
    specializations: ['Civil Litigation', 'Mining Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'karnataka': {
    title: 'Civil Law Lawyers in Karnataka | Expert Legal Services',
    description: 'Professional civil law lawyers in Karnataka. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Karnataka.',
    city: 'Bangalore',
    state: 'Karnataka',
    jurisdiction: 'Karnataka High Court',
    specializations: ['Civil Litigation', 'IT Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'kerala': {
    title: 'Civil Law Lawyers in Kerala | Expert Legal Services',
    description: 'Professional civil law lawyers in Kerala. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Kerala.',
    city: 'Kochi',
    state: 'Kerala',
    jurisdiction: 'Kerala High Court',
    specializations: ['Civil Litigation', 'Tourism Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'madhya-pradesh': {
    title: 'Civil Law Lawyers in Madhya Pradesh | Expert Legal Services',
    description: 'Professional civil law lawyers in Madhya Pradesh. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Madhya Pradesh.',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    jurisdiction: 'Madhya Pradesh High Court',
    specializations: ['Civil Litigation', 'Agricultural Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'maharashtra': {
    title: 'Civil Law Lawyers in Maharashtra | Expert Legal Services',
    description: 'Professional civil law lawyers in Maharashtra. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Maharashtra.',
    city: 'Mumbai',
    state: 'Maharashtra',
    jurisdiction: 'Bombay High Court',
    specializations: ['Civil Litigation', 'Corporate Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'manipur': {
    title: 'Civil Law Lawyers in Manipur | Expert Legal Services',
    description: 'Professional civil law lawyers in Manipur. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Manipur.',
    city: 'Imphal',
    state: 'Manipur',
    jurisdiction: 'Manipur High Court',
    specializations: ['Civil Litigation', 'Land Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'meghalaya': {
    title: 'Civil Law Lawyers in Meghalaya | Expert Legal Services',
    description: 'Professional civil law lawyers in Meghalaya. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Meghalaya.',
    city: 'Shillong',
    state: 'Meghalaya',
    jurisdiction: 'Meghalaya High Court',
    specializations: ['Civil Litigation', 'Mining Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'mizoram': {
    title: 'Civil Law Lawyers in Mizoram | Expert Legal Services',
    description: 'Professional civil law lawyers in Mizoram. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Mizoram.',
    city: 'Aizawl',
    state: 'Mizoram',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Civil Litigation', 'Land Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'nagaland': {
    title: 'Civil Law Lawyers in Nagaland | Expert Legal Services',
    description: 'Professional civil law lawyers in Nagaland. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Nagaland.',
    city: 'Kohima',
    state: 'Nagaland',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Civil Litigation', 'Land Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'odisha': {
    title: 'Civil Law Lawyers in Odisha | Expert Legal Services',
    description: 'Professional civil law lawyers in Odisha. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Odisha.',
    city: 'Bhubaneswar',
    state: 'Odisha',
    jurisdiction: 'Orissa High Court',
    specializations: ['Civil Litigation', 'Mining Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'punjab': {
    title: 'Civil Law Lawyers in Punjab | Expert Legal Services',
    description: 'Professional civil law lawyers in Punjab. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Punjab.',
    city: 'Chandigarh',
    state: 'Punjab',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Civil Litigation', 'Agricultural Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'rajasthan': {
    title: 'Civil Law Lawyers in Rajasthan | Expert Legal Services',
    description: 'Professional civil law lawyers in Rajasthan. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Rajasthan.',
    city: 'Jaipur',
    state: 'Rajasthan',
    jurisdiction: 'Rajasthan High Court',
    specializations: ['Civil Litigation', 'Mining Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'sikkim': {
    title: 'Civil Law Lawyers in Sikkim | Expert Legal Services',
    description: 'Professional civil law lawyers in Sikkim. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Sikkim.',
    city: 'Gangtok',
    state: 'Sikkim',
    jurisdiction: 'Sikkim High Court',
    specializations: ['Civil Litigation', 'Tourism Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'tamil-nadu': {
    title: 'Civil Law Lawyers in Tamil Nadu | Expert Legal Services',
    description: 'Professional civil law lawyers in Tamil Nadu. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Tamil Nadu.',
    city: 'Chennai',
    state: 'Tamil Nadu',
    jurisdiction: 'Madras High Court',
    specializations: ['Civil Litigation', 'IT Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'telangana': {
    title: 'Civil Law Lawyers in Telangana | Expert Legal Services',
    description: 'Professional civil law lawyers in Telangana. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Telangana.',
    city: 'Hyderabad',
    state: 'Telangana',
    jurisdiction: 'Telangana High Court',
    specializations: ['Civil Litigation', 'IT Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'tripura': {
    title: 'Civil Law Lawyers in Tripura | Expert Legal Services',
    description: 'Professional civil law lawyers in Tripura. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Tripura.',
    city: 'Agartala',
    state: 'Tripura',
    jurisdiction: 'Tripura High Court',
    specializations: ['Civil Litigation', 'Land Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'uttar-pradesh': {
    title: 'Civil Law Lawyers in Uttar Pradesh | Expert Legal Services',
    description: 'Professional civil law lawyers in Uttar Pradesh. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Uttar Pradesh.',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    jurisdiction: 'Allahabad High Court',
    specializations: ['Civil Litigation', 'Agricultural Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'uttarakhand': {
    title: 'Civil Law Lawyers in Uttarakhand | Expert Legal Services',
    description: 'Professional civil law lawyers in Uttarakhand. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Uttarakhand.',
    city: 'Dehradun',
    state: 'Uttarakhand',
    jurisdiction: 'Uttarakhand High Court',
    specializations: ['Civil Litigation', 'Tourism Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'west-bengal': {
    title: 'Civil Law Lawyers in West Bengal | Expert Legal Services',
    description: 'Professional civil law lawyers in West Bengal. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across West Bengal.',
    city: 'Kolkata',
    state: 'West Bengal',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Civil Litigation', 'Corporate Disputes', 'Contract Disputes', 'Civil Rights']
  }
};

// Union Territories content for civil law
const unionTerritoryContent = {
  'andaman-and-nicobar': {
    title: 'Civil Law Lawyers in Andaman and Nicobar | Expert Legal Services',
    description: 'Professional civil law lawyers in Andaman and Nicobar. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Andaman and Nicobar.',
    city: 'Port Blair',
    state: 'Andaman and Nicobar',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Civil Litigation', 'Tourism Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'chandigarh': {
    title: 'Civil Law Lawyers in Chandigarh | Expert Legal Services',
    description: 'Professional civil law lawyers in Chandigarh. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Chandigarh.',
    city: 'Chandigarh',
    state: 'Chandigarh',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Civil Litigation', 'Corporate Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'daman-and-diu': {
    title: 'Civil Law Lawyers in Daman and Diu | Expert Legal Services',
    description: 'Professional civil law lawyers in Daman and Diu. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Daman and Diu.',
    city: 'Daman',
    state: 'Daman and Diu',
    jurisdiction: 'Bombay High Court',
    specializations: ['Civil Litigation', 'Tourism Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'delhi': {
    title: 'Civil Law Lawyers in Delhi | Expert Legal Services',
    description: 'Professional civil law lawyers in Delhi. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Delhi.',
    city: 'New Delhi',
    state: 'Delhi',
    jurisdiction: 'Delhi High Court',
    specializations: ['Civil Litigation', 'Corporate Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'jammu-and-kashmir': {
    title: 'Civil Law Lawyers in Jammu and Kashmir | Expert Legal Services',
    description: 'Professional civil law lawyers in Jammu and Kashmir. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Jammu and Kashmir.',
    city: 'Srinagar',
    state: 'Jammu and Kashmir',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Civil Litigation', 'Tourism Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'ladakh': {
    title: 'Civil Law Lawyers in Ladakh | Expert Legal Services',
    description: 'Professional civil law lawyers in Ladakh. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Ladakh.',
    city: 'Leh',
    state: 'Ladakh',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Civil Litigation', 'Tourism Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'lakshadweep': {
    title: 'Civil Law Lawyers in Lakshadweep | Expert Legal Services',
    description: 'Professional civil law lawyers in Lakshadweep. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Lakshadweep.',
    city: 'Kavaratti',
    state: 'Lakshadweep',
    jurisdiction: 'Kerala High Court',
    specializations: ['Civil Litigation', 'Tourism Disputes', 'Contract Disputes', 'Civil Rights']
  },
  'puducherry': {
    title: 'Civil Law Lawyers in Puducherry | Expert Legal Services',
    description: 'Professional civil law lawyers in Puducherry. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across Puducherry.',
    city: 'Puducherry',
    state: 'Puducherry',
    jurisdiction: 'Madras High Court',
    specializations: ['Civil Litigation', 'Tourism Disputes', 'Contract Disputes', 'Civil Rights']
  }
};

// FAQ data for civil law services
const faqs = [
  {
    question: "What types of civil law services do you provide?",
    answer: "We provide comprehensive civil law services including civil litigation, contract disputes, property disputes, family law matters, civil appeals, and alternative dispute resolution. Our civil lawyers handle all aspects of civil law."
  },
  {
    question: "How do you handle civil litigation cases?",
    answer: "We handle civil litigation including contract disputes, property matters, family law cases, and civil appeals. Our civil lawyers provide expert representation in courts and tribunals with strategic legal solutions."
  },
  {
    question: "Can you help with contract dispute resolution?",
    answer: "Yes, we specialize in contract dispute resolution including contract drafting, breach of contract cases, contract enforcement, and representing clients in contract-related litigation and arbitration."
  },
  {
    question: "Do you provide family law services?",
    answer: "Absolutely. We provide family law services including divorce cases, child custody matters, property disputes, and family mediation with expertise in family laws and domestic relations."
  },
  {
    question: "How long does civil litigation take?",
    answer: "Civil litigation timelines vary depending on case complexity, court schedules, and procedural requirements. We work efficiently to resolve cases as quickly as possible while ensuring thorough legal representation."
  },
  {
    question: "What are your fees for civil law services?",
    answer: "Our fees are competitive and transparent, based on case complexity and scope of work. We offer flexible payment options and provide detailed fee structures during initial consultation."
  }
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return {
      title: 'Civil Law Lawyers in India | Expert Legal Services',
      description: 'Professional civil law lawyers in India. AMA Legal Solutions provides expert civil litigation, contract disputes, and civil rights representation across India.',
    };
  }

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `https://amalegalsolutions.com/services/civil/${slug}`,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `https://amalegalsolutions.com/services/civil/${slug}`,
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
    "url": `https://amalegalsolutions.com/services/civil/${content.slug}`,
    "mainEntity": {
      "@type": "FAQPage",
      "name": "Civil Law Services FAQs",
      "description": "Frequently asked questions about civil law services, civil litigation, and contract disputes",
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

export default function CivilSlugPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested civil law page could not be found.</p>
        </div>
      </div>
    );
  }

  const webPageSchema = generateWebPageSchema({ ...content, slug });

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="civil-law-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      
      <CivilClient content={content} faqs={faqs} />
    </>
  );
}
