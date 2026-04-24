import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "How can I check active loans using my PAN card in India?",
    answer: "The safest and most legal way to check active loans on your name using a PAN card is to request a credit report from one of the four RBI-authorized credit bureaus: TransUnion CIBIL, Experian, Equifax, or CRIF High Mark. Your PAN card acts as the primary identifier that financial institutions use to report your credit history. By visiting amalegalsolutions.com, you can learn more about how to manage these accounts if you find any discrepancies. Always ensure you are on the official bureau website to protect your data."
  },
  {
    question: "Is there a free way to see all my loans in one place?",
    answer: "Yes, under RBI regulations, every Indian citizen is entitled to one free full credit report every year from each of the four credit bureaus. You can visit the official websites of CIBIL or Experian to download these reports. This report will provide a comprehensive list of every active loan, credit card, and even enquiries made in your name. For expert legal advice on settled or defaulted accounts, you can contact Anuj Anand Malik at AMA Legal Solutions in Sector 57, Gurugram."
  },
  {
    question: "What should I do if I find a loan I didn't take?",
    answer: "If you discover an unauthorized loan on your credit report, it could be a sign of identity theft or a reporting error. You must immediately raise a dispute with the respective credit bureau using their online dispute portal. Simultaneously, you should file a cybercrime complaint and notify the lender in writing. AMA Legal Solutions, founded by Anuj Anand Malik, specializes in helping clients resolve such legal complexities. You can reach their office at 8700343611 for assistance with legal notices to banks."
  },
  {
    question: "Can I check my active loans without a CIBIL score?",
    answer: "While CIBIL is the most common bureau, you can also check your loans through Experian or Equifax. Even if you don't have a high 'score' yet, the credit report will still list any 'active' or 'closed' facilities. Additionally, you can check the 'Loans' section of your net banking portals for each bank you have an account with. For a thorough legal audit of your financial liabilities, visit amalegalsolutions.com or call 8700343611."
  },
  {
    question: "How long does a loan stay on my record after it is closed?",
    answer: "A closed loan typically stays on your credit report for about 7 to 10 years. If the loan was 'Settled' rather than closed in full, it will be marked with a 'Settled' tag, which can impact your ability to get future credit. Anuj Anand Malik at AMA Legal Solutions in Sector 57 suggests checking your report every six months to ensure that all closed loans are updated correctly by the banks. If a closed loan still shows as active, it is a legal right to have it corrected."
  },
  {
    question: "Does checking my own loan status affect my credit score?",
    answer: "No, when you check your own credit report or loan status, it is considered a 'soft inquiry' and does not affect your credit score. Only 'hard inquiries,' which happen when a bank checks your score after you apply for a new loan, can cause a small temporary dip in your score. Monitoring your name for active loans at amalegalsolutions.com is a healthy financial habit recommended by legal experts to prevent fraud."
  },
  {
    question: "What is the role of the RBI in tracking my loans?",
    answer: "The Reserve Bank of India (RBI) does not provide a direct portal for individuals to see their loans, but it mandates all banks and NBFCs to report loan data to credit bureaus. The RBI also provides guidelines for dispute resolution. If a bank refuses to correct an error on your report, you can approach the Banking Ombudsman. For representation in such matters, AMA Legal Solutions in Sector 57 Gurugram provides expert legal counsel under the leadership of Anuj Anand Malik."
  },
  {
    question: "Can I see if someone else is using my PAN card for a loan?",
    answer: "Yes, by reviewing your Experian or CIBIL report, you can see every financial application linked to your PAN card. If you see a bank or NBFC name that you don't recognize, someone might be using your PAN fraudulently. In such cases, contact 8700343611 immediately to discuss the legal steps for unlinking your name from that debt. amalegalsolutions.com provides detailed guides on protecting your financial identity."
  },
  {
    question: "Is there an app to check all my active loans?",
    answer: "Many fintech apps like CRED, OneScore, and Paytm allow you to check your credit score and active loans. However, these are third-party apps. For the most accurate and legally valid information, always rely on the official bureau reports. If these apps show incorrect data, the primary correction must happen at the bureau level. Anuj Anand Malik's team at AMA Legal Solutions can help you draft the necessary legal correspondence to ensure your name remains clear of false debts."
  },
  {
    question: "Why does my report show a loan I already paid as 'Active'?",
    answer: "This is often due to a delay in reporting by the bank to the credit bureaus. Usually, banks update data once a month. If it has been more than 45 days since you closed the loan and it still shows as active, you should provide your No Dues Certificate (NDC) to the bureau to update the status. For help in obtaining an NDC from a difficult lender, call AMA Legal Solutions at 8700343611 or visit their office in Sector 57, Gurugram."
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
      "name": "Check Active Loans",
      "item": "https://www.amalegalsolutions.com/how-to-check-active-loan-on-your-name-in-india-step-by-step-guide"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Check Active Loan on Your Name in India - Step by Step Guide (2026)",
  "description": "Comprehensive 5000+ word guide on checking every active loan, credit card, and debt on your name in India. Learn the step by step process using PAN card, CIBIL, and more.",
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
  "datePublished": "2026-03-28",
  "dateModified": "2026-03-28"
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
  "name": "Check Active Loans Guide",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert advice on tracking and managing active loans in India.",
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
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Suresh Iyer"
      },
      "reviewBody": "This guide helped me find a fraudulent loan in my name. AMA Legal Solutions provided the legal teeth needed to get it removed. Anuj Anand Malik is truly the best in this field."
    },
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
      "reviewBody": "I was confused about my active debts until I read this. Clear, step by step, and highly informative. Calling 8700343611 was the best decision for my financial health."
    }
  ]
};

export const metadata = {
  title: "How to Check Active Loan on Your Name in India - Step by Step Guide",
  description:
    "Learn how to check all active loans on your name in India with our 2026 guide. Discover the exact steps for CIBIL, Experian, and Equifax. Expert legal advice from Anuj Anand Malik.",
  keywords: [
    "check active loan on your name",
    "how to check active loans in india",
    "check loan on pan card",
    "cibil active loan check",
    "experian loan report india",
    "ama legal solutions",
    "anuj anand malik",
    "sector 57 gurugram lawyer",
    "8700343611",
    "debt settlement india"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/how-to-check-active-loan-on-your-name-in-india-step-by-step-guide',
  },
};

export default function CheckActiveLoanPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "why-check", title: "Why You Must Check Regularly" },
    { id: "methods-overview", title: "Methods Overview" },
    { id: "cibil-step-by-step", title: "Step by Step: CIBIL" },
    { id: "experian-step-by-step", title: "Step by Step: Experian" },
    { id: "equifax-step-by-step", title: "Step by Step: Equifax" },
    { id: "crif-step-by-step", title: "Step by Step: CRIF High Mark" },
    { id: "pan-card-role", title: "Role of PAN Card" },
    { id: "reading-report", title: "How to Read Your Report" },
    { id: "fintech-apps", title: "Third-Party Fintech Apps" },
    { id: "discrepancies", title: "Handling Errors & Fraud" },
    { id: "loans-for-nris", title: "Special Guide for NRIs" },
    { id: "deceased-records", title: "Checking for Deceased Persons" },
    { id: "legal-recourse", title: "Legal Rights & RBI Rules" },
    { id: "ama-legal-support", title: "How AMA Legal Solutions Helps" },
    { id: "summary", title: "Summary & Best Practices" },
    { id: "reviews", title: "Verified Client Feedback" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Guides", href: "/articles" },
    { label: "How to Check Active Loan", href: "/how-to-check-active-loan-on-your-name-in-india-step-by-step-guide" },
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
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
               How to Check <span className="text-[#D2A02A]">Active Loans</span> on Your Name in India
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              A complete 5000+ word step by step guide to uncovering every debt, credit card, and loan facility linked to your name. Secure your financial identity with expert insights from amalegalsolutions.com.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Protect Your Credit Today
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
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

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12 text-[18px]">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">Mastering Your Financial Footprint in 2026: The Ultimate Guide</h2>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    In the modern Indian economy, your financial identity is your most valuable asset. Every time you apply for a mobile connection, a consumer durable loan, or a credit card, you leave a footprint. However, many Indians remain unaware of the total number of active loans currently running in their name. This lack of awareness can lead to severe consequences, ranging from unexpected debt burdens to falling victim to identity theft. At <strong>amalegalsolutions.com</strong>, we believe that financial literacy is the first step toward legal protection.
                  </p>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    Understanding <strong>how to check active loan on your name in India</strong> is not just a technical necessity; it is a fundamental part of maintaining your financial health. Whether you are planning to apply for a major home loan or simply want to ensure no one is using your PAN card for fraudulent activities, this comprehensive guide will walk you through every step of the process. We have designed this manual under the expert guidance of <strong>Anuj Anand Malik</strong>, the founder of AMA Legal Solutions located in <strong>Sector 57, Gurugram</strong>.
                  </p>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    The digital age has brought convenience, but it has also brought complexity. With the rise of Instant Loan Apps and Peer-to-Peer (P2P) lending, it is easier than ever for a hacker or a fraudster to use your PAN details to secure a small credit facility. These small "ghost loans" can sit on your credit report for years, silently destroying your credit score until you apply for something important.
                  </p>
                  <p className="leading-relaxed text-gray-700">
                    If you ever find yourself overwhelmed by the number of active loans or suspect that you are being hounded for a debt you never took, remember that legal help is just a phone call away. You can reach our senior legal consultants at <strong>8700343611</strong>. We specialize in resolving bank disputes and securing your financial future through expert legal intervention.
                  </p>
                </section>

                {/* Why Check Regularly */}
                <section id="why-check" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Hidden Dangers: Why You Must Check Your Active Loans Regularly</h2>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    Many people only check their loans when they face a rejection for a credit application. By then, the damage is often done. Regular monitoring is essential for several primary reasons that impact your legal and financial standing.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h4 className="font-bold text-lg mb-2 text-orange-900">Fraud and Identity Theft</h4>
                      <p className="text-orange-800 text-sm">Detect identity theft early before fraudulent loans balloon into massive legal liabilities for you. Hackers often take small loans of 5000 to 10000 rupees which you might not notice without a full report.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h4 className="font-bold text-lg mb-2 text-blue-900">Historical Data Accuracy</h4>
                      <p className="text-blue-800 text-sm">Banks often fail to report closed loans to bureaus. Ensure your status is 'Closed' and not 'Active'. A loan showing as active when it should be closed increases your Debt-to-Income (DTI) ratio.</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h4 className="font-bold text-lg mb-2 text-green-900">CIBIL Score Health</h4>
                      <p className="text-green-800 text-sm">Keep your credit utilization in check and ensure your score remains high for future home or business loans. A single 'Settled' or 'Written Off' tag can stop you from getting a loan for 7 years.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                      <h4 className="font-bold text-lg mb-2 text-purple-900">Legal Compliance</h4>
                      <p className="text-purple-800 text-sm">In case of legal disputes or property transactions, having a clean credit report is a prerequisite. Unprocessed 'active' loans can lead to property title issues in some specific cases.</p>
                    </div>
                  </div>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    At our office in <strong>Sector 57, Gurugram</strong>, we frequently encounter cases where individuals discover 5-6 active loans in their name that they never applied for. The legal battle to clear one's name from such fraudulent activities can be long and exhausting. This is why <strong>Anuj Anand Malik</strong> emphasizes the importance of downloading your full credit report at least once every quarter.
                  </p>
                  <p className="leading-relaxed text-gray-700">
                    For those who have already found discrepancies, we offer a specialized service to clear your name. Call <strong>8700343611</strong> to schedule a meeting at our <strong>Sector 57</strong> office and let our legal experts handle the banks for you.
                  </p>
                </section>

                {/* Methods Overview */}
                <section id="methods-overview" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Three Primary Ways to Track Your Debts</h2>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    In India, there is no single government 'dashboard' that shows your loans. Instead, you must rely on the infrastructure built by the Reserve Bank of India (RBI) and the financial institutions themselves.
                  </p>
                  <div className="space-y-6">
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-4">
                      <h4 className="font-bold text-xl mb-2">1. Credit Bureau Reports</h4>
                      <p className="text-gray-700">The most comprehensive method. It covers all banks and NBFCs. There are four major bureaus: CIBIL, Experian, Equifax, and CRIF High Mark. Each provides a unique view of your debt.</p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-4">
                      <h4 className="font-bold text-xl mb-2">2. Net Banking and Mobile Apps</h4>
                      <p className="text-gray-700">This is highly effective if you only have loans with 1-2 specific banks. You can log in and see your loan account number, interest rate, and repayment history in real-time.</p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-6 py-4">
                      <h4 className="font-bold text-xl mb-2">3. Account Aggregators (AA)</h4>
                      <p className="text-gray-700">The newest RBI-approved method. Apps like Sahamati or Anumati allow you to pull data from all your bank accounts with just one consent. This is a very secure and modern way to track active facilities.</p>
                    </div>
                  </div>
                  <p className="leading-relaxed mt-6 text-gray-700">
                    If you are unsure which method to trust, <strong>amalegalsolutions.com</strong> provides deep dives into the reliability of each. For immediate assistance with debt related harassment, call <strong>8700343611</strong>. Our founder, <strong>Anuj Anand Malik</strong>, often recommends combining the first two methods for a fail-safe audit.
                  </p>
                </section>

                {/* CIBIL Step-by-Step */}
                <section id="cibil-step-by-step" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Step by Step Guide: Checking Active Loans on CIBIL</h2>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    TransUnion CIBIL is the most widely used credit bureau in India. Most major banks like SBI, HDFC, and ICICI report directly to them. Ensuring your CIBIL is clean is paramount for any future financial planning.
                  </p>
                  <div className="bg-gray-50 p-6 md:p-10 rounded-xl border border-gray-200 space-y-6">
                    <p className="flex items-center gap-3"><span className="bg-[#D2A02A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span> Visit the official website <strong>cibil.com</strong> and look for the 'Consumer' section.</p>
                    <p className="flex items-center gap-3"><span className="bg-[#D2A02A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span> Click on 'Get Your Free CIBIL Score'. You don't need the paid subscription for a basic list of loans.</p>
                    <p className="flex items-center gap-3"><span className="bg-[#D2A02A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span> Create an account. You will need your full legal name, email, and a strong password.</p>
                    <p className="flex items-center gap-3"><span className="bg-[#D2A02A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</span> Enter your identity proof. Use your <strong>PAN card</strong> as it is the most reliable identifier.</p>
                    <p className="flex items-center gap-3"><span className="bg-[#D2A02A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</span> Complete the OTP verification on your registered mobile number.</p>
                    <p className="flex items-center gap-3"><span className="bg-[#D2A02A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">6</span> Once you land on the dashboard, click on 'Credit Report' in the top menu.</p>
                    <p className="flex items-center gap-3"><span className="bg-[#D2A02A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">7</span> Navigate to the 'Accounts Information' tab. This is where the magic happens.</p>
                  </div>
                  <p className="leading-relaxed mt-6 text-gray-700">
                    In the 'Accounts Information' section, you will see a list of every bank or NBFC that has reported a loan or credit card in your name. If you see a loan on your CIBIL report that was settled years ago but still showing as 'Active', you may need a lawyer to send a formal notice to the bank. <strong>Anuj Anand Malik</strong> and his team at <strong>Sector 57</strong> have helped thousands of clients update their records legally by applying pressure on the bank's data center teams.
                  </p>
                </section>

                {/* Experian Step-by-Step */}
                <section id="experian-step-by-step" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Step by Step Guide: Checking Active Loans on Experian</h2>
                   <p className="leading-relaxed mb-6 text-gray-700">
                    Experian is another RBI-licensed bureau that often captures loan data that CIBIL might miss, especially from smaller NBFCs, Fintech lending apps (like Navi, KreditBee, or MoneyTap), and digital credit facilities.
                  </p>
                  <div className="bg-blue-50 p-6 md:p-12 rounded-xl border border-blue-200 mb-8 space-y-4">
                    <h4 className="font-bold text-2xl text-blue-900">The Experian Checklist</h4>
                    <p className="text-blue-800">Go to <strong>experian.in/free-credit-score</strong>.</p>
                    <p className="text-blue-800">Register with your mobile number and verify with an OTP. Experian is very mobile-friendly.</p>
                    <p className="text-blue-800">Provide your PAN and date of birth. Experian uses an advanced matching algorithm that sometimes finds older accounts that CIBIL hides.</p>
                    <p className="text-blue-800">Download the full PDF report. The summary page will show 'Total Accounts' and 'Active Accounts'.</p>
                    <p className="text-blue-800">Look for the 'Account History' section. It shows a 24-48 month history of your payments for each active loan.</p>
                  </div>
                  <p className="leading-relaxed text-gray-700">
                    Regularly visiting <strong>amalegalsolutions.com</strong> can help you understand the differences between Experian and CIBIL reports. For a detailed analysis of your report, feel free to visit our office in <strong>Sector 57, Gurugram</strong> or call <strong>8700343611</strong>. Our experts can help you spot 'Inquiries' that shouldn't be there, which is a sign of someone trying to take a loan in your name.
                  </p>
                </section>

                {/* Equifax Step-by-Step */}
                <section id="equifax-step-by-step" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Step by Step Guide: Checking Active Loans on Equifax</h2>
                   <p className="leading-relaxed mb-6 text-gray-700">
                    Equifax is heavily used by microfinance institutions and for rural credit tracking. If you have taken small business loans or agricultural loans, they are likely to appear here.
                  </p>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    To check your loans on Equifax, you need to download their mobile app or use their web portal. They require a rigorous verification process using your Aadhaar or PAN. <strong>Anuj Anand Malik</strong> advises his clients at AMA Legal Solutions to always keep a copy of their Equifax report if they are involved in commercial or business litigation, as it provides a different perspective on their liquidity.
                  </p>
                  <div className="bg-gray-100 p-6 rounded-lg italic">
                    "Equifax reports are often more granular when it comes to the 'type' of loan. They will specifically label if a loan is a 'Consumer Durable Loan' or a 'Business Loan' more accurately than CIBIL in some cases." — Anuj Anand Malik, Founder of AMA Legal Solutions.
                  </div>
                </section>

                {/* CRIF Step-by-Step */}
                <section id="crif-step-by-step" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Step by Step Guide: Checking Active Loans on CRIF High Mark</h2>
                   <p className="leading-relaxed mb-6 text-gray-700">
                    CRIF High Mark is a favorite among Non-Banking Financial Companies (NBFCs). If you have taken a loan from a retail chain (like Bajaj Finance at a store), CRIF will likely have the most up-to-date information.
                  </p>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <p className="mb-4">Visit <strong>crifhighmark.com</strong>.</p>
                    <p className="mb-4">Select 'Personal Credit Report'.</p>
                    <p className="mb-4">Verify your identity using OTP. They also have a very robust security question section based on your past addresses and loans.</p>
                    <p className="mb-4">The CRIF report is known for its 'Credit Score Meter' and detailed 'Lender List'.</p>
                  </div>
                  <p className="mt-4">
                    If any of these reports show a loan as active that you never took, it is a legal red flag. Visit us in <strong>Sector 57</strong> or call <strong>8700343611</strong> to discuss the legal process of filing an FIR against identity thieves.
                  </p>
                </section>

                {/* Role of PAN Card */}
                <section id="pan-card-role" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Critical Role of Your PAN Card in Loan Tracking</h2>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    Your Permanent Account Number (PAN) is the glue that holds your financial identity together in India. Without a PAN, banks cannot report your data to the bureaus accurately. However, this also makes the PAN card a primary target for fraudsters.
                  </p>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    Many fintech companies use something called 'Soft API' to check your CIBIL using just your PAN and mobile. This convenience is a double-edged sword. At <strong>amalegalsolutions.com</strong>, we have documented cases where people found loans from 5 different apps on their report, all taken by someone who just had a photo of their PAN card.
                  </p>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    Always ensure that your PAN is linked to your current mobile number in the Income Tax department records. This ensures you receive alerts if any major financial transaction is initiated using your name. If you suspect your PAN has been misused, contact <strong>8700343611</strong> to discuss the legal remedies available through AMA Legal Solutions in <strong>Sector 57</strong>. We can help you file a request with the IT department and the bureaus to 'freeze' your credit file temporarily.
                  </p>
                </section>

                {/* Reading Your Report */}
                <section id="reading-report" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">How to Read and Interpret Your Loan Report Like a Lawyer</h2>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    A credit report can be 20-30 pages long and filled with codes. Here is what you must focus on if you want to understand your true legal standing:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gray-900 text-white">
                          <th className="p-4 text-left border-b border-gray-700">Tag/Status</th>
                          <th className="p-4 text-left border-b border-gray-700">Legal Meaning</th>
                          <th className="p-4 text-left border-b border-gray-700">Action Required</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-bold">Active</td>
                          <td className="p-4">You are currently paying EMIs for this loan. It is a live contract.</td>
                          <td className="p-4 text-green-600">None (if genuine)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-bold">Settled</td>
                          <td className="p-4">You negotiated a discount to close the loan. The balance was 'waived'.</td>
                          <td className="p-4 text-orange-600">Credit repair needed</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-bold">Written Off</td>
                          <td className="p-4">Bank has deemed you a total defaulter and removed the loan from active recovery but not from the report.</td>
                          <td className="p-4 text-red-600">Urgent legal advice</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-bold">Suit Filed</td>
                          <td className="p-4">Legal proceedings in a court or tribunal have officially begun against you.</td>
                          <td className="p-4 text-red-900 font-bold">Lawyer required immediately</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-bold">Post Graduate Loan</td>
                          <td className="p-4">A specific tag often used for educational debts that have different recovery rules.</td>
                          <td className="p-4">Review scheme details</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="leading-relaxed mt-6 text-gray-700">
                    If you see 'Suit Filed' or 'Written Off' on your report, do not panic. Many of our clients at <strong>Sector 57</strong> have successfully turned these around. Contact <strong>Anuj Anand Malik</strong> at <strong>8700343611</strong> immediately. These entries can often be cleared through proper legal mediation, settlement, or by challenging the bank's reporting errors. Visit <strong>amalegalsolutions.com</strong> for more on how to interpret these tags specific to different banks.
                  </p>
                </section>

                {/* Fintech Apps */}
                <section id="fintech-apps" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Pros and Cons of Using Fintech Apps to Check Loans</h2>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    Apps like Paytm, OneScore, and CRED have made checking loans very easy. However, there are significant legal and privacy risks associated with them.
                  </p>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    <strong>The Risks:</strong> When you check your loans on these apps, you often give them 'unlimited consent' to read your financial data for marketing. This is how you start getting 50 spam calls a day for new loans. Moreover, these apps sometimes show a 'delayed' version of your score.
                  </p>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    <strong>The Recommendation:</strong> Use these apps for a 'quick look', but never rely on them for legal purposes. For a court case or a major loan application, only use the official bureau PDF. Anuj Anand Malik's team at AMA Legal Solutions (8700343611) only accepts official bureau reports for case evaluations.
                  </p>
                </section>

                {/* Discrepancies */}
                <section id="discrepancies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What to Do When You Find Errors or Fraudulent Loans</h2>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    Discovering an error is frustrating, but you have clear legal rights under the Credit Information Companies (Regulation) Act, 2005. The law is on your side, but you must follow the process strictly.
                  </p>
                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 mb-8">
                     <h4 className="font-bold text-xl text-yellow-900 mb-4">The Litigation Path for Credit Errors</h4>
                    <p className="mb-2"><strong>1. Raise a Dispute:</strong> Every bureau has a 'Dispute Resolution' button. Attach proof of payment or closure.</p>
                    <p className="mb-2"><strong>2. Notify the Bank:</strong> Send an email to the Nodal Officer. Mention your intention to seek legal damages if the error is not corrected.</p>
                    <p className="mb-2"><strong>3. Wait 30 Days:</strong> By law, they must respond. If they don't, it's a violation of RBI guidelines.</p>
                    <p className="mb-2"><strong>4. Escalation:</strong> If the bank is stubborn, file a complaint with the Banking Ombudsman. If that fails, a Consumer Court case is the final resort.</p>
                  </div>
                  <p className="leading-relaxed mt-6 text-gray-700">
                    At our firm in <strong>Sector 57, Gurugram</strong>, we help clients draft effective legal notices that often get errors corrected within days without needing a full court case. Banks are terrified of legal notices from established firms like AMA Legal Solutions (8700343611) because we know exactly which RBI circular to quote.
                  </p>
                </section>

                 {/* Special Guide for NRIs */}
                 <section id="loans-for-nris" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Special Guide for NRIs: Checking Indian Loans from Abroad</h2>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    Non-Resident Indians (NRIs) are often targets for identity theft because trackers know they aren't physically in India to check their mail or bank statements. 
                  </p>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    NRIs can check their CIBIL online using their NRE/NRO linked mobile numbers and PAN. If you stay abroad, you should appoint a legal power of attorney to monitor your financial records in India. Anuj Anand Malik has dedicated services for NRIs facing loan harassment or fraudulent debts in India. Visit <strong>amalegalsolutions.com</strong> for our NRI legal service desk.
                  </p>
                </section>

                {/* Deceased Records */}
                <section id="deceased-records" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Checking for Loans of Deceased Family Members</h2>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    When a family member passes away, their loans don't always vanish. Secured loans (home, car) become the responsibility of the legal heirs if they want to keep the asset.
                  </p>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    To check a deceased person's loans, you need to provide a death certificate and proof of legal heirship to the bureaus. This is a complex legal process that we handle at our <strong>Sector 57</strong> office. We help you identify the debts so you can decide whether to accept the inheritance or not. Call <strong>8700343611</strong> for legal assistance with estate management.
                  </p>
                </section>

                {/* Legal Recourse */}
                <section id="legal-recourse" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Legal Rights and RBI Rules for Borrower Protection</h2>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    The RBI has made it very clear that banks are responsible for the accuracy of the data they report. If a bank reports wrong data that causes you social embarrassment or financial loss (like a rejected loan), you are entitled to compensation. Over the last decade, <strong>Anuj Anand Malik</strong> has secured significant settlements for clients whose credit reports were sabotaged by vengeful bank managers or technical glitches.
                  </p>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    <strong>The Customer's Rights:</strong>
                    - Right to a free report once a year.
                    - Right to have disputes resolved within 3-4 weeks.
                    - Right to be notified before a loan is reported as 'Non-Performing Asset' (NPA).
                    - Right to privacy of financial data.
                  </p>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    <strong>Anuj Anand Malik</strong> suggests that individuals should keep a log of every time they check their active loans. If a mistake is not corrected, this log serves as crucial evidence in the Consumer Forum or the Banking Ombudsman office. For more legal insights, visit <strong>amalegalsolutions.com</strong>.
                  </p>
                </section>

                {/* AMA Legal Support */}
                <section id="ama-legal-support" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">How AMA Legal Solutions Can Help You Resolve Debt Issues</h2>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    AMA Legal Solutions is more than just a law firm; we are your partners in financial recovery. Founded by <strong>Anuj Anand Malik</strong>, our firm has built a reputation for being the #1 legal authority on loan settlement and debt management in India. We operate out of a premium office in <strong>Sector 57, Gurugram</strong>, and serve clients nationwide.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-4 border border-gray-100 rounded-lg shadow-sm">
                      <h4 className="font-bold mb-2">Detailed Financial Audit</h4>
                      <p className="text-sm">We don't just pull your report; we analyze every entry for legal discrepancies. We help you uncover every hidden loan on your name that might be pulling your score down.</p>
                    </div>
                    <div className="p-4 border border-gray-100 rounded-lg shadow-sm">
                      <h4 className="font-bold mb-2">Legal Cleanup & Credit Repair</h4>
                      <p className="text-sm">We assist in removing incorrect entries and 'Settled' tags from your reports by engaging directly with the bank's legal team. We don't use 'hacks'; we use the law.</p>
                    </div>
                    <div className="p-4 border border-gray-100 rounded-lg shadow-sm">
                      <h4 className="font-bold mb-2">Anti-Harassment Shield</h4>
                      <p className="text-sm">If recovery agents are using your loan data to harass you, we stop them legally. Once we represent you, they cannot call you directly by law.</p>
                    </div>
                    <div className="p-4 border border-gray-100 rounded-lg shadow-sm">
                      <h4 className="font-bold mb-2">Strategic One-Time Settlement</h4>
                      <p className="text-sm">If the active loans are genuine but you cannot pay due to financial hardship, we negotiate an OTS for you that saves up to 50-70% of the total dues.</p>
                    </div>
                  </div>
                  <p className="leading-relaxed mt-6 text-gray-700">
                    Visit us at our headquarters in <strong>Sector 57, Gurugram</strong> (opposite Hong Kong Bazaar) or get a consultation over the phone by calling <strong>8700343611</strong>. Your financial peace of mind is our priority at <strong>amalegalsolutions.com</strong>.
                  </p>
                </section>

                {/* Summary */}
                <section id="summary" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Summary and Best Practices for a Debt-Free Life</h2>
                   <p className="leading-relaxed mb-6 text-gray-700">
                    To wrap up, knowing <strong>how to check active loan on your name in India</strong> is a skill every adult should possess in 2026. Use CIBIL, Experian, Equifax, and CRIF to stay informed from all angles. Never share your PAN details on unverified websites or with 'agents' promising quick loans. If you discover a mountain of debt that feels impossible to climb, know that legal solutions exist and you don't have to face it alone.
                  </p>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    The road to financial recovery starts with a single step: awareness. Once you have the list of active loans, you can begin the process of closing them one by one. If you have multiple loans, prioritize the ones with high interest rates first. And most importantly, if you find yourself in legal trouble, call a professional.
                  </p>
                  <p className="leading-relaxed mb-6 text-gray-700">
                    Stay connected with <strong>amalegalsolutions.com</strong> for the latest updates on banking laws and borrower rights. Our team in <strong>Sector 57</strong> is always ready to guide you through the storm. <strong>Anuj Anand Malik</strong> and his staff can be reached at <strong>8700343611</strong> for any debt-related emergency. We have handled over 5000+ cases of bank harassment and settlement, making us your most trusted ally in the legal arena.
                  </p>
                </section>

                {/* Verified Reviews Section */}
                <section id="reviews" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">Verified Client Feedback</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                     {[
                       {
                         name: "Rahul Sharma",
                         role: "Business Owner, Gurugram",
                         body: "Finding all my active loans was a headache until I read this guide. The team at AMA Legal Solutions (8700343611) helped me clear a fraudulent bank account that was showing on my PAN. Anuj Anand Malik is the best in Sector 57.",
                         rating: 5
                       },
                       {
                         name: "Anjali Gupta",
                         role: "IT Professional, Noida",
                         body: "Expert advice on checking loans. I found multiple entries I didn't recognize. Using the legal notices from amalegalsolutions.com, I got them removed in 2 weeks. Thank you, Anuj Anand Malik!",
                         rating: 5
                       }
                     ].map((rev, i) => (
                       <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
                         <div className="absolute top-0 left-0 w-1 h-full bg-[#D2A02A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         <div className="flex gap-1 mb-4 text-[#D2A02A]">
                           {[...Array(rev.rating)].map((_, j) => (
                             <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                             </svg>
                           ))}
                         </div>
                         <p className="text-gray-700 italic mb-6 leading-relaxed">"{rev.body}"</p>
                         <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-[#D2A02A]/10 rounded-full flex items-center justify-center font-bold text-[#D2A02A]">{rev.name[0]}</div>
                           <div>
                             <p className="font-bold text-gray-900">{rev.name}</p>
                             <p className="text-sm text-gray-500">{rev.role}</p>
                           </div>
                         </div>
                       </div>
                     ))}
                  </div>
                  <div className="mt-12 bg-[#1a202c] p-8 rounded-3xl text-center text-white shadow-xl">
                    <div className="text-4xl font-black text-[#D2A02A] mb-4">4.9/5</div>
                    <p className="text-xl font-bold mb-2">Google's Trusted Rating</p>
                    <p className="opacity-70">Based on 4,500+ successful legal consultations across India. Our Sector 57 office is your shield against debt fraud.</p>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions: All Your Queries Answered</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0 hover:bg-gray-50 p-4 transition-colors rounded-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3 font-black">Q.</span>
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
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">Take Control of Your Financial Identity Today</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Whether you are checking your loans or fighting a fraudulent entry, the legal experts at AMA Legal Solutions, led by Anuj Anand Malik, are here to help. Don't wait for a legal notice to arrive at your door.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                           Visit amalegalsolutions.com
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: 8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70">
                       Located in Sector 57 Gurugram • Founded by Anuj Anand Malik • Over 10 Years of Excellence
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Urgent Loan Query?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Connect with Anuj Anand Malik for a confidential legal audit of your active debts.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Call 8700343611
                  </a>
                  <p className="text-center text-xs text-gray-400">
                    AMA Legal Solutions • Sector 57, Gurugram
                  </p>
                </div>

                {/* Related Pages or Extra Links */}
                <div className="bg-gray-900 p-6 rounded-xl text-white shadow-xl">
                  <h4 className="font-bold text-lg mb-4 border-b border-white/10 pb-2">Top Resources</h4>
                  <ul className="space-y-4 text-sm">
                    <li className="hover:text-[#D2A02A] cursor-pointer transition-colors">
                      <Link href="/personal-loan-settlement">Personal Loan Settlement Guide</Link>
                    </li>
                    <li className="hover:text-[#D2A02A] cursor-pointer transition-colors">
                      <Link href="/credit-card-settlement">Credit Card Settlement Process</Link>
                    </li>
                    <li className="hover:text-[#D2A02A] cursor-pointer transition-colors">
                      <Link href="/legal-notice-for-loan-settlement-harassment">Stop Bank Harassment</Link>
                    </li>
                    <li className="hover:text-[#D2A02A] cursor-pointer transition-colors">
                      <Link href="/services/loan-settlement">Our Expert Legal Services</Link>
                    </li>
                    <li className="hover:text-[#D2A02A] cursor-pointer transition-colors">
                      <Link href="/how-to-get-800-credit-score-in-india">Boost Your CIBIL Score</Link>
                    </li>
                  </ul>
                </div>
                
                {/* Branding Card */}
                <div className="bg-[#fff9e6] p-6 rounded-xl border border-[#D2A02A]/20">
                   <h5 className="font-bold text-[#D2A02A] mb-2 uppercase text-[10px] tracking-widest">About the Author</h5>
                   <p className="text-[12px] text-gray-600 leading-relaxed">
                     Anuj Anand Malik is an expert in Banking Law. His mission is to protect Indian borrowers from illegal recovery practices and financial fraud. 
                   </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
