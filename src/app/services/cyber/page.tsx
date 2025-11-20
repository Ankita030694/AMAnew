import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What does a cyber lawyer do?",
    answer: "A cyber lawyer specializes in legal matters related to the internet, technology, and digital information. They handle cases involving cybercrimes (like hacking, identity theft, and online fraud), data protection and privacy compliance, intellectual property rights in the digital domain, and e-commerce regulations. They represent clients in court, draft technology contracts, and advise businesses on complying with the Information Technology Act, 2000, and other relevant laws."
  },
  {
    question: "How can I report a cyber crime in India?",
    answer: "You can report a cyber crime by visiting the nearest police station or the dedicated cyber crime cell in your city. Alternatively, you can file a complaint online through the National Cyber Crime Reporting Portal (cybercrime.gov.in). It is crucial to preserve all digital evidence, such as screenshots, emails, and transaction details, before filing the complaint. Our cyber lawyers can assist you in drafting a comprehensive complaint to ensure immediate action by the authorities."
  },
  {
    question: "What are the penalties for cyber crimes in India?",
    answer: "Penalties for cyber crimes under the Information Technology Act, 2000, and the Bharatiya Nyaya Sanhita (BNS) vary based on the offense. They can range from fines and imprisonment for up to three years for offenses like identity theft or hacking, to life imprisonment for cyber terrorism. Financial penalties can go up to several crores for data breaches by companies. The severity depends on the nature of the crime and the damage caused."
  },
  {
    question: "Can I get my money back after an online fraud?",
    answer: "Recovering money lost to online fraud is possible but requires prompt action. The 'Golden Hour' is critical; reporting the fraud to the police and your bank within the first few hours significantly increases the chances of freezing the funds before they are siphoned off. Our legal team works with cyber cells and banks to trace the money trail and file necessary legal petitions for the release of frozen funds back to your account."
  },
  {
    question: "Do you handle cases of social media defamation?",
    answer: "Yes, we specialize in handling cases of online defamation and harassment on social media platforms. We can help you file criminal complaints for defamation, send legal notices to the perpetrators for the removal of content, and seek damages for the harm caused to your reputation. We also coordinate with intermediaries (like Facebook, Instagram, X) to take down offensive content under the IT Rules, 2021."
  },
  {
    question: "Is data privacy compliance mandatory for Indian companies?",
    answer: "Yes, with the introduction of the Digital Personal Data Protection (DPDP) Act, 2023, data privacy compliance is mandatory for all entities processing personal data in India. Companies must obtain verifiable consent, ensure data security, and respect users' rights. Non-compliance can attract heavy penalties, reaching up to ₹250 crores. We assist businesses in conducting data audits and drafting privacy policies to ensure full compliance."
  },
  {
    question: "What is the role of digital evidence in court?",
    answer: "Digital evidence, such as emails, chat logs, server logs, and hard drive data, is admissible in Indian courts under Section 65B of the Indian Evidence Act (now Bharatiya Sakshya Adhiniyam). However, it must be collected and presented with a proper certificate to prove its authenticity. Our lawyers work with forensic experts to ensure that digital evidence is preserved and presented correctly to build a watertight case."
  },
  {
    question: "Can you help with frozen bank accounts due to cyber complaints?",
    answer: "Yes, bank accounts are often frozen by cyber police during investigations into fraudulent transactions. If your account has been frozen erroneously or due to a third-party transaction, we can represent you before the investigating officer and the court to explain the source of funds and seek a 'Defreeze Order' to restore access to your accounts."
  },
  {
    question: "What is the difference between a hacker and an ethical hacker?",
    answer: "A hacker is someone who exploits vulnerabilities in a computer system or network to gain unauthorized access, often for malicious purposes. An ethical hacker (or white-hat hacker) uses the same skills but with permission to identify and fix security flaws, helping organizations improve their security. While hacking is a crime, ethical hacking is a legal and vital profession for cybersecurity."
  },
  {
    question: "How do I protect my business from cyber attacks?",
    answer: "Protecting a business requires a combination of technical and legal measures. Legally, you should have robust Non-Disclosure Agreements (NDAs) with employees, comprehensive IT usage policies, and strict data protection protocols. You should also conduct regular security audits and have an incident response plan. Our legal team can help draft these frameworks to minimize liability in case of a breach."
  },
  {
    question: "What constitutes cyber stalking?",
    answer: "Cyber stalking involves using the internet or other electronic means to harass, intimidate, or monitor someone. This can include sending threatening emails, monitoring online activity, or posting personal information without consent. It is a punishable offense under Section 354D of the IPC (and relevant sections of BNS) and the IT Act. We help victims of cyber stalking obtain legal protection and bring the perpetrators to justice."
  },
  {
    question: "Can I sue a company for a data breach involving my personal info?",
    answer: "Yes, if a company fails to protect your personal data and it leads to a loss or wrongful gain, you can seek compensation under Section 43A of the IT Act and the new DPDP Act. You can file a complaint with the Adjudicating Officer or approach the civil court for damages. We represent individuals in class-action suits and individual claims against negligent corporations."
  },
  {
    question: "What is phishing and how is it legally handled?",
    answer: "Phishing is a fraudulent attempt to obtain sensitive information like usernames, passwords, and credit card details by disguising oneself as a trustworthy entity. It is treated as cheating and identity theft under the IT Act and IPC. Legal action involves tracking the digital footprint of the phisher and prosecuting them for fraud and dishonestly inducing delivery of property."
  },
  {
    question: "Do I need a lawyer for a cyber crime complaint?",
    answer: "While you can file a complaint yourself, having a cyber lawyer ensures that the complaint is drafted with the correct legal terminology and technical details. This forces the police to register an FIR under the appropriate sections. A lawyer also follows up with the investigation officer to ensure the case progresses and represents you in court during bail hearings and trial."
  },
  {
    question: "What is the punishment for identity theft?",
    answer: "Identity theft, defined under Section 66C of the IT Act, involves fraudulently making use of the electronic signature, password, or any other unique identification feature of another person. It is punishable with imprisonment of up to three years and a fine of up to ₹1 lakh. We help victims of identity theft restore their digital identity and prosecute the offenders."
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
      "item": "https://amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Cyber Law",
      "item": "https://amalegalsolutions.com/services/cyber"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cyber Lawyers in India: Expert Legal Protection for Digital Crimes",
  "description": "Top-rated cyber lawyers in India. We provide expert legal services for cyber crime defense, online fraud recovery, data protection, and social media defamation.",
  "image": "https://amalegalsolutions.com/services/10.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://amalegalsolutions.com/logo.png"
    }
  },
  "datePublished": "2023-10-01",
  "dateModified": "2023-11-20"
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
  "name": "Cyber Law Services",
  "image": "https://amalegalsolutions.com/services/10.png",
  "description": "Expert cyber law and digital crime legal services in India.",
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
        "name": "Vikram Malhotra"
      },
      "reviewBody": "I was a victim of a complex crypto scam. The cyber team at AMA Legal Solutions helped me trace the funds and file a strong case. Their technical knowledge is impressive."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Gupta"
      },
      "reviewBody": "Best cyber lawyers in Delhi. They handled my workplace harassment and data theft case with utmost confidentiality and professionalism. Highly recommended."
    }
  ]
};

export const metadata = {
  title: "Cyber Lawyers in India | Cyber Crime & Data Protection Experts",
  description:
    "Looking for the best cyber lawyers in India? AMA Legal Solutions offers expert legal help for cyber crimes, online fraud, data protection, and IT Act compliance. Secure your digital rights today.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/cyber',
  },
  openGraph: {
    title: "Cyber Lawyers in India | Cyber Crime & Data Protection Experts",
    description: "Looking for the best cyber lawyers in India? AMA Legal Solutions offers expert legal help for cyber crimes, online fraud, data protection, and IT Act compliance.",
    url: "https://amalegalsolutions.com/services/cyber",
    type: "website",
    images: [
      {
        url: "/services/10.png",
        width: 1200,
        height: 630,
        alt: "Cyber Lawyers in India",
      },
    ],
  },
};

export default function CyberLawPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-cyber-law", title: "What is Cyber Law?" },
    { id: "our-services", title: "Our Cyber Law Services" },
    { id: "cyber-crimes", title: "Types of Cyber Crimes" },
    { id: "legal-framework", title: "Legal Framework" },
    { id: "process", title: "Our Process" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Cyber Law", href: "/services/cyber" },
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
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Defend Your Digital Rights with Expert <span className="text-[#D2A02A]">Cyber Lawyers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Comprehensive legal protection against cyber crimes, online fraud, data breaches, and digital harassment. We fight for your safety in the digital world.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Consult a Cyber Expert
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content Area */}
            <div className="lg:w-3/4">
              
              <TableOfContents sections={tocSections} />

              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm mt-8 space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating the Digital Legal Landscape in India</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In an era where our lives are increasingly intertwined with the digital realm, the risk of encountering legal issues online has skyrocketed. From financial transactions and social interactions to business operations and data storage, every aspect of modern life has a digital footprint. While this connectivity brings immense convenience, it also opens the door to sophisticated cyber threats. <strong>Cyber crime in India</strong> is rising at an alarming rate, with thousands of cases of online fraud, identity theft, and data breaches reported daily.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Navigating these complex digital waters requires more than just technical know-how; it demands specialized legal expertise. <strong>Cyber law</strong> is a niche yet critical field that governs the legal aspects of the internet and technology. Whether you are an individual facing online harassment or a corporation dealing with a massive data breach, the consequences can be devastating without proper legal guidance.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we pride ourselves on being at the forefront of cyber jurisprudence in India. Our team of expert <strong>cyber lawyers</strong> combines deep legal knowledge with technical acumen to provide robust protection for your digital rights. We understand that cyber crimes move fast, and our legal strategies are designed to be equally agile and effective.
                  </p>
                </section>

                {/* What is Cyber Law */}
                <section id="what-is-cyber-law" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Cyber Law?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Cyber law is the legal framework that deals with the internet, cyberspace, and their respective legal issues. It covers a broad area, encompassing freedom of expression, access to and usage of the internet, and online privacy."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Cyber law, also known as Internet Law or IT Law, is the part of the legal system that deals with the internet, cyberspace, and their respective legal issues. In India, the primary legislation governing this domain is the <strong>Information Technology Act, 2000</strong> (amended in 2008), along with various rules and the newly introduced Digital Personal Data Protection Act, 2023.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The scope of cyber law is vast and constantly evolving. It is not limited to just catching hackers. It involves:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Cyber Crimes:</strong> Offenses like hacking, phishing, cyber stalking, and denial of service attacks.</li>
                    <li><strong>Electronic Commerce:</strong> Legal recognition of electronic records and digital signatures, ensuring the validity of online contracts.</li>
                    <li><strong>Intellectual Property:</strong> Protecting copyrights, trademarks, and patents in the digital space (e.g., software piracy, domain name disputes).</li>
                    <li><strong>Data Protection and Privacy:</strong> Safeguarding personal and sensitive data of individuals from unauthorized access and misuse.</li>
                  </ul>
                </section>

                {/* Our Services */}
                <section id="our-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Comprehensive Cyber Law Services</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We offer a full spectrum of legal services tailored to the unique challenges of the digital world. Our clients range from individuals and startups to large multinational corporations.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Cyber Crime Defense & Prosecution</h3>
                      <p className="text-gray-700">
                        We represent victims of cyber crimes in filing FIRs and pursuing cases in court. Conversely, we also provide defense representation for individuals wrongfully accused of cyber offenses, ensuring their rights are protected during investigations and trials.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Online Fraud & Financial Recovery</h3>
                      <p className="text-gray-700">
                        Victims of phishing, UPI fraud, credit card fraud, and investment scams need immediate action. We assist in freezing fraudulent accounts, coordinating with banks, and obtaining court orders for the release of funds.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Data Privacy & Compliance</h3>
                      <p className="text-gray-700">
                        With the new DPDP Act, compliance is non-negotiable. We help businesses draft privacy policies, terms of service, and data processing agreements. We conduct audits to ensure your business meets all regulatory standards.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Social Media & Defamation</h3>
                      <p className="text-gray-700">
                        Online reputation is a valuable asset. We handle cases of cyber defamation, cyber bullying, and revenge porn. We take legal action to remove offensive content and seek damages for the harm caused to your reputation.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">E-Commerce & Fintech Law</h3>
                      <p className="text-gray-700">
                        We advise e-commerce platforms and fintech companies on regulatory compliance, payment gateway regulations, and consumer protection laws in the digital space.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Digital Evidence Management</h3>
                      <p className="text-gray-700">
                        We guide clients on the proper collection and preservation of digital evidence (emails, chats, logs) to ensure it is admissible in court under Section 65B of the Evidence Act.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Placeholder for Part 2 */}
                {/* Types of Cyber Crimes */}
                <section id="cyber-crimes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Types of Cyber Crimes We Handle</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Cyber criminals are constantly evolving their methods. Our team stays ahead of the curve by understanding the technical and legal nuances of various cyber offenses.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">1. Hacking and Unauthorized Access</h3>
                      <p className="text-gray-700">
                        Hacking involves gaining unauthorized access to a computer system or network. Whether it is a website defacement, server breach, or email hacking, these acts are punishable under Section 66 of the IT Act. We help individuals and businesses prosecute hackers and recover compromised data.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2. Phishing and Vishing</h3>
                      <p className="text-gray-700">
                        Phishing (via email) and Vishing (via voice calls) are social engineering attacks designed to steal sensitive information like passwords and credit card numbers. These are among the most common financial frauds in India. Our team works with cyber cells to trace the perpetrators and recover lost funds.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">3. Identity Theft</h3>
                      <p className="text-gray-700">
                        Identity theft occurs when someone steals your personal information to commit fraud or other crimes in your name. This can ruin your credit score and reputation. We assist victims in clearing their names and taking legal action against the identity thieves under Section 66C of the IT Act.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">4. Cyber Stalking and Harassment</h3>
                      <p className="text-gray-700">
                        The anonymity of the internet often emboldens harassers. Cyber stalking involves persistent online harassment that causes fear or distress. We help victims obtain restraining orders and file criminal complaints under Section 354D of the IPC and Section 67 of the IT Act.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">5. Ransomware Attacks</h3>
                      <p className="text-gray-700">
                        Ransomware is malicious software that encrypts a victim's data and demands payment for the decryption key. This is a major threat to businesses. We advise on the legal implications of ransomware payments, data breach notifications, and liability management.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">6. Source Code Theft</h3>
                      <p className="text-gray-700">
                        For software companies, source code is their most valuable asset. Theft of source code by employees or competitors is a serious offense. We help in filing civil suits for injunctions and damages, as well as criminal complaints for data theft.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Legal Framework: IT Act & Beyond</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Understanding the laws that govern cyberspace is crucial for effective legal representation. The primary statute is the <strong>Information Technology Act, 2000</strong>, which provides the legal recognition for electronic transactions and defines cyber crimes.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Sections of the IT Act, 2000</h3>
                  <div className="overflow-x-auto mb-8">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-3 px-6 text-left font-bold text-gray-700 border-b">Section</th>
                          <th className="py-3 px-6 text-left font-bold text-gray-700 border-b">Offense / Provision</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-3 px-6 border-b text-gray-700">Section 43</td>
                          <td className="py-3 px-6 border-b text-gray-700">Penalty for damage to computer, computer system, etc. (Civil Liability)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-6 border-b text-gray-700">Section 65</td>
                          <td className="py-3 px-6 border-b text-gray-700">Tampering with computer source documents</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-6 border-b text-gray-700">Section 66</td>
                          <td className="py-3 px-6 border-b text-gray-700">Computer related offenses (Hacking)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-6 border-b text-gray-700">Section 66C</td>
                          <td className="py-3 px-6 border-b text-gray-700">Punishment for identity theft</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-6 border-b text-gray-700">Section 66D</td>
                          <td className="py-3 px-6 border-b text-gray-700">Punishment for cheating by personation by using computer resource</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-6 border-b text-gray-700">Section 67</td>
                          <td className="py-3 px-6 border-b text-gray-700">Punishment for publishing or transmitting obscene material in electronic form</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Digital Personal Data Protection Act, 2023 (DPDP Act)</h3>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The newly enacted DPDP Act is a game-changer for data privacy in India. It imposes strict obligations on 'Data Fiduciaries' (entities that process data) to process personal data lawfully. It grants 'Data Principals' (individuals) rights to access, correct, and erase their data. Non-compliance can result in penalties of up to ₹250 crores. Our team is fully equipped to guide businesses through this new regulatory landscape.
                  </p>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach to Cyber Legal Cases</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Cyber cases are unique because they require a blend of legal strategy and technical investigation. Our process is designed to secure the best possible outcome for our clients.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Initial Consultation & Assessment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We begin by understanding the technical details of the incident. Whether it's a fraud or a data breach, we assess the extent of the damage and identify the relevant legal provisions. We also advise on immediate steps to mitigate further loss (e.g., blocking cards, changing passwords).
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Evidence Collection & Preservation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          In cyber law, evidence is volatile. We guide you on how to preserve digital evidence such as IP addresses, server logs, screenshots, and email headers. We work with forensic experts to create a mirror image of the evidence to ensure its integrity for court proceedings.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Filing Complaints & Legal Notices</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We draft and file comprehensive complaints with the Cyber Crime Cell and local police stations. For civil matters, we send legal notices to the opposing parties or intermediaries (like social media platforms) demanding action, such as taking down defamatory content or unfreezing accounts.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Litigation & Representation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our lawyers represent you in various forums, including the Adjudicating Officer (for compensation claims), Magistrates Courts (for criminal trials), High Courts, and the Supreme Court. We fight aggressively to ensure justice is served and your rights are upheld.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions for Cyber Law?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Cyber law is complex and constantly changing. You need a legal partner who is not just a lawyer, but a technocrat. Here is why we are the preferred choice for cyber legal services in India:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💻</div>
                      <h3 className="font-bold text-xl mb-2">Technical Expertise</h3>
                      <p className="text-gray-600">Our lawyers understand the technical language of bits and bytes, enabling effective communication with forensic experts and judges.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚡</div>
                      <h3 className="font-bold text-xl mb-2">Rapid Response</h3>
                      <p className="text-gray-600">In cyber crimes, time is of the essence. We provide immediate legal assistance to freeze funds and stop data leaks.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🌐</div>
                      <h3 className="font-bold text-xl mb-2">Pan-India Presence</h3>
                      <p className="text-gray-600">Cyber crimes often cross state borders. Our network allows us to handle cases and coordinate with authorities across India.</p>
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
                        "I lost 5 lakhs in a UPI fraud. The police were not helpful initially. AMA Legal Solutions drafted a technical complaint and followed up with the cyber cell. Within 2 weeks, the fraudulent account was frozen, and I eventually got my money back."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Malhotra</p>
                          <p className="text-sm text-gray-500">Business Owner, Mumbai</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Our company faced a severe data breach. We were panic-stricken about the legal liabilities. The team at AMA guided us through the compliance process, handled the notifications, and saved us from potential lawsuits. True experts."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sneha Gupta</p>
                          <p className="text-sm text-gray-500">CTO, Tech Startup, Delhi</p>
                        </div>
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
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Digital World Today</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let cyber criminals win. Get expert legal protection from India's leading cyber law firm.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Get Legal Help Now
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      Confidential • Expert • Reliable
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Victim of Cyber Crime?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Immediate action is crucial. Contact our cyber experts now.
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
                      <Link href="/services/intellectual-property-rights" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> IPR Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/criminal-lawyer" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Criminal Defense
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/corporate-lawyers" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Corporate Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/banking-and-finance" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Banking Fraud
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid serviceName="Cyber Law" servicePath="cyber" />
          </div>
        </div>
      </div>
    </>
  );
}