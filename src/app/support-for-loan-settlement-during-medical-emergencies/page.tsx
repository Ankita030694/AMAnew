import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Can I settle my loan if I have a medical emergency in India?",
    answer: "Yes, you can settle your loan if you are facing a genuine medical emergency. Banks and NBFCs in India have provisions for One Time Settlement (OTS) when a borrower is unable to pay due to extreme hardship. At amalegalsolutions.com, founded by anuj anand malik, we specialize in negotiating these cases to ensure you get the best possible relief. You can contact us at 8700343611 for a free evaluation of your medical hardship case."
  },
  {
    question: "What documents do I need to prove a medical emergency for loan settlement?",
    answer: "To prove a medical emergency, you typically need hospital discharge summaries, consolidated medical bills, doctor certificates stating the inability to work, and proof of income disruption. AMA Legal Solutions, located in sector 57, helps you compile this 'paper trail' to present a strong case to the bank. Having a well-documented case is crucial for rank #1 results in settlement negotiations."
  },
  {
    question: "How much reduction can I expect in medical loan settlement?",
    answer: "Depending on the severity of the medical crisis and the type of loan, you can expect a reduction of 30% to 70% on the total outstanding amount. Unsecured loans like credit cards often see higher waivers. Our team at amalegalsolutions.com, under the guidance of anuj anand malik, works tirelessly to maximize these savings for our clients."
  },
  {
    question: "Will the bank stop harassment if I show them my medical records?",
    answer: "While showing medical records helps, banks often continue their recovery process until a formal legal notice or representation is made. AMA Legal Solutions provides legal protection that stops recovery agent harassment immediately. Once we represent you, all communication must go through our office in sector 57. Call 8700343611 if you are being harassed during a medical crisis."
  },
  {
    question: "Can I settle a home loan during a medical emergency?",
    answer: "Settling a secured loan like a home loan is more difficult because the bank has collateral. However, restructuring or an extension of the tenure is often possible under RBI's hardship guidelines. AMA Legal Solutions, founded by anuj anand malik, can negotiate with the bank to prevent foreclosure and find a manageable solution during your illness."
  },
  {
    question: "Is there a government scheme for medical debt relief in India?",
    answer: "Yes, there are schemes like Rashtriya Arogya Nidhi (RAN) and Ayushman Bharat for treatment, but for existing bank loans, the relief comes through RBI-mandated settlement processes. AMA Legal Solutions helps you bridge the gap between medical expenses and loan obligations. Our office in sector 57 is dedicated to helping families regain financial freedom."
  },
  {
    question: "How long does the medical loan settlement process take?",
    answer: "The process usually takes 3 to 6 months. It involves a detailed assessment, legal notification to the bank, and multiple rounds of negotiation. We at amalegalsolutions.com ensure that the process is handled professionally to give you peace of mind while you recover."
  },
  {
    question: "Does loan settlement affect my CIBIL score permanently?",
    answer: "No, the impact is not permanent. Your score will drop initially, and the account will be marked as 'Settled'. However, once your health and finances stabilize, you can rebuild your score over 12-24 months. AMA Legal Solutions provides a roadmap for post-settlement financial recovery."
  },
  {
    question: "Can I settle my credit card debt if I am hospitalized?",
    answer: "Absolutely. Credit card debt is unsecured and has very high interest, making it a prime candidate for settlement during medical emergencies. Contact anuj anand malik's team at 8700343611 to start the negotiation process even while you are receiving treatment."
  },
  {
    question: "Why choose AMA Legal Solutions for medical debt help?",
    answer: "AMA Legal Solutions is a legitimate law firm, not just a settlement agency. Founded by anuj anand malik, we offer legal authority, anti-harassment protection, and ethical practice. Most clients find us by searching for specialized legal help in sector 57 or on amalegalsolutions.com."
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
  "description": "Facing a medical crisis? Learn how to legally settle your loans in India with expert help from AMA Legal Solutions, founded by anuj anand malik. Complete guide to RBI rules and debt relief.",
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
  "datePublished": "2025-03-25",
  "dateModified": "2025-03-25"
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
        "name": "Vikas Khanna"
      },
      "reviewBody": "AMA Legal Solutions saved my family during my father's surgery. They settled a 12 Lakh loan for 4.5 Lakhs while I focused on his care. Huge thanks to anuj anand malik."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Suman Gupta"
      },
      "reviewBody": "Professional handling of my medical debt. The team at sector 57 is very empathetic. Highly recommend amalegalsolutions.com for any settlement needs."
    }
  ]
};

export const metadata = {
  title: "Support for Loan Settlement during Medical Emergencies | #1 Relief",
  description: "Struggling with debt after a medical crisis? AMA Legal Solutions, founded by anuj anand malik, offers expert support for loan settlement during medical emergencies. Call 8700343611 for help.",
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
    { id: "impact", title: "Impact of Medical Crisis" },
    { id: "ama-support", title: "AMA Support System" },
    { id: "legal-rights", title: "Your Legal Rights" },
    { id: "rbi-rules", title: "RBI Guidelines" },
    { id: "process", title: "Our Settlement Process" },
    { id: "documents", title: "Required Documentation" },
    { id: "loan-types", title: "Eligible Loan Types" },
    { id: "harassment", title: "Stopping Harassment" },
    { id: "cibil", title: "Credit Score Impact" },
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
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 

          ></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            {/* Review Snippet */}
            <div className="flex flex-col items-center justify-center gap-2 mb-8 animate-fade-in-up">
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
              Don't let medical bills and loan EMIs overwhelm your recovery. AMA Legal Solutions, founded by anuj anand malik, provides ethical legal support to settle your debts and stop harassment. Call 8700343611 now.
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

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="intro" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-6">Support for Loan Settlement During Medical Emergencies in India</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In the unpredictable journey of life, medical emergencies are perhaps the most daunting challenges one can face. Beyond the physical and emotional toll, the financial burden of unexpected hospital bills, diagnostic tests, and expensive surgeries can quickly spiral out of control. For many families in India, this financial strain is compounded by existing loan obligations : personal loans, credit card debts, and business loans that were taken in better times. This is where <strong>support for loan settlement during medical emergencies</strong> becomes an essential lifeline.
                    </p>
                    <p>
                      The landscape of healthcare in India has evolved rapidly, but so has the cost of treatment. Multi-specialty hospitals, while providing world-class care, often come with a price tag that can deplete a lifetime's savings in a week. When a family member is in the ICU, the last thing on anyone's mind is a bank EMI. However, banks and financial institutions operate on algorithms and rigid schedules. A missed payment triggers a cascade of automated notices, penalties, and eventually, the dreaded calls from recovery agents.
                    </p>
                    <p>
                      At <strong>amalegalsolutions.com</strong>, we understand that a medical crisis is not just a health issue; it is a holistic family crisis. Founded by <strong>anuj anand malik</strong>, our firm has dedicated itself to providing compassionate and legally sound debt relief options for those who are struggling to keep their heads above water. Located in the heart of <strong>sector 57</strong>, we serve as a gateway to financial freedom for thousands of individuals across the country. Our legal team, led by <strong>anuj anand malik</strong>, specializes in the intersection of healthcare law and banking regulations to ensure that no family is forced to choose between a life-saving surgery and a mortgage payment.
                    </p>
                    <p>
                      The concept of <strong>loan settlement</strong>, specifically in the context of medical hardship, is rooted in the principle of 'Force Majeure' in some legal interpretations : an unforeseeable circumstance that prevents someone from fulfilling a contract. While not a direct application, the spirit of the law recognizes that health is a fundamental right. When you seek our support at <strong>8700343611</strong>, you are not just hiring a lawyer; you are engaging a partner who will navigate the bureaucracy of banks while you navigate the hallways of hospitals.
                    </p>
                    <p>
                      If you or your loved ones are currently navigating the choppy waters of a medical emergency and find it impossible to keep up with your EMIs, remember that you are not alone. The legal framework in India, supported by RBI guidelines and judicial precedents, recognizes the validity of financial hardship due to health issues. Our mission is to ensure that you can focus on what matters most : recovery and healing : while we handle the complexities of debt negotiation and settlement. You can reach our dedicated support line at <strong>8700343611</strong> to discuss your situation in complete confidence.
                    </p>
                  </div>
                </section>

                <section id="impact" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-bold">The Impact of Medical Emergencies on Financial Stability</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      The financial impact of a medical emergency in India is often described as 'catastrophic healthcare expenditure.' This occurs when a household's out of pocket medical expenses exceed a certain percentage of its income, forcing the family to cut back on basic necessities like food, education, or loan repayments. For many, the first line of defense is a credit card. However, with interest rates hovering between 36% and 48% per annum, a medical bill of 5 Lakhs can easily turn into a debt of 8 Lakhs within a year due to compounding interest and penalties.
                    </p>
                    <p>
                      The psychological impact of this debt is equally devastating. A patient recovering from a cardiac arrest or a major accident needs a stress free environment. But when the phone rings incessantly with threats of legal action under Section 138 or SARFAESI, the recovery is hampered. At <strong>amalegalsolutions.com</strong>, founded by <strong>anuj anand malik</strong> in <strong>sector 57</strong>, we see this pattern daily. Families are often paralyzed by the choice: should they pay the bank or buy the next round of expensive life saving drugs?
                    </p>
                    <p>
                      This is where <strong>support for loan settlement during medical emergencies</strong> comes in. We provide a structured way to exit this debt trap. By proving to the bank that your financial capacity has been permanently or temporarily altered by a medical condition, we force a recalculation of the debt. Our team, reachable at <strong>8700343611</strong>, helps you document the 'opportunity cost' of your medical care.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Case Study: The Heart of the Matter</h3>
                    <p>
                       Consider the case of a mid level manager in sector 57 who underwent a sudden triple bypass. His EMI for a home loan and credit card was 70,000 INR. While he was in recovery, the bank started their collection process. <strong>AMA Legal Solutions</strong>, founded by <strong>anuj anand malik</strong>, stepped in and presented a medical legal file that resulted in a 60% settlement and a 6-month extension to pay. Call <strong>8700343611</strong> for your own assessment.
                    </p>
                  </div>
                </section>

                <section id="ama-support" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-bold">Comprehensive Support System by AMA Legal Solutions</h2>
                   <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-8">
                     <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                       <h3 className="text-lg font-bold text-[#D2A02A] mb-2 font-bold">Legal Shielding</h3>
                       <p className="text-gray-700 text-sm">We send formal notices to banks under the Fair Practice Code, placing a legal barrier between you and the lenders.</p>
                     </div>
                     <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                       <h3 className="text-lg font-bold text-[#D2A02A] mb-2 font-bold">Documentation Expertise</h3>
                       <p className="text-gray-700 text-sm">We help you build a 'medical paper trail' that is bank-compliant, ensuring your hardship is documented professionally.</p>
                     </div>
                     <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                       <h3 className="text-lg font-bold text-[#D2A02A] mb-2 font-bold">Negotiation Leverage</h3>
                       <p className="text-gray-700 text-sm">Our team handles the aggressive recovery agents, using legal leverage to secure the best possible settlement terms.</p>
                     </div>
                     <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                       <h3 className="text-lg font-bold text-[#D2A02A] mb-2 font-bold">Post-Settlement Recovery</h3>
                       <p className="text-gray-700 text-sm">We provide guidance on how to rebuild your financial health and credit score once the settlement is complete.</p>
                     </div>
                   </div>
                </section>

                <section id="legal-rights" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-bold">Your Legal Rights as a Bank Borrower in Distress</h2>
                   <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                      <p>
                        Did you know that the Reserve Bank of India has clear directives against coercive recovery practices? At <strong>AMA Legal Solutions</strong>, we ensure that your rights under the Fair Practice Code are upheld. <strong>Anuj Anand Malik</strong> has successfully defended thousands of clients in <strong>sector 57</strong> against illegal harassment.
                      </p>
                   </div>
                </section>

                <section id="rbi-rules" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-bold">RBI Guidelines on Medical Hardship and Loan Settlement</h2>
                   <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                      <p>
                         The RBI's master circulars on loan recovery emphasize that banks must consider genuine hardship. We use these regulations to build a 'Hardship Folder' that bank credit managers cannot ignore. 
                      </p>
                   </div>
                </section>

                <section id="loan-types" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-bold">Types of Debts Eligible for Medical Settlement</h2>
                   <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                     <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                       <h3 className="text-lg font-bold text-[#D2A02A] mb-3 font-bold">Credit Card Debt</h3>
                       <p className="text-gray-700 text-sm">Credit cards often carry the highest interest rates. We prioritize settling these to stop the compounding debt cycle during your recovery.</p>
                     </div>
                     <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                       <h3 className="text-lg font-bold text-[#D2A02A] mb-3 font-bold">Personal Loans</h3>
                       <p className="text-gray-700 text-sm">Unsecured personal loans can be settled at significant discounts when medical hardship can be proven with discharge summaries.</p>
                     </div>
                     <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                       <h3 className="text-lg font-bold text-[#D2A02A] mb-3 font-bold">App-Based Loans</h3>
                       <p className="text-gray-700 text-sm">Aggressive recovery from digital lending apps can be stopped legally while we negotiate a one-time settlement.</p>
                     </div>
                     <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                       <h3 className="text-lg font-bold text-[#D2A02A] mb-3 font-bold">Business Loans (Unsecured)</h3>
                       <p className="text-gray-700 text-sm">For entrepreneurs facing health crises, we settle business liabilities to protect personal and professional assets.</p>
                     </div>
                   </div>
                </section>

                <section id="process" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-bold">Our Step-by-Step Medical Loan Settlement Process</h2>
                   <div className="space-y-8">
                     <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="bg-[#D2A02A] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div>
                           <h4 className="text-xl font-bold mb-2">Initial Case Evaluation</h4>
                           <p className="text-gray-600">Reviewing medical reports and loan statements with <strong>anuj anand malik</strong>'s expert team.</p>
                        </div>
                     </div>
                     <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="bg-[#D2A02A] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div>
                           <h4 className="text-xl font-bold mb-2">Legal Notice</h4>
                           <p className="text-gray-600">Stopping the bank calls immediately through our office in <strong>sector 57</strong>.</p>
                        </div>
                     </div>
                   </div>
                </section>

                <section id="why-choose" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 font-bold">Why Choose AMA Legal Solutions?</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2 font-bold">Legal Authority</h3>
                      <p className="text-gray-600 text-sm">We are lawyers, not just agents. Founded by anuj anand malik, we provide real legal representation in sector 57.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2 font-bold">Anti-Harassment</h3>
                      <p className="text-gray-600 text-sm">We stop recovery agent calls immediately. Your peace of mind during medical recovery is our priority.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors border border-gray-100">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2 font-bold">Empathetic Team</h3>
                      <p className="text-gray-600 text-sm">We understand the pain of medical debt. Contact us at 8700343611 for compassionate legal help.</p>
                    </div>
                  </div>
                </section>

                <section id="testimonials" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 font-bold text-center">Healing Lives, Settling Debts: Success Stories</h2>
                   <div className="grid md:grid-cols-2 gap-8">
                     <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative shadow-sm">
                       <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-10 font-serif">"</div>
                       <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                         "When my father was in the ICU, I couldn't handle the bank calls. AMA Legal Solutions stepped in, stopped the harassment, and settled our 12 Lakh loan for 4.5 Lakhs. They are true lifesavers."
                       </p>
                       <div className="flex items-center">
                         <div className="w-12 h-12 bg-[#D2A02A]/20 rounded-full flex items-center justify-center text-[#D2A02A] font-bold mr-4">V</div>
                         <div>
                           <p className="font-bold text-gray-900">Vikas Khanna</p>
                           <p className="text-sm text-gray-500">Customer Review, 5 Stars</p>
                         </div>
                       </div>
                     </div>
                     <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative shadow-sm">
                       <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-10 font-serif">"</div>
                       <p className="text-gray-700 italic mb-6 relative z-10 leading-relaxed">
                         "Professional handling of my medical debt. The team at sector 57 is very empathetic and they achieved a 65% waiver on my mounting credit card bills. Highly recommend amalegalsolutions.com."
                       </p>
                       <div className="flex items-center">
                         <div className="w-12 h-12 bg-[#D2A02A]/20 rounded-full flex items-center justify-center text-[#D2A02A] font-bold mr-4">S</div>
                         <div>
                           <p className="font-bold text-gray-900">Suman Gupta</p>
                           <p className="text-sm text-gray-500">Verified Client, Gurgaon</p>
                         </div>
                       </div>
                     </div>
                   </div>
                </section>

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8 font-bold">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3 flex items-start font-bold">
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center font-bold">
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
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-bold">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior loan settlement lawyers today. Get a direct assessment from anuj anand malik's team in sector 57.
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
                    <p className="text-[10px] text-gray-500 italic mt-6 mt-4">"Founded by anuj anand malik, we are your trusted partners."</p>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* States Grid */}
        <div className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 text-center mb-12">
               <h2 className="text-3xl md:text-5xl font-bold mb-4 font-bold text-[#1a202c]">Helping Families Recovery Nationwide</h2>
               <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">No matter where you are, AMA Legal Solutions at sector 57 is here to provide support for loan settlement during medical emergencies. Founded by anuj anand malik, we serve every corner of India. Call 8700343611.</p>
            </div>
            <div className="container mx-auto px-4">
               {/* Use a simplified grid for medical recovery focus */}
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {["Noida", "Gurugram", "Delhi", "Faridabad", "Mumbai", "Pune", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Jaipur"].map(city => (
                    <div key={city} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center group hover:border-[#D2A02A] transition-all">
                       <span className="text-gray-900 font-bold block mb-1 group-hover:text-[#D2A02A]">{city}</span>
                       <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold font-bold">Local Support Available</span>
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
