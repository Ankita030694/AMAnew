import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaGavel, FaCheckCircle, FaExclamationTriangle, FaUserSecret, FaLock, FaUserShield, FaBalanceScale, FaEyeSlash, FaUserTie, FaMoneyBillWave, FaHandshake, FaFileContract, FaUniversity } from "react-icons/fa";

export const metadata = {
  title: "Notice for Recovery of Unpaid Salary: Legal Procedure & Employee Rights",
  description:
    "Employer not paying salary? Learn how to send a legal notice for recovery of unpaid salary in India. Understand your rights under Payment of Wages Act and Labour Laws.",
  keywords: "notice for recovery of unpaid salary, legal notice for unpaid salary format, employee rights unpaid salary india, recovery of dues from employer, labour law unpaid salary, demand notice for salary recovery",
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "legal-framework", title: "The Legal Framework" },
  { id: "payment-of-wages", title: "Payment of Wages Act" },
  { id: "industrial-disputes", title: "Industrial Disputes Act" },
  { id: "code-on-wages", title: "Code on Wages 2019" },
  { id: "legal-notice", title: "The Legal Notice Strategy" },
  { id: "procedural-steps", title: "Steps for Recovery" },
  { id: "managerial-rights", title: "Rights of Managers & Executives" },
  { id: "insolvency-recovery", title: "Recovery during Insolvency" },
  { id: "employer-tactics", title: "Countering Employer Excuses" },
  { id: "criminal-action", title: "Criminal Legal Options" },
  { id: "ama-benefits", title: "How AMA Helps You" },
  { id: "success-stories", title: "Success Stories" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const relatedPages = [
  { title: "Demand Notice for Recovery of Money", href: "/demand-notice-for-recovery-of-money" },
  { title: "Breach of Contract Notice", href: "/breach-of-contract-notice" },
  { title: "Employer Not Paying Salary After Resignation", href: "/employer-not-paying-salary-after-resignation" },
  { title: "Can Company Hold My Salary After Resignation", href: "/can-company-hold-my-salary-after-resignation" },
  { title: "Where to File a Complaint If Employer Doesn't Pay", href: "/where-to-file-a-complaint-if-your-employer-doesnt-pay-you" },
  { title: "Workplace Harassment Legal Notice", href: "/workplace-harassment-legal-notice-service" },
];

export default function SalaryRecoveryGuide() {
  const breadcrumbItems = [
    { label: "Legal Services", href: "/services" },
    { label: "Salary Recovery", href: "/notice-for-recovery-of-unpaid-salary" },
  ];

  // Schema Markup
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Notice for Recovery of Unpaid Salary: A Comprehensive Legal Guide for Employees",
    "description": "Exhaustive legal guide on recovering unpaid salary in India, covering legal notices, labour laws, and court procedures.",
    "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" }
    },
    "datePublished": "2026-04-28",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.amalegalsolutions.com/notice-for-recovery-of-unpaid-salary" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the limitation period for recovering unpaid salary in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The limitation period for filing a suit for recovery of salary is generally three years from the date the salary became due. It is advisable to act immediately to avoid legal hurdles."
        }
      },
      {
        "@type": "Question",
        "name": "Can I file a criminal case for unpaid salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if there is a clear intent to cheat or a criminal breach of trust, you can file a complaint under Section 406 or 420 of the IPC. However, salary recovery is primarily a civil and labour law matter."
        }
      },
      {
        "@type": "Question",
        "name": "Does the Payment of Wages Act apply to high-earning managers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The original Payment of Wages Act has a wage ceiling (currently Rs. 24,000 per month). Managers earning above this often seek recourse under the Indian Contract Act or the Code on Wages 2019."
        }
      },
      {
        "@type": "Question",
        "name": "What should I include in a legal notice for salary recovery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A legal notice should include your employment details, the period of non-payment, the exact amount due, a demand for payment within a specific timeframe (usually 15 days), and a warning of legal action."
        }
      },
      {
        "@type": "Question",
        "name": "Can an employer hold salary for not serving the notice period?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An employer can deduct notice pay as per the contract, but they cannot withhold the entire earned salary for work already performed. Withholding earned wages is generally illegal."
        }
      },
      {
        "@type": "Question",
        "name": "What is the role of the Labour Commissioner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Labour Commissioner acts as a mediator to resolve disputes between employers and employees. If conciliation fails, the matter can be referred to the Labour Court."
        }
      },
      {
        "@type": "Question",
        "name": "Is a WhatsApp message valid as a demand for salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While a WhatsApp message can serve as a preliminary reminder, a formal legal notice sent through an advocate via registered post carries much more legal weight in court."
        }
      },
      {
        "@type": "Question",
        "name": "Can I recover interest on unpaid salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, courts often award interest ranging from 6% to 12% per annum on the delayed salary amount, depending on the circumstances and the contract terms."
        }
      },
      {
        "@type": "Question",
        "name": "What if the company has gone bankrupt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under the Insolvency and Bankruptcy Code (IBC), employees are considered operational creditors. You must file your claim with the Interim Resolution Professional (IRP) once the insolvency process starts."
        }
      },
      {
        "@type": "Question",
        "name": "Can AMA Legal Solutions help me recover my salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialize in drafting powerful legal notices, representing employees in labour courts, and negotiating with employers to ensure your dues are cleared quickly."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com/" },
      { "@type": "ListItem", "position": 2, "name": "Legal Services", "item": "https://www.amalegalsolutions.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Notice for Recovery of Unpaid Salary", "item": "https://www.amalegalsolutions.com/notice-for-recovery-of-unpaid-salary" }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Salary Recovery Legal Service",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "1250" },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Amit Sharma" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "AMA Legal Solutions helped me recover 4 months of pending salary from my previous employer within 20 days. Their legal notice was very effective."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Priya Singh" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "I was struggling with my FNF for months. One call from AMA's legal team and the company cleared all my dues. Highly recommended."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rahul Verma" },
        "reviewRating": { "@type": "Rating", "ratingValue": "4" },
        "reviewBody": "Professional service. They explained the labour laws clearly and handled the communication with my ex-employer professionally."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sneha Gupta" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "The best legal advice for employee rights. They saved me from a lot of stress and helped me get my hard-earned money back."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#30261C]">
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#EBE9E4]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#30261C 1px, transparent 1px)", backgroundSize: "20px 20px" }}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-12 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
              Employer Not Paying <span className="text-[#D29E0D]">Your Salary</span>?
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              Non-payment of salary is a violation of your fundamental rights. Learn the legal steps to send a powerful notice and recover your hard-earned money through Indian labour laws.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt /> Start Recovery Process
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-white border-2 border-[#D29E0D] text-[#D29E0D] hover:bg-[#D29E0D] hover:text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
                  <FaPhone /> Legal Consultation
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Main Layout */}
      <div className="max-w-[1600px] mx-auto px-6 pb-24 flex flex-col lg:flex-row gap-8">
        
        {/* Left Column - TOC */}
        <aside className="lg:w-[20%] hidden lg:block">
          <div className="sticky top-32">
            <h4 className="text-xl font-bold mb-6 text-[#30261C] border-b pb-2">Guide Contents</h4>
            <TableOfContents sections={sections} orientation="vertical" />
          </div>
        </aside>

        {/* Middle Column - Content */}
        <main className="lg:w-[55%]">
          <article className="prose prose-lg max-w-none text-[#30261C]/90 leading-relaxed">
            
            <section id="introduction" className="mb-16">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Introduction: The Invisible Crisis of Wage Theft</h2>
              <p>
                In the modern corporate landscape, the relationship between an employer and an employee is built on a fundamental promise. The employee provides their time, skill, and labor, and in return, the employer provides a salary. When this promise is broken, it is not just a financial inconvenience. It is a profound breach of trust that can destabilize a person's life, family, and future. Non-payment of salary, often referred to as wage theft, is a widespread issue that affects millions of professionals across India, from factory workers to high-level executives.
              </p>
              <p>
                Many employees feel powerless when their salary is withheld. They fear that taking legal action will lead to blacklisting or that the costs of litigation will outweigh the recovered amount. This fear is exactly what unscrupulous employers count on. They use the complexity of the legal system as a shield to avoid their financial obligations. However, the legal reality is quite different. The laws of India provide robust, effective, and relatively fast mechanisms for the recovery of unpaid dues.
              </p>
              <p>
                At AMA Legal Solutions, we believe that no professional should ever have to beg for their hard-earned money. Whether you are dealing with a startup that has "run out of funds" or a large corporation that is withholding your Full and Final (FNF) settlement due to personal vendettas, you have the power to fight back. This guide is designed to be your comprehensive manual for salary recovery. We will walk you through the various acts that protect you, the procedural steps to take, and the strategic use of a legal notice to achieve a quick resolution.
              </p>
              <p>
                Remember that your salary is not a gift. It is a legal right. It is the compensation for the value you have already delivered to the company. When an employer refuses to pay, they are essentially holding your property illegally. By understanding the legal framework and taking decisive action, you can reclaim your dignity and your financial security. Let us explore the tools that the Indian legal system provides to ensure that justice is served for every working professional.
              </p>
            </section>

            <section id="legal-framework" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Legal Framework for Salary Protection</h2>
              <p>
                India has a complex but comprehensive set of laws designed to protect the rights of workers and employees. These laws have evolved over decades to balance the power dynamic between the employer and the employed. Understanding which law applies to your specific situation is the first step in a successful recovery strategy.
              </p>
              <div className="bg-[#EBE9E4] p-8 rounded-2xl border-l-8 border-[#D29E0D] mb-8">
                <h4 className="text-xl font-bold text-[#30261C] mb-4 flex items-center gap-2">
                  <FaBalanceScale className="text-[#D29E0D]" /> Key Statutes for Recovery:
                </h4>
                <ul className="space-y-4 text-[#30261C]/80">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Payment of Wages Act, 1936:</strong> Focuses on the timely payment of wages and prevents unauthorized deductions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Industrial Disputes Act, 1947:</strong> Provides powerful remedies for those defined as "workmen" to recover money through Labour Courts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Indian Contract Act, 1872:</strong> The primary law for managerial and executive roles not covered by labour-specific acts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span><strong>Code on Wages, 2019:</strong> A modern, consolidated law that aims to simplify and extend wage protections to all employees.</span>
                  </li>
                </ul>
              </div>
              <p>
                Each of these acts serves a different purpose and provides different avenues for relief. For example, if you are a factory worker or a technician, the Industrial Disputes Act offers a specialized tribunal system that is generally faster and more worker friendly than civil courts. On the other hand, if you are a Vice President or a Senior Manager, your relationship is primarily governed by the contract you signed, and the Indian Contract Act will be your primary legal weapon.
              </p>
            </section>

            <section id="payment-of-wages" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Payment of Wages Act, 1936: Your First Shield</h2>
              <p>
                The Payment of Wages Act is one of the oldest and most fundamental pieces of labour legislation in India. Its primary goal is to ensure that wages are paid regularly and that no illegal deductions are made from the employee's pay.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">Mandatory Payment Timelines:</h3>
              <p>
                The Act specifies that wages must be paid before the expiry of the 7th day of the following month for establishments with less than 1,000 employees. For larger establishments, the deadline is the 10th day. If an employee is terminated or resigns, their wages must be paid before the expiry of the second working day after the termination.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">Prohibited Deductions:</h3>
              <p>
                One of the most common ways employers withhold salary is by making "fines" or "damages" deductions. The Act strictly limits what an employer can deduct. Deductions for fines, damage to property, or loss of money must be preceded by an opportunity for the employee to explain themselves. Any deduction that is not explicitly permitted under Section 7 of the Act is illegal and can be challenged.
              </p>
              <p>
                However, it is important to note that the Payment of Wages Act traditionally has a wage ceiling. Currently, it applies to employees earning up to Rs. 24,000 per month. If your salary is higher, you might not be able to file a claim under this specific act, but the principles of the act often influence how courts view "unfair deductions" for all classes of employees.
              </p>
            </section>

            <section id="industrial-disputes" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Industrial Disputes Act, 1947: Power to the Workmen</h2>
              <p>
                For those who fall under the definition of a "workman," the Industrial Disputes Act (IDA) is perhaps the most powerful tool for recovery. Section 33C of the IDA provides a specific procedure for the recovery of money due from an employer.
              </p>
              <div className="bg-[#30261C] text-white p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-[#D29E0D] mb-6 flex items-center gap-2">
                  <FaGavel /> Section 33C(2) Explained:
                </h4>
                <p>
                  If an employee is entitled to receive from the employer any money or any benefit which is capable of being computed in terms of money, the employee can apply to the Labour Court. The Court then determines the amount due and issues a certificate to the Collector, who recovers the amount as an arrear of land revenue.
                </p>
              </div>
              <p>
                This "Revenue Recovery" process is highly effective because it treats the unpaid salary as a debt to the state. The Collector has the power to attach the employer's bank accounts or property to recover the dues. This puts immense pressure on the company to settle the matter quickly.
              </p>
              <p>
                The definition of "workman" under the IDA is broad but generally excludes those employed in a mainly managerial or administrative capacity. However, the courts have consistently held that the designation does not matter as much as the actual nature of the work. If your primary duties are technical or clerical, even if your title is "Manager," you might still qualify as a workman and benefit from this powerful recovery mechanism.
              </p>
            </section>

            <section id="code-on-wages" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Code on Wages, 2019: The New Era of Protection</h2>
              <p>
                The Code on Wages, 2019, is a monumental shift in Indian labour law. It consolidates four major acts, including the Payment of Wages Act, the Minimum Wages Act, the Payment of Bonus Act, and the Equal Remuneration Act, into a single code.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">Universal Applicability:</h3>
              <p>
                The most significant change is that the Code on Wages removes the wage ceiling for many of its protections. It aims to protect the wages of every employee in India, regardless of their pay scale or the nature of their work. This is a massive victory for mid-level and senior professionals who previously fell into a "legal grey area."
              </p>
              <p>
                The Code also introduces the concept of an "Inspector-cum-Facilitator." This official has the power to inspect establishments and ensure compliance with the wage laws. The penalties for non-payment under the Code have been significantly increased, making it much more expensive for companies to withhold salary. While the implementation of the Code has been staggered, its principles are increasingly being cited in courts as the current standard for employee protection in India.
              </p>
            </section>

            <section id="legal-notice" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">The Legal Notice Strategy: Your Most Important Step</h2>
              <p>
                Before rushing to court, the most effective first step is sending a formal legal notice through an advocate. A legal notice is not just a letter; it is a formal communication that puts the employer on notice that you are prepared to take the matter to a court of law.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaFileContract className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Formalizes the Claim</h4>
                    <p className="text-sm text-gray-600">It creates a permanent record of your demand and the employer's failure to pay, which is essential evidence in court.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaHandshake className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Opens Negotiation</h4>
                    <p className="text-sm text-gray-600">Most companies prefer to settle once they realize the employee has engaged a law firm like AMA Legal Solutions.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaMoneyBillWave className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Specifies Interest</h4>
                    <p className="text-sm text-gray-600">A professional notice demands not just the principal amount but also interest for the delay, maximizing your recovery.</p>
                  </div>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                  <FaShieldAlt className="text-[#D29E0D] text-2xl flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Deters Retaliation</h4>
                    <p className="text-sm text-gray-600">By moving the dispute into a formal legal channel, you protect yourself from informal harassment or threats from the company.</p>
                  </div>
                </div>
              </div>
              <p>
                A legal notice should be sent via Registered Post with Acknowledgement Due (RPAD) or Speed Post. This provides you with a tracking number and a delivery report, proving that the employer received the notice. In many cases, the "fear of the law" is enough to make the company clear the dues within the notice period (usually 15 days).
              </p>
            </section>

            <section id="procedural-steps" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Step-by-Step Procedure for Salary Recovery</h2>
              <p>
                If your salary has been unpaid for more than 15 days beyond the due date, you should follow this strategic protocol to ensure the highest chance of recovery.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">Step 1: Internal Documentation</h3>
              <p>
                Gather every piece of evidence. This includes your appointment letter, salary slips, bank statements showing previous credits, your resignation or termination letter, and any emails where you have requested the pending salary. These documents form the foundation of your case.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">Step 2: Formal Email Demand</h3>
              <p>
                Send a final, professional email to HR and the CEO. Clearly state the amount due and provide a 48-hour deadline for a response. This shows the court that you tried to resolve the matter amicably before seeking legal help.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">Step 3: The Legal Notice</h3>
              <p>
                Engage an advocate to draft and send a legal notice. This notice should detail the breach of contract and the violations of labour laws. It should demand the principal amount plus interest and legal costs.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">Step 4: Approach the Labour Commissioner</h3>
              <p>
                If the legal notice is ignored, file a complaint with the Labour Commissioner of your region. The Commissioner will summon the employer for a conciliation meeting. If the employer fails to appear or refuses to pay, the Commissioner will issue a "Failure Report," which allows you to move to the Labour Court.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">Step 5: Labour Court or Civil Suit</h3>
              <p>
                Depending on your job role, your advocate will file a case in the Labour Court (for workmen) or a Summary Suit in the Civil Court (for managers). A Summary Suit under Order 37 of the CPC is particularly fast because it does not allow the defendant a "right to defense" unless they can prove they have a substantial case.
              </p>
            </section>

            <section id="managerial-rights" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Rights of Managers & Executives: Beyond Labour Law</h2>
              <p>
                Many senior professionals believe that because they are not "workers," they have no protection against salary withholding. This is a myth. While you might not be able to approach the Labour Commissioner as easily, your rights are protected under the Indian Contract Act and the Civil Procedure Code.
              </p>
              <p>
                For a manager, the employment contract is a binding civil agreement. If the company fails to pay your salary, they are in "Material Breach" of the contract. You can sue for recovery of the salary, interest, and even damages for the mental agony and financial hardship caused by the breach.
              </p>
              <p>
                Furthermore, if the company has withheld your salary while you have performed your duties, it can be viewed as "Unjust Enrichment." The company has benefited from your work but has refused to pay the agreed price for it. Courts are very strict with companies that use their superior bargaining power to exploit senior professionals.
              </p>
            </section>

            <section id="insolvency-recovery" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Recovery during Insolvency: The IBC Shield</h2>
              <p>
                What happens if the company truly has no money? If a company is undergoing insolvency under the Insolvency and Bankruptcy Code (IBC), 2016, employees are given a special status.
              </p>
              <p>
                Employees and workmen are considered "Operational Creditors." When the National Company Law Tribunal (NCLT) admits an insolvency petition against a company, an Interim Resolution Professional (IRP) is appointed. You must file your claim for unpaid salary with the IRP using "Form D" (for workmen) or "Form E" (for other employees).
              </p>
              <p>
                Under the IBC "waterfall mechanism," the dues of workmen for the last 24 months are given high priority, even above some secured creditors. This ensures that even if a company is collapsing, the people who provided the labor are among the first to be paid from whatever assets remain.
              </p>
            </section>

            <section id="employer-tactics" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Countering Common Employer Excuses</h2>
              <p>
                Employers use a standard set of excuses to delay or deny salary payments. Knowing how to counter these legally is vital for your success.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">"Performance Issues"</h3>
              <p>
                This is the most common excuse used during FNF settlements. If the company never gave you a formal warning or a performance improvement plan (PIP) during your service, they cannot suddenly claim "poor performance" as a reason to withhold earned salary. Earned salary is for work already done; performance is a separate issue that should have been handled during your employment.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">"Notice Period Shortfall"</h3>
              <p>
                While a company can adjust "Notice Pay" from your dues, they cannot withhold your entire salary for the months you actually worked. If you worked for January and February and resigned on March 1st without notice, they can deduct March's notice pay, but they must pay you for January and February.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-[#D29E0D]">"Missing Company Property"</h3>
              <p>
                Companies often claim a laptop or ID card is missing to stall the FNF. The legal response is to provide a "No Dues Certificate" from your department head. If they still withhold, your legal notice should state that the value of the allegedly missing property is far less than the withheld salary and that this is a disproportionate and illegal action.
              </p>
            </section>

            <section id="criminal-action" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">Criminal Legal Options: When It Becomes a Crime</h2>
              <p>
                In certain cases, non-payment of salary can cross the line from a civil dispute into a criminal offense. This usually happens when there is evidence of fraud or a deliberate intent to cheat the employee.
              </p>
              <div className="bg-[#30261C] text-white p-8 rounded-2xl mb-8">
                <h4 className="text-xl font-bold text-[#D29E0D] mb-6 flex items-center gap-2">
                  <FaBalanceScale /> Relevant IPC Sections:
                </h4>
                <ul className="space-y-6">
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Section 406 IPC (Criminal Breach of Trust)</h5>
                    <p className="text-sm">If the employer has deducted EPF or ESI from your salary but has not deposited it with the government, it is a criminal breach of trust.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Section 420 IPC (Cheating)</h5>
                    <p className="text-sm">If an employer hired you with the knowledge that they would never pay you, or if they issued a salary cheque knowing it would bounce, it is cheating.</p>
                  </li>
                  <li>
                    <h5 className="font-bold text-[#D29E0D]">Section 418 IPC (Cheating with Knowledge of Loss)</h5>
                    <p className="text-sm">Cheating a person whose interest the offender was bound to protect, applicable when an employer exploits a vulnerable employee.</p>
                  </li>
                </ul>
              </div>
              <p>
                Filing an FIR (First Information Report) for salary recovery is a serious step and should only be done with professional legal advice. However, the mere mention of these criminal sections in a legal notice is often enough to make an employer realize that they are facing more than just a money claim; they are facing potential jail time.
              </p>
            </section>

            <section id="ama-benefits" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">How AMA Legal Solutions Empowers You</h2>
              <p>
                At AMA Legal Solutions, we specialize in standing up for the rights of the Indian workforce. We understand that your salary is your lifeline, and we treat every recovery case with the urgency and precision it deserves.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 my-8">
                <h4 className="font-bold text-[#30261C] mb-4 flex items-center gap-2">
                  <FaShieldAlt className="text-[#D29E0D]" /> Our Recovery Services:
                </h4>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>High-Impact Legal Notices:</strong> Custom-drafted notices that cite specific violations to ensure maximum pressure on the employer.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Labour Court Representation:</strong> Expert handling of IDA Section 33C applications and litigation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Summary Suit Filing:</strong> Utilizing Order 37 of the CPC for fast-track recovery for managers and executives.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-[#D29E0D] mt-1" />
                    <span><strong>Strategic Negotiation:</strong> We don't just sue; we talk to the company's legal department to find the quickest path to your payment.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="success-stories" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">Success Stories: Victories for the Working Professional</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "My startup employer stopped paying salary for 3 months and then vanished. AMA Legal Solutions tracked down the directors and sent a notice that included criminal liability. Within 10 days, my full dues were transferred to my account."
                  </p>
                  <p className="font-bold text-sm">Vikram R., Bangalore</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex text-[#D29E0D] mb-4 text-xl">★★★★★</div>
                  <p className="text-sm italic text-gray-600 mb-6">
                    "A large MNC withheld my 5 lakh FNF settlement citing a vague performance issue. AMA filed a summary suit and the company's legal team settled the matter in the first hearing itself. Truly the best lawyers for employees."
                  </p>
                  <p className="font-bold text-sm">Deepika M., Gurgaon</p>
                </div>
              </div>
            </section>

            <section id="faqs" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-xl mb-2">Can an employer hold my salary because I resigned on short notice?</h4>
                  <p>They can only deduct the salary for the notice period duration you did not serve, as per your contract. They cannot withhold the salary for the days you actually worked.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">How long does a salary recovery case take in India?</h4>
                  <p>A well-drafted legal notice often resolves the matter in 15 to 30 days. If the matter goes to a Labour Court or a Summary Suit, it can take 6 months to a year, but the employer usually pays interest for the delay.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I recover my salary if I didn't have an appointment letter?</h4>
                  <p>Yes. You can prove your employment through bank statements showing salary credits, work emails, ID cards, and even WhatsApp communications with your manager.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Is it mandatory to send a legal notice before filing a case?</h4>
                  <p>While not always mandatory, it is highly recommended. It serves as crucial evidence that you made a formal demand and gives the employer a final chance to avoid litigation.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I file a complaint with the Labour Commissioner online?</h4>
                  <p>Yes, many states like Maharashtra, Delhi, and Karnataka have online portals for labour complaints. However, following up with a legal notice from an advocate is more effective.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What happens if the company is not paying citing financial losses?</h4>
                  <p>Financial loss is not a valid legal excuse for not paying earned wages. The company is legally bound to pay for the labor it has consumed. You can still proceed with recovery actions.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can a company deduct my salary for "training costs"?</h4>
                  <p>Only if there is a specific, reasonable training bond that was signed and if actual costs were incurred. Arbitrary "training fee" deductions are generally illegal.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">What is a Summary Suit for salary recovery?</h4>
                  <p>It is a fast-track civil suit under Order 37 of the CPC. It is used when the claim is based on a written contract or a liquidated amount of money, like a salary debt.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can I file a case after 2 years of leaving the company?</h4>
                  <p>Yes, the limitation period for recovery of money is 3 years from the date the payment was due. However, sooner is always better.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Can an employer deduct my salary for mistakes made at work?</h4>
                  <p>Under the Payment of Wages Act, deductions for damage or loss can only be made after a proper inquiry and an opportunity for the employee to be heard. Arbitrary deductions are illegal.</p>
                </div>
              </div>
            </section>

            <div className="mt-16 p-10 bg-[#D29E0D]/10 rounded-3xl border-2 border-dashed border-[#D29E0D] text-center">
              <h3 className="text-2xl font-bold mb-4">Get Your Hard-Earned Money Back</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Don't let an unethical employer walk away with your salary. Our expert legal team at AMA Legal Solutions is ready to help you recover your dues with interest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#D29E0D] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b88a22] transition-all shadow-lg">
                    Speak to a Recovery Lawyer
                  </button>
                </Link>
                <a href="https://wa.me/918700343611" target="_blank" className="flex items-center gap-2">
                  <button className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#128C7E] transition-all shadow-lg flex items-center gap-2">
                    <FaWhatsapp size={20} /> WhatsApp for Legal Help
                  </button>
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#30261C] mb-6 mt-12">The Psychological Impact of Withheld Wages</h2>
            <p>
              While the legal battle is often the focus, the psychological toll of withheld wages is immense. For most people, a salary is not just a number on a screen; it is the rent, the children's school fees, the EMI for the home, and the grocery bill. When that lifeline is cut off, it leads to a spiral of stress, anxiety, and a feeling of powerlessness. Employers who withhold salary are often using this psychological pressure to force employees into accepting lower settlements or simply giving up.
            </p>
            <p>
              Understanding that this is a tactic is the first step to overcoming it. By engaging professional legal help, you shift the burden of the battle from your shoulders to ours. You are no longer a lone individual fighting a giant corporation; you are a client of a formidable law firm. This realization alone provides immense mental relief, allowing you to focus on your next career move while we handle the recovery.
            </p>
            <p>
              Furthermore, the law recognizes the "Mental Agony" caused by such breaches. In many civil recovery suits, courts award "General Damages" in addition to the withheld salary to compensate for the emotional distress caused to the employee. Your suffering is not invisible to the law; it is a valid ground for compensation.
            </p>

            <h2 className="text-3xl font-bold text-[#30261C] mb-6 mt-12">Building a Documentation-First Culture</h2>
            <p>
              If there is one lesson every professional should take away from the salary recovery crisis, it is the importance of documentation. In the eyes of a judge, if it isn't in writing, it didn't happen. From the day you join a company to the day you leave, keep a meticulous record of every agreement, every promotion, and every promise made by the employer.
            </p>
            <p>
              Save your payslips in a personal cloud folder, not just on the company laptop. Forward important emails regarding your role and compensation to your personal ID. If a manager makes a verbal promise regarding a bonus or a salary hike, follow up with an email saying, "As per our discussion today, I understand that..." This creates a paper trail that is impossible for the company to deny later.
            </p>
            <p>
              In the digital age, metadata is your friend. Screenshots of WhatsApp messages, call logs, and even LinkedIn messages can be used as secondary evidence in Indian courts under the Evidence Act. By being proactive with your documentation, you make the task of recovery much easier for your legal team and much harder for an unethical employer.
            </p>

            <h2 className="text-3xl font-bold text-[#30261C] mb-6 mt-12">Conclusion: Stand Up for Your Rights</h2>
            <p>
              The path to salary recovery may seem daunting, but it is a path well-traveled by thousands of professionals who have successfully reclaimed their dues. The legal system of India, while slow at times, is deeply rooted in the principle of social justice. It recognizes the inherent vulnerability of the employee and provides specialized forums to ensure they are not exploited.
            </p>
            <p>
              Do not let the fear of a "legal battle" stop you from claiming what is rightfully yours. Most companies thrive on the silence of their victims. By sending a legal notice and showing that you are willing to fight, you not only recover your money but also set a precedent that protects other employees from similar exploitation.
            </p>
            <p>
              At AMA Legal Solutions, we are honored to be the voice of the working professional. We have seen the relief on our clients' faces when they finally receive the notification that their dues have been settled. Your hard work has value, and your dignity is worth defending. Take the first step today. Reach out to us, and let us turn the tide in your favor. Your journey to justice and financial recovery starts with a single, decisive action.
            </p>

          </article>
        </main>

        {/* Right Column */}
        <aside className="lg:w-[25%]">
          <div className="sticky top-32 space-y-8">
            <div className="bg-[#30261C] text-[#EBE9E4] p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Expert Recovery Support</h4>
              <p className="text-sm opacity-80 mb-6">
                Our lawyers specialize in employee protection. We stop wage theft and ensure your Full and Final settlement is cleared.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Drafting Powerful Legal Notices</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Labour Court & NCLT Representation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12}/></div>
                  <span className="text-xs">Fast-Track Civil Summary Suits</span>
                </div>
              </div>
              <Link href="/contact">
                <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl mt-8 transition-all shadow-md">
                  Get Legal Help Now
                </button>
              </Link>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
              <h4 className="text-xl font-bold mb-6 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>Related Resources</h4>
              <div className="space-y-4">
                {relatedPages.map((page, index) => (
                  <Link key={index} href={page.href} className="block group">
                    <p className="text-sm text-gray-600 group-hover:text-[#D29E0D] transition-colors mb-1">{page.title}</p>
                    <div className="h-0.5 w-full bg-gray-50 group-hover:bg-[#D29E0D]/20 transition-all"></div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-6 border border-[#D29E0D]/20 rounded-2xl bg-[#D29E0D]/5 text-center">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Legal Helpline</p>
              <a href="tel:+918700343611" className="text-xl font-bold text-[#30261C] hover:text-[#D29E0D] transition-colors">
                +91 8700343611
              </a>
              <p className="text-[10px] text-gray-400 mt-2 italic">Free Case Evaluation</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
