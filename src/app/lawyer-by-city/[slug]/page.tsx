import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { locationData, getLocationBySlug } from "../locationData";

// Generate all static params at build time for SSG
export async function generateStaticParams() {
  return locationData.map((loc) => ({
    slug: loc.slug,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return { title: "Not Found" };

  return {
    title: `${location.title} | AMA Legal`,
    description: location.description,
    keywords: [
      `loan settlement ${location.name}`,
      `best lawyer ${location.name}`,
      `debt settlement ${location.name}`,
      `loan settlement lawyer ${location.name}`,
      `credit card settlement ${location.name}`,
      `personal loan settlement ${location.name}`,
      `bank harassment ${location.name}`,
      "loan settlement india",
      "debt relief services",
      "one time settlement scheme",
    ],
    alternates: {
      canonical: `https://www.amalegalsolutions.com/lawyer-by-city/${location.slug}`,
    },
    openGraph: {
      title: location.title,
      description: location.description,
      url: `https://www.amalegalsolutions.com/lawyer-by-city/${location.slug}`,
      type: "website",
      images: [
        {
          url: "/services/3.png",
          width: 1200,
          height: 630,
          alt: `Loan Settlement Services in ${location.name}`,
        },
      ],
    },
  };
}

// FAQ data
const faqs = [
  {
    question: "What is loan settlement and how does it work?",
    answer: "Loan settlement, also known as debt settlement, is a legal financial process where a borrower negotiates with the lender to pay a lump sum amount that is lower than the total outstanding debt to close the loan account. This is typically done through a One Time Settlement (OTS) scheme under RBI guidelines. The bank agrees to waive a portion of the interest and penalties in exchange for a one-time payment."
  },
  {
    question: "Is loan settlement legal in India?",
    answer: "Yes, loan settlement is completely legal in India. It is governed by guidelines issued by the Reserve Bank of India (RBI) and is a standard banking practice for recovering non-performing assets (NPAs). Banks and NBFCs prefer settlement over long-drawn legal battles when they are convinced of the borrower's genuine inability to pay. Having a qualified lawyer ensures the process is handled correctly."
  },
  {
    question: "How much can I save through loan settlement?",
    answer: "The amount you can save depends on various factors including the type of loan, the age of the default, your current financial status, and the bank's policies. Typically, borrowers can save anywhere from 30% to 50% of the total outstanding amount. In some cases involving older defaults or high accumulated interest, savings can be even higher."
  },
  {
    question: "Will loan settlement affect my CIBIL score?",
    answer: "Yes, opting for a loan settlement will have an impact on your CIBIL score. When a loan is settled instead of being paid in full, the account status is reported as 'Settled' rather than 'Closed' to credit bureaus. This can drop your score by 50-100 points. However, this is often a better alternative to a 'Written Off' status or continuing default. Once your finances stabilize, you can rebuild your score over 12-24 months."
  },
  {
    question: "How long does the settlement process take?",
    answer: "The timeline for loan settlement varies from case to case. On average, the loan settlement process takes between 3 to 6 months to reach a final agreement. This duration allows for multiple rounds of negotiation, verification of financial documents, and internal approvals from the bank's credit committee."
  },
  {
    question: "Can I settle credit card debt?",
    answer: "Yes, credit card debt settlement is one of the most common types of debt settled in India. Due to the unsecured nature of credit cards and the exorbitant interest rates (often 30-40% per annum), banks are often willing to settle for a reasonable principal amount rather than write off the entire debt."
  },
  {
    question: "What documents are required for loan settlement?",
    answer: "To initiate a loan settlement, you generally need KYC documents (Aadhar, PAN), loan account statements, salary slips or income proof, bank statements (last 6 months), termination letters (if unemployed), medical records (if applicable), and any correspondence with the bank."
  },
  {
    question: "Can banks harass me during the settlement process?",
    answer: "Harassment by recovery agents is illegal under RBI guidelines and Supreme Court judgments. Once you engage a legal firm like AMA Legal Solutions, we formally notify the bank of your representation. This typically stops direct harassment as all communication must then be routed through your legal counsel."
  },
  {
    question: "What is a One Time Settlement (OTS) scheme?",
    answer: "A One Time Settlement (OTS) is a scheme offered by banks to recover dues from borrowers who have defaulted. Under an OTS, the borrower agrees to pay a specific negotiated amount in a single payment (or a few installments) to close the loan account. This amount is usually less than the total outstanding dues."
  },
  {
    question: "Can I get a loan after settlement?",
    answer: "Getting a new loan immediately after a settlement can be difficult due to the negative impact on your credit score. However, this is not a permanent ban. By practicing good financial habits, such as paying other bills on time and using secured credit cards, you can improve your score. Typically, after 2-3 years of good credit behavior, you become eligible for new loans again."
  },
  {
    question: "What is the role of a lawyer in loan settlement?",
    answer: "A loan settlement lawyer plays a critical role in protecting your rights during the settlement process. They handle all communications with the bank, preventing harassment and ensuring you are not coerced into unfair terms. Lawyers understand the legal nuances of the SARFAESI Act, DRT proceedings, and RBI guidelines."
  },
  {
    question: "Is settlement better than bankruptcy?",
    answer: "For most individuals in India, loan settlement is a far better option than filing for bankruptcy or insolvency. Bankruptcy is a long, complex legal process that severely damages your financial reputation. Settlement offers a dignified exit route that resolves the debt specifically without the sweeping legal incapacities associated with bankruptcy."
  }
];

export default async function LawyerBySlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const locationName = location.name;
  const pageTitle = location.title;

  // Schema Markup
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
      { "@type": "ListItem", "position": 2, "name": "Lawyers by City", "item": "https://www.amalegalsolutions.com/lawyer-by-city" },
      { "@type": "ListItem", "position": 3, "name": `Loan Settlement in ${locationName}`, "item": `https://www.amalegalsolutions.com/lawyer-by-city/${location.slug}` }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Best Advocate & Lawyers in ${locationName} for Loan Settlement`,
    "description": location.description,
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
    "datePublished": "2024-01-15",
    "dateModified": "2025-12-02"
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
    "name": `Loan Settlement Services in ${locationName}`,
    "image": "https://www.amalegalsolutions.com/services/3.png",
    "description": `Expert legal loan settlement services in ${locationName}, India.`,
    "brand": {
      "@type": "Brand",
      "name": "AMA Legal Solutions"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "Rahul Sharma" },
        "reviewBody": "I was drowning in credit card debt. AMA Legal Solutions helped me settle my 8 Lakh debt for just 3.5 Lakhs. The harassment stopped immediately after I hired them."
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "Priya Malhotra" },
        "reviewBody": "Professional and empathetic team. They handled my personal loan settlement very smoothly. Highly recommended for anyone facing financial trouble."
      }
    ]
  };

  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-settlement", title: "What is Loan Settlement?" },
    { id: "when-to-consider", title: "When to Consider?" },
    { id: "pros-and-cons", title: "Pros & Cons" },
    { id: "legal-framework", title: "Legal Framework" },
    { id: "process", title: "Our Process" },
    { id: "documents", title: "Documents Required" },
    { id: "types-of-loans", title: "Types of Loans" },
    { id: "credit-score", title: "Credit Score Impact" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Lawyers by City", href: "/lawyer-by-city" },
    { label: `${locationName}`, href: `/lawyer-by-city/${location.slug}` },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ background: "black" }}></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              {pageTitle}
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal representation in <strong>{locationName}</strong> to negotiate with banks, reduce your debt burden by up to 50%, and stop harassment. Legally. Ethically. Effectively.
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
              <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/appstore.svg" alt="Get it on Google Play" width={130} height={36} className="w-[120px] h-auto" />
              </Link>
              <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/playstore.svg" alt="Download on App Store" width={130} height={36} className="w-[120px] h-auto" />
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
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Best Lawyers for Loan Settlement in {locationName}</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Are you struggling with overwhelming debt in <strong>{locationName}</strong>? You are not alone. In the dynamic economic landscape of India, financial instability can strike anyone. Whether due to an unexpected job loss, a medical emergency in the family, or a business downturn, finding yourself in a debt trap is a stressful and isolating experience. The constant pressure of mounting interest, the fear of legal notices, and the relentless calls from recovery agents can take a severe toll on your mental peace.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    However, it is crucial to understand that being in debt is not a crime, and there are legal avenues available to help you navigate this difficult phase. <strong>Loan settlement</strong> (often searched as <em>debt settlement in {locationName}</em>) is one such powerful tool that provides a dignified exit route for honest borrowers who are genuinely unable to repay their full debts. At AMA Legal Solutions, we provide expert <strong>loan settlement services in {locationName}</strong> to help you regain your financial freedom.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    We are not just a debt settlement agency; we are a team of experienced <strong>loan settlement lawyers serving {locationName}</strong> who understand the intricacies of banking laws in India. We stand between you and the harassment, ensuring that your rights are protected while we work tirelessly to secure a settlement that you can afford.
                  </p>
                </section>

                {/* What is Loan Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What is Loan Settlement?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      &quot;Loan settlement is a mutual agreement between a lender and a borrower to close a loan account for an amount less than the total outstanding dues.&quot;
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Loan settlement, often referred to as a <strong>One Time Settlement (OTS) scheme</strong>, is a process utilized when a borrower is unable to service their debt obligations due to verifiable financial hardship. Unlike a standard loan closure where you pay back every rupee of the principal and interest, a settlement involves the lender agreeing to accept a lower amount to close the account.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Banks and Non-Banking Financial Companies (NBFCs) are business entities. When a loan turns into a Non-Performing Asset (NPA), it costs them money to maintain it on their books and pursue legal recovery. If they are convinced that a borrower in {locationName} genuinely cannot pay the full amount, they often prefer to recover a portion of the money immediately rather than spending years in litigation with uncertain results.
                  </p>
                </section>

                {/* When to Consider */}
                <section id="when-to-consider" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">When Should You Consider Loan Settlement in {locationName}?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Loan settlement is not for everyone. It is a strategic option for those facing genuine financial distress. You should consider this option if:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">⚠️</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Job Loss or Income Reduction</h4>
                        <p className="text-gray-600 text-sm">You have lost your primary source of income or faced a significant pay cut in {locationName}.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">🏥</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Medical Emergency</h4>
                        <p className="text-gray-600 text-sm">Severe illness in the family has drained your savings and ability to pay EMIs.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">📉</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Business Failure</h4>
                        <p className="text-gray-600 text-sm">Your business in {locationName} has suffered heavy losses, making debt servicing impossible.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3 mt-1">🔄</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Debt Trap</h4>
                        <p className="text-gray-600 text-sm">You are borrowing from one source to pay another, with no end in sight.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Pros and Cons */}
                <section id="pros-and-cons" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Pros and Cons of Loan Settlement</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    It is vital to weigh the benefits against the drawbacks before proceeding with loan settlement in {locationName}.
                  </p>
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
                            <ul className="list-disc pl-4 space-y-2 text-gray-700 text-sm">
                              <li><strong>Debt Reduction:</strong> Pay significantly less than what you owe (often 30-50% savings).</li>
                              <li><strong>Avoid Bankruptcy:</strong> Prevents the severe legal consequences of insolvency.</li>
                              <li><strong>Stop Harassment:</strong> Legal representation stops recovery agent calls.</li>
                              <li><strong>Immediate Relief:</strong> Closes the loan account permanently.</li>
                            </ul>
                          </td>
                          <td className="p-4 align-top bg-gray-50">
                            <ul className="list-disc pl-4 space-y-2 text-gray-700 text-sm">
                              <li><strong>Credit Score Impact:</strong> Score may drop by 50-100 points.</li>
                              <li><strong>&quot;Settled&quot; Status:</strong> Loan is marked as &quot;Settled&quot; in CIBIL report.</li>
                              <li><strong>Future Loans:</strong> Getting new unsecured loans might be tough for 12-24 months.</li>
                              <li><strong>Tax Implications:</strong> Waived amount might be considered taxable income.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Legal Framework for Debt Settlement in {locationName}</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Many borrowers in {locationName} worry about the legality of loan settlement. It is important to state clearly: <strong>Loan settlement is a 100% legal financial process.</strong> It is recognized and regulated by the Reserve Bank of India (RBI) and is a standard part of banking operations.
                  </p>
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-4">RBI Guidelines and Borrower Rights</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    The RBI has issued various circulars and guidelines that empower banks to compromise on settlements. As a borrower in {locationName}, you have specific rights:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-base md:text-lg mb-2 text-[#D2A02A]">Right to Fair Treatment</h4>
                      <p className="text-gray-600 text-sm">Lenders cannot use abusive language, physical threats, or public shaming to recover debts. This is a violation of your fundamental rights.</p>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-base md:text-lg mb-2 text-[#D2A02A]">Right to Privacy</h4>
                      <p className="text-gray-600 text-sm">Recovery agents cannot contact your friends, family, or employer to discuss your debt details without your consent.</p>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-base md:text-lg mb-2 text-[#D2A02A]">Right to Representation</h4>
                      <p className="text-gray-600 text-sm">You have the legal right to appoint a lawyer to represent you in discussions with the bank. Once appointed, the bank should communicate through your legal counsel.</p>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-base md:text-lg mb-2 text-[#D2A02A]">Right to Due Process</h4>
                      <p className="text-gray-600 text-sm">Even if you have defaulted, banks must follow due process under the SARFAESI Act and cannot seize assets without proper notice.</p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our Proven Loan Settlement Process in {locationName}</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    Navigating the bureaucracy of banks can be daunting. We have streamlined the <strong>loan settlement process</strong> into four clear steps to ensure transparency and efficiency for borrowers in {locationName}.
                  </p>
                  <div className="space-y-6 md:space-y-8">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                      <div className="flex-shrink-0 w-14 md:w-16 h-14 md:h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Financial Assessment & Strategy</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          We begin by analyzing your complete financial portfolio. We review your loan agreements, payment history, and current income status. We identify which loans are eligible for settlement and calculate a realistic settlement amount that you can afford. This stage involves setting clear expectations and preparing the necessary hardship documentation.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                      <div className="flex-shrink-0 w-14 md:w-16 h-14 md:h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Legal Intervention & Protection</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          Once engaged, we formally notify your creditors that AMA Legal Solutions represents you in {locationName}. We direct all future communication to our office. This step is crucial for stopping the incessant calls and harassment from recovery agents. If any legal notices have been issued against you, our legal team prepares appropriate responses to defend your position.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                      <div className="flex-shrink-0 w-14 md:w-16 h-14 md:h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Negotiation with Lenders</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          This is where our expertise shines. Our negotiators engage with the bank&apos;s recovery officers and credit managers. We present your hardship case with evidence and negotiate firmly to waive penal interest, regular interest, and even a portion of the principal. Our goal is to reach the lowest possible settlement figure for borrowers in {locationName}.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                      <div className="flex-shrink-0 w-14 md:w-16 h-14 md:h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">Settlement & Closure</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          Once a settlement amount is agreed upon, we ensure the bank issues a formal Settlement Letter detailing the terms. We review this document to ensure there are no hidden clauses. After you make the payment, we follow up to obtain the <strong>No Dues Certificate (NDC)</strong> and ensure the loan account is closed in the bank&apos;s records.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Documents Required */}
                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Documents Required for Loan Settlement in {locationName}</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    To build a strong case for settlement, we need to prove your financial hardship to the bank. The following documents are typically required:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#D2A02A] mr-3">✓</span> KYC Documents (Aadhar, PAN)</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#D2A02A] mr-3">✓</span> Loan Account Statements</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#D2A02A] mr-3">✓</span> Salary Slips / Income Proof (Current)</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#D2A02A] mr-3">✓</span> Bank Statements (Last 6 months)</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#D2A02A] mr-3">✓</span> Termination Letter (if unemployed)</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#D2A02A] mr-3">✓</span> Medical Records (if applicable)</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#D2A02A] mr-3">✓</span> Closure Letters of other loans</li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg"><span className="text-[#D2A02A] mr-3">✓</span> Correspondence with Bank</li>
                  </ul>
                </section>

                {/* Types of Loans */}
                <section id="types-of-loans" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Types of Loans We Settle in {locationName}</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    Not all loans are the same, and the strategy for settlement differs based on the nature of the debt. We specialize in settling various types of unsecured and secured debts for clients in {locationName}.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Personal Loans</h3>
                      <p className="text-gray-700 text-xs md:text-base"><strong>Personal loan settlement</strong> is a common solution for unsecured debts with high interest rates. Banks are often willing to negotiate significantly on these as they have no collateral to fall back on.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Credit Card Debt</h3>
                      <p className="text-gray-700 text-xs md:text-base"><strong>Credit card settlement</strong> is one of the most common types of settlement in {locationName}. Due to compounding interest rates of 30-40% per annum, banks often prefer settlement over write-offs.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Business Loans (Unsecured)</h3>
                      <p className="text-gray-700 text-xs md:text-base">For MSMEs and entrepreneurs in {locationName}, business loans can become a burden during market downturns. We assist in settling unsecured business loans to prevent bankruptcy.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Education Loans</h3>
                      <p className="text-gray-700 text-xs md:text-base">In cases of genuine hardship where employment is not secured post-education, we can negotiate settlement terms for education loans to prevent long-term financial distress.</p>
                    </div>
                  </div>
                  <p className="mt-4 md:mt-6 text-xs md:text-sm text-gray-500 italic">
                    *Note: Secured loans (Home Loans, Car Loans) are harder to settle as banks can seize the asset. However, we provide legal consultancy for these cases as well.
                  </p>
                </section>

                {/* Credit Score Impact */}
                <section id="credit-score" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding the Impact on Your Credit Score</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Transparency is one of our core values. We want borrowers in {locationName} to make an informed decision. It is true that <strong>loan settlement negatively impacts your credit score</strong>. When you settle a loan, the bank reports the status as &quot;Settled&quot; to credit bureaus like CIBIL, Experian, and Equifax.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    This &quot;Settled&quot; tag can lower your score by 50 to 100 points. However, you must weigh this against the alternative. A &quot;Default&quot; or &quot;Written Off&quot; status is far more damaging.
                  </p>
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-4">The Path to Redemption</h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 bg-green-50 p-4 md:p-6 rounded-xl text-sm md:text-base">
                    <li><strong>Step 1:</strong> Obtain a secured credit card (against a fixed deposit) and use it responsibly.</li>
                    <li><strong>Step 2:</strong> Ensure all other utility bills and active EMIs are paid on time.</li>
                    <li><strong>Step 3:</strong> Avoid applying for new unsecured loans for at least 12-18 months.</li>
                    <li><strong>Step 4:</strong> Regularly check your credit report for errors and dispute them if necessary.</li>
                  </ul>
                  <p className="text-sm md:text-lg leading-relaxed mt-4 md:mt-6 text-gray-700">
                    At AMA Legal Solutions, we don&apos;t just help you settle; we provide post-settlement guidance on how to repair your financial health and improve your CIBIL score over time.
                  </p>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why Choose AMA Legal Solutions in {locationName}?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    In a market flooded with &quot;debt relief agencies&quot; and &quot;settlement companies,&quot; AMA Legal Solutions stands apart as a legitimate law firm. Here is why clients in {locationName} trust us with their financial freedom:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 md:gap-6 text-center">
                    <div className="p-4 md:p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4">⚖️</div>
                      <h3 className="font-bold text-lg md:text-xl mb-2">Legal Authority</h3>
                      <p className="text-gray-600 text-sm">We are lawyers, not just agents. We have the power to represent you in court and send legal notices.</p>
                    </div>
                    <div className="p-4 md:p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4">🛡️</div>
                      <h3 className="font-bold text-lg md:text-xl mb-2">Anti-Harassment</h3>
                      <p className="text-gray-600 text-sm">We take a zero-tolerance approach to harassment and take legal action against abusive recovery agents.</p>
                    </div>
                    <div className="p-4 md:p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4">🤝</div>
                      <h3 className="font-bold text-lg md:text-xl mb-2">Ethical Practice</h3>
                      <p className="text-gray-600 text-sm">We operate with complete transparency. No false promises, no hidden fees, and complete confidentiality.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="bg-gray-50 p-4 md:p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">&quot;</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm md:text-base">
                        &quot;I was drowning in credit card debt and getting 20 calls a day. AMA Legal Solutions stepped in and stopped the harassment immediately. They settled my 8 Lakh debt for just 3.5 Lakhs. I can finally sleep peacefully.&quot;
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Rahul Sharma</p>
                          <p className="text-xs text-gray-500">IT Professional, Bangalore</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">&quot;</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm md:text-base">
                        &quot;My business loan was becoming unmanageable after the lockdown. The bank was threatening to seize my property. The lawyers at AMA guided me legally and negotiated a fair OTS. Highly professional team.&quot;
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Priya Malhotra</p>
                          <p className="text-xs text-gray-500">Entrepreneur, Delhi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">Frequently Asked Questions About Loan Settlement in {locationName}</h2>
                  <div className="space-y-4 md:space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 md:pb-6 last:border-0">
                        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-2 md:mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-6 md:pl-8 text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Don&apos;t Let Debt Control Your Life in {locationName}</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Take the first step towards a debt-free future. Our expert lawyers serving {locationName} are ready to fight for your financial freedom.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book Your Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70">
                      Confidential • Legal • Effective
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              {/* Contact Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Speak to our senior loan settlement lawyers in {locationName} today.
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
                    <Link href="/services/debt-consolidation" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                      <span className="mr-2">›</span> Debt Consolidation
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
                </ul>

                {/* App Store Links */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
                  <div className="flex flex-col gap-3">
                    <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                      <Image src="/newAssets/appstore.svg" alt="Get it on Google Play" width={130} height={36} className="w-full h-auto max-w-[130px]" />
                    </Link>
                    <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                      <Image src="/newAssets/playstore.svg" alt="Download on App Store" width={130} height={36} className="w-full h-auto max-w-[130px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Banks Grid */}
          <div className="mt-16">
            <section className="my-10">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
                We settle loans from the following banks
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {[
                  { name: "SBI", href: "/services/loan-settlement/sbi-bank" },
                  { name: "HDFC", href: "/services/loan-settlement/hdfc-bank" },
                  { name: "ICICI", href: "/services/loan-settlement/icici-bank" },
                  { name: "Kotak Mahindra", href: "/services/loan-settlement/kotak-mahindra" },
                  { name: "IDFC", href: "/services/loan-settlement/idfc-bank" },
                  { name: "Yes Bank", href: "/services/loan-settlement/yes-bank" },
                  { name: "Bajaj Finserv", href: "/services/loan-settlement/bajaj-finserv" },
                  { name: "Axis Bank", href: "/services/loan-settlement/axis-bank" },
                  { name: "Bank of Baroda", href: "/services/loan-settlement/bank-of-baroda" },
                  { name: "Paytm", href: "/services/loan-settlement/paytm" },
                  { name: "Hero Fincorp", href: "/services/loan-settlement/hero-fincorp" },
                  { name: "Aditya Birla", href: "/services/loan-settlement/aditya-birla" },
                  { name: "Poonawalla Fincorp", href: "/services/loan-settlement/poonawalla-fincorp" },
                  { name: "Citibank", href: "/services/loan-settlement/citibank" },
                  { name: "Tata Capital", href: "/services/loan-settlement/tata-capital" },
                  { name: "Federal Bank", href: "/services/loan-settlement/federal-bank" },
                  { name: "IndusInd Bank", href: "/services/loan-settlement/indusind-bank" },
                  { name: "Standard Chartered", href: "/services/loan-settlement/standard-chartered" },
                  { name: "American Express", href: "/services/loan-settlement/american-express" },
                  { name: "L&T Finance", href: "/services/loan-settlement/l-and-t-finance" },
                ].map((bank) => (
                  <Link
                    key={bank.name}
                    href={bank.href}
                    className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                  >
                    <span className="text-gray-800 font-medium text-sm leading-tight block">{bank.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm md:text-lg text-gray-700">
                  Our loan settlement services in {locationName} are available for all major banks in India
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
