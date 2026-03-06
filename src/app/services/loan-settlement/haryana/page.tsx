import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Haryana | Expert Debt Relief Lawyers Gurugram",
  description:
    "Struggling with debt in Haryana? AMA Legal Solutions offers expert loan settlement services in Gurugram, Faridabad & across the state. Stop harassment & settle legally.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/haryana',
  },
  openGraph: {
    title: "Loan Settlement in Haryana | Expert Debt Relief Lawyers Gurugram",
    description: "Struggling with debt in Haryana? AMA Legal Solutions offers expert loan settlement services in Gurugram, Faridabad & across the state. Stop harassment & settle legally.",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/Haryana",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Haryana",
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
      "name": "Haryana",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/Haryana"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Haryana: Expert Legal Help",
  "description": "Comprehensive guide to loan settlement in Haryana. Learn how to legally settle personal loans and credit card debt in Gurugram, Faridabad, and other cities.",
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
  "name": "Loan Settlement Services Haryana",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Haryana.",
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
        "name": "Rajesh Kumar"
      },
      "reviewBody": "I was facing huge debt issues in Gurugram. The team at AMA Legal Solutions helped me settle my personal loan through Lok Adalat. Highly professional."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sunita Singh"
      },
      "reviewBody": "Best legal service for debt relief in Faridabad. They stopped the recovery agents from harassing me and settled my credit card dues for a reasonable amount."
    }
  ]
};

export default function HaryanaLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "Legal Framework in Haryana" },
    { id: "process", title: "Our Process" },
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
    { label: "Haryana", href: "/services/loan-settlement/Haryana" },
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
              Regain Your Financial Freedom with <span className="text-[#D2A02A]">Loan Settlement in Haryana</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal representation in Gurugram, Faridabad, and across Haryana to negotiate with banks, reduce your debt burden, and stop harassment. Legally. Ethically. Effectively.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating Financial Stress in Haryana's Growth Engines</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Haryana represents a unique economic duality. On one side, we have <strong>Gurugram (Millennium City)</strong>, a global hub for IT, finance, and startups, where high living costs and volatile corporate job markets often lead to credit card debt and personal loan defaults. On the other side, we have the industrial belts of <strong>Faridabad, Manesar, and Panipat</strong>, where MSMEs and small business owners face cash flow crunches and working capital debt.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Whether you are an IT professional in Cyber City facing a layoff or a factory owner in Faridabad dealing with a business slowdown, the stress of debt is universal. The aggressive recovery tactics used by some agencies in these regions can be overwhelming.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we understand this local context deeply. We don't just offer generic advice; we provide <strong>strategic legal intervention</strong> tailored to the specific banking and legal environment of Haryana.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Loan Settlement in the Local Context</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Loan settlement is a mutual agreement where the lender agrees to accept a reduced lump sum payment to close the loan account permanently, waiving off the remaining dues."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In Haryana, banks and NBFCs are pragmatic about recovering Non-Performing Assets (NPAs). Instead of lengthy legal battles, they often prefer a <strong>One Time Settlement (OTS)</strong>. This is especially true for unsecured loans like personal loans and credit card debts.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For instance, if you have a credit card debt of ₹5 Lakhs but have lost your job, the bank might agree to settle for ₹2-2.5 Lakhs. This allows them to recover some funds immediately while you get relief from the debt burden.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Settlement vs. Bankruptcy</h3>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li>
                      <strong>Settlement:</strong> A private negotiation. It is faster, less intrusive, and allows you to rebuild your financial life sooner.
                    </li>
                    <li>
                      <strong>Bankruptcy:</strong> A complex legal process with long-term negative consequences and social stigma.
                    </li>
                  </ul>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Haryana's Legal Landscape: Your Rights</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Borrowers in Haryana are protected by a robust framework of state laws, High Court rulings, and police guidelines.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Punjab & Haryana High Court on Harassment</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Hon'ble Punjab & Haryana High Court has consistently upheld the dignity of borrowers. In recent judgments (e.g., regarding pension recovery), the Court has emphasized that <strong>recovery cannot be made in an arbitrary manner</strong> without due process. This principle extends to private debt as well—banks cannot use "musclemen" or extra-judicial tactics to recover dues.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Gurugram Police & Cyber Cell Action</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Gurugram Police have been proactive in cracking down on illegal call centers and recovery agents who use abusive language or morph photos to harass borrowers. If you are a victim of such cyber-harassment, we can help you file a formal complaint with the <strong>Cyber Crime Cell in Gurugram</strong>, which takes immediate cognizance of such offenses.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Punjab Registration of Money-lenders Act, 1938</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Applicable in Haryana, this Act mandates that all money lenders must be licensed. Suits for recovery by unlicensed lenders are liable to be dismissed. This is a crucial defense for borrowers in semi-urban areas dealing with informal lenders.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Lok Adalats</h4>
                      <p className="text-gray-600">HALSA organizes Lok Adalats in every district (Gurugram, Faridabad, etc.) for quick, final settlement of bank disputes.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">RBI Fair Practices</h4>
                      <p className="text-gray-600">Strict guidelines prohibit calling before 8 AM or after 7 PM, and contacting family members is forbidden.</p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Strategic Approach to Settlement in Haryana</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We tailor our approach to the specific bank and the local jurisdiction in Haryana.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Case Analysis & Legal Shielding</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We analyze your debt portfolio and check for any legal notices. We issue a letter of representation to your creditors, shielding you from harassment.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Hardship Documentation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We help you compile documents proving your financial hardship - salary slips, bank statements, medical records, or proof of business loss. This is crucial for negotiation.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation & Settlement</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our lawyers engage with the bank's regional offices in Gurugram or Chandigarh. We negotiate firmly to reduce the principal amount and waive off penal interest.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Closure via Lok Adalat</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We often route the final agreement through the National Lok Adalat held in your district court (e.g., Gurugram District Court). This ensures a court-stamped order and final closure.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Lok Adalat Advantage in Haryana</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Haryana actively utilizes Lok Adalats for dispute resolution.
                  </p>
                  <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-6">
                    <h3 className="text-xl font-bold text-green-900 mb-4">Why We Recommend It</h3>
                    <p className="text-green-800 mb-4">
                      You can approach the Lok Adalat for <strong>Pre-Litigation Counseling</strong>. We can file an application with the District Legal Services Authority (DLSA) in your area to initiate settlement talks before any court case is filed.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-green-800">
                      <li><strong>Cost-Effective:</strong> No court fees.</li>
                      <li><strong>Speed:</strong> Rapid resolution in a single sitting.</li>
                      <li><strong>Finality:</strong> The award cannot be appealed.</li>
                    </ul>
                  </div>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Loans We Settle in Haryana</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We handle various types of unsecured debts.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Personal Loans</h3>
                      <p className="text-gray-700">
                        We negotiate settlements for high-interest personal loans from banks and NBFCs, helping you reduce the burden.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Credit Card Dues</h3>
                      <p className="text-gray-700">
                        Credit card debt can spiral out of control. We help professionals in Gurugram and Faridabad settle these dues for a fraction of the total.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Business Loans</h3>
                      <p className="text-gray-700">
                        We assist MSMEs and small business owners in settling unsecured business loans and overdrafts.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Digital Loans</h3>
                      <p className="text-gray-700">
                        We handle cases involving instant loan apps, protecting you from harassment while negotiating repayment.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Credit Score Impact */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Truth About CIBIL Scores</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A loan settlement will reflect as "Settled" on your CIBIL report, lowering your score. However, this is better than a "Written Off" status.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Our Advice:</strong> Focus on becoming debt-free first. Once the financial stress is gone, you can rebuild your score over time. We guide our clients on credit repair strategies post-settlement.
                    </p>
                  </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Avoid these pitfalls for a smooth settlement.
                  </p>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Ignoring Legal Notices</h3>
                        <p className="text-gray-700">Never ignore a legal notice. It can lead to an ex-parte order. Consult us immediately.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Trusting Unverified Agents</h3>
                        <p className="text-gray-700">Avoid agents who promise instant CIBIL clearance. Trust only qualified legal professionals.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Paying Without Written Agreement</h3>
                        <p className="text-gray-700">Always insist on a formal Settlement Letter from the bank before making any payment.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Documentation */}
                <section id="documentation" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Keep these documents ready for a faster process.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">KYC & Loan Info</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> PAN Card & Aadhar Card</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Loan Account Statements</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Copies of Bank Notices</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Hardship Proof</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Salary Slips (showing reduction)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Bank Statements (last 6 months)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Medical Records (if applicable)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Business Loss Proof</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Haryana?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We combine legal expertise with a strong local presence.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">📍</div>
                      <h3 className="font-bold text-xl mb-2">Local Enforcement</h3>
                      <p className="text-gray-600">We know how to file effective complaints with the Gurugram Cyber Cell against harassment.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">High Court Practice</h3>
                      <p className="text-gray-600">Our team is experienced in the Punjab & Haryana High Court for complex matters.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏭</div>
                      <h3 className="font-bold text-xl mb-2">MSME Specialists</h3>
                      <p className="text-gray-600">Specialized expertise in settling industrial loans in Faridabad and Manesar.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Haryana</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was facing huge debt issues in Gurugram. The team at AMA Legal Solutions helped me settle my personal loan through Lok Adalat. Highly professional."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rajesh Kumar</p>
                          <p className="text-sm text-gray-500">Gurugram</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Best legal service for debt relief in Faridabad. They stopped the recovery agents from harassing me and settled my credit card dues for a reasonable amount."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sunita Singh</p>
                          <p className="text-sm text-gray-500">Faridabad</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Live Debt-Free in Haryana</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let debt control your life. Our expert lawyers in Gurugram are ready to fight for your financial freedom.
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
                    Speak to our senior loan settlement lawyers in Haryana today.
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
                "Karnataka": "karnataka",
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
