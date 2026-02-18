import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// Layout and SEO Optimization for: trademark-objection-reply-procedure
// Target Word Count: 3500+ (High Authority SEO Depth)

const faqs = [
  {
    question: "What is a Trademark Objection in India?",
    answer: "A trademark objection is a formal notification from the Trademark Registry (Examiner) stating that your application does not satisfy the requirements for registration. This usually occurs under Section 9 (Absolute Grounds) or Section 11 (Relative Grounds) of the Trade Marks Act, 1999."
  },
  {
    question: "How much time do I have to reply to a Trademark Objection?",
    answer: "You must file a formal reply to the Examination Report within 30 days of its issuance. Failing to reply within this strictly enforced timeline will result in the application being marked as 'Abandoned' by the Registry."
  },
  {
    question: "What are the common grounds for receiving a trademark objection?",
    answer: "The most common grounds are: 1. Lack of distinctiveness (Section 9), 2. Deceptively similar marks (Section 11), 3. Incorrect applicant name or address, and 4. Classification errors in the application form."
  },
  {
    question: "Is it mandatory to hire a lawyer for a trademark objection reply?",
    answer: "While not legally mandatory, it is highly recommended. A trademark objection reply is a legal submission that requires citations of case law and technical arguments to overcome the Examiner's doubts. A poorly drafted reply can lead to permanent rejection."
  },
  {
    question: "What is a 'User Affidavit' in a TM objection reply?",
    answer: "A User Affidavit is a legal document filed to prove that you have been using the trademark since a specific date ('prior use'). It is often required to overcome Section 9 objections by proving that the mark has acquired 'secondary meaning' through extensive use."
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.amalegalsolutions.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Trademark Objection Reply", "item": "https://www.amalegalsolutions.com/trademark-objection-reply-procedure" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Trademark Objection Reply Procedure: The Comprehensive Legal Guide",
  "description": "Learn the step-by-step procedure to reply to a trademark objection in India. Understand Section 9 and 11 grounds, evidence requirements, and hearing prep.",
  "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
  "publisher": { "@type": "Organization", "name": "AMA Legal Solutions" },
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
  "name": "Trademark Objection Reply Service",
  "image": "https://www.amalegalsolutions.com/logo.png",
  "description": "Expert legal drafting for trademark objection replies in India. Overcome Section 9 and 11 objections.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250"
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
        "name": "Rohan Mehta"
      },
      "reviewBody": "Received a Section 11 objection. AMA Legal Solutions drafted a brilliant reply focusing on phonetic differences. My mark was accepted in 2 weeks!"
    }
  ]
};

export const metadata = {
  title: "Trademark Objection Received? | Reply Procedure Guide",
  description: "Received a trademark objection? Learn the official procedure for filing a reply, overcoming Section 9 & 11 grounds, and securing your brand registration.",
  keywords: ["trademark objection reply", "trademark examination report", "overcoming trademark objection", "section 9 section 11 trademark objection", "trademark objection procedure india", "trademark hearing"],
  alternates: { canonical: 'https://www.amalegalsolutions.com/trademark-objection-reply-procedure' }
};

export default function TrademarkObjectionReplyPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "objection-vs-opposition", title: "Objection vs Opposition" },
    { id: "statutory-grounds", title: "Absolute vs Relative Grounds" },
    { id: "the-30-day-rule", title: "The Critical 30-Day Window" },
    { id: "drafting-strategy", title: "The Art of Drafting a Reply" },
    { id: "user-affidavit", title: "The User Affidavit (Section 32)" },
    { id: "hearing-stage", title: "The Post-Objection Hearing" },
    { id: "prosecution-lifecycle", title: "5 Stages of Prosecution" },
    { id: "case-laws", title: "Judicial Precedents" },
    { id: "common-mistakes", title: "Errors That Lead to Rejection" },
    { id: "fees-filing", title: "Fees & Online Filing" },
    { id: "faqs", title: "Objection FAQ" }
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</Script>
      <Script id="article-schema" type="application/ld+json">{JSON.stringify(articleSchema)}</Script>
      <Script id="faq-schema" type="application/ld+json">{JSON.stringify(faqSchema)}</Script>
      <Script id="review-schema" type="application/ld+json">{JSON.stringify(reviewSchema)}</Script>

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }} // Placeholder for actual image if needed, or keeping black
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              I Received a <span className="text-[#D2A02A]">Trademark Objection</span>: What To Do?
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              The Examination Report is not the end of your brand identity; it is a legal invitation to defend your intellectual property. Expert legal drafting to overcome Section 9 & 11 grounds.
            </p>
            <div className="flex justify-center gap-4">
                <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                    Get Free Legal Advice
                </button>
                </Link>
                <a href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all text-sm md:text-lg">
                    Call Expert
                </button>
                </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbSchema.itemListElement.map(item => ({ label: item.name, href: typeof item.item === 'string' ? item.item : '#' }))} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            
            {/* Left Column: Local Sub-nav */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column: The Analysis */}
            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Moment of Impact: Decoding the Examination Report</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-light font-sans">
                        <p>
                            You have spent months building your brand, only to receive a formal email stating that your trademark application has been <strong>'Objected.'</strong> In the high-stakes world of Intellectual Property Rights (IPR), this is known as the Examination Stage. It is the first major hurdle in the trademark lifecycle.
                        </p>
                        <p>
                            A trademark objection is not a rejection. It is a query raised by the Examiner at the Trademark Registry based on the <strong>Trade Marks Act, 1999</strong>. The Registry is essentially asking: *"Why should we grant you an exclusive monopoly over this name or logo?"* To secure your registration, you must provide a written legal justification that addresses every specific point raised in the Examination Report.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 my-16">
                            <div className="bg-gray-900 p-10 rounded-[40px] text-white">
                                <h4 className="text-[#D2A02A] font-black uppercase text-xs tracking-widest mb-4 font-sans">The 30-Day Countdown</h4>
                                <p className="text-sm leading-relaxed text-gray-400 font-light">The clock starts ticking the moment the report is uploaded. You have exactly 30 days to file your reply via form TM-R. One day's delay can lead to the permanent abandonment of your mark.</p>
                            </div>
                            <div className="bg-[#D2A02A] p-10 rounded-[40px] text-gray-900">
                                <h4 className="font-black uppercase text-xs tracking-widest mb-4 font-sans">The Legal Probability</h4>
                                <p className="text-sm leading-relaxed font-black uppercase">Statistically, over 65% of trademark applications in India face some form of objection. It is a standard procedural step, not a personal failure of your brand identity.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Objection vs Opposition */}
                <section id="objection-vs-opposition" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Objection vs Opposition: Common Misunderstandings</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-light font-sans">
                        <p>
                            Entrepreneurs often confuse <strong>Objection</strong> with <strong>Opposition</strong>. While they sound similar, they occur at different stages and involve different parties.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <span className="text-[#D2A02A] font-black text-2xl">01.</span>
                                <div>
                                    <strong className="text-gray-900 block font-bold font-sans">Trademark Objection:</strong> Raised by the Government (Examiner) during the internal review. It focuses on statutory grounds (Sections 9 and 11).
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-[#D2A02A] font-black text-2xl">02.</span>
                                <div>
                                    <strong className="text-gray-900 block font-bold font-sans">Trademark Opposition:</strong> Raised by a third party (a competitor) after your mark has been 'Advertised' in the Trademark Journal. It focus on private rights and market confusion.
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Statutory Grounds */}
                <section id="statutory-grounds" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Absolute vs Relative Grounds: The Two Pillars of Objection</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-light font-sans">
                        <p>
                            Most objections fall into two categories. Understanding which one you are facing is critical to drafting a successful reply.
                        </p>
                        <div className="space-y-12">
                            <div className="border-l-4 border-gray-900 pl-8">
                                <h4 className="text-xl font-bold text-gray-900 font-sans mb-4">Section 9 (Absolute Grounds)</h4>
                                <p>This relates to the <strong>intrinsic nature</strong> of the mark. If your mark is generic (e.g., 'Apple' for fruits) or descriptive (e.g., 'Super Fast' for a courier service), it lacks 'distinctiveness.' The Registry's stance is that no single person should own common words that others need to describe their business.</p>
                            </div>
                            <div className="border-l-4 border-[#D2A02A] pl-8">
                                <h4 className="text-xl font-bold text-gray-900 font-sans mb-4">Section 11 (Relative Grounds)</h4>
                                <p>This relates to <strong>conflicts with existing marks</strong>. If there is already a mark on the Register that is 'deceptively similar' to yours in the same class of goods or services, you will receive a Section 11 objection. The goal here is to prevent consumer confusion in the marketplace.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* The 30-Day Rule */}
                <section id="the-30-day-rule" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Critical 30-Day Window: A Statutory Deadline</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-light font-sans">
                        <p>
                            In the procedural landscape of the Trademark Registry, 'Time' is the most expensive commodity. Once the Examination Report is issued, the applicant is granted a strictly non-negotiable window of <strong>30 days</strong> to file a response.
                        </p>
                        <p>
                            Many entrepreneurs mistakenly believe that this is a 'flexible' deadline. However, under the <strong>Trade Marks Rules, 2017</strong>, failing to respond within this period triggers an automated process where the application is marked as 'Abandoned.' Once a mark is abandoned, it cannot be revived through simple requests; you are forced to file a fresh application, losing your priority date and your government fees.
                        </p>
                        <div className="bg-[#0f172a] p-10 rounded-[40px] text-white">
                            <h4 className="text-[#D2A02A] font-black uppercase text-xs tracking-widest mb-4 font-sans">Can the 30-Day Deadline be Extended?</h4>
                            <p className="text-sm leading-relaxed text-gray-400 font-light">
                                Technically, the Act allows for an 'Extension of Time' through form TM-M (under Rule 105), but this must be filed BEFORE the 30-day period expires. The extension is not a right; it is a discretionary power of the Registrar. A better strategy is to ensure your reply is ready and filed within the 25th day of receiving the report.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Drafting Strategy */}
                <section id="drafting-strategy" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Art of Drafting: Turning a Query into an Approval</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-light font-sans">
                        <p>
                            A trademark objection reply is not just a letter; it is a legal masterpiece that combines statutory interpretation, factual evidence, and judicial precedents. A standard 'copy-paste' template is the fastest way to a rejection. 
                        </p>
                        <p>
                            To overcome a <strong>Section 11 (Similarity)</strong> objection, your reply must focus on 'Visual, Phonetic, and Structural' differences. You must argue that the two marks, when viewed by a person of average intelligence, do not create a 'likelihood of confusion.' Use the 'Global Appreciation Test' established by the courts to show that the overall impression of your mark is unique.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 my-16">
                            <div className="p-8 border-2 border-gray-100 rounded-[32px] hover:border-[#D2A02A] transition-colors">
                                <h5 className="font-bold text-gray-900 mb-2 font-sans uppercase text-xs tracking-widest">Phonetic Comparison</h5>
                                <p className="text-sm text-gray-500">Argue how the pronunciation of your brand differs from the cited mark. Even a single syllable change can be the difference between rejection and acceptance.</p>
                            </div>
                            <div className="p-8 border-2 border-gray-100 rounded-[32px] hover:border-[#D2A02A] transition-colors">
                                <h5 className="font-bold text-gray-900 mb-2 font-sans uppercase text-xs tracking-widest">Conceptual Difference</h5>
                                <p className="text-sm text-gray-500">If your mark means something entirely different from the cited mark, highlight it. Legal 'concepts' carry weight in the Registry's final determination.</p>
                            </div>
                        </div>
                        <p>
                            For <strong>Section 9 (Descriptive)</strong> objections, the strategy shifts. Here, you must prove that while the word might be descriptive in a general sense, it has acquired a 'Distinctive Character' due to your long-standing use. This is where your marketing spends, invoices, and social media presence become legal evidence.
                        </p>
                    </div>
                </section>

                {/* User Affidavit */}
                <section id="user-affidavit" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The User Affidavit: The Ultimate Weapon Under Section 32</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-light font-sans">
                        <p>
                            If your trademark is objected to under Section 9 for being 'Descriptive' or 'Generic,' the Law provides a 'Escape Hatch' in the form of **Section 32**. This section states that a mark which was initially non-distinctive can be registered if, through use, it has acquired a 'Secondary Meaning' in the minds of the public.
                        </p>
                        <p>
                            To claim this benefit, you must file a <strong>User Affidavit</strong>. This is not a simple letter; it is a sworn statement on non-judicial stamp paper, drafted by an attorney, and backed by a mountain of evidence. The goal is to show the Examiner that when consumers see your mark, they think of YOUR business, and not the general product.
                        </p>
                        <div className="bg-blue-50 p-10 rounded-[40px] border-l-8 border-blue-600 space-y-4">
                            <h4 className="font-black text-blue-900 uppercase text-xs tracking-widest">The Evidence Checklist for Section 32:</h4>
                            <ul className="text-sm space-y-2 text-blue-800 font-medium">
                                <li>● Invoices dating back to the 'User Date' claimed in the application.</li>
                                <li>● Advertisement clippings from newspapers or magazines.</li>
                                <li>● CA Certificates certifying the annual turnover under the brand.</li>
                                <li>● Screenshots of social media followers and digital marketing spends.</li>
                                <li>● Domain name registration and website traffic analytics.</li>
                            </ul>
                        </div>
                        <p>
                            The strength of your Objection Reply is often directly proportional to the quality of your User Affidavit. If you can prove that you have spent lakhs on promoting the mark, even a descriptive mark like 'Best Buy' or 'Super Star' can find a place on the Register.
                        </p>
                    </div>
                </section>

                {/* Hearing Stage */}
                <section id="hearing-stage" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Post-Objection Hearing: Defending Your Brand in Person</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-light font-sans">
                        <p>
                            Often, a written reply is not enough to convince the Examiner. If the Registry is still not satisfied after reviewing your reply, they will issue a notification for a <strong>'Show Cause Hearing.'</strong> 
                        </p>
                        <p>
                            In the digital age, these hearings are typically conducted via Video Conferencing. Your attorney will appear before the Registrar to orally argue the points mentioned in the reply. This is the 'Final Stand.' You have roughly 5 to 10 minutes to resolve the Registrar's doubts. 
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 my-16">
                            <div className="bg-gray-50 p-10 rounded-[40px] border border-gray-100 italic text-gray-600 text-sm leading-relaxed">
                                "The hearing is an opportunity to clarify things that cannot be captured in writing. It is about the 'Human Element' of the law. A persuasive advocate can turn a 'Refused' status into 'Accepted' in a matter of minutes."
                            </div>
                            <div className="space-y-4">
                                <h5 className="font-bold text-gray-900 uppercase text-xs tracking-widest font-sans">Hearing Readiness:</h5>
                                <ul className="text-xs space-y-2 text-gray-500 font-bold uppercase tracking-wider">
                                    <li>● Filing of 'Power of Attorney' (TM-48).</li>
                                    <li>● Preparation of 'Case Compilations' (Judicial Precedents).</li>
                                    <li>● Ensuring a stable internet connection for Virtual Hearings.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5 Stages of Prosecution */}
                <section id="prosecution-lifecycle" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The 5 Stages of Trademark Prosecution: Where Do You Stand?</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-light font-sans">
                        <p>
                            Understanding the lifecycle of a trademark is crucial to managing expectations. An objection is merely Stage 2. Here is the full roadmap:
                        </p>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <span className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center font-black text-gray-400">01</span>
                                <div>
                                    <h5 className="font-bold text-gray-900 uppercase tracking-widest text-sm">Application (TM-A)</h5>
                                    <p className="text-sm text-gray-500">You file the application. The status shows 'New Application' or 'Vienna Codification.'</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <span className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-black shadow-lg shadow-[#D2A02A]/30">02</span>
                                <div>
                                    <h5 className="font-bold text-gray-900 uppercase tracking-widest text-sm">Examination (Objected)</h5>
                                    <p className="text-sm text-gray-500">The Examiner checks for Section 9 & 11 conflicts. If issues are found, an 'Examination Report' is issued. This is where you are now.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <span className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center font-black text-gray-400">03</span>
                                <div>
                                    <h5 className="font-bold text-gray-900 uppercase tracking-widest text-sm">Reply to Examination</h5>
                                    <p className="text-sm text-gray-500">You file a legal reply (TM-R). If accepted, the mark moves to 'Advertised.' If not, it goes to 'Ready for Show Cause Hearing.'</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <span className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center font-black text-gray-400">04</span>
                                <div>
                                    <h5 className="font-bold text-gray-900 uppercase tracking-widest text-sm">Opposition</h5>
                                    <p className="text-sm text-gray-500">Once advertised, there is a 4-month window for third parties to oppose. If no one opposes, you move to the final stage.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <span className="flex-shrink-0 w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-black">05</span>
                                <div>
                                    <h5 className="font-bold text-gray-900 uppercase tracking-widest text-sm">Registration</h5>
                                    <p className="text-sm text-gray-500">Certificate issued. You can now use the ® symbol. Valid for 10 years.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case Laws */}
                <section id="case-laws" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Judicial Precedents: The Power of Case Law</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-light font-sans">
                        <p>
                            In the field of trademark law, the interpretation of 'Similarity' and 'Distinctiveness' is constantly evolving through High Court decisions. Citing the right case law in your reply can provide the 'Binding Authority' that an Examiner needs to approve your mark.
                        </p>
                        <div className="space-y-10">
                            <div className="bg-gray-50 p-10 rounded-[40px] border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">01. Amritdhara Pharmacy vs. Satyadeo Gupta (Supreme Court)</h4>
                                <p className="text-sm text-gray-600 leading-relaxed font-light italic">"The question is not whether the marks are identical, but whether the 'unwary purchaser' of average intelligence would be confused."</p>
                                <p className="text-xs text-gray-500 mt-4 font-bold">Outcome: Established the 'Overall Proportion' test for similarity.</p>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-[40px] border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">02. Neon Laboratories Ltd vs. Medical Technologies Ltd</h4>
                                <p className="text-sm text-gray-600 leading-relaxed font-light italic">"Prior use always trumps subsequent registration."</p>
                                <p className="text-xs text-gray-500 mt-4 font-bold">Outcome: Reinforced the rights of 'Common Law' users over 'Paper Registrations.'</p>
                            </div>
                        </div>
                    </div>
                </section>

                 {/* Fees and Online Filing */}
                 <section id="fees-filing" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Government Fees & Online Filing Guidelines</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-light font-sans">
                        <p>
                            The Trademark Registry encourages digital filing. While you can file physically at the Front Office in Delhi, Mumbai, Kolkata, Chennai, or Ahmedabad, there is a **10% Surcharge** for physical filing.
                        </p>
                        <div className="overflow-hidden rounded-[32px] border border-gray-200">
                            <table className="w-full text-left bg-white">
                                <thead className="bg-gray-50 text-gray-900">
                                    <tr>
                                        <th className="p-6 font-bold uppercase text-xs tracking-widest">Action</th>
                                        <th className="p-6 font-bold uppercase text-xs tracking-widest">Form</th>
                                        <th className="p-6 font-bold uppercase text-xs tracking-widest">Fee (Physical)</th>
                                        <th className="p-6 font-bold uppercase text-xs tracking-widest text-[#D2A02A]">Fee (Online)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-sm md:text-base">
                                    <tr>
                                        <td className="p-6 font-medium">New Application</td>
                                        <td className="p-6 text-gray-500">TM-A</td>
                                        <td className="p-6 text-gray-500">₹5,000 / ₹10,000</td>
                                        <td className="p-6 font-bold text-[#D2A02A]">₹4,500 / ₹9,000</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-medium">Notice of Opposition</td>
                                        <td className="p-6 text-gray-500">TM-O</td>
                                        <td className="p-6 text-gray-500">₹3,000</td>
                                        <td className="p-6 font-bold text-[#D2A02A]">₹2,700</td>
                                    </tr>
                                    <tr>
                                        <td className="p-6 font-medium">Renewal</td>
                                        <td className="p-6 text-gray-500">TM-R</td>
                                        <td className="p-6 text-gray-500">₹10,000</td>
                                        <td className="p-6 font-bold text-[#D2A02A]">₹9,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-gray-500 italic">
                            *Fees are subject to change by the CGPDTM. Always verify on the official IP India website.
                        </p>
                    </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Common Mistakes: Why Trademark Replies Get Rejected</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-light font-sans">
                        <p>
                            Even with a valid brand, a poor reply can lead to a technical failure. Avoid these common pitfalls:
                        </p>
                        <ul className="grid md:grid-cols-2 gap-8">
                            <li className="p-8 bg-red-50/50 rounded-3xl border border-red-100">
                                <h5 className="font-black text-red-900 uppercase text-xs mb-2">Non-Specific Denials</h5>
                                <p className="text-xs text-red-800 leading-relaxed">Don't just say "The marks are different." You must explain HOW they are different (Visual, Phonetic, Conceptual).</p>
                            </li>
                            <li className="p-8 bg-red-50/50 rounded-3xl border border-red-100">
                                <h5 className="font-black text-red-900 uppercase text-xs mb-2">Poor Evidence Quality</h5>
                                <p className="text-xs text-red-800 leading-relaxed">Uploading low-resolution invoices or invoices that don't show the brand name clearly is a cardinal sin.</p>
                            </li>
                            <li className="p-8 bg-red-50/50 rounded-3xl border border-red-100">
                                <h5 className="font-black text-red-900 uppercase text-xs mb-2">Missing the 30-Day Rule</h5>
                                <p className="text-xs text-red-800 leading-relaxed">Filing on the 31st day results in an automated abandonment that is nearly impossible to reverse.</p>
                            </li>
                            <li className="p-8 bg-red-50/50 rounded-3xl border border-red-100">
                                <h5 className="font-black text-red-900 uppercase text-xs mb-2">Ignoring the Hearing Notice</h5>
                                <p className="text-xs text-red-800 leading-relaxed">If you file a reply but fail to attend the subsequent hearing, the mark will be 'Refused' for non-prosecution.</p>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="scroll-mt-32 pb-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Final Verdict: Your Path to a <span className="text-[#D2A02A]">Registered</span> Status</h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700 font-light font-sans">
                        <p>
                            Receiving an objection is not a verdict; it is a hurdle. By understanding the statutory logic of Sections 9 and 11, and by leveraging the power of Section 32 evidence, any legitimate business can navigate the Registry's doubts. 
                        </p>
                        <p>
                            At **AMA Legal Solutions**, we have spent over a decade drafting thousands of successful trademark objection replies. We don't just file papers; we build legal narratives that protect your brand's future. Whether you are a startup facing Section 9 grounds or an established firm dealing with Section 11 similarity, the solution lies in precision.
                        </p>
                        <div className="mt-24 p-16 bg-[#0f172a] rounded-[64px] text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-[#D2A02A] opacity-5 pointer-events-none"></div>
                            <h3 className="text-3xl md:text-6xl font-black mb-8 leading-none tracking-tighter uppercase">Don't Let Your <span className="text-[#D2A02A]">Brand</span> Die in the Registry.</h3>
                            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                Our expert IPR attorneys are ready to draft your reply today. Let's move your application from 'Objected' to 'Registered.'
                            </p>
                            <div className="flex flex-col md:flex-row gap-6 justify-center">
                                <Link href="/contact" className="bg-[#D2A02A] text-white px-12 py-6 rounded-full font-black text-xl hover:bg-white hover:text-gray-900 transition-all uppercase tracking-widest">
                                    Reply Now
                                </Link>
                                <a href="tel:+918700343611" className="border-2 border-white/20 text-white px-12 py-6 rounded-full font-black text-xl hover:bg-white hover:text-gray-900 transition-all uppercase tracking-widest">
                                    Speak to Expert
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="faqs" className="mt-24 pt-24 border-t border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Objection <span className="text-[#D2A02A]">Response</span> FAQ</h2>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                      {faqs.map((faq, index) => (
                        <div key={index} className="group pb-10 border-b border-gray-50 last:border-0 hover:border-[#D2A02A]/20 transition-colors">
                          <h4 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-[#D2A02A] transition-colors flex items-start leading-tight">
                            <span className="mr-3 text-[#D2A02A] opacity-20 font-black text-xl">Q.</span>
                            {faq.question}
                          </h4>
                          <p className="text-gray-600 leading-relaxed text-sm pl-8">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                </section>
              </div>
            </div>

            {/* Right Column: CTA/Sidebar */}
            {/* Right Column: CTA/Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
               {/* Contact Card */}
               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Trademark deadlines are strict. Speak to our attorneys today.
                  </p>
                  <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4">
                    Call +91-8700343611
                  </a>
                  <Link href="/contact" className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors">
                    Free Consultation
                  </Link>
               </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
