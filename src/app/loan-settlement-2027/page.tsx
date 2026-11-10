import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { nextNationalLokAdalat } from "@/data/nationalLokAdalat";

const pageUrl = "https://www.amalegalsolutions.com/loan-settlement-2027";

const faqs = [
  {
    question: "Is there a new loan settlement law in 2027?",
    answer:
      "We found no new law that gives borrowers a right to settlement in 2027. The main change is to how lenders may recover dues: RBI's recovery conduct directions take effect on 1 January 2027.",
  },
  {
    question: "What are the recovery agent calling hours from January 2027?",
    answer:
      "Published summaries of the directions say borrowers may be contacted between 8 am and 7 pm, unless the borrower or guarantor has asked to be contacted at another time.",
  },
  {
    question: "Can a bank refuse a settlement in 2027?",
    answer:
      "Yes. Settlement is a negotiated arrangement decided under the lender's board-approved policy. It is not available to a borrower as a matter of right.",
  },
  {
    question: "Is there a fixed settlement percentage for 2027?",
    answer:
      "No. Lenders decide case by case under their own policies. Read our guide on how settlement percentages work before you accept or make an offer.",
  },
  {
    question: "Can recovery agents contact my family under the new rules?",
    answer:
      "Published summaries say recovery discussions should ordinarily be confined to the borrower or guarantor, and pressure on or harassment of relatives, friends or co-workers is prohibited.",
  },
  {
    question: "Can a lender lock my phone for non-payment?",
    answer:
      "Published summaries say a lender cannot ordinarily restrict a device. A limited exception applies where the lender financed that device, the agreement clearly allows it and the borrower received notice, with incoming calls and emergency functions kept working.",
  },
  {
    question: "Can I get a new loan from the same bank after settlement?",
    answer:
      "Lenders must apply a cooling period before fresh credit to a borrower whose account was settled. It is set by board-approved policy and is reported as at least 12 months for non-farm loans.",
  },
  {
    question: "Should I wait until 2027 to settle my loan?",
    answer:
      "Do not delay just for the date. The new rules govern recovery conduct and do not reduce what you owe, while interest and legal action may continue. Start when you have a realistic offer and documents ready.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Loan Settlement", "item": "https://www.amalegalsolutions.com/services/loan-settlement" },
    { "@type": "ListItem", "position": 3, "name": "Loan Settlement in 2027", "item": pageUrl },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement in 2027: What Changes for Borrowers in India",
  "description": "What changes for loan settlement and recovery in India in 2027, including the RBI recovery conduct directions taking effect on 1 January 2027.",
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
  title: "Loan Settlement in 2027: What Changes for Borrowers in India",
  description:
    "What changes for loan settlement in India in 2027: new RBI recovery rules from 1 January, what stays the same, key dates, and how to plan your settlement.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Loan Settlement in 2027: What Changes for Borrowers in India",
    description: "New RBI recovery rules from 1 January 2027, what stays the same, key dates, and how to plan your settlement.",
    url: pageUrl,
    type: "article",
    images: [{ url: "/services/3.png", width: 1200, height: 630, alt: "Loan Settlement in 2027" }],
  },
};

const changes = [
  ["Contact hours", "Calls and visits limited to 8 am to 7 pm, unless the borrower or guarantor asks otherwise."],
  ["Who can be contacted", "Discussions ordinarily confined to the borrower or guarantor. Pressuring relatives, friends or co-workers is prohibited."],
  ["Harassment", "Harsh practices are prohibited, including threats, abusive language and excessive calls or messages."],
  ["Call records", "Recovery calls must be recorded or documented and preserved, generally for six months."],
  ["Recovery agents", "Agents need certification from the Indian Institute of Banking and Finance."],
  ["Compensation", "Lender policies must provide compensation for losses from recovery action that breaks the directions."],
  ["Device locking", "Restricting a phone or laptop is allowed only in limited cases, and the lender cannot access personal data on it."],
];

const staysSame = [
  "Settlement is negotiated. It is not a borrower's right, and a lender can refuse.",
  "Each lender follows its own board-approved policy, so there is no fixed percentage.",
  "Paying less than the full amount is commonly reported as settled, which can lower your credit score.",
  "A cooling period applies before the same lender can give you fresh credit.",
  "You still need the terms in writing before paying, and a closure letter or no-dues certificate after.",
];

const dates = [
  { date: nextNationalLokAdalat.long, event: "Next National Lok Adalat", href: "/services/loan-settlement/lok-adalat", cta: "Settling in Lok Adalat" },
  { date: "1 January 2027", event: "RBI recovery conduct directions take effect", href: "/what-are-my-legal-rights-when-dealing-with-recovery-agents", cta: "Your rights with recovery agents" },
  { date: "February to March 2027", event: "Banks work towards financial year-end recovery targets", href: "/benefits-of-settling-your-loan-in-march", cta: "March 2027 timeline" },
  { date: "31 March 2027", event: "Financial year ends", href: "/best-time-for-loan-settlement", cta: "Best time to settle" },
];

const planSteps = [
  "Get a written breakup of principal, interest, penalties and other charges.",
  "Work out the amount you can truly arrange, and by when.",
  "Collect proof of hardship, such as a termination letter or medical records.",
  "Make a written proposal through the lender's official channel.",
  "Get the settlement letter before paying, and pay only through an official channel.",
  "Collect the closure letter or no-dues certificate, then check your credit report.",
];

const productGuides = [
  { href: "/personal-loan-settlement", title: "Personal loan settlement", text: "Process, negotiation and your options." },
  { href: "/credit-card-settlement", title: "Credit card settlement", text: "How settling card dues works." },
  { href: "/loan-settlement-percentage", title: "Settlement percentage", text: "What decides how much you pay." },
  { href: "/personal-loan-settlement-2027-maximum-waiver", title: "Personal loan waiver", text: "Building your strongest offer in 2027." },
  { href: "/credit-card-settlement-2027-maximum-waiver", title: "Credit card waiver", text: "Breaking up your card balance." },
  { href: "/payday-loan-settlement-2027-maximum-waiver", title: "Payday loan waiver", text: "Checking who your lender really is." },
  { href: "/why-start-of-2027-is-best-time-to-settle-loans", title: "Settling in early 2027", text: "When it helps, and when it does not." },
  { href: "/best-loan-settlement-agencies-2027", title: "Choosing an agency", text: "Checks to make before you pay anyone." },
];

const sources = [
  { href: "https://taxguru.in/rbi/rbi-amends-hfc-directions-align-recovery-agent-rules-nbfc-responsible-business-conduct-directions.html", label: "RBI housing finance company amendment, as reproduced by TaxGuru" },
  { href: "https://www.indialaw.in/blog/banking-and-finance/rbi-nbfc-loan-recovery-amendment-2026/", label: "IndiaLaw summary of the NBFC amendment" },
  { href: "https://agrudpartners.com/rbi-loan-recovery-responsible-business-conduct/", label: "Agrud Partners summary of the commercial bank amendment" },
  { href: "https://taxguru.in/rbi/rbi-commercial-banks-resolution-stressed-assets-directions-2025.html", label: "RBI Resolution of Stressed Assets Directions, 2025, as reproduced by TaxGuru" },
];

const linkClass = "text-[#b88a22] font-semibold underline";

export default function LoanSettlement2027Page() {
  const tocSections = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "what-changes", title: "What Changes" },
    { id: "what-stays", title: "What Stays the Same" },
    { id: "key-dates", title: "Key Dates" },
    { id: "plan", title: "How to Plan" },
    { id: "if-rules-broken", title: "If Rules Are Broken" },
    { id: "faqs", title: "FAQs" },
    { id: "sources", title: "Sources" },
  ];

  const breadcrumbItems = [
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Loan Settlement in 2027", href: "/loan-settlement-2027" },
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
              Loan Settlement in 2027: <span className="text-[#D2A02A]">What Changes for Borrowers</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              New RBI recovery rules take effect on 1 January 2027. They change how lenders can pursue you, not what you owe. Here is what that means for your settlement.
            </p>
            <a href="#what-changes" className="inline-block bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg">
              See What Changes
            </a>
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
                    <li>From 1 January 2027, stricter RBI rules govern how banks, NBFCs and housing finance companies recover dues.</li>
                    <li>We found no new law giving borrowers a right to settlement or a fixed discount in 2027.</li>
                    <li>Settlement remains a negotiation under each lender's own policy.</li>
                    <li>The new rules do not reduce what you owe, so do not delay only because of the date.</li>
                  </ul>
                </section>

                <section id="what-changes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What changes from 1 January 2027</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    RBI notified amendments on recovery conduct on 6 August 2026 for lender categories including commercial banks, NBFCs and housing finance companies. This table summarises the main points. Details can differ by type of lender, so check the final text that applies to yours.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr>
                          <th className="p-4 bg-gray-100 font-bold text-gray-900 border-b border-gray-300">Area</th>
                          <th className="p-4 bg-gray-100 font-bold text-gray-900 border-b border-gray-300">What the rules say</th>
                        </tr>
                      </thead>
                      <tbody>
                        {changes.map(([area, rule]) => (
                          <tr key={area}>
                            <td className="p-4 border-b border-gray-200 font-semibold align-top">{area}</td>
                            <td className="p-4 border-b border-gray-200 text-gray-700">{rule}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="what-stays" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What stays the same</h2>
                  <ul className="space-y-3">
                    {staysSame.map((item) => (
                      <li key={item} className="flex items-start text-gray-700 text-lg">
                        <span className="text-[#D2A02A] font-bold mr-3">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    Before you make an offer, read <Link href="/loan-settlement-percentage" className={linkClass}>how settlement percentages work</Link> and the <Link href="/does-loan-settlement-affect-cibil-score" className={linkClass}>effect on your CIBIL score</Link>.
                  </p>
                </section>

                <section id="key-dates" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Key dates</h2>
                  <div className="space-y-4">
                    {dates.map((item) => (
                      <div key={item.date} className="p-5 rounded-xl border border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <p className="font-bold text-gray-900">{item.date}</p>
                          <p className="text-gray-700">{item.event}</p>
                        </div>
                        <Link href={item.href} className={`${linkClass} shrink-0`}>{item.cta}</Link>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    National Lok Adalat dates for 2027 had not been published when this page was last updated.
                  </p>
                </section>

                <section id="plan" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">How to plan a settlement in 2027</h2>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 text-lg">
                    {planSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                  <div className="grid md:grid-cols-3 gap-4 mt-8">
                    {productGuides.map((guide) => (
                      <Link key={guide.href} href={guide.href} className="p-5 rounded-xl border border-gray-200 hover:border-[#D2A02A] transition-colors">
                        <h3 className="font-bold text-gray-900 mb-1">{guide.title}</h3>
                        <p className="text-gray-700 text-sm">{guide.text}</p>
                      </Link>
                    ))}
                  </div>
                </section>

                <section id="if-rules-broken" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">If a lender breaks the rules</h2>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    Keep call logs, messages and the names of anyone who contacted you. Complain to the lender in writing first, then escalate if it does not resolve the problem.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
                    <li><Link href="/how-to-file-complaint-rbi-ombudsman-online" className={linkClass}>File a complaint with the RBI Ombudsman</Link></li>
                    <li><Link href="/recovery-agent-harassment" className={linkClass}>What to do about recovery agent harassment</Link></li>
                  </ul>
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
                </section>

                <section id="sources" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {sources.map((source) => (
                      <li key={source.href}>
                        <a href={source.href} target="_blank" rel="noopener noreferrer" className={linkClass}>{source.label}</a>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 mt-6">
                    This page is general information, not legal advice on your specific case. Last updated 10 November 2026.
                  </p>
                </section>
              </div>
            </div>

            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Planning to settle?</h3>
                  <p className="text-gray-600 mb-6 text-sm">Speak to our team about your lender and account.</p>
                  <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4">
                    Call +91-8700343611
                  </a>
                  <Link href="/contact" className="block w-full border border-[#D2A02A] text-[#b88a22] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors">
                    Request Callback
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
