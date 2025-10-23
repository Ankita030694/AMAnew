import { Metadata } from 'next';
import Script from 'next/script';
import BankingClient from './BankingClient';

// State-specific content data for banking and finance
const stateContent = {
  'andhra-pradesh': {
    title: 'Banking & Finance Lawyers in Andhra Pradesh | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Andhra Pradesh. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Andhra Pradesh.',
    city: 'Hyderabad',
    state: 'Andhra Pradesh',
    jurisdiction: 'Andhra Pradesh High Court',
    specializations: ['Banking Disputes', 'Loan Recovery', 'Cheque Bounce Cases', 'Financial Fraud']
  },
  'arunachal-pradesh': {
    title: 'Banking & Finance Lawyers in Arunachal Pradesh | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Arunachal Pradesh. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Arunachal Pradesh.',
    city: 'Itanagar',
    state: 'Arunachal Pradesh',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Banking Disputes', 'Loan Recovery', 'Cheque Bounce Cases', 'Financial Fraud']
  },
  'assam': {
    title: 'Banking & Finance Lawyers in Assam | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Assam. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Assam.',
    city: 'Guwahati',
    state: 'Assam',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Banking Disputes', 'Oil & Gas Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'bihar': {
    title: 'Banking & Finance Lawyers in Bihar | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Bihar. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Bihar.',
    city: 'Patna',
    state: 'Bihar',
    jurisdiction: 'Patna High Court',
    specializations: ['Banking Disputes', 'Agricultural Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'chhattisgarh': {
    title: 'Banking & Finance Lawyers in Chhattisgarh | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Chhattisgarh. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Chhattisgarh.',
    city: 'Raipur',
    state: 'Chhattisgarh',
    jurisdiction: 'Chhattisgarh High Court',
    specializations: ['Banking Disputes', 'Mining Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'goa': {
    title: 'Banking & Finance Lawyers in Goa | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Goa. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Goa.',
    city: 'Panaji',
    state: 'Goa',
    jurisdiction: 'Bombay High Court',
    specializations: ['Banking Disputes', 'Tourism Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'gujarat': {
    title: 'Banking & Finance Lawyers in Gujarat | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Gujarat. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Gujarat.',
    city: 'Ahmedabad',
    state: 'Gujarat',
    jurisdiction: 'Gujarat High Court',
    specializations: ['Banking Disputes', 'Textile Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'haryana': {
    title: 'Banking & Finance Lawyers in Haryana | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Haryana. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Haryana.',
    city: 'Chandigarh',
    state: 'Haryana',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Banking Disputes', 'Automobile Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'himachal-pradesh': {
    title: 'Banking & Finance Lawyers in Himachal Pradesh | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Himachal Pradesh. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Himachal Pradesh.',
    city: 'Shimla',
    state: 'Himachal Pradesh',
    jurisdiction: 'Himachal Pradesh High Court',
    specializations: ['Banking Disputes', 'Tourism Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'jharkhand': {
    title: 'Banking & Finance Lawyers in Jharkhand | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Jharkhand. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Jharkhand.',
    city: 'Ranchi',
    state: 'Jharkhand',
    jurisdiction: 'Jharkhand High Court',
    specializations: ['Banking Disputes', 'Mining Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'karnataka': {
    title: 'Banking & Finance Lawyers in Karnataka | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Karnataka. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Karnataka.',
    city: 'Bangalore',
    state: 'Karnataka',
    jurisdiction: 'Karnataka High Court',
    specializations: ['Banking Disputes', 'IT Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'kerala': {
    title: 'Banking & Finance Lawyers in Kerala | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Kerala. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Kerala.',
    city: 'Kochi',
    state: 'Kerala',
    jurisdiction: 'Kerala High Court',
    specializations: ['Banking Disputes', 'Tourism Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'madhya-pradesh': {
    title: 'Banking & Finance Lawyers in Madhya Pradesh | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Madhya Pradesh. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Madhya Pradesh.',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    jurisdiction: 'Madhya Pradesh High Court',
    specializations: ['Banking Disputes', 'Agricultural Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'maharashtra': {
    title: 'Banking & Finance Lawyers in Maharashtra | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Maharashtra. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Maharashtra.',
    city: 'Mumbai',
    state: 'Maharashtra',
    jurisdiction: 'Bombay High Court',
    specializations: ['Banking Disputes', 'Corporate Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'manipur': {
    title: 'Banking & Finance Lawyers in Manipur | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Manipur. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Manipur.',
    city: 'Imphal',
    state: 'Manipur',
    jurisdiction: 'Manipur High Court',
    specializations: ['Banking Disputes', 'Agricultural Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'meghalaya': {
    title: 'Banking & Finance Lawyers in Meghalaya | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Meghalaya. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Meghalaya.',
    city: 'Shillong',
    state: 'Meghalaya',
    jurisdiction: 'Meghalaya High Court',
    specializations: ['Banking Disputes', 'Mining Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'mizoram': {
    title: 'Banking & Finance Lawyers in Mizoram | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Mizoram. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Mizoram.',
    city: 'Aizawl',
    state: 'Mizoram',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Banking Disputes', 'Agricultural Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'nagaland': {
    title: 'Banking & Finance Lawyers in Nagaland | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Nagaland. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Nagaland.',
    city: 'Kohima',
    state: 'Nagaland',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Banking Disputes', 'Agricultural Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'odisha': {
    title: 'Banking & Finance Lawyers in Odisha | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Odisha. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Odisha.',
    city: 'Bhubaneswar',
    state: 'Odisha',
    jurisdiction: 'Orissa High Court',
    specializations: ['Banking Disputes', 'Mining Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'punjab': {
    title: 'Banking & Finance Lawyers in Punjab | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Punjab. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Punjab.',
    city: 'Chandigarh',
    state: 'Punjab',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Banking Disputes', 'Agricultural Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'rajasthan': {
    title: 'Banking & Finance Lawyers in Rajasthan | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Rajasthan. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Rajasthan.',
    city: 'Jaipur',
    state: 'Rajasthan',
    jurisdiction: 'Rajasthan High Court',
    specializations: ['Banking Disputes', 'Mining Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'sikkim': {
    title: 'Banking & Finance Lawyers in Sikkim | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Sikkim. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Sikkim.',
    city: 'Gangtok',
    state: 'Sikkim',
    jurisdiction: 'Sikkim High Court',
    specializations: ['Banking Disputes', 'Tourism Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'tamil-nadu': {
    title: 'Banking & Finance Lawyers in Tamil Nadu | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Tamil Nadu. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Tamil Nadu.',
    city: 'Chennai',
    state: 'Tamil Nadu',
    jurisdiction: 'Madras High Court',
    specializations: ['Banking Disputes', 'IT Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'telangana': {
    title: 'Banking & Finance Lawyers in Telangana | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Telangana. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Telangana.',
    city: 'Hyderabad',
    state: 'Telangana',
    jurisdiction: 'Telangana High Court',
    specializations: ['Banking Disputes', 'IT Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'tripura': {
    title: 'Banking & Finance Lawyers in Tripura | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Tripura. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Tripura.',
    city: 'Agartala',
    state: 'Tripura',
    jurisdiction: 'Tripura High Court',
    specializations: ['Banking Disputes', 'Agricultural Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'uttar-pradesh': {
    title: 'Banking & Finance Lawyers in Uttar Pradesh | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Uttar Pradesh. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Uttar Pradesh.',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    jurisdiction: 'Allahabad High Court',
    specializations: ['Banking Disputes', 'Agricultural Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'uttarakhand': {
    title: 'Banking & Finance Lawyers in Uttarakhand | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Uttarakhand. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Uttarakhand.',
    city: 'Dehradun',
    state: 'Uttarakhand',
    jurisdiction: 'Uttarakhand High Court',
    specializations: ['Banking Disputes', 'Tourism Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'west-bengal': {
    title: 'Banking & Finance Lawyers in West Bengal | Expert Legal Services',
    description: 'Professional banking and finance lawyers in West Bengal. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across West Bengal.',
    city: 'Kolkata',
    state: 'West Bengal',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Banking Disputes', 'Corporate Banking', 'Loan Recovery', 'Financial Fraud']
  }
};

// Union Territories content for banking and finance
const unionTerritoryContent = {
  'andaman-and-nicobar': {
    title: 'Banking & Finance Lawyers in Andaman and Nicobar | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Andaman and Nicobar. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Andaman and Nicobar.',
    city: 'Port Blair',
    state: 'Andaman and Nicobar',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Banking Disputes', 'Tourism Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'chandigarh': {
    title: 'Banking & Finance Lawyers in Chandigarh | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Chandigarh. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Chandigarh.',
    city: 'Chandigarh',
    state: 'Chandigarh',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Banking Disputes', 'Corporate Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'daman-and-diu': {
    title: 'Banking & Finance Lawyers in Daman and Diu | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Daman and Diu. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Daman and Diu.',
    city: 'Daman',
    state: 'Daman and Diu',
    jurisdiction: 'Bombay High Court',
    specializations: ['Banking Disputes', 'Tourism Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'delhi': {
    title: 'Banking & Finance Lawyers in Delhi | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Delhi. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Delhi.',
    city: 'New Delhi',
    state: 'Delhi',
    jurisdiction: 'Delhi High Court',
    specializations: ['Banking Disputes', 'Corporate Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'jammu-and-kashmir': {
    title: 'Banking & Finance Lawyers in Jammu and Kashmir | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Jammu and Kashmir. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Jammu and Kashmir.',
    city: 'Srinagar',
    state: 'Jammu and Kashmir',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Banking Disputes', 'Tourism Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'ladakh': {
    title: 'Banking & Finance Lawyers in Ladakh | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Ladakh. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Ladakh.',
    city: 'Leh',
    state: 'Ladakh',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Banking Disputes', 'Tourism Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'lakshadweep': {
    title: 'Banking & Finance Lawyers in Lakshadweep | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Lakshadweep. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Lakshadweep.',
    city: 'Kavaratti',
    state: 'Lakshadweep',
    jurisdiction: 'Kerala High Court',
    specializations: ['Banking Disputes', 'Tourism Banking', 'Loan Recovery', 'Financial Fraud']
  },
  'puducherry': {
    title: 'Banking & Finance Lawyers in Puducherry | Expert Legal Services',
    description: 'Professional banking and finance lawyers in Puducherry. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across Puducherry.',
    city: 'Puducherry',
    state: 'Puducherry',
    jurisdiction: 'Madras High Court',
    specializations: ['Banking Disputes', 'Tourism Banking', 'Loan Recovery', 'Financial Fraud']
  }
};

// FAQ data for banking and finance services
const faqs = [
  {
    question: "What types of banking and finance legal services do you provide?",
    answer: "We provide comprehensive banking and finance legal services including loan documentation, regulatory compliance, banking disputes, financial contracts, RBI compliance, and banking litigation. Our banking lawyers handle all aspects of financial law."
  },
  {
    question: "Can you help with banking regulatory compliance?",
    answer: "Yes, we specialize in banking regulatory compliance including RBI guidelines, banking regulations, compliance audits, and regulatory filings. Our experts ensure your banking operations meet all legal requirements."
  },
  {
    question: "Do you handle banking disputes and litigation?",
    answer: "Absolutely. We handle banking disputes, loan recovery cases, banking litigation, and represent clients in banking-related legal proceedings with expertise in banking laws and regulations."
  },
  {
    question: "What banking documentation services do you offer?",
    answer: "We offer comprehensive banking documentation services including loan agreements, security documents, banking contracts, compliance documentation, and regulatory filings for banks and financial institutions."
  },
  {
    question: "How do you handle loan default cases?",
    answer: "We provide comprehensive legal support for loan default cases including DRT representation, SARFAESI Act proceedings, debt recovery strategies, and negotiation with banks for favorable settlements."
  },
  {
    question: "Can you help with cheque bounce cases?",
    answer: "Yes, we handle cheque bounce cases under Section 138 of the Negotiable Instruments Act, including legal notices, defense strategies, and representation in court proceedings."
  }
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return {
      title: 'Banking & Finance Lawyers in India | Expert Legal Services',
      description: 'Professional banking and finance lawyers in India. AMA Legal Solutions provides expert banking legal services, regulatory compliance, and financial law expertise across India.',
    };
  }

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `https://amalegalsolutions.com/services/banking-and-finance/${slug}`,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `https://amalegalsolutions.com/services/banking-and-finance/${slug}`,
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
    "url": `https://amalegalsolutions.com/services/banking-and-finance/${content.slug}`,
    "mainEntity": {
      "@type": "FAQPage",
      "name": "Banking and Finance Services FAQs",
      "description": "Frequently asked questions about banking and finance legal services, regulatory compliance, and financial law",
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

export default async function BankingSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested banking and finance page could not be found.</p>
        </div>
      </div>
    );
  }

  const webPageSchema = generateWebPageSchema({ ...content, slug });

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="banking-finance-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      
      <BankingClient content={content} faqs={faqs} />
    </>
  );
}
