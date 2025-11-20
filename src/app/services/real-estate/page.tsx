import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is the importance of property title verification in India?",
    answer: "Property title verification is the most critical step before purchasing any real estate in India. It ensures that the seller has a clear and marketable title to the property, free from any encumbrances, liens, or legal disputes. A thorough title search, conducted by an experienced real estate lawyer, traces the history of ownership for the past 30 years to confirm that there are no hidden claims. This process protects the buyer from future litigation and financial loss."
  },
  {
    question: "How can RERA help home buyers in India?",
    answer: "The Real Estate (Regulation and Development) Act, 2016 (RERA) was introduced to protect the interests of home buyers and boost investments in the real estate sector. RERA mandates that developers register their projects, adhere to approved plans, and deposit 70% of the funds collected from buyers into a separate escrow account. It provides a fast track dispute resolution mechanism for issues like delayed possession, poor construction quality, and misleading advertisements. RERA empowers buyers to claim interest on delayed possession or a full refund with interest."
  },
  {
    question: "What documents are required for property registration in India?",
    answer: "The documents required for property registration vary slightly by state but generally include the Sale Deed, Mother Deed (previous ownership documents), Building Plan Approval, Encumbrance Certificate, Khata Certificate, Tax paid receipts, and identity proofs of both buyer and seller (PAN Card, Aadhaar). You also need to pay the applicable Stamp Duty and Registration Fee. Our legal team assists in collating and verifying all these documents to ensure a smooth registration process."
  },
  {
    question: "Can an NRI buy property in India?",
    answer: "Yes, Non Resident Indians (NRIs) can buy both residential and commercial properties in India without requiring any special permission from the Reserve Bank of India (RBI). However, they cannot purchase agricultural land, plantation property, or farmhouses without specific government approval. The payment must be made in Indian Rupees through normal banking channels or NRE/NRO accounts. We specialize in assisting NRIs with property transactions and legal due diligence."
  },
  {
    question: "What is the difference between a Lease Agreement and a Leave and License Agreement?",
    answer: "A Lease Agreement creates an interest in the property and typically allows for transfer of possession for a longer duration, often governed by Rent Control Acts which can make eviction difficult. A Leave and License Agreement, on the other hand, only grants permission to occupy the property for a specific purpose and period without creating any ownership interest. Leave and License agreements are generally preferred by landlords for residential purposes as they offer easier eviction processes and better legal protection."
  },
  {
    question: "How do I resolve a property dispute with my siblings?",
    answer: "Property disputes among family members are common and can be resolved through various methods. The first step is usually mediation or negotiation to reach a family settlement. If that fails, you can file a partition suit in the civil court to divide the property according to your share. It is advisable to have a clear Will or Gift Deed to avoid such disputes. Our family property lawyers are experts in handling partition suits and family settlements with sensitivity and legal precision."
  },
  {
    question: "What is the limitation period for filing a suit for possession of property?",
    answer: "The limitation period for filing a suit for possession of immovable property based on title is 12 years from the date when the possession of the defendant becomes adverse to the plaintiff. If you have been dispossessed from your property, you must take legal action within this timeframe. Delaying legal action can lead to the loss of your right to claim the property under the doctrine of Adverse Possession."
  },
  {
    question: "Is it mandatory to register a Rent Agreement?",
    answer: "Yes, under the Registration Act, 1908, any lease of immovable property for a term exceeding 11 months must be compulsorily registered. Unregistered agreements for periods longer than 11 months are not admissible as evidence in court. Even for shorter durations, it is highly recommended to register the agreement to protect the rights of both the landlord and the tenant and to avoid future legal complications."
  },
  {
    question: "What is an Encumbrance Certificate (EC)?",
    answer: "An Encumbrance Certificate (EC) is a vital document that serves as evidence that the property in question is free from any monetary or legal liabilities such as mortgages or uncleared loans. It contains details of all transactions registered against the property for a specific period. Obtaining a Nil Encumbrance Certificate is essential before buying a property to ensure you are getting a clean title."
  },
  {
    question: "How can AMA Legal Solutions assist in builder disputes?",
    answer: "We provide comprehensive legal support for builder disputes, including filing complaints under RERA for delayed possession, structural defects, or deviation from approved plans. We also represent buyers in Consumer Forums and the National Company Law Tribunal (NCLT) for insolvency proceedings against defaulting developers. Our goal is to ensure you get your dream home or a full refund with interest."
  }
];

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Real Estate Legal Services",
      "item": "https://amalegalsolutions.com/services/real-estate"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Real Estate Legal Services in India: Expert Property Lawyers",
  "description": "Comprehensive guide to real estate laws in India. Expert legal services for property disputes, RERA compliance, title verification, and conveyance.",
  "image": "https://amalegalsolutions.com/services/6.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://amalegalsolutions.com/logo.png"
    }
  },
  "datePublished": "2023-11-10",
  "dateModified": "2023-11-20"
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Real Estate Legal Services",
  "image": "https://amalegalsolutions.com/services/6.png",
  "description": "Expert real estate lawyers for property disputes, RERA, and registration.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "920"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rajesh Kumar"
      },
      "reviewBody": "I was facing a serious property dispute with a builder who delayed possession by 3 years. AMA Legal Solutions helped me file a case in RERA and I got my refund with interest. Excellent service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Priya Sharma"
      },
      "reviewBody": "Their title verification service is top notch. They found a hidden litigation on a property I was about to buy, saving me from a huge financial loss. Highly recommended for property due diligence."
    }
  ]
};

// WebPage Schema
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Real Estate Lawyers in India | Property Dispute & RERA Services",
  "description": "Expert real estate lawyers in India. AMA Legal Solutions provides property dispute resolution, RERA compliance, property registration, and real estate litigation services.",
  "url": "https://amalegalsolutions.com/services/real-estate",
};

export const metadata = {
  title: "Real Estate Lawyers in India | Property Dispute & RERA Compliance",
  description:
    "Expert real estate lawyers in India. AMA Legal Solutions provides property dispute resolution, RERA compliance, property registration, and real estate litigation services. Book your consultation now.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/real-estate',
  },
  openGraph: {
    title: "Real Estate Lawyers in India | Property Dispute & RERA Compliance",
    description: "Secure your property interests with our comprehensive real estate legal services in India. Expert lawyers for disputes, RERA, and registration.",
    url: "https://amalegalsolutions.com/services/real-estate",
    type: "website",
    images: [
      {
        url: "/services/6.png",
        width: 1200,
        height: 630,
        alt: "Real Estate Legal Services India",
      },
    ],
  },
};

export default function RealEstatePage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "real-estate-landscape", title: "Real Estate Landscape" },
    { id: "key-services", title: "Our Key Services" },
    { id: "rera-compliance", title: "RERA Compliance" },
    { id: "due-diligence", title: "Importance of Due Diligence" },
    { id: "process", title: "Our Process" },
    { id: "documents-required", title: "Documents Required" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Real Estate Legal Services", href: "/services/real-estate" },
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 bg-black" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Expert <span className="text-[#D2A02A]">Real Estate</span> Legal Services in India
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Comprehensive legal solutions for property disputes, RERA compliance, title verification, and real estate transactions. Protect your investment with India's trusted property lawyers.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Consult a Property Lawyer
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content Area */}
            <div className="lg:w-3/4">
              
              <TableOfContents sections={tocSections} />

              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm mt-8 space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating Real Estate Laws in India</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Indian real estate sector is one of the most dynamic and rapidly growing industries, yet it is governed by a complex web of central and state specific laws. Whether you are a first time home buyer, a seasoned investor, a developer, or a corporate entity, navigating the legal intricacies of property transactions can be daunting. From the Transfer of Property Act to the Registration Act, and the game changing RERA regulations, compliance is key to safeguarding your assets.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Property disputes are unfortunately common in India, often arising from unclear titles, family disagreements, or unscrupulous builder practices. A minor oversight in documentation or due diligence can lead to years of litigation and significant financial loss. This is where expert legal guidance becomes indispensable.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we provide end to end <strong>real estate legal services in India</strong>. Our team of experienced property lawyers specializes in due diligence, dispute resolution, contract drafting, and regulatory compliance. We are committed to protecting your property interests and ensuring seamless transactions.
                  </p>
                </section>

                {/* Real Estate Landscape */}
                <section id="real-estate-landscape" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Complex Landscape of Property Law</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    However, this safety is contingent upon legal clarity. In India, real estate laws are a concurrent subject, meaning both the Central and State governments can frame laws. This leads to a multiplicity of regulations that vary from state to state.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Key legislations governing real estate in India include:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-2 font-bold">✓</span>
                      <span><strong>Transfer of Property Act, 1882:</strong> Governs the transfer of immovable property.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-2 font-bold">✓</span>
                      <span><strong>Registration Act, 1908:</strong> Mandates the registration of property documents.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-2 font-bold">✓</span>
                      <span><strong>RERA Act, 2016:</strong> Regulates the real estate sector and protects buyers.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-2 font-bold">✓</span>
                      <span><strong>Indian Stamp Act, 1899:</strong> Governs the payment of stamp duty on instruments.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-2 font-bold">✓</span>
                      <span><strong>Land Acquisition Act, 2013:</strong> Governs land acquisition by the government.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-2 font-bold">✓</span>
                      <span><strong>Benami Transactions (Prohibition) Act:</strong> Prohibits benami transactions.</span>
                    </li>
                  </ul>
                </section>

                {/* Key Services */}
                <section id="key-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Comprehensive Real Estate Services</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We offer a wide spectrum of legal services tailored to meet the diverse needs of individuals, developers, and corporations.
                  </p>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">1. Property Dispute Resolution</h3>
                      <p className="text-gray-700">
                        We handle all types of property disputes, including title suits, partition suits for ancestral property, boundary disputes, and adverse possession claims. Our approach prioritizes negotiation and mediation to resolve conflicts amicably, but we are fully equipped to represent you in civil courts and higher forums if litigation becomes necessary.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">2. Title Verification & Due Diligence</h3>
                      <p className="text-gray-700">
                        Before you sign on the dotted line, our team conducts a rigorous investigation of the property's title. We examine revenue records, encumbrance certificates, and court records for the past 30 years to ensure the property is free from legal tangles, mortgages, and liens. This is the most effective insurance against future fraud.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">3. Drafting & Conveyancing</h3>
                      <p className="text-gray-700">
                        A well drafted contract is your first line of defense. We draft and vet various legal documents including Sale Deeds, Agreements to Sell, Lease Deeds, Gift Deeds, Will and Testament, Power of Attorney, and Joint Development Agreements (JDAs). We ensure every clause is legally sound and protects your interests.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">4. Landlord Tenant Disputes</h3>
                      <p className="text-gray-700">
                        We represent both landlords and tenants in disputes related to eviction, non payment of rent, breach of lease agreements, and maintenance issues. We are well versed with the various Rent Control Acts applicable in different states and can guide you through the legal process of eviction or defense.
                      </p>
                    </div>
                  </div>
                </section>

                {/* RERA Compliance */}
                <section id="rera-compliance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">RERA Compliance & Litigation</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    The Real Estate (Regulation and Development) Act, 2016 has revolutionized the sector. We provide specialized services for both buyers and developers under RERA.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-green-800 mb-3">For Home Buyers</h3>
                      <p className="text-gray-700 mb-4">
                        If you are a victim of delayed possession, false promises, or poor construction quality, RERA is your shield.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Filing complaints with State RERA Authorities.</li>
                        <li>Seeking refund with interest for delayed projects.</li>
                        <li>Claiming compensation for structural defects.</li>
                        <li>Execution of RERA orders.</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-orange-800 mb-3">For Developers</h3>
                      <p className="text-gray-700 mb-4">
                        Compliance with RERA is mandatory to avoid heavy penalties and project stalling.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Project registration with RERA.</li>
                        <li>Quarterly compliance and updates.</li>
                        <li>Drafting RERA compliant Allotment Letters.</li>
                        <li>Representation in RERA Appellate Tribunals.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Importance of Due Diligence */}
                <section id="due-diligence" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Property Due Diligence is Non Negotiable</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Investing in real estate is often the largest financial decision of one's life. Skipping due diligence to save a small amount on legal fees can be a catastrophic mistake. Property fraud is sophisticated, and issues often lie buried in decades old records.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Common risks avoided by proper due diligence include:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 font-bold">⚠</span>
                      Buying property involved in pending litigation.
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 font-bold">⚠</span>
                      Purchasing from a seller who does not have a clear title.
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 font-bold">⚠</span>
                      Investing in illegal constructions or properties without occupancy certificates.
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 font-bold">⚠</span>
                      Buying agricultural land without being an agriculturist (in certain states).
                    </li>
                  </ul>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our 4 Step Legal Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We follow a structured approach to ensure every aspect of your real estate matter is handled with precision.
                  </p>
                  
                  <div className="relative border-l-4 border-[#D2A02A] ml-6 space-y-12">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 1: Consultation & Strategy</h3>
                      <p className="text-gray-700">
                        We begin with a detailed consultation to understand your specific situation. Whether it is a purchase, sale, or dispute, we analyze the facts and formulate a legal strategy tailored to your goals.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 2: Verification & Investigation</h3>
                      <p className="text-gray-700">
                        For transactions, we conduct thorough title searches and document verification. For disputes, we gather evidence, review case history, and identify legal precedents that support your case.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 3: Documentation & Filing</h3>
                      <p className="text-gray-700">
                        We draft robust legal documents, agreements, or court petitions. We ensure all filings are done within limitation periods and adhere to procedural requirements to prevent technical rejections.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 4: Execution & Representation</h3>
                      <p className="text-gray-700">
                        We assist in the final registration of deeds at the Sub Registrar's office. In litigation matters, our senior advocates vigorously represent your interests in court until a favorable order is secured.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Documents Required */}
                <section id="documents-required" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Documents Checklist</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Having the right documents is half the battle won. Here is a general checklist for property transactions:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Primary Title Documents</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Sale Deed / Conveyance Deed
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Mother Deed (Parent Document)
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Khata Certificate / Extract
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Encumbrance Certificate (EC)
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Betterment Charges Receipt
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Approvals & Clearances</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Building Plan Approval
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Commencement Certificate
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Occupancy Certificate (OC)
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> NOC from Electricity/Water Dept
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Latest Tax Paid Receipts
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Real estate law requires local expertise and a deep understanding of regulatory nuances. Here is why we are the preferred choice for property matters:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Deep Industry Knowledge</h3>
                      <p className="text-gray-600">Decades of experience in handling complex property disputes and high value transactions.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🔍</div>
                      <h3 className="font-bold text-xl mb-2">Meticulous Due Diligence</h3>
                      <p className="text-gray-600">We leave no stone unturned in verifying titles to ensure your investment is 100% safe.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Holistic Legal Support</h3>
                      <p className="text-gray-600">From initial verification to final registration and litigation support, we are with you at every step.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was facing a serious property dispute with a builder who delayed possession by 3 years. AMA Legal Solutions helped me file a case in RERA and I got my refund with interest. Excellent service!"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rajesh Kumar</p>
                          <p className="text-sm text-gray-500">IT Professional, Bangalore</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Their title verification service is top notch. They found a hidden litigation on a property I was about to buy, saving me from a huge financial loss. Highly recommended for property due diligence."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900">Priya Sharma</p>
                          <p className="text-sm text-gray-500">Entrepreneur, Delhi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Property Rights Today</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't leave your real estate investments to chance. Get expert legal advice from India's leading property lawyers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Get Free Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      Confidential • Professional • Trusted
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Talk to a Property Expert</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Get immediate legal advice for property disputes and registration.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Call +91-8700343611
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors"
                  >
                    Request Callback
                  </Link>
                </div>

                {/* Quick Links */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/services/litigation" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Civil Litigation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/corporate" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Corporate Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/intellectual-property-rights" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Intellectual Property
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Loan Settlement
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid serviceName="Real Estate Legal Services" servicePath="real-estate" />
          </div>
        </div>
      </div>
    </>
  );
}
