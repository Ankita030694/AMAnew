import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What does a banking and finance lawyer do?",
    answer: "A banking and finance lawyer specializes in legal matters related to financial institutions, borrowers, and lenders. They handle a wide range of issues including loan documentation, debt recovery, regulatory compliance, banking disputes, project finance, and litigation in forums like the Debt Recovery Tribunal (DRT) and NCLT. Their role is to ensure that all financial transactions comply with the prevailing laws and to protect the interests of their clients, whether they are banks, corporations, or individuals facing financial legal challenges."
  },
  {
    question: "How can a lawyer help with loan defaults and NPA issues?",
    answer: "When a borrower defaults on a loan and the account is classified as a Non-Performing Asset (NPA), a lawyer can provide critical assistance. They can help negotiate a One Time Settlement (OTS) with the bank, represent the borrower in proceedings under the SARFAESI Act to prevent asset seizure, and defend against recovery suits in the DRT. For lenders, lawyers assist in enforcing security interests and recovering dues through legal channels efficiently."
  },
  {
    question: "What is the SARFAESI Act and how does it affect borrowers?",
    answer: "The SARFAESI Act (Securitization and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002) empowers banks and financial institutions to recover non-performing assets without the intervention of the court. This means banks can seize and sell the secured assets (collateral) of a defaulting borrower after issuing a 60-day notice. A banking lawyer can help borrowers challenge unlawful actions taken under this Act and seek relief from the Debt Recovery Tribunal."
  },
  {
    question: "Do you handle cheque bounce cases under Section 138?",
    answer: "Yes, we have extensive experience in handling cheque bounce cases under Section 138 of the Negotiable Instruments Act. Whether you are a complainant seeking to recover money or an accused seeking defense against false allegations, our team provides comprehensive legal representation. We handle the drafting of legal notices, filing of complaints, and representation in criminal courts to ensure a favorable outcome."
  },
  {
    question: "Can you assist with corporate debt restructuring?",
    answer: "Absolutely. Corporate debt restructuring is a complex process that requires deep legal and financial expertise. We assist companies in negotiating with a consortium of lenders to restructure their debt obligations, modify repayment terms, and avoid insolvency. Our team works to create a viable resolution plan that satisfies both the creditors and the corporate debtor, ensuring business continuity."
  },
  {
    question: "What is the role of DRT (Debt Recovery Tribunal)?",
    answer: "The Debt Recovery Tribunal (DRT) is a specialized quasi-judicial body established to facilitate the recovery of debt due to banks and financial institutions. It handles cases where the debt amount exceeds ₹20 lakhs. Our lawyers are experts in DRT practice, representing both banks in recovery applications and borrowers in securitization applications (SA) to challenge bank actions. We ensure that your case is presented effectively to secure interim relief or final orders."
  },
  {
    question: "How do I file a complaint against a bank for unfair practices?",
    answer: "If you are a victim of unfair banking practices, hidden charges, or harassment, you can seek legal recourse. Our lawyers can help you file a formal complaint with the Banking Ombudsman under the RBI's Integrated Ombudsman Scheme. If the issue is not resolved, we can assist in approaching the Consumer Forum or civil courts to claim compensation for the deficiency in service and mental agony caused by the bank's actions."
  },
  {
    question: "What legal services do you offer for fintech companies?",
    answer: "For fintech companies, we offer specialized legal services including regulatory compliance with RBI guidelines, drafting of user agreements and privacy policies, advice on digital lending norms, and representation in disputes. We help fintech startups navigate the complex regulatory landscape of India's financial sector to ensure their business models are legally compliant and sustainable."
  },
  {
    question: "Is it possible to settle a credit card debt legally?",
    answer: "Yes, credit card debt settlement is a legal and viable option for those unable to pay the full outstanding amount due to financial hardship. Our lawyers negotiate with the credit card issuing banks to waive off the exorbitant interest and penalties and arrive at a mutually agreed lump sum settlement amount. This helps you close the debt permanently and stop the cycle of minimum due payments."
  },
  {
    question: "Why should I hire AMA Legal Solutions for banking matters?",
    answer: "AMA Legal Solutions stands out due to our deep understanding of both the legal and practical aspects of banking. Our team comprises lawyers who have represented major banks as well as individual borrowers, giving us a 360-degree view of financial disputes. We prioritize client interest, offer strategic advice to minimize liability, and have a proven track record of successful settlements and litigation outcomes in DRT, NCLT, and High Courts."
  },
  {
    question: "What is the difference between a civil suit and a DRT application?",
    answer: "A civil suit is filed in a regular civil court and can take years to decide due to the backlog of cases. A DRT application is filed in the Debt Recovery Tribunal, which is a specialized forum for faster adjudication of banking debts over ₹20 lakhs. The DRT follows a summary procedure to expedite recovery. However, for debts below ₹20 lakhs, banks still have to file civil suits. We handle both types of litigation effectively."
  },
  {
    question: "Can you help with home loan disputes?",
    answer: "Yes, we handle all types of home loan disputes including issues related to floating interest rates, foreclosure charges, property title disputes, and delay in possession by builders affecting loan repayment. We also represent clients in cases where the bank has initiated action against the mortgaged property, helping them save their homes through legal stays or settlements."
  },
  {
    question: "What are the rights of a guarantor in a loan default?",
    answer: "A guarantor has significant liability in a loan default; their liability is co-extensive with that of the borrower. This means the bank can proceed against the guarantor directly without exhausting remedies against the borrower. However, guarantors also have rights, such as the right to be heard and the right to subrogation (claiming from the borrower after paying the bank). We advise guarantors on how to protect their assets and limit their liability."
  },
  {
    question: "How much do you charge for banking legal services?",
    answer: "Our professional fees depend on the complexity of the case, the amount of debt involved, and the nature of the legal service required (consultation, drafting, or litigation). We believe in transparency and provide a clear fee structure after the initial assessment of your case. We offer competitive rates for our high-quality legal representation and strategic advisory services."
  },
  {
    question: "Do you provide online legal consultation for banking issues?",
    answer: "Yes, we understand that financial legal issues can be urgent. We provide online video and audio consultations to clients across India. You can discuss your case with our expert banking lawyers from the comfort of your home, get a preliminary assessment, and plan the next legal steps. We also handle document review and drafting remotely for your convenience."
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
      "name": "Banking & Finance",
      "item": "https://www.amalegalsolutions.com/services/banking-and-finance"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Banking and Finance Lawyers in India | Expert Legal Services",
  "description": "Top-rated banking and finance lawyers in India. We provide expert legal solutions for loan disputes, DRT cases, cheque bounce, and regulatory compliance.",
  "image": "https://www.amalegalsolutions.com/services/2.png",
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
  "datePublished": "2023-10-01",
  "dateModified": "2025-11-20"
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
  "name": "Banking and Finance Legal Services",
  "image": "https://www.amalegalsolutions.com/services/2.png",
  "description": "Expert banking and finance legal services in India.",
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
      "reviewBody": "Exceptional service for my corporate debt restructuring. The team at AMA Legal Solutions is highly knowledgeable about RBI regulations and banking laws."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Suresh Reddy"
      },
      "reviewBody": "They helped me resolve a complicated SARFAESI matter and saved my property from auction. Best banking lawyers in Delhi NCR."
    }
  ]
};

export const metadata = {
  title: "Banking & Finance Lawyers in India | DRT & Cheque Bounce Experts",
  description:
    "Looking for expert banking and finance lawyers in India? AMA Legal Solutions offers top-tier legal services for loan disputes, DRT cases, cheque bounce, and corporate finance. Consult now.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/banking-and-finance',
  },
  openGraph: {
    title: "Banking & Finance Lawyers in India | DRT & Cheque Bounce Experts",
    description: "Looking for expert banking and finance lawyers in India? AMA Legal Solutions offers top-tier legal services for loan disputes, DRT cases, cheque bounce, and corporate finance.",
    url: "https://www.amalegalsolutions.com/services/banking-and-finance",
    type: "website",
    images: [
      {
        url: "/services/2.png",
        width: 1200,
        height: 630,
        alt: "Banking and Finance Lawyers India",
      },
    ],
  },
};

export default function BankingFinancePage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-banking-law", title: "What is Banking Law?" },
    { id: "legal-framework", title: "Legal Framework" },
    { id: "our-services", title: "Our Services" },
    { id: "drt-litigation", title: "DRT Litigation" },
    { id: "cheque-bounce", title: "Cheque Bounce" },
    { id: "process", title: "Our Process" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Banking & Finance", href: "/services/banking-and-finance" },
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
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Expert <span className="text-[#D2A02A]">Banking & Finance</span> Legal Solutions in India
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Comprehensive legal representation for loan disputes, regulatory compliance, DRT litigation, and financial restructuring. Trusted by banks and borrowers alike.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Consultation
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
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Navigating the Complex World of Banking Law</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The banking and finance sector in India is the backbone of the economy, governed by a labyrinth of laws, regulations, and compliance requirements. Whether you are a financial institution seeking to enforce contracts or a borrower facing the heat of debt recovery, the legal landscape can be overwhelming. In such a high-stakes environment, having a specialized <strong>banking and finance lawyer</strong> is not just an option; it is a necessity.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we pride ourselves on being one of the leading law firms in India for banking and finance matters. Our deep expertise spans across the entire spectrum of financial law, from simple loan agreements to complex corporate debt restructuring and high-value litigation in the Debt Recovery Tribunal (DRT). We understand that every financial dispute has unique challenges, and we are dedicated to providing tailored legal strategies that protect your assets and reputation.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Our team of seasoned advocates combines legal acumen with financial literacy to deliver results. We have successfully represented a diverse clientele, including public and private sector banks, non-banking financial companies (NBFCs), corporate houses, and individual borrowers. When you choose us, you are choosing a partner who is committed to navigating the legal complexities on your behalf, ensuring that you achieve the best possible outcome in your financial legal matters.
                  </p>
                </section>

                {/* What is Banking Law */}
                <section id="what-is-banking-law" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Banking and Finance Law?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Banking and finance law covers the regulation of financial institutions and the legal aspects of financial transactions, including lending, borrowing, and debt recovery."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Banking law in India is a specialized field that governs the functioning of banks and financial institutions. It encompasses a wide array of regulations that dictate how banks operate, how they lend money, and how they can recover debts. For businesses and individuals, understanding these laws is crucial when entering into loan agreements, facing foreclosure, or dealing with regulatory compliance.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The scope of banking law is vast, covering everything from the <strong>Reserve Bank of India (RBI) Act</strong> to the <strong>Insolvency and Bankruptcy Code (IBC)</strong>. It involves the drafting of loan documents, securitization of assets, handling of non-performing assets (NPAs), and litigation arising from financial disputes. Whether it is a simple personal loan or a multi-crore corporate credit facility, every financial transaction is bound by these legal principles.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Legal Framework Governing Banking in India</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Indian banking sector is highly regulated to ensure financial stability and protect the interests of depositors and borrowers. Several key acts and regulations form the backbone of banking litigation and compliance:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">SARFAESI Act, 2002</h4>
                      <p className="text-gray-600">Allows banks to auction residential or commercial properties to recover loans without court intervention. We help borrowers challenge unlawful notices under this Act.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Recovery of Debts and Bankruptcy Act, 1993</h4>
                      <p className="text-gray-600">Established the Debt Recovery Tribunals (DRT) for speedy adjudication of debt recovery cases involving amounts above ₹20 lakhs.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Negotiable Instruments Act, 1881</h4>
                      <p className="text-gray-600">Section 138 of this Act deals with the criminal offense of cheque bounce, a common issue in banking disputes requiring immediate legal action.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Insolvency and Bankruptcy Code, 2016</h4>
                      <p className="text-gray-600">A consolidated framework for insolvency resolution of companies and individuals, offering a time-bound process for debt resolution.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Our expertise lies in interpreting these complex statutes to build a strong case for our clients. Whether you are a bank seeking to enforce security interest or a borrower seeking protection against aggressive recovery, we leverage these laws to your advantage.
                  </p>
                </section>

                {/* Our Services */}
                <section id="our-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Comprehensive Banking Legal Services</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    AMA Legal Solutions offers a full suite of legal services tailored to the banking and finance sector. We represent clients at every stage of the financial lifecycle, from deal structuring to dispute resolution.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Loan Documentation & Review</h3>
                      <p className="text-gray-700">
                        We draft and vet loan agreements, mortgage deeds, guarantee deeds, and hypothecation agreements to ensure they are legally sound and protect our client's interests.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Debt Recovery Services</h3>
                      <p className="text-gray-700">
                        We assist banks and financial institutions in recovering dues through legal notices, mediation, and litigation in civil courts and tribunals.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Banking Fraud Litigation</h3>
                      <p className="text-gray-700">
                        We represent victims of banking fraud, unauthorized transactions, and cyber financial crimes, helping them recover lost funds through the Banking Ombudsman and courts.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Regulatory Compliance</h3>
                      <p className="text-gray-700">
                        We advise fintech companies and NBFCs on RBI regulations, licensing, and compliance to ensure their business operations remain within the legal framework.
                      </p>
                    </div>
                  </div>
                </section>

                {/* DRT Litigation */}
                <section id="drt-litigation" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Debt Recovery Tribunal (DRT) Litigation</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Debt Recovery Tribunal (DRT) is the primary forum for banking disputes in India. Litigation in DRT requires specialized knowledge of the <strong>Recovery of Debts Due to Banks and Financial Institutions (RDDBFI) Act</strong> and the <strong>SARFAESI Act</strong>.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Our team of expert DRT lawyers handles:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 bg-gray-50 p-6 rounded-xl mb-6">
                    <li><strong>Original Applications (OA):</strong> Filing recovery suits on behalf of banks for debts exceeding ₹20 lakhs.</li>
                    <li><strong>Securitization Applications (SA):</strong> Representing borrowers to challenge possession notices and auction notices issued by banks under the SARFAESI Act.</li>
                    <li><strong>Interim Relief:</strong> Obtaining stay orders against the sale of mortgaged properties to give borrowers time to arrange funds or settle the account.</li>
                    <li><strong>Appeals:</strong> Filing appeals in the Debt Recovery Appellate Tribunal (DRAT) against adverse orders of the DRT.</li>
                  </ul>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We understand the nuances of DRT procedures and work aggressively to ensure that your case is expedited and your rights are defended.
                  </p>
                </section>

                {/* Cheque Bounce */}
                <section id="cheque-bounce" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cheque Bounce Cases (Section 138 NI Act)</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Dishonour of a cheque is a criminal offense in India, punishable with imprisonment up to two years or a fine up to twice the cheque amount. We provide specialized legal services for Section 138 cases:
                  </p>
                  <div className="space-y-6">
                    <div className="bg-white border-l-4 border-[#D2A02A] p-6 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">For Complainants (Lenders/Vendors)</h3>
                      <p className="text-gray-700">
                        We help you recover your money by drafting precise legal notices, filing criminal complaints within the statutory limitation period, and prosecuting the accused in court to ensure conviction or settlement.
                      </p>
                    </div>
                    <div className="bg-white border-l-4 border-gray-500 p-6 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">For Accused (Borrowers)</h3>
                      <p className="text-gray-700">
                        If you have been falsely accused or if the cheque was given as security and misused, we defend you by challenging the validity of the notice, proving the absence of legally enforceable debt, and seeking acquittal or compounding of the offense.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Strategic Approach to Banking Disputes</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We follow a structured and strategic approach to handle banking disputes, ensuring that every legal avenue is explored to protect our client's interests.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Case Evaluation & Documentation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We begin by thoroughly reviewing all loan documents, notices received, and correspondence with the bank. This helps us identify any procedural lapses or illegalities committed by the bank.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Notice & Reply</h3>
                        <p className="text-gray-700 leading-relaxed">
                          A strong legal reply to a bank's notice can often resolve the matter before it reaches court. We draft comprehensive replies to Section 13(2) notices under SARFAESI and Section 138 notices.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Litigation & Representation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          If the dispute escalates, we represent you in the DRT, DRAT, High Court, or Supreme Court. We file necessary applications for stay, quashing of FIRs, or setting aside of ex-parte orders.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Settlement & Closure</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Parallel to litigation, we keep the channel for negotiation open. We strive to achieve a One Time Settlement (OTS) that is financially viable for you, ensuring a dignified exit from debt.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Choosing the right lawyer can make the difference between losing your assets and saving them. Here is why we are the preferred choice for banking legal matters:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Specialized Expertise</h3>
                      <p className="text-gray-600">We focus exclusively on banking and financial laws, giving us an edge over general practitioners.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Asset Protection</h3>
                      <p className="text-gray-600">Our primary goal is to protect your hard-earned assets from being seized or auctioned by banks.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Client-Centric</h3>
                      <p className="text-gray-600">We understand the stress of financial disputes and provide compassionate, personalized legal support.</p>
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
                        "We were facing a severe crisis with our business loan and the bank had issued a possession notice for our factory. AMA Legal Solutions obtained a stay order from the DRT and helped us restructure the loan. Their expertise saved our business."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Malhotra</p>
                          <p className="text-sm text-gray-500">Director, Manufacturing Unit, Noida</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was falsely accused in a cheque bounce case by a vendor. The team at AMA Legal Solutions fought my case brilliantly in the magistrate court and got me acquitted. They are truly the best banking lawyers."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Suresh Reddy</p>
                          <p className="text-sm text-gray-500">Business Owner, Hyderabad</p>
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
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Secure Your Financial Future Today</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Don't let legal complications jeopardize your assets. Consult with India's top banking and finance lawyers for expert guidance.
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
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70">
                      Confidential • Strategic • Results-Driven
                    </p>
                  </div>
                </section>
                
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Legal Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior banking lawyers for immediate assistance.
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
                      <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Loan Settlement
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Civil Litigation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/arbitration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Arbitration
                      </Link>
                    </li>
                    
                  </ul>
                </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid serviceName="Banking & Finance" servicePath="banking-and-finance" />
          </div>
        </div>
      </div>
    </>
  );
}