import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What exactly is an unsecured loan and how does it differ from a secured one?",
    answer: "An unsecured loan is a type of credit where you do not need to provide any collateral, such as property or gold, to the lender. Instead, the bank or financial institution grants the loan based on your creditworthiness, income stability, and repayment history. In contrast, a secured loan requires an asset to be pledged as security, which the lender can seize if you default on payments. Unsecured loans are generally faster to process but may carry higher interest rates due to the increased risk to the lender."
  },
  {
    question: "What are the primary types of unsecured loans available in India?",
    answer: "In the Indian financial market, the most common unsecured loans include personal loans, credit card loans, student or education loans, and unsecured business loans for MSMEs. Additionally, there are niche categories such as medical emergency loans, wedding loans, and travel loans. Each of these products is designed to meet specific needs without requiring the borrower to lock up their assets as collateral."
  },
  {
    question: "Is it possible to get an unsecured loan with a low CIBIL score?",
    answer: "While it is challenging, it is not impossible. Some Non-Banking Financial Companies (NBFCs) and fintech lenders specialize in providing credit to individuals with moderate credit scores. However, you should expect higher interest rates and perhaps a lower loan amount. Improving your score before applying is always recommended to secure better terms. Some lenders also consider your current income and employment stability more heavily than just the credit score."
  },
  {
    question: "How long does it take for an unsecured loan to be approved and disbursed?",
    answer: "One of the biggest advantages of unsecured loans is the speed. Thanks to digital transformation, many banks and fintech apps offer instant approval for pre-approved customers. For others, the process typically takes between 24 to 72 hours, provided all documentation is in order. Since there is no property valuation or legal verification of collateral involved, the turnaround time is significantly shorter than that of a home or car loan."
  },
  {
    question: "What are the typical interest rates for unsecured personal loans in India?",
    answer: "Interest rates for unsecured personal loans vary widely depending on the lender and the borrower's profile. Generally, they range from 10.5% to 24% per annum. Top-tier salaried employees with excellent credit scores might get rates at the lower end, while self-employed individuals or those with average credit might face rates at the higher end of the spectrum."
  },
  {
    question: "Can I use an unsecured personal loan for debt consolidation?",
    answer: "Yes, debt consolidation is one of the most popular reasons people take out unsecured personal loans. By taking one large loan at a lower interest rate to pay off multiple high-interest credit card debts or smaller loans, you can simplify your finances and reduce your monthly EMI burden. This is an effective strategy for regaining control over your financial life."
  },
  {
    question: "What happens if I fail to repay an unsecured loan?",
    answer: "Defaulting on an unsecured loan has serious consequences. Your CIBIL score will drop drastically, making it difficult to get any credit in the future. Lenders will initiate recovery proceedings, which might include persistent calls and legal notices. However, since there is no collateral, they cannot immediately seize your house or car. Instead, they may file a civil suit for recovery or take the matter to a debt recovery tribunal."
  },
  {
    question: "Are there any hidden charges associated with unsecured loans?",
    answer: "Borrowers should always look out for processing fees, which usually range from 1% to 3% of the loan amount. Other potential costs include documentation charges, insurance premiums (often optional but pushed by banks), and prepayment or foreclosure penalties if you decide to close the loan early. Always read the 'Most Important Terms and Conditions' (MITC) document carefully before signing."
  },
  {
    question: "Can I settle an unsecured loan if I am in financial distress?",
    answer: "Yes, unsecured loans are often candidates for settlement if the borrower faces genuine financial hardship such as job loss or a medical crisis. Since the lender has no collateral to fall back on, they may agree to a One-Time Settlement (OTS) where you pay a reduced lump sum to close the account. However, this will be reported as 'Settled' on your credit report and will impact your score."
  },
  {
    question: "How can AMA Legal Solutions help with unsecured loan issues?",
    answer: "AMA Legal Solutions provides expert legal guidance for borrowers struggling with unsecured debt. We help in defending against recovery agent harassment, responding to legal notices, and negotiating fair settlements with banks and NBFCs. Our goal is to protect your legal rights and help you find a path back to financial stability through ethical and legal means."
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
      "name": "Unsecured Loan Types",
      "item": "https://www.amalegalsolutions.com/unsecured-loan-types"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Comprehensive Guide to Unsecured Loan Types in India: Everything You Need to Know",
  "description": "Explore the various types of unsecured loans available in India, including personal loans, student loans, and business credit. Learn about eligibility, rates, and legal protections.",
  "image": "https://www.amalegalsolutions.com/services/unsecured-loans.png",
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
  "datePublished": "2024-05-08",
  "dateModified": "2024-05-08"
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
  "name": "Unsecured Loan Advisory Services",
  "image": "https://www.amalegalsolutions.com/services/unsecured-loans.png",
  "description": "Expert legal guidance for all types of unsecured loans.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1850"
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
        "name": "Arjun Khanna"
      },
      "reviewBody": "The team at AMA helped me understand the legal nuances of my unsecured personal loan when I was facing a payment crisis. Their advice was practical and very human."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sita Ramakrishnan"
      },
      "reviewBody": "I was confused about the different types of unsecured business loans. AMA provided clarity and helped me avoid a high-interest trap. Truly grateful."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Mohammad Rizwan"
      },
      "reviewBody": "Professional and transparent. They handled my credit card debt issues with great care. Highly recommend their legal services."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ananya Gupta"
      },
      "reviewBody": "Dealing with student loan defaults is scary, but AMA Legal Solutions made me feel empowered. They know the RBI rules inside out."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vikram Rathore"
      },
      "reviewBody": "Excellent service for anyone struggling with multiple unsecured loans. Their consolidation advice saved me from financial ruin."
    }
  ]
};

export const metadata = {
  title: "Unsecured Loan Types in India | Complete Guide 2024",
  description: "Learn about different types of unsecured loans in India: Personal, Student, Business, and more. Expert legal advice on eligibility, interest rates, and debt relief.",
  keywords: [
    "unsecured loan types",
    "personal loan types",
    "unsecured business loans",
    "student loans india",
    "credit card loans",
    "debt consolidation loans",
    "unsecured debt relief",
    "types of personal loans in india",
    "non collateral loans",
    "fast approval loans"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/unsecured-loan-types',
  },
  openGraph: {
    title: "Unsecured Loan Types in India | Complete Guide 2024",
    description: "Discover all varieties of unsecured credit available in the Indian market. From personal use to business growth, find the right non-collateral loan for your needs.",
    url: "https://www.amalegalsolutions.com/unsecured-loan-types",
    type: "website",
    images: [
      {
        url: "/services/unsecured-loans.png",
        width: 1200,
        height: 630,
        alt: "Unsecured Loan Types India",
      },
    ],
  },
};

export default function UnsecuredLoanTypesPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-are-unsecured-loans", title: "What are Unsecured Loans?" },
    { id: "personal-loans", title: "Personal Loans" },
    { id: "credit-cards", title: "Credit Cards" },
    { id: "education-loans", title: "Education Loans" },
    { id: "business-loans", title: "Unsecured Business Loans" },
    { id: "niche-loans", title: "Niche Loan Types" },
    { id: "eligibility", title: "Eligibility Criteria" },
    { id: "documentation", title: "Documentation" },
    { id: "pros-and-cons", title: "Pros and Cons" },
    { id: "interest-rates", title: "Interest Rates" },
    { id: "credit-score", title: "Credit Score Impact" },
    { id: "legal-protections", title: "Legal Protections" },
    { id: "faqs", title: "FAQs" },
    { id: "testimonials", title: "Testimonials" },
    { id: "resources", title: "Helpful Resources" },
  ];

  const breadcrumbItems = [
    { label: "Unsecured Loan Types", href: "/unsecured-loan-types" },
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
              Mastering <span className="text-[#D2A02A]">Unsecured Loan Types</span> in India
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Your ultimate guide to non-collateral credit. Understand your options, know your rights, and make informed financial decisions today.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get Expert Financial Advice
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
              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Evolving Landscape of Unsecured Credit in India</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The financial ecosystem in India has undergone a massive transformation over the last decade. Gone are the days when getting a loan meant visiting multiple bank branches with a mountain of paperwork and pledging your ancestral property as security. Today, the rise of digital banking and innovative financial products has made credit more accessible than ever before. Central to this revolution are <strong>unsecured loans</strong>, which allow individuals and businesses to borrow money without providing any collateral.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Understanding the different <strong>unsecured loan types</strong> is crucial for anyone looking to bridge a temporary cash flow gap, fund an education, or grow a business. While the convenience of these loans is undeniable, they come with their own set of complexities, including varying interest rates, strict eligibility criteria, and significant legal implications in case of default. This guide is designed to provide you with a comprehensive, human-centric overview of the unsecured credit market in India, helping you navigate the choices available with confidence and clarity.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we see thousands of cases where borrowers struggle because they did not fully understand the terms of their unsecured debt. Our mission is to educate and empower you, ensuring that you use credit as a tool for growth rather than falling into a debt trap. Whether you are a salaried professional, a student, or a budding entrepreneur, this guide will serve as your roadmap to the world of non-collateral loans.
                  </p>
                </section>

                {/* What are Unsecured Loans */}
                <section id="what-are-unsecured-loans" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What Exactly are Unsecured Loans?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "An unsecured loan is a debt product where the lender provides funds based solely on the borrower's creditworthiness and income, without requiring any physical asset as collateral."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In the simplest terms, an unsecured loan is built on trust and data. Lenders, including traditional banks, Non-Banking Financial Companies (NBFCs), and new-age fintech firms, use sophisticated algorithms to analyze your credit score, bank statements, and employment history. If they determine that you have the capacity and the intent to repay, they grant the loan. This is fundamentally different from secured loans like home loans or gold loans, where the lender has a safety net in the form of a physical asset.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Because the lender carries a higher risk in an unsecured arrangement, these loans often have higher interest rates compared to secured ones. However, the trade-off is speed and flexibility. There is no need for property valuation, legal title checks of assets, or the hassle of pledging gold. For many, this makes <strong>unsecured personal loans</strong> the go-to solution for urgent requirements.
                  </p>
                </section>

                {/* Personal Loans */}
                <section id="personal-loans" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Personal Loans: The Most Versatile Unsecured Credit</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Personal loans are perhaps the most popular among all <strong>unsecured loan types</strong> in India. Their versatility is their greatest strength; you can use the funds for almost any legitimate purpose, from home renovation to debt consolidation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Debt Consolidation</h4>
                      <p className="text-gray-600 text-sm">Combining multiple high-interest debts into a single monthly payment at a lower overall interest rate.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Home Improvement</h4>
                      <p className="text-gray-600 text-sm">Funding repairs, interior design, or upgrades to your residence without a mortgage.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Wedding Expenses</h4>
                      <p className="text-gray-600 text-sm">Managing the significant costs associated with Indian weddings, from venues to jewelry.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Travel and Leisure</h4>
                      <p className="text-gray-600 text-sm">Financing dream vacations or international trips with a planned repayment schedule.</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    The ease of application through mobile apps has made personal loans incredibly fast. However, it is essential to compare the Annual Percentage Rate (APR), which includes not just the interest but also the processing fees and other charges. At AMA Legal Solutions, we always advise borrowers to only take what they need, as the high interest can compound quickly if not managed properly.
                  </p>
                </section>

                {/* Credit Cards */}
                <section id="credit-cards" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Credit Cards: Revolving Unsecured Credit</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    While often viewed simply as a payment tool, a credit card is essentially a line of unsecured credit. It offers a unique form of borrowing where you have a pre-approved limit that you can use and reuse as you pay it back. This is known as revolving credit.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    The danger with credit cards lies in the 'minimum due' trap. If you only pay the minimum amount each month, the remaining balance attracts interest rates as high as 40% to 48% per annum. This makes credit card debt one of the most difficult to clear once it spirals out of control. We often see clients who have used their credit cards to bridge financial gaps during tough times, only to find themselves in a deep debt cycle. Understanding the difference between 'billing cycle' and 'grace period' is key to using this tool effectively without falling into a legal or financial mess.
                  </p>
                </section>

                {/* Education Loans */}
                <section id="education-loans" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Education Loans: Investing in the Future</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Education loans are a specialized type of unsecured credit designed to fund higher studies in India or abroad. Unlike other loans, these often come with a moratorium period, meaning you don't have to start repaying until after you complete your course and find a job.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    While larger amounts for international studies might require collateral, many banks offer unsecured education loans up to 7.5 Lakhs or even higher for premier institutes like IITs and IIMs. These loans are vital for social mobility in India. However, the pressure to secure a high-paying job immediately after graduation can be intense. If you find yourself unable to repay your student loan, it is important to know that banks are often open to restructuring or settlement, especially if you can demonstrate genuine hardship.
                  </p>
                </section>

                {/* Business Loans */}
                <section id="business-loans" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Unsecured Business Loans for Entrepreneurs</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Small and Medium Enterprises (SMEs) are the backbone of the Indian economy, and <strong>unsecured business loans</strong> are their fuel. These loans are typically used for working capital requirements, buying inventory, or expanding operations. Lenders look at the business's vintage, turnover, and GST filings to determine the loan amount.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    The lack of collateral is a boon for first-generation entrepreneurs who might not have property to pledge. However, the personal guarantee of the directors or partners is often required, making the individuals personally liable if the business fails to repay. This is a critical legal point that every business owner must understand before signing the loan agreement.
                  </p>
                </section>

                {/* Niche Loans */}
                <section id="niche-loans" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Niche and Purpose-Specific Unsecured Loans</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    With the rise of fintech, we now have hyper-specific <strong>unsecured loan types</strong> tailored for almost every need. These include:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                    <li><strong>Medical Emergency Loans:</strong> Designed for immediate disbursement to cover hospital bills and surgeries.</li>
                    <li><strong>Holiday/Travel Loans:</strong> Specifically marketed for leisure trips with easy EMI options.</li>
                    <li><strong>Wedding Loans:</strong> Higher-limit personal loans to manage the scale of Indian festivities.</li>
                    <li><strong>Consumer Durable Loans:</strong> No-cost EMIs for buying electronics like smartphones, laptops, and refrigerators.</li>
                  </ul>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    While these are convenient, the sheer number of small loans can lead to a cluttered financial life and a higher debt-to-income ratio, which might impact your ability to get a larger loan like a home loan later on.
                  </p>
                </section>

                {/* Eligibility Criteria */}
                <section id="eligibility" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Eligibility Criteria for Unsecured Loans</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Since there is no collateral, lenders are very picky about who they lend to. The common eligibility factors include:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 text-left border-b border-gray-200 text-gray-700">Factor</th>
                          <th className="p-4 text-left border-b border-gray-200 text-gray-700">Requirement</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-bold">Age</td>
                          <td className="p-4">Typically 21 to 60 years.</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-bold">Employment</td>
                          <td className="p-4">Salaried (MNC/Govt/Reputed Pvt Ltd) or Self-employed with 2-3 years vintage.</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-bold">Income</td>
                          <td className="p-4">Minimum monthly income of 15,000 to 25,000 (varies by city).</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 font-bold">Credit Score</td>
                          <td className="p-4">Ideally 750 or above for the best rates.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Documentation */}
                <section id="documentation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Standard Documentation Checklist</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    To process your application, you will generally need to provide digital copies of:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Identity Proof (PAN Card, Aadhar)
                    </div>
                    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Address Proof (Utility bills, Voter ID)
                    </div>
                    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Last 3-6 Months Bank Statements
                    </div>
                    <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                      <span className="text-[#D2A02A] mr-3">✓</span> Salary Slips or ITR Filings
                    </div>
                  </div>
                </section>

                {/* Pros and Cons */}
                <section id="pros-and-cons" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Pros and Cons of Unsecured Loans</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h4 className="font-bold text-green-800 mb-4">Advantages</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>No need to pledge assets like gold or property.</li>
                        <li>Extremely fast approval and disbursement times.</li>
                        <li>Minimal paperwork, often completely digital.</li>
                        <li>Flexible usage for any legitimate purpose.</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-xl">
                      <h4 className="font-bold text-red-800 mb-4">Disadvantages</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Higher interest rates compared to secured loans.</li>
                        <li>Shorter repayment tenures (usually 1-5 years).</li>
                        <li>Heavy impact on credit score in case of default.</li>
                        <li>Lower loan amounts compared to asset-backed credit.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Interest Rates */}
                <section id="interest-rates" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding Interest Rates and APR</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Interest rates for <strong>unsecured loan types</strong> can be confusing. Lenders use two main methods: 'reducing balance' and 'flat rate'. Always ask for the effective reducing balance rate, as it is a more accurate representation of your cost. Additionally, pay attention to the processing fee, which can add a significant upfront cost. In India, most personal loans use the reducing balance method, where interest is calculated on the outstanding principal every month.
                  </p>
                </section>

                {/* Credit Score Impact */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Critical Link Between Unsecured Credit and Your CIBIL Score</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Your credit score is the lifeblood of unsecured borrowing. Every application for an unsecured loan triggers a 'hard inquiry', which can slightly lower your score. More importantly, your repayment behavior on these loans accounts for about 35% of your total credit score calculation.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    If you miss even one EMI, it is reported to credit bureaus like CIBIL, Experian, and Equifax. This can lead to a significant drop in your score, making it harder to get credit in the future. On the flip side, disciplined repayment of an unsecured loan is an excellent way to build or improve your credit history. At AMA Legal Solutions, we guide clients on how to manage their credit mix (a balance of secured and unsecured loans) to maintain a healthy financial profile.
                  </p>
                </section>

                {/* Legal Protections */}
                <section id="legal-protections" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Legal Protections for Borrowers in India</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Many borrowers feel helpless when they default on an unsecured loan, but the law provides significant protections. The Reserve Bank of India (RBI) has strict guidelines for fair recovery practices. Lenders and their recovery agents cannot use abusive language, physical threats, or harass you at odd hours.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Furthermore, since there is no collateral, a bank cannot simply 'take away' your things without a court order. They must follow due legal process, which usually involves sending a formal demand notice followed by a civil suit if the matter isn't resolved. Understanding these rights is essential for anyone facing financial distress. We specialize in protecting these rights and ensuring that you are treated with dignity and fairness by financial institutions.
                  </p>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
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

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">What Our Clients Say</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 italic relative">
                      "I was overwhelmed by multiple unsecured loans. AMA Legal Solutions provided the legal clarity I needed to consolidate my debts and breathe again."
                      <p className="mt-4 font-bold text-gray-900 not-italic">- Rajesh M., Pune</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 italic relative">
                      "The guidance on unsecured business loans was a lifesaver for my startup. They helped me understand the fine print that I had missed."
                      <p className="mt-4 font-bold text-gray-900 not-italic">- Sneha P., Hyderabad</p>
                    </div>
                  </div>
                </section>

                {/* Resources */}
                <section id="resources" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Helpful Resources</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/personal-loan-settlement" className="text-[#D2A02A] hover:underline font-semibold p-4 bg-gray-50 rounded-lg">Guide to Personal Loan Settlement</Link>
                    <Link href="/business-loan-settlement" className="text-[#D2A02A] hover:underline font-semibold p-4 bg-gray-50 rounded-lg">Unsecured Business Loan Relief</Link>
                    <Link href="/services/loan-settlement/sbi-bank" className="text-[#D2A02A] hover:underline font-semibold p-4 bg-gray-50 rounded-lg">SBI Loan Settlement Process</Link>
                    <Link href="/credit-card-settlement" className="text-[#D2A02A] hover:underline font-semibold p-4 bg-gray-50 rounded-lg">How to Settle Credit Card Debt</Link>
                    <Link href="/legal-rights-after-loan-default" className="text-[#D2A02A] hover:underline font-semibold p-4 bg-gray-50 rounded-lg">Your Rights After Loan Default</Link>
                    <Link href="/what-is-ots" className="text-[#D2A02A] hover:underline font-semibold p-4 bg-gray-50 rounded-lg">Complete Guide to One Time Settlement (OTS)</Link>
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Navigate Your Debt with Expert Legal Help</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Whether you are choosing between unsecured loan types or struggling with existing debt, our senior lawyers are here to guide you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Get a Free Consultation
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

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Legal Support?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Connect with our senior advocates for immediate legal assistance regarding your unsecured loans.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Call +91-8700343611
                  </a>
                  <Link 
                    href="/contact"
                    className="block w-full border-2 border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors"
                  >
                    Book Consultation
                  </Link>
                </div>
                
                <div className="bg-[#1a202c] p-6 rounded-xl text-white shadow-lg">
                  <h4 className="font-bold text-lg mb-4 text-[#D2A02A]">Why AMA Legal?</h4>
                  <ul className="space-y-4 text-sm">
                    <li className="flex gap-3">
                      <span className="text-[#D2A02A]">✓</span>
                      <span>Authorized Law Firm</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#D2A02A]">✓</span>
                      <span>Zero Harassment Policy</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#D2A02A]">✓</span>
                      <span>Expert Negotiators</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#D2A02A]">✓</span>
                      <span>100% Confidentiality</span>
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
