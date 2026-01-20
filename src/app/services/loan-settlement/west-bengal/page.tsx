import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Loan Settlement in West Bengal | Expert Debt Relief Lawyers Kolkata",
  description:
    "Struggling with debt in West Bengal? AMA Legal Solutions offers expert loan settlement services in Kolkata, Howrah & across the state. Stop harassment & settle legally.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/loan-settlement/West Bengal',
  },
  openGraph: {
    title: "Loan Settlement in West Bengal | Expert Debt Relief Lawyers Kolkata",
    description: "Struggling with debt in West Bengal? AMA Legal Solutions offers expert loan settlement services in Kolkata, Howrah & across the state. Stop harassment & settle legally.",
    url: "https://amalegalsolutions.com/services/loan-settlement/West Bengal",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Services West Bengal",
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
      "name": "West Bengal",
      "item": "https://amalegalsolutions.com/services/loan-settlement/West Bengal"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Services in West Bengal: Expert Legal Help",
  "description": "Comprehensive guide to loan settlement in West Bengal. Learn how to legally settle personal loans and credit card debt in Kolkata, Howrah, and other cities.",
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
  "name": "Loan Settlement Services West Bengal",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement services in West Bengal.",
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
        "name": "Amitava Das"
      },
      "reviewBody": "I was in deep debt with multiple credit cards. The lawyers at AMA Legal Solutions in Kolkata helped me settle everything through Lok Adalat. Very professional service."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Soma Banerjee"
      },
      "reviewBody": "They stopped the harassment from recovery agents immediately. I settled my personal loan for 40% of the amount. Highly recommend their services in West Bengal."
    }
  ]
};

export default function WestBengalLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "legal-framework", title: "Legal Framework in West Bengal" },
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
    { label: "West Bengal", href: "/services/loan-settlement/West Bengal" },
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
              Regain Your Financial Freedom with <span className="text-[#D2A02A]">Loan Settlement in West Bengal</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal representation in Kolkata, Howrah, and across West Bengal to negotiate with banks, reduce your debt burden, and stop harassment. Legally. Ethically. Effectively.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Debt Relief Solutions for West Bengal's Residents</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In the bustling cities of West Bengal like Kolkata, Asansol, and Siliguri, the cost of living is rising, and financial challenges are becoming increasingly common. Whether it is due to business losses in the post-pandemic era, medical emergencies, or job instability, many hardworking individuals find themselves trapped in a cycle of debt. The stress of mounting EMIs and the fear of social embarrassment from recovery agents can be overwhelming.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    If you are facing such a situation, know that you are not alone, and there is a legal way out. <strong>Loan settlement</strong> is a legitimate financial tool available to borrowers in West Bengal who are genuinely unable to repay their full debts. At AMA Legal Solutions, we specialize in helping you navigate this process with dignity. We understand the local legal landscape and the specific banking practices in the state.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Our team of experienced lawyers in Kolkata intervenes on your behalf, stopping the harassment and negotiating a settlement that aligns with your current financial reality. We are here to help you turn the page and start a new chapter of financial freedom.
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
                    In West Bengal, banks and financial institutions are often pragmatic about recovering bad debts. When a loan becomes a Non-Performing Asset (NPA), it becomes a liability for the bank. Instead of engaging in long-drawn legal battles in the already overburdened courts, they often prefer a <strong>One Time Settlement (OTS)</strong>. This allows them to recover a portion of the funds immediately.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This option is particularly viable for unsecured loans such as personal loans, credit card debts, and business overdrafts. For example, if you have an outstanding credit card bill of ₹3 Lakhs but have lost your source of income, the bank may agree to settle for ₹1-1.5 Lakhs to close the account. This saves you from the spiraling debt trap of minimum due payments.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Settlement vs. Bankruptcy</h3>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li>
                      <strong>Settlement:</strong> A private negotiation. You pay what you can afford, the debt is extinguished, and you can rebuild your financial life. It is faster and less intrusive.
                    </li>
                    <li>
                      <strong>Bankruptcy:</strong> A complex legal process involving the courts. It carries a heavy social stigma and long-term disqualifications, which can be particularly damaging in a closely-knit society like West Bengal.
                    </li>
                  </ul>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">West Bengal's Legal Landscape for Borrowers</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Borrowers in West Bengal are protected by both central banking regulations and state-specific laws. Understanding these rights is crucial for a fair settlement.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Bengal Money-Lenders Act, 1940</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This is a powerful piece of legislation unique to our state. It was enacted to curb the predatory practices of private money lenders. If you have borrowed from a private financier who is not a bank:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li>They must hold a valid license to operate in West Bengal.</li>
                    <li>They cannot charge interest rates exceeding the statutory limits.</li>
                    <li>Harassment or intimidation to recover money is a punishable offense.</li>
                  </ul>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We often use this Act to protect our clients from illegal private lenders who use coercive tactics.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Role of West Bengal State Legal Services Authority (WBSLSA)</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The WBSLSA plays a pivotal role in debt resolution. They organize <strong>Lok Adalats</strong> across all districts, including Kolkata, North 24 Parganas, and South 24 Parganas. These are statutory forums where disputes can be settled amicably. An award passed by a Lok Adalat in West Bengal has the force of a civil court decree and is final and binding, offering you complete legal closure.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Protection Against Harassment</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Kolkata Police Guidelines</h4>
                      <p className="text-gray-600">The police in Kolkata and other major cities have strict directives against recovery agents using force or abusive language.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">RBI Fair Practices Code</h4>
                      <p className="text-gray-600">Banks are mandated to treat borrowers with respect. Calling at odd hours or contacting family members is a violation.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Legal Representation</h4>
                      <p className="text-gray-600">Once you appoint a lawyer, the bank is legally bound to communicate through your counsel, stopping direct harassment.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">DRT Kolkata</h4>
                      <p className="text-gray-600">We represent clients in the Debt Recovery Tribunals (DRT) in Kolkata for high-value disputes and SARFAESI matters.</p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Strategic Approach to Settlement in West Bengal</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Every case is unique. Our approach is tailored to the specific bank and the local jurisdiction in West Bengal.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Case Analysis & Legal Shielding</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We start by analyzing your debt portfolio. We check for any legal notices from Kolkata courts or arbitration tribunals. We immediately issue a letter of representation to your creditors, which acts as a shield against harassment.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Hardship Documentation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          To get the best deal, we must prove your inability to pay. We help you compile the necessary documents - be it medical records from local hospitals, proof of business loss, or termination letters. This evidence is crucial for negotiations.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Negotiation & Settlement</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our lawyers engage with the bank's regional offices in Kolkata. We leverage our professional relationships to push for maximum waivers. We negotiate firmly to reduce the principal amount and waive off all penal interest.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Closure via Lok Adalat</h3>
                        <p className="text-gray-700 leading-relaxed">
                          For a secure closure, we often route the final agreement through the National Lok Adalat held in your district court. This ensures you get a court-stamped order, preventing the bank from ever reopening the claim.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Lok Adalat */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Lok Adalat Advantage in West Bengal</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    West Bengal is one of the leading states in utilizing Lok Adalats for dispute resolution.
                  </p>
                  <div className="bg-green-50 p-8 rounded-xl border border-green-100 mb-6">
                    <h3 className="text-xl font-bold text-green-900 mb-4">Why We Recommend It</h3>
                    <p className="text-green-800 mb-4">
                      You can proactively approach the Lok Adalat for <strong>Pre-Litigation Counseling</strong>. This means you don't have to wait for a court case. We can file an application with the District Legal Services Authority (DLSA) in your area (e.g., Alipore Court, Bankshall Court) to initiate settlement talks.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-green-800">
                      <li><strong>Cost-Effective:</strong> There are no court fees.</li>
                      <li><strong>Speed:</strong> Matters are often resolved in a single sitting.</li>
                      <li><strong>Finality:</strong> The award is final and cannot be appealed in any court.</li>
                    </ul>
                  </div>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Loans We Settle in West Bengal</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We handle a wide range of debt types prevalent in the state.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Personal Loans</h3>
                      <p className="text-gray-700">
                        High-interest personal loans from banks and NBFCs are a major burden. We negotiate settlements for these unsecured loans, often achieving significant reductions.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Credit Card Dues</h3>
                      <p className="text-gray-700">
                        We assist professionals and business owners in Kolkata who are stuck in the credit card debt trap. We help settle the total outstanding for a fraction of the cost.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">MSME Business Loans</h3>
                      <p className="text-gray-700">
                        Small businesses in West Bengal often face cash flow issues. We help settle unsecured business loans and Mudra loans to keep your business afloat.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">App-Based Loans</h3>
                      <p className="text-gray-700">
                        We aggressively handle cases involving instant loan apps, protecting you from their illegal harassment tactics while negotiating the repayment.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Credit Score Impact */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Truth About CIBIL Scores</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    It is important to be realistic. A loan settlement will reflect as "Settled" on your CIBIL report, which will lower your score. However, a "Settled" status is far better than a "Written Off" or "Suit Filed" status.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Our Advice:</strong> Prioritize your mental peace and financial stability. Once the debt is gone, you can rebuild your score. We guide our clients on how to improve their credit health post-settlement through disciplined financial habits.
                    </p>
                  </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Avoid these pitfalls to ensure a smooth settlement process.
                  </p>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Ignoring Legal Notices</h3>
                        <p className="text-gray-700">Ignoring a notice from a Kolkata court can lead to an ex-parte order against you. Always consult a lawyer immediately.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Falling for Scams</h3>
                        <p className="text-gray-700">Be warry of agents promising to "clear your CIBIL" instantly. Only a legal settlement can resolve the debt. Trust only verified legal professionals.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Paying Without Proof</h3>
                        <p className="text-gray-700">Never pay a single rupee without a formal Settlement Letter from the bank on their official letterhead.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Documentation */}
                <section id="documentation" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Having your paperwork in order is key to a fast settlement.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">KYC & Loan Info</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> PAN Card & Aadhar Card</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Loan Account Statements</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Copies of all Bank Notices</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-[#D2A02A] mb-4">Hardship Proof</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-center"><span className="mr-2">✓</span> Salary Slips (showing reduction)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Bank Statements (last 6 months)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Medical Records (if applicable)</li>
                          <li className="flex items-center"><span className="mr-2">✓</span> Business Loss Proof (for MSMEs)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in West Bengal?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We combine legal expertise with a deep understanding of the local banking ecosystem.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">📍</div>
                      <h3 className="font-bold text-xl mb-2">Local Expertise</h3>
                      <p className="text-gray-600">We understand the workings of Kolkata courts, DRT, and local bank branches.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Legal Power</h3>
                      <p className="text-gray-600">We are lawyers, not agents. We can represent you in court and send legal notices.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Harassment Protection</h3>
                      <p className="text-gray-600">We take strict legal action against any recovery agent violating your rights.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories from West Bengal</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was in deep debt with multiple credit cards. The lawyers at AMA Legal Solutions in Kolkata helped me settle everything through Lok Adalat. Very professional service."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Amitava Das</p>
                          <p className="text-sm text-gray-500">Kolkata</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "They stopped the harassment from recovery agents immediately. I settled my personal loan for 40% of the amount. Highly recommend their services in West Bengal."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Soma Banerjee</p>
                          <p className="text-sm text-gray-500">Howrah</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Live Debt-Free in West Bengal</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let debt control your life. Our expert lawyers in Kolkata are ready to fight for your financial freedom.
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
                    Speak to our senior loan settlement lawyers in West Bengal today.
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
