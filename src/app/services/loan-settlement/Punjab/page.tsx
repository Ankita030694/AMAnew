import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in Punjab | Debt Relief Lawyers Ludhiana, Jalandhar",
  description:
    "Struggling with business or personal debt in Punjab? AMA Legal Solutions offers expert loan settlement in Ludhiana, Jalandhar, Amritsar. Protect your business & settle legally.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/Punjab',
  },
  openGraph: {
    title: "Loan Settlement in Punjab | Debt Relief Lawyers Ludhiana, Jalandhar",
    description: "Struggling with business or personal debt in Punjab? AMA Legal Solutions offers expert loan settlement in Ludhiana, Jalandhar, Amritsar. Protect your business & settle legally.",
    url: "https://amalegalsolutions.com/services/loan-settlement/Punjab",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services Punjab",
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
      "name": "Punjab",
      "item": "https://amalegalsolutions.com/services/loan-settlement/Punjab"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in Punjab: Protecting Your Legacy",
  "description": "Comprehensive guide to loan settlement in Punjab. Learn how to legally settle MSME loans, personal debts, and protect against illegal recovery in Ludhiana and Jalandhar.",
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
  "name": "Loan Settlement Services Punjab",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in Punjab.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
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
        "name": "Manpreet Singh"
      },
      "reviewBody": "My textile unit in Ludhiana was under severe stress. AMA Legal Solutions helped me settle my CC limit with the bank and saved my factory from auction."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Malhotra"
      },
      "reviewBody": "I was being harassed by recovery agents in Jalandhar for a personal loan. The lawyers handled everything professionally and stopped the harassment immediately."
    }
  ]
};

export default function PunjabLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "Legal Framework in Punjab" },
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
    { label: "Punjab", href: "/services/loan-settlement/Punjab" },
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
              Protect Your Hard-Earned Legacy with <span className="text-[#D2A02A]">Loan Settlement in Punjab</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal defense for MSMEs and individuals in Ludhiana, Jalandhar, and Amritsar. We negotiate with banks to settle debts and stop illegal harassment.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge of Debt in Punjab's Industrial Heart</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Punjab is the land of enterprise. From the bustling <strong>cycle and textile industries of Ludhiana</strong> to the <strong>sports goods manufacturers of Jalandhar</strong>, the spirit of entrepreneurship runs deep. However, global market fluctuations, delayed payments, and rising costs have pushed many MSMEs and business owners into a debt trap.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The pressure isn't just from banks. The informal lending sector, dominated by <strong>Arhtiyas and private financiers</strong>, often operates with high-interest rates and aggressive recovery tactics. For a business owner or a salaried individual in Punjab, managing multiple loans while facing harassment can be paralyzing.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we specialize in protecting Punjab's businesses and families. We understand the unique mix of formal banking debt and informal market pressure that exists here. Our goal is to help you settle your liabilities legally and dignifiedly, so you can focus on rebuilding your legacy.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Loan Settlement?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Loan settlement (One Time Settlement or OTS) is a legal negotiation where the bank agrees to accept a reduced amount to close a loan account, waiving off the remaining interest and penalties."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This is a standard banking practice used to clear Non-Performing Assets (NPAs). For example, if a factory owner in Ludhiana has a default of ₹20 Lakhs due to a business loss, the bank may agree to settle the account for ₹8-10 Lakhs to recover its capital, rather than waiting for a long legal battle.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This option is available for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>Unsecured Business Loans</li>
                    <li>Personal Loans</li>
                    <li>Credit Card Dues</li>
                    <li>MSME Working Capital Limits (in certain cases)</li>
                  </ul>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Protections for Borrowers in Punjab</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    You are not alone. Several laws and court rulings protect you from harassment and unfair practices.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Punjab Registration of Money Lenders Act, 1938</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This is a powerful tool against unlicensed private financiers. Under this Act, any person or entity lending money must be registered. <strong>Suits for recovery by unlicensed money lenders are barred by law.</strong> If you are being threatened by a private financier who does not hold a valid license, we can legally challenge their claim and stop the harassment.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Punjab Relief of Indebtedness Act, 1934</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This historic Act was designed to protect debtors from usurious loans. It allows for the setting up of Debt Conciliation Boards to facilitate amicable settlements. While primarily for agricultural debt, its principles of fair settlement influence the broader legal approach in the state.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Protection from Illegal Recovery</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>Punjab Police</strong> have taken strict cognizance of illegal recovery agents who use force or intimidation. The Hon'ble Punjab & Haryana High Court has repeatedly ruled that banks cannot use "musclemen" for recovery. Any seizure of assets (like vehicles or machinery) must follow the due process of law (SARFAESI Act), not force.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Lok Adalats</h4>
                      <p className="text-gray-600">Regular Lok Adalats in Ludhiana, Amritsar, and Jalandhar offer a fast-track mechanism to settle bank disputes with a court order.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">RBI Guidelines</h4>
                      <p className="text-gray-600">RBI mandates that recovery agents must carry ID cards, record calls, and cannot contact you at odd hours.</p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Settlement Process in Punjab</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We follow a structured, legal approach to resolve your debt issues.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Representation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We immediately issue a legal notice of representation to your bank and creditors. This directs all future communication to us, stopping the direct harassment calls to you.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Financial Assessment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We analyze your business losses or income reduction. For MSMEs in Ludhiana, we prepare a detailed report on the industry downturn to justify the inability to pay full dues.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation with Regional Offices</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our lawyers negotiate directly with the bank's Circle Offices (usually in Chandigarh or Ludhiana). We push for maximum waiver on interest and penalties.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Formal Settlement Agreement</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We ensure you receive a formal Settlement Letter from the bank. We verify its terms to ensure there are no hidden clauses before you make the payment.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Settlement via Lok Adalat</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Punjab State Legal Services Authority organizes National Lok Adalats quarterly.
                  </p>
                  <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-6">
                    <h3 className="text-xl font-bold text-green-900 mb-4">Benefits for You</h3>
                    <p className="text-green-800 mb-4">
                      If your case is pending in a court (like a cheque bounce case in Jalandhar), we can refer it to the Lok Adalat. A settlement reached here is final, binding, and ends the criminal proceedings immediately.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-green-800">
                      <li><strong>No Appeal:</strong> The matter ends once and for all.</li>
                      <li><strong>Refund of Court Fees:</strong> If settled, court fees paid are refunded.</li>
                      <li><strong>Speedy Justice:</strong> Matters are resolved in a single day.</li>
                    </ul>
                  </div>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Loans We Settle</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We handle a wide range of debt types common in Punjab.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">MSME & Business Loans</h3>
                      <p className="text-gray-700">
                        Specialized settlement for industrial units in Ludhiana, Jalandhar, and Mandi Gobindgarh facing working capital stress.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Personal Loans</h3>
                      <p className="text-gray-700">
                        Settlement of high-interest personal loans for salaried employees in Chandigarh, Mohali, and other cities.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Credit Card Debt</h3>
                      <p className="text-gray-700">
                        We help you exit the debt trap of revolving credit card interest and settle for a principal-focused amount.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Professional Loans</h3>
                      <p className="text-gray-700">
                        Loans taken by doctors, CAs, and architects can also be settled if there is a genuine loss of practice or income.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Credit Score Impact */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact on CIBIL Score</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Settling a loan will mark it as "Settled" in your credit report. This does impact your score temporarily. However, continuing to default causes more damage.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Strategic View:</strong> It is better to settle and close the account than to have a "Written Off" or "Suit Filed" status. Once settled, you can rebuild your financial reputation over time.
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
                        <h3 className="font-bold text-lg text-gray-900">Borrowing from Private Lenders to Pay Banks</h3>
                        <p className="text-gray-700">This is the biggest trap. Private loans have exorbitant interest rates. Never swap a bank loan for a private one.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Ignoring Court Summons</h3>
                        <p className="text-gray-700">If you receive a summons from a court in Punjab, do not ignore it. It can lead to an arrest warrant. Contact us immediately.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Surrendering Assets Voluntarily</h3>
                        <p className="text-gray-700">Do not hand over your vehicle or machinery to agents out of fear. They need a court order to take possession.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Documentation */}
                <section id="documentation" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To initiate the settlement process, we will need:
                  </p>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Personal Documents</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> PAN Card & Aadhar Card</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Loan Account Numbers</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Correspondence with Bank</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Financial Proof</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Bank Statements (last 6 months)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> ITR (if available)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Proof of Business Loss/Job Loss</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Medical Records (if applicable)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Punjab?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We are not just consultants; we are legal experts with deep roots in Punjab.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏭</div>
                      <h3 className="font-bold text-xl mb-2">Industrial Expertise</h3>
                      <p className="text-gray-600">We understand the specific challenges of MSMEs in Ludhiana and Jalandhar.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Legal Power</h3>
                      <p className="text-gray-600">We can challenge illegal recovery and unlicensed money lenders in court.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Anti-Harassment</h3>
                      <p className="text-gray-600">We take strong action against police harassment and illegal recovery tactics.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from Punjab</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "My textile unit in Ludhiana was under severe stress. AMA Legal Solutions helped me settle my CC limit with the bank and saved my factory from auction."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">M</div>
                        <div>
                          <p className="font-bold text-gray-900">Manpreet Singh</p>
                          <p className="text-sm text-gray-500">Ludhiana</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was being harassed by recovery agents in Jalandhar for a personal loan. The lawyers handled everything professionally and stopped the harassment immediately."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Malhotra</p>
                          <p className="text-sm text-gray-500">Jalandhar</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Reclaim Your Peace of Mind</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let debt destroy your business or peace. Our expert lawyers in Punjab are ready to fight for you.
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
                    Speak to our senior loan settlement lawyers in Punjab today.
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
            <GenericStatesGrid serviceName="Loan Settlement" servicePath="loan-settlement" />
          </div>
        </div>
      </div>
    </>
  );
}
