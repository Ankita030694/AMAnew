import { Metadata } from 'next';
import Script from 'next/script';
import LoanSettlementClient from './LoanSettlementClient';

// State-specific content data for loan settlement
const stateContent = {
  'andhra-pradesh': {
    title: 'Loan Settlement Lawyers in Andhra Pradesh | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Andhra Pradesh. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Andhra Pradesh.',
    city: 'Hyderabad',
    state: 'Andhra Pradesh',
    jurisdiction: 'Andhra Pradesh High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'arunachal-pradesh': {
    title: 'Loan Settlement Lawyers in Arunachal Pradesh | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Arunachal Pradesh. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Arunachal Pradesh.',
    city: 'Itanagar',
    state: 'Arunachal Pradesh',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'assam': {
    title: 'Loan Settlement Lawyers in Assam | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Assam. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Assam.',
    city: 'Guwahati',
    state: 'Assam',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'bihar': {
    title: 'Loan Settlement Lawyers in Bihar | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Bihar. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Bihar.',
    city: 'Patna',
    state: 'Bihar',
    jurisdiction: 'Patna High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'chhattisgarh': {
    title: 'Loan Settlement Lawyers in Chhattisgarh | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Chhattisgarh. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Chhattisgarh.',
    city: 'Raipur',
    state: 'Chhattisgarh',
    jurisdiction: 'Chhattisgarh High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'goa': {
    title: 'Loan Settlement Lawyers in Goa | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Goa. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Goa.',
    city: 'Panaji',
    state: 'Goa',
    jurisdiction: 'Bombay High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'gujarat': {
    title: 'Loan Settlement Lawyers in Gujarat | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Gujarat. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Gujarat.',
    city: 'Ahmedabad',
    state: 'Gujarat',
    jurisdiction: 'Gujarat High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'haryana': {
    title: 'Loan Settlement Lawyers in Haryana | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Haryana. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Haryana.',
    city: 'Chandigarh',
    state: 'Haryana',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'himachal-pradesh': {
    title: 'Loan Settlement Lawyers in Himachal Pradesh | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Himachal Pradesh. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Himachal Pradesh.',
    city: 'Shimla',
    state: 'Himachal Pradesh',
    jurisdiction: 'Himachal Pradesh High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'jharkhand': {
    title: 'Loan Settlement Lawyers in Jharkhand | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Jharkhand. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Jharkhand.',
    city: 'Ranchi',
    state: 'Jharkhand',
    jurisdiction: 'Jharkhand High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'karnataka': {
    title: 'Loan Settlement Lawyers in Karnataka | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Karnataka. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Karnataka.',
    city: 'Bangalore',
    state: 'Karnataka',
    jurisdiction: 'Karnataka High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'kerala': {
    title: 'Loan Settlement Lawyers in Kerala | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Kerala. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Kerala.',
    city: 'Kochi',
    state: 'Kerala',
    jurisdiction: 'Kerala High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'madhya-pradesh': {
    title: 'Loan Settlement Lawyers in Madhya Pradesh | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Madhya Pradesh. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Madhya Pradesh.',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    jurisdiction: 'Madhya Pradesh High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'maharashtra': {
    title: 'Loan Settlement Lawyers in Maharashtra | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Maharashtra. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Maharashtra.',
    city: 'Mumbai',
    state: 'Maharashtra',
    jurisdiction: 'Bombay High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'manipur': {
    title: 'Loan Settlement Lawyers in Manipur | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Manipur. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Manipur.',
    city: 'Imphal',
    state: 'Manipur',
    jurisdiction: 'Manipur High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'meghalaya': {
    title: 'Loan Settlement Lawyers in Meghalaya | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Meghalaya. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Meghalaya.',
    city: 'Shillong',
    state: 'Meghalaya',
    jurisdiction: 'Meghalaya High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'mizoram': {
    title: 'Loan Settlement Lawyers in Mizoram | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Mizoram. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Mizoram.',
    city: 'Aizawl',
    state: 'Mizoram',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'nagaland': {
    title: 'Loan Settlement Lawyers in Nagaland | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Nagaland. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Nagaland.',
    city: 'Kohima',
    state: 'Nagaland',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'odisha': {
    title: 'Loan Settlement Lawyers in Odisha | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Odisha. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Odisha.',
    city: 'Bhubaneswar',
    state: 'Odisha',
    jurisdiction: 'Orissa High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'punjab': {
    title: 'Loan Settlement Lawyers in Punjab | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Punjab. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Punjab.',
    city: 'Chandigarh',
    state: 'Punjab',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'rajasthan': {
    title: 'Loan Settlement Lawyers in Rajasthan | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Rajasthan. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Rajasthan.',
    city: 'Jaipur',
    state: 'Rajasthan',
    jurisdiction: 'Rajasthan High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'sikkim': {
    title: 'Loan Settlement Lawyers in Sikkim | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Sikkim. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Sikkim.',
    city: 'Gangtok',
    state: 'Sikkim',
    jurisdiction: 'Sikkim High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'tamil-nadu': {
    title: 'Loan Settlement Lawyers in Tamil Nadu | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Tamil Nadu. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Tamil Nadu.',
    city: 'Chennai',
    state: 'Tamil Nadu',
    jurisdiction: 'Madras High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'telangana': {
    title: 'Loan Settlement Lawyers in Telangana | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Telangana. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Telangana.',
    city: 'Hyderabad',
    state: 'Telangana',
    jurisdiction: 'Telangana High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'tripura': {
    title: 'Loan Settlement Lawyers in Tripura | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Tripura. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Tripura.',
    city: 'Agartala',
    state: 'Tripura',
    jurisdiction: 'Tripura High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'uttar-pradesh': {
    title: 'Loan Settlement Lawyers in Uttar Pradesh | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Uttar Pradesh. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Uttar Pradesh.',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    jurisdiction: 'Allahabad High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'uttarakhand': {
    title: 'Loan Settlement Lawyers in Uttarakhand | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Uttarakhand. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Uttarakhand.',
    city: 'Dehradun',
    state: 'Uttarakhand',
    jurisdiction: 'Uttarakhand High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'west-bengal': {
    title: 'Loan Settlement Lawyers in West Bengal | Expert Legal Services',
    description: 'Professional loan settlement lawyers in West Bengal. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across West Bengal.',
    city: 'Kolkata',
    state: 'West Bengal',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  }
};

// Union Territories content for loan settlement
const unionTerritoryContent = {
  'andaman-and-nicobar': {
    title: 'Loan Settlement Lawyers in Andaman and Nicobar | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Andaman and Nicobar. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Andaman and Nicobar.',
    city: 'Port Blair',
    state: 'Andaman and Nicobar',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'chandigarh': {
    title: 'Loan Settlement Lawyers in Chandigarh | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Chandigarh. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Chandigarh.',
    city: 'Chandigarh',
    state: 'Chandigarh',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'daman-and-diu': {
    title: 'Loan Settlement Lawyers in Daman and Diu | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Daman and Diu. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Daman and Diu.',
    city: 'Daman',
    state: 'Daman and Diu',
    jurisdiction: 'Bombay High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'delhi': {
    title: 'Loan Settlement Lawyers in Delhi | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Delhi. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Delhi.',
    city: 'New Delhi',
    state: 'Delhi',
    jurisdiction: 'Delhi High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'jammu-and-kashmir': {
    title: 'Loan Settlement Lawyers in Jammu and Kashmir | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Jammu and Kashmir. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Jammu and Kashmir.',
    city: 'Srinagar',
    state: 'Jammu and Kashmir',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'ladakh': {
    title: 'Loan Settlement Lawyers in Ladakh | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Ladakh. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Ladakh.',
    city: 'Leh',
    state: 'Ladakh',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'lakshadweep': {
    title: 'Loan Settlement Lawyers in Lakshadweep | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Lakshadweep. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Lakshadweep.',
    city: 'Kavaratti',
    state: 'Lakshadweep',
    jurisdiction: 'Kerala High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  },
  'puducherry': {
    title: 'Loan Settlement Lawyers in Puducherry | Expert Legal Services',
    description: 'Professional loan settlement lawyers in Puducherry. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across Puducherry.',
    city: 'Puducherry',
    state: 'Puducherry',
    jurisdiction: 'Madras High Court',
    specializations: ['Loan Settlement', 'Debt Settlement', 'Loan Restructuring', 'Financial Legal Support']
  }
};

// FAQ data for loan settlement services
const faqs = [
  {
    question: "What types of loan settlement services do you provide?",
    answer: "We provide comprehensive loan settlement services including debt settlement, loan restructuring, loan negotiation, and financial legal support. Our loan settlement lawyers handle all aspects of loan settlement and debt resolution."
  },
  {
    question: "How do you handle loan settlement negotiations?",
    answer: "We handle loan settlement negotiations including principal reduction, interest rate reduction, payment restructuring, and settlement agreements. Our loan settlement lawyers provide expert negotiation services with lenders."
  },
  {
    question: "Can you help with debt settlement?",
    answer: "Yes, we specialize in debt settlement including debt consolidation, debt negotiation, debt restructuring, and comprehensive debt resolution strategies with expert legal representation."
  },
  {
    question: "Do you handle loan restructuring?",
    answer: "Absolutely. We handle loan restructuring including payment restructuring, interest rate modification, loan term extension, and comprehensive loan restructuring with legal documentation."
  },
  {
    question: "What is the process for loan settlement consultation?",
    answer: "Our loan settlement consultation process includes financial analysis, debt assessment, settlement strategy development, negotiation planning, and ongoing legal support throughout the settlement process."
  },
  {
    question: "How long do loan settlement cases take?",
    answer: "Loan settlement case timelines vary depending on case complexity, lender cooperation, and settlement terms. We work efficiently to resolve loan settlement matters while ensuring favorable settlement terms."
  }
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return {
      title: 'Loan Settlement Lawyers in India | Expert Legal Services',
      description: 'Professional loan settlement lawyers in India. AMA Legal Solutions provides expert loan settlement services, debt settlement, loan restructuring, and financial legal support across India.',
    };
  }

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `https://amalegalsolutions.com/services/loan-settlement/${slug}`,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `https://amalegalsolutions.com/services/loan-settlement/${slug}`,
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
    "url": `https://amalegalsolutions.com/services/loan-settlement/${content.slug}`,
    "mainEntity": {
      "@type": "FAQPage",
      "name": "Loan Settlement Services FAQs",
      "description": "Frequently asked questions about loan settlement services, debt settlement, and loan restructuring",
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

export default function LoanSettlementSlugPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested loan settlement page could not be found.</p>
        </div>
      </div>
    );
  }

  const webPageSchema = generateWebPageSchema({ ...content, slug });

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="loan-settlement-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      
      <LoanSettlementClient content={content} faqs={faqs} />
    </>
  );
}
