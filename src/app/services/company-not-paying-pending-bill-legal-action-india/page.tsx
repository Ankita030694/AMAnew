import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const PAGE_URL = "https://www.amalegalsolutions.com/services/company-not-paying-pending-bill-legal-action-india";

export const metadata = {
  alternates: { canonical: PAGE_URL },
  title: "Company Not Paying Your Bill? Legal Ways to Recover Money Fast",
  description:
    "Is a corporate client ignoring your invoices and payment reminders? See the fastest legal ways to recover stuck B2B payments from any company in India.",
  keywords:
    "company not paying my bill legal action india, how to recover money from private limited company, legal notice to company for pending payment, corporate client not paying invoice india, nclt case for unpaid bill recovery, b2b pending payment recovery lawyers",
  openGraph: {
    title: "Company Not Paying Your Bill? Legal Ways to Recover Money Fast",
    description:
      "Which legal route fits your bill size, how to check the company before you act, what an insolvency notice really does, and when directors are personally liable.",
    url: PAGE_URL,
    type: "article",
  },
};

const sections = [
  { id: "short-answer", title: "1. The Short Answer" },
  { id: "check-company", title: "2. Check the Company First" },
  { id: "notice", title: "3. The Notice to the Company" },
  { id: "by-amount", title: "4. Pick Your Route by Bill Size" },
  { id: "below-1-crore", title: "5. Bills Below ₹1 Crore" },
  { id: "ibc", title: "6. ₹1 Crore or More: Insolvency Notice" },
  { id: "directors", title: "7. Can You Go After the Directors?" },
  { id: "collecting", title: "8. Making Sure You Actually Get Paid" },
  { id: "time-limit", title: "9. How Long You Have" },
  { id: "faqs", title: "10. Frequently Asked Questions" },
];

const relatedPages = [
  { title: "IT or Agency Client Not Paying After Delivery", href: "/blog/software-it-agency-client-not-paying-after-project-delivery" },
  { title: "Client Not Paying Invoice After Delivery", href: "/services/client-not-paying-invoice-after-delivery-legal-recovery" },
  { title: "Buyer Not Paying After 45 Days? MSME Recovery", href: "/blog/buyer-not-paying-msme-payment-after-45-days-recovery" },
  { title: "Dealer Not Paying? Using Security Cheques Legally", href: "/blog/dealer-not-paying-money-security-cheque-bounce-recovery" },
  { title: "Notice for Recovery of Outstanding Business Dues", href: "/notice-for-recovery-of-outstanding-business-dues" },
  { title: "Demand Notice for Recovery of Money", href: "/demand-notice-for-recovery-of-money" },
  { title: "Cheque Bounce Notice", href: "/cheque-bounce-notice" },
  { title: "Arbitration Services", href: "/services/arbitration" },
];

const faqs = [
  {
    q: "A private limited company is not paying my bill. What legal action can I take in India?",
    a: "Send a formal advocate's demand notice to the company's registered office first. If it is ignored, the route depends on the amount and your documents: a civil or Commercial Court recovery suit (after compulsory pre-institution mediation for commercial claims of ₹3 lakh or more), an MSME Samadhaan claim if you are a Udyam-registered micro or small supplier, a Section 138 complaint if a cheque bounced, or an insolvency demand notice under the IBC if the undisputed amount is ₹1 crore or more.",
  },
  {
    q: "How do I recover money from a private limited company that keeps making excuses?",
    a: "Stop relying on calls and get everything in writing: ask the company to confirm the balance by email, then send a lawyer's notice addressed to the company at its registered office, marked to the Managing Director and CFO, with a firm deadline. A written confirmation of the balance helps you in court and can restart the limitation period. If the deadline passes, move to mediation and a suit, or to the insolvency route for undisputed dues of ₹1 crore or more.",
  },
  {
    q: "Can I file an NCLT case to recover an unpaid bill?",
    a: "Only if the company owes you ₹1 crore or more in total, the debt is not genuinely disputed, and the 10-day period after your Section 8 IBC demand notice has passed without payment. The NCLT does not run a recovery suit: it decides whether to start insolvency proceedings against the company. Solvent companies usually settle to avoid this, but if the company is truly insolvent you may recover only a small part of your bill, so use this route against companies that can pay.",
  },
  {
    q: "Are the directors personally liable for the company's unpaid bills?",
    a: "Usually not. A private limited company is a separate legal person, so the claim is against the company. Directors can become personally liable if they signed a personal guarantee, if a company cheque bounced and they were in charge of the business (Section 141 of the Negotiable Instruments Act), if they committed fraud, or if the company was struck off while owing you money (Section 248(7) of the Companies Act keeps their liability alive).",
  },
  {
    q: "The company says it has no money. Is it worth taking legal action?",
    a: "Check before you decide. On the MCA portal you can see whether the company is active, under insolvency or striking off, and whether its assets are already charged to banks. A company that is still trading, paying salaries and filing GST returns usually can pay. If it is already in insolvency, you cannot sue it and must file your claim with the resolution professional instead.",
  },
];

const linkCls = "text-[#D29E0D] hover:underline font-bold";

export default function CompanyNotPayingBillPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Company Not Paying Bill", href: "/services/company-not-paying-pending-bill-legal-action-india" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Private Limited Company Not Paying Your Pending Bills? Step-by-Step Legal Recovery Guide",
    description:
      "How vendors and suppliers in India recover large unpaid bills from private limited companies: company checks, notices, mediation, suits, IBC demand notices and director liability.",
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
      { "@type": "ListItem", position: 3, name: "Company Not Paying Bill", item: PAGE_URL },
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
              Corporate B2B Recovery
            </span>
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-4 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
              Private Limited Company Not Paying Your Pending Bills? <span className="text-[#D29E0D]">Step-by-Step Legal Recovery Guide</span>
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              &ldquo;Payment is in the approval cycle.&rdquo; &ldquo;The CFO is travelling.&rdquo; &ldquo;Next month for sure.&rdquo; If a company has been saying this for months, here is how to choose the right legal route for your bill size, in plain language.
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
                When a private limited company does not pay your bill, your claim is against the <strong>company</strong>, served at its registered office. Start with a lawyer&apos;s demand notice. After that, the bill size decides the route: <strong>below ₹1 crore</strong>, you go through pre-institution mediation and a fast-track Commercial Court suit (or MSME Samadhaan if you qualify); <strong>₹1 crore or more and undisputed</strong>, you can also send a 10-day insolvency demand notice under the IBC, which puts the company&apos;s control at stake if it does not pay. Before any of this, spend ten minutes checking the company on the MCA portal.
              </div>
            </section>

            <section id="check-company" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">2. Check the Company Before You Act</h2>
              <p>
                Every company in India has a public record with the Ministry of Corporate Affairs. Search the company name or CIN on the MCA portal and note:
              </p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li><strong>Exact legal name and CIN.</strong> Your notice and case must name the right entity. Brand names and group companies often differ from the company that signed your purchase order.</li>
                <li><strong>Registered office address and official email.</strong> This is where legal notices should go.</li>
                <li><strong>Company status.</strong> &ldquo;Active&rdquo; is what you want. &ldquo;Under CIRP&rdquo; or &ldquo;Under liquidation&rdquo; means a court-ordered moratorium already applies and you cannot sue; you file your claim with the resolution professional instead. &ldquo;Strike off&rdquo; needs a different approach (see Section 7).</li>
                <li><strong>Directors.</strong> Useful for addressing the notice, and for a cheque bounce complaint.</li>
                <li><strong>Charges.</strong> Loans secured on the company&apos;s assets. Heavy charges mean banks will be paid before you if the company fails, which matters when choosing between a suit and the insolvency route.</li>
              </ul>
              <p>
                Also look at the signs of a company that can pay: it is still trading, filing GST returns, hiring, or paying other vendors. A company that can pay but won&apos;t is exactly where legal pressure works best.
              </p>
            </section>

            <section id="notice" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">3. The Notice to the Company</h2>
              <p>
                In a company, your bill is usually stuck between the person who ordered from you and the finance team that releases payment. A lawyer&apos;s notice moves it out of that loop and onto the desk of people with legal responsibility. Address it to the company at its registered office, marked for the attention of the Managing Director and the CFO or Head of Accounts, and send it by Speed Post and to the official email on record.
              </p>
              <p>A strong notice to a company:</p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li>lists each purchase order, invoice, delivery and part-payment, with the exact balance;</li>
                <li>claims interest at the contract rate (or the MSME rate if you are a Udyam-registered micro or small supplier);</li>
                <li>points out costs to the company of not paying, such as GST input tax credit reversal after 180 days;</li>
                <li>gives a clear deadline, usually 7 to 15 days; and</li>
                <li>states the next step: mediation and a Commercial Court suit, or an insolvency notice for large undisputed dues.</li>
              </ul>
              <p>
                You can <a href="https://www.legalrecovery.in/recovery-of-unpaid-dues-for-my-business" target="_blank" rel="noopener" className={linkCls}>send an online lawyer notice to a company for unpaid bills</a> through LegalRecovery.in, our online notice service, delivered by Speed Post, email and WhatsApp. For the documents that prove your invoice and how to use them, see our guide on <Link href="/services/client-not-paying-invoice-after-delivery-legal-recovery" className={linkCls}>client not paying an invoice after delivery</Link>.
              </p>
              <p>
                One tactic helps whatever happens next: before the notice, ask the company&apos;s accounts team to confirm the outstanding balance by email or send a signed ledger confirmation. A written acknowledgement of the debt is strong evidence and restarts the limitation period.
              </p>
            </section>

            <section id="by-amount" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">4. Pick Your Route by Bill Size</h2>
              <div className="overflow-x-auto my-8">
                <table className="min-w-full bg-white border border-[#EBE9E4] rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#EBE9E4] text-[#30261C]">
                      <th className="px-6 py-4 text-left font-bold text-sm">Your situation</th>
                      <th className="px-6 py-4 text-left font-bold text-sm">Main route after the notice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBE9E4]">
                    <tr><td className="px-6 py-4 text-sm font-semibold">Unpaid bill below ₹3 lakh</td><td className="px-6 py-4 text-sm">Recovery suit in the civil court, a summary suit under Order 37 CPC where documents allow</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">₹3 lakh to below ₹1 crore</td><td className="px-6 py-4 text-sm">Compulsory pre-institution mediation, then a Commercial Court suit (often Order 37)</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">₹1 crore or more, debt not disputed, company can pay</td><td className="px-6 py-4 text-sm">IBC Section 8 demand notice (10 days), then an NCLT application; a suit remains an option</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">You are a Udyam-registered micro or small manufacturer or service provider</td><td className="px-6 py-4 text-sm">MSME Samadhaan claim with interest at 3x the RBI bank rate, at any bill size</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">The company&apos;s cheque bounced</td><td className="px-6 py-4 text-sm">Section 138 notice within 30 days, alongside any civil route</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">Your contract has an arbitration clause</td><td className="px-6 py-4 text-sm">Arbitration instead of a court suit</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                These routes can run side by side. A supplier with a bounced cheque can file a Section 138 complaint and a civil suit together, and an MSME supplier can choose Samadhaan instead of a suit. Our <Link href="/blog/buyer-not-paying-msme-payment-after-45-days-recovery" className={linkCls}>MSME 45-day payment guide</Link> covers the Samadhaan route and the <Link href="/blog/dealer-not-paying-money-security-cheque-bounce-recovery" className={linkCls}>security cheque guide</Link> covers cheque cases.
              </p>
            </section>

            <section id="below-1-crore" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">5. Bills Below ₹1 Crore: Mediation and a Fast-Track Suit</h2>
              <p>
                A bill between businesses is a &ldquo;commercial dispute&rdquo; under the Commercial Courts Act, 2015. If it is ₹3 lakh or more, Section 12A requires you to try pre-institution mediation through the District Legal Services Authority before filing a suit, unless you need urgent interim relief. Companies often send someone from finance or legal to the mediation, and many settle there because a mediated settlement can be enforced like a court decree. If the company does not attend, you get a non-starter report and go straight to court.
              </p>
              <p>
                In court, the Commercial Court works to fixed timelines: the company gets at most 120 days to file its written statement. Where your claim is based on a written contract, accepted invoices or a written acknowledgement, a <strong>summary suit under Order 37 CPC</strong> may be possible. The company must then convince the judge it has a real defence before it is even allowed to contest, and the court can make that conditional on depositing money.
              </p>
              <p>
                Do not dismiss a ₹50 lakh or ₹80 lakh claim as &ldquo;too small for insolvency.&rdquo; A well-prepared summary suit against a company that has no real defence is a serious threat in its own right.
              </p>
            </section>

            <section id="ibc" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">6. ₹1 Crore or More: The 10-Day Insolvency Notice</h2>
              <p>
                If a company owes you ₹1 crore or more for goods or services, the Insolvency and Bankruptcy Code, 2016 gives you a much sharper tool. As a supplier (the law calls you an &ldquo;operational creditor&rdquo;), you send the company a demand notice under Section 8 in the prescribed form, with copies of the unpaid invoices. Several unpaid invoices from you can add up to the ₹1 crore threshold.
              </p>
              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">What happens next, in plain words</h3>
              <ol className="space-y-3 ml-6 list-decimal mb-6">
                <li><strong>The company has 10 days</strong> to pay or to show that a genuine dispute about the debt already existed before your notice.</li>
                <li><strong>If it does neither,</strong> you can file an application under Section 9 before the National Company Law Tribunal (NCLT).</li>
                <li><strong>If the NCLT admits it,</strong> insolvency proceedings start. A moratorium freezes cases against the company, and the board of directors loses its powers: an insolvency professional takes over management of the company (Section 17).</li>
              </ol>
              <p>
                That last step is why the notice works. The owners and directors of a solvent company risk losing control of the business over one unpaid bill, so many prefer to pay or settle. Even after admission, the case can be withdrawn under Section 12A if the parties settle, which keeps the door to payment open.
              </p>
              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">When not to use it</h3>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li><strong>The debt is disputed.</strong> In <em>Mobilox Innovations v. Kirusa Software</em> (2017), the Supreme Court held that the NCLT must reject the application if a real dispute existed before the notice, such as written complaints about quality or short delivery. The IBC is not meant for arguments about the work.</li>
                <li><strong>The company really is insolvent.</strong> The IBC is a rescue and resolution process, not a debt collection service. If the company goes into resolution or liquidation, secured lenders are paid first and suppliers often recover only a small part of their dues.</li>
              </ul>
              <p>
                Used against a company that can pay and has no real dispute, the Section 8 notice is often the fastest route. Used against the wrong company, it can cost you your bill. Have an advocate check the paper trail for any earlier complaints before sending it.
              </p>
            </section>

            <section id="directors" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">7. Can You Go After the Directors Personally?</h2>
              <p>
                A private limited company is a separate legal person. In most cases the company owes the money, not its directors or shareholders, and threatening directors personally without a legal basis weakens your position. But there are real exceptions:
              </p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li><strong>Personal guarantee.</strong> If a director signed a guarantee for the company&apos;s payments, you can claim against them directly.</li>
                <li><strong>Bounced company cheque.</strong> Under Section 141 of the Negotiable Instruments Act, directors who were in charge of and responsible for the company&apos;s business can be made accused in a Section 138 case along with the company.</li>
                <li><strong>Fraud.</strong> If the company was used to take goods with no intention of paying, a court can look past the company to the people behind it. This needs strong evidence.</li>
                <li><strong>Company struck off.</strong> If the company is struck off the register while owing you, Section 248(7) of the Companies Act says the liability of its directors continues and can be enforced as if the company had not been dissolved. A creditor can also apply to the NCLT to restore a struck-off company.</li>
              </ul>
            </section>

            <section id="collecting" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">8. Making Sure You Actually Get Paid</h2>
              <p>
                Winning is only half the job. If you fear the company will move its money or assets before judgment, your lawyer can ask the court for <strong>attachment before judgment</strong> under Order 38 Rule 5 CPC, which requires showing that the company is trying to dispose of property to defeat your claim.
              </p>
              <p>
                Once you have a decree or a mediated settlement, you file for execution. The court can attach the company&apos;s bank accounts, receivables owed to it by its own customers, and its movable and immovable property. Interest keeps running until payment under Section 34 CPC, so delay only increases what the company owes.
              </p>
            </section>

            <section id="time-limit" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">9. How Long You Have</h2>
              <p>
                Recovery suits generally must be filed within <strong>three years</strong> of the date payment fell due (Limitation Act, 1963). The Supreme Court held in <em>B.K. Educational Services v. Parag Gupta</em> (2018) that the three-year limit also applies to insolvency applications, counted from the date of default. A written acknowledgement of the debt signed by the company, or a part-payment, before the period ends restarts the clock. If you need to send a notice for a specific B2B invoice quickly, you can <a href="https://www.legalrecovery.in/send-a-legal-notice/b2b-invoice-not-recieved" target="_blank" rel="noopener" className={linkCls}>send a B2B unpaid invoice notice online</a>.
              </p>
            </section>

            <section id="faqs" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-10">10. Frequently Asked Questions</h2>
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
                A notice from an advocate, addressed to the MD and CFO at the registered office, gets a stuck bill out of the approval loop. Start on <a href="https://www.legalrecovery.in/recovery-of-unpaid-dues-for-my-business" target="_blank" rel="noopener" className={linkCls}>LegalRecovery.in</a>. If the company still doesn&apos;t pay, AMA Legal Solutions&apos; litigation team can take it to mediation, a Commercial Court suit or the NCLT.
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
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Recover Your Corporate Dues</h4>
              <p className="text-sm opacity-80 mb-6">
                Our lawyers check the company, send the notice, and handle mediation, Commercial Court suits and NCLT matters across India.
              </p>
              <div className="space-y-4">
                {["Notices to MD and CFO", "IBC Section 8 demand notices", "Commercial Court and Order 37 suits", "Execution and attachment"].map((t) => (
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
