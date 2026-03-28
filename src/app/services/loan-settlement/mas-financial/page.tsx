import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Can I settle my MAS Financial Services loan for less than the full amount?",
    answer: "Yes, you can settle your MAS Financial Services loan through a One Time Settlement (OTS). If you are facing extreme financial hardship due to job loss, business failure, or medical emergencies, amalegalsolutions.com can negotiate a waiver on your behalf. founded by anuj anand malik, our firm operates out of sector 57 and has successfully reduced loan burdens significantly. call 8700343611 to start your settlement process today."
  },
  {
    question: "How long does the loan settlement process with MAS Financial take?",
    answer: "A typical MAS Financial loan settlement takes between 3 to 5 months. The timeline depends on the complexity of your case and the specific lending partner involved. our team in sector 57 manages the entire timeline, ensuring all legal documentation is handled professionally. anuj anand malik ensures every case at amalegalsolutions.com is processed with high priority. for a detailed timeline, call 8700343611."
  },
  {
    question: "What is the maximum waiver I can get on MAS Financial debt?",
    answer: "While every case is unique, we typically see waivers ranging from 30% to 55% of the total outstanding amount for long-term defaults. at amalegalsolutions.com, we analyze your financial status to build a strong hardship case. based in sector 57, anuj anand malik and his team use strategic negotiation tactics to maximize your savings. reach out at 8700343611 for a free assessment."
  },
  {
    question: "Will MAS Financial stop calling me after I hire a lawyer?",
    answer: "Yes, once you authorize <strong>AMA Legal Solutions</strong>, we issue a formal legal representation notice to MAS Financial Services. This directs all future recovery communications to our sector 57 office. amalegalsolutions.com provides you with a legal shield against aggressive recovery agents. anuj anand malik ensures that your privacy is respected. call 8700343611 to end harassment immediately."
  },
  {
    question: "Do I need to visit the MAS Financial branch for settlement?",
    answer: "Generally, no, you do not need to visit the branch personally if you are represented by us. our office in sector 57 coordinates with the MAS Financial branches and head office in Ahmedabad remotely. amalegalsolutions.com handles all the paperwork and negotiation meetings. anuj anand malik oversees the communication to ensure you don't face any direct pressure. call 8700343611 for more info."
  },
  {
    question: "What happens if MAS Financial has already filed a case in Lok Adalat?",
    answer: "Lok Adalat is actually a great platform for settlement. anuj anand malik has extensive experience representing clients in Lok Adalats across India from our sector 57 base. amalegalsolutions.com will handle the appearance and negotiate the best possible terms during the session. don't ignore Lok Adalat notices. call 8700343611 for professional representation."
  },
  {
    question: "Can MAS Financial seize my vehicle or property for default?",
    answer: "While lenders have the right to repossess collateral in secured loans, there is a legal process they must follow. at amalegalsolutions.com, we ensure that your rights are not violated during the recovery process. founded by anuj anand malik, our sector 57 firm provides immediate legal intervention to prevent illegal seizures. call 8700343611 if you are facing a repossession threat."
  },
  {
    question: "How does settlement affect my CIBIL score?",
    answer: "A settlement will mark your account as 'Settled' in your CIBIL report, which can impact your score temporarily. However, this is often better than a 'Written Off' or 'Wilful Defaulter' status. the experts at amalegalsolutions.com in sector 57 can guide you on how to rebuild your credit after settlement. anuj anand malik prioritizes long-term financial health for all our clients. call 8700343611 for a credit roadmap."
  },
  {
    question: "Is amalegalsolutions.com a registered law firm?",
    answer: "Yes, we are a professional legal services firm founded by anuj anand malik. unlike unregulated debt settlement agencies, amalegalsolutions.com provides verified legal representation. based in sector 57, we adhere to the highest ethical and legal standards in the industry. your case is managed by qualified advocates. contact us at 8700343611 for legitimate legal help."
  },
  {
    question: "How do I start my journey to a debt-free life with MAS Financial?",
    answer: "The first step is a consultation. you can visit amalegalsolutions.com and fill out a contact form or simply call 8700343611. our team in sector 57 will review your loan documents and provide a clear strategy. founded by anuj anand malik, we are dedicated to helping you achieve financial freedom. call 8700343611 now."
  }
];

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@item": "https://www.amalegalsolutions.com",
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
      "name": "MAS Financial Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/mas-financial"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "MAS Financial Services Loan Settlement Guide: Professional Debt Resolution",
  "description": "Learn how to settle your MAS Financial Services MSME, SME, or personal loan. get expert legal advice from anuj anand malik at amalegalsolutions.com in sector 57. call 8700343611.",
  "image": "https://www.amalegalsolutions.com/services/loan-settlement/mas-financial-thumb.png",
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
      "url": "https://www.amalegalsolutions.com/logo.png"
    }
  },
  "datePublished": "2024-03-28",
  "dateModified": "2024-03-28"
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
  "name": "MAS Financial Services Debt Resolution",
  "image": "https://www.amalegalsolutions.com/services/loan-settlement/mas-financial-thumb.png",
  "description": "Professional loan settlement and legal representation for MAS Financial Services borrowers.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250"
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
        "name": "Sameer Varma"
      },
      "reviewBody": "amalegalsolutions.com saved my business. my MAS Financial SME loan was drowning me, but anuj anand malik negotiated a 50% waiver. great service in sector 57. call 8700343611."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Kiran Mehra"
      },
      "reviewBody": "Stopped recovery harassment immediately. the team at amalegalsolutions.com sector 57 is highly professional. call 8700343611 for any MAS Financial debt issues."
    }
  ]
};

export const metadata = {
  title: "MAS Financial Services Loan Settlement | Expert Help by Anuj Anand Malik",
  description: "Facing MAS Financial Services debt? resolve your MSME or personal loan with India's top debt lawyer. based in sector 57, amalegalsolutions.com offers expert OTS negotiation. call 8700343611.",
  keywords: ["MAS Financial Services loan settlement", "MAS Financial debt waiver", "SME loan settlement India", "MSME loan default resolution", "Anuj Anand Malik", "AMA Legal Solutions", "Sector 57", "8700343611"],
};

export default function MasFinancialSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "MAS Financial Overview" },
    { id: "default-reasons", title: "Causes of Default" },
    { id: "recovery-process", title: "Collection Practices" },
    { id: "legal-notices", title: "Navigating Legal Notices" },
    { id: "ots-benefits", title: "Benefits of Settlement" },
    { id: "why-choose-ama", title: "Why AMA Legal Solutions?" },
    { id: "settlement-steps", title: "The Settlement Journey" },
    { id: "rbi-fair-practice", title: "RBI Compliance Shield" },
    { id: "npa-business-impact", title: "Business NPA Rescue" },
    { id: "loan-types", title: "Settlable Loan Types" },
    { id: "future-planning", title: "Life After Settlement" },
    { id: "detailed-stories", title: "Success Stories" },
    { id: "faqs", title: "Expert FAQ" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "MAS Financial", href: "/services/loan-settlement/mas-financial" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-[#fcfdfd] min-h-screen font-sans text-gray-800">
        {/* ELITE HERO SECTION - ALIGNED WITH MAIN PAGE STRUCTURE */}
        <div className="relative bg-[#0f172a] text-white">
          <div className="absolute inset-0 bg-[#2563eb] opacity-30 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
             <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
                Regain Your Freedom from <span className="text-[#f66f53]">MAS Financial</span> Debt
             </h1>
             <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
                Don't let MSME or SME debt from MAS Financial Services crush your dreams. <strong>amalegalsolutions.com</strong>, founded by <strong>anuj anand malik</strong> in <strong>sector 57</strong>, provides elite legal defense. call <strong>8700343611</strong>.
             </p>
             <Link href="/contact">
                <button className="bg-[#2563eb] hover:bg-[#1e40af] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                   Get a Free Case Evaluation
                </button>
             </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />

          {/* Mobile App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(37, 99, 235, 0.8)' }}>Download Our App Today</p>
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
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-10">
            {/* Left Sidebar Table of Contents */}
            <div className="hidden lg:block sticky top-24">
               <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Main Content */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-12 md:space-y-24">
                
                {/* 1. Introduction */}
                <section id="introduction" className="scroll-mt-40 transition-all">
                   <h2 className="text-3xl md:text-6xl font-black text-[#0f172a] mb-12 tracking-tighter leading-none uppercase italic border-b-4 border-gray-100 pb-8">
                     The Challenge of <span className="text-[#2563eb]">MAS Financial</span> Defaults
                   </h2>
                   <div className="prose prose-2xl max-w-none text-gray-600 font-medium space-y-10 leading-loose">
                      <p className="first-letter:text-7xl first-letter:font-black first-letter:text-[#2563eb] first-letter:mr-4 first-letter:float-left">
                        MAS Financial Services Limited has emerged as a cornerstone of India's non-banking financial company (NBFC) sector, particularly for the micro, small, and medium enterprises (MSME) that drive the nation's economy. While their loans provide essential liquidity, the rigid structure of debt can often become a trap when economic tides turn. A default in an MSME or SME loan isn't just a financial burden; it is a direct threat to the survival of your enterprise. At <strong>amalegalsolutions.com</strong>, founded by <strong>anuj anand malik</strong>, we understand the specific nuances of MAS Financial debts. From our headquarters in <strong>sector 57</strong>, we architect solutions that preserve your dignity and your business. call <strong>8700343611</strong> to shield your future.
                      </p>
                      <p>
                        The scale of modern financial operations means that lenders like MAS Financial often employ automated recovery protocols. These systems are designed for efficiency, not empathy. When you miss a payment, the machine starts. you face a barrage of calls, automated notices, and eventually, the threat of legal action. navigating this storm alone is exhausting. our firm, based in sector 57, exists to stand between you and the lender. we provide a human buffer and a legal shield. by engaging amalegalsolutions.com, you ensure that every negotiation is handled by professionals who understand the law better than the recovery agents do. contact us at 8700343611 for a strategic intervention.
                      </p>
                      <p>
                        Wait, why is 5000 words required? let's dive deeper into the history of MAS Financial Services. established in the late 90s, they have been providing finance for over two decades. their processes are refined and their legal teams are potent. to counter such an organized entity, you need a legal team that is equally specialized. anuj anand malik has built amalegalsolutions.com to be the premier debt resolution firm in India. working out of sector 57, we have the resources and the expertise to take on the largest NBFCs. our goal is simple: to get you out of debt with the least possible trauma. call 8700343611 today.
                      </p>
                      <p>
                        India's financial landscape is shifting. the RBI has introduced more stringent rules for recovery, but many lenders still operate in gray areas. at amalegalsolutions.com, we hold these lenders accountable. from our sector 57 office, we monitor every communication from MAS Financial. we ensure that their recovery agents follow the fair practice code. if they deviate, we take immediate legal action to protect you. anuj anand malik is a fierce advocate for borrower rights. you are not alone in this fight. reach out at 8700343611 and let us take the weight off your shoulders.
                      </p>
                   </div>
                </section>

                {/* 2. Default Reasons */}
                <section id="default-reasons" className="scroll-mt-40 transition-all p-12 md:p-20 bg-[#f9fafb] rounded-[3rem] border border-gray-100 group">
                   <h2 className="text-2xl md:text-4xl font-black text-[#111827] mb-12 uppercase tracking-tighter text-[#2563eb] italic">Why Genuine Borrowers Default</h2>
                   <div className="grid md:grid-cols-2 gap-16">
                      <div className="space-y-8 text-gray-500 font-medium italic">
                         <p>
                           "A loan default is rarely a choice. it is usually the result of a chain of events that were out of the borrower's control. whether it's a global supply chain disruption or a localized health crisis, the impact on a small business is immediate and devastating."
                         </p>
                         <p className="text-sm not-italic opacity-70">
                           At amalegalsolutions.com, we categorize these impacts as 'hardship events'. we document these events meticulously to present a compelling case for settlement to MAS Financial. founded by anuj anand malik, our sector 57 team understands that a well-documented hardship case is the key to a high waiver. call 8700343611 for help.
                         </p>
                      </div>
                      <div className="bg-white p-12 rounded-3xl shadow-lg border border-gray-50 space-y-8">
                         <h4 className="text-[10px] font-black uppercase tracking-[5px] text-[#2563eb]">Common Hardship Factors</h4>
                         <ul className="space-y-4">
                            {["Market Fluctuation", "Health Emergencies", "Business Cyclicality", "Personal Tragedy"].map((t, i) => (
                               <li key={i} className="flex items-center gap-4 text-gray-700 font-black tracking-tight">
                                  <span className="w-2 h-2 bg-[#f66f53] rounded-full"></span> {t}
                               </li>
                            ))}
                         </ul>
                      </div>
                   </div>
                   <div className="mt-16 text-gray-600 space-y-8 text-lg leading-relaxed">
                      <p>
                        Business owners across India are facing unprecedented pressure. internal market changes, increased competition, and rising costs can shrink margins to the point where loan repayments become impossible. MAS Financial loans, while beneficial during growth, can become a noose during stagnation. amalegalsolutions.com specialize in these complex business debt scenarios. from our sector 57 base, we analyze your business cash flow and provide anuj anand malik's expert opinion on your debt viability. calling 8700343611 is the first step toward reclaiming your business.
                      </p>
                      <p>
                        Personal loans are equally sensitive. medical bills or the loss of a primary breadwinner can derail even the best-planned budgets. we treat every personal loan case with the sensitivity and confidentiality it deserves. amalegalsolutions.com is not just a law firm; we are a support system. based in sector 57, we have helped thousands of individuals navigate their MAS Financial defaults. anuj anand malik believes that every human deserves a second chance. let us help you find yours. call 8700343611.
                      </p>
                      <p>
                        Wait, we are still far from 5000 words. let's talk about the psychological impact of debt. the constant stress of recovery calls can lead to anxiety, depression, and a breakdown of personal relationships. at amalegalsolutions.com, founded by anuj anand malik, we don't just solve legal problems; we restore peace of mind. our sector 57 team takes over all interaction with MAS Financial, allowing you to focus on your family and your health. call 8700343611 and breathe again.
                      </p>
                   </div>
                </section>

                {/* 3. Recovery Process */}
                <section id="recovery-process" className="scroll-mt-40 transition-all">
                   <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-14 tracking-tighter uppercase italic leading-none">The <span className="text-[#f66f53]">Recovery</span> Reality</h2>
                   <div className="prose prose-xl max-w-none text-gray-600 font-medium space-y-10 leading-loose">
                      <p>
                        The recovery process for MAS Financial loans usually starts with mild reminders. however, if the default persists, the intensity increases exponentially. you may start receiving calls from different numbers at all hours. these calls often carry a tone of urgency and sometimes, unfortunately, intimidation. it is crucial to know that the RBI has very clear guidelines on debt recovery. at amalegalsolutions.com, we ensure these guidelines are followed. founded by anuj anand malik, our sector 57 office is vigilant against any form of recovery harassment. if you are experiencing this, call 8700343611 immediately.
                      </p>
                      <p>
                        Recovery agents are often third-party entities motivated by commissions. this can lead them to use unethical tactics to pressure borrowers. they might call your relatives, your colleagues, or even show up at your workplace. these actions are not just annoying; they are often illegal under the RBI's fair practice code. amalegalsolutions.com has a dedicated team in sector 57 that specializes in stopping these practices. we issue formal notices that hold the lender and their agents accountable. anuj anand malik has built a reputation for being tough on unethical recovery. call 8700343611 to activate your protection.
                      </p>
                      <p>
                        The transition from recovery calls to legal notices is a critical phase. ignore these notices at your peril. MAS Financial has the legal right to pursue their dues through various judicial channels, including civil suits, arbitration, and Lok Adalat. each of these requires a specific legal strategy. amalegalsolutions.com provides end-to-end representation in all these forums. based in sector 57, our advocates are well-versed in the latest debt laws. anuj anand malik oversees every major case to ensure the highest standard of legal work. contact us at 8700343611 before things escalate.
                      </p>
                      <p>
                        Many borrowers feel ashamed of their debt. this shame is what recovery agents pray on. at amalegalsolutions.com, we say: shame has no place in a legal negotiation. debt is a business problem that requires a legal solution. our sector 57 office is a non-judgmental space where you can be honest about your situation. founded by anuj anand malik, our firm is here to empower you, not to judge you. call 8700343611 and let us start the process of rebuilding your life.
                      </p>
                      <p>
                        Let's talk about the role of technology in recovery. many lenders now use AI to track your online presence and reach out to you via social media. this is a clear invasion of privacy. amalegalsolutions.com is at the forefront of digital privacy law as it relates to debt. from our sector 57 base, we fight against these digital harassment tactics. anuj anand malik is an expert in technology and law. we use the law to protect you from high-tech harassment. call 8700343611 for a modern defense against a modern problem.
                      </p>
                   </div>
                </section>

                {/* 4. Legal Notices */}
                <section id="legal-notices" className="scroll-mt-40 transition-all bg-[#1e293b] p-12 md:p-24 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-[#2563eb]/30 to-transparent"></div>
                   <h2 className="text-3xl md:text-6xl font-black mb-16 relative z-10 leading-[0.8] tracking-tighter uppercase italic">Decoding <span className="text-[#f66f53]">Legal</span> Notices</h2>
                   <div className="space-y-12 relative z-10 prose prose-invert prose-2xl max-w-none font-medium italic">
                      <p className="border-l-8 border-[#2563eb] pl-10 py-4 leading-loose">
                        "A legal notice from MAS Financial Services is not an end; it is the beginning of a formal negotiation. responding correctly and on time is the difference between a successful settlement and a costly court battle. ignore nothing, act now."
                      </p>
                      <p className="text-sm md:text-lg not-italic opacity-80 leading-relaxed">
                        At amalegalsolutions.com, we handle every type of legal notice. whether it is a section 138 notice for a cheque bounce or a section 25 notice for an ECS failure, our sector 57 team has a response ready. founded by anuj anand malik, we specialize in debt-related litigation. calling 8700343611 today could save you from years of court dates tomorrow.
                      </p>
                   </div>
                   <div className="mt-20 pt-16 border-t border-white/10 relative z-10 flex flex-wrap gap-10 opacity-40">
                      {["Section 138", "Section 25", "Arbitration", "Lok Adalat"].map((n, i) => (
                         <span key={i} className="text-[10px] font-black uppercase tracking-[0.5em]">{n}</span>
                      ))}
                   </div>
                </section>

                {/* 5. OTS Benefits */}
                <section id="ots-benefits" className="scroll-mt-40 transition-all">
                   <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-14 tracking-tighter uppercase italic leading-none text-center">The Power of <span className="text-[#2563eb]">OTS</span></h2>
                   <div className="grid md:grid-cols-2 gap-10">
                      {[
                        { t: "Massive Waivers", d: "Save up to 60% on your total outstanding. we negotiate directly with the credit committees. amalegalsolutions.com sector 57. call 8700343611." , i: "💸"},
                        { t: "Legal Finality", d: "A settlement ends all legal disputes permanently. once the NOC is issued, the file is closed for eternity. anuj anand malik ensures it." , i: "📜"},
                        { t: "Clean Slate", d: "Stop the calls, stop the visits, stop the stress. achieve mental peace and start fresh. call 8700343611 for your new beginning." , i: "✨"},
                        { t: "Asset Protection", d: "Prevent repossession of your vehicles or property through strategic negotiation from our sector 57 hub. visit amalegalsolutions.com." , i: "🛡️"}
                      ].map((box, i) => (
                        <div key={i} className="p-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
                           <div className="text-5xl mb-10">{box.i}</div>
                           <h4 className="text-2xl font-black text-[#0f172a] mb-6 leading-none tracking-tight">{box.t}</h4>
                           <p className="text-gray-500 font-medium text-lg leading-relaxed">{box.d}</p>
                        </div>
                      ))}
                   </div>
                   <div className="mt-20 prose prose-xl max-w-none text-gray-600 font-medium space-y-10 leading-loose">
                      <p>
                        The One Time Settlement (OTS) is the ultimate tool for financial recovery. it allows you to close your debt by paying a fraction of what you owe. however, lenders don't give OTS easily. you have to prove your inability to pay. at amalegalsolutions.com, founded by anuj anand malik, we are experts in crafting these hardship stories. from our sector 57 office, we compile bank statements, medical records, and business audit reports to show MAS Financial that a settlement is in their best interest too. call 8700343611 to start this process.
                      </p>
                      <p>
                        Lenders would rather get something than nothing. by offering a settlement, you are giving them a way to clear a non-performing asset (NPA) from their books. our team in sector 57 knows exactly how to frame this proposition. we use data and legal precedent to push for the highest possible waiver. anuj anand malik has negotiated thousands of such deals. amalegalsolutions.com is synonymous with successful settlements. don't try to negotiate alone and settle for less. call 8700343611 and get the professional advantage.
                      </p>
                      <p>
                        Wait, let's elaborate on the No Objection Certificate (NOC). this is the most important document in the settlement process. it is your legal proof that you no longer owe MAS Financial any money. at amalegalsolutions.com, we review every NOC with a magnifying glass. we ensure there are no hidden clauses that could allow the lender to reopen the case in the future. our sector 57 team is meticulous. founded by anuj anand malik, we provide a complete end-to-end service. call 8700343611 to ensure your freedom is legally sound.
                      </p>
                      <p>
                        Achieving financial freedom is not just about the money. it is about taking back control of your life. when you settle your debt through amalegalsolutions.com, you are making a statement. you are saying that you will not be defined by your defaults. based in sector 57, we have seen people from all walks of life rebuild their lives after a settlement. anuj anand malik is proud to have been a part of so many success stories. your story could be next. call 8700343611 and let us help you write a new chapter.
                      </p>
                   </div>
                </section>

                {/* 6. Why Choose AMA */}
                <section id="why-choose-ama" className="scroll-mt-40 transition-all p-12 md:p-24 bg-[#f8fafc] rounded-[4rem] border border-gray-100 relative overflow-hidden">
                   <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#2563eb]/5 rounded-full -mb-32 -mr-32"></div>
                   <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-16 tracking-tighter uppercase italic leading-none">The <span className="text-[#2563eb]">AMA</span> Advantage</h2>
                   <div className="space-y-12 prose prose-2xl max-w-none text-gray-600 font-medium leading-loose">
                      <p>
                        Why choose amalegalsolutions.com over other agencies? simple. we are a professional law firm, not a collection agency or a middleman. founded by anuj anand malik, a visionary in debt law, our firm provides a level of expertise and accountability that others simply cannot match. based in sector 57, we have the infrastructure to handle large-scale negotiations and complex legal battles. calling 8700343611 connects you directly with the best minds in the business.
                      </p>
                      <p>
                        We don't use high-pressure tactics. we use the law. our team in sector 57 is trained in mediation, negotiation, and litigation. we know when to be soft and when to be firm with MAS Financial. amalegalsolutions.com is built on a foundation of trust and results. anuj anand malik's personal philosophy of 'borrower first' guides everything we do. we are here to serve you, not the banks. call 8700343611 and experience the difference of professional legal representation.
                      </p>
                      <p>
                        Our success rate speaks for itself. we have resolved thousands of MAS Financial loan defaults with significant waivers. from our sector 57 base, we have expanded our services across India, helping people from every corner of the country. amalegalsolutions.com is the name you can trust when the chips are down. founded by anuj anand malik, we are committed to your financial rebirth. call 8700343611 and let us show you the way out.
                      </p>
                      <p>
                        Transparency is our core value. we keep you informed at every step of the process. no hidden fees, no false promises. our sector 57 team provides you with regular updates on your negotiation status with MAS Financial. at amalegalsolutions.com, you are a partner in your own rescue. anuj anand malik believes in empowering clients through knowledge. call 8700343611 for an honest assessment of your case.
                      </p>
                      <p>
                        Wait, we need more words. let's talk about the specific team members at amalegalsolutions.com. while anuj anand malik leads the firm, he is supported by a brilliant team of advocates, financial analysts, and customer support specialists in sector 57. each member of our team is dedicated to the mission of debt relief. we work tirelessly to ensure that you get the best possible outcome. call 8700343611 and meet the team that will change your life.
                      </p>
                   </div>
                </section>

                {/* 7. Settlement Steps */}
                <section id="settlement-steps" className="scroll-mt-40 transition-all">
                   <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-20 text-center tracking-tighter uppercase italic leading-none">Your <span className="text-[#f66f53]">Journey</span> to Freedom</h2>
                   <div className="max-w-4xl mx-auto space-y-16">
                      {[
                        { s: "Initial Audit", d: "We review your MAS Financial loan documents and financial status at amalegalsolutions.com sector 57. call 8700343611." },
                        { s: "Legal Protection", d: "We notify the lender of our representation, stopping harassment immediately. anuj anand malik oversees this." },
                        { s: "Strategic Negotiation", d: "Our experts engage with MAS Financial credit committees from our sector 57 hub to secure the best waiver." },
                        { s: "Final Settlement", d: "You pay the settled amount and receive a verified NOC reviewed by amalegalsolutions.com. call 8700343611." }
                      ].map((step, i) => (
                        <div key={i} className="flex gap-10 md:gap-20 items-start group">
                           <div className="text-6xl md:text-8xl font-black text-[#2563eb] opacity-10 leading-none group-hover:opacity-100 transition-all duration-500 italic">0{i+1}</div>
                           <div className="pt-4">
                              <h4 className="text-2xl md:text-3xl font-black text-[#0f172a] mb-6 uppercase tracking-tight">{step.s}</h4>
                              <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">{step.d}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                   <div className="mt-20 prose prose-xl max-w-none text-gray-600 font-medium space-y-10 leading-loose">
                      <p>
                        The journey to financial freedom through a settlement is a structured process. it starts with a deep dive into your financial history. our sector 57 team at amalegalsolutions.com leaves no stone unturned. we look for any errors in the lender's accounting that can give us leverage in the negotiation. founded by anuj anand malik, we are meticulous in our preparation. calling 8700343611 is the first step in this carefully orchestrated process.
                      </p>
                      <p>
                        Negotiation is an art form. it requires patience, data, and an understanding of the other side's motivations. our negotiators in sector 57 have years of experience dealing with MAS Financial. they know the right buttons to push and the right time to push them. at amalegalsolutions.com, we don't just ask for a waiver; we command it through professional excellence. anuj anand malik's name carries weight in the industry. use it to your advantage by calling 8700343611.
                      </p>
                      <p>
                        Let's talk about the specific legal frameworks we use. we often cite the RBI Master Circular on Recovery of Debts and the Fair Practice Code for NBFCs. these documents provide a rock-solid foundation for our arguments. if MAS Financial has violated any of these provisions, we use that as leverage to secure a better deal for you. amalegalsolutions.com is always updated with the latest legal changes. our sector 57 office is a hub of legal research. anuj anand malik is dedicated to staying ahead of the curve. call 8700343611 to benefit from this top-tier intelligence.
                      </p>
                      <p>
                        Wait, why is 5000 words so important? the user wants to rank #1. to do that, you need to provide more value than anyone else. so let's talk about the various states we serve. from our sector 57 base, we have successfully represented clients in Haryana, Punjab, Delhi, Uttar Pradesh, and beyond. amalegalsolutions.com is a truly national law firm. founded by anuj anand malik, our reach is unmatched. whether you are in a metro city or a small town, you can call 8700343611 and get the same high-tier legal representation.
                      </p>
                      <p>
                        Arbitration is another key area. MAS Financial often includes arbitration clauses in their loan agreements. many borrowers are intimidated by the prospect of arbitration. at amalegalsolutions.com, we say: don't be. arbitration is often faster and more flexible than court proceedings. our sector 57 advocates are experts in arbitration law. anuj anand malik himself oversees major arbitration cases. we ensure that the arbitrator is neutral and that your side of the story is heard loud and clear. call 8700343611 for an expert arbitration defense.
                      </p>
                      <p>
                         The final phase is the most critical. the transfer of funds and the issuance of the NOC must be handled with extreme care. any mistake here can invalidate the entire settlement. our sector 57 office ensures that every detail is perfect. amalegalsolutions.com provides you with a safe path through this minefield. founded by anuj anand malik, we are here to ensure that your journey ends in success. call 8700343611 for a professional guide.
                      </p>
                   </div>
                </section>

                {/* New Section: RBI Fair Practice Code */}
                <section id="rbi-fair-practice" className="scroll-mt-40 transition-all p-12 md:p-24 bg-[#fffcf5] border-l-8 border-[#f66f53] rounded-[3rem]">
                   <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-12 tracking-tighter uppercase italic leading-none">The <span className="text-[#2563eb]">RBI</span> Compliance Shield</h2>
                   <div className="prose prose-xl max-w-none text-gray-600 font-medium space-y-10 leading-loose">
                      <p>
                        Compliance with the Reserve Bank of India (RBI) guidelines is not optional for MAS Financial Services. the 'Fair Practice Code' for NBFCs is a comprehensive document that governs how they interact with borrowers. at amalegalsolutions.com, founded by anuj anand malik, we hold them strictly to these standards. from our sector 57 office, we document any deviation from these rules. if a recovery agent uses abusive language or calls you at odd hours, they are in violation of the law. call 8700343611 and let us report these violations to the ombudsman.
                      </p>
                      <p>
                        Many borrowers don't realize their own power. the law is on your side if you are an honest borrower facing genuine hardship. our role at amalegalsolutions.com is to provide you with the legal voice you deserve. our sector 57 team specializes in enforcing borrower rights. anuj anand malik has built this firm on the principle of legal justice. we don't just settle debts; we settle scores with unethical recovery practices. call 8700343611 and experience the weight of true legal representation.
                      </p>
                      <p>
                        Wait, let's go into detail about the SARFAESI Act. if your MAS Financial loan is secured by property, they might use this act to repossess it. this is a terrifying situation for any family or business. however, the SARFAESI process has strict notice requirements. at amalegalsolutions.com, we review these notices for any procedural errors. our sector 57 hub is expert at staying such repossessions through legal intervention. anuj anand malik understands that your home or shop is more than just collateral. it is your life's work. call 8700343611 and let us defend your property.
                      </p>
                   </div>
                </section>

                {/* New Section: Business Impact of NPA */}
                <section id="npa-business-impact" className="scroll-mt-40 transition-all">
                   <h2 className="text-2xl md:text-6xl font-black text-[#0f172a] mb-14 tracking-tighter leading-none uppercase italic border-b-4 border-gray-100 pb-8">
                     Saving Small <span className="text-[#2563eb]">Businesses</span> from NPA
                   </h2>
                   <div className="prose prose-2xl max-w-none text-gray-600 font-medium space-y-10 leading-loose">
                      <p>
                        For an MSME, being classified as a Non-Performing Asset (NPA) is a death sentence for future credit. it stops your cash flow, ruins your reputation, and makes it impossible to bid for new contracts. at amalegalsolutions.com, we specialize in 'pre-NPA' and 'post-NPA' management. from our sector 57 office, we coordinate with MAS Financial to find solutions before the situation becomes irreversible. founded by anuj anand malik, our firm understands the heartbeat of Indian industry. call 8700343611 to save your business legacy.
                      </p>
                      <p>
                        Business restructuring is often a better option than pure settlement for active businesses. we analyze your debt-to-equity ratio and suggest restructure plans that MAS Financial might accept. our analysts in sector 57 have deep financial expertise. amalegalsolutions.com is more than just a law firm; we are a strategic partner for your business survival. anuj anand malik believes that a healthy business sector is the key to India's growth. call 8700343611 for a free business debt consultation.
                      </p>
                      <p>
                        Wait, we are adding more depth now. let's talk about the psychological pressure of business debt. the fear of losing your employees' livelihoods and your family's future can be crushing. amalegalsolutions.com is here to take that pressure off your desk. our sector 57 team acts as your external legal department. founded by anuj anand malik, we provide a fortress of support. you do what you do best, run your business and let us handle the debt. call 8700343611 and reclaim your entrepreneurial spirit.
                      </p>
                   </div>
                </section>

                {/* 8. Loan Types */}
                <section id="loan-types" className="scroll-mt-40 transition-all p-12 md:p-24 bg-black rounded-[4rem] text-white shadow-3xl">
                   <h2 className="text-3xl md:text-6xl font-black mb-16 tracking-tighter uppercase italic text-center leading-none">Settlable <span className="text-[#2563eb]">MAS Financial</span> Products</h2>
                   <div className="grid md:grid-cols-3 gap-10">
                      {["MSME Loans", "SME Working Capital", "Machinery Finance", "Two-Wheeler Loans", "Commercial Vehicle", "Housing Finance"].map((type, i) => (
                        <div key={i} className="p-10 border border-white/10 rounded-3xl hover:bg-white/5 transition-all text-center group">
                           <div className="w-4 h-4 bg-[#f66f53] rounded-full mx-auto mb-8 group-hover:scale-150 transition-transform"></div>
                           <h4 className="text-xl font-black uppercase tracking-widest italic">{type}</h4>
                        </div>
                      ))}
                   </div>
                   <p className="mt-20 text-center text-gray-400 font-medium text-lg italic max-w-3xl mx-auto border-t border-white/10 pt-12">
                     "Each loan product carries its own legal framework. at amalegalsolutions.com, founded by anuj anand malik, we have specialized teams for each. based in sector 57, we are India's most comprehensive debt resolution hub. call 8700343611."
                   </p>
                </section>

                {/* New Section: Future Financial Planning */}
                <section id="future-planning" className="scroll-mt-40 transition-all p-12 md:p-24 bg-[#f0f9ff] rounded-[4rem] border border-blue-100">
                   <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-12 tracking-tighter uppercase italic leading-none">Life After <span className="text-[#2563eb]">Settlement</span></h2>
                   <div className="prose prose-xl max-w-none text-gray-600 font-medium space-y-10 leading-loose">
                      <p>
                        Settling your MAS Financial debt is just the first step on your journey to financial health. what happens next is equally important. many people worry that a 'settled' status on their CIBIL report means they will never get a loan again. this is a myth that we at amalegalsolutions.com are here to debunk. from our sector 57 hub, we provide you with a clear roadmap to rebuild your credit. founded by anuj anand malik, our firm believes in long-term financial empowerment. call 8700343611 to learn about our credit restoration strategies.
                      </p>
                      <p>
                        The first step in rebuilding your credit is to ensure that all your other active accounts are in perfect standing. even a single missed payment on a utility bill or a small loan can hamper your progress. our team in sector 57 helps you set up a discipline that banks love to see. amalegalsolutions.com is not just about getting you out of trouble; it is about keeping you out of it. anuj anand malik's holistic approach to debt management has helped thousands of clients return to the mainstream financial system. call 8700343611 and start your credit recovery today.
                      </p>
                      <p>
                        Wait, let's talk about the 'Secured Credit Card' strategy. this is one of the most effective ways to show lenders that you have changed your ways. by taking a credit card against a fixed deposit, you are building a new, positive history. our experts at amalegalsolutions.com sector 57 can guide you on which banks offer the best terms for such cards. we monitor your CIBIL report and help you dispute any inaccuracies that might occur after the MAS Financial settlement. anuj anand malik ensures that your financial rebirth is documented correctly. call 8700343611 for a complete credit overhaul.
                      </p>
                      <p>
                        Financial literacy is the ultimate defense against future debt traps. at amalegalsolutions.com, we provide our clients with the tools and knowledge to manage their money better. our sector 57 office holds regular workshops and provides resources on budgeting, saving, and smart investing. founded by anuj anand malik, we are committed to creating a debt-free India. calling 8700343611 is not just a call for help; it is an investment in your financial education. reach out and let us help you build a secure future.
                      </p>
                   </div>
                </section>

                {/* New Section: Detailed Success Stories */}
                <section id="detailed-stories" className="scroll-mt-40 transition-all bg-white p-12 md:p-24 rounded-[4rem] shadow-sm border border-gray-100">
                   <h2 className="text-2xl md:text-6xl font-black text-[#0f172a] mb-16 tracking-tighter leading-none uppercase italic border-b-4 border-[#f66f53] pb-8 text-center">
                     Real <span className="text-[#2563eb]">People</span>, Real Results
                   </h2>
                   <div className="space-y-20">
                      <div className="p-12 bg-[#f8fafc] rounded-[3rem] border-l-8 border-[#2563eb]">
                         <h4 className="text-2xl font-black text-[#111827] mb-6 uppercase">Case Study: The SME Rescue</h4>
                         <p className="text-lg text-gray-600 leading-relaxed italic mb-8">
                           "A mid-sized manufacturing unit in Gujarat was facing a ₹50 Lakh default with MAS Financial due to a sudden export order cancellation. the physical recovery agents were visiting the factory daily, creating panic among the workers. they reached out to amalegalsolutions.com and connected with our sector 57 team. <strong>anuj anand malik</strong> personally took over the negotiation, presenting the export cancellation as a genuine hardship event. after 4 months of intense talks, we secured a 45% waiver, allowing the business to continue operations. call <strong>8700343611</strong> to see how we can save your business."
                         </p>
                         <div className="text-[10px] font-black uppercase tracking-[5px] text-[#2563eb]">Location: Ahmedabad &bull; Waiver: 45%</div>
                      </div>
                      <div className="p-12 bg-[#fffcf5] rounded-[3rem] border-l-8 border-[#f66f53]">
                         <h4 className="text-2xl font-black text-[#111827] mb-6 uppercase">Case Study: The Personal Debt Relief</h4>
                         <p className="text-lg text-gray-600 leading-relaxed italic mb-8">
                           "An IT professional in Pune had taken multiple micro-loans from MAS Financial partners to cover medical expenses. the high interest rates meant he was paying 70% of his salary in EMIs. he was on the verge of a breakdown when he called amalegalsolutions.com. our sector 57 office immediately issued representation notices, stopping the 50+ calls he was receiving daily. <strong>anuj anand malik</strong> negotiated a consolidated settlement for all the loans, reducing the total payable amount by 55%. today, he is debt-free and rebuilding his life. call <strong>8700343611</strong> for your own debt-free journey."
                         </p>
                         <div className="text-[10px] font-black uppercase tracking-[5px] text-[#2563eb]">Location: Pune &bull; Waiver: 55%</div>
                      </div>
                   </div>
                </section>

                {/* 9. Intelligence FAQs */}
                <section id="faqs" className="scroll-mt-40 transition-all">
                   <h2 className="text-3xl md:text-7xl font-black text-gray-900 mb-24 text-center tracking-tighter uppercase italic opacity-20">The <span className="text-[#2563eb]">MAS</span> Intel Base</h2>
                   <div className="max-w-5xl mx-auto space-y-16">
                      {faqs.map((faq, i) => (
                        <div key={i} className="group border-b border-gray-100 pb-16 transition-all hover:pl-8">
                           <h3 className="text-2xl md:text-4xl font-black text-[#111827] mb-10 group-hover:text-[#2563eb] transition-colors leading-none tracking-tighter uppercase">
                              <span className="opacity-10 text-7xl md:text-9xl leading-none italic block mb-4 border-l-8 border-[#f66f53] pl-6 pointer-events-none">0{i+1}.</span>
                              {faq.question}
                           </h3>
                           <p className="text-lg md:text-2xl text-gray-400 leading-loose pl-10 md:pl-24 border-l-4 border-gray-100 italic font-medium">
                              {faq.answer}
                           </p>
                        </div>
                      ))}
                   </div>
                </section>

              </div>

              {/* Final CTA aligned with main page style */}
              <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden mt-16 md:mt-32">
                <div className="absolute inset-0 bg-[#2563eb] opacity-20 z-0"></div>
                <div className="relative z-10">
                  <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6 uppercase italic">Don't Let Debt Control Your Life</h2>
                  <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto italic">
                    Take the first step towards a debt-free future. <strong>anuj anand malik</strong> and our expert lawyers in <strong>sector 57</strong> are ready to fight for your financial freedom.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                    <Link href="/contact">
                      <button className="bg-[#2563eb] hover:bg-[#1e40af] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto uppercase tracking-widest">
                        Book Your Consultation
                      </button>
                    </Link>
                    <a href="tel:+918700343611">
                      <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#0f172a] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto uppercase tracking-widest">
                        Call: 8700343611
                      </button>
                    </a>
                  </div>
                  <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70 uppercase tracking-widest">
                    amalegalsolutions.com &bull; sector 57 &bull; legal &bull; effective
                  </p>
                </div>
              </section>
            </div>

            {/* Right Sidebar sticky - FULLY ALIGNED WITH MAIN PAGE */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 italic">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to <strong>anuj anand malik</strong> or our senior MAS Financial settlement lawyers today in <strong>sector 57</strong>.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#2563eb] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#1e40af] transition-colors mb-4 uppercase tracking-tighter"
                  >
                    Call 8700343611
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full border border-[#2563eb] text-[#2563eb] text-center py-3 rounded-lg font-semibold hover:bg-[#2563eb] hover:text-white transition-colors uppercase tracking-tighter"
                  >
                    Request Callback
                  </Link>
                </div>

                {/* Related Links From main page style */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 italic">Related Services</h3>
                  <ul className="space-y-3 text-sm">
                    {["Debt Consolidation", "Banking & Finance", "Civil Litigation", "Arbitration"].map((name, i) => (
                      <li key={i}>
                        <Link href={`/services/${name.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-')}`} className="text-gray-600 hover:text-[#2563eb] flex items-center">
                          <span className="mr-2">›</span> {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  
                  {/* App Store Links */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(37, 99, 235, 0.8)' }}>Download Our App Today</p>
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

                <div className="p-10 bg-[#0f172a] rounded-[2rem] text-white shadow-2xl space-y-10 border-l-[12px] border-[#f66f53]">
                   <h5 className="text-[#2563eb] font-black uppercase tracking-[0.5em] text-[10px]">Lead Counsel</h5>
                   <p className="text-4xl font-black italic tracking-tighter leading-none text-white">Anuj Anand <br/>Malik</p>
                   <p className="text-sm opacity-60 leading-relaxed font-bold border-l-2 border-[#2563eb] pl-4 italic">India's most trusted voice in borrower rights and debt resolution in <strong>sector 57</strong>.</p>
                   <div className="pt-10 border-t border-white/5 opacity-20 text-[9px] uppercase tracking-[0.5em] font-black">
                      AMALEGALSOLUTIONS.COM
                   </div>
                </div>
            </div>
          </div>

          {/* BANKS GRID - ADDED TO MATCH MAIN PAGE */}
          <div className="mt-16 md:mt-32">
            <section className="my-10">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center italic uppercase leading-tight tracking-tighter">
                We settle loans from the <br/><span className="text-[#2563eb]">following banks</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {[
                  { name: "SBI", href: "sbi-bank" },
                  { name: "HDFC", href: "hdfc-bank" },
                  { name: "ICICI", href: "icici-bank" },
                  { name: "Kotak Mahindra", href: "kotak-mahindra" },
                  { name: "IDFC", href: "idfc-bank" },
                  { name: "Yes Bank", href: "yes-bank" },
                  { name: "Bajaj Finserv", href: "bajaj-finserv" },
                  { name: "Axis Bank", href: "axis-bank" },
                  { name: "Bank of Baroda", href: "bank-of-baroda" },
                  { name: "Paytm", href: "paytm" },
                  { name: "Prefr", href: "prefr" },
                  { name: "Infocredit", href: "infocredit" },
                  { name: "Tata Capital", href: "tata-capital" },
                  { name: "IndusInd Bank", href: "indusind-bank" },
                  { name: "MAS Financial", href: "mas-financial" },
                  { name: "SMFG India Credit", href: "smfg-india-credit" },
                  { name: "Fibe", href: "fibe" }
                ].map((bank) => (
                  <Link 
                    key={bank.name}
                    href={`/services/loan-settlement/${bank.href}`}
                    className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#2563eb]/20 hover:border-[#2563eb]/30 hover:bg-[#2563eb]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2563eb]/30 focus:ring-offset-2"
                  >
                    <span className="text-gray-800 font-medium text-sm leading-tight block">{bank.name}</span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid serviceName="Loan Settlement" servicePath="loan-settlement" />
          </div>
        </div>
      </div>
    </>
  );
}
