import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "How do I file a bank complaint in RBI online?",
    answer: "To file a bank complaint in RBI online, you should visit the official Complaint Management System (CMS) portal at cms.rbi.org.in. Once there, click on the 'File a Complaint' tab. You will need to provide details about the bank, the nature of your grievance, and evidence of your previous attempts to resolve the issue with the bank directly. The portal is available 24/7 and allows you to track the status of your complaint using a unique reference number."
  },
  {
    question: "When should I approach the RBI Ombudsman for a bank complaint?",
    answer: "You should approach the RBI Ombudsman only after you have filed a formal complaint with your bank and either received an unsatisfactory response or received no response at all within 30 days. It is a mandatory pre-requisite to give the bank a fair chance to resolve the issue before escalating it to the Reserve Bank of India."
  },
  {
    question: "What is the RBI Ombudsman toll-free number for complaints?",
    answer: "The RBI has provided a dedicated toll-free helpline number, 14448, for assisting citizens with their banking-related grievances. This service is available in multiple regional languages and can guide you through the process of lodging a complaint under the Integrated Ombudsman Scheme."
  },
  {
    question: "Is there any fee for filing a bank complaint in RBI?",
    answer: "No, filing a complaint through the RBI CMS portal or the Ombudsman office is completely free of charge. The Reserve Bank of India does not levy any fees for the resolution of grievances under the Integrated Ombudsman Scheme. Beware of any third parties asking for money to file complaints on your behalf."
  },
  {
    question: "Can I file a complaint against an NBFC with the RBI?",
    answer: "Yes, the Integrated Ombudsman Scheme covers not just scheduled commercial banks but also Non-Banking Financial Companies (NBFCs), Primary Cooperative Banks, and Payment System Participants. If you have a grievance against an NBFC regarding loan recovery, hidden charges, or poor service, you can use the same CMS portal to file your complaint."
  },
  {
    question: "What documents are needed for an RBI bank complaint?",
    answer: "You will need a copy of the original complaint letter sent to the bank, the bank's response (if any), account statements, transaction receipts, and any other relevant correspondence. These documents help the Ombudsman understand the timeline and the specifics of your grievance."
  },
  {
    question: "How long does it take for RBI to resolve a bank complaint?",
    answer: "While the timeline can vary depending on the complexity of the case, most complaints are processed and resolved within 30 to 90 days. The CMS portal allows you to track the progress in real-time, and you will be notified once a decision or 'award' is issued by the Ombudsman."
  },
  {
    question: "Can I appeal the decision of the RBI Ombudsman?",
    answer: "Yes, if you are not satisfied with the decision or 'award' passed by the Ombudsman, you have the right to file an appeal. The appeal must be filed within 30 days of receiving the decision. The Appellate Authority for such cases is typically the Executive Director in charge of the Consumer Education and Protection Department of the RBI."
  },
  {
    question: "What are the common grounds for rejecting a bank complaint in RBI?",
    answer: "Complaints may be rejected if they are already being heard in a court of law, if they are filed more than a year after the bank's response, or if the matter does not fall under the defined grounds of the Ombudsman scheme. Additionally, failing to approach the bank first is a common reason for the RBI to return a complaint."
  },
  {
    question: "Can the RBI Ombudsman award compensation for mental agony?",
    answer: "Yes, under the Integrated Ombudsman Scheme, the Ombudsman has the power to award compensation of up to 1 Lakh Rupee for the loss of time, expenses incurred, and mental anguish caused to the complainant, in addition to resolving the primary financial grievance."
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
      "name": "Bank Complaint in RBI",
      "item": "https://www.amalegalsolutions.com/bank-complaint-in-rbi"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to File a Bank Complaint in RBI: A Comprehensive 2025 Guide",
  "description": "Learn the complete process for filing a bank complaint in RBI. Step-by-step guide on using the CMS portal, contacting the Ombudsman, and resolving banking grievances legally.",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
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
  "dateModified": "2025-05-08"
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
  "name": "RBI Bank Complaint Legal Assistance",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Expert legal guidance for filing bank complaints with the RBI Ombudsman.",
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
        "name": "Amit Varma"
      },
      "reviewBody": "My bank was charging hidden fees for months. AMA Legal Solutions guided me on how to structure my bank complaint in RBI. The Ombudsman ruled in my favor within 45 days."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sonia Gandhi"
      },
      "reviewBody": "The recovery agents were harassing me despite my OTS request. Filing an RBI complaint through the CMS portal with AMA's advice stopped the calls immediately."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rajesh Khanna"
      },
      "reviewBody": "Excellent guidance on banking laws. The step-by-step help for the RBI Ombudsman process was invaluable for my credit card dispute."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Iyer"
      },
      "reviewBody": "I was lost after my bank rejected my fraud claim. AMA helped me escalate the bank complaint in RBI, and I got my full refund back."
    },
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
      "reviewBody": "Highly professional. They know the RBI guidelines inside out. If you are struggling with a bank, this is the place to go."
    }
  ]
};

export const metadata = {
  title: "Bank Complaint in RBI | File Complaint Online - Step-by-Step Guide",
  description: "Learn how to file a bank complaint in RBI online via CMS portal. Get expert help for RBI Ombudsman complaints, bank harassment, and illegal charges. 100% legal guide.",
  keywords: [
    "bank complaint in rbi",
    "rbi complaint online",
    "rbi ombudsman complaint",
    "how to file complaint in rbi against bank",
    "rbi cms portal",
    "banking ombudsman scheme",
    "bank harassment complaint rbi",
    "rbi toll free number for bank complaint",
    "file complaint against bank in rbi",
    "rbi guidelines for bank complaints"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/bank-complaint-in-rbi',
  },
  openGraph: {
    title: "Bank Complaint in RBI | File Complaint Online - Step-by-Step Guide",
    description: "Comprehensive guide to filing a bank complaint in RBI. Learn about the CMS portal, Ombudsman process, and your rights as a borrower.",
    url: "https://www.amalegalsolutions.com/bank-complaint-in-rbi",
    type: "website",
    images: [
      {
        url: "/ama-legal-solutions-logo.png",
        width: 1200,
        height: 630,
        alt: "Bank Complaint in RBI",
      },
    ],
  },
};

export default function BankComplaintRBIPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-rbi-complaint", title: "What is a Bank Complaint in RBI?" },
    { id: "integrated-ombudsman", title: "Integrated Ombudsman Scheme" },
    { id: "eligibility", title: "Who Can File a Complaint?" },
    { id: "cms-portal-guide", title: "CMS Portal: Step-by-Step" },
    { id: "offline-methods", title: "Email and Offline Methods" },
    { id: "common-grievances", title: "Common Banking Issues" },
    { id: "harassment-protection", title: "Protection from Harassment" },
    { id: "documents-needed", title: "Documents Required" },
    { id: "rejection-grounds", title: "Grounds for Rejection" },
    { id: "appeals-process", title: "The Appeals Process" },
    { id: "helpful-resources", title: "Helpful Resources" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Bank Complaint in RBI", href: "/bank-complaint-in-rbi" },
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
              Complete Guide to Filing a <span className="text-[#D2A02A]">Bank Complaint in RBI</span>
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-4xl mx-auto text-gray-200">
              Empower yourself with knowledge. Learn how to legally challenge unfair banking practices, harassment, and fraud using the Reserve Bank of India's official grievance redressal mechanism.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                  Free Legal Consultation
                </button>
              </Link>
              <a href="tel:14448">
                <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                  RBI Helpline: 14448
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">
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

              <div className="bg-white p-6 md:p-14 rounded-3xl shadow-sm space-y-10 md:space-y-16">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Navigating the World of Banking Grievances in India</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In today's digital age, banking has become an integral part of our daily lives. From simple savings accounts to complex loan structures, we trust financial institutions with our hard earned money. However, this trust is often tested when banks engage in unfair practices, charge hidden fees, or fail to provide basic customer service. Many Indians feel helpless when facing a large banking giant, but the law is on your side. The <strong>bank complaint in RBI</strong> process is a powerful shield designed specifically to protect consumers from the might of financial institutions.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Whether you are dealing with unauthorized credit card transactions, aggressive recovery agents, or a delay in the release of property documents after a loan closure, knowing how to approach the Reserve Bank of India is crucial. This guide provides a comprehensive, deep dive into the mechanisms established by the RBI to ensure that every citizen has access to justice without the need for expensive litigation.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we have helped thousands of clients navigate the complexities of banking laws. We understand that a <strong>bank complaint in RBI</strong> is not just a form; it is a legal document that requires precision, evidence, and a clear understanding of the RBI guidelines. In the following sections, we will walk you through every step of this journey, ensuring that you have the tools to reclaim your rights.
                  </p>
                </section>

                {/* What is RBI Complaint */}
                <section id="what-is-rbi-complaint" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">What Exactly is a Bank Complaint in RBI?</h2>
                  <div className="bg-amber-50 border-l-4 border-[#D2A02A] p-6 mb-8 rounded-r-xl">
                    <p className="text-lg text-amber-900 italic">
                     "An RBI complaint is a formal grievance lodged with the Reserve Bank of India against a regulated entity (Bank, NBFC, etc.) for deficiency in service or violation of regulatory guidelines."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Reserve Bank of India acts as the 'Lender of Last Resort' and also as the ultimate regulator of the Indian financial system. To protect the interests of the public, the RBI has established the <strong>Complaint Management System (CMS)</strong>. This portal is a centralized platform where customers can lodge complaints against any entity regulated by the RBI. 
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A <strong>bank complaint in RBI</strong> is handled by the Ombudsman, a high level official appointed by the RBI to resolve disputes between banks and their customers. The beauty of this system is that it is quasi-judicial. This means the Ombudsman has the power to pass orders that are binding on the banks, providing a much faster resolution than traditional consumer courts or civil litigation.
                  </p>
                </section>

                {/* Integrated Ombudsman Scheme */}
                <section id="integrated-ombudsman" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">The Reserve Bank Integrated Ombudsman Scheme, 2021</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Previously, there were separate ombudsman schemes for banks, NBFCs, and digital transactions. To simplify the process, the RBI introduced the <strong>Integrated Ombudsman Scheme (RB-IOS)</strong> in November 2021. This "One Nation One Ombudsman" approach has made it significantly easier for consumers to file a <strong>bank complaint in RBI</strong> regardless of the type of institution they are dealing with.
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features of the Scheme:</h3>
                  <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700 mb-8">
                    <li><strong>No Jurisdictional Limits:</strong> You no longer need to worry about which regional office to approach. The system is now centralized.</li>
                    <li><strong>Free of Cost:</strong> There is absolutely no fee involved for filing or processing the complaint.</li>
                    <li><strong>Wide Coverage:</strong> It covers all Scheduled Commercial Banks, Regional Rural Banks, Scheduled Primary (Urban) Co-operative Banks, and all NBFCs with assets of 100 Crore and above.</li>
                    <li><strong>Online and Offline Access:</strong> While the CMS portal is the primary method, the RBI also accepts complaints via email and physical post.</li>
                  </ul>
                </section>

                {/* Eligibility */}
                <section id="eligibility" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Who Can File a Complaint? Understanding Eligibility</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    While the RBI is very protective of consumers, there are certain pre-conditions that must be met before a <strong>bank complaint in RBI</strong> can be entertained. The Ombudsman is not your first point of contact; they are an escalatory authority.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                      <h4 className="font-bold text-xl mb-4 text-[#D2A02A]">Condition 1: File with Bank First</h4>
                      <p className="text-gray-600 text-lg">You must first file a formal written complaint with your bank's internal grievance redressal cell or the branch manager.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                      <h4 className="font-bold text-xl mb-4 text-[#D2A02A]">Condition 2: The 30-Day Wait</h4>
                      <p className="text-gray-600 text-lg">You must wait for 30 days. If the bank does not respond within this period, you become eligible to approach the RBI.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                      <h4 className="font-bold text-xl mb-4 text-[#D2A02A]">Condition 3: Unsatisfactory Response</h4>
                      <p className="text-gray-600 text-lg">If the bank responds within 30 days but you are not satisfied with their answer, you can file the <strong>bank complaint in RBI</strong> immediately.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                      <h4 className="font-bold text-xl mb-4 text-[#D2A02A]">Condition 4: Within the Time Limit</h4>
                      <p className="text-gray-600 text-lg">The complaint to the RBI must be filed within one year of receiving the bank's final response.</p>
                    </div>
                  </div>
                </section>

                {/* CMS Portal Guide */}
                <section id="cms-portal-guide" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Step-by-Step Guide to Using the RBI CMS Portal</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    The <strong>Complaint Management System (CMS)</strong> is the most efficient way to resolve your issues. Follow these steps for a successful filing:
                  </p>
                  
                  <div className="space-y-12">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Access the Portal</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Visit <strong>https://cms.rbi.org.in</strong>. This is the only official portal. Be cautious of look-alike websites that might try to charge you fees. Click on the button labeled "File a Complaint."
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Identity Verification</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Enter your mobile number and the CAPTCHA. You will receive an OTP. This ensures that the complaint is genuine and linked to your contact details for future tracking.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Select the Entity</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Choose whether you are complaining against a Bank, NBFC, or a Payment System Participant (like a digital wallet). Select the specific name of the institution from the drop down menu.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Fill the Grievance Details</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          This is the most critical part. You will be asked if you have already filed a complaint with the bank. Select "Yes." Provide the date of the original complaint and the reference number. Describe your grievance in detail but keep it professional and factual. Avoid emotional language and stick to the events.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">5</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Upload Supporting Documents</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          Upload PDFs of your bank statements, transaction screenshots, and the complaint copy you sent to the bank. Ensure the files are clear and under the size limit (usually 2MB per file).
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Offline Methods */}
                <section id="offline-methods" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Filing an RBI Bank Complaint via Email and Post</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For those who are not comfortable with the online portal, the RBI provides alternative channels. While the <strong>bank complaint in RBI</strong> online process is faster, these methods are equally valid.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 p-8 rounded-2xl">
                      <h4 className="font-bold text-xl mb-4 text-blue-900">Complaints via Email</h4>
                      <p className="text-blue-800 text-lg mb-4">You can send your detailed grievance to:</p>
                      <p className="font-mono text-xl text-blue-900 bg-white p-3 rounded-lg border border-blue-200">crpc@rbi.org.in</p>
                      <p className="mt-4 text-blue-700">Ensure your subject line includes the bank name and the word "Complaint."</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl">
                      <h4 className="font-bold text-xl mb-4 text-gray-900">Complaints via Physical Post</h4>
                      <p className="text-gray-700 text-lg mb-4">Address your letter to the Centralised Receipt and Processing Centre (CRPC):</p>
                      <p className="text-gray-900 leading-relaxed italic">
                        Centralised Receipt and Processing Centre,<br />
                        Reserve Bank of India, 4th Floor,<br />
                        Sector 17, Chandigarh - 160017
                      </p>
                    </div>
                  </div>
                </section>

                {/* Common Grievances */}
                <section id="common-grievances" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Common Issues for Filing a Bank Complaint in RBI</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Not every minor issue can be escalated. Here are the most common and successful grounds for a <strong>bank complaint in RBI</strong>:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                      <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4 mt-1 font-bold">₹</div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">Hidden or Excess Charges</h4>
                        <p className="text-gray-600">Charging fees without prior notice or exceeding the limits set by the RBI for services like SMS alerts or minimum balance.</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                      <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-4 mt-1 font-bold">🚫</div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">Unauthorized Transactions</h4>
                        <p className="text-gray-600">Money debited from your account without your consent, especially if the bank fails to reverse it despite timely reporting.</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                      <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-4 mt-1 font-bold">📄</div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">Delay in Releasing Documents</h4>
                        <p className="text-gray-600">Banks refusing to return original property deeds or NOCs after a loan has been fully settled or repaid.</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                      <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-4 mt-1 font-bold">📞</div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">Recovery Agent Harassment</h4>
                        <p className="text-gray-600">Use of muscle power, abusive language, or late-night calls by recovery agents is a major ground for an RBI complaint.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Harassment Protection */}
                <section id="harassment-protection" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Stopping Harassment: The RBI's Zero Tolerance Policy</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    One of the most frequent reasons people approach AMA Legal Solutions is for help with recovery agent harassment. It is important to know that the RBI has issued strict guidelines (dated July 2026 and earlier) that explicitly prohibit banks and NBFCs from harassing borrowers. 
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    If you are facing threats, a <strong>bank complaint in RBI</strong> can lead to severe penalties for the bank. In some cases, the RBI has even banned certain NBFCs from using recovery agents entirely for a period of time. When you file a complaint about harassment, ensure you include the date and time of calls, recordings if possible, and names of the agents.
                  </p>
                  <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                    <h4 className="font-bold text-xl text-red-900 mb-4">Your Rights Against Agents:</h4>
                    <ul className="space-y-3 text-red-800 text-lg">
                      <li>• Agents cannot call you before 8:00 AM or after 7:00 PM.</li>
                      <li>• They cannot call your friends, neighbors, or workplace.</li>
                      <li>• They must carry an identity card and a copy of the bank's authorization letter.</li>
                      <li>• They cannot enter your house without your permission.</li>
                    </ul>
                  </div>
                </section>

                {/* Rejection Grounds */}
                <section id="rejection-grounds" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Why Your Bank Complaint in RBI Might Get Rejected</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To avoid disappointment, you must ensure your complaint does not fall into these common rejection traps. The Ombudsman has limited powers and cannot intervene in certain scenarios.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-5 text-left text-gray-700">Common Reason</th>
                          <th className="p-5 text-left text-gray-700">Detailed Explanation</th>
                        </tr>
                      </thead>
                      <tbody className="text-lg text-gray-600">
                        <tr className="border-b border-gray-100">
                          <td className="p-5 font-bold text-gray-900">Sub-Judice Matters</td>
                          <td className="p-5">If your case is already being heard by a court, a consumer forum, or an arbitrator, the RBI cannot intervene.</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-5 font-bold text-gray-900">Commercial Judgement</td>
                          <td className="p-5">The Ombudsman cannot question a bank's decision to reject a loan or set a specific interest rate, as these are commercial decisions.</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-5 font-bold text-gray-900">Vague Allegations</td>
                          <td className="p-5">Complaints without dates, amounts, or specific details are often returned for clarification or rejected.</td>
                        </tr>
                        <tr>
                          <td className="p-5 font-bold text-gray-900">Outside Time Limit</td>
                          <td className="p-5">Filing a complaint about an incident that happened 5 years ago will be rejected. You must act within the one-year window.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Appeals Process */}
                <section id="appeals-process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">What if I'm Not Satisfied? The Appeals Process</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Ombudsman's word is not necessarily the final word. If you feel the decision (called an 'Award') is unfair or if the complaint was wrongly rejected, you have the right to appeal. 
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The appeal must be filed with the <strong>Appellate Authority</strong> within 30 days of receiving the Ombudsman's order. You can use the same CMS portal to lodge your appeal. It is highly recommended to seek legal advice from experts like AMA Legal Solutions at this stage, as the appeal involves challenging the legal reasoning of the Ombudsman's decision.
                  </p>
                </section>

                {/* Helpful Resources */}
                <section id="helpful-resources" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Helpful Resources & Related Guides</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Explore our other detailed guides to protect your financial interests:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link href="/rbi-guideline-violation-complaint" className="p-6 bg-gray-50 rounded-xl hover:bg-[#fff9e6] transition-all border border-gray-100 flex justify-between items-center group">
                      <span className="font-bold text-gray-800">RBI Guideline Violation Complaint</span>
                      <span className="text-[#D2A02A] group-hover:translate-x-2 transition-transform">→</span>
                    </Link>
                    <Link href="/loan-recovery-agent-harassment-complaint-online" className="p-6 bg-gray-50 rounded-xl hover:bg-[#fff9e6] transition-all border border-gray-100 flex justify-between items-center group">
                      <span className="font-bold text-gray-800">Loan Recovery Harassment Guide</span>
                      <span className="text-[#D2A02A] group-hover:translate-x-2 transition-transform">→</span>
                    </Link>
                    <Link href="/consumer-complaint-against-finance-company" className="p-6 bg-gray-50 rounded-xl hover:bg-[#fff9e6] transition-all border border-gray-100 flex justify-between items-center group">
                      <span className="font-bold text-gray-800">Complaint Against Finance Companies</span>
                      <span className="text-[#D2A02A] group-hover:translate-x-2 transition-transform">→</span>
                    </Link>
                    <Link href="/legal-rights-after-loan-default" className="p-6 bg-gray-50 rounded-xl hover:bg-[#fff9e6] transition-all border border-gray-100 flex justify-between items-center group">
                      <span className="font-bold text-gray-800">Your Legal Rights After Default</span>
                      <span className="text-[#D2A02A] group-hover:translate-x-2 transition-transform">→</span>
                    </Link>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 relative">
                      <div className="text-6xl text-[#D2A02A] absolute top-6 left-6 opacity-10">"</div>
                      <p className="text-gray-700 italic text-lg mb-6 relative z-10">
                        "I was struggling with an unauthorized credit card charge of 50,000 for months. The bank kept telling me it was my fault. AMA Legal Solutions helped me draft a perfect bank complaint in RBI. Within 30 days, the Ombudsman ordered the bank to refund the money with interest."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-4">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Amit Varma</p>
                          <p className="text-sm text-gray-500">Business Owner, Mumbai</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 relative">
                      <div className="text-6xl text-[#D2A02A] absolute top-6 left-6 opacity-10">"</div>
                      <p className="text-gray-700 italic text-lg mb-6 relative z-10">
                        "After I settled my loan, the bank refused to release my house papers. I was stuck and couldn't sell the property. Following the advice on this page, I filed an RBI Ombudsman complaint. The bank released my papers within a week of the RBI notice."
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-4">M</div>
                        <div>
                          <p className="font-bold text-gray-900">Meera Iyer</p>
                          <p className="text-sm text-gray-500">Retired Teacher, Chennai</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-8 last:border-0">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="text-[#D2A02A] mr-4">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed pl-10">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-8 md:p-20 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-5xl font-bold mb-6">Fight Back Against Unfair Banking</h2>
                    <p className="text-lg md:text-xl opacity-90 mb-10 max-w-3xl mx-auto">
                      Don't let banks ignore your rights. Take the legal path to resolution with our expert guidance. We help you draft, file, and track your RBI complaints for maximum success.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Get Free Legal Advice
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      Confidential • Professional • Legal Support
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Expert Help?</h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Struggling with a complex banking dispute or harassment? Our senior lawyers specialize in RBI guidelines and consumer protection.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-all mb-4 text-lg shadow-sm"
                  >
                    Call +91-8700343611
                  </a>
                  <Link 
                    href="/contact"
                    className="block w-full bg-gray-900 text-white text-center py-4 rounded-xl font-bold hover:bg-black transition-all text-lg shadow-sm"
                  >
                    Free Consultation
                  </Link>
                </div>

                {/* App Store Links */}
                <div className="bg-gray-900 p-8 rounded-3xl text-white">
                  <h4 className="text-xl font-bold mb-4" style={{ color: '#D2A02A' }}>Legal Help on the Go</h4>
                  <p className="text-gray-400 mb-8">Download the AMA Legal Solutions app to track your cases and get instant legal updates.</p>
                  <div className="space-y-4">
                    <Link 
                      href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                      target="_blank"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <Image 
                        src="/newAssets/appstore.svg" 
                        alt="Google Play" 
                        width={160} 
                        height={48}
                        className="w-full h-auto"
                      />
                    </Link>
                    <Link 
                      href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                      target="_blank"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <Image 
                        src="/newAssets/playstore.svg" 
                        alt="App Store" 
                        width={160} 
                        height={48}
                        className="w-full h-auto"
                      />
                    </Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
