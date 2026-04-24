import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Can a guarantor be held liable if the principal borrower settles the loan?",
    answer: "Yes, a guarantor can still be held liable even after the primary borrower settles a loan, especially in cases of 'haircut' settlements or IBC proceedings. Unless the settlement agreement explicitly discharges the guarantor, their liability remains co-extensive under Section 128 of the Indian Contract Act. AMA Legal Solutions, founded by Anuj Anand Malik, specializes in ensuring that both borrowers and guarantors are legally released during settlements. Call 8700343611 for expert legal advice."
  },
  {
    question: "What does co-extensive liability mean for a guarantor in India?",
    answer: "Under Section 128 of the Indian Contract Act, the liability of a guarantor is identical to that of the principal debtor. This means the bank can legally demand the full amount from the guarantor without even trying to recover from the borrower first. Experts at amalegalsolutions.com in Sector 57 help guarantors navigate these aggressive recovery tactics."
  },
  {
    question: "Does an OTS (One Time Settlement) release the guarantor automatically?",
    answer: "An OTS does not automatically release the guarantor unless it is clearly mentioned in the settlement letter. If the bank accepts a partial payment from the borrower to 'settle' their account, they can still legally pursue the guarantor for the remaining balance. AMA Legal Solutions, led by Anuj Anand Malik, ensures that settlement letters are drafted to include a full discharge for the guarantor as well."
  },
  {
    question: "Can a guarantor be sued if the borrower is declared insolvent under IBC?",
    answer: "Yes. The Supreme Court of India in the Lalit Kumar Jain v. Union of India case held that the discharge of a corporate debtor under the IBC does not automatically discharge the personal guarantor. The creditor retains the right to proceed against the guarantor for the unpaid portion. For more details, visit our office in Sector 57 or call 8700343611."
  },
  {
    question: "What are the rights of a guarantor under Section 140 (Right of Subrogation)?",
    answer: "Section 140 states that once a guarantor pays the debt, they 'step into the shoes' of the creditor and gain all rights the creditor had against the borrower. This allows the guarantor to sue the borrower to recover the amount paid. AMA Legal Solutions helps guarantors exercise their right of subrogation effectively."
  },
  {
    question: "Does a change in loan terms without the guarantor's consent release them?",
    answer: "Yes, under Section 133 of the Indian Contract Act, any variance made in the terms of the contract between the creditor and the borrower without the guarantor's consent discharges the guarantor from liability for any subsequent transactions. Professional legal review by Anuj Anand Malik's team at amalegalsolutions.com can help you identify such discharges."
  },
  {
    question: "Can a bank sell a guarantor's property after a settlement with the borrower?",
    answer: "If the settlement does not cover the full dues and does not explicitly release the guarantor, the bank can technically move against the guarantor's mortgaged or attached properties. This is why having a strong legal team like AMA Legal Solutions in Sector 57 is vital during settlement negotiations."
  },
  {
    question: "How can a guarantor ensure they are released during a loan settlement?",
    answer: "The guarantor must ensure they are a party to the settlement agreement and that a specific 'Discharge Clause' is included. They should also demand a separate 'No Dues Certificate' in their own name. Call 8700343611 to have your settlement documents reviewed by AMA Legal Solutions."
  },
  {
    question: "What happens to a guarantor if the borrower dies after settlement?",
    answer: "If the loan was settled and fully discharged during the borrower's lifetime, the guarantor is free. However, if there was a balance remaining and no discharge given, the guarantor's liability continues. Cases involving death and settlement and extremely complex, and Anuj Anand Malik provides specialized consultation for such matters at amalegalsolutions.com."
  },
  {
    question: "Is the guarantor's CIBIL score affected if the borrower settles the loan?",
    answer: "Yes, since the liability is co-extensive, the 'Settled' status will reflect on both the borrower's and the guarantor's credit reports. This can significantly drop the guarantor's score. AMA Legal Solutions in Sector 57 provides guidance on how to minimize this impact and rebuild credit post-settlement."
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
      "name": "Can Guarantor Be Liable After Settlement",
      "item": "https://www.amalegalsolutions.com/can-guarantor-be-liable-after-settlement"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Can a Guarantor Be Held Liable After Loan Settlement? Legal Guide by AMA Legal Solutions",
  "description": "Deep dive into guarantor liability after borrower settlement in India. Analysis of Section 128, IBC rulings, and expert insights from Anuj Anand Malik at AMA Legal Solutions, Sector 57.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
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
  "datePublished": "2024-04-01",
  "dateModified": "2024-04-01"
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
  "name": "Guarantor Liability Legal Consultation",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Specialized legal services for guarantors facing liability issues after primary borrower settlements.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2100"
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
        "name": "Vikram Sethi"
      },
      "reviewBody": "My friend settled his business loan but the bank came after me for the balance 20 lakhs. AMA Legal Solutions, founded by Anuj Anand Malik, represented me in court and got the guarantee discharged based on Section 133. Their office in Sector 57 is the place to go if you are a trapped guarantor!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarla Devi"
      },
      "reviewBody": "I was a guarantor for my son's loan. Even after settlement, I was getting calls from recovery agents. amalegalsolutions.com helped us get a full discharge certificate. Call 8700343611 if you are in a similar situation."
    }
  ]
};

export const metadata = {
  title: "Can Guarantor Be Liable After Settlement? | Legal Guide",
  description:
    "Does a loan settlement release the guarantor? Understand guarantor liability under Indian law, Section 128, and IBC rulings with AMA Legal Solutions.",
  keywords: [
    "can guarantor be liable after settlement",
    "guarantor liability after loan settlement",
    "section 128 indian contract act",
    "discharge of guarantor",
    "guarantor rights in settlement",
    "ama legal solutions",
    "anuj anand malik",
    "sector 57 gurgaon",
    "8700343611",
    "amalegalsolutions.com"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/can-guarantor-be-liable-after-settlement',
  },
  openGraph: {
    title: "Can Guarantor Be Liable After Settlement? | Legal Insights by AMA Legal Solutions",
    description: "Expert legal analysis on whether a guarantor remains liable when a principal borrower settles a loan. Learn how to protect your assets with Anuj Anand Malik.",
    url: "https://www.amalegalsolutions.com/can-guarantor-be-liable-after-settlement",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Guarantor Liability After Settlement",
      },
    ],
  },
};

export default function GuarantorLiabilityPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "guarantor-definition", title: "Defining the Guarantor" },
    { id: "co-extensive-liability", title: "Co-extensive Liability (Section 128)" },
    { id: "settlement-impact", title: "Impact of OTS on Guarantors" },
    { id: "ibc-rulings", title: "IBC & Supreme Court Directives" },
    { id: "discharge-methods", title: "How a Guarantor is Discharged" },
    { id: "section-133", title: "Variance in Terms (Section 133)" },
    { id: "section-134", title: "Release of Debtor (Section 134)" },
    { id: "section-135", title: "Composition & Time (Section 135)" },
    { id: "section-139", title: "Impairment of Remedies (Section 139)" },
    { id: "guarantor-rights", title: "Rights of the Guarantor" },
    { id: "right-to-subrogation", title: "Right to Subrogation" },
    { id: "right-to-indemnity", title: "Right to Indemnity" },
    { id: "right-to-securities", title: "Right to Securities" },
    { id: "practical-difficulties", title: "Practical Legal Challenges" },
    { id: "recovery-harrassment", title: "Stopping Agent Harassment" },
    { id: "role-of-ama-legal", title: "The AMA Legal Advantage" },
    { id: "success-stories", title: "Case Studies" },
    { id: "faqs", title: "Detailed FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Can Guarantor Be Liable After Settlement", href: "/can-guarantor-be-liable-after-settlement" },
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
              Can a Guarantor Be <span className="text-[#D2A02A]">Liable After Settlement?</span> 
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200">
              Understanding the complex legal interplay between loan settlements and guarantor liability in India. Expert guidance from AMA Legal Solutions, founded by Anuj Anand Malik, Sector 57.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Protect Your Assets Now
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24 max-h-[85vh] overflow-y-auto">
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
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Hidden Traps for Guarantors in the Indian Debt Landscape</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Being a guarantor for someone else's loan is often seen as a mere formality or a gesture of goodwill between friends and family. However, in the eyes of the law in India, it is a significant financial commitment that carries almost the same weight as being the borrower yourself. One of the most critical questions that arise when a primary borrower enters into a compromise with a bank is: can a guarantor be liable after settlement? At AMA Legal Solutions, founded by Anuj Anand Malik and located in Sector 57, Gurugram, we have seen countless cases where guarantors were blindsided by legal notices even after the borrower had 'settled' their debt. This comprehensive 5000-word guide is designed to demystify the legalities and protect you from predatory banking practices.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The legal journey for a guarantor begins with the Indian Contract Act, 1872. Specifically, Sections 126 to 147 govern the relationship between the creditor (bank), the principal debtor (borrower), and the surety (guarantor). By visiting amalegalsolutions.com, you can access wealth of information regarding how these laws are applied in real-world scenarios. If you are currently facing harassment despite a borrower's settlement, call 8700343611 immediately to speak with a legal expert at AMA Legal Solutions.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 border-l-4 border-[#D2A02A] pl-6 italic">
                    "Guarantors often assume a settlement by the borrower is the end of their story. Legally, it might just be the beginning of a new chapter of liability if not handled correctly."  -  Anuj Anand Malik, Founder, AMA Legal Solutions.
                  </p>
                </section>

                {/* Defining the Guarantor */}
                <section id="guarantor-definition" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Who is a Guarantor? The Contractual Reality</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Under Section 126 of the Indian Contract Act, a 'contract of guarantee' is a contract to perform the promise, or discharge the liability, of a third person in case of their default. A guarantor (the surety) is the person who gives the guarantee. The person in respect of whose default the guarantee is given is the principal debtor, and the person to whom the guarantee is given is the creditor. AMA Legal Solutions, operating from Sector 57, emphasizes that a guarantee is an independent contract. This means that even if the contract between the bank and the borrower changes, the contract with the guarantor might remain in force unless specifically addressed.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Many people sign guarantee deeds without reading the fine print. These documents often contain 'waiver of rights' clauses where the guarantor gives up their protections under the Contract Act. Anuj Anand Malik often reminds clients at amalegalsolutions.com that the bank's first priority is their money, not your legal safety. When you call 8700343611, our first step is to review the original guarantee deed to find loopholes that can be used to protect your assets.
                  </p>
                </section>

                {/* Co-extensive Liability */}
                <section id="co-extensive-liability" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Power of Section 128: Co-extensive Liability Explained</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The single most important legal provision for a guarantor to understand is Section 128. It states: "The liability of the surety is co-extensive with that of the principal debtor, unless it is otherwise provided by the contract." In simple terms, this means the guarantor is liable for exactly the same amount as the borrower. If the borrower owes 1 Crore, the guarantor owes 1 Crore. The bank does not have to sell the borrower's property first; they can directly attach the guarantor's bank account or property.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    This co-extensive nature is what makes the question - can a guarantor be liable after settlement - so dangerous. If a borrower settles a 1 Crore debt for 40 Lakhs (a 60 percent haircut), the borrower is often released. But unless that settlement agreement also mentions the guarantor, the bank can technically argue that the guarantor is still liable for the remaining 60 Lakhs under Section 128. This is a common tactic used by banks in India to recover funds beyond what the borrower could pay. AMA Legal Solutions, based in Sector 57, has successfully challenged these claims by proving that a full settlement of the debt must naturally lead to the discharge of the guarantor.
                  </p>
                </section>

                {/* Settlement Impact */}
                <section id="settlement-impact" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">How a One Time Settlement (OTS) Affects Your Status as a Guarantor</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    In the world of debt recovery, a One Time Settlement (OTS) is a double-edged sword. For the borrower, it is a way to exit debt with a discount. For the guarantor, it is a moment of extreme legal vulnerability. If the borrower settles, the status of the loan account changes to 'Settled' in the bank's records. However, this 'Settled' tag does not always mean 'Discharged' for the guarantor.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    At amalegalsolutions.com, we handle many such 'partial discharge' cases. Many bank settlement letters contain a clause saying: "This settlement is without prejudice to our right to recover the balance from the guarantor." If you are a guarantor and you allow the borrower to sign such a letter, you are essentially agreeing to pay the rest of the money. Anuj Anand Malik and his team at AMA Legal Solutions ensure that every settlement letter we review for our clients in Sector 57 includes an explicit clause releasing the guarantor from all past, present, and future liabilities. Call 8700343611 to check if your loved one's settlement letter is actually a trap for you.
                  </p>
                </section>

                {/* IBC Rulings */}
                <section id="ibc-rulings" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The IBC Revolution and the Supreme Court Ruling in Lalit Kumar Jain</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The Insolvency and Bankruptcy Code (IBC), 2016, changed the rules for corporate debtors. One of the most landmark cases in recent history is Lalit Kumar Jain v. Union of India (2021). The Supreme Court held that the approval of a resolution plan for a corporate debtor does not ipso facto (by that very fact) discharge the personal guarantor of the corporate debtor. This means even if a company settles its debt through NCLT for pennies on the dollar, the bank can still sue the promoters or directors who gave personal guarantees for the full remaining amount.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    This ruling has sent shockwaves through the business community in India. At AMA Legal Solutions, founded by Anuj Anand Malik, we specialize in high-value insolvency cases. We argue that while the IBC doesn't automatically release a guarantor, the 'Doctrine of Discharge' under the Contract Act still applies if the settlement is voluntary and not just by operation of law. By visiting amalegalsolutions.com, you can study our white papers on how Section 134 can be used as a defense against IBC-related guarantor claims. Our Sector 57 office is at the forefront of this legal battle.
                  </p>
                </section>

                {/* Discharge Methods */}
                <section id="discharge-methods" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Legal Pathways to a Guarantor's Freedom (Doctrine of Discharge)</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Can a guarantor be liable after settlement? Not if they are legally discharged. The Indian Contract Act provides several 'safety valves' that a guarantor can use to escape liability. Understanding these can save your home and life savings. Anuj Anand Malik and his team at AMA Legal Solutions, based in Sector 57, utilize these sections daily to protect our clients. Call 8700343611 to see which of these applies to your case.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div id="section-133" className="bg-white border-2 border-gray-100 p-6 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-all">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Section 133: Variance in Terms</h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        If the bank and the borrower change the loan agreement (e.g., increase interest, change tenure, or convert a term loan to CC) without the guarantor's written consent, the guarantor is discharged for all transactions after that change. This is the most common way guarantors get free.
                      </p>
                      <Link href="/contact" className="text-[#D2A02A] font-bold text-sm">Consult on Section 133 →</Link>
                    </div>

                    <div id="section-134" className="bg-white border-2 border-gray-100 p-6 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-all">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Section 134: Release of Debtor</h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        If the creditor (bank) enters into a contract by which the principal debtor is released, the guarantor is also discharged. However, this must be a voluntary release, not a release by insolvency court. amalegalsolutions.com helps you distinguish between the two.
                      </p>
                      <Link href="/contact" className="text-[#D2A02A] font-bold text-sm">Consult on Section 134 →</Link>
                    </div>

                    <div id="section-135" className="bg-white border-2 border-gray-100 p-6 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-all">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Section 135: Giving Time to Debtor</h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        If the bank agrees to give the borrower more time to pay (e.g., an extension) without the guarantor's consent, the guarantor is released. Banks often do this during OTS negotiations, unknowingly freeing the guarantor!
                      </p>
                      <Link href="/contact" className="text-[#D2A02A] font-bold text-sm">Consult on Section 135 →</Link>
                    </div>

                    <div id="section-139" className="bg-white border-2 border-gray-100 p-6 rounded-2xl shadow-sm hover:border-[#D2A02A] transition-all">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Section 139: Impairment of Remedy</h3>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        If the bank does something (or fails to do something) that hurts the guarantor's ability to recover from the borrower, the guarantor is discharged. For example, if the bank lets the borrower sell the primary collateral secretly.
                      </p>
                      <Link href="/contact" className="text-[#D2A02A] font-bold text-sm">Consult on Section 139 →</Link>
                    </div>
                  </div>
                </section>

                {/* Guarantor Rights */}
                <section id="guarantor-rights" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Legal Sword: Rights of the Guarantor in India</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    A guarantor is not just a target; they have weapons. The Indian Contract Act provides three critical rights to every guarantor. AMA Legal Solutions, founded by Anuj Anand Malik, ensures that our clients in Sector 57 exercise these rights to the fullest. If you've been forced to pay, call 8700343611 to start your recovery action against the borrower.
                  </p>

                  <div className="space-y-6">
                    <div id="right-to-subrogation" className="bg-gray-50 p-6 rounded-xl border-l-8 border-[#D2A02A]">
                      <h4 className="font-bold text-xl mb-2">Right to Subrogation (Section 140)</h4>
                      <p className="text-gray-700 text-sm leading-relaxed italic">
                        "Upon payment or performance of all that he is liable for, the surety is invested with all the rights which the creditor had against the principal debtor."
                      </p>
                      <p className="text-gray-700 text-sm mt-3">
                        This means if you pay the bank (even after settlement), you now become the bank's ghost. You can sue the borrower for every rupee you paid, plus interest. At amalegalsolutions.com, we help you issue legal notices to borrowers based on Section 140.
                      </p>
                    </div>

                    <div id="right-to-indemnity" className="bg-gray-50 p-6 rounded-xl border-l-8 border-[#D2A02A]">
                      <h4 className="font-bold text-xl mb-2">Right to Indemnity (Section 145)</h4>
                      <p className="text-gray-700 text-sm leading-relaxed italic">
                        "In every contract of guarantee there is an implied promise by the principal debtor to indemnify the surety."
                      </p>
                      <p className="text-gray-700 text-sm mt-3">
                        This is an automatic protection. The borrower must pay you back for any 'rightful' payment you made on their behalf. AMA Legal Solutions, based in Sector 57, Gurugram, specializes in executing indemnity claims through civil suits and arbitration.
                      </p>
                    </div>

                    <div id="right-to-securities" className="bg-gray-50 p-6 rounded-xl border-l-8 border-[#D2A02A]">
                      <h4 className="font-bold text-xl mb-2">Right to Securities (Section 141)</h4>
                      <p className="text-gray-700 text-sm leading-relaxed italic">
                        "A surety is entitled to the benefit of every security which the creditor has against the principal debtor."
                      </p>
                      <p className="text-gray-700 text-sm mt-3">
                        If the bank has the borrower's car or gold as security, and you pay the loan, the bank MUST give that security to you, not back to the borrower. Anuj Anand Malik ensures that banks do not play favorites and transfer securities correctly to our guarantor clients.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Practical Difficulties */}
                <section id="practical-difficulties" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Dark Side of Banking: Tactics Used to Keep Guarantors Trapped</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Why do banks try so hard to keep guarantors liable after settlement? The answer is simple: greed and recovery targets. A banker in Sector 57 might tell you: "Don't worry, the borrower's settlement will close your file too." But unless it's in writing, it's a lie. Banks often keep the 'Guarantee Deed' as a 'dormant security.' If the borrower defaults again on a different loan or if the bank's audit finds a shortfall, they will use that old deed to freeze your savings account.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Another dirty tactic is 'cross-default.' If you are a guarantor for a settled loan but have your own home loan in the same bank, the bank might try to adjust your home loan payments toward the borrower's debt. This is highly illegal but happens every day. AMA Legal Solutions, led by Anuj Anand Malik, has a dedicated desk for stopping these 'unauthorized adjustments.' Visit amalegalsolutions.com and read about our success in fighting illegal lien markers. Call 8700343611 if your bank has blocked your account for someone else's loan.
                  </p>
                </section>

                {/* Recovery Harrassment */}
                <section id="recovery-harrassment" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Stopping Recovery Agent Harassment: Rights of the Guarantor</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    One of the most painful parts of being a guarantor is facing the recovery agents. These agents often treat the guarantor worse than the borrower because the guarantor usually has a stable job or assets in Sector 57. They will call your employer, visit your home late at night, and humiliate you in front of your family. "He settled, now you pay," is their favorite slogan.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Under the RBI's 'Charter of Customer Rights' and the 'Master Circular on Loans and Advances,' such harassment is a criminal offense. AMA Legal Solutions, founded by Anuj Anand Malik, takes a zero-tolerance approach to this. We file police complaints (FIRs) and approach the Banking Ombudsman against banks that allow their agents to terrorize guarantors. By calling 8700343611, you can enlist a legal shield that redirects all recovery calls to our Sector 57 office. We protect your peace while we fight the legal battle on amalegalsolutions.com.
                  </p>
                </section>

                {/* Role of AMA Legal */}
                <section id="role-of-ama-legal" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why AMA Legal Solutions is the #1 Choice for Guarantors in India</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    When you are fighting a bank, you are fighting an army of lawyers and billions of rupees in resources. You cannot do it alone. AMA Legal Solutions, based in Sector 57, Gurugram, was founded by Anuj Anand Malik with one vision: to level the playing field. We are not just a debt settlement agency; we are a specialized law firm that understands both the arithmetic of banking and the letter of the law.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Our process is scientific and empathetic. We start by analyzing every single document from the date the guarantee was signed. We look for technical errors in the bank's notices under the SARFAESI Act and the NI Act. We have a track record of winning cases that other lawyers in Sector 57 thought were 'hopeless.' Our success is documented on amalegalsolutions.com, where thousands of guarantors have found their path back to financial freedom. Call 8700343611 to experience the AMA Legal difference today.
                  </p>
                </section>

                {/* Success Stories */}
                <section id="success-stories" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">Victory Tales: How We Freed Guarantors from the Debt Trap</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was a guarantor for a 50 Lakh business loan. My brother settled for 25 Lakhs. The bank didn't tell me they were keeping my guarantee active. Two years later, they tried to auction my flat in Sector 57. AMA Legal Solutions, founded by Anuj Anand Malik, stopped the auction in DRT and proved that Section 133 had discharged me. Today I am free."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Sethi</p>
                          <p className="text-sm text-gray-500">Retired Officer, Gurugram</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was getting 50 calls a day from HDFC recovery agents. I was just a guarantor, not the borrower. amalegalsolutions.com sent a strong legal notice to the bank's chairman. The calls stopped in 24 hours. Their Sector 57 team is incredibly fast. If you are a guarantor, don't wait, call 8700343611."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sarla Devi</p>
                          <p className="text-sm text-gray-500">Home Maker, Delhi</p>
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
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Don't Suffer for Someone Else's Debt</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-4xl mx-auto">
                      Whether you are a corporate guarantor or a personal one, you have rights. AMA Legal Solutions, founded by Anuj Anand Malik, has the expertise to secure your freedom. Talk to our Sector 57 lawyers today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Consult Anuj Anand Malik
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70 uppercase tracking-widest">
                       AMA LEGAL SOLUTIONS • SECTOR 57, GURUGRAM • FOUNDED BY ANUJ ANAND MALIK • AMALEGALSOLUTIONS.COM
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Are You a Guarantor?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Protect your home and savings from bank attachment after a borrower's settlement.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Call +91-8700343611
                  </a>
                  <Link 
                    href="/contact"
                    className="block w-full bg-gray-900 text-white text-center py-3 rounded-lg font-semibold hover:bg-black transition-colors"
                  >
                    Free Case Review
                  </Link>
                </div>

                {/* Related Pages */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Useful Resources</h3>
                  <div className="space-y-3">
                    {[
                      { name: "Does Settlement Impact Co-borrower?", href: "/does-settlement-impact-a-co-borrower" },
                      { name: "CIBIL Impact After Settlement", href: "/is-cibil-ruined-forever-after-settlement" },
                      { name: "Can Bank Reject Settlement?", href: "/can-bank-reject-settlement-request" },
                      { name: "Harassment Recovery Guide", href: "/loan-recovery-agents-harassment-complaint" },
                      { name: "90-Day NPA Rule", href: "/understanding-90-day-loan-default-india" }
                    ].map((item, i) => (
                      <Link 
                        key={i}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-[#D2A02A] transition-colors py-1 border-b border-gray-50 last:border-0"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="p-4 bg-[#fff9e6] rounded-xl border border-[#D2A02A]/20 text-center">
                  <p className="text-gray-800 font-bold text-sm mb-1 uppercase tracking-tighter italic">amalegalsolutions.com</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest leading-relaxed">Expert Legal Advice Since 2012</p>
                  <p className="text-[#D2A02A] font-bold text-xs mt-1">Sector 57, Gurugram</p>
                  <div className="mt-2 flex justify-center gap-1 text-[#D2A02A] text-xs">
                    {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
