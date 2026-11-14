import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const PAGE_URL = "https://www.amalegalsolutions.com/services/foreign-buyer-not-paying-indian-exporter-legal-recovery";

export const metadata = {
  alternates: { canonical: PAGE_URL },
  title: "Foreign Buyer Not Paying Export Bill? Recovery & RBI Bank Guide",
  description:
    "Overseas buyer in the US, UK, Europe or Dubai defaulted on your export payment? Learn how to send an international legal notice, claim ECGC cover and handle RBI bank rules.",
  keywords:
    "foreign buyer not paying indian exporter what to do, how to recover export payment from overseas buyer, international client not paying invoice india, us uk dubai client not paying indian company, export payment stuck more than 9 months rbi bank rule, legal notice to foreign company for non payment",
  openGraph: {
    title: "Foreign Buyer Not Paying Export Bill? Recovery & RBI Bank Guide",
    description:
      "Two problems, one plan: recovering money from an overseas buyer, and keeping your bank, EDPMS, GST and ECGC position clean while you do it.",
    url: PAGE_URL,
    type: "article",
  },
};

const sections = [
  { id: "short-answer", title: "1. The Short Answer" },
  { id: "first-week", title: "2. What to Do in the First Week" },
  { id: "bank-rbi", title: "3. Your Bank, EDPMS and the RBI Deadline" },
  { id: "ecgc-gst", title: "4. ECGC Cover and GST" },
  { id: "notice", title: "5. The International Legal Notice" },
  { id: "where-to-sue", title: "6. Where Can You Sue? By Country" },
  { id: "buyer-bust", title: "7. If the Buyer Has Gone Bust" },
  { id: "next-time", title: "8. Protect the Next Shipment" },
  { id: "faqs", title: "9. Frequently Asked Questions" },
];

const relatedPages = [
  { title: "IT or Agency Client Not Paying After Delivery", href: "/blog/software-it-agency-client-not-paying-after-project-delivery" },
  { title: "Company Not Paying Your Bill? Legal Action", href: "/services/company-not-paying-pending-bill-legal-action-india" },
  { title: "Client Not Paying Invoice After Delivery", href: "/services/client-not-paying-invoice-after-delivery-legal-recovery" },
  { title: "Notice for Recovery of Outstanding Business Dues", href: "/notice-for-recovery-of-outstanding-business-dues" },
  { title: "Arbitration Services", href: "/services/arbitration" },
  { title: "Is a WhatsApp or Email Notice Valid?", href: "/is-an-email-or-whatsApp-message-considered-a-valid-legal-notice-in-indian-courts" },
];

const faqs = [
  {
    q: "A foreign buyer is not paying my export bill. What should an Indian exporter do first?",
    a: "Act on two fronts at once. Tell your bank (the authorised dealer that handled the shipping bill) and, if insured, ECGC, in writing and within the time your policy sets. At the same time, collect your contract, invoices, bill of lading or airway bill and correspondence, and send the buyer a formal advocate's demand notice by email and international courier. The notice starts the recovery and creates the paper trail your bank and ECGC will ask for.",
  },
  {
    q: "What happens if export payment is not received within the RBI time limit?",
    a: "The unrealised shipping bill stays open in your bank's EDPMS records and is reported as outstanding. Your bank can extend the time or, in specified cases, close the bill through a write-off when you show genuine reasons and recovery efforts. If it stays open, the bank may put you on a caution list, which makes future exports harder. The realisation period has changed several times in 2025 and 2026, so confirm the current limit for your shipment with your bank.",
  },
  {
    q: "Can I send a legal notice to a foreign company for non-payment from India?",
    a: "Yes. An Indian advocate can send a demand notice to an overseas company by email and international courier, and many buyers respond because it shows you are ready to escalate. A notice from India is not a court document in the buyer's country, so if the buyer ignores it, the next step depends on your contract and their country: arbitration, a suit in India followed by enforcement, or proceedings through a lawyer in the buyer's country.",
  },
  {
    q: "Can I enforce an Indian court decree against a buyer in the UK, UAE or US?",
    a: "It depends on the country. India's Section 44A CPC list of reciprocating territories includes the UK, Singapore, Hong Kong and the UAE, and courts in those places generally have a route to recognise Indian decrees. The USA is not a reciprocating territory, so you would usually need a fresh action there. Arbitration awards are easier: India, the US, the UK, the UAE and most trading countries are parties to the New York Convention.",
  },
  {
    q: "My US or UK client is not paying an Indian IT company. Does GST matter?",
    a: "Yes. A supply of services counts as a zero-rated export only if payment is received in convertible foreign exchange (or rupees where RBI permits). If you exported services under a Letter of Undertaking without paying IGST and the payment does not arrive within the time allowed under the GST rules, you may have to pay the IGST with interest. Discuss timing with your CA as soon as a foreign client defaults.",
  },
];

const linkCls = "text-[#D29E0D] hover:underline font-bold";

export default function ForeignBuyerNotPayingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Foreign Buyer Not Paying", href: "/services/foreign-buyer-not-paying-indian-exporter-legal-recovery" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Foreign Buyer or Overseas Client Not Paying? How Indian Exporters Recover Money & Clear Bank Export Compliance",
    description:
      "How Indian exporters of goods and services recover unpaid dues from overseas buyers while handling EDPMS, RBI realisation rules, ECGC claims and GST.",
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
      { "@type": "ListItem", position: 3, name: "Foreign Buyer Not Paying", item: PAGE_URL },
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
              Export &amp; International Recovery
            </span>
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-4 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
              Foreign Buyer or Overseas Client Not Paying? <span className="text-[#D29E0D]">How Indian Exporters Recover Money &amp; Clear Bank Export Compliance</span>
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              The shipment reached the buyer, or the work went live for the overseas client. Months later the money hasn&apos;t come, and now your bank is asking about the open shipping bill. Here is how to handle both problems together.
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
                When a foreign buyer does not pay, an Indian exporter has two problems: <strong>getting the money</strong>, and <strong>staying compliant in India</strong> while the export proceeds are unrealised. Tackle both at once. Inform your bank and ECGC (if insured) in writing early, then send the buyer a formal advocate&apos;s demand notice by email and international courier. If the buyer still does not pay, your contract and the buyer&apos;s country decide the next step: arbitration, a suit in India and enforcement abroad, or local proceedings in the buyer&apos;s country. Even if recovery looks unlikely, a documented recovery effort is what your bank and ECGC will want to see.
              </div>
            </section>

            <section id="first-week" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">2. What to Do in the First Week</h2>
              <ol className="space-y-3 ml-6 list-decimal mb-6">
                <li><strong>Collect the file:</strong> contract or purchase order, proforma and commercial invoices, shipping bill, bill of lading or airway bill, inspection certificates, and every email and WhatsApp with the buyer. For services: the statement of work, delivery emails, and the client&apos;s use of the work.</li>
                <li><strong>Check your payment terms.</strong> Under a letter of credit, your claim may be against the bank that issued it, so act within the LC&apos;s deadlines. Under documents against payment (D/P), check whether the buyer actually took the documents.</li>
                <li><strong>Check where the goods are.</strong> If they are still at the port or in a warehouse uncleared, you may be able to reroute, resell or reimport them. Speed matters because port charges grow.</li>
                <li><strong>Write to your bank</strong> (the authorised dealer that handled the shipping bill) explaining the delay.</li>
                <li><strong>Notify ECGC</strong> if you have a policy, within the time the policy sets.</li>
                <li><strong>Ask the buyer to confirm the amount in writing.</strong> An email admitting the dues is valuable evidence everywhere.</li>
              </ol>
            </section>

            <section id="bank-rbi" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">3. Your Bank, EDPMS and the RBI Deadline</h2>
              <p>
                Under FEMA, an exporter must realise and bring the full export value into India within a set period. Every shipping bill is tracked in the RBI&apos;s Export Data Processing and Monitoring System (EDPMS) through your bank until the money arrives. When a bill stays unrealised past the deadline, your bank follows up with you and reports it.
              </p>
              <p>
                <strong>The deadline itself has been moving.</strong> Under the current FEMA framework it is generally nine months (from shipment for goods, and from the invoice for services), with a longer period for exports invoiced or settled in rupees. But the RBI changed this period several times in 2025 and 2026, and the rule that applies can depend on your shipment date. Ask your bank in writing which deadline applies to each open bill.
              </p>
              <p>What your bank can do for you, if you show genuine reasons and effort:</p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li><strong>Extend the time</strong> for realisation.</li>
                <li><strong>Accept a reduced amount</strong> if you settle with the buyer for less.</li>
                <li><strong>Close the bill through a write-off</strong> in specified cases, for example when the buyer has been declared insolvent or the amount is uncollectable despite legal efforts, within the limits and documents the RBI rules require.</li>
              </ul>
              <p>
                In every one of these, the bank needs evidence that you tried to recover. A lawyer&apos;s demand notice, the buyer&apos;s replies, ECGC correspondence and any legal action you took make up that evidence. An exporter who simply lets a bill sit unrealised risks being placed on the caution list, which makes future exports much harder.
              </p>
            </section>

            <section id="ecgc-gst" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">4. ECGC Cover and GST</h2>
              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">ECGC</h3>
              <p>
                If you or your bank has ECGC export credit cover, the policy, not general law, sets the rules. Most policies require you to report overdue payments within a fixed time, take reasonable recovery steps, and consult ECGC before agreeing a settlement or writing off part of the debt. Missing these steps is a common reason claims run into trouble, so read the policy&apos;s default and claim clauses the day a payment is late. Recoveries after ECGC pays a claim are usually shared with ECGC.
              </p>
              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">GST for service exporters</h3>
              <p>
                For services, zero-rated export status depends on receiving payment in convertible foreign exchange (or rupees where the RBI permits). If you exported under a Letter of Undertaking without paying IGST and the payment does not arrive within the period the GST rules allow, you may have to pay the IGST with interest. IT and consulting exporters should involve their CA early.
              </p>
            </section>

            <section id="notice" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">5. The International Legal Notice</h2>
              <p>
                An advocate&apos;s demand notice from India, written in clear English, is the standard first step. Overseas buyers often take it seriously because it signals that you are ready for arbitration or proceedings in their own country, which they would rather avoid. A strong notice:
              </p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li>names the correct legal entity (check the buyer&apos;s company registry, not just the trading name);</li>
                <li>lists each invoice, shipment or deliverable, the payment terms and the amount due in the contract currency;</li>
                <li>refers to the contract&apos;s governing law, dispute resolution and arbitration clause, if any;</li>
                <li>sets a clear deadline, usually 14 to 30 days for overseas parties; and</li>
                <li>states the next steps: arbitration, proceedings, and reporting to your insurer.</li>
              </ul>
              <p>
                Send it by email to the buyer&apos;s official addresses and by an international courier with tracking. You can <a href="https://www.legalrecovery.in/recovery/export-dues" target="_blank" rel="noopener" className={linkCls}>send an official legal notice to a foreign buyer or international client through LegalRecovery.in</a>, our online notice service, and keep the delivery records for your bank and ECGC file.
              </p>
            </section>

            <section id="where-to-sue" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">6. Where Can You Sue? It Depends on the Country</h2>
              <p>
                If the notice is ignored, read your contract first. An <strong>arbitration clause</strong> is usually your best route: India, the US, the UK, the UAE, Singapore and most trading nations are parties to the New York Convention, so an arbitral award can be enforced against the buyer&apos;s assets abroad. Without arbitration, you may be able to sue in India (if part of the cause of action arose here, such as where payment was due) and then enforce the decree abroad, or sue in the buyer&apos;s country.
              </p>
              <div className="overflow-x-auto my-8">
                <table className="min-w-full bg-white border border-[#EBE9E4] rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#EBE9E4] text-[#30261C]">
                      <th className="px-6 py-4 text-left font-bold text-sm">Buyer&apos;s country</th>
                      <th className="px-6 py-4 text-left font-bold text-sm">Indian court decree</th>
                      <th className="px-6 py-4 text-left font-bold text-sm">Arbitral award</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBE9E4]">
                    <tr><td className="px-6 py-4 text-sm font-semibold">UK</td><td className="px-6 py-4 text-sm">Reciprocating territory under Section 44A CPC, so there is a recognised route to enforce</td><td className="px-6 py-4 text-sm">Enforceable (New York Convention)</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">UAE</td><td className="px-6 py-4 text-sm">Notified as a reciprocating territory in 2020</td><td className="px-6 py-4 text-sm">Enforceable (New York Convention)</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">Singapore, Hong Kong</td><td className="px-6 py-4 text-sm">Reciprocating territories</td><td className="px-6 py-4 text-sm">Enforceable (New York Convention)</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">USA</td><td className="px-6 py-4 text-sm">Not a reciprocating territory; usually needs a fresh case in a US court, which may treat the Indian judgment as evidence</td><td className="px-6 py-4 text-sm">Enforceable (New York Convention)</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">EU countries</td><td className="px-6 py-4 text-sm">Generally not reciprocating territories; local proceedings are usually needed</td><td className="px-6 py-4 text-sm">Enforceable (New York Convention)</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                In practice, for an undisputed debt the most effective step is often a demand letter from a local lawyer in the buyer&apos;s country, followed by that country&apos;s own fast debt procedures. In the UK, for example, an unpaid undisputed company debt of £750 or more can support a statutory demand and a winding-up petition. Our team coordinates with partner lawyers abroad where needed. For IT and service clients overseas, see also our guide for <Link href="/blog/software-it-agency-client-not-paying-after-project-delivery" className={linkCls}>IT and agency clients who don&apos;t pay</Link>.
              </p>
            </section>

            <section id="buyer-bust" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">7. If the Buyer Has Gone Bust</h2>
              <p>
                If the buyer has entered insolvency or liquidation in its country, you usually cannot sue it any more. Instead, file a proof of debt or claim with the buyer&apos;s administrator, liquidator or trustee before their deadline, notify ECGC, and give your bank the insolvency documents. These documents are often what your bank needs to close or write off the shipping bill under the RBI rules. Keep a copy of your legal notice and the buyer&apos;s replies with them: together they show you did everything reasonable to recover.
              </p>
            </section>

            <section id="next-time" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">8. Protect the Next Shipment</h2>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li><strong>Secure payment terms</strong> for new or slow-paying buyers: advance payment, a confirmed letter of credit, or D/P rather than open account.</li>
                <li><strong>Credit insurance</strong> through ECGC or a private insurer, with buyer limits checked before shipping.</li>
                <li><strong>An arbitration clause</strong> naming a seat and institution (for example SIAC or a seat in India), English as the language, and the governing law.</li>
                <li><strong>Interest on late payment</strong> and a clear invoice dispute window, so the buyer cannot raise quality complaints months later.</li>
                <li><strong>Check the buyer</strong> in its company registry and through a credit report before extending open credit.</li>
              </ul>
              <p>
                For overseas clients of services, you can also <a href="https://www.legalrecovery.in/recovery/international-client-payment" target="_blank" rel="noopener" className={linkCls}>send a notice to an international client for unpaid payments</a> as soon as an invoice goes overdue.
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
                A formal advocate&apos;s notice starts the recovery and gives your bank and ECGC the record of effort they look for. Start on <a href="https://www.legalrecovery.in/recovery/export-dues" target="_blank" rel="noopener" className={linkCls}>LegalRecovery.in</a>. If the buyer still doesn&apos;t pay, AMA Legal Solutions can take the matter to arbitration or court and coordinate with lawyers in the buyer&apos;s country.
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
              This guide is general information on Indian law as of November 2026, not legal advice for your specific case. FEMA realisation rules change often: confirm the current position with your authorised dealer bank and an advocate before acting.
            </p>
          </article>
        </main>

        <aside className="lg:w-[25%]">
          <div className="sticky top-32 space-y-8">
            <div className="bg-[#30261C] text-[#EBE9E4] p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Recover Your Export Dues</h4>
              <p className="text-sm opacity-80 mb-6">
                Our lawyers send international notices, handle arbitration and court work, and prepare the recovery record your bank and ECGC need.
              </p>
              <div className="space-y-4">
                {["International demand notices", "International arbitration", "Enforcement of decrees and awards", "Bank and ECGC documentation"].map((t) => (
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
