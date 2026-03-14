import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Can a hospital legally detain a patient for unpaid bills in India?",
    answer: "No, a hospital cannot legally detain a patient for non-payment of bills. The National Human Rights Commission (NHRC) and various High Courts in India have clearly stated that detaining a patient against their will due to a billing dispute is an infringement of the fundamental right to liberty. Hospitals must follow legal recovery procedures rather than physically restricting the patient's movement."
  },
  {
    question: "Can a hospital withhold a dead body if the bills are not cleared?",
    answer: "Absolutely not. Withholding a dead body for non-payment of bills is considered an illegal act and a violation of human dignity. The courts have repeatedly ruled that a dead body cannot be treated as a lien for unpaid dues. If a hospital refuses to release a body, the family can file an immediate police complaint or a writ petition in the High Court."
  },
  {
    question: "What should I do if a hospital is overcharging me?",
    answer: "In case of overcharging, your first step should be to ask for a detailed, itemized bill. If the hospital refuses or provides an unsatisfactory explanation, you can file a complaint with the hospital administration. If that fails, you can approach the State's health ministry, the Medical Council, or file a case in the Consumer Court for deficiency in service."
  },
  {
    question: "Is harassment by recovery agents for medical loans illegal?",
    answer: "Yes, harassment by recovery agents is strictly prohibited by RBI guidelines. Agents cannot use abusive language, physical threats, or call at odd hours. If you are facing harassment for a medical loan, you can file a complaint with the lender's grievance department, the RBI Ombudsman, or the local police station (FIR)."
  },
  {
    question: "Can I file a police complaint (FIR) against hospital harassment?",
    answer: "Yes, you can file an FIR if the hospital's actions involve criminal intimidation, illegal confinement, or extortion. For instance, if staff uses threats or prevents you from leaving the premises, these are criminal offenses under the Bharatiya Nyaya Sanhita (BNS)."
  },
  {
    question: "What rights do I have regarding medical records during a dispute?",
    answer: "Patients have a legal right to access and receive certified copies of all their medical records, including test reports, surgery notes, and prescription charts. Hospitals are required to provide these within 72 hours of a request. Denying records to hide negligence or force payment is illegal."
  },
  {
    question: "What is the role of the Consumer Protection Act in hospital harassment?",
    answer: "The Consumer Protection Act 2019 allows patients to sue hospitals for 'deficiency in service'. Harassment, illegal detention, and unfair billing practices fall under this category. Consumer courts offer a relatively faster and more affordable route to claim compensation for mental trauma and financial loss."
  },
  {
    question: "How can a legal notice help against hospital harassment?",
    answer: "A formal legal notice sent through an advocate serves as a final warning. It often pressures the hospital to stop the harassment and settle the dispute fairly to avoid litigation. It also serves as crucial evidence of your attempt to resolve the matter before going to court."
  },
  {
    question: "Can a hospital refuse to discharge a patient after insurance rejection?",
    answer: "No, insurance rejection is a matter between the insurance company, the hospital, and the patient. It does not give the hospital the right to physically detain the patient. The patient may be required to pay or sign a settlement agreement, but they cannot be held captive."
  },
  {
    question: "What is 'Body Holding' and why is it illegal?",
    answer: "'Body Holding' is the practice of refusing to release the remains of a deceased person until the hospital bill is paid. It is illegal because it violates the right to a dignified burial/cremation and treats a human body as a commercial commodity for debt recovery."
  },
  {
    question: "Where can I report unethical medical practices in India?",
    answer: "Unethical practices can be reported to the State Medical Council, the National Medical Commission (NMC), the National Human Rights Commission (NHRC), and local health authorities. For financial disputes and harassment, Consumer Courts and the police are the primary authorities."
  }
];

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Protection from Hospital Harassment",
      "item": "https://www.amalegalsolutions.com/protection-from-hospital-harrassement"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Protection from Hospital Harassment in India: Legal Rights & Remedies",
  "description": "Are you facing harassment from a hospital? Learn about your legal rights against body holding, illegal detention, and aggressive billing. Expert guide on patient protection in India.",
  "image": "https://www.amalegalsolutions.com/newAssets/logo/ama-white.svg",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://www.amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2024-03-14",
  "dateModified": "2024-03-14"
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Patient Protection Services",
  "image": "https://www.amalegalsolutions.com/newAssets/logo/ama-white.svg",
  "description": "Legal assistance for patients facing hospital harassment and billing disputes in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "1420"
  },
  "review": [
    {
      "@type": "Review",
      "name": "Fast intervention",
      "author": { "@type": "Person", "name": "Vikram Singh" },
      "reviewRating": { 
        "@type": "Rating", 
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "A private hospital refused to release my father's body due to a billing issue. AMA Legal Solutions intervened immediately, and we got the body released within 2 hours. Truly grateful."
    },
    {
      "@type": "Review",
      "name": "Stopped harassment",
      "author": { "@type": "Person", "name": "Meera Iyer" },
      "reviewRating": { 
        "@type": "Rating", 
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": "Facing recovery agent pressure for a medical loan was traumatizing. The legal team at AMA stopped the harassment and helped me negotiate a fair settlement."
    }
  ]
};

export const metadata = {
  title: "Protection from Hospital Harassment India | Patient Rights Guide",
  description: "Facing hospital harassment? Learn your legal rights against illegal detention, body holding, and overcharging. Expert legal help for patient protection in India.",
  keywords: "hospital harassment india, patient rights india, protection against body holding, illegal detention in hospital, recovery agent protection, medical bill dispute help, sue hospital for harassment",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/protection-from-hospital-harrassement',
  },
};

export default function ProtectionFromHarassmentPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "forms-of-harassment", title: "Forms of Hospital Harassment" },
    { id: "detention-rights", title: "Right Against Illegal Detention" },
    { id: "body-holding", title: "Legality of Body Holding" },
    { id: "billing-transparency", title: "Billing Transparency Rights" },
    { id: "overcharging", title: "Recourse for Overcharging" },
    { id: "recovery-harassment", title: "Recovery Agent Harassment" },
    { id: "legal-remedies", title: "Legal Remedies & FIR" },
    { id: "consumer-court", title: "Consumer Court Protection" },
    { id: "nhrc-guidelines", title: "NHRC Patient Charter" },
    { id: "medication-disputes", title: "Pharmacy Billing Issues" },
    { id: "insurance-harassment", title: "Insurance Claim Red tape" },
    { id: "emergency-rights", title: "Rights in Emergency ER" },
    { id: "nrs-accountability", title: "Institutional Harassment" },
    { id: "how-to-complain", title: "Step by Step Complaint" },
    { id: "legal-notice", title: "Sending a Legal Notice" },
    { id: "evidence-gathering", title: "Securing Medical Evidence" },
    { id: "court-precedents", title: "Important Court Rulings" },
    { id: "testimonials", title: "Client Experiences" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Legal Services", href: "/services" },
    { label: "Protection from Harassment", href: "/protection-from-hospital-harrassement" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#30261C] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ background: "black" }}></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              End <span className="text-[#D2A02A]">Hospital Harassment</span>: Your Legal Shield in India
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Stop illegal detention, body holding, and predatory billing. Our expert legal team protects your family's dignity and rights against institutional bullying.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get Immediate Legal Help
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Growing Crisis of Institutional Harassment in Healthcare</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    While hospitals are meant to be temples of healing, many families in India find themselves trapped in a nightmare of institutional harassment. From aggressive billing and illegal detention to the traumatic practice of withholding a loved one’s remains, the forms of harassment vary but the impact is always devastating.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Knowledge of your legal rights is your most powerful weapon against such practices. Indian law is unequivocally clear: a hospital is a service provider, and a patient is a consumer with protected rights. At AMA Legal Solutions, we stand firmly with patients, offering strong legal protection against any form of hospital bullying or unethical financial pressure.
                  </p>
                </section>

                {/* Forms of Harassment */}
                <section id="forms-of-harassment" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 font-black uppercase tracking-tighter">Recognizing the Various Forms of Hospital Harassment</h2>
                  <div className="bg-yellow-50 border-l-4 border-[#D2A02A] p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-gray-800 italic">
                      "Harassment in a hospital can range from subtle billing errors to severe human rights violations like illegal confinement."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Understanding the common tactics used by predatory institutions is the first step toward defense. These include refusing discharge despite medical stability, using recovery agents to threaten grieving families, overcharging for consumables that were never used, and denying access to medical records to hide errors or force payments. Each of these acts is a violation of the Law of Torts and the Consumer Protection Act.
                  </p>
                </section>

                {/* Detention Rights */}
                <section id="detention-rights" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tighter">Your Constitutional Right Against Illegal Detention</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    No hospital in India has the legal authority to physically restrain a patient from leaving because of an unpaid bill. The Delhi High Court and Bombay High Court have famously ruled that detaining a patient is akin to 'illegal confinement,' which is a criminal offense under the Bharatiya Nyaya Sanhita (formerly IPC).
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-center">
                    <div className="flex-1 p-8 bg-blue-50 rounded-3xl border border-blue-100">
                        <h5 className="font-black text-blue-900 uppercase mb-4 text-lg tracking-widest">Legal Status</h5>
                        <p className="text-blue-800 text-base">Hospitals are not jails. They must use civil recovery methods to collect dues, not physical force.</p>
                    </div>
                    <div className="flex-1 p-8 bg-[#30261C] text-white rounded-3xl border border-gray-600 shadow-xl">
                        <h5 className="font-black text-[#D2A02A] uppercase mb-4 text-lg tracking-widest">Remedy</h5>
                        <p className="text-gray-300 text-base">You can call the police (112/100) or file a writ of Habeas Corpus if a patient is held captive.</p>
                    </div>
                  </div>
                </section>

                {/* Body Holding */}
                <section id="body-holding" className="scroll-mt-32">
                   <h2 className="text-3xl font-bold text-gray-900 mb-8">The Illegal Practice of 'Body Holding' for Dues</h2>
                   <p className="mb-8 text-lg text-gray-700 leading-relaxed">
                     One of the most heartless forms of harassment is refusing to handover the body of a deceased patient to the family until the final bill is settled. This is not only unethical but strictly illegal under Indian law. The Right to Life under Article 21 includes the right to a dignified burial or cremation.
                   </p>
                   <div className="bg-[#30261C] text-white p-10 rounded-[40px] shadow-2xl mb-12 border border-[#D2A02A]/20">
                     <h4 className="text-xl font-bold mb-6 text-[#D2A02A]">What the Courts Say:</h4>
                     <ul className="space-y-6 text-lg">
                        <li className="flex gap-4"><span className="text-[#D32F2F]">⚠️</span> <strong>No Lien on Bodies:</strong> A hospital cannot claim a 'lien' or a right to hold a body for money.</li>
                        <li className="flex gap-4"><span className="text-[#D32F2F]">⚠️</span> <strong>Criminal Liability:</strong> Doctors and administrators involved can be prosecuted for wrongful restraint and criminal intimidation.</li>
                        <li className="flex gap-4"><span className="text-[#D32F2F]">⚠️</span> <strong>NHRC Charter:</strong> Specifically forbids hospitals from withholding remains for any reason whatsoever.</li>
                     </ul>
                   </div>
                </section>

                {/* Billing Transparency */}
                <section id="billing-transparency" className="scroll-mt-32">
                   <h2 className="text-3xl font-bold text-gray-900 mb-8 font-black">Right to Billing Transparency and Itemized Accounts</h2>
                   <p className="mb-6 text-lg leading-relaxed text-gray-700">
                     A major source of harassment is 'opaque billing.' Hospitals often provide a lump-sum bill with vague categories like 'Miscellaneous Charges' or 'Consumables.' As a consumer, you have the absolute right to an itemized bill that lists every single drug, bandage, and machine-hour used.
                   </p>
                   <p className="mb-10 text-lg leading-relaxed text-gray-700">
                     If a hospital refuses to provide this breakdown, it is a sign of billing fraud. You should never pay a disputed amount without receiving a detailed statement. This transparency is mandatory under the Clinical Establishments Act and the NHRC Patient Rights Charter.
                   </p>
                </section>

                {/* Recovery Harassment */}
                <section id="recovery-harassment" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">Protection from Recovery Agent Harassment for Medical Loans</h2>
                  <p className="mb-8 text-lg text-gray-700 leading-relaxed">
                    Many patients take loans through third-party financial companies within the hospital. When payments are delayed due to prolonged treatment, these companies often deploy aggressive recovery agents. These agents use tactics like calling relatives, using abusive language, or visiting the patient's home.
                  </p>
                  <p className="mb-10 text-lg text-gray-700 leading-relaxed">
                    Under RBI Master Circulars, such behavior is a punishable offense. Lenders must treat borrowers with dignity. If you are facing such pressure, our legal team can send a cease and desist notice to both the lender and the hospital, stopping the harassment instantly.
                  </p>
                </section>

                {/* Legal Remedies */}
                <section id="legal-remedies" className="scroll-mt-32">
                   <h2 className="text-3xl font-bold text-gray-900 mb-8">Proactive Legal Remedies and Filing an FIR</h2>
                   <p className="mb-10 text-lg leading-relaxed text-gray-700">
                     If the hospital harassment escalates to threats or physical restriction, you must take immediate legal action. Do not wait for the hospital to 'soften' their stand. 
                   </p>
                   <div className="space-y-12">
                      <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative group overflow-hidden">
                         <h4 className="text-xl font-bold mb-4 text-gray-900">1. Instant Police Intervention (112)</h4>
                         <p className="text-base text-gray-700 leading-relaxed">Call the police immediately if you are being prevented from leaving. The mere presence of a police officer often forces hospitals to release the patient as they want to avoid a spot-FIR for illegal detention.</p>
                      </div>
                      <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative group overflow-hidden">
                         <h4 className="text-xl font-bold mb-4 text-gray-900">2. Filing an FIR for Intimidation</h4>
                         <p className="text-base text-gray-700 leading-relaxed">If you have been threatened or extorted, file a formal FIR under relevant sections of the BNS. This creates a criminal record for the hospital administration and serves as powerful leverage in compensation talks.</p>
                      </div>
                   </div>
                </section>

                {/* Procedure */}
                <section id="how-to-complain" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">7-Step Procedure to Fight Hospital Harassment Proactively</h2>
                  <div className="space-y-12">
                    {[
                      { step: 1, title: "Document the Incidents", desc: "Keep a log of every interaction. Record phone calls, save threatening messages, and take photos of any physical barriers or notices." },
                      { step: 2, title: "Demand the Itemized Bill", desc: "Formally request a detailed breakdown of all charges. If they refuse, send the request via email or WhatsApp to create a trail." },
                      { step: 3, title: "Secure Medical Records", desc: "Demand certified copies of all medical reports immediately. This prevents the hospital from tampering with evidence if you sue them later." },
                      { step: 4, title: "Initial Internal Complaint", desc: "Write to the Hospital Administrator or Patient Relation Manager. Give them 24 hours to resolve the dispute fairly." },
                      { step: 5, title: "Serve a Legal Notice", desc: "If the internal complaint fails, have your lawyer send a formal legal notice. This is the most effective way to stop recovery harassment." },
                      { step: 6, title: "Approach Regulatory Bodies", desc: "File complaints with the State health ministry, NHRC, and the Medical Council simultaneously to put institutional pressure." },
                      { step: 7, title: "File for Compensation", desc: "Approach the Consumer Commission to seek damages for mental agony, trauma, and any amount overcharged illegally." }
                    ].map((item) => (
                      <div key={item.step} className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-[#D2A02A]/20">{item.step}</div>
                        <div>
                          <h4 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h4>
                          <p className="text-base text-gray-700 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Evidence Gathering */}
                <section id="evidence-gathering" className="scroll-mt-32">
                   <h2 className="text-3xl font-bold text-gray-900 mb-8">The Art of Securing Evidence Against Institutional Bullying</h2>
                   <p className="mb-8 text-lg text-gray-700 leading-relaxed">
                     Hospitals have legal teams and deep pockets. To win, you need undeniable proof. In cases of harassment, 'situational evidence' is king. If the hospital refuses discharge, record the conversation where the staff explicitly links discharge to bill payment.
                   </p>
                   <div className="flex flex-col md:flex-row gap-8 mb-10 text-center">
                      <div className="flex-1 p-8 bg-blue-50 rounded-3xl border border-blue-100">
                         <h5 className="font-black text-blue-900 uppercase mb-4 text-lg tracking-widest">Digital Trails</h5>
                         <p className="text-blue-800 text-base">Emails, WhatsApp messages from billing staff, and video recordings of recovery agents.</p>
                      </div>
                      <div className="flex-1 p-8 bg-[#30261C] rounded-3xl border border-gray-600">
                         <h5 className="font-black text-[#D2A02A] uppercase mb-4 text-lg tracking-widest">Physical Documents</h5>
                         <p className="text-gray-300 text-base">Initial estimates vs final bills, discharge summaries, and insurance rejection letters.</p>
                      </div>
                   </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Real Success Stories: Patients Who Fought Back</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 leading-relaxed">
                        "A private hospital in Gurgaon refused to release my brother's body because of a 4 lakh dispute. AMA Legal Solutions' team arrived at the hospital within an hour, coordinated with the local police, and got the body released without us paying a single unfair penny."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Singh</p>
                          <p className="text-sm text-gray-500">Verified Client</p>
                        </div>
                        <div className="ml-auto flex text-yellow-400">★★★★★</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 leading-relaxed">
                        "The hospital recovery agents were calling my office and relatives for an disputed ICU bill. One legal notice from AMA stopped all calls immediately. They finally agreed to a 40% reduction in the bill."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-3">M</div>
                        <div>
                          <p className="font-bold text-gray-900">Meera Iyer</p>
                          <p className="text-sm text-gray-500">Verified Client</p>
                        </div>
                        <div className="ml-auto flex text-yellow-400">★★★★★</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-2xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Stop Institutional Bullying Today</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      You are not alone in this fight. Our legal experts are just a call away to protect your dignity and financial rights against any hospital harassment.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Get Urgent Legal Advice
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call Hotline: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Urgent Protection?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Is a hospital detaining a loved one or holding a body? Call our emergency hotline now.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Call +91-8700343611
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors"
                  >
                    Immediate Callback
                  </Link>
                </div>

                {/* Related Services */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Patient Protection</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/legal-notice-to-hospital" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                        <span className="mr-2 group-hover:translate-x-1 transition-transform">›</span> Notice to Hospital
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                        <span className="mr-2 group-hover:translate-x-1 transition-transform">›</span> Civil Law Help
                      </Link>
                    </li>
                    <li>
                      <Link href="/procedure-of-sending-legal-notice" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                        <span className="mr-2 group-hover:translate-x-1 transition-transform">›</span> Legal Notice Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                        <span className="mr-2 group-hover:translate-x-1 transition-transform">›</span> Loan Settlement
                      </Link>
                    </li>
                  </ul>
                  
                  {/* App Links */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App</p>
                    <div className="flex flex-col gap-3">
                      <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image src="/newAssets/appstore.svg" alt="Google Play" width={130} height={36} className="w-full h-auto max-w-[130px]" />
                      </Link>
                      <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image src="/newAssets/playstore.svg" alt="App Store" width={130} height={36} className="w-full h-auto max-w-[130px]" />
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid serviceName="Protection from Hospital Harassment" servicePath="protection-from-hospital-harrassement" />
          </div>
        </div>
      </div>
    </>
  );
}
