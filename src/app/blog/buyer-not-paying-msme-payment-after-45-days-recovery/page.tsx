import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const PAGE_PATH = "/blog/buyer-not-paying-msme-payment-after-45-days-recovery";
const PAGE_URL = `https://www.amalegalsolutions.com${PAGE_PATH}`;

export const metadata = {
  alternates: { canonical: PAGE_URL },
  title: "Buyer Not Paying After 45 Days? MSME Payment Recovery Guide",
  description:
    "Buyer delaying your factory or business payment beyond 45 days? Use the MSME 45-day rule, 3x bank-rate interest and a lawyer's notice to recover your bill faster.",
  keywords:
    "buyer not paying msme payment after 45 days, msme 45 days payment rule how to recover money, party not clearing bill after delivery what to do, legal notice for msme delayed payment, how to claim interest on delayed payment from buyer, msme samadhaan vs legal notice which is faster",
  openGraph: {
    title: "Buyer Not Paying After 45 Days? MSME Payment Recovery Guide",
    description:
      "If you are a Udyam-registered micro or small enterprise, the law gives you 3x bank-rate interest, a fast MSME Council route and a tax lever on your buyer. Here is how to use them.",
    url: PAGE_URL,
    type: "article",
  },
};

const sections = [
  { id: "short-answer", title: "1. The Short Answer" },
  { id: "who-qualifies", title: "2. Does the 45-Day Rule Cover You?" },
  { id: "45-day-rule", title: "3. How the 45-Day Clock Works" },
  { id: "interest", title: "4. Claiming 3x Bank-Rate Interest" },
  { id: "tax-lever", title: "5. The Buyer's Tax Problem (43B(h))" },
  { id: "notice", title: "6. Step 1: Lawyer's Notice to the CFO" },
  { id: "samadhaan", title: "7. Step 2: MSME Samadhaan / Council" },
  { id: "which-faster", title: "8. Notice vs Samadhaan: Which Is Faster?" },
  { id: "faqs", title: "9. Frequently Asked Questions" },
];

const relatedPages = [
  { title: "IT or Agency Client Not Paying After Delivery", href: "/blog/software-it-agency-client-not-paying-after-project-delivery" },
  { title: "Company Not Paying Your Bill? Legal Action", href: "/services/company-not-paying-pending-bill-legal-action-india" },
  { title: "Client Not Paying Your Invoice? Recovery Guide", href: "/services/client-not-paying-invoice-after-delivery-legal-recovery" },
  { title: "Dealer Not Paying? Using Security Cheques Legally", href: "/blog/dealer-not-paying-money-security-cheque-bounce-recovery" },
  { title: "MSME (Udyam) Registration", href: "/msme-registration" },
  { title: "Notice for Recovery of Business Dues", href: "/notice-for-recovery-of-outstanding-business-dues" },
  { title: "Arbitration Services", href: "/services/arbitration" },
];

const faqs = [
  {
    q: "What is the MSME 45 days payment rule, and how do I recover money under it?",
    a: "Under Section 15 of the MSMED Act, 2006, a buyer must pay a micro or small enterprise supplier by the date agreed in writing, which cannot be more than 45 days from acceptance of the goods or services. If no date was agreed, the limit is 15 days. After that, the buyer owes compound interest at three times the RBI bank rate. To recover, send a legal notice claiming principal plus interest, and if unpaid, file a reference before the MSME Facilitation Council through the MSME Samadhaan portal.",
  },
  {
    q: "The party is not clearing my bill after delivery. What should I do?",
    a: "Check whether you were Udyam-registered as a micro or small manufacturer or service provider before the supply. If yes, calculate MSMED Act interest and send a lawyer's notice to the buyer's accounts head or CFO, then file on MSME Samadhaan if they still do not pay. If you are not covered, use the ordinary route: legal notice, pre-institution mediation for claims of ₹3 lakh or more, and a recovery suit.",
  },
  {
    q: "How do I claim interest on delayed payment from a buyer?",
    a: "If the MSMED Act applies, interest runs automatically from the day after the due date at three times the RBI bank rate, compounded monthly, whatever your invoice says. State the calculation in your legal notice and your Samadhaan reference. If the Act does not apply, you can claim the interest rate agreed in your contract, purchase order or invoice terms, and the court can award interest under Section 34 CPC.",
  },
  {
    q: "MSME Samadhaan vs legal notice: which is faster?",
    a: "A legal notice is faster to start and often resolves the matter within the notice period because it costs the buyer nothing to pay but a lot to wait. Samadhaan is the stronger follow-up: the Council must conciliate and then arbitrate, the Act sets 90 days for the award, and a buyer who wants to challenge the award must first deposit 75% of it. In practice councils often take longer than 90 days, so send the notice first and file on Samadhaan if the deadline passes.",
  },
  {
    q: "Is a legal notice mandatory before filing on MSME Samadhaan?",
    a: "No. You can file directly. A notice is still useful because it shows the buyer the interest and tax cost of waiting, puts the dispute in writing, and frequently gets the bill paid without the Council stage.",
  },
];

const linkCls = "text-[#D29E0D] hover:underline font-bold";

export default function MsmeFortyFiveDayPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Buyer Not Paying After 45 Days", href: PAGE_PATH },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Buyer Not Paying Within 45 Days? How MSMEs & Manufacturers Recover Stuck Payments + Interest",
    description:
      "How Udyam-registered micro and small enterprises in India use the MSMED Act 45-day rule, 3x bank-rate interest, Section 43B(h) and the MSME Facilitation Council to recover delayed payments.",
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
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.amalegalsolutions.com/blog" },
      { "@type": "ListItem", position: 3, name: "Buyer Not Paying After 45 Days", item: PAGE_URL },
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
              MSME Delayed Payments
            </span>
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-4 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
              Buyer Not Paying Within 45 Days? How MSMEs &amp; Manufacturers <span className="text-[#D29E0D]">Recover Stuck Payments + Interest</span>
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              Your buyer agreed to 30 days and is now at 120. If you are a Udyam-registered micro or small enterprise, the law gives you interest, a fast-track council and a tax lever most buyers fear. Here is how to use them.
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
                If you were a Udyam-registered <strong>micro or small</strong> manufacturer or service provider when you supplied, your buyer must pay within the agreed period, which can never exceed <strong>45 days</strong> from acceptance (15 days if nothing was agreed in writing). After that, the buyer owes <strong>compound interest at three times the RBI bank rate</strong>, and a business buyer also loses the income-tax deduction for your unpaid bill in that year under Section 43B(h). Send a lawyer&apos;s notice to the buyer&apos;s CFO setting out both costs; if they still don&apos;t pay, file on the MSME Samadhaan portal.
              </div>
            </section>

            <section id="who-qualifies" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">2. Does the 45-Day Rule Cover You? Check These Four Things</h2>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li><strong>You are micro or small, not medium.</strong> The delayed-payment protection in Sections 15 to 24 of the MSMED Act, 2006 applies to micro and small enterprises only.</li>
                <li><strong>You are a manufacturer or service provider.</strong> Traders can hold a Udyam certificate, but the government has clarified that it is for priority-sector lending only; traders do not get the delayed-payment protection.</li>
                <li><strong>You registered before the supply.</strong> In <em>Silpi Industries v. KSRTC</em> (2021), the Supreme Court held that a supplier cannot claim these benefits for contracts made before it registered. Registering now still protects your future supplies. See our <Link href="/msme-registration" className={linkCls}>Udyam registration guide</Link>.</li>
                <li><strong>The buyer can be almost anyone.</strong> Private companies, firms, proprietors, PSUs and government buyers are all covered by the payment deadline. (The Section 43B(h) tax rule below applies only to business buyers.)</li>
              </ul>
              <p>
                Not covered? You can still recover the bill and any interest your contract allows through a notice and the regular court process. See <Link href="/services/client-not-paying-invoice-after-delivery-legal-recovery" className={linkCls}>how to recover an unpaid invoice</Link>.
              </p>
            </section>

            <section id="45-day-rule" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">3. How the 45-Day Clock Actually Works</h2>
              <p>
                The clock starts from the day the buyer <strong>accepts</strong> the goods or services. If the buyer raises no written objection within 15 days of delivery, the law treats the supply as accepted on delivery (deemed acceptance). From there:
              </p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li>If you agreed a credit period in writing (purchase order, contract, invoice terms the buyer accepted), the buyer must pay by that date, but the period cannot exceed 45 days. A PO saying &ldquo;90 days credit&rdquo; is capped at 45 days for this purpose.</li>
                <li>If there is no written agreement on credit period, the buyer must pay within 15 days.</li>
              </ul>
              <p>
                So &ldquo;30 days credit, paid at 120&rdquo; means at least 75 days of statutory interest are already running.
              </p>
            </section>

            <section id="interest" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">4. Claiming Interest at 3x the Bank Rate</h2>
              <p>
                Under Section 16, once the due date passes, the buyer must pay <strong>compound interest with monthly rests at three times the bank rate notified by the RBI</strong>. This applies even if your invoice says nothing about interest, and any contract term giving a lower rate does not override it. For illustration only: if the bank rate were 6%, the rate would be 18% a year, compounded every month. Always use the bank rate in force for your period.
              </p>
              <p>
                Two more points buyers dislike: under Section 23 the buyer cannot deduct this interest as an expense for income tax, and companies must disclose amounts and interest owed to micro and small suppliers in their financial statements, which auditors check.
              </p>
              <p>
                To work out what you are owed, <a href="https://www.legalrecovery.in/tools/msme-delayed-payment-interest-calculator" target="_blank" rel="noopener" className={linkCls}>check your overdue MSME interest with this calculator</a> on LegalRecovery.in.
              </p>
            </section>

            <section id="tax-lever" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">5. The Buyer&apos;s Tax Problem: Section 43B(h)</h2>
              <p>
                Since the Finance Act, 2023, Section 43B(h) of the Income-tax Act, 1961 has said: if a business buyer owes money to a micro or small enterprise and does not pay within the MSMED Act time limit, it cannot deduct that purchase as an expense in that year. It gets the deduction only in the year it actually pays. The same rule continues under the new Income-tax Act, 2025.
              </p>
              <p>
                In plain words, an unpaid bill to you <strong>increases the buyer&apos;s taxable profit for the year</strong>, so they pay tax on money they have not even spent yet. For a company or firm, that can be roughly a quarter to a third of your bill amount in extra tax for that year (the exact figure depends on their tax rate). It is a timing cost, not a permanent penalty, but finance teams take it seriously, especially near <strong>31 March</strong>, when the year&apos;s books close.
              </p>
              <p>
                Note that this rule is about the buyer&apos;s tax, not a payment to you. It helps you because it gives the buyer&apos;s CFO a reason to clear your bill first. LegalRecovery.in has a detailed explainer on <a href="https://www.legalrecovery.in/law/section-43bh-msme-payment-rule" target="_blank" rel="noopener" className={linkCls}>the Section 43B(h) MSME payment rule</a>.
              </p>
            </section>

            <section id="notice" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">6. Step 1: A Lawyer&apos;s Notice Addressed to the CFO</h2>
              <p>
                Purchase managers can delay a bill for months. Finance heads and auditors cannot ignore a statutory interest claim. Address the notice to the buyer company and mark it to the CFO or accounts head, and include:
              </p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li>your Udyam number, category (micro/small) and date of registration;</li>
                <li>each invoice, delivery date, acceptance date and due date under Section 15;</li>
                <li>principal outstanding and Section 16 interest calculated to date;</li>
                <li>a reminder of the Section 43B(h) disallowance and the disclosure duties for MSME dues;</li>
                <li>a deadline (7 to 15 days) and notice that you will file before the MSME Facilitation Council if unpaid.</li>
              </ul>
              <p>
                Send it by email, Speed Post and WhatsApp, and keep delivery proof.
              </p>
            </section>

            <section id="samadhaan" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">7. Step 2: MSME Samadhaan and the Facilitation Council</h2>
              <p>
                If the notice deadline passes, file your claim online on the MSME Samadhaan portal. It goes to the Micro and Small Enterprises Facilitation Council (MSEFC) of your state under Section 18. The Council first tries conciliation. If that fails, it arbitrates (or refers the case to an arbitration institution), and the Act requires the award within 90 days of the reference.
              </p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li><strong>Your local council.</strong> The case is heard by the council where you, the supplier, are located, even if the buyer is in another state.</li>
                <li><strong>It overrides arbitration clauses.</strong> The Supreme Court held in <em>Gujarat State Civil Supplies Corp. v. Mahakali Foods</em> (2022) that the Council route applies even if your contract has a private arbitration clause.</li>
                <li><strong>The 75% deposit.</strong> Under Section 19, a buyer who wants to challenge the Council&apos;s award in court must first deposit 75% of the awarded amount. This makes stalling expensive.</li>
                <li><strong>Time limit.</strong> File within three years of the due date to be safe; the Limitation Act applies to the arbitration stage.</li>
              </ul>
              <p>
                In practice many councils take longer than 90 days because of backlogs, which is why the notice stage matters.
              </p>
            </section>

            <section id="which-faster" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">8. Legal Notice vs MSME Samadhaan: Which Is Faster?</h2>
              <div className="overflow-x-auto my-8">
                <table className="min-w-full bg-white border border-[#EBE9E4] rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#EBE9E4] text-[#30261C]">
                      <th className="px-6 py-4 text-left font-bold text-sm"></th>
                      <th className="px-6 py-4 text-left font-bold text-sm">Lawyer&apos;s notice</th>
                      <th className="px-6 py-4 text-left font-bold text-sm">MSME Samadhaan / Council</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBE9E4]">
                    <tr><td className="px-6 py-4 text-sm font-semibold">Time to start</td><td className="px-6 py-4 text-sm">Same day</td><td className="px-6 py-4 text-sm">After online filing and Council listing</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">Deadline for buyer</td><td className="px-6 py-4 text-sm">7 to 15 days, set by you</td><td className="px-6 py-4 text-sm">Award due in 90 days by law; often longer</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">Binding?</td><td className="px-6 py-4 text-sm">No, it is a formal demand</td><td className="px-6 py-4 text-sm">Yes, the award is enforceable like a decree</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">Interest</td><td className="px-6 py-4 text-sm">Claimed</td><td className="px-6 py-4 text-sm">Awarded under Section 16</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">Best used</td><td className="px-6 py-4 text-sm">First, to get paid without a dispute</td><td className="px-6 py-4 text-sm">Next, if the notice is ignored</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                The practical answer: send the notice first, and keep your Samadhaan papers ready to file the day its deadline passes.
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
                A notice that shows the buyer&apos;s finance team the interest and tax cost of waiting often gets a bill cleared first in the queue. Start on <a href="https://www.legalrecovery.in/law/section-43bh-msme-payment-rule" target="_blank" rel="noopener" className={linkCls}>LegalRecovery.in</a>, and if the buyer still doesn&apos;t pay, AMA Legal Solutions&apos; team can file and argue your MSME Council claim.
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
              This guide is general information on Indian law as of November 2026, not legal or tax advice for your specific case. Speak to an advocate or chartered accountant before acting.
            </p>
          </article>
        </main>

        <aside className="lg:w-[25%]">
          <div className="sticky top-32 space-y-8">
            <div className="bg-[#30261C] text-[#EBE9E4] p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Recover MSME Dues</h4>
              <p className="text-sm opacity-80 mb-6">
                Our lawyers calculate your statutory interest, send the notice and represent you before the MSME Facilitation Council.
              </p>
              <div className="space-y-4">
                {["Section 16 interest claims", "Notices to buyer CFOs", "MSME Samadhaan filing", "Council conciliation & arbitration"].map((t) => (
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
