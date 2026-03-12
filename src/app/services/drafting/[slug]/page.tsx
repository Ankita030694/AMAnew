import { Metadata } from 'next';
import Script from 'next/script';
import DraftingClient from './DraftingClient';

// State-specific content data for drafting law
const stateContent = {
  'andhra-pradesh': {
    title: 'Legal Drafting Lawyers in Andhra Pradesh | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Andhra Pradesh. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Andhra Pradesh.',
    city: 'Hyderabad',
    state: 'Andhra Pradesh',
    jurisdiction: 'Andhra Pradesh High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'arunachal-pradesh': {
    title: 'Legal Drafting Lawyers in Arunachal Pradesh | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Arunachal Pradesh. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Arunachal Pradesh.',
    city: 'Itanagar',
    state: 'Arunachal Pradesh',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'assam': {
    title: 'Legal Drafting Lawyers in Assam | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Assam. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Assam.',
    city: 'Guwahati',
    state: 'Assam',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'bihar': {
    title: 'Legal Drafting Lawyers in Bihar | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Bihar. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Bihar.',
    city: 'Patna',
    state: 'Bihar',
    jurisdiction: 'Patna High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'chhattisgarh': {
    title: 'Legal Drafting Lawyers in Chhattisgarh | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Chhattisgarh. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Chhattisgarh.',
    city: 'Raipur',
    state: 'Chhattisgarh',
    jurisdiction: 'Chhattisgarh High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'goa': {
    title: 'Legal Drafting Lawyers in Goa | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Goa. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Goa.',
    city: 'Panaji',
    state: 'Goa',
    jurisdiction: 'Bombay High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'gujarat': {
    title: 'Legal Drafting Lawyers in Gujarat | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Gujarat. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Gujarat.',
    city: 'Ahmedabad',
    state: 'Gujarat',
    jurisdiction: 'Gujarat High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'haryana': {
    title: 'Legal Drafting Lawyers in Haryana | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Haryana. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Haryana.',
    city: 'Chandigarh',
    state: 'Haryana',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'himachal-pradesh': {
    title: 'Legal Drafting Lawyers in Himachal Pradesh | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Himachal Pradesh. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Himachal Pradesh.',
    city: 'Shimla',
    state: 'Himachal Pradesh',
    jurisdiction: 'Himachal Pradesh High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'jharkhand': {
    title: 'Legal Drafting Lawyers in Jharkhand | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Jharkhand. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Jharkhand.',
    city: 'Ranchi',
    state: 'Jharkhand',
    jurisdiction: 'Jharkhand High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'karnataka': {
    title: 'Legal Drafting Lawyers in Karnataka | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Karnataka. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Karnataka.',
    city: 'Bangalore',
    state: 'Karnataka',
    jurisdiction: 'Karnataka High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'kerala': {
    title: 'Legal Drafting Lawyers in Kerala | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Kerala. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Kerala.',
    city: 'Kochi',
    state: 'Kerala',
    jurisdiction: 'Kerala High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'madhya-pradesh': {
    title: 'Legal Drafting Lawyers in Madhya Pradesh | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Madhya Pradesh. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Madhya Pradesh.',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    jurisdiction: 'Madhya Pradesh High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'maharashtra': {
    title: 'Legal Drafting Lawyers in Maharashtra | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Maharashtra. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Maharashtra.',
    city: 'Mumbai',
    state: 'Maharashtra',
    jurisdiction: 'Bombay High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'manipur': {
    title: 'Legal Drafting Lawyers in Manipur | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Manipur. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Manipur.',
    city: 'Imphal',
    state: 'Manipur',
    jurisdiction: 'Manipur High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'meghalaya': {
    title: 'Legal Drafting Lawyers in Meghalaya | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Meghalaya. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Meghalaya.',
    city: 'Shillong',
    state: 'Meghalaya',
    jurisdiction: 'Meghalaya High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'mizoram': {
    title: 'Legal Drafting Lawyers in Mizoram | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Mizoram. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Mizoram.',
    city: 'Aizawl',
    state: 'Mizoram',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'nagaland': {
    title: 'Legal Drafting Lawyers in Nagaland | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Nagaland. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Nagaland.',
    city: 'Kohima',
    state: 'Nagaland',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'odisha': {
    title: 'Legal Drafting Lawyers in Odisha | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Odisha. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Odisha.',
    city: 'Bhubaneswar',
    state: 'Odisha',
    jurisdiction: 'Orissa High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'punjab': {
    title: 'Legal Drafting Lawyers in Punjab | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Punjab. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Punjab.',
    city: 'Chandigarh',
    state: 'Punjab',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'rajasthan': {
    title: 'Legal Drafting Lawyers in Rajasthan | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Rajasthan. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Rajasthan.',
    city: 'Jaipur',
    state: 'Rajasthan',
    jurisdiction: 'Rajasthan High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'sikkim': {
    title: 'Legal Drafting Lawyers in Sikkim | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Sikkim. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Sikkim.',
    city: 'Gangtok',
    state: 'Sikkim',
    jurisdiction: 'Sikkim High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'tamil-nadu': {
    title: 'Legal Drafting Lawyers in Tamil Nadu | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Tamil Nadu. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Tamil Nadu.',
    city: 'Chennai',
    state: 'Tamil Nadu',
    jurisdiction: 'Madras High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'telangana': {
    title: 'Legal Drafting Lawyers in Telangana | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Telangana. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Telangana.',
    city: 'Hyderabad',
    state: 'Telangana',
    jurisdiction: 'Telangana High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'tripura': {
    title: 'Legal Drafting Lawyers in Tripura | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Tripura. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Tripura.',
    city: 'Agartala',
    state: 'Tripura',
    jurisdiction: 'Tripura High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'uttar-pradesh': {
    title: 'Legal Drafting Lawyers in Uttar Pradesh | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Uttar Pradesh. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Uttar Pradesh.',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    jurisdiction: 'Allahabad High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'uttarakhand': {
    title: 'Legal Drafting Lawyers in Uttarakhand | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Uttarakhand. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Uttarakhand.',
    city: 'Dehradun',
    state: 'Uttarakhand',
    jurisdiction: 'Uttarakhand High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'west-bengal': {
    title: 'Legal Drafting Lawyers in West Bengal | Expert Legal Services',
    description: 'Professional legal drafting lawyers in West Bengal. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across West Bengal.',
    city: 'Kolkata',
    state: 'West Bengal',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  }
};

// Union Territories content for drafting law
const unionTerritoryContent = {
  'andaman-and-nicobar': {
    title: 'Legal Drafting Lawyers in Andaman and Nicobar | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Andaman and Nicobar. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Andaman and Nicobar.',
    city: 'Port Blair',
    state: 'Andaman and Nicobar',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'chandigarh': {
    title: 'Legal Drafting Lawyers in Chandigarh | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Chandigarh. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Chandigarh.',
    city: 'Chandigarh',
    state: 'Chandigarh',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'daman-and-diu': {
    title: 'Legal Drafting Lawyers in Daman and Diu | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Daman and Diu. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Daman and Diu.',
    city: 'Daman',
    state: 'Daman and Diu',
    jurisdiction: 'Bombay High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'delhi': {
    title: 'Legal Drafting Lawyers in Delhi | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Delhi. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Delhi.',
    city: 'New Delhi',
    state: 'Delhi',
    jurisdiction: 'Delhi High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'jammu-and-kashmir': {
    title: 'Legal Drafting Lawyers in Jammu and Kashmir | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Jammu and Kashmir. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Jammu and Kashmir.',
    city: 'Srinagar',
    state: 'Jammu and Kashmir',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'ladakh': {
    title: 'Legal Drafting Lawyers in Ladakh | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Ladakh. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Ladakh.',
    city: 'Leh',
    state: 'Ladakh',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'lakshadweep': {
    title: 'Legal Drafting Lawyers in Lakshadweep | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Lakshadweep. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Lakshadweep.',
    city: 'Kavaratti',
    state: 'Lakshadweep',
    jurisdiction: 'Kerala High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  },
  'puducherry': {
    title: 'Legal Drafting Lawyers in Puducherry | Expert Legal Services',
    description: 'Professional legal drafting lawyers in Puducherry. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across Puducherry.',
    city: 'Puducherry',
    state: 'Puducherry',
    jurisdiction: 'Madras High Court',
    specializations: ['Contract Drafting', 'Legal Document Writing', 'Agreement Drafting', 'Legal Opinion Writing']
  }
};

// FAQ data for drafting law services
const faqs = [
  {
    question: "What types of legal drafting services do you provide?",
    answer: "We provide comprehensive legal drafting services including contract drafting, legal document writing, agreement drafting, legal opinion writing, and legal notice drafting. Our drafting lawyers handle all aspects of legal document preparation."
  },
  {
    question: "How do you handle contract drafting?",
    answer: "We handle contract drafting including commercial contracts, employment agreements, partnership agreements, and service contracts. Our drafting lawyers provide expert contract preparation with proper legal clauses and protections."
  },
  {
    question: "Can you help with legal document writing?",
    answer: "Yes, we specialize in legal document writing including legal notices, legal opinions, legal memoranda, and various legal documents with proper legal language and structure."
  },
  {
    question: "Do you handle agreement drafting?",
    answer: "Absolutely. We handle agreement drafting including business agreements, property agreements, service agreements, and various commercial agreements with comprehensive legal terms and conditions."
  },
  {
    question: "What is the process for legal drafting?",
    answer: "Our legal drafting process includes requirement analysis, legal research, document preparation, review and revision, and finalization with proper legal language and structure."
  },
  {
    question: "How long does legal drafting take?",
    answer: "Legal drafting timelines vary depending on document complexity, legal requirements, and client specifications. We work efficiently to deliver high-quality legal documents within agreed timelines."
  }
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return {
      title: 'Legal Drafting Lawyers in India | Expert Legal Services',
      description: 'Professional legal drafting lawyers in India. AMA Legal Solutions provides expert legal document drafting, contract drafting, and legal writing services across India.',
    };
  }

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `https://www.amalegalsolutions.com/services/drafting/${slug}`,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `https://www.amalegalsolutions.com/services/drafting/${slug}`,
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
    "url": `https://www.amalegalsolutions.com/services/drafting/${content.slug}`,
    "mainEntity": {
      "name": "Legal Drafting Services FAQs",
      "description": "Frequently asked questions about legal drafting services, contract drafting, and legal document writing",
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

export default async function DraftingSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested legal drafting page could not be found.</p>
        </div>
      </div>
    );
  }

  const webPageSchema = generateWebPageSchema({ ...content, slug });

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="drafting-law-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      
      <DraftingClient content={content} faqs={faqs} />
    </>
  );
}
