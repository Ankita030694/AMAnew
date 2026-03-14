import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is legal notice to a hospital for medical negligence?",
    answer: "A legal notice to a hospital is a formal written document sent by a patient or their legal heirs alleging medical negligence or deficiency in service. It serves as a final warning before initiating legal proceedings in a consumer court or civil court. The notice details the incident, the specific clinical errors, and the compensation demanded for the injury or loss suffered."
  },
  {
    question: "How do I prove medical negligence in India?",
    answer: "Proving medical negligence requires establishing four elements: 1. Duty of care (the hospital accepted you as a patient), 2. Breach of duty (deviation from standard medical protocols), 3. Causation (the injury was a direct result of the breach), and 4. Damages (actual physical or financial loss). Expert medical opinions and complete medical records are essential pieces of evidence."
  },
  {
    question: "What compensation can I claim from a hospital?",
    answer: "You can claim both pecuniary and non-pecuniary damages. Pecuniary damages include medical bills, costs of future treatment, and loss of earnings. Non-pecuniary damages cover physical pain, mental agony, emotional trauma, and loss of life's enjoyments. In landmark cases like Dr. Kunal Saha, Indian courts have awarded multi-crore compensations based on the victim's profile and the severity of negligence."
  },
  {
    question: "Is it mandatory to send a legal notice before filing a case?",
    answer: "While not strictly mandatory for consumer court cases, sending a legal notice is highly recommended. It often leads to out-of-court settlements, saving time and money. Furthermore, the hospital's response to the notice helps your lawyer understand their defense strategy, making your court case stronger."
  },
  {
    question: "Can I sue a government hospital for negligence?",
    answer: "Yes, you can sue a government hospital. While the procedure might involve additional administrative notices under Section 80 of the CPC, government healthcare providers are equally liable for negligence under the Law of Torts and Consumer Protection laws if they charge for services (directly or through insurance)."
  },
  {
    question: "What is the time limit for filing a medical negligence case?",
    answer: "Under the Consumer Protection Act, the limitation period is generally 2 years from the date of the cause of action (the date of the negligent act or when it was first discovered). However, it is best to serve a legal notice as soon as possible to preserve evidence and witness accounts."
  },
  {
    question: "How long does the hospital have to reply to the notice?",
    answer: "Standard legal notices usually provide a period of 15 to 30 days for the hospital to respond. If they fail to reply within this period or send an unsatisfactory response, you gain the legal right to proceed with litigation immediately."
  },
  {
    question: "Do I need a lawyer to send a legal notice to a hospital?",
    answer: "Yes, a specialized medical negligence lawyer is crucial. They can interpret complex medical records, identify deviations from standard protocols, and ensure the notice is legally sound. A notice on a law firm's letterhead also carries significantly more weight and is taken more seriously by hospital administrators."
  },
  {
    question: "Can a hospital refuse to share medical records?",
    answer: "No, according to the Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations, a patient has a legal right to their medical records. The hospital must provide them within 72 hours of a request. If they refuse, it is a separate ground for legal action."
  },
  {
    question: "What if the hospital offers a settlement after receiving the notice?",
    answer: "If the hospital offers a settlement, your lawyer will evaluate if the amount is fair compared to your losses. If you agree, a formal settlement deed is signed, and the matter is closed. This is often the fastest way to get justice without the delays of a court trial."
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
      "name": "Legal Services",
      "item": "https://www.amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Legal Notice to Hospital",
      "item": "https://www.amalegalsolutions.com/legal-notice-to-hospital"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Notice to Hospital for Medical Negligence | Complete Guide",
  "description": "Expert guide on sending a legal notice to a hospital in India. Learn about patient rights, compensation calculation, and the step-by-step procedure for medical negligence cases.",
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
  "name": "Medical Negligence Legal Services",
  "description": "Professional legal assistance for medical negligence and hospital legal notices in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1580"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Amit Verma" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "AMA Legal Solutions helped me get justice after a botched surgery. Their expertise in medical laws is unmatched in India."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sneha Kapoor" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "The legal notice they drafted was so powerful that the hospital agreed to an out-of-court settlement within 15 days."
    }
  ]
};

export const metadata = {
  title: "Legal Notice to Hospital for Medical Negligence | Compensation Guide",
  description: "Struggling with medical negligence? Learn how to send a legal notice to a hospital in India. Expert guide on patient rights, compensation, and legal procedures.",
  keywords: "legal notice to hospital, medical negligence india, sue hospital for negligence, legal notice format medical negligence, compensation for medical negligence, consumer court hospital case, patient rights india",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/legal-notice-to-hospital',
  },
};

export default function LegalNoticeHospitalPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-negligence", title: "What is Medical Negligence?" },
    { id: "legal-framework", title: "Legal Framework in India" },
    { id: "patient-rights", title: "Patient Rights" },
    { id: "duty-of-care", title: "Duty of Care" },
    { id: "consumer-protection", title: "Consumer Protection Act" },
    { id: "civil-vs-criminal", title: "Civil vs Criminal Liability" },
    { id: "landmark-judgments", title: "Landmark Judgments" },
    { id: "misconduct", title: "Medical Misconduct" },
    { id: "informed-consent", title: "Informed Consent" },
    { id: "billing-disputes", title: "Billing Disputes" },
    { id: "specialized-care", title: "ICU & Emergency Errors" },
    { id: "medication-errors", title: "Pharmaceutical Errors" },
    { id: "nursing-negligence", title: "Nursing Accountability" },
    { id: "pre-notice-prep", title: "Preparation & Evidence" },
    { id: "procedure", title: "7-Step Procedure" },
    { id: "drafting-guide", title: "Drafting Guide" },
    { id: "compensation", title: "Calculating Compensation" },
    { id: "testimonials", title: "Review Snippets" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Legal Services", href: "/services" },
    { label: "Legal Notice to Hospital", href: "/legal-notice-to-hospital" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ background: "black" }}></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Get Justice for Medical Negligence with <span className="text-[#D2A02A]">Legal Notice to Hospital</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal representation to hold hospitals accountable, secure maximum compensation, and protect your rights as a patient in India.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Speak to a Legal Specialist
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
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding Your Recourse Against Medical Negligence</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Medical treatment is a sacred trust between a doctor and a patient. However, when this trust is broken due to professional carelessness or institutional failure, the consequences can be life-altering. Whether it is a surgical error, a misdiagnosis, or a lack of proper monitoring, victims of medical negligence have a legal right to seek accountability and compensation.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    A <strong>legal notice to a hospital</strong> is the first and most critical step in this journey for justice. It signals to the healthcare provider that you are aware of your legal rights and are prepared to take action. At AMA Legal Solutions, we specialize in bridging the gap between medical jargon and legal principles, ensuring that your grievance is heard and addressed with the seriousness it deserves.
                  </p>
                </section>

                {/* What is Medical Negligence */}
                <section id="what-is-negligence" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What Constitutes Medical Negligence?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "Medical negligence occurs when a healthcare professional fails to exercise the 'reasonable degree of care' expected from a person of their qualification, leading to harm or injury to the patient."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Not every failed treatment is negligence. Medicine is inherently risky. However, if the hospital deviates from established medical protocols that any other reasonably competent hospital would have followed, it qualifies as negligence. This includes things like leaving foreign objects in the body after surgery, administering wrong medications, or failing to obtain informed consent.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 font-black uppercase tracking-tighter">The Legal Framework in India for Hospital Liability</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Medical negligence in India is governed by a combination of civil, criminal, and consumer laws. The primary objective of these laws is to protect patient safety while ensuring that doctors are not unfairly harassed for genuine medical complications.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-center">
                    <div className="flex-1 p-8 bg-blue-50 rounded-3xl border border-blue-100">
                        <h5 className="font-black text-blue-900 uppercase mb-4 text-lg tracking-widest">Consumer Protection Act 2019</h5>
                        <p className="text-blue-800 text-base">Provides a fast-track mechanism for patients to seek compensation for 'deficiency in service' without heavy court fees.</p>
                    </div>
                    <div className="flex-1 p-8 bg-[#1a202c] text-white rounded-3xl border border-gray-600">
                        <h5 className="font-black text-[#D2A02A] uppercase mb-4 text-lg tracking-widest">Law of Torts</h5>
                        <p className="text-gray-300 text-base">The traditional legal basis for claiming 'damages' for physical and emotional injury caused by someone else's fault.</p>
                    </div>
                  </div>
                </section>

                {/* Patient Rights */}
                <section id="patient-rights" className="scroll-mt-32">
                   <h2 className="text-3xl font-bold text-gray-900 mb-8">Fundamental Patient Rights You Must Know</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-[#D2A02A]">1. Right to Information</h4>
                        <p className="text-base text-gray-600 leading-relaxed">You have the absolute right to know your diagnosis, the risks involved in surgery, and the cost of treatment. The hospital must provide a copy of your records upon request.</p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-[#D2A02A]">2. Right to Privacy</h4>
                        <p className="text-base text-gray-600 leading-relaxed">Doctors and hospitals must maintain the privacy of your medical information. Sharing your reports without consent is a breach of law.</p>
                      </div>
                   </div>
                </section>

                {/* ICU & Emergency Errors */}
                <section id="specialized-care" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Medical Negligence in ICU and Emergency Rooms</h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    The Intensive Care Unit (ICU) and Emergency Room are the most critical environments. Negligence here can be fatal within minutes. Common instances include ventilator failure, incorrect dosage of life-saving drugs like adrenaline, or failure to monitor oxygen levels. When serving a legal notice regarding an ICU death, the focus is on 'continuous monitoring' protocols.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    In the Emergency Room, 'triaging errors' are common—where critical patients are made to wait while minor injuries are treated. This is a direct breach of emergency protocols.
                  </p>
                </section>

                {/* Informed Consent */}
                <section id="informed-consent" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Critical Importance of Informed Consent</h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    Informed consent is more than just a signature. Courts in India emphasize that the doctor must explain the risks in language the patient understands. If complex jargon is used and something goes wrong, the consent is invalid. Your legal notice should explicitly mention any 'violation of the right to autonomy' if risks were not clearly communicated.
                  </p>
                </section>

                {/* Billing Disputes */}
                <section id="billing-disputes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Handling Disputes Related to Inflated Hospital Bills</h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    Overcharging and billing for unused consumables are common grievances. While not strictly clinical negligence, these are 'deficiencies in service' under the Consumer Protection Act. If you have been overcharged, a legal notice can demand a refund and compensation for mental agony caused by predatory billing practices.
                  </p>
                </section>

                {/* Landmark Judgments */}
                <section id="landmark-judgments" className="scroll-mt-32">
                   <h2 className="text-3xl font-bold text-gray-900 mb-8">Landmark Judgments in Medical Negligence</h2>
                   <div className="space-y-8">
                      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                         <h4 className="text-xl font-bold mb-4 text-gray-900">Jacob Mathew v. State of Punjab (2005)</h4>
                         <p className="text-base text-gray-700 leading-relaxed">Established that criminal prosecution of doctors requires 'gross negligence' and a very high degree of reckless behavior.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                         <h4 className="text-xl font-bold mb-4 text-gray-900">Dr. Kunal Saha v. AMRI Hospital (2013)</h4>
                         <p className="text-base text-gray-700 leading-relaxed">Awarded a record 11 crore INR compensation, setting a precedent for 'multiplier-based' compensation calculation in India.</p>
                      </div>
                   </div>
                </section>

                {/* Procedure */}
                <section id="procedure" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">7-Step Procedure to Serve a Legal Notice Effectively</h2>
                  <div className="space-y-8">
                    {[
                      { step: 1, title: "Consultation", desc: "Speak with a specialized lawyer to determine if your case qualifies as negligence." },
                      { step: 2, title: "Chronology", desc: "Create a detailed timeline of events from the moment of admission to discharge." },
                      { step: 3, title: "Identification", desc: "Map the incident to specific legal violations and medical protocol breaches." },
                      { step: 4, title: "Drafting", desc: "Prepare a formal draft with clear facts and a specific demand for compensation." },
                      { step: 5, title: "Serving", desc: "Send via Registered Post with Acknowledgement Due (RPAD) to all parties." },
                      { step: 6, title: "Waiting", desc: "Allow 15-30 days for the hospital to respond to your allegations." },
                      { step: 7, title: "Action", desc: "Proceed to Consumer Commission if the hospital denies the charge or ignores the notice." }
                    ].map((item) => (
                      <div key={item.step} className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-xl flex items-center justify-center text-xl font-black">{item.step}</div>
                        <div>
                          <h4 className="text-xl font-bold mb-1 text-gray-900">{item.title}</h4>
                          <p className="text-base text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Review Snippets */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories & Review Snippets</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 leading-relaxed">
                        "AMA Legal Solutions helped me get justice after a botched surgery. Their expertise in medical laws is unmatched in India. The hospital settled within weeks of receiving the notice."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Amit Verma</p>
                          <p className="text-sm text-gray-500">Verified Client</p>
                        </div>
                        <div className="ml-auto flex text-yellow-400">★★★★★</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 leading-relaxed">
                        "The legal notice they drafted was so powerful that the hospital agreed to an out-of-court settlement within 15 days. Truly grateful for their professional support."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sneha Kapoor</p>
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
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Don't Suffer in Silence</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Hold the negligent parties accountable and secure the compensation you deserve. Our lawyers are ready to fight for your justice.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book Your Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our specialized medical negligence lawyers today.
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
                    Request Callback
                  </Link>
                </div>

                {/* Related Services */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                        <span className="mr-2 group-hover:translate-x-1 transition-transform">›</span> Civil Law Expertise
                      </Link>
                    </li>
                    <li>
                      <Link href="/send-legal-notice" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                        <span className="mr-2 group-hover:translate-x-1 transition-transform">›</span> Send Legal Notice
                      </Link>
                    </li>
                    <li>
                      <Link href="/procedure-of-sending-legal-notice" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                        <span className="mr-2 group-hover:translate-x-1 transition-transform">›</span> Notice Sending Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/drafting" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                        <span className="mr-2 group-hover:translate-x-1 transition-transform">›</span> Drafting Services
                      </Link>
                    </li>
                  </ul>
                  
                  {/* App Store Links */}
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
            <GenericStatesGrid serviceName="Legal Notice to Hospital" servicePath="legal-notice-to-hospital" />
          </div>
        </div>
      </div>
    </>
  );
}
