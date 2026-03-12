import { Metadata } from 'next';
import Script from 'next/script';
import RealEstateClient from './RealEstateClient';

// State-specific content data for real estate
const stateContent = {
  'andhra-pradesh': {
    title: 'Real Estate Lawyers in Andhra Pradesh | Expert Legal Services',
    description: 'Professional real estate lawyers in Andhra Pradesh. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Andhra Pradesh.',
    city: 'Hyderabad',
    state: 'Andhra Pradesh',
    jurisdiction: 'Andhra Pradesh High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'arunachal-pradesh': {
    title: 'Real Estate Lawyers in Arunachal Pradesh | Expert Legal Services',
    description: 'Professional real estate lawyers in Arunachal Pradesh. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Arunachal Pradesh.',
    city: 'Itanagar',
    state: 'Arunachal Pradesh',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'assam': {
    title: 'Real Estate Lawyers in Assam | Expert Legal Services',
    description: 'Professional real estate lawyers in Assam. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Assam.',
    city: 'Guwahati',
    state: 'Assam',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'bihar': {
    title: 'Real Estate Lawyers in Bihar | Expert Legal Services',
    description: 'Professional real estate lawyers in Bihar. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Bihar.',
    city: 'Patna',
    state: 'Bihar',
    jurisdiction: 'Patna High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'chhattisgarh': {
    title: 'Real Estate Lawyers in Chhattisgarh | Expert Legal Services',
    description: 'Professional real estate lawyers in Chhattisgarh. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Chhattisgarh.',
    city: 'Raipur',
    state: 'Chhattisgarh',
    jurisdiction: 'Chhattisgarh High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'goa': {
    title: 'Real Estate Lawyers in Goa | Expert Legal Services',
    description: 'Professional real estate lawyers in Goa. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Goa.',
    city: 'Panaji',
    state: 'Goa',
    jurisdiction: 'Bombay High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'gujarat': {
    title: 'Real Estate Lawyers in Gujarat | Expert Legal Services',
    description: 'Professional real estate lawyers in Gujarat. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Gujarat.',
    city: 'Ahmedabad',
    state: 'Gujarat',
    jurisdiction: 'Gujarat High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'haryana': {
    title: 'Real Estate Lawyers in Haryana | Expert Legal Services',
    description: 'Professional real estate lawyers in Haryana. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Haryana.',
    city: 'Chandigarh',
    state: 'Haryana',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'himachal-pradesh': {
    title: 'Real Estate Lawyers in Himachal Pradesh | Expert Legal Services',
    description: 'Professional real estate lawyers in Himachal Pradesh. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Himachal Pradesh.',
    city: 'Shimla',
    state: 'Himachal Pradesh',
    jurisdiction: 'Himachal Pradesh High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'jharkhand': {
    title: 'Real Estate Lawyers in Jharkhand | Expert Legal Services',
    description: 'Professional real estate lawyers in Jharkhand. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Jharkhand.',
    city: 'Ranchi',
    state: 'Jharkhand',
    jurisdiction: 'Jharkhand High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'karnataka': {
    title: 'Real Estate Lawyers in Karnataka | Expert Legal Services',
    description: 'Professional real estate lawyers in Karnataka. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Karnataka.',
    city: 'Bangalore',
    state: 'Karnataka',
    jurisdiction: 'Karnataka High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'kerala': {
    title: 'Real Estate Lawyers in Kerala | Expert Legal Services',
    description: 'Professional real estate lawyers in Kerala. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Kerala.',
    city: 'Kochi',
    state: 'Kerala',
    jurisdiction: 'Kerala High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'madhya-pradesh': {
    title: 'Real Estate Lawyers in Madhya Pradesh | Expert Legal Services',
    description: 'Professional real estate lawyers in Madhya Pradesh. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Madhya Pradesh.',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    jurisdiction: 'Madhya Pradesh High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'maharashtra': {
    title: 'Real Estate Lawyers in Maharashtra | Expert Legal Services',
    description: 'Professional real estate lawyers in Maharashtra. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Maharashtra.',
    city: 'Mumbai',
    state: 'Maharashtra',
    jurisdiction: 'Bombay High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'manipur': {
    title: 'Real Estate Lawyers in Manipur | Expert Legal Services',
    description: 'Professional real estate lawyers in Manipur. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Manipur.',
    city: 'Imphal',
    state: 'Manipur',
    jurisdiction: 'Manipur High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'meghalaya': {
    title: 'Real Estate Lawyers in Meghalaya | Expert Legal Services',
    description: 'Professional real estate lawyers in Meghalaya. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Meghalaya.',
    city: 'Shillong',
    state: 'Meghalaya',
    jurisdiction: 'Meghalaya High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'mizoram': {
    title: 'Real Estate Lawyers in Mizoram | Expert Legal Services',
    description: 'Professional real estate lawyers in Mizoram. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Mizoram.',
    city: 'Aizawl',
    state: 'Mizoram',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'nagaland': {
    title: 'Real Estate Lawyers in Nagaland | Expert Legal Services',
    description: 'Professional real estate lawyers in Nagaland. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Nagaland.',
    city: 'Kohima',
    state: 'Nagaland',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'odisha': {
    title: 'Real Estate Lawyers in Odisha | Expert Legal Services',
    description: 'Professional real estate lawyers in Odisha. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Odisha.',
    city: 'Bhubaneswar',
    state: 'Odisha',
    jurisdiction: 'Orissa High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'punjab': {
    title: 'Real Estate Lawyers in Punjab | Expert Legal Services',
    description: 'Professional real estate lawyers in Punjab. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Punjab.',
    city: 'Chandigarh',
    state: 'Punjab',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'rajasthan': {
    title: 'Real Estate Lawyers in Rajasthan | Expert Legal Services',
    description: 'Professional real estate lawyers in Rajasthan. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Rajasthan.',
    city: 'Jaipur',
    state: 'Rajasthan',
    jurisdiction: 'Rajasthan High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'sikkim': {
    title: 'Real Estate Lawyers in Sikkim | Expert Legal Services',
    description: 'Professional real estate lawyers in Sikkim. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Sikkim.',
    city: 'Gangtok',
    state: 'Sikkim',
    jurisdiction: 'Sikkim High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'tamil-nadu': {
    title: 'Real Estate Lawyers in Tamil Nadu | Expert Legal Services',
    description: 'Professional real estate lawyers in Tamil Nadu. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Tamil Nadu.',
    city: 'Chennai',
    state: 'Tamil Nadu',
    jurisdiction: 'Madras High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'telangana': {
    title: 'Real Estate Lawyers in Telangana | Expert Legal Services',
    description: 'Professional real estate lawyers in Telangana. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Telangana.',
    city: 'Hyderabad',
    state: 'Telangana',
    jurisdiction: 'Telangana High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'tripura': {
    title: 'Real Estate Lawyers in Tripura | Expert Legal Services',
    description: 'Professional real estate lawyers in Tripura. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Tripura.',
    city: 'Agartala',
    state: 'Tripura',
    jurisdiction: 'Tripura High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'uttar-pradesh': {
    title: 'Real Estate Lawyers in Uttar Pradesh | Expert Legal Services',
    description: 'Professional real estate lawyers in Uttar Pradesh. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Uttar Pradesh.',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    jurisdiction: 'Allahabad High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'uttarakhand': {
    title: 'Real Estate Lawyers in Uttarakhand | Expert Legal Services',
    description: 'Professional real estate lawyers in Uttarakhand. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Uttarakhand.',
    city: 'Dehradun',
    state: 'Uttarakhand',
    jurisdiction: 'Uttarakhand High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'west-bengal': {
    title: 'Real Estate Lawyers in West Bengal | Expert Legal Services',
    description: 'Professional real estate lawyers in West Bengal. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across West Bengal.',
    city: 'Kolkata',
    state: 'West Bengal',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  }
};

// Union Territories content for real estate
const unionTerritoryContent = {
  'andaman-and-nicobar': {
    title: 'Real Estate Lawyers in Andaman and Nicobar | Expert Legal Services',
    description: 'Professional real estate lawyers in Andaman and Nicobar. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Andaman and Nicobar.',
    city: 'Port Blair',
    state: 'Andaman and Nicobar',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'chandigarh': {
    title: 'Real Estate Lawyers in Chandigarh | Expert Legal Services',
    description: 'Professional real estate lawyers in Chandigarh. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Chandigarh.',
    city: 'Chandigarh',
    state: 'Chandigarh',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'daman-and-diu': {
    title: 'Real Estate Lawyers in Daman and Diu | Expert Legal Services',
    description: 'Professional real estate lawyers in Daman and Diu. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Daman and Diu.',
    city: 'Daman',
    state: 'Daman and Diu',
    jurisdiction: 'Bombay High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'delhi': {
    title: 'Real Estate Lawyers in Delhi | Expert Legal Services',
    description: 'Professional real estate lawyers in Delhi. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Delhi.',
    city: 'New Delhi',
    state: 'Delhi',
    jurisdiction: 'Delhi High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'jammu-and-kashmir': {
    title: 'Real Estate Lawyers in Jammu and Kashmir | Expert Legal Services',
    description: 'Professional real estate lawyers in Jammu and Kashmir. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Jammu and Kashmir.',
    city: 'Srinagar',
    state: 'Jammu and Kashmir',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'ladakh': {
    title: 'Real Estate Lawyers in Ladakh | Expert Legal Services',
    description: 'Professional real estate lawyers in Ladakh. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Ladakh.',
    city: 'Leh',
    state: 'Ladakh',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'lakshadweep': {
    title: 'Real Estate Lawyers in Lakshadweep | Expert Legal Services',
    description: 'Professional real estate lawyers in Lakshadweep. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Lakshadweep.',
    city: 'Kavaratti',
    state: 'Lakshadweep',
    jurisdiction: 'Kerala High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  },
  'puducherry': {
    title: 'Real Estate Lawyers in Puducherry | Expert Legal Services',
    description: 'Professional real estate lawyers in Puducherry. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across Puducherry.',
    city: 'Puducherry',
    state: 'Puducherry',
    jurisdiction: 'Madras High Court',
    specializations: ['Property Law', 'Real Estate Transactions', 'Property Disputes', 'Real Estate Legal Support']
  }
};

// FAQ data for real estate services
const faqs = [
  {
    question: "What types of real estate services do you provide?",
    answer: "We provide comprehensive real estate services including property law, real estate transactions, property disputes, real estate legal support, and property documentation. Our real estate lawyers handle all aspects of real estate legal matters."
  },
  {
    question: "How do you handle real estate transactions?",
    answer: "We handle real estate transactions including property purchase, property sale, property transfer, and property registration. Our real estate lawyers provide expert legal support throughout the transaction process."
  },
  {
    question: "Can you help with property disputes?",
    answer: "Yes, we specialize in property disputes including property ownership disputes, property boundary disputes, property title disputes, and comprehensive property dispute resolution with expert legal representation."
  },
  {
    question: "Do you handle property law matters?",
    answer: "Absolutely. We handle property law matters including property documentation, property registration, property compliance, and comprehensive property legal advisory services with expert legal support."
  },
  {
    question: "What is the process for real estate consultation?",
    answer: "Our real estate consultation process includes property analysis, legal requirement assessment, transaction planning, documentation review, and ongoing real estate legal support throughout the process."
  },
  {
    question: "How long do real estate cases take?",
    answer: "Real estate case timelines vary depending on case complexity, property type, and legal procedures. We work efficiently to resolve real estate matters while ensuring thorough legal representation and protection."
  }
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return {
      title: 'Real Estate Lawyers in India | Expert Legal Services',
      description: 'Professional real estate lawyers in India. AMA Legal Solutions provides expert real estate legal services, property law, real estate transactions, and property disputes across India.',
    };
  }

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `https://www.amalegalsolutions.com/services/real-estate/${slug}`,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `https://www.amalegalsolutions.com/services/real-estate/${slug}`,
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
    "url": `https://www.amalegalsolutions.com/services/real-estate/${content.slug}`,
    "mainEntity": {
      "name": "Real Estate Services FAQs",
      "description": "Frequently asked questions about real estate services, property law, and real estate transactions",
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

export default async function RealEstateSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested real estate page could not be found.</p>
        </div>
      </div>
    );
  }

  const webPageSchema = generateWebPageSchema({ ...content, slug });

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="real-estate-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      
      <RealEstateClient content={content} faqs={faqs} />
    </>
  );
}
