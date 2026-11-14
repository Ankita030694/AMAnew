import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const PAGE_URL = "https://www.amalegalsolutions.com/services/builder-not-paying-contractor-bill-retention-money-recovery";

export const metadata = {
  alternates: { canonical: PAGE_URL },
  title: "Builder Not Paying Contractor Bill or Retention Money? Legal Guide",
  description:
    "Completed site work but the builder won't clear your RA bill, final bill or retention money? Learn how civil, interior and sub-contractors recover stuck payments.",
  keywords:
    "builder not paying contractor bill legal action, contractor payment stuck with builder how to recover, client not paying final bill after construction work, retention money not released after defect liability period, subcontractor payment recovery from main contractor, legal notice format for unpaid construction work",
  openGraph: {
    title: "Builder Not Paying Contractor Bill or Retention Money? Legal Guide",
    description:
      "How contractors prove work done, beat the 'bill not certified' and 'sign the no-dues letter' tactics, recover retention money, and use arbitration to get paid.",
    url: PAGE_URL,
    type: "article",
  },
};

const sections = [
  { id: "short-answer", title: "1. The Short Answer" },
  { id: "not-certified", title: "2. 'Our Engineer Hasn't Checked Your Bill'" },
  { id: "no-dues", title: "3. 'Sign the No-Dues Letter First'" },
  { id: "retention", title: "4. Retention Money" },
  { id: "deductions", title: "5. Delay Penalties and Back-Charges" },
  { id: "subcontractors", title: "6. Sub-Contractors" },
  { id: "notice", title: "7. The Legal Notice" },
  { id: "routes", title: "8. Arbitration, Court or MSME" },
  { id: "faqs", title: "9. Frequently Asked Questions" },
];

const relatedPages = [
  { title: "Company Not Paying Your Bill? Legal Action", href: "/services/company-not-paying-pending-bill-legal-action-india" },
  { title: "Client Not Paying Invoice After Delivery", href: "/services/client-not-paying-invoice-after-delivery-legal-recovery" },
  { title: "Buyer Not Paying After 45 Days? MSME Recovery", href: "/blog/buyer-not-paying-msme-payment-after-45-days-recovery" },
  { title: "Dealer Not Paying? Using Security Cheques Legally", href: "/blog/dealer-not-paying-money-security-cheque-bounce-recovery" },
  { title: "Arbitration Services", href: "/services/arbitration" },
  { title: "Contract Drafting Services", href: "/contract-drafting-services-in-delhi-ncr" },
  { title: "Breach of Contract Notice", href: "/breach-of-contract-notice" },
];

const faqs = [
  {
    q: "The builder is not paying my contractor bill. What legal action can I take?",
    a: "Collect your work order, measurement records, RA bills, site photos, gate passes and WhatsApp approvals, and send a lawyer's notice demanding payment within a deadline. If your contract has an arbitration clause, the notice can also invoke arbitration. If there is no arbitration clause, claims of ₹3 lakh or more go through compulsory pre-institution mediation and then a Commercial Court suit. If you are a Udyam-registered micro or small enterprise, MSME Samadhaan is another option.",
  },
  {
    q: "The builder says my bill is not certified by its engineer. Can I still claim payment?",
    a: "Yes. Certification is a procedure in your contract, not a reason to keep your money forever. If the employer's engineer does not measure or certify within the time the contract sets, or certifies without reason for less, an arbitrator or court can decide the amount from your own records: joint measurement sheets, drawings, site photos, gate passes, material delivery challans and messages approving the work. A building that has been occupied or handed over is strong evidence the work was done.",
  },
  {
    q: "I signed a no-dues or full and final letter to get part payment. Can I still recover the balance?",
    a: "Possibly. In National Insurance Co. v. Boghara Polyfab (2008), the Supreme Court held that a no-claims certificate obtained by coercion or financial pressure does not automatically bar the contractor's claim, and the dispute can go to arbitration. But in Union of India v. Master Construction (2011), it said a bare allegation of coercion is not enough. You need evidence, and the best evidence is a written protest sent promptly after signing, saying you signed under pressure to get your own money released.",
  },
  {
    q: "Retention money was not released after the defect liability period. How do I recover it?",
    a: "Check the clause in your contract: it says when retention is released (usually after the defect liability period ends, often 12 months after completion) and what you must submit. Write to the employer listing the completion date, the end of the defect period and any defects you fixed, and ask for release with interest. If it is refused without a valid reason, retention is a debt like any other bill and can be claimed through notice, arbitration or a suit.",
  },
  {
    q: "Can a sub-contractor recover payment directly from the project owner?",
    a: "Usually not. A sub-contractor's contract is with the main contractor, so the claim is against the main contractor even if the owner has not paid it. The exception is where the owner agreed directly with you, for example by issuing your work order, approving your bills or promising to pay you. 'Pay when paid' clauses do not automatically defeat a sub-contractor's claim; their effect depends on the exact wording.",
  },
];

const linkCls = "text-[#D29E0D] hover:underline font-bold";

export default function BuilderNotPayingContractorPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Builder Not Paying Contractor", href: "/services/builder-not-paying-contractor-bill-retention-money-recovery" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Builder or Client Holding Back Your Construction Bills or Retention Money? How Contractors Recover Dues Fast",
    description:
      "How civil, interior and sub-contractors in India recover unpaid RA bills, final bills and retention money: proving work, no-dues letters, deductions, notices and arbitration.",
    author: { "@type": "Organization", name: "AMA Legal Solutions", url: "https://www.amalegalsolutions.com" },
    publisher: {
      "@type": "Organization",
      name: "AMA Legal Solutions",
      logo: { "@type": "ImageObject", url: "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" },
    },
    datePublished: "2026-11-14",
    dateModified: "2026-11-14",
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.amalegalsolutions.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.amalegalsolutions.com/services" },
      { "@type": "ListItem", position: 3, name: "Builder Not Paying Contractor", item: PAGE_URL },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-[#30261C]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-[#EBE9E4]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#30261C 1px, transparent 1px)", backgroundSize: "20px 20px" }}
        ></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block text-[#D29E0D] text-xs md:text-sm font-bold uppercase tracking-widest mb-4 bg-[#D29E0D]/10 px-4 py-1.5 rounded-full">
              Contractor Payment Recovery
            </span>
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-4 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
              Builder or Client Holding Back Your Construction Bills or Retention Money? <span className="text-[#D29E0D]">How Contractors Recover Dues Fast</span>
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              The work is done, the site is handed over, and the RA bills, final bill or 5 to 10% retention are still pending. Here is how civil, interior, electrical, plumbing and solar contractors recover what they are owed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt /> Talk to a Recovery Lawyer
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-white border-2 border-[#D29E0D] text-[#D29E0D] hover:bg-[#D29E0D] hover:text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
                  <FaPhone /> +91 8700343611
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 pb-24 flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-[20%] hidden lg:block">
          <div className="sticky top-32">
            <h4 className="text-xl font-bold mb-6 text-[#30261C] border-b pb-2">Guide Contents</h4>
            <TableOfContents sections={sections} orientation="vertical" />
          </div>
        </aside>

        <main className="lg:w-[55%]">
          <article className="prose prose-lg max-w-none text-[#30261C]/90 leading-relaxed">
            <section id="short-answer" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">1. The Short Answer</h2>
              <div className="bg-[#EBE9E4] p-6 rounded-2xl mb-6 text-base text-[#30261C]/90 border-l-4 border-[#D29E0D]">
                A builder or client cannot hold your bills forever by refusing to certify them or by demanding a &ldquo;no-dues&rdquo; letter. Your site records prove the work, a no-dues letter signed under financial pressure does not automatically end your claim if you protest promptly, and retention money becomes payable once the defect liability period ends. Most construction contracts have an <strong>arbitration clause</strong>, so the usual route is: a lawyer&apos;s notice that also invokes arbitration, then arbitration, with interim protection from the court if the builder is moving assets. Without arbitration, it is mediation and a Commercial Court suit.
              </div>
            </section>

            <section id="not-certified" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">2. &ldquo;Our Engineer Hasn&apos;t Checked Your Bill Yet&rdquo;</h2>
              <p>
                Most contracts say bills are paid after the employer&apos;s engineer or project manager measures and certifies them. Builders who want to delay simply don&apos;t certify. But certification is a procedure, not a veto. If the engineer does not act within the time the contract sets, or cuts your bill without reasons, an arbitrator or court can decide what you are owed from your own records.
              </p>
              <div className="overflow-x-auto my-8">
                <table className="min-w-full bg-white border border-[#EBE9E4] rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#EBE9E4] text-[#30261C]">
                      <th className="px-6 py-4 text-left font-bold text-sm">Record</th>
                      <th className="px-6 py-4 text-left font-bold text-sm">What it proves</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBE9E4]">
                    <tr><td className="px-6 py-4 text-sm font-semibold">Work order, BOQ, rate schedule, approved drawings</td><td className="px-6 py-4 text-sm">What you were asked to do and at what rates</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">Joint measurement sheets, measurement book entries</td><td className="px-6 py-4 text-sm">Quantities done, especially if the client&apos;s engineer signed them</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">Material challans, gate passes, labour registers</td><td className="px-6 py-4 text-sm">Materials and workers actually went to that site on those dates</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">Dated site photos and videos</td><td className="px-6 py-4 text-sm">Progress and completion of each stage</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">WhatsApp approvals, site instructions, extra-work emails</td><td className="px-6 py-4 text-sm">The client approved the work, including variations</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">GST invoices, RA bills sent, part-payments</td><td className="px-6 py-4 text-sm">What you billed and what the client already paid, which shows it accepted the work</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">Handover, occupancy, flats sold or shop opened</td><td className="px-6 py-4 text-sm">The client is using the work</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                Ask for a joint measurement in writing. If the client refuses or ignores it, record your own measurement with photos and send it to them. That refusal itself becomes evidence. Extra work done on oral instructions can be claimed too, as long as you can show the client asked for it and accepted it.
              </p>
            </section>

            <section id="no-dues" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">3. &ldquo;Sign the No-Dues Letter If You Want Your Money&rdquo;</h2>
              <p>
                This is the second classic tactic: the builder releases part of your final bill only if you sign a &ldquo;no-dues&rdquo;, &ldquo;no-claims&rdquo; or &ldquo;full and final&rdquo; letter. Contractors with salaries and suppliers to pay often sign.
              </p>
              <p>
                In <em>National Insurance Co. v. Boghara Polyfab</em> (2008), the Supreme Court held that a discharge or no-claims certificate obtained through coercion, undue influence or economic pressure does not automatically bar the claim, and such a dispute can still be referred to arbitration. In <em>Union of India v. Master Construction Co.</em> (2011), it added the other half: a bare allegation of coercion is not enough; there must be evidence.
              </p>
              <p><strong>What this means for you:</strong></p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li><strong>Before signing,</strong> write &ldquo;signed under protest, balance claims reserved&rdquo; if you can, or keep the messages showing payment was conditional on signing.</li>
                <li><strong>Right after signing,</strong> send a written protest by email and post saying you signed under financial pressure to receive your own undisputed money, and that you reserve your claim for the balance.</li>
                <li><strong>Do not wait months.</strong> The longer you stay silent, the more it looks like a genuine settlement.</li>
              </ul>
            </section>

            <section id="retention" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">4. Retention Money Not Released</h2>
              <p>
                Most contracts hold back 5 to 10% of each bill as retention, released after the <strong>defect liability period</strong> (often 12 months from completion), sometimes half at completion and half later. The client can use it to fix genuine defects you failed to repair after notice. It cannot keep it indefinitely.
              </p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li>Note the completion or handover date and when the defect period ends.</li>
                <li>Keep records of any defect complaints and how you fixed them.</li>
                <li>Once the period ends, apply in writing for release, attaching the completion certificate or handover proof.</li>
                <li>If your contract allowed a bank guarantee in place of retention, ask for the guarantee to be returned and watch for wrongful encashment; courts can restrain encashment only in narrow cases such as fraud.</li>
              </ul>
              <p>
                Unreleased retention is simply a debt. It can be claimed, with interest, through the same notice and arbitration or suit as any unpaid bill.
              </p>
            </section>

            <section id="deductions" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">5. Delay Penalties, Back-Charges and &ldquo;Quality Issues&rdquo;</h2>
              <p>
                When a claim arrives, many builders answer with deductions: liquidated damages for delay, back-charges for material, or sudden quality complaints. These are not automatic.
              </p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li><strong>Delay deductions:</strong> keep records of every delay caused by the client: late drawings, late site access, late payments, design changes and material it was supposed to supply. Delay caused by the client cannot be charged to you, and in <em>Kailash Nath Associates v. DDA</em> (2015) the Supreme Court held that liquidated damages are only a ceiling on reasonable compensation.</li>
                <li><strong>Quality complaints:</strong> complaints raised for the first time after you demand payment are weak, especially when the work was measured, paid in part or occupied without objection.</li>
                <li><strong>Back-charges:</strong> ask for the detailed calculation and supporting documents in writing.</li>
              </ul>
            </section>

            <section id="subcontractors" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">6. Sub-Contractors: Who Do You Claim From?</h2>
              <p>
                A sub-contractor&apos;s contract is with the main contractor, so the claim is normally against the main contractor even if the project owner has not paid it. You can claim directly from the owner only if the owner dealt with you directly, for example by issuing your work order, certifying your bills or promising payment. &ldquo;Pay when paid&rdquo; clauses do not automatically defeat your claim; much depends on the wording and whether the main contractor actually pursued the owner. For more on sub-contractor recoveries, see LegalRecovery.in&apos;s guide to <a href="https://www.legalrecovery.in/subcontractor-payment-recovery-india" target="_blank" rel="noopener" className={linkCls}>sub-contractor payment recovery in India</a>.
              </p>
            </section>

            <section id="notice" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">7. The Legal Notice for Unpaid Construction Work</h2>
              <p>A strong notice to a builder or main contractor:</p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li>refers to the work order or contract and its payment and retention clauses;</li>
                <li>lists every RA bill, the final bill and retention, with dates, amounts, payments received and the balance;</li>
                <li>attaches or refers to measurement, handover and approval records;</li>
                <li>rejects unexplained deductions and records any no-dues letter as signed under protest;</li>
                <li>claims interest and gives a deadline; and</li>
                <li>if the contract has an arbitration clause, <strong>invokes arbitration</strong> and proposes an arbitrator. Under Section 21 of the Arbitration and Conciliation Act, 1996, arbitration begins on the date the other side receives this request, which also matters for limitation.</li>
              </ul>
              <p>
                You can <a href="https://www.legalrecovery.in/recovery/contractor-payment" target="_blank" rel="noopener" className={linkCls}>send a legal notice to a builder or main contractor for stuck construction payments on LegalRecovery.in</a>, our online notice service, delivered by Speed Post, email and WhatsApp.
              </p>
            </section>

            <section id="routes" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">8. If They Still Don&apos;t Pay: Arbitration, Court or MSME</h2>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li><strong>Arbitration.</strong> If the builder does not agree on an arbitrator within 30 days, the High Court (or the arbitral institution it designates) appoints one under Section 11. Domestic arbitrations are expected to finish within 12 months of pleadings closing, extendable by 6 months by consent (Section 29A). The award carries interest under Section 31(7) and is enforced like a court decree.</li>
                <li><strong>Interim protection.</strong> If the builder is selling flats or moving money to defeat your claim, the court can order security or freeze assets under Section 9, even before arbitration starts.</li>
                <li><strong>No arbitration clause.</strong> Construction contracts are commercial disputes. For claims of ₹3 lakh or more, try pre-institution mediation, then file in the Commercial Court, with a summary suit possible where your bills were admitted. See our guide on <Link href="/services/client-not-paying-invoice-after-delivery-legal-recovery" className={linkCls}>recovering an unpaid invoice through mediation and a summary suit</Link>.</li>
                <li><strong>MSME Samadhaan.</strong> If you were registered under Udyam as a micro or small enterprise before the work, the MSME Facilitation Council can hear the claim with interest at three times the RBI bank rate, and a buyer challenging the award must first deposit 75% of it. See our <Link href="/blog/buyer-not-paying-msme-payment-after-45-days-recovery" className={linkCls}>MSME 45-day payment guide</Link>.</li>
                <li><strong>Large dues from a company.</strong> For undisputed dues of ₹1 crore or more from a builder company, see <Link href="/services/company-not-paying-pending-bill-legal-action-india" className={linkCls}>legal action when a company is not paying your bill</Link>. Builders often raise disputes, so this route needs care.</li>
                <li><strong>Bounced cheques.</strong> If the builder gave you a cheque that bounced, see our <Link href="/blog/dealer-not-paying-money-security-cheque-bounce-recovery" className={linkCls}>security cheque guide</Link>.</li>
              </ul>
              <p>
                <strong>Time limit:</strong> claims are generally subject to a three-year limitation period from when payment became due, for example from the final bill&apos;s due date or the end of the defect liability period for retention. A written acknowledgement or part-payment restarts the clock.
              </p>
            </section>

            <section id="faqs" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">9. Frequently Asked Questions</h2>
              <div className="space-y-8">
                {faqs.map((f) => (
                  <div key={f.q}>
                    <h3 className="font-bold text-xl mb-2">{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-16 p-10 bg-[#D29E0D]/10 rounded-3xl border-2 border-dashed border-[#D29E0D] text-center">
              <h3 className="text-2xl font-bold mb-4">Want to Send a Formal Lawyer Notice Today?</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                A notice from an advocate that lists your bills, rejects unexplained deductions and invokes arbitration tells the builder the delay is over. Start on <a href="https://www.legalrecovery.in/recovery/contractor-payment" target="_blank" rel="noopener" className={linkCls}>LegalRecovery.in</a>. If they still don&apos;t pay, AMA Legal Solutions can take the matter to arbitration, the Commercial Court or MSME Samadhaan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-[#D29E0D] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b88a22] transition-all shadow-lg">
                    Get a Free Case Review
                  </button>
                </Link>
                <a href="https://wa.me/918700343611" target="_blank" rel="noopener" className="flex items-center gap-2">
                  <button className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#128C7E] transition-all shadow-lg flex items-center gap-2">
                    <FaWhatsapp size={20} /> WhatsApp Us
                  </button>
                </a>
              </div>
            </div>

            <p className="text-xs text-[#30261C]/60 mt-8 italic">
              This guide is general information on Indian law as of November 2026, not legal advice for your specific case. Speak to an advocate before acting.
            </p>
          </article>
        </main>

        <aside className="lg:w-[25%]">
          <div className="sticky top-32 space-y-8">
            <div className="bg-[#30261C] text-[#EBE9E4] p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Get Your Site Dues Released</h4>
              <p className="text-sm opacity-80 mb-6">
                Our lawyers review your contract and site records, send the notice, and run arbitration, court and MSME claims for contractors across India.
              </p>
              <div className="space-y-4">
                {["Notices invoking arbitration", "Construction arbitration", "Retention and final bill claims", "Section 9 interim protection"].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12} /></div>
                    <span className="text-xs">{t}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl mt-8 transition-all">
                  Contact a Recovery Lawyer
                </button>
              </Link>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
              <h4 className="text-xl font-bold mb-6 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>Related Resources</h4>
              <div className="space-y-4">
                {relatedPages.map((page) => (
                  <Link key={page.href} href={page.href} className="block group">
                    <p className="text-sm text-gray-600 group-hover:text-[#D29E0D] transition-colors mb-1">{page.title}</p>
                    <div className="h-0.5 w-full bg-gray-50 group-hover:bg-[#D29E0D]/20 transition-all"></div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-6 border border-[#D29E0D]/20 rounded-2xl bg-[#D29E0D]/5 text-center">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Recovery Helpline</p>
              <a href="tel:+918700343611" className="text-xl font-bold text-[#30261C] hover:text-[#D29E0D] transition-colors">
                +91 8700343611
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
