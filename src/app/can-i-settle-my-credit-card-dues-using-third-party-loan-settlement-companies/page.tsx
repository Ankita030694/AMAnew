import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import GenericStatesGrid from "@/components/GenericStatesGrid";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Can I settle my credit card dues using third party loan settlement companies?",
    answer: "Yes, you can settle your credit card dues using third-party loan settlement companies. These companies act as intermediaries between you and the bank to negotiate a reduced payout amount (One-Time Settlement or OTS). However, it is highly recommended to choose a legal firm over a mere settlement agency to ensure you are protected from harassment and that the settlement is legally recorded without future liabilities."
  },
  {
    question: "Is it legal to use a third-party company for credit card settlement in India?",
    answer: "Yes, it is entirely legal. The RBI (Reserve Bank of India) recognizes the process of compromise settlements. Third-party firms, especially legal ones like AMA Legal Solutions, represent your case to the bank based on genuine financial hardship. There are no laws preventing a borrower from being represented by legal counsel or a financial advisor during these negotiations."
  },
  {
    question: "How does the third-party credit card settlement process work?",
    answer: "The process usually involves four steps: 1. Financial assessment of your debt. 2. Legal protection where the firm notifies the bank of their representation. 3. Negotiation where the firm argues for a waiver of interest and a reduction in principal. 4. Closure where the bank issues a formal settlement letter and you pay the negotiated amount."
  },
  {
    question: "Will using a settlement company stop recovery agent harassment?",
    answer: "A reputable legal firm will send a formal 'Letter of Representation' to your bank. According to RBI guidelines, once a bank is notified that a legal representative is handling the matter, they should direct communications through that representative. This significantly reduces or entirely stops direct harassment from recovery agents at your home or workplace."
  },
  {
    question: "What is the typical reduction in debt I can expect?",
    answer: "While it varies by bank and your specific financial situation, credit card settlements often result in a 30% to 70% reduction of the total outstanding amount. Banks are generally more flexible with credit card debt because it is unsecured, meaning they have no collateral to seize, making a settlement more attractive than a complete write-off."
  },
  {
    question: "How will a credit card settlement affect my CIBIL score?",
    answer: "A settlement will negatively impact your CIBIL score. The account will be marked as 'Settled' rather than 'Closed' or 'Paid in Full.' This can drop your score by 75 to 100 points. However, this is often a better option than a 'Default' status, and your score can be gradually rebuilt over 18 to 24 months through disciplined financial behavior."
  },
  {
    question: "Are there any tax implications to credit card settlement?",
    answer: "Yes, under Indian tax laws, the amount of debt waived by the bank can sometimes be considered 'taxable income' in the hands of the borrower. It is important to consult with a tax expert or your settlement firm to understand if you will receive a 1099-C equivalent or if you need to declare the waived amount as income."
  },
  {
    question: "What are the red flags of a fraudulent settlement company?",
    answer: "Be wary of companies that: 1. Demand a large upfront fee before any negotiation. 2. Guarantee a specific percentage of reduction without talking to the bank. 3. Tell you to stop all communication without a legal strategy. 4. Claim they can 'delete' the settled tag from your CIBIL report magically."
  },
  {
    question: "Can I settle my credit card dues on my own without a third party?",
    answer: "Yes, you can attempt to negotiate directly with the bank. However, banks often use high-pressure tactics and complex legal jargon that individuals might find overwhelming. Third-party legal firms bring expertise in RBI guidelines and bank policies, often securing a much lower settlement amount than an individual could alone."
  },
  {
    question: "Does AMA Legal Solutions help with credit card settlement?",
    answer: "Absolutely. AMA Legal Solutions specializes in credit card and loan settlement. We provide a two-pronged approach: legal protection from harassment and expert negotiation to reduce your total debt burden ethically and legally. We ensure that you get a valid No Dues Certificate and that the bank updates the status correctly."
  }
];

const reviews = [
    {
      author: "Vikram Rathore",
      position: "Business Owner, Mumbai",
      body: "I was skeptical about third-party companies, but AMA Legal Solutions changed my mind. They settled my 6 Lakh credit card debt for 2.2 Lakhs and stopped the recovery agents from visiting my house. Their legal approach is unmatched.",
      rating: 5
    },
    {
      author: "Ananya Sharma",
      position: "Software Engineer, Bengaluru",
      body: "Excellent service. The legal approach is much better than typical agents. They explained the RBI guidelines clearly and got my NOC within 4 months. I am finally debt-free!",
      rating: 5
    },
    {
      author: "Rajesh Khanna",
      position: "Retailer, Delhi",
      body: "I was drowning in credit card interest. AMA negotiated a one-time settlement that saved me nearly 4 lakhs. Most importantly, the constant threatening calls stopped the moment they took over.",
      rating: 5
    },
    {
      author: "Sneha Patel",
      position: "Freelancer, Ahmedabad",
      body: "Highly professional. They handled 3 different credit cards from different banks simultaneously. The consolidated approach was logical and very effective. Five stars for the legal team.",
      rating: 5
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
      "name": "Services",
      "item": "https://www.amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Credit Card Settlement Companies",
      "item": "https://www.amalegalsolutions.com/can-i-settle-my-credit-card-dues-using-third-party-loan-settlement-companies"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Can I Settle My Credit Card Dues Using Third Party Loan Settlement Companies? A Comprehensive 2026 Guide",
  "description": "Exhaustive guide on using third-party loan settlement companies for credit card debt in India. Learn about the process, legalities, RBI guidelines, and how to stop harassment.",
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
  "datePublished": "2024-03-19",
  "dateModified": "2024-03-19"
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
  "name": "Credit Card Settlement Services",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Professional support for settling credit card dues through third-party legal negotiation.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1120"
  },
  "review": reviews.map(r => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": r.rating.toString()
    },
    "author": {
      "@type": "Person",
      "name": r.author
    },
    "reviewBody": r.body
  }))
};

export const metadata = {
  title: "Can I Settle My Credit Card Dues Using Third Party Loan Settlement Companies?",
  description: "Learn if you can settle credit card dues using third party loan settlement companies in India. Explore RBI guidelines, pros and cons, and stop harassment today.",
  keywords: [
    "can i settle my credit card dues using third party loan settlement companies",
    "credit card settlement companies india",
    "loan settlement companies",
    "debt settlement services india",
    "RBI credit card settlement rules",
    "stopping recovery agent harassment",
    "AMA Legal Solutions credit card settlement",
    "CIBIL score after settlement",
    "one time settlement credit card",
    "third party debt negotiation"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/can-i-settle-my-credit-card-dues-using-third-party-loan-settlement-companies',
  },
};

export default function CreditCardSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "the-rising-trend", title: "Why Third-Party?" },
    { id: "how-it-works", title: "The Process" },
    { id: "the-pros-and-cons", title: "Pros & Cons" },
    { id: "review-snippets", title: "Client Success" },
    { id: "cibil-impact", title: "CIBIL Impact" },
    { id: "bank-secrets", title: "Bank Secrets" },
    { id: "legal-representation", title: "Legal Rights" },
    { id: "rbi-guidelines", title: "RBI Guidelines" },
    { id: "avoiding-scams", title: "Avoid Scams" },
    { id: "legal-vs-agency", title: "Legal vs. Agency" },
    { id: "success-stories", title: "Case Studies" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Credit Card Settlement Dues", href: "/can-i-settle-my-credit-card-dues-using-third-party-loan-settlement-companies" },
  ];

  const banks = [
    { name: "SBI", href: "/services/loan-settlement/sbi-bank" },
    { name: "HDFC", href: "/services/loan-settlement/hdfc-bank" },
    { name: "ICICI", href: "/services/loan-settlement/icici-bank" },
    { name: "Kotak Mahindra", href: "/services/loan-settlement/kotak-mahindra" },
    { name: "IDFC", href: "/services/loan-settlement/idfc-bank" },
    { name: "Yes Bank", href: "/services/loan-settlement/yes-bank" },
    { name: "Bajaj Finserv", href: "/services/loan-settlement/bajaj-finserv" },
    { name: "Axis Bank", href: "/services/loan-settlement/axis-bank" },
    { name: "Bank of Baroda", href: "/services/loan-settlement/bank-of-baroda" },
    { name: "Hero Fincorp", href: "/services/loan-settlement/hero-fincorp" },
    { name: "Aditya Birla", href: "/services/loan-settlement/aditya-birla" },
    { name: "Poonawalla Fincorp", href: "/services/loan-settlement/poonawalla-fincorp" },
    { name: "Tata Capital", href: "/services/loan-settlement/tata-capital" },
    { name: "Federal Bank", href: "/services/loan-settlement/federal-bank" },
    { name: "PayU Finance", href: "/services/loan-settlement/payu-finance" },
    { name: "KrazyBee", href: "/services/loan-settlement/krazybee" },
    { name: "AU Small Finance", href: "/services/loan-settlement/au-small-finance" },
    { name: "Northern Arc", href: "/services/loan-settlement/northern-arc" },
    { name: "DMI Finance", href: "/services/loan-settlement/dmi-finance" },
    { name: "Piramal Finance", href: "/services/loan-settlement/piramal-finance" },
    { name: "DBS Bank", href: "/services/loan-settlement/dbs-bank" },
    { name: "South Indian Bank", href: "/services/loan-settlement/south-indian-bank" },
    { name: "Stashfin", href: "/services/loan-settlement/stashfin" },
    { name: "L&T Finance", href: "/services/loan-settlement/l-and-t-finance" },
    { name: "American Express", href: "/services/loan-settlement/american-express" },
    { name: "Standard Chartered", href: "/services/loan-settlement/standard-chartered" },
    { name: "Moneyview", href: "/services/loan-settlement/moneyview" },
    { name: "IndusInd Bank", href: "/services/loan-settlement/indusind-bank" },
    { name: "SMFG India Credit", href: "/services/loan-settlement/smfg-india-credit" },
    { name: "Fibe", href: "/services/loan-settlement/fibe" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center z-0 opacity-40"></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Can I Settle My <span className="text-[#D2A02A]">Credit Card Dues</span> Using Third Party Companies?
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
                Discover how professional debt negotiation can help you legally reduce your credit card burden by up to 70%, stop aggressive recovery calls, and reclaim your financial life.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg uppercase tracking-widest">
                Get a Free Financial Evaluation
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
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Navigating the Complexity of Credit Card Debt Settlement in India</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    If you are reading this, you are likely feeling the immense weight of compound interest, late fees, and the persistent ringing of your telephone. Credit card debt is one of the most toxic forms of financial burden in India, with interest rates often soaring above 40 percent annually. When you reach a point where you are only paying the "minimum due" while your balance continues to explode, you are in what financial experts call the "debt trap."
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The question, <strong>"Can I settle my credit card dues using third party loan settlement companies?"</strong> is becoming increasingly common as borrowers search for a way out. The short answer is yes, you can. However, the path is filled with both life-saving opportunities and potential pitfalls. This exhaustive guide will walk you through every nuance of the third party settlement landscape in India.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we have witnessed thousands of honest individuals struggling with credit card debt. We believe that while debt is a financial obligation, it should not cost you your mental health, your reputation, or your future. Through this guide, we aim to empower you with the knowledge to distinguish between genuine legal assistance and predatory settlement agencies.
                  </p>
                </section>

                {/* The Rising Trend */}
                <section id="the-rising-trend" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Rise of Third-Party Settlement</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    In the last five years, India has seen a massive surge in the popularity of debt settlement companies. This explosion can be attributed to several factors including the aggressive push for credit cards by banks, the economic shocks of the pandemic, and the rise of digital lending platforms. Unlike a decade ago when the only option for a defaulter was to hide or face court, today, a whole ecosystem of "Debt relief" providers has emerged.
                  </p>
                  <div className="bg-gray-50 border-l-4 border-[#D2A02A] p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Why Borrowers Choose Third-Parties:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700">
                        <li><strong>The Power Asymmetry:</strong> Banks have massive legal departments. An individual feels powerless against them.</li>
                        <li><strong>Harassment Shielding:</strong> Third-party firms act as a buffer against aggressive recovery calls.</li>
                        <li><strong>Negotiation Expertise:</strong> Expert negotiators know how to get the maximum discount based on bank policies.</li>
                    </ul>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Third-party settlement companies essentially provide a "Level playing field." They understand the internal "haircut" (the percentage a bank is willing to lose) that each bank is authorized to accept. While an individual might be offered a 10% discount, a professional firm can often secure a 60% waiver because they know which buttons to push within the bank's recovery department.
                  </p>
                </section>

                {/* How the Process Works */}
                <section id="how-it-works" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Structured Settlement Journey</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-8 text-gray-700">
                    Settling credit card dues with professional help is not a chaotic process. It is a structured legal journey divided into four distinct phases:
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Financial Forensics & Hardship Portfolio</h3>
                        <p className="text-gray-700 leading-relaxed">
                          The first step is building a 'Hardship Case'. We analyze your income, medical bills, or job loss documents to prove to the bank that you genuinely cannot pay the full amount. This creates the groundwork for negotiation. We don't just present numbers; we present a narrative that fits the bank's criteria for a 'genuine default.'
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Representation & Notification</h3>
                        <p className="text-gray-700 leading-relaxed">
                          A formal notification is sent to the bank. This letter states that you are now legally represented. Under RBI's fair collection practices, this often forces the bank to shift from aggressive recovery calls to professional negotiation. This is where the harassment typically stops.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Expert Negotiation Rounds</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our experts engage with the bank's recovery managers and credit officers. We argue for the waiver of penal interest and late fees, followed by a reduction in the principal amount itself. Because we handle hundreds of cases, we know the "floor price" for each bank.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Formal Closure & NOC Validation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Once an agreement is reached, we ensure the bank issues a formal "Settlement Letter" on their letterhead. We review this document to ensure it's legally binding. After payment, we follow up for the No Dues Certificate to ensure the account is permanently closed in the bank's records.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Pros and Cons */}
                <section id="the-pros-and-cons" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Pros and Cons of Using Third-Party Firms</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 text-left border-b border-gray-200 text-green-700 w-1/2">Advantages (Pros)</th>
                          <th className="p-4 text-left border-b border-gray-200 text-red-700 w-1/2">Disadvantages (Cons)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 align-top">
                            <ul className="list-disc pl-4 space-y-2 text-gray-700">
                              <li><strong>Debt Reduction:</strong> Pay as little as 30% of your total dues.</li>
                              <li><strong>Stop Harassment:</strong> Legal representation stops recovery agent home visits.</li>
                              <li><strong>Legal Buffer:</strong> Professionals handle all tough conversations.</li>
                              <li><strong>OTS Guidance:</strong> Assistance in getting a valid settlement letter.</li>
                              <li><strong>Mental Peace:</strong> Shift the burden of negotiation to experts.</li>
                            </ul>
                          </td>
                          <td className="p-4 align-top bg-gray-50">
                            <ul className="list-disc pl-4 space-y-2 text-gray-700">
                              <li><strong>CIBIL Damage:</strong> Score marked as "Settled" for 7 years.</li>
                              <li><strong>Future Credit:</strong> Hard to get new loans for 24-36 months.</li>
                              <li><strong>Service Fees:</strong> You have to pay professional fees.</li>
                              <li><strong>Tax implications:</strong> Waived principal might be taxable in some cases.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Review Snippets Section */}
                <section id="review-snippets" className="scroll-mt-32">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 text-center tracking-tight">What Our Clients Say</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {reviews.map((review, i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-[30px] border border-gray-100 relative group hover:shadow-xl transition-all shadow-sm">
                                <div className="text-5xl text-[#D2A02A] absolute top-6 right-8 opacity-20 font-serif leading-none italic group-hover:scale-110 transition-transform">"</div>
                                <div className="flex gap-1 mb-6">
                                    {[...Array(review.rating)].map((_, index) => (
                                        <span key={index} className="text-[#D2A02A] text-xl">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-700 italic mb-8 relative z-10 text-lg leading-relaxed">
                                    {review.body}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#1a202c] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md border-2 border-[#D2A02A]">
                                        {review.author[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{review.author}</p>
                                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{review.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CIBIL Impact */}
                <section id="cibil-impact" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding the CIBIL Score Ripple Effect</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Transparency is vital to your long-term recovery. When you settle a loan, the bank reports the status as "Settled" to credit bureaus like CIBIL. This is not the same as "Closed." In "Closed" status, the entire amount was paid. In "Settled," only a partial amount was paid to close the account.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 border border-gray-200">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3">CIBIL Status</th>
                          <th scope="col" className="px-6 py-3 bg-blue-50 text-blue-900 font-bold">Settled</th>
                          <th scope="col" className="px-6 py-3">Written Off</th>
                          <th scope="col" className="px-6 py-3 font-bold">Closed</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-medium text-gray-900">Score Drop</td>
                          <td className="px-6 py-4 bg-blue-50 text-blue-900">Moderate (-75 to -100)</td>
                          <td className="px-6 py-4 text-red-600 font-bold">Extreme (-150+)</td>
                          <td className="px-6 py-4 text-green-600 font-bold">No Drop (+ Improvement)</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-medium text-gray-900">Recovery Time</td>
                          <td className="px-6 py-4 bg-blue-50 text-blue-900">18 - 24 Months</td>
                          <td className="px-6 py-4 text-red-600">3 - 5 Years</td>
                          <td className="px-6 py-4 text-green-600">Immediate</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mt-6 text-gray-700 italic">
                    Note: A 'Settled' tag remains on your report for seven years. However, its negative impact on your ability to get a fresh loan diminishes significantly after the first two years if you demonstrate perfect repayment on other smaller credit facilities (like a secured credit card).
                  </p>
                </section>

                {/* Bank Secrets Section */}
                <section id="bank-secrets" className="scroll-mt-32">
                    <h2 className="text-3xl font-black text-gray-900 mb-8 tracking-tight">Bank Secrets: Why Settlement is Attractive to Lenders</h2>
                    <p className="text-lg leading-relaxed mb-8 text-gray-700">
                        Banks are not in the business of charity, but they are in the business of balance sheet management. When a credit card debt remains unpaid for more than 90 days, it is classified as a Non-Performing Asset (NPA). According to RBI norms, the bank must set aside a portion of its profits (provisioning) to cover this risk.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-[#fff9e6] rounded-2xl border border-[#ffeeba]">
                            <h4 className="font-bold mb-3 text-[#856404]">NPAs & Provisioning</h4>
                            <p className="text-xs text-[#856404] leading-relaxed">Banks hate NPAs because they hurt their stock prices and require them to lock up capital that could otherwise be lent out at a profit.</p>
                        </div>
                        <div className="p-6 bg-[#e7f3ff] rounded-2xl border border-[#b8daff]">
                            <h4 className="font-bold mb-3 text-[#004085]">Cost of Recovery</h4>
                            <p className="text-xs text-[#004085] leading-relaxed">Filing a case in court costs the bank lawyer fees and years of delay. Often, the cost of recovery exceeds the debt amount itself.</p>
                        </div>
                        <div className="p-6 bg-[#f8f9fa] rounded-2xl border border-[#dee2e6]">
                            <h4 className="font-bold mb-3 text-gray-900">Quarterly Targets</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">Recovery managers have stiff quarterly targets. In March and September, they are often more willing to settle for a lower amount to hit their numbers.</p>
                        </div>
                    </div>
                </section>

                {/* Legal Representation */}
                <section id="legal-representation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center text-sm">⚖️</span>
                    Your Legal Rights Under Scrutiny
                  </h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    One of the biggest advantages of using a third-party legal firm like AMA is the enforcement of your statutory rights. These include:
                  </p>
                  
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold">✓</div>
                        <div>
                            <p className="font-bold text-gray-900">Right to Dignity (Fair Collection Practices)</p>
                            <p className="text-gray-600 text-sm">Banks and their agents cannot use abusive language, physical threats, or call you at odd hours. They cannot make your debt public.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold">✓</div>
                        <div>
                            <p className="font-bold text-gray-900">Right to Representation</p>
                            <p className="text-gray-600 text-sm">Once a lawyer notifies the bank, the bank should ideally stop direct contact and route all communication through the lawyer.</p>
                        </div>
                    </li>
                    <li className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold">✓</div>
                        <div>
                            <p className="font-bold text-gray-900">Defense Against Section 138</p>
                            <p className="text-gray-600 text-sm">If a bank files a cheque bounce case, a legal firm can represent you in court to explain the financial hardship and negotiate a settlement within the court process.</p>
                        </div>
                    </li>
                  </ul>
                </section>

                {/* RBI Guidelines */}
                <section id="rbi-guidelines" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The RBI Master Circular on Collection</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    The Reserve Bank of India (RBI) has very clear guidelines regarding debt collection. Ignorance of these rules allows banks to bully borrowers. Key points include:
                  </p>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-inner italic font-light text-gray-650 leading-loose">
                      "Recovery agents shall not resort to intimidation or harassment of any kind, either verbal or physical, against any person in their debt collection efforts, including acts intended to humiliate publicly or intrude upon the privacy of the debtors' family members, referees and friends, making threatening and anonymous calls or making false and misleading representations." 
                      <span className="block mt-4 font-bold text-xs uppercase tracking-widest text-[#D2A02A]">— RBI Master Circular</span>
                  </div>
                </section>

                {/* Avoiding Scams */}
                <section id="avoiding-scams" className="scroll-mt-32">
                    <div className="bg-red-50 p-6 md:p-12 rounded-[40px] border-2 border-red-100">
                        <h2 className="text-xl md:text-3xl font-black text-red-900 mb-6">Warning: Debt Relief Scams are Rising</h2>
                        <p className="text-sm md:text-lg text-red-800 mb-8">
                            Be wary of any company that makes the following promises. These are hallmarks of settlement fraud:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex gap-3 text-red-700 font-bold items-center">
                                <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-black">!</span>
                                Guaranteeing a 90% Waiver
                            </div>
                            <div className="flex gap-3 text-red-700 font-bold items-center">
                                <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-black">!</span>
                                Deleting 'Settled' Tag from CIBIL
                            </div>
                            <div className="flex gap-3 text-red-700 font-bold items-center">
                                <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-black">!</span>
                                Upfront Fees for 'Enrollment'
                            </div>
                            <div className="flex gap-3 text-red-700 font-bold items-center">
                                <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-black">!</span>
                                Asking you to ignore Court Summons
                            </div>
                        </div>
                    </div>
                </section>

                {/* Legal vs Agency */}
                <section id="legal-vs-agency" className="scroll-mt-32">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">The Choice: Why Legal Firms Win Over Agencies</h2>
                    <div className="grid md:grid-cols-2 gap-8 border-2 border-gray-50 rounded-[40px] overflow-hidden">
                        <div className="p-10 bg-gray-50">
                            <h4 className="text-xl font-black text-gray-500 mb-6 uppercase tracking-widest">Settlement Agencies</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li>✖ Purely transactional approach.</li>
                                <li>✖ No power to stop legal notices.</li>
                                <li>✖ Cannot represent you in Court/Lok Adalat.</li>
                                <li>✖ Rely on 'asking' the bank for a favor.</li>
                            </ul>
                        </div>
                        <div className="p-10 bg-white relative">
                            <div className="absolute top-4 right-6 text-[10px] font-black uppercase text-[#D2A02A] bg-amber-50 px-2 py-1 rounded">Recommended Path</div>
                            <h4 className="text-xl font-black text-[#D2A02A] mb-6 uppercase tracking-widest">Legal Firms (AMA)</h4>
                            <ul className="space-y-4 text-sm text-gray-900 font-medium">
                                <li>✓ Whole-of-case legal protection.</li>
                                <li>✓ Authority to stop illegal harassment.</li>
                                <li>✓ Can represent and defend in Court.</li>
                                <li>✓ Leverage policy & law to 'demand' settlement.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Case Studies Expanded */}
                <section id="success-stories" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-10 leading-tight">Deep Dive: Real-Life Case Scenarios</h2>
                  <div className="space-y-10">
                    <div className="p-10 rounded-[40px] border-2 border-dashed border-gray-200 bg-gray-50 hover:bg-white hover:border-[#D2A02A]/30 transition-all duration-500">
                      <h4 className="text-2xl font-bold mb-4 text-[#D2A02A] flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-[#D2A02A] text-white flex items-center justify-center text-sm">A</span>
                          The 4-Card Consolidation Strategy
                      </h4>
                      <p className="text-gray-700 mb-6 leading-relaxed italic">
                        "A tech professional in Pune had accumulated 15 Lakhs in credit card debt across four banks (SBI, HDFC, ICICI, Amex). After a job loss, the interest alone was growing by 50,000 every month. Banks were sending multiple legal notices. AMA Legal Solutions took over all four accounts. By consolidating the hardship evidence and leveraging a 'lump sum availability' against a collective waiver, we settled the entire 15 Lakhs for just 5.2 Lakhs. We ensured that all four banks provided separate NOCs and updated their records simultaneously."
                      </p>
                    </div>
                    <div className="p-10 rounded-[40px] border-2 border-dashed border-gray-200 bg-gray-50 hover:bg-white hover:border-[#D2A02A]/30 transition-all duration-500">
                      <h4 className="text-2xl font-bold mb-4 text-[#D2A02A] flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-[#D2A02A] text-white flex items-center justify-center text-sm">B</span>
                          The 'Illegal Harassment' Counter-Defense
                      </h4>
                      <p className="text-gray-700 mb-6 leading-relaxed italic">
                        "A teacher in Delhi was being harassed by a private bank's recovery agents. They visited her school and called her principal. This was a direct violation of RBI norms. Instead of just asking for a settlement, AMA filed a formal complaint with the Banking Ombudsman and sent a strong legal notice to the bank's MD office. The bank, fearing regulatory action, immediately stopped the harassment and offered to settle the 5 Lakh debt for only 1.5 Lakhs as a 'Goodwill Gesture' to close the controversy."
                      </p>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32 pt-12 border-t-2 border-gray-100">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12">Frequently Asked Questions</h2>
                  <div className="space-y-10">
                    {faqs.map((faq, index) => (
                      <div key={index} className="group p-8 rounded-3xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-start">
                          <span className="text-[#D2A02A] mr-4 text-3xl font-black">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 text-lg leading-loose pl-12 border-l-4 border-[#D2A02A]">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Don't Let Credit Card Debt Define Your Future</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                        Every day you wait is a day the compound interest grows. Take control of your financial destiny today with the help of India's most trusted legal experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto uppercase tracking-widest">
                          Book a Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto underline">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-[#1a202c] p-8 rounded-3xl shadow-2xl border border-gray-800 text-white relative overflow-hidden">
                  <h3 className="text-xl font-bold mb-4 relative z-10">Facing Harassment?</h3>
                  <p className="text-gray-400 mb-6 text-sm relative z-10">
                    If you have received a Lok Adalat notice, a Section 138 notice, or a summons from the court, our senior lawyers are ready to represent you.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-bold hover:bg-[#b88a22] transition-colors mb-4 relative z-10 shadow-lg text-sm"
                  >
                    Immediate Legal Support
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full border-2 border-white/20 text-white text-center py-3 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-all relative z-10 text-sm"
                  >
                    Consult a Lawyer
                  </Link>
                </div>

                {/* Related Links */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Resources</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/personal-loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Personal Loan Help
                      </Link>
                    </li>
                    <li>
                      <Link href="/credit-card-settlement-process-india" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Settlement Process
                      </Link>
                    </li>
                    <li>
                      <Link href="/loan-recovery-agent-harassment-complaint-online" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Stop Agent Harassment
                      </Link>
                    </li>
                    <li>
                      <Link href="/how-long-does-a-settled-tag-stay-on-my-report" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> CIBIL Impact Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/what-are-the-income-tax-implications-of-a-settled-debt-amount" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Tax Implications
                      </Link>
                    </li>
                  </ul>
                  
                  {/* App Store Links */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-xs font-black mb-3 text-[#D2A02A] uppercase tracking-widest">Global Legal Power</p>
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
                          className="w-full h-auto max-w-[130px]"
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
                          className="w-full h-auto max-w-[130px]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          {/* Banks Grid */}
          <div className="mt-16">
            <section className="my-10">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                We settle credit card dues from major banks
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {banks.map((bank, index) => (
                    <Link 
                        key={index}
                        href={bank.href}
                        className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                    >
                        <span className="text-gray-800 font-medium text-sm leading-tight block">{bank.name}</span>
                    </Link>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-16">
            <GenericStatesGrid 
              serviceName="Loan Settlement" 
              servicePath="loan-settlement" 
            />
          </div>
        </div>
      </div>
    </>
  );
}
