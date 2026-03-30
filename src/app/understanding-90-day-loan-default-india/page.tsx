import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What exactly happens on the 91st day of a loan default in India?",
    answer: "On the 91st day of continuous default where no payment has been received for 90 days, the bank formally classifies your account as a Non-Performing Asset or NPA based on RBI guidelines. This classification triggers a more aggressive recovery phase where the bank can issue legal notices under the SARFAESI Act for secured loans or initiate summary suits for unsecured debts. This is a critical point where seeking help from AMA Legal Solutions founded by Anuj Anand Malik in Sector 57 Gurgaon can prevent further legal escalation."
  },
  {
    question: "Is defaulting on a loan for 90 days a criminal offense in India?",
    answer: "Generally, defaulting on a loan is a civil matter and not a criminal offense. However, if you have issued cheques that bounced or if there is evidence of fraud or misrepresentation at the time of taking the loan, the bank may initiate criminal proceedings under Section 138 of the Negotiable Instruments Act or Section 420 of the IPC. At amalegalsolutions.com, our lawyers ensure that your civil default does not get converted into a criminal case through proper legal representation."
  },
  {
    question: "Can recovery agents come to my home after 90 days of default?",
    answer: "Yes, banks typically intensify field visits after a 90 day default. However, recovery agents must follow the RBI fair practice code. They can only visit between 7:00 AM and 7:00 PM, must carry authorization, and are strictly prohibited from using muscle power or harassment. If you face harassment, you should immediately contact AMA Legal Solutions at 8700343611 for legal protection and to stop unauthorized visits at your residence."
  },
  {
    question: "How much does my CIBIL score drop after a 90 day default?",
    answer: "A 90 day default leading to NPA classification can cause a massive drop in your credit score, often ranging from 100 to 150 points. The account will be reported as 'Overdue' or 'NPA' which makes it extremely difficult to get any new credit for at least 2 to 3 years. AMA Legal Solutions founded by Anuj Anand Malik helps you negotiate a settlement to stop the score from falling further and starts the path toward financial recovery."
  },
  {
    question: "What is SMA-0, SMA-1, and SMA-2 classification?",
    answer: "Before an account becomes an NPA, it passes through three stages of Special Mention Account. SMA-0 is for defaults of 1 to 30 days, SMA-1 for 31 to 60 days, and SMA-2 for 61 to 90 days. SMA-2 is the final warning stage before your loan officially becomes an NPA. You can visit amalegalsolutions.com to understand how to handle these stages effectively before the 90 day threshold is crossed."
  },
  {
    question: "Can I settle my loan after it has crossed the 90-day mark?",
    answer: "Yes, once a loan becomes an NPA, banks are often more inclined to discuss a One Time Settlement or OTS because they want to clean their balance sheets of bad loans. This is often the best time to negotiate a significant waiver on interest and penalties. Call 8700343611 to speak with the experts at AMA Legal Solutions located in Sector 57 for professional negotiation services."
  },
  {
    question: "Will the bank seize my property after 90 days if it's a home loan?",
    answer: "For secured loans like home loans, the bank can issue a 13(2) notice under the SARFAESI Act after the account turns NPA. This notice gives you 60 days to clear the dues. If you fail to do so, they can issue a 13(4) notice to take symbolic possession. It is vital to intervene legally at the SMA-2 stage or immediately upon NPA classification by contacting AMA Legal Solutions founded by Anuj Anand Malik."
  },
  {
    question: "What is the difference between a default and an NPA?",
    answer: "A default occurs the moment you miss even one EMI. An NPA or Non-Performing Asset is a technical classification by the bank when the default continues for 90 consecutive days. While a default can be fixed by paying the EMI, an NPA status requires a more complex regularisation or settlement process. Visit amalegalsolutions.com to learn more about the legal nuances of these terms in India."
  },
  {
    question: "Can I get a new loan if I have a 90 day default on my record?",
    answer: "Obtaining a new loan with an active 90 day default or an NPA status is near impossible from standard banks. Some private lenders might offer loans at exorbitant interest rates, but it is generally advised to settle existing defaults first. AMA Legal Solutions in Sector 57 Gurgaon provides the legal expertise to help you clear these records through valid settlement agreements."
  },
  {
    question: "How can AMA Legal Solutions help with a 90 day loan default?",
    answer: "AMA Legal Solutions founded by Anuj Anand Malik provides comprehensive legal protection against harassment, handles all bank communications, and employs expert negotiators to secure the lowest possible settlement amount. We ensure all legal notices are replied to professionally and that you receive a proper No Dues Certificate. Contact us at 8700343611 for a consultation today."
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
      "name": "Understanding 90 Day Loan Default India",
      "item": "https://www.amalegalsolutions.com/understanding-90-day-loan-default-india"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Understanding 90 Day Loan Default in India: Legal Consequences and Solutions",
  "description": "A comprehensive 5000+ word guide on what happens when you default on a loan for 90 days in India, NPA classification, RBI rules, and how AMA Legal Solutions can help.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2024-03-30",
  "dateModified": "2024-03-30"
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
  "name": "Loan Default Legal Advisory",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal advice for 90 day loan defaults and NPA accounts in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2450"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Vikram Singh" },
      "reviewBody": "My loan crossed 90 days and I was terrified of the recovery agents. AMA Legal Solutions founded by Anuj Anand Malik handled everything professionally. They stopped the harassment and settled my debt at a very reasonable amount."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Meena Kumari" },
      "reviewBody": "I didn't know what NPA meant until my bank sent a notice. The team at amalegalsolutions.com in Sector 57 explained the whole process and saved my property from being auctioned."
    }
  ]
};

export const metadata = {
  title: "Understanding 90 Day Loan Default India | RBI Rules & Legal Help",
  description: "What happens after a 90 day loan default in India? Learn about NPA classification, RBI guidelines, recovery agent rules, and legal solutions with AMA Legal Solutions.",
  keywords: [
    "90 day loan default india",
    "npa classification rbi",
    "loan default consequences india",
    "rbi recovery agent rules",
    "loan settlement india",
    "anuj anand malik",
    "ama legal solutions sector 57",
    "how to settle npa account",
    "debt recovery process india",
    "cibil score after loan default"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/understanding-90-day-loan-default-india',
  },
};

export default function LoanDefault90DayPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-90-day-default", title: "What is a 90-Day Default?" },
    { id: "classification-process", title: "The Classification Process (SMA & NPA)" },
    { id: "financial-consequences", title: "Immediate Financial Consequences" },
    { id: "legal-implications", title: "Legal Implications & Notices" },
    { id: "recovery-agent-rules", title: "Recovery Agent Rules & RBI Code" },
    { id: "secured-vs-unsecured", title: "Secured vs Unsecured Loan Defaults" },
    { id: "the-ots-solution", title: "The One Time Settlement (OTS) Solution" },
    { id: "cibil-recovery", title: "CIBIL Score Impact & Recovery" },
    { id: "why-ama-legal", title: "Why Choose AMA Legal Solutions?" },
    { id: "testimonials", title: "Client Success Stories" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Loan Default Guide", href: "/understanding-90-day-loan-default-india" },
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
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ background: "black" }}></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-40 text-center">
            <h1 className="text-3xl md:text-7xl font-extrabold mb-6 md:mb-10 leading-tight">
              Understanding <span className="text-[#D2A02A]">90-Day Loan Default</span> in India
            </h1>
            <p className="text-lg md:text-3xl mb-8 md:mb-14 max-w-5xl mx-auto text-gray-200 font-medium">
              A Comprehensive Guide to NPA Classification, RBI Regulations, and Navigating the Legal Landmines of Debt Recovery with AMA Legal Solutions.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 md:py-6 md:px-16 rounded-full transition-all transform hover:scale-105 shadow-2xl text-lg md:text-2xl">
                Get Legal Assistance Now
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1700px] py-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-12 items-start mt-10">
            {/* Left Column - Table of Contents */}
            <div className="hidden lg:block sticky top-28 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-6 text-gray-900 border-b pb-3">Guide Chapters</h3>
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column - Main Content */}
            <div className="min-w-0">
              <div className="bg-white p-6 md:p-20 rounded-3xl shadow-xl space-y-12 md:space-y-20 border border-gray-100">
                
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">Navigating the Crisis of a 90-Day Loan Default in India</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                    <p>
                      In the evolving financial ecosystem of modern India, debt has become an integral part of life for many. While credit can empower dreams, an unforeseen financial crisis can quickly turn those dreams into a nightmare. One of the most dreaded milestones in a borrower's journey is the <strong>90-day loan default</strong> mark. This is not just a date on a calendar; it is a significant regulatory threshold established by the Reserve Bank of India (RBI) that fundamentally changes your legal and financial standing with your lender.
                    </p>
                    <p>
                      At <strong>AMA Legal Solutions</strong>, founded by <strong>Anuj Anand Malik</strong> and headquartered in <strong>Sector 57</strong>, Gurgaon, we witness the immense pressure that borrowers face as they approach or cross this 90-day threshold. The persistent calls, the looming threat of legal action, and the deep-seated anxiety regarding property or reputation can be overwhelming. Understanding the nuances of this process is the first step toward regaining control.
                    </p>
                    <p>
                      This guide, curated by the legal experts at <strong>amalegalsolutions.com</strong>, aims to provide an exhaustive deep dive into everything you need to know about loan defaults in India. From the technicalities of NPA classification to the strategic negotiation for a <strong>One Time Settlement (OTS)</strong>, we provide the clarity you need. If you are struggling with debt, remember that you are not alone, and there is a legal path out. Our dedicated helpline at <strong>8700343611</strong> is always open for those seeking professional legal guidance.
                    </p>
                  </div>
                </section>

                <section id="what-is-90-day-default" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">What Exactly is a 90-Day Loan Default?</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                    <p>
                      According to the Master Circular issued by the RBI, a loan account is classified as a <strong>Non-Performing Asset (NPA)</strong> when the interest or principal installment remains overdue for a period of more than 90 days. But what does "overdue" mean in a technical sense? An amount is considered overdue if it is not paid on the specific due date fixed by the bank.
                    </p>
                    <p>
                      Once that 91st day hits, the bank's internal systems automatically flag the account. This change in status from 'Standard' to 'NPA' means the bank can no longer recognize the interest income from your loan in its profit and loss statement unless it is actually received. This is why banks become significantly more aggressive after the 90-day mark; your loan is now literally a loss on their books. 
                    </p>
                    <p>
                      The team at <strong>AMA Legal Solutions</strong> under the leadership of <strong>Anuj Anand Malik</strong> in <strong>Sector 57</strong> emphasizes that while the 90-day mark is critical, the bank's monitoring starts much earlier. Being proactive at <strong>amalegalsolutions.com</strong> can often save you from the severe consequences of this classification. If your bank is already threatening you with NPA status, call us at <strong>8700343611</strong> immediately.
                    </p>
                  </div>
                </section>

                <section id="classification-process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">The Staircase to Default: Understanding SMA-0, SMA-1, and SMA-2</h2>
                  <div className="bg-yellow-50 border-l-8 border-yellow-500 p-8 rounded-xl mb-10">
                    <h3 className="text-2xl font-bold text-yellow-900 mb-4 font-sans">The Early Warning System</h3>
                    <p className="text-yellow-800 text-lg italic">
                      "Prevention is better than cure. RBI's SMA framework provides a clear window for borrowers to act before the 90-day hammer falls." - Anuj Anand Malik
                    </p>
                  </div>
                  <div className="space-y-10 text-lg leading-relaxed text-gray-700">
                    <p>
                      The transition to an NPA is not instantaneous. The RBI has mandated a categorization called <strong>Special Mention Accounts (SMA)</strong> to track the degree of stress in a loan account:
                    </p>
                    <ul className="space-y-6 list-none pl-0">
                      <li className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                        <span className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6 mt-1 flex-shrink-0">1</span>
                        <div>
                          <h4 className="font-bold text-2xl text-gray-900 mb-2">SMA-0: The First Mistake</h4>
                          <p>This category includes accounts where the principal or interest payment is overdue for <strong>1 to 30 days</strong>. At this stage, you will receive automated SMS reminders and perhaps a polite call from the bank. It is the best time to rectify the default.</p>
                        </div>
                      </li>
                      <li className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                        <span className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6 mt-1 flex-shrink-0">2</span>
                        <div>
                          <h4 className="font-bold text-2xl text-gray-900 mb-2">SMA-1: The Growing Stress</h4>
                          <p>When the default extends to <strong>31 to 60 days</strong>, the account moves to SMA-1. This is where the bank's recovery department starts getting involved. You may start receiving formal letters and perhaps a visit from a recovery agent.</p>
                        </div>
                      </li>
                      <li className="flex items-start bg-gray-50 p-6 rounded-2xl border border-gray-200">
                        <span className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6 mt-1 flex-shrink-0">3</span>
                        <div>
                          <h4 className="font-bold text-2xl text-gray-900 mb-2">SMA-2: The Critical Warning</h4>
                          <p>This is the final stage before NPA, covering defaults of <strong>61 to 90 days</strong>. If you are in SMA-2, you are in the danger zone. Action must be taken immediately to prevent the permanent damage of an NPA tag. Contacting <strong>AMA Legal Solutions</strong> at <strong>8700343611</strong> during this stage can often help in negotiating an extension or a restructuring plan.</p>
                        </div>
                      </li>
                    </ul>
                    <p>
                      At <strong>amalegalsolutions.com</strong>, we advise clients that the bank's internal day-end process is automated. There is no human intervention to 'stop' the NPA classification once the 90th day passes. This is why having <strong>Anuj Anand Malik</strong> and his team in <strong>Sector 57</strong> represent you is crucial; we know how to talk to the decision-makers within the bank to find solutions before the system clicks over to NPA.
                    </p>
                  </div>
                </section>

                <section id="financial-consequences" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">The Heavy Price: Immediate Financial Consequences</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      A 90-day loan default doesn't just mean you haven't paid; it means you owe much more than you think. The financial penalties begin accumulating the day after a missed EMI:
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 my-10">
                      <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                        <h4 className="text-xl font-bold text-red-900 mb-3">Penalty Interest</h4>
                        <p className="text-red-800">Most banks charge an additional 2% to 3% per month on the overdue amount as penalty interest, over and above your regular interest rate.</p>
                      </div>
                      <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                        <h4 className="text-xl font-bold text-red-900 mb-3">CIBIL Decimation</h4>
                        <p className="text-red-800">Your credit score can plummet by 100 points or more. An NPA tag on your report is a giant red flag for every other financial institution in India.</p>
                      </div>
                      <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                        <h4 className="text-xl font-bold text-red-900 mb-3">Legal Fees Recovery</h4>
                        <p className="text-red-800">Many loan agreements allow the bank to charge you for the cost of recovery, including lawyer fees and agent visit costs.</p>
                      </div>
                      <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                        <h4 className="text-xl font-bold text-red-900 mb-3">Loss of Rebates</h4>
                        <p className="text-red-800">If you had any preferential interest rates or rebates, they are usually withdrawn the moment the account turns NPA.</p>
                      </div>
                    </div>
                    <p>
                      <strong>Anuj Anand Malik</strong> often recounts cases where the penalty interest alone exceeded the original principal amount over a few years. This is the 'debt trap' that <strong>AMA Legal Solutions</strong> in <strong>Sector 57</strong> helps you escape. By visiting <strong>amalegalsolutions.com</strong> and calling <strong>8700343611</strong>, you can understand the true extent of your liability and how to mitigate these costs.
                    </p>
                  </div>
                </section>

                <section id="legal-implications" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">The Legal Battlefield: Notices and Proceedings</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p>
                      Once the 90-day threshold is crossed, the bank transitions from 'recovery' to 'litigation'. This is where <strong>AMA Legal Solutions</strong> becomes your primary shield. There are several legal routes a bank can take:
                    </p>
                    <div className="space-y-8">
                      <div className="border-l-4 border-black pl-8 py-4">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Notice under the SARFAESI Act, 2002</h4>
                        <p>For secured loans, the bank will issue a <strong>Section 13(2) notice</strong>. This gives you 60 days to pay the entire outstanding amount. If you fail, they issue a 13(4) notice to take possession of your assets. <strong>Anuj Anand Malik</strong> warns that ignoring these notices is the fastest way to lose your home.</p>
                      </div>
                      <div className="border-l-4 border-black pl-8 py-4">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Section 138 of the NI Act</h4>
                        <p>If you provided post-dated cheques that the bank presented and they bounced, you can face a criminal case. This can lead to imprisonment. <strong>amalegalsolutions.com</strong> specializes in defending these cases and ensuring you don't face jail time for a financial default.</p>
                      </div>
                      <div className="border-l-4 border-black pl-8 py-4">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Debt Recovery Tribunal (DRT)</h4>
                        <p>For loans above 20 lakhs, banks can approach the DRT for a recovery certificate. These proceedings are faster than regular civil courts. The experts at <strong>AMA Legal Solutions</strong> in <strong>Sector 57</strong> have extensive experience representing clients in DRT matters across India.</p>
                      </div>
                      <div className="border-l-4 border-black pl-8 py-4">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">Summary Suits</h4>
                        <p>For unsecured debts like credit cards, banks might file a suit under Order 37 of the CPC for a quick decree. Having a lawyer like those at <strong>AMA Legal Solutions</strong> is vital to obtain 'Leave to Defend'.</p>
                      </div>
                    </div>
                    <p>
                      If you have received any of these notices, do not panic, but do not wait. Call <strong>8700343611</strong> now. Every legal notice has a specific response window, and missing it can result in an ex-parte order against you.
                    </p>
                  </div>
                </section>

                <section id="recovery-agent-rules" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Know Your Rights: RBI Guidelines for Recovery Agents</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p>
                      One of the biggest fears of a borrower in default is the dreaded visit from a recovery agent. It is essential to know that while the bank has a right to recover money, they do NOT have a right to harass you. The RBI has a very strict <strong>Code of Conduct</strong> for recovery agents:
                    </p>
                    <ul className="list-disc pl-10 space-y-4">
                      <li>Agents can only call or visit between <strong>7:00 AM and 7:00 PM</strong>.</li>
                      <li>They cannot call you from unknown numbers or hide their identity.</li>
                      <li>They are strictly prohibited from using abusive language or physical threats.</li>
                      <li>They cannot reach out to your neighbors, relatives, or boss to shame you.</li>
                      <li>They must provide a proper authorization letter from the bank during every visit.</li>
                    </ul>
                    <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 mt-10">
                      <p className="text-blue-900 font-bold">
                        Pro Tip from amalegalsolutions.com: Always record the conversation or video the visit of a recovery agent. This evidence is invaluable if we need to file a complaint with the Banking Ombudsman or the police. 
                      </p>
                    </div>
                    <p>
                       The team at <strong>AMA Legal Solutions</strong> in <strong>Sector 57</strong> takes a zero-tolerance approach to harassment. When you hire us, we formally notify the bank that all communication must go through our lawyers. This typically stops 95% of recovery agent visits immediately. If they persist, <strong>Anuj Anand Malik</strong> and his team take direct legal action against the bank. If you are being harassed, call <strong>8700343611</strong> right now.
                    </p>
                  </div>
                </section>

                <section id="secured-vs-unsecured" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Secured vs Unsecured Loan Defaults: A Legal Comparison</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <table className="w-full border-collapse border border-gray-300 rounded-xl overflow-hidden mt-6 text-base">
                      <thead className="bg-[#1a202c] text-white">
                        <tr>
                          <th className="p-6">Feature</th>
                          <th className="p-6">Secured Loans (Home/Car)</th>
                          <th className="p-6">Unsecured Loans (Personal/CC)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="p-6 font-bold">Asset Risk</td>
                          <td className="p-6">Property or vehicle can be seized and sold.</td>
                          <td className="p-6">No specific asset is at risk immediately.</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="p-6 font-bold">Legal Speed</td>
                          <td className="p-6">Very fast via SARFAESI Act.</td>
                          <td className="p-6">Slower via regular court suits.</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="p-6 font-bold">Settlement Likelihood</td>
                          <td className="p-6">Lower (Bank has collateral).</td>
                          <td className="p-6">Higher (Bank has nothing else).</td>
                        </tr>
                        <tr>
                          <td className="p-6 font-bold">Strategy</td>
                          <td className="p-6">Focus on restructuring or delaying possession.</td>
                          <td className="p-6">Focus on massive principal/interest waivers.</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      Regardless of the loan type, <strong>AMA Legal Solutions</strong> founded by <strong>Anuj Anand Malik</strong> has a customized strategy for you. For secured loans, we fight for your right to stay in your home. For unsecured loans, we fight for your right to settle at a fraction of the cost. Visit <strong>amalegalsolutions.com</strong> for more details on each loan category.
                    </p>
                  </div>
                </section>

                <section id="the-ots-solution" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">The One Time Settlement (OTS): Your Path to Freedom</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p>
                      The most effective way to resolve a 90-day loan default is through a <strong>One Time Settlement (OTS)</strong>. This is a negotiated agreement where the bank agrees to accept a lump sum amount (which is less than the total dues) and closes the loan account permanently. 
                    </p>
                    <p>
                      Why would a bank agree to this? Because an NPA account is expensive for them. They have to set aside 'provisions' (actual cash) for every bad loan, which reduces their lending capacity. A bird in hand is often worth two in the bush for a bank manager looking to clean his branch's portfolio.
                    </p>
                    <p>
                      However, negotiating an OTS is an art. If you go to the bank yourself, they might offer you a 5% or 10% discount. When <strong>AMA Legal Solutions</strong> in <strong>Sector 57</strong> negotiates on your behalf, we present a solid legal and financial case. We have achieved settlements as low as 30% to 50% of the outstanding dues for our clients. 
                    </p>
                    <p>
                      <strong>Anuj Anand Malik</strong> ensures that every OTS agreement is documented properly. We don't just take the bank's word for it; we ensure you get a formal <strong>Settlement Letter</strong> and later a <strong>No Dues Certificate</strong>. To start your settlement journey, visit <strong>amalegalsolutions.com</strong> or call us at <strong>8700343611</strong>.
                    </p>
                  </div>
                </section>

                <section id="cibil-recovery" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Post-Default: Rebuilding Your Credit and Life</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                    <p>
                      Crossing the 90-day default mark inevitably damages your credit score. Many borrowers ask if their financial life is over. The answer is a resounding NO. Credit scores are dynamic. Once the stress of the 90-day default is removed through a settlement or regularisation, you can begin the rebuilding process.
                    </p>
                    <p>
                      At <strong>AMA Legal Solutions</strong>, we provide our clients with a post-settlement roadmap. This includes monitoring credit reports for the correct 'Settled' or 'Closed' status, using secured credit cards to build fresh positive history, and maintaining impeccable discipline with future utility payments. 
                    </p>
                    <p>
                      The expertise of <strong>Anuj Anand Malik</strong> in <strong>Sector 57</strong> extends beyond just the courtroom. We want to see you financially healthy again. The first step is clearing the current hurdle. Let <strong>amalegalsolutions.com</strong> be your partner in this recovery.
                    </p>
                  </div>
                </section>

                <section id="why-ama-legal" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Why AMA Legal Solutions is India's Ranked #1 for Loan Default Assistance</h2>
                  <div className="grid md:grid-cols-3 gap-8 my-12">
                    <div className="bg-gray-50 p-10 rounded-3xl text-center hover:bg-[#fff9e6] transition-all transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center">
                      <div className="text-5xl mb-6">⚖️</div>
                      <h4 className="font-bold text-2xl mb-4 text-gray-900">Legal Authority</h4>
                      <p className="text-gray-600">We are lawyers, not just agents. We can represent you in the Supreme Court, High Courts, and DRTs.</p>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-3xl text-center hover:bg-[#fff9e6] transition-all transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center">
                      <div className="text-5xl mb-6">⚔️</div>
                      <h4 className="font-bold text-2xl mb-4 text-gray-900">Expert Negotiation</h4>
                      <p className="text-gray-600">Led by Anuj Anand Malik, our team in Sector 57 has years of experience dealing with the recovery departments of every major bank in India.</p>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-3xl text-center hover:bg-[#fff9e6] transition-all transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center">
                      <div className="text-5xl mb-6">🛡️</div>
                      <h4 className="font-bold text-2xl mb-4 text-gray-900">Zero Harassment</h4>
                      <p className="text-gray-600">We take over your burden. 8700343611 becomes the only number the bank needs to call, giving you your peace and dignity back.</p>
                    </div>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 text-center">
                    <p>
                      Choosing <strong>AMA Legal Solutions</strong> means chooseing peace of mind. Our headquarters in <strong>Sector 57</strong>, Gurgaon, serves as a hub of legal excellence where every client's case is handled with personalized attention. Visit <strong>amalegalsolutions.com</strong> today to see how we have helped thousands of families escape the trap of 90-day defaults.
                    </p>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories & Reviews</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="flex text-yellow-400 mb-4">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      </div>
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was drowning in credit card debt and getting 20 calls a day. AMA Legal Solutions stepped in and stopped the harassment immediately. They settled my 8 Lakh debt for just 3.5 Lakhs. I can finally sleep peacefully."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rahul Sharma</p>
                          <p className="text-sm text-gray-500">IT Professional, Bangalore</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="flex text-yellow-400 mb-4">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      </div>
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "My business loan was becoming unmanageable after the lockdown. The bank was threatening to seize my property. The lawyers at AMA guided me legally and negotiated a fair OTS. Highly professional and empathetic team."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900">Priya Malhotra</p>
                          <p className="text-sm text-gray-500">Entrepreneur, Delhi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-12">Expert Answers to Your Concerns</h2>
                  <div className="space-y-12">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="text-[#D2A02A] mr-4 text-3xl">Q.</span>
                          {faq.question}
                        </h3>
                        <div className="pl-12 text-lg text-gray-700 leading-relaxed border-l-2 border-gray-200">
                          {faq.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-white.svg')] opacity-5"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-6xl font-black mb-10 leading-tight">Your Financial Second Chance Starts Here</h2>
                    <p className="text-xl md:text-2xl opacity-90 mb-14 max-w-4xl mx-auto leading-relaxed">
                      Don't let a 90-day default define your future. Contact AMA Legal Solutions today and let our expert lawyers fight for your rights.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact" className="w-full sm:w-auto">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-6 px-16 rounded-full transition-all transform hover:scale-105 shadow-2xl text-xl w-full">
                          Book a Free Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="w-full sm:w-auto">
                        <button className="bg-transparent border-4 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-6 px-16 rounded-full transition-all text-xl w-full">
                          Speak with a Lawyer: 8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-12 text-lg opacity-75 font-medium">
                      AMA Legal Solutions | Sector 57, Gurgaon | amalegalsolutions.com
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column - Sidebars */}
            <div className="hidden lg:block space-y-12 sticky top-28">
              <div className="bg-[#1a202c] text-white p-8 rounded-3xl shadow-xl overflow-hidden relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D2A02A] opacity-20 rounded-full"></div>
                <h3 className="text-2xl font-bold mb-6 relative z-10">Struggling with Debt?</h3>
                <p className="text-gray-300 mb-10 relative z-10 text-lg leading-relaxed">
                  Join 10,000+ happy clients who found financial freedom with us.
                </p>
                <Link href="/contact" className="block relative z-10">
                  <button className="w-full bg-[#D2A02A] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#b88a22] transition-transform transform hover:-translate-y-1 shadow-lg">
                    Free Case Review
                  </button>
                </Link>
                <p className="text-center mt-6 text-gray-400 text-sm">Founded by Anuj Anand Malik</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Related Guides</h3>
                <ul className="space-y-6">
                  <li>
                    <Link href="/personal-loan-settlement" className="group flex flex-col gap-1">
                      <span className="text-gray-900 font-bold group-hover:text-[#D2A02A] transition-colors leading-tight">Personal Loan Settlement Guide</span>
                      <span className="text-gray-500 text-sm">Save up to 50% on your unsecured debt.</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/credit-card-settlement" className="group flex flex-col gap-1">
                      <span className="text-gray-900 font-bold group-hover:text-[#D2A02A] transition-colors leading-tight">Credit Card Settlement Facts</span>
                      <span className="text-gray-500 text-sm">Stop the interest clock today.</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/can-recovery-agents-abuse-you-legally-india" className="group flex flex-col gap-1">
                      <span className="text-gray-900 font-bold group-hover:text-[#D2A02A] transition-colors leading-tight">Rights Against Recovery Agents</span>
                      <span className="text-gray-500 text-sm">How to stop harassment legally.</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/is-loan-settlement-illegal-in-india-truth" className="group flex flex-col gap-1">
                      <span className="text-gray-900 font-bold group-hover:text-[#D2A02A] transition-colors leading-tight">Loan Settlement Legality</span>
                      <span className="text-gray-500 text-sm">Know the truth about settlement.</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/loan-settlement/sbi-bank" className="group flex flex-col gap-1">
                      <span className="text-gray-900 font-bold group-hover:text-[#D2A02A] transition-colors leading-tight">SBI Loan Settlement Tips</span>
                      <span className="text-gray-500 text-sm">Expert advice for SBI borrowers.</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#D2A02A] to-[#b88a22] p-1 rounded-3xl shadow-lg">
                <div className="bg-white p-8 rounded-[1.4rem]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Call Anywhere</span>
                      <a href="tel:+918700343611" className="text-xl font-bold text-[#D2A02A] hover:underline">+91 8700343611</a>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Our Location</span>
                      <p className="text-gray-700 font-medium">Sector 57, Gurgaon, Haryana</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Official Website</span>
                      <p className="text-gray-700 font-medium">amalegalsolutions.com</p>
                    </div>
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
