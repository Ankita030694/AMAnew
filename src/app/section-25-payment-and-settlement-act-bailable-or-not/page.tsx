import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is Section 25 of the Payment and Settlement Systems Act bailable?",
    answer: "Yes, an offence under Section 25 of the Payment and Settlement Systems Act, 2007 is bailable. This means that if you are summoned by a court in a case filed under this section, you have a legal right to be granted bail. You will typically be required to furnish a personal bond and a surety as directed by the court. Since it is a bailable offence, the police cannot keep you in custody once the bail conditions are met."
  },
  {
    question: "What is Section 25 of the Payment and Settlement Systems Act?",
    answer: "Section 25 of the Payment and Settlement Systems Act, 2007 (PSSA) is a legal provision that deals with the dishonour of electronic funds transfers. It applies when an electronic payment, such as a UPI transaction, NEFT, RTGS, or ECS mandate, fails due to insufficient funds in the account or if the amount exceeds the limit set with the bank. It is the electronic equivalent of Section 138 of the Negotiable Instruments Act, which covers cheque bounce cases."
  },
  {
    question: "Can I be arrested without a warrant under Section 25 PSSA?",
    answer: "No, the offence under Section 25 of the PSSA is non-cognizable. This means that the police do not have the authority to arrest you without a warrant issued by a Magistrate. The legal process begins when the payee files a private criminal complaint in court. The court then issues a summons for you to appear and present your side."
  },
  {
    question: "What is the punishment for an offence under Section 25 PSSA?",
    answer: "If convicted under Section 25 of the PSSA, the offender can be sentenced to imprisonment for a term that may extend to two years, or a fine that may extend to twice the amount of the electronic funds transfer, or both. The severity of the punishment often depends on the facts of the case and whether it is a first-time offence."
  },
  {
    question: "Is a legal notice mandatory before filing a case under Section 25?",
    answer: "Yes, sending a formal legal notice is a mandatory procedural requirement. The beneficiary (payee) must send a written notice to the person who initiated the transfer within 30 days of receiving information about the dishonour from the bank. The initiator then has 15 days from the receipt of the notice to make the payment. A court complaint can only be filed if the payment is not made within this 15-day grace period."
  },
  {
    question: "Does Section 25 apply to UPI and mobile wallet transactions?",
    answer: "Yes, Section 25 of the PSSA covers all forms of electronic funds transfers initiated through systems regulated by the Reserve Bank of India. This includes UPI, NEFT, IMPS, RTGS, and even automated ECS mandates used for loan EMIs or insurance premiums."
  },
  {
    question: "What are the common defenses in a Section 25 PSSA case?",
    answer: "Common defenses include proving that the transfer was not intended to discharge a legally enforceable debt (e.g., it was a gift or a loan to a friend without a contract), showing that the mandatory legal notice was not received or was sent beyond the 30-day limit, or demonstrating that the payment was actually made within the 15-day notice period."
  },
  {
    question: "Can a Section 25 case be settled out of court?",
    answer: "Yes, offences under the Payment and Settlement Systems Act are compoundable. This means the parties can reach a settlement at any stage of the proceedings, even after the case has been filed in court. Often, the court encourages parties to resolve the matter through mediation or Lok Adalat."
  },
  {
    question: "What is the difference between Section 138 NI Act and Section 25 PSSA?",
    answer: "The primary difference lies in the mode of payment. Section 138 of the Negotiable Instruments Act specifically deals with the dishonour of physical cheques. Section 25 of the PSSA deals with the dishonour of electronic fund transfers. However, the legal principles, procedural requirements (like the notice period), and punishments are almost identical for both."
  },
  {
    question: "How long does a Section 25 case usually last in Indian courts?",
    answer: "The duration of a Section 25 case can vary significantly depending on the court's workload and the complexity of the evidence. On average, such cases can take anywhere from 1 to 3 years to reach a conclusion. However, many cases are settled much earlier through negotiations between the parties."
  }
];

// Review data
const reviews = [
  {
    author: "Amit Mehra",
    rating: 5,
    body: "I received a notice under Section 25 for a failed UPI payment due to a technical error in my bank account. The team at AMA Legal Solutions helped me draft a perfect reply and cleared the misunderstanding with the payee. Their knowledge of banking laws is exceptional."
  },
  {
    author: "Sneha Kapur",
    rating: 5,
    body: "Excellent legal support! I was worried about being arrested for an ECS bounce, but they explained that it is a bailable offence and handled the court summons for me. I highly recommend their services for anyone facing banking litigation."
  },
  {
    author: "Vikram Rathore",
    rating: 5,
    body: "Professional and transparent. They managed my Section 25 case in Delhi and got it settled in Lok Adalat within a few months. Saved me from a lot of stress and potential legal consequences."
  },
  {
    author: "Pooja Sharma",
    rating: 4,
    body: "Very helpful advice regarding the bailable nature of PSSA offences. They walked me through the entire bail process and ensured I had all my documents ready. Great experience overall."
  },
  {
    author: "Rajesh Goel",
    rating: 5,
    body: "The best lawyers for electronic payment disputes. They knew the latest judgments on Section 25 and used them effectively in my defense. Truly expert representation."
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
      "name": "Expertise",
      "item": "https://www.amalegalsolutions.com/expertise"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Section 25 PSSA Bailable or Not",
      "item": "https://www.amalegalsolutions.com/section-25-payment-and-settlement-act-bailable-or-not"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Section 25 Payment and Settlement Act: Bailable or Not? Complete Legal Guide",
  "description": "Is Section 25 of the Payment and Settlement Systems Act bailable? Learn about the legal process, punishment, and rights of the accused in electronic payment dishonour cases.",
  "image": "https://www.amalegalsolutions.com/services/banking-and-finance.png",
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
  "datePublished": "2024-05-08",
  "dateModified": "2024-05-08"
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
  "name": "Section 25 PSSA Legal Consultancy",
  "image": "https://www.amalegalsolutions.com/services/banking-and-finance.png",
  "description": "Expert legal representation for cases under Section 25 of the Payment and Settlement Systems Act.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  },
  "review": reviews.map(rev => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": rev.rating.toString()
    },
    "author": {
      "@type": "Person",
      "name": rev.author
    },
    "reviewBody": rev.body
  }))
};

export const metadata = {
  title: "Section 25 Payment and Settlement Act Bailable or Not? | #1 Guide",
  description: "Find out if Section 25 of the Payment and Settlement Systems Act is bailable. Expert legal analysis on electronic funds transfer dishonour, punishment, and your rights.",
  keywords: [
    "section 25 payment and settlement act bailable or not",
    "is section 25 pssa bailable",
    "section 25 payment and settlement act punishment",
    "electronic funds transfer dishonour india",
    "pssa section 25 legal notice",
    "difference between section 138 ni act and section 25 pssa",
    "electronic payment bounce case lawyer",
    "section 25 pssa trial procedure",
    "can i be arrested for ecs bounce",
    "payment and settlement systems act 2007 section 25"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/section-25-payment-and-settlement-act-bailable-or-not',
  },
};

export default function PSSAPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "bailable-nature", title: "Is it Bailable?" },
    { id: "key-provisions", title: "Key Legal Provisions" },
    { id: "legal-process", title: "Process & Procedure" },
    { id: "comparison", title: "Sec 25 PSSA vs Sec 138 NI Act" },
    { id: "punishment", title: "Punishment & Fine" },
    { id: "defenses", title: "Common Defenses" },
    { id: "judgments", title: "Important Judgments" },
    { id: "faqs", title: "FAQs" },
    { id: "reviews", title: "Client Reviews" },
    { id: "resources", title: "Helpful Resources" }
  ];

  const breadcrumbItems = [
    { label: "Expertise", href: "/expertise" },
    { label: "Section 25 PSSA", href: "/section-25-payment-and-settlement-act-bailable-or-not" },
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
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Section 25 Payment and Settlement Act: <span className="text-[#D2A02A]">Bailable or Not?</span>
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-4xl mx-auto text-gray-200">
              Navigate the complexities of electronic funds transfer dishonour with expert legal guidance. Understand your rights, the trial process, and the latest court rulings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                  Get Expert Legal Advice
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                  Call: +91-8700343611
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start mt-6">
            {/* Left Sidebar - TOC */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
              
              <div className="mt-8 bg-[#fdf8e6] p-6 rounded-xl border border-[#D2A02A]/20">
                <h4 className="font-bold text-[#1a202c] mb-3">Legal Consultation</h4>
                <p className="text-sm text-gray-600 mb-4">Facing a Section 25 case? Don't wait for things to escalate. Talk to our experts today.</p>
                <Link href="/contact" className="text-[#D2A02A] font-bold text-sm hover:underline italic">Book Appointment →</Link>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10 bg-white shadow-md rounded-lg">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Introduction to Section 25 of the PSSA, 2007</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In the modern digital era, India has witnessed a monumental shift in how financial transactions are conducted. From high-value business deals to daily grocery purchases, electronic funds transfers (EFT) have become the backbone of our economy. Systems like the National Electronic Funds Transfer (NEFT), Real-Time Gross Settlement (RTGS), Immediate Payment Service (IMPS), and the ubiquitous Unified Payments Interface (UPI) have replaced traditional payment methods for many. However, this digital convenience comes with its own set of legal responsibilities and consequences.
                    </p>
                    <p>
                      The <strong>Payment and Settlement Systems Act, 2007 (PSSA)</strong> was enacted to provide a robust legal framework for the regulation and supervision of payment systems in India. Within this Act, <strong>Section 25</strong> stands as a critical provision designed to protect the integrity of electronic payments. It addresses the serious issue of electronic payment dishonour, which occurs when a transaction is initiated but fails due to reasons like insufficiency of funds.
                    </p>
                    <p>
                      Many individuals and businesses often find themselves in a state of confusion when an electronic payment bounces. The immediate questions that arise are: Is this a criminal offence? Will I be arrested? And most importantly for those seeking legal clarity, <strong>is Section 25 of the Payment and Settlement Act bailable or not?</strong> This comprehensive guide aims to answer these questions in detail, providing you with the necessary legal insight to handle such situations effectively.
                    </p>
                    <p>
                      Understanding Section 25 is not just about knowing the law; it's about understanding your rights as a citizen and a participant in India's digital economy. Whether you are a business owner who has faced a payment failure or an individual who has received a legal notice, this guide will walk you through the nuances of the law, the trial procedure, and the strategic legal defenses available to you.
                    </p>
                  </div>
                </section>

                {/* Bailable Nature */}
                <section id="bailable-nature" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Is Section 25 of the PSSA Bailable or Not?</h2>
                  <div className="bg-[#D2A02A]/10 border-l-8 border-[#D2A02A] p-8 mb-8 rounded-r-2xl">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1a202c] mb-4">The Short Answer: YES, IT IS BAILABLE.</h3>
                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed italic">
                      "Under the current legal framework in India, an offence committed under Section 25 of the Payment and Settlement Systems Act, 2007 is classified as a bailable and non-cognizable offence."
                    </p>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      To understand why Section 25 is bailable, we must look at how criminal offences are categorized in India. The Code of Criminal Procedure (now replaced by the Bharatiya Nagarik Suraksha Sanhita in some contexts, though the principles remain consistent) distinguishes between bailable and non-bailable offences.
                    </p>
                    <p>
                      In a <strong>bailable offence</strong>, the accused has a statutory right to be released on bail. The police or the court cannot deny bail if the accused is willing to provide the necessary sureties and bonds. Because Section 25 is bailable, if a person is summoned to court for a failed electronic payment, they can apply for bail as a matter of right. The court will typically grant bail upon the submission of a personal bond and a surety (someone who guarantees your appearance in court).
                    </p>
                    <p>
                      Furthermore, Section 25 is <strong>non-cognizable</strong>. In simple terms, this means that the police cannot investigate the matter or arrest the accused without a specific warrant from a Magistrate. The process is not like an FIR-based criminal case where the police take immediate action. Instead, the person who was supposed to receive the money (the payee) must file a private criminal complaint directly in the court of a Judicial Magistrate or a Metropolitan Magistrate.
                    </p>
                    <p>
                      This classification is intended to balance the need for penalizing payment failures with the need to protect honest citizens from arbitrary arrest over financial disputes. It recognizes that many payment failures can occur due to genuine financial hardship or even technical glitches, and therefore, immediate incarceration is not deemed necessary before a trial.
                    </p>
                  </div>
                </section>

                {/* Key Provisions */}
                <section id="key-provisions" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Key Legal Provisions of Section 25</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    For a transaction failure to attract the criminal penalties under Section 25, several specific legal criteria must be met. These are known as the "ingredients" of the offence. If any of these are missing, the case may not stand in court.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-all group">
                      <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">1</div>
                      <h4 className="text-xl font-bold mb-4 text-[#1a202c]">Initiation of Transfer</h4>
                      <p className="text-gray-600">The electronic funds transfer must have been initiated by a person from an account maintained by them with a bank or a system provider.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-all group">
                      <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">2</div>
                      <h4 className="text-xl font-bold mb-4 text-[#1a202c]">Insufficiency of Funds</h4>
                      <p className="text-gray-600">The primary reason for the dishonour must be that the amount in the account was insufficient to honor the transfer or exceeded the credit limit.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-all group">
                      <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">3</div>
                      <h4 className="text-xl font-bold mb-4 text-[#1a202c]">Legally Enforceable Debt</h4>
                      <p className="text-gray-600">The transfer must have been made to discharge a legally enforceable debt or liability. Payments for gifts or illegal activities are not covered.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-all group">
                      <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">4</div>
                      <h4 className="text-xl font-bold mb-4 text-[#1a202c]">Notice & Grace Period</h4>
                      <p className="text-gray-600">A mandatory legal notice must be sent within 30 days of dishonour, followed by a 15-day waiting period for the payment to be cleared.</p>
                    </div>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <p>
                      It is important to note that the law creates a <strong>presumption of debt</strong>. This means that if a transaction fails, the court will initially assume that you owed the money for a valid reason. It is the responsibility of the accused to prove otherwise. This is a critical point where an experienced banking lawyer can help you build a solid defense by questioning the validity of the underlying debt.
                    </p>
                  </div>
                </section>

                {/* Legal Process */}
                <section id="legal-process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">The Legal Process: From Bounced Payment to Court</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Understanding the step-by-step procedure can help alleviate the fear of the unknown. The process for Section 25 PSSA is very similar to the cheque bounce procedure under Section 138 of the NI Act.
                  </p>
                  
                  <div className="relative border-l-4 border-[#D2A02A] ml-6 space-y-12">
                    <div className="relative pl-10">
                      <div className="absolute left-[-12px] top-0 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white shadow-md"></div>
                      <h4 className="text-2xl font-bold text-[#1a202c] mb-2">Step 1: Receipt of Bank Memo</h4>
                      <p className="text-gray-700">When an electronic fund transfer fails, the bank or the payment system provider issues a communication (often an email or a bank statement entry) stating the reason for the failure. This is the starting point of the legal timeline.</p>
                    </div>
                    <div className="relative pl-10">
                      <div className="absolute left-[-12px] top-0 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white shadow-md"></div>
                      <h4 className="text-2xl font-bold text-[#1a202c] mb-2">Step 2: Sending the Legal Notice</h4>
                      <p className="text-gray-700">The payee must send a formal legal notice to the person who initiated the payment within 30 days of knowing about the failure. This notice must demand the payment of the amount within 15 days of its receipt. A well-drafted legal notice is essential for a successful prosecution.</p>
                    </div>
                    <div className="relative pl-10">
                      <div className="absolute left-[-12px] top-0 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white shadow-md"></div>
                      <h4 className="text-2xl font-bold text-[#1a202c] mb-2">Step 3: Filing the Complaint</h4>
                      <p className="text-gray-700">If the payment is still not made after the 15-day notice period, the payee has another 30 days to file a formal criminal complaint in the appropriate court. Filing after this deadline requires a special application for condonation of delay.</p>
                    </div>
                    <div className="relative pl-10">
                      <div className="absolute left-[-12px] top-0 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white shadow-md"></div>
                      <h4 className="text-2xl font-bold text-[#1a202c] mb-2">Step 4: Court Summons & Bail</h4>
                      <p className="text-gray-700">The Magistrate will review the complaint and, if satisfied, issue a summons for the accused to appear. This is the stage where you must appear in court and apply for bail. Since the offence is bailable, this is usually a routine procedure if handled by a competent lawyer.</p>
                    </div>
                  </div>
                </section>

                {/* Comparison */}
                <section id="comparison" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Difference Between Section 25 PSSA and Section 138 NI Act</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    While the two provisions are often compared, it is important to know which one applies to your specific situation.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                      <thead>
                        <tr className="bg-[#1a202c] text-white">
                          <th className="p-5 text-left font-bold">Feature</th>
                          <th className="p-5 text-left font-bold">Section 138 NI Act</th>
                          <th className="p-5 text-left font-bold">Section 25 PSSA</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="p-5 font-bold text-[#1a202c]">Mode of Payment</td>
                          <td className="p-5 text-gray-700">Physical Cheques</td>
                          <td className="p-5 text-gray-700">Electronic Transfers (UPI, NEFT, ECS, etc.)</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors bg-gray-50">
                          <td className="p-5 font-bold text-[#1a202c]">Governing Law</td>
                          <td className="p-5 text-gray-700">Negotiable Instruments Act, 1881</td>
                          <td className="p-5 text-gray-700">Payment and Settlement Systems Act, 2007</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="p-5 font-bold text-[#1a202c]">Notice Period</td>
                          <td className="p-5 text-gray-700">30 days from dishonour</td>
                          <td className="p-5 text-gray-700">30 days from dishonour</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors bg-gray-50">
                          <td className="p-5 font-bold text-[#1a202c]">Punishment</td>
                          <td className="p-5 text-gray-700">Up to 2 years prison or double the amount</td>
                          <td className="p-5 text-gray-700">Up to 2 years prison or double the amount</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="p-5 font-bold text-[#1a202c]">Nature</td>
                          <td className="p-5 text-gray-700">Bailable & Non-cognizable</td>
                          <td className="p-5 text-gray-700">Bailable & Non-cognizable</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-6 text-gray-600 italic">
                    Note: If a bank uses an ECS mandate for your loan EMI and it bounces, they will file a case under Section 25. If you had given a post-dated cheque and it bounces, they will file under Section 138. The impact on your record and the legal battle is virtually the same.
                  </p>
                </section>

                {/* Punishment */}
                <section id="punishment" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Punishment and Fines Under Section 25</h2>
                  <div className="bg-red-50 border border-red-100 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-red-900 mb-4">Legal Consequences of Conviction</h3>
                    <p className="text-lg text-red-800 leading-relaxed mb-6">
                      A conviction under this section is a serious matter that can lead to both imprisonment and heavy financial penalties.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-xl border border-red-200">
                        <h4 className="font-bold text-red-900 mb-2">Imprisonment</h4>
                        <p className="text-gray-700">The court can sentence the offender to a jail term of up to <strong>two years</strong>. While courts often prefer fines in first-time cases, repeat offenders face a higher risk of jail time.</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-red-200">
                        <h4 className="font-bold text-red-900 mb-2">Financial Penalty</h4>
                        <p className="text-gray-700">The fine can be as high as <strong>twice the amount</strong> of the failed electronic fund transfer. For example, if a payment of 5 Lakhs failed, you could be fined 10 Lakhs.</p>
                      </div>
                    </div>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mt-8 space-y-6">
                    <p>
                      Beyond the immediate sentence, a criminal conviction can have long-lasting effects on your professional life. It can impact your ability to get a government job, apply for a passport, or obtain a visa for foreign travel. For business owners, it can damage your reputation and creditworthiness, making it difficult to secure loans in the future.
                    </p>
                    <p>
                      However, it is important to remember that most Section 25 cases are <strong>compoundable</strong>. This means that if you pay the amount and reach a settlement with the payee, the case can be closed with the court's permission. This is often the best strategy to avoid the risk of a criminal record.
                    </p>
                  </div>
                </section>

                {/* Defenses */}
                <section id="defenses" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Common Defenses in Section 25 PSSA Cases</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    If you are facing a case under Section 25, there are several legal defenses that a skilled lawyer can use to protect you. Each case is unique, but these are the most common strategies used in Indian courts.
                  </p>
                  <ul className="space-y-6">
                    <li className="flex items-start bg-gray-50 p-6 rounded-2xl">
                      <div className="text-[#D2A02A] text-2xl mr-4 mt-1 font-bold">01</div>
                      <div>
                        <h4 className="font-bold text-xl text-[#1a202c] mb-2">Absence of Legally Enforceable Debt</h4>
                        <p className="text-gray-600">This is the most powerful defense. If you can prove that you did not owe the money for a valid legal reason; for example, if the payment was for a transaction that never took place, or if the debt is time-barred, then you cannot be held liable under Section 25.</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-gray-50 p-6 rounded-2xl">
                      <div className="text-[#D2A02A] text-2xl mr-4 mt-1 font-bold">02</div>
                      <div>
                        <h4 className="font-bold text-xl text-[#1a202c] mb-2">Procedural Errors</h4>
                        <p className="text-gray-600">The law is very strict about timelines. If the legal notice was sent after 30 days, or if the case was filed before the 15-day grace period ended, the entire case can be dismissed on procedural grounds.</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-gray-50 p-6 rounded-2xl">
                      <div className="text-[#D2A02A] text-2xl mr-4 mt-1 font-bold">03</div>
                      <div>
                        <h4 className="font-bold text-xl text-[#1a202c] mb-2">Technical Bank Errors</h4>
                        <p className="text-gray-700">Sometimes payments fail not because of insufficient funds, but due to technical issues in the bank's servers or the payment gateway. In such cases, the accused cannot be held criminally responsible for factors beyond their control.</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-gray-50 p-6 rounded-2xl">
                      <div className="text-[#D2A02A] text-2xl mr-4 mt-1 font-bold">04</div>
                      <div>
                        <h4 className="font-bold text-xl text-[#1a202c] mb-2">Lack of Notice Receipt</h4>
                        <p className="text-gray-700">If you can demonstrate that the mandatory legal notice was never actually delivered to your address, it can be a strong point in your defense, as the receipt of notice is a prerequisite for filing a criminal complaint.</p>
                      </div>
                    </li>
                  </ul>
                </section>

                {/* Judgments */}
                <section id="judgments" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Important Judgments on Section 25 PSSA</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      The interpretation of Section 25 has been shaped by several key rulings from the High Courts and the Supreme Court of India. One of the most significant aspects highlighted by the judiciary is the parity between Section 25 PSSA and Section 138 of the NI Act.
                    </p>
                    <p>
                      In various judgments, courts have held that the procedural safeguards designed for cheque bounce cases must also apply to electronic fund transfer cases. This includes the strict adherence to the notice period and the requirement of a "legally enforceable debt." The courts have emphasized that Section 25 is a penal provision and must be interpreted strictly to ensure that no person is punished without following the due process of law.
                    </p>
                    <p>
                      Another important judicial observation is that the offence is <strong>remedial in nature</strong>. The primary goal of the law is to ensure that the payment is made to the beneficiary. Therefore, if the accused is willing to settle the debt along with reasonable interest and costs, the courts generally take a lenient view and encourage compounding of the offence.
                    </p>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions (FAQs)</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                        <h3 className="text-xl md:text-2xl font-bold text-[#1a202c] mb-4 flex items-start">
                          <span className="text-[#D2A02A] mr-4 text-2xl">Q{index + 1}.</span>
                          {faq.question}
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed pl-12">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Reviews */}
                <section id="reviews" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">What Our Clients Say</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {reviews.map((rev, index) => (
                      <div key={index} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm relative group hover:bg-white hover:border-[#D2A02A]/30 transition-all">
                        <div className="flex text-[#D2A02A] mb-4">
                          {[...Array(rev.rating)].map((_, i) => <span key={i} className="text-xl">★</span>)}
                        </div>
                        <p className="text-gray-700 italic mb-6 text-lg leading-relaxed relative z-10">
                          "{rev.body}"
                        </p>
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-[#1a202c] text-white rounded-full flex items-center justify-center font-bold mr-4">
                            {rev.author.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-[#1a202c]">{rev.author}</p>
                            <p className="text-sm text-gray-500">Verified Client</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Resources */}
                <section id="resources" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Helpful Legal Resources</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link href="/services/banking-and-finance" className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition-all">
                      <h4 className="font-bold text-[#1a202c] mb-2">Banking & Finance Law</h4>
                      <p className="text-sm text-gray-600">Our comprehensive legal services for banking disputes and financial litigation.</p>
                    </Link>
                    <Link href="/bank-complaint-in-rbi" className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition-all">
                      <h4 className="font-bold text-[#1a202c] mb-2">RBI Bank Complaint</h4>
                      <p className="text-sm text-gray-600">How to file a formal complaint against your bank with the RBI Ombudsman.</p>
                    </Link>
                    <Link href="/rbi-new-recovery-guidelines-july-2026" className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition-all">
                      <h4 className="font-bold text-[#1a202c] mb-2">RBI Recovery Guidelines</h4>
                      <p className="text-sm text-gray-600">Stay updated with the latest RBI rules for debt recovery and agent conduct.</p>
                    </Link>
                    <Link href="/cheque-bounce-notice" className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition-all">
                      <h4 className="font-bold text-[#1a202c] mb-2">Cheque Bounce Notice</h4>
                      <p className="text-sm text-gray-600">A detailed guide on drafting and sending a legal notice for cheque bounce cases.</p>
                    </Link>
                    <Link href="/legal-rights-after-loan-default" className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition-all">
                      <h4 className="font-bold text-[#1a202c] mb-2">Rights After Loan Default</h4>
                      <p className="text-sm text-gray-600">Know your fundamental legal rights even if you are unable to pay your debts.</p>
                    </Link>
                    <Link href="/is-loan-settlement-illegal-in-india-truth" className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#D2A02A] hover:shadow-md transition-all">
                      <h4 className="font-bold text-[#1a202c] mb-2">Loan Settlement Legality</h4>
                      <p className="text-sm text-gray-600">Debunking myths about the legality of debt settlement in the Indian banking system.</p>
                    </Link>
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A]/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D2A02A]/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-5xl font-bold mb-8 leading-tight">Don't Fight Your Legal Battles Alone</h2>
                    <p className="text-lg md:text-xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
                      Whether you have received a notice or need to file one, our senior banking lawyers are here to provide the defense you deserve. Take the first step towards a resolution today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                      <Link href="/contact" className="w-full sm:w-auto">
                        <button className="w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-5 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-xl">
                          Book a Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="w-full sm:w-auto">
                        <button className="w-full bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-5 px-12 rounded-full transition-all text-xl">
                          Call +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-10 text-sm md:text-base opacity-70 flex items-center justify-center gap-4">
                      <span>✓ 100% Confidential</span>
                      <span>•</span>
                      <span>✓ Expert Representation</span>
                      <span>•</span>
                      <span>✓ Ethical Guidance</span>
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar - Quick Actions */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-[#1a202c] mb-6">Need Legal Help?</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider font-semibold">Talk to an Expert</p>
                    <a href="tel:+918700343611" className="text-2xl font-bold text-[#D2A02A] hover:underline">+91 8700343611</a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider font-semibold">Email Us</p>
                    <a href="mailto:notify@amalegalsolutions.com" className="text-lg font-bold text-[#1a202c] hover:underline">notify@amalegalsolutions.com</a>
                  </div>
                  <hr className="border-gray-100" />
                  <Link href="/contact" className="block w-full bg-[#1a202c] text-white text-center py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg">
                    Contact Us Online
                  </Link>
                </div>
              </div>

              <div className="bg-[#1a202c] p-8 rounded-3xl shadow-lg text-white">
                <h4 className="text-xl font-bold mb-4">Did You Know?</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Section 25 of the PSSA is virtually identical to Section 138 of the NI Act, but specifically for electronic payments like UPI and NEFT. Both are bailable and non-cognizable.
                </p>
                <div className="bg-[#D2A02A]/20 p-4 rounded-xl border border-[#D2A02A]/30">
                  <p className="text-[#D2A02A] text-xs font-bold uppercase tracking-widest mb-1">Legal Tip</p>
                  <p className="text-sm">Never ignore a legal notice. Responding within 15 days can often prevent a criminal case from being filed.</p>
                </div>
              </div>

              <div className="p-4 text-center">
                <Image 
                  src="/ama-legal-solutions-logo.png" 
                  alt="AMA Legal Solutions" 
                  width={150} 
                  height={50} 
                  className="mx-auto opacity-50 grayscale"
                />
                <p className="text-[10px] text-gray-400 mt-4 uppercase tracking-[0.2em]">Trusted Legal Advisors Since 2013</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
