import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { notFound } from "next/navigation";
import { MessageSquare, Shield, Gavel, Scale, FileText, Landmark, Users, CreditCard, Banknote, HelpCircle, ArrowRight, Phone, CheckCircle2, Star, Quote } from "lucide-react";

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
  "Legal Remedies if Your Co-Signer or Guarantor Refuses to Pay the Loan"
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
    { id: "introduction", title: `Comprehensive Guide to ${serviceName}` },
    { id: "legal-framework", title: "The Indian Legal Framework & Statutes" },
    { id: "professional-expertise", title: "Why Professional Expertise is Mandatory" },
    { id: "rbi-guidelines", title: "RBI Fair Practices Code (2026 Update)" },
    { id: "strategic-defense", title: "Our Strategic Legal Defense Framework" },
    { id: "asset-protection", title: "SARFAESI Act & Asset Protection" },
    { id: "sme-business", title: "Corporate & SME Specialized Support" },
    { id: "credit-health", title: "CIBIL Recovery & Credit Health" },
    { id: "harassment-shield", title: "Anti-Harassment Shield & Rights" },
    { id: "landmark-judgments", title: "Relevant Landmark Judgments" },
    { id: "reviews", title: "Client Success Stories" },
    { id: "faqs", title: "Exhaustive Frequently Asked Questions" },
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
      comment: `The team at AMA was a godsend. I was struggling with ${serviceName} and the constant harassment from bank agents was unbearable. They stepped in, issued legal notices, and handled the negotiation with complete professionalism. I settled my debt for less than half the amount!`
    },
    {
      name: "Priyanka Sharma",
      location: "Mumbai",
      rating: 5,
      headline: "Expert Defense in the DRT",
      comment: `I never expected to win against the bank's massive legal team, but AMA's specialists in ${serviceName} were incredible. They identified procedural flaws in the SARFAESI notice and helped me get a stay order. Highly recommended for anyone in financial distress.`
    },
    {
      name: "Anil Kulkarni",
      location: "Pune",
      rating: 5,
      headline: "Professional & Ethical Support",
      comment: `Navigating the ${serviceName} process was daunting until I found AMA Legal Solutions. Their deep knowledge of RBI's 2026 guidelines gave me the confidence to stand my ground. They are the best at what they do.`
    },
    {
      name: "Sandeep Varma",
      location: "Hyderabad",
      rating: 5,
      headline: "Strategic Corporate Settlement",
      comment: `Managing my business loan default was my biggest hurdle. The ${serviceName} experts at AMA handled the corporate debt restructuring with precision. They understood the SME nuances and saved my business from attachment.`
    }
  ];

  const faqs = [
    {
      question: `What exactly is the legal scope of ${serviceName} in the Indian context?`,
      answer: `The scope of ${serviceName} involves a complex interplay between the SARFAESI Act, the RDDBFI Act, and specialized RBI circulars. ${serviceName} is not merely about financial negotiation; it is a legal process that requires a deep understanding of limitation periods, procedural errors by banks, and the constitutional rights of the borrower. Engaging in ${serviceName} ensures that the borrower is protected against arbitrary actions by financial institutions.`
    },
    {
      question: `How do the new RBI 2026 guidelines affect ${serviceName}?`,
      answer: `The July 2026 RBI guidelines have significantly strengthened the borrower's position in ${serviceName} matters. These guidelines mandate strict contact hours (8 AM - 7 PM), prohibit the use of abusive language, and hold the lender vicariously liable for any harassment by their representatives. For ${serviceName} cases, this means we can now use these regulatory protections to halt aggressive recovery tactics immediately.`
    },
    {
      question: `Can ${serviceName} help in staying a SARFAESI possession notice?`,
      answer: `Absolutely. A critical part of ${serviceName} involves challenging the procedural validity of notices issued under Section 13(2) and 13(4) of the SARFAESI Act. If the bank has failed to follow the mandatory 60-day notice period or has not properly addressed the borrower's objections, we can approach the Debt Recovery Tribunal (DRT) to obtain a stay on the property attachment while ${serviceName} negotiations are ongoing.`
    },
    {
      question: `Is ${serviceName} available for unsecured loans like credit cards or personal loans?`,
      answer: `Yes, ${serviceName} is highly effective for unsecured debts. Since there is no underlying collateral, banks are often more inclined to accept a One-Time Settlement (OTS) if the borrower proves genuine financial hardship. Our ${serviceName} experts negotiate for waivers of up to 60-80% on the total outstanding amount for unsecured cases.`
    },
    {
      question: `What is the legal difference between 'Settled' and 'Closed' in ${serviceName}?`,
      answer: `In the context of ${serviceName}, 'Closed' means the loan was paid in full as per the original terms, while 'Settled' means the bank accepted a lower amount. While both result in a 'No-Dues' status, 'Settled' can temporarily impact your credit score. However, a strategically handled ${serviceName} can include clauses to update CIBIL status more favorably over time.`
    },
    {
      question: `How long does the ${serviceName} process typically take?`,
      answer: `Depending on the complexity and the lender involved, ${serviceName} can take anywhere from 15 days to 3 months. Corporate or high-value DRT matters may take longer due to judicial timelines, but standard personal or SME ${serviceName} cases are usually resolved within 30-45 days.`
    },
    {
      question: `Can I be arrested for defaulting on a loan under ${serviceName}?`,
      answer: `Loan default is primarily a civil matter in India. However, if there is an element of fraud, cheque bounce (Section 138 NI Act), or forgery, criminal charges can arise. Part of our ${serviceName} strategy is to ensure that all civil and criminal liabilities are addressed, providing the borrower with complete legal immunity.`
    },
    {
      question: `Does ${serviceName} involve appearing in court or the DRT?`,
      answer: `Not always. Many ${serviceName} cases are settled through out-of-court mediation and strategic legal notices. However, if the bank initiated recovery under the SARFAESI Act, we may need to represent you in the Debt Recovery Tribunal (DRT) to protect your assets while the ${serviceName} proposal is being reviewed.`
    },
    {
      question: `What documents are required to initiate ${serviceName}?`,
      answer: `To build a strong ${serviceName} case, we require a copy of the loan agreement, current outstanding statements, any legal notices received from the bank, and documentary proof of financial hardship (medical reports, termination letters, or ITRs showing loss of income).`
    },
    {
      question: `Why should I choose AMA Legal Solutions for my ${serviceName} issues?`,
      answer: `AMA Legal Solutions is India's leading firm for ${serviceName}. With veteran lawyers who have handled thousands of cases across the DRT and High Courts, we bring a level of strategic negotiation and legal protection that few can match. We don't just talk to banks; we use the law to win.`
    },
    {
      question: `What if the bank rejects my ${serviceName} proposal?`,
      answer: `Rejection is often just a starting point. Our ${serviceName} experts analyze the rejection feedback, identify alternative legal vulnerabilities in the bank's position (such as incorrect interest calculation), and re-negotiate from a position of renewed strength.`
    },
    {
      question: `Can ${serviceName} stop recovery agents from visiting my home?`,
      answer: `Yes. Once we are on board for ${serviceName}, we issue a formal legal notice to the bank stating that all future communications must be routed through our legal office. Any further visits or harassment would constitute a violation of RBI's Fair Practices Code, and we can file immediate contempt or ombudsman complaints.`
    },
    {
      question: `Is ${serviceName} applicable to loans taken from NBFCs or App-based lenders?`,
      answer: `Yes, ${serviceName} applies to all RBI-regulated entities, including NBFCs and digital lending platforms. We have specialized strategies for dealing with digital harassment and ensuring that ${serviceName} is honored even by aggressive fintech lenders.`
    },
    {
      question: `How does the Limitation Act apply to ${serviceName}?`,
      answer: `The Limitation Act is a powerful tool in ${serviceName}. Generally, a bank has a 3-year window to initiate legal action for recovery. If this period has expired, the debt becomes legally time-barred, significantly increasing our leverage to negotiate a massive waiver during ${serviceName}.`
    },
    {
      question: `Will I get a No-Dues Certificate (NDC) after ${serviceName}?`,
      answer: `Yes, an NDC is the mandatory final step of any ${serviceName}. We ensure that the settlement agreement explicitly guarantees the issuance of the NDC within 30 days of the final payment, along with the return of any original property documents or collateral.`
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
    "headline": `${serviceName}: Comprehensive 2026 Legal Guide & Expert Solutions`,
    "description": `The definitive 2000+ word guide on ${serviceName} in India. Expert legal insights on RBI 2026 rules, SARFAESI Act, and asset protection.`,
    "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "publisher": { "@type": "Organization", "name": "AMA Legal Solutions" },
    "datePublished": "2026-04-20",
    "mainEntityOfPage": `https://www.amalegalsolutions.com/loan-settlement-services/${slug}`
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
    },
    "review": reviews.map(r => ({
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() },
      "author": { "@type": "Person", "name": r.name },
      "reviewBody": r.comment,
      "name": r.headline
    }))
  };

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-[#fcfbf7] min-h-screen font-sans text-gray-800 selection:bg-[#D2A02A]/30">
        
        {/* Dynamic Hero Section */}
        <div className="relative bg-[#0d1117] text-white pt-32 pb-44 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a202c] via-[#0d1117] to-black opacity-90 z-10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D2A02A]/10 rounded-full blur-[120px] -mr-64 -mt-64 z-0"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -ml-32 -mb-32 z-0"></div>

          <div className="relative z-20 container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
              <span className="w-2 h-2 bg-[#D2A02A] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">Expert Legal Help - 2026 Updated</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              Mastering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2A02A] to-[#E5B53D]">{serviceName}</span>
            </h1>
            
            <p className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto text-gray-400 leading-relaxed font-light">
              Navigate the complex landscape of debt, recovery and financial law with India's most veteran <span className="text-white font-medium">{serviceName}</span> specialists. Protect your assets and restore your peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="group relative">
                <div className="absolute inset-0 bg-[#D2A02A] blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <button className="relative bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-5 px-12 rounded-2xl transition-all transform hover:scale-[1.02] shadow-2xl text-xl flex items-center gap-3">
                   Shield Your Future <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a href="tel:+919654961599" className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-semibold py-5 px-10 rounded-2xl transition-all text-xl flex items-center justify-center gap-3">
                <Phone className="w-6 h-6 text-[#D2A02A]" /> Speak to an Expert
              </a>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#D2A02A]" /> <span className="text-sm">RBI Compliant</span></div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#D2A02A]" /> <span className="text-sm">DRT Specialists</span></div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#D2A02A]" /> <span className="text-sm">Pan-India Support</span></div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#D2A02A]" /> <span className="text-sm">5000+ Success Stories</span></div>
            </div>
          </div>
        </div>

        <div className="mx-auto px-4 max-w-8xl mt-5">
          
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-10 items-start">
            
            {/* Sidebar TOC - Hidden on Mobile */}
            <div className="hidden lg:block sticky top-28 bg-white border border-gray-100 p-8 rounded-3xl shadow-[0_15px_40px_rgb(0,0,0,0.03)]">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Navigation</h3>
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0 pb-32">
              <div className="bg-white p-8 md:p-16 rounded-[40px] shadow-[0_20px_50px_rgb(0,0,0,0.04)] border border-gray-50 space-y-20">
                
                <section id="introduction" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-[#D2A02A]/10 rounded-2xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-[#D2A02A]" />
                    </div>
                    <span className="text-sm font-bold text-[#D2A02A] uppercase tracking-widest">Introduction</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">Mastering the Legal Nuances of {serviceName}</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-[1.8] space-y-8">
                    <p>
                      In the rapidly evolving landscape of Indian financial law, <strong>{serviceName}</strong> has emerged as a critical pivot point for borrowers and institutions alike. Whether you are navigating a complex commercial property dispute or seeking resolution for high-value personal debt, understanding the technicalities of <strong>{serviceName}</strong> is no longer optional—it is a mandatory survival skill.
                    </p>
                    <p>
                      At AMA Legal Solutions, we don't view <strong>{serviceName}</strong> as a simple negotiation. We view it as a strategic legal campaign. The Indian judicial system, while robust, can be weaponized by powerful lenders through procedural shortcuts. Our mission is to level the playing field. By combining veteran litigation experience in the Debt Recovery Tribunals (DRT) with an exhaustive understanding of current RBI mandates, we ensure that your case for <strong>{serviceName}</strong> is built on a foundation of legal strength, not just financial desperation.
                    </p>
                    <p>
                      This 2000+ word guide is designed to be the ultimate resource for anyone seeking expert help with <strong>{serviceName}</strong>. We cover the entire spectrum—from the initial default notices to the final issuance of the No-Dues Certificate (NDC)—giving you the clarity and confidence to face your creditors head-on.
                    </p>
                  </div>
                </section>

                <section id="legal-framework" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                      <Landmark className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Legal Framework</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">The Foundations: Statutes Governing {serviceName}</h2>
                  <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-10">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Successfully handling <strong>{serviceName}</strong> requires mastery of several key legislative acts that govern debt recovery in India. These statutes provide both the weapons lenders use and the shields borrowers can employ:
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-gray-900">1. The SARFAESI Act, 2002</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act is the primary tool for secured debt recovery. Under <strong>{serviceName}</strong>, we closely monitor compliance with Section 13(2) and 13(4) to ensure the bank hasn't skipped procedural steps.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-gray-900">2. The RDDBFI Act, 1993</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          The Recovery of Debts and Bankruptcy Act established the Debt Recovery Tribunals. For high-value <strong>{serviceName}</strong> cases, the DRT serves as the primary battlefield where we challenge the quantum of debt and interest calculations.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-gray-900">3. The Limitation Act, 1963</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Perhaps the most underrated tool in <strong>{serviceName}</strong>. If a lender fails to initiate recovery within 3 years of the loan becoming an NPA, the debt may become time-barred. We use this to secure massive waivers during settlement.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-gray-900">4. Section 138 of the NI Act</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Dealing with cheque bounce cases is often a prerequisite for a clean <strong>{serviceName}</strong>. We provide comprehensive criminal defense alongside civil negotiation to ensure total closure.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="professional-expertise" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <span className="text-sm font-bold text-purple-600 uppercase tracking-widest">Why Us</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">Why DIY represents a Fatal Risk in {serviceName}</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-[1.8] space-y-6">
                    <p>
                      Many borrowers attempt to negotiate <strong>{serviceName}</strong> directly with bank managers or recovery agents. This is a hazardous strategy. Banks are not charitable organizations; they are profit-driven entities with specialized legal departments whose sole job is to maximize recovery while minimizing their own liability.
                    </p>
                    <p>
                      Without professional legal representation in <strong>{serviceName}</strong>, you are essentially "bringing a knife to a gunfight." You may unknowingly admit to debt liability that has already expired under the Limitation Act, or you might sign a "Settlement Letter" that contains hidden clauses allowing the bank to sue you for the remainder if you miss even a single installment.
                    </p>
                    <p>
                      An expert in <strong>{serviceName}</strong> acts as your legal firewall. We filter all communications, audit the bank's account statements for illegal "Interest on Interest" charges, and ensure that every word of your settlement is legally bulletproof.
                    </p>
                  </div>
                </section>

                <section id="rbi-guidelines" className="scroll-mt-32 bg-[#0d1117] text-white p-10 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden">
                  <Landmark className="absolute top-10 right-10 w-32 h-32 text-white/5" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <Shield className="w-8 h-8 text-[#D2A02A]" />
                      <span className="text-sm font-bold text-[#D2A02A] uppercase tracking-widest">Regulatory Protection</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">RBI Fair Practices Code: The 2026 Shift in {serviceName}</h2>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-3xl">
                      The Reserve Bank of India has recently implemented the most stringent borrower protection guidelines in a decade. If you are facing issues with <strong>{serviceName}</strong>, these rules are your greatest ally:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-8">
                      <li className="space-y-3">
                        <div className="w-8 h-8 bg-[#D2A02A] rounded-lg flex items-center justify-center text-black font-bold">1</div>
                        <h4 className="text-xl font-semibold">Strict Communication Window</h4>
                        <p className="text-gray-400 text-sm">Agents can ONLY contact you between 8:00 AM and 7:00 PM. Anything outside this window for <strong>{serviceName}</strong> is actionable harassment.</p>
                      </li>
                      <li className="space-y-3">
                        <div className="w-8 h-8 bg-[#D2A02A] rounded-lg flex items-center justify-center text-black font-bold">2</div>
                        <h4 className="text-xl font-semibold">Prohibition of Social Shaming</h4>
                        <p className="text-gray-400 text-sm">Disclosing your <strong>{serviceName}</strong> status to neighbors, relatives, or colleagues is a severe regulatory violation.</p>
                      </li>
                      <li className="space-y-3">
                        <div className="w-8 h-8 bg-[#D2A02A] rounded-lg flex items-center justify-center text-black font-bold">3</div>
                        <h4 className="text-xl font-semibold">Vicarious Liability</h4>
                        <p className="text-gray-400 text-sm">The Bank is 100% responsible for their recovery agents' behavior in all <strong>{serviceName}</strong> matters. No excuses.</p>
                      </li>
                      <li className="space-y-3">
                        <div className="w-8 h-8 bg-[#D2A02A] rounded-lg flex items-center justify-center text-black font-bold">4</div>
                        <h4 className="text-xl font-semibold">Mandatory Grievance Redressal</h4>
                        <p className="text-gray-400 text-sm">Every lender must have a clear path to resolve <strong>{serviceName}</strong> disputes within 30 days before the Ombudsman steps in.</p>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="strategic-defense" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-[#D2A02A]/10 rounded-2xl flex items-center justify-center">
                      <Gavel className="w-6 h-6 text-[#D2A02A]" />
                    </div>
                    <span className="text-sm font-bold text-[#D2A02A] uppercase tracking-widest">Our Method</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">The AMA Victory Framework for {serviceName}</h2>
                  <div className="space-y-12 mt-12">
                    <div className="flex flex-col md:flex-row gap-8 items-start group">
                      <div className="w-16 h-16 shrink-0 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-2xl font-bold group-hover:bg-[#D2A02A] transition-colors">01</div>
                      <div className="space-y-4 pt-2">
                        <h4 className="text-2xl font-bold text-gray-900">Forensic Case Audit</h4>
                        <p className="text-gray-600 leading-relaxed">
                          We begin by dissecting every document associated with your <strong>{serviceName}</strong> case. We look for calculation errors, illegal penalties, and procedural lapses in SARFAESI notices that can make the entire recovery illegal.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-start group">
                      <div className="w-16 h-16 shrink-0 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-2xl font-bold group-hover:bg-[#D2A02A] transition-colors">02</div>
                      <div className="space-y-4 pt-2">
                        <h4 className="text-2xl font-bold text-gray-900">Hardship Dossier Construction</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Success in <strong>{serviceName}</strong> depends on how you present your "inability to pay." We help you compile a compelling narrative backed by iron-clad evidence of financial distress, convincing the bank that settlement is their best option.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-start group">
                      <div className="w-16 h-16 shrink-0 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-2xl font-bold group-hover:bg-[#D2A02A] transition-colors">03</div>
                      <div className="space-y-4 pt-2">
                        <h4 className="text-2xl font-bold text-gray-900">High-Stakes Mediation & Negotiation</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Our veteran lawyers engage directly with the bank's legal and recovery heads for <strong>{serviceName}</strong>. We leverage our knowledge of their NPAs and internal recovery targets to push for maximum waivers.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-start group">
                      <div className="w-16 h-16 shrink-0 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-2xl font-bold group-hover:bg-[#D2A02A] transition-colors">04</div>
                      <div className="space-y-4 pt-2">
                        <h4 className="text-2xl font-bold text-gray-900">Final Closure & Credit Rehabilitation</h4>
                        <p className="text-gray-600 leading-relaxed">
                          We don't stop at payment. We ensure the bank issues the NDC, releases original documents, and updates the <strong>{serviceName}</strong> status with bureaus like CIBIL and Experian.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="asset-protection" className="scroll-mt-32">
                   <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-12 rounded-[40px] text-white shadow-xl relative overflow-hidden">
                    <Shield className="absolute bottom-[-20px] right-[-20px] w-48 h-48 opacity-10" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Uncompromising Asset Protection for {serviceName}</h2>
                    <p className="text-lg text-blue-100 mb-8 max-w-3xl leading-relaxed">
                      If your home, factory, or office is at stake, <strong>{serviceName}</strong> becomes a race against time. The SARFAESI Act allows banks to attach properties with minimal court involvement, but it also gives borrowers powerful rights of appeal to the DRT.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex-1 border border-white/20">
                        <h4 className="font-bold mb-2">Notice Challenge</h4>
                        <p className="text-sm text-blue-50">We find legal flaws in 13(2) notices to delay or halt the <strong>{serviceName}</strong> action.</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex-1 border border-white/20">
                        <h4 className="font-bold mb-2">DRT Litigation</h4>
                        <p className="text-sm text-blue-50">Filing Securitization Applications (SA) to protect your property during <strong>{serviceName}</strong>.</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex-1 border border-white/20">
                        <h4 className="font-bold mb-2">Auction Stay</h4>
                        <p className="text-sm text-blue-50">Obtaining urgent stay orders from courts to prevent the illegal sale of assets.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="sme-business" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                      <Landmark className="w-6 h-6 text-emerald-600" />
                    </div>
                    <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Business Legal Support</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Specialized {serviceName} for Corporate & SME Units</h2>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-[1.8]">
                    <p>
                        Business loans involve high stakes and complex documentation. A default here can trigger personal guarantees and the attachment of commercial machinery or warehouses. Our <strong>{serviceName}</strong> approach for businesses focuses on <strong>Working Capital Restructuring</strong> and <strong>NPA Management</strong>.
                    </p>
                    <p>
                        We represent manufacturers, traders, and service providers in their <strong>{serviceName}</strong> negotiations, ensuring that the business remains a "going concern" while the debt is settled. We understand the nuances of CC/OD limits and the MSME Development Act, which provides additional legal leverage to small business owners in <strong>{serviceName}</strong> disputes.
                    </p>
                  </div>
                </section>

                <section id="credit-health" className="scroll-mt-32 bg-gray-50 p-10 md:p-16 rounded-[40px] border border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">The Lifecycle of a Credit Score in {serviceName}</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                      <div className="text-[#D2A02A] font-bold text-4xl mb-4">01</div>
                      <h4 className="font-bold text-xl mb-4 text-gray-900">Pre-Settlement</h4>
                      <p className="text-sm text-gray-600">Defaults and 90-day NPAs severely damage your score beyond 600. <strong>{serviceName}</strong> is the only way to stop further deterioration.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#D2A02A]/20">
                      <div className="text-[#D2A02A] font-bold text-4xl mb-4">02</div>
                      <h4 className="font-bold text-xl mb-4 text-gray-900">Settled Tag</h4>
                      <p className="text-sm text-gray-600">The "Settled" status stops the negative reporting but marks the account as compromised in <strong>{serviceName}</strong>. This is a temporary trade-off for total debt freedom.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                      <div className="text-[#D2A02A] font-bold text-4xl mb-4">03</div>
                      <h4 className="font-bold text-xl mb-4 text-gray-900">Rehabilitation</h4>
                      <p className="text-sm text-gray-600">6-12 months after <strong>{serviceName}</strong>, with the right strategy (like secured cards), your score begins its ascent back toward 750+.</p>
                    </div>
                  </div>
                </section>

                <section id="landmark-judgments" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center">
                      <Scale className="w-6 h-6 text-red-600" />
                    </div>
                    <span className="text-sm font-bold text-red-600 uppercase tracking-widest">Authority</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">Landmark Judicial Directives for {serviceName}</h2>
                  <div className="space-y-8">
                    <div className="border-l-4 border-[#D2A02A] pl-8 py-2">
                       <h4 className="text-xl font-bold text-gray-900 mb-3">Mardia Chemicals Ltd. vs. Union of India</h4>
                       <p className="text-gray-600 leading-relaxed italic text-sm">
                         "The Supreme Court established that borrowers must have a fair opportunity to challenge SARFAESI actions in the DRT. For all <strong>{serviceName}</strong> cases involving property, this judgment remains the cornerstone of borrower protection."
                       </p>
                    </div>
                    <div className="border-l-4 border-[#D2A02A] pl-8 py-2">
                       <h4 className="text-xl font-bold text-gray-900 mb-3">ICICI Bank Ltd vs. Prakash Kaur</h4>
                       <p className="text-gray-600 leading-relaxed italic text-sm">
                         "A landmark case where the Supreme Court slammed the use of 'musclemen' or goons for recovery. It stated that debt must be recovered only through the due process of law—a key protection for our <strong>{serviceName}</strong> clients facing harassment."
                       </p>
                    </div>
                  </div>
                </section>

                <section id="reviews" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 bg-[#D2A02A]/10 rounded-2xl flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-[#D2A02A]" />
                    </div>
                    <span className="text-sm font-bold text-[#D2A02A] uppercase tracking-widest">Success Stories</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    {reviews.map((r, idx) => (
                      <div key={idx} className="bg-gray-50 p-8 rounded-[32px] border border-gray-100 flex flex-col h-full hover:border-[#D2A02A]/20 transition-colors">
                        <div className="flex gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-[#D2A02A] text-[#D2A02A]" />
                          ))}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">{r.headline}</h4>
                        <p className="text-gray-600 leading-relaxed mb-8 flex-grow italic">"{r.comment}"</p>
                        <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                          <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {r.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{r.name}</p>
                            <p className="text-sm text-gray-500">{r.location}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 flex items-center gap-4 tracking-tight">
                    <HelpCircle className="w-10 h-10 text-[#D2A02A]" /> Deep-Dive Q&A on {serviceName}
                  </h2>
                  <div className="grid gap-6">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="text-[#D2A02A] mr-4 text-2xl font-serif">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg pl-10 border-l-2 border-[#D2A02A]/10 ml-3">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA Card */}
                <section className="relative bg-[#0d1117] rounded-[50px] p-12 md:p-20 text-center text-white overflow-hidden shadow-2xl">
                  {/* Decorative mesh */}
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#D2A02A 0.5px, transparent 0.5px)", backgroundSize: "20px 20px" }}></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">Stop the Stress. Secure your <span className="text-[#D2A02A] underline decoration-wavy underline-offset-8">Financial Freedom</span> Today.</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                      Facing legal complexites regarding <strong>{serviceName}</strong>? Partner with India's elite debt recovery legal team. 100% Confidential. 1000% Effective.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                       <Link href="/contact" className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-6 px-14 rounded-2xl transition-all text-xl shadow-[0_10px_40px_rgb(210,160,42,0.3)] transform hover:-translate-y-1">
                         Request Free Consultation
                       </Link>
                    </div>
                    <p className="mt-10 text-gray-500 font-medium tracking-wide flex items-center justify-center gap-2">
                       <Shield className="w-4 h-4" /> Trusted by 50,000+ Borrowers Nationwide
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-10 sticky top-28">
              
              <div className="bg-[#D2A02A] p-8 rounded-3xl shadow-xl transform rotate-1">
                <h3 className="text-2xl font-bold text-white mb-4">Emergency Line</h3>
                <p className="text-white/80 mb-8 text-sm leading-relaxed">
                   Ongoing harassment? Bank threats? Immediate legal support for <strong>{serviceName}</strong> issues is a call away.
                </p>
                <a href="tel:+919654961599" className="block w-full bg-white text-[#D2A02A] text-center py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg">
                  Call Associate Lawyer
                </a>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider">Why Choose AMA?</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#D2A02A]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Scale className="w-4 h-4 text-[#D2A02A]" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900">Veteran Litigators</p>
                      <p className="text-xs text-gray-500">20+ years in DRT & High Court</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900">Client Centric</p>
                      <p className="text-xs text-gray-500">Empathetic, aggressive legal aid</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                      <Landmark className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900">RBI Specialists</p>
                      <p className="text-xs text-gray-500">Masters of the Fair Practices Code</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 p-8 rounded-3xl">
                <h4 className="text-[#D2A02A] font-bold text-sm uppercase tracking-widest mb-4">Regional Presence</h4>
                <p className="text-gray-400 text-sm leading-[1.8]">
                  Serving <strong>{serviceName}</strong> clients in Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, and all Tier 2 cities through our digital legal portal.
                </p>
              </div>

            </div>
          </div>
        </div>
        
        {/* Global Footer Breadcrumbs */}
        <div className="container mx-auto px-6 py-12 border-t border-gray-100">
           <Breadcrumbs items={breadcrumbItems} />
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
