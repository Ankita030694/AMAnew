
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: "Can I Get a Loan Settlement Service That Handles Home Loan Dues? | Expert Legal Advice",
  description: "Facing SARFAESI action or home loan default? Learn if you can settle secured loans. Expert legal strategies to stop foreclosure and negotiate with banks.",
  keywords: [
    "home loan settlement",
    "settle secured loan",
    "SARFAESI act defense",
    "loan settlement services for home loan",
    "stop foreclosure india",
    "mortgage settlement",
    "OTS for home loan"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/can-i-get-a-loan-settlement-service-that-handles-home-loan-dues',
  },
};

export default function HomeLoanSettlementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "secured-vs-unsecured", title: "Secured vs. Unsecured Settlement" },
    { id: "sarfaesi-threat", title: "The SARFAESI Threat" },
    { id: "when-possible", title: "When is Settlement Possible?" },
    { id: "alternatives", title: "Better Alternatives" },
    { id: "legal-defense", title: "Legal Defense Against Auction" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Home Loan Dues", href: "/can-i-get-a-loan-settlement-service-that-handles-home-loan-dues" },
  ];

  const faqs = [
    {
      question: "Can I settle my home loan like a credit card debt?",
      answer: "No, it is much harder. Since the loan is 'secured' by your property, the bank has the legal right to sell your house to recover dues under the SARFAESI Act. They only agree to settlement if the property value has crashed or there are legal disputes stopping the auction."
    },
    {
      question: "What is the SARFAESI Act?",
      answer: "The SARFAESI Act allows banks to auction your property without going to court if you become a defaulter (NPA). They issue a 13(2) notice giving you 60 days to pay, followed by a 13(4) notice to take possession."
    },
    {
      question: "Can AMA Legal help stop a bank auction?",
      answer: "Yes. We can approach the Debt Recovery Tribunal (DRT) to get a stay order against the auction if the bank has not followed due process. This buys you time to arrange funds or negotiate a settlement."
    },
    {
      question: "Does a One Time Settlement (OTS) apply to home loans?",
      answer: "Yes, banks do offer OTS for home loans, but usually only for the principal amount plus some interest. They rarely waive the principal because they have collateral."
    },
    {
      question: "What should I do if I get a Section 13(2) notice?",
      answer: "Do not ignore it. You must reply legally within 60 days raising valid objections. Contact a lawyer immediately. Ignoring this notice allows the bank to move to the next step of taking possession."
    },
    {
      question: "What happens if I don't reply to the 13(2) notice?",
      answer: "If you don't reply, the bank will assume you have no valid defense. They will proceed to issue a Section 13(4) Possession Notice, and you will lose your initial right to object. This weakens your case in the DRT later."
    },
    {
      question: "Can the bank take physical possession of my house?",
      answer: "Yes, but they cannot do it forcefully themselves. They must apply to the District Magistrate (DM) or Chief Metropolitan Magistrate (CMM) under Section 14 of the SARFAESI Act. The DM will then order the police to assist the bank in taking possession. This process usually takes 3-6 months."
    },
    {
      question: "Can I sell the property myself to pay off the loan?",
      answer: "Yes, this is often the best option. You can request the bank for a 'Private Treaty' sale. If you find a buyer who is willing to pay a price that covers the settlement amount, the bank will usually agree to release the property papers upon receiving the payment."
    },
    {
      question: "What if the auction price is less than my loan amount?",
      answer: "This is a dangerous situation. If the bank sells your house for ₹50 Lakhs but your loan was ₹70 Lakhs, you are still liable to pay the remaining ₹20 Lakhs. The bank can file a case in DRT to recover this balance. That is why settlement is better than auction."
    },
    {
      question: "How can I stop the auction at the last minute?",
      answer: "You can file a Securitisation Application (SA) in the DRT. If the bank has undervalued the property, not followed publication rules (2 newspapers), or not given you 30 days notice, the DRT can stay (stop) the auction."
    },
    {
      question: "What are 'Compassionate Grounds' for settlement?",
      answer: "RBI guidelines allow banks to be lenient in cases of 'genuine hardship'. This includes the death of the primary borrower, severe terminal illness (cancer, stroke), or permanent disability. In such cases, banks may waive a significant portion of the interest."
    },
    {
      question: "Do I have to pay the full interest penalty?",
      answer: "Not necessarily. In a settlement negotiation, we target to get a waiver on the penal interest and compound interest. The goal is to settle for the Principal + Simple Interest, or in rare distress cases, just the Principal."
    },
    {
      question: "Can I take a new loan to settle the old one?",
      answer: "It is difficult because your CIBIL score is likely damaged. However, some NBFCs offer 'Loan Against Property' (LAP) to clear existing defaults if you have sufficient property value. This is called a 'Takeover' loan."
    },
    {
      question: "My bank manager is threatening me. Is this legal?",
      answer: "No. Bank officials and recovery agents cannot threaten, abuse, or visit your home at odd hours. If they do, we can file a complaint with the Banking Ombudsman and the local police station. Harassment is a ground for claiming compensation in DRT."
    },
    {
      question: "What is the cost of filing a case in DRT?",
      answer: "The court fee for DRT depends on the debt amount. It is usually ₹12,000 for debts up to ₹10 Lakhs, and goes up to a maximum of ₹1.5 Lakhs in some states. You also have to pay lawyer fees."
    },
    {
      question: "What if I lose the case in DRT?",
      answer: "You can appeal to the Debt Recovery Appellate Tribunal (DRAT). However, to file an appeal, you must deposit 50% of the debt amount with the court. This 'Pre-Deposit' rule makes appeals expensive."
    },
    {
      question: "Can I get a loan settlement for a Flat under construction?",
      answer: "Yes. If the builder has delayed the project and you have stopped paying EMIs, you have a strong case. We can argue that the asset (security) itself is incomplete, forcing the bank to settle or pursue the builder."
    },
    {
      question: "Does the bank have to publish my photo in the newspaper?",
      answer: "RBI guidelines permit banks to publish photos of 'Wilful Defaulters'. However, if you are a genuine borrower facing hardship, publishing your photo can be challenged as a violation of privacy and defamation."
    },
    {
      question: "How long does the settlement process take?",
      answer: "For home loans, it typically takes 3-6 months. It involves multiple rounds of negotiation with the Circle Office or Zonal Office of the bank. Branch managers usually do not have the power to approve deep haircuts."
    },
    {
      question: "Why should I hire AMA Legal instead of a local lawyer?",
      answer: "Local lawyers often focus only on the court dates. We focus on the *solution*. Our strategy is a mix of aggressive legal defense (DRT) and soft negotiation (Settlement). We know exactly whom to call in the bank's Zonal Office to get the OTS approved."
    }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Can I Get a Loan Settlement Service That Handles Home Loan Dues?",
    "description": "Expert legal guide on settling secured home loans and defending against SARFAESI action in India.",
    "author": {
      "@type": "Organization",
      "name": "AMA Legal Solutions"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://amalegalsolutions.com/ama-legal-solutions-logo.png"
      }
    }
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

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchemaWithId(breadcrumbItems)) }}
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

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1e293b] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
           <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }} // Placeholder color, ideally an image
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Can I Get a Loan Settlement Service That Handles <span className="text-[#D2A02A]">Home Loan Dues?</span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Settling a secured loan is complex but not impossible. Understand your rights against <strong>SARFAESI</strong> and how to save your property from auction.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get Legal Defense Now
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

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-8 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Hard Truth About Home Loan Settlement</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Many borrowers ask us, <em>"Can I settle my home loan just like a credit card?"</em> The short answer is: <strong>Yes, but it is significantly more difficult.</strong>
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When you take a personal loan or credit card, it is <strong>unsecured</strong>. The bank has no collateral. If you default, their only option is to file a civil suit or negotiate. However, a home loan is a <strong>secured debt</strong>. Your property is mortgaged to the bank. This gives them a powerful legal tool called the <strong>SARFAESI Act</strong>, which allows them to seize and sell your property to recover their dues without even going to court.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-[#D2A02A] p-6 rounded-r-xl">
                    <p className="text-gray-800 italic">
                      "In a secured loan, the bank doesn't want to settle for 50%. They want to recover 100% by selling your house. Settlement only happens when the bank realizes that selling the house is harder than negotiating with you."
                    </p>
                  </div>
                </section>

                {/* Secured vs Unsecured */}
                <section id="secured-vs-unsecured" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Secured vs. Unsecured Loan Settlement</h2>
                   <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-600 border border-gray-200">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                          <th className="px-6 py-3">Feature</th>
                          <th className="px-6 py-3">Unsecured (Credit Card/Personal)</th>
                          <th className="px-6 py-3">Secured (Home/LAP)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-bold">Collateral</td>
                          <td className="px-6 py-4">None</td>
                          <td className="px-6 py-4 text-red-600 font-bold">Your Property</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-bold">Bank's Power</td>
                          <td className="px-6 py-4">Harassment / Civil Suit</td>
                          <td className="px-6 py-4 text-red-600 font-bold">SARFAESI Act (Auction)</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-bold">Settlement Discount</td>
                          <td className="px-6 py-4 text-green-600 font-bold">High (30-60% Waiver)</td>
                          <td className="px-6 py-4">Low (Interest Waiver only)</td>
                        </tr>
                         <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-bold">Timeframe</td>
                          <td className="px-6 py-4">3-6 Months</td>
                          <td className="px-6 py-4">6-12 Months (Legal Battle)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* SARFAESI Threat Deep Dive */}
                <section id="sarfaesi-threat" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Legal Threat: A Clause-by-Clause Guide to SARFAESI</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The <em>Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002</em> (SARFAESI) is the most powerful weapon banks have. It allows them to bypass courts and sell your property directly. Understanding every step of this process is critical to your defense.
                  </p>
                  
                  <div className="space-y-8 mb-8">
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                       <h3 className="font-bold text-red-900 text-xl mb-2">Step 1: NPA Classification & Section 13(2) Notice</h3>
                       <p className="text-gray-700 mb-4">
                         If you miss 3 consecutive EMIs (90 days), your account becomes a <strong>Non-Performing Asset (NPA)</strong>. The bank then issues a notice under <strong>Section 13(2)</strong>.
                       </p>
                       <ul className="list-disc pl-6 space-y-2 text-gray-700">
                          <li><strong>What it says:</strong> "Pay the entire outstanding amount (Principal + Interest) within 60 days."</li>
                          <li><strong>Your Right (Section 13(3A)):</strong> You have the legal right to send a representation/objection to this notice. The bank MUST reply to your objection within 15 days. If they don't, their subsequent actions can be challenged in court.</li>
                          <li><strong>Mistake to Avoid:</strong> ignoring this notice. If you don't reply, you lose your first and strongest ground of defense.</li>
                       </ul>
                    </div>

                     <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                       <h3 className="font-bold text-orange-900 text-xl mb-2">Step 2: Symbolic Possession - Section 13(4)</h3>
                       <p className="text-gray-700 mb-4">
                         If you don't pay within 60 days, the bank issues a <strong>Possession Notice</strong> under Section 13(4).
                       </p>
                       <ul className="list-disc pl-6 space-y-2 text-gray-700">
                          <li>They will paste a notice on your door.</li>
                          <li>They will publish your name and property details in two newspapers (one English, one vernacular).</li>
                          <li><strong>Legal Status:</strong> You still live in the house, but the bank has "Symbolic Possession". They can now legally auction the property.</li>
                       </ul>
                    </div>

                     <div className="bg-gray-50 border-l-4 border-gray-800 p-6 rounded-r-xl">
                       <h3 className="font-bold text-gray-900 text-xl mb-2">Step 3: Physical Possession - Section 14</h3>
                       <p className="text-gray-700 mb-4">
                         The bank cannot throw you out themselves. They must apply to the <strong>Chief Metropolitan Magistrate (CMM)</strong> or <strong>District Magistrate (DM)</strong> under Section 14.
                       </p>
                       <ul className="list-disc pl-6 space-y-2 text-gray-700">
                          <li>The DM verifies the bank's affidavit.</li>
                          <li>The DM issues an order to the police to assist the bank in taking physical possession.</li>
                          <li><strong>Timeline:</strong> This usually happens 3-6 months after the 13(4) notice. This is your final window to get a Stay Order.</li>
                       </ul>
                    </div>
                  </div>
                </section>

                {/* DRT Defense */}
                <section id="drt-process" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Debt Recovery Tribunal (DRT): Your Legal Shield</h2>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     Civil courts have no jurisdiction over SARFAESI matters. Your only legal remedy is the <strong>Debt Recovery Tribunal (DRT)</strong>. You can file a <strong>Securitisation Application (SA)</strong> under Section 17 of the SARFAESI Act.
                   </p>

                   <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                         <h3 className="text-xl font-bold text-[#D2A02A] mb-4">When Can You Approach DRT?</h3>
                         <p className="text-gray-700 mb-4">
                           You can approach the DRT <strong>only after</strong> the bank issues the Section 13(4) Possession Notice. You cannot go to DRT just on the basis of a 13(2) notice (except in rare cases).
                         </p>
                         <p className="text-gray-700 font-bold">
                           Time Limit: You must file the SA within 45 days of the 13(4) notice.
                         </p>
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-[#D2A02A] mb-4">The Cost of Litigation</h3>
                         <p className="text-gray-700 mb-4">
                           Defending a home loan is not free.
                         </p>
                         <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li><strong>Court Fees:</strong> Based on the loan amount (capped at ₹1.5 Lakhs in most states).</li>
                            <li><strong>Lawyer Fees:</strong> DRT lawyers charge per hearing or a lump sum.</li>
                            <li><strong>Pre-Deposit:</strong> If you lose in DRT and appeal to DRAT, you must deposit 50% of the debt amount.</li>
                         </ul>
                      </div>
                   </div>
                </section>

                {/* Auction Defense */}
                <section id="auction-defense" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Defense Against Property Auction</h2>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     Even if the bank puts your house up for auction, all is not lost. 80% of bank auctions fail in the first attempt due to high reserve prices or lack of buyers. We use this to your advantage.
                   </p>
                   <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <h3 className="font-bold text-gray-900 text-xl mb-4">Strategies to Stop an Auction</h3>
                      <div className="space-y-6">
                         <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-lg text-blue-700 mr-4 font-bold">01</div>
                            <div>
                               <h4 className="font-bold text-gray-900">Challenging the Valuation</h4>
                               <p className="text-gray-700">Banks often undervalue properties to ensure a quick sale. We challenge their valuation report in DRT, proving the Reserve Price is too low. This forces a re-valuation, buying you 2-3 months.</p>
                            </div>
                         </div>
                         <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-lg text-blue-700 mr-4 font-bold">02</div>
                            <div>
                               <h4 className="font-bold text-gray-900">Procedural Lapses</h4>
                               <p className="text-gray-700">Did the bank give you 30 days' notice before the auction? Did they publish it in two newspapers? Did they affix the notice on the property? If they missed even one step, the entire auction can be quashed by the DRT.</p>
                            </div>
                         </div>
                         <div className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-lg text-blue-700 mr-4 font-bold">03</div>
                            <div>
                               <h4 className="font-bold text-gray-900">The "Private Treaty" Solution</h4>
                               <p className="text-gray-700">Instead of a public auction (where legal titles are messy), we ask the bank to let you sell the property yourself to a buyer you find. This usually fetches a higher price, covering the loan and leaving you with some surplus.</p>
                            </div>
                         </div>
                      </div>
                   </div>
                </section>

                {/* When Possible - Expanded */}
                <section id="when-possible" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">When Will a Bank Agree to Settle a Home Loan?</h2>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     Despite the power of SARFAESI, banks do settle home loans. Why? Because auctions are messy. The SARFAESI process is expensive, ensuring security guards for possession costs money, and legal cases in DRT can drag on for 2-3 years. Banks prefer cash upfront (OTS) over a long legal battle.
                   </p>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     We leverage these specific pressure points to force a settlement:
                   </p>
                   
                   <div className="space-y-6 mb-6">
                      <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                         <h3 className="font-bold text-green-900 text-lg mb-2">1. The "Distress Value" Argument</h3>
                         <p className="text-gray-700">If your property is in a bad location, dilapidated condition, or has tenant issues, we prove to the bank that it will NOT fetch a good price in an auction. We submit independent valuation reports showing the real market value is low. The bank realizes that settlement is their best recovery option.</p>
                      </div>
                      <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                         <h3 className="font-bold text-green-900 text-lg mb-2">2. Compassionate Grounds (RBI Guidelines)</h3>
                         <p className="text-gray-700">If the default happened due to circumstances beyond your control -- typically <strong>Death of the Borrower</strong>, <strong>Severe Medical Crisis</strong> (Cancer, Stroke), or <strong>Natural Calamity</strong> -- we utilize specific RBI circulars that advise banks to take a "humane approach". We can often get a waiver on the entire interest component.</p>
                      </div>
                      <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                         <h3 className="font-bold text-green-900 text-lg mb-2">3. The "Builder Delay" Scenario</h3>
                         <p className="text-gray-700">If you took a home loan for a flat that is still under construction and the builder has stalled the project, you are legally a victim. We argue that the "Security Interest" itself is incomplete. Courts and Tribunals are very sympathetic to home buyers in this situation, often forcing banks to settle.</p>
                      </div>
                   </div>
                </section>

                {/* Alternatives */}
                <section id="alternatives" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Better Alternatives to Settlement for Home Loans</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Before pushing for a One Time Settlement (which damages your credit score), consider these options to save your home:
                  </p>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                         <h3 className="font-bold text-blue-900 mb-2">Loan Restructuring</h3>
                         <p className="text-gray-700">Request the bank to increase your loan tenure (e.g., from 15 to 20 years). This reduces your monthly EMI, making it affordable. You pay more interest in the long run, but you keep your house.</p>
                      </div>
                      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                         <h3 className="font-bold text-blue-900 mb-2">EMI Holiday (Moratorium)</h3>
                         <p className="text-gray-700">If you have a temporary cash crunch (job loss), request a 3-6 month moratorium where you don't pay EMIs. You will have to pay accrued interest later.</p>
                      </div>
                   </div>
                </section>

                {/* Legal Defense */}
                <section id="legal-defense" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How AMA Legal Defends Your Home</h2>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     If the bank has issued a SARFAESI notice, you need a lawyer, not just a settlement agent.
                   </p>
                   <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                     <h3 className="font-bold text-[#D2A02A] text-xl mb-4">Our Secured Loan Defense Strategy</h3>
                     <ul className="space-y-4">
                        <li className="flex items-start">
                           <span className="text-green-500 font-bold mr-3">✓</span>
                           <p><strong>Reply to 13(2):</strong> We draft a strong legal reply forcing the bank to answer specific queries before they can proceed.</p>
                        </li>
                        <li className="flex items-start">
                           <span className="text-green-500 font-bold mr-3">✓</span>
                           <p><strong>DRT Stay Order:</strong> We approach the Debt Recovery Tribunal (DRT) to get a stay on the auction notice if procedural lapses are found.</p>
                        </li>
                        <li className="flex items-start">
                           <span className="text-green-500 font-bold mr-3">✓</span>
                           <p><strong>OTS Negotiation:</strong> While the legal case puts pressure on the bank, we simultaneously negotiate for a One Time Settlement.</p>
                        </li>
                     </ul>
                   </div>
                </section>

                {/* Case Studies */}
                <section id="case-studies" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Real Stories: How We Saved Homes</h2>
                   
                   <div className="space-y-8">
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                         <h3 className="font-bold text-gray-900 text-xl mb-2">Case Study 1: The Builder Delay Trap</h3>
                         <div className="flex gap-4 mb-4 text-sm">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold">Debt: ₹85 Lakhs</span>
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">Settled: ₹40 Lakhs</span>
                         </div>
                         <p className="text-gray-700 mb-2"><strong>The Crisis:</strong> Mr. Sharma had taken a home loan for a project in Noida that was stuck for 4 years. He lost his job and couldn't pay EMIs. The bank issued a 13(4) notice to auction the (incomplete) flat.</p>
                         <p className="text-gray-700"><strong>The Solution:</strong> We filed an SA in DRT arguing that the security interest was not valid as the asset was incomplete. Simultaneously, we approached the bank's Zonal Office. We proved that an auction would fetch almost nothing. The bank agreed to settle for the principal paid to the builder so far.</p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                         <h3 className="font-bold text-gray-900 text-xl mb-2">Case Study 2: Medical Emergency & Widow</h3>
                         <div className="flex gap-4 mb-4 text-sm">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold">Debt: ₹42 Lakhs</span>
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">Settled: ₹28 Lakhs</span>
                         </div>
                         <p className="text-gray-700 mb-2"><strong>The Crisis:</strong> Mrs. Data's husband passed away due to Covid-19. He was the sole earner. The bank started harassment for the home loan, threatening to throw the widow and children out.</p>
                         <p className="text-gray-700"><strong>The Solution:</strong> We utilized the RBI's "Compassionate Grounds" circular. We escalated the matter to the Banking Ombudsman and the Bank's MD. Citing severe hardship, we negotiated a settlement where she only paid the remaining Principal. All interest and penalties were waived.</p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                         <h3 className="font-bold text-gray-900 text-xl mb-2">Case Study 3: Stopping the Auction</h3>
                         <div className="flex gap-4 mb-4 text-sm">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold">Debt: ₹1.2 Cr</span>
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">Settled: Time Bought</span>
                         </div>
                         <p className="text-gray-700 mb-2"><strong>The Crisis:</strong> A business business owner in Mumbai defaulted on his LAP (Loan Against Property). The bank undervalued his ₹2 Cr shop at just ₹90 Lakhs and set the auction date.</p>
                         <p className="text-gray-700"><strong>The Solution:</strong> We challenged the valuation report in DRT. The Tribunal stayed the auction, ordering a fresh valuation. This process took 5 months. In that time, the business owner arranged funds from a private investor and closed the loan account normally, saving his shop from being sold for cheap.</p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                         <h3 className="font-bold text-gray-900 text-xl mb-2">Case Study 4: The Joint Loan Divorce</h3>
                         <div className="flex gap-4 mb-4 text-sm">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold">Debt: ₹65 Lakhs</span>
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">Settled: ₹32 Lakhs (Her Share)</span>
                         </div>
                         <p className="text-gray-700 mb-2"><strong>The Crisis:</strong> A couple took a joint home loan. After a messy divorce, the husband stopped paying his share. The bank threatened to auction the house where the wife and kids lived.</p>
                         <p className="text-gray-700"><strong>The Solution:</strong> We represented the wife. We argued that she was a willing payer but could not bear the husband's liability. The bank agreed to a structured settlement where she paid off the principal component of her share provided she got full ownership rights. We facilitated the legal paperwork.</p>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                         <h3 className="font-bold text-gray-900 text-xl mb-2">Case Study 5: The NRI Property Dispute</h3>
                         <div className="flex gap-4 mb-4 text-sm">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold">Debt: ₹1.5 Cr</span>
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">Settled: ₹95 Lakhs</span>
                         </div>
                         <p className="text-gray-700 mb-2"><strong>The Crisis:</strong> An NRI living in Dubai had a tenant who refused to vacate his Bangalore villa. The loan defaulted because the NRI lost his job. The bank wanted to take possession, which would have legally evicted the tenant but sold the property for cheap.</p>
                         <p className="text-gray-700"><strong>The Solution:</strong> We acted as the local legal power of attorney. We negotiated a tripartite agreement between the Tenant, the Bank, and the Owner. The tenant agreed to buy the property directly from the owner at a fair market value, the proceeds of which settled the loan instantly. Everyone won.</p>
                      </div>
                   </div>
                </section>

                {/* Client Reviews */}
                <section id="reviews" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="flex text-[#D2A02A]">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 italic mb-4">"I received a 13(4) notice and thought I lost my home. AMA Legal filed a stay in DRT within 48 hours. They saved my house and helped me restructure the loan. Forever grateful."</p>
                      <div className="flex items-center">
                         <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">RK</div>
                         <div className="ml-3">
                            <p className="font-bold text-gray-900 text-sm">Rakesh Kumar</p>
                            <p className="text-xs text-gray-500">Delhi (Home Saved)</p>
                         </div>
                      </div>
                    </div>

                     <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="flex text-[#D2A02A]">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 italic mb-4">"The bank undervalues your property. My flat was worth 1.5 Cr, but they set the auction price at 90 Lakhs. AMA Legal challenged this in DRT and stopped the auction."</p>
                      <div className="flex items-center">
                         <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-sm">AS</div>
                         <div className="ml-3">
                            <p className="font-bold text-gray-900 text-sm">Amit Singh</p>
                            <p className="text-xs text-gray-500">Mumbai (Auction Stopped)</p>
                         </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="flex text-[#D2A02A]">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 italic mb-4">"My husband passed away and I couldn't pay the EMIs. The bank was rude. AMA Legal took over and spoke to the Zonal Manager. They waived all interest on compassionate grounds."</p>
                      <div className="flex items-center">
                         <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold text-sm">NP</div>
                         <div className="ml-3">
                            <p className="font-bold text-gray-900 text-sm">Neeta P.</p>
                            <p className="text-xs text-gray-500">Bangalore (Compassionate Settlement)</p>
                         </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="flex text-[#D2A02A]">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 italic mb-4">"Don't trust local agents for SARFAESI. You need real lawyers. AMA Legal's team knows exactly how the DRT works. Professional and effective."</p>
                      <div className="flex items-center">
                         <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-700 font-bold text-sm">VJ</div>
                         <div className="ml-3">
                            <p className="font-bold text-gray-900 text-sm">Vikram J.</p>
                            <p className="text-xs text-gray-500">Chennai</p>
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

              </div>
            </div>

            {/* Right Sidebar (Desktop) */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              {/* Contact Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Save Your Home</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Received a SARFAESI notice? Time is running out. Talk to our DRT experts today.
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
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

function breadcrumbSchemaWithId(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://amalegalsolutions.com${item.href}`
    }))
  };
}
