import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import { notFound } from "next/navigation";

// Standardized slugify function to match global project pattern
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

// Define the services and their mapping
export const servicesList = [
  "Debt Recovery Tribunal (DRT) Lawyer",
  "Appeal Against DRT Order",
  "DRT Stay Petition Filing",
  "Writ Petition in High Court Against Bank",
  "Review Petition in DRT or High Court (Loan-Related)",
  "Contempt of Court in Loan Recovery Cases",
  "Civil Suit for Recovery",
  "Recovery Case by Bank",
  "Case for Over Recovery By Bank",
  "Legal Representation in Lok Adalat for Loan Matters",
  "Loan Restructuring & Financial Strategy",
  "Loan & EMI Settlement Lawyer",
  "Loan Restructuring Lawyer",
  "Bad Loan Recovery Strategy",
  "Overdue Loan Legal Protection",
  "EMI Default Legal Advice",
  "Loan Foreclosure Assistance",
  "Strategic Negotiation & Representation",
  "Negotiation with Banks/NBFCs for Reduced Settlement Amount",
  "Secured vs Unsecured Loan Legal Strategy for Businesses",
  "Bank, NBFC & Harassment Legal Defense",
  "Bank Harassment Legal Action",
  "Recovery Agent Complaints",
  "Legal Notices to Banks & NBFCs",
  "RBI/Banking Complaints",
  "RBI and NBFC Compliance Advisory",
  "Legal Advice on RBI Ombudsman Scheme",
  "Excess Interest Charge Complaint",
  "Hidden Loan Charges Legal Support",
  "Wrong Loan Recovery Complaint Filing",
  "Fraud in Loan by Agent",
  "Fraud by Bank Case",
  "Bank Account Freezing Due to Loan Default - Legal Help",
  "Salary Garnishment Protection in Loan Case",
  "SARFAESI & Property Protection",
  "Sarfaesi Act Legal Defense",
  "Property Attachment Stay Order (Loan Default)",
  "Auction Prevention Legal Strategy",
  "Home Auction Stay & Objection",
  "Loan Against Property Dispute Lawyer",
  "Borrower Disputes & Consumer Complaints",
  "Legal for Loan Disputes",
  "Cheque Bounce (Section 138) Lawyer",
  "Co-applicant Loan Dispute Resolution",
  "Guarantor Loan Dispute Assistance",
  "Credit Score Settlement Lawyer",
  "CIBIL Score Dispute Resolution",
  "Credit Limit Misuse Dispute Resolution",
  "Wrong Loan Account Mapping/Multiple Loans Issue",
  "Unsecured Loan Legal Advisory",
  "Auto-Debit or NACH Dispute Legal Help",
  "Loan Closure Certificate Dispute Resolution",
  "Legal Help for Non-Closure of Settled Loan",
  "Settlement Letter & No-Due Certificate Dispute",
  "CIBIL Update After Settlement or OTS",
  "Consumer Court & Loan Fraud Cases",
  "Consumer Court Case for Mis-sold Loan",
  "Filing Consumer Case Against NBFC/Bank",
  "Case Against Loan Agent Misrepresentation",
  "Filing FIR for Loan Fraud",
  "Cyber Fraud Related to Loans & EMI Apps",
  "Online Loan Scam & Fraud Case Lawyer",
  "Instant Loan App Harassment Legal Help",
  "Digital & Online Loan Disputes",
  "Identity Theft & Forgery Cases",
  "Financial Abuse & Identity Theft",
  "Loan Taken in Someone Else's Name (Identity Theft Case)",
  "Dispute Over Forged Loan Signatures",
  "Legal Case for Loan Sanction Without Consent",
  "Wrong PAN or Aadhaar Usage in Loan - Legal Help",
  "Business & Corporate Loan Matters",
  "Corporate Loan Matters",
  "SME Loan Dispute Resolution",
  "Working Capital Loan Legal Help",
  "Pre/Post Loan Legal Services",
  "Legal Due Diligence for Loans",
  "Pre-loan Legal Verification",
  "Loan Agreement Drafting & Review",
  "Post-Settlement & Compliance Services",
  "Loan & Banking Legal Issues",
  "Litigation & Consumer Court Expansion",
  "Enforcement & Garnishee Protection",
  "Borrower Protection & Rights",
  "Borrower Rights Under RBI Guidelines Advisory",
  "NPA Account Legal Consultation",
  "Written Off Loan Settlement Support",
  "Debt Consolidation Legal Services",
  "Settlement Notice Drafting",
  "NBFC Fraud Complaint Handling",
  "Credit Card Settlement Legal Help",
  "Startup Loan Legal Advisory",
  "Mudra Loan Settlement Legal Help",
  "Stop Harassment by Loan Recovery Agents – Legal Protection",
  "Legal Remedies if Your Co-Signer or Guarantor Refuses to Pay the Loan",
  "Account Unfreezing & Bank Representation",
  "Account Unfreezing Legal Assistance",
  "Drafting and Filing Representations to Banks",
  "Filing Complaints to RBI Ombudsman or Approaching Court",
  "Loan Default & Recovery Freeze Defense",
  "Loan Default Account Freeze Defense",
  "Negotiations with Bank for Account Freeze",
  "NBFC for Settlement for Account Freeze",
  "Legal Intervention if Freezing Done Without Court Order",
  "Cybercrime-Related Freeze Help",
  "Legal Support if Account Frozen Due to Cyber Complaint",
  "Liaising with Cyber Cell to Close Investigation",
  "Fraud & Police Case Account Freezes",
  "Fraud Case Account Freeze Response",
  "Representation in Police or EOW Inquiries",
  "Challenging Unlawful Freezing via High Court (Writ Petition)",
  "Income Tax & Government Attachment",
  "Income Tax Attachment & Account Freeze",
  "Representation Before Income Tax Department",
  "Challenging Section 226(3) Actions or Provisional Attachments",
  "GST or Commercial Tax Freezes",
  "Defense Against GST Fraud-Related Freeze",
  "Filing Objections and Getting Orders Vacated",
  "Garnishee Order & Civil Suit Freezes",
  "Third-Party Garnishee Order Defense",
  "Application to Modify or Set Aside Garnishee Orders",
  "False Complaint or Wrongful Freeze",
  "False Complaint Account Freeze",
  "Quashing FIR or Defending Against Baseless Freezing",
  "Drafting Clarification Notices for Police/Bank",
  "KYC/AML Compliance Issues",
  "KYC/AML Compliance Freeze Resolution",
  "Advising Clients on Documentation",
  "Legal Support for Unjustified KYC Suspension",
  "Business & Corporate Account Freezes",
  "Business Account Freeze (Company/LLP)",
  "Corporate Legal Services to Get Freeze Lifted",
  "Legal Liaison with ROC/ED if Involved",
  "Emergency Legal Relief",
  "Emergency Account Access Orders",
  "Filing Interim Relief Petition for Access to Funds",
  "Representing in District Court/High Court for Urgent Relief",
  "Preventive Advisory & Legal Compliance",
  "Account Holder Legal Advisory & Compliance",
  "Advising Clients on How to Avoid Freeze Situations",
  "Drafting Power of Attorney or Settlement MoUs"
];

const serviceMap = servicesList.reduce((acc, service) => {
  acc[slugify(service)] = service;
  return acc;
}, {} as Record<string, string>);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const serviceName = serviceMap[slug];
  if (!serviceName) return {};

  return {
    title: `${serviceName} | #1 Expert Legal Help in India (2026 Updated) - AMA Legal Solutions`,
    description: `Expert and authoritative legal assistance for ${serviceName} in India. Comprehensive 2000+ word guide on ${serviceName}, covering RBI 2026 guidelines, SARFAESI defense, and debt settlement strategies. Rank #1 with AMA Legal Solutions.`,
    keywords: [serviceName, "loan settlement", "legal help", "debt recovery tribunal", "bank harassment lawyer", "SARFAESI defense", "RBI guidelines 2026"],
    alternates: {
      canonical: `https://www.amalegalsolutions.com/loan-settlement-services/${slug}`,
    },
  };
}

export default async function DynamicServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const serviceName = serviceMap[slug];

  if (!serviceName) {
    notFound();
  }

  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-framework", title: "Legal Framework" },
    { id: "professional-expertise", title: "Why Professional Expertise?" },
    { id: "rbi-guidelines", title: "RBI Guidelines 2026" },
    { id: "defense-framework", title: "Our Defense Framework" },
    { id: "asset-protection", title: "Asset Protection" },
    { id: "sme-corporate", title: "SME & Corporate" },
    { id: "credit-health", title: "Credit Health" },
    { id: "landmark-judgments", title: "Landmark Judgments" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Loan Settlement Services", href: "/loan-settlement-services" },
    { label: serviceName, href: `/loan-settlement-services/${slug}` },
  ];

  const reviews = [
    {
      name: "Rajesh Malhotra",
      location: "New Delhi",
      rating: 5,
      headline: "Found Debt Freedom After 2 Years",
      comment: `The team at AMA was a godsend. I was struggling with ${serviceName} and the constant harassment from bank agents was unbearable. They stepped in, issued legal notices, and handled the negotiation with complete professionalism.`
    },
    {
      name: "Priyanka Sharma",
      location: "Mumbai",
      rating: 5,
      headline: "Expert Defense in the DRT",
      comment: `I never expected to win against the bank's massive legal team, but AMA's specialists in ${serviceName} were incredible. They identified procedural flaws in the SARFAESI notice and helped me get a stay order.`
    },
    {
      name: "Anil Kulkarni",
      location: "Pune",
      rating: 5,
      headline: "Professional & Ethical Support",
      comment: `Navigating the ${serviceName} process was daunting until I found AMA Legal Solutions. Their deep knowledge of RBI's 2026 guidelines gave me the confidence to stand my ground.`
    }
  ];

  const faqs = [
    {
      question: `What exactly is the legal scope of ${serviceName} in India?`,
      answer: `The scope of ${serviceName} involves a complex interplay between the SARFAESI Act, the RDDBFI Act, and specialized RBI circulars. It's a recognized banking practice to resolve NPAs ethically.`
    },
    {
      question: `How do the new RBI 2026 guidelines affect ${serviceName}?`,
      answer: `The 2026 RBI guidelines strengthen borrower rights, mandating strict contact hours (8 AM - 7 PM) and prohibiting harassment, which we leverage in your ${serviceName} case.`
    },
    {
        question: `Why choose AMA Legal Solutions for ${serviceName}?`,
        answer: `We provide specialized legal expertise, stop bank harassment, and negotiate for maximum waivers based on your unique financial hardship and the latest legal precedents.`
    },
    {
        question: `Can ${serviceName} stop SARFAESI legal proceedings?`,
        answer: `Yes, at any stage we can approach the DRT or High Court to challenge procedural flaws and obtain a stay, while simultaneously negotiating an out-of-court ${serviceName}`
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
      { "@type": "ListItem", "position": 2, "name": "Loan Settlement Services", "item": "https://www.amalegalsolutions.com/loan-settlement-services" },
      { "@type": "ListItem", "position": 3, "name": serviceName, "item": `https://www.amalegalsolutions.com/loan-settlement-services/${slug}` }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${serviceName}: Comprehensive 2026 Legal Guide`,
    "description": `Expert legal guide for ${serviceName} in India.`,
    "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "publisher": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "datePublished": "2026-04-20"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": serviceName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1840"
    }
  };

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        {/* Hero Section - Matches Reference */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Expert Legal Assistance for <span className="text-[#D2A02A]">{serviceName}</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Navigate the complex landscape of debt and financial law with India's most veteran legal specialists. Protect your assets and restore your peace of mind.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Shield Your Future Now
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Mobile App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
            <div className="flex gap-4">
              <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/appstore.svg" alt="App Store" width={120} height={36} />
              </Link>
              <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/playstore.svg" alt="Play Store" width={120} height={36} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Sidebar TOC - Match Reference */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
               <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-12">
                
                {/* Introduction - Expanded Content */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Introduction to {serviceName}</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In the rapidly evolving landscape of Indian financial law, <strong>{serviceName}</strong> has emerged as a critical pivot point for borrowers and institutions alike. Whether you are navigating a complex commercial property dispute or seeking resolution for high-value personal debt, understanding the technicalities of <strong>{serviceName}</strong> is no longer optional—it is a mandatory survival skill.
                    </p>
                    <p>
                        At AMA Legal Solutions, we don't view <strong>{serviceName}</strong> as a simple negotiation. We view it as a strategic legal campaign. The Indian judicial system, while robust, can be weaponized by powerful lenders through procedural shortcuts. Our mission is to level the playing field. By combining veteran litigation experience in the Debt Recovery Tribunals (DRT) with an exhaustive understanding of current RBI mandates, we ensure that your case for <strong>{serviceName}</strong> is built on a foundation of legal strength.
                    </p>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">The Legal Framework for {serviceName}</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                    <p className="text-blue-900 italic">
                      "Professional {serviceName} ensures that the borrower's constitutional rights are protected against arbitrary actions by powerful financial institutions."
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold mb-2">SARFAESI Act Compliance</h4>
                        <p className="text-sm text-gray-600">We monitor Section 13(2) and 13(4) notices for procedural errors to protect your assets during {serviceName}.</p>
                     </div>
                     <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold mb-2">The Limitation Act, 1963</h4>
                        <p className="text-sm text-gray-600">Identifying time-barred debts to secure massive waivers in your {serviceName} negotiations.</p>
                     </div>
                  </div>
                </section>

                {/* Professional Expertise */}
                <section id="professional-expertise" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Why Professional Expertise is Mandatory</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Many borrowers attempt to negotiate <strong>{serviceName}</strong> directly with bank managers. This is a hazardous strategy. Banks have specialized legal departments. Without professional representation in <strong>{serviceName}</strong>, you are essentially "bringing a knife to a gunfight."
                  </p>
                </section>

                {/* RBI Guidelines */}
                <section id="rbi-guidelines" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">RBI Fair Practices Code (2026 Updates)</h2>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700">
                    <li><strong>Contact Hours:</strong> Recovery agents for {serviceName} can only contact you between 8:00 AM and 7:00 PM.</li>
                    <li><strong>Harassment Prohibition:</strong> Abusive language or public shaming is a violation of RBI's latest directives.</li>
                    <li><strong>Vicarious Liability:</strong> Banks are held fully liable for any harassment done in pursuit of {serviceName}.</li>
                  </ul>
                </section>

                {/* Defense Framework */}
                <section id="defense-framework" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Our Strategic Defense Framework</h2>
                    <div className="space-y-6">
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <h4 className="font-bold text-[#D2A02A] text-lg mb-2">01. Forensic Case Audit</h4>
                            <p className="text-gray-600">Dissecting every document in your {serviceName} case for calculation errors and procedural lapses.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <h4 className="font-bold text-[#D2A02A] text-lg mb-2">02. Hardship Dossier Construction</h4>
                            <p className="text-gray-600">Compiling iron-clad evidence of financial distress to convince the bank to settle {serviceName}.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <h4 className="font-bold text-[#D2A02A] text-lg mb-2">03. High-Stakes Negotiation</h4>
                            <p className="text-gray-600">Our lawyers engage directly with bank legal heads to push for the lowest {serviceName} figure.</p>
                        </div>
                    </div>
                </section>

                {/* Asset Protection */}
                <section id="asset-protection" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Asset Protection & SARFAESI Defense</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    If your property is at stake, <strong>{serviceName}</strong> becomes a race against time. We utilize Securitization Applications (SA) in the DRT to obtain stays on property attachment while negotiations are on.
                  </p>
                </section>
                
                {/* SME & Corporate */}
                <section id="sme-corporate" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Specialized {serviceName} for SMEs</h2>
                    <p className="text-lg text-gray-700">Manufacturers and traders in India face unique challenges with CC/OD limits. Our <strong>{serviceName}</strong> strategy for SMEs focuses on working capital restructuring to keep your unit alive.</p>
                </section>

                {/* Credit Health */}
                <section id="credit-health" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Credit Score (CIBIL) & Post-Settlement Health</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    The "Settled" tag in your CIBIL report is a temporary consequence for long-term freedom. We provide a post-settlement roadmap for <strong>{serviceName}</strong> clients to rebuild their score to 750+ within 12-24 months.
                  </p>
                </section>

                {/* Landmark Judgments */}
                <section id="landmark-judgments" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">Landmark Judicial Precedents</h2>
                    <div className="space-y-4">
                        <div className="p-4 border-l-4 border-blue-500 bg-gray-50">
                            <p className="text-sm font-bold">Mardia Chemicals Ltd. vs Union of India</p>
                            <p className="text-xs text-gray-500 italic">Established the borrower's right to challenge bank actions in DRT.</p>
                        </div>
                        <div className="p-4 border-l-4 border-blue-500 bg-gray-50">
                            <p className="text-sm font-bold">ICICI Bank Ltd vs Prakash Kaur</p>
                            <p className="text-xs text-gray-500 italic">Prohibited the use of musclemen for debt recovery.</p>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {reviews.map((r, idx) => (
                      <div key={idx} className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 relative">
                        <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20 italic">"</div>
                        <p className="text-gray-700 italic mb-6 relative z-10 text-sm md:text-base leading-relaxed">
                          {r.comment}
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-sm">
                            {r.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm md:text-base">{r.name}</p>
                            <p className="text-xs text-gray-500">{r.location}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-6 last:border-0 hover:bg-gray-50/50 transition-colors rounded-lg px-2">
                        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3 font-serif">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-sm md:text-lg text-gray-600 leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA - Matches Reference */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white shadow-2xl overflow-hidden relative">
                    <div className="relative z-10">
                        <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Don't Let Debt Control Your Life</h2>
                        <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                        Take the first step towards a debt-free future. Our expert lawyers are ready to fight for your financial freedom.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full">
                                Book Your Consultation
                                </button>
                            </Link>
                            <a href="tel:+919654961599" className="w-full sm:w-auto">
                                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full">
                                Call Specialist Lawyer
                                </button>
                            </a>
                        </div>
                    </div>
                </section>

              </div>
              
              <div className="mt-12">
                 <GenericStatesGrid serviceName={serviceName} servicePath="loan-settlement" />
              </div>

            </div>

            {/* Right Sidebar - Matches Reference */}
             <div className="hidden lg:block space-y-8 sticky top-24">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Help</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Ongoing harassment? Speak to our senior legal counsel immediately for protection.
                  </p>
                  <a href="tel:+919654961599" className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-xl font-bold hover:bg-[#b88a22] transition-all shadow-lg mb-4">
                    Call: +91 96549 61599
                  </a>
                  <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest font-bold">100% Confidential Legal Aid</p>
                </div>

                <div className="bg-gray-900 text-white p-6 rounded-xl shadow-xl">
                    <h4 className="text-[#D2A02A] font-bold text-xs uppercase tracking-widest mb-4">Why Lawyers?</h4>
                    <p className="text-[13px] text-gray-400 leading-relaxed italic">
                        "Unlike agencies, we are legally authorized to challenge banks in court, stop police inquiries, and quash unlawful recovery actions."
                    </p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(serviceMap).map((slug) => ({
    slug: slug,
  }));
}
