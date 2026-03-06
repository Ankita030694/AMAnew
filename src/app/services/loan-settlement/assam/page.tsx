import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Assam | Debt Relief Lawyers Guwahati, Dibrugarh, Silchar",
  description:
    "Struggling with debt in Assam? AMA Legal Solutions offers expert loan settlement. We help Tea Garden Workers, Flood-affected Farmers, and Microfinance borrowers (AMFIRS).",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/assam',
  },
  openGraph: {
    title: "Loan Settlement in Assam | Debt Relief Lawyers Guwahati, Dibrugarh, Silchar",
    description: "Struggling with debt in Assam? AMA Legal Solutions offers expert loan settlement. We help Tea Garden Workers, Flood-affected Farmers, and Microfinance borrowers (AMFIRS).",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/Assam",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Assam",
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
      "item": "https://www.amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Assam",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/Assam"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Assam: Overcoming the Flood of Debt",
  "description": "Comprehensive guide to loan settlement in Assam. Learn about AMFIRS relief, tea garden worker debt solutions, and protection from harassment.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://www.amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2023-11-21",
  "dateModified": "2023-11-21"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Services Assam",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Assam.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "310"
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
        "name": "Dipankar B."
      },
      "reviewBody": "I run a small shop in Guwahati. The floods destroyed my stock, and I couldn't pay my loan. AMA Legal Solutions helped me get a moratorium and then settle the loan for a much lower amount."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sunita M."
      },
      "reviewBody": "I had multiple microfinance loans and was being harassed. AMA lawyers explained the AMFIRS scheme to me and helped me settle my debts without any fear."
    }
  ]
};

export default function AssamLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "Legal Framework in Assam" },
    { id: "process", title: "Our Process" },
    { id: "tea-gardens", title: "For Tea Garden Workers" },
    { id: "microfinance-crisis", title: "Microfinance & AMFIRS" },
    { id: "flood-relief", title: "Flood Relief Settlement" },
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
    { label: "Assam", href: "/services/loan-settlement/Assam" },
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
              Overcoming the Flood of Debt: <span className="text-[#D2A02A]">Loan Settlement in Assam</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal defense for Tea Garden Workers, Farmers, and Small Businesses. We help you navigate AMFIRS, stop harassment, and settle debts in Guwahati, Dibrugarh, and Silchar.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Resilience in the Brahmaputra Valley</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Assam is a land of strength, but its people face unique challenges. From the <strong>tea gardens of Upper Assam</strong> to the <strong>flood-prone plains of Lower Assam</strong>, financial stability is often disrupted by nature and market forces.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>Microfinance Crisis</strong> has left many women in debt traps, while small businesses in Guwahati often struggle after floods. But you don't have to face this alone.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions assists the people of Assam in settling loans legally. We leverage the <strong>Assam Microfinance Incentive and Relief Scheme (AMFIRS)</strong> and other legal provisions to help you regain your financial freedom.
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
                    For a flood-affected trader, this could mean paying only a part of the principal amount to close a business loan, with interest waived off due to 'Force Majeure'.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Microfinance (MFI) Loans</li>
                    <li>Tea Garden Worker Loans</li>
                    <li>Agricultural & KCC Loans</li>
                    <li>Small Business (MSME) Loans</li>
                  </ul>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Protections in Assam</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Assam has specific laws to protect borrowers, especially from aggressive recovery.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Assam Micro Finance Institutions Act, 2020</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This Act was introduced to regulate microfinance institutions and protect borrowers from high interest rates and coercive recovery. It mandates fair practices and prohibits harassment. If an MFI agent is harassing you, they are violating this law.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Assam Money Lenders Act, 1934</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This law requires all money lenders to be registered and caps the interest rates they can charge. Loans from unregistered lenders with exorbitant interest are illegal and can be challenged in court.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">AMFIRS Scheme</h4>
                      <p className="text-gray-600">The Assam Microfinance Incentive and Relief Scheme provides state support to clear overdue loans for eligible borrowers.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">ASLSA Lok Adalats</h4>
                      <p className="text-gray-600">The Assam State Legal Services Authority conducts Lok Adalats for quick and amicable settlement of bank disputes.</p>
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
                          We analyze your situation. For MFI borrowers, we check eligibility under AMFIRS. For farmers, we document flood damage.
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

                {/* Tea Gardens */}
                <section id="tea-gardens" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">For Tea Garden Workers</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Workers in Dibrugarh, Tinsukia, and Jorhat often face financial hardship due to low wages or garden closures (like the ATCL crisis).
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                    <p className="text-lg text-green-900">
                      <strong>Compassionate Settlement:</strong> We use your socio-economic status and any wage delays as strong grounds to negotiate with banks for personal loan settlements. We ensure you are not exploited by private lenders within the garden.
                    </p>
                  </div>
                </section>

                {/* Microfinance Crisis */}
                <section id="microfinance-crisis" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Microfinance & AMFIRS</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The microfinance crisis in Assam has affected thousands of women.
                  </p>
                  <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-100 mb-6">
                    <h3 className="text-xl font-bold text-yellow-900 mb-4">How We Help</h3>
                    <ul className="list-disc pl-6 space-y-3 text-yellow-800">
                      <li><strong>AMFIRS Eligibility:</strong> We help you understand if you qualify for Category I, II, or III relief under the state scheme.</li>
                      <li><strong>Stopping Harassment:</strong> We take strict legal action against MFI agents who violate the 2020 Act by harassing you.</li>
                      <li><strong>Group Loan Settlement:</strong> We assist Joint Liability Groups (JLGs) in settling collective debts amicably.</li>
                    </ul>
                  </div>
                </section>

                {/* Flood Relief */}
                <section id="flood-relief" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Flood Relief Settlement</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Floods are a recurring reality in Assam. If your business or farm has been affected by the Brahmaputra's fury:
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Force Majeure:</strong> We argue that your inability to pay is due to a natural calamity beyond your control. This is a valid legal ground to seek loan restructuring, moratoriums, or significant interest waivers from banks.
                  </p>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Lok Adalat: Fast & Fair Justice</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The ASLSA actively promotes Lok Adalats for bank recovery cases.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Why it works:</strong> It is a non-adversarial forum where you can sit across the table with bank officials and a mediator to reach a compromise. The settlement is final, and you save on legal costs. We can represent you in Lok Adalats across Assam.
                  </p>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Loans We Settle</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our expertise covers various types of loans common in Assam.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Microfinance Loans</h3>
                      <p className="text-gray-700">
                        Relief for SHG and JLG borrowers.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Tea Garden Loans</h3>
                      <p className="text-gray-700">
                        Personal loans for plantation workers.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Small Business Loans</h3>
                      <p className="text-gray-700">
                        Settlement for flood-affected traders.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">KCC Loans</h3>
                      <p className="text-gray-700">
                        Relief for farmers facing crop loss.
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
                        <p className="text-gray-700">Avoid illegal money lenders. If you are already trapped, use the Money Lenders Act for protection.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Fearing MFI Agents</h3>
                        <p className="text-gray-700">Do not be intimidated by harassment. The law protects you. Report them to us immediately.</p>
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
                          <li className="flex items-center"><span className="mr-2">✓</span> Voter ID (common in Assam)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Loan Documents</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Loan Account Statement</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Legal Notices</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Proof of Flood Damage (if applicable)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are committed to protecting the people of Assam.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">AMFIRS Experts</h3>
                      <p className="text-gray-600">Deep knowledge of the state's microfinance relief scheme.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🌊</div>
                      <h3 className="font-bold text-xl mb-2">Flood Relief</h3>
                      <p className="text-gray-600">Specialized in 'Force Majeure' settlements for flood victims.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Anti-Harassment</h3>
                      <p className="text-gray-600">We take strong legal action against harassment by MFI agents.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Assam</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I run a small shop in Guwahati. The floods destroyed my stock, and I couldn't pay my loan. AMA Legal Solutions helped me get a moratorium and then settle the loan for a much lower amount."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">D</div>
                        <div>
                          <p className="font-bold text-gray-900">Dipankar B.</p>
                          <p className="text-sm text-gray-500">Guwahati</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I had multiple microfinance loans and was being harassed. AMA lawyers explained the AMFIRS scheme to me and helped me settle my debts without any fear."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sunita M.</p>
                          <p className="text-sm text-gray-500">Nagaon</p>
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
                      Don't face the banks alone. Our expert lawyers in Assam are here to protect you.
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
                    Speak to our senior loan settlement lawyers in Assam today.
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
                "Andhra Pradesh": "andhra-pradesh",
                "Arunachal Pradesh": "arunachal-pradesh",
                "Assam": "assam",
                "Bihar": "bihar",
                "Chhattisgarh": "chhattisgarh",
                "Delhi": "delhi",
                "Goa": "goa",
                "Gujarat": "gujarat",
                "Haryana": "haryana",
                "Himachal Pradesh": "himachal-pradesh",
                "Jharkhand": "jharkhand",
                "Kerala": "kerala",
                "Madhya Pradesh": "madhya-pradesh",
                "Maharashtra": "maharashtra",
                "Manipur": "manipur",
                "Meghalaya": "meghalaya",
                "Mizoram": "mizoram",
                "Odisha": "odisha",
                "Puducherry": "puducherry",
                "Punjab": "punjab",
                "Rajasthan": "rajasthan",
                "Sikkim": "sikkim",
                "Tamil Nadu": "tamil-nadu",
                "Telangana": "telangana",
                "Tripura": "tripura",
                "Uttar Pradesh": "uttar-pradesh",
                "Uttarakhand": "uttarakhand",
                "West Bengal": "west-bengal"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
