import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is considered a reasonable settlement offer for a personal loan in India?",
    answer: "A reasonable settlement offer typically ranges from 25% to 50% of the total outstanding amount. However, this varies based on the bank, the age of the default, and the borrower's hardship. For older defaults or very high interest-heavy debts, banks might even accept as low as 20%. AMA Legal Solutions helps negotiate the lowest possible lump sum for our clients."
  },
  {
    question: "Can I settle my credit card debt for 10% of the total dues?",
    answer: "While 10% is extremely rare, it is not impossible in cases of extreme hardship or very old non-performing assets (NPAs). Most banks start negotiations at 70% and can be brought down to 30% through professional legal negotiation. We focus on removing late fees and penal interest first to reach a reasonable principal-focused settlement."
  },
  {
    question: "Will the bank accept my settlement offer in installments?",
    answer: "Yes, many banks agree to a 'Short Term Settlement' where the agreed amount is paid in 3 to 6 monthly installments. However, a single lump-sum payment often commands a better discount. We negotiate flexible payment plans that suit your current financial cash flow."
  },
  {
    question: "How does a settlement offer affect my CIBIL score?",
    answer: "A loan settlement will lead to a 'Settled' status on your CIBIL report, which can drop your score by 50 to 150 points. This remains on your report for 7 years. However, it is a better option than a 'Written Off' status or continuing to be a defaulter. We guide our clients on post-settlement credit building strategies."
  },
  {
    question: "Is documented proof of hardship required for a settlement?",
    answer: "Yes, banks require proof of genuine financial distress such as a medical certificate, termination letter, business loss audit, or a bank statement showing no income. Providing these documents strengthens your position to get a lower settlement percentage."
  },
  {
    question: "What is the 'Golden Zone' for loan settlement in India?",
    answer: "The 'Golden Zone' is the range between 30% and 45% of the total outstanding. Getting an offer in this range is highly favorable for the borrower and usually acceptable to the bank's recovery committee for unsecured loans."
  },
  {
    question: "Can I settle a secured loan like a home loan or car loan?",
    answer: "Settling secured loans is much harder because the bank has collateral. However, if the property value has depreciated or there are legal disputes, a settlement can be negotiated. Usually, for secured loans, restructuring or extension of tenure is more common than a principal waiver."
  },
  {
    question: "What happens if I don't pay after the bank accepts my settlement offer?",
    answer: "If you fail to pay within the deadline, the settlement agreement becomes void. The bank will revert to the original outstanding amount including all waived interest and penalties. It is crucial to only agree to an amount you are certain you can pay."
  },
  {
    question: "Do I need a lawyer to negotiate a settlement offer?",
    answer: "While you can negotiate yourself, having a lawyer from AMA Legal Solutions provides legal protection against harassment and ensures the bank doesn't include hidden clauses. Lawyers also have better access to senior recovery managers to get lower offers."
  },
  {
    question: "Is the waived amount in a settlement taxable?",
    answer: "Under certain interpretations of the Income Tax Act, the waived portion of a loan could be considered 'income from other sources'. However, for individuals not in business, this is often not enforced. It is advisable to consult a tax expert for large corporate settlements."
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
      "name": "What is a Reasonable Settlement Offer?",
      "item": "https://www.amalegalsolutions.com/what-is-a-reasonable-settlement-offer"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is a Reasonable Settlement Offer? Comprehensive Guide to Loan Settlement in India 2026",
  "description": "Learn what constitutes a reasonable settlement offer for personal loans and credit cards in India. Expert advice on negotiation, bank percentages, and CIBIL impact.",
  "image": "https://www.amalegalsolutions.com/services/loan-settlement-guide.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2026-03-11"
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
  "@type": "Product",
  "name": "Loan Settlement Consultation",
  "image": "https://www.amalegalsolutions.com/services/loan-settlement-guide.png",
  "description": "Learn what constitutes a reasonable settlement offer for personal loans and credit cards in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1540"
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
        "name": "Amit Verma"
      },
      "reviewBody": "AMA Legal Solutions helped me settle my 12 lakh personal loan for just 4.5 lakhs. Their negotiation skills are top-notch."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Deepika Singh"
      },
      "reviewBody": "Professional approach to credit card settlement. They handled the bank calls and got me a fair deal. No more harassment."
    }
  ]
};

export const metadata = {
  title: "What is a Reasonable Settlement Offer? | #1 Loan Settlement Guide",
  description: "Exhaustive guide on what constitutes a reasonable loan settlement offer in India. Discover bank negotiation secrets, CIBIL tips, and legal rights for 2026.",
  keywords: [
    "what is a reasonable settlement offer",
    "loan settlement percentage india",
    "personal loan settlement tips",
    "credit card settlement offer",
    "negotiate loan with bank",
    "ots scheme 2026",
    "debt settlement india",
    "cibil score after settlement",
    "stop recovery harassment",
    "ama legal solutions"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/what-is-a-reasonable-settlement-offer',
  },
};

export default function ReasonableSettlementOfferPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "defining-reasonable", title: "What is 'Reasonable'?" },
    { id: "factors", title: "Influencing Factors" },
    { id: "bank-trends", title: "Bank Trends 2026" },
    { id: "negotiation-guide", title: "Negotiation Guide" },
    { id: "legal-rights", title: "Legal Rights & RBI" },
    { id: "harassment-protection", title: "Stop Harassment" },
    { id: "cibil-impact", title: "CIBIL Score Impact" },
    { id: "ots-importance", title: "The OTS Letter" },
    { id: "role-of-lawyers", title: "Why Hire Lawyers" },
    { id: "pan-india", title: "Pan-India Services" },
    { id: "case-studies", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "What is a Reasonable Settlement Offer", href: "/what-is-a-reasonable-settlement-offer" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              What is a <span className="text-[#D2A02A]">Reasonable Settlement Offer</span> for Your Loan?
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Navigating the complex world of debt settlement in India. Discover how to negotiate with banks effectively and regain your financial peace of mind.
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
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Navigating the Path to Financial Recovery</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    In the unpredictable economic climate of 2026, many honest borrowers in India find themselves trapped in a cycle of debt. Whether it is an unsecured personal loan or multiple credit card dues, the weight of interest and penalties can become unbearable. The first question every debtor asks is: <strong>"What is a reasonable settlement offer?"</strong> This guide is designed to provide you with the definitive answer.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    At AMA Legal Solutions, we have witnessed thousands of cases where borrowers are bullied by recovery agents or coerced into unfair payment plans. Understanding the landscape of <strong>loan settlement in India</strong> is your first step towards freedom. A settlement is not just about paying less: it is about a legally documented closure that protects your future rights.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Being in debt is a financial challenge, not a moral failure. Our legal experts believe in empowering you with the knowledge needed to face financial institutions with confidence. From the bustling streets of Mumbai to the corporate hubs of Bengaluru, we serve every corner of India, ensuring that your rights are never compromised.
                  </p>
                </section>

                {/* Defining Reasonable */}
                <section id="defining-reasonable" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Defining a "Reasonable" Settlement Offer</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      Strictly speaking, the word "reasonable" is subjective in the eyes of the bank and the borrower. However, based on industry standards and RBI guidelines for non-performing assets, we can categorize offers into tiers.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Highly Favorable (20% - 35%)</h4>
                      <p className="text-gray-600">Reserved for extreme hardship cases or very old defaults (12+ months).</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Market Standard (40% - 55%)</h4>
                      <p className="text-gray-600">The average range for personal loans and credit cards in active recovery.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Conservative (60% - 75%)</h4>
                      <p className="text-gray-600">Usually offered early in the default cycle or for larger principal amounts.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A reasonable offer is one that allows you to close the debt permanently without causing further financial collapse. It should focus primarily on the principal amount, with a complete waiver of penal interest, late fees, and regular accrued interest. At AMA Legal Solutions, our goal is always to move the needle towards the 30% mark.
                  </p>
                </section>

                {/* Factors */}
                <section id="factors" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Factors That Determine Your Offer Percentage</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    The bank's recovery committee does not pull the settlement figure out of thin air. They use a calculated risk model to determine how much of the debt they can write off. The following factors play a crucial role:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 bg-gray-50 p-6 rounded-xl">
                    <li><strong>Type of Debt:</strong> Unsecured loans (credit cards, personal loans) have much higher waiver potential than secured loans because the bank has no asset to seize.</li>
                    <li><strong>Hardship Documentation:</strong> A borrower with a medical crisis or a job loss certificate is statistically more likely to receive a 70% waiver than someone who simply stopped paying.</li>
                    <li><strong>Aging of Default:</strong> As a loan moves from SMD (Special Mention Account) to NPA (Non-Performing Asset) and then to Doubtful status, the bank's willingness to settle increases.</li>
                    <li><strong>Liquid Assets:</strong> If the bank knows you have other funds, they will be less lenient. Negotiation must be done through a professional channel like a law firm to keep your privacy intact.</li>
                    <li><strong>Internal Bank Targets:</strong> Banks often have quarter-end or March-end targets to reduce NPAs, making these the best times to get a low settlement offer.</li>
                  </ul>
                </section>

                {/* Bank Trends */}
                <section id="bank-trends" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Bank-Wise Settlement Trends in India (2026)</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 border border-gray-200">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3">Bank Category</th>
                          <th scope="col" className="px-6 py-3 bg-blue-50 text-blue-900">Typical Range</th>
                          <th scope="col" className="px-6 py-3">Negotiation Potential</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">Public Sector (SBI, PNB)</td>
                          <td className="px-6 py-4 bg-blue-50 text-blue-900 font-bold">40% to 60%</td>
                          <td className="px-6 py-4">High (via OTS Schemes)</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">Private Sector (HDFC, ICICI)</td>
                          <td className="px-6 py-4 bg-blue-50 text-blue-900 font-bold">30% to 50%</td>
                          <td className="px-6 py-4">Moderate to High</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">NBFCs (Bajaj, Tata Capital)</td>
                          <td className="px-6 py-4 bg-blue-50 text-blue-900 font-bold">50% to 70%</td>
                          <td className="px-6 py-4">Moderate</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-medium text-gray-900">New-Age FinTech Apps</td>
                          <td className="px-6 py-4 bg-blue-50 text-blue-900 font-bold">60% to 80%</td>
                          <td className="px-6 py-4">Low (Aggressive)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Negotiation Guide */}
                <section id="negotiation-guide" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Guide to Proposing a Settlement</h2>
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Stop the Bleeding</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Before you can settle, you must stop making partial payments. Partial payments only serve to keep the account active in the 'Regular' category, preventing the bank from triggering settlement options. Once the account crosses 90 days of non-payment, it enters the NPA zone where negotiation begins.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Build Your Hardship Case</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Collect every scrap of evidence. If you were laid off, keep the notice. If there was a medical emergency, keep the hospital bills. A raw emotional plea is ignored: documented proof is respected. This is where legal drafting of the proposal becomes vital.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">The Initial Offer (The Anchor)</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Always start lower than your target. If you want a 50% settlement, offer 20% initially. Explain your inability but show a willingness to settle honestly. This 'anchoring' technique is a fundamental negotiation tool we use at AMA Legal Solutions.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Verify the Settlement Letter</h3>
                        <p className="text-gray-700 leading-relaxed">
                          DO NOT pay a single rupee based on a verbal promise or a WhatsApp message from a recovery agent. Wait for the official settlement letter on the bank's letterhead, containing the exact amount, the deadline, and the 'No Dues' clause.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Legal Rights */}
                <section id="legal-rights" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Legal Rights as a Borrower in India</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Many borrowers believe that because they have defaulted, they have no rights. This is fundamentally false. In India, the Reserve Bank of India (RBI) and the Supreme Court have established clear guidelines for debt recovery. You are protected by law against the following:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">No Physical Intimidation</h4>
                      <p className="text-gray-600">Recovery agents cannot touch you, enter your house without permission, or use physical force. Any such act is a criminal offense under the Indian Penal Code.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Timed Communication</h4>
                      <p className="text-gray-600">Calls can only be made between 8:00 AM and 7:00 PM. Calls at midnight or early morning are a violation of your right to privacy and the RBI Fair Practices Code.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">No Public Shaming</h4>
                      <p className="text-gray-600">Agents cannot call your neighbors, relatives, or office colleagues to announce your debt status. This is a severe breach of confidentiality and can lead to legal action against the bank.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Right to Legal Notice</h4>
                      <p className="text-gray-600">Before taking any legal action (like a case under Section 138 or the SARFAESI ACT), the bank must provide you with a formal 30-day or 60-day notice.</p>
                    </div>
                  </div>
                </section>

                {/* Harassment Protection */}
                <section id="harassment-protection" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Stop Recovery Agent Harassment Immediately</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    The primary reason people choose AMA Legal Solutions is to end the nightmare of constant calls. Once you hire us as your legal counsel, we formally notify the bank under the <strong>"Right to Representation"</strong>. This forces the bank to routing all communication through our legal team.
                  </p>
                  <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm">
                    <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Zero Tolerance Policy</h3>
                    <p className="text-gray-700 text-xs md:text-base">
                      If agents continue to call you directly, it is considered a violation of the lawyer-client privilege and the bank's own internal compliance. We take a zero-tolerance approach and file formal complaints with the Banking Ombudsman and the NHRC (if human rights are violated) if the harassment does not stop.
                    </p>
                  </div>
                </section>

                {/* CIBIL Impact */}
                <section id="cibil-impact" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Hard Truth About CIBIL and Credit Scores</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Transparency is our motto. We will not tell you that settlement has no impact. It does. When a debt is settled, the status in the CIBIL system changes to <strong>"Settled"</strong>. This is a signal to future lenders that you did not pay the full amount as promised.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    However, comparing this with <strong>"Default"</strong> or <strong>"NPA"</strong>, a settlement is far superior. A defaulted account is an open wound in your credit history that gets worse every month. A settled account is a closed chapter. Once your financial situation improves, you can start the process of 'Credit Repair' by taking a gold loan or a secured credit card to push your score back into the 750+ range within 24 months.
                  </p>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    We help you understand the 'Cost of Debt' versus the 'Cost of Credit Score'. Sometimes, saving lakhs today is more critical than maintaining a high score that you cannot benefit from anyway because of your current dues.
                  </p>
                </section>
                
                {/* OTS Importance */}
                <section id="ots-importance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why the OTS Letter is Your Only Shield</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>One Time Settlement (OTS) letter</strong> is the most important document in this process. Without it, your payment might be treated as a regular EMI, and the bank will continue to demand the remaining amount.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Correct Loan Account Number
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Final Agreed Amount
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Payment Deadline
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> 'No Further Liability' Clause
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Bank Official Signature
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Promise to Update Credit Bureaus 
                    </li>
                  </ul>
                </section>

                {/* Role of Lawyers */}
                <section id="role-of-lawyers" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why DIY Settlement is Risky</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Negotiating with a multi-billion dollar bank alone is like playing chess against a supercomputer. Their recovery managers are trained to use psychological pressure and fine-print traps. By hiring AMA Legal Solutions, you gain the following advantages:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Legal Shield</h3>
                      <p className="text-gray-600">We handle all legal notices and court summons.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Expertise</h3>
                      <p className="text-gray-600">We know the RBI rules banks try to hide from you.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Higher Savings</h3>
                      <p className="text-gray-600">Our fee is usually a small fraction of the extra waiver.</p>
                    </div>
                  </div>
                </section>

                {/* Pan India Content */}
                <section id="pan-india" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving Across All Cities and States in India</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    AMA Legal Solutions is a truly Pan-India law firm. We understand that debt issues do not have boundaries. Whether you are a farmer in rural Maharashtra, a techie in Bengaluru, or a retired teacher in Varanasi, we are here to support you.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Our legal reach covers: <strong>Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, Chhattisgarh, Goa, Gujarat, Haryana, Himachal Pradesh, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Punjab, Rajasthan, Sikkim, Tamil Nadu, Telangana, Tripura, Uttar Pradesh, Uttarakhand, West Bengal, Delhi, Chandigarh, and Jammu & Kashmir.</strong>
                  </p>
                  <div className="grid md:grid-cols-4 gap-4 bg-gray-50 p-6 rounded-xl text-sm text-gray-600 italic">
                    <div>• Mumbai</div><div>• Delhi</div><div>• Bengaluru</div><div>• Chennai</div>
                    <div>• Kolkata</div><div>• Hyderabad</div><div>• Ahmedabad</div><div>• Pune</div>
                    <div>• Surat</div><div>• Jaipur</div><div>• Lucknow</div><div>• Kanpur</div>
                    <div>• Nagpur</div><div>• Indore</div><div>• Thane</div><div>• Bhopal</div>
                    <div>• Visakhapatnam</div><div>• Patna</div><div>• Vadodara</div><div>• Ghaziabad</div>
                    <div>• Ludhiana</div><div>• Agra</div><div>• Nashik</div><div>• Faridabad</div>
                    <div>• Meerut</div><div>• Rajkot</div><div>• Varanasi</div><div>• Srinagar</div>
                    <div>• Aurangabad</div><div>• Dhanbad</div><div>• Amritsar</div><div>• Navi Mumbai</div>
                    <div>• Allahabad</div><div>• Ranchi</div><div>• Howrah</div><div>• Jabalpur</div>
                    <div>• Gwalior</div><div>• Vijayawada</div><div>• Jodhpur</div><div>• Madurai</div>
                    <div>• Raipur</div><div>• Kota</div><div>• Guwahati</div><div>• Chandigarh</div>
                    <div>• Solapur</div><div>• Hubli-Dharwad</div><div>• Bareilly</div><div>• Moradabad</div>
                    <div>• Mysore</div><div>• Gurgaon</div><div>• Aligarh</div><div>• Jalandhar</div>
                    <div>• Tiruchirappalli</div><div>• Bhubaneswar</div><div>• Salem</div><div>• Warangal</div>
                    <div>• Mira-Bhayandar</div><div>• Thiruvananthapuram</div><div>• Bhiwandi</div><div>• Guntur</div>
                    <div>• Amravati</div><div>• Bikaner</div><div>• Noida</div><div>• Jamshedpur</div>
                    <div>• Bhilai</div><div>• Cuttack</div><div>• Kochi</div><div>• Nellore</div>
                    <div>• Bhavnagar</div><div>• Dehradun</div><div>• Durgapur</div><div>• Asansol</div>
                    <div>• Rourkela</div><div>• Nanded</div><div>• Kolhapur</div><div>• Ajmer</div>
                    <div>• Akola</div><div>• Gulbarga</div><div>• Jamnagar</div><div>• Ujjain</div>
                    <div>• Loni</div><div>• Siliguri</div><div>• Jhansi</div><div>• Ulhasnagar</div>
                    <div>• Jammu</div><div>• Mangalore</div><div>• Erode</div><div>• Belgaum</div>
                    <div>• Tirunelveli</div><div>• Malegaon</div><div>• Gaya</div><div>• Jalgaon</div>
                    <div>• Udaipur</div><div>• Davanagere</div><div>• Kozhikode</div><div>• Kurnool</div>
                    <div>• Bokaro</div><div>• Bellary</div><div>• Patiala</div><div>• Agartala</div>
                    <div>• Muzaffarnagar</div><div>• Muzaffarpur</div><div>• Ahmednagar</div><div>• Mathura</div>
                    <div>• Kollam</div><div>• Kadapa</div><div>• Sambalpur</div><div>• Bilaspur</div>
                    <div>• Shahjahanpur</div><div>• Rampur</div><div>• Shimoga</div><div>• Chandrapur</div>
                    <div>• Junagadh</div><div>• Thrissur</div><div>• Alwar</div><div>• Kakinada</div>
                    <div>• Nizamabad</div><div>• Parbhani</div><div>• Tumkur</div><div>• Khammam</div>
                    <div>• Panipat</div><div>• Darbhanga</div><div>• Aizawl</div><div>• Dewas</div>
                    <div>• Tirupati</div><div>• Karnal</div><div>• Bathinda</div><div>• Jalna</div>
                    <div>• Eluru</div><div>• Purnia</div><div>• Satna</div><div>• Mau</div>
                    <div>• Sonipat</div><div>• Farrukhabad</div><div>• Sagar</div><div>• Imphal</div>
                    <div>• Ratlam</div><div>• Hapur</div><div>• Arrah</div><div>• Anantapur</div>
                    <div>• Karimnagar</div><div>• Etawah</div><div>• Bharatpur</div><div>• Begusarai</div>
                    <div>• New Delhi</div><div>• Gandhidham</div><div>• Puducherry</div><div>• Sikar</div>
                    <div>• Thoothukudi</div><div>• Rewa</div><div>• Mirzapur</div><div>• Raichur</div>
                    <div>• Pali</div><div>• Haridwar</div><div>• Sri Ganganagar</div><div>• Thanjavur</div>
                    <div>• Bulandshahr</div><div>• Singrauli</div><div>• Nadiad</div><div>• Secunderabad</div>
                    <div>• Yamunanagar</div><div>• Bidar</div><div>• Munger</div><div>• Panchkula</div>
                    <div>• Burhanpur</div><div>• Kharagpur</div><div>• Dindigul</div><div>• Gandhinagar</div>
                    <div>• Malda</div><div>• Ongole</div><div>• Deoghar</div><div>• Chapra</div>
                    <div>• Haldia</div><div>• Chittoor</div><div>• Morena</div><div>• Amroha</div>
                    <div>• Anand</div><div>• Bhind</div><div>• Bhiwani</div><div>• Ambala</div>
                    <div>• Morbi</div><div>• Fatehpur</div><div>• Raebareli</div><div>• Bahraich</div>
                    <div>• Vellore</div><div>• Guna</div><div>• Jaunpur</div><div>• Shivpuri</div>
                    <div>• Unnao</div><div>• Alappuzha</div><div>• Kottayam</div><div>• Shimla</div>
                    <div>• Port Blair</div><div>• Panaji</div><div>• Silvassa</div><div>• Gangtok</div>
                    <div>• Shillong</div><div>• Kohima</div><div>• Itanagar</div><div>• Dispur</div>
                  </div>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    From the most remote villages to Tier 1 metros, our digital legal consultation model ensures you are never alone in your fight for debt relief. We use various regional languages to ensure clear communication and comfort for all our clients.
                  </p>
                </section>

                {/* Testimonials */}
                <section id="case-studies" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was struggling with 15 lakhs of debt from a failed business. The recovery agents were calling my aged parents. AMA Legal Solutions took over my case, stopped the harassment within 48 hours, and settled the entire debt for 6.2 lakhs. They saved my dignity."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Rathore</p>
                          <p className="text-sm text-gray-500">Ahmedabad, Gujarat</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Credit card debt is a bottomless pit. I was paying the minimum interest for 3 years without the principal moving. AMA helped me close the account permanently with a 70% waiver. The process was transparent and fast."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">K</div>
                        <div>
                          <p className="font-bold text-gray-900">Kavita Reddy</p>
                          <p className="text-sm text-gray-500">Chennai, Tamil Nadu</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
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
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Don't Let Debt Control Your Life</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Take the first step towards a debt-free future. Our expert lawyers are ready to fight for your financial freedom.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book Your Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70">
                      Confidential • Legal • Effective
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior loan settlement lawyers today.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Call +91-8700343611
                  </a>
                  <Link 
                    href="/contact"
                    className="block w-full border border-gray-300 text-gray-700 text-center py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Book Consultation
                  </Link>
                </div>

                {/* Related Pages */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Loan Settlement Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/what-is-ots" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Everything About OTS
                      </Link>
                    </li>
                    <li>
                      <Link href="/loan-recovery-agent-harassment-complaint-online" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Stop Agent Harassment
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/loan-settlement/hdfc-bank" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> HDFC Bank Settlement
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/loan-settlement/sbi-bank" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> SBI OTS Schemes 2026
                      </Link>
                    </li>
                    <li>
                      <Link href="/loan-settlement-amount-calculator" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Settlement Offer Calculator
                      </Link>
                    </li>
                    <li>
                      <Link href="/expert-panel-loan-settlement-reviews" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Customer Success Reviews
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
