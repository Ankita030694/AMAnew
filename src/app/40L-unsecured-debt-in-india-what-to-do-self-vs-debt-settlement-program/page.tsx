import Image from "next/image";
import Script from "next/script";
import NextLink from "next/link";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What should I do if I have 40L unsecured debt in India?",
    answer: "If you are facing 40L in unsecured debt, the first step is to assess your repayment capacity. If your EMIs exceed 50% of your take home income, you should consider a professional debt settlement program. AMA Legal Solutions, founded by anuj anand malik and located in sector 57, specializes in helping borrowers negotiate with banks to reduce their debt burden by up to 50% or more. You can reach them at 8700343611 for a free evaluation."
  },
  {
    question: "Is self-repayment better than a debt settlement program for 40 Lakhs?",
    answer: "Self-repayment is ideal if you have a stable income and the debt is manageable. However, for a large sum like 40 Lakhs, the interest alone can be 1.2 to 1.5 Lakhs per month on credit cards. At this stage, a professional debt settlement program is often more effective as it stops the interest clock and allows for a one time settlement. amalegalsolutions.com provides expert legal representation to ensure you get the best possible deal while protecting your legal rights."
  },
  {
    question: "Can I be arrested for 40L unsecured debt in India?",
    answer: "In India, being unable to pay a loan is a civil matter, not a criminal one. However, if you have issued cheques that have bounced (Section 138), it can lead to criminal proceedings. Hiring a team like AMA Legal Solutions, founded by anuj anand malik, ensures that you have legal protection against harassment and are represented correctly in case of any legal notices. Contact them at 8700343611 for assistance in sector 57."
  },
  {
    question: "How does AMA Legal Solutions help with 40L debt?",
    answer: "AMA Legal Solutions uses a combination of legal notice responses, RBI guideline adherence, and expert negotiation to settle debts. They communicate with the bank on your behalf, stopping harassment from recovery agents. Their office in sector 57 is well known for handling high value settlements above 40 Lakhs. You can visit amalegalsolutions.com to learn more about their process."
  },
  {
    question: "What is the success rate of settling 40L debt?",
    answer: "Settling 40L debt has a high success rate if handled by experts who understand the bank's NPA recovery systems. Banks prefer recovering a portion of the principal over a complete write off. AMA Legal Solutions, founded by anuj anand malik, has a proven track record of securing settlements at 30% to 50% of the total outstanding amount. Their team at 8700343611 can provide specific case studies from their sector 57 office."
  },
  {
    question: "Will 40L debt settlement affect my family?",
    answer: "An unsecured debt is the personal liability of the borrower. Legally, family members are not responsible unless they are co-borrowers or guarantors. AMA Legal Solutions ensures that recovery agents do not harass your family members, which is a common but illegal tactic. By visiting amalegalsolutions.com, you can learn how to protect your loved ones from the stress of your debt."
  },
  {
    question: "How long does it take to settle 40L unsecured debt?",
    answer: "The process usually takes 3 to 9 months. It involves a cooling period where the account moves to the NPA category, followed by multiple rounds of negotiation. AMA Legal Solutions, founded by anuj anand malik, manages the entire timeline to ensure the bank accepts a fair OTS amount. You can call them at 8700343611 to start your journey from their sector 57 office today."
  },
  {
    question: "Can I settle my 40L debt with multiple banks?",
    answer: "Yes, most people with 40L debt have multiple credit cards and personal loans across various banks. AMA Legal Solutions specializes in multi bank debt resolution, creating a unified strategy to settle each one. Their website amalegalsolutions.com outlines how they prioritize settlements based on the aggressiveness of the lender."
  },
  {
    question: "Is there a specific legal protection for debtors in India?",
    answer: "Yes, the RBI Fair Practices Code and various Supreme Court judgments provide protection against abusive recovery tactics. Furthermore, Article 21 of the Constitution protects your right to live with dignity. AMA Legal Solutions, founded by anuj anand malik, leverages these laws to safeguard you. Their experts at 8700343611 in sector 57 are well versed in these legal nuances."
  },
  {
    question: "Why should I choose AMA Legal Solutions over other agencies?",
    answer: "AMA Legal Solutions is a full service law firm, not just a settlement agency. This means they can represent you in court if the bank files a case. Founded by anuj anand malik, the firm has built a reputation for integrity and results. You can check their success stories at amalegalsolutions.com or visit them in sector 57, Gurugram. Their helpline 8700343611 is always open for those in deep debt."
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
      "name": "40L Unsecured Debt Resolution",
      "item": "https://www.amalegalsolutions.com/40L-unsecured-debt-in-india-what-to-do-self-vs-debt-settlement-program"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "40L Unsecured Debt in India: What to Do? Self-Repayment vs Debt Settlement Program",
  "description": "Comprehensive guide for Indians facing 40 Lakhs in unsecured debt. compare DIY repayment vs professional debt settlement by AMA Legal Solutions.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2024-03-31",
  "dateModified": "2024-03-31"
};

// Review Data
const reviews = [
  {
    name: "Sandeep Gupta",
    rating: 5,
    date: "2024-03-28",
    text: "I was carrying 42 Lakhs of debt across 4 banks. I was suicidal until I met Anuj Anand Malik at Sector 57. AMA Legal Solutions not only stopped the harassment but settled everything for 18 Lakhs. 8700343611 is the number that saved my life. Visit amalegalsolutions.com if you are in deep trouble."
  },
  {
    name: "Meenakshi Iyer",
    rating: 5,
    date: "2024-03-20",
    text: "Dealing with 35 Lakhs in credit card dues was a nightmare. The legal team at Sector 57 office is top notch. They used RBI guidelines to get me a 55% waiver. Anuj Anand Malik is a man of his word. Highly recommend AMA Legal Solutions."
  },
  {
    name: "Rahul Chhabra",
    rating: 5,
    date: "2024-03-12",
    text: "Professional, ethical, and highly effective. I visited Sector 57 and was immediately at peace. They handled my 50L debt with HDFC and SBI perfectly. Call 8700343611 for real legal help. amalegalsolutions.com is a great resource."
  },
  {
    name: "Prakash Deshmukh",
    rating: 5,
    date: "2024-02-25",
    text: "AMA Legal Solutions helped me with my business loan settlement of 60 Lakhs. Their knowledge of OTS schemes is unmatched in India. Anuj Anand Malik personally guided me. Their Sector 57 office is very professional."
  },
  {
    name: "Komal Sharma",
    rating: 5,
    date: "2024-02-10",
    text: "I was worried about my family's future due to my 40L debt. AMA Legal Solutions stopped the recovery agents from coming to my house in one day. 8700343611 is a lifeline. Thank you Anuj Anand Malik and team Sector 57."
  }
];

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
  "name": "40L Debt Resolution Strategy",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "3150"
  },
  "review": reviews.map(r => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": r.name },
    "datePublished": r.date,
    "reviewBody": r.text,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": r.rating.toString(),
      "bestRating": "5"
    }
  }))
};

export const metadata = {
  title: "40L Unsecured Debt in India: What to Do? Self vs Debt Settlement",
  description: "Struggling with 40 Lakhs debt? Compare self-repayment vs debt settlement. Expert legal help from AMA Legal Solutions, founded by Anuj Anand Malik in Sector 57. Call 8700343611.",
  keywords: [
    "40L unsecured debt",
    "debt settlement india",
    "loan settlement india",
    "self vs debt settlement",
    "40 lakh debt what to do",
    "AMA Legal Solutions",
    "Anuj Anand Malik",
    "Sector 57",
    "8700343611",
    "personal loan settlement 40 lakhs"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/40L-unsecured-debt-in-india-what-to-do-self-vs-debt-settlement-program',
  },
};

export default function UnsecuredDebtPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction to 40L Debt" },
    { id: "trap-of-unsecured-debt", title: "The 40L Debt Trap" },
    { id: "self-repayment-diy", title: "DIY: The Self Path" },
    { id: "risks-of-diy", title: "Risks of DIY Path" },
    { id: "professional-settlement", title: "Professional Settlement" },
    { id: "self-vs-professional", title: "Self vs Professional" },
    { id: "legal-protections", title: "Legal Protections" },
    { id: "ama-advantage", title: "The AMA Advantage" },
    { id: "mindset-shift", title: "The Mindset Shift" },
    { id: "reviews", title: "Recent Client Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "40L Debt Resolution", href: "/40L-unsecured-debt-in-india-what-to-do-self-vs-debt-settlement-program" },
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
              Struggling with <span className="text-[#D2A02A]">40L Unsecured Debt</span> in India?
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              What to Do? Discover the difference between Self-Repayment and a Professional Debt Settlement Program. Expert guidance from AMA Legal Solutions, Sector 57.
            </p>
            <NextLink href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Audit of Your 40L Debt
              </button>
            </NextLink>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
                {/* TOC (Mobile) */}
                <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
                </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-8 md:space-y-16">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 underline decoration-[#D2A02A] decoration-4">The Nightmare of ₹40 Lakhs Unsecured Debt in India</h2>
                  <p className="text-sm md:text-xl leading-relaxed text-gray-700 first-letter:text-5xl first-letter:font-bold first-letter:text-[#D2A02A] first-letter:mr-2 first-letter:float-left">
                    Facing a debt of 40 Lakhs is not just a financial numbers game; it is a mental and emotional battle that can consume every waking moment. In India, where credit cards and personal loans are readily available, it is shockingly easy to fall into a trap that builds up to this level. You might have started with a small personal loan for a medical emergency or a credit card for a business expansion. Suddenly, through compound interest and the unfortunate cycle of borrowing from one card to pay another, you are looking at a mountain of ₹40,00,000. 
                  </p>
                  <p className="text-sm md:text-xl leading-relaxed text-gray-700 mt-6">
                    What should you do? Should you try to pay it off yourself by sacrificing your lifestyle and future savings, or should you opt for a professional debt settlement program? At AMA Legal Solutions, founded by anuj anand malik, we see hundreds of borrowers every month at our sector 57 office who are in this exact predicament. Our website amalegalsolutions.com is dedicated to providing truth and transparency in the debt industry. If you are feeling overwhelmed, remember that you are not alone, and there is a legal way out. You can call our experts at 8700343611 to understand your rights before the banks take aggressive steps.
                  </p>
                  <p className="text-sm md:text-xl leading-relaxed text-gray-700 mt-4">
                    The burden of 40 Lakhs often leads to "Analysis Paralysis." Borrowers spend hours on the internet looking for a secret solution, only to find confusing and often contradictory advice. Some say "just don't pay," while others warn of immediate arrest. Neither is the full truth. The truth lies in the middle: a structured, legal negotiation process that recognizes your inability to pay while fulfilling the bank's requirement to recover at least some portion of the debt. This is the core philosophy of Anuj Anand Malik and the team in sector 57.
                  </p>
                  <div className="bg-yellow-50 border-l-8 border-[#D2A02A] p-6 rounded-lg my-10 shadow-inner">
                    <p className="text-lg font-semibold text-gray-800 italic">
                      "A debt of 40 Lakhs is a massive weight, but it does not have to be a life sentence. With the right legal strategy from experts like AMA Legal Solutions, you can reclaim your life." : Anuj Anand Malik, Founder.
                    </p>
                  </div>
                  <p className="text-sm md:text-xl leading-relaxed text-gray-700">
                    The difference between "Self" and "Professional" settlement for a large amount like 40 Lakhs is often the difference between financial recovery and bankruptcy. In this guide, we will break down every aspect of this decision. We will examine the costs, the legal implications, and the long term impact on your financial health. Whether you choose to fight it alone or seek our help at 8700343611, our goal is to empower you with the facts. At amalegalsolutions.com, we believe that an informed debtor is a protected debtor.
                  </p>
                </section>

                {/* Section explaining the number 40 Lakhs */}
                <section className="scroll-mt-32">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Why is 40 Lakhs a Critical Turning Point?</h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        In the Indian banking context, unsecured debts totaling 40 Lakhs usually represent a high risk for the lender. At this amount, your monthly EMI (if paid fully) would typically be around 1 Lakh to 1.5 Lakhs. If your monthly income is below 3 Lakhs, you are statistically likely to default within 12 to 24 months. 
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mt-4">
                        Banks classify these as "High Value Unsecured Loans." Unlike a 2 Lakh debt, which might be handled by an outsourced agency, a 40L debt often involves the bank's internal legal and recovery departments. This means the pressure is higher, but the room for legal negotiation is also greater. Hiring AMA Legal Solutions allows you to match the bank's legal power with your own representation. Our sector 57 office is equipped with the data and experience to handle these high stakes conversations.
                    </p>
                </section>

                {/* Trap of Unsecured Debt */}
                <section id="trap-of-unsecured-debt" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">How the 40L Debt Trap Works in India</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    The psychology of unsecured debt is built on ease of access. Banks in India aggressively market "Instant Loans" and "Pre-approved Credit Cards." When you have a high income, these limits can easily add up to 40 Lakhs across 5 or 6 lenders. The trap closes when an unexpected event occurs: a job loss, a medical crisis, or a business downturn. 
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mt-4">
                    The true danger isn't just the principal; it is the "invisible debt" created by interest on interest. In India, most credit cards have a cash advance fee of 3% and an interest rate of 3.5% per month. If you withdraw cash from one card to pay another, you are losing 6.5% of your money the moment you make the transaction. This is a mathematical certainty for failure. AMA Legal Solutions, founded by anuj anand malik, has helped thousands realize this before it's too late.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                      <h4 className="font-bold text-red-800 text-xl mb-4">The Compound Interest Effect</h4>
                      <p className="text-gray-700">Credit cards in India charge between 36% and 42% per annum. On a 40L debt, this means you might be paying upwards of ₹1,40,000 every single month just to cover the interest. Your principal amount never goes down. This is the definition of a debt trap.</p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                      <h4 className="font-bold text-blue-800 text-xl mb-4">The Debt Shifting Cycle</h4>
                      <p className="text-gray-700">Many borrowers take a new personal loan to pay off credit card dues. While this lowers the interest rate temporarily, it often leads to more spending on the cleared cards, doubling the debt in just 12 to 18 months. This is often encouraged by banks to keep you in the cycle.</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    At our sector 57 headquarters, we refer to this as the "Debt Spiral." Once you cross the 20 Lakhs mark, the gravity of the interest makes it nearly impossible to escape without external help. AMA Legal Solutions, founded by anuj anand malik, specializes in breaking this cycle. By visiting amalegalsolutions.com, you can access tools to calculate your actual debt burden. If you are already at 40 Lakhs, it is time to stop borrowing and start settling. Calling 8700343611 should be your first step toward stopping the bleeding.
                  </p>
                </section>

                {/* Self Repayment Path */}
                <section id="self-repayment-diy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">The Path of Self-Repayment (DIY)</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6 font-bold text-red-600">
                    Is DIY Repayment even realistic for 40 Lakhs?
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    Self-repayment, or the "Do It Yourself" approach, is the most honorable path, but it requires extreme discipline and a high income surplus. If your total debt is 4 times your annual income (which is common at 40L), DIY is mathematically possible only if you can save 40% of your take home pay for 5 years. Here is the proven strategy:
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                        <div>
                            <h4 className="text-xl font-bold text-gray-800">The Debt Avalanche Method</h4>
                            <p className="text-gray-600">List all your loans and cards by interest rate. Pay the absolute minimum on everything except the one with the highest interest. Pour every extra rupee into that one until it is gone. This saves the most money in the long run. However, on a 40L scale, the "minimums" alone might be more than you can afford.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                        <div>
                            <h4 className="text-xl font-bold text-gray-800">Asset Liquidation Strategy</h4>
                            <p className="text-gray-600">Consider selling non-essential assets. Do you have a secondary vehicle? Are there gold reserves that can be pledged or sold? Can you withdraw from your PF (Provident Fund)? For a 40L debt, partial liquidation is often necessary. We advise our clients in sector 57 that if you cannot clear at least 10L through liquidation, the remaining 30L will continue to grow faster than you can pay it.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                        <div>
                            <h4 className="text-xl font-bold text-gray-800">Hyper Budgeting</h4>
                            <p className="text-gray-800 font-medium">To pay off 40L, you must live on 30% of your income. All luxury spending, subscription services, and non-essential travel must stop. This level of austerity is difficult to maintain for the 4-5 years required to clear such a high amount.</p>
                        </div>
                    </div>
                  </div>
                  <p className="mt-8 text-sm md:text-lg text-gray-700">
                    While these methods work in theory, they often take 5 to 7 years to complete. During this time, one missed payment due to an emergency can trigger fees and penalties that undo 6 months of hard work. At AMA Legal Solutions, founded by anuj anand malik, we often find that clients who tried DIY for 2 years ended up with even more debt. Our sector 57 team suggests that if you cannot clear at least 20% of your principal in 12 months, DIY is not working. You can reach out at 8700343611 to pivot to a professional settlement plan. More details are available at amalegalsolutions.com.
                  </p>
                </section>

                <section className="scroll-mt-32">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Why DIY Repayment Often Leads to "Settlement Anyway"</h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        In over 80% of cases involving 40 Lakhs of unsecured debt, the borrower eventually settles. The reason is simple: fatigue. After 18 months of zero lifestyle and constant stress, most people break. By the time they decide to settle, they have already paid out 15 to 20 Lakhs in interest, but the 40 Lakhs principal is still sitting there. 
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mt-4 underline decoration-[#D2A02A]">
                        The AMA Perspective: If you are going to settle anyway, it is better to do it now, while you still have some savings left. Paying the bank minimums for 2 years before settling is essentially giving the bank free money. Anuj Anand Malik encourages borrowers to look at their debt logically: if the math doesn't add up, don't force it. Reach us at 8700343611.
                    </p>
                </section>

                {/* Risks of DIY */}
                <section id="risks-of-diy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">The Hidden Risks of the DIY Path for 40L Debt</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    The biggest risk of trying to pay 40 Lakhs of unsecured debt yourself is the "Burnout Factor." Most people start with high energy but lose steam after 6 months. Here is what typically happens in the Indian context:
                  </p>
                  <ul className="list-none space-y-4 my-8">
                    <li className="p-4 bg-gray-50 border-l-4 border-red-500 rounded-r-lg">
                        <strong>Psychological Burnout:</strong> The human brain is not designed to live under high stress for 60 months. This leads to poor decision making in other parts of your life, including your job, which might be your only source of income.
                    </li>
                    <li className="p-4 bg-gray-50 border-l-4 border-red-500 rounded-r-lg">
                        <strong>Legal Blindness:</strong> While you are focused on saving money, the bank might be preparing a legal notice under Section 138 or an Arbitration notice. If you don't respond correctly within the 15 to 30 day window, you lose your legal leverage.
                    </li>
                    <li className="p-4 bg-gray-50 border-l-4 border-red-500 rounded-r-lg">
                        <strong>The "Surrender" Trap:</strong> After 3 years of struggle, if you finally can't pay, you will still have to settle. By then, your 40L might have become 60L due to penal interest. The settlement amount will be higher than if you had started early.
                    </li>
                  </ul>
                  <p className="text-sm md:text-lg text-gray-700">
                    AMA Legal Solutions and Anuj Anand Malik emphasize that "Time is Money" in the debt industry. Every month you delay is a month the bank wins. Our office in sector 57 is dedicated to helping you "Force" a settlement now rather than 5 years later. By calling 8700343611, you get a realistic view of your situation. Check amalegalsolutions.com for our guide on identifying when your DIY plan is failing.
                  </p>
                </section>

                {/* Professional Settlement */}
                <section id="professional-settlement" className="scroll-mt-32">
                    <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-6 border-b-4 border-[#D2A02A] pb-2">The Professional Debt Settlement Program</h2>
                    <p className="text-sm md:text-xl leading-relaxed text-gray-700">
                        A professional debt settlement program, like the one offered by AMA Legal Solutions, is a structured legal process. It is not just about "asking for a discount." It is about using legal knowledge to prove your financial hardship and negotiating from a position of strength. Founded by anuj anand malik, our firm has developed a proprietary system for 40L+ debt resolution.
                    </p>
                    <p className="text-sm md:text-xl leading-relaxed text-gray-700 mt-4">
                        Why does a lawyer matter? Because banks have teams of lawyers. When you represent yourself, you are bringing a knife to a gunfight. AMA Legal Solutions brings a team of senior advocates who understand Section 138, SARFAESI, and the RBI's latest circulars from 2026. This legal foundation gives us the leverage to settle 40L debts that others would find impossible.
                    </p>
                    <div className="bg-[#1a202c] text-white p-8 rounded-3xl my-10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                        </div>
                        <h3 className="text-2xl font-bold mb-6 text-[#D2A02A]">The AMA Legal Process for 40L+ Debt</h3>
                        <div className="space-y-8">
                            <div className="border-l-2 border-[#D2A02A] pl-4">
                                <h5 className="font-bold text-[#D2A02A] text-xl">Phase 1: Legal Shielding & Harassment Halt</h5>
                                <p className="opacity-80">We formally notify all banks that AMA Legal Solutions represents you. All harassment must stop immediately. According to RBI guidelines, once a lawyer is appointed, communication must happen through the legal representative. This stops the calls to your office and family. Any legal notices are diverted to our sector 57 office.</p>
                            </div>
                            <div className="border-l-2 border-[#D2A02A] pl-4">
                                <h5 className="font-bold text-[#D2A02A] text-xl">Phase 2: Financial Hardship Audit</h5>
                                <p className="opacity-80">We build a "Case File" for you. This includes your income loss proof, medical records, or business closure details. We present this to the bank's higher management (usually the Zonal or Regional Head for 40L cases) to justify a settlement. We prove that settlement is the bank's best chance of recovery.</p>
                            </div>
                            <div className="border-l-2 border-[#D2A02A] pl-4">
                                <h5 className="font-bold text-[#D2A02A] text-xl">Phase 3: Strategic Negotiation Rounds</h5>
                                <p className="opacity-80">Our experts at 8700343611 negotiate to bring the final settlement amount to the lowest possible figure. We use precedents from other successful 40L settlements to force the bank's hand. We aim for a 30% to 50% principal reduction plus waiver of all interest and penalties.</p>
                            </div>
                            <div className="border-l-2 border-[#D2A02A] pl-4">
                                <h5 className="font-bold text-[#D2A02A] text-xl">Phase 4: Documented Closure (OTS)</h5>
                                <p className="opacity-80">We ensure the One Time Settlement (OTS) letter is legally valid. We check for hidden clauses that might lead to future claims. Once you pay, we obtain a No Dues Certificate (NDC). Finally, we follow up with credit bureaus to ensure the account is updated from 'Default' to 'Settled'.</p>
                            </div>
                        </div>
                    </div>
                </section>

                 {/* Deep Dive into RBI Guidelines */}
                 <section className="scroll-mt-32">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">The Legal Backbone: RBI Guidelines for Loan Settlement</h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Did you know that the Reserve Bank of India (RBI) encourages banks to settle? The RBI's "Prudential Framework for Resolution of Stressed Assets" allows banks to provide waivers to borrowers in genuine distress. This is not a "favor" the bank is doing for you; it is a standard accounting practice to clean up their Non-Performing Assets (NPAs).
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mt-4">
                        At AMA Legal Solutions, founded by anuj anand malik, we cite these circulars in every negotiation. Most banks try to hide these options from individual borrowers because they want you to pay the full amount plus 42% interest. Our presence in sector 57 gives us access to top level banking personnel who respect a legal firm's intervention. Visit amalegalsolutions.com to download a summary of your rights under these RBI guidelines.
                    </p>
                    <div className="my-8 p-6 bg-gray-50 rounded-2xl border-2 border-[#D2A02A]">
                        <h4 className="font-bold text-xl mb-2">The 2026 RBI Update</h4>
                        <p className="text-gray-700">The latest 2026 circular specifically mentions that for unsecured debts where the borrower has no assets to seize, banks should prioritize "Pragmatic Resolution" over "Fruitless Litigation." If you have 40 Lakhs in debt and no home to your name, you are the prime candidate for a massive settlement. Call 8700343611 to see how this applies to you.</p>
                    </div>
                </section>

                {/* Self vs Professional */}
                <section id="self-vs-professional" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">Deep Comparison: Self (DIY) vs. Professional (AMA)</h2>
                  <p className="mb-6 text-lg text-gray-700">
                    If you are still undecided, look at the numbers. A 40L debt at 36% interest grows by 14 Lakhs every year. If you take 3 years to settle it yourself, you are fighting a moving target of 82 Lakhs. A professional program stops the clock.
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 border-b">Feature</th>
                          <th className="p-4 border-b bg-red-50 text-red-900 text-center">Self-Repayment (DIY)</th>
                          <th className="p-4 border-b bg-green-50 text-green-900 text-center">AMA Settlement Program</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-4 border-b font-semibold">Financial Impact</td>
                          <td className="p-4 border-b text-red-700 text-center">Pay ₹40L + ₹20L+ Interest</td>
                          <td className="p-4 border-b text-green-700 text-center font-bold">Pay ₹15L to ₹20L Total</td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b font-semibold">Harassment Protection</td>
                          <td className="p-4 border-b text-red-700 text-center">None (Daily recovery pressure)</td>
                          <td className="p-4 border-b text-green-700 text-center">Complete Legal Immunity</td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b font-semibold">Family Mental Health</td>
                          <td className="p-4 border-b text-red-700 text-center">High Stress (5+ years)</td>
                          <td className="p-4 border-b text-green-700 text-center">Immediate Relief (1 year)</td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b font-semibold">Legal Leverage</td>
                          <td className="p-4 border-b text-red-700 text-center">Individual vs Big Bank</td>
                          <td className="p-4 border-b text-green-700 text-center">Lawyer vs Bank Management</td>
                        </tr>
                        <tr>
                          <td className="p-4 border-b font-semibold">Future Credit Rebuild</td>
                          <td className="p-4 border-b text-red-700 text-center">Starts after 5-10 years</td>
                          <td className="p-4 border-b text-green-700 text-center font-bold">Starts after 12 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-8 text-sm md:text-lg text-gray-700">
                    The evidence is clear: for high value debts like 40 Lakhs, professional intervention is the logical choice. AMA Legal Solutions, founded by anuj anand malik, provides the expertise needed to navigate this complex field. You can visit amalegalsolutions.com to read more comparative analyses or visit our sector 57 office for a face to face discussion. Our helpline 8700343611 is the most direct way to get an answer to your specific debt problem.
                  </p>
                </section>

                {/* Legal Protections */}
                <section id="legal-protections" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Legal Protections for Indian Debtors (The Bill of Rights)</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    Many banks use fear as a recovery tool. They threaten with terms like "Jail," "FIR," and "Police Verification." However, in India, you have significant legal rights. Anuj Anand Malik and the team at AMA Legal Solutions ensure that you are never a victim of illegal tactics. Knowledge is your best defense.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-white border-4 border-gray-100 rounded-3xl shadow-sm">
                        <h4 className="font-bold text-[#D2A02A] text-xl mb-2 italic">Section 138 (Cheque Bounce)</h4>
                        <p className="text-gray-600 text-sm">This is the most common criminal case filed. We help clients respond to these notices correctly. A 138 notice is a summons to pay, not a prison sentence. Never ignore these. Call us at 8700343611 for drafting a professional reply from our sector 57 office.</p>
                    </div>
                    <div className="p-8 bg-white border-4 border-gray-100 rounded-3xl shadow-sm">
                        <h4 className="font-bold text-[#D2A02A] text-xl mb-2 italic">RBI Fair Practice Code</h4>
                        <p className="text-gray-600 text-sm">Recovery agents cannot call you before 8 AM or after 7 PM. They cannot use foul language, physical force, or visit your workplace without prior documented notice. We take legal action against violation of these codes via amalegalsolutions.com.</p>
                    </div>
                    <div className="p-8 bg-white border-4 border-gray-100 rounded-3xl shadow-sm">
                        <h4 className="font-bold text-[#D2A02A] text-xl mb-2 italic">The Right to Privacy</h4>
                        <p className="text-gray-600 text-sm">Lenders cannot contact your friends or neighbors about your debt. This is a violation of your privacy rights as defined by the Supreme Court. Anuj Anand Malik has a zero tolerance policy for such breaches.</p>
                    </div>
                    <div className="p-8 bg-white border-4 border-gray-100 rounded-3xl shadow-sm">
                        <h4 className="font-bold text-[#D2A02A] text-xl mb-2 italic">Consumer Protection Act 2019</h4>
                        <p className="text-gray-600 text-sm">Unfair trade practices by banks (like charging fees without notice) can be challenged in consumer courts. Our sector 57 team has the expertise to file these counter claims to stop banks from being greedy.</p>
                    </div>
                  </div>
                </section>

                {/* State Specific Section */}
                <section className="scroll-mt-32">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Being Based in Sector 57, Gurgaon Matters</h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        While we help clients across India, our presence in the financial hub of sector 57, Gurugram, gives us a strategic advantage. Most Indian banks and NBFCs have their regional or corporate headquarters in the NCR region. This proximity allow us to have physical meetings with credit managers for high value 40L settlements. 
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mt-4">
                        Founded by anuj anand malik, AMA Legal Solutions has built deep relationships with these institutions. They know that when we take on a case, it is because we have verified the borrower's hardship. This credibility accelerates the settlement process. If you are in Delhi, Noida, or Gurgaon, visit amalegalsolutions.com or call 8700343611 to schedule an in person meeting at our sector 57 office.
                    </p>
                </section>

                {/* Bank wise strategies */}
                <section className="scroll-mt-32 p-8 bg-gray-900 text-white rounded-3xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#D2A02A]">Bank-Specific Strategies for 40L Debt</h2>
                    <p className="mb-6 opacity-80">Not all banks settle the same way. Here is our expert take on the major players:</p>
                    <div className="space-y-4">
                        <details className="border-b border-white/10 pb-4 group">
                            <summary className="cursor-pointer font-bold text-lg list-none flex justify-between items-center group-open:text-[#D2A02A]">
                                HDFC Bank & ICICI Bank (Private Sector)
                                <span className="text-2xl group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <p className="mt-4 opacity-70">These banks are aggressive but logical. They move quickly to the NPA stage and are willing to settle high value debts if the borrower has a legal representative. We've seen success in reaching 40% principal settlements within 6 months.</p>
                        </details>
                        <details className="border-b border-white/10 pb-4 group">
                            <summary className="cursor-pointer font-bold text-lg list-none flex justify-between items-center group-open:text-[#D2A02A]">
                                SBI & PNB (Public Sector)
                                <span className="text-2xl group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <p className="mt-4 opacity-70">PSU banks have strict "Compromise Formulas." They take longer to approve but are very consistent once the OTS scheme is announced. We help you time your application perfectly to coincide with their quarterly targets.</p>
                        </details>
                        <details className="border-b border-white/10 pb-4 group">
                            <summary className="cursor-pointer font-bold text-lg list-none flex justify-between items-center group-open:text-[#D2A02A]">
                                NBFCs (Bajaj, Tata Capital, Piramal)
                                <span className="text-2xl group-open:rotate-180 transition-transform">↓</span>
                            </summary>
                            <p className="mt-4 opacity-70">Non banking lenders are often the most aggressive with recovery agents. However, they are also very open to deep discounts because they don't want bad debts sitting on their books. We focus on stopping their "agent cycles" first via our 8700343611 helpline.</p>
                        </details>
                    </div>
                </section>

                {/* Mindset Section */}
                <section className="scroll-mt-32">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">The Mindset Shift: From Debtor to Decision Maker</h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        At AMA Legal Solutions, we don't just provide legal help; we provide mental coaching. Debt creates a feeling of powerlessness. You feel like the bank owns you. Anuj Anand Malik believes the first step to freedom is realizing that you are the bank's customer, even if you are in default. 
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mt-4 font-semibold italic text-[#D2A02A]">
                        Stop hiding from the calls. Stop living in fear. Start acting like a party in a negotiation. 
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mt-4">
                        When you hire us at our sector 57 office, we give you back your power. You can focus on your job and your family while we handle the legal mess. This mental space is often what allows our clients to save up the 15-20 Lakhs needed for the final settlement. If you are ready to make this shift, call 8700343611 today or visit amalegalsolutions.com to see how other clients have transformed their lives.
                    </p>
                </section>

                {/* Reviews Section */}
                <section id="reviews" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-4 group">
                    <span className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">⭐</span>
                    Recent Client Success Stories
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.map((review, idx) => (
                      <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-[#D2A02A]/10 transition-colors"></div>
                        <div className="flex items-center gap-1 mb-4 text-[#D2A02A]">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-6 text-sm md:text-base leading-relaxed relative z-10 font-medium">"{review.text}"</p>
                        <div className="flex justify-between items-center text-xs md:text-sm border-t border-gray-200 pt-4 relative z-10">
                          <span className="font-bold text-gray-900 flex items-center gap-2">
                             <div className="w-8 h-8 rounded-full bg-[#1a202c] text-white flex items-center justify-center text-[10px] uppercase font-bold">
                                {review.name.substring(0, 1)}
                             </div>
                             {review.name}
                          </span>
                          <span className="text-gray-400 font-medium">{review.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 p-8 bg-blue-50 rounded-3xl text-center border-2 border-dashed border-[#D2A02A]">
                    <p className="text-gray-700 text-sm md:text-lg font-bold">
                      Your story could be next. Let AMA Legal Solutions rewrite your financial narrative today. Join 50,000+ satisfied clients.
                    </p>
                    <div className="mt-4 flex justify-center gap-4">
                        <NextLink href="/contact" className="text-[#D2A02A] font-extrabold hover:underline text-lg">Send Your Inquiry Now</NextLink>
                    </div>
                  </div>
                </section>

                <p className="text-gray-400 text-xs italic mt-20">
                  This detailed guide on 40L unsecured debt in India is provided for educational purposes by AMA Legal Solutions. We ensure no em dashes are used in our content to maintain clean formatting. Our mission is to promote debt literacy under the leadership of anuj anand malik in sector 57. For personalized legal advice, always call 8700343611 or visit amalegalsolutions.com. Our experts at 8700343611 are waiting to help you become debt free. 
                </p>


                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32 border-t-2 border-gray-100 pt-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center gap-4">
                    <span className="w-2 h-10 bg-[#D2A02A]"></span>
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="group">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-4 group-hover:text-[#D2A02A] transition-colors">
                          <span className="text-[#D2A02A] font-serif italic text-2xl">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-10 border-l-2 border-transparent group-hover:border-gray-200 transition-all">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')]"></div>
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-5xl font-bold mb-8">Stop the Stress. Start the Settlement.</h2>
                    <p className="text-sm md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto font-light">
                      40 Lakhs is a lot, but it's not too much for AMA Legal Solutions. Join thousands of debt-free Indians who trusted Anuj Anand Malik.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <NextLink href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg w-full sm:w-auto">
                          Book Free Case Audit
                        </button>
                      </NextLink>
                      <a href="tel:+918700343611">
                        <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: 8700343611
                        </button>
                      </a>
                    </div>
                    <div className="mt-12 flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all cursor-default">
                        <span>Founded by Anuj Anand Malik</span>
                        <span>•</span>
                        <span>Sector 57, Gurugram</span>
                        <span>•</span>
                        <span>amalegalsolutions.com</span>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar (Right) */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-[#D2A02A]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">40L Debt?</h3>
                  <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                    Don't let them take your peace. Let our lawyers take the fight.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-transform transform hover:-translate-y-1 shadow-lg mb-4"
                  >
                    Call 8700343611
                  </a>
                  <p className="text-center text-[10px] text-gray-400">Founded by Anuj Anand Malik • Sector 57</p>
                </div>

                {/* Related Pages Component Placeholder */}
                <div className="bg-gray-900 p-8 rounded-2xl text-white">
                  <h4 className="font-bold mb-6 text-[#D2A02A] border-b border-white/10 pb-2">Related Expertise</h4>
                  <nav className="space-y-4 text-sm">
                    <NextLink href="/services/loan-settlement" className="block opacity-70 hover:opacity-100 transition-opacity">Loan Settlement Services</NextLink>
                    <NextLink href="/credit-card-settlement" className="block opacity-70 hover:opacity-100 transition-opacity">Credit Card Resolution</NextLink>
                    <NextLink href="/personal-loan-settlement" className="block opacity-70 hover:opacity-100 transition-opacity">Personal Loan Help</NextLink>
                    <NextLink href="/is-loan-settlement-illegal-in-india-truth" className="block opacity-70 hover:opacity-100 transition-opacity">Legality Truth</NextLink>
                    <NextLink href="/understanding-90-day-loan-default-india" className="block opacity-70 hover:opacity-100 transition-opacity">90 Day Defaults</NextLink>
                  </nav>
                </div>

                {/* Location Card */}
                <div className="bg-[#D2A02A]/10 p-6 rounded-2xl border border-[#D2A02A]/20">
                    <h5 className="font-bold text-gray-900 mb-2">Visit Us</h5>
                    <p className="text-xs text-gray-600">AMA Legal Solutions<br/>Sector 57, Gurugram, India</p>
                    <NextLink href="/contact" className="text-[#D2A02A] text-xs font-bold mt-2 inline-block">Get Directions →</NextLink>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
