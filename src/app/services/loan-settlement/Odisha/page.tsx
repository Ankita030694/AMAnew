import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Odisha | Debt Relief Lawyers Bhubaneswar, Cuttack, Rourkela",
  description:
    "Struggling with debt in Odisha? AMA Legal Solutions offers expert loan settlement. We protect Pensioners (HC Ruling), help Cyclone-affected Farmers, and stop harassment.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/Odisha',
  },
  openGraph: {
    title: "Loan Settlement in Odisha | Debt Relief Lawyers Bhubaneswar, Cuttack, Rourkela",
    description: "Struggling with debt in Odisha? AMA Legal Solutions offers expert loan settlement. We protect Pensioners (HC Ruling), help Cyclone-affected Farmers, and stop harassment.",
    url: "https://amalegalsolutions.com/services/loan-settlement/Odisha",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Odisha",
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
      "name": "Odisha",
      "item": "https://amalegalsolutions.com/services/loan-settlement/Odisha"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Odisha: Resilience Against Debt",
  "description": "Comprehensive guide to loan settlement in Odisha. Learn how to legally settle loans, protect pension funds under HC rulings, and resolve cyclone/mining debt.",
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
      "url": "https://amalegalsolutions.com/logo.png"
    }
  },
  "datePublished": "2023-11-21",
  "dateModified": "2023-11-21"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Services Odisha",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Odisha.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "380"
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
        "name": "Bimal P."
      },
      "reviewBody": "I am a retired teacher in Cuttack. The bank started deducting EMI from my pension for a loan I guaranteed. AMA lawyers cited the High Court judgment and stopped the deduction immediately. They are lifesavers."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sanjukta D."
      },
      "reviewBody": "Our SHG in Puri was unable to pay due to Cyclone Fani losses. The bank was harassing us. AMA Legal helped us restructure the loan and get a waiver on interest."
    }
  ]
};

export default function OdishaLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "Legal Framework in Odisha" },
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
    { label: "Odisha", href: "/services/loan-settlement/Odisha" },
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
              Resilience Against Debt: <span className="text-[#D2A02A]">Loan Settlement in Odisha</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal defense for Pensioners, Farmers, and Mining Workers. We protect your rights under the Odisha Money Lenders Act and High Court rulings in Bhubaneswar, Cuttack, and Rourkela.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Rebuilding Lives in the Land of Jagannath</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Odisha is a land of resilience. From the <strong>coastal belts of Puri and Balasore</strong> facing frequent cyclones to the <strong>mineral-rich districts of Keonjhar and Sundargarh</strong>, the people of Odisha face unique challenges.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Financial distress here often stems from natural calamities or industrial displacement. But debt should not cost you your dignity or your livelihood. The law provides strong protections, especially for pensioners and farmers.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions stands with the people of Odisha. We help you navigate the legal system, including the <strong>Odisha Money Lenders Act</strong> and <strong>High Court judgments</strong>, to settle your debts and regain your peace of mind.
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
                    For a cyclone-affected farmer, this could mean settling a KCC loan by paying only a portion of the principal, with interest waived off due to 'Force Majeure' conditions.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Pensioner & Personal Loans</li>
                    <li>Mining & Industrial Worker Loans</li>
                    <li>Agricultural & KCC Loans</li>
                    <li>Mission Shakti SHG Loans</li>
                  </ul>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Protections in Odisha</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Odisha has specific laws and court rulings that protect borrowers.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pension Protection (Orissa High Court)</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In the landmark case of <strong>Bharat Chandra Mallick v. SBI</strong>, the Orissa High Court ruled that banks <strong>cannot unilaterally deduct money from a pension account</strong> without due process. Your pension is a protected asset for your livelihood. If a bank is deducting your pension for a loan (even if you are a guarantor), we can legally stop it.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Odisha Money Lenders Act, 1939</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This Act strictly regulates private money lending. It caps interest rates at <strong>9% for secured loans</strong> and <strong>12% for unsecured loans</strong>. Any private lender charging exorbitant interest or operating without a license is acting illegally, and such debts may be unenforceable.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">OSLSA Lok Adalats</h4>
                      <p className="text-gray-600">The Odisha State Legal Services Authority conducts Lok Adalats. These are effective forums for settling bank disputes amicably and quickly.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Disaster Management Act</h4>
                      <p className="text-gray-600">We use provisions related to natural calamities (like cyclones) to argue for loan restructuring and interest waivers.</p>
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
                          We analyze your situation. For pensioners, we ensure your account is protected. For farmers, we document cyclone damage.
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
                    Workers in Keonjhar, Sundargarh, and Jharsuguda often face instability due to mine closures or health issues.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                    <p className="text-lg text-blue-900">
                      <strong>Health-Related Debt:</strong> If you have taken loans for medical treatment (e.g., for occupational diseases), we can use this compassionate ground to negotiate a better settlement.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We also assist with vehicle loans for trucks and dumpers that are no longer operational due to mining bans or lack of work.
                  </p>
                </section>

                {/* Agriculture Sector */}
                <section id="agriculture-sector" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">For Farmers & Mission Shakti SHGs</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Odisha's farmers and women entrepreneurs are the backbone of the state.
                  </p>
                  <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100 mb-6">
                    <h3 className="text-xl font-bold text-yellow-900 mb-4">Cyclone Relief & SHG Support</h3>
                    <ul className="list-disc pl-6 space-y-3 text-yellow-800">
                      <li><strong>Force Majeure:</strong> We argue that crop loss due to cyclones (like Dana/Fani) is beyond your control, warranting loan restructuring.</li>
                      <li><strong>SHG Settlement:</strong> We help Mission Shakti groups settle collective loans if the group business has failed, preventing member harassment.</li>
                      <li><strong>KCC Loans:</strong> We help restructure Kisan Credit Card loans.</li>
                    </ul>
                  </div>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Lok Adalat: Fast & Fair Justice</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The OSLSA actively promotes Lok Adalats for bank recovery cases.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Why it works:</strong> It is a non-adversarial forum where you can sit across the table with bank officials and a mediator to reach a compromise. The settlement is final, and you save on legal costs. We can represent you in Lok Adalats across Odisha.
                  </p>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Loans We Settle</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our expertise covers various types of loans common in Odisha.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Pension Loans</h3>
                      <p className="text-gray-700">
                        Protecting retirees from illegal deductions.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">SHG Loans</h3>
                      <p className="text-gray-700">
                        Settling Mission Shakti group loans amicably.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Mining Vehicle Loans</h3>
                      <p className="text-gray-700">
                        Settlement for trucks and heavy machinery.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">KCC & Agri Loans</h3>
                      <p className="text-gray-700">
                        Relief for cyclone-affected farmers.
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
                        <p className="text-gray-700">Avoid illegal money lenders. If you are already trapped, use the Odisha Money Lenders Act for protection.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Allowing Pension Deduction</h3>
                        <p className="text-gray-700">Do not let the bank deduct from your pension. It is illegal without due process. Contact us immediately.</p>
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
                          <li className="flex items-center"><span className="mr-2">✓</span> Pension Payment Order (if applicable)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Loan Documents</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Loan Account Statement</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Legal Notices</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Proof of Income Loss (Cyclone/Medical)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are committed to protecting the people of Odisha.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Pension Protectors</h3>
                      <p className="text-gray-600">Experts in stopping illegal pension deductions.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🌪️</div>
                      <h3 className="font-bold text-xl mb-2">Cyclone Relief</h3>
                      <p className="text-gray-600">Specialized in 'Force Majeure' settlements for farmers.</p>
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Odisha</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I am a retired teacher in Cuttack. The bank started deducting EMI from my pension for a loan I guaranteed. AMA lawyers cited the High Court judgment and stopped the deduction immediately. They are lifesavers."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">B</div>
                        <div>
                          <p className="font-bold text-gray-900">Bimal P.</p>
                          <p className="text-sm text-gray-500">Cuttack</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Our SHG in Puri was unable to pay due to Cyclone Fani losses. The bank was harassing us. AMA Legal helped us restructure the loan and get a waiver on interest."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sanjukta D.</p>
                          <p className="text-sm text-gray-500">Puri</p>
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
                      Don't face the banks alone. Our expert lawyers in Odisha are here to protect you.
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
                    Speak to our senior loan settlement lawyers in Odisha today.
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
                    <li>
                      <Link href="/services/cheque-bounce-lawyer" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Cheque Bounce Cases
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid serviceName="Loan Settlement" servicePath="loan-settlement" />
          </div>
        </div>
      </div>
    </>
  );
}
