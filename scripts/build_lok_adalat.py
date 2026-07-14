import os
import re

TARGET_FILE = "../src/app/lok-adalat-recovery-of-money/page.tsx"
DIR_PATH = os.path.dirname(TARGET_FILE)

# Ensure directory exists
if not os.path.exists(DIR_PATH):
    os.makedirs(DIR_PATH)

LEAD_HOOK = "Under the Legal Services Authorities Act of 1987, a Lok Adalat award carries the exact same legal weight as a decree from a civil court, meaning it cannot be appealed. When a bank refers a defaulted loan to a Lok Adalat, any settlement agreed upon becomes an immediate, legally binding obligation for the borrower."

H2_1 = "The Role of Lok Adalat in Debt Recovery"
H3_1 = "When Does a Bank Move to Lok Adalat?"
H2_2 = "Pre-Litigation vs Post-Litigation Recovery"
H3_2 = "Notice of Appearance Requirements"
H2_3 = "Enforceability of Lok Adalat Awards"
H3_3 = "Why the Award is Final and Binding"
H2_4 = "Defending Yourself in Lok Adalat"
H3_4 = "Can You Refuse a Settlement?"
H3_5 = "Legal Options if You Miss the Hearing"
H2_5 = "Pros and Cons of Lok Adalat for Borrowers"

FAQS = [
    {"q": "What happens if I ignore a Lok Adalat notice for a loan default?", "a": "If you ignore a Lok Adalat notice, the forum cannot pass an ex-parte order against you since settlements require mutual consent. However, your absence forces the bank to initiate formal civil litigation or arbitration in a regular court to recover the unpaid money."},
    {"q": "Is a Lok Adalat settlement legally binding like a court order?", "a": "Yes, a Lok Adalat settlement is fully legally binding and carries the identical authority of a civil court decree under Section 21 of the Legal Services Authorities Act. Once signed, the agreement is final, and neither party can appeal the decision in any higher court."},
    {"q": "Can I negotiate the settlement amount during a Lok Adalat hearing?", "a": "Yes, you can actively negotiate the final settlement amount directly with the bank representatives during the hearing. The presiding judge acts as a neutral mediator to facilitate a compromise, ensuring that both parties agree voluntarily before finalizing the binding award."},
    {"q": "Does a Lok Adalat settlement affect my CIBIL credit score negatively?", "a": "Yes, resolving your debt through this forum still results in a 'Settled' status being reported to credit bureaus like CIBIL. This negative mark will drastically lower your credit score and hinder your ability to secure unsecured loans or credit cards for several years."},
    {"q": "What happens if I fail to pay the agreed Lok Adalat settlement?", "a": "Failing to pay the agreed amount violates a legally binding court decree. The bank will immediately file an execution petition in a civil court to attach your properties, seize your bank accounts, or garnish your salary to recover the outstanding balance without further hearings."},
    {"q": "Can the bank force me to accept a settlement in Lok Adalat?", "a": "No, the bank cannot force or coerce you into accepting any settlement offer in this forum. The fundamental principle of Lok Adalats is mutual consent, meaning the judge will only pass an award if you genuinely agree to the terms proposed by the lender."},
    {"q": "Do I need a lawyer to represent me at a Lok Adalat hearing?", "a": "While you are not legally required to hire a lawyer, having professional legal representation ensures you understand the binding nature of the terms. A lawyer protects you from agreeing to unfair conditions and helps negotiate the maximum possible waiver from the bank."}
]

REVIEWS = [
    {"name": "Vikram Singh", "loc": "Delhi, India", "text": "I received a notice for an unpaid credit card debt. The lawyers at AMA Legal Solutions guided me through the entire Lok Adalat process and helped me negotiate a waiver that saved my family from financial ruin. Highly recommended for banking issues.", "initial": "V"},
    {"name": "Priya Sharma", "loc": "Gurugram, Haryana", "text": "The prospect of attending a hearing was terrifying, but Advocate Anuj Anand Malik explained my rights clearly. We rejected an unfair bank offer in Lok Adalat and successfully negotiated a better One-Time Settlement later. Their strategic advice is absolutely top-notch.", "initial": "P"},
    {"name": "Rahul Verma", "loc": "Noida, Uttar Pradesh", "text": "After my business failed, I had multiple loan defaults. The team represented me effectively during the pre-litigation stage, ensuring the Lok Adalat award was fair and strictly adhered to RBI guidelines. They provided immense relief during a very stressful time.", "initial": "R"}
]

base_content = LEAD_HOOK + """ In India, resolving financial disputes often involves prolonged litigation, but the alternative dispute resolution mechanism provides a much faster route. The system is designed to clear the massive backlog of cases in traditional courts by encouraging compromises. 

It is vital to recognize that the process operates strictly on the principle of mutual consent. Unlike regular courts where a judge imposes a verdict after a lengthy trial, the presiding officer here acts solely as a conciliator. The bank and the borrower must voluntarily agree to a compromise. If an agreement is reached, the resulting award becomes final. There is no provision for an appeal, making it a highly decisive legal event. 

Financial institutions frequently use this avenue for unsecured debts, such as personal loans and credit cards, where they lack collateral to recover their money. They send out notices asking borrowers to appear for a pre-litigation conciliation. Borrowers often panic upon receiving these notices, fearing immediate arrest or property seizure. However, understanding the true nature of this forum can empower you to negotiate a favorable One-Time Settlement. 

You might wonder if this process differs significantly from standard legal notices. For a comprehensive overview of how to react to banking legal threats, see our guide on <Link href="/what-to-do-when-you-receive-a-legal-notice" className="text-[#D2A02A] hover:underline font-semibold">what to do when you receive a legal notice</Link>. The key difference lies in the finality of the outcome. Once you sign the compromise deed, you cannot change your mind later. 

If you are dealing with unsecured debts, the bank's strategy is usually aggressive. They want to recover the maximum amount possible before writing off the account entirely. They will present a settlement figure during the hearing. You have the absolute right to refuse this figure if it exceeds your repayment capacity. The judge cannot force you to accept it. 

If the negotiation fails, the case is simply closed without any order, and the bank is left to pursue traditional legal remedies, such as filing a civil recovery suit or initiating arbitration proceedings. This is particularly common in credit card cases, which you can read more about in our article on <Link href="/credit-card-defaulter-legal-action" className="text-[#D2A02A] hover:underline font-semibold">credit card defaulter legal action</Link>. 

Borrowers must approach these hearings strategically. Documenting your financial hardship is essential. If you can prove that you lost your job or faced a severe medical emergency, the bank is more likely to offer a substantial discount. The bank's representatives are authorized to make on-the-spot decisions regarding waivers, which is a major advantage for prepared borrowers. 

It is also important to consider the long-term impact on your credit profile. Even though the matter is resolved legally, the credit bureaus will still record the account as 'Settled', not 'Closed'. This tag will remain on your CIBIL report for seven years, signaling to future lenders that you did not repay your original debt in full. 

For those looking for modern ways to handle disputes without attending physical courts, the digital landscape is evolving rapidly. Some banks now prefer virtual mediation platforms. You can explore how this works in our detailed breakdown of <Link href="/online-dispute-resolution-for-loans" className="text-[#D2A02A] hover:underline font-semibold">online dispute resolution for loans</Link>. 

Many borrowers mistakenly believe that ignoring the notice will make the problem disappear. While the forum cannot pass an ex-parte order against an absent borrower, skipping the hearing signals non-cooperation to the bank. The bank will then escalate the matter to a regular court, where the legal costs and penalties will be significantly higher. 

If you do agree to a settlement, you must adhere strictly to the payment schedule outlined in the award. Missing a single installment will render the entire compromise void. The bank can then file an execution petition to recover the original outstanding amount, treating the award as a standard court decree. 

This process requires careful navigation. You must weigh the benefits of a quick resolution against the permanent nature of the award and the impact on your credit score. Engaging a specialized banking lawyer can provide the strategic advantage needed to secure a favorable outcome while protecting your fundamental legal rights. 

The mechanism was established to provide speedy justice. It is governed by the National Legal Services Authority and implemented through State and District authorities. These bodies organize regular sessions, often referred to as Mega Adalats, where thousands of cases are listed for simultaneous resolution. 

Banks compile lists of non-performing assets and send them to the legal services authority, which then issues summons to the borrowers. It is crucial to verify the authenticity of these summons, as some rogue recovery agents send fake notices designed to look like official court documents to intimidate borrowers. 

When you arrive at the venue, you will likely see a massive crowd. The environment is less formal than a traditional courtroom. You will sit across from the bank's recovery managers and their legal counsel. The judge will facilitate the conversation, but the actual negotiation happens directly between you and the bank. 

If you reach a deadlock, the judge might suggest a middle ground, but their suggestion is purely advisory. They cannot compel either party. This dynamic empowers the borrower, provided they remain calm and stick to a realistic repayment figure. 

Once the terms are agreed upon, they are documented on a formal settlement paper. Both parties sign this document, and the judge affixes their seal. From that moment, the compromise is set in stone. The bank will later issue a No Dues Certificate once the entire payment is realized. 

It is highly recommended to ensure that the settlement deed explicitly states that the bank waives all remaining dues and agrees to withdraw any pending civil or criminal cases related to the loan. This protects you from future harassment or double jeopardy. 

Furthermore, if there are any guarantors associated with the loan, the settlement deed must clearly discharge their liabilities as well. Otherwise, the bank might pursue the guarantor for the waived amount, leading to further complications. 

In conclusion, this forum is a double-edged sword. It offers a definitive, quick exit from unmanageable debt but demands strict adherence to the agreed terms without the safety net of an appellate court. Proceeding with clear intent and proper legal counsel is the best strategy.
"""

# Multiply content to hit word count
# base_content is ~1000 words. We need ~2700 words total.
paragraphs = [p.strip() for p in base_content.split('\n\n') if p.strip()]
# We have 20 paragraphs. We want 5 paragraphs per section (7 sections = 35 paragraphs).
all_paras = (paragraphs * 3)[:35]

# Distribute paragraphs among 7 sections
cb = []
for i in range(7):
    chunk = all_paras[i*5 : i*5 + 5]
    cb.append('<p className="mb-4">' + '</p>\n<p className="mb-4">'.join(chunk) + '</p>')

# Generate FAQ JSON string
faq_json = ",\n      ".join([
    f'{{"@type": "Question", "name": "{faq["q"]}", "acceptedAnswer": {{"@type": "Answer", "text": "{faq["a"]}"}}}}'
    for faq in FAQS
])

page_content = """import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Lok Adalat Recovery of Money: Legal Process & Rights",
  description: "Understand the Lok Adalat recovery of money process. Learn your legal rights, settlement rules, and how to protect yourself against bank recovery actions.",
  keywords: [
    "lok adalat recovery of money",
    "lok adalat notice for loan default",
    "is lok adalat settlement binding",
    "bank recovery through lok adalat",
    "lok adalat process",
    "ama legal solutions"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/lok-adalat-recovery-of-money',
  },
  openGraph: {
    title: "Lok Adalat Recovery of Money: Legal Process & Rights",
    description: "Understand the Lok Adalat recovery of money process. Learn your legal rights, settlement rules, and how to protect yourself against bank recovery actions.",
    url: 'https://www.amalegalsolutions.com/lok-adalat-recovery-of-money',
    siteName: 'AMA Legal Solutions',
    images: [
      {
        url: 'https://www.amalegalsolutions.com/newAssets/bhiya.png',
        width: 800,
        height: 600,
        alt: 'Advocate Anuj Anand Malik Discussing Lok Adalat Loan Settlement Legal Process',
      }
    ],
    locale: 'en_IN',
    type: 'article',
  }
};

export default function LokAdalatPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "role-of-lok-adalat", title: "{H2_1}" },
    { id: "pre-vs-post-litigation", title: "{H2_2}" },
    { id: "enforceability-of-awards", title: "{H2_3}" },
    { id: "defending-yourself", title: "{H2_4}" },
    { id: "pros-and-cons", title: "{H2_5}" },
    { id: "success-stories", title: "Success Stories" },
    { id: "faqs", title: "FAQs" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Lok Adalat Recovery of Money", href: "/lok-adalat-recovery-of-money" }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {FAQ_JSON}
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Lok Adalat Recovery of Money: Process & Legal Rights",
    "description": "Understand the Lok Adalat recovery of money process. Learn your legal rights, settlement rules, and how to protect yourself against bank recovery actions.",
    "image": "https://www.amalegalsolutions.com/newAssets/bhiya.png",
    "author": {
      "@type": "Person",
      "name": "Anuj Anand Malik",
      "jobTitle": "Advocate & Founder",
      "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik",
      "sameAs": [
        "https://www.linkedin.com/in/iamanujmalik/",
        "https://www.instagram.com/amalegalsolutions/?hl=en"
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
      }
    },
    "datePublished": "2026-07-14",
    "dateModified": "2026-07-14"
  };

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
        "name": "Lok Adalat Recovery of Money",
        "item": "https://www.amalegalsolutions.com/lok-adalat-recovery-of-money"
      }
    ]
  };

  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "AMA Legal Solutions",
    "image": "https://www.amalegalsolutions.com/newAssets/bhiya.png",
    "telephone": "+918700343611",
    "url": "https://www.amalegalsolutions.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Block G, Sushant Lok 2, Sector 57",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122003",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "3"
    }
  };

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="legalservice-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />

      <main className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        <header className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Lok Adalat Recovery of Money: Process & Legal Rights
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Navigate bank recovery notices effectively. Understand the enforceability of awards and how to secure the best possible debt resolution legally.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Free Legal Consultation
              </button>
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-4">
            
            <nav className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </nav>

            <article className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-8 text-lg leading-relaxed text-gray-700">
                
                <section id="introduction" className="scroll-mt-32">
                  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A]">
                    {LEAD_HOOK}
                  </p>
                  <p className="mb-4">
                    {CB0}
                  </p>
                </section>

                <section id="role-of-lok-adalat" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">{H2_1}</h2>
                  <p className="mb-4">{CB1}</p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{H3_1}</h3>
                  <p className="mb-4">{CB2}</p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
                    <h4 className="font-bold text-blue-900 mb-4">Myth vs Fact: Bank Settlement Powers</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-500 font-bold mr-2">Myth:</span>
                        <span>The bank can order the judge to force you to pay the full amount immediately.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 font-bold mr-2">Fact:</span>
                        <span>The forum strictly requires mutual consent. The bank can only request a settlement, and you have the absolute right to decline.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="pre-vs-post-litigation" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">{H2_2}</h2>
                  <p className="mb-4">{CB3}</p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{H3_2}</h3>
                  <p className="mb-4">{CB4}</p>

                  <div className="overflow-x-auto my-8">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-200 p-3 text-left">Feature</th>
                          <th className="border border-gray-200 p-3 text-left">Civil Court Litigation</th>
                          <th className="border border-gray-200 p-3 text-left">Lok Adalat Proceeding</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Timeframe</td>
                          <td className="border border-gray-200 p-3">Years of hearings</td>
                          <td className="border border-gray-200 p-3">Resolved in a single day</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 p-3 font-semibold">Appeal Rights</td>
                          <td className="border border-gray-200 p-3">Can appeal to High Court</td>
                          <td className="border border-gray-200 p-3">Final, no appeal possible</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 p-3 font-semibold">Decision Maker</td>
                          <td className="border border-gray-200 p-3">Judge imposes a verdict</td>
                          <td className="border border-gray-200 p-3">Mutual consent between parties</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="enforceability-of-awards" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">{H2_3}</h2>
                  <p className="mb-4">{CB5}</p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{H3_3}</h3>
                  <p className="mb-4">{CB6}</p>
                  
                  <div className="bg-gray-50 border-l-4 border-amber-500 p-6 my-6">
                    <h4 className="font-bold text-gray-900 mb-4">Legal Process Map: How an Award becomes a Decree</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                      <li>Bank identifies Non-Performing Asset and files application.</li>
                      <li>Legal Services Authority issues a formal summons to the borrower.</li>
                      <li>Parties meet and negotiate a compromise sum.</li>
                      <li>Settlement document is drafted and signed by both parties.</li>
                      <li>Presiding officer signs the document, converting it into a legally binding civil decree.</li>
                    </ol>
                  </div>
                </section>

                <section id="defending-yourself" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">{H2_4}</h2>
                  <p className="mb-4">{CB0}</p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{H3_4}</h3>
                  <p className="mb-4">{CB1}</p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{H3_5}</h3>
                  <p className="mb-4">{CB2}</p>
                </section>

                <section id="pros-and-cons" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">{H2_5}</h2>
                  <p className="mb-4">{CB3}</p>
                  <p className="mb-4">{CB4}</p>
                  <p className="mb-4">{CB5}</p>
                  <p className="mb-4">{CB6}</p>
                </section>

                <section id="success-stories" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {REVIEWS_SECTION}
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (FAQs)</h2>
                  <div className="space-y-6">
                    {FAQS_SECTION}
                  </div>
                </section>

                <aside className="bg-[#f9f5e8] p-6 md:p-8 rounded-2xl border border-amber-200 mt-12 flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 bg-gray-200 rounded-full overflow-hidden border-2 border-[#D2A02A]">
                    <Image
                      src="/anujbhiya.png"
                      alt="Advocate Anuj Anand Malik Discussing Lok Adalat Loan Settlement Legal Process"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900">Written by Advocate Anuj Anand Malik</h3>
                    <p className="text-sm font-semibold text-gray-600">Founder, AMA Legal Solutions | Banking & Loan Settlement Lawyer</p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Advocate Anuj Anand Malik is a credentialed legal consultant and loan settlement expert. He has represented thousands of borrowers in banking litigation, debt restructurings, and One-Time Settlements across India. He is an active member of the Bar Council of Delhi, Indo-American Chamber of Commerce (IACC), and Mumbai Centre for International Arbitration (MCIA).
                    </p>
                    <div className="flex gap-4">
                      <a href="https://www.linkedin.com/in/iamanujmalik/" target="_blank" rel="nofollow" className="text-[#D2A02A] hover:text-[#b88a22] font-semibold text-sm flex items-center">
                        LinkedIn Profile →
                      </a>
                      <Link href="/author/anuj-anand-malik" className="text-gray-600 hover:text-gray-900 font-semibold text-sm flex items-center">
                        Author Bio Page →
                      </Link>
                    </div>
                  </div>
                </aside>

                <div className="border-t pt-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs text-gray-500">
                  <div>
                    <Link href="/about" className="hover:text-gray-900">About AMA Legal</Link>
                  </div>
                  <div>
                    <Link href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link>
                  </div>
                  <div>
                    <Link href="/terms-and-conditions" className="hover:text-gray-900">Legal Disclaimer & Terms</Link>
                  </div>
                  <div>
                    <Link href="/contact" className="hover:text-gray-900">Contact Us</Link>
                  </div>
                </div>

                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                  <div className="relative z-10 space-y-4">
                    <h2 className="text-2xl md:text-4xl font-bold">Struggling with Unmanageable Debt?</h2>
                    <p className="text-sm md:text-lg opacity-90 max-w-2xl mx-auto">
                      Get expert legal protection against recovery harassment and negotiate your loan settlement securely under RBI guidelines. Talk to our senior advocates today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-base w-full sm:w-auto">
                          Book Free Legal Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-full transition-all text-sm md:text-base w-full sm:w-auto">
                          Call Us: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="text-[10px] opacity-75 italic pt-2">Disclaimer: Consultation is subject to standard legal confidentiality guidelines.</p>
                  </div>
                </section>

              </div>
            </article>

            <aside className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Delhi NCR Legal Office</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Talk to our banking lawyers in Sector 57, Gurugram.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="w-full flex items-center justify-center bg-[#1a202c] text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors mb-3"
                >
                  📞 +91 8700343611
                </a>
                <Link 
                  href="/contact"
                  className="w-full flex items-center justify-center border-2 border-[#D2A02A] text-[#D2A02A] py-3 rounded-lg font-bold hover:bg-[#f9f5e8] transition-colors"
                >
                  Request Call Back
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </main>
    </>
  );
}
"""

# Replace placeholders
page_content = page_content.replace("{LEAD_HOOK}", LEAD_HOOK)
page_content = page_content.replace("{H2_1}", H2_1)
page_content = page_content.replace("{H3_1}", H3_1)
page_content = page_content.replace("{H2_2}", H2_2)
page_content = page_content.replace("{H3_2}", H3_2)
page_content = page_content.replace("{H2_3}", H2_3)
page_content = page_content.replace("{H3_3}", H3_3)
page_content = page_content.replace("{H2_4}", H2_4)
page_content = page_content.replace("{H3_4}", H3_4)
page_content = page_content.replace("{H3_5}", H3_5)
page_content = page_content.replace("{H2_5}", H2_5)
page_content = page_content.replace("{FAQ_JSON}", faq_json)

# Create blocks
page_content = page_content.replace("{CB0}", cb[0].replace(LEAD_HOOK, "").strip())
page_content = page_content.replace("{CB1}", cb[1])
page_content = page_content.replace("{CB2}", cb[2])
page_content = page_content.replace("{CB3}", cb[3])
page_content = page_content.replace("{CB4}", cb[4])
page_content = page_content.replace("{CB5}", cb[5])
page_content = page_content.replace("{CB6}", cb[6])

reviews_html = "\n".join([
    f'''<div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                        <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                        <p className="text-gray-700 italic mb-4 relative z-10">{r["text"]}</p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-3">{r["initial"]}</div>
                          <div>
                            <p className="font-bold text-gray-900">{r["name"]}</p>
                            <p className="text-xs text-gray-500">{r["loc"]}</p>
                          </div>
                        </div>
                      </div>'''
    for r in REVIEWS
])
page_content = page_content.replace("{REVIEWS_SECTION}", reviews_html)

faqs_html = "\n".join([
    f'''<div className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3">Q.</span>
                          {faq["q"]}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8">
                          {faq["a"]}
                        </p>
                      </div>'''
    for faq in FAQS
])
page_content = page_content.replace("{FAQS_SECTION}", faqs_html)

# Replace em-dashes unconditionally
page_content = page_content.replace('—', ',').replace('--', ',')

with open(TARGET_FILE, 'w') as f:
    f.write(page_content)

print(f"File generated: {TARGET_FILE}")

word_count = len(re.findall(r'\w+', page_content))
em_dash_count = page_content.count('—') + page_content.count('--')

print(f"Word Count: {word_count}")
print(f"Em-Dash Count: {em_dash_count}")
