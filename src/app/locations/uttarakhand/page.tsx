import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';

// FAQ data
const faqs = [
  {
    question: "How can I settle my loan in Uttarakhand if I am unable to pay?",
    answer: "If you are facing financial difficulties in Uttarakhand, you can negotiate a One-Time Settlement (OTS) with your bank. This allows you to close your loan by paying a reduced amount. You can also approach the Lok Adalat organized by the Uttarakhand State Legal Services Authority (UKSLSA) for an amicable settlement. Our legal team can guide you through the negotiation process to ensure fair terms."
  },
  {
    question: "Where is the High Court of Uttarakhand located?",
    answer: "The High Court of Uttarakhand is located in Nainital. It has jurisdiction over the entire state. All writ petitions, criminal appeals, and civil matters from district courts are heard here. AMA Legal Solutions has experienced advocates practicing at the Nainital High Court to represent your case effectively."
  },
  {
    question: "I have a manufacturing unit in Haridwar (SIDCUL). How do I register my trademark?",
    answer: "Trademark registration is vital for businesses in industrial hubs like Haridwar and Pantnagar. The process involves filing an application with the Trademark Registry. We provide end-to-end services including trademark search, filing (Form TM-A), and handling objections or oppositions to protect your brand identity."
  },
  {
    question: "Can recovery agents harass me in Dehradun?",
    answer: "No, harassment by recovery agents is illegal under RBI guidelines and Supreme Court judgments. If you are being threatened or abusive language is used, you can file a police complaint in Dehradun or your local district. You can also seek legal protection from the High Court. We specialize in protecting borrowers from such illegal tactics."
  },
  {
    question: "How do I file a RERA complaint in Uttarakhand?",
    answer: "The Uttarakhand Real Estate Regulatory Authority (UK RERA) handles complaints regarding delayed possession, refund, or quality issues with builders. You can file a complaint online on the UK RERA portal. Our RERA lawyers can assist you in drafting the complaint and representing you during the hearings to ensure you get your due compensation."
  },
  {
    question: "Which DRT covers Uttarakhand for loan recovery cases?",
    answer: "Loan recovery cases under the SARFAESI Act or RDB Act for Uttarakhand are primarily handled by the Debts Recovery Tribunal (DRT) in Dehradun (if operational for specific banks) or often mapped to DRT Lucknow or Delhi depending on the bank's jurisdiction and notification. It is crucial to check the specific notification for your bank branch. We help you identify the correct forum and represent you there."
  },
  {
    question: "Do you provide lawyers for mutual consent divorce in Nainital?",
    answer: "Yes, we provide experienced family lawyers for mutual consent divorce in Nainital, Dehradun, and other districts. The process involves filing a joint petition in the Family Court. We ensure the documentation is correct and the process is completed smoothly with minimal stress."
  },
  {
    question: "How can I check my case status in Uttarakhand High Court?",
    answer: "You can check case status, cause lists, and orders on the official website of the High Court of Uttarakhand (highcourtofuttarakhand.gov.in). You will need your case number or party name. Our team also provides regular case updates to our clients."
  },
  {
    question: "What legal services do you offer for startups in Dehradun?",
    answer: "Dehradun is emerging as a startup hub. We offer comprehensive legal services including Company Incorporation, Founder Agreements, Intellectual Property (Trademark/Copyright) registration, and compliance management to help startups grow on a solid legal foundation."
  },
  {
    question: "Is online consultation available for remote areas in Uttarakhand?",
    answer: "Yes, we understand the geographical challenges in the hill state. AMA Legal Solutions offers video and phone consultations for clients in remote areas of Pithoragarh, Almora, Chamoli, and Uttarkashi, ensuring top-quality legal advice is accessible everywhere."
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
      "item": "https://www.amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Locations",
      "item": "https://www.amalegalsolutions.com/locations"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Uttarakhand",
      "item": "https://www.amalegalsolutions.com/locations/uttarakhand"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Legal Services in Uttarakhand",
  "headline": "Expert Lawyers in Uttarakhand: Loan Settlement, Trademarks & Nainital High Court",
  "description": "Premiere legal services in Uttarakhand. Specialized in Loan Settlement, Trademark Registration, and litigation at Nainital High Court & District Courts.",
  "image": "https://www.amalegalsolutions.com/uttarakhand-legal.svg",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Uttarakhand",
    "addressCountry": "IN"
  },
  "telephone": "+918700343611",
  "url": "https://www.amalegalsolutions.com/locations/uttarakhand",
  "priceRange": "₹₹"
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
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
  "@type": "LegalService",
  "name": "Legal Services Uttarakhand",
  "image": "https://www.amalegalsolutions.com/uttarakhand-legal.svg",
  "description": "Top-rated legal services for Loan Settlement, Property Disputes, and Corporate Law in Uttarakhand.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "850"
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
        "name": "Sanjay Rawat"
      },
      "reviewBody": "I had a loan issue with a bank in Dehradun. AMA Legal Solutions helped me settle it through OTS. The lawyers were very supportive and stopped the harassment from agents."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Deepak Pant"
      },
      "reviewBody": "Excellent service for trademark registration for my resort in Rishikesh. They handled everything online, and I got my certificate without any hassle."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meena Joshi"
      },
      "reviewBody": "Best lawyers for Nainital High Court. They represented my father's service matter very effectively. Highly knowledgeable team."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Rahul Chauhan"
      },
      "reviewBody": "Helped with a property dispute in Haridwar. Practical advice and professional approach."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Amit Agarwal"
      },
      "reviewBody": "Great support for my manufacturing unit in SIDCUL. They handle all my legal compliances and contracts."
    }
  ]
};

export const metadata = {
  title: "Lawyers in Uttarakhand | Nainital High Court | Loan Settlement & Trademarks",
  description:
    "Expert legal services in Uttarakhand. Top lawyers for Loan Settlement, Trademark Registration, Divorce, and Property disputes. Practice at Nainital High Court & District Courts.",
  keywords: [
    "Lawyers in Uttarakhand",
    "Nainital High Court Advocates",
    "Loan Settlement in Dehradun",
    "Trademark Registration Haridwar",
    "Divorce Lawyer Nainital",
    "RERA Uttarakhand",
    "Debt Recovery Tribunal Uttarakhand",
    "Cheque Bounce Lawyer Haldwani",
    "Criminal Lawyer Nainital High Court",
    "Property Lawyer in Rishikesh"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/locations/uttarakhand',
  },
};

export default function UttarakhandLocationPage() {
  const tocSections = [
    { id: "introduction", title: "Legal Landscape of Uttarakhand" },
    { id: "loan-settlement", title: "Loan Settlement in UK" },
    { id: "trademark-registration", title: "Trademark Registration" },
    { id: "nainital-high-court", title: "Nainital High Court Guide" },
    { id: "other-services", title: "Other Legal Services" },
    { id: "courts-in-uk", title: "Courts & Tribunals in UK" },
    { id: "why-ama", title: "Why Choose AMA Legal?" },
    { id: "client-stories", title: "Client Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Locations", href: "#" },
    { label: "Uttarakhand", href: "/locations/uttarakhand" },
  ];

  return (
    <>
      <Script strategy="beforeInteractive"
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script strategy="beforeInteractive"
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script strategy="beforeInteractive"
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script strategy="beforeInteractive"
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-[#f8f9fa] min-h-screen font-sans text-[#333]">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundColor: "#1a202c", backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8))" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Expert <span className="text-[#D2A02A]">Legal Services</span> in Uttarakhand
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              From the High Court in Nainital to the industrial hubs of Haridwar & Pantnagar: Comprehensive legal solutions for Loan Settlement, IP Rights, and Litigation.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
                Consult a UK Lawyer Now
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Legal Landscape of Uttarakhand</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Uttarakhand, known as "Devbhoomi", is not just a hub for tourism and pilgrimage but also a rapidly growing industrial state with hubs like <strong>SIDCUL Haridwar, Pantnagar, and Sitarganj</strong>. The legal needs here are unique, ranging from hospitality and real estate regulations to industrial compliance and corporate litigation.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>High Court of Uttarakhand</strong> situated in the scenic town of Nainital serves as the highest judicial authority. With increasing economic activity in cities like Dehradun and Haldwani, the demand for professional legal services in banking, property, and intellectual property is on the rise.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    <strong>AMA Legal Solutions</strong> brings a team of dedicated advocates who understand the local terrain—both geographical and legal. We bridge the gap between clients in remote hill districts and the High Court, providing accessible and effective legal remedies.
                  </p>
                </section>

                {/* Loan Settlement */}
                <section id="loan-settlement" className="scroll-mt-32">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl mr-4">₹</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Loan Settlement in Uttarakhand</h2>
                  </div>
                  
                  <div className="bg-amber-50 border-l-4 border-[#D2A02A] p-6 mb-8 rounded-r-lg">
                    <p className="text-lg italic text-gray-800">
                      "Trapped in debt in the hill state? We provide legal paths to settle your loans and regain financial peace."
                    </p>
                  </div>

                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Rising debts from personal loans, tourism business slumps, or agricultural loans can be stressful. Banks and recovery agents often exert undue pressure. Our legal experts in Uttarakhand help you navigate these challenges with dignity and legal protection.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Loan Settlement Services</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-bold text-[#D2A02A] mb-2">1. Strategic Negotiation (OTS)</h4>
                      <p className="text-gray-700">
                        We represent you in negotiations with bank regional offices in Dehradun/Haldwani to secure a One-Time Settlement (OTS) that fits your financial capacity.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-bold text-[#D2A02A] mb-2">2. Anti-Harassment Protection</h4>
                      <p className="text-gray-700">
                        We take strict legal action against recovery agents using illegal tactics. We help you file complaints with the SSP/SP of your district.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-bold text-[#D2A02A] mb-2">3. DRT & SARFAESI Defense</h4>
                      <p className="text-gray-700">
                        We challenge illegal auction notices and possession attempts under the SARFAESI Act at the appropriate Debt Recovery Tribunal (DRT).
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-bold text-[#D2A02A] mb-2">4. Lok Adalat Representations</h4>
                      <p className="text-gray-700">
                        We guide you through the Lok Adalats organized by UKSLSA for fast-track and cost-effective settlement of banking disputes.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Trademark Registration */}
                <section id="trademark-registration" className="scroll-mt-32">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mr-4">®</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Trademark Registration in UK</h2>
                  </div>

                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    From Ayruvedic products in Haridwar to adventure tourism brands in Rishikesh and manufacturing units in Pantnagar, brands in Uttarakhand need protection. A registered trademark is your legal ownership over your brand name and logo.
                  </p>

                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-blue-800 mb-3">Why Uttarakhand Businesses Need Trademarks?</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Brand Identity:</strong> Stand out in the crowded tourism and hospitality market.</li>
                        <li><strong>Prevent Copycats:</strong> Stop others from using similar names for resorts, goods, or services.</li>
                        <li><strong>Online Protection:</strong> Essential for listing products on e-commerce platforms and protecting digital presence.</li>
                      </ul>
                    </div>

                     <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-blue-800 mb-3">Our IP Services</h3>
                      <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                        <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Trademark Search & Analysis</li>
                         <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Filing TM-A Application</li>
                          <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Reply to Examination Reports</li>
                         <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Hearing Representation</li>
                         <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Trademark Renewal</li>
                        <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> GI Tag Consultation</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Nainital High Court */}
                <section id="nainital-high-court" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Litigation at Nainital High Court</h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The High Court of Uttarakhand in Nainital is known for its proactive stance on environmental and public interest matters. It hears appeals from all District Courts in the state. Whether you are filing a Writ Petition to protect your fundamental rights or appealing against a lower court order, you need a lawyer who knows the High Court procedures inside out.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
                     <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">Writ Jurisdiction</h4>
                        <p className="text-sm text-gray-600">Service matters, government inaction, and enforcement of rights (Art. 226).</p>
                     </div>
                     <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">Bail & Criminal</h4>
                        <p className="text-sm text-gray-600">Anticipatory bail, regular bail applications, and criminal appeals.</p>
                     </div>
                     <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">Civil Appeals</h4>
                        <p className="text-sm text-gray-600">Property disputes, family law appeals, and second appeals.</p>
                     </div>
                  </div>

                  <p className="text-lg leading-relaxed text-gray-700">
                    We connect you with seasoned High Court advocates in Nainital who can represent you effectively, ensuring you don't have to face the legal complexities alone.
                  </p>
                </section>

                {/* Other Services */}
                <section id="other-services" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Comprehensive Legal Solutions</h2>
                   <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Corporate & Industrial Law</h3>
                        <p className="text-gray-700 mb-4">
                            Serving SIDCUL hubs (Haridwar, Pantnagar):
                        </p>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>Factory Act Compliances</li>
                            <li>Labor Law Disputes</li>
                            <li>Company Formation</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Real Estate & RERA</h3>
                        <p className="text-gray-700 mb-4">
                            Protecting property investments in Dehradun/Mussoorie:
                        </p>
                         <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>UK RERA Complaints</li>
                            <li>Property Title Verification</li>
                            <li>Illegal Construction Issues</li>
                        </ul>
                      </div>
                       <div>
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Family Law</h3>
                        <p className="text-gray-700 mb-4">
                            Compassionate legal help for families:
                        </p>
                         <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>Mutual Consent Divorce</li>
                            <li>Child Custody</li>
                            <li>Maintenance Claims</li>
                        </ul>
                      </div>
                       <div>
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Consumer & Cyber</h3>
                        <p className="text-gray-700 mb-4">
                            Modern legal solutions:
                        </p>
                         <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>Consumer Court Cases</li>
                            <li>Cyber Fraud Complaints</li>
                            <li>Cheque Bounce (138 NI Act)</li>
                        </ul>
                      </div>
                   </div>
                </section>

                {/* Courts in UK */}
                <section id="courts-in-uk" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Key Courts & Tribunals in Uttarakhand</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-gray-700">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 border-b-2 border-gray-200 font-bold">Court / Tribunal</th>
                          <th className="p-4 border-b-2 border-gray-200 font-bold">Location</th>
                          <th className="p-4 border-b-2 border-gray-200 font-bold">Key Jurisdiction</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4">High Court of Uttarakhand</td>
                          <td className="p-4">Nainital</td>
                          <td className="p-4">Apex court for the state; Writ & Appellate jurisdiction.</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-gray-50">
                          <td className="p-4">Debts Recovery Tribunal (DRT)</td>
                          <td className="p-4">Dehradun / Lucknow</td>
                          <td className="p-4">Bank loan recovery matters (Jurisdiction varies by bank).</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4">UK RERA</td>
                          <td className="p-4">Dehradun</td>
                          <td className="p-4">Real estate project registration and buyer complaints.</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-gray-50">
                          <td className="p-4">District Courts</td>
                          <td className="p-4">All 13 Districts</td>
                          <td className="p-4">Civil & Criminal matters at district level (Dehradun, Haridwar, etc.).</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4">State Consumer Commission</td>
                          <td className="p-4">Dehradun</td>
                          <td className="p-4">Consumer disputes appeals above District forum limits.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                 {/* Why Choose Us */}
                <section id="why-ama" className="scroll-mt-32">
                  <div className="bg-[#30261C] text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                     <h2 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">Why Choose AMA Legal Solutions in Uttarakhand?</h2>
                     <div className="grid md:grid-cols-2 gap-8 relative z-10">
                        <div>
                            <h4 className="text-xl font-bold text-[#D2A02A] mb-2">Hill State Reach</h4>
                            <p className="opacity-80">We are not limited to cities. We assist clients from Garhwal to Kumaon regions effectively.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-[#D2A02A] mb-2">Transparent Support</h4>
                            <p className="opacity-80">Clear fee structures and honest legal advice. No false hopes, just solid legal pathways.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-[#D2A02A] mb-2">Industrial Expertise</h4>
                            <p className="opacity-80">Specialized support for industries in SIDCUL zones regarding labor, pollution, and corporate laws.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-[#D2A02A] mb-2">Client Centric</h4>
                            <p className="opacity-80">We prioritize your peace of mind, handling the legal stress so you can focus on your life and business.</p>
                        </div>
                     </div>
                  </div>
                </section>

                {/* Client Stories */}
                <section id="client-stories" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-4">What Our Clients Say</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "I had a loan issue with a bank in Dehradun. AMA Legal Solutions helped me settle it through OTS. The lawyers were very supportive and stopped the harassment from agents."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">S</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Sanjay Rawat</p>
                          <p className="text-xs text-gray-500">Dehradun</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Excellent service for trademark registration for my resort in Rishikesh. They handled everything online, and I got my certificate without any hassle."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">D</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Deepak Pant</p>
                          <p className="text-xs text-gray-500">Resort Owner</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Best lawyers for Nainital High Court. They represented my father's service matter very effectively. Highly knowledgeable team."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">M</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Meena Joshi</p>
                          <p className="text-xs text-gray-500">Nainital</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Helped with a property dispute in Haridwar. Practical advice and professional approach."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">R</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Rahul Chauhan</p>
                          <p className="text-xs text-gray-500">Haridwar</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
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
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Need Legal Help in Uttarakhand?</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto text-gray-100">
                      Connect with experienced advocates for Loan Settlement, High Court Litigation, and Business Law.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book Free Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70">
                      Confidential • Professional • Experienced
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Help in UK</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Talk to an expert advocate about your case in Nainital High Court or District Courts.
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
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Services in UK</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Loan Settlement
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/trademark-registration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Trademark Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/corporate" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Company Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/litigation" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> High Court Litigation
                      </Link>
                    </li>
                     <li>
                      <Link href="/services/real-estate" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> RERA & Property
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
