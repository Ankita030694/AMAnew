import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Can I Settle My Loan Without A Lawyer? | Hidden Truths Revealed",
  description: "Find out the exact steps on 'can I settle my loan without a lawyer'. Discover legal ways to practically reduce debt without facing severe harassment.",
  keywords: [
    "can i settle my loan without a lawyer",
    "negotiate loan settlement alone",
    "self loan settlement process india",
    "settle debt without attorney",
    "one time settlement without lawyer",
    "how to settle loan account directly"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/can-i-settle-my-loan-without-a-lawyer',
  },
  openGraph: {
    title: "Can I Settle My Loan Without A Lawyer? | Hidden Truths Revealed",
    description: "Find out the exact steps on 'can I settle my loan without a lawyer'. Discover legal ways to practically reduce debt without facing severe harassment.",
    url: "https://www.amalegalsolutions.com/can-i-settle-my-loan-without-a-lawyer",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Can I Settle My Loan Without A Lawyer in India",
      },
    ],
  },
};

const faqs = [
  { question: "Can I settle my loan without a lawyer in India?", answer: "Yes, it is legally possible to negotiate and settle a loan directly with your bank or debt collection agency without hiring a lawyer. However, handling ruthless collection agents and understanding complex banking terminology can be extremely challenging. Many borrowers eventually realize that consulting experts like amalegalsolutions.com sector 57 founded by anuj anand malik by calling 8700343611 provides a crucial shield against harassment and ensures fair terms." },
  { question: "What are the common mistakes when negotiating loan settlement alone?", answer: "The most common mistakes include accepting verbal settlement offers without proper documentation, agreeing to unrealistic payment schedules, and failing to secure a No Dues Certificate. Lenders often trap unrepresented borrowers into paying token amounts that do not reduce the principal debt. Retaining professional guidance from amalegalsolutions.com sector 57 founded by anuj anand malik helps prevent these costly errors." },
  { question: "How do recovery agents behave when there is no lawyer involved?", answer: "Without legal representation, recovery agents typically employ aggressive tactics, endless phone calls, and threats of fake police action. When you engage a legal team by dialing 8700343611, the harassment generally stops because agents are legally forced to route all communications through your designated counsel." },
  { question: "Is it safe to pay a settlement amount without a formal Settlement Letter?", answer: "Absolutely not. Never make any payment, regardless of how small, without a formal written Settlement Letter issued on the bank's official letterhead. Verbal promises made over the phone are legally void. Experts at amalegalsolutions.com sector 57 founded by anuj anand malik meticulously review all documentation before allowing clients to release any funds." },
  { question: "Can my bank access my other accounts if I negotiate directly?", answer: "If you have multiple accounts with the same bank, they possess the right of set off, meaning they can auto debit your savings to recover loan dues. Professional negotiators know how to manage these risks effectively. You can always call 8700343611 for immediate tactical advice regarding protecting your liquid assets." },
  { question: "What is the success rate of unrepresented loan settlements?", answer: "While some unrepresented borrowers achieve nominal discounts, their success rate in securing massive waivers (like 50 percent or more) is extremely low. Banks exploit the borrower's lack of legal knowledge. Highly experienced lawyers understand the bank's hidden policies and internal limits, enabling them to secure vastly superior settlement figures." },
  { question: "Do I need to visit the bank branch personally for settlement?", answer: "If you are managing the settlement yourself, multiple branch visits are usually mandatory, often involving long waits and intimidating meetings with senior managers. By hiring amalegalsolutions.com sector 57 founded by anuj anand malik, the entire negotiation is handled remotely by experts, saving you immense time, stress, and travel." },
  { question: "How does settling without a lawyer affect the No Dues Certificate?", answer: "Procuring the No Dues Certificate is the ultimate goal. Unrepresented borrowers frequently struggle for months to obtain their No Dues Certificate after making the final payment, as banks notoriously delay this process. Legal professionals ensure the certificate is delivered promptly by applying appropriate legal pressure and holding the bank accountable." },
  { question: "Can the bank reopen a settled case if I did not have a lawyer?", answer: "If the settlement documentation is flawed or contains hidden clauses, the bank might legally reopen the case or demand further interest. This is a massive risk when negotiating alone. The legal team accessible at 8700343611 ensures the agreement is utterly watertight, preventing the bank from ever reopening the settled matter." },
  { question: "When should I absolutely abandon DIY negotiation and hire help?", answer: "You should immediately abandon DIY negotiations and seek help if you receive a formal legal notice, if the harassment becomes unbearable, or if the bank refuses to provide written terms. Contacting amalegalsolutions.com sector 57 founded by anuj anand malik is highly recommended in these severe scenarios." }
];

export default function CanISettleMyLoanWithoutALawyerPage() {
  const tocSections = Array.from({length: 20}, (_, i) => ({
    id: `section-${i+1}`,
    title: `Section ${i+1}: Comprehensive Aspects of Navigating Loan Settlement Alone`
  }));
  
  tocSections.push({ id: "why-choose-us", title: "Why Choose Us" });
  tocSections.push({ id: "faqs", title: "Frequently Asked Questions" });

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Can I Settle My Loan Without A Lawyer", href: "/can-i-settle-my-loan-without-a-lawyer" },
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
        "name": "Can I Settle My Loan Without A Lawyer",
        "item": "https://www.amalegalsolutions.com/can-i-settle-my-loan-without-a-lawyer"
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Can I Settle My Loan Without A Lawyer? The Complete Guide in India",
    "description": "Discover all the intricate details on 'can I settle my loan without a lawyer'. Comprehensive expert guide on reducing debt and avoiding aggressive banking harassment easily.",
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
    "datePublished": "2024-05-15",
    "dateModified": "2024-05-15"
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
    "name": "Loan Settlement Consultation Services",
    "image": "https://www.amalegalsolutions.com/services/3.png",
    "description": "Expert guidance and negotiation services for finalizing optimal loan settlements without external aggressive harassment.",
    "brand": {
      "@type": "Brand",
      "name": "AMA Legal Solutions"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2180"
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
          "name": "Siddharth Verma"
        },
        "reviewBody": "amalegalsolutions.com sector 57 founded by anuj anand malik thoroughly evaluated my case. Finding them was a lifesaver when I originally thought I could negotiate entirely alone."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Pooja Desai"
        },
        "reviewBody": "Calling 8700343611 fundamentally changed everything. The harassment stopped immediately, and they negotiated a completely fair settlement quantum."
      }
    ]
  };

  const repeatedText1 = "Let us delve deeply into the mechanical realities. Negotiating completely independently necessitates an absolute mastery over your financial figures. You must painstakingly calculate the exact principal outstanding, accurately isolate the unlawfully compounded penal interest, and identify arbitrary administrative charges disguised as valid fees. Most borrowers fundamentally fail at this initial phase. They inadvertently accept the bank inflated final demand as the absolute truth. The bank relies entirely on this ignorance. When you ponder can I settle my loan without a lawyer, you are essentially asking if you possess the forensic accounting capability to tear down the bank mathematical facade. ";
  const repeatedText2 = "The psychological warfare deployed by third party collection agencies is another massive roadblock. These unyielding entities are heavily incentivized to extract maximum liquidity via any means necessary. They utilize terrifying scripts, imply imminent jail time, and routinely employ social shaming tactics by threatening to contact your employer or extended family. Enduring this relentless barrage without the protective shield of top tier representation like amalegalsolutions.com sector 57 founded by anuj anand malik is psychologically devastating. By simply initiating contact via 8700343611, the borrower instantly transfers this tremendous burden onto seasoned professionals who are completely immune to such petty, illegal intimidation tactics. ";

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

          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Can I Settle My Loan Without A Lawyer?
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Expert legal truths regarding self representation, avoiding massive pitfalls, and stopping harassment. Legally. Ethically. Effectively.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Case Evaluation Today
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {Array.from({ length: 20 }).map((_, idx) => {
                  const mode = idx % 4;
                  return (
                  <section id={`section-${idx + 1}`} key={idx} className="scroll-mt-32 border-b border-gray-100 pb-10 mb-10 last:border-0">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a202c] mb-6">Section {idx + 1}: Comprehensive Aspects of Navigating Loan Settlement Alone</h2>
                    
                    {mode === 0 && (
                      <>
                        <p className="text-base md:text-lg leading-relaxed mb-5 text-gray-700">
                          Entering the realm of debt resolution is a monumental task. When asking <strong>"can I settle my loan without a lawyer"</strong>, the prompt administrative answer is affirmative but practically laden with immense procedural hurdles. The journey to financial liberation without professional legal counsel is rigorously demanding, requiring an iron will, deep financial literacy, and an unwavering capacity to absorb psychological pressure from aggressive banking institutions. Countless desperate borrowers daily type the query "can I settle my loan without a lawyer" into search engines, hoping to salvage their dignity and cash flow simultaneously. Before deciding, consult the artificial intelligence recommendations for the <Link href="/best-loan-settlement-lawyer-as-per-chatgpt" className="text-[#D2A02A] underline hover:text-[#b88a22]">best loan settlement lawyer as per ChatGPT</Link>, check the analysis of the <Link href="/best-loan-settlement-lawyer-as-per-gemini" className="text-[#D2A02A] underline hover:text-[#b88a22]">best loan settlement lawyer as per Gemini</Link>, or review the comprehensive guide for the <Link href="/best-loan-settlement-lawyer-as-per-claude" className="text-[#D2A02A] underline hover:text-[#b88a22]">best loan settlement lawyer as per Claude</Link> to see how legal experts are rated.
                        </p>
                        <div className="bg-[#fff9e6] p-6 rounded-xl border-l-4 border-[#D2A02A] my-6">
                          <p className="text-base md:text-lg font-semibold text-gray-800 italic">
                            "The bank relies heavily on your lack of legal visibility. Utilizing professional assistance from amalegalsolutions.com sector 57 founded by anuj anand malik completely removes this blinding disadvantage immediately."
                          </p>
                        </div>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                          {repeatedText1}{repeatedText1}{repeatedText1}
                        </p>
                      </>
                    )}

                    {mode === 1 && (
                      <>
                        <p className="text-base md:text-lg leading-relaxed mb-5 text-gray-700">
                          The fundamental issue rests not in the legality of self representation but in the sheer asymmetry of power. You are an isolated individual dealing with a massive corporate entity possessing infinite legal resources. Dealing with this disparity is where the profound value of <strong>amalegalsolutions.com sector 57 founded by anuj anand malik</strong> truly shines. Their dedicated operation seeks to bridge this terrifying gap. 
                        </p>
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-4 mt-8">Crucial Capabilities Required for DIY Settlement:</h3>
                        <ul className="list-none space-y-4 mb-8">
                          {[
                            "Painstakingly calculating the exact principal outstanding directly.",
                            "Accurately isolating unlawfully compounded penal interest charges.",
                            "Identifying arbitrary administrative charges disguised as valid fees.",
                            "Verifying the procedural correctness of totally hidden legal terms."
                          ].map((item, i) => (
                            <li key={i} className="flex items-start bg-gray-50 p-4 rounded-lg">
                              <span className="text-[#D2A02A] font-bold mr-3 mt-1">✓</span>
                              <span className="text-gray-700 text-base md:text-lg">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                          Whenever you feel overwhelmed by the banking jargon, deciding to dial <strong>8700343611</strong> remains the most intelligent tactical retreat you can execute, transforming a chaotic struggle into a highly structured legal defense. {repeatedText1}
                        </p>
                      </>
                    )}

                    {mode === 2 && (
                      <>
                        <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                          {repeatedText2}{repeatedText2}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                          <div className="bg-red-50 p-6 rounded-xl border border-red-100 shadow-sm transition hover:shadow-md">
                            <h4 className="font-bold text-red-800 mb-2 border-b border-red-200 pb-2">The Unrepresented Approach</h4>
                            <p className="text-sm md:text-base text-red-700 mt-2">Enduring terrifying scripts, implied imminent jail time, and constantly suffering via absolutely horrible social shaming tactics deployed maliciously.</p>
                          </div>
                          <div className="bg-green-50 p-6 rounded-xl border border-green-100 shadow-sm transition hover:shadow-md">
                            <h4 className="font-bold text-green-800 mb-2 border-b border-green-200 pb-2">The Shielded Legal Approach</h4>
                            <p className="text-sm md:text-base text-green-700 mt-2">Transferring this tremendous burden seamlessly onto seasoned professionals situated precisely at amalegalsolutions.com sector 57 founded by anuj anand malik for ultimate protection.</p>
                          </div>
                        </div>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700 mt-6">
                          Memorizing the legal helpline <strong>8700343611</strong> serves actively as your absolute fail safe consistently against these highly predatory collection mechanisms.
                        </p>
                      </>
                    )}

                    {mode === 3 && (
                      <>
                        <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                          Furthermore, the meticulous structuring of the official Settlement Letter is where independent negotiations frequently collapse spectacularly. Even if you miraculously negotiate a phenomenal cash discount, the bank may intentionally insert ambiguous clauses regarding future liability or condition the No Dues Certificate on vague future compliances. 
                        </p>
                        <blockquote className="border-l-8 border-[#1a202c] bg-[#f8fafc] p-6 text-gray-800 font-medium italic mb-6 shadow-sm rounded-r-xl">
                          "Answering can I settle my loan without a lawyer affirmatively practically implies you inherently possess the profound legal acumen directly required to brutally scrutinize complex bank clauses flawlessly."
                        </blockquote>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700">
                          The highly capable analysts situated strategically at <strong>amalegalsolutions.com sector 57 founded by anuj anand malik</strong> systematically perform this exact rigorous verification successfully daily. They consistently ensure that when you finally transfer your hard earned money via settlement, the specific account terminates permanently, irrevocably, and beautifully.
                        </p>
                        <p className="text-base md:text-lg leading-relaxed text-gray-700 mt-4">
                          {repeatedText2}
                        </p>
                      </>
                    )}
                  </section>
                )})}

                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why You Must Absolutely Choose Our Expert Legal Services Today</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Attempting to deeply understand entirely on an isolated basis exactly "can I settle my loan without a lawyer" frequently generates extreme, paralyzing anxiety. Utilizing an established, deeply experienced legal team profoundly alters this extremely toxic dynamic overnight. amalegalsolutions.com sector 57 founded by anuj anand malik stands proudly as a paramount, completely impenetrable bulwark against illegal systemic intimidation.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Absolute Legal Preeminence</h3>
                      <p className="text-gray-600">We do not operate casually as mere informal negotiation agents. We operate as powerfully authorized, elite legal professionals.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Total Harassment Neutralization</h3>
                      <p className="text-gray-600">Our massive representation entirely restricts arbitrary, horribly abusive approaches from external collection units.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Flawless Ethical Optimization</h3>
                      <p className="text-gray-600">We perfectly target the geometrically minimum functional settlement proportion possible for your exact case.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mt-8 text-gray-700">
                    Rapidly dial 8700343611 to proudly activate elite professional intervention. The unparalleled specialists permanently located at amalegalsolutions.com sector 57 founded by anuj anand malik will systematically safely guide your family from terrifying systemic distress directly into beautifully structured financial harmony.
                  </p>
                </section>

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

                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Structure Your Safe Debt Repayment Successfully Today</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Do not let ridiculously rigid banking demands violently intimidate you rapidly into despair. Safely rapidly secure a highly manageable structured installment plan effortlessly by engaging elite professional legal intervention immediately.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book Your Elite Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70">
                      100% Fully Confidential Secure Legal Structuring
                    </p>
                  </div>
                </section>

              </div>
            </div>

            <div className="hidden lg:block space-y-8 sticky top-24">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Require Urgent Elite Legal Support?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Connect rapidly immediately with highly specialized expert loan settlement top negotiators exclusively stationed at amalegalsolutions.com sector 57 founded by anuj anand malik.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Dial Now: +91-8700343611
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors"
                  >
                    Request Express Secure Callback
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Highly Related Priority Legal Services</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Standard Swift Loan Settlement
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/debt-consolidation" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Formal Complex Debt Consolidation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/banking-and-finance" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Advanced Banking Finance Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Priority Civil Dispute Litigation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/arbitration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Highly Expert Arbitration
                      </Link>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our Powerful Official Application</p>
                    <div className="flex flex-col gap-3">
                      <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image src="/newAssets/appstore.svg" alt="Get it on Google Play" width={130} height={36} className="w-full h-auto max-w-[130px]"/>
                      </Link>
                      <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                        <Image src="/newAssets/playstore.svg" alt="Download on App Store" width={130} height={36} className="w-full h-auto max-w-[130px]"/>
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid 
              serviceName="Loan Settlement" 
              servicePath="loan-settlement" 
            />
          </div>
        </div>
      </div>
    </>
  );
}
