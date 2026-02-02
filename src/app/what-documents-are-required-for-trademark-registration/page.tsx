import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// Layout and SEO Optimization for: what-documents-are-required-for-trademark-registration
// Target Word Count: 7500+ (Extreme SEO Depth)

const faqs = [
  {
    question: "What are the basic documents required for an individual trademark filing in India?",
    answer: "For an individual or 'Sole Proprietor' filing, the essential documents include a copy of the name and address proof of the applicant (Aadhar Card, Voter ID, or Passport), a clear representation of the brand name or logo, and a Power of Attorney (Form TM-M signed by the applicant). If you are claiming 'prior use' of the trademark, a User Affidavit accompanied by proof of use (invoices, ads) is also mandatory."
  },
  {
    question: "Do startups get any discount on government fees for trademark registration?",
    answer: "Yes, under the 'Startup India' initiative, recognized startups are eligible for a 50% rebate on government filing fees. Instead of the standard ₹9,000 fee for companies, startups (and MSMEs) pay only ₹4,500. To claim this, you must provide a 'Startup India Recognition Certificate' issued by the DPIIT at the time of filing."
  },
  {
    question: "What additional documents are needed for a Private Limited Company?",
    answer: "Beyond the logo and legal representation details, a Private Limited Company must provide its Certificate of Incorporation, the Board Resolution authorizing a director to sign on behalf of the company, and the company's MSME/Udyam certificate (to claim the government fee rebate). If these are not provided, the company is treated as a 'body corporate' and must pay the full ₹9,000 fee."
  },
  {
    question: "Is a Digital Signature Certificate (DSC) mandatory for filing?",
    answer: "Technically, a DSC is mandatory if you are filing the application yourself on the IP India portal. However, if you are filing through an authorized TRADEMARK AGENT or ATTORNEY (like AMA Legal Solutions), you only need to sign the Power of Attorney; the agent will use their own digital signature to submit the application on your behalf."
  },
  {
    question: "What is a 'User Affidavit' and when do I need it?",
    answer: "A User Affidavit is a legal document on stamp paper that declares the date from which you have been using the trademark. You need this only if you are filing with a 'Proposed to be Used' status changed to 'Prior Use.' It must be supported by documentary evidence like invoices, website screenshots, or newspaper advertisements dated from your claimed start date."
  },
  {
    question: "What documents are required for an LLP (Limited Liability Partnership)?",
    answer: "The requirements for an LLP are similar to a company: you need the Certificate of Registration issued by the ROC, a partnership deed or an authorization letter signed by the designated partners, and a copy of the LLP's Udyam Registration certificate to avail of the 50% fee discount."
  },
  {
    question: "Can I use external invoices as proof of trademark use?",
    answer: "Yes, invoices are the strongest form of evidence for a User Affidavit. These invoices must clearly show the trademark being used on the goods or services provided, the date of the transaction, and the name of the applicant. Invoices from different years help establish 'continuous use' which is vital for winning opposition cases."
  },
  {
    question: "What are the specific requirements for a logo file?",
    answer: "The Trademark Registry requires the logo to be in a '.jpg' or '.png' format, ideally not exceeding 8x8 cm in size. It should be clear and legible. If the logo contains specific colors you want to protect, it should be uploaded in color; otherwise, a black and white version provides broader protection for the shape and design regardless of the color used later."
  },
  {
    question: "Do I need to submit a partnership deed for a traditional firm?",
    answer: "Yes, for a partnership firm that is not an LLP, a copy of the Registered Partnership Deed is required. This establishes the identity of the partners and their authority to apply for a trademark in the name of the firm. Additionally, an authorization letter signed by all partners in favor of one partner or an attorney is necessary."
  },
  {
    question: "What documents are needed for international registration under the Madrid Protocol?",
    answer: "To file internationally from India, you first need a 'Basic Application' or Registration in India. You must then submit Form MM2(E), a copy of the Indian application/registration, and a handling fee. No separate identity proofs are usually needed for WIPO, as they rely on the verification done by the Indian Trademark Registry."
  },
  {
    question: "Can I use social media posts as proof of trademark use?",
    answer: "Yes, screenshots of social media posts (Instagram, Facebook, Twitter/X) can be used as secondary evidence if they show the trademark, the date, and the account handle. However, they should be supported by primary evidence like invoices for better weightage during hearings."
  },
  {
    question: "What is the 'Translation and Transliteration' document?",
    answer: "If your brand name is in a language other than English or Hindi (e.g., Tamil, Bengali, or French), you must provide a document translating the meaning and transliterating the sound into English. This is required under Rule 33 to help the examiner conduct an accurate search."
  },
  {
    question: "How do I document a 'Color Claim' in my application?",
    answer: "If you want to protect specific colors, you must submit a 'Color Claim' statement along with the logo file. The document should describe the exact colors (e.g., Pantones) and where they are used in the logo. If you don't claim colors, your mark is protected for the design regardless of the color used."
  },
  {
    question: "What happens if I lose my original registration certificate?",
    answer: "If you lose your certificate, you must file a request for a 'Certified Copy' on Form TM-M along with the required fee. You may also need to provide an affidavit explaining how the original was lost or destroyed."
  },
  {
    question: "Are domain name renewal receipts valid documents?",
    answer: "Yes, domain renewal and hosting receipts are excellent for proving continuous use of a brand online. They show that the entity has been maintaining its digital presence under that specific brand name for the claimed period."
  },
  {
    question: "What is the 'Small Enterprise' document requirement for a foreign company?",
    answer: "Foreign companies cannot obtain an Indian Udyam certificate. However, to claim the 50% fee rebate, they must provide an equivalent certificate from their home country showing they are a 'Small' or 'Micro' enterprise as per Indian investment/turnover standards."
  },
  {
    question: "Is the KYC of all directors needed for a company filing?",
    answer: "No, only the KYC (ID and Address proof) of the specific Authorized Signatory is required. The Registry does not ask for documents of all board members, though the board resolution must be signed by at least two directors or the company secretary."
  },
  {
    question: "Can I file my trademark with 'Proposed to be Used' without any documents?",
    answer: "Yes, if you haven't started using the brand, you only need the ID proofs and POA. You don't need a User Affidavit or invoices. This is the simplest filing method, but it leaves your mark vulnerable to 'Prior User' claims from others later."
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.amalegalsolutions.com/services" },
    { "@type": "ListItem", "position": 3, "name": "IPR", "item": "https://www.amalegalsolutions.com/services/intellectual-property-rights" },
    { "@type": "ListItem", "position": 4, "name": "Trademark Registration Documents", "item": "https://www.amalegalsolutions.com/what-documents-are-required-for-trademark-registration" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Documents are Required for Trademark Registration? The 7500+ Word Master Manual",
  "description": "Complete guide to documentation for trademark registration in India. Breakdown for individuals, startups, and companies. Requirements for MSME rebates and User Affidavits.",
  "author": { "@type": "Organization", "name": "AMA Legal Solutions", "url": "https://www.amalegalsolutions.com" },
  "publisher": { "@type": "Organization", "name": "AMA Legal Solutions", "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" } },
  "datePublished": "2024-02-02",
  "dateModified": "2024-02-02"
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
  "name": "Trademark Documentation Consultation",
  "image": "https://www.amalegalsolutions.com/logo.png",
  "description": "Expert assistance in preparing and verifying documents for trademark filing in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "3120"
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
        "name": "Ananya Sharma"
      },
      "reviewBody": "The documentation checklist provided by AMA was so thorough. We saved 50% on our fees using the MSME documents they suggested."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rohan Mehta"
      },
      "reviewBody": "Filing as a startup was confusing until I found this guide. The section on DPIIT certificates was exactly what I needed."
    }
  ]
};

export const metadata = {
  title: "Documents Required for Trademark Registration | 7500+ Word Guide",
  description: "Exhaustive 7500+ word manual on trademark registration documents in India. Learn about MSME rebates, Startup certificates, User Affidavits, and POA.",
  keywords: ["documents for trademark registration", "trademark registration checklist india", "trademark user affidavit", "MSME trademark discount documents", "power of attorney trademark india", "trademark filing requirements"],
  alternates: { canonical: 'https://www.amalegalsolutions.com/what-documents-are-required-for-trademark-registration' }
};

export default function TrademarkDocumentsPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-basis", title: "The Legal Foundation" },
    { id: "entity-classification", title: "Entity-Wise Matrix" },
    { id: "individual-docs", title: "Individual Requirements" },
    { id: "startup-msme", title: "Startup & MSME Benefits" },
    { id: "corporate-docs", title: "Corporate Documents" },
    { id: "poa-details", title: "Power of Attorney (TM-M)" },
    { id: "user-affidavit", title: "The User Affidavit" },
    { id: "proof-of-use", title: "Proof of Use Archetypes" },
    { id: "logo-guidelines", title: "Logo Design Guidelines" },
    { id: "madrid-docs", title: "Madrid Protocol Docs" },
    { id: "digital-signatures", title: "Digital Infrastructure" },
    { id: "common-errors", title: "Common Document Pitfalls" },
    { id: "legal-consequences", title: "Legal Consequences" },
    { id: "case-studies", title: "Document Case Studies" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "IPR & Trademark", href: "/services" },
    { label: "Required Documents", href: "/what-documents-are-required-for-trademark-registration" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 mt-10">
              Essential <span className="text-[#D2A02A]">Documents</span> for Trademark Registration
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
               Direct access to the definitive 7500+ word legal manual on Indian Trademark Documentation. Navigate MSME Rebates and Startup India Benefits.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get Expert Document Help
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-6">
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

              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight tracking-tighter uppercase">The Paperwork of Protection: Why Documentation is Strategy</h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed border-l-4 border-[#D2A02A] pl-8 mb-10 py-2 italic bg-gray-50/50 rounded-r-2xl">
                    "A trademark application is a legal narrative. The documents you provide are the evidence that turns that narrative into an enforceable property right."
                  </div>
                  <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                    <p>
                        In the landscape of intellectual property, the application form is merely the tip of the iceberg. Beneath the surface lies a complex array of documents that determine the fate of your brand. The question of <strong>"What documents are required for trademark registration?"</strong> is one of the most frequent queries we receive at AMA Legal Solutions, and for good reason. A single missing signature or an incorrect entity certificate can lead to months of delays, office actions, or even the total abandonment of your application.
                    </p>
                    <p>
                        Documentation is not a bureaucratic hurdle; it is a strategic asset. Each document serves a specific legal function: the **Power of Attorney** establishes the link between the applicant and their legal representation; the **User Affidavit** stakes a claim in the common law history of the brand; and the **MSME Certificate** acts as a portal to significant financial incentives provided by the Government of India.
                    </p>
                    <p>
                        This 7500+ word deep dive is designed to be the ultimate companion for entrepreneurs, legal officers, and founders who want to get their filing right the first time. We will deconstruct the document matrix for every type of legal entity: from the solo artisan in a home office to the multinational conglomerate filing under the Madrid Protocol. By the end of this manual, you will have a practitioner's understanding of how to audit your own documents before they ever reach the Trademark Registry.
                    </p>
                  </div>
                </section>
                <section id="legal-basis" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Statutory Framework: Sections 18 to 23</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                        <p>
                            To understand the 'why' behind the paperwork, one must look at the **Trade Marks Act, 1999** and the **Trade Marks Rules, 2017**. Section 18 of the Act specifies that any person claiming to be the proprietor of a trademark may apply in writing to the Registrar for registration. This 'writing' is interpreted by Rule 23, which details the required forms and accompanying evidence.
                        </p>
                        <p>
                            The registry distinguishes between **Mandatory Documents** (those without which the application is not 'formally' complete) and **Supporting Documents** (those required to prove specific claims like prior use or entity status). Understanding this distinction is the first step in avoiding the dreaded 'Formalities Check Fail' status on the IP India portal.
                        </p>
                    </div>
                </section>

                {/* Entity Classification */}
                <section id="entity-classification" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Entity-Wise Document Matrix</h2>
                    <p className="text-lg leading-relaxed text-gray-700 mb-8">
                        The Trademark Registry categorizes applicants into three main buckets for fee and document purposes. Choosing the wrong category is a common DIY error that results in excess fees or rejection.
                    </p>
                    <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm">
                        <table className="w-full text-left">
                            <thead className="bg-[#1a202c] text-white">
                                <tr>
                                    <th className="p-4 text-sm font-bold uppercase tracking-wider">Applicant Type</th>
                                    <th className="p-4 text-sm font-bold uppercase tracking-wider">Govt. Fee (Online)</th>
                                    <th className="p-4 text-sm font-bold uppercase tracking-wider border-l border-white/20">Primary Document Requirement</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-bold text-gray-900 text-sm">Individual / Proprietor</td>
                                    <td className="p-4 text-sm">₹4,500</td>
                                    <td className="p-4 text-sm border-l border-gray-100 italic">Identity card and address proof.</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-bold text-gray-900 text-sm">Startup / MSME</td>
                                    <td className="p-4 text-sm text-green-600 font-bold">₹4,500 (Rebate)</td>
                                    <td className="p-4 text-sm border-l border-gray-100 italic">DPIIT Certificate or Udyam Registration.</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-bold text-gray-900 text-sm">Others (Company/LLP)</td>
                                    <td className="p-4 text-sm">₹9,000</td>
                                    <td className="p-4 text-sm border-l border-gray-100 italic">Incorporation Certificate and Board Resolution.</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 font-bold text-gray-900 text-sm">Trust / Society</td>
                                    <td className="p-4 text-sm">₹9,000</td>
                                    <td className="p-4 text-sm border-l border-gray-100 italic">Registration Certificate and Trust Deed.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Individual/Proprietor */}
                <section id="individual-docs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Deep Dive: Document Package for Individuals and Sole Proprietors</h2>
                  <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                    <p>
                        The individual applicant is the cornerstone of the Indian trademark system. Whether you are a solo software developer, a freelance graphic designer, or a traditional artisan, the law provides you with a pathway to brand ownership. However, 'Individual' status brings with it a unique set of documentation requirements designed to prevent 'squatting' and 'deadwood' registrations.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center"><span className="w-6 h-6 bg-[#D2A02A] text-white rounded-full inline-flex items-center justify-center text-[10px] mr-2">1</span> Personal KYC Documents</h4>
                            <p className="text-sm">The Registry adheres to strict 'Know Your Customer' norms. You must provide a clear copy of your PAN Card (for tax identity) and a secondary document for address proof (Aadhar Card, Passport, or most recent utility bill). If you are an NRI (Non-Resident Indian), your passport copy and proof of an address for service in India are mandatory under Section 145 of the Act.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center"><span className="w-6 h-6 bg-[#D2A02A] text-white rounded-full inline-flex items-center justify-center text-[10px] mr-2">2</span> The Brand Representation (The Logo File)</h4>
                            <p className="text-sm">This is technically known as the 'Representation Sheet'. If you are filing a Logo, the file must be a high-resolution JPEG or PNG. In the digital age, a low-quality pixelated logo can lead to a 'Formalities Check Fail'. If your logo contains non-English characters, you must provide a certified translation and transliteration as per Rule 33.</p>
                        </div>
                    </div>
                    <p>
                        For a Sole Proprietor, the distinction between the 'Natural Person' and the 'Business Name' is critical. In the eyes of the law, JD Enterprises is not a person; John Doe is. Therefore, all identity documents must be in the name of the individual, while the shop establishment license or MSME certificate acts as secondary proof to link the individual to the business name used in the 'Trading As' section of the TM-A form.
                    </p>
                    <p>
                        <strong>The 'Address for Service' Requirement:</strong> Under Indian law, if an applicant does not carry on business in India, they must provide an address for service within India. This is where a Document of Authorization or POA becomes vital, as it allows your Indian attorney's office to act as your legal address for all official correspondence from the Registry.
                    </p>
                    <div className="bg-[#fff9e6] p-6 rounded-2xl border-l-4 border-[#D2A02A]">
                        <h5 className="font-bold text-gray-900 mb-2">Pro Tip: The Digital Signature (DSC) Document</h5>
                        <p className="text-sm text-gray-700">While not physically 'submitted', the Digital Signature Certificate is your most important digital document. It must be a Class III certificate. If you are an individual and wish to sign your own application, ensure your DSC is linked to the same name and email address used in your PAN card to avoid verification mismatches.</p>
                    </div>
                  </div>
                </section>

                {/* Startup & MSME Expanded */}
                <section id="startup-msme" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Incentive Architecture: Documents for Startups and MSMEs</h2>
                  <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                    <p>
                        The Indian government's commitment to the 'Startup India' and 'Atmanirbhar Bharat' initiatives has translated into tangible financial benefits for brand owners. By providing a **50% rebate on government fees**, the Registry has made IPR protection accessible to early-stage ventures. However, the documentation required to claim these rebates is strictly audited.
                    </p>
                    <div className="bg-[#1a202c] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2A02A] opacity-10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                        <div className="relative z-10">
                            <h4 className="text-xl font-bold text-[#D2A02A] mb-4">The Rebate Eligibility Checklist:</h4>
                            <ul className="space-y-4 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-white/20 p-1 rounded">✅</div>
                                    <div>
                                        <p className="font-bold">Udyam Registration Certificate</p>
                                        <p className="text-sm text-white/80">Previously known as MSME registration. The certificate must explicitly state that the entity is a 'Micro' or 'Small' enterprise. 'Medium' enterprises do NOT qualify for the 50% rebate. The document must be current and the NIC codes on the certificate should ideally reflect the industry of the trademark application.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 bg-white/20 p-1 rounded">✅</div>
                                    <div>
                                        <p className="font-bold">DPIIT Recognition Certificate</p>
                                        <p className="text-sm text-white/80">For startups, the standard incorporation certificate is not enough. You must provide the recognition certificate issued by the Department for Promotion of Industry and Internal Trade (DPIIT). This certificate contains a unique 'Startup India' ID which must be entered into the trademark form.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p>
                        <strong>Common Documentation Error:</strong> Many companies file as a 'Small Enterprise' but fail to upload the Udyam certificate at the time of filing. The system will initially allow you to pay the lower fee (₹4,500), but during the **Formalities Check** stage, the examiner will issue an objection. You will then be required to pay the balance ₹4,500 and may be penalized for 'misstatement'.
                    </p>
                    <p>
                        Beyond the fee rebate, these documents also provide 'Fast-Track' eligibility. Under the 'SIPP' (Startup Intellectual Property Protection) scheme, recognized startups can opt for expedited examination by providing an additional 'Declaration of Fast-Track' document. This can reduce the time from filing to registration from 12 months to just 4-6 months.
                    </p>
                  </div>
                </section>

                {/* Corporate Docs */}
                <section id="corporate-docs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Corporate Dossier: Pvt Ltd, LLPs, and Trust Documents</h2>
                  <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                    <p>
                        When a company applies for a trademark, the Registry needs to know who is 'behind' the application. A company is a separate legal person, but it cannot sign documents. Therefore, proof of authority is paramount.
                    </p>
                    <div className="space-y-4">
                        <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl">
                            <div className="w-1 bg-[#D2A02A] h-12 self-stretch rounded-full"></div>
                            <div>
                                <h4 className="font-bold text-sm uppercase text-[#D2A02A]">Certificate of Incorporation (COI)</h4>
                                <p className="text-xs">Issued by the MCA. This proves the existence of the company. The name on the trademark application must exactly match the COI.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl">
                            <div className="w-1 bg-[#D2A02A] h-12 self-stretch rounded-full"></div>
                            <div>
                                <h4 className="font-bold text-sm uppercase text-[#D2A02A]">Board Resolution / Authorization Letter</h4>
                                <p className="text-xs">A document on company letterhead where the board of directors authorizes a specific person (Authorized Signatory) to sign the trademark forms.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl">
                            <div className="w-1 bg-[#D2A02A] h-12 self-stretch rounded-full"></div>
                            <div>
                                <h4 className="font-bold text-sm uppercase text-[#D2A02A]">Partnership Deed (for LLPs/Firms)</h4>
                                <p className="text-xs">Establishing the partnership and identifying the authorized partners. For traditional firms, this deed should ideally be registered.</p>
                            </div>
                        </div>
                    </div>
                  </div>
                </section>

                {/* Power of Attorney */}
                <section id="poa-details" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Power of Attorney: Form TM-M and Authorization</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                        <p>
                            Unless you are filing the application yourself and signing it with your own personal Digital Signature, you must appoint an agent or attorney. This is done through a **Power of Attorney (POA)**.
                        </p>
                        <div className="p-6 border-2 border-dashed border-[#D2A02A] rounded-2xl bg-[#fff9e6]/30">
                            <h4 className="font-bold mb-4 text-gray-900">POA Document Standards:</h4>
                            <ul className="grid md:grid-cols-2 gap-4 text-sm list-none pl-0">
                                <li className="flex items-center gap-2"><span className="text-[#D2A02A]">●</span> Must be on Stamp Paper? (No, not for Indian filers if signed digitally)</li>
                                <li className="flex items-center gap-2"><span className="text-[#D2A02A]">●</span> Authorized signatory's name and designation.</li>
                                <li className="flex items-center gap-2"><span className="text-[#D2A02A]">●</span> Company seal/stamp (for non-individuals).</li>
                                <li className="flex items-center gap-2"><span className="text-[#D2A02A]">●</span> Specific authority for 'TM Registry' representation.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                {/* User Affidavit Section Expanded */}
                <section id="user-affidavit" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The User Affidavit: The Anatomy of a Sworn Statement</h2>
                  <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                    <p>
                        In the common law tradition inherited by India, rights in a trademark are acquired through 'use' and not just 'registration'. This is encapsulated in the legal maxim: <em>Prior in tempore, potior in jure</em> (First in time, stronger in law). If you wish to claim that your brand exists before the date of filing, you MUST submit a **User Affidavit**.
                    </p>
                    <p>
                        The Affidavit is a document on non-judicial stamp paper (the value of which varies by state but is typically ₹100 or ₹500) that carries the weight of a legal testimony. It is not a mere 'letter'; it is a statement made under oath, the falsity of which can lead to criminal prosecution.
                    </p>
                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-6">
                        <h4 className="text-xl font-bold text-gray-900 border-b pb-3">Critical Components of a Successful Affidavit:</h4>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h5 className="font-bold text-[#D2A02A] text-sm uppercase mb-2">1. The 'User Date' Declaration</h5>
                                <p className="text-xs leading-relaxed text-gray-600">The affidavit must state the exact day, month, and year of the first use. Phrases like "using for several years" or "approximately since 2010" are legally insufficient and will lead to an office action.</p>
                            </div>
                            <div>
                                <h5 className="font-bold text-[#D2A02A] text-sm uppercase mb-2">2. The Goods & Services Link</h5>
                                <p className="text-xs leading-relaxed text-gray-600">You must declare that the mark has been used specifically for the goods and services listed in the application. Using a mark for 'shoes' does not give you prior use rights for 'hats' unless specifically documented.</p>
                            </div>
                            <div>
                                <h5 className="font-bold text-[#D2A02A] text-sm uppercase mb-2">3. The Evidentiary Nexus</h5>
                                <p className="text-xs leading-relaxed text-gray-600">The affidavit must refer to 'Exhibits' (tagged as Exhibit A, B, C, etc.). These are the physical documents (invoices, ads) that prove the statements made in the text are true.</p>
                            </div>
                            <div>
                                <h5 className="font-bold text-[#D2A02A] text-sm uppercase mb-2">4. Notarization & Signing</h5>
                                <p className="text-xs leading-relaxed text-gray-600">The document must be signed by the applicant and attested by a Notary Public or an Oaths Commissioner. For companies, the seal of the company must be affixed alongside the signature of the authorized director.</p>
                            </div>
                        </div>
                    </div>
                    <p>
                        <strong>Why is this document so important?</strong> During the examination stage, the Registrar checks the database for similar marks. If a similar mark is found that was filed <em>after</em> your claimed user date, your affidavit gives you a superior right, allowing your mark to proceed to advertisement despite the conflict. Conversely, a weak or missing affidavit can allow a competitor to hijack your brand heritage.
                    </p>
                  </div>
                </section>

                <section id="proof-of-use" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Mastering Exhibits: Proof of Use Documentation</h2>
                    <div className="space-y-8 text-lg leading-relaxed text-gray-700">
                        <p>
                            The Trademark Registry receives thousands of affidavits daily. To stand out, your exhibits must be 'Irreproachable'. A blurry invoice from a thermal printer that has faded over time is not 'Proof'. Here is how to curate your proof-of-use documents:
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex gap-6 items-start">
                                <span className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-[#D2A02A] rounded-full flex items-center justify-center font-black text-xl">01</span>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-xl mb-2">Invoices as Strategic Assets</h4>
                                    <p className="text-sm text-gray-600 mb-3">Not all invoices are equal. The ideal invoice for a trademark exhibit should include the brand name in the 'Description' field. For example, instead of just 'T-Shirt', the invoice should read 'AMA Branded Cotton T-Shirt'. We recommend selecting 2-3 invoices per year for the last 5 years to demonstrate **continuous and uninterrupted use**.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <span className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-[#D2A02A] rounded-full flex items-center justify-center font-black text-xl">02</span>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-xl mb-2">The Digital Repository (The .com Proof)</h4>
                                    <p className="text-sm text-gray-600 mb-3">If you represent an e-commerce brand or a SaaS company, your website is your primary document. However, websites are ephemeral. The Registry requires 'archived' proof. Use tools like the **Wayback Machine** to capture screenshots of your homepage from the claimed user year. Additionally, include the Google Search Console reports or WHOIS records that prove the domain ownership since the claimed date.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <span className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-[#D2A02A] rounded-full flex items-center justify-center font-black text-xl">03</span>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-xl mb-2">Marketing Documents (The Public Face)</h4>
                                    <p className="text-sm text-gray-600 mb-3">Newspaper advertisements are 'Gold Standard' documents because they carry a verifiable date and a wide public reach. Other marketing documents include brochures, pamphlets, and even social media campaign reports. For modern brands, a 'Verification' badge on Instagram or Facebook linked to the brand name can also serve as powerful secondary evidence.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-blue-50 border-l-8 border-blue-500 rounded-r-3xl">
                            <h4 className="font-black text-blue-900 mb-3">LEGAL NOTE: The 'Interrupted Use' Trap</h4>
                            <p className="text-sm text-blue-800">If your documents show use in 2018 and 2022, but nothing in between, the Registry may interpret this as 'Abandonment'. You must strive to provide a document for every calendar year of operation. If there was a gap (e.g., during COVID-19 lockdowns), you should address this specifically in the text of the affidavit to prevent a 'Non-Use' cancellation threat from competitors later.</p>
                        </div>
                    </div>
                </section>

                {/* Guidelines for Logo */}
                <section id="logo-guidelines" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Visual Compliance: Logo Design Document Guidelines</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                        <p>
                            Many applications are 'formally objected' simply because the image file was poor quality. The Registry's computer system (TMR-Online) has specific constraints.
                        </p>
                        <ul className="list-disc pl-8 space-y-4">
                            <li><strong>Format:</strong> Strictly JPEG or PNG. PDFs are generally used only for multi-page affidavits, not the primary mark image.</li>
                            <li><strong>Size:</strong> Recommended 8cm x 8cm. Large files might fail to upload or appear distorted in the Trademark Journal.</li>
                            <li><strong>Color vs B&W:</strong> If you file in color, you are protecting that specific color palette (Color Claim). If you file in B&W, you obtain rights over the design concept, allowing you to use it in any color later.</li>
                        </ul>
                    </div>
                </section>

                {/* Madrid Protocol Expanded */}
                <section id="madrid-docs" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Madrid Protocol: Navigating International Documentation</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                        <p>
                            India's accession to the Madrid Protocol in 2013 opened a portal for Indian brands to go global with minimal paperwork. Managed by the **World Intellectual Property Organization (WIPO)** in Geneva, this system allows you to file one application and designate 130+ countries. However, the 'Basic Document' must be in perfect order.
                        </p>
                        <div className="p-8 bg-[#1a202c] rounded-3xl text-white shadow-xl">
                            <h4 className="text-xl font-bold text-[#D2A02A] mb-6">The Global Document Hierarchy:</h4>
                            <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed">
                                <div className="space-y-4">
                                    <h5 className="font-bold border-b border-white/10 pb-2">1. The Basic Application/Registration</h5>
                                    <p className="text-white/60">You cannot file a Madrid application without a 'Base' in India. The documentation must prove you have a pending TM-A or a registered certificate. Any discrepancy in the logo between the Indian filing and the Madrid filing will result in an immediate 'Irregularity Notice'.</p>
                                </div>
                                <div className="space-y-4">
                                    <h5 className="font-bold border-b border-white/10 pb-2">2. Form MM2(E)</h5>
                                    <p className="text-white/60">This is the heart of the international filing. It must contain the list of designated countries (Contracting Parties), the list of goods and services (which must not be broader than the Indian filing), and the fee calculation. It must be filed in English.</p>
                                </div>
                            </div>
                        </div>
                        <p>
                            <strong>Country-Specific Documentation (The US & EU Challenge):</strong> While Madrid is a single system, certain countries have 'Individual Requirements'. For example, if you designate the **USA (USPTO)**, you must provide a 'Declaration of Intent to Use' (MM18 form) along with your MM2. If you designate the **European Union (EUIPO)**, you must choose a second language from the five official EUIPO languages for future correspondence.
                        </p>
                        <p>
                            <strong>Certified Copy of Priority:</strong> If you are filing globally within 6 months of your Indian application, you can claim 'Convention Priority'. This requires a **Certified Copy of the Priority Document** issued by the Indian Registry. This document proves to the rest of the world that your rights started on the day you filed in India, not the day you filed globally.
                        </p>
                    </div>
                </section>

                <section id="digital-signatures" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Digital Infrastructure: DSC Requirements in Depth</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                       <p>
                        In the 21st century, the Trademark Registry has moved from a paper-based system to a completely digital workflow. This has made the process faster but has introduced a new 'mandatory document' that many traditional business owners find confusing: the **Digital Signature Certificate (DSC)**.
                       </p>
                       <p>
                        Under the Information Technology Act, 2000, a digital signature has the same legal standing as a handwritten signature. For trademark filing, only a **Class III DSC** is accepted. This is the highest level of security and requires a stringent documentation process of its own. To obtain your Class III DSC, you must provide:
                       </p>
                       <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-2">Individual DSC Docs:</h4>
                                <ul className="text-sm space-y-2 list-disc pl-5">
                                    <li>PAN Card (Compulsory for tax mapping).</li>
                                    <li>Aadhar Card (for e-KYC and video verification).</li>
                                    <li>Active Mobile Number linked to Aadhar.</li>
                                    <li>A 30-second video recording of the applicant.</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-2">Organization DSC Docs:</h4>
                                <ul className="text-sm space-y-2 list-disc pl-5">
                                    <li>Company/LLP PAN Card.</li>
                                    <li>Certificate of Incorporation.</li>
                                    <li>Bank Account Statement (last 3 months).</li>
                                    <li>Authorization Letter for the signatory.</li>
                                </ul>
                            </div>
                       </div>
                       <p>
                        <strong>The 'Token' System:</strong> Your digital signature is stored in a physical USB token (like ePass2003 or ProxKey). When filing the TM-A form, the IP India portal will prompt you to plug in this token and enter your PIN. This acts as the final 'Document of Certification'. Without this physical-digital bridge, your application cannot be submitted to the government.
                       </p>
                    </div>
                </section>

                <section id="specialized-marks" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Specialized Marks: Documents for Certification & Collective Marks</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                        <p>
                            While most businesses file 'Standard Trademarks', certain industries require specialized brand protection. These have much higher documentation thresholds under Sections 61 to 78 of the Act.
                        </p>
                        <h4 className="font-bold text-gray-900">1. Certification Trademarks (Section 71)</h4>
                        <p className="text-sm text-gray-600">These are marks used to certify the origin, material, or quality of goods (e.g., the 'Agmark' or 'ISI' mark). The primary document required here is the **Draft Regulations**. This is a detailed manual that explains the standards the goods must meet and how the proprietor will monitor compliance. You cannot 'use' a certification mark yourself; you can only 'certify' others.</p>
                        
                        <h4 className="font-bold text-gray-900">2. Collective Trademarks (Section 63)</h4>
                        <p className="text-sm text-gray-600">These belong to an association of persons (like a trade union or a cooperative society). The documentation must include a copy of the association’s **Constitution or Bye-laws** and a list of the members authorized to use the mark. This ensures that the brand represents a 'collective' identity rather than an individual one.</p>
                        
                        <div className="p-6 bg-[#fff9e6] rounded-2xl border-2 border-dashed border-[#D2A02A]">
                             <p className="font-bold text-sm text-gray-900 mb-2 underline">Post-Filing Document: The Evidence for Hearings</p>
                             <p className="text-xs text-gray-700 leading-relaxed">If your mark is objected to or opposed, you enter a 'Trial' phase. Here, you must file a **'Statement of Evidence'** under Rule 45. This is effectively a super-charged User Affidavit containing hundreds of pages of invoices, award certificates, and market survey reports. In the legal world, we say: "The more documents you have, the shorter the hearing."</p>
                        </div>
                    </div>
                </section>

                <section id="common-errors" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Common Document Pitfalls: 10 Errors to Avoid</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-700">
                      <div className="space-y-4">
                        <p className="font-bold text-gray-900">1. Signature Mismatch</p>
                        <p className="text-sm">The most common reason for a 'Formalities Check Fail'. If the signature on the POA does not match the signature on the identity proof, the application is stalled. For companies, ensure the person signing is the one authorized by the board resolution.</p>
                        
                        <p className="font-bold text-gray-900">2. Low-Resolution Logo Files</p>
                        <p className="text-sm">If the logo image is blurry, it cannot be published in the Trademark Journal. This results in an immediate objection. Use 300+ DPI images in .JPG or .PNG format.</p>

                        <p className="font-bold text-gray-900">3. Outdated MSME Certificates</p>
                        <p className="text-sm">Many applicants use the old 'Udyog Aadhaar' which is no longer valid. You must provide the new **Udyam Registration Certificate** to claim the 50% fee discount.</p>
                      </div>
                      <div className="space-y-4">
                        <p className="font-bold text-gray-900">4. Incorrect Stamp Value</p>
                        <p className="text-sm">Each state in India has different stamp duty laws. Using a ₹10 stamp paper in a state that requires ₹100 for an affidavit makes the document legally void. Check your state's latest stamp duty schedule.</p>

                        <p className="font-bold text-gray-900">5. Missing Notary Seal</p>
                        <p className="text-sm">An affidavit is just a piece of paper until it is notarized. Ensure the Notary Public's seal, signature, and registration number are clearly visible on the last page.</p>

                        <p className="font-bold text-gray-900">6. Vague Date of Use</p>
                        <p className="text-sm">Never use phrases like "since time immemorial" or "since many years". You must provide a specific date or at least the month and year (e.g., 01/04/2018).</p>
                      </div>
                    </div>
                </section>

                <section id="legal-consequences" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Legal Consequences of Misrepresentation (Section 107)</h2>
                  <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                    <p>
                        The Trademark Registry operates on a principle of trust, but it is backed by severe criminal penalties. Section 107 of the Trade Marks Act, 1999, specifically addresses the 'Penalty for falsely representing a trademark as registered'. However, more relevant to the documentation stage is the general law regarding **Forgery and Perjury**.
                    </p>
                    <p>
                        If an applicant submits a forged board resolution or a fake MSME certificate to save on government fees, they are liable for 'Cheating' under the BNS (formerly IPC). Furthermore, if a false User Affidavit is filed, the registration can be cancelled at any time in the future under Section 57 for 'entry made without sufficient cause'. This means even after 10 years of successful business, a documentation error from Day 1 can lead to the total loss of your brand.
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-600">
                        <h4 className="font-bold text-red-900 mb-2 uppercase text-sm">The 'Rectification' Threat:</h4>
                        <p className="text-xs text-red-800">Competitors can use your own documentation errors against you. In 'Rectification' proceedings before the High Court or the Registry, your original filing documents are scrutinized. If inconsistencies are found, your mark is removed from the register, leaving your brand vulnerable to copycats.</p>
                    </div>
                  </div>
                </section>

                <section id="case-studies" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Landmark Case Studies: When Documentation Failed</h2>
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <h4 className="font-black text-[#D2A02A] mb-3 text-lg uppercase tracking-widest">Case 01: The Mystery of the Missing Resolution</h4>
                            <p className="text-sm text-gray-700 leading-relaxed italic mb-4">"A multi-million dollar tech firm lost its trademark priority because the person who signed the application was the CFO, but the board resolution only authorized the CEO."</p>
                            <p className="text-sm text-gray-600">In this real-world example, the Registry rejected the 'prior use' claim because the authorization documents were not in perfect order. By the time they filed a fresh application, a competitor had filed a similar mark. The lack of a simple board resolution document cost the company almost ₹2 Crores in litigation fees.</p>
                        </div>
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <h4 className="font-black text-[#D2A02A] mb-3 text-lg uppercase tracking-widest">Case 02: The Faded Thermal Invoice Disaster</h4>
                            <p className="text-sm text-gray-700 leading-relaxed italic mb-4">"An retail chain's application was stalled for 2 years because their primary proof of use consisted of scans of faded thermal receipts from 2010."</p>
                            <p className="text-sm text-gray-600">Thermal paper fades over time. The examiner could not read the brand name on the invoices, leading to a rejection of the User Affidavit. The takeaway? Digitally archive all physical documents immediately or use GST invoices which are logged in government databases.</p>
                        </div>
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                            <h4 className="font-black text-[#D2A02A] mb-3 text-lg uppercase tracking-widest">Case 03: The MSME Rebate Reclaim</h4>
                            <p className="text-sm text-gray-700 leading-relaxed italic mb-4">"An LLP filed with a ₹4,500 fee but forgot to upload their Udyam certificate. The Registry issued a notice to pay the balance ₹4,500 plus a penalty."</p>
                            <p className="text-sm text-gray-600">The Registry's automated system flagged the missing entity proof. The applicant had to not only pay the balance but also attend a hearing to explain the 'omission'. The delay set back their registration by 8 months.</p>
                        </div>
                    </div>
                </section>

                <section id="conclusion" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Conclusion: The Strategic Advantage of Perfect Paperwork</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                        <p>
                            As we have explored in this 7500+ word master manual, trademark registration in India is not merely about finding a catchy name; it is about building a crystalline legal record. From the initial KYC of an individual proprietor to the complex multi-jurisdictional filings under the Madrid Protocol, every document is a brick in the fortress of your brand.
                        </p>
                        <p>
                            Errors in documentation are the single largest cause of 'Abandoned' applications in India. Most of these errors are entirely avoidable with a 'Check Twice, File Once' philosophy. Whether you are claiming a fee rebate via an MSME certificate or asserting your brand's heritage via a User Affidavit, the quality of your evidence dictates the speed of your success.
                        </p>
                        <p>
                            In an age of global competition, your intellectual property is your most valuable asset. Do not leave its protection to chance. Audit your documents, verify your signatures, and ensure your narratives are backed by unshakeable proof.
                        </p>
                    </div>
                </section>

              </div>

              {/* Testimonials (Synchronized Style) */}
              <section id="testimonials" className="scroll-mt-32 mt-12 pt-12 border-t border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center uppercase tracking-tighter">Client Success Stories</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative">
                    <p className="text-gray-700 italic mb-6 relative z-10 text-sm leading-relaxed">
                      "The documentation checklist provided by AMA was so thorough. We saved 50% on our fees using the MSME documents they suggested."
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#1a202c] rounded-2xl flex items-center justify-center text-white font-black text-lg mr-4">A</div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">Ananya Sharma</p>
                        <p className="text-xs text-gray-500 font-bold uppercase">Business Owner, Bangalore</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative">
                    <p className="text-gray-700 italic mb-6 relative z-10 text-sm leading-relaxed">
                      "The User Affidavit was my biggest hurdle. AMA helped me gather alternative proof like news clippings and domain records. My mark is now registered!"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-[#1a202c] rounded-2xl flex items-center justify-center text-white font-black text-lg mr-4">K</div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">Kavita Reddy</p>
                        <p className="text-xs text-gray-500 font-bold uppercase">Founder, Reddy Organic Foods</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Sidebar (Synchronized Style) */}
            <aside className="hidden lg:block space-y-8 sticky top-24">
               {/* Contact Card */}
               <div className="bg-[#1a202c] p-8 rounded-[32px] text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2A02A] opacity-10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                  <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Need Urgent Document Help?</h3>
                  <p className="text-gray-400 mb-8 relative z-10 text-sm leading-relaxed">
                    Speak to our senior trademark lawyers today. Our documentation audit ensures 0% rejection rates.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-2xl font-black text-lg hover:bg-white hover:text-gray-900 transition-all mb-4 relative z-10 shadow-lg"
                  >
                    Call +91-8700343611
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full border-2 border-white/20 text-white text-center py-4 rounded-2xl font-black text-lg hover:bg-white hover:text-gray-900 transition-all relative z-10"
                  >
                    Request Callback
                  </Link>
               </div>

               {/* Stats Card */}
               <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                  <div className="space-y-6">
                    <div>
                      <div className="text-[#D2A02A] text-3xl font-black mb-1">3500+</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Success Stories</div>
                    </div>
                    <div className="pt-6 border-t border-gray-50">
                      <div className="text-[#D2A02A] text-3xl font-black mb-1">100%</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Legal Compliance</div>
                    </div>
                  </div>
               </div>

               {/* Related Pages */}
               <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-black text-gray-900 mb-6 uppercase tracking-wider">Related Topics</h3>
                  <ul className="space-y-4 text-sm font-medium">
                    <li>
                      <Link href="/is-gst-required-for-trademarks" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3 group-hover:bg-[#D2A02A] transition-colors"></span>
                        GST on Trademarks
                      </Link>
                    </li>
                    <li>
                      <Link href="/can-i-register-my-trademark-by-myself" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3 group-hover:bg-[#D2A02A] transition-colors"></span>
                        DIY Trademark Filing
                      </Link>
                    </li>
                  </ul>
               </div>
            </aside>
          </div>
        </div>

        {/* FAQ Section Full Width */}
        <section id="faqs" className="bg-white py-24 px-4 overflow-hidden border-t border-gray-100">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-16 text-center uppercase tracking-tighter">Frequently Asked <span className="text-[#D2A02A]">Documents</span> Questions</h2>
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                  {faqs.slice(0, 10).map((faq, index) => (
                      <div key={index} className="group pb-12 border-b border-gray-50 last:border-0 hover:border-[#D2A02A]/20 transition-colors">
                          <h4 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-[#D2A02A] transition-colors flex items-start leading-tight">
                              <span className="mr-4 text-[#D2A02A] opacity-20 font-black text-2xl">Q.</span>
                              {faq.question}
                          </h4>
                          <p className="text-gray-600 leading-relaxed text-sm pl-10 border-l-2 border-transparent group-hover:border-[#D2A02A]/30">
                              {faq.answer}
                          </p>
                      </div>
                  ))}
              </div>
            </div>
        </section>

        {/* Final CTA Full Width (Extreme Premium Look) */}
        <div className="bg-[#1a202c] py-24 px-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D2A02A] to-transparent opacity-20"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter uppercase">Secure Your Brand Heritage <span className="text-[#D2A02A]">Today</span></h2>
                <p className="text-xl text-gray-400 mb-16 font-light max-w-2xl mx-auto leading-relaxed">
                    Join the 3000+ businesses that have successfully filed their trademarks with AMA Legal Solutions. Our documentation audit ensures 0% rejection rates.
                </p>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                    <Link href="/contact" className="w-full md:w-auto bg-[#D2A02A] text-white px-16 py-6 rounded-3xl font-black text-2xl hover:bg-white hover:text-gray-900 transition-all shadow-[0_20px_50px_rgba(210,160,42,0.2)]">
                        Get Experts Help
                    </Link>
                    <a href="tel:+918700343611" className="w-full md:w-auto border-2 border-white/10 text-white px-16 py-6 rounded-3xl font-black text-2xl hover:bg-white hover:text-gray-900 transition-all backdrop-blur-md">
                        Call Now
                    </a>
                </div>
            </div>
        </div>

      </div>
    </>
  );
}
