import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Can I legally settle my loan due to a medical emergency in India?",
    answer: "Yes, you can legally settle your loan during a medical crisis in India. Under the RBI hardship guidelines, if a borrower experiences sudden hospitalization or critical illness that restricts their earning capacity, banks and NBFCs can process a One-Time Settlement (OTS) to write off parts of the outstanding balance. AMA Legal Solutions specializes in drafting and negotiating these medical distress cases."
  },
  {
    question: "What medical documents do banks accept for loan settlement?",
    answer: "Lenders require verified evidence to classify your default as non-willful. This includes a hospital discharge summary, authenticated medical bills, prescription lists, a doctor's certificate specifying the recovery timeline, and bank statements showing a direct disruption in income. AMA Legal Solutions compiles these files into a bank-compliant hardship portfolio."
  },
  {
    question: "How does AMA Legal Solutions stop recovery agent harassment?",
    answer: "We send a formal legal representation notice to the bank or NBFC under the RBI Fair Practice Code. Once represented by our firm, all recovery calls and visits must cease. Lenders are legally obligated to communicate directly with our offices in Sector 57, Gurugram, protecting your peace of mind."
  },
  {
    question: "What is the difference between a 'Settled' and 'Closed' status on CIBIL?",
    answer: "A 'Closed' tag indicates the loan was paid in full. A 'Settled' tag means the bank accepted a reduced amount (OTS) and waived the remaining balance due to your medical crisis. While a settled tag initially impacts your CIBIL score, it resolves your legal liability, allowing you to rebuild credit over 12-24 months."
  },
  {
    question: "Can a secured home loan be settled for medical reasons?",
    answer: "Secured loans are harder to settle because banks hold collateral. However, under RBI guidelines, banks can restructure the debt, extend the tenure, or grant a temporary moratorium. AMA Legal Solutions negotiates with lenders to restructure secured loans and prevent asset foreclosure while you recover."
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
      "name": "Support for Loan Settlement during Medical Emergencies",
      "item": "https://www.amalegalsolutions.com/support-for-loan-settlement-during-medical-emergencies"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Support for Loan Settlement during Medical Emergencies: A Legal Guide",
  "description": "Struggling with debt after a medical crisis? AMA Legal Solutions offers expert support for loan settlement during medical emergencies. Learn about RBI guidelines and how we stop recovery agent harassment.",
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
  "datePublished": "2026-06-17",
  "dateModified": "2026-06-17"
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

// Review Schema (Using exact rating details matching homepage metrics)
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Medical Loan Settlement Support",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal support for settling loans during medical emergencies in India.",
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
        "name": "Samrat Basu"
      },
      "reviewBody": "Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ganesh Pawar"
      },
      "reviewBody": "I approached AMA Legal Solution during a challenging time, and I must say-it was the best decision I ever made. Their team is incredibly efficient, responsive, and genuinely invested in resolving queries faster than I ever imagined."
    }
  ]
};

export const metadata = {
  title: "Loan Settlement During Medical Emergency | Professional Relief",
  description: "Facing debt due to hospital bills? AMA Legal Solutions helps you negotiate a loan settlement under RBI guidelines and stops recovery harassment.",
  keywords: [
    "support for loan settlement during medical emergencies",
    "medical loan settlement india",
    "emergency loan relief",
    "medical hardship loan settlement",
    "rbi guidelines medical emergency loan",
    "debt relief for patients",
    "ama legal solutions",
    "anuj anand malik",
    "sector 57 loan settlement"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/support-for-loan-settlement-during-medical-emergencies',
  },
};

export default function MedicalLoanSettlementPage() {
  const tocSections = [
    { id: "intro", title: "Introduction" },
    { id: "hardship", title: "Medical Hardship & Defaults" },
    { id: "rbi-rules", title: "RBI Hardship Guidelines" },
    { id: "loan-types", title: "Eligible Debt Types" },
    { id: "documents", title: "Required Documentation" },
    { id: "harassment", title: "Stopping Harassment" },
    { id: "process", title: "Step-by-Step Process" },
    { id: "cibil", title: "Credit Score & CIBIL Impact" },
    { id: "why-choose", title: "Why Choose AMA?" },
    { id: "testimonials", title: "Testimonials" },
    { id: "faqs", title: "FAQs" },
    { id: "banks", title: "Partner Banks" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Medical Emergency Support", href: "/support-for-loan-settlement-during-medical-emergencies" },
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

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            {/* Review Snippet */}
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <Image src="/newAssets/google.png" alt="Google" width={60} height={20} className="h-4 w-auto object-contain opacity-90" />
                <div className="w-px h-4 bg-white/20"></div>
                <div className="flex text-[#D2A02A]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] md:text-sm font-medium tracking-wide">4.9/5 Rating | 850+ Success Stories</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-0">
              Expert Support for <span className="text-[#D2A02A]">Loan Settlement</span> During Medical Emergencies
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Protect your family's health and financial sanity. AMA Legal Solutions, founded by Anuj Anand Malik, offers comprehensive legal representation to settle mounting debts and stop collection harassment. Call 8700343611 today.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Case Evaluation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Mobile App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
            <div className="flex gap-4">
              <Link 
                href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/appstore.svg" 
                  alt="Get it on Google Play" 
                  width={130} 
                  height={36}
                  className="w-[120px] h-auto"
                />
              </Link>
              <Link 
                href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/playstore.svg" 
                  alt="Download on App Store" 
                  width={130} 
                  height={36}
                  className="w-[120px] h-auto"
                />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Column - TOC */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column - Main Content */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                 <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="intro" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-8 border-[#D2A02A] pl-6">
                    Support for Loan Settlement During Medical Emergencies
                  </h2>
                  
                  {/* Direct Answer Box (50 words) */}
                  <div className="bg-amber-50 border-l-4 border-[#D2A02A] p-6 rounded-r-xl mb-8">
                    <p className="text-gray-900 font-medium leading-relaxed text-base md:text-lg">
                      To settle a bank loan during a medical emergency in India, notify your lender in writing with hospital discharge summaries and medical bills. Lenders negotiate a One-Time Settlement (OTS) under RBI hardship guidelines, reducing outstanding debt by 30% to 70% based on severity, income disruption, and asset availability.
                    </p>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In the unpredictable journey of life, medical emergencies stand out as some of the most emotionally shattering and financially destabilizing events a household can face. Beyond the direct anxiety of securing quality clinical care, families in India are routinely forced to navigate a secondary crisis: the compounding pressure of outstanding financial liabilities. When medical emergencies strike, routine expenses like personal loans, credit card EMIs, and business debts quickly transform from manageable monthly line items into critical legal threats. This is where dedicated <strong>support for loan settlement during medical emergencies</strong> acts as an essential legal shield.
                    </p>
                    <p>
                      The landscape of healthcare in India has progressed significantly, but the out-of-pocket expenses associated with modern multi-specialty clinical care remain disproportionately high. Critical interventions such as cardiac surgeries, oncology regimens, organ transplants, or prolonged ICU stays can clean out a family's lifetime savings within a matter of days. When your primary focus should be resting on a loved one's clinical recovery, the reality of automated banking systems is unforgiving. Lenders operate on strict computer-driven schedules; a single missed EMI triggers a cascade of automated defaults, late-payment charges, and the stressful escalation of collection agencies.
                    </p>
                    <p>
                      At <strong>amalegalsolutions.com</strong>, we hold the conviction that no individual should be forced to compromise on life-saving medical care to appease a commercial bank. Founded by <strong>Anuj Anand Malik</strong>, our legal chambers have spent years pioneering specialized debt resolution protocols designed to protect individuals facing sudden clinical hardship. Operating from our corporate offices in <strong>Sector 57</strong>, Gurgaon, our specialized team bridges the gap between banking regulations and humanitarian relief. Led by <strong>Anuj Anand Malik</strong>, we utilize formal legal notices, RBI compliance mandates, and structured financial negotiations to ensure that bank collection actions are frozen, allowing patients to recover without the weight of impending financial ruin.
                    </p>
                  </div>
                </section>

                {/* Medical Hardship & Defaults */}
                <section id="hardship" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    The Financial Toll of Catastrophic Healthcare Expenses
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In public health terminology, "catastrophic healthcare expenditure" occurs when a household's out-of-pocket medical bills exceed 10% to 25% of its total income. In India, where health insurance penetration remains limited and many corporate policies feature restrictive sub-limits, critical illnesses almost always trigger severe financial distress. To pay for immediate hospital admissions or purchase life-saving medications, families frequently exhaust their liquid assets, maximize their credit cards, or take out high-interest personal loans.
                    </p>
                    <p>
                      This emergency borrowing creates a highly unstable debt cycle. High-interest unsecured loans feature immediate repayment schedules. When the borrower is simultaneously facing temporary or permanent loss of employment due to their medical condition, the household budget collapses. The psychological distress of dealing with persistent recovery agents while undergoing medical treatment can actively hinder clinical outcomes. Our legal team, reachable at <strong>8700343611</strong>, intervenes at this exact stage to establish a protective barrier between you and your creditors, shifting the conversation from aggressive collections to a regulated legal negotiation.
                    </p>
                  </div>
                </section>

                {/* RBI Hardship Guidelines */}
                <section id="rbi-rules" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    RBI Hardship Guidelines: Lenders' Obligations in Health Crises
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      The Reserve Bank of India (RBI) has established extensive frameworks to protect borrowers who default due to involuntary hardship. Lenders are legally prohibited from treating a borrower experiencing a verified medical emergency in the same manner as a willful default. The RBI Master Circulars on Fair Practice Codes lay down clear parameters:
                    </p>
                    <ul>
                      <li><strong>Hardship Assessments:</strong> Lenders must assess the borrower's revised repayment capacity if a sudden drop in income is caused by health issues or disability.</li>
                      <li><strong>Debt Restructuring Options:</strong> Banks have the authority to restructure loans by extending the repayment tenure, converting outstanding interest into a separate term loan, or offering a temporary EMI moratorium.</li>
                      <li><strong>One-Time Settlement (OTS):</strong> If the medical crisis leads to long-term income impairment, the bank is empowered to accept a lump-sum settlement, writing off a major portion of the outstanding balance.</li>
                    </ul>
                    <p>
                      At <strong>amalegalsolutions.com</strong>, we build a comprehensive legal file demonstrating your medical-financial reality. By citing relevant <strong>RBI hardship guidelines</strong> and presenting a structured case directly to the bank's credit committees, we ensure that your situation receives the legal attention it deserves, bypassing entry-level collection agents who lack the authority to grant waivers.
                    </p>
                  </div>
                </section>

                {/* Eligible Debt Types */}
                <section id="loan-types" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Eligible Debt Types for Medical Settlement
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 mb-6">
                    <p>
                      Not all loans are structured similarly, and the legal approach for negotiation varies based on whether the asset is secured or unsecured. Below is a breakdown of how different debt categories are resolved:
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-bold text-[#D2A02A] mb-3">Credit Card Debt</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Credit cards are unsecured debts carrying exorbitant annualized interest rates (often 36% to 48%). During hospitalization, these balances compound rapidly. We prioritize <strong>credit card debt settlement</strong> to halt this compounding cycle, often securing waivers up to 70% of the total outstanding dues.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-bold text-[#D2A02A] mb-3">Unsecured Personal Loans</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Personal loans are heavily targeted by recovery departments. Since they carry no collateral, banks are highly incentivized to engage in a <strong>personal loan settlement</strong> when presented with concrete medical evidence of default risk, reducing the total payable amount to a realistic lump sum.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-bold text-[#D2A02A] mb-3">App-Based Lending Debts</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Digital lending applications often employ highly invasive recovery techniques. We step in immediately with formal legal notices to ensure these apps comply with RBI digital lending guidelines, negotiating an <strong>unsecured debt resolution</strong> while protecting your data and digital privacy.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-bold text-[#D2A02A] mb-3">Secured Loans & Mortgages</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Secured assets (like home or auto loans) cannot be easily settled since the lender holds physical collateral. In these cases, we focus on negotiating extended moratoria, interest-rate restructuring, or tenure extensions to keep the asset safe from foreclosure.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Required Documentation */}
                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    The Essential Medical & Financial Document Checklist
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      To successfully establish a case for <strong>medical debt relief</strong> under RBI standards, a borrower must provide an absolute paper trail. Lenders will reject settlement requests that rely on verbal claims of illness. Our legal desk in Sector 57 systematically compiles the following documentation:
                    </p>
                    <ol>
                      <li><strong>Admission & Discharge Summary:</strong> An authenticated copy of the hospital discharge summary detailing the diagnosis, treatment period, and surgical interventions.</li>
                      <li><strong>Consolidated Hospitalization Bills:</strong> Receipts of all payments made to the hospital, pharmacy, and diagnostic labs, which show the financial drain on the household.</li>
                      <li><strong>Certified Medical Certificate:</strong> A signed declaration from the treating specialist stating the recovery period during which the patient is unfit to work.</li>
                      <li><strong>Income Disruption Proof:</strong> Salary slips showing medical leave without pay, a termination letter due to physical incapacity, or business accounting records indicating operations have shut down.</li>
                      <li><strong>Bank Account Statements:</strong> Six months of bank statements showing the depletion of savings and the absence of incoming revenue.</li>
                    </ol>
                  </div>
                </section>

                {/* Stopping Harassment */}
                <section id="harassment" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Legally Stopping Recovery Agent Harassment
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      One of the most damaging aspects of loan default is the psychological pressure of collections. Aggressive collection agents often call multiple times a day, contact family members, or show up at residences. The RBI has strictly defined these actions as violations of the Fair Practice Code.
                    </p>
                    <p>
                      When you engage <strong>AMA Legal Solutions</strong>, we immediately issue a formal Legal Representation Notice to the head of the bank's collections department. This notice informs them that you are legally represented and that any direct contact with you or your family constitutes a breach of RBI guidelines. We redirect all communications to our office in <strong>Sector 57</strong>, Gurgaon. If agents violate this, we file complaints with the Banking Ombudsman, which carries significant penalties for the lender. You can discuss your situation directly with Anuj Anand Malik's team at <strong>8700343611</strong>.
                    </p>
                  </div>
                </section>

                {/* Critical Data and Process Table */}
                <section className="scroll-mt-32">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                    Medical Loan Settlement Parameters & Pathways
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider border-b">Parameter</th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider border-b">Unsecured Loans (Personal/Cards)</th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider border-b">Secured Loans (Home/Auto)</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-100">
                        <tr>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900 border-r">Primary Relief Route</td>
                          <td className="px-6 py-4 text-sm text-gray-700">One-Time Settlement (OTS) with write-offs</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Moratorium, Tenure Extension, EMI Restructuring</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900 border-r">Estimated Waiver Range</td>
                          <td className="px-6 py-4 text-sm text-gray-700">30% to 70% of the total outstanding balance</td>
                          <td className="px-6 py-4 text-sm text-gray-700">0% principal waiver (interest restructure only)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900 border-r">Core Document Required</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Hospital Discharge Summary & Bills</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Specialist Medical Certificate & Income Loss Proof</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900 border-r">CIBIL Score Tag</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Marked as "Settled" (rebuild over 12-24 months)</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Marked as "Restructured" or "Active" (minimal drop)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900 border-r">AMA Representation Role</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Waiver negotiation and Harassment Shielding</td>
                          <td className="px-6 py-4 text-sm text-gray-700">Foreclosure prevention and restructuring representation</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Step-by-Step Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Step-by-Step Loan Settlement Process in India
                  </h2>
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="bg-[#D2A02A] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-gray-900">Hardship Documentation Review</h4>
                        <p className="text-gray-600 leading-relaxed">
                          We conduct an audit of your medical discharge summary, clinical prescriptions, and banking files. Our legal team maps these data points against the outstanding balances to establish a clear timeline of non-willful default.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="bg-[#D2A02A] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-gray-900">Legal Representation & Cease-Desist Notice</h4>
                        <p className="text-gray-600 leading-relaxed">
                          We send a formal notice of legal representation to the credit card departments and bank managers, halting recovery agent harassment and moving communications to our Sector 57 Gurgaon office.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="bg-[#D2A02A] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-gray-900">Structured OTS Negotiation</h4>
                        <p className="text-gray-600 leading-relaxed">
                          We present the medical hardship file directly to the bank's compromise settlement committee, negotiating for a maximum waiver on the principal and a complete write-off of interest and penalties.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="bg-[#D2A02A] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-gray-900">Settlement Letter & Closing Audit</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Once terms are finalized, the bank issues a formal One-Time Settlement (OTS) letter. We audit the letter to confirm it is authentic and contains no hidden clauses before you make the final payment.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Credit Score & CIBIL Impact */}
                <section id="cibil" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Understanding the CIBIL Score Impact
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      A major point of concern for borrowers considering settlement is the <strong>CIBIL score impact</strong>. When a bank agrees to write off a portion of your debt, they report the account to credit bureaus as "Settled" rather than "Closed."
                    </p>
                    <p>
                      A settled tag stays on your credit history for seven years and will lower your credit score temporarily. However, during a medical crisis, maintaining an immaculate credit score is secondary to preserving your health and stopping collection actions. Overcoming the initial drop is a manageable challenge: once your health stabilizes and your income recovers, you can actively rebuild your credit rating. Our legal consultants provide a post-settlement roadmap, guiding you through secured credit cards, timely utility payments, and micro-loan strategies to restore your creditworthiness.
                    </p>
                  </div>
                </section>

                {/* Why Choose AMA */}
                <section id="why-choose" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why Choose AMA Legal Solutions?
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Legal Authority</h3>
                      <p className="text-gray-600 text-sm">
                        Unlike standard settlement agencies, AMA Legal Solutions is a fully registered law firm. Our team, led by Anuj Anand Malik, operates with formal legal backing and absolute ethical standards.
                      </p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Harassment Shielding</h3>
                      <p className="text-gray-600 text-sm">
                        We send formal legal representations under the RBI Fair Practice Code to halt recovery agent harassment. Your recovery should be spent in peace, not answering threatening phone calls.
                      </p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Empathetic Counseling</h3>
                      <p className="text-gray-600 text-sm">
                        We understand the emotional distress of illness and debt. Contact our Sector 57 office at 8700343611 for a supportive, confidential evaluation of your situation.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                     Empowering Recovery: Real Stories of Hope
                   </h2>
                   <div className="grid md:grid-cols-2 gap-8">
                     <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative shadow-sm">
                       <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-10 font-serif">"</div>
                       <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                         "Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me."
                       </p>
                       <div className="flex items-center">
                         <div className="w-12 h-12 bg-[#D2A02A]/20 rounded-full flex items-center justify-center text-[#D2A02A] font-bold mr-4">S</div>
                         <div>
                           <p className="font-bold text-gray-900">Samrat Basu</p>
                           <p className="text-sm text-gray-500">Verified Client Review</p>
                         </div>
                       </div>
                     </div>
                     <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative shadow-sm">
                       <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-10 font-serif">"</div>
                       <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                         "I approached AMA Legal Solution during a challenging time, and I must say-it was the best decision I ever made. Their team is incredibly efficient, responsive, and genuinely invested in resolving queries faster than I ever imagined."
                       </p>
                       <div className="flex items-center">
                         <div className="w-12 h-12 bg-[#D2A02A]/20 rounded-full flex items-center justify-center text-[#D2A02A] font-bold mr-4">G</div>
                         <div>
                           <p className="font-bold text-gray-900">Ganesh Pawar</p>
                           <p className="text-sm text-gray-500">Verified Client Review</p>
                         </div>
                       </div>
                     </div>
                   </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-sm md:text-gray-700 leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* CTA section */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-[40px] p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">Don't Let Debt Control Your Life</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Take the first step towards a debt-free future. Our expert lawyers are ready to fight for your financial freedom while you recover.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact" className="w-full sm:w-auto">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full">
                          Book Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="w-full sm:w-auto">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full">
                          Call: 8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-60 italic whitespace-nowrap overflow-hidden text-ellipsis">Confidential • Legal • Effective Support from amalegalsolutions.com</p>
                  </div>
                </section>

                {/* Banks Grid */}
                <section id="banks" className="mt-16 scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                    We Settle Medical Debts Across All Major Banks
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {["SBI", "HDFC", "ICICI", "Kotak", "IDFC First", "Yes Bank", "Bajaj Finserv", "Axis Bank", "Bank of Baroda", "Hero Fincorp", "Aditya Birla", "Tata Capital"].map(bank => (
                      <div key={bank} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-all font-bold text-gray-700">
                        {bank}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                     <p className="text-sm text-gray-500 italic">And many more banks and NBFCs across India.</p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar (Right) */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="flex justify-center mb-2">
                    <Image src="/newAssets/google.png" alt="Google" width={80} height={24} className="h-6 w-auto object-contain" />
                  </div>
                  <div className="flex justify-center text-[#D2A02A] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-gray-900 mb-1">4.9 / 5.0</p>
                  <p className="text-xs text-gray-500 mb-6">Based on 850+ Verified Medical Cases</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior loan settlement lawyers today. Get a direct assessment from Anuj Anand Malik's team in Sector 57.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Call +91-8700343611
                  </a>
                  <p className="text-xs text-gray-400 text-center">Available Mon-Sat | 10AM - 6PM</p>
                </div>

                <div className="bg-gray-900 p-8 rounded-3xl shadow-xl text-white">
                  <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-2">Related Expertise</h3>
                  <ul className="space-y-4">
                    <li><Link href="/personal-loan-settlement" className="text-gray-400 hover:text-[#D2A02A] transition-colors text-sm font-medium">Personal Loan Settlement Guide</Link></li>
                    <li><Link href="/credit-card-settlement" className="text-gray-400 hover:text-[#D2A02A] transition-colors text-sm font-medium">Settling High Credit Card Bills</Link></li>
                    <li><Link href="/loan-recovery-agents-harassment-complaint" className="text-gray-400 hover:text-[#D2A02A] transition-colors text-sm font-medium">Complaint Against Recovery Agents</Link></li>
                    <li><Link href="/what-is-ots" className="text-gray-400 hover:text-[#D2A02A] transition-colors text-sm font-medium">What is One Time Settlement?</Link></li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <p className="text-sm font-semibold mb-4" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
                    <div className="flex flex-col gap-3">
                      <Link 
                        href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                        target="_blank"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <Image 
                          src="/newAssets/appstore.svg" 
                          alt="Get it on Google Play" 
                          width={130} 
                          height={36}
                          className="w-full max-w-[140px]"
                        />
                      </Link>
                      <Link 
                        href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                        target="_blank"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <Image 
                          src="/newAssets/playstore.svg" 
                          alt="Download on App Store" 
                          width={130} 
                          height={36}
                          className="w-full max-w-[140px]"
                        />
                      </Link>
                    </div>
                    <p className="text-[10px] text-gray-500 italic mt-4">"Founded by Anuj Anand Malik, we are your trusted partners."</p>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* States Grid */}
        <div className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 text-center mb-12">
               <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1a202c]">Helping Families Recover Nationwide</h2>
               <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">No matter where you are, AMA Legal Solutions at Sector 57 is here to provide support for loan settlement during medical emergencies. Founded by Anuj Anand Malik, we serve every corner of India. Call 8700343611.</p>
            </div>
            <div className="container mx-auto px-4">
               {/* Use a simplified grid for medical recovery focus */}
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {["Noida", "Gurugram", "Delhi", "Faridabad", "Mumbai", "Pune", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Jaipur"].map(city => (
                    <div key={city} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center group hover:border-[#D2A02A] transition-all">
                       <span className="text-gray-900 font-bold block mb-1 group-hover:text-[#D2A02A]">{city}</span>
                       <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Local Support Available</span>
                    </div>
                  ))}
               </div>
               
               <div className="mt-16 p-8 bg-white rounded-[32px] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-[#D2A02A]/10 rounded-2xl flex items-center justify-center text-[#D2A02A]">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Visit Our Main Office</h4>
                      <p className="text-gray-500">Corporate HQ: Sector 57, Gurugram, India</p>
                    </div>
                  </div>
                  <Link href="/contact">
                    <button className="bg-[#1a202c] hover:bg-black text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg text-lg min-w-[200px]">
                      View All Locations
                    </button>
                  </Link>
               </div>
            </div>
        </div>
      </div>
    </>
  );
}
