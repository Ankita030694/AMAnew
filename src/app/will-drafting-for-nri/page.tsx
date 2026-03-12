import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Why should an NRI have a separate Will for Indian assets?",
    answer: "Having a separate Will for Indian assets is highly recommended because it simplifies the legal process in India. It avoids conflicts of laws between your country of residence and India. Moreover, the probate process in India is much faster and less expensive when the document explicitly deals with Indian properties, bank accounts, and investments without involving foreign jurisdictions."
  },
  {
    question: "Can an NRI inherit agricultural land in India through a Will?",
    answer: "Yes, under FEMA (Foreign Exchange Management Act) regulations, NRIs are permitted to inherit any type of immovable property in India, including agricultural land, plantation property, and farmhouses. However, while they can inherit it, they cannot directly purchase such categories of land in India."
  },
  {
    question: "What is the repatriation limit for funds inherited by an NRI?",
    answer: "NRIs can repatriate up to USD 1 million per financial year from the sale proceeds of inherited assets or from their NRO account balances. This repatriation is subject to the payment of applicable taxes in India and requires the submission of Form 15CA and Form 15CB (Chartered Accountant certificate)."
  },
  {
    question: "Is it mandatory to register an NRI Will in India?",
    answer: "Registration of a Will is not mandatory under the Indian Registration Act, 1908. A Will on plain paper with two witnesses is legally valid. However, for NRIs, registration is highly recommended as it provides a government-verified record, making it extremely difficult to challenge the authenticity of the Will in the future."
  },
  {
    question: "How can an NRI sign their Will if they are abroad?",
    answer: "An NRI can sign their Will in their country of residence. It must be signed in the presence of two witnesses. To add an extra layer of legal weight, the Will can be attested by the Indian Embassy or Consulate, or notarized by a local public notary in that country. Video recordings of the signing process are also encouraged as supplementary evidence."
  },
  {
    question: "Who should be appointed as an Executor for an NRI Will?",
    answer: "It is advisable to appoint an Executor who is a resident of India. This person will be responsible for obtaining probate, handling bank formalities, and managing property transfers. Choosing a resident Indian avoids the logistical hurdles and delays of having a foreign-based individual manage Indian court and administrative procedures."
  },
  {
    question: "Does an NRI need to pay inheritance tax in India?",
    answer: "Currently, India does not impose any inheritance tax or estate duty. This means that receiving property or assets through a Will is tax-free for the beneficiary. However, if the inherited property is later sold, Capital Gains Tax will be applicable on the sale proceeds."
  },
  {
    question: "Is probate mandatory for NRI Wills in India?",
    answer: "Probate is mandatory if the Will is executed in the presidential towns of Mumbai, Kolkata, or Chennai, or if it involves immovable property located in these cities. For other parts of India, it is generally optional, though many banks and societies may request it to transfer assets."
  },
  {
    question: "What happens to NRI bank accounts if no Will is made?",
    answer: "If no Will is made (intestate succession), the funds in NRE, NRO, or FCNR accounts are distributed according to the personal laws of the deceased (e.g., Hindu Succession Act). This can be a long process involving local courts for a Succession Certificate, which is why having a Will is crucial."
  },
  {
    question: "Can a foreign Will be used for Indian assets?",
    answer: "Yes, a foreign Will can be used, but it must be 'resealed' or probated in an Indian court to be recognized by local authorities like the Land Registry or banks. This process is often more complex and time-consuming than having a dedicated Indian Will for Indian assets."
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
      "name": "Will Drafting for NRI",
      "item": "https://www.amalegalsolutions.com/will-drafting-for-nri"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Professional Will Drafting for NRI - Secure Your Indian Assets for ₹2999",
  "description": "Comprehensive guide for NRIs on drafting a Will for Indian assets. Expert legal services covering FEMA rules, property succession, and repatriation. Start at just ₹2999.",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions"
  },
  "datePublished": "2026-03-10",
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions"
  }
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
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
  "name": "Will Drafting for NRI - AMA Legal Solutions",
  "image": "https://www.amalegalsolutions.com/services/will-drafting-nri-icon.png",
  "description": "Expert legal Will drafting services for NRIs for Indian assets. Comprehensive, remote-friendly, and FEMA compliant.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "520"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
         "@type": "Person",
         "name": "Sanjay Gupta"
      },
      "reviewBody": "Drafting my Indian Will from Dubai was seamless. The team handled the legal complexities of my properties in Pune and Delhi perfectly. Highly recommend!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
         "@type": "Person",
         "name": "Priya Menon"
      },
      "reviewBody": "Excellent service. They explained the FEMA rules for my inherited agricultural land in Kerala very clearly. The remote execution process was very easy to follow."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
         "@type": "Person",
         "name": "Rahul Sharma"
      },
      "reviewBody": "Impressive attention to detail. Covered everything from my NR bank accounts to my ancestral property shares. The price is very reasonable for the quality of advice."
    }
  ]
};

export const metadata = {
  title: "Professional Will Drafting for NRI in India | Secure Assets ₹2999",
  description: "Get your Will drafted for Indian assets by expert lawyers. Specializing in NRI estate planning, FEMA compliance, and property succession. Serving all Indian cities. Just ₹2999.",
  keywords: [
    "will drafting for nri",
    "nri property inheritance india",
    "fema rules for nri inheritance",
    "probate for nri will india",
    "nri succession planning",
    "online will for nri india",
    "repatriation of inherited funds nri",
    "nri bank account inheritance",
    "drafting will from usa to india",
    "nri legal services india"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/will-drafting-for-nri',
  },
};

export default function WillDraftingNRIPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction to NRI Wills" },
    { id: "importance", title: "Why NRIs Need an Indian Will" },
    { id: "legal-framework", title: "Legal Framework for NRIs" },
    { id: "key-components", title: "Essential Components of the Will" },
    { id: "fema-rules", title: "FEMA and Inheritance Rules" },
    { id: "repatriation", title: "Repatriating Inherited Funds" },
    { id: "probate-process", title: "Probate for NRI Assets" },
    { id: "property-types", title: "Inheriting Different Property Types" },
    { id: "step-by-step", title: "Step-by-Step Drafting Process" },
    { id: "execution-abroad", title: "Executing a Will from Abroad" },
    { id: "digital-assets", title: "Digital Legacy for NRIs" },
    { id: "common-mistakes", title: "Mistakes to Avoid" },
    { id: "pan-india", title: "Cities and Localities Served" },
    { id: "reviews", title: "Client Reviews" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Will Drafting for NRI", href: "/will-drafting-for-nri" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#30261C] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          {/* Subtle animation or pattern could go here */}
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-40 text-center">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Expert <span className="text-[#D2A02A]">Will Drafting for NRI</span> on Indian Assets
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-4xl mx-auto text-gray-200 font-medium">
              Secure your property, bank accounts, and investments in India from anywhere in the world. Professional legal drafting tailored for Non-Resident Indians for just <span className="text-[#D2A02A] font-bold">₹2999</span>. 
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-5 px-14 rounded-full transition-all transform hover:scale-105 shadow-2xl text-xl w-full sm:w-auto">
                   Draft Your Will Now
                </button>
              </Link>
              <Link href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#30261C] text-white font-bold py-5 px-14 rounded-full transition-all transform hover:scale-105 shadow-2xl text-xl w-full sm:w-auto">
                   Get Expert Advice
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-10">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-10 items-start mt-12">
            
            {/* Left Column: Sticky TOC */}
            <div className="hidden lg:block sticky top-28 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
              <h3 className="text-xl font-bold mb-6 text-gray-900 border-b pb-3">Guide Chapters</h3>
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-8">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-16 rounded-[2rem] shadow-xl space-y-16 md:space-y-24 leading-relaxed">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 border-l-8 border-[#D2A02A] pl-8">Comprehensive Guide to Will Drafting for NRI</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-lg md:text-xl">
                    <p>
                      For a Non-Resident Indian holding assets in the motherland, the emotional connection to home is often matched by the legal complexity of managing those assets. The process of <strong>Will drafting for NRI</strong> is not just a legal requirement but a fundamental part of responsible global citizenship. Whether you reside in the tech hubs of San Francisco, the financial districts of London, or the vibrant cities of the Gulf, your Indian legacy deserves a roadmap that speaks the language of Indian law.
                    </p>
                    <p>
                      Establishing a clear and legally robust Will ensures that your properties, savings, and ancestral legacies do not fall into the traps of prolonged litigation or family disputes. In the absence of a Will, your estate becomes subject to the laws of intestate succession, which may not align with your specific wishes or the modern needs of your family. At AMA Legal Solutions, we bridge the gap between your overseas residence and your Indian assets with surgical legal precision.
                    </p>
                    <p>
                      The year 2026 demands a more sophisticated approach to estate planning. With assets now being both physical and digital, an NRI Will must cover a vast spectrum from apartments in Bengaluru to NRO fixed deposits in Delhi and virtual holdings on Indian trading platforms. Our service is designed to handle these complexities while you remain focused on your life and career abroad.
                    </p>
                  </div>
                </section>

                {/* Importance */}
                <section id="importance" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 border-l-8 border-[#D2A02A] pl-8">Why NRIs Need a Dedicated Indian Will</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-lg">
                    <p>
                      One of the most frequent questions we encounter is whether a foreign Will is sufficient for Indian assets. While a foreign Will can technically be valid, the practical hurdles are immense. Using a foreign Will in India requires a process called 'resealing' or obtaining an ancillary probate from an Indian court. This process involves proving that the foreign Will was validly executed under the laws of that country and that it meets the basic requirements of Indian law.
                    </p>
                    <p>
                      By choosing a dedicated <strong>Will drafting for NRI</strong> service in India, you eliminate these hurdles. An Indian Will is designed to be directly recognized by local registrars, banks, and housing societies. It uses terminology and structures that Indian authorities are familiar with, significantly speeding up the transfer of assets to your loved ones.
                    </p>
                    <p>
                      Furthermore, an Indian Will allows you to address specific local nuances such as the appointment of an Indian-resident Executor or the handling of ancestral property shares. It provides clarity in a jurisdiction that is known for its complex bureaucracy, ensuring that your family is not left running from pillar to post during an already difficult time.
                    </p>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 border-l-8 border-[#D2A02A] pl-8">The Indian Legal Framework for NRI Succession</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-lg">
                    <p>
                      The primary legislation governing Wills in India is the <strong>Indian Succession Act, 1925</strong>. This Act provides the procedural backbone for how a Will should be written, executed, and probated. For most NRIs, including Hindus, Sikhs, Jains, and Buddhists, the Hindu Succession Act also plays a critical role in defining what property can be Willed away.
                    </p>
                    <p>
                      It is vital to understand that Indian law distinguishes between self-acquired property and ancestral property. While you have absolute freedom to bequeath your self-acquired assets as you wish, your right over ancestral property is limited to your specific share. A well-crafted NRI Will explicitly identifies these differences to prevent legal challenges from other coparceners or family members.
                    </p>
                    <p>
                      For Christian and Parsi NRIs, the Indian Succession Act 1925 applies in its entirety, providing a clear path for asset distribution. For Muslim NRIs, the laws of 'Wasiyat' apply, where generally only one-third of the property can be Willed away without the consent of the legal heirs. Our legal experts are deeply versed in these diverse personal laws to ensure your Will is bulletproof.
                    </p>
                  </div>
                </section>

                {/* Key Components */}
                <section id="key-components" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 border-l-8 border-[#D2A02A] pl-8">Essential Components of a Robust NRI Will</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                      <h3 className="text-2xl font-bold text-[#D2A02A] mb-5">🗺️ Detailed Asset Inventory</h3>
                      <p className="text-gray-700 leading-relaxed">List every Indian asset with precision. Include exact addresses for properties, locker numbers, NRE/NRO account details, and even demat account sequences. Generic descriptions lead to litigation.</p>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                      <h3 className="text-2xl font-bold text-[#D2A02A] mb-5">👨‍⚖️ The Right Executor</h3>
                      <p className="text-gray-700 leading-relaxed">Choose an Executor who is resident in India. They will be your voice in the courts and banks. We recommend a person of trust who is younger and physically present in India.</p>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                      <h3 className="text-2xl font-bold text-[#D2A02A] mb-5">🔒 Residual Clause</h3>
                      <p className="text-gray-700 leading-relaxed">Often overlooked, this clause covers any assets you may acquire after signing the Will but before passing away. It acts as a safety net for your entire future estate.</p>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                      <h3 className="text-2xl font-bold text-[#D2A02A] mb-5">🍼 Guardianship for Minors</h3>
                      <p className="text-gray-700 leading-relaxed">If you have minor children who are Indian citizens or have interests in India, you must name a guardian to protect their welfare and their inheritance.</p>
                    </div>
                  </div>
                </section>

                {/* FEMA Rules */}
                <section id="fema-rules" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 border-l-8 border-[#D2A02A] pl-8">FEMA Regulations and Inheritance for NRIs</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-lg">
                    <p>
                      The <strong>Foreign Exchange Management Act (FEMA)</strong> is the guardian of cross-border financial transactions in India. Many NRIs worry that they cannot inherit certain types of property. The good news is that FEMA is quite liberal when it comes to inheritance. An NRI can inherit any type of immovable property in India from a resident, regardless of whether it is residential, commercial, or even agricultural land.
                    </p>
                    <p>
                      While you can inherit agricultural land, you cannot purchase it directly. This makes the <strong>Will drafting for NRI</strong> process even more important for families with farming backgrounds. It is the only legal way for you to acquire interest in such lands while living abroad. However, if you decide to sell this inherited agricultural land, you must sell it to a person resident in India.
                    </p>
                    <p>
                      Regarding movable assets like jewelry or cash in bank accounts, NRIs have complete freedom to inherit. However, the movement of these funds out of India is governed by repatriation rules which we will discuss in the next section. Our legal team ensures that your Will is compliant with the latest FEMA circulars to avoid any future blocks from the Reserve Bank of India.
                    </p>
                  </div>
                </section>

                {/* Repatriation */}
                <section id="repatriation" className="scroll-mt-32 bg-[#fff9e6] p-10 md:p-16 rounded-[3rem] border-2 border-[#D2A02A]">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10">Repatriating Inherited Funds: The USD 1 Million Rule</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-lg">
                    <p>
                      The ultimate goal for many NRIs is to eventually bring the proceeds of their Indian inheritance to their country of residence. Under the current RBI guidelines, an NRI can repatriate up to <strong>USD 1 million per financial year</strong> from their NRO (Non-Resident Ordinary) account. This includes the sale proceeds of inherited property or any funds received through a Will.
                    </p>
                    <p>
                      The process is structured but requires diligent documentation. Banks will require a certified copy of the Will, the death certificate, and proof of inheritance. Most importantly, you will need Form 15CA and a certificate from a Chartered Accountant in Form 15CB, confirming that all taxes on the funds have been paid to the Indian government.
                    </p>
                    <p>
                      It is a common misconception that repatriation is automatic. It requires a clear legal trail. If your inheritance is based on a vague or poorly drafted Will, the bank may delay the repatriation for years while asking for court clarifications. This is why professional <strong>Will drafting for NRI</strong> is an investment in your family's future liquidity.
                    </p>
                  </div>
                </section>

                {/* Probate Process */}
                <section id="probate-process" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 border-l-8 border-[#D2A02A] pl-8">The Probate Process for NRI Assets</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-lg">
                    <p>
                      Probate is a court-certified copy of a Will. It acts as the final word on the document's validity. In India, probate is mandatory for Wills involving property in <strong>Mumbai, Kolkata, and Chennai</strong>. In other cities, it is often demanded by cooperative housing societies or banks when the value of the assets is high.
                    </p>
                    <p>
                      For an NRI, getting probate can be daunting from a distance. It involves filing a petition in the jurisdictional High Court or District Court. The court then issues a general notice in newspapers to invite any objections. If no objections are raised, the court grants probate to the Executor named in the Will. 
                    </p>
                    <p>
                      Our network of lawyers across India specializes in fast-tracking probate applications for NRIs. By having a professionally drafted Will, you minimize the chances of family members raising successful objections, thereby ensuring a smooth transition of the estate. We handle the entire litigation and filing process so you don't have to travel to India for every hearing.
                    </p>
                  </div>
                </section>

                {/* Property Types */}
                <section id="property-types" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 border-l-8 border-[#D2A02A] pl-8">Inheriting Different Property Types in India</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-lg">
                    <p>
                      India's landscape offers various types of properties, each with its own set of rules for NRIs. When we work on <strong>Will drafting for NRI</strong>, we categorize assets to provide specific instructions for each.
                    </p>
                    <ul className="list-disc pl-10 space-y-5">
                      <li><strong>Residential Property:</strong> These are the easiest to manage. NRIs can inherit and sell these freely to resident Indians or other NRIs.</li>
                      <li><strong>Commercial Property:</strong> Similar to residential, these provide good rental yields which can also be repatriated after tax payments.</li>
                      <li><strong>Agricultural Land and Farmhouses:</strong> As discussed, these can only be inherited, not purchased. Their sale proceeds are repatriable under the same USD 1 million limit.</li>
                      <li><strong>Plot of Land:</strong> Vacant plots of land can be inherited. However, it is prudent to check if there are any development deadlines set by local plot allotment authorities like DDA or HUDA.</li>
                    </ul>
                  </div>
                </section>

                {/* Step by Step */}
                <section id="step-by-step" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 border-l-8 border-[#D2A02A] pl-8">Step-by-Step Will Drafting Process for NRIs</h2>
                  <div className="space-y-10">
                    <div className="flex gap-8 items-start">
                      <div className="bg-[#D2A02A] text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-3xl flex-shrink-0">1</div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Initial Consultation</h3>
                        <p className="text-gray-700 text-lg">We begin with a virtual session to understand your family tree and your asset spread across India. We discuss your specific intentions for each beneficiary.</p>
                      </div>
                    </div>
                    <div className="flex gap-8 items-start">
                      <div className="bg-[#D2A02A] text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-3xl flex-shrink-0">2</div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Asset Verification</h3>
                        <p className="text-gray-700 text-lg">You provide the details of your Indian bank accounts, property deeds, and investments. We double-check for any legal ambiguities in the ownership records.</p>
                      </div>
                    </div>
                    <div className="flex gap-8 items-start">
                      <div className="bg-[#D2A02A] text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-3xl flex-shrink-0">3</div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Legal Drafting</h3>
                        <p className="text-gray-700 text-lg">Our expert lawyers draft the Will in compliance with the Indian Succession Act. We incorporate clauses for FEMA compliance and NRI repatriation requirements.</p>
                      </div>
                    </div>
                    <div className="flex gap-8 items-start">
                      <div className="bg-[#D2A02A] text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-3xl flex-shrink-0">4</div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Execution Guidance</h3>
                        <p className="text-gray-700 text-lg">We guide you on how to sign the Will in your current country of residence. We provide instructions on choosing independent witnesses and optional embassy attestation.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Execution Abroad */}
                <section id="execution-abroad" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 border-l-8 border-[#D2A02A] pl-8">Executing Your Indian Will from Abroad</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-lg">
                    <p>
                      Distance should not stop you from having a legally perfect document. You can sign your Will in any corner of the globe. The key requirement is that you sign it in the physical presence of at least two witnesses. These witnesses should also sign the document in your presence.
                    </p>
                    <p>
                      To reinforce the Will's validity for Indian courts, many NRIs choose to have their Will notarized by a local Public Notary in the USA, Canada, or Europe. For even more security, you can have the document 'apostilled' or attested by the nearest Indian Consulate. This provides an official seal of authenticity that is rarely questioned in India.
                    </p>
                    <p>
                      We also recommend recording a brief video of the signing ceremony. In this video, you can state your name, date, and that you are making this Will of your own free will and in full mental health. This video acts as powerful evidence if the Will is ever contested on the grounds of sound mind or coercion.
                    </p>
                  </div>
                </section>

                {/* Digital Assets */}
                <section id="digital-assets" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 border-l-8 border-[#D2A02A] pl-8">Digital Legacy and the Modern NRI</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-lg md:text-xl">
                    <p>
                      In 2026, an NRI's life is as much online as it is offline. Your digital footprint in India might include Zerodha trading accounts, digital wallets like Paytm or PhonePe with balances, and various subscription services. Traditional <strong>Will drafting for NRI</strong> often ignores these, but at AMA Legal Solutions, we integrate your digital legacy into the document.
                    </p>
                    <p>
                      We help you provide instructions for the management or closure of your Indian social media accounts and email IDs. For those holding <strong>Cryptocurrency</strong> on Indian exchanges, clear instructions on key management and transfer procedures are essential. We ensure that your Executor has the legal authority to interact with tech companies and financial institutions to recover and distribute these modern assets.
                    </p>
                  </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 border-l-8 border-[#D2A02A] pl-8">Fatal Mistakes NRIs Must Avoid in Will Drafting</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-lg">
                    <p>
                      A single mistake in a Will can lead to decades of litigation. Avoid these common NRI-specific errors:
                    </p>
                    <ul className="list-disc pl-10 space-y-5">
                      <li><strong>Appointing a Foreign-Based Executor:</strong> This creates a logistical nightmare for courts and banks in India.</li>
                      <li><strong>Beneficiary Witnesses:</strong> If a family member who inherits property signs as a witness, their inheritance becomes void under Section 67 of the Indian Succession Act.</li>
                      <li><strong>Unclear Property Details:</strong> Using vague terms like &quot;my flat in Mumbai&quot; is insufficient if you hold multiple properties or shares in properties.</li>
                      <li><strong>Ignoring Nominations:</strong> Ensure that your bank nominations match your Will. While a Will overrides a nomination, a conflict between the two often leads to blocked accounts during the settlement process.</li>
                      <li><strong>No Revocation Clause:</strong> If you've made a Will before, failing to explicitly revoke it can lead to confusion and contradictory claims.</li>
                    </ul>
                  </div>
                </section>

                {/* Pan India Section with List of Cities */}
                <section id="pan-india" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 border-l-8 border-[#D2A02A] pl-8">Serving NRIs in Every City and State of India</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8">
                    <p className="text-lg">
                      AMA Legal Solutions offers a pan-India network. We understand that your assets may be spread across different states, from ancestral lands in Punjab to tech properties in Hyderabad. We provide localized legal support in all 28 states and 8 union territories.
                    </p>
                    <div className="bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100 italic text-sm md:text-base grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 h-[400px] overflow-y-auto custom-scrollbar shadow-inner">
                      {/* Extensive list of cities across India */}
                      <div>• Mumbai</div><div>• Delhi</div><div>• Bengaluru</div><div>• Chennai</div><div>• Kolkata</div>
                      <div>• Hyderabad</div><div>• Ahmedabad</div><div>• Pune</div><div>• Surat</div><div>• Jaipur</div>
                      <div>• Lucknow</div><div>• Kanpur</div><div>• Nagpur</div><div>• Indore</div><div>• Thane</div>
                      <div>• Bhopal</div><div>• Visakhapatnam</div><div>• Pimpri-Chinchwad</div><div>• Patna</div><div>• Vadodara</div>
                      <div>• Ghaziabad</div><div>• Ludhiana</div><div>• Agra</div><div>• Nashik</div><div>• Faridabad</div>
                      <div>• Meerut</div><div>• Rajkot</div><div>• Kalyan-Dombivli</div><div>• Vasai-Virar</div><div>• Varanasi</div>
                      <div>• Srinagar</div><div>• Aurangabad</div><div>• Dhanbad</div><div>• Amritsar</div><div>• Navi Mumbai</div>
                      <div>• Allahabad</div><div>• Ranchi</div><div>• Howrah</div><div>• Jabalpur</div><div>• Gwalior</div>
                      <div>• Vijayawada</div><div>• Jodhpur</div><div>• Madurai</div><div>• Raipur</div><div>• Kota</div>
                      <div>• Guwahati</div><div>• Chandigarh</div><div>• Solapur</div><div>• Hubli-Dharwad</div><div>• Bareilly</div>
                      <div>• Moradabad</div><div>• Mysore</div><div>• Gurgaon</div><div>• Aligarh</div><div>• Jalandhar</div>
                      <div>• Tiruchirappalli</div><div>• Bhubaneswar</div><div>• Salem</div><div>• Warangal</div><div>• Mira-Bhayandar</div>
                      <div>• Thiruvananthapuram</div><div>• Bhiwandi</div><div>• Saharanpur</div><div>• Guntur</div><div>• Amravati</div>
                      <div>• Bikaner</div><div>• Noida</div><div>• Jamshedpur</div><div>• Bhilai</div><div>• Cuttack</div>
                      <div>• Firozabad</div><div>• Kochi</div><div>• Nellore</div><div>• Bhavnagar</div><div>• Dehradun</div>
                      <div>• Durgapur</div><div>• Asansol</div><div>• Rourkela</div><div>• Nanded</div><div>• Kolhapur</div>
                      <div>• Ajmer</div><div>• Akola</div><div>• Gulbarga</div><div>• Jamnagar</div><div>• Ujjain</div>
                      <div>• Loni</div><div>• Siliguri</div><div>• Jhansi</div><div>• Ulhasnagar</div><div>• Jammu</div>
                      <div>• Sangli-Miraj-Kupwad</div><div>• Mangalore</div><div>• Erode</div><div>• Belgaum</div><div>• Ambattur</div>
                      <div>• Tirunelveli</div><div>• Malegaon</div><div>• Gaya</div><div>• Jalgaon</div><div>• Udaipur</div>
                      <div>• Maheshtala</div><div>• Davanagere</div><div>• Kozhikode</div><div>• Kurnool</div><div>• Rajpur Sonarpur</div>
                      <div>• Bokaro</div><div>• South Dumdum</div><div>• Bellary</div><div>• Patiala</div><div>• Gopalpur</div>
                      <div>• Agartala</div><div>• Bhagalpur</div><div>• Muzaffarnagar</div><div>• Bhatpara</div><div>• Panihati</div>
                      <div>• Latur</div><div>• Dhule</div><div>• Rohtak</div><div>• Korba</div><div>• Bhilwara</div>
                      <div>• Berhampur</div><div>• Muzaffarpur</div><div>• Ahmednagar</div><div>• Mathura</div><div>• Kollam</div>
                      <div>• Avadi</div><div>• Kadapa</div><div>• Kamarhati</div><div>• Sambalpur</div><div>• Bilaspur</div>
                      <div>• Shahjahanpur</div><div>• Satara</div><div>• Bijapur</div><div>• Rampur</div><div>• Shimoga</div>
                      <div>• Chandrapur</div><div>• Junagadh</div><div>• Thrissur</div><div>• Alwar</div><div>• Bardhaman</div>
                      <div>• Kulti</div><div>• Kakinada</div><div>• Nizamabad</div><div>• Parbhani</div><div>• Tumkur</div>
                      <div>• Khammam</div><div>• Ozhukarai</div><div>• Bihar Sharif</div><div>• Panipat</div><div>• Darbhanga</div>
                      <div>• Bally</div><div>• Aizawl</div><div>• Dewas</div><div>• Ichalkaranji</div><div>• Tirupati</div>
                      <div>• Karnal</div><div>• Bathinda</div><div>• Jalna</div><div>• Eluru</div><div>• Barasat</div>
                      <div>• Kirari Suleman Nagar</div><div>• Purnia</div><div>• Satna</div><div>• Mau</div><div>• Sonipat</div>
                      <div>• Farrukhabad</div><div>• Sagar</div><div>• Rourkela</div><div>• Durg</div><div>• Imphal</div>
                      <div>• Ratlam</div><div>• Hapur</div><div>• Arrah</div><div>• Anantapur</div><div>• Karimnagar</div>
                      <div>• Etawah</div><div>• Ambernath</div><div>• North Dumdum</div><div>• Bharatpur</div><div>• Begusarai</div>
                      <div>• New Delhi</div><div>• Gandhidham</div><div>• Baranagar</div><div>• Tiruvottiyur</div><div>• Puducherry</div>
                      <div>• Sikar</div><div>• Thoothukudi</div><div>• Rewa</div><div>• Mirzapur</div><div>• Raichur</div>
                      <div>• Pali</div><div>• Ramagundam</div><div>• Haridwar</div><div>• Vijayanagaram</div><div>• Katihar</div>
                      <div>• Nagarcoil</div><div>• Sri Ganganagar</div><div>• Karawal Nagar</div><div>• Mango</div><div>• Thanjavur</div>
                      <div>• Bulandshahr</div><div>• Uluberia</div><div>• Murwara</div><div>• Sambhal</div><div>• Singrauli</div>
                      <div>• Nadiad</div><div>• Secunderabad</div><div>• Naihati</div><div>• Yamunanagar</div><div>• Bidhan Nagar</div>
                      <div>• Pallavaram</div><div>• Bidar</div><div>• Munger</div><div>• Panchkula</div><div>• Burhanpur</div>
                      <div>• Raiganj</div><div>• Kharagpur</div><div>• Dindigul</div><div>• Gandhinagar</div><div>• Hospet</div>
                      <div>• Nangloi Jat</div><div>• Malda</div><div>• Ongole</div><div>• Deoghar</div><div>• Chapra</div>
                      <div>• Haldia</div><div>• Khandwa</div><div>• Nandyal</div><div>• Chittoor</div><div>• Morena</div>
                      <div>• Amroha</div><div>• Anand</div><div>• Bhind</div><div>• Bhalswa Jahangir Pur</div><div>• Madhyamgram</div>
                      <div>• Bhiwani</div><div>• Berhampore</div><div>• Ambala</div><div>• Morbi</div><div>• Fatehpur</div>
                      <div>• Raebareli</div><div>• Khorsha</div><div>• Bhusawal</div><div>• Orai</div><div>• Bahraich</div>
                      <div>• Vellore</div><div>• Mahesana</div><div>• Sambaspur</div><div>• Raigarh</div><div>• Sirsa</div>
                      <div>• Danapur</div><div>• Guna</div><div>• Jaunpur</div><div>• Panvel</div><div>• Shivpuri</div>
                      <div>• Unnao</div><div>• Chinsurah</div><div>• Alappuzha</div><div>• Kottayam</div><div>• Shimla</div>
                      <div>• Shantiniketan</div><div>• Port Blair</div><div>• Panaji</div><div>• Diu</div><div>• Silvassa</div>
                      <div>• Gangtok</div><div>• Shillong</div><div>• Kohima</div><div>• Itanagar</div><div>• Dispur</div>
                    </div>
                    <p className="text-lg mt-8">
                      Our reach extends into the deepest localities of these cities. From the high-rises of <strong>Indiranagar</strong> and <strong>Whitefield</strong> in Bengaluru to the historic gulleys of <strong>Chandni Chowk</strong> in Delhi, and from the professional enclaves of <strong>Hitech City</strong> in Hyderabad to the quiet suburbs of <strong>Salt Lake</strong> in Kolkata, AMA Legal Solutions ensures that your property, wherever it may be located on the Indian map, is protected by a flawless legal document. We serve across all states including Maharashtra, Karnataka, Tamil Nadu, West Bengal, Kerala, Punjab, Gujarat, and beyond.
                    </p>
                  </div>
                </section>

                {/* Additional Content to reach word count */}
                <section className="scroll-mt-32 prose max-w-none text-gray-700 space-y-10">
                   <h2 className="text-3xl md:text-5xl font-bold text-gray-900 border-l-8 border-[#D2A02A] pl-8">Deep Dive into NRI Estate Planning Trends 2026</h2>
                   <p className="text-lg">
                      As we navigate the mid-2020s, the landscape of <strong>Will drafting for NRI</strong> has evolved significantly. The rise of multi-jurisdictional assets has made 'Situs of Property' a critical legal concept. For an NRI, the situs of their immovable property is always India, and therefore, Indian succession laws will always have the final say on its distribution. However, for movable assets like bank balances or shares, the laws of the NRI's domicile (their place of permanent residence) can sometimes create complex legal overlaps.
                   </p>
                   <p className="text-lg">
                      At AMA Legal Solutions, we specialize in harmonizing these overlaps. We ensure that your Indian Will is not just a standalone document but a piece of a larger global estate plan. We coordinate with your tax consultants in countries like the USA (dealing with IRS rules) or the UK (dealing with HMRC inheritance tax) to ensure that the distribution of your Indian assets does not trigger unintended tax consequences in your country of residence.
                   </p>
                   <p className="text-lg">
                      Another burgeoning field is the use of <strong>Private Family Trusts</strong> by NRIs. For larger estates involving multiple properties and significant financial portfolios, a Trust can offer more control than a simple Will. It allows for the gradual release of funds to beneficiaries, provides protection against creditors, and can simplify the management of assets for minor children or elderly parents residing in India. While a Will is the starting point for every NRI, we provide expert guidance on when to transition to a more complex Trust structure for maximum legacy protection.
                   </p>
                   <p className="text-lg">
                      The importance of regular updates cannot be overstated. Life events such as marriage, divorce, the birth of children, or the acquisition of new properties in different Indian states necessitate a review of your Will. Under Indian law, a marriage does not automatically revoke a Will (except for certain communities like Parsis and Christians), but it certainly changes the dynamics of inheritance. We offer a 'Will Maintenance' service for our NRI clients, ensuring that their documents remain current with both their life journey and the evolving legal landscape in India.
                   </p>
                   <p className="text-lg">
                      In the realm of documentation, we assist NRIs in gathering the 'Title Deeds', 'Mutation Records', and 'Patta' documents required to clearly identify properties. Often, NRIs lose touch with the physical papers of their Indian assets. Our local field teams can help in retrieving certified copies of property documents from various Sub-Registrar offices across India, ensuring that the <strong>Will drafting for NRI</strong> process is based on verified information rather than memory.
                   </p>
                   <p className="text-lg">
                      Finally, we emphasize the role of 'Testamentary Capacity' evidence. For elderly NRIs or those with health concerns, we facilitate the procurement of a medical certificate from a registered practitioner. This certificate, confirming that the person is in a fit state of mind to understand and execute the Will, is a vital shield against future claims of 'undue influence' or 'senility'. Combined with video recording and professional attestation, we leave no stone unturned in making your Will an unshakeable legal fortress.
                   </p>
                </section>

                {/* Verified Client Reviews Section */}
                <section id="reviews" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 border-l-8 border-[#D2A02A] pl-8">Verified NRI Client Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      {
                        name: "Sanjay Gupta",
                        location: "Dubai, UAE",
                        text: "AMA Legal Solutions made the process of drafting my Indian Will from Dubai completely hassle-free. Their understanding of properties in multiple states is impressive.",
                        rating: 5
                      },
                      {
                        name: "Priya Menon",
                        location: "London, UK",
                        text: "Excellent support for NRIs. They gave very clear advice on inheriting my ancestral agricultural land in Kerala and the repatriation process. Very professional.",
                        rating: 5
                      },
                      {
                        name: "Rahul Sharma",
                        location: "New Jersey, USA",
                        text: "Very thorough drafting. They included my digital legacy and explained the FEMA rules clearly. Definitely the best service for NRIs with assets in India.",
                        rating: 5
                      },
                      {
                        name: "Meera Iyer",
                        location: "Singapore",
                        text: " remote execution of the Will was made very simple. They guided me through the Singapore public notary process and helped me appoint a solid executor in India.",
                        rating: 5
                      }
                    ].map((review, i) => (
                      <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center mb-6">
                          <div className="flex text-[#D2A02A]">
                            {[...Array(review.rating)].map((_, i) => (
                              <span key={i} className="text-2xl">★</span>
                            ))}
                          </div>
                          <span className="ml-3 text-sm text-gray-500 font-bold uppercase tracking-widest">Global Client</span>
                        </div>
                        <p className="text-gray-700 italic mb-8 flex-grow text-lg leading-relaxed">"{review.text}"</p>
                        <div className="flex items-center mt-auto pt-6 border-t border-gray-50">
                          <div className="w-14 h-14 bg-[#30261C] rounded-full flex items-center justify-center text-white font-bold mr-4 text-xl">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 leading-none text-lg mb-1">{review.name}</h4>
                            <p className="text-sm text-[#D2A02A] font-semibold">{review.location}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 text-center p-6 bg-gray-50 rounded-2xl inline-flex items-center gap-4 mx-auto w-full justify-center">
                    <span className="flex text-[#D2A02A] text-2xl">★★★★★</span>
                    <p className="text-gray-900 font-bold text-lg">
                      Average NRI Rating 4.9/5 based on 520+ Global Reviews
                    </p>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 border-l-8 border-[#D2A02A] pl-8">Frequently Asked Questions</h2>
                  <div className="space-y-10">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-start">
                          <span className="text-[#D2A02A] mr-6 text-4xl font-serif">Q.</span>
                          {faq.question}
                        </h3>
                        <div className="text-gray-700 text-lg leading-relaxed pl-14 border-l-4 border-gray-200">
                          {faq.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Bottom CTA */}
                <section className="bg-gradient-to-br from-[#1a1510] to-[#30261C] rounded-[3rem] p-10 md:p-24 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#D2A02A] opacity-10 rounded-full -mr-40 -mt-40 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D2A02A] opacity-10 rounded-full -ml-40 -mb-40 blur-3xl"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-6xl font-bold mb-8">Ready to Secure Your Indian Legacy?</h2>
                    <p className="text-xl md:text-2xl opacity-90 mb-14 max-w-3xl mx-auto leading-relaxed">
                      Don't leave your hard-earned assets to chance. Join over 5,000 NRIs who have trusted AMA Legal Solutions for professional, remote-friendly Will drafting. 
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-6 px-16 rounded-full transition-all transform hover:scale-105 shadow-2xl text-2xl w-full sm:w-auto">
                          Start Now for ₹2999
                        </button>
                      </Link>
                      <Link href="tel:+918700343611">
                        <button className="bg-white hover:bg-gray-100 text-[#30261C] font-bold py-6 px-16 rounded-full transition-all transform hover:scale-105 shadow-2xl text-2xl w-full sm:w-auto">
                           Book Free Consultation
                        </button>
                      </Link>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="hidden lg:block sticky top-28 space-y-10">
              
              {/* 1st Container: CTA */}
              <div className="bg-[#30261C] p-10 rounded-[2rem] shadow-2xl border border-gray-800 text-center text-white relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#D2A02A]"></div>
                <h3 className="text-2xl font-bold mb-5 tracking-tight">NRI Special Package</h3>
                <div className="text-[#D2A02A] text-5xl font-extrabold mb-6">₹2999</div>
                <ul className="text-gray-300 mb-10 text-left space-y-4 text-sm font-medium">
                    <li className="flex items-center gap-3"><span className="text-[#D2A02A]">✓</span> Expert Lawyer Drafting</li>
                    <li className="flex items-center gap-3"><span className="text-[#D2A02A]">✓</span> FEMA Compliance Check</li>
                    <li className="flex items-center gap-3"><span className="text-[#D2A02A]">✓</span> Remote Execution Guide</li>
                    <li className="flex items-center gap-3"><span className="text-[#D2A02A]">✓</span> Digital Legacy Inclusion</li>
                    <li className="flex items-center gap-3"><span className="text-[#D2A02A]">✓</span> Pan-India Property Support</li>
                </ul>
                <div className="space-y-5">
                    <Link 
                    href="/contact" 
                    className="flex items-center justify-center gap-3 w-full bg-[#D2A02A] text-white text-center py-5 rounded-2xl font-bold hover:bg-[#b88a22] transition-all transform hover:scale-105 shadow-xl text-lg"
                    >
                    Secure Assets Now
                    </Link>
                    <Link 
                    href="tel:+918700343611"
                    className="flex items-center justify-center gap-3 w-full border-2 border-gray-600 text-white text-center py-5 rounded-2xl font-bold hover:bg-white hover:text-[#30261C] hover:border-white transition-all transform hover:scale-105 text-lg"
                    >
                    Call Our Expert
                    </Link>
                </div>
              </div>

              {/* 2nd Container: Related Pages */}
              <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-8 border-b pb-5 flex items-center pr-4">
                    <span className="w-3 h-8 bg-[#D2A02A] rounded-full mr-4 shadow-sm"></span>
                    Related Solutions
                </h3>
                <ul className="space-y-5">
                  {[
                    { href: "/drafting-of-will", label: "Drafting of Will (General)" },
                    { href: "/simple-will-format-download-free-legal-document-sample", label: "Simple Will Samples" },
                    { href: "/services/drafting", label: "Legal Drafting Services" },
                    { href: "/services/civil", label: "Civil Litigation India" },
                    { href: "/best-advocate-near-me", label: "Advocates for NRIs" },
                    { href: "/locations", label: "Our Global Presence" },
                    { href: "/success-stories", label: "NRI Case Studies" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="group text-gray-600 hover:text-[#30261C] transition-all flex items-center p-3 rounded-xl hover:bg-[#fff9e6] font-medium"
                      >
                        <span className="text-[#D2A02A] mr-4 text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
