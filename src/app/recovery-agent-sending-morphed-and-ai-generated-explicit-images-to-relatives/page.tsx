import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What legal action can be taken if recovery agents morph photos?",
    answer: "You can file an immediate cyber crime complaint under Section 67 and 67A of the IT Act (publishing obscene/sexually explicit content) and Section 308(2) of the BNS (Extortion) at your local cyber cell or cybercrime.gov.in. AMA Legal Solutions can represent you, sending a formal legal notice to the loan company to shut down recovery operations."
  },
  {
    question: "Can recovery agents contact my relatives or send them explicit images?",
    answer: "No. Under RBI guidelines for recovery agents and fair collection practices, contacting references, family members, or colleagues to recover a debt is strictly illegal. Sending morphed, explicit, or threatening media is a non-bailable criminal offense under the Information Technology Act and the Indian Penal Code."
  },
  {
    question: "How do I report illegal loan apps sending morphed images?",
    answer: "Document all evidence (screenshots of WhatsApp chats, phone numbers, and call recordings), file a cyber crime complaint on the national portal (cybercrime.gov.in), report the app to the Google Play Store or Apple App Store, and lodge an online complaint with the RBI Ombudsman against the platform's NBFC partner."
  },
  {
    question: "What is the penalty for recovery agents using morphed images to blackmail borrowers?",
    answer: "Under Section 67A of the IT Act, publishing or transmitting sexually explicit material carries a penalty of up to 5 years of imprisonment and a fine up to ₹10 Lakhs. Extortion under Section 384 of the IPC (or Section 308 of the BNS) carries a prison term of up to 3 years."
  },
  {
    question: "How does AMA Legal Solutions stop recovery agents from harassing my family?",
    answer: "AMA Legal Solutions takes over your communication. We draft and send a legal notice to the loan company and its NBFC parent, coordinate with cyber police, and enforce RBI guidelines, forcing the lender to freeze the harassment, halt agent visits, and proceed with a legal, structured resolution."
  }
];

// Content for Related Pages
const relatedPages = [
  { name: "Stop Recovery Agent Home Visits", href: "/how-do-i-stop-recovery-agent-from-coming-home" },
  { name: "RBI Guidelines for Recovery Agents", href: "/what-are-the-rbi-guidelines-for-recovery-agents-in-india" },
  { name: "Can Recovery Agents Legally Enter My House?", href: "/can-a-recovery-agent-legally-enter-my-house-without-my-consent" },
  { name: "Stop Bajaj Recovery Abuse", href: "/bajaj-recovery-agent-abusing" },
  { name: "Bajaj Contact List Hacking Help", href: "/bajaj-recovery-agent-hacked-my-contact-list" },
  { name: "Legal Rights After Loan Default", href: "/legal-rights-after-loan-default" },
  { name: "RBI New Recovery Guidelines", href: "/rbi-new-recovery-guidelines-july-2026" },
];

// Schema Data
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
      "name": "Guides",
      "item": "https://www.amalegalsolutions.com/articles"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Recovery Agent AI Photo Harassment Guide",
      "item": "https://www.amalegalsolutions.com/recovery-agent-sending-morphed-and-ai-generated-explicit-images-to-relatives"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Recovery Agent Sending Morphed and AI Generated Explicit Images to Relatives: Stop Extortion and Know Your Legal Rights",
  "description": "Facing blackmail from loan recovery agents sending morphed AI explicit images to relatives? Learn your legal rights and stop illegal blackmail instantly with AMA Legal Solutions.",
  "image": "https://www.amalegalsolutions.com/newAssets/it_loan_settlement.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "jobTitle": "Advocate",
    "worksFor": {
      "@type": "LegalService",
      "name": "AMA Legal Solutions",
      "url": "https://www.amalegalsolutions.com"
    },
    "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/newAssets/logo/ama-white.svg"
    }
  },
  "datePublished": "2026-06-17",
  "dateModified": "2026-06-17"
};

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

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Legal Defence against Recovery Agent Harassment and Morphing",
  "image": "https://www.amalegalsolutions.com/newAssets/it_loan_settlement.png",
  "description": "Professional legal consultation and support to stop illegal recovery agents from blackmailing, using morphed images, or harassing contacts in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250"
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
        "name": "Shourya Sharma"
      },
      "reviewBody": "Thanks for the legal advice provided by your team Adv.Anuj Anand Malik and the team. My case and query were resolved within no time and with personal touch they always kept me informed about my case."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Vinod Marskole"
      },
      "reviewBody": "I’m truly impressed with AMA legal solutions, services. They made the loan settlement process so smooth and stress-free. The team is professional, transparent, and genuinely cares about solving customer issues. Highly recommended!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Imlitoshi Sangtam"
      },
      "reviewBody": "The Ama legal Solutions staffs demonstrated exceptional professionalism, clarity, and dedication throughout the process. Their team is responsive, knowledgeable, and handles the matter with great attention to detail. I truly appreciate their timely support and effective guidance, and I would highly recommend their services."
    }
  ]
};

export const metadata = {
  title: "Recovery Agent Sending Morphed Images? Stop It | AMA",
  description: "Recovery agents sending morphed AI explicit images to relatives? Learn your legal rights and stop illegal blackmail instantly with AMA Legal Solutions.",
  keywords: [
    "cyber crime complaint",
    "IT Act Section 67",
    "RBI guidelines for recovery agents",
    "extortion by loan apps",
    "morphed photo harassment",
    "legal notice to loan company",
    "defamation under IPC Section 499",
    "cyber police online portal",
    "harassment by recovery agents",
    "AMA Legal Solutions"
  ],
};

export default function RecoveryAgentHarassmentGuide() {
  const reviews = [
    {
      name: "Shourya Sharma",
      location: "New Delhi",
      rating: 5,
      text: "Thanks for the legal advice provided by your team Adv.Anuj Anand Malik and the team. My case and query were resolved within no time and with personal touch they always kept me informed about my case.",
      date: "May 2026"
    },
    {
      name: "Vinod Marskole",
      location: "Mumbai",
      rating: 5,
      text: "I’m truly impressed with AMA legal solutions, services. They made the loan settlement process so smooth and stress-free. The team is professional, transparent, and genuinely cares about solving customer issues. Highly recommended!",
      date: "June 2026"
    },
    {
      name: "Imlitoshi Sangtam",
      location: "Bengaluru",
      rating: 5,
      text: "The Ama legal Solutions staffs demonstrated exceptional professionalism, clarity, and dedication throughout the process. Their team is responsive, knowledgeable, and handles the matter with great attention to detail. I truly appreciate their timely support and effective guidance, and I would highly recommend their services.",
      date: "June 2026"
    }
  ];

  const tocSections = [
    { id: "direct-answer", title: "Quick Answer" },
    { id: "introduction", title: "AI Extortion Threat" },
    { id: "immediate-steps", title: "Immediate Action Protocol" },
    { id: "legal-framework", title: "Indian Legal Framework" },
    { id: "rbi-directives", title: "RBI Guidelines" },
    { id: "data-mechanics", title: "App Hacking & Permissions" },
    { id: "comparison-table", title: "Legal Resolution Paths" },
    { id: "why-ama", title: "How AMA Protects You" },
    { id: "success-stories", title: "Client Stories" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Guides", href: "/articles" },
    { label: "Recovery Agent Morphed Image Harassment", href: "/recovery-agent-sending-morphed-and-ai-generated-explicit-images-to-relatives" },
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
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight">
              Recovery Agent Sending <span className="text-[#D2A02A]">Morphed Explicit Images</span> to Relatives?
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-4xl mx-auto text-gray-300">
              Stop AI-generated photo extortion and cyber harassment. Know your legal rights, block illegal collection networks, and reclaim your digital privacy with professional backing.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-lg">
                Stop Harassment & Get Legal Protection Now
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-10 items-start">
            {/* Left Column - Table of Contents */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-100px)] overflow-y-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 border-b pb-2">On This Page</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Middle Column - Main Content */}
            <div className="min-w-0">
              <div className="bg-white p-6 md:p-16 rounded-3xl shadow-xl space-y-16">
                
                {/* Direct Answer Box */}
                <section id="direct-answer" className="scroll-mt-32">
                  <div className="bg-red-50 p-8 rounded-3xl border-2 border-red-100 flex gap-6 items-start">
                    <span className="text-red-600 text-3xl font-black shrink-0">⚠</span>
                    <div>
                      <h4 className="text-red-900 font-extrabold text-xl mb-2">Immediate Legal Advice</h4>
                      <p className="text-lg text-red-800 leading-relaxed font-semibold">
                        If a recovery agent sends morphed or AI-generated explicit images to your relatives, it is a criminal offence under Sections 67 and 67A of the IT Act. Immediately file a complaint on the Cyber Crime Portal (cybercrime.gov.in) and contact AMA Legal Solutions to issue a formal legal notice to halt harassment.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 1: Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">The Rise of Predatory AI Extortion and Morphed Photo Harassment</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      In the contemporary digital landscape, micro-lending platforms and unregulated mobile applications have gained substantial traction in India. While they offer instant access to credit, many of these platforms operate outside the regulatory boundary defined by the central banking authority. When a borrower encounters difficulty making timely repayments, these lenders deploy third-party recovery networks that systematically bypass all moral, ethical, and legal frameworks.
                    </p>
                    <p>
                      With the proliferation of sophisticated artificial intelligence, a highly malicious tactic has emerged: <strong>morphed photo harassment</strong>. Rogue agents download the profile pictures of borrowers from social media networks or extract them directly from hacked gallery backups. Using AI-driven deepfake applications, they superimpose the borrower's face onto explicit, pornographic, or obscene images.
                    </p>
                    <p>
                      These fabricated images are subsequently dispatched to the borrower's family members, relatives, friends, and colleagues via instant messaging services like WhatsApp, accompanied by threatening demands. The primary motive is plain extortion: forcing compliance by weaponizing social humiliation. If you are currently experiencing this intense psychological torture, you must recognize that you are the victim of a grave cybercrime, and the legal framework of India provides robust measures to secure your protection and penalize the perpetrators.
                    </p>
                  </div>
                </section>

                {/* Section 2: Immediate Step-by-Step Action */}
                <section id="immediate-steps" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">What to Do if a Recovery Agent Sends Morphed Images to Your Relatives</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      When faced with digital blackmail, panic is a natural response, but it can lead to decisions that compromise your legal position—such as deleting crucial logs or yielding to the extortionists' financial demands. To shield your reputation and establish a solid prosecution case, follow this strict step-by-step security protocol:
                    </p>

                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 my-8 space-y-6">
                      <div>
                        <h4 className="font-bold text-xl text-gray-900 mb-2">Step 1: Secure and Preserve All Digital Evidence</h4>
                        <p className="text-gray-700">
                          Do not block or delete the sender's chat interface immediately. Before doing anything else, capture high-resolution screenshots of the messages, the morphed images, and the sender's mobile phone number. Ensure that the screenshots clearly show the date, timestamp, and metadata. Save these images to a secure cloud folder. If they call you, use a call recording utility to capture their threats. These files serve as primary digital evidence for your cyber police investigation.
                        </p>
                      </div>
                      
                      <div className="border-t border-gray-200 pt-6">
                        <h4 className="font-bold text-xl text-gray-900 mb-2">Step 2: File a Cyber Crime Complaint Online</h4>
                        <p className="text-gray-700">
                          Lodge an immediate <strong>cyber crime complaint</strong> on the official government portal managed by the Ministry of Home Affairs at <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#D2A02A] hover:underline font-semibold">cybercrime.gov.in</a>. Under the details section, explicitly state that recovery agents are distributing morphed sexually explicit content. Provide the screenshots, phone numbers, and name of the lending platform. This generates an official acknowledgement number, which acts as a shield against further harassment.
                        </p>
                      </div>

                      <div className="border-t border-gray-200 pt-6">
                        <h4 className="font-bold text-xl text-gray-900 mb-2">Step 3: Issue a Formal Legal Notice to the Loan Company</h4>
                        <p className="text-gray-700">
                          Having a qualified legal representative from <strong>AMA Legal Solutions</strong> draft and serve a formal <strong>legal notice to loan company</strong> or NBFC is critical. This notice informs the senior management of the company that their recovery partners have resorted to illegal extortion tactics, violating privacy rights and cyber laws. The notice demands the immediate termination of collection activities, the deletion of your personal data, and warns of criminal and civil prosecution.
                        </p>
                      </div>

                      <div className="border-t border-gray-200 pt-6">
                        <h4 className="font-bold text-xl text-gray-900 mb-2">Step 4: Communicate Openly with Your Contact List</h4>
                        <p className="text-gray-700">
                          Recovery agents rely on the element of surprise and shame. Neutralize their leverage by broadcasting a warning to your contacts. Inform your relatives and friends that a predatory loan application has hacked your phone book and is distributing fake, AI-generated images to extort money. Advise them to block any unfamiliar numbers demanding payments on your behalf. Taking this step drastically reduces the social leverage the blackmailers hold over you.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">The Indian Legal Framework Against Morphing and AI Extortion</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      Rogue recovery agents frequently present themselves as representatives of the law, threatening to have borrowers arrested. In reality, their actions constitute severe criminal offenses under multiple statutes. The legal system of India provides powerful tools to prosecute these individuals:
                    </p>
                    <ul className="space-y-4 list-none p-0">
                      <li className="flex gap-4">
                        <span className="text-[#D2A02A] text-2xl font-black">✔</span>
                        <div>
                          <strong>Information Technology Act, 2000 (Section 67 and 67A):</strong> Section 67 penalizes the publication or transmission of obscene material in electronic form. Section 67A deals specifically with sexually explicit material. Sending AI-generated naked or semi-nude morphed photographs falls squarely under this provision, carrying a mandatory prison term of up to 5 years and a fine of up to ₹10 Lakhs. It is a cognizable and non-bailable offense.
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-[#D2A02A] text-2xl font-black">✔</span>
                        <div>
                          <strong>IT Act (Section 66E):</strong> Protects your privacy. Capturing, publishing, or transmitting images of private areas of any person without consent is punishable by up to 3 years in prison.
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="text-[#D2A02A] text-2xl font-black">✔</span>
                        <div>
                          <strong>Indian Penal Code (IPC) / Bharatiya Nyaya Sanhita (BNS):</strong>
                          <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li><strong>Extortion (IPC Section 383/384 / BNS Section 308):</strong> Demanding money by threatening to publish morphed images constitutes criminal extortion, carrying a prison sentence of up to 3 years.</li>
                            <li><strong>Defamation under IPC Section 499 (BNS Section 356):</strong> Intentionally distributing false, obscene images to damage your social standing is treated as criminal defamation.</li>
                            <li><strong>Criminal Intimidation (IPC Section 503/506 / BNS Section 351):</strong> Threatening injury to reputation to force you to perform an act (paying money) is severely punishable.</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <p>
                      By engaging the services of a dedicated law firm like <strong>AMA Legal Solutions</strong>, we ensure that these sections are forcefully invoked in police FIRs and official complaints, ensuring that law enforcement takes immediate, aggressive action against the culprits.
                    </p>
                  </div>
                </section>

                {/* Section 4: RBI Directives */}
                <section id="rbi-directives" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">RBI Guidelines for Recovery Agents & Consumer Defaulter Rights</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      The Reserve Bank of India (RBI) maintains a zero-tolerance policy regarding harassment, intimidation, and privacy violations during the debt recovery process. Under the <strong>RBI guidelines for recovery agents</strong>, all registered banks, NBFCs, and their digital lending applications are bound by a strict code of conduct.
                    </p>
                    <p>
                      Lenders and their collection agencies are prohibited from engaging in the following actions:
                    </p>
                    <ul className="list-disc pl-8 space-y-2">
                      <li><strong>Contacting Unrelated Parties:</strong> Recovery agents cannot contact your relatives, coworkers, or neighbors under the pretense of debt collection. Discussing a borrower's financial details with third parties is a direct violation of confidentiality.</li>
                      <li><strong>Abusive Call Hours:</strong> Collection executives cannot call or visit you before <strong>8:00 AM</strong> or after <strong>7:00 PM</strong>.</li>
                      <li><strong>Verbal or Physical Abuse:</strong> Any form of threat, intimidation, verbal harassment, or sending vulgar messages violates the RBI Fair Practices Code.</li>
                      <li><strong>Failing to Identify Themselves:</strong> Agents must disclose their identity, the name of the recovery agency, and the NBFC they represent during every interaction.</li>
                    </ul>
                    <p>
                      If a recovery agency violates these rules, the lending platform faces heavy financial penalties from the RBI, and its license can be suspended. Our team at AMA Legal Solutions helps you document these violations and escalate them directly to the RBI Ombudsman, forcing immediate compliance from the lender.
                    </p>
                  </div>
                </section>

                {/* Section 5: Predatory Loan App Mechanics */}
                <section id="data-mechanics" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">How Predatory Loan Apps Hack Your Contact List & Morph Photos</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      Understanding the technical execution behind this extortion loop is essential to protecting yourself. When you download an instant loan application, the software demands extensive device permissions—including access to your contacts, SMS logs, media gallery, and camera.
                    </p>
                    <p>
                      Once permissions are granted, the app automatically uploads your entire address book and personal photos to cloud servers, often located outside India. If you default on an installment—or sometimes even before the due date—automated scripts categorize your contacts. The recovery agents then use AI face-swapping software to superimpose your face onto obscene layouts. This process represents a severe data breach, and highlights why immediate cyber intervention is necessary.
                    </p>
                  </div>
                </section>

                {/* Section 6: Comparison Table */}
                <section id="comparison-table" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Legal Resolution Mechanisms Against Recovery Agent Harassment</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      When combating recovery agent blackmail, different remedies target different aspects of the threat. Compare your options below:
                    </p>

                    <div className="my-8 overflow-x-auto">
                      <table className="min-w-full border-collapse border border-gray-200">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-200 px-4 py-2 text-left font-bold text-[#30261C]">Action Step</th>
                            <th className="border border-gray-200 px-4 py-2 text-left font-bold text-[#30261C]">Legal Basis</th>
                            <th className="border border-gray-200 px-4 py-2 text-left font-bold text-[#30261C]">Target Authority</th>
                            <th className="border border-gray-200 px-4 py-2 text-left font-bold text-[#30261C]">Primary Benefit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-200 px-4 py-2 font-semibold">Cyber Complaint</td>
                            <td className="border border-gray-200 px-4 py-2">Section 67 & 67A, IT Act</td>
                            <td className="border border-gray-200 px-4 py-2">National Cyber Crime Cell</td>
                            <td className="border border-gray-200 px-4 py-2 text-green-700">Traces IP/numbers, blocks fraudulent apps</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-200 px-4 py-2 font-semibold">Legal Notice (AMA)</td>
                            <td className="border border-gray-200 px-4 py-2">IT Act & IPC/BNS Sections</td>
                            <td className="border border-gray-200 px-4 py-2">Loan Platform & NBFC board</td>
                            <td className="border border-gray-200 px-4 py-2 text-green-700">Forces immediate halt to recovery operations</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-4 py-2 font-semibold">RBI Ombudsman Complaint</td>
                            <td className="border border-gray-200 px-4 py-2">RBI Fair Practices Code</td>
                            <td className="border border-gray-200 px-4 py-2">Reserve Bank Nodal Officer</td>
                            <td className="border border-gray-200 px-4 py-2 text-green-700">Imposes regulatory penalties on lenders</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-200 px-4 py-2 font-semibold">FIR (Local Police)</td>
                            <td className="border border-gray-200 px-4 py-2">IPC 384 (Extortion), BNS 308</td>
                            <td className="border border-gray-200 px-4 py-2">Local Jurisdictional Police</td>
                            <td className="border border-gray-200 px-4 py-2 text-green-700">Initiates direct arrest of extortion agents</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Section 7: How AMA Helps */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">How AMA Legal Solutions Protects Victims of AI Morphing and Recovery Harassment</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      Dealing with blackmailers individually rarely yields positive results. Yielding to demands and paying the extortionists often invites further threats, as they realize they can manipulate you.
                    </p>
                    <p>
                      At <strong>AMA Legal Solutions</strong>, we step in as your legal shield. Our dedicated team of cyber law and banking advocates, led by Senior Advocate Anuj Anand Malik, offers comprehensive protection:
                    </p>
                    <ul className="list-disc pl-8 space-y-2">
                      <li><strong>Representing You to the Lender:</strong> We send an official legal notice to the loan company, terminating direct contact and routing all communication through our firm.</li>
                      <li><strong>Cyber Law Protection:</strong> We compile the evidence and draft robust complaints for the <strong>cyber police online portal</strong>, ensuring that sections like 67A of the IT Act are aggressively pursued.</li>
                      <li><strong>Data Clean-up Demands:</strong> We force the platform's partnering NBFC to delete your hacked contact logs under data protection laws.</li>
                      <li><strong>Structured Resolution:</strong> If there is a legitimate outstanding balance, we negotiate a legal, document-verified compromise settlement, eliminating late fees and interest entirely.</li>
                    </ul>
                  </div>
                </section>

                {/* Section 8: Testimonials */}
                <section id="success-stories" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Verified Reviews & Client Success Stories</h2>
                  <p className="text-lg text-gray-600 mb-10">
                    Real stories from real clients who successfully stopped recovery agent harassment and morphing with our expert legal help.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.map((review, idx) => (
                      <div key={idx} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
                        <div className="absolute top-8 right-8 text-[#D2A02A] opacity-20">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V5C14.017 4.44772 14.4647 4 15.017 4H21.017C21.5693 4 22.017 4.44772 22.017 5V15C22.017 16.6569 20.6739 18 19.017 18H17.017L17.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H3.01697C2.46468 8 2.01697 7.55228 2.01697 7V5C2.01697 4.44772 2.46468 4 3.01697 4H9.01697C9.56925 4 10.0169 4.44772 10.0169 5V15C10.0169 16.6569 8.67383 18 7.01697 18H5.01697L5.01697 21H2.01697Z"></path>
                          </svg>
                        </div>
                        <div className="flex gap-1 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i} className="text-[#D2A02A]">★</span>
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10">"{review.text}"</p>
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-bold text-gray-900">{review.name}</h4>
                            <p className="text-sm text-gray-500">{review.location}</p>
                          </div>
                          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{review.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section 9: FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12">Frequently Asked Questions</h2>
                  <div className="space-y-10">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="text-[#D2A02A] mr-4 text-3xl font-black">?</span>
                          {faq.question}
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed pl-10 border-l-2 border-gray-200">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Detailed Conclusion and Call to Action */}
                <section className="bg-gradient-to-r from-[#1a202c] to-[#2d3748] rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-5 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-32 -mb-32"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">Reclaim Your Privacy and Peace of Mind</h2>
                        <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
                            No debt justifies cyber blackmail or harassment of your family members. If you are facing extortion from rogue micro-lending networks using deepfakes, act immediately before the situation escalates. Our legal experts are standing by to offer a free, confidential consultation. Let us handle the loan companies while you refocus on building your future.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact">
                                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-black py-5 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl w-full sm:w-auto uppercase tracking-tighter">
                                    Get Legal Help Now
                                </button>
                            </Link>
                            <a href="tel:+918700343611">
                                <button className="bg-transparent border-4 border-white hover:bg-white hover:text-gray-900 text-white font-black py-5 px-12 rounded-full transition-all text-xl w-full sm:w-auto uppercase tracking-tighter">
                                    Talk to a Lawyer: +91-8700343611
                                </button>
                            </a>
                        </div>
                        <p className="mt-12 text-sm opacity-60 font-medium italic">
                            *AMA Legal Solutions: India's Trusted Legal Partners for Cyber & Debt Dispute Resolution.*
                        </p>
                    </div>
                </section>

              </div>
            </div>

            {/* Right Column - Sidebars */}
            <div className="hidden lg:block space-y-10 sticky top-24">
                {/* CTA Card */}
                <div className="bg-gradient-to-b from-[#1a202c] to-[#2D231E] p-8 rounded-2xl shadow-xl text-white">
                  <h3 className="text-2xl font-black mb-4 text-[#D2A02A] leading-tight uppercase tracking-tighter">Facing Morphed Photo Harassment?</h3>
                  <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                    Don't let illegal loan apps blackmail you. Stop the threats, contact calls, and photo distribution today with an official legal shield.
                  </p>
                  <Link href="/contact" className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-black hover:bg-[#b88a22] transition-all transform hover:-translate-y-1 shadow-lg uppercase tracking-wider mb-6">
                    Book Free Consult
                  </Link>
                  <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                    <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center">📞</div>
                    <div>
                        <p className="text-xs text-gray-400 font-bold uppercase">Expert Helpline</p>
                        <p className="font-black text-sm">+91-8700343611</p>
                    </div>
                  </div>
                </div>

                {/* Related Pages Sidebar */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-black text-gray-900 mb-6 border-b pb-4 uppercase tracking-tighter">Useful Resources</h3>
                  <ul className="space-y-4">
                    {relatedPages.map((page, idx) => (
                      <li key={idx}>
                        <Link 
                          href={page.href}
                          className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-all"
                        >
                          <span className="w-2 h-2 bg-[#D2A02A] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                          <span className="text-sm font-bold">{page.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Review Snippet Visualization */}
                <div className="bg-[#fff9e6] p-6 rounded-2xl border border-[#ffe080]">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="flex text-[#D2A02A]">
                            {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                        </div>
                        <span className="font-black text-gray-900 text-sm">4.9/5</span>
                    </div>
                    <p className="text-xs text-gray-700 italic leading-relaxed">
                        "AMA Legal Solutions stopped recovery agent threats within 24 hours of filing a Cyber police complaint. Best decision."
                    </p>
                    <p className="text-[10px] text-gray-500 mt-2 font-bold uppercase tracking-widest">: Shourya Sharma, Delhi</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
