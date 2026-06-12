import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// 15 unique FAQs for Yes Bank
const yesFaqs = [
  {
    question: "Is a unilateral sole arbitrator appointed by Yes Bank legally valid?",
    answer: "No. The Supreme Court in the Perkins Eastman judgment established that an interested party cannot unilaterally appoint an arbitrator. Yes Bank must obtain your mutual written agreement, otherwise the appointment is invalid under Section 12(5)."
  },
  {
    question: "What waiver can I expect for a Yes Bank credit card settlement?",
    answer: "Yes Bank credit card settlements generally yield a waiver of 50% to 75% on outstanding interest and penalties. The final settlement amount ranges from 25% to 50% of the total outstanding dues, depending on the severity of financial hardship."
  },
  {
    question: "What happens if I do not respond to a Sama ODR notice from Yes Bank?",
    answer: "If you fail to join the Sama ODR proceedings, the arbitrator will conduct ex-parte hearings and issue a binding arbitral award. Yes Bank will then execute this award in court to attach your salary or freeze accounts."
  },
  {
    question: "Can I negotiate a settlement with Yes Bank after arbitration starts?",
    answer: "Yes. Yes Bank is open to One-Time Settlements (OTS) at any stage of arbitration. Settling saves time and legal costs for both parties, provided you submit authentic financial hardship documentation."
  },
  {
    question: "What is the timeline for Yes Bank arbitration cases?",
    answer: "Arbitration proceedings must be completed within 12 months of completing pleadings, as mandated by Section 29A of the Arbitration Act. Most cases wrap up within six to nine months."
  },
  {
    question: "How do I challenge a Yes Bank arbitral award in court?",
    answer: "You can file a petition under Section 34 of the Arbitration Act in a commercial or civil court to set aside the award. This petition must be submitted within 90 days of receiving the signed award copy."
  },
  {
    question: "Where are virtual hearings conducted for Yes Bank disputes?",
    answer: "Hearings are conducted online via video conferencing on the Sama platform. The physical venue or seat of arbitration specified in the loan agreement is usually Mumbai or New Delhi."
  },
  {
    question: "Can Yes Bank file a criminal complaint for loan defaults?",
    answer: "No, simple loan default is a civil dispute. However, Yes Bank can initiate criminal proceedings under Section 138 of the Negotiable Instruments Act if a repayment cheque or NACH auto-debit bounces."
  },
  {
    question: "What is the exact role of the arbitrator on Sama ODR?",
    answer: "The arbitrator acts as an independent adjudicator who reviews the bank's claims and the borrower's reply, subsequently passing a binding arbitral award based on the merits of the case."
  },
  {
    question: "Can Yes Bank freeze my accounts directly without a court order?",
    answer: "No. Yes Bank cannot freeze bank accounts directly. They must first secure a final arbitral award, file an execution petition under Section 36 in civil court, and obtain a formal attachment order."
  },
  {
    question: "What documents should I prepare for a Yes Bank settlement?",
    answer: "Prepare documents proving financial distress, such as salary slips showing pay cuts, employment termination letters, medical bills, or audited financial statements displaying business losses."
  },
  {
    question: "What must be included in a valid Yes Bank OTS letter?",
    answer: "The official settlement letter must detail the total outstanding dues, the waived portion, the final compromise amount, and the exact payment schedule. Verify it directly with the bank's asset recovery branch."
  },
  {
    question: "Can Yes Bank sue the guarantor in arbitration?",
    answer: "Yes. The liability of a guarantor is co-extensive with the primary borrower under Section 128 of the Indian Contract Act. Yes Bank can initiate arbitration against both parties together."
  },
  {
    question: "Is the Sama ODR portal legally recognized in India?",
    answer: "Yes, online dispute resolution platforms are legal under the Arbitration and Conciliation Act, 1996, provided they comply with principles of natural justice and independent arbitrator appointments."
  },
  {
    question: "How can I improve my CIBIL score after settling with Yes Bank?",
    answer: "Rebuild your credit history by obtaining a secured credit card against a fixed deposit. Make regular small purchases and pay the outstanding amount in full monthly to restore your score over 12 to 24 months."
  }
];

// Schemas
const yesBreadcrumbSchema = {
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
      "name": "Yes Bank Arbitration Guide",
      "item": "https://www.amalegalsolutions.com/arbitration-for-yes-bank"
    }
  ]
};

const yesArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Yes Bank Arbitration: Defend Your Rights and Settle Dues",
  "description": "Facing Yes Bank arbitration via Sama ODR? Learn how to dispute unilateral arbitrators, stop recovery harassment, and negotiate a loan settlement.",
  "image": "https://www.amalegalsolutions.com/newAssets/bhiya.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "jobTitle": "Advocate & Founder",
    "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik",
    "sameAs": [
      "https://www.linkedin.com/in/iamanujmalik/",
      "https://www.instagram.com/amalegalsolutions/?hl=en"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2026-06-12",
  "dateModified": "2026-06-12"
};

const yesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": yesFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

const yesLegalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions",
  "image": "https://www.amalegalsolutions.com/newAssets/bhiya.png",
  "telephone": "+918700343611",
  "url": "https://www.amalegalsolutions.com",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Block G, Sushant Lok 2, Sector 57",
    "addressLocality": "Gurugram",
    "addressRegion": "Haryana",
    "postalCode": "122003",
    "addressCountry": "IN"
  }
};

const yesHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Resolve Yes Bank Arbitration and Debt Dues",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Examine the ODR Notice",
      "text": "Carefully check the arbitration notice sent via the Sama platform to confirm the outstanding balance and arbitrator details."
    },
    {
      "@type": "HowToStep",
      "name": "Draft Impartiality Objections",
      "text": "File a formal response on the portal challenging any unilateral sole arbitrator selection under Section 12(5)."
    },
    {
      "@type": "HowToStep",
      "name": "Negotiate OTS Agreement",
      "text": "Submit a compromise settlement proposal based on financial hardship to Yes Bank's recovery division."
    },
    {
      "@type": "HowToStep",
      "name": "Verify the Settlement Letter",
      "text": "Check that the settlement letter contains authorized signatures, correct waiver percentages, and clean terms."
    },
    {
      "@type": "HowToStep",
      "name": "Clear Payment and Secure NOC",
      "text": "Pay the compromise balance, secure a No Dues Certificate, and verify withdrawal of the arbitration case."
    }
  ]
};

const yesPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Anuj Anand Malik",
  "jobTitle": "Advocate & Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "AMA Legal Solutions"
  },
  "sameAs": [
    "https://www.linkedin.com/in/iamanujmalik/",
    "https://www.instagram.com/amalegalsolutions/?hl=en"
  ]
};

export const metadata = {
  title: "Yes Bank Arbitration: Defend Your Rights and Settle Dues",
  description: "Facing Yes Bank arbitration via Sama ODR? Learn how to dispute unilateral arbitrators, stop recovery harassment, and negotiate a loan settlement.",
  keywords: [
    "loan settlement",
    "yes bank arbitration",
    "yes bank loan settlement",
    "sama odr notice yes bank",
    "unilateral arbitrator yes bank",
    "credit card settlement yes bank",
    "recovery agent harassment help",
    "banking lawyers delhi",
    "ama legal solutions"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/arbitration-for-yes-bank',
  },
  openGraph: {
    title: "Yes Bank Arbitration: Defend Your Rights and Settle Dues",
    description: "Facing Yes Bank arbitration via Sama ODR? Learn how to dispute unilateral arbitrators, stop recovery harassment, and negotiate a loan settlement.",
    url: 'https://www.amalegalsolutions.com/arbitration-for-yes-bank',
    siteName: 'AMA Legal Solutions',
    images: [
      {
        url: 'https://www.amalegalsolutions.com/newAssets/bhiya.png',
        width: 800,
        height: 600,
        alt: 'Advocate Anuj Anand Malik resolving Yes Bank loan arbitration',
      }
    ],
    locale: 'en_IN',
    type: 'article',
  }
};

export default function YesBankArbitrationPage() {
  const tocSections = [
    { id: "intro", title: "Navigating Unpaid Dues with Yes Bank" },
    { id: "sama-odr", title: "How Yes Bank Uses Sama ODR Platform" },
    { id: "arbitrator-legality", title: "Legal Challenges to Unilateral Arbitrators" },
    { id: "compromise-settlement", title: "Negotiating a Yes Bank One-Time Settlement (OTS)" },
    { id: "harassment-protection", title: "Protecting Yourself Against Harassing Calls" },
    { id: "award-challenge", title: "How to Challenge a Yes Bank Arbitral Award" },
    { id: "cibil-impact", title: "Rebuilding Credit After Settling Dues" },
    { id: "success", title: "Yes Bank Resolution Case Studies" },
    { id: "faqs", title: "Common Questions" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Yes Bank Arbitration", href: "/arbitration-for-yes-bank" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(yesBreadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(yesArticleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(yesFaqSchema) }} />
      <Script id="legalservice-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(yesLegalServiceSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(yesHowToSchema) }} />
      <Script id="person-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(yesPersonSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Facing Yes Bank Loan Default or Arbitration Notices?
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Understand the legal framework of Yes Bank arbitration notices via Sama ODR. Learn how to settle your outstanding personal loans or credit cards, stop recovery calls, and protect your credit history.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Free Legal Consultation
              </button>
            </Link>
          </div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-4">
            
            {/* Table of Contents */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-8 text-lg leading-relaxed text-gray-700">
                
                {/* Introduction */}
                <section id="intro" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Navigating Unpaid Dues with Yes Bank</h2>
                  <p className="mb-4">
                    Defaulting on credit card outstanding balances or personal loans from Yes Bank can happen when you experience unexpected financial challenges, such as salary delays, health emergencies, or business downturns. If you miss your payments, Yes Bank's collection department will try to recover the outstanding balance. They often bypass the slow public court system by initiating online arbitration proceedings, as permitted under the arbitration clause in your loan agreement.
                  </p>
                  <p className="mb-4">
                    When you receive an online arbitration notice from Yes Bank via the Sama ODR portal, it is crucial not to ignore it. A common mistake is to overlook these digital notices. If you do not appear or defend your case, the arbitrator will proceed ex-parte and issue a binding arbitral award against you. The bank can then file an execution petition in court to attach your salary, freeze your bank accounts, or take possession of your assets. Engaging in the process early gives you the leverage to negotiate a compromise One-Time Settlement (OTS) and resolve the matter legally.
                  </p>
                  <p className="mb-4">
                    Our team of experienced banking lawyers, led by Advocate Anuj Anand Malik, founder of AMA Legal Solutions, protects borrowers dealing with Yes Bank's legal collection actions. We assist you in submitting official objections to biased sole arbitrators, halting recovery team harassment, and checking the legal authenticity of settlement letters.
                  </p>
                </section>

                {/* Section 1 */}
                <section id="sama-odr" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">How Yes Bank Uses Sama ODR Platform</h2>
                  
                  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A]">
                    Yes Bank regularly refers outstanding debt disputes to Online Dispute Resolution (ODR) platforms like Sama. You will receive notifications through email, WhatsApp, or SMS with links to the Sama portal. The virtual arbitration platform handles the entire process: the bank files its statement of claim, you submit your reply or objections, and the hearings are conducted via online video calls. It is important to log in and participate in these virtual hearings to present your financial difficulties.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Understanding the Digital Procedure</h3>
                  <p className="mb-4 text-gray-700">
                    Online dispute resolution provides a quick mechanism for lenders. Once the case is registered on Sama, a case manager is appointed. Defaulters receive a notification link to submit their response. The platform facilitates virtual mediation or arbitration. If you need a comprehensive overview of online dispute notices in general, read our article <Link href="/got-an-arbitration-notice-dont-worry-we-got-you" className="text-[#D2A02A] hover:underline font-semibold">got an arbitration notice dont worry we got you</Link> for detailed steps.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="arbitrator-legality" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Legal Challenges to Unilateral Arbitrators</h2>
                  
                  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A]">
                    Many borrowers ask if a bank can unilaterally select a sole arbitrator. The answer is no. Under Section 12(5) of the Arbitration Act and the key Supreme Court ruling in Perkins Eastman Architects DPC v. HSCC (India) Ltd., any arbitrator appointed solely by one interested party without the other party's written agreement is invalid. We help clients draft and file formal objections on the ODR portal to challenge the appointment of unilateral arbitrators, forcing the bank to seek mutual consent or approach the High Court.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Supreme Court Judgments</h3>
                  <p className="mb-4 text-gray-700">
                    The landmark cases of *TRF Ltd. v. Energo Engineering Projects* and *Perkins Eastman Architects* established that an eligible appointer cannot nominate a sole arbitrator unilaterally when they have a financial stake. This principle is heavily utilized to challenge Yes Bank's pre-approved panel appointments. For a detailed study of how this applies to personal loans specifically, you can refer to <Link href="/personal-loan-settlement" className="text-[#D2A02A] hover:underline font-semibold">personal loan settlement</Link>.
                  </p>
                </section>

                {/* Section 3 */}
                <section id="compromise-settlement" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Negotiating a Yes Bank One-Time Settlement (OTS)</h2>
                  
                  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A]">
                    A One-Time Settlement (OTS) is often the most practical way to close your Yes Bank debt. Once your loan is delinquent for more than 90 days and classified as a Non-Performing Asset (NPA), the bank is open to compromise settlements. Depending on your financial distress, you can negotiate a waiver of 50% to 70% of the total outstanding dues. To succeed, you must submit written proof of your financial crisis, such as medical records, job termination letters, or income tax returns showing a drop in income. We assist borrowers in presenting their hardship files to Yes Bank's settlement committee to secure favorable OTS terms.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Preparing Your Hardship Case</h3>
                  <p className="mb-4 text-gray-700">
                    Waivers are never granted automatically. Yes Bank requires comprehensive documentation to justify writing off public funds. We draft formal compromise proposals for our clients, structuring the payment terms in easy-to-manage installments. To read more about what a standard settlement entails in Hinglish/Hindi, visit <Link href="/loan-settlement-kya-hota-hai" className="text-[#D2A02A] hover:underline font-semibold">loan settlement kya hota hai</Link>.
                  </p>
                  <p className="mb-4 text-gray-700">
                    Additionally, make sure you receive a valid and signed settlement agreement on the bank's letterhead. See our detailed checklist on <Link href="/loan-settlement-letter-from-bank" className="text-[#D2A02A] hover:underline font-semibold">loan settlement letter from bank</Link> to prevent fake settlement scams.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="harassment-protection" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Protecting Yourself Against Harassing Calls</h2>
                  
                  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A]">
                    Aggressive recovery agents can cause immense stress by calling your friends, family, or visiting your workplace. Under the RBI's Fair Practices Code, recovery agents are strictly prohibited from using abusive language, calling at odd hours, or harassing reference contacts. If you face harassment from Yes Bank recovery teams, you can file a complaint with the bank's principal nodal officer or escalate it to the RBI Ombudsman. Sending a formal cease-and-desist legal notice is another highly effective way to stop recovery harassment.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Rights Under RBI Rules</h3>
                  <p className="mb-4 text-gray-700">
                    The RBI rules forbid agents from calling before 8:00 AM and after 7:00 PM. They cannot make threats of physical violence or public humilation. Defaulters can document call logs and audio recordings as evidence when filing complaints. For corporate or business loan accounts facing collection pressure, read our business-specific legal guide at <Link href="/business-loan-settlement" className="text-[#D2A02A] hover:underline font-semibold">business loan settlement</Link>.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="award-challenge" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">How to Challenge a Yes Bank Arbitral Award</h2>
                  
                  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A]">
                    If Yes Bank has already obtained an ex-parte arbitral award against you, you still have legal options. You can challenge the award by filing a petition under Section 34 of the Arbitration Act in a civil court within 90 days of receiving the signed award. Valid grounds include lack of proper notice or a unilaterally appointed arbitrator. Additionally, you should file for a stay under Section 36 to prevent the bank from executing the award and attaching your assets while the court reviews your challenge.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Obtaining an Execution Stay</h3>
                  <p className="mb-4 text-gray-700">
                    A Section 34 challenge does not automatically pause the execution of an arbitral award. You must file a separate application under Section 36(3) to obtain an interim stay order. Without a stay, the bank's lawyers will approach a civil court to attach bank accounts or salaries. Our advocates represent clients in civil courts to obtain these stays and protect their assets.
                  </p>
                </section>

                {/* Section 6 */}
                <section id="cibil-impact" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Rebuilding Credit After Settling Dues</h2>
                  
                  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A]">
                    Settling a loan with Yes Bank will impact your credit score. The bank will report the account as 'Settled' to credit bureaus like CIBIL, which remains on your report for seven years. This makes it difficult to get unsecured loans. However, you can rebuild your credit score by taking a secured credit card against a fixed deposit, making timely repayments, and maintaining a low credit utilization ratio.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Restoring Credit Rating</h3>
                  <p className="mb-4 text-gray-700">
                    Credit scores recover slowly after a settlement. Borrowers should monitor their CIBIL reports to ensure Yes Bank updates the status of the loan from 'Default' to 'Settled'. For credit card settlement details, read our page on <Link href="/credit-card-settlement" className="text-[#D2A02A] hover:underline font-semibold">credit card settlement</Link>.
                  </p>
                  <p className="mb-4 text-gray-700">
                    For a structured timeline on boosting your score, consult our manual on <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-[#D2A02A] hover:underline font-semibold">how to improve CIBIL score after loan settlement</Link>.
                  </p>
                </section>

                {/* Client Success Stories */}
                <section id="success" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Yes Bank Resolution Case Studies</h2>
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was served an online arbitration notice from Yes Bank via the Sama platform for a personal loan default of 6.2 Lakhs. The arbitrator was nominated unilaterally by the bank. I approached AMA Legal Solutions. Advocate Anuj Anand Malik filed objections on the platform and represented my financial difficulties. The bank agreed to settle the entire debt for a single payment of 2.1 Lakhs, closing the case."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-3">K</div>
                        <div>
                          <p className="font-bold text-gray-900">Karthik Iyer</p>
                          <p className="text-xs text-gray-500">Pune, Maharashtra</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Yes Bank obtained an ex-parte award against me on Sama ODR concerning credit card dues of 4 Lakhs. Their lawyers initiated court execution to attach my salary. AMA Legal Solutions immediately filed a petition under Section 34 of the Arbitration Act and obtained an interim stay. Following this, they negotiated a settlement of 1.3 Lakhs, which I paid to close the account."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Ritu Aggarwal</p>
                          <p className="text-xs text-gray-500">Noida, Uttar Pradesh</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs Section */}
                <section id="faqs" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {yesFaqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
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

                {/* Author Bio Box */}
                <section className="bg-[#f9f5e8] p-6 md:p-8 rounded-2xl border border-amber-200 mt-12 flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-gray-200 rounded-full overflow-hidden border-2 border-[#D2A02A]">
                    <Image
                      src="/newAssets/bhiya.png"
                      alt="Advocate Anuj Anand Malik resolving Yes Bank loan arbitration"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Written by Advocate Anuj Anand Malik</h3>
                    <p className="text-sm font-semibold text-gray-600">Founder, AMA Legal Solutions | Banking Law & Loan Settlement Lawyer</p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Advocate Anuj Anand Malik is a recognized legal consultant and banking lawyer. He has represented thousands of borrowers in debt restructurings, One-Time Settlements (OTS), and arbitration disputes across India. He is a registered advocate with the Bar Council of Delhi, a member of the Indo-American Chamber of Commerce (IACC), and the Mumbai Centre for International Arbitration (MCIA).
                    </p>
                    <div className="flex gap-4">
                      <a href="https://www.linkedin.com/in/iamanujmalik/" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:text-[#b88a22] font-semibold text-sm flex items-center">
                        LinkedIn Profile →
                      </a>
                      <Link href="/author/anuj-anand-malik" className="text-gray-600 hover:text-gray-900 font-semibold text-sm flex items-center">
                        Author Bio Page →
                      </Link>
                    </div>
                  </div>
                </section>

                {/* Trust Signals Footer Block */}
                <div className="border-t pt-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs text-gray-500">
                  <div>
                    <Link href="/about" className="hover:text-gray-900">About AMA Legal</Link>
                  </div>
                  <div>
                    <Link href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link>
                  </div>
                  <div>
                    <Link href="/terms-and-conditions" className="hover:text-gray-900">Legal Disclaimer & Terms</Link>
                  </div>
                  <div>
                    <Link href="/contact" className="hover:text-gray-900">Contact Us</Link>
                  </div>
                </div>

                {/* Final CTA Block */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                  <div className="relative z-10 space-y-4">
                    <h2 className="text-2xl md:text-4xl font-bold">Struggling with Yes Bank Arbitration?</h2>
                    <p className="text-sm md:text-lg opacity-90 max-w-2xl mx-auto">
                      Get professional legal protection against recovery harassment and resolve your outstanding loan under RBI guidelines. Talk to our senior advocates today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-base w-full sm:w-auto">
                          Book Free Legal Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full transition-all text-sm md:text-base w-full sm:w-auto">
                          Call Us: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="text-[10px] opacity-75 italic pt-2">Disclaimer: Consultation is subject to standard legal confidentiality guidelines.</p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar Contacts & Stats */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Delhi NCR Legal Office</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Talk to our banking lawyers in Sector 57, Gurugram.
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

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Loan Settlement Rules
                    </Link>
                  </li>
                  <li>
                    <Link href="/got-an-arbitration-notice-dont-worry-we-got-you" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Got Arbitration Notice?
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement-kya-hota-hai" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Settlement Kya Hota Hai
                    </Link>
                  </li>
                  <li>
                    <Link href="/personal-loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Personal Loan Settle
                    </Link>
                  </li>
                  <li>
                    <Link href="/credit-card-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Credit Card Dues Settle
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
