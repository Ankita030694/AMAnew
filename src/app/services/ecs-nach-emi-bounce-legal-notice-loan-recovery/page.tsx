import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import InteractiveLeadFunnel from "@/components/InteractiveLeadFunnel";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const PAGE_URL = "https://www.amalegalsolutions.com/services/ecs-nach-emi-bounce-legal-notice-loan-recovery";

export const metadata = {
  alternates: { canonical: PAGE_URL },
  title: "EMI, ECS or NACH Bounced? What Happens Next & Your Legal Rights",
  description:
    "Missed an EMI or had an ECS, NACH or UPI AutoPay debit bounce? See what the lender can do, which bounce charges are allowed, what a Section 25 notice means, and how to respond.",
  keywords:
    "emi bounce what happens, nach bounce legal notice, ecs bounce case, emi bounce charges, upi autopay emi failed, section 25 notice emi bounce, emi bounce legal action, what happens if emi bounces",
  openGraph: {
    title: "EMI, ECS or NACH Bounced? What Happens Next & Your Legal Rights",
    description:
      "A plain timeline of what follows an EMI bounce, from charges and credit reports to recall notices and Section 25 cases, and what you can do at each stage.",
    url: PAGE_URL,
    type: "article",
  },
};

const sections = [
  { id: "short-answer", title: "1. The Short Answer" },
  { id: "timeline", title: "2. What Happens After a Bounce" },
  { id: "charges", title: "3. Bounce Charges: What's Allowed" },
  { id: "not-your-fault", title: "4. When the Bounce Isn't Your Fault" },
  { id: "section-25", title: "5. Section 25 Notice: Can You Be Jailed?" },
  { id: "calls", title: "6. Recovery Calls and Visits" },
  { id: "what-to-do", title: "7. What to Do Now" },
  { id: "faqs", title: "8. Frequently Asked Questions" },
];

const relatedPages = [
  { title: "Loan Under ₹20 Lakh: How Banks Recover It", href: "/services/how-banks-recover-unpaid-loans-below-20-lakhs-india" },
  { title: "Section 25 PSS Act: Legal Defence", href: "/section-25-payment-and-settlement-act-legal-defense" },
  { title: "Is Section 25 Bailable?", href: "/section-25-payment-and-settlement-act-bailable-or-not" },
  { title: "Section 25 PSSA vs Section 138 NI Act", href: "/section-25-pssa-vs-section-138-ni-act-loan-recovery" },
  { title: "Multiple e-NACH / AutoPay Bounce Charges", href: "/blog/multiple-e-nach-upi-autopay-bounce-charges-harassment-rbi-loan-settlement" },
  { title: "Can You Go to Jail for Not Paying EMI?", href: "/can-you-go-to-jail-for-not-paying-emi" },
  { title: "What Happens After a Recall Notice", href: "/what-happens-after-bank-issues-recall-notice" },
  { title: "Loan Settlement Services", href: "/services/loan-settlement" },
];

const faqs = [
  {
    q: "What happens if my EMI bounces once?",
    a: "Usually the lender charges a bounce or penal charge, your own bank may charge a mandate return fee, and the missed EMI shows as overdue on your credit report. The lender will call and may try the debit again. One bounce does not by itself lead to a court case, but paying the missed EMI quickly stops the account moving into longer overdue categories.",
  },
  {
    q: "How many EMI bounces before the loan becomes an NPA?",
    a: "It is not counted in bounces. Under RBI rules, a loan account is classified as a non-performing asset (NPA) when any amount is overdue for more than 90 days. Before that, banks tag accounts as SMA-0 (up to 30 days overdue), SMA-1 (31 to 60 days) and SMA-2 (61 to 90 days). Once an account becomes an NPA, the lender usually issues a recall notice and starts formal recovery.",
  },
  {
    q: "Can the lender file a case for an ECS or NACH bounce?",
    a: "Yes. A bounced auto-debit for insufficient funds can lead to a complaint under Section 25 of the Payment and Settlement Systems Act, 2007, which works like a cheque bounce case. The lender must first send you a written demand notice within 30 days of learning of the bounce. If you pay the amount within 15 days of receiving that notice, no criminal case can be filed on that bounce.",
  },
  {
    q: "Can I cancel my NACH or AutoPay mandate to stop repeated bounce charges?",
    a: "You can usually ask your bank to cancel a mandate, but cancelling does not cancel the loan, may breach your loan agreement, and the lender will then switch to calls, cheques or legal notices. A better route is to write to the lender asking it to stop repeated presentations while you agree a repayment plan, and to challenge charges that are not in your loan's Key Fact Statement.",
  },
  {
    q: "Does an EMI bounce affect my CIBIL score?",
    a: "Yes. Lenders report overdue payments to credit bureaus, which are now updated at least every fortnight, so even a few days' delay can show up. A single short delay that you clear quickly does far less damage than an account that keeps rolling into 30, 60 and 90 days overdue.",
  },
];

const linkCls = "text-[#D29E0D] hover:underline font-bold";

export default function EmiBouncePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "EMI or NACH Bounce", href: "/services/ecs-nach-emi-bounce-legal-notice-loan-recovery" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "EMI, ECS or NACH Auto-Debit Bounced? What Happens Next and How to Protect Yourself",
    description:
      "What happens after an EMI, ECS, NACH or UPI AutoPay bounce in India: charges, credit reporting, recall notices, Section 25 cases, recovery calls and the borrower's options.",
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
      { "@type": "ListItem", position: 3, name: "EMI or NACH Bounce", item: PAGE_URL },
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
              Borrower Rights
            </span>
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-4 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
              EMI, ECS or NACH Auto-Debit Bounced? <span className="text-[#D29E0D]">What Happens Next and How to Protect Yourself</span>
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              A bounce SMS, a charge on your statement, then calls from the lender. Here is what can legally happen after a missed EMI, what the lender is not allowed to do, and the steps that keep a short problem from becoming a court case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <FaShieldAlt /> Talk to a Loan Lawyer
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
                When an EMI auto-debit (ECS, NACH or UPI AutoPay) bounces, you will usually pay a bounce or penal charge, the overdue shows on your credit report, and the lender starts follow-up calls. If the account stays overdue for more than 90 days it becomes an NPA, and the lender can recall the loan and take legal action. A bounce for insufficient funds can also lead to a <strong>Section 25 notice</strong>, which works like a cheque bounce case, but paying within 15 days of that notice ends the criminal risk on that bounce. Acting early, in writing, gives you the most options.
              </div>
            </section>

            <section id="timeline" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">2. What Happens After an EMI Bounce: A Timeline</h2>
              <div className="overflow-x-auto my-8">
                <table className="min-w-full bg-white border border-[#EBE9E4] rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#EBE9E4] text-[#30261C]">
                      <th className="px-6 py-4 text-left font-bold text-sm">Days overdue</th>
                      <th className="px-6 py-4 text-left font-bold text-sm">What usually happens</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBE9E4]">
                    <tr><td className="px-6 py-4 text-sm font-semibold">Day of bounce</td><td className="px-6 py-4 text-sm">Bounce SMS. Lender&apos;s bounce or penal charge, and possibly your own bank&apos;s mandate return fee.</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">1 to 30 days (SMA-0)</td><td className="px-6 py-4 text-sm">Reminder calls and messages, payment links, possible re-presentation of the debit. Overdue reported to credit bureaus.</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">31 to 60 days (SMA-1)</td><td className="px-6 py-4 text-sm">More calls, possibly field visits. Credit score falls further.</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">61 to 90 days (SMA-2)</td><td className="px-6 py-4 text-sm">Escalation, demand letters, sometimes a Section 25 or Section 138 notice for bounced debits or cheques.</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">More than 90 days (NPA)</td><td className="px-6 py-4 text-sm">Account classified as NPA. Loan recall notice demanding the full outstanding. Then arbitration, Lok Adalat, a civil suit, or SARFAESI action if the loan is secured.</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                The SMA and NPA categories come from RBI&apos;s rules for all lenders, so your lender is not &ldquo;choosing&rdquo; to escalate. Each band makes the next step more likely. If your account is near 90 days, read <Link href="/what-happens-after-loan-account-becomes-npa" className={linkCls}>what happens after a loan account becomes an NPA</Link> and <Link href="/what-happens-after-bank-issues-recall-notice" className={linkCls}>what a recall notice means</Link>.
              </p>
            </section>

            <div className="not-prose my-10">
              <InteractiveLeadFunnel preset="bank-settlement" />
            </div>

            <section id="charges" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">3. Bounce Charges: What&apos;s Allowed and What Isn&apos;t</h2>
              <p>
                Since 2024, RBI&apos;s rules on penal charges require lenders to treat late-payment penalties as <strong>penal charges</strong>, not extra interest. They must be reasonable, disclosed in your loan&apos;s Key Fact Statement and sanction letter, and must not be capitalised into the loan or charged interest on.
              </p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li><strong>Lender&apos;s charge:</strong> check your Key Fact Statement or loan agreement for the bounce or penal charge. Anything not listed there can be disputed.</li>
                <li><strong>Your bank&apos;s charge:</strong> your own bank may charge a fee each time a mandate is returned for insufficient balance. Repeated presentations in a month can multiply this.</li>
                <li><strong>GST</strong> is usually added on these charges.</li>
              </ul>
              <p>
                If your statement shows several bounce charges in one month, see our guide on <Link href="/blog/multiple-e-nach-upi-autopay-bounce-charges-harassment-rbi-loan-settlement" className={linkCls}>multiple e-NACH and AutoPay bounce charges</Link>. Digital loan apps that add charges outside their disclosed terms can be challenged too: LegalRecovery.in explains how to send a <a href="https://www.legalrecovery.in/loan-app-harassment-excess-charges-legal-notice" target="_blank" rel="noopener" className={linkCls}>legal notice to a loan app for harassment and excess charges</a>.
              </p>
            </section>

            <section id="not-your-fault" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">4. When the Bounce Isn&apos;t Your Fault</h2>
              <p>Not every bounce is a missed payment. Check whether:</p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li>the debit was presented on the wrong date or for the wrong amount;</li>
                <li>money was in the account but the debit failed for a technical reason, or the mandate was not properly registered;</li>
                <li>your account was frozen or under a hold you did not know about; or</li>
                <li>you had already paid the EMI through another channel.</li>
              </ul>
              <p>
                In these cases, write to the lender and your bank with the statement showing the balance, and ask them to reverse the charges and correct the credit report entry. If the bank or lender does not resolve it within 30 days, you can complain to the RBI Ombudsman under the Integrated Ombudsman Scheme. A bounce for a technical reason is also not an &ldquo;insufficient funds&rdquo; bounce, which matters if a Section 25 notice arrives.
              </p>
            </section>

            <section id="section-25" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">5. The Section 25 Notice: Can You Be Jailed for an EMI Bounce?</h2>
              <p>
                Section 25 of the Payment and Settlement Systems Act, 2007 makes it an offence when an electronic debit you authorised bounces for insufficient funds, much like Section 138 for cheques. The punishment can extend to two years&apos; imprisonment or a fine of up to twice the amount, or both. But the law builds in a clear exit:
              </p>
              <ol className="space-y-3 ml-6 list-decimal mb-6">
                <li>The lender must send you a written demand notice within 30 days of learning of the bounce.</li>
                <li>You then have <strong>15 days</strong> from receiving the notice to pay the bounced amount.</li>
                <li>If you pay within those 15 days, no complaint can be filed on that bounce.</li>
              </ol>
              <p>
                If a complaint is filed, it is a bailable offence that can be settled (compounded), and there are real defences, such as technical failures, wrong amounts, or a notice that was defective or late. Read our detailed guides on <Link href="/section-25-payment-and-settlement-act-legal-defense" className={linkCls}>defending a Section 25 case</Link>, <Link href="/section-25-payment-and-settlement-act-bailable-or-not" className={linkCls}>whether Section 25 is bailable</Link>, and <Link href="/can-you-go-to-jail-for-not-paying-emi" className={linkCls}>whether you can go to jail for not paying EMI</Link>. Simply being unable to pay a loan is a civil matter, not a crime.
              </p>
              <p>
                Reply to any legal notice in writing, through a lawyer if possible. A reply that records disputes, payments made and your willingness to settle is useful later. You can start from LegalRecovery.in&apos;s <a href="https://www.legalrecovery.in/templates/legal-notice-reply-format" target="_blank" rel="noopener" className={linkCls}>legal notice reply format</a>.
              </p>
            </section>

            <section id="calls" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">6. Recovery Calls and Visits: Your Rights</h2>
              <p>
                RBI&apos;s rules on recovery agents apply to banks and NBFCs. Agents must identify themselves, may not call before 8 a.m. or after 7 p.m., and may not threaten, abuse or humiliate you, or contact your family, friends or colleagues to shame you. Keep call recordings and screenshots. If the lender crosses these lines, see <Link href="/how-to-stop-bank-recovery-agents-harassment-legally-in-india" className={linkCls}>how to stop recovery agent harassment legally</Link>.
              </p>
            </section>

            <section id="what-to-do" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">7. What to Do Now</h2>
              <ol className="space-y-3 ml-6 list-decimal mb-6">
                <li><strong>Pay the missed EMI if you can,</strong> even late. Clearing it before 30 days keeps the account in the mildest category.</li>
                <li><strong>Check the charges</strong> against your Key Fact Statement and dispute any extras in writing.</li>
                <li><strong>If money is tight, write to the lender</strong> before the next due date. Ask for a short EMI holiday, a restructured plan or a reduced EMI, and keep the email trail. Lenders are not obliged to agree, but a written request shows good faith.</li>
                <li><strong>Do not cancel the mandate just to avoid debits.</strong> It does not cancel the loan and can make matters worse.</li>
                <li><strong>Never ignore a legal notice.</strong> The Section 25 15-day window and arbitration deadlines are short.</li>
                <li><strong>If repayment is no longer realistic,</strong> a negotiated settlement may be possible once the account is overdue. Understand the effect first: a &ldquo;settled&rdquo; status on your credit report affects future borrowing. See our <Link href="/services/loan-settlement" className={linkCls}>loan settlement services</Link>, or read <Link href="/services/how-banks-recover-unpaid-loans-below-20-lakhs-india" className={linkCls}>how banks recover loans under ₹20 lakh</Link> to understand what the lender can actually do.</li>
              </ol>
            </section>

            <section id="faqs" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">8. Frequently Asked Questions</h2>
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
              <h3 className="text-2xl font-bold mb-4">Got a Bounce Notice or Recovery Calls?</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                AMA Legal Solutions&apos; lawyers reply to Section 25 and recall notices, deal with lenders on your behalf, and negotiate settlements when repayment isn&apos;t possible. If you want to reply yourself first, start with the <a href="https://www.legalrecovery.in/templates/legal-notice-reply-format" target="_blank" rel="noopener" className={linkCls}>legal notice reply format on LegalRecovery.in</a>.
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
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Behind on EMIs?</h4>
              <p className="text-sm opacity-80 mb-6">
                Our lawyers help borrowers respond to notices, stop unlawful recovery tactics, and settle loans they can no longer repay.
              </p>
              <div className="space-y-4">
                {["Section 25 notice replies", "Recall and arbitration notices", "Recovery harassment complaints", "Loan settlement negotiation"].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="bg-[#D29E0D] p-2 rounded-full text-white"><FaCheckCircle size={12} /></div>
                    <span className="text-xs">{t}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <button className="w-full bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-xl mt-8 transition-all">
                  Contact a Loan Lawyer
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
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Borrower Helpline</p>
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
