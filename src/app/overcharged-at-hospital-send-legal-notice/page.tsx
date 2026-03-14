import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What should I do if the hospital overcharged me?",
    answer: "If you suspect overcharging, first request an itemized bill from the hospital. Check for phantom charges or services not rendered. If the hospital refuses to justify the costs, you should consult a legal expert to send a formal legal notice. This is the first step towards seeking a refund and compensation for deficiency in service."
  },
  {
    question: "Can I file a case in consumer court for hospital overcharging?",
    answer: "Yes, under the Consumer Protection Act 2019, patients are considered consumers, and overcharging or unfair trade practices by a hospital constitute a 'deficiency in service.' You can approach the District, State, or National Consumer Commission depending on the value of the claim and seek a refund along with compensation for mental agony."
  },
  {
    question: "Is it illegal for hospitals to charge above the MRP for medicines?",
    answer: "Absolutely. Under the Legal Metrology Act and various DPCO (Drugs Price Control Order) guidelines, hospitals cannot charge more than the Maximum Retail Price (MRP) printed on packaged medical devices or medicines. If they do, they are liable for penalties and legal action from the Metrology Department."
  },
  {
    question: "Can a hospital withhold a patient or a body for non-payment of bills?",
    answer: "No, Indian courts have repeatedly held that withholding a patient or a deceased body due to unpaid bills is illegal and a violation of fundamental rights. A hospital cannot detain a person against their will for financial disputes. You can call the police or approach a High Court via a Habeas Corpus petition in such cases."
  },
  {
    question: "What are 'phantom services' in hospital billing?",
    answer: "Phantom services refer to charges added to your final bill for treatments, medications, or diagnostic tests that were never actually provided to the patient. This is a common form of medical billing fraud. Careful review of the discharge summary against the itemized bill can help identify these discrepancies."
  },
  {
    question: "Do I need an advocate to send a legal notice to a hospital?",
    answer: "While you can technically send a notice yourself, it is highly recommended to use a specialized legal professional. A notice on a law firm's letterhead carries significant weight, ensures all legal grounds (like CPA 2019 or the Law of Torts) are correctly cited, and is more likely to elicit a serious response or settlement from the hospital."
  },
  {
    question: "What is the time limit for filing an overcharging complaint?",
    answer: "For consumer court cases, the limitation period is generally two years from the date the cause of action arose (the date you were billed or discovered the overcharging). However, it is advisable to serve a legal notice immediately to preserve evidence and demonstrate prompt action."
  },
  {
    question: "Can my insurance company help with hospital overcharging?",
    answer: "Yes, if you have health insurance, the TPA (Third Party Administrator) often audits the bill. If they find overcharging, they may refuse to pay the extra amount, leaving you to pay the balance. In such cases, you can challenge both the hospital for overcharging and the insurance company if they unfairly denied a legitimate claim."
  },
  {
    question: "What kind of evidence do I need to prove overcharging?",
    answer: "You will need the original itemized bills, prescriptions, discharge summary, proofs of payments, and any correspondence with the hospital management. If the overcharging is related to medicine prices, a photograph of the medicine packaging showing the MRP can also serve as strong evidence."
  },
  {
    question: "Can a legal notice lead to an out-of-court settlement?",
    answer: "In many cases, yes. Receiving a formal legal notice from a professional law firm often prompts the hospital to re-examine their billing and offer a refund or adjustment to avoid the costs and reputational damage of a public court battle."
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
      "name": "Overcharged at Hospital",
      "item": "https://www.amalegalsolutions.com/overcharged-at-hospital-send-legal-notice"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Overcharged at Hospital? Send a Legal Notice for Refund | Complete Guide",
  "description": "Exhaustive guide on dealing with hospital overcharging in India. Learn about your rights, relevant laws like CPA 2019, and the exact process to send a legal notice for medical billing errors.",
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
  "name": "Hospital Billing Legal Services",
  "description": "Legal assistance for patients overcharged by hospitals. Expert services for sending legal notices and filing consumer court cases in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2450"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Rajesh Khanna" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "AMA Legal Solutions helped me recover over 2 lakhs that a private hospital had overcharged for COVID treatment. Their notice was very professional and effective."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Meera Joshi" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "I was shocked to see charges for medicines never used. AMA Legal drafted a powerful notice that forced the hospital to apologize and refund the amount."
    }
  ]
};

export const metadata = {
  title: "Overcharged at Hospital? Send Legal Notice for Refund & Compensation",
  description: "Facing unfair billing or overcharging at a hospital? Learn how to send a legal notice, understand your rights under CPA 2019, and seek a refund with AMA Legal Solutions.",
  keywords: "overcharged at hospital, legal notice to hospital for overcharging, medical billing fraud india, hospital refund process, patient rights india, consumer court hospital billing, medical negligence billing, legal notice format for overbilling",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/overcharged-at-hospital-send-legal-notice',
  },
};

export default function OverchargedHospitalPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "transparency", title: "Healthcare Transparency" },
    { id: "defining-overcharging", title: "Defining Overcharging" },
    { id: "patient-rights", title: "Fundamental Patient Rights" },
    { id: "legal-framework", title: "The Legal Framework" },
    { id: "legal-metrology-details", title: "Legal Metrology Deep Dive" },
    { id: "consumer-protection", title: "Consumer Protection Act" },
    { id: "billing-transparency", title: "Billing Transparency Rules" },
    { id: "spotting-errors", title: "How to Spot Billing Errors" },
    { id: "audit-process", title: "Bill Auditing Process" },
    { id: "pre-notice-prep", title: "Preparation & Evidence" },
    { id: "legal-notice-process", title: "Legal Notice Procedure" },
    { id: "landmark-judgments", title: "Landmark Case Decisions" },
    { id: "civil-vs-consumer", title: "Civil vs Consumer Court" },
    { id: "insurance-disputes", title: "Insurance & TPA Disputes" },
    { id: "emotional-impact", title: "The Emotional Toll" },
    { id: "why-ama-legal", title: "Why Choose AMA Legal Solutions?" },
    { id: "reviews", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Legal Services", href: "/services" },
    { label: "Overcharged at Hospital", href: "/overcharged-at-hospital-send-legal-notice" },
  ];

  const relatedPages = [
    { name: "Legal Notice to Hospital", href: "/legal-notice-to-hospital" },
    { name: "Protection from Hospital Harassment", href: "/protection-from-hospital-harrassement" },
    { name: "Procedure of Sending Legal Notice", href: "/procedure-of-sending-legal-notice" },
    { name: "Send Legal Notice Online", href: "/send-legal-notice" },
    { name: "Consumer Court Help", href: "/services/civil" }
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
              Overcharged at Hospital? Send a <span className="text-[#D2A02A]">Legal Notice for Justice</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Hold hospitals accountable for medical billing fraud, secure your refund, and protect your rights with expert legal support in India.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Talk to a Legal Expert Now
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start mt-6">
            {/* Left Column - Sticky Table of Contents */}
            <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 text-gray-900 border-b pb-2">Table of Contents</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </aside>

            {/* Middle Column - Main Content Area */}
            <main className="min-w-0">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-10 md:space-y-16">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">The Growing Crisis of Medical Overcharging in Indian Private Healthcare</h2>
                  <p className="text-base md:text-xl leading-relaxed text-gray-700 mb-6 font-medium">
                    In the complex landscape of Indian healthcare, where medical expenses can consume a lifetime of savings in just a few days, the issue of hospital overcharging has emerged as a significant social and legal challenge. For thousands of families across the country, the relief of a patient recovery is often met with the crushing weight of an inflated and frequently unjustifiable hospital bill.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                    Hospital billing in India is often criticized for its lack of transparency. Unlike other industries where pricing is clear and upfront, medical bills are frequently shrouded in complex jargon and unexpected fees. Patients often find themselves in situations where they are charged for services never provided, billed for medicines at rates higher than the market, or surprised by administrative charges that were never disclosed during admission.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                    A legal notice to a hospital for overcharging is not just a demand for a refund; it is an assertion of your fundamental right to fair treatment and transparent pricing. At AMA Legal Solutions, we have observed that many hospitals rely on the hope that patients will be too exhausted by the medical ordeal to challenge a bill. However, with the right legal framework and a robust notice, you can hold these institutions accountable and recover the money that is rightfully yours.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                    <p className="text-lg text-yellow-900 font-semibold italic">
                      "According to recent consumer studies, nearly 40 percent of private hospital bills in major Indian cities contain errors, overcharging, or billing for redundant procedures. This systemic issue highlights the urgent need for legal awareness among patients."
                    </p>
                  </div>
                </section>

                {/* Transparency in Healthcare */}
                <section id="transparency" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Transparency in Healthcare: The Missing Link</h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    Transparency is the bedrock of any service industry, yet it is often the most significant casualty in the healthcare sector. When a patient is admitted to a hospital, they are at their most vulnerable. In this state of urgency and fear, the financial aspect of the treatment often takes a backseat. Hospitals, unfortunately, sometimes capitalize on this vulnerability by providing vague estimates and even more ambiguous final bills.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    In India, the lack of a standardized billing system across private hospitals means that two different hospitals in the same city might charge vastly different amounts for the same procedure. While some of this variation can be attributed to infrastructure and doctor expertise, a large portion of it remains unexplained. This is where the legal notice becomes an essential tool. It demands that the hospital explain the 'why' behind every rupee charged.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    A transparent billing system would include not just the final cost, but a daily breakdown of medicines used, the exact time spent by specialists in the patient's room, and the specific cost of every medical consumable from a syringe to a glove. Until such a system becomes mandatory, the onus remains on the patient to demand this transparency through legal means.
                  </p>
                </section>

                {/* What Constitutes Overcharging */}
                <section id="defining-overcharging" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">What Exactly Constitutes Hospital Overcharging?</h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-8">
                    Understanding the various ways hospitals overcharge is the first step toward building a strong legal case. It is not always about a single high number; often, it is the accumulation of dozens of small, illegitimate charges.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">1. Phantom Services</h3>
                      <p className="text-gray-700">This involves charging for diagnostic tests, nursing services, or consultations that were not actually performed. For example, a bill might show three daily visits from a specialist who only visited once. It might also include charges for bedside monitoring that was never provided.</p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-2xl border border-green-100 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-green-900 mb-4">2. Double Billing</h3>
                      <p className="text-gray-700">Sometimes, a procedure is billed as a single package, but its individual components like anesthesia or surgical equipment are also billed separately, resulting in the patient paying twice for the same service. This is particularly common in complex surgeries like bypass or joint replacements.</p>
                    </div>
                    <div className="p-8 bg-purple-50 rounded-2xl border border-purple-100 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-purple-900 mb-4">3. MRP Violations</h3>
                      <p className="text-gray-700">Hospitals are legally barred from charging more than the Maximum Retail Price (MRP) for medicines and surgical consumables like stents or catheters. Any markup above the MRP is a direct violation of the Legal Metrology Act and can lead to immediate legal penalties.</p>
                    </div>
                    <div className="p-8 bg-orange-50 rounded-2xl border border-orange-100 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-orange-900 mb-4">4. Upcoding</h3>
                      <p className="text-gray-700">This happens when a minor procedure is billed as a more complex and expensive one. For instance, charging for a 'specialized consultation' when only a routine check-up was conducted by a junior resident doctor.</p>
                    </div>
                  </div>

                  {/* Deep Dive into Fraud Stratagems */}
                  <div className="mt-12 bg-gray-50 p-8 rounded-3xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Deep Dive: Common Billing Fraud Stratagems</h3>
                    <ul className="space-y-6">
                      <li className="flex gap-4">
                        <span className="text-[#D2A02A] font-bold text-xl">#</span>
                        <p className="text-gray-700"><strong>Unbundled Billing:</strong> Breaking down a standard treatment into separate micro-charges to increase the total bill. For example, charging separately for 'surgical tray preparation' when it is inherently part of the surgery cost.</p>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-[#D2A02A] font-bold text-xl">#</span>
                        <p className="text-gray-700"><strong>Consumable Inflation:</strong> Charging for an impossible amount of gloves, syringes, or cotton. We have seen bills where a patient in a stable condition was billed for 50 pairs of gloves every day.</p>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-[#D2A02A] font-bold text-xl">#</span>
                        <p className="text-gray-700"><strong>Medicine Manipulation:</strong> Charging for high-end antibiotics while administering cheaper alternatives. This is not just financial fraud but also a serious medical ethics violation.</p>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-gray-700 mt-8">
                    Other common practices include inflated room rents that exceed the agreed-upon rates, billing for unused consumables like gloves or syringes in exorbitant quantities, and charging 'handling fees' for medicines that are already being sold at a profit. Each of these practices provides a solid ground for a legal notice.
                  </p>
                </section>

                {/* Patient Rights */}
                <section id="patient-rights" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Fundamental Patient Rights Every Indian Citizen Should Know</h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-8">
                    The Ministry of Health and Family Welfare, in collaboration with the National Human Rights Commission, has outlined a 'Charter of Patient Rights.' These rights are the foundation upon which any legal action against a hospital is built.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-6 items-start p-6 bg-gray-50 rounded-2xl">
                      <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">R</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Right to Transparent Billing</h4>
                        <p className="text-gray-700 mt-2">Every patient has the right to receive an itemized bill that explains every single charge. Hospitals cannot simply give a 'lump sum' amount without detailed justification. This includes the right to a detailed rate card for all services provided.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start p-6 bg-gray-50 rounded-2xl">
                      <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">R</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Right to Access Records</h4>
                        <p className="text-gray-700 mt-2">You have a legal right to access and copy your medical records, including diagnostic reports, discharge summaries, and prescriptions, within 72 hours of a request. Denial of these records is a separate ground for legal action.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start p-6 bg-gray-50 rounded-2xl">
                      <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">R</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Right to be Discharged</h4>
                        <p className="text-gray-700 mt-2">A hospital cannot detain a patient or refuse to release a body due to a dispute over unpaid bills. This is a violation of Article 21 of the Indian Constitution, as confirmed by several High Courts and the Supreme Court of India.</p>
                      </div>
                    </div>
                  </div>

                  {/* State Specific Section */}
                  <div className="mt-12 space-y-8">
                    <h3 className="text-2xl font-bold text-gray-900">State-Specific Regulations You Should Know</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h5 className="font-bold text-blue-600 mb-2">Delhi</h5>
                        <p className="text-sm text-gray-600">The Delhi Nursing Homes Registration Rules mandate that hospitals must provide a comprehensive list of charges at the time of admission and cannot charge more than the specified amount.</p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h5 className="font-bold text-green-600 mb-2">Maharashtra</h5>
                        <p className="text-sm text-gray-600">The Bombay Nursing Homes Registration Act was amended to ensure transparent billing and specifically prohibits hospitals from charging for items already included in the room rent.</p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h5 className="font-bold text-purple-600 mb-2">Karnataka</h5>
                        <p className="text-sm text-gray-600">The Karnataka Private Medical Establishments Act provides for a grievance redressal committee at the district level specifically for complaints regarding overcharging.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">The Legal Pillars Protecting You from Billing Fraud</h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-8">
                    In India, the protection against medical overcharging is built on several key statutes. Understanding these laws helps in drafting a legal notice that the hospital cannot easily ignore.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-8">
                    <div className="border-l-4 border-blue-500 pl-8 space-y-4">
                      <h4 className="text-2xl font-bold text-gray-900">Legal Metrology Act, 2009</h4>
                      <p className="text-lg text-gray-700">
                        This act is the primary weapon against hospitals charging above the MRP for medicine packages and medical devices. It mandates that any 'pre-packaged commodity' must be sold at or below the MRP. Any violation can lead to significant penalties for the hospital administration.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-8 space-y-4">
                      <h4 className="text-2xl font-bold text-gray-900">Clinical Establishments Act, 2010</h4>
                      <p className="text-lg text-gray-700">
                        This act provides for the registration and regulation of clinical establishments. One of its key mandates is that hospitals must display their rate cards for various services in a prominent place, accessible to the public. If a hospital hasn't displayed its prices, it is in direct breach of this federal law.
                      </p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-8 space-y-4">
                      <h4 className="text-2xl font-bold text-gray-900">Indian Penal Code (IPC)</h4>
                      <p className="text-lg text-gray-700">
                        In extreme cases of billing fraud, where records are forged or deliberately falsified to extract money, criminal charges under Section 420 (Cheating and dishonestly inducing delivery of property) and Section 406 (Criminal breach of trust) can be initiated. This adds a layer of criminal liability that hospitals are often desperate to avoid.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Legal Metrology Deep Dive */}
                <section id="legal-metrology-details" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">The Role of the Legal Metrology Department</h2>
                   <p className="text-lg leading-relaxed text-gray-700 mb-6">
                     The Department of Legal Metrology is one of the most powerful, yet underutilized, weapons against hospital overcharging. This department is responsible for ensuring that all packaged goods sold in India adhere to the declared MRP. Since almost all medical consumables (stents, syringes, catheters, valves) and medicines are 'pre-packaged commodities,' they fall directly under this jurisdiction.
                   </p>
                   <p className="text-lg leading-relaxed text-gray-700 mb-6">
                     When a hospital charges you Rs. 50,000 for a cardiac stent that has an MRP of Rs. 30,000, they are committing a statutory offense. Interestingly, many hospitals try to justify this by claiming 'administrative handling charges' or 'sterilization costs.' However, the law is very clear: no seller can charge above the MRP for a packaged product, regardless of the additional services provided during its use.
                   </p>
                   <div className="bg-gray-100 p-8 rounded-3xl border border-gray-200">
                     <h4 className="text-xl font-bold text-gray-900 mb-4">How We Leverage Metrology Laws:</h4>
                     <p className="text-gray-700 leading-relaxed mb-4">
                       In our legal notices, we often include a specific section on the Legal Metrology Act. We demand that the hospital provide pictures of the packaging of all high-value consumables used during the surgery. If the hospital fails to provide this or if the bill reflects a higher price, we file a complaint with the State Controller of Legal Metrology. This can result in a raid on the hospital pharmacy and heavy fines, which often forces the hospital to settle the patient's grievance immediately.
                     </p>
                   </div>
                </section>

                {/* Consumer Protection Act 2019 */}
                <section id="consumer-protection" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">The Power of the Consumer Protection Act, 2019</h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    The Consumer Protection Act (CPA) 2019 has revolutionized the way patients can fight back against hospitals. Before this act, patients often had to fight long-drawn civil battles. Now, as a 'consumer' of medical services, you benefit from a faster, more accessible grievance redressal mechanism.
                  </p>
                  <div className="bg-[#1a202c] text-white p-8 rounded-3xl mb-8">
                    <h5 className="font-bold text-[#D2A02A] text-xl mb-4">Key Advantages under CPA 2019:</h5>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <span className="text-green-400 font-bold">✓</span>
                        <span>Filing cases is much cheaper than civil suits.</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-green-400 font-bold">✓</span>
                        <span>Mediation is encouraged for faster settlements.</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-green-400 font-bold">✓</span>
                        <span>You can file a complaint from the place where you reside, not just where the hospital is located.</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-green-400 font-bold">✓</span>
                        <span>The definition of 'unfair trade practice' explicitly covers the withholding of records and misleading bill statements.</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    If a hospital overcharges you, it is considered a 'deficiency in service.' Your legal notice should clearly mention that if the refund is not processed, you will approach the Consumer Commission, which has the power to award not just the refund, but also heavy compensation for mental agony and litigation costs.
                  </p>
                </section>

                {/* How to Spot Billing Errors */}
                <section id="spotting-errors" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Practical Guide: How to Spot Errors in Your Hospital Bill</h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-8">
                    Before you send a legal notice, you must have a clear understanding of the discrepancies. Here is how you can audit a hospital bill like a forensic expert.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <span className="text-[#D2A02A]">1.</span> Review Daily Medication Log
                      </h4>
                      <p className="text-gray-600 leading-relaxed">Cross-reference the pharmacy bill with the daily medication charts (DMC) kept by the nurses. If the pharmacy billed for 10 units but the DMC shows only 6 were administered, you have identified overcharging.</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <span className="text-[#D2A02A]">2.</span> Check Discharge Summary
                      </h4>
                      <p className="text-gray-600 leading-relaxed">The discharge summary should match your bill. If the bill includes an MRI but the discharge summary does not mention any such test or its results, it is likely a phantom charge.</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <span className="text-[#D2A02A]">3.</span> Validate Room Rent
                      </h4>
                      <p className="text-gray-600 leading-relaxed">Ensure the room rent matches the category you requested. Check if the hospital continued to charge the higher ICU rate even after the patient was moved to a general ward.</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <span className="text-[#D2A02A]">4.</span> Examine Consumables
                      </h4>
                      <p className="text-gray-600 leading-relaxed">Look for extreme quantities. For example, charging for 100 pairs of surgical gloves for a single minor dressing change is a classic sign of bill padding. These small errors can add up to tens of thousands of rupees.</p>
                    </div>
                  </div>
                </section>

                {/* Bill Auditing Process */}
                <section id="audit-process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">The AMA Professional Bill Auditing Process</h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-8">
                    When you handover your hospital bills to AMA Legal Solutions, we don't just read them; we perform a 'Medical-Legal Audit.' This process involves cross-referencing three primary sources of information.
                  </p>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-500">
                       <h5 className="font-bold text-lg mb-2">Source 1: The Billing Ledger</h5>
                       <p className="text-gray-600 text-sm italic">The final itemized bill provided by the hospital finance department.</p>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-2xl shadow-md border-t-4 border-green-500">
                       <h5 className="font-bold text-lg mb-2">Source 2: Nurse's Record</h5>
                       <p className="text-gray-600 text-sm italic">The daily logs maintained by the nursing staff at the patient's bedside.</p>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-2xl shadow-md border-t-4 border-orange-500">
                       <h5 className="font-bold text-lg mb-2">Source 3: Doctor's Progress Notes</h5>
                       <p className="text-gray-600 text-sm italic">The clinical observations and orders written by the treating physicians.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700 mt-8">
                    Our team looks for 'asynchrony' between these records. For instance, if a doctor's order specifies a change in medication to a cheaper drug on Tuesday, but the billing ledger continues to charge for the expensive drug until Thursday, we have solid proof of overcharging. This evidence is then integrated into the legal notice, leaving the hospital with very little room for denial.
                  </p>
                </section>

                {/* Case Studies */}
                <section id="landmark-judgments" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Landmark Judgments on Medical Overcharging</h2>
                   <div className="space-y-8">
                      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                         <h4 className="text-xl font-bold mb-4 text-gray-900 italic">V. Krishnakumar v. State of Tamil Nadu (2015)</h4>
                         <p className="text-lg text-gray-700 leading-relaxed">The Supreme Court emphasized that hospitals have a fiduciary duty toward patients. Charging for services not provided or unreasonable markups are not just contractual breaches but a betrayal of medical ethics.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                         <h4 className="text-xl font-bold mb-4 text-gray-900 italic">Consumer Court Rulings on COVID Overcharging (2021)</h4>
                         <p className="text-lg text-gray-700 leading-relaxed">During the pandemic, multiple State Commissions ordered private hospitals to refund amounts collected in violation of government-capped rates. These rulings established that government orders during emergencies override any private hospital pricing policy.</p>
                      </div>
                   </div>
                </section>

                {/* Step-by-Step Procedure */}
                <section id="legal-notice-process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">The Absolute 7-Step Procedure to Serve a Legal Notice Effectively</h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-8">
                    Simply sending an email is not enough. To make a legal notice legally binding and effective, you must follow a disciplined procedure.
                  </p>
                  
                  <div className="space-y-10">
                    {[
                      { step: 1, title: "Forensic Document Audit", desc: "Before anything else, gather every single piece of paper from the hospital stay. Analyze the itemized bill against the discharge summary to pinpoint exact illegitimate charges. This includes a minute-by-minute comparison of ICU logs, drug administration records, and the final invoice. Our team specializes in finding these hidden discrepancies that usually go unnoticed by the layperson." },
                      { step: 2, title: "Identify All Responsible Parties", desc: "A legal notice must be correctly addressed to be effective. This includes the Medical Superintendent, the Managing Director of the hospital group, and the specific doctors or department heads involved. Addressing it to the right stakeholders ensures that it reaches the legal department of the hospital and is not simply filed away by a desk clerk." },
                      { step: 3, title: "Strategic Legal Grounding", desc: "Connect each overcharged item to a specific statutory violation. For example, cite the Legal Metrology Act for MRP violations, the Consumer Protection Act for phantom charges, and the Law of Torts for emotional distress. This level of detail warns the hospital that you have expert legal counsel backing your claim." },
                      { step: 4, title: "Drafting the Final Demand", desc: "The notice must contain a clear, unequivocal demand. Specify the exact amount to be refunded and provide a strict time frame (usually 15-30 days) for compliance. It should also state that failure to comply will lead to the initiation of proceedings in the Consumer Commission at the hospital's cost and risk." },
                      { step: 5, title: "Formal Legal Service", desc: "Serve the notice via Registered Post with Acknowledgement Due (RPAD) or Speed Post. This provides a legally admissible 'Proof of Service.' In the digital age, we also send an advanced copy via email to the hospital's official grievance ID to ensure immediate notification." },
                      { step: 6, title: "The Negotiation Window", desc: "Once the hospital receives a notice from a firm like AMA Legal Solutions, they often initiate a settlement dialogue. Our experts manage this negotiation to ensure that any offer made by the hospital is fair and covers not just the overcharged amount but also your legal costs and compensation." },
                      { step: 7, title: "Litigation Escalation Strategy", desc: "If the hospital remains defiant, the final step is to file the consumer complaint. The legal notice serves as the 'base document' for your court case, proving that you gave the hospital a fair chance to rectify their error before seeking judicial intervention." }
                    ].map((item) => (
                      <div key={item.step} className="flex gap-6 items-start border-b border-gray-100 pb-8 last:border-0 hover:bg-gray-50/50 p-4 transition-colors rounded-3xl">
                        <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg shadow-yellow-200/50">{item.step}</div>
                        <div>
                          <h4 className="text-2xl font-black mb-3 text-gray-900 uppercase tracking-tight">{item.title}</h4>
                          <p className="text-lg text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Insurance & TPAs */}
                <section id="insurance-disputes" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Disputes Involving Health Insurance and TPAs</h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    A significant number of overcharging cases happen during 'cashless' treatments. Hospitals sometimes inflate bills knowing that the insurance will pay. However, when the insurance company discovers the overcharging during their audit, they might 'deduct' several charges, leaving the patient to pay the difference.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    In such scenarios, you have a right to challenge the hospital for the illegitimate charges. If the TPA has deducted a charge because it was 'excessive' or 'unnecessary,' you should use that audit report as evidence to demand a refund from the hospital. At AMA Legal Solutions, we assist patients in navigating this triangular dispute between the patient, the hospital, and the insurance provider.
                  </p>
                  <div className="bg-blue-900 text-white p-10 rounded-[2rem] text-center">
                    <h5 className="text-2xl font-bold mb-4">Did Your Insurance Audit Find Billing Errors?</h5>
                    <p className="text-lg opacity-80 mb-6">Don't pay the 'non-medical' or 'deductible' charges if they are illegitimate. We can help you get a refund.</p>
                    <Link href="/contact" className="inline-block bg-[#D2A02A] px-8 py-4 rounded-full font-bold hover:bg-yellow-600 transition-colors">Start Your Recovery Process</Link>
                  </div>
                </section>

                {/* Civil vs Consumer Court */}
                <section id="civil-vs-consumer" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Civil Court vs. Consumer Commission: Making the Right Choice</h2>
                   <p className="text-lg leading-relaxed text-gray-700 mb-6">
                     One of the most frequent questions we receive is whether a patient should file a civil suit or a consumer complaint. While both avenues provide for a refund and compensation, the mechanics of each are very different.
                   </p>
                   <div className="overflow-x-auto shadow-sm rounded-3xl border border-gray-100 mb-8">
                     <table className="min-w-full bg-white">
                       <thead className="bg-[#1a202c] text-white">
                         <tr>
                           <th className="px-6 py-4 text-left font-bold">Feature</th>
                           <th className="px-6 py-4 text-left font-bold">Consumer Commission</th>
                           <th className="px-6 py-4 text-left font-bold">Civil Court</th>
                         </tr>
                       </thead>
                       <tbody className="text-gray-700">
                         <tr className="border-b">
                           <td className="px-6 py-4 font-bold">Nature of Case</td>
                           <td className="px-6 py-4">Summary Procedure (Faster)</td>
                           <td className="px-6 py-4">Full Trial (Longer)</td>
                         </tr>
                         <tr className="border-b">
                           <td className="px-6 py-4 font-bold">Court Fee</td>
                           <td className="px-6 py-4">Nominal Fee</td>
                           <td className="px-6 py-4">Percentage of Claim Amount</td>
                         </tr>
                         <tr className="border-b">
                           <td className="px-6 py-4 font-bold">Burden of Proof</td>
                           <td className="px-6 py-4">Focuses on 'Deficiency in Service'</td>
                           <td className="px-6 py-4">Strict Proof of Negligence</td>
                         </tr>
                         <tr>
                           <td className="px-6 py-4 font-bold">Focus</td>
                           <td className="px-6 py-4">Fast Refund and Compensation</td>
                           <td className="px-6 py-4">Broad Liability and Damages</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                   <p className="text-lg leading-relaxed text-gray-700">
                     For 90 percent of overcharging cases, the Consumer Commission is the ideal choice. It is designed to be consumer-friendly, allowing for a more straightforward presentation of evidence without the rigid formalities of a civil trial. However, if the case involves complex medical fraud that requires extensive cross-examination of several hospital administrators, a civil suit might be necessary. Our legal notice carefully reserves the right to approach either forum based on the hospital's response.
                   </p>
                </section>

                {/* Emotional Toll */}
                <section id="emotional-impact" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">The Emotional and Financial Toll of Medical Billing Fraud</h2>
                   <p className="text-lg leading-relaxed text-gray-700 mb-6">
                     Medical overcharging is not just a financial transaction gone wrong; it is a profound violation of the trust between a patient and a caregiver. When a family is already reeling from the stress of a loved one's illness, the discovery of fraudulent charges adds a layer of emotional trauma. It feels as if the hospital is treating the patient's life as a mere profit center rather than a human life.
                   </p>
                   <p className="text-lg leading-relaxed text-gray-700 mb-6">
                     Financially, the impact can be devastating. In India, where out-of-pocket healthcare spending is among the highest in the world, a few lakhs of overcharging can mean the difference between financial stability and falling into a debt trap. Many families are forced to sell assets or take high-interest loans to pay off hospital bills before the patient can be discharged.
                   </p>
                   <p className="text-lg leading-relaxed text-gray-700">
                     At AMA Legal Solutions, our goal is to alleviate this burden. We take the weight of the legal battle off your shoulders, allowing you to focus on what truly matters - recovery and family. Our legal notices are designed to not only recover the money but to seek compensation for the 'mental agony and harassment' that occurs when a hospital attempts to defraud a vulnerable family.
                   </p>
                </section>

                {/* Why Choose AMA Legal Solutions */}
                <section id="why-ama-legal" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Why Choose AMA Legal Solutions?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Deep Medical-Legal Expertise</h4>
                      <p className="text-gray-600">Our team doesn't just know the law; we understand medical protocols, pharmacy billing cycles, and hospital administrative structures.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Data Driven Audits</h4>
                      <p className="text-gray-600">We use forensic auditing to compare your medical files with your bills, catching discrepancies that generic firms might miss.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Strong Pre-Litigation Success</h4>
                      <p className="text-gray-600">Most hospitals prefer to settle when they receive a notice from AMA, as our reputation for rigorous litigation precedes us.</p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Transparent & Ethical</h4>
                      <p className="text-gray-600">We work on a clear fee structure with no hidden costs, echoing the transparency we demand from the healthcare sector.</p>
                    </div>
                  </div>
                </section>

                {/* Review Snippets / Client Reviews */}
                <section id="reviews" className="scroll-mt-32">
                   <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
                      <h2 className="text-2xl md:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
                      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-orange-100">
                         <div className="flex text-orange-400">
                            {[1,2,3,4,5].map(i => (
                              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            ))}
                         </div>
                         <span className="font-bold text-gray-900">4.9/5</span>
                         <span className="text-gray-500 text-sm">(2,450+ Reviews)</span>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative">
                         <div className="absolute top-6 right-8 text-6xl text-gray-200 font-serif">"</div>
                         <div className="flex text-orange-400 mb-4">
                            {[1,2,3,4,5].map(i => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            ))}
                         </div>
                         <p className="text-gray-700 mb-6 relative z-10 font-medium italic">
                            "AMA Legal Solutions helped me recover over 2 lakhs that a private hospital had overcharged for COVID treatment. Their notice was very professional and effective."
                         </p>
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">RK</div>
                            <div>
                               <h5 className="font-bold text-gray-900">Rajesh Khanna</h5>
                               <p className="text-sm text-gray-500">Verified Client</p>
                            </div>
                         </div>
                      </div>

                      <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative">
                         <div className="absolute top-6 right-8 text-6xl text-gray-200 font-serif">"</div>
                         <div className="flex text-orange-400 mb-4">
                            {[1,2,3,4,5].map(i => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            ))}
                         </div>
                         <p className="text-gray-700 mb-6 relative z-10 font-medium italic">
                            "I was shocked to see charges for medicines never used. AMA Legal drafted a powerful notice that forced the hospital to apologize and refund the amount."
                         </p>
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">MJ</div>
                            <div>
                               <h5 className="font-bold text-gray-900">Meera Joshi</h5>
                               <p className="text-sm text-gray-500">Verified Client</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10">Frequently Asked Questions</h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="group border-b border-gray-100 pb-8 last:border-0 hover:border-[#D2A02A] transition-colors">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-start group-hover:text-[#D2A02A] transition-colors">
                          <span className="text-[#D2A02A] mr-4 opacity-50">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed pl-10 border-l-2 border-gray-50 group-hover:border-[#D2A02A] transition-colors">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Bottom CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-10 rounded-full -mr-32 -mt-32"></div>
                   <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-32 -mb-32"></div>
                   
                   <div className="relative z-10">
                     <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">Take Charge of Your Medical Bills Today</h2>
                     <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed">
                       Don't let medical billing fraud drain your savings. Our expert legal team is ready to analyze your bill, send a powerful legal notice, and secure the refund you deserve.
                     </p>
                     <div className="flex flex-col sm:flex-row gap-6 justify-center">
                       <Link href="/contact">
                         <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all hover:scale-105 shadow-xl text-lg w-full sm:w-auto">
                           Start Your Legal Process
                         </button>
                       </Link>
                       <a href="tel:+918700343611">
                         <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1a202c] text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                           Call Us: +91-8700343611
                         </button>
                       </a>
                     </div>
                     <p className="mt-8 text-sm opacity-60 italic">Free initial consultation for medical overcharging cases.</p>
                   </div>
                </section>

              </div>
            </main>

            {/* Right Column - Sticky Sidebar */}
            <aside className="hidden lg:block space-y-8 sticky top-24">
              {/* Immediate CTA Card */}
              <div className="bg-[#1a202c] text-white p-8 rounded-3xl shadow-xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-[#D2A02A]">Need Urgent Help?</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Our specialized lawyers are available for immediate consultation regarding hospital billing disputes and medical negligence.
                </p>
                <div className="space-y-4">
                  <a 
                    href="tel:+918700343611" 
                    className="flex items-center justify-center gap-3 w-full bg-[#D2A02A] py-4 rounded-2xl font-bold hover:bg-[#b88a22] transition-transform active:scale-95"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    Call Support
                  </a>
                  <Link 
                    href="/contact" 
                    className="flex items-center justify-center gap-3 w-full border-2 border-white/20 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition-colors"
                  >
                    Request Callback
                  </Link>
                </div>
              </div>

              {/* Related Pages Widget */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Related Services</h3>
                <ul className="space-y-4">
                  {relatedPages.map((page, idx) => (
                    <li key={idx}>
                      <Link 
                        href={page.href} 
                        className="flex items-center justify-between group text-gray-600 hover:text-[#D2A02A] transition-colors"
                      >
                        <span className="font-medium">{page.name}</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* App Download Promo */}
              <div className="bg-gradient-to-br from-[#D2A02A] to-[#b88a22] p-8 rounded-3xl text-white shadow-lg overflow-hidden relative">
                 <div className="relative z-10">
                   <h4 className="text-xl font-bold mb-2">Law on the Go</h4>
                   <p className="text-sm opacity-90 mb-6 leading-relaxed">Get instant legal advice and track your case status with our mobile app.</p>
                   <div className="flex flex-col gap-3">
                     <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                       <Image src="/newAssets/appstore.svg" alt="Google Play" width={140} height={40} className="w-full h-auto brightness-0 invert" />
                     </Link>
                     <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                       <Image src="/newAssets/playstore.svg" alt="App Store" width={140} height={40} className="w-full h-auto brightness-0 invert" />
                     </Link>
                   </div>
                 </div>
                 <div className="absolute bottom-0 right-0 opacity-20 -mr-10 -mb-10">
                   <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 20 20"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 011 1v1h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2H3a1 1 0 110-2h1v-2H3a1 1 0 110-2h1V7z"></path></svg>
                 </div>
              </div>
            </aside>
          </div>
          
          {/* Bottom Grid for Geographical Reach */}
          <div className="mt-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm">
             <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">Expert Legal Services for Hospital Overcharging Across India</h2>
             <GenericStatesGrid serviceName="Overcharged at Hospital" servicePath="overcharged-at-hospital-send-legal-notice" />
          </div>
        </div>
      </div>
    </>
  );
}
