import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is a loan settlement application?",
    answer: "A loan settlement application is a formal written request submitted by a borrower to a bank or financial institution asking to settle an outstanding debt for a lump sum payment that is less than the total amount owed. This application usually outlines the borrower's financial hardships and proposes a specific settlement figure to close the account permanently."
  },
  {
    question: "How do I write a loan settlement application letter?",
    answer: "To write an effective loan settlement application, you should include your loan account details, a clear statement of your financial hardship (like job loss or medical emergency), and a realistic settlement offer. It is best to use a formal tone and attach supporting documents as evidence of your inability to pay the full dues. You can follow the template provided on our page for a structured format."
  },
  {
    question: "What are the latest RBI guidelines for loan settlement in 2026?",
    answer: "The Reserve Bank of India (RBI) guidelines emphasize that loan settlement should be a fair and transparent process. Banks are encouraged to offer One-Time Settlement (OTS) schemes to recover dues from non-performing assets (NPAs). The guidelines also strictly prohibit harassment by recovery agents and mandate that any settlement agreement must be documented in a formal approval letter before any payment is made."
  },
  {
    question: "Can I apply for loan settlement for a personal loan?",
    answer: "Yes, you can apply for loan settlement for a personal loan. Since personal loans are unsecured, banks are often more willing to negotiate a settlement if they believe the borrower has no means to pay the full amount. However, you must prove genuine financial distress to get the bank to agree to a significant reduction in the principal or interest."
  },
  {
    question: "How much reduction can I expect in a loan settlement?",
    answer: "The percentage of reduction varies based on the lender's policy and the specifics of your case. Generally, borrowers can negotiate a settlement for 25% to 50% of the total outstanding amount. In cases of extreme hardship or very old defaults, the reduction could be even higher. Our legal experts help you negotiate the best possible deal."
  },
  {
    question: "What documents are required for a loan settlement application?",
    answer: "You typically need to provide your PAN and Aadhar cards, loan account statements, proof of income (or lack thereof), and documents supporting your hardship claim, such as medical reports or a termination letter. Providing a comprehensive set of documents helps in convincing the bank of your genuine inability to pay."
  },
  {
    question: "Will my loan settlement application be rejected?",
    answer: "Banks may reject a settlement application if they believe the borrower has the capacity to pay or if the proposed settlement amount is too low. However, with professional legal representation, the chances of acceptance are much higher as lawyers can present your case more effectively and navigate the bank's internal criteria."
  },
  {
    question: "What is the difference between loan settlement and loan waiver?",
    answer: "A loan settlement is a negotiated agreement where you pay a reduced amount to close the debt. A loan waiver, on the other hand, is a complete cancellation of the debt, usually offered by the government during specific schemes (like for farmers). Settlements require a payment from the borrower, whereas waivers do not."
  },
  {
    question: "Does a loan settlement application affect my CIBIL score?",
    answer: "Yes, once the settlement is completed, the account is reported as 'Settled' to credit bureaus, which will lower your CIBIL score. However, this is often a necessary step to stop the mounting debt and legal pressure. You can start rebuilding your credit score after the settlement is finalized and the debt is off your books."
  },
  {
    question: "Can I settle my loan in installments after the application is approved?",
    answer: "While banks prefer a single lump-sum payment, it is possible to negotiate a settlement that is payable in 3 to 6 monthly installments. This must be clearly mentioned in your application and subsequently captured in the bank's official settlement approval letter."
  },
  {
    question: "What happens after I submit the loan settlement application?",
    answer: "After submission, the bank's recovery department or credit committee will review your request. They may ask for additional documents or invite you for a meeting to discuss the terms. If they agree, they will issue an OTS approval letter. You should only make the payment after receiving this official document."
  },
  {
    question: "Do I need a lawyer to file a loan settlement application?",
    answer: "While you can file it yourself, hiring a loan settlement lawyer provides significant advantages. Lawyers understand the legal nuances, can stop harassment from agents, and have the negotiation skills to secure a much better settlement than an individual might achieve alone."
  }
];

// Review data
const reviews = [
  {
    author: "Sanjay Verma",
    rating: 5,
    body: "I was struggling with my credit card debt for two years. AMA Legal Solutions helped me draft a perfect loan settlement application. They negotiated with the bank and reduced my 5 Lakh debt to just 2 Lakhs. Highly professional team!"
  },
  {
    author: "Meera Reddy",
    rating: 5,
    body: "The team at AMA was very empathetic. They handled my personal loan settlement application with great care. The harassment from recovery agents stopped immediately after I hired them. Truly a life saver."
  },
  {
    author: "Arjun Khanna",
    rating: 5,
    body: "Expert legal advice! They knew exactly what the bank was looking for in the settlement application. I got my OTS approval within 3 months. If you are in debt trouble, don't hesitate to contact them."
  },
  {
    author: "Pooja Sharma",
    rating: 4,
    body: "Very transparent process. They explained the impact on my CIBIL score beforehand. My business loan was settled for a very reasonable amount. Thank you AMA Legal Solutions for your support."
  },
  {
    author: "Vikram Singh",
    rating: 5,
    body: "Professional and effective. They handled everything from drafting the application to getting the final No Dues Certificate. I am finally debt-free and it feels amazing. Highly recommended for loan settlement services."
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
      "name": "Loan Settlement Application",
      "item": "https://www.amalegalsolutions.com/loan-settlement-application"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Application Guide: Process, Format & RBI Rules 2026",
  "description": "Master the loan settlement application process in India. Learn the official format, RBI guidelines, and how to negotiate a One-Time Settlement (OTS) with banks for debt relief.",
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
  "datePublished": "2026-01-15",
  "dateModified": "2026-05-08"
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a loan settlement application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A loan settlement application is a formal written request submitted by a borrower to a bank or financial institution asking to settle an outstanding debt for a lump sum payment that is less than the total amount owed. This application usually outlines the borrower's financial hardships and proposes a specific settlement figure to close the account permanently."
      }
    },
    {
      "@type": "Question",
      "name": "How do I write a loan settlement application letter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To write an effective loan settlement application, you should include your loan account details, a clear statement of your financial hardship (like job loss or medical emergency), and a realistic settlement offer. It is best to use a formal tone and attach supporting documents as evidence of your inability to pay the full dues. You can follow the template provided on our page for a structured format."
      }
    },
    {
      "@type": "Question",
      "name": "What are the latest RBI guidelines for loan settlement in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Reserve Bank of India (RBI) guidelines emphasize that loan settlement should be a fair and transparent process. Banks are encouraged to offer One-Time Settlement (OTS) schemes to recover dues from non-performing assets (NPAs). The guidelines also strictly prohibit harassment by recovery agents and mandate that any settlement agreement must be documented in a formal approval letter before any payment is made."
      }
    },
    {
      "@type": "Question",
      "name": "Can I apply for loan settlement for a personal loan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can apply for loan settlement for a personal loan. Since personal loans are unsecured, banks are often more willing to negotiate a settlement if they believe the borrower has no means to pay the full amount. However, you must prove genuine financial distress to get the bank to agree to a significant reduction in the principal or interest."
      }
    },
    {
      "@type": "Question",
      "name": "How much reduction can I expect in a loan settlement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The percentage of reduction varies based on the lender's policy and the specifics of your case. Generally, borrowers can negotiate a settlement for 25% to 50% of the total outstanding amount. In cases of extreme hardship or very old defaults, the reduction could be even higher. Our legal experts help you negotiate the best possible deal."
      }
    },
    {
      "@type": "Question",
      "name": "What documents are required for a loan settlement application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You typically need to provide your PAN and Aadhar cards, loan account statements, proof of income (or lack thereof), and documents supporting your hardship claim, such as medical reports or a termination letter. Providing a comprehensive set of documents helps in convincing the bank of your genuine inability to pay."
      }
    },
    {
      "@type": "Question",
      "name": "Will my loan settlement application be rejected?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Banks may reject a settlement application if they believe the borrower has the capacity to pay or if the proposed settlement amount is too low. However, with professional legal representation, the chances of acceptance are much higher as lawyers can present your case more effectively and navigate the bank's internal criteria."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between loan settlement and loan waiver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A loan settlement is a negotiated agreement where you pay a reduced amount to close the debt. A loan waiver, on the other hand, is a complete cancellation of the debt, usually offered by the government during specific schemes (like for farmers). Settlements require a payment from the borrower, whereas waivers do not."
      }
    },
    {
      "@type": "Question",
      "name": "Does a loan settlement application affect my CIBIL score?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, once the settlement is completed, the account is reported as 'Settled' to credit bureaus, which will lower your CIBIL score. However, this is often a necessary step to stop the mounting debt and legal pressure. You can start rebuilding your credit score after the settlement is finalized and the debt is off your books."
      }
    },
    {
      "@type": "Question",
      "name": "Can I settle my loan in installments after the application is approved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While banks prefer a single lump-sum payment, it is possible to negotiate a settlement that is payable in 3 to 6 monthly installments. This must be clearly mentioned in your application and subsequently captured in the bank's official settlement approval letter."
      }
    },
    {
      "@type": "Question",
      "name": "What happens after I submit the loan settlement application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After submission, the bank's recovery department or credit committee will review your request. They may ask for additional documents or invite you for a meeting to discuss the terms. If they agree, they will issue an OTS approval letter. You should only make the payment after receiving this official document."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a lawyer to file a loan settlement application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While you can file it yourself, hiring a loan settlement lawyer provides significant advantages. Lawyers understand the legal nuances, can stop harassment from agents, and have the negotiation skills to secure a much better settlement than an individual might achieve alone."
      }
    }
  ]
};

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Application Service",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1500"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sanjay Verma" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "I was struggling with my credit card debt for two years. AMA Legal Solutions helped me draft a perfect loan settlement application. They negotiated with the bank and reduced my 5 Lakh debt to just 2 Lakhs. Highly professional team!"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Meera Reddy" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "The team at AMA was very empathetic. They handled my personal loan settlement application with great care. The harassment from recovery agents stopped immediately after I hired them. Truly a life saver."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Arjun Khanna" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Expert legal advice! They knew exactly what the bank was looking for in the settlement application. I got my OTS approval within 3 months. If you are in debt trouble, don't hesitate to contact them."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Pooja Sharma" },
      "reviewRating": { "@type": "Rating", "ratingValue": "4" },
      "reviewBody": "Very transparent process. They explained the impact on my CIBIL score beforehand. My business loan was settled for a very reasonable amount. Thank you AMA Legal Solutions for your support."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Vikram Singh" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Professional and effective. They handled everything from drafting the application to getting the final No Dues Certificate. I am finally debt-free and it feels amazing. Highly recommended for loan settlement services."
    }
  ]
};

export const metadata = {
  title: "Loan Settlement Application Guide | Process, Format & Rules",
  description: "Struggling with debt? Learn how to file a successful loan settlement application. Get the official format, RBI guidelines, and expert tips to settle your loan with banks.",
  keywords: [
    "loan settlement application",
    "loan settlement application process",
    "loan settlement application format",
    "loan settlement application letter",
    "loan settlement application rbi guidelines",
    "how to apply for loan settlement",
    "one time settlement application",
    "debt settlement letter format india",
    "personal loan settlement application",
    "credit card settlement request"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/loan-settlement-application',
  },
};

export default function LoanSettlementApplicationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-application", title: "What is an Application?" },
    { id: "rbi-guidelines", title: "RBI Guidelines 2026" },
    { id: "step-by-step-process", title: "Step-by-Step Process" },
    { id: "eligibility", title: "Eligibility Criteria" },
    { id: "format-template", title: "Application Format" },
    { id: "required-documents", title: "Required Documents" },
    { id: "negotiation-tips", title: "Negotiation Tips" },
    { id: "cibil-impact", title: "CIBIL Score Impact" },
    { id: "helpful-resources", title: "Helpful Resources" },
    { id: "faqs", title: "FAQs" },
    { id: "reviews", title: "User Reviews" },
  ];

  const breadcrumbItems = [
    { label: "Loan Settlement Application", href: "/loan-settlement-application" },
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
        <div className="relative bg-[#1a202c] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Master Your <span className="text-[#D2A02A]">Loan Settlement Application</span> for Debt Freedom
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-4xl mx-auto text-gray-300 leading-relaxed font-light">
              Your comprehensive guide to navigating the complex world of debt settlement in India. From official application formats to expert negotiation tactics, we empower you to reclaim your financial future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg">
                  Get Professional Help Today
                </button>
              </Link>
              <a href="tel:+918700343611" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full transition-all text-lg">
                Call Expert: +91-8700343611
              </a>
            </div>
          </div>
          {/* Abstract Design Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A]/20 blur-[100px] -z-0"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] -z-0"></div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-12 mt-8 items-start">
            {/* Left Sidebar - TOC */}
            <div className="hidden lg:block sticky top-24 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-4 text-gray-900 border-b pb-2">On This Page</h3>
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-10 bg-white p-4 rounded-xl shadow-md sticky top-20 z-30 border border-[#D2A02A]/20">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-16 rounded-3xl shadow-xl space-y-16 border border-gray-50">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <div className="inline-block bg-[#D2A02A]/10 text-[#D2A02A] px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">The Ultimate Guide</div>
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">Navigating the Road to Debt Relief</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      Facing a mountain of debt can feel like being caught in an endless storm. In the modern Indian economy, where consumer credit is easily accessible but financial circumstances can change in an instant, many find themselves struggling to keep up with high interest rates and unrelenting monthly installments. Whether it is a personal loan taken for a dream wedding, a credit card used for an emergency medical expense, or a business loan that became a burden during a market downturn, the stress of debt is a universal challenge.
                    </p>
                    <p>
                      However, there is a light at the end of the tunnel. The process of filing a <strong>loan settlement application</strong> is a legitimate, legal, and highly effective way to resolve your debt issues. At AMA Legal Solutions, we have witnessed thousands of honest borrowers transform their lives by taking this proactive step. Loan settlement is not about evading your responsibilities; it is about finding a sustainable way to settle your dues when your financial capacity has been severely diminished by circumstances beyond your control.
                    </p>
                    <p>
                      In this comprehensive guide, we will walk you through everything you need to know about the loan settlement application process. We will cover the legal framework established by the Reserve Bank of India, provide you with a tested application format, and share the insider tips that our expert lawyers use to negotiate life-changing settlements for our clients. Our goal is to empower you with knowledge so that you can approach your bank with confidence and secure a future free from the shadow of debt.
                    </p>
                  </div>
                </section>

                {/* What is Loan Settlement Application */}
                <section id="what-is-application" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl">❓</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What is a Loan Settlement Application?</h2>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-3xl border-l-8 border-blue-600 shadow-inner mb-8">
                    <p className="text-xl text-blue-900 leading-relaxed italic font-medium">
                      "A loan settlement application is more than just a letter; it is a strategic legal document that formally declares your financial situation to your lender and initiates a negotiation for a One-Time Settlement (OTS)."
                    </p>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      When you submit a <strong>loan settlement application</strong>, you are essentially telling the bank that you are a responsible borrower who wants to honor their commitment but is currently unable to do so in full due to genuine hardship. This application serves as the foundation for the entire settlement process. It provides the bank with a clear picture of why the default occurred and why a settlement is in the best interest of both the borrower and the lender.
                    </p>
                    <p>
                      Banks and NBFCs are business entities that prefer recovering a portion of their money today over spending years and thousands of rupees in legal battles with uncertain outcomes. By presenting a well-drafted application, you provide them with the necessary justification to approve a reduction in your debt. It is the first and most critical step in a journey that leads to a "No Dues Certificate" and the permanent closure of your loan account.
                    </p>
                    <p>
                      It is important to distinguish between a simple request for more time and a formal application for settlement. A settlement application specifically asks for a reduction in the total amount payable, including principal, interest, and penalties, in exchange for a lump sum payment. This distinguishes it from loan restructuring or EMI holidays, which only provide temporary relief without reducing the core debt burden.
                    </p>
                  </div>
                </section>

                {/* RBI Guidelines 2026 */}
                <section id="rbi-guidelines" className="scroll-mt-32 bg-gray-900 text-white p-8 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="inline-block bg-white/10 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 uppercase tracking-widest">Regulatory Framework</div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">RBI Guidelines for Loan Settlement 2026</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏛️</div>
                        <h4 className="text-xl font-bold mb-4 text-[#D2A02A]">Fair Practices Code</h4>
                        <p className="text-gray-300 leading-relaxed">The RBI mandates that all banks and NBFCs must adhere to a Fair Practices Code. This means they must handle your settlement application with transparency and must not use unethical tactics to recover money.</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚫</div>
                        <h4 className="text-xl font-bold mb-4 text-[#D2A02A]">No Agent Harassment</h4>
                        <p className="text-gray-300 leading-relaxed">Under the latest guidelines, recovery agents are strictly forbidden from harassing, threatening, or intimidating borrowers. Any violation of this can be reported to the Banking Ombudsman.</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📄</div>
                        <h4 className="text-xl font-bold mb-4 text-[#D2A02A]">Written Approvals Only</h4>
                        <p className="text-gray-300 leading-relaxed">RBI guidelines state that no settlement is valid unless it is provided in writing on the bank's official letterhead. Verbal promises from agents have no legal standing.</p>
                      </div>
                      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚖️</div>
                        <h4 className="text-xl font-bold mb-4 text-[#D2A02A]">NPA Classification</h4>
                        <p className="text-gray-300 leading-relaxed">While you can initiate talks earlier, banks typically entertain formal settlement applications only after the loan has been classified as a Non-Performing Asset (90 days of default).</p>
                      </div>
                    </div>
                    <div className="mt-12 p-6 bg-[#D2A02A]/20 rounded-2xl border border-[#D2A02A]/30">
                      <p className="text-center font-medium">
                        Remember: These guidelines are designed to protect you. Knowing your rights is the first step in winning your settlement case.
                      </p>
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#D2A02A] rounded-full opacity-10 blur-3xl"></div>
                </section>

                {/* Step-by-Step Process */}
                <section id="step-by-step-process" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">The 6-Step Loan Settlement Process</h2>
                  <div className="relative">
                    {/* Vertical line for desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2"></div>
                    
                    <div className="space-y-12">
                      <div className="relative flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 md:text-right">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Self-Assessment</h3>
                          <p className="text-gray-600">Analyze your total debt and decide on a realistic lump-sum amount you can pay. This is your 'target' settlement figure.</p>
                        </div>
                        <div className="z-10 w-12 h-12 bg-white border-4 border-[#D2A02A] rounded-full flex items-center justify-center font-bold text-[#D2A02A]">1</div>
                        <div className="flex-1 hidden md:block"></div>
                      </div>

                      <div className="relative flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 hidden md:block"></div>
                        <div className="z-10 w-12 h-12 bg-white border-4 border-[#D2A02A] rounded-full flex items-center justify-center font-bold text-[#D2A02A]">2</div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Documentation</h3>
                          <p className="text-gray-600">Gather all evidence of your financial hardship, including medical bills, bank statements, and termination letters. Strength in documentation leads to strength in negotiation.</p>
                        </div>
                      </div>

                      <div className="relative flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 md:text-right">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">3. Drafting Application</h3>
                          <p className="text-gray-600">Write a formal settlement application using our expert template. Ensure every word is professional and focused on your inability to pay full dues.</p>
                        </div>
                        <div className="z-10 w-12 h-12 bg-white border-4 border-[#D2A02A] rounded-full flex items-center justify-center font-bold text-[#D2A02A]">3</div>
                        <div className="flex-1 hidden md:block"></div>
                      </div>

                      <div className="relative flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 hidden md:block"></div>
                        <div className="z-10 w-12 h-12 bg-white border-4 border-[#D2A02A] rounded-full flex items-center justify-center font-bold text-[#D2A02A]">4</div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">4. Submission & Negotiation</h3>
                          <p className="text-gray-600">Submit the application to the branch manager or recovery department. Be prepared for multiple rounds of negotiation as the bank may counter-offer.</p>
                        </div>
                      </div>

                      <div className="relative flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 md:text-right">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">5. OTS Approval Letter</h3>
                          <p className="text-gray-600">Once an amount is agreed upon, insist on a formal OTS Approval Letter. Check it carefully for the correct loan amount and payment deadlines.</p>
                        </div>
                        <div className="z-10 w-12 h-12 bg-white border-4 border-[#D2A02A] rounded-full flex items-center justify-center font-bold text-[#D2A02A]">5</div>
                        <div className="flex-1 hidden md:block"></div>
                      </div>

                      <div className="relative flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 hidden md:block"></div>
                        <div className="z-10 w-12 h-12 bg-white border-4 border-[#D2A02A] rounded-full flex items-center justify-center font-bold text-[#D2A02A]">6</div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">6. Payment & NOC</h3>
                          <p className="text-gray-600">Make the payment as per the letter. After the payment is cleared, follow up to obtain your No Dues Certificate (NDC). This is your final exit from the debt.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Eligibility Criteria */}
                <section id="eligibility" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-4">Eligibility for One-Time Settlement (OTS)</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-8 rounded-3xl bg-green-50 border border-green-100 flex flex-col h-full">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl mb-6 shadow-lg shadow-green-200">✅</div>
                      <h4 className="text-xl font-bold text-green-900 mb-4">Who is Eligible?</h4>
                      <ul className="space-y-4 text-green-800 flex-grow">
                        <li className="flex items-start gap-2"><span className="font-bold">•</span> Borrowers facing genuine financial hardship (job loss, medical crisis).</li>
                        <li className="flex items-start gap-2"><span className="font-bold">•</span> Loan accounts that have been in default for over 90 days (NPA).</li>
                        <li className="flex items-start gap-2"><span className="font-bold">•</span> Honest borrowers who do not have assets to liquidate and pay the full amount.</li>
                        <li className="flex items-start gap-2"><span className="font-bold">•</span> Those with old defaults where the bank has failed to recover money through standard means.</li>
                      </ul>
                    </div>
                    <div className="p-8 rounded-3xl bg-red-50 border border-red-100 flex flex-col h-full">
                      <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white text-xl mb-6 shadow-lg shadow-red-200">❌</div>
                      <h4 className="text-xl font-bold text-red-900 mb-4">Who is Not Eligible?</h4>
                      <ul className="space-y-4 text-red-800 flex-grow">
                        <li className="flex items-start gap-2"><span className="font-bold">•</span> Willful defaulters (those who have money but refuse to pay).</li>
                        <li className="flex items-start gap-2"><span className="font-bold">•</span> Borrowers who have committed fraud or diverted funds to other assets.</li>
                        <li className="flex items-start gap-2"><span className="font-bold">•</span> Active loans where the borrower is still making regular EMI payments.</li>
                        <li className="flex items-start gap-2"><span className="font-bold">•</span> Secured loans where the collateral value is much higher than the debt.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Application Format */}
                <section id="format-template" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Loan Settlement Application Format</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    A professional format increases the credibility of your request. Use the following template as a baseline for your application. Remember to tailor the "Reason for Hardship" to your specific situation.
                  </p>
                  <div className="bg-gray-100 p-8 md:p-12 rounded-[40px] border-2 border-dashed border-gray-300 relative shadow-inner">
                    <div className="absolute top-6 right-8 text-gray-400 font-mono text-xs uppercase tracking-widest">Formal Template</div>
                    <div className="prose prose-sm md:prose-lg max-w-none font-serif text-gray-800">
                      <p className="font-bold">To,</p>
                      <p className="font-bold">The Branch Manager / Recovery Head,</p>
                      <p>[Name of Bank/NBFC],</p>
                      <p>[Branch Address],</p>
                      <p>[City, State, Pin Code]</p>
                      <br />
                      <p><span className="font-bold">Date:</span> [Insert Current Date]</p>
                      <br />
                      <p><span className="font-bold">Subject:</span> Request for One-Time Settlement (OTS) of [Type of Loan] - A/c No: [Your Account Number]</p>
                      <br />
                      <p>Dear Sir/Madam,</p>
                      <p>
                        I am writing to you with a heavy heart regarding my outstanding loan account mentioned above. Due to unforeseen and extreme financial hardships, I find myself in a position where I am unable to continue with the regular repayment schedule.
                      </p>
                      <p>
                        Specifically, [Detailed description of hardship: e.g., 'since my company downsized in June 2024, I have been unemployed' or 'the high costs of my spouse's prolonged hospitalization have exhausted my savings']. Despite my best intentions, these circumstances have made it impossible for me to meet the full debt obligation.
                      </p>
                      <p>
                        I value my relationship with [Bank Name] and sincerely wish to close this liability. Therefore, I request your kind consideration for a One-Time Settlement (OTS). I am prepared to pay a lump sum amount of Rs. [Your Proposed Amount] as a full and final settlement to close the account.
                      </p>
                      <p>
                        I understand the implications this will have on my credit history, but given my current situation, this is the only viable path for me to clear my dues. I request you to kindly waive the accumulated interest and penal charges and provide your approval for this settlement.
                      </p>
                      <p>
                        I look forward to receiving a formal OTS Approval Letter on the bank's letterhead, following which I will arrange the payment within [Mention Number of Days] days.
                      </p>
                      <br />
                      <p>Thanking you,</p>
                      <p>Sincerely,</p>
                      <br />
                      <p>[Your Full Name]</p>
                      <p>[Your Contact Number]</p>
                      <p>[Your Address]</p>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-center">
                    <Link href="/contact">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg flex items-center gap-2">
                        <span>📥</span> Download Full Template Guide
                      </button>
                    </Link>
                  </div>
                </section>

                {/* Required Documents */}
                <section id="required-documents" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Supporting Documents for Your Application</h2>
                  <p className="text-lg text-gray-700 mb-10">
                    The bank will not accept your word alone. You must back your application with solid proof. Here are the documents you should attach:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold mb-4">01</div>
                      <h4 className="font-bold mb-2">Identification</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Self-attested copies of your PAN Card and Aadhar Card for verification.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold mb-4">02</div>
                      <h4 className="font-bold mb-2">Financial Records</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Last 6-12 months of bank statements showing your current income or lack thereof.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold mb-4">03</div>
                      <h4 className="font-bold mb-2">Hardship Proof</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Termination letters, medical reports, or business loss statements.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold mb-4">04</div>
                      <h4 className="font-bold mb-2">Loan Documents</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Original loan agreement and latest outstanding statement from the bank.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold mb-4">05</div>
                      <h4 className="font-bold mb-2">Notice Copies</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Any legal notices or arbitration letters you have received from the lender.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold mb-4">06</div>
                      <h4 className="font-bold mb-2">Other Liabilities</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">Details of other debts to show your total financial burden.</p>
                    </div>
                  </div>
                </section>

                {/* Negotiation Tips */}
                <section id="negotiation-tips" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Negotiate Like a Pro</h2>
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p>Negotiating with a bank's recovery department can be intimidating. They are trained professionals whose job is to maximize recovery. To succeed, you need a strategy. Here are the top tips from our senior negotiators:</p>
                  </div>
                  <div className="mt-10 space-y-8">
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                      <h4 className="text-xl font-bold text-[#D2A02A] mb-3">1. Be Firm But Polite</h4>
                      <p className="leading-relaxed">Never lose your temper. Emotional outbursts give the bank an excuse to end the conversation. Stay calm, stick to the facts of your financial hardship, and reiterating your desire to settle.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                      <h4 className="text-xl font-bold text-[#D2A02A] mb-3">2. Start Low, Aim Middle</h4>
                      <p className="leading-relaxed">If you want to settle for 50%, start your offer at 25%. The bank will almost always counter-offer, so you need room to move upward without exceeding your budget.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                      <h4 className="text-xl font-bold text-[#D2A02A] mb-3">3. Highlight the Lack of Assets</h4>
                      <p className="leading-relaxed">The bank is more likely to settle if they believe you have no assets to seize. If they realize that legal action won't yield results, they will settle for what you can afford today.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                      <h4 className="text-xl font-bold text-[#D2A02A] mb-3">4. Mention Legal Representation</h4>
                      <p className="leading-relaxed">Mentioning that you are consulting with a law firm like AMA Legal Solutions often makes the bank more reasonable. They know that legal experts will ensure all rights are upheld.</p>
                    </div>
                  </div>
                </section>

                {/* CIBIL Score Impact */}
                <section id="cibil-impact" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Understanding the Impact on Your Credit Score</h2>
                  <div className="bg-white border-2 border-gray-100 rounded-[40px] p-8 md:p-16 flex flex-col items-center">
                    <div className="w-full max-w-2xl bg-gray-100 h-8 rounded-full overflow-hidden mb-8 flex shadow-inner">
                      <div className="w-[30%] bg-red-500 h-full"></div>
                      <div className="w-[30%] bg-orange-400 h-full"></div>
                      <div className="w-[20%] bg-yellow-400 h-full"></div>
                      <div className="w-[20%] bg-green-500 h-full"></div>
                    </div>
                    <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                      <p>
                        One of the most common questions we receive is: <span className="font-bold">"Will settlement ruin my CIBIL score forever?"</span> The short answer is no, but it will have a significant impact in the short term. When a loan is settled, it is reported as 'Settled' rather than 'Closed' or 'Paid'.
                      </p>
                      <div className="grid md:grid-cols-2 gap-8 my-10">
                        <div className="bg-red-50 p-6 rounded-2xl">
                          <h5 className="font-bold text-red-900 mb-2 underline decoration-2">The Downside</h5>
                          <ul className="text-sm space-y-2 text-red-800">
                            <li>• Your score may drop by 50 to 100 points immediately.</li>
                            <li>• The 'Settled' tag remains on your report for 7 years.</li>
                            <li>• You may find it difficult to get new unsecured loans for 2-3 years.</li>
                          </ul>
                        </div>
                        <div className="bg-green-50 p-6 rounded-2xl">
                          <h5 className="font-bold text-green-900 mb-2 underline decoration-2">The Path to Recovery</h5>
                          <ul className="text-sm space-y-2 text-green-800">
                            <li>• The debt burden is gone, allowing you to save money.</li>
                            <li>• No more late payment reports that further damage your score.</li>
                            <li>• You can rebuild credit using secured cards (FD-backed).</li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        We always advise our clients that a temporary drop in CIBIL score is a small price to pay for mental peace and financial freedom. Once you are debt-free, we provide you with a customized roadmap to rebuild your credit and reach a score of 750+ within 24 months.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Helpful Resources */}
                <section id="helpful-resources" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Helpful Resources</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { href: "/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider", label: "Steps to Apply for Loan Settlement" },
                      { href: "/loan-settlement-letter-format-noc-format", label: "Loan Settlement Letter & NOC Format" },
                      { href: "/does-loan-settlement-affect-cibil-score", label: "CIBIL Score Impact Guide" },
                      { href: "/is-loan-settlement-illegal-in-india-truth", label: "The Truth About Loan Settlement Legality" },
                      { href: "/rbi-new-recovery-guidelines-july-2026", label: "Latest RBI Recovery Guidelines 2026" },
                      { href: "/what-is-the-typical-process-for-settling-a-personal-loan-in-india", label: "Personal Loan Settlement Process" }
                    ].map((resource, i) => (
                      <Link key={i} href={resource.href} className="group bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:bg-[#fff9e6] hover:border-[#D2A02A]/30 transition-all flex justify-between items-center">
                        <span className="font-bold text-gray-700 group-hover:text-gray-900 transition-colors">{resource.label}</span>
                        <span className="text-[#D2A02A] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
                  <div className="grid md:grid-cols-1 gap-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all hover:border-[#D2A02A]/20">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A]/10 text-[#D2A02A] rounded-full flex items-center justify-center font-bold">Q</div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Reviews */}
                <section id="reviews" className="scroll-mt-32">
                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">What Our Clients Say</h2>
                   <div className="grid md:grid-cols-2 gap-8">
                     {reviews.map((review, index) => (
                       <div key={index} className="bg-gray-50 p-8 rounded-[32px] border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
                         <div className="flex items-center gap-1 mb-4">
                           {[...Array(review.rating)].map((_, i) => (
                             <span key={i} className="text-yellow-400 text-lg">★</span>
                           ))}
                         </div>
                         <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.body}"</p>
                         <div className="flex items-center gap-3">
                           <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">{review.author[0]}</div>
                           <div>
                             <p className="font-bold text-gray-900">{review.author}</p>
                             <p className="text-xs text-gray-500 uppercase tracking-widest">Verified Client</p>
                           </div>
                         </div>
                       </div>
                     ))}
                   </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] via-[#2d3748] to-[#1a202c] rounded-[40px] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">Your Journey to a <span className="text-[#D2A02A]">Debt-Free Life</span> Starts Here</h2>
                    <p className="text-lg md:text-xl opacity-90 mb-12 leading-relaxed">
                      Don't let debt define your future. Our expert legal team is ready to stand by your side, handle the banks, and secure the settlement you deserve. Your peace of mind is just one consultation away.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                      <Link href="/contact" className="w-full sm:w-auto">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-5 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-xl w-full">
                          Start Your Application
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="w-full sm:w-auto text-xl font-bold border-b-2 border-white hover:text-[#D2A02A] hover:border-[#D2A02A] transition-all pb-1">
                        Or Call: +91-8700343611
                      </a>
                    </div>
                  </div>
                  {/* Subtle Background Elements */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"></div>
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D2A02A]/10 rounded-full blur-[100px]"></div>
                </section>

              </div>
            </div>

            {/* Sidebar Right */}
            <div className="hidden lg:block space-y-10 sticky top-24">
                {/* Contact Card */}
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/5 rounded-bl-full -z-0"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">Instant Debt Help</h3>
                  <p className="text-gray-600 mb-8 text-sm leading-relaxed relative z-10">
                    Stop the harassment today. Our senior lawyers can help you draft and file your settlement application within 24 hours.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#1a202c] text-white text-center py-4 rounded-2xl font-bold hover:bg-[#D2A02A] transition-all transform group-hover:translate-y-[-2px] shadow-lg mb-4"
                  >
                    Call Now: +91 8700343611
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full bg-white text-[#1a202c] text-center py-4 rounded-2xl font-bold border-2 border-gray-200 hover:border-[#D2A02A] transition-all"
                  >
                    Free Case Review
                  </Link>
                </div>

                {/* App Download Card */}
                <div className="bg-[#1a202c] p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4">AMA Legal App</h3>
                    <p className="text-gray-400 text-xs mb-8 leading-relaxed">Track your settlement status, upload documents securely, and get instant legal advice on the go.</p>
                    <div className="space-y-4">
                      <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="block transform hover:scale-105 transition-transform">
                        <Image src="/newAssets/appstore.svg" alt="Play Store" width={160} height={50} />
                      </Link>
                      <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="block transform hover:scale-105 transition-transform">
                        <Image src="/newAssets/playstore.svg" alt="App Store" width={160} height={50} />
                      </Link>
                    </div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-2xl border border-gray-100 text-center shadow-sm">
                    <p className="text-2xl mb-1">⚖️</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Certified Experts</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-100 text-center shadow-sm">
                    <p className="text-2xl mb-1">🛡️</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Safe & Secure</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
