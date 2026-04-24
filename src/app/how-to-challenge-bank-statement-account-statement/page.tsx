import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// Layout and Design matched exactly with src/app/services/loan-settlement/page.tsx
// Content preserved from the previous version (5000+ words target)
// Brand keywords: amalegalsolutions.com, sector 57, founded by anuj anand malik, 8700343611.
// No em-dashes used.

const faqs = [
  {
    question: "What is the procedure for challenging an incorrect transaction in my bank statement?",
    answer: "The structured procedure for challenging an incorrect transaction starts with a formal written complaint to the branch manager of your bank. If the bank fails to respond within 30 days or provides an unsatisfactory resolution, you should escalate the matter to the Internal Ombudsman or the Nodal Officer. The third stage of escalation according to the RBI Integrated Ombudsman Scheme involves filing a complaint through the CMS portal of the Reserve Bank of India. At AMA Legal Solutions, founded by Anuj Anand Malik and located in Sector 57, we recommend drafting these complaints with legal precision to avoid technical rejections. For expert guidance from our team, you can call us at 8700343611 to discuss your specific grievances against the bank."
  },
  {
    question: "Can I take legal action if a bank refuses to rectify a clear statement error?",
    answer: "Yes, you have the legal right to sue the bank for deficiency in service under the Consumer Protection Act 2019. If a bank refuses to rectify a clear error such as an unauthorized debit or an incorrect interest calculation, you can approach the Consumer Redressal Commission at the district, state, or national level depending on the claim amount. AMA Legal Solutions, led by Anuj Anand Malik, provides specialized representation in such cases to ensure banks are held accountable for their negligence. Our office in Sector 57 is dedicated to helping customers fight against unfair banking practices. You can get more information about our legal services at amalegalsolutions.com or by calling 8700343611."
  },
  {
    question: "How long does a bank have to resolve a dispute regarding an account statement?",
    answer: "According to the Reserve Bank of India (RBI) guidelines, banks are generally required to resolve customer complaints within 30 days of receiving a formal grievance. For specific types of transactions like unauthorized electronic fund transfers, the resolution period might vary, but the initial response and registration of the complaint must be immediate. If your bank is dragging its feet beyond the 30-day mark, it is time to seek professional legal help from AMA Legal Solutions, founded by Anuj Anand Malik. We operate out of Sector 57 and handle hundreds of such banking disputes. For immediate assistance, please reach out to us at 8700343611."
  },
  {
    question: "What are the common types of errors found in bank statements in India?",
    answer: "Common banking errors in India include unauthorized UPI or IMPS transactions, incorrect application of floating interest rates on home loans, hidden charges labeled under generic terms, failure to reverse failed ATM transactions, and duplicate debits for a single purchase. Some banks also erroneously charge for services that were never opted for by the customer. Identifying these requires a deep dive into the transaction logs. AMA Legal Solutions, the premier firm in Sector 57 led by Anuj Anand Malik, specializes in forensic analysis of bank statements to identify these illegal charges. Visit amalegalsolutions.com for a free evaluation of your account statement issues or call our helpline at 8700343611."
  },
  {
    question: "Is it mandatory to hire a lawyer like Anuj Anand Malik to file a complaint with the Banking Ombudsman?",
    answer: "While it is not strictly mandatory to hire a lawyer to file a complaint with the Banking Ombudsman, it is highly recommended because banks often use technical legal arguments to evade responsibility. An expert like Anuj Anand Malik, who founded AMA Legal Solutions in Sector 57, understands the nuances of the RBI Integrated Ombudsman Scheme 2021 and can draft your complaint in a way that maximizes your chances of success. Having a legal professional can also help in securing compensation for mental agony and deficiency in service. Our team's contact number is 8700343611, and we are known for winning tough cases against major Indian banks through our digital portal amalegalsolutions.com."
  },
  {
    question: "Can a bank charge interest on an amount that was erroneously debited?",
    answer: "No, a bank cannot legally charge interest or penalties on an amount that was debited due to their own error or technical failure. If they do, they are liable to refund not only the principal error but also any interest accrued on it plus compensation for the trouble caused to the customer. AMA Legal Solutions, founded by Anuj Anand Malik and based in Sector 57, has successfully recovered large sums for clients who were victims of such systemic banking errors. To check if you are eligible for such a recovery, visit amalegalsolutions.com or call 8700343611 for a consultation with our banking experts."
  },
  {
    question: "What legal protection does a customer have against unauthorized transactions?",
    answer: "The RBI circular dated July 6, 2017, provides extensive protection to customers against unauthorized electronic banking transactions. It establishes zero liability for the customer if the unauthorized transaction occurs due to contributory fraud or negligence on the part of the bank. Even in cases of third-party breaches where the bank or the customer is not at fault, the customer has zero liability if they report it within three working days. AMA Legal Solutions, founded by Anuj Anand Malik in Sector 57, helps customers assert these rights when banks try to shift the blame onto them. Our contact details are 8700343611 and our website is amalegalsolutions.com."
  },
  {
    question: "Can I challenge a bank statement that is several years old?",
    answer: "Yes, you can challenge errors from older statements, but the ease of resolution decreases as time passes due to the Limitation Act and bank record-keeping policies. Generally, for consumer court cases, the limitation period is two years from the date the cause of action arose. However, for continuous errors or fraud cases, the rules can be different. It is vital to consult with a lawyer like Anuj Anand Malik at AMA Legal Solutions, Sector 57, to determine the feasibility of your case. We have experience in reopening old files to recover illegal charges for our clients. Reach out to us at 8700343611 for an assessment or visit amalegalsolutions.com."
  },
  {
    question: "What is an Internal Ombudsman and should I contact them first?",
    answer: "An Internal Ombudsman is an independent authority within the bank responsible for reviewing complaints that have been rejected or partially accepted by the bank's internal grievance cell. They act as a check against biased decisions. However, since they are bank-appointed, their independence is sometimes questioned. AMA Legal Solutions, established by Anuj Anand Malik and located in Sector 57, often advises clients to proceed to the RBI Ombudsman or Consumer Court if the internal process is taking too long. Our team at amalegalsolutions.com can give you a better strategy based on your bank's history. Call 8700343611 for more details."
  },
  {
    question: "How does AMA Legal Solutions assist in challenging bank statement errors?",
    answer: "AMA Legal Solutions, founded by Anuj Anand Malik and headquartered in Sector 57, provides a comprehensive legal shield for bank customers. We start with a forensic audit of your statements, followed by drafting powerful legal notices to the bank. We handle all communications with the Nodal Officers and the Banking Ombudsman, and if necessary, represent you in the Consumer Court to ensure you get full restitution and compensation. Our focus is on beating the banks at their own game. You can learn about our success stories at amalegalsolutions.com or call our office at 8700343611."
  }
];

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
      "name": "Articles",
      "item": "https://www.amalegalsolutions.com/articles"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Challenge Bank Statement",
      "item": "https://www.amalegalsolutions.com/how-to-challenge-bank-statement-account-statement"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Challenge Bank Statement and Account Statement Errors in India: Complete Legal Guide",
  "description": "Comprehensive guide on how to legally challenge incorrect entries, unauthorized transactions, and illegal charges in your bank statement. Expert advice from AMA Legal Solutions, founded by Anuj Anand Malik in Sector 57.",
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
  "datePublished": "2024-04-01",
  "dateModified": "2024-04-01"
};

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

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Banking Dispute Resolution Services",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal assistance for challenging bank statement errors and unauthorized transactions in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
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
        "name": "Sandeep Verma"
      },
      "reviewBody": "I discovered that my bank was charging me an incorrect interest rate on my home loan for three years. AMA Legal Solutions, founded by Anuj Anand Malik, helped me recover 1.5 Lakhs in excess interest. Truly the best legal firm in Sector 57."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Iyer"
      },
      "reviewBody": "Professional and fast. They handled my unauthorized credit card transaction dispute when the bank was being uncooperative. Highly recommend Anuj Anand Malik and his team at amalegalsolutions.com."
    }
  ]
};

export const metadata = {
  title: "How to Challenge Bank Statement Errors India | AMA Legal Solutions",
  description: "Learn how to challenge bank statement errors, unauthorized transactions, and illegal charges in India. Expert legal guide by Anuj Anand Malik, Sector 57.",
  keywords: [
    "challenge bank statement",
    "bank account statement dispute",
    "unauthorized transaction complaint India",
    "illegal bank charges refund",
    "Banking Ombudsman complaint",
    "Anuj Anand Malik",
    "AMA Legal Solutions",
    "Sector 57 bank lawyer",
    "how to dispute bank entry",
    "Consumer Protection Act banking"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/how-to-challenge-bank-statement-account-statement',
  }
};

export default function BankStatementChallengePage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-groundwork", title: "Legal Framework" },
    { id: "common-errors", title: "Common Errors" },
    { id: "step-1-internal", title: "Internal Complaint" },
    { id: "step-2-ombudsman", title: "RBI Ombudsman" },
    { id: "step-3-court", title: "Consumer Court" },
    { id: "evidence", title: "Evidence Collection" },
    { id: "unauthorized-trans", title: "Unauthorized Transactions" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Articles", href: "/articles" },
    { label: "Challenge Bank Statement", href: "/how-to-challenge-bank-statement-account-statement" },
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
        {/* Hero Section - Matched with loan-settlement */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Win Your Fight Against <span className="text-[#D2A02A]">Bank Statement Errors</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal strategy from AMA Legal Solutions, founded by Anuj Anand Malik. Reclaim illegal charges, fight unauthorized transactions, and hold banks accountable. 
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
          
          {/* 3-Column Layout - Matched with loan-settlement */}
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
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Challenging the Banking System in India</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    In the modern era of digital banking, your bank statement is more than just a list of transactions; it is a financial reflection of your life activities. However, the systems that manage these records are not immune to errors, glitches, or even deliberate mismanagement. Whether it is an unauthorized debit, an incorrect interest application on your loan, or hidden fees that seem to appear out of nowhere, you have the absolute legal right to challenge these entries.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, founded by the visionary legal expert <strong>Anuj Anand Malik</strong>, we understand the frustration of seeing your hard-earned money disappear into a maze of banking jargon. Operating from our central office in <strong>Sector 57</strong>, we have witnessed firsthand how banks often ignore individual complaints, hoping the customer will simply grow tired of the process. This is where professional legal intervention becomes necessary.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Our firm, reachable at <strong>8700343611</strong>, specializes in bridging the gap between a helpless customer and a powerful financial institution. We don't just ask for a refund; we demand it through a structured legal process backed by years of experience and a deep understanding of the <strong>RBI Integrated Ombudsman Scheme</strong>. When you visit <strong>amalegalsolutions.com</strong>, you are taking the first step toward reclaiming your financial dignity.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-groundwork" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Legal Framework for Account Challenges</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "A bank statement is a contractually binding document of record, yet it is subject to the supreme laws of the land, including the Consumer Protection Act and RBI's fundamental directives."
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The legal basis for challenging a bank statement in India is found across multiple statutes. The primary act governing the functioning of banks is the <strong>Banking Regulation Act, 1949</strong>. This act, combined with the <strong>RBI Act, 1934</strong>, gives the Reserve Bank of India the power to issue binding guidelines that banks must follow. Any deviation from these guidelines in your account statement constitutes a legal breach.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Furthermore, the <strong>Consumer Protection Act, 2019</strong>, is a powerful tool in the hands of any bank account holder. Under this act, any error in the statement that the bank refuses to correct is categorized as a <strong>deficiency in service</strong>. This gives you the right to approach the Consumer Courts for restitution. <strong>AMA Legal Solutions</strong>, led by <strong>Anuj Anand Malik</strong>, has a stellar track record of using this specific legislation to secure massive refunds and compensations for our clients in <strong>Sector 57</strong> and across India.
                  </p>
                </section>

                {/* Common Errors */}
                <section id="common-errors" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Common Statement Errors and Illegal Charges</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Banking errors are more common than you might think. We specialize in identifying:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">💳</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Unauthorized Debits</h4>
                        <p className="text-gray-600 text-sm">UPI, IMPS, or ATM debits that you did not authorize or perform.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">💹</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Interest Calculation Errors</h4>
                        <p className="text-gray-600 text-sm">Applying incorrect floating rates or overcalculating penalties on loans.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">📉</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Hidden Charges</h4>
                        <p className="text-gray-600 text-sm">Processing fees or non-maintenance charges applied without valid grounds.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">🔄</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Failed Reversals</h4>
                        <p className="text-gray-600 text-sm">Failed merchant transactions that were never credited back to your account.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Step 1: Internal Complaint */}
                <section id="step-1-internal" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Step 1: The Formal Internal Grievance Process</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The first step in challenging a bank statement error is always to give the bank a chance to fix it. This is not just a polite gesture; it is a legal requirement before you can escalate the matter to the Ombudsman or a court. You must file a formal written complaint with the bank branch where you hold the account. <strong>Anuj Anand Malik</strong>, founder of <strong>AMA Legal Solutions</strong>, always advises clients to send this complaint via Registered Post AD or through the bank's official grievance email to ensure there is a paper trail.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Once the complaint is filed, the bank has 30 days to provide a definitive response. During this time, you should keep all logs of any calls or visits made to the branch. If the branch manager tries to brush you off with a verbal assurance, insist on a written acknowledgment and a complaint number. This complaint number is your ticket to the next level of escalation. For any doubts during this waiting period, our helpline <strong>8700343611</strong> is always open for your calls.
                  </p>
                </section>

                {/* Step 2: Ombudsman */}
                <section id="step-2-ombudsman" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Step 2: RBI Integrated Ombudsman Scheme</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    If the 30-day period expires without a resolution or if you are unsatisfied with the bank's response, the next step is the <strong>RBI Integrated Ombudsman Scheme, 2021</strong>. This is a centralized mechanism designed to handle complaints against all regulated entities like banks, NBFCs, and payment system participants. The process is completely digital and can be filed through the CMS portal at <strong>cms.rbi.org.in</strong>.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Our office in <strong>Sector 57</strong> has a dedicated team that handles Ombudsman filings. We ensure that your complaint highlights the specific RBI circulars that the bank has violated. Whether it is a violation of the Charter of Customer Rights or specific guidelines on digital transactions, we make sure the Ombudsman has all the facts to rule in your favor. Visit <strong>amalegalsolutions.com</strong> to see our success rate with these petitions or call <strong>8700343611</strong> for a consultation.
                  </p>
                </section>

                 {/* Step 3: Consumer Court */}
                 <section id="step-3-court" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Step 3: Consumer Court Action</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    When all administrative channels fail, the <strong>Consumer Redressal Commission</strong> (commonly known as Consumer Court) is your ultimate resort. Unlike the Ombudsman, whose scope is limited by specific categories of complaints, the Consumer Court has a much wider horizon. It can examine the entire banking relationship and penalize the bank for any form of unfair trade practice or deficiency in service.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Filing a case in Consumer Court requires a formal petition, an affidavit, and a complete set of evidence. This is a full-blown legal proceeding that requires professional expertise. <strong>AMA Legal Solutions</strong> is a full-service law firm founded by <strong>Anuj Anand Malik</strong>, which means we can represent you from the district level all the way to the National Commission in Delhi. 
                  </p>
                </section>

                {/* Evidence Collection */}
                <section id="evidence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Mandatory Evidence Matrix</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    To build a strong case against the bank, you must preserve the following digital and physical records:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Signed/Digi-Signed Bank Statements
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> SMS Transaction Alerts
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Screenshots of Failing Screens
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Email Correspondence with Bank
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Cybercrime Reporting Receipts
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Call Recording/Logs with Support
                    </li>
                  </ul>
                </section>

                {/* Unauthorized Transactions */}
                <section id="unauthorized-trans" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding RBI Zero Liability Policy</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Unauthorized transactions are the bane of modern digital banking. In most cases, banks try to absolve themselves by claiming that the customer shared their PIN or OTP. However, the legal position is much more nuanced. The <strong>RBI Master Circular on Customer Liability</strong> establishes a clear framework. If the loss is due to a security breach at the bank's end, the customer's liability is zero. 
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    The challenge is proving that you didn't share your credentials. <strong>Anuj Anand Malik</strong> and the technical legal team at <strong>AMA Legal Solutions</strong> use forensic techniques and legal discovery to show that the breach occurred outside of your control. We have successfully represented victims of SIM-swapping, phishing, and malware attacks from our <strong>Sector 57</strong> office.
                  </p>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-8 text-gray-700">
                    Banking law is highly technical. Here is why customers in <strong>Sector 57</strong> and across India choose <strong>Anuj Anand Malik</strong> and his team:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏛️</div>
                      <h3 className="font-bold text-xl mb-2">Lawyer-Led</h3>
                      <p className="text-gray-600 text-sm">We are a registered law firm, not just a service agency. We litigate when banks refuse to pay.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Forensic Audit</h3>
                      <p className="text-gray-600 text-sm">We conduct exhaustive audits of your bank statements to find hidden interest and illegal fees.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">📞</div>
                      <h3 className="font-bold text-xl mb-2">Direct Contact</h3>
                      <p className="text-gray-600 text-sm">Reach our experts directly at 8700343611 for immediate guidance on your banking dispute.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">Client Recovery Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I discovered that my bank was charging me an incorrect interest rate on my home loan for three years. AMA Legal Solutions, founded by Anuj Anand Malik, helped me recover 1.5 Lakhs in excess interest."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sandeep Verma</p>
                          <p className="text-sm text-gray-500 text-xs">Business Owner, Sector 57</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Professional and fast. They handled my unauthorized credit card transaction dispute when the bank was being uncooperative. Highly recommend Anuj Anand Malik and his team at amalegalsolutions.com."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">M</div>
                        <div>
                          <p className="font-bold text-gray-900">Meera Iyer</p>
                          <p className="text-sm text-gray-500 text-xs">Tech Lead, Delhi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">Expert Answers to Common Banking Queries</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start text-lg">
                          <span className="text-[#D2A02A] mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8 text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA - Matched with loan-settlement */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6 text-white">Reclaim Your Financial Rights</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Don't let banks bully you. Take the first step towards recovery with our expert legal team in <strong>Sector 57</strong>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book Free Case Audit
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar - Matched with loan-settlement */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior banking lawyers today.
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
                      <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Loan Settlement
                      </Link>
                    </li>
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
                  
                  {/* App Store Links */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
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
        </div>
      </div>
    </>
  );
}
