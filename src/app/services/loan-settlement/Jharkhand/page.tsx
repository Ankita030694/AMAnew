import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Jharkhand | Debt Relief Lawyers Ranchi, Dhanbad, Jamshedpur",
  description:
    "Struggling with debt in Jharkhand? AMA Legal Solutions offers expert loan settlement. We protect Tribal Land (CNT/SPT Acts), help Mining workers, and stop harassment.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/Jharkhand',
  },
  openGraph: {
    title: "Loan Settlement in Jharkhand | Debt Relief Lawyers Ranchi, Dhanbad, Jamshedpur",
    description: "Struggling with debt in Jharkhand? AMA Legal Solutions offers expert loan settlement. We protect Tribal Land (CNT/SPT Acts), help Mining workers, and stop harassment.",
    url: "https://amalegalsolutions.com/services/loan-settlement/Jharkhand",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Jharkhand",
      },
    ],
  },
};

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
      "name": "Loan Settlement",
      "item": "https://amalegalsolutions.com/services/loan-settlement"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Jharkhand",
      "item": "https://amalegalsolutions.com/services/loan-settlement/Jharkhand"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Jharkhand: Protecting the Land of Forests",
  "description": "Comprehensive guide to loan settlement in Jharkhand. Learn how to legally settle loans, protect tribal land under CNT/SPT Acts, and resolve mining/agriculture debt.",
  "image": "https://amalegalsolutions.com/services/3.png",
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
      "url": "https://amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2023-11-21",
  "dateModified": "2023-11-21"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Services Jharkhand",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Jharkhand.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "420"
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
        "name": "Ramesh M."
      },
      "reviewBody": "I work in a coal mine in Dhanbad. Due to illness, I couldn't pay my personal loan. The bank threatened to take my land. AMA lawyers explained that my land is protected under CNT Act and settled the loan for me."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sunita K."
      },
      "reviewBody": "Microfinance agents were harassing our women's group in the village. AMA Legal Solutions helped us file a complaint and settle the debt peacefully. They are true protectors."
    }
  ]
};

export default function JharkhandLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "Legal Framework in Jharkhand" },
    { id: "process", title: "Our Process" },
    { id: "mining-sector", title: "For Mining Workers" },
    { id: "agriculture-sector", title: "For Farmers & SHGs" },
    { id: "lok-adalat", title: "Lok Adalat Settlement" },
    { id: "types-of-loans", title: "Types of Loans" },
    { id: "credit-score", title: "Credit Score Impact" },
    { id: "common-mistakes", title: "Common Mistakes" },
    { id: "documentation", title: "Required Documents" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Jharkhand", href: "/services/loan-settlement/Jharkhand" },
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
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Empowering the Land of Forests: <span className="text-[#D2A02A]">Loan Settlement in Jharkhand</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal defense for Mining Workers, Farmers, and Families. Protect your Tribal Land (CNT/SPT) and settle debts with dignity in Ranchi, Dhanbad, and Jamshedpur.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free Case Evaluation
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Challenges in Jharkhand</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Jharkhand is a land of immense resources but also significant hardship. From the <strong>coal mines of Dhanbad</strong> to the <strong>industrial hubs of Jamshedpur</strong> and the <strong>tribal heartlands of Dumka</strong>, people face unique financial struggles.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Many fall into debt traps due to medical emergencies, crop failure, or job loss in the mining sector. The fear of losing ancestral land is real, but the law provides strong protections.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions stands with the people of Jharkhand. We help you navigate the complex legal landscape, including the <strong>CNT and SPT Acts</strong>, to settle your debts and protect your heritage.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Loan Settlement?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Loan settlement, or One Time Settlement (OTS), is a legal negotiation where the bank agrees to accept a reduced lump sum amount to close a loan account that has become a Non-Performing Asset (NPA)."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For a mining worker, this could mean settling a ₹5 Lakh personal loan for ₹2-3 Lakhs, allowing you to clear the burden without selling your assets.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Mining & Industrial Worker Loans</li>
                    <li>Agricultural & KCC Loans</li>
                    <li>Microfinance Group Loans</li>
                    <li>Vehicle & Housing Loans</li>
                  </ul>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Protections in Jharkhand</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Jharkhand has powerful laws to protect its indigenous people and citizens.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">CNT & SPT Acts (Land Protection)</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>Chota Nagpur Tenancy (CNT) Act, 1908</strong> and <strong>Santhal Parganas Tenancy (SPT) Act, 1949</strong> are shields for tribal land. They strictly restrict the transfer of land belonging to Scheduled Tribes (ST), Scheduled Castes (SC), and Backward Classes (BC). This means banks often <strong>cannot auction your land</strong> to recover loans. We use this as a strong leverage in negotiations.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Jharkhand Private Money Lending Act, 2016</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This Act bans private money lending on interest without a license. It targets exploitative practices like 'shaukari'. If you are trapped by illegal private lenders, this law renders such debts unenforceable.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">JHALSA Lok Adalats</h4>
                      <p className="text-gray-600">The Jharkhand Legal Services Authority conducts Lok Adalats across the state. These are excellent forums for settling bank disputes amicably.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Jharkhand High Court</h4>
                      <p className="text-gray-600">The High Court in Ranchi ensures that recovery processes are fair and legal. We can seek intervention against harassment.</p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Settlement Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We guide you through a structured process to achieve financial freedom.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Notice & Shielding</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We send a legal notice to the bank. This stops them from calling you directly and compels them to communicate only through us.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Financial Assessment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We analyze your income and assets. We check if your land falls under CNT/SPT protection to determine the bank's actual recovery power.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our team negotiates with bank officials to reduce the outstanding amount, aiming for a waiver of interest and penalties.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Closure</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We review the settlement letter. Once you pay the agreed amount, we ensure you receive a No Dues Certificate.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Mining Sector */}
                <section id="mining-sector" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">For Mining & Industrial Workers</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Workers in Dhanbad, Bokaro, and Jamshedpur often face debt due to health issues or irregular contract work.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                    <p className="text-lg text-blue-900">
                      <strong>Vehicle Loans:</strong> If you have a loan for a truck, dumper, or commercial vehicle that is now idle, we can help settle the loan and prevent seizure, or negotiate a release of the vehicle.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We also handle personal loans taken for medical emergencies (silicosis, accidents) which are common in mining areas.
                  </p>
                </section>

                {/* Agriculture Sector */}
                <section id="agriculture-sector" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">For Farmers & Self-Help Groups</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Rural distress is a major issue. We support farmers and women's SHGs.
                  </p>
                  <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100 mb-6">
                    <h3 className="text-xl font-bold text-yellow-900 mb-4">Microfinance Relief</h3>
                    <ul className="list-disc pl-6 space-y-3 text-yellow-800">
                      <li><strong>Harassment Protection:</strong> We stop MFI agents from harassing women in villages.</li>
                      <li><strong>Group Settlement:</strong> We negotiate settlements for the entire group if multiple members are unable to pay.</li>
                      <li><strong>KCC Loans:</strong> We help restructure Kisan Credit Card loans in case of crop failure.</li>
                    </ul>
                  </div>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Lok Adalat: Fast & Fair Justice</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The JHALSA actively promotes Lok Adalats for bank recovery cases.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Why it works:</strong> It is a non-adversarial forum where you can sit across the table with bank officials and a mediator to reach a compromise. The settlement is final, and you save on legal costs. We can represent you in Lok Adalats across Jharkhand.
                  </p>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Loans We Settle</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our expertise covers various types of loans common in Jharkhand.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Mining Vehicle Loans</h3>
                      <p className="text-gray-700">
                        Settlement for trucks, dumpers, and excavators.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Microfinance Loans</h3>
                      <p className="text-gray-700">
                        Relief for SHGs and rural women borrowers.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Personal Loans</h3>
                      <p className="text-gray-700">
                        Helping workers settle high-interest personal loans.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">KCC & Agri Loans</h3>
                      <p className="text-gray-700">
                        Protecting farmers from debt traps and land loss.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Credit Score Impact */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on Credit Score</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Settlement will be reported to CIBIL, but it is a necessary step to regain financial control.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>The Trade-off:</strong> A temporary dip in your credit score is better than facing legal action or losing your assets. Once settled, you can rebuild your score over time.
                    </p>
                  </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Mistakes to Avoid</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Ignoring Bank Notices</h3>
                        <p className="text-gray-700">Silence can lead to legal escalation. Always respond, preferably through a lawyer.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Borrowing from Private Lenders</h3>
                        <p className="text-gray-700">Avoid illegal money lenders. If you are already trapped, use the Jharkhand Money Lending Act for protection.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Fearing Land Attachment</h3>
                        <p className="text-gray-700">If you are ST/SC/BC, your land is likely protected. Do not sell your land in panic to pay the bank. Consult us first.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Documentation */}
                <section id="documentation" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To start your settlement process, we will need:
                  </p>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Identity Proof</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> PAN Card & Aadhar Card</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Caste Certificate (for CNT/SPT)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Loan Documents</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Loan Account Statement</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Legal Notices</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Proof of Income Loss</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are committed to protecting the people of Jharkhand.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">CNT/SPT Experts</h3>
                      <p className="text-gray-600">Deep understanding of tribal land protection laws.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⛏️</div>
                      <h3 className="font-bold text-xl mb-2">Mining Focus</h3>
                      <p className="text-gray-600">Specialized strategies for mining and industrial workers.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Anti-Harassment</h3>
                      <p className="text-gray-600">We take strong legal action against harassment by recovery agents.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Jharkhand</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I work in a coal mine in Dhanbad. Due to illness, I couldn't pay my personal loan. The bank threatened to take my land. AMA lawyers explained that my land is protected under CNT Act and settled the loan for me."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Ramesh M.</p>
                          <p className="text-sm text-gray-500">Dhanbad</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Microfinance agents were harassing our women's group in the village. AMA Legal Solutions helped us file a complaint and settle the debt peacefully. They are true protectors."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sunita K.</p>
                          <p className="text-sm text-gray-500">Dumka</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <FaqSection />

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Get Legal Help Today</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't face the banks alone. Our expert lawyers in Jharkhand are here to protect you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Book Your Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      Confidential • Legal • Effective
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior loan settlement lawyers in Jharkhand today.
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
                      <Link href="/services/banking-and-finance" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Banking & Finance
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Civil Litigation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/arbitration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Arbitration
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid 
              serviceName="Loan Settlement" 
              servicePath="loan-settlement" 
              customSlugs={{
                "Andhra Pradesh": "AndhraPradesh",
                "Arunachal Pradesh": "arunachal-pradesh",
                "Assam": "Assam",
                "Bihar": "Bihar",
                "Chhattisgarh": "Chhattisgarh",
                "Delhi": "Delhi",
                "Goa": "Goa",
                "Gujarat": "Gujarat",
                "Haryana": "Haryana",
                "Himachal Pradesh": "himachal-pradesh",
                "Jharkhand": "Jharkhand",
                "Karnataka": "Karnataka",
                "Kerala": "Kerala",
                "Madhya Pradesh": "madhya-pradesh",
                "Maharashtra": "Maharashtra",
                "Manipur": "Manipur",
                "Meghalaya": "Meghalaya",
                "Mizoram": "Mizoram",
                "Odisha": "Odisha",
                "Puducherry": "Puducherry",
                "Punjab": "Punjab",
                "Rajasthan": "Rajasthan",
                "Sikkim": "Sikkim",
                "Tamil Nadu": "tamil-nadu",
                "Telangana": "Telangana",
                "Tripura": "Tripura",
                "Uttar Pradesh": "UttarPradesh",
                "Uttarakhand": "Uttrakhand",
                "West Bengal": "west-bengal"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
