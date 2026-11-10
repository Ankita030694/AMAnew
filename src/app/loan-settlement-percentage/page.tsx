import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

const pageUrl = "https://www.amalegalsolutions.com/loan-settlement-percentage";

const faqs = [
  {
    question: "What percentage do banks accept for a personal loan settlement?",
    answer:
      "There is no fixed percentage. RBI requires each lender to follow its own board-approved policy, so the figure depends on the lender, how old the default is, whether the loan is secured, and the hardship you can prove.",
  },
  {
    question: "What is the settlement percentage for a credit card?",
    answer:
      "Credit cards have no standard percentage either. Check whether a quoted figure is measured against the principal or the total outstanding, because card dues often include large interest and late fees.",
  },
  {
    question: "Does RBI fix a loan settlement percentage?",
    answer:
      "No. RBI's 2023 framework for compromise settlements requires lenders to have board-approved policies, including limits on the sacrifice they may accept. It does not give borrowers a set percentage.",
  },
  {
    question: "Is a 10% settlement possible?",
    answer:
      "Do not plan around it. Very low figures are rare and cannot be promised. Treat anyone guaranteeing a specific percentage before reviewing your account and lender with caution.",
  },
  {
    question: "Is settlement percentage calculated on principal or total outstanding?",
    answer:
      "It can be either, and the difference is large. Always ask for a written breakup of principal, interest, penalties and other charges, and compare offers in rupees rather than percentages.",
  },
  {
    question: "Can I settle a home loan or car loan at a similar percentage?",
    answer:
      "Secured loans are different, because the lender can look to the property or vehicle for recovery. Reductions are usually more limited than on unsecured personal loans and credit cards.",
  },
  {
    question: "Should I pay as a lump sum or in instalments?",
    answer:
      "Lenders generally prefer a lump sum, and it can strengthen your offer. Instalments may be possible, but missing one can cancel the settlement, so agree only to dates you can meet.",
  },
  {
    question: "How does a settlement affect my CIBIL score?",
    answer:
      "When you pay less than the full amount, the account is commonly reported as settled, which can lower your score and affect future borrowing, whatever percentage you achieved.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Loan Settlement", "item": "https://www.amalegalsolutions.com/services/loan-settlement" },
    { "@type": "ListItem", "position": 3, "name": "Loan Settlement Percentage", "item": pageUrl },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Percentage in India: What Decides How Much You Pay",
  "description": "How loan and credit card settlement percentages work in India, why no fixed rate exists, and how to work out a realistic offer.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "datePublished": "2026-11-10",
  "dateModified": "2026-11-10",
  "author": { "@type": "Organization", "name": "AMA Legal Solutions", "url": "https://www.amalegalsolutions.com" },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" },
  },
  "mainEntityOfPage": pageUrl,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
  })),
};

export const metadata = {
  title: "Loan Settlement Percentage in India: How Much Will You Pay?",
  description:
    "Personal loan and credit card settlement percentage explained. Why no fixed rate exists, what banks look at, and how to work out a realistic settlement offer.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Loan Settlement Percentage in India: How Much Will You Pay?",
    description: "Why no fixed settlement percentage exists, what banks look at, and how to work out a realistic offer.",
    url: pageUrl,
    type: "article",
    images: [{ url: "/services/3.png", width: 1200, height: 630, alt: "Loan Settlement Percentage in India" }],
  },
};

const factors = [
  ["How long the account has been in default", "Older unpaid accounts generally leave more room to negotiate than recent ones."],
  ["Secured or unsecured", "Lenders have less to fall back on with personal loans and credit cards than with home or car loans."],
  ["Proof of hardship", "Job loss, medical costs or business failure, shown in documents, carries more weight than a verbal request."],
  ["Your repayment capacity", "A lender may compare your offer with what it could realistically recover through other means."],
  ["Lump sum or instalments", "Money paid quickly is generally more attractive to a lender than a long plan."],
  ["The lender's own policy", "Each lender works within its board-approved policy and approval levels."],
  ["Legal stage", "Pending arbitration, court action or a Lok Adalat listing can change how talks proceed."],
];

const examples = [30, 40, 50, 60, 70].map((percent) => ({
  percent,
  ofPrincipal: (400000 * percent) / 100,
  ofOutstanding: (600000 * percent) / 100,
}));

const formatRupees = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

const steps = [
  "Get a written statement that separates principal, interest, penalties and other charges.",
  "Add up the money you can truly arrange, and the date by which you can pay it.",
  "Compare that amount with both the principal and the total outstanding.",
  "Start below your limit so you have room to move, but keep the offer credible.",
  "Support the offer with hardship documents.",
  "Get the final amount and terms in writing on the lender's letterhead before you pay.",
];

const bankGuides = [
  { href: "/hdfc-credit-card-settlement-percentage", label: "HDFC credit card" },
  { href: "/settlement-waiver-percentage-of-hdfc-bank", label: "HDFC Bank loans" },
  { href: "/settlement-waiver-percentage-of-sbi-bank-loans", label: "SBI loans" },
  { href: "/settlement-waiver-percentage-of-icici-bank", label: "ICICI Bank" },
  { href: "/settlement-waiver-percentage-of-axis-bank", label: "Axis Bank" },
  { href: "/settlement-waiver-percentage-of-yes-bank-loans", label: "Yes Bank" },
  { href: "/settlement-waiver-percentage-of-rbl-bank-loans", label: "RBL Bank" },
  { href: "/loan-settlement-kitne-percent-hota-hai", label: "हिंदी में पढ़ें" },
];

const relatedLinks = [
  { href: "/loan-settlement-amount-calculator", label: "Settlement amount calculator" },
  { href: "/personal-loan-settlement", label: "Personal loan settlement" },
  { href: "/credit-card-settlement", label: "Credit card settlement" },
  { href: "/blog/minimum-settlement-amount-personal-loan", label: "Minimum settlement amount" },
  { href: "/does-loan-settlement-affect-cibil-score", label: "Settlement and your CIBIL score" },
  { href: "/services/loan-settlement/lok-adalat", label: "Settling in Lok Adalat" },
];

const linkClass = "text-[#b88a22] font-semibold underline";

export default function LoanSettlementPercentagePage() {
  const tocSections = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "no-fixed-rate", title: "No Fixed Rate" },
    { id: "percent-of-what", title: "Percentage of What?" },
    { id: "factors", title: "What Lenders Look At" },
    { id: "work-out-offer", title: "Work Out Your Offer" },
    { id: "bank-guides", title: "Bank Guides" },
    { id: "warning-signs", title: "Warning Signs" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Loan Settlement Percentage", href: "/loan-settlement-percentage" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        <div className="bg-black text-white">
          <div className="container mx-auto px-4 py-20 md:py-28 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight mt-10">
              Loan Settlement Percentage: <span className="text-[#D2A02A]">How Much Will You Actually Pay?</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              For personal loans and credit cards, no law sets the percentage. Here is what really decides it, and how to work out an offer you can keep.
            </p>
            <Link href="/loan-settlement-amount-calculator" className="inline-block bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg">
              Estimate Your Settlement
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-3/4 min-w-0">
              <TableOfContents sections={tocSections} />

              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm mt-8 space-y-12">
                <section id="quick-answer" className="scroll-mt-32 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick answer</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>There is no official or guaranteed settlement percentage in India.</li>
                    <li>Each lender decides under its own board-approved policy, case by case.</li>
                    <li>Always ask whether a percentage refers to the principal or the total outstanding.</li>
                    <li>Compare offers in rupees, and only agree to an amount you can really pay.</li>
                  </ul>
                </section>

                <section id="no-fixed-rate" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why there is no fixed settlement percentage</h2>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    Under RBI's <a href="https://www.rbi.org.in/scripts/NotificationUser.aspx?Id=12513&Mode=0" target="_blank" rel="noopener noreferrer" className={linkClass}>2023 framework for compromise settlements</a>, regulated lenders need a board-approved policy, including the limits on the sacrifice they may accept. A settlement is a negotiated agreement, so a borrower has no right to a set discount and the lender is free to refuse.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Percentages quoted online, including averages, describe past cases at best. They cannot tell you what your lender will accept on your account.
                  </p>
                </section>

                <section id="percent-of-what" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Percentage of what? The question that changes everything</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Take an account with ₹4,00,000 of principal and ₹6,00,000 of total outstanding after interest and penalties. The same percentage produces very different payments. This table is only arithmetic, not a prediction of what any lender will accept.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr>
                          <th className="p-4 bg-gray-100 font-bold text-gray-900 border-b border-gray-300">You pay</th>
                          <th className="p-4 bg-gray-100 font-bold text-gray-900 border-b border-gray-300">If measured on principal</th>
                          <th className="p-4 bg-gray-100 font-bold text-gray-900 border-b border-gray-300">If measured on outstanding</th>
                        </tr>
                      </thead>
                      <tbody>
                        {examples.map((row) => (
                          <tr key={row.percent}>
                            <td className="p-4 border-b border-gray-200 font-semibold">{row.percent}%</td>
                            <td className="p-4 border-b border-gray-200 text-gray-700">{formatRupees(row.ofPrincipal)}</td>
                            <td className="p-4 border-b border-gray-200 text-gray-700">{formatRupees(row.ofOutstanding)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="factors" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What lenders look at</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {factors.map(([title, detail]) => (
                      <div key={title} className="p-5 rounded-xl border border-gray-200">
                        <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="work-out-offer" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">How to work out your offer</h2>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 text-lg">
                    {steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    For a starting estimate, use our <Link href="/loan-settlement-amount-calculator" className={linkClass}>settlement amount calculator</Link>. If you have received an offer, compare it using the table above, and read <Link href="/how-to-know-if-the-settlement-letter-is-valid" className={linkClass}>how to check a settlement letter</Link> before paying.
                  </p>
                </section>

                <section id="bank-guides" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Settlement percentage by bank</h2>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    These guides cover how settlement talks work with specific lenders. Any range mentioned is a guide, not a promise.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {bankGuides.map((bank) => (
                      <Link key={bank.href} href={bank.href} className="px-4 py-2 rounded-full border border-[#D2A02A] text-[#b88a22] font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors">
                        {bank.label}
                      </Link>
                    ))}
                  </div>
                </section>

                <section id="warning-signs" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Warning signs when someone quotes a percentage</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>A guaranteed waiver before anyone has seen your account details.</li>
                    <li>A demand to pay a recovery agent personally, or on a verbal promise.</li>
                    <li>A percentage with no rupee amount or written terms.</li>
                    <li>Pressure to accept today, without time to read the letter.</li>
                  </ul>
                  <p className="text-lg leading-relaxed mt-4 text-gray-700">
                    Also understand what happens next. A settled account can lower your score, so read about the <Link href="/does-loan-settlement-affect-cibil-score" className={linkClass}>effect on your CIBIL score</Link> first.
                  </p>
                </section>

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <details key={faq.question} className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                        <summary className="font-semibold text-gray-900 cursor-pointer">{faq.question}</summary>
                        <p className="text-gray-700 leading-relaxed mt-3">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-6">
                    This page is general information, not legal advice on your specific case. Last updated 10 November 2026.
                  </p>
                </section>
              </div>
            </div>

            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Want a realistic figure?</h3>
                  <p className="text-gray-600 mb-6 text-sm">Speak to our team about your lender and account.</p>
                  <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4">
                    Call +91-8700343611
                  </a>
                  <Link href="/contact" className="block w-full border border-[#D2A02A] text-[#b88a22] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors">
                    Request Callback
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related guides</h3>
                  <ul className="space-y-3 text-sm">
                    {relatedLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                          <span className="mr-2">›</span> {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
