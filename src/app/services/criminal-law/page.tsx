import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What should I do if an FIR is registered against me?",
    answer: "If an FIR is registered against you, it is crucial to stay calm and seek legal counsel immediately. Do not evade the police as it can complicate your case. Contact a criminal lawyer to understand the nature of the charges. Depending on the offense, you may need to apply for anticipatory bail to prevent arrest. Your lawyer will guide you on how to cooperate with the investigation while protecting your rights against self-incrimination."
  },
  {
    question: "What is the difference between Anticipatory Bail and Regular Bail?",
    answer: "Anticipatory Bail is sought before an arrest is made, when a person apprehends arrest for a non-bailable offense. It acts as a pre-arrest legal protection. Regular Bail, on the other hand, is applied for after a person has already been arrested and is in police or judicial custody. Both require a court order, but the timing and legal arguments differ significantly."
  },
  {
    question: "Can a criminal case be settled out of court?",
    answer: "Certain criminal offenses are 'compoundable' under the law, meaning they can be settled between the parties with or without the permission of the court. These usually include minor offenses or private disputes. However, serious offenses like murder, rape, or dacoity are non-compoundable and cannot be settled out of court. A criminal lawyer can advise if your specific case qualifies for compounding or quashing via the High Court."
  },
  {
    question: "How long does a criminal trial take in India?",
    answer: "The duration of a criminal trial in India varies widely depending on the complexity of the case, the number of witnesses, and the court's backlog. It can range from a few years to over a decade. However, with effective legal representation, the process can be expedited through timely filing of applications and efficient cross-examination. Fast-track courts also exist for specific types of heinous crimes."
  },
  {
    question: "What are the rights of an arrested person?",
    answer: "An arrested person has several fundamental rights including the right to know the grounds of arrest, the right to consult a lawyer of their choice, the right to be produced before a magistrate within 24 hours, and the right to silence to avoid self-incrimination. The police cannot use third-degree methods or torture. Violation of these rights can be challenged in court."
  },
  {
    question: "Do you handle cases related to the new criminal laws (BNS, BNSS)?",
    answer: "Yes, our legal team is fully updated with the new criminal laws introduced in India, namely the Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA). We provide legal defense and advice based on these latest statutes that have replaced the IPC, CrPC, and Evidence Act respectively."
  },
  {
    question: "What is the role of a criminal lawyer during a police investigation?",
    answer: "During a police investigation, a criminal lawyer ensures that the police follow due process. They can be present during interrogations to prevent coercion, help in drafting replies to police notices, file applications for the preservation of evidence, and move the court for monitoring the investigation if the police are biased or inactive."
  },
  {
    question: "Can I get a government job if I have a criminal case pending?",
    answer: "Generally, having a pending criminal case does not automatically disqualify you from applying for a government job, but you must disclose it in your application. However, appointment may be withheld until acquittal. If convicted of a crime involving moral turpitude, you may be permanently disqualified. It is best to consult a lawyer to understand the specific service rules applicable to your situation."
  },
  {
    question: "What is a 498A case and how do you defend it?",
    answer: "Section 498A of the IPC (now covered under BNS) deals with cruelty to a woman by her husband or his relatives. It is often a non-bailable offense. Defense strategies include seeking anticipatory bail, proving false allegations through evidence like chats or location data, and seeking quashing of the FIR in the High Court if the complaint is frivolous or malicious."
  },
  {
    question: "How much does it cost to hire a criminal lawyer?",
    answer: "The cost of hiring a criminal lawyer varies based on the lawyer's experience, the complexity of the case, and the court where the matter is pending. Fees may be charged per hearing or as a lump sum for the entire case. At AMA Legal Solutions, we offer transparent pricing and discuss the fee structure clearly during the initial consultation."
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
      "name": "Criminal Law",
      "item": "https://www.amalegalsolutions.com/services/criminal-law"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Criminal Lawyers in India: Expert Defense for Bail, FIR & Trials",
  "description": "Comprehensive guide to criminal law services in India. Expert legal defense for bail, FIR quashing, cyber crime, and criminal trials by top criminal lawyers.",
  "image": "https://www.amalegalsolutions.com/services/7.png",
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
  "datePublished": "2023-11-15",
  "dateModified": "2024-07-20"
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
  "name": "Criminal Law Services",
  "image": "https://www.amalegalsolutions.com/services/7.png",
  "description": "Expert criminal defense legal services in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "850"
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
        "name": "Vikram Singh"
      },
      "reviewBody": "I was falsely accused in a corporate fraud case. The team at AMA Legal Solutions handled my anticipatory bail with extreme professionalism. Their knowledge of white-collar crime law is exceptional."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anjali Desai"
      },
      "reviewBody": "Best criminal lawyers in Delhi NCR. They helped my brother get regular bail in a very complex case. They were available 24/7 to answer our queries and kept us updated throughout."
    }
  ]
};

export const metadata = {
  title: "Criminal Lawyers in India | AMA Legal Solutions",
  description:
    "Top-rated criminal defense lawyers in India for anticipatory bail, FIR quashing, cyber offenses, and trial advocacy with AMA Legal Solutions.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/criminal-law',
  },
  openGraph: {
    title: "Criminal Lawyers in India | AMA Legal Solutions",
    description: "Top-rated criminal defense lawyers in India for anticipatory bail, FIR quashing, and criminal litigation with AMA Legal Solutions.",
    url: "https://www.amalegalsolutions.com/services/criminal-law",
    type: "website",
    images: [
      {
        url: "/services/7.png",
        width: 1200,
        height: 630,
        alt: "Criminal Law Services India",
      },
    ],
  },
};

export default function CriminalLawPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "defense-services", title: "Our Defense Services" },
    { id: "types-of-cases", title: "Types of Criminal Cases" },
    { id: "legal-framework", title: "Legal Framework (BNS/BNSS)" },
    { id: "our-process", title: "Our Defense Process" },
    { id: "bail-custody", title: "Bail & Custody" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Criminal Law", href: "/services/criminal-law" },
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 

          ></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-20">
              Expert <span className="text-[#D2A02A]">Criminal Defense</span> Lawyers in India
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Protecting your rights and freedom with aggressive, strategic, and compassionate legal representation. 24/7 Emergency Legal Support.
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

              <div className="bg-white p-5 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Defending Your Rights in the Face of Criminal Charges</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Facing a criminal charge is undoubtedly one of the most stressful and frightening experiences a person can go through. The mere accusation of a crime can tarnish a reputation built over a lifetime, disrupt family life, and threaten one's career and liberty. In India, the criminal justice system is complex, vast, and often intimidating for the uninitiated. From the moment an FIR is registered or an arrest is made, the clock starts ticking, and every decision made can have long-lasting consequences on the outcome of the case.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, we understand the gravity of the situation. We believe that every individual is innocent until proven guilty and deserves a robust legal defense. Our team of seasoned <strong>criminal lawyers in India</strong> brings decades of experience in handling complex criminal matters across trial courts, High Courts, and the Supreme Court of India. We do not just represent clients; we fight for them. We meticulously analyze evidence, challenge procedural lapses, and build compelling arguments to protect your rights and secure the best possible outcome.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Whether you are dealing with a police investigation, seeking bail, or facing a full-fledged trial, having an expert criminal defense attorney by your side is not a luxury; it is a necessity. We provide comprehensive legal support that covers every stage of the criminal process, ensuring that you are never alone in your legal battle.
                  </p>
                </section>

                {/* Defense Services */}
                <section id="defense-services" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Comprehensive Criminal Defense Services</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-6 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "Justice cannot be for one side alone, but must be for both." - Eleanor Roosevelt
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Criminal law is a broad field encompassing various types of offenses and legal procedures. Our practice is structured to provide specialized attention to different categories of criminal cases. We offer end-to-end legal services ranging from pre-litigation advisory to post-conviction appeals.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Our primary objective is to prevent the filing of false cases and, where cases are filed, to ensure they are quashed or result in an acquittal. We work closely with forensic experts, private investigators, and subject matter specialists to strengthen the defense strategy. Our services are not limited to individuals; we also represent corporations and directors facing criminal liability in white-collar crimes and regulatory offenses.
                  </p>
                </section>

                {/* Types of Cases */}
                <section id="types-of-cases" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Criminal Cases We Handle</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Our expertise spans the entire spectrum of criminal law. We have successfully defended clients in a wide array of matters, ensuring personalized strategies for each unique case type.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-lg md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">White Collar Crimes</h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        We specialize in defending complex financial crimes including money laundering (PMLA), corporate fraud, embezzlement, bribery, and tax evasion. These cases often involve voluminous documentation and require a keen understanding of both law and finance.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-lg md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Cyber Crimes</h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        With the rise of digital technology, cyber crimes like hacking, identity theft, online financial fraud, and data breaches have become common. We provide expert defense under the IT Act, helping clients navigate technical evidence and digital forensics.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-lg md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Bodily Offenses</h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        We handle serious charges related to bodily harm, including assault, murder, attempt to murder, and kidnapping. These cases require aggressive cross-examination and a deep understanding of medical jurisprudence.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-lg md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Women & Child Related Laws</h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        We represent clients in cases involving dowry harassment (498A), domestic violence, sexual harassment (POSH), and POCSO Act matters. We handle these sensitive cases with the utmost confidentiality and care.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-lg md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">NDPS & Drug Offenses</h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        Cases under the Narcotic Drugs and Psychotropic Substances (NDPS) Act are stringent with tough bail conditions. Our lawyers are experts in challenging search and seizure procedures to protect clients from harsh penalties.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-lg md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Cheque Bounce & Economic Offenses</h3>
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        We handle cases under Section 138 of the Negotiable Instruments Act (Cheque Bounce) and other economic offenses, aiming for quick resolution or settlement to avoid criminal conviction for civil liabilities.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating the New Legal Framework (BNS, BNSS, BSA)</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Indian criminal justice system has undergone a historic transformation with the introduction of three new criminal laws that replaced the colonial-era statutes. As a forward-looking law firm, AMA Legal Solutions is fully equipped to handle cases under this new regime.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Bharatiya Nyaya Sanhita (BNS)</h4>
                      <p className="text-gray-600">
                        Replacing the Indian Penal Code (IPC), the BNS defines offenses and prescribes punishments. It introduces new categories of crimes such as organized crime and terrorism while modernizing definitions of existing offenses. Our lawyers are well-versed in the nuances of BNS to build effective defenses.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Bharatiya Nagarik Suraksha Sanhita (BNSS)</h4>
                      <p className="text-gray-600">
                        Replacing the Code of Criminal Procedure (CrPC), the BNSS governs the procedural aspects of investigation, arrest, bail, and trial. It emphasizes the use of technology and sets timelines for investigations. We ensure that procedural lapses under BNSS are identified and used to your advantage.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Bharatiya Sakshya Adhiniyam (BSA)</h4>
                      <p className="text-gray-600">
                        Replacing the Indian Evidence Act, the BSA recognizes electronic and digital records as primary evidence. In an era of digital surveillance and cyber interactions, understanding the BSA is critical for challenging or admitting electronic evidence in court.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    Understanding these new laws is vital because they change how bail is granted, how police can investigate, and what constitutes evidence. Our team stays ahead of the curve, constantly updating our knowledge base to provide the most accurate and effective legal representation.
                  </p>
                </section>

                {/* Our Process */}
                <section id="our-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Strategic Defense Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We do not believe in a one-size-fits-all approach. Every criminal case is unique, with its own set of facts and circumstances. Our defense strategy is meticulous and multi-layered.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Immediate Intervention & Protection</h3>
                        <p className="text-gray-700 leading-relaxed">
                          The first few hours after an incident or arrest are critical. We provide immediate legal counsel to prevent self-incrimination. We advise clients on how to interact with law enforcement and, if necessary, file for anticipatory bail to prevent arrest.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Case Analysis & Investigation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We conduct a thorough review of the FIR, police reports, and witness statements. We don't just rely on the police version; we conduct our own investigation, interview witnesses, and gather exculpatory evidence to challenge the prosecution's narrative.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategic Representation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Whether it is arguing for bail, framing of charges, or final arguments, our courtroom advocacy is sharp and persuasive. We focus on dismantling the prosecution's case by highlighting inconsistencies, procedural errors, and lack of evidence.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Appellate Remedies</h3>
                        <p className="text-gray-700 leading-relaxed">
                          If a trial court verdict is unfavorable, the battle is not over. We are experts in criminal appeals. We meticulously examine trial records to find grounds for appeal and represent clients in High Courts and the Supreme Court to seek justice.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Bail & Custody */}
                <section id="bail-custody" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Expertise in Bail Matters</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Securing bail is often the most immediate concern for anyone accused of a crime. Freedom is a fundamental right, and we work tirelessly to restore it. We handle all types of bail applications:
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li>
                      <strong>Anticipatory Bail:</strong> Legal protection against arrest before it happens. Essential in cases of matrimonial disputes (498A) or politically motivated complaints.
                    </li>
                    <li>
                      <strong>Regular Bail:</strong> Seeking release from custody after arrest. We argue on grounds of lack of evidence, medical health, parity, and delay in trial.
                    </li>
                    <li>
                      <strong>Interim Bail:</strong> Temporary release for specific emergencies or medical reasons.
                    </li>
                    <li>
                      <strong>Default Bail (Statutory Bail):</strong> If the police fail to file a charge sheet within the prescribed time (60 or 90 days), the accused has an indefeasible right to bail. We ensure this right is enforced.
                    </li>
                  </ul>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Our track record in securing bail, even in serious non-bailable offenses, speaks to our deep understanding of bail jurisprudence and our ability to present compelling arguments to the court.
                  </p>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Choosing the right criminal lawyer can be the difference between acquittal and conviction. Here is why clients trust AMA Legal Solutions with their life and liberty:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚡</div>
                      <h3 className="font-bold text-xl mb-2">24/7 Emergency Support</h3>
                      <p className="text-gray-600">Crime doesn't wait for office hours. Our team is available round the clock for emergencies like arrests or raids.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🧠</div>
                      <h3 className="font-bold text-xl mb-2">Strategic Defense</h3>
                      <p className="text-gray-600">We don't just react; we strategize. We build proactive defense theories to counter prosecution narratives effectively.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤐</div>
                      <h3 className="font-bold text-xl mb-2">Absolute Confidentiality</h3>
                      <p className="text-gray-600">We maintain the highest standards of attorney-client privilege. Your secrets and reputation are safe with us.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was falsely implicated in a theft case by a business rival. I was terrified. AMA Legal Solutions not only got me anticipatory bail but eventually got the FIR quashed in the High Court. They gave me my life back."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rajesh Kumar</p>
                          <p className="text-sm text-gray-500">Business Owner, Gurgaon</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "My son was detained in a cyber crime case. We were clueless. The lawyers at AMA reached the station immediately, prevented illegal detention, and guided us through the entire process. Highly recommended."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sunita Sharma</p>
                          <p className="text-sm text-gray-500">Homemaker, Noida</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-4 md:space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 md:pb-6 last:border-0">
                        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-2 md:mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-sm md:text-lg text-gray-700 leading-relaxed pl-6 md:pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Don't Face the Law Alone</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Your future is on the line. Get the best legal defense today. Contact AMA Legal Solutions for a confidential consultation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70">
                      Confidential • Experienced • Aggressive Defense
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Urgent Legal Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Arrested or facing charges? Call our criminal defense experts immediately.
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

                {/* Quick Links */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/services/cyber" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Cyber Crime Defense
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Civil Litigation
                      </Link>
                    </li>
                    
                    
                  </ul>
                </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid serviceName="Criminal Law" servicePath="criminal-law" />
          </div>
        </div>
      </div>
    </>
  );
}