import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "How can I settle my loan in Uttar Pradesh if I am unable to pay?",
    answer: "If you are facing financial distress in Uttar Pradesh, you can opt for a One-Time Settlement (OTS) with your bank. This process allows you to pay a reduced lump sum amount to close the loan account. It is advisable to seek legal assistance to negotiate favorable terms and ensure the bank does not harass you during the process. You can also approach the Lok Adalat organized by the UP State Legal Services Authority for amicable settlement."
  },
  {
    question: "Where is the High Court of Uttar Pradesh located?",
    answer: "The High Court of Judicature at Allahabad is the primary High Court of Uttar Pradesh, located in Prayagraj (formerly Allahabad). It also has a permanent Bench in Lucknow, known as the Allahabad High Court Lucknow Bench, which has jurisdiction over several districts in the Awadh region."
  },
  {
    question: "What is the procedure for trademark registration in Noida and Ghaziabad?",
    answer: "For businesses in Noida, Ghaziabad, and the rest of Uttar Pradesh, trademark applications are processed by the Trademark Registry. The process involves conducting a trademark search, filing the application (Form TM-A), responding to examination reports, and handling oppositions. Given the industrial hub in Noida, protecting your brand is crucial. AMA Legal Solutions provides end-to-end trademark services in these regions."
  },
  {
    question: "Can recovery agents force me to pay my loan in UP?",
    answer: "No, recovery agents cannot use force, abusive language, or harassment to recover loans. The RBI has strict guidelines against such practices. If you are being harassed in UP, you can file a complaint with the local police, the Banking Ombudsman, or approach the Allahabad High Court for protection. Our legal team specializes in defending borrowers against aggressive recovery tactics."
  },
  {
    question: "How do I file a complaint with UP RERA?",
    answer: "If you are facing issues with a real estate developer in Uttar Pradesh (like delay in possession or poor quality), you can file a complaint with the Uttar Pradesh Real Estate Regulatory Authority (UP RERA). The complaint can be filed online through the UP RERA portal. Legal representation ensures your case is presented effectively for compensation and swift resolution."
  },
  {
    question: "What is the jurisdiction of the Debt Recovery Tribunal (DRT) in Uttar Pradesh?",
    answer: "Uttar Pradesh has Debt Recovery Tribunals (DRTs) located in Allahabad and Lucknow. These tribunals handle cases involving debt recovery by banks and financial institutions for amounts above ₹20 lakhs. If you have received a demand notice under the SARFAESI Act, you must approach the appropriate DRT within 45 days to save your property."
  },
  {
    question: "Do I need a lawyer for mutual consent divorce in Uttar Pradesh?",
    answer: "Yes, hiring a lawyer is highly recommended even for mutual consent divorce to ensure the process is smooth and all legal requirements are met. The petition is filed in the Family Court of the district where the marriage was solemnized or where the couple last resided together. A mandatory cooling-off period of 6 months (which can be waived in some cases) applies."
  },
  {
    question: "How can I check the status of my High Court case in Allahabad?",
    answer: "You can check the status of your case on the official website of the Allahabad High Court (allahabadhighcourt.in). You generally need your case type, case number, and year, or the petitioner/respondent's name. Our legal team can also assist you in tracking your case and obtaining certified copies of orders."
  },
  {
    question: "What are the charges for trademark registration in UP?",
    answer: "The government fee for filing a trademark application is ₹4,500 for individuals/startups/MSMEs and ₹9,000 for other entities. Professional fees for legal drafting and filing vary. Investing in expert legal counsel minimizes the risk of rejection and ensures your brand is adequately protected across relevant classes."
  },
  {
    question: "Is online legal consultation available for clients in remote UP districts?",
    answer: "Yes, AMA Legal Solutions offers online legal consultation services across all districts of Uttar Pradesh. Whether you are in Varanasi, Meerut, Agra, or a remote village, you can connect with our expert advocates via video call or phone to discuss your legal issues and get immediate advice."
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
      "name": "Uttar Pradesh",
      "item": "https://www.amalegalsolutions.com/locations/uttar-pradesh"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Legal Services in Uttar Pradesh",
  "headline": "Expert Lawyers in Uttar Pradesh: Loan Settlement, Trademarks & High Court",
  "description": "Premiere legal services in Uttar Pradesh. Specialized in Loan Settlement, Trademark Registration, and litigation at Allahabad High Court & Lucknow Bench.",
  "image": "https://www.amalegalsolutions.com/uttar-pradesh-legal.svg",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Uttar Pradesh",
    "addressCountry": "IN"
  },
  "telephone": "+918700343611",
  "url": "https://www.amalegalsolutions.com/locations/uttar-pradesh",
  "priceRange": "₹₹"
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
  "@type": "LegalService",
  "name": "Legal Services Uttar Pradesh",
  "image": "https://www.amalegalsolutions.com/uttar-pradesh-legal.svg",
  "description": "Top-rated legal services for Loan Settlement, Property Disputes, and Corporate Law in Uttar Pradesh.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1250"
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
      "reviewBody": "I was vetted by recovery agents in Noida. The team at AMA Legal Solutions, especially Advocate Anuj, helped me get legal protection and settled my loan with the bank at 40% of the outstanding. Highly recommended for loan settlement in UP."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Amit Singh"
      },
      "reviewBody": "Best trademark lawyers in Lucknow. They handled my objection case very professionally. The process was explained clearly, and the fees were reasonable."
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
      "reviewBody": "Detailed and honest advice for my divorce case in Allahabad High Court. They guided me through the mediation process effectively."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4"
      },
      "author": {
        "@type": "Person",
        "name": "Vikas Gupta"
      },
      "reviewBody": "Helped me with RERA complaint against a builder in Greater Noida. Good knowledge of UP RERA laws."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Mohd. Azhar"
      },
      "reviewBody": "Professional service for company registration in Kanpur. Very responsive team."
    }
  ]
};

export const metadata = {
  title: "Lawyers in Uttar Pradesh | Allahabad High Court | Loan Settlement & Trademarks",
  description:
    "Expert legal services in Uttar Pradesh. Top lawyers for Loan Settlement, Trademark Registration, Divorce, and Property disputes. Practice at Allahabad High Court & District Courts.",
  keywords: [
    "Lawyers in Uttar Pradesh",
    "Allahabad High Court Advocates",
    "Loan Settlement in UP",
    "Trademark Registration Lucknow",
    "Divorce Lawyer Allahabad",
    "Noida Legal Services",
    "Debt Recovery Tribunal UP",
    "Cheque Bounce Lawyer Uttar Pradesh",
    "Criminal Lawyer Allahabad High Court",
    "Property Lawyer in UP"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/locations/uttar-pradesh',
  },
};

export default function UttarPradeshLocationPage() {
  const tocSections = [
    { id: "introduction", title: "Legal Landscape of Uttar Pradesh" },
    { id: "loan-settlement", title: "Loan Settlement in UP" },
    { id: "trademark-registration", title: "Trademark Registration" },
    { id: "allahabad-high-court", title: "Allahabad High Court Guide" },
    { id: "other-services", title: "Other Legal Services" },
    { id: "courts-in-up", title: "Courts & Tribunals in UP" },
    { id: "why-ama", title: "Why Choose AMA Legal?" },
    { id: "client-stories", title: "Client Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Locations", href: "#" },
    { label: "Uttar Pradesh", href: "/locations/uttar-pradesh" },
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
              Expert <span className="text-[#D2A02A]">Legal Services</span> in Uttar Pradesh
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              From the Allahabad High Court to the industrial hubs of Noida & Kanpur: Comprehensive legal solutions for Loan Settlement, IP Rights, and Litigation.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
                Consult a UP Lawyer Now
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Legal Landscape of Uttar Pradesh</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Uttar Pradesh, the most populous state in India, presents a diverse and complex legal landscape. From the historical judicial seats in <strong>Prayagraj (Allahabad)</strong> and <strong>Lucknow</strong> to the rapidly developing industrial corridors of <strong>Noida, Greater Noida, Ghaziabad, and Kanpur</strong>, the demand for specialized legal services is immense.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The state is home to the <strong>Allahabad High Court</strong>, one of the oldest and largest high courts in Asia. Legal matters here range from intricate land disputes and constitutional writs to modern corporate litigation and intellectual property rights issues driven by the startup ecosystem in NCR.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, we understand the pulse of Uttar Pradesh's legal system. Our network of experienced advocates spans across the state, ensuring that whether you are a farmer in a rural district or a tech entrepreneur in Noida, you receive top-tier legal representation.
                  </p>
                </section>

                {/* Loan Settlement */}
                <section id="loan-settlement" className="scroll-mt-32">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl mr-4">₹</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Loan Settlement in Uttar Pradesh</h2>
                  </div>
                  
                  <div className="bg-amber-50 border-l-4 border-[#D2A02A] p-6 mb-8 rounded-r-lg">
                    <p className="text-lg italic text-gray-800">
                      "Struggling with debt in UP? Don't let harassment break you. Legal avenues exist to settle your dues with dignity."
                    </p>
                  </div>

                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Financial distress is a reality for many families and businesses in Uttar Pradesh. Whether it's a personal loan default, credit card debt, or a business loan turning NPA, the pressure from banks and recovery agents can be overwhelming. We provide a legal shield and a path to financial freedom.
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Loan Settlement Services in UP</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-bold text-[#D2A02A] mb-2">1. Bank Negotiation & OTS</h4>
                      <p className="text-gray-700">
                        We negotiate directly with bank managers (Regional Offices in Lucknow/Kanpur/Noida) for a One-Time Settlement (OTS), aiming to waive off penalties and interest.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-bold text-[#D2A02A] mb-2">2. Protection from Harassment</h4>
                      <p className="text-gray-700">
                        Illegal recovery tactics are common in UP. We help you file police complaints against abusive agents and send legal notices to banks violating RBI guidelines.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-bold text-[#D2A02A] mb-2">3. DRT Representation</h4>
                      <p className="text-gray-700">
                        For debts over ₹20 Lakhs, we represent you at the <strong>DRT Allahabad</strong> or <strong>DRT Lucknow</strong> to stay auctions and challenge SARFAESI notices.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-bold text-[#D2A02A] mb-2">4. Lok Adalat Assistance</h4>
                      <p className="text-gray-700">
                        We assist in taking your case to the Lok Adalat organized by the <strong>UP State Legal Services Authority (UPSLSA)</strong> for a quick, amicable, and binding settlement.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Trademark Registration */}
                <section id="trademark-registration" className="scroll-mt-32">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mr-4">®</div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Trademark Registration in UP</h2>
                  </div>

                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Uttar Pradesh is evolving into a major industrial and startup hub. Cities like <strong>Noida</strong> (Electronic City), <strong>Kanpur</strong> (Leather City), <strong>Mirzapur</strong> (Carpets), and <strong>Varanasi</strong> (Textiles) are centers of unique products and brands. Protecting your brand identity through trademark registration is essential to prevent counterfeiting and build value.
                  </p>

                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-blue-800 mb-3">Why Register Your Brand in UP?</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Legal Protection:</strong> Exclusive right to use the brand in Noida, Lucknow, and across India.</li>
                        <li><strong>Asset Creation:</strong> A registered trademark is an intangible asset that increases your company's valuation.</li>
                        <li><strong>Trust:</strong> The ® symbol builds trust among customers and investors in the competitive UP market.</li>
                      </ul>
                    </div>

                     <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-blue-800 mb-3">Our Trademark Services</h3>
                      <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                        <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Comprehensive Brand Search</li>
                        <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Filing Application (TM-A)</li>
                         <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Responding to Objections</li>
                        <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Handling Oppositions</li>
                        <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Trademark Renewal</li>
                        <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Copyright Registration</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Allahabad High Court */}
                <section id="allahabad-high-court" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Litigation at Allahabad High Court & Lucknow Bench</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The High Court of Judicature at Allahabad is the apex judicial body in the state. It has jurisdiction over the entire state of Uttar Pradesh. However, the <strong>Lucknow Bench</strong> has specific jurisdiction over districts in the Awadh region (Lucknow, Unnao, Ayodhya, etc.). Knowing where to file your case—Prayagraj or Lucknow—is the first crucial step.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
                     <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">Writ Jurisdiction</h4>
                        <p className="text-sm text-gray-600">Filing Writ Petitions (Article 226) for enforcing fundamental rights against state authorities.</p>
                     </div>
                     <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">Criminal Appeals</h4>
                        <p className="text-sm text-gray-600">Bail applications, criminal appeals, and revision petitions against lower court orders.</p>
                     </div>
                     <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">Civil Matters</h4>
                        <p className="text-sm text-gray-600">First Appeals, Second Appeals, and Testamentary (Probate) matters.</p>
                     </div>
                  </div>

                  <p className="text-lg leading-relaxed text-gray-700">
                    Our panel of advocates includes seasoned litigators who practice regularly at both the Principal Seat in Prayagraj and the Lucknow Bench. We act as your local representatives, managing the entire litigation process so you don't have to travel unnecessarily.
                  </p>
                </section>

                {/* Other Services */}
                <section id="other-services" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Comprehensive Legal Solutions</h2>
                   <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Corporate & Startup Law</h3>
                        <p className="text-gray-700 mb-4">
                            Noida is a startup hub. We assist in:
                        </p>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>Company Incorporation (Pvt Ltd, LLP)</li>
                            <li>Founder Agreements & ESOPs</li>
                            <li>GST & Compliance</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Property & RERA (Real Estate)</h3>
                        <p className="text-gray-700 mb-4">
                            Real estate disputes are common in NCR. We handle:
                        </p>
                         <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>RERA Complaints against Builders</li>
                            <li>Property Due Diligence</li>
                            <li>Land Acquisition Disputes</li>
                        </ul>
                      </div>
                       <div>
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Family & Matrimonial Law</h3>
                        <p className="text-gray-700 mb-4">
                            Sensitive handling of family matters:
                        </p>
                         <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>Mutual Consent Divorce</li>
                            <li>Child Custody & Maintenance</li>
                            <li>Domestic Violence (498A) Defense</li>
                        </ul>
                      </div>
                       <div>
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Criminal Defense</h3>
                        <p className="text-gray-700 mb-4">
                            Robust defense in criminal cases:
                        </p>
                         <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            <li>Bail & Anticipatory Bail</li>
                            <li>Cheque Bounce (NI Act 138)</li>
                            <li>Cyber Crime Complaints</li>
                        </ul>
                      </div>
                   </div>
                </section>

                {/* Courts in UP */}
                <section id="courts-in-up" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Key Courts & Tribunals in Uttar Pradesh</h2>
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
                          <td className="p-4">Allahabad High Court (Principal Seat)</td>
                          <td className="p-4">Prayagraj</td>
                          <td className="p-4">Appellate jurisdiction for most of UP; Writ jurisdiction.</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-gray-50">
                          <td className="p-4">Allahabad High Court (Lucknow Bench)</td>
                          <td className="p-4">Lucknow</td>
                          <td className="p-4">Jurisdiction over Awadh region districts (Lucknow, Ayodhya, etc.).</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4">Debts Recovery Tribunal (DRT)</td>
                          <td className="p-4">Allahabad & Lucknow</td>
                          <td className="p-4">Bank loan recovery cases &gt; ₹20 Lakhs, SARFAESI matters.</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-gray-50">
                          <td className="p-4">UP RERA</td>
                          <td className="p-4">Lucknow & Greater Noida</td>
                          <td className="p-4">Real estate disputes between buyers and developers.</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4">District Courts</td>
                          <td className="p-4">All 75 Districts</td>
                          <td className="p-4">Civil suits, Sessions trials, Family courts at district level.</td>
                        </tr>
                         <tr className="border-b border-gray-100 bg-gray-50">
                          <td className="p-4">Commercial Courts</td>
                          <td className="p-4">Lucknow, Noida, etc.</td>
                          <td className="p-4">Fast-track commercial disputes.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                 {/* Why Choose Us */}
                <section id="why-ama" className="scroll-mt-32">
                  <div className="bg-[#30261C] text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                     <h2 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">Why Choose AMA Legal Solutions in UP?</h2>
                     <div className="grid md:grid-cols-2 gap-8 relative z-10">
                        <div>
                            <h4 className="text-xl font-bold text-[#D2A02A] mb-2">Local Expertise</h4>
                            <p className="opacity-80">We have deep roots in the UP legal community, understanding local court procedures and nuances from Saharanpur to Sonbhadra.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-[#D2A02A] mb-2">Transparency</h4>
                            <p className="opacity-80">No hidden costs or false promises. We provide clear legal opinions and transparent fee structures.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-[#D2A02A] mb-2">Accessibility</h4>
                            <p className="opacity-80">With offices in Delhi NCR and a strong network in Lucknow/Allahabad, we are always within reach.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-[#D2A02A] mb-2">Result Oriented</h4>
                            <p className="opacity-80">Our focus is on solving your problem—whether it's settling a loan to save your home or registering a trademark to build your brand.</p>
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
                        "I was vetted by recovery agents in Noida. The team at AMA Legal Solutions, especially Advocate Anuj, helped me get legal protection and settled my loan with the bank at 40% of the outstanding. Highly recommended for loan settlement in UP."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">R</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Rajesh Kumar</p>
                          <p className="text-xs text-gray-500">Business Owner, Noida</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Best trademark lawyers in Lucknow. They handled my objection case very professionally. The process was explained clearly, and the fees were reasonable."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">A</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Amit Singh</p>
                          <p className="text-xs text-gray-500">Startup Founder</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Detailed and honest advice for my divorce case in Allahabad High Court. They guided me through the mediation process effectively."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">P</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Priya Sharma</p>
                          <p className="text-xs text-gray-500">Allahabad</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Helped me with RERA complaint against a builder in Greater Noida. Good knowledge of UP RERA laws."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">V</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Vikas Gupta</p>
                          <p className="text-xs text-gray-500">IT Professional</p>
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
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Need Legal Help in Uttar Pradesh?</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto text-gray-100">
                      Connect with experienced advocates for Loan Settlement, High Court Litigation, and Corporate Legal Services.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Help in UP</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Talk to an expert advocate about your case in Allahabad High Court or District Courts.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Services in UP</h3>
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
