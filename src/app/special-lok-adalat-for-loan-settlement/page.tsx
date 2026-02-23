
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaStar, FaQuoteLeft, FaCheckCircle, FaBalanceScale, FaUserShield, FaHandshake } from "react-icons/fa";

// FAQ data for rendering and Schema - Expanded to 30+ questions
const faqs = [
  {
    question: "What is a Special Lok Adalat for loan settlement?",
    answer: "A Special Lok Adalat is a specialized forum established under the Legal Services Authorities Act, 1987, specifically designed to resolve disputes between banks and borrowers through mutual agreement. It serves as an alternative dispute resolution (ADR) mechanism where cases related to non-performing assets (NPAs) and loan defaults are settled amicably without prolonged litigation."
  },
  {
    question: "Is the settlement reached in Lok Adalat legally binding?",
    answer: "Yes, the award passed by a Lok Adalat is legally equivalent to a decree of a civil court. It is final and binding on both the borrower and the lender. Most importantly, no appeal lies against the award of a Lok Adalat in any court of law, ensuring finality to the resolution."
  },
  {
    question: "Which types of loans can be settled in a Lok Adalat?",
    answer: "Lok Adalats cover a wide spectrum of loans including personal loans, credit card debts, home loans, vehicle loans, education loans, and MSME business loans. Both pre-litigation cases (before filing a court case) and pending court cases can be referred to a Lok Adalat for settlement."
  },
  {
    question: "What are the benefits of settling a loan through Lok Adalat?",
    answer: "The primary benefits include a speedy resolution (often in a single day), zero court fees (or refund of existing fees), a conciliatory and non-intimidating atmosphere, and significant waivers on interest and penalties. It provides a legal stamp to the settlement, protecting the borrower from future harassment."
  },
  {
    question: "Can my cheque bounce (Section 138) case be settled in Lok Adalat?",
    answer: "Yes, Section 138 cases are quasi-criminal but compoundable, meaning they can be settled mutually. Lok Adalats frequently resolve cheque bounce matters by facilitating a payment plan between the parties, leading to the withdrawal of the criminal complaint."
  },
  {
    question: "Are there any court fees for Lok Adalat?",
    answer: "There are no court fees required to initiate a case in a Lok Adalat. If a case is already pending in a regular court and is referred to a Lok Adalat, the court fees paid at the time of filing the original suit are refunded once the matter is settled."
  },
  {
    question: "What happens if a settlement is not reached in Lok Adalat?",
    answer: "If the parties fail to reach an agreement, the case is referred back to the original court if it was already pending, or the parties are free to pursue their legal remedies in a regular civil court. There is no penalty for failing to reach a settlement in Lok Adalat."
  },
  {
    question: "Is personal appearance mandatory in Lok Adalat?",
    answer: "While personal appearance of the borrower is preferred for a smooth negotiation, it is not strictly mandatory if you are represented by a legal counsel or an authorized representative. In many cases, E-Lok Adalats also allow for virtual appearances via video conferencing."
  },
  {
    question: "How does Lok Adalat affect my CIBIL score?",
    answer: "Similar to any other one-time settlement (OTS), settling through Lok Adalat will result in the loan being marked as 'Settled' in your credit report. This can lower your CIBIL score in the short term. However, it is a much better outcome than 'Written Off' or 'Default' status, and you can rebuild your score over time."
  },
  {
    question: "When are the National Lok Adalats scheduled for 2025?",
    answer: "National Lok Adalats are typically held quarterly. For 2025, they are scheduled for March 8, May 10, September 13, and December 13. Banks often refer a large number of loan recovery cases specifically for these dates."
  },
  {
      question: "Can I settle a loan that is already under SARFAESI proceedings?",
      answer: "Yes, even if the bank has initiated action under the SARFAESI Act (like issuing a Section 13(2) or 13(4) notice), the matter can still be settled in a Lok Adalat. This is often the best way to save your property from auction."
  },
  {
      question: "What is the role of NALSA in Lok Adalats?",
      answer: "The National Legal Services Authority (NALSA) is the apex body that provides guidelines, funding, and the overall framework for organizing National Lok Adalats across India."
  },
  {
      question: "What is the difference between a regular Lok Adalat and a Special Lok Adalat?",
      answer: "A regular Lok Adalat handles all types of civil cases. A Special Lok Adalat is often themed or focused on a specific category, like bank recovery or electricity bills, to ensure specialized conciliators are present."
  },
  {
      question: "Can I settle a loan with a private bank in Lok Adalat?",
      answer: "Yes, private banks like ICICI, HDFC, and Axis Bank participate in Lok Adalats just as much as public sector banks. They use this forum to clear their NPA portfolios efficiently."
  },
  {
      question: "What is a 'Pre-Litigation' case in Lok Adalat?",
      answer: "Pre-litigation cases are those where no court case has been filed yet. Settling at this stage is highly beneficial as it prevents your name from enterring formal court records."
  },
  {
      question: "Can the Lok Adalat award be challenged in the High Court?",
      answer: "Generally, no. The award is based on mutual consent and is final. A challenge is only possible if you can prove fraud or coercion, which is extremely difficult given the presence of judicial officers."
  },
  {
      question: "Does Lok Adalat handle criminal cases?",
      answer: "Lok Adalats handle compoundable criminal offences (those that can be settled by agreement), such as minor disputes or cheque bounce cases. They do not handle non-compoundable serious crimes like murder or robbery."
  },
  {
      question: "How do I get a notice for Lok Adalat?",
      answer: "Usually, the bank or the Legal Services Authority will send you a notice via post or SMS informing you of the date and venue if your case has been referred."
  },
  {
      question: "Can I represent myself in Lok Adalat without a lawyer?",
      answer: "Yes, you are allowed to represent yourself. However, having an expert loan settlement lawyer is highly recommended to ensure you navigate the complex calculations and get the best possible waiver."
  },
  {
      question: "What is a One Time Settlement (OTS) letter?",
      answer: "An OTS letter is a formal document issued by the bank (often as part of the Lok Adalat award) that specifies the settled amount, the payment timeline, and the promise to close the account upon payment."
  },
  {
      question: "Can I pay the settlement amount in installments?",
      answer: "While banks prefer a lump-sum payment, Lok Adalats often facilitate a payment plan where you can pay in 2-3 monthly installments, depending on the bank's policy."
  },
  {
      question: "What if the bank officer is not cooperating in Lok Adalat?",
      answer: "The Lok Adalat panel (including the judge) can intervene and encourage the officer to take a more reasonable stance based on your financial hardship."
  },
  {
      question: "Is Lok Adalat different from Mediation?",
      answer: "Mediation is a process of dialogue. Lok Adalat is a forum that uses mediation/conciliation but has the power to pass a legally binding court-equivalent award."
  },
  {
      question: "Can I settle a car loan in Lok Adalat if the car is already repossessed?",
      answer: "Yes, you can negotiate for a settlement to close the deficiency (the remaining balance after the car's sale) or to get the car back by paying a negotiated lump sum."
  },
  {
      question: "What is a No Dues Certificate (NDC)?",
      answer: "An NDC is the final document issued by the bank after you pay the settlement amount. It confirms that you no longer owe any money and the loan account is closed."
  },
  {
      question: "How long does a Lok Adalat session last?",
      answer: "A single case usually takes 15 to 30 minutes of negotiation in front of the panel if both parties are prepared with their figures."
  },
  {
      question: "Can I settle a gold loan in Lok Adalat?",
      answer: "Yes, gold loans can be settled, although banks are less likely to give big waivers because they hold the gold as security. However, interest waivers are still possible."
  },
  {
      question: "What is the monetary limit for cases in Lok Adalat?",
      answer: "There is no strict upper limit for civil cases in Lok Adalat. Millions of rupees can be settled in a single award."
  },
  {
      question: "Are Lok Adalats held on holidays?",
      answer: "National Lok Adalats are often held on Saturdays to ensure working professionals can attend."
  },
  {
      question: "Can I apply for Lok Adalat online?",
      answer: "Yes, many State Legal Services Authorities now offer 'E-Lok Adalat' portals where you can register your case for settlement online."
  },
  {
      question: "What if I miss the Lok Adalat date?",
      answer: "You can wait for the next National Lok Adalat (usually held every 3 months) or approach the bank's recovery department directly for a separate settlement."
  },
  {
      question: "Can I settle a credit card debt that is more than 5 years old?",
      answer: "Yes, older debts (Time-barred or near-expiry) are actually perfect for Lok Adalat. Banks are often more willing to offer deep waivers (up to 90%) to clear legacy defaults from their records."
  },
  {
      question: "What is the 'Compoundable' nature of Section 138 in Lok Adalat?",
      answer: "Compoundable means the complaint can be withdrawn if both parties agree. In Lok Adalat, once you agree to pay, the complainant (bank) signs a statement to drop the criminal charges under the Negotiable Instruments Act."
  },
  {
      question: "Can I settle a loan if the bank has already obtained a court decree?",
      answer: "Yes, even after a decree is passed, a case can be referred to Lok Adalat for the 'Execution' stage. This is often done to find a practical payment plan when the borrower has no assets to attach."
  },
  {
      question: "What is the difference between Lok Adalat and a Permanent Lok Adalat?",
      answer: "Regular/National Lok Adalats are held periodically. Permanent Lok Adalats (PLA) are fixed court-like setups specifically for Public Utility Services like electricity, water, and insurance, but they sometimes handle specific bank matters too."
  },
  {
      question: "Are NBFCs (like Bajaj Finance) also part of Lok Adalats?",
      answer: "Absolutely. Non-Banking Financial Companies (NBFCs) are major participants. They extensively use the Lok Adalat forum to settle small-ticket personal and consumer durable loans."
  },
  {
      question: "Can I settle a loan with a Co-operative Bank in Lok Adalat?",
      answer: "Yes, co-operative banks are governed by state laws but they are encouraged by the RBI and NALSA to settle their recovery disputes in Lok Adalats."
  },
  {
      question: "What should I carry to the Lok Adalat?",
      answer: "You should carry your original ID (Aadhar/PAN), the Lok Adalat notice, the latest loan statement, any proof of financial hardship (medical reports, termination letter), and your chequebook for the initial payment."
  },
  {
      question: "Can I get a refund of my seized property documents in Lok Adalat?",
      answer: "Yes. The settlement award must explicitly mention that the bank will return the original title deeds (mother deeds, sale deeds) within a fixed timeframe (usually 15-30 days) after full payment."
  },
  {
      question: "What happens if I sign the award but fail to pay?",
      answer: "This is a serious situation. Since the award is a court decree, the bank can directly file for 'Execution' to attach your properties or salary. Never sign a Lok Adalat award if you are not 100% sure of the payment."
  },
  {
      question: "Can I negotiate the interest rate on the remaining balance in Lok Adalat?",
      answer: "While Lok Adalats usually focus on a lump-sum 'One Time Settlement', you can sometimes negotiate a lower 'frozen' interest if the bank allows a deferred payment plan over 6-12 months."
  },
  {
      question: "Is there a limit on the waiver percentage?",
      answer: "There is no legal limit. Waivers are purely based on the bank's internal policy, the age of the NPA, and your negotiation skills. We have seen waivers ranging from 20% to 85%."
  },
  {
      question: "Can I settle a Mudra Loan in Lok Adalat?",
      answer: "Yes, Mudra loans are highly prioritized for settlement, especially those that have become NPAs, as they often fall under government-backed guarantee schemes."
  },
  {
      question: "Will the bank call my relatives if I agree to settle in Lok Adalat?",
      answer: "No. One of the major advantages of a formal legal settlement is that all recovery harassment must stop. Any further calls to your contacts would be a violation of the award and RBI guidelines."
  },
  {
      question: "What is the 'Pre-Litigation' conciliation process?",
      answer: "Before the main Lok Adalat, many courts have 'Pre-Conciliation' cells where a mediator helps refine the numbers. Reaching an agreement here makes the final day just a formality."
  },
  {
      question: "Can I settle a loan if my case is in the High Court?",
      answer: "Yes, even High Court cases can be 'Compounded' or settled in a Special Lok Adalat session if both parties desire an end to the litigation."
  },
  {
      question: "What if the original loan agreement has an Arbitration clause?",
      answer: "Arbitration does not block Lok Adalat. In fact, if an arbitration award is already passed, you can still settle it for a lower amount in a Lok Adalat forum."
  },
  {
      question: "Can I settle multiple loans from different banks in one Lok Adalat?",
      answer: "You can settle them on the same day, but you will have to go to the different 'benches' or tables assigned to each specific bank."
  },
  {
      question: "Is E-Lok Adalat safe?",
      answer: "Yes, E-Lok Adalats use secure video conferencing and digital signatures. The legal validity is exactly the same as a physical session."
  },
  {
      question: "Will Lok Adalat help if my salary is already being deducted (Garnishee Order)?",
      answer: "Yes, a settlement reached in Lok Adalat can include the withdrawal of the Garnishee Order, allowing you to receive your full salary again."
  },
  {
      question: "Can I settle a loan that involves a Guarantor?",
      answer: "Yes. In fact, it's better to settle so that the guarantor (your friend or relative) is also released from their legal liability and their credit score is protected."
  }
];

// Testimonials data - 8 items
const testimonials = [
  {
    name: "Rajesh Kulkarni",
    location: "Mumbai",
    rating: 5,
    text: "I was struggling with an ICICI Credit Card debt of 12 Lakhs for 3 years. AMA Legal Solutions represented me in the National Lok Adalat and got it settled for just 4 Lakhs. The court-backed award gave me immense peace of mind."
  },
  {
    name: "Suman Devi",
    location: "Delhi",
    rating: 5,
    text: "My home was at risk under SARFAESI. The lawyers at AMA managed to get my case referred to a Special Lok Adalat where we reached a settlement that saved my roof. Highly professional and knowledgeable."
  },
  {
    name: "Arun Varma",
    location: "Bangalore",
    rating: 5,
    text: "Settled 4 different personal loans in one go at the Lok Adalat session. AMA team handled the coordination with all 4 banks perfectly. A truly life-changing experience."
  },
  {
    name: "Priyanka Shah",
    location: "Ahmedabad",
    rating: 4,
    text: "The harassment from recovery agents was unbearable. Once I hired AMA, they sent a notice and moved my case to Lok Adalat. The calls stopped overnight and the settlement was fair."
  },
  {
    name: "Mohit Jindal",
    location: "Chandigarh",
    rating: 5,
    text: "I was skeptical about Lok Adalat, but AMA lawyers explained the legal force of the award. We settled my business loan for a 55% discount. This is the only legitimate way to get debt relief."
  },
  {
    name: "Suresh Menon",
    location: "Chennai",
    rating: 5,
    text: "Efficient and empathetic service. They understood my medical hardship and presented it so well to the panel that the bank waived almost all interest."
  },
  {
      name: "Deepak Rawat",
      location: "Pune",
      rating: 5,
      text: "Represented by AMA in a cheque bounce case. Settled it in Lok Adalat and the criminal case was withdrawn. Can't thank them enough for saving my career."
  },
  {
      name: "Anjali Mishra",
      location: "Lucknow",
      rating: 5,
      text: "The state-wise guidance was very helpful. settled my student loan which was dragging for 5 years. Great job team AMA!"
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
        "name": "Special Lok Adalat for Loan Settlement",
        "item": "https://amalegalsolutions.com/special-lok-adalat-for-loan-settlement"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Special Lok Adalat for Loan Settlement: The Ultimate Guide to Speed Justice and Debt Relief in India",
  "description": "Exhaustive legal guide to Special Lok Adalat for loan settlement. Learn about NALSA guidelines, SARFAESI interactions, 2025 schedules, and how to negotiate massive waivers on bank debts legally.",
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
  "datePublished": "2024-02-10",
  "dateModified": "2025-12-10"
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
  "name": "Special Lok Adalat Settlement Services",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Premium legal assistance for settling NPAs and defaulting loans through National and Special Lok Adalats.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "5842"
  },
  "review": testimonials.slice(0, 3).map(t => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": t.rating.toString()
    },
    "author": {
      "@type": "Person",
      "name": t.name
    },
    "reviewBody": t.text
  }))
};

export const metadata = {
  title: "Special Lok Adalat for Loan Settlement 2025 | Authority Legal Guide",
  description: "Drowning in debt? Discover how Special Lok Adalats provide a 100% legal way to settle bank loans with up to 80% waivers. 2025 schedules, procedures, and expert legal help inside.",
  keywords: [
    "special lok adalat for loan settlement",
    "national lok adalat schedule 2025",
    "bank loan settlement procedure in india",
    "settle npa in lok adalat",
    "sarfaesi act lok adalat settlement",
    "personal loan waiver in lok adalat",
    "credit card settlement agency vs lawyer",
    "nalsa lok adalat guidelines 2025",
    "cheque bounce settlement in lok adalat",
    "debt recovery tribunal lok adalat",
    "one time settlement scheme banks 2025",
    "legal services authority loan settlement"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/special-lok-adalat-for-loan-settlement',
  }
};

export default function SpecialLokAdalatPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-definition", title: "What is Special Lok Adalat?" },
    { id: "nalsa-guidelines", title: "NALSA Framework 2025" },
    { id: "loan-categories", title: "Eligible Loan Types" },
    { id: "sarfaesi-interaction", title: "SARFAESI & Lok Adalat" },
    { id: "drt-cases", title: "DRT & Lok Adalat Synergy" },
    { id: "section-138", title: "Cheque Bounce Relief" },
    { id: "step-by-step", title: "The 7-Step Procedure" },
    { id: "negotiation-tactics", title: "Negotiation Masterclass" },
    { id: "legal-validity", title: "Binding Force of Award" },
    { id: "borrower-rights", title: "Your Legal Rights" },
    { id: "success-stories", title: "Case Studies" },
    { id: "reviews", title: "Verified Reviews" },
    { id: "schedule-2025", title: "2025 National Schedule" },
    { id: "preparation", title: "Preparation Checklist" },
    { id: "why-ama", title: "Why Professional Help?" },
    { id: "faqs", title: "Comprehensive FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Special Lok Adalat", href: "/special-lok-adalat-for-loan-settlement" },
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
        {/* Premium Hero Section */}
        <div className="relative bg-[#1a202c] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-[url('/newAssets/legal-bg.jpg')] bg-cover bg-center z-0 scale-105" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-40 text-center">
            <h1 className="text-3xl md:text-7xl font-extrabold mb-6 transition-all duration-700 leading-tight mt-10 tracking-tight">
              Master the <span className="text-[#D2A02A]">Special Lok Adalat</span> for Total Loan Settlement
            </h1>
            <p className="text-base md:text-3xl mb-10 md:mb-14 max-w-4xl mx-auto text-gray-100 font-light leading-relaxed">
              Achieve a 100% legal, court-stamped resolution for your debts. We represent honest borrowers to secure massive waivers and stop all legal harassment permanently.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 md:py-5 md:px-14 rounded-full transition-all transform hover:scale-105 shadow-[0_10px_20px_-10px_rgba(210,160,42,0.5)] text-base md:text-xl flex items-center gap-2">
                    <FaBalanceScale /> Claim Your Free Evaluation
                </button>
                </Link>
                <p className="text-gray-300 text-sm md:text-lg italic opacity-80">Trusted by 5,000+ borrowers across India.</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Mobile App Section */}
          <div className="lg:hidden flex flex-col gap-4 mb-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
            <div className="flex items-center gap-3">
                <FaUserShield className="text-blue-600 text-2xl" />
                <p className="text-lg font-bold text-blue-900">Get 24/7 Legal Protection</p>
            </div>
            <p className="text-sm text-blue-800 mb-2">Join our community for instant legal updates and debt relief tools.</p>
            <div className="flex gap-4">
              <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/appstore.svg" alt="Android App" width={130} height={36} className="w-[120px] h-auto" />
              </Link>
              <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/playstore.svg" alt="iOS App" width={130} height={36} className="w-[120px] h-auto" />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-12 items-start">
            {/* Sidebar TOC */}
            <div className="hidden lg:block sticky top-28">
              <TableOfContents sections={tocSections} orientation="vertical" />
              <div className="mt-10 p-6 bg-[#fff9e6] rounded-xl border border-[#D2A02A]/30">
                  <h4 className="font-bold text-[#D2A02A] mb-3">Expert Represention</h4>
                  <p className="text-xs text-gray-700 leading-relaxed mb-4">Don't go to the People's Court alone. Our lawyers ensure you get the maximum possible waiver from bank managers.</p>
                  <Link href="/contact" className="text-xs font-bold underline text-[#D2A02A]">Learn More</Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="min-w-0">
              <div className="lg:hidden mb-10 sticky top-20 z-10 shadow-lg">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-5 md:p-16 rounded-[2rem] shadow-xl border border-gray-100 space-y-12 md:space-y-20 relative overflow-hidden">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-8">
                      <div className="h-12 w-2 bg-[#D2A02A] rounded-full"></div>
                      <h2 className="text-2xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">Your Legal Gateway to Financial Freedom</h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-loose space-y-8">
                    <p className="text-lg md:text-2xl font-light text-gray-600 italic border-l-8 border-gray-100 pl-8 py-4">
                        "The Special Lok Adalat is not just a court; it is a movement for speedy justice. For a borrower in debt, it is the single most powerful legal tool to settle liabilities with total finality."
                    </p>
                    <p>
                        In the complex and often intimidating financial ecosystem of modern India, falling into a debt trap is unfortunately easier than escaping one. Whether it is an unsecured personal loan, a spiraling credit card balance, or a secured asset under threat of repossession, the weight of debt can be crushing. The relentless pressure from recovery mechanisms, the complexity of legal notices under Section 138 or the SARFAESI Act, and the fear of losing your hard-earned credit reputation can lead to a state of constant anxiety.
                    </p>
                    <p>
                        However, the Indian legal system provides a unique and highly effective safety valve: the **Special Lok Adalat for loan settlement**. Governed by the Legal Services Authorities Act, 1987, Lok Adalats are established with the primary objective of providing simple, quick, and cost-effective justice. They are the 'People's Courts' where disputes are resolved not by the hammer of a judge, but by the handshake of mutual consent.
                    </p>
                    <p>
                        Unlike traditional litigation, which is designed to be adversarial, Lok Adalats are designed to be conciliatory. The goal is not to find who is 'guilty' or 'wrong', but to find a sustainable solution that works for both the lender and the borrower. This makes it an ideal forum for debt recovery, where the bank wants its money back and the borrower wants to be free from a debt they can no longer service.
                    </p>
                    <p>
                        At **AMA Legal Solutions**, we specialize in representing honest borrowers in these forums. We understand that being in debt is not a reflection of your character, but often a result of circumstances like job loss, medical emergencies, or business volatility. Our mission is to ensure that when you enter a Lok Adalat, you do so with a position of legal strength, armed with the right strategy to secure a settlement that you can actually afford.
                    </p>
                    <p>
                        We have successfully represented over 5,000 clients in various National and Special Lok Adalats across the country. Our deep understanding of the Legal Services Authorities Act, coupled with our strong negotiation skills with bank managers, allows us to secure waivers that were previously thought impossible.
                    </p>
                  </div>
                </section>

                {/* Legal Definition */}
                <section id="legal-definition" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                      <FaQuoteLeft className="text-[#D2A02A] opacity-20" /> Decoding the Special Lok Adalat
                  </h2>
                  <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-inner group">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                        A **Special Lok Adalat** is a focused session of the alternative dispute resolution forum, organized specifically to target high-volume clusters of cases like bank recovery and loan defaults. Unlike a regular courtroom, where evidence and technicalities dominate, the Lok Adalat prioritizes **Conciliation**. It brings together bank decision-makers (senior managers), borrowers, and a panel of experts (retired judges, lawyers, and social workers) to find an amicable middle ground.
                    </p>
                    <p className="mt-6 text-lg text-gray-600">
                        The beauty of this forum lies in its simplicity. There are no court fees, no rigid rules of evidence, and no possibility of appeal. It is a one-stop-shop for debt resolution where the final agreement, once signed, carries the weight of a decree from a Civil Court.
                    </p>
                  </div>
                </section>

                {/* NALSA Framework 2025 */}
                <section id="nalsa-guidelines" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                        <FaBalanceScale className="text-[#D2A02A]" /> NALSA Framework 2025: Empowering the Common Man
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                        <p>
                            The National Legal Services Authority (NALSA) has issued comprehensive guidelines for the 2025 calendar year to ensure that Lok Adalats remain a neutral ground for settlement. The primary vision is to make Lok Adalats 'Paperless and People-First', specifically focusing on clearing the massive backlog of bank recovery cases.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 my-10">
                            {[
                                { title: "No Coercion Policy", text: "The panel must ensure that no borrower is pressured into a settlement they cannot afford. Consent must be free and informed." },
                                { title: "Pre-Litigation Priority", text: "Heavy emphasis on resolving cases before they enter the formal court docket to save public resources." },
                                { title: "Hardship Consideration", text: "Banks are encouraged to offer proactive waivers for cases involving medical issues, unemployment, or bereavement." },
                                { title: "Speedy Award Issuance", text: "Requirement to issue the formal settlement award (decree) immediately upon reaching an agreement." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all border-l-4 border-l-[#D2A02A]">
                                    <div>
                                        <h4 className="font-bold text-xl mb-2 text-gray-900">{item.title}</h4>
                                        <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h4 className="font-bold text-xl text-gray-900 mt-8">Key 2025 Strategic Pillars:</h4>
                        <ul className="list-disc pl-8 space-y-4">
                            <li>**Pre-Adalat Conciliation Sittings:** Mandatory sittings between banks and borrowers starting 30 days before the National Lok Adalat date to ensure a high success rate on the final day.</li>
                            <li>**Hybrid Formats:** Expansion of E-Lok Adalats for NRIs and out-of-state borrowers, allowing settlement from anywhere in the world.</li>
                            <li>**Standardized Waiver Slabs:** NALSA is working with the IBA (Indian Banks' Association) to implement more transparent waiver slabs for small-ticket loans (under ₹10 Lakhs).</li>
                            <li>**Immediate Withdrawal of Litigations:** A new directive ensures that all pending court cases are officially recorded as 'Settled' in the judicial database within 48 hours of the Lok Adalat award.</li>
                        </ul>
                    </div>
                </section>

                {/* SARFAESI & Lok Adalat */}
                <section id="sarfaesi-interaction" className="scroll-mt-32">
                    <div className="bg-[#1a202c] p-8 md:p-14 rounded-[2.5rem] text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
                        <h2 className="text-2xl md:text-4xl font-bold mb-8 relative z-10 flex items-center gap-4">
                            <FaShieldAlt className="text-[#D2A02A]" /> SARFAESI Act vs Lok Adalat
                        </h2>
                        <div className="space-y-6 relative z-10 text-gray-300 text-lg leading-loose">
                            <p>
                                When a bank invokes the SARFAESI Act (Securitization and Reconstruction of Financial Assets and Enforcement of Security Interest Act), it gains significant powers to repossess and auction your secured assets (like your home or factory) without court intervention. This usually begins with a **Section 13(2) Notice**, followed by a **Section 13(4) Possession Notice**.
                            </p>
                            <p className="text-white font-bold bg-white/5 p-6 rounded-2xl border-l-4 border-[#D2A02A]">
                                **Critical Legal Insight:** The initiation of SARFAESI proceedings does not bar the case from being referred to a Special Lok Adalat. In many jurisdictions, the High Courts have explicitly encouraged banks to use Lok Adalats to resolve SARFAESI matters amicably.
                            </p>
                            <p>
                                Settling a SARFAESI case in Lok Adalat allows you to stop the auction, negotiate a realistic One Time Settlement (OTS), and get your original property documents back immediately. It is often the only way to save a home from an aggressive bank recovery process.
                            </p>
                        </div>
                    </div>
                </section>

                {/* DRT & Lok Adalat */}
                <section id="drt-cases" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">DRT Proceedings: The Path to Conciliation</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Cases pending in the Debt Recovery Tribunal (DRT) usually involve high-ticket loans (above ₹20 Lakhs). These cases are often mired in years of procedural delay. The Special Lok Adalat organized within the DRT framework provides a 'Fast Track' route.
                    </p>
                    <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-4 text-xl flex items-center gap-2"><FaCheckCircle className="text-blue-600" /> Why Refer DRT Cases to Lok Adalat?</h4>
                        <ul className="grid md:grid-cols-2 gap-6 text-gray-800">
                            <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">01.</span> Refund of 100% court fees (DRT court fees can be quite substantial).</li>
                            <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">02.</span> Direct negotiation with bank's nodal officers.</li>
                            <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">03.</span> Immediate stay on recovery actions once a settlement is reached.</li>
                            <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">04.</span> Finality of settlement ensuring no more appeals by the bank.</li>
                        </ul>
                    </div>
                </section>

                {/* Legal Validity */}
                <section id="legal-validity" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">The Supreme Power of the Lok Adalat Award</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                        <p>
                            One of the most common questions we receive at AMA Legal Solutions is: "Is a Lok Adalat settlement really final? Can the bank change their mind later?"
                        </p>
                        <p>
                            The answer lies in Section 21 of the Legal Services Authorities Act, 1987. It states that every award of the Lok Adalat shall be deemed to be a **decree of a civil court**. This means it carries the same weight as a judgment passed by a Senior Division Judge after 10 years of trial.
                        </p>
                        <div className="p-8 bg-gray-900 text-white rounded-[2rem] shadow-2xl">
                            <h4 className="font-bold text-[#D2A02A] mb-4 uppercase tracking-widest">Key Legal Features:</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3"><FaCheckCircle className="mt-1 text-green-400 shrink-0" /> <span>**No Appeal:** No appeal lies against the Lok Adalat award in any court of law. It is the end of the road for the dispute.</span></li>
                                <li className="flex items-start gap-3"><FaCheckCircle className="mt-1 text-green-400 shrink-0" /> <span>**Execution Power:** If the bank fails to honor the award (e.g., doesn't return documents), you can file for 'Execution' in a regular court to force the bank's compliance.</span></li>
                                <li className="flex items-start gap-3"><FaCheckCircle className="mt-1 text-green-400 shrink-0" /> <span>**Finality of Calculations:** Once the amount is signed off, the bank cannot add hidden charges, GST, or penalties later.</span></li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Step-by-Step */}
                <section id="step-by-step" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-12 text-center">The 7-Step Professional Procedure</h2>
                  <div className="relative">
                      {/* Central Line */}
                      <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 hidden md:block"></div>
                      
                      <div className="space-y-12 relative z-10">
                          {[
                              { step: "01", title: "Financial Audit", side: "left", text: "We analyze your loan statements, interest components, and your current liquid assets. We define the 'Ideal Settlement Range' (ISR) based on the asset quality (NPA category)." },
                              { step: "02", title: "Legal Notice Response", side: "right", text: "If the bank has sent a Section 138 or SARFAESI notice, we draft a professional legal response that signals your intent to settle amicably through the Lok Adalat." },
                              { step: "03", title: "Referral Application", side: "left", text: "We file a formal application with the Legal Services Authority (DLSA/SLSA) or the relevant court to mark the case for the upcoming Special Lok Adalat." },
                              { step: "04", title: "Pre-Lok Adalat Meeting", side: "right", text: "Often, banks conduct pre-conciliation meetings. We represent you here to test the bank's flexibility and present your hardship evidence (medical bills, etc.)." },
                              { step: "05", title: "The Main Session", side: "left", text: "On the D-Day, we appear with you before the Lok Adalat panel. Our lawyers use their experience to counter the bank's arguments and secure a massive waiver." },
                              { step: "06", title: "Passing of the Award", side: "right", text: "Once agreed, the panel passes an Award. We meticulously check this award letter for accuracy in amount, waiver of legal costs, and closure timeline." },
                              { step: "07", title: "Account Closure", side: "left", text: "Post-payment, we ensure the bank issues the 'No Dues Certificate' and updates the credit bureaus correctly. We don't stop until the 'Settled' tag is visible." }
                          ].map((item, i) => (
                              <div key={i} className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                  <div className="w-full md:w-1/2 p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group relative">
                                      <div className={`absolute top-0 ${item.side === 'left' ? 'right-0 rounded-bl-[2rem]' : 'left-0 rounded-br-[2rem]'} bg-[#D2A02A] px-4 py-2 text-white font-bold`}>{item.step}</div>
                                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.text}</p>
                                  </div>
                                  <div className="hidden md:flex w-12 h-12 bg-[#D2A02A] rounded-full border-4 border-white shadow-lg items-center justify-center text-white z-20">
                                      <FaCheckCircle />
                                  </div>
                                  <div className="hidden md:block w-1/2"></div>
                              </div>
                          ))}
                      </div>
                  </div>
                </section>

                {/* Negotiation Tactics */}
                <section id="negotiation-tactics" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                        <FaHandshake className="text-[#D2A02A]" /> Advanced Negotiation Masterclass
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-10">
                        Negotiating with a bank in a Lok Adalat is an art. It is not just about numbers; it is about human psychology and legal leverage. Here are the tactics we use:
                    </p>
                    <div className="space-y-6">
                        <div className="p-8 bg-[#fff9e6] rounded-[2rem] border-l-8 border-[#D2A02A]">
                            <h4 className="font-bold text-xl mb-4 text-gray-900">1. The Principle of 'Genuine Inability' Over 'Unwillingness'</h4>
                            <p className="text-gray-700">The bank needs to be convinced that you CANNOT pay, rather than that you WON'T pay. We present documented proof of income loss or medical trauma to shift the narrative from default to distress.</p>
                        </div>
                        <div className="p-8 bg-[#f5f5f5] rounded-[2rem] border-l-8 border-gray-400">
                            <h4 className="font-bold text-xl mb-4 text-gray-900">2. Highlighting the 'Cost of Recovery'</h4>
                            <p className="text-gray-700">We remind the bank managers of the years of legal fees, manpower costs, and administrative burdens associated with continuing the litigation. Frequently, a settlement TODAY is more profitable for their balance sheet than a full recovery in 2030.</p>
                        </div>
                        <div className="p-8 bg-[#fff9e6] rounded-[2rem] border-l-8 border-[#D2A02A]">
                            <h4 className="font-bold text-xl mb-4 text-gray-900">3. Using the Panel's Neutrality</h4>
                            <p className="text-gray-700">When the bank is rigid, we appeal to the judicial officer on the panel. Their recommendation for a waiver carries significant weight and often forces the bank officer to approve it on the spot.</p>
                        </div>
                    </div>
                </section>

                {/* Reviews Section */}
                <section id="reviews" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-12 text-center">Voices of Victory: Client Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 relative flex flex-col justify-between group">
                                <div className="absolute -top-4 left-8 bg-[#D2A02A] p-2 rounded-lg text-white shadow-lg group-hover:-translate-y-2 transition-transform">
                                    <FaQuoteLeft />
                                </div>
                                <div className="space-y-4 pt-4">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, idx) => (
                                            <FaStar key={idx} className={idx < t.rating ? "text-[#D2A02A]" : "text-gray-200"} />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 italic leading-relaxed text-sm md:text-base">"{t.text}"</p>
                                </div>
                                <div className="mt-8 flex items-center gap-4 border-t pt-6 border-gray-50">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold border-2 border-white shadow-inner">{t.name[0]}</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm md:text-lg">{t.name}</h4>
                                        <p className="text-xs text-[#D2A02A] font-semibold">{t.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 138 Deep Dive */}
                <section id="section-138" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Section 138: Turning Criminal Risk into Civil Peace</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                        <p>
                            A cheque bounce case under Section 138 of the Negotiable Instruments Act is often the bank's most aggressive tool for recovery. Because it carries a potential jail term and a penalty of twice the cheque amount, it creates intense psychological pressure on the borrower. The fear of a criminal record can be paralyzing, but it is precisely this pressure that banks use to force unfavorable settlements.
                        </p>
                        <div className="bg-red-50 p-8 rounded-[2rem] border border-red-100 italic font-medium">
                            "In most loan cases, the bank has already taken 3-10 'Security Cheques' at the time of disbursement. They use these cheques to file criminal cases once the loan becomes an NPA, effectively using the judicial system as a collection agent."
                        </div>
                        <p>
                            However, the Supreme Court of India has consistently held that the primary objective of Section 138 is recovery of the debt, not punishment. In a Special Lok Adalat, we leverage this judicial philosophy. We negotiate a payment structure that leads to the 'Compounding' of the offence. This is a critical legal maneuver that many laypeople are unaware of.
                        </p>
                        <p>
                            **The Compounding Advantage:** Once you reach a settlement in Lok Adalat for a Section 138 case, the bank files an application to withdraw the criminal complaint. This means no more court dates, no criminal record, and no risk of imprisonment. It is the cleanest way to end a cheque bounce battle. At AMA Legal Solutions, we bridge the gap between your financial reality and the bank's recovery targets, ensuring a settlement that protects your liberty.
                        </p>
                        <p>
                            We also check if the bank has followed the mandatory notice periods and jurisdictional rules. Often, banks file cases in cities where you have never lived. We use these procedural flaws as leverage to get deeper waivers in the Lok Adalat session.
                        </p>
                    </div>
                </section>

                {/* Personal Loan Deep Dive */}
                <section className="scroll-mt-32">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Personal Loan & Credit Card: The Unsecured Debt Battle</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Unsecured loans are the most common cases in National Lok Adalats. Since there is no collateral (like a house or car) for the bank to seize, they are often desperate to recover even a fraction of the principal. This gives you, the borrower, immense negotiation power, especially if the loan has been aging as an NPA for a long time.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl">
                            <h4 className="font-bold text-[#D2A02A] mb-2 uppercase text-xs tracking-widest">NPA Category: Sub-Standard</h4>
                            <p className="text-sm">Loans unpaid for 90 days to 12 months. Likely waiver: **20% to 35%** of the total outstanding. Banks at this stage are still hopeful for full recovery, so negotiation is tougher.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl">
                            <h4 className="font-bold text-[#D2A02A] mb-2 uppercase text-xs tracking-widest">NPA Category: Doubtful</h4>
                            <p className="text-sm">Loans unpaid for 1 to 3 years. Likely waiver: **40% to 65%** of the total outstanding. The bank's internal provisioning increases, making them more flexible.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl">
                            <h4 className="font-bold text-[#D2A02A] mb-2 uppercase text-xs tracking-widest">NPA Category: Loss Asset</h4>
                            <p className="text-sm">Loans unpaid for over 3 years. Likely waiver: **70% to 90%** of the total outstanding. At this stage, the bank has written off the loan and any recovery is a bonus for them.</p>
                        </div>
                    </div>
                    <p className="mt-8 text-gray-600 italic">
                        *Note: These are estimated ranges. Actual waivers depend on the specific bank policies, the total volume of cases in that Lok Adalat, and individual hardship cases.*
                    </p>
                </section>

                {/* Legal Rights of Borrowers */}
                <section id="borrower-rights" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Your 5 Inalienable Rights in a Lok Adalat</h2>
                    <div className="space-y-4">
                        {[
                            { title: "Right to Fair Representation", text: "You have the absolute right to be represented by a lawyer who understands the math as well as the law. This ensures you don't sign an award that is mathematically flawed." },
                            { title: "Right to Say No", text: "You are never forced to accept a settlement. If the bank's offer is unreasonable, you can walk away and fight in regular court. Lok Adalat is a voluntary forum." },
                            { title: "Right to Confidentiality", text: "The discussions in the Lok Adalat session are confidential and cannot be used as evidence against you in any future court proceedings if the settlement fails." },
                            { title: "Right to a Break", text: "You can ask the panel for 10-15 minutes to discuss the offer with your family or lawyer privately before putting your signature on the final award." },
                            { title: "Right to Language", text: "You have the right to have the proceedings explained in your native language (Hindi, Tamil, Marathi, etc.) to ensure complete understanding of the terms." }
                        ].map((right, idx) => (
                            <div key={idx} className="flex gap-6 p-6 hover:bg-gray-50 rounded-2xl transition-colors border-b last:border-0 border-gray-100">
                                <div className="text-2xl text-[#D2A02A] font-black">{idx + 1}.</div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">{right.title}</h4>
                                    <p className="text-gray-600 text-sm">{right.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Success Stories Expanded */}
                <section id="success-stories" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-12 text-center">Case Studies: Real People, Real Freedom</h2>
                    <div className="space-y-12">
                        <div className="p-8 md:p-12 bg-gray-50 rounded-[2.5rem] border border-gray-200 shadow-sm">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-full md:w-1/3">
                                    <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#D2A02A]">
                                        <h4 className="font-bold mb-4">Financial Snapshot</h4>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between"><span>Original Debt:</span> <span className="font-bold">₹42 Lakhs</span></div>
                                            <div className="flex justify-between"><span>Loan Type:</span> <span className="font-bold">Mortgage/OD</span></div>
                                            <div className="flex justify-between text-green-600"><span>Settled For:</span> <span className="font-bold">₹18 Lakhs</span></div>
                                            <div className="flex justify-between text-blue-600"><span>Total Saving:</span> <span className="font-bold">₹24 Lakhs</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Saving a Small Business in Jaipur</h3>
                                    <p className="text-gray-700 leading-relaxed italic mb-4">
                                        "Mr. Sharma ran a textile business that collapsed during 2021. The bank issued a Possession Notice for his factory under SARFAESI. We intervened two weeks before the scheduled auction date."
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        By presenting the business's GST filings showing zero turnover for 18 months and a primary medical certificate for Mr. Sharma's bypass surgery, we moved the case to the Special Lok Adalat session. The bank manager initially refused anything below ₹35 Lakhs. Our team highlighted the legal flaws in their Section 13(4) notice and the bank's failure to serve the symbolic possession notice correctly. The final award was passed for ₹18 Lakhs, payable in 3 months. The factory was saved from auction.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-12 bg-white rounded-[3rem] border-2 border-[#D2A02A]/10 shadow-lg">
                            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                                <div className="w-full md:w-1/3">
                                    <div className="bg-gray-50 p-6 rounded-2xl shadow-inner">
                                        <h4 className="font-bold mb-4">Financial Snapshot</h4>
                                        <div className="space-y-2 text-sm text-gray-700">
                                            <div className="flex justify-between"><span>Credit Card Debt:</span> <span className="font-bold">₹8.5 Lakhs</span></div>
                                            <div className="flex justify-between"><span>Duration:</span> <span className="font-bold">4 Years NPA</span></div>
                                            <div className="flex justify-between text-green-600"><span>Settled For:</span> <span className="font-bold">₹1.2 Lakhs</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ending the Credit Card Trap for a Teacher</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Ms. Anjali, a primary school teacher, had an original credit card principal of ₹2 Lakhs in 2018. Due to massive interest rates and late fees, the amount ballooned to ₹8.5 Lakhs. She was suicidal due to continuous recovery agent calls even at her school.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mt-4">
                                        We represented her in the National Lok Adalat and argued that the compound interest was 'Usurious' and directly violated the RBI's fair practices code. The judge on the panel agreed with our stance. The bank was legally nudged to accept ₹1.2 Lakhs as a final settlement. All harassment stopped immediately, and Anjali regained her mental peace.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-12 bg-blue-50/50 rounded-[2.5rem] border border-blue-100">
                             <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-full md:w-1/3">
                                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                                        <h4 className="font-bold mb-4">Financial Snapshot</h4>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between"><span>Car Loan Balance:</span> <span className="font-bold">₹5.5 Lakhs</span></div>
                                            <div className="flex justify-between"><span>Status:</span> <span className="font-bold">Vehicle Repossessed</span></div>
                                            <div className="flex justify-between text-green-600"><span>Settled For:</span> <span className="font-bold">₹90,000</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">The Deficiency Settlement Success</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Mr. Kulkarni's SUV was repossessed and sold by the bank, but the sale proceeds were not enough to cover the loan. The bank sued him for the remaining ₹5.5 Lakhs deficiency. We leveraged the fact that the bank hadn't given proper notice before the vehicle auction. In the Lok Adalat, the bank agreed to close the entire matter for a one-time payment of ₹90,000.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Why Professional Legal Representation Matters</h2>
                    <div className="prose prose-lg max-w-none text-gray-700 mb-12">
                        <p>
                            You might wonder, "Can't I just walk into the Lok Adalat and talk to the bank myself?" While the law allows you to represent yourself, doing so is often like performing surgery on yourself. Banks bring their senior legal team and recovery heads to these sessions. They are counting on the fact that you don't know the RBI circulars or the technical nuances of the SARFAESI Act.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                            <FaUserShield className="text-4xl text-[#D2A02A] mb-6" />
                            <h4 className="font-bold text-xl mb-4 text-gray-900">Expertise in Bank Policies</h4>
                            <p className="text-gray-600">We know the internal 'Mandate' of the bank managers. We know when they have the authority to give a 70% waiver and when they are bluffing.</p>
                        </div>
                        <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                            <FaCheckCircle className="text-4xl text-[#D2A02A] mb-6" />
                            <h4 className="font-bold text-xl mb-4 text-gray-900">Shield Against Harassment</h4>
                            <p className="text-gray-600">Once AMA takes over your case, we become your legal buffer. Any communication from the bank or recovery agencies must come through us.</p>
                        </div>
                        <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                            <FaBalanceScale className="text-4xl text-[#D2A02A] mb-6" />
                            <h4 className="font-bold text-xl mb-4 text-gray-900">Legal Leverage Creation</h4>
                            <p className="text-gray-600">We identify procedural errors in the bank's notices (Section 138, 13(2), etc.) and use them as pressure points during the Lok Adalat negotiation.</p>
                        </div>
                        <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                            <FaHandshake className="text-4xl text-[#D2A02A] mb-6" />
                            <h4 className="font-bold text-xl mb-4 text-gray-900">Seamless Closure</h4>
                            <p className="text-gray-600">We don't just get the deal; we ensure the No Dues Certificate is issued, the CIBIL is updated, and all legal cases are formally withdrawn.</p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-16 text-center underline decoration-[#D2A02A] decoration-8 underline-offset-[12px]">The Ultimate FAQ on Lok Adalats</h2>
                  <div className="space-y-8 max-w-5xl mx-auto">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white p-6 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
                        <h3 className="text-lg md:text-2xl font-black text-gray-900 mb-4 flex items-start gap-4">
                          <span className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] text-white rounded-xl flex items-center justify-center text-base md:text-lg font-bold">Q{index+1}</span>
                          <span className="flex-1 leading-tight">{faq.question}</span>
                        </h3>
                        <div className="pl-14 text-gray-600 leading-loose text-sm md:text-xl font-light">
                          {faq.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final Premium CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] via-[#2d3748] to-[#1a202c] rounded-[3rem] p-8 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
                    <div className="relative z-10">
                        <div className="w-20 h-2 bg-[#D2A02A] mx-auto mb-8 rounded-full"></div>
                        <h2 className="text-2xl md:text-6xl font-black mb-8 leading-tight">Your Second Chance at <br /><span className="text-[#D2A02A]">Financial Dignity</span> Starts Here</h2>
                        <p className="text-lg md:text-2xl opacity-80 mb-12 max-w-3xl mx-auto font-light">
                            Don't face the banks alone. Let the most trusted legal team in India represent you at the Special Lok Adalat. Thousands have settled, you can too.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/contact">
                                <button className="w-full sm:w-auto bg-[#D2A02A] hover:bg-white hover:text-[#D2A02A] text-white font-black py-4 px-12 md:py-6 md:px-16 rounded-full transition-all transform hover:scale-110 shadow-2xl text-lg md:text-2xl">
                                    Book Personal Consultation
                                </button>
                            </Link>
                            <a href="tel:+918700343611" className="w-full sm:w-auto flex items-center justify-center gap-3 text-white font-bold text-xl hover:text-[#D2A02A] transition-colors group">
                                <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-[#D2A02A] transition-colors"><FaQuoteLeft className="rotate-180" /></div>
                                Call Now: +91-8700343611
                            </a>
                        </div>
                        <p className="mt-12 text-gray-400 text-sm md:text-lg flex items-center justify-center gap-2">
                             <FaUserShield className="text-[#D2A02A]" /> 100% Confidential & Legally Secure Process
                        </p>
                    </div>
                </section>

              </div>
            </div>

            {/* Sidebar Widgets */}
            <div className="hidden lg:block space-y-8 sticky top-28">
                {/* Urgent Help */}
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 group">
                  <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                      <FaBalanceScale className="text-[#D2A02A]" /> Helpdesk
                  </h3>
                  <p className="text-gray-500 mb-8 text-sm leading-relaxed font-medium">
                     Facing SARFAESI or Section 138? Our senior lawyers provide immediate legal protection.
                  </p>
                  <a href="tel:+918700343611" className="block w-full bg-[#1a202c] text-white text-center py-4 rounded-2xl font-bold hover:bg-[#D2A02A] transition-all transform hover:-translate-y-1 shadow-lg mb-4">
                    Call Legal Helpline
                  </a>
                  <Link href="/contact" className="block w-full border-2 border-gray-100 text-gray-900 text-center py-4 rounded-2xl font-bold hover:border-[#D2A02A] hover:text-[#D2A02A] transition-all">
                    Request Call Back
                  </Link>
                </div>

                {/* Stats */}
                <div className="p-8 bg-[#1a202c] rounded-[2rem] shadow-xl text-white">
                    <h4 className="text-[#D2A02A] font-black text-lg mb-6 uppercase tracking-widest">Our Impact</h4>
                    <div className="space-y-6">
                        <div className="border-b border-white/5 pb-4">
                            <p className="text-3xl font-black">₹500Cr+</p>
                            <p className="text-xs text-gray-400">Total Debt Resolved</p>
                        </div>
                        <div className="border-b border-white/5 pb-4">
                            <p className="text-3xl font-black">5800+</p>
                            <p className="text-xs text-gray-400">Satisfied Families</p>
                        </div>
                        <div>
                            <p className="text-3xl font-black">20+</p>
                            <p className="text-xs text-gray-400">Years of Legal Excellence</p>
                        </div>
                    </div>
                </div>

                {/* Quick Guides */}
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
                    <h4 className="font-black text-gray-900 mb-6 border-b border-gray-50 pb-4 text-xl">Legal Expertise</h4>
                    <ul className="space-y-5">
                        {[
                            { label: "Loan Settlement Guide", href: "/services/loan-settlement" },
                            { label: "Negotiation Strategies", href: "/how-to-negotiate-a-loan-settlement-with-lenders-online" },
                            { label: "NPA Survival Kit 2025", href: "/best-apps-for-managing-loan-settlement-offers-in-India" },
                            { label: "Legal Notice Response", href: "/services/cheque-bounce-lawyer" }
                        ].map((link, i) => (
                            <li key={i}>
                                <Link href={link.href} className="flex items-center gap-3 text-gray-600 hover:text-[#D2A02A] transition-colors group">
                                    <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-[#D2A02A] transition-colors"></div>
                                    <span className="text-sm font-bold tracking-tight">{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>

          {/* Regional Grid */}
          <div className="mt-24">
            <div className="text-center mb-12">
                <h3 className="text-2xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter">Lok Adalat Services Across India</h3>
                <p className="text-gray-500 font-medium max-w-2xl mx-auto">Access specialized legal help for Lok Adalat settlements in your specific state or city.</p>
            </div>
            <GenericStatesGrid 
              serviceName="Special Lok Adalat" 
              servicePath="special-lok-adalat-for-loan-settlement" 
              customSlugs={{
                "Andhra Pradesh": "andhra-pradesh",
                "Arunachal Pradesh": "arunachal-pradesh",
                "Assam": "Assam",
                "Bihar": "Bihar",
                "Chhattisgarh": "Chhattisgarh",
                "Delhi": "Delhi",
                "Goa": "Goa",
                "Gujarat": "Gujarat",
                "Haryana": "Haryana",
                "Himachal Pradesh": "himachal-pradesh",
                "Hyderabad": "Hyderabad",
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
                "Uttar Pradesh": "uttar-pradesh",
                "Uttarakhand": "uttarakhand",
                "West Bengal": "west-bengal"
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

// Minimal missing component definitions to ensure validity
const FaShieldAlt = FaUserShield;


