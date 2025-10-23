import { Metadata } from 'next';
import Script from 'next/script';
import CorporateClient from './CorporateClient';

// State-specific content data for corporate law
const stateContent = {
  'andhra-pradesh': {
    title: 'Corporate Lawyers in Andhra Pradesh | Expert Legal Services',
    description: 'Professional corporate lawyers in Andhra Pradesh. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Andhra Pradesh.',
    city: 'Hyderabad',
    state: 'Andhra Pradesh',
    jurisdiction: 'Andhra Pradesh High Court',
    specializations: ['Company Registration', 'Startup Compliance', 'Contract Drafting', 'Corporate Governance']
  },
  'arunachal-pradesh': {
    title: 'Corporate Lawyers in Arunachal Pradesh | Expert Legal Services',
    description: 'Professional corporate lawyers in Arunachal Pradesh. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Arunachal Pradesh.',
    city: 'Itanagar',
    state: 'Arunachal Pradesh',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Company Registration', 'Startup Compliance', 'Contract Drafting', 'Corporate Governance']
  },
  'assam': {
    title: 'Corporate Lawyers in Assam | Expert Legal Services',
    description: 'Professional corporate lawyers in Assam. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Assam.',
    city: 'Guwahati',
    state: 'Assam',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Company Registration', 'Oil & Gas Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'bihar': {
    title: 'Corporate Lawyers in Bihar | Expert Legal Services',
    description: 'Professional corporate lawyers in Bihar. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Bihar.',
    city: 'Patna',
    state: 'Bihar',
    jurisdiction: 'Patna High Court',
    specializations: ['Company Registration', 'Agricultural Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'chhattisgarh': {
    title: 'Corporate Lawyers in Chhattisgarh | Expert Legal Services',
    description: 'Professional corporate lawyers in Chhattisgarh. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Chhattisgarh.',
    city: 'Raipur',
    state: 'Chhattisgarh',
    jurisdiction: 'Chhattisgarh High Court',
    specializations: ['Company Registration', 'Mining Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'goa': {
    title: 'Corporate Lawyers in Goa | Expert Legal Services',
    description: 'Professional corporate lawyers in Goa. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Goa.',
    city: 'Panaji',
    state: 'Goa',
    jurisdiction: 'Bombay High Court',
    specializations: ['Company Registration', 'Tourism Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'gujarat': {
    title: 'Corporate Lawyers in Gujarat | Expert Legal Services',
    description: 'Professional corporate lawyers in Gujarat. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Gujarat.',
    city: 'Ahmedabad',
    state: 'Gujarat',
    jurisdiction: 'Gujarat High Court',
    specializations: ['Company Registration', 'Textile Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'haryana': {
    title: 'Corporate Lawyers in Haryana | Expert Legal Services',
    description: 'Professional corporate lawyers in Haryana. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Haryana.',
    city: 'Chandigarh',
    state: 'Haryana',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Company Registration', 'Automobile Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'himachal-pradesh': {
    title: 'Corporate Lawyers in Himachal Pradesh | Expert Legal Services',
    description: 'Professional corporate lawyers in Himachal Pradesh. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Himachal Pradesh.',
    city: 'Shimla',
    state: 'Himachal Pradesh',
    jurisdiction: 'Himachal Pradesh High Court',
    specializations: ['Company Registration', 'Tourism Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'jharkhand': {
    title: 'Corporate Lawyers in Jharkhand | Expert Legal Services',
    description: 'Professional corporate lawyers in Jharkhand. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Jharkhand.',
    city: 'Ranchi',
    state: 'Jharkhand',
    jurisdiction: 'Jharkhand High Court',
    specializations: ['Company Registration', 'Mining Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'karnataka': {
    title: 'Corporate Lawyers in Karnataka | Expert Legal Services',
    description: 'Professional corporate lawyers in Karnataka. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Karnataka.',
    city: 'Bangalore',
    state: 'Karnataka',
    jurisdiction: 'Karnataka High Court',
    specializations: ['Company Registration', 'IT Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'kerala': {
    title: 'Corporate Lawyers in Kerala | Expert Legal Services',
    description: 'Professional corporate lawyers in Kerala. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Kerala.',
    city: 'Kochi',
    state: 'Kerala',
    jurisdiction: 'Kerala High Court',
    specializations: ['Company Registration', 'Tourism Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'madhya-pradesh': {
    title: 'Corporate Lawyers in Madhya Pradesh | Expert Legal Services',
    description: 'Professional corporate lawyers in Madhya Pradesh. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Madhya Pradesh.',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    jurisdiction: 'Madhya Pradesh High Court',
    specializations: ['Company Registration', 'Agricultural Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'maharashtra': {
    title: 'Corporate Lawyers in Maharashtra | Expert Legal Services',
    description: 'Professional corporate lawyers in Maharashtra. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Maharashtra.',
    city: 'Mumbai',
    state: 'Maharashtra',
    jurisdiction: 'Bombay High Court',
    specializations: ['Company Registration', 'Corporate Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'manipur': {
    title: 'Corporate Lawyers in Manipur | Expert Legal Services',
    description: 'Professional corporate lawyers in Manipur. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Manipur.',
    city: 'Imphal',
    state: 'Manipur',
    jurisdiction: 'Manipur High Court',
    specializations: ['Company Registration', 'Agricultural Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'meghalaya': {
    title: 'Corporate Lawyers in Meghalaya | Expert Legal Services',
    description: 'Professional corporate lawyers in Meghalaya. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Meghalaya.',
    city: 'Shillong',
    state: 'Meghalaya',
    jurisdiction: 'Meghalaya High Court',
    specializations: ['Company Registration', 'Mining Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'mizoram': {
    title: 'Corporate Lawyers in Mizoram | Expert Legal Services',
    description: 'Professional corporate lawyers in Mizoram. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Mizoram.',
    city: 'Aizawl',
    state: 'Mizoram',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Company Registration', 'Agricultural Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'nagaland': {
    title: 'Corporate Lawyers in Nagaland | Expert Legal Services',
    description: 'Professional corporate lawyers in Nagaland. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Nagaland.',
    city: 'Kohima',
    state: 'Nagaland',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Company Registration', 'Agricultural Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'odisha': {
    title: 'Corporate Lawyers in Odisha | Expert Legal Services',
    description: 'Professional corporate lawyers in Odisha. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Odisha.',
    city: 'Bhubaneswar',
    state: 'Odisha',
    jurisdiction: 'Orissa High Court',
    specializations: ['Company Registration', 'Mining Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'punjab': {
    title: 'Corporate Lawyers in Punjab | Expert Legal Services',
    description: 'Professional corporate lawyers in Punjab. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Punjab.',
    city: 'Chandigarh',
    state: 'Punjab',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Company Registration', 'Agricultural Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'rajasthan': {
    title: 'Corporate Lawyers in Rajasthan | Expert Legal Services',
    description: 'Professional corporate lawyers in Rajasthan. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Rajasthan.',
    city: 'Jaipur',
    state: 'Rajasthan',
    jurisdiction: 'Rajasthan High Court',
    specializations: ['Company Registration', 'Mining Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'sikkim': {
    title: 'Corporate Lawyers in Sikkim | Expert Legal Services',
    description: 'Professional corporate lawyers in Sikkim. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Sikkim.',
    city: 'Gangtok',
    state: 'Sikkim',
    jurisdiction: 'Sikkim High Court',
    specializations: ['Company Registration', 'Tourism Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'tamil-nadu': {
    title: 'Corporate Lawyers in Tamil Nadu | Expert Legal Services',
    description: 'Professional corporate lawyers in Tamil Nadu. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Tamil Nadu.',
    city: 'Chennai',
    state: 'Tamil Nadu',
    jurisdiction: 'Madras High Court',
    specializations: ['Company Registration', 'IT Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'telangana': {
    title: 'Corporate Lawyers in Telangana | Expert Legal Services',
    description: 'Professional corporate lawyers in Telangana. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Telangana.',
    city: 'Hyderabad',
    state: 'Telangana',
    jurisdiction: 'Telangana High Court',
    specializations: ['Company Registration', 'IT Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'tripura': {
    title: 'Corporate Lawyers in Tripura | Expert Legal Services',
    description: 'Professional corporate lawyers in Tripura. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Tripura.',
    city: 'Agartala',
    state: 'Tripura',
    jurisdiction: 'Tripura High Court',
    specializations: ['Company Registration', 'Agricultural Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'uttar-pradesh': {
    title: 'Corporate Lawyers in Uttar Pradesh | Expert Legal Services',
    description: 'Professional corporate lawyers in Uttar Pradesh. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Uttar Pradesh.',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    jurisdiction: 'Allahabad High Court',
    specializations: ['Company Registration', 'Agricultural Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'uttarakhand': {
    title: 'Corporate Lawyers in Uttarakhand | Expert Legal Services',
    description: 'Professional corporate lawyers in Uttarakhand. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Uttarakhand.',
    city: 'Dehradun',
    state: 'Uttarakhand',
    jurisdiction: 'Uttarakhand High Court',
    specializations: ['Company Registration', 'Tourism Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'west-bengal': {
    title: 'Corporate Lawyers in West Bengal | Expert Legal Services',
    description: 'Professional corporate lawyers in West Bengal. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across West Bengal.',
    city: 'Kolkata',
    state: 'West Bengal',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Company Registration', 'Corporate Startups', 'Contract Drafting', 'Corporate Governance']
  }
};

// Union Territories content for corporate law
const unionTerritoryContent = {
  'andaman-and-nicobar': {
    title: 'Corporate Lawyers in Andaman and Nicobar | Expert Legal Services',
    description: 'Professional corporate lawyers in Andaman and Nicobar. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Andaman and Nicobar.',
    city: 'Port Blair',
    state: 'Andaman and Nicobar',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Company Registration', 'Tourism Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'chandigarh': {
    title: 'Corporate Lawyers in Chandigarh | Expert Legal Services',
    description: 'Professional corporate lawyers in Chandigarh. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Chandigarh.',
    city: 'Chandigarh',
    state: 'Chandigarh',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Company Registration', 'Corporate Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'daman-and-diu': {
    title: 'Corporate Lawyers in Daman and Diu | Expert Legal Services',
    description: 'Professional corporate lawyers in Daman and Diu. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Daman and Diu.',
    city: 'Daman',
    state: 'Daman and Diu',
    jurisdiction: 'Bombay High Court',
    specializations: ['Company Registration', 'Tourism Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'delhi': {
    title: 'Corporate Lawyers in Delhi | Expert Legal Services',
    description: 'Professional corporate lawyers in Delhi. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Delhi.',
    city: 'New Delhi',
    state: 'Delhi',
    jurisdiction: 'Delhi High Court',
    specializations: ['Company Registration', 'Corporate Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'jammu-and-kashmir': {
    title: 'Corporate Lawyers in Jammu and Kashmir | Expert Legal Services',
    description: 'Professional corporate lawyers in Jammu and Kashmir. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Jammu and Kashmir.',
    city: 'Srinagar',
    state: 'Jammu and Kashmir',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Company Registration', 'Tourism Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'ladakh': {
    title: 'Corporate Lawyers in Ladakh | Expert Legal Services',
    description: 'Professional corporate lawyers in Ladakh. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Ladakh.',
    city: 'Leh',
    state: 'Ladakh',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Company Registration', 'Tourism Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'lakshadweep': {
    title: 'Corporate Lawyers in Lakshadweep | Expert Legal Services',
    description: 'Professional corporate lawyers in Lakshadweep. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Lakshadweep.',
    city: 'Kavaratti',
    state: 'Lakshadweep',
    jurisdiction: 'Kerala High Court',
    specializations: ['Company Registration', 'Tourism Startups', 'Contract Drafting', 'Corporate Governance']
  },
  'puducherry': {
    title: 'Corporate Lawyers in Puducherry | Expert Legal Services',
    description: 'Professional corporate lawyers in Puducherry. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across Puducherry.',
    city: 'Puducherry',
    state: 'Puducherry',
    jurisdiction: 'Madras High Court',
    specializations: ['Company Registration', 'Tourism Startups', 'Contract Drafting', 'Corporate Governance']
  }
};

// FAQ data for corporate law services
const faqs = [
  {
    question: "What types of corporate legal services do you provide?",
    answer: "We provide comprehensive corporate legal services including company registration, incorporation, startup compliance, MSME registration, partnership agreements, contract drafting, corporate governance, and regulatory compliance. Our corporate lawyers handle all aspects of business law."
  },
  {
    question: "How long does company registration take in India?",
    answer: "Company registration typically takes 15-20 working days in India, depending on the type of company and completeness of documentation. Our corporate lawyers ensure proper documentation and follow-up to expedite the process."
  },
  {
    question: "Can you help with startup compliance and regulations?",
    answer: "Yes, we specialize in startup compliance including company incorporation, regulatory filings, employment agreements, intellectual property protection, and ongoing compliance management to ensure your startup meets all legal requirements."
  },
  {
    question: "Do you provide contract drafting and review services?",
    answer: "Absolutely. We provide comprehensive contract drafting and review services for employment agreements, service contracts, partnership agreements, vendor contracts, and other business agreements to protect your interests."
  },
  {
    question: "What is the difference between LLP and Private Limited Company?",
    answer: "LLP (Limited Liability Partnership) offers limited liability with partnership flexibility, while Private Limited Company provides separate legal entity status with limited liability. We help you choose the right structure based on your business needs."
  },
  {
    question: "Do you help with MSME registration?",
    answer: "Yes, we provide complete MSME registration services including documentation, application filing, and compliance management to help your business avail of government benefits and schemes."
  }
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return {
      title: 'Corporate Lawyers in India | Expert Legal Services',
      description: 'Professional corporate lawyers in India. AMA Legal Solutions provides expert company registration, incorporation, startup compliance, and corporate legal services across India.',
    };
  }

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `https://amalegalsolutions.com/services/corporate/${slug}`,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `https://amalegalsolutions.com/services/corporate/${slug}`,
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
    "url": `https://amalegalsolutions.com/services/corporate/${content.slug}`,
    "mainEntity": {
      "@type": "FAQPage",
      "name": "Corporate Law Services FAQs",
      "description": "Frequently asked questions about corporate law services, company registration, and business legal services",
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

export default async function CorporateSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested corporate law page could not be found.</p>
        </div>
      </div>
    );
  }

  const webPageSchema = generateWebPageSchema({ ...content, slug });

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="corporate-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      
      <CorporateClient content={content} faqs={faqs} />
    </>
  );
}
