import { Metadata } from 'next';
import Script from 'next/script';
import CriminalClient from './CriminalClient';

// State-specific content data for criminal law
const stateContent = {
  'andhra-pradesh': {
    title: 'Criminal Lawyers in Andhra Pradesh | Expert Legal Services',
    description: 'Professional criminal lawyers in Andhra Pradesh. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Andhra Pradesh.',
    city: 'Hyderabad',
    state: 'Andhra Pradesh',
    jurisdiction: 'Andhra Pradesh High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'arunachal-pradesh': {
    title: 'Criminal Lawyers in Arunachal Pradesh | Expert Legal Services',
    description: 'Professional criminal lawyers in Arunachal Pradesh. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Arunachal Pradesh.',
    city: 'Itanagar',
    state: 'Arunachal Pradesh',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'assam': {
    title: 'Criminal Lawyers in Assam | Expert Legal Services',
    description: 'Professional criminal lawyers in Assam. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Assam.',
    city: 'Guwahati',
    state: 'Assam',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'bihar': {
    title: 'Criminal Lawyers in Bihar | Expert Legal Services',
    description: 'Professional criminal lawyers in Bihar. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Bihar.',
    city: 'Patna',
    state: 'Bihar',
    jurisdiction: 'Patna High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'chhattisgarh': {
    title: 'Criminal Lawyers in Chhattisgarh | Expert Legal Services',
    description: 'Professional criminal lawyers in Chhattisgarh. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Chhattisgarh.',
    city: 'Raipur',
    state: 'Chhattisgarh',
    jurisdiction: 'Chhattisgarh High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'goa': {
    title: 'Criminal Lawyers in Goa | Expert Legal Services',
    description: 'Professional criminal lawyers in Goa. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Goa.',
    city: 'Panaji',
    state: 'Goa',
    jurisdiction: 'Bombay High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'gujarat': {
    title: 'Criminal Lawyers in Gujarat | Expert Legal Services',
    description: 'Professional criminal lawyers in Gujarat. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Gujarat.',
    city: 'Ahmedabad',
    state: 'Gujarat',
    jurisdiction: 'Gujarat High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'haryana': {
    title: 'Criminal Lawyers in Haryana | Expert Legal Services',
    description: 'Professional criminal lawyers in Haryana. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Haryana.',
    city: 'Chandigarh',
    state: 'Haryana',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'himachal-pradesh': {
    title: 'Criminal Lawyers in Himachal Pradesh | Expert Legal Services',
    description: 'Professional criminal lawyers in Himachal Pradesh. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Himachal Pradesh.',
    city: 'Shimla',
    state: 'Himachal Pradesh',
    jurisdiction: 'Himachal Pradesh High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'jharkhand': {
    title: 'Criminal Lawyers in Jharkhand | Expert Legal Services',
    description: 'Professional criminal lawyers in Jharkhand. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Jharkhand.',
    city: 'Ranchi',
    state: 'Jharkhand',
    jurisdiction: 'Jharkhand High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'karnataka': {
    title: 'Criminal Lawyers in Karnataka | Expert Legal Services',
    description: 'Professional criminal lawyers in Karnataka. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Karnataka.',
    city: 'Bangalore',
    state: 'Karnataka',
    jurisdiction: 'Karnataka High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'kerala': {
    title: 'Criminal Lawyers in Kerala | Expert Legal Services',
    description: 'Professional criminal lawyers in Kerala. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Kerala.',
    city: 'Kochi',
    state: 'Kerala',
    jurisdiction: 'Kerala High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'madhya-pradesh': {
    title: 'Criminal Lawyers in Madhya Pradesh | Expert Legal Services',
    description: 'Professional criminal lawyers in Madhya Pradesh. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Madhya Pradesh.',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    jurisdiction: 'Madhya Pradesh High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'maharashtra': {
    title: 'Criminal Lawyers in Maharashtra | Expert Legal Services',
    description: 'Professional criminal lawyers in Maharashtra. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Maharashtra.',
    city: 'Mumbai',
    state: 'Maharashtra',
    jurisdiction: 'Bombay High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'manipur': {
    title: 'Criminal Lawyers in Manipur | Expert Legal Services',
    description: 'Professional criminal lawyers in Manipur. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Manipur.',
    city: 'Imphal',
    state: 'Manipur',
    jurisdiction: 'Manipur High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'meghalaya': {
    title: 'Criminal Lawyers in Meghalaya | Expert Legal Services',
    description: 'Professional criminal lawyers in Meghalaya. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Meghalaya.',
    city: 'Shillong',
    state: 'Meghalaya',
    jurisdiction: 'Meghalaya High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'mizoram': {
    title: 'Criminal Lawyers in Mizoram | Expert Legal Services',
    description: 'Professional criminal lawyers in Mizoram. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Mizoram.',
    city: 'Aizawl',
    state: 'Mizoram',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'nagaland': {
    title: 'Criminal Lawyers in Nagaland | Expert Legal Services',
    description: 'Professional criminal lawyers in Nagaland. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Nagaland.',
    city: 'Kohima',
    state: 'Nagaland',
    jurisdiction: 'Gauhati High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'odisha': {
    title: 'Criminal Lawyers in Odisha | Expert Legal Services',
    description: 'Professional criminal lawyers in Odisha. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Odisha.',
    city: 'Bhubaneswar',
    state: 'Odisha',
    jurisdiction: 'Orissa High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'punjab': {
    title: 'Criminal Lawyers in Punjab | Expert Legal Services',
    description: 'Professional criminal lawyers in Punjab. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Punjab.',
    city: 'Chandigarh',
    state: 'Punjab',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'rajasthan': {
    title: 'Criminal Lawyers in Rajasthan | Expert Legal Services',
    description: 'Professional criminal lawyers in Rajasthan. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Rajasthan.',
    city: 'Jaipur',
    state: 'Rajasthan',
    jurisdiction: 'Rajasthan High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'sikkim': {
    title: 'Criminal Lawyers in Sikkim | Expert Legal Services',
    description: 'Professional criminal lawyers in Sikkim. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Sikkim.',
    city: 'Gangtok',
    state: 'Sikkim',
    jurisdiction: 'Sikkim High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'tamil-nadu': {
    title: 'Criminal Lawyers in Tamil Nadu | Expert Legal Services',
    description: 'Professional criminal lawyers in Tamil Nadu. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Tamil Nadu.',
    city: 'Chennai',
    state: 'Tamil Nadu',
    jurisdiction: 'Madras High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'telangana': {
    title: 'Criminal Lawyers in Telangana | Expert Legal Services',
    description: 'Professional criminal lawyers in Telangana. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Telangana.',
    city: 'Hyderabad',
    state: 'Telangana',
    jurisdiction: 'Telangana High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'tripura': {
    title: 'Criminal Lawyers in Tripura | Expert Legal Services',
    description: 'Professional criminal lawyers in Tripura. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Tripura.',
    city: 'Agartala',
    state: 'Tripura',
    jurisdiction: 'Tripura High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'uttar-pradesh': {
    title: 'Criminal Lawyers in Uttar Pradesh | Expert Legal Services',
    description: 'Professional criminal lawyers in Uttar Pradesh. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Uttar Pradesh.',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    jurisdiction: 'Allahabad High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'uttarakhand': {
    title: 'Criminal Lawyers in Uttarakhand | Expert Legal Services',
    description: 'Professional criminal lawyers in Uttarakhand. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Uttarakhand.',
    city: 'Dehradun',
    state: 'Uttarakhand',
    jurisdiction: 'Uttarakhand High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'west-bengal': {
    title: 'Criminal Lawyers in West Bengal | Expert Legal Services',
    description: 'Professional criminal lawyers in West Bengal. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across West Bengal.',
    city: 'Kolkata',
    state: 'West Bengal',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  }
};

// Union Territories content for criminal law
const unionTerritoryContent = {
  'andaman-and-nicobar': {
    title: 'Criminal Lawyers in Andaman and Nicobar | Expert Legal Services',
    description: 'Professional criminal lawyers in Andaman and Nicobar. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Andaman and Nicobar.',
    city: 'Port Blair',
    state: 'Andaman and Nicobar',
    jurisdiction: 'Calcutta High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'chandigarh': {
    title: 'Criminal Lawyers in Chandigarh | Expert Legal Services',
    description: 'Professional criminal lawyers in Chandigarh. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Chandigarh.',
    city: 'Chandigarh',
    state: 'Chandigarh',
    jurisdiction: 'Punjab & Haryana High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'daman-and-diu': {
    title: 'Criminal Lawyers in Daman and Diu | Expert Legal Services',
    description: 'Professional criminal lawyers in Daman and Diu. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Daman and Diu.',
    city: 'Daman',
    state: 'Daman and Diu',
    jurisdiction: 'Bombay High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'delhi': {
    title: 'Criminal Lawyers in Delhi | Expert Legal Services',
    description: 'Professional criminal lawyers in Delhi. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Delhi.',
    city: 'New Delhi',
    state: 'Delhi',
    jurisdiction: 'Delhi High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'jammu-and-kashmir': {
    title: 'Criminal Lawyers in Jammu and Kashmir | Expert Legal Services',
    description: 'Professional criminal lawyers in Jammu and Kashmir. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Jammu and Kashmir.',
    city: 'Srinagar',
    state: 'Jammu and Kashmir',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'ladakh': {
    title: 'Criminal Lawyers in Ladakh | Expert Legal Services',
    description: 'Professional criminal lawyers in Ladakh. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Ladakh.',
    city: 'Leh',
    state: 'Ladakh',
    jurisdiction: 'Jammu and Kashmir High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'lakshadweep': {
    title: 'Criminal Lawyers in Lakshadweep | Expert Legal Services',
    description: 'Professional criminal lawyers in Lakshadweep. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Lakshadweep.',
    city: 'Kavaratti',
    state: 'Lakshadweep',
    jurisdiction: 'Kerala High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  },
  'puducherry': {
    title: 'Criminal Lawyers in Puducherry | Expert Legal Services',
    description: 'Professional criminal lawyers in Puducherry. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across Puducherry.',
    city: 'Puducherry',
    state: 'Puducherry',
    jurisdiction: 'Madras High Court',
    specializations: ['Criminal Defense', 'Bail Applications', 'Criminal Appeals', 'White Collar Crimes']
  }
};

// FAQ data for criminal law services
const faqs = [
  {
    question: "What types of criminal law services do you provide?",
    answer: "We provide comprehensive criminal law services including criminal defense, bail applications, criminal appeals, white collar crime defense, and criminal litigation. Our criminal lawyers handle all aspects of criminal law."
  },
  {
    question: "How do you handle bail applications?",
    answer: "We handle bail applications including anticipatory bail, regular bail, and bail in serious offenses. Our criminal lawyers provide expert representation in bail proceedings with strategic legal arguments."
  },
  {
    question: "Can you help with white collar crimes?",
    answer: "Yes, we specialize in white collar crime defense including fraud cases, financial crimes, corporate crimes, and economic offenses with expertise in complex criminal investigations."
  },
  {
    question: "Do you handle criminal appeals?",
    answer: "Absolutely. We handle criminal appeals including appeals against conviction, sentence appeals, and appeals in higher courts with comprehensive legal representation and strategic arguments."
  },
  {
    question: "What is the process for criminal defense?",
    answer: "Our criminal defense process includes case analysis, evidence review, legal strategy development, court representation, and ongoing support throughout the criminal proceedings."
  },
  {
    question: "How long do criminal cases take?",
    answer: "Criminal case timelines vary depending on case complexity, court schedules, and procedural requirements. We work efficiently to resolve cases as quickly as possible while ensuring thorough legal representation."
  }
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return {
      title: 'Criminal Lawyers in India | Expert Legal Services',
      description: 'Professional criminal lawyers in India. AMA Legal Solutions provides expert criminal defense, bail applications, and criminal litigation across India.',
    };
  }

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `https://www.amalegalsolutions.com/services/criminal-law/${slug}`,
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `https://www.amalegalsolutions.com/services/criminal-law/${slug}`,
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
    "url": `https://www.amalegalsolutions.com/services/criminal-law/${content.slug}`,
    "mainEntity": {
      "@type": "FAQPage",
      "name": "Criminal Law Services FAQs",
      "description": "Frequently asked questions about criminal law services, criminal defense, and bail applications",
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

export default async function CriminalSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = stateContent[slug as keyof typeof stateContent] || unionTerritoryContent[slug as keyof typeof unionTerritoryContent];
  
  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600">The requested criminal law page could not be found.</p>
        </div>
      </div>
    );
  }

  const webPageSchema = generateWebPageSchema({ ...content, slug });

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="criminal-law-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      
      <CriminalClient content={content} faqs={faqs} />
    </>
  );
}
