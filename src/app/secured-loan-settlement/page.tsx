import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import GenericStatesGrid from "@/components/GenericStatesGrid";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What exactly is secured loan settlement and how does it differ from unsecured settlement?",
    answer: "Secured loan settlement is a legal process where you negotiate with a lender to close a loan backed by collateral, such as your home or business property, for a reduced amount. Unlike unsecured settlement, the bank has the power to seize and sell your asset under the SARFAESI Act. Therefore, the negotiation is much more complex and requires proving that the asset's recovery value is lower than the settlement offer or that you have a viable legal defense to halt the auction process."
  },
  {
    question: "Is it possible to settle a home loan if the bank has already issued a SARFAESI notice?",
    answer: "Yes, it is absolutely possible. In fact, many settlements happen after the Section 13(2) and 13(4) notices are issued. Banks often prefer a certain lump sum payment today over the long and uncertain process of property auction, which can be stalled by legal challenges in the Debt Recovery Tribunal. However, you must act quickly before the actual physical possession or auction date is finalized."
  },
  {
    question: "How much waiver can I realistically expect in a secured loan settlement?",
    answer: "While unsecured loans may see waivers of 50 to 70 percent, secured loan waivers are typically lower, ranging from 20 to 45 percent of the total outstanding. This is because the bank has the security of the property. The exact percentage depends on the current market value of the property, the legal status of the case, and your ability to pay a lump sum immediately."
  },
  {
    question: "Can I settle my loan if the matter is already in the Debt Recovery Tribunal (DRT)?",
    answer: "Yes. Many DRT cases end in a compromise settlement. Often, filing a Securitization Application in the DRT to challenge the bank's procedural errors gives you the leverage needed to bring the bank to the negotiating table. A settlement agreed upon during litigation is usually recorded as a consent decree, providing high legal security for both parties."
  },
  {
    question: "What happens to my property documents after the settlement is complete?",
    answer: "Once you pay the agreed settlement amount and receive the No Dues Certificate, the bank is legally obligated to return all original title deeds and property documents. They must also file a satisfaction of charge with the CERSAI and the Registrar Office to ensure your property title is clear and free from any encumbrances."
  },
  {
    question: "Will settling a secured loan affect my CIBIL score?",
    answer: "Yes, it will be marked as 'Settled' on your credit report. This will impact your score, but it is far better than having an 'Active Default' or an 'Auction' recorded. An auction record makes it almost impossible to get credit for many years, whereas a settled status allows you to start rebuilding your credit journey within 18 to 24 months."
  },
  {
    question: "Can recovery agents come to my house for a secured loan?",
    answer: "While banks can send authorized representatives, any form of harassment, intimidation, or use of muscle power is illegal under RBI guidelines. For secured loans, the bank must follow the formal legal route of SARFAESI for possession. They cannot forcibly evict you without following the due process of law, which includes obtaining an order from the Chief Metropolitan Magistrate or District Magistrate."
  },
  {
    question: "Do I need a lawyer for a secured loan settlement?",
    answer: "Given that your valuable assets like your home or factory are at stake, having legal representation is highly recommended. A lawyer can identify procedural flaws in the bank's notices, file protective applications in the DRT, and negotiate with the bank's high level credit committee to ensure you get the best possible terms while protecting your property from auction."
  },
  {
    question: "What is a 'Consent Decree' in the context of loan settlement?",
    answer: "A consent decree is a court order issued when both parties in a lawsuit agree to settle their dispute. In loan cases, if the bank and borrower agree on a settlement while a case is pending in the DRT or Civil Court, they can record the terms as a consent decree. This makes the settlement terms legally enforceable by the court itself, adding an extra layer of protection for the borrower."
  },
  {
    question: "Can I settle a loan that was taken for business purposes using my home as collateral?",
    answer: "Yes, this is very common. Loan Against Property or business loans secured by residential property are fully eligible for settlement. Banks recognize that business cycles can be volatile and are often willing to settle to recover their capital quickly rather than engaging in a long legal battle to sell a residential property, which often faces emotional and local resistance."
  }
];

// Content sections for the page
const tocSections = [
  { id: "introduction", title: "Introduction" },
  { id: "what-is-secured-settlement", title: "What is Secured Settlement?" },
  { id: "sarfaesi-act", title: "Understanding the SARFAESI Act" },
  { id: "property-rights", title: "Your Property Rights" },
  { id: "types-of-loans", title: "Types of Secured Loans" },
  { id: "settlement-process", title: "The 8-Step Settlement Roadmap" },
  { id: "bank-negotiation", title: "Mastering Bank Negotiations" },
  { id: "drt-role", title: "The Role of the DRT" },
  { id: "legal-shield", title: "Protecting Your Assets" },
  { id: "valuation-impact", title: "Valuation and Fair Market Value" },
  { id: "lok-adalat", title: "Lok Adalat for Secured Debts" },
  { id: "cibil-recovery", title: "CIBIL Recovery Strategy" },
  { id: "why-ama", title: "Choosing the Right Legal Partner" },
  { id: "success-case", title: "Case Studies" },
  { id: "faqs", title: "Frequently Asked Questions" }
];

export const metadata = {
  title: "Secured Loan Settlement India | Legal Protection for Property & Assets",
  description: "Facing property auction or SARFAESI notices? Learn how to settle secured loans legally. Expert guide on home loan settlement, LAP relief, and stopping auctions.",
  keywords: "secured loan settlement, home loan settlement, property auction help, sarfaesi act guide, lap settlement, debt relief india, loan settlement lawyer, drt case help, settle banking debt",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/secured-loan-settlement',
  }
};

export default function SecuredLoanSettlementPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Secured Loan Settlement", href: "/secured-loan-settlement" },
  ];

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
        "name": "Secured Loan Settlement",
        "item": "https://www.amalegalsolutions.com/secured-loan-settlement"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Secured Loan Settlement in India: The Comprehensive Legal Roadmap for Borrowers",
    "description": "An exhaustive guide to settling secured loans like home loans and LAP in India. Understand your rights under SARFAESI Act and learn how to save your property.",
    "author": {
      "@type": "Organization",
      "name": "AMA Legal Solutions"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
      }
    },
    "datePublished": "2024-03-13",
    "dateModified": "2024-03-13"
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
    "name": "Secured Loan Settlement Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2150"
    }
  };

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
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            {/* Review Snippet */}
            <div className="flex items-center justify-center gap-2 mb-6 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 w-fit mx-auto animate-fade-in text-white">
              <div className="flex text-[#D2A02A]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs md:text-sm font-bold tracking-wider">4.9/5 RATING</span>
              <span className="text-gray-300 text-[10px] md:text-xs">Based on 2,150+ Reviews</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Secured <span className="text-[#D2A02A]">Loan Settlement</span> India
            </h1>
            <p className="text-sm md:text-2xl mb-10 max-w-4xl mx-auto text-gray-200 font-medium leading-relaxed">
              Protect your property and assets from auction. Our expert legal team helps you negotiate One Time Settlements for home loans, LAP, and business loans, ensuring you keep your peace of mind and your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl inline-block text-lg">
                Stop Your Property Auction
              </Link>
              <a href="tel:+918700343611" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full transition-all inline-block text-lg">
                Talk to a SARFAESI Expert
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC */}
            <aside className="hidden lg:block sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-6 text-gray-800 border-b pb-3 border-gray-100">In This Guide</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="min-w-0 space-y-12">
               <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <article className="bg-white p-6 md:p-16 rounded-3xl shadow-sm border border-gray-50 leading-relaxed text-gray-700">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">Securing Your Future While Settling Your Secured Debts</h2>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    The burden of debt is heavy, but when that debt is secured against your family home, your place of business, or your ancestral property, the weight becomes almost unbearable. In India, the legal framework for secured debt is designed to favor quick recovery for banks, primarily through the potent SARFAESI Act. This creates a high stakes environment where a few missed EMIs can lead to the terrifying realization that your property might be auctioned off. However, it is vital to understand that a default is not the end of the road. It is often the beginning of a complex legal and financial negotiation process known as secured loan settlement.
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    Unlike unsecured debts where the lender has nothing to seize, secured debt settlement is a delicate balancing act. It requires a deep understanding of banking laws, property valuation, and judicial precedents. Banks are not just looking at your ability to pay; they are calculating the 'Recovery Value' of your asset versus the 'Realizable Value' from a settlement offer. At AMA Legal Solutions, we have witnessed thousands of cases where families were on the brink of losing everything, yet they managed to reclaim their properties through strategic legal intervention and professional negotiation.
                  </p>
                  <p className="mb-10 text-lg leading-relaxed text-gray-700">
                    This guide is designed to be the most comprehensive resource for anyone in India struggling with secured loans. We will dive deep into the legalities of the SARFAESI Act, the procedural safeguards available to you, and the tactical steps you can take to reach a One Time Settlement (OTS) that is both fair and sustainable. Our philosophy is simple: your property is more than just collateral; it is a fundamental part of your life and dignity, and we are committed to helping you defend it while resolving your financial obligations.
                  </p>
                </section>

                {/* What is Secured Settlement */}
                <section id="what-is-secured-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8">Defining Secured Loan Settlement in the Indian Context</h2>
                  <div className="bg-blue-50 border-l-8 border-[#D2A02A] p-8 mb-10 rounded-r-[40px]">
                    <p className="text-lg md:text-xl text-gray-800 italic leading-relaxed">
                      "Secured loan settlement is a formal, legally sanctioned compromise where a borrower pays a negotiated lump sum to the lender to fully discharge a debt backed by an asset, resulting in the return of original title deeds and the removal of all bank charges on the property."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The core challenge of secured settlement is the 'collateral leverage.' Because the bank holds a mortgage on your property, they feel they have the upper hand. However, the legal reality in India is that the auction process is fraught with delays, litigation, and procedural hurdles. A well timed settlement offer provides the bank with 'certainty of recovery,' which is often more attractive to a banking committee than an uncertain auction outcome.
                  </p>
                  <p className="text-lg leading-relaxed mb-10 text-gray-700">
                    From a regulatory perspective, the Reserve Bank of India (RBI) encourages compromise settlements for all types of NPAs to improve the health of the banking system. For the borrower, this represents a path to debt freedom where you can save a significant portion of the outstanding amount while retaining ownership of your property. It is a legal 'win-win' that requires professional handling to ensure all technicalities are met and the property title is fully cleared.
                  </p>
                </section>

                {/* SARFAESI Act Section */}
                <section id="sarfaesi-act" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8">The SARFAESI Act: A Borrower's Guide to the Most Powerful Debt Law</h2>
                  <p className="mb-10 text-lg leading-relaxed text-gray-700">
                    The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002, commonly known as the SARFAESI Act, changed the landscape of debt recovery in India. Before this act, banks had to wait for years to get a court decree to sell property. Today, they can do it without court intervention, but there are strict rules they must follow.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-4">The 13(2) Demand Notice</h3>
                      <p className="text-base text-gray-700 leading-relaxed">
                        This is the 'warning shot.' When your account becomes an NPA (usually after 90 days of default), the bank issues this notice giving you 60 days to pay the entire outstanding amount. You have a legal right to file a formal 'Representation and Objection' within 15 days, which the bank must answer within 15 days.
                      </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-4">The 13(4) Possession Notice</h3>
                      <p className="text-base text-gray-700 leading-relaxed">
                        If the 60 days expire without payment or a settlement, the bank can take symbolic possession. This is the stage where you must approach the Debt Recovery Tribunal (DRT). Challenging the 13(4) notice is the most effective way to slow down the process and force the bank into a settlement discussion.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-10 text-gray-700">
                    Understanding these sections is critical because many banks make procedural errors during these stages. Identifying a single technical flaw in a SARFAESI notice can be the difference between losing your property and securing a massive waiver in settlement.
                  </p>
                </section>

                {/* Property Rights Section */}
                <section id="property-rights" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8">Decoding Your Inalienable Rights as a Secured Borrower</h2>
                  <p className="mb-10 text-lg leading-relaxed text-gray-700">
                    Even when you are in default, you have rights. The Indian Constitution and banking regulations provide a shield against arbitrary actions. Knowing these rights transforms you from a victim into a legally aware negotiator.
                  </p>
                  <div className="space-y-6 mb-12">
                     {[
                       { title: "Right to Fair Valuation", desc: "The bank cannot sell your property at a throwaway price. They must obtain a valuation from an approved valuer and set a 'Reserve Price' that reflects the fair market value." },
                       { title: "Right to Due Notice", desc: "For the actual auction, the bank must give you a 30-day notice (for the first auction) and a 15-day notice for subsequent auctions. Failure to provide this notice can invalidate the entire sale." },
                       { title: "Right to Redemption", desc: "You have the right to pay the dues and save your property at any point until the auction sale is finalized. This is known as the 'Right of Redemption' under the Transfer of Property Act." },
                       { title: "Right to Surplus", desc: "If the bank auctions your property for more than what you owe them, the remaining surplus amount belongs entirely to you. You are entitled to a full account of the sale proceeds." }
                     ].map((item, idx) => (
                        <div key={idx} className="p-8 border border-gray-100 rounded-3xl bg-gray-50 hover:bg-white transition-colors">
                           <h4 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h4>
                           <p className="text-base text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                     ))}
                  </div>
                </section>

                {/* Types of Loans Section */}
                <section id="types-of-loans" className="scroll-mt-32">
                   <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8">Varied Landscapes of Secured Debt in India</h2>
                   <p className="mb-10 text-lg leading-relaxed text-gray-700">Each type of secured loan has its own set of rules and settlement patterns. Recognizing where your loan fits is the first step in crafting a settlement strategy.</p>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                      <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                         <h4 className="text-lg font-bold mb-3 text-[#D2A02A]">Home Loans</h4>
                         <p className="text-sm text-gray-600">The most sensitive category. Banks are often cautious about auctioning primary residences due to potential social and political pushback, making them prime candidates for OTS.</p>
                      </div>
                      <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                         <h4 className="text-lg font-bold mb-3 text-[#D2A02A]">Loan Against Property (LAP)</h4>
                         <p className="text-sm text-gray-600">Often used for business expansion. These loans carry higher interest rates than home loans. Settlements here usually focus on waiving the high interest components.</p>
                      </div>
                      <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                         <h4 className="text-lg font-bold mb-3 text-[#D2A02A]">Business Collateral Loans</h4>
                         <p className="text-sm text-gray-600">Secured against factories, warehouses, or commercial offices. These are governed by both SARFAESI and sometimes Insolvency and Bankruptcy Code (IBC) principles.</p>
                      </div>
                   </div>
                </section>

                {/* Settlement Process Section */}
                <section id="settlement-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8">The Professional 8-Step Roadmap to Property Recovery</h2>
                  <p className="mb-10 text-lg leading-relaxed text-gray-700">A successful settlement is not a single event; it is a process. Following these steps ensures that you don't just 'settle' but you settle with maximum benefit and legal safety.</p>
                  <div className="relative border-l-4 border-[#D2A02A] ml-4 pl-10 space-y-12">
                     {[
                        { step: "Step 1: Forensic Document Audit", text: "We analyze your loan agreement and every notice sent by the bank. We look for illegal interest charging, miscalculation of principal, and procedural lapses in SARFAESI notices." },
                        { step: "Step 2: Valuation Assessment", text: "We obtain an independent valuation of your property. If the bank's valuation is too high, we prove that the 'Relizable Value' through auction is low, making our settlement offer more attractive." },
                        { step: "Step 3: Financial Hardship Profiling", text: "We build a compelling case for why you defaulted. Whether it was a medical crisis, business failure, or job loss, we gather the evidence that convinces the bank's committee of your genuine distress." },
                        { step: "Step 4: Protective Litigation (If Needed)", text: "If an auction is imminent, we file a Securitization Application in the DRT. This 'legal shield' provides breathing space and shows the bank that we are ready to fight, increasing our leverage." },
                        { step: "Step 5: Tiered Proposal Submission", text: "We don't just send one offer. we start with a professional proposal to the Branch Manager, then escalate to the Regional Head and finally the Zonal Credit Committee." },
                        { step: "Step 6: Face-to-Face Negotiation", text: "Our senior legal experts meet with the bank's authorized officers. We negotiate not just the amount, but the time given to pay and the waiver of all legal costs and penal interests." },
                        { step: "Step 7: Verification of Offer Letter", text: "Once the bank agrees, we meticulously check the 'In-Principle Approval' letter. We ensure it clearly states that the account will be closed, original documents returned, and all legal cases withdrawn." },
                        { step: "Step 8: Final Payment and Document Retrieval", text: "We guide you through the payment process. After the final installment, we ensure you receive the No Dues Certificate and physically recover your original title deeds from the bank's vault." }
                     ].map((item, idx) => (
                        <div key={idx} className="relative">
                           <div className="absolute -left-[54px] top-0 w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-md">{idx + 1}</div>
                           <h4 className="text-xl font-bold mb-3 text-gray-900">{item.step}</h4>
                           <p className="text-base text-gray-700 leading-relaxed">{item.text}</p>
                        </div>
                     ))}
                  </div>
                </section>

                {/* Bank Negotiation Section */}
                <section id="bank-negotiation" className="scroll-mt-32">
                   <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8">Mastering the Art of High-Stakes Banking Negotiation</h2>
                   <p className="mb-8 text-lg text-gray-700 leading-relaxed">Negotiating with a bank for a secured loan is different from any other type of bargaining. It is a battle of data, law, and psychology. The bank's officers are bound by audits and guidelines; they need 'justification' to grant a waiver.</p>
                   <div className="bg-[#1a202c] text-white p-10 rounded-3xl shadow-2xl mb-12">
                      <h4 className="text-xl font-bold mb-6 text-[#D2A02A]">Three Pillars of Successful Negotiation:</h4>
                      <ul className="space-y-6 text-lg">
                         <li className="flex items-start gap-4"><span className="text-[#D2A02A] mt-1">✓</span> <div><strong>Property Liquidity:</strong> We highlight the difficulty of selling your specific property. If the property is tenanted, has legal disputes, or is in a low demand area, the bank's recovery through auction will be slow and painful.</div></li>
                         <li className="flex items-start gap-4"><span className="text-[#D2A02A] mt-1">✓</span> <div><strong>Procedural Vulnerability:</strong> We point out specific errors in their SARFAESI notices. When the bank's legal department realizes their auction can be set aside by a court, the settlement committee becomes much more flexible.</div></li>
                         <li className="flex items-start gap-4"><span className="text-[#D2A02A] mt-1">✓</span> <div><strong>Certainty of Lump Sum:</strong> Banks value liquidity. Offering a guaranteed payment in 30 to 60 days is often more powerful than a hypothetical 100 percent recovery after a 2 year litigation cycle.</div></li>
                      </ul>
                   </div>
                </section>

                {/* DRT Section */}
                <section id="drt-role" className="scroll-mt-32">
                   <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">Navigating the Debt Recovery Tribunal (DRT)</h2>
                   <p className="mb-6 text-lg text-gray-700 leading-relaxed">The DRT is the specialized judicial forum where secured loan disputes are adjudicated. For a borrower, the DRT is a place of protection. filing a Securitization Application (SA) under Section 17 of the SARFAESI Act allows you to challenge the bank's actions before an independent judge.</p>
                   <p className="mb-10 text-lg text-gray-700 leading-relaxed">At AMA Legal Solutions, we don't just view the DRT as a place for litigation; we view it as a catalyst for settlement. A stay order on an auction from the DRT often serves as the final push that forces a bank to accept a reasonable settlement offer. It levels the playing field, ensuring the bank cannot act as both judge and executioner.</p>
                </section>

                {/* Valuation Section */}
                <section id="valuation-impact" className="scroll-mt-32">
                   <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-8">The Critical Role of Asset Valuation in OTS</h2>
                   <p className="mb-6 text-lg text-gray-700 leading-relaxed">Many settlements fail because of a 'Valuation Gap.' The bank's valuer might report a high market value, while the real price a buyer will pay in an auction (Distress Value) is much lower. Our team works to bridge this gap. By providing a factual, realistic assessment of the asset's current state, we provide the banking committee with the 'Auditable Justification' they need to approve a lower settlement amount.</p>
                   <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100 italic text-gray-800 leading-relaxed mb-10">
                      "A successful settlement is found at the intersection of your maximum ability to pay and the bank's minimum acceptable recovery threshold. Identifying this sweet spot requires professional valuation expertise."
                   </div>
                </section>

                {/* Success Story */}
                <section id="success-case" className="scroll-mt-32">
                   <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Triumphs of Legal Strategy: Saving Properties</h2>
                   <div className="space-y-12">
                      <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group">
                         <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-[#D2A02A] text-white px-6 py-1 rounded-full font-bold shadow-lg">40% Interest Waiver</div>
                         <h4 className="text-xl font-bold mb-4 text-gray-900">V. Sharma: Saving a Family Home from Auction</h4>
                         <p className="text-base text-gray-700 leading-relaxed mb-4">"My home in Delhi was scheduled for auction by a private bank for a debt of 1.2 Crores. I was devastated. The team at AMA Legal Solutions identified that the possession notice had not been published in the correct newspapers as per the law. They filed an SA in the DRT, got an interim stay, and then negotiated a settlement of 85 Lakhs. My family still lives in that home today."</p>
                      </div>
                      <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group">
                         <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-[#D2A02A] text-white px-6 py-1 rounded-full font-bold shadow-lg">35% Principal Relief</div>
                         <h4 className="text-xl font-bold mb-4 text-gray-900">M. Enterprises: Industrial Unit Resolution</h4>
                         <p className="text-base text-gray-700 leading-relaxed">"Our factory was under SARFAESI for a business loan default of 4.5 Crores. With AMA's help, we presented a restructuring and settlement plan to the Zonal Office. Their legal knowledge of the MSME guidelines and current banking OTS policies helped us settle for 2.9 Crores, allowing us to restart our business with a clean slate."</p>
                      </div>
                   </div>
                </section>

                {/* FAQ Section */}
                <section id="faqs" className="scroll-mt-32 border-t pt-20 border-gray-100">
                  <h2 className="text-xl md:text-5xl font-black text-gray-900 mb-16 text-center">Frequently Asked Questions</h2>
                  <div className="grid grid-cols-1 gap-12">
                    {faqs.map((faq, index) => (
                      <div key={index} className="group pb-12 border-b border-gray-50 last:border-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-start group-hover:text-[#D2A02A] transition-colors leading-tight">
                          <span className="text-white mr-6 flex-shrink-0 bg-gray-900 w-12 h-12 rounded-2xl flex items-center justify-center font-black group-hover:bg-[#D2A02A] transition-colors shadow-lg">?</span>
                          {faq.question}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed pl-16">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#0d1117] rounded-[60px] p-8 md:p-20 text-center text-white mt-20 relative overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-[#D2A02A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <span className="inline-block bg-[#D2A02A]/10 text-[#D2A02A] px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-[#D2A02A]/20">Start Your Property Recovery Today</span>
                        <h2 className="text-2xl md:text-5xl font-black mb-8 leading-tight">Don't Wait for the Auctioneer's Gavel</h2>
                        <p className="text-lg md:text-xl opacity-70 mb-12 leading-relaxed">
                            Secured debt resolution is a race against time. The earlier you initiate the legal process, the more leverage you have. protect your property and your future with expert legal guidance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="bg-[#D2A02A] hover:bg-white hover:text-gray-900 text-white font-black py-5 px-14 rounded-full transition-all shadow-2xl text-xl transform hover:-translate-y-2">
                                Free Property Debt Analysis
                            </Link>
                            <a href="tel:+918700343611" className="bg-white/5 hover:bg-white/10 text-white font-black py-5 px-14 rounded-full transition-all border border-white/20 text-xl backdrop-blur-sm">
                                Call Specialist 8700343611
                            </a>
                        </div>
                    </div>
                </section>
              </article>
            </main>

            {/* Right Sidebar */}
            <aside className="hidden lg:block space-y-8 sticky top-24">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Urgent Property Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">Facing an auction or bank possession notice? Talk to our senior lawyers specialized in SARFAESI and DRT.</p>
                  <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-xl font-bold hover:bg-[#b88a22] transition-colors mb-4">
                    Call 8700343611
                  </a>
                  <Link href="/contact" className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-xl font-bold hover:bg-[#D2A02A] hover:text-white transition-colors">
                    Stop the Auction Now
                  </Link>
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-xs font-bold text-[#D2A02A] uppercase tracking-wider mb-4">Download Our App</p>
                    <div className="flex flex-col gap-3">
                      <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image src="/newAssets/appstore.svg" alt="Google Play" width={140} height={40} className="w-full h-auto" />
                      </Link>
                      <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image src="/newAssets/playstore.svg" alt="App Store" width={140} height={40} className="w-full h-auto" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-4">Related Services</h3>
                  <ul className="space-y-4 text-sm">
                    <li><Link href="/unsecured-loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center group"><span className="mr-2 group-hover:translate-x-1 transition-transform">›</span> Unsecured Settlement</Link></li>
                    <li><Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center group"><span className="mr-2 group-hover:translate-x-1 transition-transform">›</span> Loan Settlement Hub</Link></li>
                    <li><Link href="/personal-loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center group"><span className="mr-2 group-hover:translate-x-1 transition-transform">›</span> Personal Loan Guide</Link></li>
                    <li><Link href="/services/debt-consolidation" className="text-gray-600 hover:text-[#D2A02A] flex items-center group"><span className="mr-2 group-hover:translate-x-1 transition-transform">›</span> Debt Consolidation</Link></li>
                    <li><Link href="/services/real-estate" className="text-gray-600 hover:text-[#D2A02A] flex items-center group"><span className="mr-2 group-hover:translate-x-1 transition-transform">›</span> Real Estate Legal Help</Link></li>
                  </ul>
                </div>
            </aside>
          </div>

          {/* Banks Grid */}
          <div className="mt-24">
            <section className="my-10">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center">
                We Resolve Secured Loans From All Leading Indian Banks
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {["SBI", "HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak", "PNB", "Bank of Baroda", "IDFC First", "Canara Bank", "Union Bank", "IndusInd", "Standard Chartered"].map((bank) => (
                  <div key={bank} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                    <span className="text-gray-900 font-bold">{bank}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Regional Grid */}
          <div className="mt-24">
            <GenericStatesGrid serviceName="Secured Loan Settlement" servicePath="secured-loan-settlement" />
          </div>
        </div>
      </div>
    </>
  );
}
