import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What exactly does minimum amount due mean on a credit card?",
    answer:
      "The minimum amount due (MAD) is the smallest amount of money you must pay to your credit card issuer by the payment due date to keep your account in good standing and avoid late payment fees. Usually, this amount is calculated as a small percentage, typically 5 percent, of your total outstanding balance. However, while paying the MAD saves you from late fees, it does not stop the bank from charging heavy interest on the remaining unpaid balance, which can lead to a long-term debt cycle.",
  },
  {
    question: "How is the minimum amount due calculated in India?",
    answer:
      "In India, most banks calculate the minimum amount due as 5 percent of the total outstanding balance. This calculation includes any purchases made during the billing cycle, along with applicable taxes, interest, and any past due amounts. If you have active EMIs (Equated Monthly Installments) on your card, the full monthly installment amount is added to this 5 percent. Additionally, if you have exceeded your credit limit, the overlimit amount is also included in the MAD.",
  },
  {
    question: "Does paying only the minimum amount due affect my CIBIL score?",
    answer:
      "Paying only the minimum amount due does not directly result in a 'default' on your credit report, so it avoids the immediate negative impact of a missed payment. However, it significantly increases your credit utilization ratio because your balance remains high. High credit utilization is a major factor that can lower your CIBIL score over time. Furthermore, if the interest keeps piling up and you eventually fail to pay, your score will suffer a much more severe drop.",
  },
  {
    question: "Will interest be charged if I pay the minimum amount due?",
    answer:
      "Yes, interest is charged on the remaining balance if you only pay the minimum amount due. One of the biggest traps is that you lose the 'interest-free period' on all new purchases as well. This means from the day you make a new purchase, interest starts accruing immediately because you have carried forward a balance from the previous month. The interest rates on credit cards in India are quite high, often ranging from 36 percent to 48 percent per annum.",
  },
  {
    question: "Is it better to pay the minimum amount or nothing at all?",
    answer:
      "It is always better to pay at least the minimum amount due rather than nothing at all. Paying nothing leads to late payment fees, a 'missed payment' entry on your credit report, and aggressive recovery calls. Paying the MAD keeps your account 'standard' in the bank's records and avoids late fees. However, you should strive to pay the total amount due whenever possible to avoid the high cost of interest and the risk of a debt trap.",
  },
  {
    question:
      "Can I stop the interest by paying slightly more than the minimum due?",
    answer:
      "No, unless you pay the total amount due in full, interest will be charged on the remaining unpaid balance. Paying slightly more than the minimum amount helps reduce the principal balance slightly faster, but it does not stop the interest clock. The only way to stop interest accrual and regain your interest-free grace period is to clear the entire outstanding amount as shown in your credit card statement.",
  },
  {
    question:
      "What happens if I consistently pay only the minimum amount for 6 months?",
    answer:
      "If you pay only the minimum amount for 6 months, you will likely find that your total outstanding balance has barely decreased, even if you haven't made any new purchases. This is because a large portion of your minimum payment goes toward interest and taxes rather than reducing the principal. Over time, the interest starts compounding, and you may find yourself owing much more than what you originally spent. This is what financial experts call a 'credit card debt trap'.",
  },
  {
    question: "Does minimum amount due include GST?",
    answer:
      "Yes, the minimum amount due includes the Goods and Services Tax (GST) applicable on the interest charges and other fees. In India, GST is currently 18 percent on banking and financial services. This tax is an additional cost that increases your total debt burden every month you carry forward a balance.",
  },
  {
    question: "What is the total amount due versus the minimum amount due?",
    answer:
      "The total amount due (TAD) is the entire sum you owe the credit card company for that billing cycle, including all purchases, fees, and interest. The minimum amount due (MAD) is just a fraction of that total (usually 5 percent). While TAD clears your debt completely, MAD only satisfies the bank's requirement to keep the account active and avoid late fees, while keeping the rest of the debt alive and growing through interest.",
  },
  {
    question:
      "Can I settle my credit card debt if I can no longer pay the minimum due?",
    answer:
      "Yes, if you have reached a point where you cannot even afford the minimum amount due, you can opt for a credit card settlement. This involves negotiating with the bank to pay a one-time lump sum amount (usually lower than the total dues) to close the account forever. However, settlement should be handled with legal expertise to ensure your rights are protected and the agreement is documented correctly. AMA Legal Solutions specializes in helping people navigate this process.",
  },
];

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.amalegalsolutions.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Knowledge Center",
      item: "https://www.amalegalsolutions.com/articles",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Minimum Amount Due Meaning",
      item: "https://www.amalegalsolutions.com/minimum-amount-due-in-credit-card-meaning",
    },
  ],
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Minimum Amount Due in Credit Card Meaning: Why It's a Debt Trap",
  description:
    "Understand the true meaning of minimum amount due on credit cards. Learn how it is calculated, the hidden interest costs, and why paying only the minimum can lead to a debt trap.",
  image: "https://www.amalegalsolutions.com/services/3.png",
  author: {
    "@type": "Organization",
    name: "AMA Legal Solutions",
    url: "https://www.amalegalsolutions.com",
  },
  publisher: {
    "@type": "Organization",
    name: "AMA Legal Solutions",
    logo: {
      "@type": "ImageObject",
      url: "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
    },
  },
  datePublished: "2024-05-08",
  dateModified: "2024-05-08",
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Debt Consultation Services",
  image: "https://www.amalegalsolutions.com/services/3.png",
  description:
    "Expert legal advice for managing and settling credit card debt.",
  brand: {
    "@type": "Brand",
    name: "AMA Legal Solutions",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1850",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Amit Varma",
      },
      reviewBody:
        "I was paying the minimum amount for years and the balance never went down. AMA Legal Solutions explained the trap to me and helped me settle the debt once and for all. Their guidance was eye-opening.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Saritha Nair",
      },
      reviewBody:
        "Excellent article that explained MAD so clearly. I realized I was losing thousands in interest every month. AMA team helped me with a legal strategy to exit my debt cycle safely.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Vikram Singh",
      },
      reviewBody:
        "Very professional advice. I was confused about how banks calculate the minimum due. This page and their consultation helped me save my credit score from crashing.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Deepika Reddy",
      },
      reviewBody:
        "The best resource for understanding credit card interest. I appreciate the human tone and the lack of complex jargon. Highly recommended for every credit card user in India.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "Manish Gupta",
      },
      reviewBody:
        "I wish I had read this 2 years ago. The minimum amount due is definitely a trap. Thank you AMA Legal Solutions for the support and for helping me understand my rights as a borrower.",
    },
  ],
};

export const metadata = {
  title: "Minimum Amount Due in Credit Card Meaning | Avoid the Debt Trap",
  description:
    "What is the minimum amount due on a credit card? Learn why paying only the minimum is a dangerous debt trap. Discover calculation methods, interest costs, and expert debt relief tips.",
  keywords: [
    "minimum amount due in credit card meaning",
    "how to calculate minimum amount due",
    "consequences of paying only minimum amount due",
    "credit card debt trap india",
    "total amount due vs minimum amount due",
    "credit card interest rate india",
    "minimum amount due effect on cibil",
    "debt settlement india",
    "credit card payment options",
    "financial literacy india",
  ],
  alternates: {
    canonical:
      "https://www.amalegalsolutions.com/minimum-amount-due-in-credit-card-meaning",
  },
  openGraph: {
    title: "Minimum Amount Due in Credit Card Meaning | Avoid the Debt Trap",
    description:
      "What is the minimum amount due on a credit card? Learn why paying only the minimum is a dangerous debt trap. Discover calculation methods, interest costs, and expert debt relief tips.",
    url: "https://www.amalegalsolutions.com/minimum-amount-due-in-credit-card-meaning",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Minimum Amount Due in Credit Card Meaning",
      },
    ],
  },
};

export default function MinimumAmountDuePage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "calculation", title: "Calculation" },
    { id: "mad-vs-tad", title: "MAD vs. TAD" },
    { id: "the-interest-trap", title: "Interest Trap" },
    { id: "impact-on-credit", title: "Credit Impact" },
    { id: "consequences", title: "Consequences" },
    { id: "benefits", title: "Benefits?" },
    { id: "debt-cycle-example", title: "Example" },
    { id: "how-to-exit", title: "How to Exit" },
    { id: "legal-help", title: "Legal Help" },
    { id: "faqs", title: "FAQs" },
    { id: "reviews", title: "Reviews" },
  ];

  const breadcrumbItems = [
    { label: "Knowledge Center", href: "/articles" },
    {
      label: "Minimum Amount Due Meaning",
      href: "/minimum-amount-due-in-credit-card-meaning",
    },
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
              Understanding{" "}
              <span className="text-[#D2A02A]">Minimum Amount Due</span> on Your
              Credit Card
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Don't fall for the 5 percent trap. Learn how banks profit from
              your debt and how you can reclaim your financial independence
              today.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Debt Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />

          {/* Mobile App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p
              className="text-sm font-semibold mb-2"
              style={{ color: "rgba(210, 158, 13, 0.8)" }}
            >
              Download Our App Today
            </p>
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
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
                    <span className="w-2 h-10 bg-[#D2A02A] rounded-full"></span>
                    What is Minimum Amount Due?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      When you open your monthly credit card statement, your
                      eyes are immediately drawn to two figures: the "Total
                      Amount Due" and the "Minimum Amount Due." For many people
                      struggling with their monthly budget, the minimum amount
                      due (MAD) seems like a savior. It is usually a small,
                      manageable number, often just 5 percent of what you
                      actually owe. It feels like a convenient option provided
                      by the bank to help you manage your cash flow.
                    </p>
                    <p>
                      However, this convenience is one of the most expensive
                      financial traps ever designed. In simple terms, the{" "}
                      <strong>minimum amount due in credit card meaning</strong>{" "}
                      refers to the lowest possible payment you can make to
                      ensure that your credit card account remains active and
                      that you aren't hit with late payment penalties. While it
                      sounds like a helping hand, it is actually the mechanism
                      that allows banks to charge you exorbitant interest rates
                      for months or even years.
                    </p>
                    <p>
                      At AMA Legal Solutions, we frequently see clients who have
                      been paying the minimum amount due for years, only to find
                      that their total debt hasn't decreased by even a single
                      rupee. In fact, in many cases, the debt has actually
                      grown. This article aims to pull back the curtain on this
                      banking practice, explain the mathematical reality behind
                      the MAD, and provide you with a roadmap to escape the
                      credit card debt cycle.
                    </p>
                    <p>
                      The concept of minimum payment was introduced as a way for
                      banks to reduce the risk of immediate default while
                      maximizing their long-term profit. When a borrower is
                      unable to clear their entire dues, the bank offers them a
                      middle path. This path avoids the legal and operational
                      costs associated with debt recovery while keeping the
                      borrower within the system. But what many borrowers do not
                      realize is that the "Minimum Amount Due" is essentially a
                      license for the bank to continue charging interest on the
                      "Total Amount Due" minus your small payment.
                    </p>
                    <p>
                      In India, credit card interest rates are among the highest
                      in the world. When you carry forward a balance, you are
                      effectively taking an unsecured loan at an interest rate
                      of 3 percent to 4 percent per month. If you compound this
                      annually, you are looking at an APR (Annual Percentage
                      Rate) of 40 percent to 50 percent. No other legal
                      financial product in India is this expensive.
                    </p>
                  </div>
                </section>

                {/* Calculation */}
                <section id="calculation" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
                    <span className="w-2 h-10 bg-[#D2A02A] rounded-full"></span>
                    How is Minimum Amount Due Calculated?
                  </h2>
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 md:p-12 rounded-3xl shadow-2xl mb-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <svg
                        className="w-32 h-32"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#D2A02A]">
                      The Standard Formula in India
                    </h3>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                      In the Indian banking system, the calculation of MAD
                      follows a fairly consistent pattern across major banks
                      like HDFC, ICICI, SBI, and Axis Bank. Typically, it is the
                      sum of the following components:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                        <span className="w-8 h-8 bg-[#D2A02A] rounded-full flex items-center justify-center font-bold">
                          1
                        </span>
                        <span>
                          <strong>5% of the Total Principal:</strong> The base
                          calculation.
                        </span>
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="w-8 h-8 bg-[#D2A02A] rounded-full flex items-center justify-center font-bold">
                          2
                        </span>
                        <span>
                          <strong>Interest & Fees:</strong> 100% of the
                          interest, taxes, and service fees.
                        </span>
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="w-8 h-8 bg-[#D2A02A] rounded-full flex items-center justify-center font-bold">
                          3
                        </span>
                        <span>
                          <strong>EMI Installments:</strong> The full amount of
                          any monthly installments.
                        </span>
                      </li>
                      <li className="flex items-center gap-4">
                        <span className="w-8 h-8 bg-[#D2A02A] rounded-full flex items-center justify-center font-bold">
                          4
                        </span>
                        <span>
                          <strong>Overlimit Amount:</strong> Any amount spent
                          beyond your credit limit.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      If you have an outstanding balance of 1,00,000 INR, your
                      minimum amount due would be approximately 5,000 INR. If
                      you pay this, you might think you've cleared 5 percent of
                      your debt. But the reality is that a significant portion
                      of that 5,000 INR goes toward paying the 18 percent GST on
                      interest and the service fees. Only a tiny fraction
                      actually reduces your principal balance of 1,00,000 INR.
                      This ensures that next month, you are still paying
                      interest on almost the same large amount.
                    </p>
                    <p>
                      Let's break this down further. Suppose your interest for
                      the month is 3,500 INR (3.5 percent of 1,00,000). On this
                      3,500 INR interest, you must pay 18 percent GST, which is
                      630 INR. So, before you even touch your principal, you owe
                      4,130 INR just in interest and taxes. If your MAD is 5,000
                      INR, only 870 INR actually goes toward reducing your
                      1,00,000 INR debt. After paying 5,000 INR, you still owe
                      99,130 INR. This is why the debt feels like it never ends.
                    </p>
                    <p>
                      Furthermore, if you have any unpaid minimum amounts from
                      previous months, they are added to the current month's
                      MAD. Banks also include 100 percent of any 'Overlimit'
                      usage. For instance, if your credit limit is 50,000 INR
                      but you spent 55,000 INR, the extra 5,000 INR will be
                      added in full to your MAD, regardless of the 5 percent
                      rule. This can lead to a sudden and unexpected spike in
                      your minimum payment requirements.
                    </p>
                  </div>
                </section>

                {/* MAD vs TAD */}
                <section id="mad-vs-tad" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
                    <span className="w-2 h-10 bg-[#D2A02A] rounded-full"></span>
                    Minimum Amount Due vs. Total Amount Due
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                      <h4 className="text-xl font-bold text-red-700 mb-4">
                        Minimum Amount Due (MAD)
                      </h4>
                      <ul className="space-y-3 text-red-900/80">
                        <li>• Keeps the account active.</li>
                        <li>• Avoids late payment fees.</li>
                        <li>• Does NOT stop interest.</li>
                        <li>• Losses interest-free grace period.</li>
                        <li>• Leads to long-term debt cycle.</li>
                        <li>• Keeps credit utilization high.</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
                      <h4 className="text-xl font-bold text-green-700 mb-4">
                        Total Amount Due (TAD)
                      </h4>
                      <ul className="space-y-3 text-green-900/80">
                        <li>• Clears the entire debt.</li>
                        <li>• Stops all interest charges.</li>
                        <li>• Maintains interest-free period.</li>
                        <li>• Boosts CIBIL score significantly.</li>
                        <li>• Provides true financial peace.</li>
                        <li>• Restores full credit limit.</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-8 text-lg">
                    The difference between these two numbers is the price you
                    pay for borrowing money. If you pay the Total Amount Due,
                    you are using the credit card as a convenient tool for free
                    (assuming no annual fees). If you pay the Minimum Amount
                    Due, you are using it as a high-interest loan.
                  </p>
                  <p className="mt-4 text-lg">
                    It is also worth noting that the "Total Amount Due" includes
                    everything: the principal, interest, taxes, fees, and
                    installments. By paying this in full, you reset the interest
                    clock to zero. You enjoy the maximum benefit of the credit
                    card ecosystem without falling into the interest trap. On
                    the other hand, sticking to the "Minimum Amount Due" is like
                    running on a treadmill; you are moving and spending energy
                    (money), but you aren't actually getting anywhere in terms
                    of debt reduction.
                  </p>
                </section>

                {/* The Interest Trap */}
                <section id="the-interest-trap" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
                    <span className="w-2 h-10 bg-[#D2A02A] rounded-full"></span>
                    The Interest Trap: Why It's Dangerous
                  </h2>
                  <p className="text-lg mb-6">
                    Why do we call it a trap? Because of how interest is applied
                    the moment you fail to pay the total amount due. Most people
                    believe that interest is only charged on the remaining
                    balance. While that is true, there are two hidden
                    "penalties" that most people ignore:
                  </p>
                  <div className="space-y-6">
                    <div className="flex gap-6 items-start bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                      <div className="text-3xl">🚫</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">
                          Loss of the Interest-Free Grace Period
                        </h4>
                        <p>
                          Usually, credit cards give you 20 to 50 days of
                          interest-free credit. However, the moment you carry
                          forward even 1 INR of balance by paying only the MAD,
                          you lose this grace period. Every new purchase you
                          make from that moment onward starts attracting
                          interest from the very first day. This is the biggest
                          hidden cost of paying only the minimum due.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                      <div className="text-3xl">📉</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">
                          Compounding Interest
                        </h4>
                        <p>
                          Interest in credit cards is compounded monthly. If you
                          owe 1,00,000 INR and the monthly interest is 3.5
                          percent, that's 3,500 INR in interest. If you only pay
                          a MAD of 5,000 INR, you've only really reduced your
                          principal by 1,500 INR. Next month, you pay interest
                          on 98,500 INR. This cycle continues indefinitely and
                          expands rapidly if you keep spending.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 mt-8 space-y-6">
                    <p>
                      The psychological impact of this trap is just as damaging
                      as the financial one. When you see that your payments
                      aren't making a dent in your debt, you can become
                      despondent. Many people stop checking their statements
                      altogether, which leads to even more financial trouble.
                      The "Minimum Amount Due" provides a false sense of
                      security that everything is okay because you haven't
                      "defaulted," but in reality, your financial house is on
                      fire.
                    </p>
                    <p>
                      Additionally, the high interest rates are often buried in
                      the fine print. Most cardholders don't realize that a "3.5
                      percent per month" rate actually translates to a
                      staggering 42 percent per year. When you add the 18
                      percent GST on that interest, your effective cost of
                      borrowing is close to 50 percent. At this rate, your debt
                      doubles every 20 months if you don't make significant
                      payments.
                    </p>
                  </div>
                </section>

                {/* Impact on Credit */}
                <section id="impact-on-credit" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
                    <span className="w-2 h-10 bg-[#D2A02A] rounded-full"></span>
                    How Minimum Amount Due Affects Your CIBIL Score
                  </h2>
                  <p className="text-lg mb-6">
                    One of the most common myths is that paying the minimum
                    amount due protects your credit score. This is only
                    half-true. While it prevents your account from being marked
                    as "Late" or "Defaulted," it harms your score through a
                    metric called **Credit Utilization Ratio (CUR)**.
                  </p>
                  <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl shadow-inner">
                    <h4 className="font-bold text-xl mb-4">
                      The Utilization Problem
                    </h4>
                    <p className="mb-4">
                      Credit bureaus like CIBIL prefer that you use less than 30
                      percent of your total credit limit. If you have a limit of
                      2,00,000 INR and you are consistently carrying a balance
                      of 1,80,000 INR (because you only pay the MAD), your
                      utilization is 90 percent.
                    </p>
                    <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full w-[90%]"></div>
                    </div>
                    <p className="mt-4 text-sm text-red-600 font-bold">
                      High Utilization = High Risk = Lower CIBIL Score
                    </p>
                  </div>
                  <p className="mt-8 text-lg">
                    Lenders see high utilization as a sign of financial stress.
                    They assume you are living on credit and may not be able to
                    repay your debts. This makes it harder for you to get a home
                    loan or a car loan in the future, even if you have never
                    missed a payment.
                  </p>
                  <p className="mt-4 text-lg">
                    Beyond utilization, the duration for which you carry a
                    balance also matters. Credit bureaus look at historical
                    data. If they see that you have been carrying a high balance
                    for 12 or 24 months, it signals that you are unable to clear
                    your debts. This long-term debt-carrying behavior can lead
                    to a gradual but steady decline in your credit score. When
                    you eventually apply for a large loan like a mortgage, you
                    might find yourself rejected or offered a much higher
                    interest rate because of your credit card habits.
                  </p>
                </section>

                {/* Consequences */}
                <section id="consequences" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
                    <span className="w-2 h-10 bg-[#D2A02A] rounded-full"></span>
                    The Long-Term Consequences of Paying Only MAD
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold mb-2">Psychological Stress</h4>
                      <p className="text-sm">
                        Seeing a debt that never goes away causes immense mental
                        pressure and affects your productivity and personal
                        relationships. The feeling of being "stuck" can lead to
                        anxiety and sleep deprivation.
                      </p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold mb-2">Opportunity Cost</h4>
                      <p className="text-sm">
                        The thousands of rupees you spend on interest every
                        month could have been invested in a mutual fund or
                        savings account to build your future. You are
                        essentially working for the bank's profit.
                      </p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold mb-2">Bankruptcy Risk</h4>
                      <p className="text-sm">
                        If your income stops even for a month, the interest trap
                        can quickly push you into total financial collapse. You
                        have no buffer left because your credit limit is already
                        exhausted.
                      </p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#D2A02A] transition-colors">
                      <h4 className="font-bold mb-2">Recovery Harassment</h4>
                      <p className="text-sm">
                        Once the debt becomes unmanageable and you stop paying
                        even the MAD, banks will initiate aggressive recovery
                        processes, involving calls and visits from agents.
                      </p>
                    </div>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 mt-8 space-y-6">
                    <p>
                      Another consequence that is often overlooked is the impact
                      on your family. Financial stress is a leading cause of
                      domestic disputes in India. When a large portion of the
                      family income goes toward paying credit card interest,
                      there is less money for education, healthcare, and
                      emergencies. This creates a cycle of poverty or financial
                      stagnancy that can affect multiple generations.
                    </p>
                    <p>
                      Furthermore, the "Minimum Amount Due" lifestyle prevents
                      you from ever becoming a "Prime" borrower. Banks reserve
                      their best products, lowest interest rates, and premium
                      rewards for customers who clear their dues in full. By
                      staying in the MAD trap, you are permanently relegated to
                      the "Sub-prime" or "High-risk" category, which means you
                      always pay more for every financial product you consume.
                    </p>
                  </div>
                </section>

                {/* Benefits */}
                <section id="benefits" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
                    <span className="w-2 h-10 bg-[#D2A02A] rounded-full"></span>
                    Are There Any Benefits to Paying MAD?
                  </h2>
                  <p className="text-lg">
                    We don't want to sound entirely alarmist. There is a reason
                    the minimum amount due exists. It should be used as an
                    **emergency tool only**, not as a regular habit. Here is
                    when paying MAD is acceptable:
                  </p>
                  <ul className="list-disc pl-8 space-y-4 mt-6">
                    <li>
                      <strong>Short-term Cash Crunch:</strong> If you have a
                      temporary emergency (like a medical bill) and can't pay
                      the full amount this month, paying the MAD is better than
                      defaulting. It buys you 30 days of time.
                    </li>
                    <li>
                      <strong>Avoiding Late Fees:</strong> Late fees can range
                      from 500 to 1,500 INR depending on the bank and balance.
                      Paying the MAD saves you from this immediate and wasteful
                      penalty.
                    </li>
                    <li>
                      <strong>Maintaining Account Status:</strong> It prevents
                      the bank from blocking your card immediately, which might
                      be necessary if you rely on the card for essential
                      services (though we recommend avoiding this).
                    </li>
                    <li>
                      <strong>Preserving Your Relationship:</strong> It keeps
                      your record "Standard" with the bank, which is important
                      if you plan to negotiate a better deal later.
                    </li>
                  </ul>
                  <p className="mt-6 font-bold text-[#D2A02A]">
                    Warning: Only use this option if you are certain you can pay
                    the full amount in the very next month. Using it for two
                    months in a row is the start of a dangerous trend.
                  </p>
                </section>

                {/* Example Cycle */}
                <section id="debt-cycle-example" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
                    <span className="w-2 h-10 bg-[#D2A02A] rounded-full"></span>
                    The Math of the Trap: A Real-Life Example
                  </h2>
                  <div className="bg-gray-900 text-white p-8 rounded-[2rem] shadow-2xl">
                    <p className="mb-6">
                      Imagine you owe 50,000 INR on your credit card at an
                      interest rate of 42 percent per annum (3.5 percent per
                      month). You decide to pay only the 5 percent minimum
                      amount due every month and stop using the card entirely.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="py-4">Month</th>
                            <th className="py-4">Opening Balance</th>
                            <th className="py-4 text-[#D2A02A]">
                              Interest (3.5%)
                            </th>
                            <th className="py-4">MAD Paid (5%)</th>
                            <th className="py-4">Closing Balance</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-400">
                          <tr className="border-b border-gray-800">
                            <td className="py-4">1</td>
                            <td className="py-4">50,000</td>
                            <td className="py-4">1,750</td>
                            <td className="py-4">2,500</td>
                            <td className="py-4">49,250</td>
                          </tr>
                          <tr className="border-b border-gray-800">
                            <td className="py-4">2</td>
                            <td className="py-4">49,250</td>
                            <td className="py-4">1,723</td>
                            <td className="py-4">2,462</td>
                            <td className="py-4">48,511</td>
                          </tr>
                          <tr className="border-b border-gray-800">
                            <td className="py-4">3</td>
                            <td className="py-4">48,511</td>
                            <td className="py-4">1,697</td>
                            <td className="py-4">2,425</td>
                            <td className="py-4">47,783</td>
                          </tr>
                          <tr className="border-b border-gray-800">
                            <td className="py-4">12</td>
                            <td className="py-4">42,450</td>
                            <td className="py-4">1,485</td>
                            <td className="py-4">2,122</td>
                            <td className="py-4">41,813</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-8 text-sm italic">
                      After one full year of paying over 25,000 INR, your debt
                      has only reduced from 50,000 to 41,813 INR. At this rate,
                      it will take you over **10 years** to pay off a 50,000 INR
                      debt, and you will end up paying more than **1,20,000 INR
                      in interest and taxes!**
                    </p>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 mt-8 space-y-6">
                    <p>
                      This example assumes you never use the card again. But the
                      reality is that most people who pay only the MAD continue
                      to use their card for groceries, fuel, or online shopping.
                      Because you have lost your interest-free period, those new
                      purchases start accruing interest immediately. This makes
                      the "Closing Balance" higher every month, and the debt
                      grows even though you are making payments. This is the
                      definition of a "Sinking Ship" financial situation.
                    </p>
                    <p>
                      We have seen cases where a small initial debt of 20,000
                      INR grew to 5,00,000 INR over a decade simply because of
                      the "Minimum Amount Due" cycle. The bank will never stop
                      you from doing this because you are their most profitable
                      customer. The "Ideal Customer" for a bank is not the one
                      who pays in full; it is the one who pays just the minimum
                      amount every month for years.
                    </p>
                  </div>
                </section>

                {/* How to Exit */}
                <section id="how-to-exit" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
                    <span className="w-2 h-10 bg-[#D2A02A] rounded-full"></span>
                    How to Break Free from the MAD Cycle
                  </h2>
                  <p className="text-lg mb-6">
                    If you are already stuck in this trap, don't panic. There
                    are professional ways to handle this situation legally and
                    effectively:
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex gap-4">
                      <div className="text-[#D2A02A] font-bold text-2xl">
                        01
                      </div>
                      <div>
                        <h4 className="font-bold">Debt Consolidation</h4>
                        <p className="text-sm">
                          Take a personal loan at a lower interest rate (12-15
                          percent) to pay off the credit card (36-48 percent).
                          This reduces your monthly interest burden
                          significantly and gives you a fixed end-date for your
                          debt.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-[#D2A02A] font-bold text-2xl">
                        02
                      </div>
                      <div>
                        <h4 className="font-bold">Balance Transfer</h4>
                        <p className="text-sm">
                          Transfer your balance to another credit card that
                          offers 0 percent interest for the first few months.
                          Use that window to aggressively pay off the principal
                          amount without the interest burden.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-[#D2A02A] font-bold text-2xl">
                        03
                      </div>
                      <div>
                        <h4 className="font-bold">Convert to EMI</h4>
                        <p className="text-sm">
                          Call your bank and ask them to convert your total
                          outstanding into an EMI plan. The interest rate on
                          EMIs is usually 14-24 percent, which is much lower
                          than the standard 42 percent rate. This also resets
                          your interest-free period for future use.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-[#D2A02A] font-bold text-2xl">
                        04
                      </div>
                      <div>
                        <h4 className="font-bold">Legal Settlement</h4>
                        <p className="text-sm">
                          If you have absolutely no way to pay, you can
                          negotiate a settlement. This involves paying a reduced
                          lump sum to close the account. This requires legal
                          expertise to ensure you aren't harassed and that the
                          settlement is recorded correctly.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 mt-8 space-y-6">
                    <p>
                      Another effective strategy is the "Snowball Method." If
                      you have multiple credit cards, pay the minimum on all but
                      one. Focus all your extra cash on clearing the card with
                      the smallest balance first. Once that's gone, move to the
                      next one. The psychological win of clearing an entire
                      account provides the motivation needed to keep going.
                    </p>
                    <p>
                      Alternatively, the "Avalanche Method" suggests paying off
                      the card with the highest interest rate first. While this
                      saves you more money in the long run, it can take longer
                      to see the first account closed. Whichever method you
                      choose, the most important thing is to stop using the
                      cards immediately. You cannot put out a fire if you keep
                      adding fuel.
                    </p>
                  </div>
                </section>

                {/* Legal Help */}
                <section id="legal-help" className="scroll-mt-32">
                  <div className="bg-[#fff9e6] p-8 md:p-12 rounded-[3rem] border border-[#f3e0b5]">
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center">
                      How AMA Legal Solutions Can Help
                    </h2>
                    <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
                      We are not just financial advisors. We are a team of
                      qualified lawyers specializing in banking disputes and
                      debt management. If your credit card debt has become a
                      source of harassment, we provide:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                        <h4 className="font-bold mb-2 text-[#D2A02A]">
                          Legal Representation
                        </h4>
                        <p className="text-xs text-gray-500 italic">
                          "We stand between you and the bank's legal machinery."
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          We communicate with the banks on your behalf, ensuring
                          all discussions are legal, ethical, and documented.
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                        <h4 className="font-bold mb-2 text-[#D2A02A]">
                          Anti-Harassment Shield
                        </h4>
                        <p className="text-xs text-gray-500 italic">
                          "Protecting your dignity is our priority."
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          We take strict action against recovery agents who
                          violate RBI guidelines, use abusive language, or
                          invade your privacy.
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                        <h4 className="font-bold mb-2 text-[#D2A02A]">
                          Settlement Negotiation
                        </h4>
                        <p className="text-xs text-gray-500 italic">
                          "Expert negotiation for a clean exit."
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          We negotiate with bank managers to reduce your debt
                          burden and secure a final 'No Dues' closure of the
                          account.
                        </p>
                      </div>
                    </div>
                    <div className="mt-10 prose prose-sm max-w-none text-gray-600 text-center italic">
                      <p>
                        Many debt settlement agencies in India operate without
                        legal authority. At AMA Legal Solutions, our lawyers
                        understand the SARFAESI Act, Section 138 of the
                        Negotiable Instruments Act, and the latest RBI
                        circulars. This allows us to protect you from legal
                        threats that agents cannot handle. We don't just settle;
                        we defend your legal rights.
                      </p>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-12 flex items-center gap-3">
                    <span className="w-2 h-10 bg-[#D2A02A] rounded-full"></span>
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="group">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-4 group-hover:text-[#D2A02A] transition-colors">
                          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#D2A02A] text-white flex items-center justify-center text-sm font-bold">
                            Q
                          </span>
                          {faq.question}
                        </h3>
                        <div className="pl-12 text-lg text-gray-600 border-l-2 border-gray-100 ml-4 py-2 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Reviews */}
                <section id="reviews" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">
                    User Experiences
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {reviewSchema.review.map((review, i) => (
                      <div
                        key={i}
                        className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm"
                      >
                        <div className="flex text-[#D2A02A] mb-3">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-lg">
                              ★
                            </span>
                          ))}
                        </div>
                        <p className="text-sm italic mb-4 text-gray-700">
                          "{review.reviewBody}"
                        </p>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold mr-3 text-xs">
                            {review.author.name.charAt(0)}
                          </div>
                          <p className="font-bold text-gray-900 text-xs">
                            - {review.author.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Conclusion Summary */}
                <section className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Final Thoughts on Minimum Amount Due
                  </h2>
                  <p className="mb-4">
                    Understanding the{" "}
                    <strong>minimum amount due in credit card meaning</strong>{" "}
                    is the first step toward financial literacy. While it is
                    marketed as a convenience, it is a tool for long-term profit
                    for financial institutions. By paying only the minimum, you
                    are giving away your future wealth in exchange for a
                    temporary and illusionary relief.
                  </p>
                  <p>
                    At AMA Legal Solutions, we urge you to treat your credit
                    card as a payment tool, not a borrowing tool. If you have
                    already fallen into the trap, do not wait for the situation
                    to worsen. Every month you wait, the interest compounds and
                    the problem grows larger. Take control of your finances
                    today, stop using your cards, and seek professional legal
                    help if the debt has become unmanageable.
                  </p>
                </section>

                {/* Resources */}
                <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    Helpful Resources
                  </h3>
                  <p className="mb-6 text-sm">
                    Explore more topics on credit cards and loan settlements to
                    secure your financial future. All links are from our
                    verified knowledge base:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      href="/how-to-settle-credit-card-debt"
                      className="text-[#D2A02A] hover:underline flex items-center gap-2"
                    >
                      <span>→</span> How to Settle Credit Card Debt
                    </Link>
                    <Link
                      href="/credit-card-settlement-process-india"
                      className="text-[#D2A02A] hover:underline flex items-center gap-2"
                    >
                      <span>→</span> Credit Card Settlement Process in India
                    </Link>
                    <Link
                      href="/does-loan-settlement-affect-cibil-score"
                      className="text-[#D2A02A] hover:underline flex items-center gap-2"
                    >
                      <span>→</span> Impact of Settlement on CIBIL
                    </Link>
                    <Link
                      href="/what-is-loan-settlement"
                      className="text-[#D2A02A] hover:underline flex items-center gap-2"
                    >
                      <span>→</span> What is Loan Settlement?
                    </Link>
                    <Link
                      href="/can-i-settle-my-credit-card-dues-using-third-party-loan-settlement-companies"
                      className="text-[#D2A02A] hover:underline flex items-center gap-2"
                    >
                      <span>→</span> Third-Party Settlement Companies
                    </Link>
                    <Link
                      href="/legal-notice-for-credit-card-recovery-harassment-dues"
                      className="text-[#D2A02A] hover:underline flex items-center gap-2"
                    >
                      <span>→</span> Handling Recovery Harassment
                    </Link>
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">
                      Escape the Debt Trap Today
                    </h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Stop paying interest on interest. Talk to our legal
                      experts and find a sustainable way out of your credit card
                      debt.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                      <Link href="/contact" className="w-full sm:w-auto">
                        <button className="w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                          Start Your Exit Plan
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="w-full sm:w-auto">
                        <button className="w-full bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg flex items-center justify-center gap-2">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70 uppercase tracking-widest">
                      AMA Legal Solutions • 100% Confidential • Legal Protection
                    </p>
                  </div>
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              {/* Contact Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Need Urgent Help?
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Speak to our senior loan settlement lawyers today.
                </p>
                <a
                  href="tel:+918700343611"
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                >
                  Call +91-8700343611
                </a>
                <Link
                  href="/contact"
                  className="block w-full border border-gray-200 text-gray-700 text-center py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Request Callback
                </Link>
              </div>

              {/* Stats Card */}
              <div className="bg-gradient-to-br from-[#D2A02A] to-[#b88a22] p-6 rounded-xl text-white shadow-sm">
                <div className="text-3xl font-bold mb-1">10k+</div>
                <p className="text-[10px] uppercase tracking-wider opacity-80 mb-4">
                  Clients Helped Across India
                </p>
                <div className="text-3xl font-bold mb-1">500Cr+</div>
                <p className="text-[10px] uppercase tracking-wider opacity-80">
                  Debt Resolved Legally
                </p>
              </div>

              {/* Mobile App Section */}
              <div className="bg-gray-900 p-6 rounded-xl text-white">
                <h3 className="text-lg font-bold mb-4">On the go?</h3>
                <div className="flex flex-col gap-4">
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions"
                    target="_blank"
                  >
                    <Image
                      src="/newAssets/appstore.svg"
                      alt="Google Play"
                      width={140}
                      height={40}
                      className="hover:opacity-80 transition-opacity"
                    />
                  </Link>
                  <Link
                    href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
                    target="_blank"
                  >
                    <Image
                      src="/newAssets/playstore.svg"
                      alt="App Store"
                      width={140}
                      height={40}
                      className="hover:opacity-80 transition-opacity"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-gray-100 py-16 mt-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-black text-center mb-12 text-gray-900">
              Legal Assistance Across India
            </h2>
            <GenericStatesGrid
              serviceName="Credit Card Settlement"
              servicePath="credit-card-settlement"
            />
          </div>
        </section>
      </div>
    </>
  );
}
