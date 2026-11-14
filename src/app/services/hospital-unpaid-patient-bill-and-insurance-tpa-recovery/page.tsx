import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TableOfContents from "@/components/TableOfContents";
import { FaPhone, FaWhatsapp, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const PAGE_URL = "https://www.amalegalsolutions.com/services/hospital-unpaid-patient-bill-and-insurance-tpa-recovery";

export const metadata = {
  alternates: { canonical: PAGE_URL },
  title: "Patient or TPA Not Paying Hospital Bill? Legal Recovery for Doctors",
  description:
    "Hospitals cannot stop a patient's discharge for unpaid bills, so how do you recover the money? A plain legal guide for hospitals and clinics to recover patient and TPA dues.",
  keywords:
    "patient not paying hospital bill what can hospital do legally, how hospital can recover pending bill after discharge, patient family refusing to pay hospital bill india, tpa cutting approved cashless claim hospital recovery, health insurance company delaying payment to network hospital, patient cheque bounced at hospital discharge legal action",
  openGraph: {
    title: "Patient or TPA Not Paying Hospital Bill? Legal Recovery for Doctors",
    description:
      "What hospitals must not do at discharge, how to document dues safely, and how to recover from patients, families and insurance TPAs.",
    url: PAGE_URL,
    type: "article",
  },
};

const sections = [
  { id: "short-answer", title: "1. The Short Answer" },
  { id: "dont-detain", title: "2. Why You Can't Hold the Patient" },
  { id: "at-discharge", title: "3. What to Do at Discharge" },
  { id: "who-pays", title: "4. Who Is Liable: Patient or Family?" },
  { id: "recovery", title: "5. Recovering From the Patient" },
  { id: "tpa", title: "6. Insurer and TPA Short Payments" },
  { id: "privacy", title: "7. Confidentiality While Recovering" },
  { id: "faqs", title: "8. Frequently Asked Questions" },
];

const relatedPages = [
  { title: "Dealer Not Paying? Using Security Cheques Legally", href: "/blog/dealer-not-paying-money-security-cheque-bounce-recovery" },
  { title: "Client Not Paying Invoice After Delivery", href: "/services/client-not-paying-invoice-after-delivery-legal-recovery" },
  { title: "Company Not Paying Your Bill? Legal Action", href: "/services/company-not-paying-pending-bill-legal-action-india" },
  { title: "Cheque Bounce Notice", href: "/cheque-bounce-notice" },
  { title: "Demand Notice for Recovery of Money", href: "/demand-notice-for-recovery-of-money" },
  { title: "Arbitration Services", href: "/services/arbitration" },
];

const faqs = [
  {
    q: "A patient is not paying the hospital bill. What can the hospital do legally?",
    a: "Discharge the patient, but document the dues first: a final itemised bill, the consent and admission forms, and ideally a voluntary written acknowledgement or payment undertaking signed by the patient or the relative who admitted them. Then send a lawyer's demand notice. If it is not paid, the hospital can file a civil recovery suit (a fast-track summary suit if there is a signed undertaking, promissory note or cheque), approach a pre-litigation Lok Adalat, or file a Section 138 case if a cheque bounced.",
  },
  {
    q: "Can a hospital refuse to discharge a patient or release a body for unpaid bills?",
    a: "No. The Charter of Patients' Rights adopted by the Union Health Ministry says a patient cannot be detained, and a body cannot be withheld, because of a dispute over payment, and courts have repeatedly ordered release in such cases. Holding a patient against their will can also amount to wrongful confinement under the Bharatiya Nyaya Sanhita, 2023. The safe course is to discharge and recover the money through legal channels.",
  },
  {
    q: "Is the patient's family liable to pay the hospital bill?",
    a: "The patient is the person primarily liable. A relative becomes personally liable only if they agreed to pay, for example by signing the admission form as the person responsible for payment, a guarantee or an undertaking. If the patient has died, the claim lies against their estate, and legal heirs are liable only up to the value of what they inherited.",
  },
  {
    q: "The TPA cut our approved cashless claim. Can the hospital recover the deducted amount?",
    a: "Check your network provider agreement and the tariff or package rates agreed with the insurer. Deductions that the agreement and policy allow, such as non-payable items, can usually be billed to the patient if they were explained at admission. Deductions that break the agreed tariff should be disputed in writing with the insurer, escalated through its grievance process, and pursued under the dispute clause of the agreement. If you agreed a package rate, you generally cannot bill the patient above it.",
  },
  {
    q: "The patient's cheque bounced after discharge. What should the hospital do?",
    a: "Send a written demand notice under Section 138 of the Negotiable Instruments Act within 30 days of receiving the bank's return memo. If the amount is not paid within 15 days of the notice being received, a criminal complaint can be filed within the following month. You can claim the bill through a civil suit at the same time.",
  },
];

const linkCls = "text-[#D29E0D] hover:underline font-bold";

export default function HospitalBillRecoveryPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Hospital Bill Recovery", href: "/services/hospital-unpaid-patient-bill-and-insurance-tpa-recovery" },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Patient Family or Insurance TPA Not Paying Hospital Bills? Safe, Legal Recovery Process for Hospitals & Clinics",
    description:
      "How hospitals, nursing homes and clinics in India can lawfully recover unpaid patient bills and short-paid insurance or TPA claims without detaining patients.",
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
      { "@type": "ListItem", position: 3, name: "Hospital Bill Recovery", item: PAGE_URL },
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
              Hospital &amp; Clinic Dues Recovery
            </span>
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-4 text-[#30261C]" style={{ fontFamily: "var(--font-polysans)" }}>
              Patient Family or Insurance TPA Not Paying Hospital Bills? <span className="text-[#D29E0D]">Safe, Legal Recovery Process for Hospitals &amp; Clinics</span>
            </h1>
            <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed mb-10">
              The ICU stay or surgery is over, the family promises to pay &ldquo;next week,&rdquo; or the TPA has paid far less than it approved. Here is how hospitals, nursing homes and clinics recover genuine treatment bills without crossing legal lines.
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
                A hospital in India cannot detain a patient or withhold a body over unpaid bills. The lawful way to protect your money is to <strong>document the debt at discharge</strong> (an itemised final bill and a voluntary signed acknowledgement or payment undertaking with ID proof from the patient or responsible relative), then send an <strong>advocate&apos;s demand notice</strong> promptly, and if needed file a civil suit, use a pre-litigation Lok Adalat, or file a cheque bounce case. Short payments by insurers and TPAs are a separate claim, governed mainly by your network provider agreement.
              </div>
            </section>

            <section id="dont-detain" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">2. Why You Can&apos;t Hold the Patient or the Body</h2>
              <p>
                It is a common instinct: keep the patient, the discharge summary or the body until the family pays. It is also the fastest way for a hospital with a genuine claim to end up as the accused.
              </p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li>The <strong>Charter of Patients&apos; Rights</strong>, prepared by the NHRC and circulated by the Union Health Ministry to the states, says a patient has the right to be discharged and a body must be handed over, and that neither can be held back over a payment dispute.</li>
                <li>Courts have repeatedly ordered hospitals to release patients and bodies held for dues, sometimes with costs against the hospital.</li>
                <li>Keeping someone against their will can amount to <strong>wrongful confinement</strong> under the Bharatiya Nyaya Sanhita, 2023, and families often go straight to the police or social media.</li>
                <li>Separately, emergency care cannot be refused or delayed for want of an advance (<em>Parmanand Katara v. Union of India</em>, 1989).</li>
              </ul>
              <p>
                You also do not need to withhold anything to protect your claim. A well-documented bill is fully recoverable after discharge.
              </p>
            </section>

            <section id="at-discharge" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">3. What to Do at Discharge: A Billing Desk Checklist</h2>
              <ol className="space-y-3 ml-6 list-decimal mb-6">
                <li><strong>Admission paperwork:</strong> make sure the admission form names the person responsible for payment and that they signed it. Keep the estimate given and the consent forms.</li>
                <li><strong>Itemised final bill:</strong> room, procedures, consumables, medicines and doctor fees, with insurance approvals and deposits deducted.</li>
                <li><strong>Written acknowledgement:</strong> ask the patient or responsible relative to sign a short statement confirming the balance due and when they will pay. A written acknowledgement of a debt is strong evidence and restarts the limitation period under Section 18 of the Limitation Act.</li>
                <li><strong>Payment undertaking or promissory note:</strong> for larger balances, a signed undertaking with instalment dates or a properly stamped promissory note gives you a document that can support a fast-track summary suit.</li>
                <li><strong>ID and contact proof:</strong> a copy of an ID document, current address, and phone numbers of the patient and the person signing.</li>
                <li><strong>Post-dated cheques:</strong> if offered for instalments, record them against the undertaking.</li>
              </ol>
              <p>
                One rule matters above all: the undertaking must be <strong>voluntary</strong>. If it was signed only because the hospital refused to let the patient leave, the family can argue coercion, and the document loses much of its value. Offer it as the way to get discharge done smoothly, not as a condition of release.
              </p>
              <p>
                You can <a href="https://www.legalrecovery.in/templates/promissory-note-format-india" target="_blank" rel="noopener" className={linkCls}>download a payment undertaking format</a> and <a href="https://www.legalrecovery.in/send-a-legal-notice/for-business-to-recover-their-unpaid-dues" target="_blank" rel="noopener" className={linkCls}>send post-discharge hospital bill recovery notices at LegalRecovery.in</a>, our online notice service.
              </p>
            </section>

            <section id="who-pays" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">4. Who Is Liable: the Patient or the Family?</h2>
              <div className="overflow-x-auto my-8">
                <table className="min-w-full bg-white border border-[#EBE9E4] rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#EBE9E4] text-[#30261C]">
                      <th className="px-6 py-4 text-left font-bold text-sm">Situation</th>
                      <th className="px-6 py-4 text-left font-bold text-sm">Who you claim from</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBE9E4]">
                    <tr><td className="px-6 py-4 text-sm font-semibold">Adult patient, nobody else signed for payment</td><td className="px-6 py-4 text-sm">The patient</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">A relative signed the admission form as responsible for payment, or a guarantee or undertaking</td><td className="px-6 py-4 text-sm">The patient and that relative</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">Patient was a minor</td><td className="px-6 py-4 text-sm">Usually the parent or guardian who admitted the child and signed for treatment</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">Patient has died</td><td className="px-6 py-4 text-sm">The patient&apos;s estate; legal heirs are liable only up to what they inherited, unless they personally signed for payment</td></tr>
                    <tr><td className="px-6 py-4 text-sm font-semibold">Employer or corporate tie-up</td><td className="px-6 py-4 text-sm">The company, under its agreement with the hospital</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                This is why the admission form matters so much: it decides whether a relative who walks away is personally on the hook.
              </p>
            </section>

            <section id="recovery" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">5. Recovering From the Patient After Discharge</h2>
              <p>
                <strong>Send the notice promptly.</strong> Within a couple of weeks of a missed payment date, while memories are fresh, send an advocate&apos;s notice to the patient and any relative who signed. It should list the admission dates, the itemised bill, payments received, the balance and a clear deadline. Keep it factual: name the treatment only as far as needed, and do not discuss the diagnosis.
              </p>
              <p>If the notice is ignored:</p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li><strong>Pre-litigation Lok Adalat.</strong> For individual patient dues, the Legal Services Authority can call the patient for a pre-litigation settlement. A settlement there is final and enforceable like a decree, and there is no court fee.</li>
                <li><strong>Civil recovery suit.</strong> With a signed undertaking, promissory note or cheque, a <strong>summary suit under Order 37 CPC</strong> may be possible, where the patient must get the court&apos;s permission to defend. See how summary suits work in our guide to <Link href="/services/client-not-paying-invoice-after-delivery-legal-recovery" className={linkCls}>recovering an unpaid invoice</Link>.</li>
                <li><strong>Cheque bounce.</strong> A bounced cheque gives a Section 138 remedy with strict deadlines: notice within 30 days of the bank&apos;s memo. Our <Link href="/blog/dealer-not-paying-money-security-cheque-bounce-recovery" className={linkCls}>security cheque guide</Link> explains how cheques given for instalments are treated.</li>
              </ul>
              <p>
                Generally, the hospital has <strong>three years</strong> from when payment was due to file a recovery suit, and a signed acknowledgement or part-payment restarts that period.
              </p>
            </section>

            <section id="tpa" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">6. Insurer and TPA Short Payments and Delays</h2>
              <p>
                When a cashless claim is approved for one amount and settled for less, or paid months late, the hospital&apos;s rights come mainly from its <strong>network provider agreement</strong> with the insurer (and the TPA acting for it): the agreed tariff, package rates, documents required, payment timelines and dispute clause.
              </p>
              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">What IRDAI rules do and don&apos;t do for hospitals</h3>
              <p>
                IRDAI&apos;s 2024 Master Circular on health insurance sets fast timelines for cashless decisions: a decision on a cashless request within one hour, and final discharge authorisation within three hours of the hospital&apos;s request. Where discharge is delayed beyond that, extra charges are to be borne by the insurer. IRDAI rules also require interest on delayed claim payments. But these protections are written mainly for the <strong>policyholder</strong>. Whether the hospital itself can claim interest from the insurer depends on its network agreement, so do not promise your billing team &ldquo;IRDAI interest&rdquo; without checking the contract.
              </p>
              <h3 className="text-2xl font-semibold text-[#30261C] mt-8 mb-4">A practical approach</h3>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li><strong>Sort the deductions.</strong> Items the policy treats as non-payable (some consumables, for example) can usually be billed to the patient if this was explained at admission. Deductions that go against the agreed tariff or package are a claim against the insurer. If you agreed a package rate, you generally cannot bill the patient above it.</li>
                <li><strong>Dispute in writing.</strong> Reply to each deduction letter with the agreement clause, the pre-authorisation and the documents. Keep a claim-wise tracker of short payments and delays.</li>
                <li><strong>Escalate.</strong> Use the insurer&apos;s grievance channel and provider-relations team, then a formal legal notice under the agreement.</li>
                <li><strong>Use the dispute clause.</strong> Many provider agreements have arbitration clauses. Aggregated short payments across many claims can add up to a substantial commercial claim. See our <Link href="/services/arbitration" className={linkCls}>arbitration services</Link>.</li>
              </ul>
            </section>

            <section id="privacy" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-[#30261C] mb-6">7. Keep It Confidential While Recovering</h2>
              <p>
                A hospital&apos;s duty of confidentiality does not stop because a bill is unpaid. Under medical ethics rules and the Digital Personal Data Protection Act, 2023, patient health information must be protected.
              </p>
              <ul className="space-y-3 ml-6 list-disc mb-6">
                <li>Never post a patient&apos;s name, photo or dues on social media or notice boards.</li>
                <li>Do not call the patient&apos;s employer, neighbours or relatives who did not sign for payment.</li>
                <li>Keep notices to billing facts. Share medical records only with the court, and only as needed.</li>
                <li>Do not use recovery agents who threaten or shame families. That creates harassment complaints and weakens your case.</li>
              </ul>
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
              <h3 className="text-2xl font-bold mb-4">Want to Send a Formal Lawyer Notice Today?</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                A prompt, factual advocate&apos;s notice recovers many post-discharge balances without the hospital ever crossing a legal line. Start on <a href="https://www.legalrecovery.in/send-a-legal-notice/for-business-to-recover-their-unpaid-dues" target="_blank" rel="noopener" className={linkCls}>LegalRecovery.in</a>, or upload a list if you have many pending patient accounts. For TPA and insurer disputes, AMA Legal Solutions can review your provider agreement and take the claim forward.
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
              This guide is general information on Indian law as of November 2026, not legal advice for your specific case. State clinical establishment laws and your provider agreements may add rules. Speak to an advocate before acting.
            </p>
          </article>
        </main>

        <aside className="lg:w-[25%]">
          <div className="sticky top-32 space-y-8">
            <div className="bg-[#30261C] text-[#EBE9E4] p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-bold mb-4 text-[#D29E0D]" style={{ fontFamily: "var(--font-polysans)" }}>Recover Hospital Dues Safely</h4>
              <p className="text-sm opacity-80 mb-6">
                Our lawyers set up compliant discharge paperwork, send recovery notices, and handle patient and insurer disputes for hospitals and clinics.
              </p>
              <div className="space-y-4">
                {["Discharge undertaking formats", "Patient dues notices", "Lok Adalat and recovery suits", "TPA and insurer disputes"].map((t) => (
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
