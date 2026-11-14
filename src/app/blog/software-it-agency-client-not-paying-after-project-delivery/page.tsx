import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const PAGE_URL = "https://www.amalegalsolutions.com/blog/software-it-agency-client-not-paying-after-project-delivery";

export const metadata = {
  alternates: { canonical: PAGE_URL },
  title: "IT, App or Agency Client Not Paying? How to Recover Final Payment",
  description:
    "Client stalling final sign-off, demanding endless free changes, or ghosting your agency invoice? Here is how IT and marketing firms legally push for payment in India.",
  keywords:
    "software client not paying after project delivery, client delaying payment asking for endless changes, web development client not paying final milestone, digital marketing client not paying monthly retainer, can developer stop website or app if client does not pay, how it company recovers unpaid invoice from client",
  openGraph: {
    title: "IT, App or Agency Client Not Paying? How to Recover Final Payment",
    description:
      "Who owns the code until you're paid, why 'endless changes' is a payment tactic, what you must not do to a live site, and the legal route to recover your invoice.",
    url: PAGE_URL,
    type: "article",
  },
};

const sections = [
  { id: "short-answer", title: "1. The Short Answer" },
  { id: "endless-changes", title: "2. The 'Endless Changes' Tactic" },
  { id: "who-owns", title: "3. Who Owns the Code and Designs?" },
  { id: "notice", title: "4. The Payment and Copyright Notice" },
  { id: "do-not", title: "5. Can You Switch Off the Site or App?" },
  { id: "retainers", title: "6. Marketing Retainers and Ad Spend" },
  { id: "routes", title: "7. If They Still Don't Pay" },
  { id: "next-contract", title: "8. Protect Your Next Project" },
  { id: "faqs", title: "9. Frequently Asked Questions" },
];

const relatedPages = [
  { title: "Client Not Paying Invoice After Delivery", href: "/services/client-not-paying-invoice-after-delivery-legal-recovery" },
  { title: "Company Not Paying Your Bill? Legal Action", href: "/services/company-not-paying-pending-bill-legal-action-india" },
  { title: "Buyer Not Paying After 45 Days? MSME Recovery", href: "/blog/buyer-not-paying-msme-payment-after-45-days-recovery" },
  { title: "Freelancer Payment Recovery Guide", href: "/freelancer-payment-recovery-guide" },
  { title: "Intellectual Property Rights Services", href: "/services/intellectual-property-rights" },
  { title: "Breach of Contract Notice", href: "/breach-of-contract-notice" },
  { title: "Is a WhatsApp or Email Notice Valid?", href: "/is-an-email-or-whatsApp-message-considered-a-valid-legal-notice-in-indian-courts" },
];

const faqs = [
  {
    q: "My software client is not paying after project delivery. What should I do?",
    a: "Freeze new work, put the unpaid milestone and the go-live date in writing, and send one final reminder. If that is ignored, send an advocate's notice that demands payment and, where your contract lets you, states that the client has no right to keep using your code or designs until it pays. If the client still does not pay, you can claim through MSME Samadhaan (if you are a Udyam-registered micro or small service provider), pre-institution mediation and a Commercial Court suit, or a copyright claim.",
  },
  {
    q: "The client keeps asking for endless changes and won't release the final payment. Is that legal?",
    a: "Changes outside the agreed scope are new work, not a reason to withhold payment for work already delivered. If the client has launched the website or app, or is using it in its business, that strongly suggests it accepted the work. Reply in writing that the project was delivered on a date, list which requests are new scope with a price, and ask for the milestone payment separately.",
  },
  {
    q: "Can a developer stop a website or app if the client does not pay?",
    a: "Not on your own. Switching off, locking or damaging a client's live system without permission can expose you to claims under Sections 43 and 66 of the Information Technology Act, 2000, even if the client owes you money. You may pause services you host and control only if your contract allows suspension for non-payment and you give prior written notice. Otherwise use a legal notice and, if needed, a court order.",
  },
  {
    q: "Does the client own the source code if it has not paid me?",
    a: "It depends on your contract. Under the Copyright Act, 1957, the developer or agency that creates the work is usually the first owner, and ownership passes to the client only through a written assignment. If your contract says IP transfers on full payment, the client does not own it until it pays. If you already signed a full assignment, you have a claim for money but not a copyright claim. Photographs and films made for a client for payment are an exception: the client usually owns those unless the contract says otherwise.",
  },
  {
    q: "A digital marketing client is not paying the monthly retainer. How do I recover it?",
    a: "Gather the signed proposal or retainer email, the monthly reports, campaign dashboards and the client's approvals of creatives. These prove the work. Check the notice period in your agreement: the client usually owes the retainer for that period even if it wants to stop. Then send a lawyer's notice for the unpaid months plus any ad spend you paid on the client's behalf, and follow the recovery route that fits the amount.",
  },
];

const linkCls = "text-[#D29E0D] hover:underline font-bold";

export default function ItAgencyClientNotPayingPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "IT or Agency Client Not Paying", href: "/blog/software-it-agency-client-not-paying-after-project-delivery" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Client Using Your App, Website or Marketing Work Without Paying? How Agencies & IT Firms Recover Stuck Payments",
    description:
      "How Indian IT companies, developers and marketing agencies recover unpaid final milestones and retainers: acceptance, copyright ownership, legal notices and recovery routes.",
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
      { "@type": "ListItem", position: 3, name: "IT or Agency Client Not Paying", item: PAGE_URL },
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
              IT &amp; Agency Payment Recovery
            </span>
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-4 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
              Client Using Your App, Website or Marketing Work Without Paying? <span className="text-[#D29E0D]">How Agencies &amp; IT Firms Recover Stuck Payments</span>
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              The site is live. The app is in the Play Store. The campaigns are running. And the final milestone is stuck behind &ldquo;just a few more changes.&rdquo; Here is what Indian law actually lets you do.
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
                If a client is using your website, app, software or campaigns without paying, you usually have two levers. The first is the <strong>debt</strong>: a client who has gone live has, in practice, accepted the work, and you can recover the invoice through a notice, MSME Samadhaan, mediation and a fast-track suit. The second is <strong>copyright</strong>: unless your contract has already transferred the IP to the client, you are usually the legal owner of the code and designs, and a client using them without paying is on weak ground. A lawyer&apos;s notice that uses both levers is often what gets the final milestone released. What you must <em>not</em> do is switch off or tamper with the client&apos;s live system on your own.
              </div>
            </section>

            <section id="endless-changes" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">2. The &ldquo;Endless Changes&rdquo; Tactic</h2>
              <p>
                &ldquo;We&apos;ll pay once these last changes are done&rdquo; is the most common way IT and agency payments get stuck. Each round of changes pushes the payment date, and the client keeps using the work in the meantime. The law looks at what was agreed and what happened:
              </p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li><strong>Scope.</strong> Your proposal, statement of work or quotation email defines what you agreed to build. Requests outside it are new work, which the client must pay for separately. They are not a reason to hold back payment for what was delivered.</li>
                <li><strong>Acceptance.</strong> If your contract has a user acceptance period (say, 7 days to report defects, otherwise deemed accepted), check whether it has passed. Even without one, a client that launches the site, publishes the app or runs the campaign is treating the work as accepted.</li>
                <li><strong>Defects vs wishes.</strong> Genuine bugs in agreed features are your responsibility to fix. A new colour scheme, extra pages or another integration are not.</li>
              </ul>
              <p>
                Put this in writing now. Send one email that records the delivery and go-live dates, separates real defects (with a date to fix them) from new requests (with a quote), and asks for the milestone payment by a fixed date. That email becomes evidence later.
              </p>
            </section>

            <section id="who-owns" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">3. Who Owns the Code and Designs Until You&apos;re Paid?</h2>
              <p>
                Under Section 17 of the Copyright Act, 1957, the author of a work is generally its first owner. Your employees&apos; work belongs to your company, and when your company builds something for a client as an independent contractor, your company usually owns the copyright. It passes to the client only through a written, signed assignment (Sections 18 and 19). So the answer depends on your contract:
              </p>
              <div className="overflow-x-auto my-8">
                <table className="min-w-full bg-white border border-[#EBE9E4] rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#EBE9E4] text-[#30261C]">
                      <th className="px-6 py-4 text-left font-bold text-sm">What your contract says</th>
                      <th className="px-6 py-4 text-left font-bold text-sm">Who owns the code or designs now</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBE9E4]">
                    <tr><td className="px-6 py-4 text-sm font-semibold">&ldquo;IP transfers to the client on full payment&rdquo;</td><td className="px-6 py-4 text-sm">You do, until the client pays in full. This is your strongest position.</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">Nothing about IP (quote, emails or WhatsApp only)</td><td className="px-6 py-4 text-sm">Usually you. The client may argue it has an implied licence to use what it commissioned, but that argument is weak when it has not paid for it.</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">&ldquo;All IP vests in the client&rdquo; or a signed assignment, with no payment condition</td><td className="px-6 py-4 text-sm">Likely the client. You have a strong claim for the money but little copyright leverage.</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                Two caveats. First, third-party and open-source components inside your work are not yours to claim. Second, for <strong>photographs, videos and films</strong> made for a client for payment, Section 17 makes the client the first owner unless the contract says otherwise. Marketing agencies doing shoots should check this before relying on copyright.
              </p>
            </section>

            <section id="notice" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">4. The Payment and Copyright Notice</h2>
              <p>
                When you still own the IP, your lawyer&apos;s notice can do more than demand money. A well-drafted notice:
              </p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li>lists the milestones, deliveries, go-live date and invoices, with the exact amount due and interest;</li>
                <li>records that out-of-scope requests were quoted separately and are not a reason to withhold payment;</li>
                <li>states that under the contract the client has no right to use, copy or modify the code, designs or creatives until it pays in full;</li>
                <li>demands payment within a deadline, failing which the client must stop using the work; and</li>
                <li>reserves your rights to a civil suit for infringement and recovery, including an injunction and damages under Section 55 of the Copyright Act.</li>
              </ul>
              <p>
                For a business that depends on its live website or app, the risk of an injunction usually changes the conversation. If the client keeps using the work after the notice, your lawyer can ask the court for an injunction. Where infringing copies are hosted by a third party, the law also provides a notice route to the hosting intermediary, which then needs a court order within a short period to keep the content down. That is a step for your lawyer, not a DIY threat.
              </p>
              <p>
                You can <a href="https://www.legalrecovery.in/web-development-client-not-paying-legal-notice" target="_blank" rel="noopener" className={linkCls}>send an unpaid IT, web development, or agency invoice legal notice via LegalRecovery.in</a>, our online notice service, delivered by Speed Post, email and WhatsApp.
              </p>
            </section>

            <section id="do-not" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">5. Can You Switch Off the Website or App?</h2>
              <p>
                This is the first thing most founders want to do, and it is where many turn a strong case into a weak one. Under Sections 43 and 66 of the Information Technology Act, 2000, accessing, disrupting or damaging someone else&apos;s computer system without permission can make you liable for compensation and even prosecution. An unpaid invoice is not permission.
              </p>
              <div className="overflow-x-auto my-8">
                <table className="min-w-full bg-white border border-[#EBE9E4] rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#EBE9E4] text-[#30261C]">
                      <th className="px-6 py-4 text-left font-bold text-sm">Usually safe</th>
                      <th className="px-6 py-4 text-left font-bold text-sm">Risky: avoid</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBE9E4]">
                    <tr><td className="px-6 py-4 text-sm">Stopping further work and support until paid</td><td className="px-6 py-4 text-sm">Taking down a site on the client&apos;s own server or hosting account</td></tr>
                    <tr><td className="px-6 py-4 text-sm">Not handing over source code or credentials that you hold, where the contract ties handover to payment</td><td className="px-6 py-4 text-sm">Changing passwords on accounts registered to the client (domain, app store, ad account)</td></tr>
                    <tr><td className="px-6 py-4 text-sm">Suspending a service you host and bill for, if the contract allows suspension and you give written notice first</td><td className="px-6 py-4 text-sm">Hidden kill switches, deleting data, or pushing broken code</td></tr>
                    <tr><td className="px-6 py-4 text-sm">A lawyer&apos;s notice and, if needed, a court injunction</td><td className="px-6 py-4 text-sm">Posting the client&apos;s name and dues publicly on social media</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="retainers" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">6. Marketing Retainers and Ad Spend</h2>
              <p>
                Digital marketing agencies have a different problem: there is no single &ldquo;delivery,&rdquo; just months of work. Your proof is the trail you already keep: the signed proposal or retainer email, monthly reports, campaign dashboards, approvals of creatives on email or WhatsApp, and the client&apos;s own use of the leads or content.
              </p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li><strong>Notice period.</strong> If your agreement requires 30 days&apos; notice to end the retainer, the client usually owes that month even if it stops replying.</li>
                <li><strong>Ad spend you paid.</strong> If you ran ads on your own card for the client, that is a separate, easily proven debt. Keep the platform invoices.</li>
                <li><strong>Accounts and assets.</strong> Ad accounts, pages and domains set up in the client&apos;s name belong to the client. Do not hold them hostage; claim your money instead.</li>
              </ul>
            </section>

            <section id="routes" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">7. If They Still Don&apos;t Pay</h2>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li><strong>MSME Samadhaan.</strong> Many IT firms and agencies are Udyam-registered micro or small <em>service</em> enterprises. If you were registered before the work, the client must pay within 45 days at most and owes interest at three times the RBI bank rate after that. See our <Link href="/blog/buyer-not-paying-msme-payment-after-45-days-recovery" className={linkCls}>MSME 45-day payment guide</Link>.</li>
                <li><strong>Mediation and a fast-track suit.</strong> For commercial claims of ₹3 lakh or more, pre-institution mediation is compulsory before a Commercial Court suit, and a summary suit under Order 37 CPC may be possible. Our guide on <Link href="/services/client-not-paying-invoice-after-delivery-legal-recovery" className={linkCls}>recovering an unpaid invoice after delivery</Link> walks through the steps.</li>
                <li><strong>Large dues from a company.</strong> If a company owes you ₹1 crore or more without a genuine dispute, an insolvency demand notice may apply. See <Link href="/services/company-not-paying-pending-bill-legal-action-india" className={linkCls}>legal action when a company is not paying your bill</Link>.</li>
                <li><strong>Copyright suit.</strong> Where you still own the IP, a suit for injunction and damages can run with your money claim.</li>
                <li><strong>Overseas client.</strong> For US, UK, Middle East or other foreign clients, the route depends on your contract&apos;s governing law and the client&apos;s country. You can <a href="https://www.legalrecovery.in/legal-notice-to-international-client-unpaid-invoice-recovery" target="_blank" rel="noopener" className={linkCls}>send a legal notice to an international client for an unpaid invoice</a> as the first step.</li>
              </ul>
              <p>
                You generally have three years from the due date to file a recovery suit. A written acknowledgement of the dues by the client, or a part-payment, restarts that period.
              </p>
            </section>

            <section id="next-contract" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">8. Protect Your Next Project</h2>
              <p>Five clauses that prevent most of these disputes:</p>
              <ol className="space-y-3 ml-6 list-decimal mb-6">
                <li><strong>IP transfers on full payment</strong>, with a licence to use only while payments are current.</li>
                <li><strong>Deemed acceptance</strong> if no defects are reported within a fixed number of days, and on go-live.</li>
                <li><strong>Change requests</strong> priced separately, with a rate card.</li>
                <li><strong>Right to suspend</strong> hosted services and support after written notice for unpaid invoices.</li>
                <li><strong>Interest, jurisdiction and dispute resolution</strong>: late payment interest, the city whose courts will hear disputes, and arbitration if you want it.</li>
              </ol>
              <p>
                Freelancers working alone can also read our broader <Link href="/freelancer-payment-recovery-guide" className={linkCls}>freelancer payment recovery guide</Link>.
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
                A notice that puts both your invoice and your IP rights on record is often what releases a stuck final milestone. Start on <a href="https://www.legalrecovery.in/web-development-client-not-paying-legal-notice" target="_blank" rel="noopener" className={linkCls}>LegalRecovery.in</a>. If the client still doesn&apos;t pay, AMA Legal Solutions can take the matter to MSME Samadhaan, mediation or court.
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
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Get Your Final Milestone Paid</h4>
              <p className="text-sm opacity-80 mb-6">
                Our lawyers review your contract and IP position, send the notice, and handle recovery and copyright claims across India.
              </p>
              <div className="space-y-4">
                {["Payment and copyright notices", "Contract and IP review", "MSME Samadhaan claims", "Recovery and injunction suits"].map((t) => (
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
