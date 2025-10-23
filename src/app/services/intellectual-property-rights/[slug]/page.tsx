import { Metadata } from 'next';
import Script from 'next/script';
import IPRClient from './IPRClient';

// State-specific content data for intellectual property rights
const stateContent = {
  'andhra-pradesh': {
    title: 'IPR Lawyers in Andhra Pradesh | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Andhra Pradesh. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Andhra Pradesh.',
    city: 'Hyderabad',
    state: 'Andhra Pradesh',
    jurisdiction: 'Andhra Pradesh High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'arunachal-pradesh': {
    title: 'IPR Lawyers in Arunachal Pradesh | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Arunachal Pradesh. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Arunachal Pradesh.',
    city: 'Itanagar',
    state: 'Arunachal Pradesh',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'assam': {
    title: 'IPR Lawyers in Assam | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Assam. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Assam.',
    city: 'Guwahati',
    state: 'Assam',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'bihar': {
    title: 'IPR Lawyers in Bihar | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Bihar. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Bihar.',
    city: 'Patna',
    state: 'Bihar',
    jurisdiction: 'Patna High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'chhattisgarh': {
    title: 'IPR Lawyers in Chhattisgarh | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Chhattisgarh. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Chhattisgarh.',
    city: 'Raipur',
    state: 'Chhattisgarh',
    jurisdiction: 'Chhattisgarh High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'goa': {
    title: 'IPR Lawyers in Goa | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Goa. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Goa.',
    city: 'Panaji',
    state: 'Goa',
    jurisdiction: 'Bombay High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'gujarat': {
    title: 'IPR Lawyers in Gujarat | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Gujarat. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Gujarat.',
    city: 'Ahmedabad',
    state: 'Gujarat',
    jurisdiction: 'Gujarat High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'haryana': {
    title: 'IPR Lawyers in Haryana | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Haryana. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Haryana.',
    city: 'Chandigarh',
    state: 'Haryana',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'himachal-pradesh': {
    title: 'IPR Lawyers in Himachal Pradesh | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Himachal Pradesh. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Himachal Pradesh.',
    city: 'Shimla',
    state: 'Himachal Pradesh',
    jurisdiction: 'Himachal Pradesh High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'jharkhand': {
    title: 'IPR Lawyers in Jharkhand | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Jharkhand. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Jharkhand.',
    city: 'Ranchi',
    state: 'Jharkhand',
    jurisdiction: 'Jharkhand High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'karnataka': {
    title: 'IPR Lawyers in Karnataka | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Karnataka. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Karnataka.',
    city: 'Bangalore',
    state: 'Karnataka',
    jurisdiction: 'Karnataka High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'kerala': {
    title: 'IPR Lawyers in Kerala | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Kerala. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Kerala.',
    city: 'Kochi',
    state: 'Kerala',
    jurisdiction: 'Kerala High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'madhya-pradesh': {
    title: 'IPR Lawyers in Madhya Pradesh | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Madhya Pradesh. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Madhya Pradesh.',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    jurisdiction: 'Madhya Pradesh High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'maharashtra': {
    title: 'IPR Lawyers in Maharashtra | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Maharashtra. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Maharashtra.',
    city: 'Mumbai',
    state: 'Maharashtra',
    jurisdiction: 'Bombay High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'manipur': {
    title: 'IPR Lawyers in Manipur | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Manipur. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Manipur.',
    city: 'Imphal',
    state: 'Manipur',
    jurisdiction: 'Manipur High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'meghalaya': {
    title: 'IPR Lawyers in Meghalaya | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Meghalaya. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Meghalaya.',
    city: 'Shillong',
    state: 'Meghalaya',
    jurisdiction: 'Meghalaya High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'mizoram': {
    title: 'IPR Lawyers in Mizoram | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Mizoram. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Mizoram.',
    city: 'Aizawl',
    state: 'Mizoram',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'nagaland': {
    title: 'IPR Lawyers in Nagaland | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Nagaland. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Nagaland.',
    city: 'Kohima',
    state: 'Nagaland',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'odisha': {
    title: 'IPR Lawyers in Odisha | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Odisha. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Odisha.',
    city: 'Bhubaneswar',
    state: 'Odisha',
    jurisdiction: 'Orissa High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'punjab': {
    title: 'IPR Lawyers in Punjab | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Punjab. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Punjab.',
    city: 'Chandigarh',
    state: 'Punjab',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'rajasthan': {
    title: 'IPR Lawyers in Rajasthan | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Rajasthan. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Rajasthan.',
    city: 'Jaipur',
    state: 'Rajasthan',
    jurisdiction: 'Rajasthan High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'sikkim': {
    title: 'IPR Lawyers in Sikkim | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Sikkim. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Sikkim.',
    city: 'Gangtok',
    state: 'Sikkim',
    jurisdiction: 'Sikkim High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'tamil-nadu': {
    title: 'IPR Lawyers in Tamil Nadu | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Tamil Nadu. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Tamil Nadu.',
    city: 'Chennai',
    state: 'Tamil Nadu',
    jurisdiction: 'Madras High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'telangana': {
    title: 'IPR Lawyers in Telangana | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Telangana. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Telangana.',
    city: 'Hyderabad',
    state: 'Telangana',
    jurisdiction: 'Telangana High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'tripura': {
    title: 'IPR Lawyers in Tripura | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Tripura. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Tripura.',
    city: 'Agartala',
    state: 'Tripura',
    jurisdiction: 'Tripura High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'uttar-pradesh': {
    title: 'IPR Lawyers in Uttar Pradesh | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Uttar Pradesh. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Uttar Pradesh.',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    jurisdiction: 'Allahabad High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'uttarakhand': {
    title: 'IPR Lawyers in Uttarakhand | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Uttarakhand. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Uttarakhand.',
    city: 'Dehradun',
    state: 'Uttarakhand',
    jurisdiction: 'Uttarakhand High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'west-bengal': {
    title: 'IPR Lawyers in West Bengal | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in West Bengal. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across West Bengal.',
    city: 'Kolkata',
    state: 'West Bengal',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  }
};

// Union Territories content for intellectual property rights
const unionTerritoryContent = {
  'andaman-and-nicobar': {
    title: 'IPR Lawyers in Andaman and Nicobar | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Andaman and Nicobar. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Andaman and Nicobar.',
    city: 'Port Blair',
    state: 'Andaman and Nicobar',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'chandigarh': {
    title: 'IPR Lawyers in Chandigarh | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Chandigarh. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Chandigarh.',
    city: 'Chandigarh',
    state: 'Chandigarh',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'daman-and-diu': {
    title: 'IPR Lawyers in Daman and Diu | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Daman and Diu. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Daman and Diu.',
    city: 'Daman',
    state: 'Daman and Diu',
    jurisdiction: 'Bombay High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'delhi': {
    title: 'IPR Lawyers in Delhi | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Delhi. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Delhi.',
    city: 'New Delhi',
    state: 'Delhi',
    jurisdiction: 'Delhi High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'jammu-and-kashmir': {
    title: 'IPR Lawyers in Jammu and Kashmir | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Jammu and Kashmir. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Jammu and Kashmir.',
    city: 'Srinagar',
    state: 'Jammu and Kashmir',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'ladakh': {
    title: 'IPR Lawyers in Ladakh | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Ladakh. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Ladakh.',
    city: 'Leh',
    state: 'Ladakh',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'lakshadweep': {
    title: 'IPR Lawyers in Lakshadweep | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Lakshadweep. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Lakshadweep.',
    city: 'Kavaratti',
    state: 'Lakshadweep',
    jurisdiction: 'Kerala High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  },
  'puducherry': {
    title: 'IPR Lawyers in Puducherry | Expert Legal Services',
    description: 'Professional intellectual property rights lawyers in Puducherry. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across Puducherry.',
    city: 'Puducherry',
    state: 'Puducherry',
    jurisdiction: 'Madras High Court',
    specializations: ['Patent Law', 'Trademark Registration', 'Copyright Protection', 'IPR Litigation']
  }
};

// FAQ data for intellectual property rights services
const faqs = [
  {
    question: "What types of IPR services do you provide?",
    answer: "We provide comprehensive intellectual property rights services including patent law, trademark registration, copyright protection, IPR litigation, and intellectual property advisory services. Our IPR lawyers handle all aspects of intellectual property law."
  },
  {
    question: "How do you handle patent applications?",
    answer: "We handle patent applications including patent filing, patent prosecution, patent search, and patent litigation. Our IPR lawyers provide expert patent law services with comprehensive legal representation."
  },
  {
    question: "Can you help with trademark registration?",
    answer: "Yes, we specialize in trademark registration including trademark filing, trademark search, trademark opposition, and trademark litigation with comprehensive legal support and representation."
  },
  {
    question: "Do you handle copyright protection?",
    answer: "Absolutely. We handle copyright protection including copyright registration, copyright infringement defense, copyright licensing, and copyright litigation with expert legal representation."
  },
  {
    question: "What is the process for IPR consultation?",
    answer: "Our IPR consultation process includes intellectual property analysis, legal requirement assessment, IPR strategy development, and ongoing intellectual property legal support and advisory services."
  },
  {
    question: "How long do IPR cases take?",
    answer: "IPR case timelines vary depending on case complexity, intellectual property type, and legal procedures. We work efficiently to resolve IPR matters while ensuring thorough legal representation and protection."
  }
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return {
      title: 'IPR Lawyers in India | Expert Legal Services',
      description: 'Professional intellectual property rights lawyers in India. AMA Legal Solutions provides expert IPR services, patent law, trademark registration, and copyright protection across India.',
    };
  }

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `https://amalegalsolutions.com/services/intellectual-property-rights/${slug}`,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `https://amalegalsolutions.com/services/intellectual-property-rights/${slug}`,
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
    "url": `https://amalegalsolutions.com/services/intellectual-property-rights/${content.slug}`,
    "mainEntity": {
      "@type": "FAQPage",
      "name": "Intellectual Property Rights Services FAQs",
      "description": "Frequently asked questions about IPR services, patent law, trademark registration, and copyright protection",
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

export default async function IPRSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested intellectual property rights page could not be found.</p>
        </div>
      </div>
    );
  }

  const webPageSchema = generateWebPageSchema({ ...content, slug });

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="ipr-law-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      
      <IPRClient content={content} faqs={faqs} />
    </>
  );
}
