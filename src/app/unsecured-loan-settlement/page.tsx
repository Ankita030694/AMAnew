import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import GenericStatesGrid from "@/components/GenericStatesGrid";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What exactly is unsecured loan settlement and how does it work in India?",
    answer: "Unsecured loan settlement is a formal and legal arrangement between a borrower and a lender where the lender agrees to accept a reduced amount as a final payment to close the loan account. This happens when the borrower is facing genuine financial distress and cannot pay the full outstanding balance. Unlike secured loans, unsecured loans like personal loans and credit cards do not have collateral, making the settlement process depend heavily on negotiation and proof of hardship. Once an amount is agreed upon and paid, the bank issues a No Dues Certificate and closes the account."
  },
  {
    question: "Is settling an unsecured loan legal under RBI rules?",
    answer: "Yes, it is entirely legal. The Reserve Bank of India (RBI) provides a framework for banks and NBFCs to manage Non-Performing Assets (NPAs) through One-Time Settlement (OTS) schemes. Banks are encouraged to resolve bad debts to clean up their balance sheets. However, the process must be handled carefully to ensure all legal documentation is in place, which is why having legal representation is often recommended to avoid procedural errors."
  },
  {
    question: "How long do I need to be in default before I can settle?",
    answer: "Lenders typically do not consider settlement offers until a loan has been in default for at least 90 days, at which point it is classified as an NPA. In many cases, the most effective negotiations happen after 6 months of non-repayment, as the bank becomes more willing to recover whatever portion is possible rather than lose the entire amount. However, waiting too long can lead to increased legal pressure, so timing the negotiation correctly is vital."
  },
  {
    question: "Can I settle my credit card debt through this process?",
    answer: "Absolutely. Credit card debt is one of the most common types of unsecured debt settled in India. Because credit cards carry very high interest rates (often exceeding 40% per year), the debt can grow rapidly beyond the borrower's capacity to pay. Banks are often willing to settle for a significant reduction on the total outstanding if they are convinced the borrower has no other way to pay the principal amount."
  },
  {
    question: "What is the typical reduction percentage in an unsecured loan settlement?",
    answer: "While every case is unique, borrowers often see reductions of 30% to 70% of the total outstanding amount. The exact percentage depends on factors like the age of the default, the lender's current policies, your documented financial hardship, and the skill of your negotiators. At AMA Legal Solutions, our goal is to maximize these savings while ensuring the final amount is something the client can realistically manage to pay in one go or a few installments."
  },
  {
    question: "Will my CIBIL score be affected by a settlement?",
    answer: "Yes, settling a loan will impact your credit score. The account will be marked as 'Settled' rather than 'Closed' or 'Paid in Full' in your credit report. This tag remains on your history for seven years and can lower your score. However, a 'Settled' status is significantly better than a 'Default' or 'Written Off' status. Furthermore, your credit score is dynamic; once you are debt-free, you can take steps to rebuild your score over the next 12 to 24 months."
  },
  {
    question: "Can recovery agents harass me if I am in the process of settlement?",
    answer: "Illegal harassment by recovery agents is a violation of RBI guidelines and Supreme Court directives. When you engage a law firm like AMA Legal Solutions, we formally notify the bank of our representation. This usually stops direct harassment because all communication must then go through your legal counsel. If harassment continues, we can file formal complaints and take legal action against the bank and the agencies involved."
  },
  {
    question: "Do I need a lawyer for unsecured loan settlement?",
    answer: "While you can technically negotiate on your own, having a lawyer provides significant advantages. Lawyers understand the legal nuances, know your rights under the law, and can prevent you from being intimidated by bank officials or recovery agents. A lawyer ensures that the settlement letter is legally binding and that you are not exposed to future liabilities after the payment is made. It transforms a lopsided negotiation into a fair legal process."
  },
  {
    question: "What happens if I cannot pay the agreed settlement amount later?",
    answer: "If you fail to pay the agreed amount by the specified deadline, the settlement agreement usually becomes void. The bank will then revert to the original outstanding balance, including all previously waived interest and penalties. This is why it is critical to only agree to a settlement amount and timeline that you are 100% certain you can meet. We work with our clients to ensure the negotiated terms are realistic and sustainable."
  },
  {
    question: "Can I settle a loan that is already in Lok Adalat?",
    answer: "Yes, Lok Adalat is actually an excellent forum for loan settlement. It provides an amicable environment for compromise and once a settlement award is passed in Lok Adalat, it has the same force as a decree from a civil court. It is final and binding, and there is no appeal against it. We often represent our clients in Lok Adalat sessions to ensure they get the best possible terms and the highest level of legal security."
  }
];

// Content sections for the page
const tocSections = [
  { id: "introduction", title: "Introduction" },
  { id: "what-is-settlement", title: "What is Unsecured Settlement?" },
  { id: "types", title: "Common Loan Types" },
  { id: "debt-trap", title: "The Mechanics of the Debt Trap" },
  { id: "why-settle", title: "Why Banks Agree to Settle" },
  { id: "legal-process", title: "The 7-Step Legal Process" },
  { id: "rights", title: "Your Legal Rights" },
  { id: "negotiation", title: "Mastering Negotiation" },
  { id: "credit-impact", title: "CIBIL Score Reality" },
  { id: "rebuilding", title: "Rebuilding Your Life" },
  { id: "lok-adalat", title: "Role of Lok Adalat" },
  { id: "why-ama", title: "Why Choose AMA?" },
  { id: "success-stories", title: "Success Stories" },
  { id: "faqs", title: "FAQs" }
];

export const metadata = {
  title: "Unsecured Loan Settlement India | Expert Legal Debt Relief Guide",
  description: "Struggling with personal loans or credit cards? Learn how unsecured loan settlement works in India. Get expert legal help to reduce debt by 50%+ and stop harassment.",
  keywords: "unsecured loan settlement, personal loan settlement, credit card debt settlement, debt relief india, loan settlement lawyer, settle unsecured loans, cibil score impact, bank settlement negotiation, rbi recovery guidelines",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/unsecured-loan-settlement',
  }
};

export default function UnsecuredLoanSettlementPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Unsecured Loan Settlement", href: "/unsecured-loan-settlement" },
  ];

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
        "name": "Unsecured Loan Settlement",
        "item": "https://www.amalegalsolutions.com/unsecured-loan-settlement"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Unsecured Loan Settlement in India: The Ultimate Legal Guide for Borrowers",
    "description": "Comprehensive guide to settling unsecured loans like personal loans and credit cards in India. Learn the process, legal rights, and credit score impacts.",
    "author": {
      "@type": "Organization",
      "name": "AMA Legal Solutions"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
      }
    },
    "datePublished": "2024-03-13",
    "dateModified": "2024-03-13"
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
    "name": "Unsecured Loan Settlement Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1850"
    }
  };

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section - Matching /services/loan-settlement design */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            {/* Review Snippet */}
            <div className="flex items-center justify-center gap-2 mb-6 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 w-fit mx-auto animate-fade-in">
              <div className="flex text-[#D2A02A]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs md:text-sm font-bold tracking-wider">4.9/5 RATING</span>
              <span className="text-gray-400 text-[10px] md:text-xs">Based on 1,850+ Reviews</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Unsecured <span className="text-[#D2A02A]">Loan Settlement</span> India
            </h1>
            <p className="text-sm md:text-2xl mb-10 max-w-4xl mx-auto text-gray-200 font-medium leading-relaxed">
              Expert legal assistance to settle your personal loans and credit card debts. Reduce your liability by more than 50 percent, eliminate collection harassment, and regain your peace of mind legally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl inline-block text-lg">
                Get Your Free Debt Analysis
              </Link>
              <a href="tel:+918700343611" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full transition-all inline-block text-lg">
                Talk to a Lawyer Now
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <aside className="hidden lg:block sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-6 text-gray-800 border-b pb-3 border-gray-100">In This Guide</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="min-w-0 space-y-12">
               {/* TOC (Mobile) */}
               <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <article className="bg-white p-6 md:p-16 rounded-3xl shadow-sm border border-gray-50 leading-relaxed text-gray-700">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">Navigating the Complexity of Unsecured Debt in the Indian Economy</h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    In the rapidly evolving financial landscape of modern India, the accessibility of credit has reached unprecedented levels. While this democratization of finance has empowered millions to achieve their dreams, it has also created a parallel reality where many find themselves trapped in a cycle of debt that seems impossible to escape. Unsecured loans, by their very nature, carry a higher risk for both the lender and the borrower. Without collateral to back the debt, interest rates often skyrocket, particularly in the event of a default, leading to what is commonly known as a 'debt spiral.'
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    The concept of unsecured loan settlement is frequently misunderstood as a simple waiver or a way to avoid responsibility. In reality, it is a sophisticated legal and financial negotiation tool designed to resolve genuine insolvency issues without the destructive consequences of full scale bankruptcy. It serves as a pragmatic bridge between a borrower's absolute inability to pay and a bank's need to recover at least a portion of its non performing assets. This guide aims to provide an exhaustive, 360 degree view of how unsecured loan settlement works in India, ensuring that you are equipped with the knowledge needed to reclaim your financial future.
                  </p>
                  <p className="mb-10 text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we approach the problem of debt not just as a financial calculation, but as a human crisis that requires legal expertise, empathy, and strategic patience. Our team of lawyers has observed that most borrowers default not out of malice, but due to genuine life altering events such as medical emergencies, job losses, or business failures in a volatile market. We believe that everyone deserves a second chance at financial stability, and our legal settlement process is designed to provide exactly that, while protecting your dignity and rights every step of the way.
                  </p>
                </section>

                {/* What is Unsecured Settlement */}
                <section id="what-is-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8">What is Unsecured Loan Settlement?</h2>
                  <div className="bg-amber-50 border-l-8 border-[#D2A02A] p-8 mb-10 rounded-r-[40px]">
                    <p className="text-lg md:text-xl text-gray-800 italic leading-relaxed">
                      "Unsecured loan settlement is a mutual, legally binding agreement where a lender agrees to accept a lump sum amount—often 30% to 50% of the total outstanding—as final payment to close a debt that has no collateral."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Unlike home loans or car loans where the bank can seize an asset, unsecured loans are based purely on trust and creditworthiness. When that trust is broken due to non-payment, the bank's options are limited to legal recovery or negotiation. A <strong>One Time Settlement (OTS)</strong> is the outcome of these negotiations.
                  </p>
                  <p className="text-lg leading-relaxed mb-10 text-gray-700">
                    From a legal perspective, settlement is a way to discharge a liability. It is recognized under the Indian Contract Act and is encouraged by the RBI as a means for banks to clean up their Non-Performing Assets (NPAs). Once settled, the borrower is legally free from that specific debt obligation, though it leaves a mark on the credit history.
                  </p>
                </section>

                {/* Types Section */}
                <section id="types" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8 font-black">Comprehensive Classification of Unsecured Debts</h2>
                  <p className="mb-10 text-lg leading-relaxed text-gray-700">
                    Each type of unsecured debt has distinct characteristics and bank policies governing its settlement. Understanding these nuances is key to a successful negotiation.
                  </p>
                  <div className="space-y-8 mb-12">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all hover:border-[#D2A02A]/30">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-4 uppercase tracking-wide">1. Personal Loans from Banks and NBFCs</h3>
                      <p className="text-base mb-4 text-gray-700 leading-relaxed">
                        These are fixed-tenure loans with monthly EMIs. When a personal loan defaults, the bank first tries internal recovery, then moves to external agencies, and finally considers a settlement. For personal loans, the settlement amount usually ranges between 35% to 50% of the total outstanding, depending on how long the default has lasted. Older defaults (more than 1 or 2 years) generally get better settlement terms as the bank starts to view the money as a total loss.
                      </p>
                    </div>
                    
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all hover:border-[#D2A02A]/30">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-4 uppercase tracking-wide">2. Credit Card Outstanding Balances</h3>
                      <p className="text-base mb-4 text-gray-700 leading-relaxed">
                        This is the most 'poisonous' form of debt due to monthly compounding interest. In credit card settlements, we often see the highest waiver percentages. Since a large part of the balance is usually interest on interest, banks are often willing to settle for an amount closer to the original principal used on the card.
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all hover:border-[#D2A02A]/30">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-4 uppercase tracking-wide">3. Instant Loan Apps (FinTech Debt)</h3>
                      <p className="text-base mb-4 text-gray-700 leading-relaxed">
                        The rise of FinTech has led to a surge in small-value, high-interest loans. These lenders often use aggressive and sometimes illegal recovery tactics. Settling with these apps requires a firm legal hand to ensure that the harassment stops the moment the settlement is initiated.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Debt Trap Section */}
                <section id="debt-trap" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8">The Anatomy of a Modern Debt Trap</h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    Understanding how a debt trap functions is essential for anyone looking to escape it. In the context of unsecured loans, the trap is often built on two pillars: compounding interest and penal charges. When a borrower misses a single payment, the bank applies a late fee. In the next month, the interest is calculated on the new, higher balance (Principal + previous interest + late fee). This is compounding in its most destructive form.
                  </p>
                  <p className="mb-10 text-lg leading-relaxed text-gray-700">
                    Loan settlement is the strategic intervention that breaks this cycle. By declaring a finality to the debt and negotiating a 'one time' payment, you effectively cut the strings of the debt trap. At AMA Legal Solutions, we don't just solve the financial problem; we help restore the borrower's mental peace by taking over the communication with lenders.
                  </p>
                </section>

                {/* Why Settle Section */}
                <section id="why-settle" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8">Why Banks Agree to Settle Unsecured Loans</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
                        <h4 className="text-xl font-bold mb-4 text-gray-900">1. NPA Provisioning</h4>
                        <p className="text-base text-gray-600 leading-relaxed">Under RBI guidelines, every time a loan becomes an NPA, the bank must set aside a portion of its profits to cover the potential loss. Settling allows them to release these provisions.</p>
                    </div>
                    <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm">
                        <h4 className="text-xl font-bold mb-4 text-gray-900">2. Time Value of Money</h4>
                        <p className="text-base text-gray-600 leading-relaxed">Recovering 50% today is often more valuable than chasing 100% through a 5-year court battle. Banks prefer immediate liquidity to redeploy in fresh loans.</p>
                    </div>
                  </div>
                </section>

                {/* Expanded Process Segment */}
                <section id="legal-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">The Definitive 7-Step Roadmap to Debt Freedom</h2>
                  <div className="space-y-12">
                    {[
                      { step: 1, title: "Deep Debt Audit", desc: "We review all loan documents to find illegal clauses, excessive interest rates, and procedural lapses. We determine your 'True Principal' to negotiate from a position of fact." },
                      { step: 2, title: "Hardship Dossier", desc: "We currate evidence of your financial situation—medical bills, salary cuts, or business loss reports—to prove to the credit committee that your hardship is genuine." },
                      { step: 3, title: "Legal Shield Activation", desc: "We formally notify the bank of our representation. This immediately stops harassment and directs all collection efforts to our legal office." },
                      { step: 4, title: "Multi-Tier Negotiation", desc: "Our experts engage with recovery managers and settlement heads to push for the maximum possible waiver on interest and penalties." },
                      { step: 5, title: "Verification of Terms", desc: "We ensure the settlement letter is authentic and contains no hidden clauses that could allow the bank to reopen the case later." },
                      { step: 6, title: "Monitored Payment", desc: "We guide you to make payments directly to the bank's official account, ensuring you get a valid receipt for every rupee paid." },
                      { step: 7, title: "Closure & NDC", desc: "We push the bank to issue a formal 'No Dues Certificate' and monitor credit bureaus to ensure your status is updated correctly." }
                    ].map((item) => (
                      <div key={item.step} className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-[#D2A02A]/20">{item.step}</div>
                        <div>
                          <h4 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h4>
                          <p className="text-base text-gray-700 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Rights Section */}
                <section id="rights" className="scroll-mt-32">
                   <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8">Deep Dive into Your Legal Protections</h2>
                   <div className="space-y-8 mb-12">
                      <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow">
                         <h4 className="text-xl font-bold mb-4 text-[#D2A02A]">The Right against Harassment (RBI Code)</h4>
                         <p className="text-base text-gray-700 leading-relaxed">The RBI explicitly forbids banks from using harassment, intimidation, or coercive recovery. Agents cannot call you before 8 AM or after 7 PM. Any violation is grounds for a complaint to the Banking Ombudsman.</p>
                      </div>
                      <div className="p-8 border border-gray-100 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow">
                         <h4 className="text-xl font-bold mb-4 text-[#D2A02A]">The Right to Privacy</h4>
                         <p className="text-base text-gray-700 leading-relaxed">Your debt is a private contract. Banks cannot tell your neighbors, colleagues, or relatives about your financial situation. Public shaming is a violation of your fundamental rights.</p>
                      </div>
                   </div>
                </section>

                {/* Credit Impact Section */}
                <section id="credit-impact" className="scroll-mt-28">
                   <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight font-black">Demystifying the CIBIL Score and the 'Settled' Tag</h2>
                   <p className="mb-8 text-lg text-gray-700 leading-relaxed">Yes, a settlement will leave a mark. Your CIBIL report will show the status as 'Settled.' However, this is not a permanent death sentence. By settling, you stop the continuous drop in your score caused by active default.</p>
                   <div className="flex flex-col md:flex-row gap-8 mb-10 text-center">
                      <div className="flex-1 p-8 bg-red-50 rounded-3xl border border-red-100">
                         <h5 className="font-black text-red-900 uppercase mb-4 text-lg tracking-widest">Active Default</h5>
                         <p className="text-red-800 text-base">Ongoing score destruction. Every month score drops further. No lender will touch you.</p>
                      </div>
                      <div className="flex-1 p-8 bg-green-50 rounded-3xl border border-green-100">
                         <h5 className="font-black text-green-900 uppercase mb-4 text-lg tracking-widest">Settled Status</h5>
                         <p className="text-green-800 text-base">Bleeding stops. Score stabilizes. Chapter closed. Rebuilding can begin immediately.</p>
                      </div>
                   </div>
                </section>

                {/* Lok Adalat Segment */}
                <section id="lok-adalat" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">Lok Adalat: The Judicial Path to Debt Recovery</h2>
                  <p className="mb-8 text-lg leading-relaxed text-gray-700">Many people fear a 'Lok Adalat' notice, but it is actually a gift. It is an opportunity to settle your debt in an environment sanctioned by the judiciary, providing the highest level of legal finality.</p>
                  <div className="bg-[#1a202c] text-white p-10 rounded-[40px] shadow-2xl mb-12 border border-[#D2A02A]/20">
                     <h4 className="text-xl font-bold mb-6 text-[#D2A02A]">Benefits of Lok Adalat:</h4>
                     <ul className="space-y-6 text-lg">
                        <li className="flex gap-4"><span className="text-[#D2A02A]">✅</span> <strong>Decree Power:</strong> The award has the same weight as a civil court decree. It is final and cannot be appealed.</li>
                        <li className="flex gap-4"><span className="text-[#D2A02A]">✅</span> <strong>Interest Waivers:</strong> Judges often put pressure on banks to focus on principal and waive excessive interest.</li>
                        <li className="flex gap-4"><span className="text-[#D2A02A]">✅</span> <strong>Finality:</strong> Payment as per the award means the bank can never reopen that specific loan again.</li>
                     </ul>
                  </div>
                </section>

                {/* Success Stories */}
                <section id="success-stories" className="scroll-mt-32">
                   <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-12 text-center uppercase tracking-tighter">Real Stories of Financial Resurrection</h2>
                  <div className="space-y-12">
                     <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative group overflow-hidden">
                        <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-[#D2A02A] text-white px-6 py-1 rounded-full font-bold shadow-lg">60% Waiver</div>
                        <h4 className="text-xl font-bold mb-4 text-gray-900">S. Kumar: Escaping 12 Lakhs Credit Debt</h4>
                        <p className="text-base text-gray-700 italic border-l-4 border-gray-100 pl-6 py-2">"I had three credit cards and was drowning. The calls never stopped. AMA Legal Solutions took over, stopped the calls in 48 hours, and settled everything for 4.8 lakhs in 4 months. I am debt free today."</p>
                     </div>
                     <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative group overflow-hidden">
                        <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-[#D2A02A] text-white px-6 py-1 rounded-full font-bold shadow-lg">55% Waiver</div>
                        <h4 className="text-xl font-bold mb-4 text-gray-900">R. Mehra: Personal Loan Resolution</h4>
                        <p className="text-base text-gray-700 italic border-l-4 border-gray-100 pl-6 py-2">"I lost my job and couldn't pay HDFC. They threatened me with section 138. The team at AMA responded legally and settled 7.5 lakhs for 3.2 lakhs. Their legal knowledge saved my future."</p>
                     </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <section id="faqs" className="scroll-mt-32 border-t pt-20 border-gray-100">
                  <h2 className="text-xl md:text-5xl font-black text-gray-900 mb-16 text-center">Your Burning Questions, Answered</h2>
                  <div className="grid grid-cols-1 gap-12">
                    {faqs.map((faq, index) => (
                      <div key={index} className="group pb-12 border-b border-gray-50 last:border-0 hover:border-[#D2A02A]/30 transition-all duration-500">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-start group-hover:text-[#D2A02A] transition-colors leading-tight">
                          <span className="text-white mr-6 flex-shrink-0 bg-gray-900 w-12 h-12 rounded-2xl flex items-center justify-center font-black group-hover:bg-[#D2A02A] transition-colors shadow-lg">?</span>
                          {faq.question}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed pl-16">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#0d1117] rounded-[60px] p-8 md:p-20 text-center text-white mt-20 relative overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-[#D2A02A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <span className="inline-block bg-[#D2A02A]/10 text-[#D2A02A] px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-[#D2A02A]/20">Your New Beginning Starts Here</span>
                        <h2 className="text-2xl md:text-5xl font-black mb-8 leading-tight">Reclaim Your Life from the Shadows of Debt</h2>
                        <p className="text-lg md:text-xl opacity-70 mb-12 leading-relaxed">
                            Every day you wait, the interest grows and the pressure mounts. Take the first legal step toward a debt free future today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="bg-[#D2A02A] hover:bg-white hover:text-gray-900 text-white font-black py-5 px-14 rounded-full transition-all shadow-2xl text-xl transform hover:-translate-y-2">
                                Book Your Free Strategy Session
                            </Link>
                            <a href="tel:+918700343611" className="bg-white/5 hover:bg-white/10 text-white font-black py-5 px-14 rounded-full transition-all border border-white/20 text-xl backdrop-blur-sm">
                                Call Helpline
                            </a>
                        </div>
                    </div>
                </section>
              </article>
            </main>

            {/* Right Sidebar - CTA & Related (Desktop) */}
            <aside className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">Speak to our senior settlement lawyers now.</p>
                  <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-xl font-bold hover:bg-[#b88a22] transition-colors mb-4">
                    Call 8700343611
                  </a>
                  <Link href="/contact" className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-xl font-bold hover:bg-[#D2A02A] hover:text-white transition-colors">
                    Request Callback
                  </Link>
                  
                  {/* App Store Links */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-4">Download Our App</p>
                    <div className="flex flex-col gap-3">
                      <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image src="/newAssets/appstore.svg" alt="Google Play" width={140} height={40} className="w-full h-auto" />
                      </Link>
                      <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image src="/newAssets/playstore.svg" alt="App Store" width={140} height={40} className="w-full h-auto" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Related Pages */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-4">Related Services</h3>
                  <ul className="space-y-4 text-sm">
                    <li><Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center group"><span className="mr-2 group-hover:translate-x-1 transition-transform">›</span> Loan Settlement Hub</Link></li>
                    <li><Link href="/personal-loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center group"><span className="mr-2 group-hover:translate-x-1 transition-transform">›</span> Personal Loan Guide</Link></li>
                    <li><Link href="/credit-card-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center group"><span className="mr-2 group-hover:translate-x-1 transition-transform">›</span> Credit Card Relief</Link></li>
                    <li><Link href="/services/debt-consolidation" className="text-gray-600 hover:text-[#D2A02A] flex items-center group"><span className="mr-2 group-hover:translate-x-1 transition-transform">›</span> Debt Consolidation</Link></li>
                  </ul>
                </div>
            </aside>
          </div>

          {/* Banks Grid - Same as /services/loan-settlement */}
          <div className="mt-24">
            <section className="my-10">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center">
                We Settle Unsecured Loans From All Major Lenders
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {["SBI", "HDFC", "ICICI", "Axis Bank", "Kotak Mahindra", "Bajaj Finserv", "IDFC First", "Yes Bank", "IndusInd", "Standard Chartered", "Citibank", "Amex"].map((bank) => (
                  <div key={bank} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:border-[#D2A02A]/20 transition-all duration-300">
                    <span className="text-gray-900 font-bold">{bank}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Regional Grid */}
          <div className="mt-24">
            <GenericStatesGrid serviceName="Unsecured Loan Settlement" servicePath="unsecured-loan-settlement" />
          </div>
        </div>
      </div>
    </>
  );
}
