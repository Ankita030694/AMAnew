import { Metadata } from 'next';
import Script from 'next/script';
import CyberClient from './CyberClient';

// State-specific content data for cyber law
const stateContent = {
  'andhra-pradesh': {
    title: 'Cyber Law Lawyers in Andhra Pradesh | Expert Legal Services',
    description: 'Professional cyber law lawyers in Andhra Pradesh. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Andhra Pradesh.',
    city: 'Hyderabad',
    state: 'Andhra Pradesh',
    jurisdiction: 'Andhra Pradesh High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'arunachal-pradesh': {
    title: 'Cyber Law Lawyers in Arunachal Pradesh | Expert Legal Services',
    description: 'Professional cyber law lawyers in Arunachal Pradesh. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Arunachal Pradesh.',
    city: 'Itanagar',
    state: 'Arunachal Pradesh',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'assam': {
    title: 'Cyber Law Lawyers in Assam | Expert Legal Services',
    description: 'Professional cyber law lawyers in Assam. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Assam.',
    city: 'Guwahati',
    state: 'Assam',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'bihar': {
    title: 'Cyber Law Lawyers in Bihar | Expert Legal Services',
    description: 'Professional cyber law lawyers in Bihar. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Bihar.',
    city: 'Patna',
    state: 'Bihar',
    jurisdiction: 'Patna High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'chhattisgarh': {
    title: 'Cyber Law Lawyers in Chhattisgarh | Expert Legal Services',
    description: 'Professional cyber law lawyers in Chhattisgarh. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Chhattisgarh.',
    city: 'Raipur',
    state: 'Chhattisgarh',
    jurisdiction: 'Chhattisgarh High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'goa': {
    title: 'Cyber Law Lawyers in Goa | Expert Legal Services',
    description: 'Professional cyber law lawyers in Goa. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Goa.',
    city: 'Panaji',
    state: 'Goa',
    jurisdiction: 'Bombay High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'gujarat': {
    title: 'Cyber Law Lawyers in Gujarat | Expert Legal Services',
    description: 'Professional cyber law lawyers in Gujarat. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Gujarat.',
    city: 'Ahmedabad',
    state: 'Gujarat',
    jurisdiction: 'Gujarat High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'haryana': {
    title: 'Cyber Law Lawyers in Haryana | Expert Legal Services',
    description: 'Professional cyber law lawyers in Haryana. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Haryana.',
    city: 'Chandigarh',
    state: 'Haryana',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'himachal-pradesh': {
    title: 'Cyber Law Lawyers in Himachal Pradesh | Expert Legal Services',
    description: 'Professional cyber law lawyers in Himachal Pradesh. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Himachal Pradesh.',
    city: 'Shimla',
    state: 'Himachal Pradesh',
    jurisdiction: 'Himachal Pradesh High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'jharkhand': {
    title: 'Cyber Law Lawyers in Jharkhand | Expert Legal Services',
    description: 'Professional cyber law lawyers in Jharkhand. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Jharkhand.',
    city: 'Ranchi',
    state: 'Jharkhand',
    jurisdiction: 'Jharkhand High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'karnataka': {
    title: 'Cyber Law Lawyers in Karnataka | Expert Legal Services',
    description: 'Professional cyber law lawyers in Karnataka. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Karnataka.',
    city: 'Bangalore',
    state: 'Karnataka',
    jurisdiction: 'Karnataka High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'kerala': {
    title: 'Cyber Law Lawyers in Kerala | Expert Legal Services',
    description: 'Professional cyber law lawyers in Kerala. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Kerala.',
    city: 'Kochi',
    state: 'Kerala',
    jurisdiction: 'Kerala High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'madhya-pradesh': {
    title: 'Cyber Law Lawyers in Madhya Pradesh | Expert Legal Services',
    description: 'Professional cyber law lawyers in Madhya Pradesh. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Madhya Pradesh.',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    jurisdiction: 'Madhya Pradesh High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'maharashtra': {
    title: 'Cyber Law Lawyers in Maharashtra | Expert Legal Services',
    description: 'Professional cyber law lawyers in Maharashtra. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Maharashtra.',
    city: 'Mumbai',
    state: 'Maharashtra',
    jurisdiction: 'Bombay High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'manipur': {
    title: 'Cyber Law Lawyers in Manipur | Expert Legal Services',
    description: 'Professional cyber law lawyers in Manipur. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Manipur.',
    city: 'Imphal',
    state: 'Manipur',
    jurisdiction: 'Manipur High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'meghalaya': {
    title: 'Cyber Law Lawyers in Meghalaya | Expert Legal Services',
    description: 'Professional cyber law lawyers in Meghalaya. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Meghalaya.',
    city: 'Shillong',
    state: 'Meghalaya',
    jurisdiction: 'Meghalaya High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'mizoram': {
    title: 'Cyber Law Lawyers in Mizoram | Expert Legal Services',
    description: 'Professional cyber law lawyers in Mizoram. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Mizoram.',
    city: 'Aizawl',
    state: 'Mizoram',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'nagaland': {
    title: 'Cyber Law Lawyers in Nagaland | Expert Legal Services',
    description: 'Professional cyber law lawyers in Nagaland. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Nagaland.',
    city: 'Kohima',
    state: 'Nagaland',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'odisha': {
    title: 'Cyber Law Lawyers in Odisha | Expert Legal Services',
    description: 'Professional cyber law lawyers in Odisha. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Odisha.',
    city: 'Bhubaneswar',
    state: 'Odisha',
    jurisdiction: 'Orissa High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'punjab': {
    title: 'Cyber Law Lawyers in Punjab | Expert Legal Services',
    description: 'Professional cyber law lawyers in Punjab. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Punjab.',
    city: 'Chandigarh',
    state: 'Punjab',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'rajasthan': {
    title: 'Cyber Law Lawyers in Rajasthan | Expert Legal Services',
    description: 'Professional cyber law lawyers in Rajasthan. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Rajasthan.',
    city: 'Jaipur',
    state: 'Rajasthan',
    jurisdiction: 'Rajasthan High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'sikkim': {
    title: 'Cyber Law Lawyers in Sikkim | Expert Legal Services',
    description: 'Professional cyber law lawyers in Sikkim. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Sikkim.',
    city: 'Gangtok',
    state: 'Sikkim',
    jurisdiction: 'Sikkim High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'tamil-nadu': {
    title: 'Cyber Law Lawyers in Tamil Nadu | Expert Legal Services',
    description: 'Professional cyber law lawyers in Tamil Nadu. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Tamil Nadu.',
    city: 'Chennai',
    state: 'Tamil Nadu',
    jurisdiction: 'Madras High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'telangana': {
    title: 'Cyber Law Lawyers in Telangana | Expert Legal Services',
    description: 'Professional cyber law lawyers in Telangana. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Telangana.',
    city: 'Hyderabad',
    state: 'Telangana',
    jurisdiction: 'Telangana High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'tripura': {
    title: 'Cyber Law Lawyers in Tripura | Expert Legal Services',
    description: 'Professional cyber law lawyers in Tripura. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Tripura.',
    city: 'Agartala',
    state: 'Tripura',
    jurisdiction: 'Tripura High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'uttar-pradesh': {
    title: 'Cyber Law Lawyers in Uttar Pradesh | Expert Legal Services',
    description: 'Professional cyber law lawyers in Uttar Pradesh. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Uttar Pradesh.',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    jurisdiction: 'Allahabad High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'uttarakhand': {
    title: 'Cyber Law Lawyers in Uttarakhand | Expert Legal Services',
    description: 'Professional cyber law lawyers in Uttarakhand. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Uttarakhand.',
    city: 'Dehradun',
    state: 'Uttarakhand',
    jurisdiction: 'Uttarakhand High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'west-bengal': {
    title: 'Cyber Law Lawyers in West Bengal | Expert Legal Services',
    description: 'Professional cyber law lawyers in West Bengal. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across West Bengal.',
    city: 'Kolkata',
    state: 'West Bengal',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  }
};

// Union Territories content for cyber law
const unionTerritoryContent = {
  'andaman-and-nicobar': {
    title: 'Cyber Law Lawyers in Andaman and Nicobar | Expert Legal Services',
    description: 'Professional cyber law lawyers in Andaman and Nicobar. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Andaman and Nicobar.',
    city: 'Port Blair',
    state: 'Andaman and Nicobar',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'chandigarh': {
    title: 'Cyber Law Lawyers in Chandigarh | Expert Legal Services',
    description: 'Professional cyber law lawyers in Chandigarh. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Chandigarh.',
    city: 'Chandigarh',
    state: 'Chandigarh',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'daman-and-diu': {
    title: 'Cyber Law Lawyers in Daman and Diu | Expert Legal Services',
    description: 'Professional cyber law lawyers in Daman and Diu. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Daman and Diu.',
    city: 'Daman',
    state: 'Daman and Diu',
    jurisdiction: 'Bombay High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'delhi': {
    title: 'Cyber Law Lawyers in Delhi | Expert Legal Services',
    description: 'Professional cyber law lawyers in Delhi. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Delhi.',
    city: 'New Delhi',
    state: 'Delhi',
    jurisdiction: 'Delhi High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'jammu-and-kashmir': {
    title: 'Cyber Law Lawyers in Jammu and Kashmir | Expert Legal Services',
    description: 'Professional cyber law lawyers in Jammu and Kashmir. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Jammu and Kashmir.',
    city: 'Srinagar',
    state: 'Jammu and Kashmir',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'ladakh': {
    title: 'Cyber Law Lawyers in Ladakh | Expert Legal Services',
    description: 'Professional cyber law lawyers in Ladakh. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Ladakh.',
    city: 'Leh',
    state: 'Ladakh',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'lakshadweep': {
    title: 'Cyber Law Lawyers in Lakshadweep | Expert Legal Services',
    description: 'Professional cyber law lawyers in Lakshadweep. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Lakshadweep.',
    city: 'Kavaratti',
    state: 'Lakshadweep',
    jurisdiction: 'Kerala High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  },
  'puducherry': {
    title: 'Cyber Law Lawyers in Puducherry | Expert Legal Services',
    description: 'Professional cyber law lawyers in Puducherry. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across Puducherry.',
    city: 'Puducherry',
    state: 'Puducherry',
    jurisdiction: 'Madras High Court',
    specializations: ['Cyber Crime Defense', 'Data Protection', 'IT Act Compliance', 'Digital Forensics']
  }
};

// FAQ data for cyber law services
const faqs = [
  {
    question: "What types of cyber law services do you provide?",
    answer: "We provide comprehensive cyber law services including cyber crime defense, data protection compliance, IT Act representation, digital forensics support, and cyber law advisory services. Our cyber law lawyers handle all aspects of digital legal issues."
  },
  {
    question: "How do you handle cyber crime cases?",
    answer: "We handle cyber crime cases including hacking, data breaches, online fraud, cyber stalking, and digital identity theft. Our cyber law lawyers provide expert defense and legal representation in cyber crime proceedings."
  },
  {
    question: "Can you help with data protection compliance?",
    answer: "Yes, we specialize in data protection compliance including GDPR compliance, data privacy laws, data breach response, and data protection impact assessments for businesses and organizations."
  },
  {
    question: "Do you handle IT Act violations?",
    answer: "Absolutely. We handle IT Act violations including unauthorized access, data theft, cyber terrorism, and other offenses under the Information Technology Act with comprehensive legal representation."
  },
  {
    question: "What is the process for cyber law consultation?",
    answer: "Our cyber law consultation process includes case analysis, digital evidence review, legal strategy development, compliance assessment, and ongoing legal support for cyber law matters."
  },
  {
    question: "How long do cyber law cases take?",
    answer: "Cyber law case timelines vary depending on case complexity, digital evidence analysis, and court procedures. We work efficiently to resolve cases while ensuring thorough legal representation in cyber law matters."
  }
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return {
      title: 'Cyber Law Lawyers in India | Expert Legal Services',
      description: 'Professional cyber law lawyers in India. AMA Legal Solutions provides expert cyber crime defense, data protection, and cyber law compliance across India.',
    };
  }

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `https://www.amalegalsolutions.com/services/cyber/${slug}`,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `https://www.amalegalsolutions.com/services/cyber/${slug}`,
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
    "url": `https://www.amalegalsolutions.com/services/cyber/${content.slug}`,
    "mainEntity": {
      "name": "Cyber Law Services FAQs",
      "description": "Frequently asked questions about cyber law services, cyber crime defense, and data protection",
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

export default async function CyberSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested cyber law page could not be found.</p>
        </div>
      </div>
    );
  }

  const webPageSchema = generateWebPageSchema({ ...content, slug });

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="cyber-law-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      
      <CyberClient content={content} faqs={faqs} />
    </>
  );
}
