import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What exactly is a loan recall notice in India?",
    answer: "A loan recall notice is a formal legal demand issued by a bank or financial institution that requires the borrower to repay the entire outstanding loan amount immediately. Unlike a regular demand notice where the bank asks for overdue EMIs, a recall notice effectively terminates the loan agreement's installment-based repayment structure. This usually happens after continuous defaults or when the lender believes the borrower can no longer service the debt. At AMA Legal Solutions, founded by Anuj Anand Malik and based in Sector 57, we help clients handle these notices professionally."
  },
  {
    question: "Is it legal for a bank to recall the entire loan amount?",
    answer: "Yes, it is legally permissible. All loan agreements signed between a borrower and a lender contain a 'Right of Recall' clause. This clause gives the bank the authority to demand the full repayment if there is a breach of contract, such as missing three or more consecutive EMIs. Once the notice is issued, the borrower's right to pay in installments is revoked. If you face such a situation, contacting Anuj Anand Malik at 8700343611 for legal guidance at amalegalsolutions.com is highly recommended."
  },
  {
    question: "How much time do I have to respond after receiving a recall notice?",
    answer: "Typically, a bank provides 7 to 15 days in a standard recall notice to repay the full dues. However, if the notice is issued under the SARFAESI Act, you usually have 60 days to clear the dues or submit a formal objection. Ignoring this timeline can lead to the bank taking physical possession of your property. AMA Legal Solutions in Sector 57 specializes in responding to these notices within the legal timeframe to protect your assets."
  },
  {
    question: "Can AMA Legal Solutions stop the bank from seizing my property after a recall notice?",
    answer: "While no firm can provide an absolute guarantee, AMA Legal Solutions, led by Anuj Anand Malik, has a high success rate in obtaining stay orders from the Debt Recovery Tribunal (DRT) if the bank has failed to follow procedural laws. We also negotiate with the bank's head office in Sector 57 and beyond to find a middle ground through a One Time Settlement (OTS), which can prevent the auction of your property."
  },
  {
    question: "What happens if I ignore a loan recall notice?",
    answer: "Ignoring a recall notice is the worst possible action. It gives the bank a clear path to initiate legal proceedings under the SARFAESI Act or file a recovery suit in the DRT. It also allows them to report you as a wilful defaulter to credit bureaus, which destroys your financial reputation. Instead, reach out to amalegalsolutions.com or call 8700343611 to discuss your legal options with experts at our Sector 57 office."
  },
  {
    question: "Can I still settle the loan after receiving a recall notice?",
    answer: "Yes, settlement is still possible. In fact, many banks prefer a negotiated settlement over a long-drawn legal battle. We at AMA Legal Solutions, founded by Anuj Anand Malik, specialize in 'Post-Recall Negotiations.' We help you secure an OTS deal where you might only need to pay a portion of the principal and get the interest waived. Visit our office in Sector 57 for a detailed case analysis."
  },
  {
    question: "Does receiving a recall notice mean I will definitely lose my house?",
    answer: "Not necessarily. A recall notice is the first step in a long recovery process. You have the right to challenge the notice, negotiate for more time, or offer a settlement. By engaging a professional firm like AMA Legal Solutions, you can leverage legal loopholes and negotiation tactics to save your home. You can reach our team at 8700343611 for immediate assistance."
  },
  {
    question: "What is the difference between a demand notice and a recall notice?",
    answer: "A demand notice asks for the payment of overdue EMIs and penalties to regularize the account. A recall notice, however, demands the full outstanding balance of the loan, including all future principal amounts. Essentially, a recall notice means the bank no longer trusts you to pay in installments. Anuj Anand Malik and his team at amalegalsolutions.com have handled thousands of such cases from their Sector 57 headquarters."
  },
  {
    question: "Can the bank harass me at my home after issuing a recall notice?",
    answer: "Harassment is illegal at any stage of the recovery process. RBI guidelines strictly prohibit recovery agents from using abusive language or visiting your home at odd hours. If you are being harassed, AMA Legal Solutions can send a strong legal notice to the bank's nodal officer, often stopping the harassment overnight. Our office in Sector 57 is dedicated to protecting borrowers' rights."
  },
  {
    question: "Will a recall notice affect my future job prospects?",
    answer: "Directly, no. However, a recall notice leads to a severe drop in your CIBIL score. Many corporate employers, especially in finance and tech, now check CIBIL scores during background verification. A poor score can be a red flag. Settling the debt through experts at amalegalsolutions.com can help you manage the damage and plan for a better financial future. Call 8700343611 to start your recovery journey today."
  },
  {
    question: "What should I check first in a loan recall notice?",
    answer: "The first thing to check is the accuracy of the outstanding amount and the date of default. Banks often add excessive penal interest and hidden legal charges that can be disputed. Anuj Anand Malik and his team at AMA Legal Solutions in Sector 57 specialize in forensic audits of such notices to ensure the bank is not overcharging you. You can upload your notice at amalegalsolutions.com for a free initial review."
  },
  {
    question: "Is Section 13(2) of SARFAESI Act the same as a recall notice?",
    answer: "A Section 13(2) notice is a specific type of recall-cum-demand notice issued for secured loans. It gives the borrower 60 days to either pay the full dues or provide a formal representation or objection. It is a precursor to the bank taking symbolic possession of the property. If you receive such a notice, immediately call 8700343611 to speak with experts at AMA Legal Solutions in Sector 57."
  },
  {
    question: "Can I sell my property to pay off the recall amount?",
    answer: "Yes, but you usually need the bank's permission if the property is mortgaged with them. Often, a 'tripartite agreement' can be reached where the buyer pays the bank directly. AMA Legal Solutions, led by Anuj Anand Malik, has helped many clients sell their assets at fair market value to clear their debts and save themselves from the legal burden of an auction."
  },
  {
    question: "How does Anuj Anand Malik help in DRT cases?",
    answer: "Anuj Anand Malik is an expert in DRT (Debt Recovery Tribunal) litigation. He identifies procedural loopholes in the bank's notices and filing processes. If the bank has not followed the strict timelines of the SARFAESI ACT, he can file an application to set aside the bank's recovery actions. Visit amalegalsolutions.com to read about our successful cases in Sector 57 and across India."
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
      "name": "Articles",
      "item": "https://www.amalegalsolutions.com/articles"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Bank Recall Notice",
      "item": "https://www.amalegalsolutions.com/what-happens-after-bank-issues-recall-notice"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Happens After Bank Issues Recall Notice? | Legal Guide by AMA Legal Solutions",
  "description": "Comprehensive guide on what happens after a bank issues a loan recall notice in India. Learn legal steps, consumer rights, and how Anuj Anand Malik and AMA Legal Solutions help borrowers.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
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
  "name": "Recall Notice Legal Assistance",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal help for bank recall notices in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "840"
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
        "name": "Vikram Singh"
      },
      "reviewBody": "Receiving a recall notice was the scariest moment of my life. Anuj Anand Malik and his team at AMA Legal Solutions in Sector 57 took over the case and negotiated a brilliant settlement for me. Truly life-saving."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sonia Verma"
      },
      "reviewBody": "Highly professional. They handled my home loan recall notice with HDFC Bank. amalegalsolutions.com is the place to go if you want results."
    }
  ]
};

export const metadata = {
  title: "What Happens After Bank Issues Recall Notice? Step-by-Step Guide",
  description:
    "Received a loan recall notice from your bank? Learn what happens next and how to protect your assets. Expert legal advice from Anuj Anand Malik at AMA Legal Solutions, Sector 57. Call 8700343611.",
  keywords: [
    "what happens after bank issues recall notice",
    "loan recall notice india",
    "bank recall notice response",
    "anuj anand malik",
    "ama legal solutions",
    "sector 57",
    "loan settlement lawyer",
    "sarfaesi act recall notice",
    "repay full loan amount",
    "bank legal notice response"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/what-happens-after-bank-issues-recall-notice',
  },
};

export default function RecallNoticePage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-recall", title: "What is Recall Notice?" },
    { id: "anatomy-notice", title: "Anatomy of Notice" },
    { id: "why-recall", title: "Why Banks Issue It?" },
    { id: "legal-implications", title: "Legal Implications" },
    { id: "sarfaesi-act", title: "The SARFAESI Factor" },
    { id: "bank-tactics", title: "Bank Tactics" },
    { id: "rbi-guidelines", title: "RBI Guidelines" },
    { id: "borrower-rights", title: "Your Rights" },
    { id: "ama-legal-role", title: "How AMA Helps" },
    { id: "negotiation-strategy", title: "Negotiation Strategy" },
    { id: "mental-health", title: "Psychological Toll" },
    { id: "checklist", title: "First 48 Hours" },
    { id: "reviews", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Articles", href: "/articles" },
    { label: "Bank Recall Notice", href: "/what-happens-after-bank-issues-recall-notice" },
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
        <div className="relative bg-[#000000] text-white overflow-hidden">
          {/* Subtle patterns instead of image */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'radial-gradient(circle at 20% 50%, rgba(210, 160, 42, 0.15) 0%, transparent 50%)' }}></div>
            <div className="absolute bottom-0 right-0 w-full h-full" style={{ background: 'radial-gradient(circle at 80% 50%, rgba(210, 160, 42, 0.1) 0%, transparent 50%)' }}></div>
          </div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              What Happens After <span className="text-[#D2A02A]">Bank Issues Recall Notice?</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Don't panic. Understand your legal rights and protect your assets from bank actions. Expert guidance from AMA Legal Solutions, Sector 57.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get Instant Legal Help
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <div className="mb-4">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">
            {/* Left Sidebar - TOC */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-100px)] overflow-y-auto pr-4">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* Review Snippets Display */}
              <div className="bg-white p-6 rounded-xl shadow-sm mb-8 border border-gray-100 flex items-center justify-between">
                <div>
                  <div className="flex text-[#D2A02A] mb-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s}>★</span>
                    ))}
                  </div>
                  <p className="text-sm font-semibold">Rated 4.9/5 based on 840+ client reviews</p>
                </div>
                <div className="text-right hidden sm:block">
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Expertise</p>
                  <p className="text-sm font-bold">Banking & Debt Law</p>
                </div>
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-[#D2A02A] pl-4">Introduction: Navigating the Crisis of a Loan Recall</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In the financial ecosystem of modern India, receiving a loan recall notice is perhaps one of the most stressful encounters a borrower can face. It is a moment where the comfort of monthly installments is abruptly taken away, and you are suddenly faced with the demand to pay your entire debt in one go. Whether it is a home loan from a major public sector bank or a personal loan from a digital NBFC, the implications are severe and immediate. However, it is essential to understand that a recall notice is not the end of the road but the beginning of a legal process where you still have rights and options. Many people feel that their world has collapsed when they see the words 'Recall Notice' on a bank letterhead, but with the right legal guidance, this crisis can be managed and resolved.
                    </p>
                    <p>
                      At <strong>AMA Legal Solutions</strong>, founded by the visionary <strong>Anuj Anand Malik</strong>, we have witnessed thousands of such cases across our years of practice. Based in <strong>Sector 57</strong>, we have built a reputation as the foremost experts in managing bank disputes and negotiating settlements that protect the interests of honest borrowers. This guide is designed to provide you with the clarity you need during this turbulent time. We will walk you through what happens after a bank issues a recall notice, the legal frameworks involved, and how you can navigate this successfully by visiting <strong>amalegalsolutions.com</strong> or calling our helpline at <strong>8700343611</strong>. Our mission is to bridge the gap between powerful financial institutions and individual borrowers who often feel voiceless in the face of legal threats.
                    </p>
                    <p>
                      The primary goal of this guide is to demystify the bank's tactics and empower you with information. In many cases, banks use recall notices as a psychological tool to force you into compliance, even when you have valid reasons for your financial distress. By understanding the rules of the game, you can transition from a state of panic to a state of strategic defense. Our team in Sector 57 is here to ensure that no borrower is left alone in their fight against banking giants. We believe that every financial problem has a legal solution, and our role is to find that solution for you while maintaining your dignity and peace of mind.
                    </p>
                    <p>
                      The history of debt recovery in India has often been skewed in favor of the lenders. However, with recent judicial pronouncements and RBI guidelines, the balance is slowly shifting. Borrowers now have better protections against high-handed recovery tactics. Anuj Anand Malik founded AMA Legal Solutions precisely to champion these rights. From our headquarters in Sector 57, Gurgaon, we have reached out to borrowers across the country, providing them with a shield against harassment and a path toward financial redemption. Whether you are dealing with a private bank, a nationalized bank, or an NBFC, the principles of fair treatment remain the same, and we are here to enforce them.
                    </p>
                  </div>
                </section>

                <section id="anatomy-notice" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-[#D2A02A] pl-4">The Anatomy of a Bank Recall Notice</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      A bank recall notice is not just a letter; it is a legal document with specific components that you must analyze carefully. Understanding each part of the notice can help you and your lawyer at AMA Legal Solutions build a strong defense. Typically, a notice will include the following sections:
                    </p>
                    <ul className="list-decimal pl-6 space-y-4">
                      <li><strong>The Reference Number and Date:</strong> This is the unique identifier for your case. The date is critical because it starts the countdown for your response. If a notice is backdated, it can be a ground for challenging it in court.</li>
                      <li><strong>The Outstanding Amount:</strong> This section should provide a clear breakup of the principal, interest, penal interest, and other charges. If the bank has added hidden fees, Anuj Anand Malik and his team in Sector 57 can help you dispute these calculations.</li>
                      <li><strong>The Reason for Recall:</strong> The bank must specify why they are recalling the loan. Is it due to non-payment of EMIs? Is it because of a drop in collateral value? A vague reason can often be challenged legally.</li>
                      <li><strong>The Demand for Full Repayment:</strong> This is the core of the notice. It will state that the entire outstanding amount must be paid within a very short period, usually 7 to 15 days.</li>
                      <li><strong>The Warning of Legal Action:</strong> The notice will conclude with a threat of initiating proceedings under the SARFAESI Act, filing a suit in the DRT, or taking criminal action under Section 138.</li>
                    </ul>
                    <p>
                      When you bring this notice to our Sector 57 office or upload it to amalegalsolutions.com, our first task is to verify its legal validity. Banks often use automated systems that may contain errors. A notice sent to an old address or one that does not comply with the specific requirements of the SARFAESI Act can be declared null and void. Protecting your rights starts with this microscopic analysis of the bank's communication.
                    </p>
                  </div>
                </section>

                {/* What is Recall Notice */}
                <section id="what-is-recall" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-[#D2A02A] pl-4">What Exactly is a Loan Recall Notice?</h2>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
                    <h3 className="text-xl font-bold mb-3 text-blue-900">Legal Definition</h3>
                    <p className="text-blue-800 italic">
                      A loan recall notice is a formal declaration by the lender that the entire outstanding loan balance is immediately due and payable. It terminates the borrower's privilege to repay the debt in monthly installments.
                    </p>
                  </div>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      To understand a recall notice, you must first look at your loan agreement. Most people sign these voluminous documents without reading every clause. Hidden within those pages is the 'Acceleration Clause' or the 'Right to Recall.' This clause states that in the event of various defaults, the bank can accelerate the repayment schedule and call back the entire amount.
                    </p>
                    <p>
                      It is crucial to distinguish between a regular demand notice and a recall notice. A demand notice is usually friendly or cautionary, asking you to pay the overdue EMIs and penalties to regularize the account. A recall notice is aggressive. It says: 'We no longer wish to continue our lending relationship with you. Pay the 50 Lakhs you owe us within 7 days, or we will take legal action.' This is when you should immediately visit amalegalsolutions.com to understand the gravity of the situation.
                    </p>
                    <p>
                      Once the notice is issued, the interest calculations often change. Many banks stop charging simple EMI interest and start applying penal interest on the entire outstanding amount. This can cause your debt to balloon at an alarming rate. This is why <strong>Anuj Anand Malik</strong> emphasizes the importance of a swift legal response. Waiting for a few months can add lakhs of rupees to your total debt, making a future settlement much more difficult to achieve.
                    </p>
                  </div>
                </section>

                {/* Why Recall */}
                <section id="why-recall" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-[#D2A02A] pl-4">Reasons Why Banks Issue Recall Notices</h2>
                  <p className="mb-6">Banks do not recall loans for minor reasons. They do it when they perceive a significant risk to their recovery. Common reasons include:</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg text-[#D2A02A] mb-3">Continuous Default</h4>
                      <p className="text-sm">When a borrower misses more than three consecutive EMIs, the bank classifies the account as a Non-Performing Asset (NPA). This is the most common trigger for a recall notice.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg text-[#D2A02A] mb-3">Breach of Terms</h4>
                      <p className="text-sm">Using a personal loan for business purposes or selling the property that was used as collateral without the bank's permission can trigger an immediate recall.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg text-[#D2A02A] mb-3">Deteriorating Finances</h4>
                      <p className="text-sm">If the bank discovers that your income has significantly dropped or that you have taken too many other loans from different banks, they may recall the loan to protect their interests before you file for insolvency.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-lg text-[#D2A02A] mb-3">Legal Disputes</h4>
                      <p className="text-sm">If there is a legal dispute involving the borrower that could lead to the freezing of their assets, the bank often steps in with a recall notice to claim their priority over those assets.</p>
                    </div>
                  </div>
                  <p className="mt-8 text-gray-600 italic">
                    If you believe your loan was recalled unfairly or without proper cause, our team at Sector 57, branch of AMA Legal Solutions can help you challenge the bank's decision. Call Anuj Anand Malik at 8700343611 for a consultation.
                  </p>
                </section>

                {/* Legal Implications */}
                <section id="legal-implications" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-[#D2A02A] pl-4">The Legal Repercussions of a Recall Notice</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      The moment a recall notice is delivered, the legal clock starts ticking. It is not just about the money anymore; it is about the legal consequences that follow. The bank has several arrows in its quiver. First, they can file a civil recovery suit in a court of law. This is a long-drawn process but can lead to a decree that allows the bank to attach your assets or even your salary. Civil suits can take years to resolve, providing a window for negotiation, but they also carry the risk of heavy court fees and legal costs being added to your debt.
                    </p>
                    <p>
                      Second, for loans where the amount is above 20 Lakhs, the bank can approach the <strong>Debt Recovery Tribunal (DRT)</strong>. The DRT is a specialized judicial body meant for fast-tracking bank recoveries. Proceedings here are faster than civil courts, and getting a stay order requires a very strong legal argument. This is precisely why having a dedicated firm like AMA Legal Solutions, led by Anuj Anand Malik, is indispensable. Our office in Sector 57 is well-versed in DRT procedures and can help you mount an effective defense. We have successfully obtained stay orders on auctions by proving that the bank has violated the principles of natural justice.
                    </p>
                    <p>
                      Third, there is the risk of criminal proceedings. If you had given post-dated cheques to the bank and they bounce during this period, the bank can file a case under Section 138 of the Negotiable Instruments Act. This is a criminal offense and can lead to imprisonment. At amalegalsolutions.com, we prioritize preventing such criminal escalations by coordinating with the bank's legal department early in the process. We also help clients handle 'Section 25' notices from the Payment and Settlement Systems Act, which are increasingly being used for digital repayment failures.
                    </p>
                    <p>
                      Fourth, your credit score will take a massive hit. A loan recall is reported as a 'Default' and 'Recalled' status to CIBIL. This effectively shuts the doors of all banks and NBFCs for you for several years. Rebuilding this requires settling the debt first. If you are struggling with these legal threats, call 8700343611 and speak to our senior consultants at our Sector 57 office today. We provide a roadmap for credit score recovery once the legal hurdles are cleared.
                    </p>
                    <p>
                      Lastly, the bank might initiate proceedings under the Insolvency and Bankruptcy Code (IBC) if the borrower is a corporate entity or a partnership firm. This can lead to the appointment of a resolution professional and the eventual liquidation of the company. Anuj Anand Malik and his team at amalegalsolutions.com offer specialized corporate debt restructuring services to prevent such a drastic outcome. By intervening early, we can often negotiate a settlement that keeps the business running while satisfying the bank's recovery requirements.
                    </p>
                  </div>
                </section>

                {/* SARFAESI Act */}
                <section id="sarfaesi-act" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-[#D2A02A] pl-4">The SARFAESI Factor: How it Changes the Game</h2>
                  <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                    <h3 className="text-2xl font-bold text-red-900 mb-4 uppercase">Critical Information</h3>
                    <p className="text-red-800 leading-relaxed">
                      If your loan is secured (Home Loan, Loan Against Property) and the amount is above 1 Lakh, the bank can invoke the **SARFAESI Act (Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002)**.
                    </p>
                    <ul className="mt-6 space-y-4 text-red-700 font-semibold">
                      <li className="flex items-start"><span className="mr-2">▶</span> Section 13(2) Notice: You get 60 days to pay or object.</li>
                      <li className="flex items-start"><span className="mr-2">▶</span> Section 13(4) Notice: The bank can take symbolic possession.</li>
                      <li className="flex items-start"><span className="mr-2">▶</span> Physical Possession: The bank can apply to the Magistrate to evict the occupants.</li>
                      <li className="flex items-start"><span className="mr-2">▶</span> Auction: The bank can sell your property to recover dues.</li>
                    </ul>
                  </div>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6 mt-8">
                    <p>
                        The SARFAESI Act was enacted to provide a faster recovery mechanism for banks and financial institutions. However, it is often misused. Anuj Anand Malik has identified that banks often fail to comply with the mandatory notice periods. For instance, the notice under Section 13(2) must be signed by an 'Authorized Officer' of a certain rank. If a junior clerk signs it, the entire process can be challenged in the DRT.
                    </p>
                    <p>
                        Furthermore, the 'Valuation Report' used for auctions is a frequent point of legal contention. Banks often get properties valued at a fraction of their real market price to ensure a quick sale. At our Sector 57 office, we work with independent certified valuers to prove that the bank is attempting a 'Fire Sale' which is illegal. Protecting your asset's value is as important as settling the debt.
                    </p>
                  </div>
                </section>

                <section id="bank-tactics" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-[#D2A02A] pl-4">Common Tactic Used by Banks After a Recall</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                        Banks are not just legal entities; they are commercial organizations focused on their bottom line. After a recall notice, they employ several psychological and procedural tactics to maximize recovery:
                    </p>
                    <ul className="list-disc pl-6 space-y-4">
                        <li><strong>The 'Final Offer' Trap:</strong> Banks often send letters labeled 'Final Opportunity for Settlement' with a deadline of 24 hours. This is almost never the final offer. It is a pressure tactic to make you pay without negotiation.</li>
                        <li><strong>Third-Party Harassment:</strong> By 'outsourcing' recovery to agencies, banks try to distance themselves from aggressive behavior. <strong>AMA Legal Solutions</strong> holds the bank's principal officers directly responsible for any misconduct by their agents.</li>
                        <li><strong>CIBIL Reporting as a Weapon:</strong> They use the threat of a ruined credit score to force payments. While the damage is real, it is also reversible through a proper 'Settled' or 'Closed' NOC which we help you obtain in Sector 57.</li>
                        <li><strong>Vague Settlement Terms:</strong> Sometimes, banks offer a settlement verbally but refuse to provide a written 'Settlement Letter' on the bank's letterhead. Anuj Anand Malik strictly advises never paying a single rupee until a formal letter is received and verified at amalegalsolutions.com.</li>
                    </ul>
                    <p>
                        Awareness of these tactics is your first line of defense. When you visit us in Sector 57, we peel back the layers of the bank's communication to show you the reality of the situation. Most banks are actually eager to settle because a settled account looks better on their balance sheet than a long-pending NPA.
                    </p>
                  </div>
                </section>

                <section id="rbi-guidelines" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-[#D2A02A] pl-4">The RBI Master Circular on Debt Recovery</h2>
                    <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                        <p>
                            The Reserve Bank of India has issued clear guidelines on how debt recovery should be handled. Any bank found violating these can face heavy penalties and their recovery actions can be stayed by the courts. Some key points from the circular include:
                        </p>
                        <ul className="list-disc pl-6 space-y-4">
                            <li><strong>Time of Visits:</strong> Recovery agents can only visit your home between 8:00 AM and 7:00 PM.</li>
                            <li><strong>Respect for Privacy:</strong> Agents cannot share your debt details with anyone except you or your legal representative.</li>
                            <li><strong>No Physical Force:</strong> The use of muscle power is strictly prohibited.</li>
                            <li><strong>Grievance Redressal:</strong> Every bank must have a dedicated nodal officer to handle complaints against recovery agents.</li>
                        </ul>
                        <p>
                            If your rights under the RBI circular have been violated, call 8700343611. Our team at AMA Legal Solutions, Sector 57, will help you file a formal complaint that can halt the recovery process and give us an upper hand in settlement negotiations. <strong>Anuj Anand Malik</strong> has repeatedly stated that 'A borrower's right to dignity is supreme, even in default.'
                        </p>
                    </div>
                </section>

                {/* Your Rights */}
                <section id="borrower-rights" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-[#D2A02A] pl-4">Know Your Rights as a Defaulter</h2>
                  <p className="text-lg mb-8">Being a defaulter does not make you a criminal. The Constitution of India and the RBI provide you with several protections:</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-lg mb-2">Right to Notice</h4>
                      <p className="text-sm">You must be given adequate time to reply to any legal action. Banks cannot take your assets without proper prior notice.</p>
                    </div>
                    <div className="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-lg mb-2">Right to Privacy</h4>
                      <p className="text-sm">Recovery agents cannot call your friends, neighbors, or relatives to shame you about your debt. This is a gross violation of RBI guidelines.</p>
                    </div>
                    <div className="p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold text-lg mb-2">Right to Fair Value</h4>
                      <p className="text-sm">If your property is being auctioned, you have the right to ensure it is sold at a fair market price. You can challenge an undervalued auction price.</p>
                    </div>
                  </div>
                  <div className="mt-8 bg-black text-white p-8 rounded-2xl">
                    <h4 className="text-xl font-bold mb-4">Harassment Protection</h4>
                    <p>If you are being harassed, call 8700343611. AMA Legal Solutions specializes in stopping recovery harassment. We can file complaints with the RBI Ombudsman and local police against unruly agents. Our Sector 57 office has a dedicated cell for anti-harassment legal actions.</p>
                  </div>
                </section>

                {/* How AMA Helps */}
                <section id="ama-legal-role" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-[#D2A02A] pl-4">The Role of AMA Legal Solutions and Anuj Anand Malik</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed lg:flex gap-12 items-center">
                    <div className="lg:w-1/2 space-y-6">
                      <p>
                        When a person receives a loan recall notice, they are often at their weakest point emotionally. Banks leverage this fear. AMA Legal Solutions, founded by <strong>Anuj Anand Malik</strong>, acts as a shield between you and the lender. We take over all communication, meaning the bank can no longer call you; they must call us.
                      </p>
                      <p>
                        Our office in <strong>Sector 57</strong> is a hub of strategic legal planning. We categorize our approach into Assessment, Intervention, and Negotiation. We don't just send generic replies; we craft bespoke legal letters that show the bank you have expert representation. This alone often makes the bank offer a better settlement deal.
                      </p>
                      <p>
                        Visit <strong>amalegalsolutions.com</strong> to read more about our philosophy. We believe in providing 'Justice for the Borrower.' Anuj Anand Malik has been a vocal advocate for reforms in banking laws to prevent the exploitation of common people. When you hire us, you are not just getting a lawyer; you are getting a team that cares about your financial recovery.
                      </p>
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <div className="bg-[#1a202c] text-white p-8 rounded-3xl relative overflow-hidden">
                            <h4 className="text-2xl font-bold mb-4 z-10 relative">Why thousands choose us?</h4>
                            <ul className="space-y-4 z-10 relative">
                                <li className="flex items-center"><span className="text-[#D2A02A] mr-2">✔</span> Legally stops bank harassment.</li>
                                <li className="flex items-center"><span className="text-[#D2A02A] mr-2">✔</span> Expert representation in DRT.</li>
                                <li className="flex items-center"><span className="text-[#D2A02A] mr-2">✔</span> Achieved 30-70% debt waivers.</li>
                                <li className="flex items-center"><span className="text-[#D2A02A] mr-2">✔</span> Located conveniently in Sector 57.</li>
                                <li className="flex items-center"><span className="text-[#D2A02A] mr-2">✔</span> Direct access to Anuj Anand Malik.</li>
                            </ul>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2A02A] rounded-full -mr-16 -mt-16 opacity-20"></div>
                        </div>
                    </div>
                  </div>
                </section>

                {/* Negotiation Strategy */}
                <section id="negotiation-strategy" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-[#D2A02A] pl-4">Strategic Negotiation: The Path to Settlement</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      The ultimate goal after a recall notice is to settle the debt. Paying the full amount is often impossible for someone who has already defaulted. Strategic negotiation is about showing the bank that a partial recovery now is better than a zero recovery later. This is where the expertise of <strong>AMA Legal Solutions</strong> and <strong>Anuj Anand Malik</strong> comes into play. We understand the internal psychology of banks and the pressure their recovery officers are under.
                    </p>
                    <p>
                      We use what we call 'Financial Hardship Bundles' to build your case. We compile your medical bills, termination letters, bank statements showing loss of income, and other evidence to prove to the bank's credit committee that your default was genuine and not wilful. This evidence-based approach is what helps us secure massive waivers on interest and penalties. We have settled cases for 30% of the original outstanding amount, saving our clients crores of rupees. Our team at Sector 57 is trained to present these facts in a manner that leaves the bank with no choice but to offer a favorable OTS.
                    </p>
                    <p>
                      Negotiations happen at multiple levels: from the local branch to the regional recovery office to the head office nodal officer. Often, a local branch manager might not have the authority to waive a large amount, but a regional manager might. Our team in Sector 57 knows exactly which levels to target and when to escalate the matter. We also leverage the 'Lok Adalat' system where settlements can be formalized with the seal of a judicial body, making them iron-clad. If you want to know if your case is eligible for a deep-discount settlement, visit amalegalsolutions.com or call 8700343611 for an instant assessment.
                    </p>
                    <p>
                      Another advanced strategy we employ is 'Interest Swapping' or 'Restructuring with Moratorium.' If a borrower has a temporary cash flow problem but expects a windfall in the future, we can convince the bank to stop the penal interest and allow for a 6 to 12 month payment holiday. This gives the borrower breathing room to rearrange their finances without the fear of immediate asset seizure. Such creative solutions are what make Anuj Anand Malik a leader in the field of debt law. We don't believe in one-size-fits-all solutions; every case at our Sector 57 office is treated with the individual attention it deserves.
                    </p>
                  </div>
                </section>

                <section id="mental-health" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-[#D2A02A] pl-4">Dealing with the Psychological Toll of Debt</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      At AMA Legal Solutions, we recognize that debt is not just a financial or legal issue; it is deeply personal and emotional. The constant fear of losing one's home, the shame associated with default, and the persistent calls from recovery agents can lead to severe anxiety, depression, and even family breakdown. Anuj Anand Malik has always advocated for a compassionate approach to debt recovery. He founded this firm in Sector 57 with the belief that a lawyer's job is not just to file papers but to be a pillar of support for their clients.
                    </p>
                    <p>
                      Our 'First Response Protocol' includes a dedicated counseling session for clients receiving a recall notice. We help you understand that a financial setback is not a reflection of your character. By taking the legal burden off your shoulders, we allow you to focus on rebuilding your life. Once you hire us at 8700343611, the harassment stops. This peace of mind is the first step toward finding a sustainable solution. Visit amalegalsolutions.com to see how we have helped thousands of families regain their mental peace while we handle the legal complexities in Sector 57.
                    </p>
                    <p>
                      We also encourage our clients to join our support groups where they can interact with others who have successfully navigated similar crises. Knowing that you are not alone can be a powerful motivator. In Sector 57, we have created a space where people can talk about their financial struggles without judgment. Our legal solutions are effective precisely because they are rooted in this human understanding. If the stress of a recall notice is becoming too much to handle, do not suffer in silence. Reach out to us today.
                    </p>
                  </div>
                </section>

                <section id="checklist" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-4 border-[#D2A02A] pl-4">The First 48 Hours: Your Emergency Checklist</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                        What you do in the first 48 hours after receiving a recall notice can determine the outcome of your case. Anuj Anand Malik recommends the following immediate actions:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4">
                        <li><strong>Stay Calm:</strong> Panic leads to poor decisions. Remember, you have legal rights.</li>
                        <li><strong>Read the Notice Twice:</strong> Note the dates, the amounts, and the specific laws cited (SARFAESI, Section 138, etc.).</li>
                        <li><strong>Preserve the Envelope:</strong> The postmark on the envelope is proof of when you received the notice. This is vital for calculating response deadlines.</li>
                        <li><strong>Do Not Call the Agent:</strong> Avoid speaking with recovery agents directly. They are trained to extract admissions of debt from you. Let your lawyer at AMA Legal Solutions handle them.</li>
                        <li><strong>Gather Your Financials:</strong> Locate your original loan agreement, your last 12 months of bank statements, and any communication you previously had with the bank.</li>
                        <li><strong>Visit amalegalsolutions.com:</strong> Upload your notice for an expert review.</li>
                        <li><strong>Call 8700343611:</strong> Schedule an emergency consultation at our Sector 57 office.</li>
                    </ol>
                    <p>
                        By following this checklist, you prevent the bank from gaining an unfair advantage. Most borrowers make the mistake of begging the bank for more time over the phone, which the bank later uses to prove that you acknowledged the debt and failed to pay. Legal representation from Sector 57 ensures that every word you say to the bank is calculated and legally sound.
                    </p>
                  </div>
                </section>

                {/* Verified Reviews Section */}
                <section id="reviews" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 border-l-4 border-[#D2A02A] pl-4">Verified Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative">
                        <div className="flex text-[#D2A02A] mb-4">★★★★★</div>
                        <p className="text-gray-700 italic mb-6">"My life was literally stuck after getting the recall notice from Axis Bank for my personal loan. I visited Anuj Anand Malik sir at Sector 57 Gurgaon office. He not only stopped the harassment from agents but also settled the entire 12 Lakhs debt for just 4 Lakhs. AMA Legal Solutions is the best in the business."</p>
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-4 text-xl">R</div>
                            <div>
                                <h4 className="font-bold text-gray-900">Rohit Batra</h4>
                                <p className="text-xs text-gray-500">Business Owner, New Delhi</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative">
                        <div className="flex text-[#D2A02A] mb-4">★★★★★</div>
                        <p className="text-gray-700 italic mb-6">"I was receiving threats of property seizure under SARFAESI. Anuj Malik handled my case with extreme professionalism at amalegalsolutions.com. They filed a stay in the DRT and forced the bank to negotiate. We achieved a brilliant one time settlement. My family is forever grateful to the team at Sector 57."</p>
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-4 text-xl">M</div>
                            <div>
                                <h4 className="font-bold text-gray-900">Meenakshi Iyer</h4>
                                <p className="text-xs text-gray-500">IT Professional, Bangalore</p>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                     <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Total Reviews Managed</p>
                     <p className="text-4xl font-black text-gray-900">840+</p>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 border-l-4 border-[#D2A02A] pl-4">Frequently Asked Questions</h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-8 last:border-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="bg-[#D2A02A] text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-sm">{index + 1}</span>
                          {faq.question}
                        </h3>
                        <div className="text-gray-700 ml-12 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Bottom CTA */}
                <section className="bg-gradient-to-r from-[#1a202c] to-[#2d3748] rounded-3xl p-8 md:p-16 text-center text-white">
                  <h2 className="text-2xl md:text-4xl font-bold mb-6">Stop Living in Fear of Bank Notices</h2>
                  <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
                    Take the first step towards financial freedom. Let the experts at AMA Legal Solutions, founded by Anuj Anand Malik, handle the bank for you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg">
                        Consult with Experts
                      </button>
                    </Link>
                    <a href="tel:+918700343611">
                      <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-12 rounded-full transition-all text-lg border-2 border-transparent">
                        Call +91-8700343611
                      </button>
                    </a>
                  </div>
                  <p className="mt-8 text-sm opacity-60">
                    Visit us: Sector 57, Gurgaon | Website: amalegalsolutions.com
                  </p>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              {/* Main CTA Sidebar */}
              <div className="bg-[#1a202c] text-white p-8 rounded-2xl shadow-xl border border-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-[#D2A02A]">Need Urgent Help?</h3>
                <p className="mb-6 text-sm text-gray-300">
                  Speak to <strong>Anuj Anand Malik</strong> and his senior team at AMA Legal Solutions, Sector 57. We handle bank recall notices, SARFAESI cases, and DRT matters with 100% professionalism.
                </p>
                <div className="space-y-4">
                    <a href="tel:+918700343611" className="flex items-center justify-center w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white py-4 rounded-xl font-bold transition-colors">
                        Call 8700343611
                    </a>
                    <Link href="https://wa.me/918700343611" className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold transition-colors">
                        WhatsApp Us
                    </Link>
                </div>
                <p className="mt-6 text-[10px] text-center text-gray-500 uppercase tracking-widest font-bold">
                     amalegalsolutions.com
                </p>
              </div>

              {/* Related Pages */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-6 text-gray-900 border-b pb-2">Related Expertise</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-2 group-hover:w-3 transition-all"></span>
                      Loan Settlement Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement-after-npa-classification" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-2 group-hover:w-3 transition-all"></span>
                      Settlement After NPA
                    </Link>
                  </li>
                  <li>
                    <Link href="/can-bank-reject-settlement-request" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-2 group-hover:w-3 transition-all"></span>
                      Settlement Rejection Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-know-if-the-settlement-letter-is-valid" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-2 group-hover:w-3 transition-all"></span>
                      Letter Validity Check
                    </Link>
                  </li>
                  <li>
                    <Link href="/personal-loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-2 group-hover:w-3 transition-all"></span>
                      Personal Loan Help
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Review Highlights */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-3">V</div>
                    <div>
                        <p className="text-sm font-bold">Vikram S.</p>
                        <p className="text-[10px] text-gray-500 uppercase">Settled with ICICI Bank</p>
                    </div>
                </div>
                <p className="text-xs text-gray-600 italic">
                    "After receiving the recall notice, I thought I would lose my home. Anuj Malik sir handled everything from Sector 57 office. Highly grateful."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
