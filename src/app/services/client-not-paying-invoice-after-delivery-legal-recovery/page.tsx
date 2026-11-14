import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const PAGE_URL = "https://www.amalegalsolutions.com/services/client-not-paying-invoice-after-delivery-legal-recovery";

export const metadata = {
  alternates: { canonical: PAGE_URL },
  title: "Client Not Paying Invoice? How to Recover Pending Payment Legally",
  description:
    "Delivered goods or services and the client won't clear your bill? Step-by-step guide to WhatsApp/email proof, lawyer demand notices & fast-track money recovery.",
  keywords:
    "client not paying invoice india legal action, customer not paying bill after delivery what to do, how to recover pending payment from client legally, legal notice for unpaid invoice recovery, party not picking call for payment legal help, fast track court case for money recovery india",
  openGraph: {
    title: "Client Not Paying Invoice? How to Recover Pending Payment Legally",
    description:
      "Your GST invoice, delivery challan, emails and WhatsApp chats are evidence. Here is the step-by-step legal route to recover an unpaid invoice in India.",
    url: PAGE_URL,
    type: "article",
  },
};

const sections = [
  { id: "short-answer", title: "1. The Short Answer" },
  { id: "your-proof", title: "2. No Contract? Your Proof Is Enough" },
  { id: "legal-notice", title: "3. Step 1: Lawyer's Demand Notice" },
  { id: "pressure-points", title: "4. Pressure Points Most Vendors Miss" },
  { id: "mediation", title: "5. Step 2: Pre-Suit Mediation" },
  { id: "court", title: "6. Step 3: Fast-Track Recovery Suit" },
  { id: "big-claims", title: "7. Claims of ₹1 Crore or More" },
  { id: "mistakes", title: "8. Mistakes That Weaken Your Case" },
  { id: "time-limit", title: "9. How Long You Have" },
  { id: "faqs", title: "10. Frequently Asked Questions" },
];

const relatedPages = [
  { title: "Buyer Not Paying After 45 Days? MSME Recovery", href: "/blog/buyer-not-paying-msme-payment-after-45-days-recovery" },
  { title: "Dealer Not Paying? Using Security Cheques Legally", href: "/blog/dealer-not-paying-money-security-cheque-bounce-recovery" },
  { title: "Demand Notice for Recovery of Money", href: "/demand-notice-for-recovery-of-money" },
  { title: "Freelancer Payment Recovery Guide", href: "/freelancer-payment-recovery-guide" },
  { title: "Cheque Bounce Legal Notice", href: "/cheque-bounce-legal-notice" },
  { title: "Breach of Contract Notice", href: "/breach-of-contract-notice" },
  { title: "Is a WhatsApp or Email Notice Valid?", href: "/is-an-email-or-whatsApp-message-considered-a-valid-legal-notice-in-indian-courts" },
  { title: "Arbitration Services", href: "/services/arbitration" },
];

const faqs = [
  {
    q: "My customer is not paying the bill after delivery. What should I do first?",
    a: "Collect your proof (GST invoice, delivery challan or e-way bill, purchase order, emails and WhatsApp chats), send one final written reminder with a clear due date, and if that is ignored, send a formal demand notice through an advocate. The notice records the exact amount, interest and deadline, and is the first document a court or mediator will look at.",
  },
  {
    q: "How do I recover pending payment from a client legally without a written contract?",
    a: "A signed contract is not required. Under the Indian Contract Act, 1872, an agreement can be made by email, WhatsApp, a purchase order or even orally. Your invoices, delivery records, the client's acceptance of goods or services, and messages discussing payment together prove the debt. Electronic records are admissible under the Bharatiya Sakshya Adhiniyam, 2023 with the required certificate.",
  },
  {
    q: "Is a legal notice for unpaid invoice recovery mandatory before going to court?",
    a: "For an ordinary money claim a notice is not strictly mandatory, but it is strongly recommended: many clients pay at this stage, it fixes the date from which you claim interest, and it shows the court you gave a fair chance to pay. For cheque bounce cases under Section 138 of the Negotiable Instruments Act, a notice within 30 days of the bank's return memo is compulsory.",
  },
  {
    q: "The party is not picking up calls for payment. Can I still take legal action?",
    a: "Yes. Ignoring calls does not stop legal action. Serve the notice at the client's registered office or GST address by Speed Post and on their email and WhatsApp. Keep the delivery receipts and read receipts. Once the notice period expires, you can begin mediation or file a recovery suit even if they never reply.",
  },
  {
    q: "Is there a fast-track court case for money recovery in India?",
    a: "Yes. Where the claim rests on a written contract, accepted invoices or a written acknowledgement of the debt, a summary suit under Order 37 of the Code of Civil Procedure may be available. The defendant must first get the court's permission ('leave to defend') by showing a real defence, which stops pure delay tactics. Commercial disputes of ₹3 lakh or more are also heard by Commercial Courts under stricter timelines.",
  },
];

const linkCls = "text-[#D29E0D] hover:underline font-bold";

export default function ClientNotPayingInvoicePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Client Not Paying Invoice", href: "/services/client-not-paying-invoice-after-delivery-legal-recovery" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Client Stopped Answering Calls After Delivery? How to Legally Recover Unpaid Invoices in India",
    description:
      "Step-by-step guide for Indian businesses to recover unpaid invoices: proof, lawyer demand notices, pre-institution mediation and summary suits.",
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
      { "@type": "ListItem", position: 3, name: "Client Not Paying Invoice", item: PAGE_URL },
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
              B2B Invoice Recovery
            </span>
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-4 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
              Client Stopped Answering Calls After Delivery? How to <span className="text-[#D29E0D]">Legally Recover Unpaid Invoices</span> in India
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              You delivered the goods or finished the work. The client took it, and now the bill is &ldquo;under process&rdquo; and the phone goes unanswered. Here is the legal route, step by step, in plain language.
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
                If a client in India is not paying your invoice after delivery, you do not need a stamped contract to act. Your GST invoice, delivery challan or e-way bill, purchase order, emails and WhatsApp chats prove the debt. The legal route is a ladder: <strong>(1)</strong> a lawyer&apos;s demand notice with a clear deadline, <strong>(2)</strong> pre-institution mediation (compulsory for most commercial claims of ₹3 lakh or more), and <strong>(3)</strong> a recovery suit, often a fast-track summary suit under Order 37 CPC. Many clients pay at step 1.
              </div>
            </section>

            <section id="your-proof" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">2. No Signed Contract? Your Everyday Paperwork Is Your Case</h2>
              <p>
                The most common worry we hear is &ldquo;we never signed a proper agreement.&rdquo; That rarely matters. Under the Indian Contract Act, 1872, a contract can be formed by a purchase order, an email, a WhatsApp message or a phone call followed by delivery. What a court needs is proof that (a) the client ordered, (b) you delivered, and (c) the amount is unpaid. Most businesses already have all three.
              </p>
              <div className="overflow-x-auto my-8">
                <table className="min-w-full bg-white border border-[#EBE9E4] rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#EBE9E4] text-[#30261C]">
                      <th className="px-6 py-4 text-left font-bold text-sm">Document</th>
                      <th className="px-6 py-4 text-left font-bold text-sm">What it proves</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBE9E4]">
                    <tr><td className="px-6 py-4 text-sm font-semibold">Purchase order, quotation acceptance, order email or WhatsApp</td><td className="px-6 py-4 text-sm">The client asked for the goods or work, and at what price</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">GST tax invoice</td><td className="px-6 py-4 text-sm">The amount billed. If the client has claimed input tax credit on it, that strongly suggests they accepted the invoice</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">Delivery challan, e-way bill, LR / POD, signed receipt</td><td className="px-6 py-4 text-sm">Goods actually reached the client</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">Completion email, login handover, site sign-off, photos</td><td className="px-6 py-4 text-sm">Services were delivered and used</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">Ledger statement, part-payments, &ldquo;will pay next week&rdquo; messages</td><td className="px-6 py-4 text-sm">The client admits the balance is owed</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                Emails and WhatsApp chats are electronic records. They are admissible in Indian courts under the Bharatiya Sakshya Adhiniyam, 2023, which replaced the Indian Evidence Act. When you file them, they must be accompanied by the certificate required under Section 63 of that Act. Export the full chat with dates, and do not delete anything from your phone or mailbox. Read more on <Link href="/is-an-email-or-whatsApp-message-considered-a-valid-legal-notice-in-indian-courts" className={linkCls}>whether email and WhatsApp count in court</Link>.
              </p>
            </section>

            <section id="legal-notice" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">3. Step 1: Send a Lawyer&apos;s Demand Notice</h2>
              <p>
                Before the notice, send one last written reminder by email and WhatsApp with the invoice numbers, the total due and a firm date. Keep it polite. If that date passes, it is time for a formal demand notice on an advocate&apos;s letterhead.
              </p>
              <p>A good unpaid-invoice notice states:</p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li>who ordered what, when, and at what agreed price;</li>
                <li>each invoice number, date, amount and due date, with delivery proof referred to;</li>
                <li>part-payments received and the exact balance;</li>
                <li>interest claimed (the contract rate, or the MSME rate if it applies, see below);</li>
                <li>a deadline, usually 7 to 15 days; and</li>
                <li>what you will do next if unpaid: mediation, a recovery suit, and costs.</li>
              </ul>
              <p>
                Serve it at the client&apos;s registered office or GST principal place of business by Speed Post, and also on their official email and WhatsApp. Keep the postal tracking, email delivery records and read receipts. A notice from a lawyer changes the conversation: the accounts team can no longer treat your bill as &ldquo;pending approval,&rdquo; and the client knows the next document will come from a court.
              </p>
              <p>
                If you want to move today, you can <a href="https://www.legalrecovery.in/recovery/unpaid-invoices" target="_blank" rel="noopener" className={linkCls}>send a lawyer-drafted unpaid invoice recovery notice on LegalRecovery.in</a>, our online notice service, which delivers it by email, WhatsApp and Speed Post.
              </p>
            </section>

            <section id="pressure-points" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">4. Pressure Points Most Vendors Miss</h2>
              <p>Your notice gets paid faster when it reminds the client what non-payment costs <em>them</em>. Check which of these apply to you:</p>

              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">The client&apos;s GST input tax credit</h3>
              <p>
                Under the CGST Act and Rule 37 of the CGST Rules, a buyer who has not paid the supplier within 180 days of the invoice date must reverse the input tax credit claimed on that invoice and pay interest. For a large unpaid bill this is real money for the client&apos;s finance team, and pointing it out to the CFO or accounts head often speeds up release.
              </p>

              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">MSME interest, if you are Udyam-registered</h3>
              <p>
                If you were registered as a <strong>micro or small</strong> enterprise when you supplied, the MSMED Act, 2006 requires the buyer to pay within the agreed date, which cannot exceed 45 days (or within 15 days if no date was agreed in writing). After that, the buyer owes compound interest with monthly rests at three times the RBI bank rate. You can also file a claim before the MSME Facilitation Council through the Samadhaan portal (see our <Link href="/blog/buyer-not-paying-msme-payment-after-45-days-recovery" className={linkCls}>MSME 45-day payment recovery guide</Link>). For buyers who are businesses, Section 43B(h) of the Income Tax Act stops them from deducting unpaid dues to micro and small enterprises as an expense in that year, so they pay more tax. This tax rule covers manufacturers and service providers registered as micro or small, not traders.
              </p>

              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">A cheque that bounced</h3>
              <p>
                If the client gave you a cheque that was dishonoured for insufficient funds or &ldquo;payment stopped,&rdquo; you also have a criminal remedy under Section 138 of the Negotiable Instruments Act. The deadlines are strict: a written demand notice within 30 days of the bank&apos;s return memo, then a complaint within one month after the 15-day payment window ends. See our <Link href="/cheque-bounce-legal-notice" className={linkCls}>cheque bounce notice guide</Link>.
              </p>
            </section>

            <section id="mediation" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">5. Step 2: Pre-Institution Mediation (Claims of ₹3 Lakh or More)</h2>
              <p>
                Most unpaid invoices between businesses are &ldquo;commercial disputes&rdquo; under the Commercial Courts Act, 2015. If the claim is ₹3 lakh or more and you are not asking the court for urgent interim relief, Section 12A requires you to try pre-institution mediation before filing a suit. The Supreme Court confirmed in <em>Patil Automation v. Rakheja Engineers</em> (2022) that this step is compulsory.
              </p>
              <p>
                You apply to the District Legal Services Authority. The client is called to a mediation, which must normally finish within three months (extendable by two months with consent). The fees are modest and set under the Commercial Courts (Pre-Institution Mediation and Settlement) Rules, 2018. A settlement reached here has the same force as an arbitral award, so it can be enforced like a court decree. If the client does not turn up, you receive a non-starter report and can go straight to court.
              </p>
              <p>
                If your contract or purchase order has an arbitration clause, the dispute may go to arbitration instead of court. See our <Link href="/services/arbitration" className={linkCls}>arbitration services</Link>.
              </p>
            </section>

            <section id="court" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">6. Step 3: Fast-Track Recovery Suit</h2>
              <p>
                If mediation fails, you file a money recovery suit. For claims of ₹3 lakh or more it goes to a Commercial Court, which works to fixed timelines: the defendant gets at most 120 days to file a written statement, and judges are expected to finish cases faster than ordinary civil suits.
              </p>
              <p>
                Where your claim rests on a written contract, invoices the client accepted, or a written acknowledgement of the debt, your lawyer may file a <strong>summary suit under Order 37 CPC</strong>. In a summary suit the client cannot simply deny and delay: they must ask the court for &ldquo;leave to defend&rdquo; and show a genuine defence, often only on the condition that they deposit part of the money. Courts decide case by case whether bare invoices qualify, so the choice between an ordinary and a summary suit is a judgment call for your advocate. LegalRecovery.in has a detailed explainer on <a href="https://www.legalrecovery.in/law/order-37-summary-suit-money-recovery" target="_blank" rel="noopener" className={linkCls}>how an Order 37 summary suit works for money recovery</a>.
              </p>
              <p>
                Claims below ₹3 lakh go to the ordinary civil court, where a summary suit is also available. In the suit you can claim the principal, contractual or MSME interest, and costs. Under Section 34 CPC the court also decides interest from the date of filing until payment.
              </p>
            </section>

            <section id="big-claims" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">7. Claims of ₹1 Crore or More: The Insolvency Route</h2>
              <p>
                If a company owes you ₹1 crore or more, you may be able to send a demand notice under Section 8 of the Insolvency and Bankruptcy Code, 2016 as an &ldquo;operational creditor.&rdquo; The company has 10 days to pay or point out an existing dispute. If it does neither, you can apply to the NCLT to start insolvency proceedings, which puts the company&apos;s management at risk, so solvent companies tend to take this notice seriously.
              </p>
              <p>
                Use this route carefully. The Supreme Court held in <em>Mobilox Innovations v. Kirusa Software</em> (2017) that if a genuine dispute about the debt existed <em>before</em> the notice, such as written quality complaints, the application will be rejected. It suits clear, undisputed dues, not quarrels about the work.
              </p>
            </section>

            <section id="mistakes" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">8. Mistakes That Weaken Your Case</h2>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li><strong>Threatening a police case for a simple non-payment.</strong> Courts treat an unpaid bill as a civil dispute. A cheating complaint works only if there was fraud from the start, and a false threat can backfire.</li>
                <li><strong>Posting the client&apos;s name on social media</strong> or calling their staff repeatedly. This invites defamation or harassment claims and distracts from your case.</li>
                <li><strong>Agreeing to vague &ldquo;full and final&rdquo; settlements on calls.</strong> Get any settlement in writing, with dates and amounts.</li>
                <li><strong>Losing evidence.</strong> Keep original invoices, challans and phones. Do not clear WhatsApp chats.</li>
                <li><strong>Waiting too long.</strong> See the time limit below.</li>
              </ul>
            </section>

            <section id="time-limit" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">9. How Long You Have</h2>
              <p>
                Under the Limitation Act, 1963, you generally have <strong>three years</strong> from the date payment fell due to file a recovery suit. A written acknowledgement of the debt signed by the client before that period ends restarts the clock (Section 18), and so does a part-payment (Section 19). Do not let an invoice sit for years: evidence fades, and companies change hands or close.
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
                Many stuck business payments move once the other side receives an advocate&apos;s notice on WhatsApp, email and Speed Post. Start on <a href="https://www.legalrecovery.in/recovery/unpaid-invoices" target="_blank" rel="noopener" className={linkCls}>LegalRecovery.in</a>, or upload a bulk list if you have several defaulters. If they still don&apos;t pay, AMA Legal Solutions&apos; litigation team can take the matter to mediation, arbitration or court.
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
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Get Your Invoice Paid</h4>
              <p className="text-sm opacity-80 mb-6">
                Our lawyers review your invoices and chats, send the demand notice, and handle mediation and recovery suits across India.
              </p>
              <div className="space-y-4">
                {["Advocate demand notices", "Pre-suit mediation filing", "Order 37 summary suits", "MSME Samadhaan claims"].map((t) => (
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
