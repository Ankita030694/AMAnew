import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import InteractiveLeadFunnel from "@/components/InteractiveLeadFunnel";
import { nextNationalLokAdalat } from "@/data/nationalLokAdalat";

const pageUrl = "https://www.amalegalsolutions.com/lok-adalat-notice-from-bank";

const faqs = [
  {
    question: "What is a Lok Adalat notice from a bank?",
    answer:
      "It is an invitation to try to settle a loan dispute before a Lok Adalat. It can come at the pre-litigation stage, before any case is filed, or from a court that has referred a pending case. It is not a finding that you are guilty of anything.",
  },
  {
    question: "Is it compulsory to attend a Lok Adalat notice for a personal loan?",
    answer:
      "A Lok Adalat can only record a settlement that both sides accept, so it cannot impose a decision on you for staying away. Attending is still usually the better choice, because it may be a chance to settle on recorded terms. If you cannot attend, write to the authority named on the notice before the date.",
  },
  {
    question: "What happens if I ignore a Lok Adalat notice?",
    answer:
      "No settlement is recorded without your agreement. But the loan does not go away. The bank can continue recovery and can start or continue legal action in the proper forum. If a case is already pending in court, it continues there, and you must follow that court's dates.",
  },
  {
    question: "Can I be arrested because of a Lok Adalat notice?",
    answer:
      "A Lok Adalat works by compromise and does not decide a dispute on its own. A notice to attend one is not an arrest warrant. A summons or warrant issued by a criminal court is a different document and must be handled through a lawyer without delay.",
  },
  {
    question: "Can I negotiate the amount written on the notice?",
    answer:
      "Yes. The figure on a notice is the bank's claim. Settlement in a Lok Adalat is voluntary, so you can make your own offer based on what you can actually pay. The bank is also free to refuse it.",
  },
  {
    question: "Are Lok Adalat notices for credit cards treated differently?",
    answer:
      "The forum works the same way. Before responding, ask for a statement that separates principal, interest, late fees and other charges, because those charges usually make up the part you can negotiate.",
  },
  {
    question: "Is there any court fee in a Lok Adalat?",
    answer:
      "NALSA states that no court fee is payable when a matter is filed in a Lok Adalat. If you hire a lawyer, the lawyer's professional fee is separate.",
  },
  {
    question: "What happens if I agree in Lok Adalat and then do not pay?",
    answer:
      "A Lok Adalat award is treated as a decree of a civil court and is final, with no appeal. If you default on it, the bank can seek to enforce it. Only commit to an amount and dates you are certain you can meet.",
  },
  {
    question: "Will settling in Lok Adalat affect my CIBIL score?",
    answer:
      "If you pay less than the full outstanding amount, lenders commonly report the account as settled, which can lower your score. Ask for the closure letter or no-dues certificate after payment and check your credit report afterwards.",
  },
  {
    question: "How can I check whether a Lok Adalat notice is genuine?",
    answer:
      "Contact the District Legal Services Authority or court named on the notice using contact details you find yourself, not the number printed on the notice. Quote the case number. Do not pay anyone before you have written terms, and pay only into the bank's own account or through its official channel.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Loan Settlement in Lok Adalat", "item": "https://www.amalegalsolutions.com/services/loan-settlement/lok-adalat" },
    { "@type": "ListItem", "position": 3, "name": "Lok Adalat Notice from Bank", "item": pageUrl },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Lok Adalat Notice from Bank: What It Means and What to Do",
  "description": "What a Lok Adalat notice for a personal loan or credit card means, whether you must attend, what happens if you ignore it, and what to check before signing.",
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
  title: "Lok Adalat Notice from Bank: What It Means & What to Do",
  description:
    "Got a Lok Adalat notice for a personal loan or credit card? Learn what it means, whether you must attend, what happens if you ignore it, and what to check before signing.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Lok Adalat Notice from Bank: What It Means & What to Do",
    description: "What a Lok Adalat notice for a personal loan or credit card means, whether you must attend, and what to check before signing.",
    url: pageUrl,
    type: "article",
    images: [{ url: "/services/3.png", width: 1200, height: 630, alt: "Lok Adalat Notice from Bank" }],
  },
};

const noticeChecks = [
  ["Who issued it", "A District or State Legal Services Authority, a High Court Legal Services Committee, a court, or only the bank's agent or law firm."],
  ["Case or reference number", "You need this to verify the notice and to ask about the listing."],
  ["Date, time and venue", "Confirm these directly. Benches and timings differ by district."],
  ["Lender and account number", "Match them with your own records. Loans sold to an asset reconstruction company may show a different name."],
  ["Amount claimed", "Compare it with your statement of account and ask how it was calculated."],
  ["Stage of the matter", "Look for the words pre-litigation, or the details of a pending case and the court handling it."],
];

const beforeSigning = [
  "The award says the payment is in full and final settlement of the named loan or card account.",
  "Every account being settled is listed by its correct number.",
  "The total, each instalment and each due date are written in figures and words.",
  "Payment goes to the bank's own account or official payment channel.",
  "It states when the bank will issue the closure letter or no-dues certificate.",
  "Any pending case the bank filed against you, and any cheques or auto-debit mandates it holds, are dealt with in the terms.",
  "Co-borrowers and guarantors are covered, if there are any.",
  "You know exactly what happens if a payment is late.",
];

const documents = [
  "The notice and its envelope or message",
  "PAN and Aadhaar",
  "Latest statement of account and sanction letter or card statements",
  "Earlier legal notices and settlement letters",
  "Proof of hardship, such as a termination letter, medical records or salary slips",
  "A realistic budget showing what you can pay and by when",
];

const relatedLinks = [
  { href: "/services/how-banks-recover-unpaid-loans-below-20-lakhs-india", label: "How banks recover loans under ₹20 lakh" },
  { href: "/services/ecs-nach-emi-bounce-legal-notice-loan-recovery", label: "EMI or NACH bounced? What happens next" },
  { href: "/services/loan-settlement/lok-adalat", label: "Loan settlement in Lok Adalat" },
  { href: "/what-is-ots", label: "What is a one-time settlement?" },
  { href: "/what-happens-after-bank-issues-recall-notice", label: "Loan recall notice" },
  { href: "/how-to-reply-to-bank-legal-notice-for-personal-loan-default", label: "Reply to a bank legal notice" },
  { href: "/received-arbitration-notice-from-bank", label: "Arbitration notice from a bank" },
  { href: "/does-loan-settlement-affect-cibil-score", label: "Settlement and your CIBIL score" },
  { href: "/loan-settlement-amount-calculator", label: "Settlement amount calculator" },
];

const bankLinks = [
  { href: "/services/loan-settlement/sbi-bank", label: "SBI" },
  { href: "/services/loan-settlement/hdfc-bank", label: "HDFC Bank" },
  { href: "/services/loan-settlement/icici-bank", label: "ICICI Bank" },
  { href: "/services/loan-settlement/axis-bank", label: "Axis Bank" },
  { href: "/services/loan-settlement/kotak-mahindra", label: "Kotak Mahindra" },
  { href: "/services/loan-settlement/pnb-bank", label: "PNB" },
];

const linkClass = "text-[#b88a22] font-semibold underline";

export default function LokAdalatNoticeFromBankPage() {
  const tocSections = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "what-it-means", title: "What the Notice Means" },
    { id: "read-the-notice", title: "What to Check on It" },
    { id: "genuine", title: "Is It Genuine?" },
    { id: "if-you-ignore", title: "If You Ignore It" },
    { id: "what-to-do", title: "What to Do Now" },
    { id: "before-signing", title: "Before You Sign" },
    { id: "documents", title: "Documents to Carry" },
    { id: "hindi", title: "हिंदी में जानकारी" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Lok Adalat", href: "/services/loan-settlement/lok-adalat" },
    { label: "Lok Adalat Notice from Bank", href: "/lok-adalat-notice-from-bank" },
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
              Lok Adalat Notice from Your Bank: <span className="text-[#D2A02A]">What It Means and What to Do</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto text-gray-200">
              A notice for a personal loan or credit card is not an arrest warrant. It is a chance to settle, on terms you must agree to, before the dispute goes further.
            </p>
            <p className="inline-block bg-white/10 border border-[#D2A02A] rounded-full px-5 py-2 mb-8 text-sm md:text-base font-semibold">
              Next National Lok Adalat: {nextNationalLokAdalat.long}
            </p>
            <div>
              <a href="#lok-adalat-intake" className="inline-block bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg">
                Get Your Notice Reviewed
              </a>
            </div>
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
                    <li>A Lok Adalat notice invites you to try to settle a loan dispute. It does not mean you have lost a case.</li>
                    <li>No settlement can be recorded unless you and the bank both agree.</li>
                    <li>Ignoring it does not end the debt. The bank can continue recovery or legal action.</li>
                    <li>Once you sign and an award is passed, it is final and cannot be appealed. Read every term first.</li>
                  </ul>
                </section>

                <section id="what-it-means" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What a Lok Adalat notice means</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A Lok Adalat is a forum set up under the Legal Services Authorities Act, 1987, where disputes are settled by compromise. Section 19(5) covers both cases pending before a court and disputes that have not yet reached one. So your notice will normally be one of two kinds.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-litigation notice</h3>
                      <p className="text-gray-700 leading-relaxed">
                        The bank has not filed a case on this dispute. According to NALSA, the legal services authority can act on one party's application and then issue notice to the other side.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Notice in a pending case</h3>
                      <p className="text-gray-700 leading-relaxed">
                        A case already exists, and the court has referred it under Section 20 to explore settlement. If settlement fails, the case continues in that court, so keep following its dates.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    Do not confuse it with a <Link href="/what-happens-after-bank-issues-recall-notice" className={linkClass}>loan recall notice</Link>, an <Link href="/received-arbitration-notice-from-bank" className={linkClass}>arbitration notice</Link> or a court summons. Those follow different rules and can have strict deadlines.
                  </p>
                </section>

                <section id="read-the-notice" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What to check on the notice</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr>
                          <th className="p-4 bg-gray-100 font-bold text-gray-900 border-b border-gray-300">Check</th>
                          <th className="p-4 bg-gray-100 font-bold text-gray-900 border-b border-gray-300">Why it matters</th>
                        </tr>
                      </thead>
                      <tbody>
                        {noticeChecks.map(([item, why]) => (
                          <tr key={item}>
                            <td className="p-4 border-b border-gray-200 font-semibold align-top">{item}</td>
                            <td className="p-4 border-b border-gray-200 text-gray-700">{why}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="genuine" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">How to check whether it is genuine</h2>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    Contact the District Legal Services Authority or court named on the notice, using details you find independently, and quote the reference number. Treat these as warning signs:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>A threat of arrest or police action if you do not pay today.</li>
                    <li>A demand for payment into a personal account or personal UPI ID.</li>
                    <li>No authority name, case number or venue.</li>
                    <li>A WhatsApp image with no way to verify it with the authority.</li>
                  </ul>
                </section>

                <section id="if-you-ignore" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What happens if you do not respond or attend</h2>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    NALSA says a Lok Adalat decides a matter only on the basis of a compromise between the parties. So staying away cannot produce a settlement against you. It also gives up a possible chance to close the dispute on recorded terms.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Pre-litigation:</strong> the bank remains free to continue lawful recovery and to take the matter to the proper court, tribunal or arbitration.</li>
                    <li><strong>Pending case:</strong> the case carries on in its original court, and missing that court's dates has its own consequences.</li>
                    <li><strong>Interest and charges:</strong> the outstanding amount may keep growing under your loan terms.</li>
                  </ul>
                  <p className="text-lg leading-relaxed mt-4 text-gray-700">
                    If you cannot attend, write to the authority named on the notice before the date. Ask whether a representative can appear or whether a later date is possible. If agents harass you meanwhile, read <Link href="/what-to-do-if-recovery-agents-harass-you" className={linkClass}>what to do about recovery agent harassment</Link>.
                  </p>
                </section>

                <section id="what-to-do" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What to do after you receive it</h2>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 text-lg">
                    <li>Verify the notice and note the date.</li>
                    <li>Ask the bank for a statement separating principal, interest, penalties and other charges.</li>
                    <li>Work out a lump sum or instalment plan that you can truly sustain. Our <Link href="/loan-settlement-amount-calculator" className={linkClass}>settlement calculator</Link> gives a starting estimate.</li>
                    <li>Gather evidence of hardship, because it explains why you need a reduction.</li>
                    <li>Decide whether to attend yourself or be represented by a lawyer.</li>
                    <li>Attend with your offer ready, and leave if the terms do not work. You are not obliged to accept.</li>
                  </ol>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    Bank-specific guidance:{" "}
                    {bankLinks.map((bank, index) => (
                      <span key={bank.href}>
                        <Link href={bank.href} className={linkClass}>{bank.label}</Link>
                        {index < bankLinks.length - 1 ? ", " : "."}
                      </span>
                    ))}
                  </p>
                </section>

                <section id="before-signing" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Check these before you sign</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    NALSA states that an award is deemed a civil court decree, is final and binding, and cannot be appealed. Your signature matters, so confirm each point:
                  </p>
                  <ul className="space-y-3">
                    {beforeSigning.map((item) => (
                      <li key={item} className="flex items-start text-gray-700">
                        <span className="text-[#D2A02A] font-bold mr-3">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    If you pay less than the full amount, lenders commonly report the account as settled. Understand the <Link href="/does-loan-settlement-affect-cibil-score" className={linkClass}>effect on your CIBIL score</Link> before you agree.
                  </p>
                </section>

                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents to carry</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {documents.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section id="hindi" lang="hi" className="scroll-mt-32 bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">बैंक से लोक अदालत का नोटिस आया है तो क्या करें?</h2>
                  <p className="leading-relaxed mb-4 text-gray-700">
                    लोक अदालत का नोटिस गिरफ्तारी वारंट नहीं होता। यह लोन या क्रेडिट कार्ड के विवाद को आपसी समझौते से सुलझाने का मौका है। समझौता तभी होगा जब आप और बैंक दोनों सहमत हों।
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>नोटिस जारी करने वाली अथॉरिटी, केस नंबर और तारीख जांचें।</li>
                    <li>बैंक से मूलधन, ब्याज और पेनल्टी का अलग-अलग स्टेटमेंट मांगें।</li>
                    <li>उतनी ही रकम पर सहमति दें जो आप सच में चुका सकें।</li>
                    <li>नोटिस को अनदेखा करने से कर्ज खत्म नहीं होता। बैंक आगे कानूनी कार्रवाई कर सकता है।</li>
                    <li>अवार्ड पर हस्ताक्षर के बाद अपील नहीं होती, इसलिए हर शर्त ध्यान से पढ़ें।</li>
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
                  <p className="text-sm text-gray-500 mt-6">
                    This page is general information, not legal advice on your specific case. Last updated 10 November 2026.
                  </p>
                </section>

                <div id="lok-adalat-intake" className="scroll-mt-32">
                  <InteractiveLeadFunnel preset="lok-adalat" className="my-10" />
                </div>
              </div>
            </div>

            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Received a notice?</h3>
                  <p className="text-gray-600 mb-6 text-sm">Speak to our team before you agree to any figure.</p>
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
