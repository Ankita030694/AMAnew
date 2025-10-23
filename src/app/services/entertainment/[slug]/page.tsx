import { Metadata } from 'next';
import Script from 'next/script';
import EntertainmentClient from './EntertainmentClient';

// State-specific content data for entertainment law
const stateContent = {
  'andhra-pradesh': {
    title: 'Entertainment Law Lawyers in Andhra Pradesh | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Andhra Pradesh. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Andhra Pradesh.',
    city: 'Hyderabad',
    state: 'Andhra Pradesh',
    jurisdiction: 'Andhra Pradesh High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'arunachal-pradesh': {
    title: 'Entertainment Law Lawyers in Arunachal Pradesh | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Arunachal Pradesh. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Arunachal Pradesh.',
    city: 'Itanagar',
    state: 'Arunachal Pradesh',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'assam': {
    title: 'Entertainment Law Lawyers in Assam | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Assam. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Assam.',
    city: 'Guwahati',
    state: 'Assam',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'bihar': {
    title: 'Entertainment Law Lawyers in Bihar | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Bihar. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Bihar.',
    city: 'Patna',
    state: 'Bihar',
    jurisdiction: 'Patna High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'chhattisgarh': {
    title: 'Entertainment Law Lawyers in Chhattisgarh | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Chhattisgarh. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Chhattisgarh.',
    city: 'Raipur',
    state: 'Chhattisgarh',
    jurisdiction: 'Chhattisgarh High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'goa': {
    title: 'Entertainment Law Lawyers in Goa | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Goa. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Goa.',
    city: 'Panaji',
    state: 'Goa',
    jurisdiction: 'Bombay High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'gujarat': {
    title: 'Entertainment Law Lawyers in Gujarat | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Gujarat. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Gujarat.',
    city: 'Ahmedabad',
    state: 'Gujarat',
    jurisdiction: 'Gujarat High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'haryana': {
    title: 'Entertainment Law Lawyers in Haryana | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Haryana. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Haryana.',
    city: 'Chandigarh',
    state: 'Haryana',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'himachal-pradesh': {
    title: 'Entertainment Law Lawyers in Himachal Pradesh | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Himachal Pradesh. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Himachal Pradesh.',
    city: 'Shimla',
    state: 'Himachal Pradesh',
    jurisdiction: 'Himachal Pradesh High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'jharkhand': {
    title: 'Entertainment Law Lawyers in Jharkhand | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Jharkhand. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Jharkhand.',
    city: 'Ranchi',
    state: 'Jharkhand',
    jurisdiction: 'Jharkhand High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'karnataka': {
    title: 'Entertainment Law Lawyers in Karnataka | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Karnataka. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Karnataka.',
    city: 'Bangalore',
    state: 'Karnataka',
    jurisdiction: 'Karnataka High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'kerala': {
    title: 'Entertainment Law Lawyers in Kerala | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Kerala. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Kerala.',
    city: 'Kochi',
    state: 'Kerala',
    jurisdiction: 'Kerala High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'madhya-pradesh': {
    title: 'Entertainment Law Lawyers in Madhya Pradesh | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Madhya Pradesh. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Madhya Pradesh.',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    jurisdiction: 'Madhya Pradesh High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'maharashtra': {
    title: 'Entertainment Law Lawyers in Maharashtra | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Maharashtra. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Maharashtra.',
    city: 'Mumbai',
    state: 'Maharashtra',
    jurisdiction: 'Bombay High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'manipur': {
    title: 'Entertainment Law Lawyers in Manipur | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Manipur. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Manipur.',
    city: 'Imphal',
    state: 'Manipur',
    jurisdiction: 'Manipur High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'meghalaya': {
    title: 'Entertainment Law Lawyers in Meghalaya | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Meghalaya. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Meghalaya.',
    city: 'Shillong',
    state: 'Meghalaya',
    jurisdiction: 'Meghalaya High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'mizoram': {
    title: 'Entertainment Law Lawyers in Mizoram | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Mizoram. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Mizoram.',
    city: 'Aizawl',
    state: 'Mizoram',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'nagaland': {
    title: 'Entertainment Law Lawyers in Nagaland | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Nagaland. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Nagaland.',
    city: 'Kohima',
    state: 'Nagaland',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'odisha': {
    title: 'Entertainment Law Lawyers in Odisha | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Odisha. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Odisha.',
    city: 'Bhubaneswar',
    state: 'Odisha',
    jurisdiction: 'Orissa High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'punjab': {
    title: 'Entertainment Law Lawyers in Punjab | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Punjab. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Punjab.',
    city: 'Chandigarh',
    state: 'Punjab',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'rajasthan': {
    title: 'Entertainment Law Lawyers in Rajasthan | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Rajasthan. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Rajasthan.',
    city: 'Jaipur',
    state: 'Rajasthan',
    jurisdiction: 'Rajasthan High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'sikkim': {
    title: 'Entertainment Law Lawyers in Sikkim | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Sikkim. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Sikkim.',
    city: 'Gangtok',
    state: 'Sikkim',
    jurisdiction: 'Sikkim High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'tamil-nadu': {
    title: 'Entertainment Law Lawyers in Tamil Nadu | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Tamil Nadu. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Tamil Nadu.',
    city: 'Chennai',
    state: 'Tamil Nadu',
    jurisdiction: 'Madras High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'telangana': {
    title: 'Entertainment Law Lawyers in Telangana | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Telangana. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Telangana.',
    city: 'Hyderabad',
    state: 'Telangana',
    jurisdiction: 'Telangana High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'tripura': {
    title: 'Entertainment Law Lawyers in Tripura | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Tripura. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Tripura.',
    city: 'Agartala',
    state: 'Tripura',
    jurisdiction: 'Tripura High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'uttar-pradesh': {
    title: 'Entertainment Law Lawyers in Uttar Pradesh | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Uttar Pradesh. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Uttar Pradesh.',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    jurisdiction: 'Allahabad High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'uttarakhand': {
    title: 'Entertainment Law Lawyers in Uttarakhand | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Uttarakhand. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Uttarakhand.',
    city: 'Dehradun',
    state: 'Uttarakhand',
    jurisdiction: 'Uttarakhand High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'west-bengal': {
    title: 'Entertainment Law Lawyers in West Bengal | Expert Legal Services',
    description: 'Professional entertainment law lawyers in West Bengal. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across West Bengal.',
    city: 'Kolkata',
    state: 'West Bengal',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  }
};

// Union Territories content for entertainment law
const unionTerritoryContent = {
  'andaman-and-nicobar': {
    title: 'Entertainment Law Lawyers in Andaman and Nicobar | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Andaman and Nicobar. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Andaman and Nicobar.',
    city: 'Port Blair',
    state: 'Andaman and Nicobar',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'chandigarh': {
    title: 'Entertainment Law Lawyers in Chandigarh | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Chandigarh. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Chandigarh.',
    city: 'Chandigarh',
    state: 'Chandigarh',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'daman-and-diu': {
    title: 'Entertainment Law Lawyers in Daman and Diu | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Daman and Diu. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Daman and Diu.',
    city: 'Daman',
    state: 'Daman and Diu',
    jurisdiction: 'Bombay High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'delhi': {
    title: 'Entertainment Law Lawyers in Delhi | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Delhi. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Delhi.',
    city: 'New Delhi',
    state: 'Delhi',
    jurisdiction: 'Delhi High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'jammu-and-kashmir': {
    title: 'Entertainment Law Lawyers in Jammu and Kashmir | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Jammu and Kashmir. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Jammu and Kashmir.',
    city: 'Srinagar',
    state: 'Jammu and Kashmir',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'ladakh': {
    title: 'Entertainment Law Lawyers in Ladakh | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Ladakh. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Ladakh.',
    city: 'Leh',
    state: 'Ladakh',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'lakshadweep': {
    title: 'Entertainment Law Lawyers in Lakshadweep | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Lakshadweep. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Lakshadweep.',
    city: 'Kavaratti',
    state: 'Lakshadweep',
    jurisdiction: 'Kerala High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  },
  'puducherry': {
    title: 'Entertainment Law Lawyers in Puducherry | Expert Legal Services',
    description: 'Professional entertainment law lawyers in Puducherry. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across Puducherry.',
    city: 'Puducherry',
    state: 'Puducherry',
    jurisdiction: 'Madras High Court',
    specializations: ['Media Law', 'Entertainment Contracts', 'Copyright Protection', 'Entertainment Industry Legal Support']
  }
};

// FAQ data for entertainment law services
const faqs = [
  {
    question: "What types of entertainment law services do you provide?",
    answer: "We provide comprehensive entertainment law services including media law, entertainment contracts, copyright protection, entertainment industry legal support, and entertainment litigation. Our entertainment law lawyers handle all aspects of entertainment industry legal matters."
  },
  {
    question: "How do you handle entertainment contracts?",
    answer: "We handle entertainment contracts including talent agreements, production contracts, distribution agreements, and licensing agreements. Our entertainment law lawyers provide expert contract drafting and negotiation services."
  },
  {
    question: "Can you help with copyright protection?",
    answer: "Yes, we specialize in copyright protection including copyright registration, copyright infringement defense, copyright licensing, and intellectual property protection for entertainment industry clients."
  },
  {
    question: "Do you handle media law matters?",
    answer: "Absolutely. We handle media law matters including defamation cases, media contracts, broadcasting rights, and media industry legal compliance with comprehensive legal representation."
  },
  {
    question: "What is the process for entertainment law consultation?",
    answer: "Our entertainment law consultation process includes industry analysis, legal requirement assessment, contract review, legal strategy development, and ongoing entertainment industry legal support."
  },
  {
    question: "How long do entertainment law cases take?",
    answer: "Entertainment law case timelines vary depending on case complexity, industry requirements, and legal procedures. We work efficiently to resolve entertainment law matters while ensuring thorough legal representation."
  }
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return {
      title: 'Entertainment Law Lawyers in India | Expert Legal Services',
      description: 'Professional entertainment law lawyers in India. AMA Legal Solutions provides expert entertainment law services, media law, and entertainment industry legal support across India.',
    };
  }

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `https://amalegalsolutions.com/services/entertainment/${slug}`,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `https://amalegalsolutions.com/services/entertainment/${slug}`,
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
    "url": `https://amalegalsolutions.com/services/entertainment/${content.slug}`,
    "mainEntity": {
      "@type": "FAQPage",
      "name": "Entertainment Law Services FAQs",
      "description": "Frequently asked questions about entertainment law services, media law, and entertainment industry legal support",
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

export default async function EntertainmentSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested entertainment law page could not be found.</p>
        </div>
      </div>
    );
  }

  const webPageSchema = generateWebPageSchema({ ...content, slug });

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="entertainment-law-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      
      <EntertainmentClient content={content} faqs={faqs} />
    </>
  );
}
