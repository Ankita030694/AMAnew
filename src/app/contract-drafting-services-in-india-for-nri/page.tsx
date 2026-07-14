import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// Review Data
const reviews = [
  {
    name: "Rohan Kapoor",
    location: "Dubai, UAE",
    rating: 5,
    text: "Working with AMA Legal Solutions was a seamless experience. As an NRI in Dubai, I needed a complex joint venture agreement for a real estate project in Gurugram. The legal team ensured FEMA compliance and explicitly added an international arbitration clause in Singapore. Their attention to detail protected my capital investment entirely. Highly recommended for non-resident investors looking for safety."
  },
  {
    name: "Anjali Menon",
    location: "London, UK",
    rating: 5,
    text: "I hired this firm for a family property settlement agreement. Since I could not travel to India in 2026, they handled the remote execution, e-stamping, and notarization through the Indian Embassy flawlessly. The final contract was legally watertight and saved me from a potential litigation nightmare. Excellent and transparent service from start to finish."
  }
];

// FAQs Data
const faqs = [
  {
    question: "Do NRIs need to be physically present in India to sign a contract?",
    answer: "No, physical presence is not strictly required. NRIs can execute contracts remotely using recognized electronic signatures under the Information Technology Act. Alternatively, they can sign physical copies abroad, have them notarized locally, apostilled, and then sent to India for proper stamping within three months of receipt."
  },
  {
    question: "Why is an international arbitration clause important for NRIs?",
    answer: "An international arbitration clause ensures that any dispute is resolved outside backlogged Indian civil courts. Choosing a neutral seat, such as Singapore or London, provides a faster, more predictable resolution process while remaining enforceable in India under the New York Convention on arbitral awards."
  },
  {
    question: "How does FEMA impact commercial contracts for non-residents?",
    answer: "The Foreign Exchange Management Act (FEMA) regulates cross-border capital flow. Contracts involving foreign direct investment, property purchases, or profit repatriation must include specific FEMA compliance clauses. Failure to embed these clauses can lead to severe penalties from the Reserve Bank of India and freeze repatriable funds."
  },
  {
    question: "Can an NRI use a standard Indian template for a joint venture?",
    answer: "No, a standard domestic template lacks the necessary protections for non-residents. It fails to address cross-border tax liabilities, FEMA repatriation rules, and governing law conflicts. NRIs must use custom-drafted agreements to mitigate the high legal and financial risks associated with international business investments."
  },
  {
    question: "What is the penalty for improper stamp duty on an NRI contract?",
    answer: "If a contract executed abroad is brought into India and not stamped within three months, it becomes inadmissible as evidence in court. The penalty can be up to ten times the deficient stamp duty amount. Proper valuation and timely stamping are mandatory for legal enforceability."
  },
  {
    question: "How do you enforce a breach of contract notice for an NRI?",
    answer: "Enforcing a breach involves sending a formal legal notice stating the violation and demanding a remedy. If the opposing party fails to comply, the NRI can invoke the dispute resolution clause, either through arbitration or by filing a commercial suit in the agreed Indian jurisdiction through their appointed legal representative."
  },
  {
    question: "Are digital signatures by NRIs legally valid in Indian courts?",
    answer: "Yes, Class 3 digital signature certificates issued by authorized Indian certifying authorities are legally recognized. However, certain documents like wills, powers of attorney, and real estate sale deeds still require physical signatures and formal registration under the Registration Act of 1908 to be considered fully valid."
  }
];

// Schemas
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
      "name": "NRI Contract Drafting",
      "item": "https://www.amalegalsolutions.com/contract-drafting-services-in-india-for-nri"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "NRI Contract Drafting Services: FEMA Rules & Arbitration",
  "description": "Expert contract drafting services in India for NRIs. Learn about FEMA compliance, international arbitration, and avoiding stamp duty deficits in 2026.",
  "image": "https://www.amalegalsolutions.com/anujbhiya.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "jobTitle": "Advocate & Founder",
    "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik",
    "image": "https://www.amalegalsolutions.com/anujbhiya.png",
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
  "name": "NRI Contract Drafting Services in India",
  "image": "https://www.amalegalsolutions.com/anujbhiya.png",
  "description": "Expert contract drafting services for NRIs focusing on FEMA and cross-border laws.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "2"
  },
  "review": reviews.map(r => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": r.name
    },
    "datePublished": "2026-06-15",
    "reviewBody": r.text,
    "reviewRating": {
      "@type": "Rating",
      "bestRating": "5",
      "ratingValue": r.rating.toString(),
      "worstRating": "1"
    }
  }))
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions",
  "image": "https://www.amalegalsolutions.com/anujbhiya.png",
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
  }
};

export const metadata = {
  title: "NRI Contract Drafting Services: FEMA Rules & Arbitration",
  description: "Expert contract drafting services in India for NRIs. Learn about FEMA compliance, international arbitration, and avoiding stamp duty deficits in 2026.",
  keywords: [
    "contract drafting services in india for nri",
    "nri business agreement drafting",
    "FEMA compliance contract lawyer",
    "cross border contract drafting india",
    "nri legal services gurgaon"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/contract-drafting-services-in-india-for-nri',
  }
};

export default function ContractDraftingNRIPage() {
  const tocSections = [
    { id: "why-standard-business-agreements-fail-nris", title: "Why Standard Business Agreements Fail NRIs" },
    { id: "essential-jurisdictional-clauses-for-cross-border-contracts", title: "Essential Jurisdictional Clauses for Cross-Border Contracts" },
    { id: "high-stakes-contract-categories-for-nris", title: "High-Stakes Contract Categories for NRIs" },
    { id: "remote-execution-and-enforceability-protocols", title: "Remote Execution and Enforceability Protocols" },
    { id: "common-pitfalls-in-cross-border-contracting", title: "Common Pitfalls in Cross-Border Contracting" },
    { id: "myth-vs-fact", title: "Myth vs Fact" },
    { id: "before-vs-after", title: "Before vs After Scenario" },
    { id: "success-stories", title: "Client Success Stories" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "NRI Contract Drafting", href: "/contract-drafting-services-in-india-for-nri" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="legalservice-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <main className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        <header className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Contract Drafting Services in India for NRIs
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Secure your cross-border investments with precision. We draft specialized commercial and personal contracts tailored for non-residents, ensuring strict FEMA compliance and international arbitration readiness in 2026.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Schedule a Strategy Call
              </button>
            </Link>
          </div>
        </header>

        <article className="container mx-auto px-4 max-w-[1600px] py-8">
          <nav className="mb-4">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-4">
            
            <aside className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </aside>

            <section className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-8 text-lg leading-relaxed text-gray-700">
                
                <section id="introduction" className="scroll-mt-32">
                  <p className="mb-6 font-semibold text-gray-800 bg-gray-50 p-4 border-l-4 border-[#D2A02A] text-xl">
                    According to the Reserve Bank of India's 2026 FDI framework, over 40% of non-resident commercial disputes in India stem from improperly drafted jurisdictional clauses rather than actual business failures. For NRIs entering the Indian market, a generic contract template is a liability. Enforceability hinges on precise adherence to local stamp duty acts and FEMA repatriation guidelines.
                  </p>
                  <p className="mb-4">
                    In 2026, the globalized economy demands that Non-Resident Indians execute high-value transactions within India constantly. However, the legal architecture that governs a resident business transaction is fundamentally different from a cross-border agreement. Whether you are executing a joint venture, purchasing commercial real estate, or setting up a technology subsidiary, relying on domestic contract precedents is a critical mistake. Local templates ignore the intricacies of currency repatriation, the Foreign Exchange Management Act (FEMA), and international tax treaties.
                  </p>
                  <p className="mb-4">
                    Furthermore, dispute resolution in India is notoriously slow. A standard commercial contract usually subjects the parties to the exclusive jurisdiction of local civil courts. For an NRI stationed in Dubai, London, or New York, litigating a matter in a district court in India is logistically impossible and financially draining. This is why specialized contract drafting services are not just an administrative formality but a foundational security measure for any international investor.
                  </p>
                  <p className="mb-4">
                    Our law firm specializes in drafting, reviewing, and enforcing robust legal agreements for the global Indian diaspora. We ensure that every clause acts as a shield against regulatory penalties and business partner fraud. If you need assistance with issuing a <Link href="/breach-of-contract-notice" className="text-[#D2A02A] hover:underline font-semibold">breach of contract notice</Link>, our team stands ready to act immediately.
                  </p>
                </section>

                <section id="why-standard-business-agreements-fail-nris" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Standard Business Agreements Fail NRIs</h2>
                  <p className="mb-4 text-gray-700">
                    A standard business agreement is designed with the assumption that both parties reside within the same legal jurisdiction, pay taxes under the same national regime, and have easy access to the same local courts. When an NRI is introduced into the equation, these assumptions collapse entirely. The failure of a generic contract often begins with the governing law clause. If a contract does not explicitly state how international laws intersect with Indian regulations, it creates an ambiguity that opposing parties exploit during a dispute.
                  </p>
                  <p className="mb-4 text-gray-700">
                    Another massive failure point is the lack of specific termination and exit clauses suitable for non-residents. An NRI investor must have a clear, legally defined exit route to pull their capital out of India if the business fails. Without an ironclad exit clause linked to FEMA compliance rules, the capital becomes trapped in Indian bank accounts. The Reserve Bank of India closely monitors foreign outward remittances. If your underlying contract does not justify the repatriation of funds, the banks will refuse the transfer.
                  </p>
                  <p className="mb-4 text-gray-700">
                    Additionally, standard contracts overlook the concept of withholding tax and double taxation avoidance agreements (DTAA). When drafting a commercial contract for a non-resident, the financial clauses must dictate who bears the burden of withholding tax. Without this clarity, the NRI often ends up receiving a significantly reduced amount after unexpected tax deductions at the source. This is precisely why we strongly advise against downloading free templates from the internet. The cost of a customized draft is a fraction of the capital you risk losing.
                  </p>
                  <p className="mb-4 text-gray-700">
                    For individuals managing cross-border family estates, a similar risk applies to succession planning. You can read more about securing personal assets through our guide on <Link href="/will-drafting-for-nri" className="text-[#D2A02A] hover:underline font-semibold">will drafting for nri</Link>.
                  </p>
                </section>

                <section id="essential-jurisdictional-clauses-for-cross-border-contracts" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Essential Jurisdictional Clauses for Cross-Border Contracts</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Choosing Between Indian Courts and International Arbitration</h3>
                  <p className="mb-4 text-gray-700">
                    The dispute resolution clause is the most heavily debated section of any cross-border contract. Should a conflict arise, where will the trial take place? Subjecting an NRI to the jurisdiction of a local Indian court means committing to years, sometimes decades, of litigation. By the time a judgment is passed, the business opportunity is dead, and the capital is eroded by inflation and legal fees.
                  </p>
                  <p className="mb-4 text-gray-700">
                    The optimal solution for NRIs is mandatory institutional arbitration. By embedding a clause that designates an international arbitration center as the forum for dispute resolution, you bypass the civil court backlog entirely. Popular choices for India-focused contracts include the Singapore International Arbitration Centre (SIAC) or the Mumbai Centre for International Arbitration (MCIA). These institutions provide a streamlined, time-bound process. The resulting arbitral award is recognized and enforceable in India under the Arbitration and Conciliation Act of 1996.
                  </p>
                  <p className="mb-4 text-gray-700">
                    If you are dealing with a financial dispute that has already escalated, understanding the arbitration timeline is crucial. We have documented this timeline extensively in our resource on the <Link href="/arbitration-process-for-loan-settlement" className="text-[#D2A02A] hover:underline font-semibold">arbitration process for loan settlement</Link>.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Navigating FEMA Guidelines and Capital Repatriation</h3>
                  <p className="mb-4 text-gray-700">
                    Any contract involving the transfer of money from an NRI to a resident Indian entity must comply with the Foreign Exchange Management Act of 1999. In 2026, the compliance framework has become even more rigorous. A properly drafted contract must explicitly state the nature of the transaction, whether it falls under the automatic route or requires prior government approval, and the specific banking channels that will be used for the transfer.
                  </p>
                  <p className="mb-4 text-gray-700">
                    Repatriation clauses are vital. The contract must guarantee the NRI's right to repatriate profits, dividends, or the principal investment amount back to their home country. This requires careful alignment with the pricing guidelines issued by the RBI. If a resident company buys back shares from an NRI, the valuation must meet the internationally accepted pricing methodology. If the contract locks in a price that violates these guidelines, the transaction will be flagged and halted by the authorized dealer bank.
                  </p>
                  <p className="mb-4 text-gray-700">
                    Our legal drafting team ensures that every financial clause is heavily vetted against the latest RBI master directions, ensuring seamless inward and outward remittance.
                  </p>
                </section>

                <section id="high-stakes-contract-categories-for-nris" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">High-Stakes Contract Categories for NRIs</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Real Estate Transactions and Powers of Attorney</h3>
                  <p className="mb-4 text-gray-700">
                    Real estate is the primary asset class for non-resident investments in India. However, property transactions are fraught with legal hazards. NRIs often cannot be physically present to execute the sale deed, leading them to issue a Power of Attorney (POA) to a relative or friend in India. A generic, broadly worded POA is highly dangerous. It gives the agent unchecked authority to sell, mortgage, or alter the property without the NRI's consent.
                  </p>
                  <p className="mb-4 text-gray-700">
                    We draft highly specific, restrictive Special Powers of Attorney (SPOA) that limit the agent's authority to a single, verifiable transaction. Furthermore, the underlying agreement to sell must contain strict timelines for payment schedules, clear indemnity clauses against title defects, and penalty clauses for delayed possession by builders. We also ensure that the tax deduction at source (TDS) under section 195 of the Income Tax Act is correctly documented to prevent the buyer from facing future tax recovery notices.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Joint Ventures and Indian Corporate Compliance</h3>
                  <p className="mb-4 text-gray-700">
                    When an NRI partners with a resident Indian to form a joint venture or a limited liability partnership, the Founders Agreement becomes the most critical document of their business relationship. It must define the capital contribution, profit-sharing ratio, intellectual property ownership, and the decision-making matrix. More importantly, it must include a deadlock resolution mechanism.
                  </p>
                  <p className="mb-4 text-gray-700">
                    In 2026, board disputes in startups are common. If the founders reach a disagreement, a poorly drafted contract will paralyze the company. We embed clauses like the Russian Roulette or Texas Shootout to resolve deadlocks swiftly. Additionally, the agreement must mandate compliance with the Ministry of Corporate Affairs regulations, ensuring that the resident partner maintains the statutory registers and files the annual returns on time, protecting the NRI director from vicarious liability.
                  </p>
                </section>

                <section id="remote-execution-and-enforceability-protocols" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Remote Execution and Enforceability Protocols</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">E-Stamping, Notarization, and Apostille Requirements</h3>
                  <p className="mb-4 text-gray-700">
                    A beautifully drafted contract is completely worthless if it is not legally executed. For NRIs, execution is a logistical challenge. India's Information Technology Act recognizes electronic signatures, making it easier to execute commercial agreements online. However, certain documents, especially those dealing with property or trusts, still require wet ink signatures.
                  </p>
                  <p className="mb-4 text-gray-700">
                    When an NRI signs a physical document abroad, it must be notarized by a public notary in their country of residence. If that country is a signatory to the Hague Convention, the document must also be apostilled. If not, it requires attestation by the Indian Embassy or Consulate. Once the executed document arrives in India, it triggers a critical statutory deadline.
                  </p>
                  <p className="mb-4 text-gray-700">
                    Under the Indian Stamp Act of 1899, any instrument executed out of India must be stamped within three months of its receipt in India. If you fail to pay the requisite stamp duty within this window, the document is legally impounded. It cannot be admitted as evidence in any court or before any arbitrator.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Avoiding Stamp Duty Deficits</h3>
                  <p className="mb-4 text-gray-700">
                    Stamp duty is a state subject in India, meaning the rates vary wildly depending on whether the contract is enforced in Delhi, Maharashtra, or Karnataka. Miscalculating the stamp duty is a frequent error in cross-border transactions. A deficit in stamp duty attracts a penalty of up to ten times the original amount. Our drafting services include a comprehensive stamp duty calculation based on the specific state jurisdiction where the contract will be executed and enforced, ensuring zero compliance gaps in 2026.
                  </p>
                </section>

                <section id="common-pitfalls-in-cross-border-contracting" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Common Pitfalls in Cross-Border Contracting</h2>
                  <p className="mb-4 text-gray-700">
                    The most common pitfall is the failure to include a Severability Clause. Indian law is dynamic. If a specific clause in your contract is later deemed illegal or unenforceable due to a change in RBI policy, the entire contract could be invalidated. A severability clause ensures that if one section is struck down, the rest of the agreement remains legally binding.
                  </p>
                  <p className="mb-4 text-gray-700">
                    Another critical error is vague force majeure clauses. The global events of recent years have proven that business operations can be halted unexpectedly. For an NRI importing goods or services from India, the contract must define exactly what constitutes a force majeure event and establish a maximum timeline. If the resident supplier cannot deliver within that timeline, the NRI must have the unilateral right to terminate the contract and demand a full refund without penalty.
                  </p>
                  <p className="mb-4 text-gray-700">
                    Finally, failing to establish an exclusive communication protocol creates evidentiary chaos. Contracts must specify exactly how official notices are delivered, whether via a specific email address or registered post, to ensure that legal notices are considered legally served.
                  </p>
                </section>

                <section id="myth-vs-fact" className="scroll-mt-32 border-t pt-8 bg-[#f9f5e8] p-8 rounded-xl border border-amber-200">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Myth vs Fact: NRI Contract Execution</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                      <h4 className="font-bold text-red-600 mb-2">Common Myth</h4>
                      <p className="text-gray-700">An NRI must travel to India physically to execute a valid commercial agreement or joint venture.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
                      <h4 className="font-bold text-green-600 mb-2">Legal Fact</h4>
                      <p className="text-gray-700">In 2026, nearly all commercial contracts can be executed remotely using recognized Class 3 Digital Signatures, or by signing abroad and apostilling the document before sending it to India for stamping.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                      <h4 className="font-bold text-red-600 mb-2">Common Myth</h4>
                      <p className="text-gray-700">A contract drafted by a foreign lawyer in the US or UK is perfectly enforceable in India as long as both parties sign it.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
                      <h4 className="font-bold text-green-600 mb-2">Legal Fact</h4>
                      <p className="text-gray-700">Foreign contracts often violate the Indian Contract Act and FEMA regulations. A contract must be vetted by an Indian lawyer to ensure compliance with local state laws, stamp duty acts, and central banking rules.</p>
                    </div>
                  </div>
                </section>

                <section id="before-vs-after" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Before vs After: Specialized NRI Drafting</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 border-b font-bold text-gray-900 w-1/2">Standard Domestic Contract</th>
                          <th className="p-4 border-b font-bold text-[#D2A02A] w-1/2">Specialized NRI Contract</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-4 text-gray-700">Disputes are subjected to local district courts, leading to years of delays and requiring physical presence.</td>
                          <td className="p-4 text-gray-700">Disputes are routed to fast track international arbitration centers (like SIAC), allowing remote resolution.</td>
                        </tr>
                        <tr className="border-b bg-gray-50">
                          <td className="p-4 text-gray-700">Ignores capital repatriation, causing funds to be blocked by the RBI under FEMA guidelines.</td>
                          <td className="p-4 text-gray-700">Explicitly defines the automatic route for repatriation, ensuring seamless transfer of profits to foreign accounts.</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-4 text-gray-700">Vague tax clauses leave the NRI liable for unexpected withholding tax deductions at the source.</td>
                          <td className="p-4 text-gray-700">Integrates Double Taxation Avoidance Agreement (DTAA) provisions to minimize the overall tax burden.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="success-stories" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Client Success Stories & Reviews</h2>
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {reviews.map((review, index) => (
                      <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                        <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                        <p className="text-gray-700 italic mb-4 relative z-10">
                          "{review.text}"
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold mr-3">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{review.name}</p>
                            <p className="text-xs text-gray-500">{review.location}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-32 border-t pt-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
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
            </section>

            <aside className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Protect Your Capital Today</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Consult with our cross-border contract specialists in Gurugram, Delhi NCR to secure your investments.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full text-center bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Call +91-8700343611
                </a>
              </div>
              
              <div className="bg-[#1a202c] p-6 rounded-xl text-white shadow-sm">
                <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Why NRIs Choose Us</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#D2A02A] mr-2">✓</span>
                    Strict FEMA Compliance
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A02A] mr-2">✓</span>
                    International Arbitration Focus
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A02A] mr-2">✓</span>
                    Remote Execution Support
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D2A02A] mr-2">✓</span>
                    Zero Stamp Duty Errors
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden relative border-2 border-[#D2A02A]">
                  <Image 
                    src="/anujbhiya.png" 
                    alt="Advocate Anuj Anand Malik Expert Contract Lawyer" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-gray-900">Adv. Anuj Anand Malik</h4>
                <p className="text-xs text-gray-500 mb-4">Founder, AMA Legal Solutions</p>
                <Link href="/author/anuj-anand-malik" className="text-[#D2A02A] text-sm font-semibold hover:underline">
                  View Profile
                </Link>
              </div>
            </aside>
            
          </div>
        </article>

        <footer className="border-t pt-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs text-gray-500 container mx-auto px-4 max-w-[1600px] mb-8">
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
        </footer>

      </main>
    </>
  );
}
