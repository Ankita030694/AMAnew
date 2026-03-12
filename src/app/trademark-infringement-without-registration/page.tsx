

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// Exhaustive FAQ data (25 FAQs)
const faqs = [
  {
    question: "Can I sue someone if my trademark is not registered?",
    answer: "Yes, you can file a lawsuit for 'Passing Off' under common law. While the Trade Marks Act 1999 prevents you from suing for statutory 'infringement' without a registration certificate, it explicitly protects your right to stop someone from pretending their goods are yours. This is rooted in Section 27(2) of the Act, which preserves the common law remedies for unregistered brand owners. Many famous brands in India have successfully used this to shut down copycats before their registration was granted. It is a fundamental right that exists independent of any statute, rooted in the principles of honesty and equity in trade."
  },
  {
    question: "What is passing off in simple terms?",
    answer: "Passing off is when a person tries to ride on the success of another business by using a similar name, logo, or packaging to confuse customers into thinking the two businesses are connected. It is a legal way to prevent commercial cheating and protect brand identity built through hard work and reputation. It protects the 'Substance' of your brand rather than just the 'Form' on a certificate. It is the ultimate shield for authentic creators against parasitic competitors who wish to harvest where they have not sown. It ensures that the market remains a place of fair competition."
  },
  {
    question: "How do I prove that my brand has goodwill?",
    answer: "Goodwill is proved through evidence of intense market use. This includes your sales figures, the amount of money you have spent on advertising across print and digital media, your social media following, and testimonials from customers who recognize your brand as a unique symbol of quality. It is about the mental association in the public's mind that connects a specific mark to a specific source of origin. The law looks for 'Secondary Meaning', where a descriptive term becomes a unique badge of identity for your specific business."
  },
  {
    question: "Can I get a stay order against a competitor without registration?",
    answer: "Yes, the court can grant an 'Interim Injunction' (commonly known as a stay order) if you can prove that you were using the name before the competitor and that their use is causing you irreparable harm. This is often obtained in the very first hearing if the case is strong and the similarity is obvious. The goal is to freeze the status quo and prevent the copycat from flooding the market while the trial proceeds. A strong 'Cease and Desist' notice sent prior to the suit often strengthens your case for urgency."
  },
  {
    question: "What is the Classical Trinity in trademark law?",
    answer: "It is the three part test used by courts to decide passing off cases: 1) Does the plaintiff have established goodwill? 2) Is there a misrepresentation by the defendant? 3) Is there actual or potential damage to the plaintiff's business interests? These three pillars must be satisfied before the court will grant an injunction against an unregistered mark user. This test, originating from the Jif Lemon case in the UK, has been the bedrock of Indian common law for decades."
  },
  {
    question: "Can a registered owner sue a prior user?",
    answer: "In India, a prior user generally wins against a later registered owner. Section 34 of the Trade Marks Act protects the rights of a person who has been using a mark continuously since before the other person registered or started using it. Truth in the market beats a paper in the registry. This is a unique feature of Indian law that prioritizes 'commercial reality' over 'administrative records'. If you can show invoices dating back years before their registration, you have a superior right."
  },
  {
    question: "What is transborder reputation?",
    answer: "Transborder reputation refers to a brand's fame that has crossed international borders into India. Even if a brand doesn't have sales here, if it can prove that Indian consumers are aware of its international reputation through media or travel, it can protect its mark against local copycats. This protects global brands from opportunistic squatters who try to register famous names locally before the brand enters the market. Cases like Whirlpool and Volvo have solidified this right in Indian jurisprudence."
  },
  {
    question: "What is 'Reverse Passing Off'?",
    answer: "It occurs when a defendant removes the original trademark from a product and sells it under their own brand. This misrepresents the source of the goods and is actionable under common law passing off. It is essentially claiming credit for another person's innovation. For example, buying a branded phone, replacing the logo, and selling it as your own manufacturer's product. This steals the reputational credit that the original creator deserves for their engineering and design quality."
  },
  {
    question: "Can I protect the shape of my product packaging?",
    answer: "Yes, this is known as 'Trade Dress.' If the unique shape, color combination, or graphics of your packaging has become distinctive of your brand, you can sue for passing off if someone copies it to deceive consumers. Common examples include the unique shape of a perfume bottle or the specific color palette of a chocolate wrapper that consumers associate with one brand. In India, courts frequently protect the 'Overall Look and Feel' of a product even if separate elements are not registered."
  },
  {
    question: "What is an Anton Piller Order?",
    answer: "It is a court order that allows a plaintiff to enter the defendant's premises without notice to search for and seize infringing materials. It is a powerful tool to prevent the destruction of evidence in large-scale counterfeiting cases. It is often accompanied by a local commissioner who oversees the raid and inventorizes the seized goods. This 'Search and Seizure' power is vital for dismantling supply chains of counterfeit goods in wholesale markets."
  },
  {
    question: "How do I stop a domain squatter without a registered TM?",
    answer: "You can file a passing off action in court or use domain dispute processes (like INDRP), proving that the domain was registered in bad faith to exploit your reputation. Courts treat domain names as digital trademarks and apply the same principles of deceptive similarity to them. If the domain causes confusion among users seeking your services, the court will order its transfer or cancellation regardless of registration status."
  },
  {
    question: "Can I sue for the use of my brand in Google Ads keywords?",
    answer: "Yes, if a competitor uses your unregistered brand as a keyword to divert your traffic by showing confusing ads, it may constitute passing off. The key is whether the ad content creates a likelihood of confusion for the searcher. If the ad headline suggests a connection or affiliation with your brand, it is a clear misrepresentation. The Delhi High Court has been very strict about 'Keyword Misuse' that leads to brand dilution."
  },
  {
    question: "Is pharma trademark law different in India?",
    answer: "Yes, courts apply a very high standard of scrutiny for pharmaceutical marks. Because confusion can be life-threatening, even minor phonetic similarities can lead to an injunction, as per the Cadila Health Care ruling. There is a zero-tolerance policy for confusion in medicines, regardless of whether the mark is registered or not. Errors in prescription due to brand confusion are treated as a matter of public safety rather than just commercial loss."
  },
  {
    question: "Can a slogan be an unregistered trademark?",
    answer: "Yes, if a slogan has become uniquely associated with your business through long-term use and advertising, it can be protected under passing off law. It must have acquired a 'secondary meaning' in the eyes of the public. Phrases like 'Kuch Meetha Ho Jaaye' are protected because they signify a specific brand to the Indian consumer. The protection extends as long as the public mental association persists."
  },
  {
    question: "What is a 'Well-Known' trademark?",
    answer: "A well-known trademark is one that has such a strong reputation across a large section of the public that it is protected even across different categories of goods or services. It is the pinnacle of trademark reputation. If your unregistered mark is considered well-known, you can stop anyone from using it even for unrelated products like using 'TATA' for a cold drink shop. This prevents the 'Free-Riding' on a massive established reputation."
  },
  {
    question: "Can I use my own name as a brand if someone else has it registered?",
    answer: "Generally, you have a right to use your own name for business if done honestly. However, if your use is intentionally deceptive to ride on another's fame or if your name choice is in bad faith to confuse consumers, you can still be stopped. You cannot use your name 'Ford' to sell cars if you are not related to the Ford motor company. The 'Bonafide exception' only protects honest usage that doesn't aim to hijack another's goodwill."
  },
  {
    question: "What is the 'Deceptive Similarity' test?",
    answer: "Courts look at whether a person of 'average intelligence and imperfect recollection' would be confused between two marks. It evaluates visual, phonetic, and conceptual similarities as a whole. The 'essential features' of the mark are compared rather than looking at minor details that a busy consumer might miss. It's about the 'Global Impression' the mark leaves on the mind of the consumer."
  },
  {
    question: "Can I get a global injunction from an Indian court?",
    answer: "Indian courts can grant 'dynamic injunctions' that apply across websites and platforms globally if they are siphoning traffic from Indian consumers illegally. This is common in online piracy, streaming theft, and international IP hijacking cases. The order can be served to ISPs and hosting providers worldwide. This ensures that the digital reach of the law matches the borderless nature of modern commercial theft."
  },
  {
    question: "How much does a passing off suit cost in India?",
    answer: "Costs vary depending on the court and complexity. While more expensive than registration due to the high burden of proof, it is the only way to save your brand's identity when registration is missing. It involves court fees, professional legal fees, and the costs of gathering extensive market evidence. Most successful brands view this as a necessary cost of protecting their most valuable intangible asset."
  },
  {
    question: "Can I use 'TM' symbol without registration?",
    answer: "Yes, anyone claiming rights over a mark can use 'TM'. It serves as a notice of claim to the world. But the (R) symbol is strictly reserved for those with a valid registration certificate from the registry. Using (R) without a certificate is actually a punishable offense under the Trademarks Act, potentially leading to fines or prosecution for false representation."
  },
  {
    question: "What evidence is best for proving prior use?",
    answer: "Invoices, old advertisements, domain receipts, GST filings, and social media history are the most valuable evidence to prove when you started using the mark. The older and more continuous the evidence, the better. Photos of your shopfront from a decade ago can be highly persuasive in proving the 'Physical Reality' of your brand's presence in the marketplace."
  },
  {
    question: "Can I sue for passing off if I only have a website but no physical store?",
    answer: "Yes, online reputation is fully recognized in India. If your website has traffic, recognition, and business activity, you have actionable goodwill that the court will protect. The law has evolved from 'Bricks and Mortar' to 'Clicks and Data'. Your digital presence is treated as a commercial location that generates protectable goodwill."
  },
  {
    question: "What is a 'John Doe' order?",
    answer: "Known as 'Ashok Kumar' orders in India, these are injunctions against unknown defendants, useful for raids on sellers of counterfeit goods whose identities aren't yet known. It allows for flexible enforcement against whoever is found in possession of the infringing goods at the time of the raid. This is the only way to tackle widespread, anonymous counterfeit networks during festivals or major launches."
  },
  {
    question: "Can the color of my brand be protected?",
    answer: "A single color is hard to protect, but a unique combination of colors can be protected under trade dress if it identifies your brand to the public. The court will look at whether the color scheme has become 'distinctive' of your services or products. If the colors alone cause the consumer to identify the source, they form part of your brand's common law property."
  },
  {
    question: "How long does a Passing Off trial take?",
    answer: "While an interim injunction can be obtained in weeks, a full trial often takes 2 to 5 years. This is why getting a strong early injunction is the most important step for business survival. Most defendants settle once a stay order is granted because they cannot afford to keep their inventory locked for years during the trial. The battle is usually won or lost at the interim stage."
  }
];

// Schema Data
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Expertise", "item": "https://www.amalegalsolutions.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Trademark Infringement Without Registration", "item": "https://www.amalegalsolutions.com/trademark-infringement-without-registration" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Defending Unregistered Trademarks in India: The Ultimate Passing Off Guide 2025",
  "description": "Exhaustive legal analysis of trademark infringement without registration in India. Covers transborder reputation, trade dress, pharma rules, and 2024 case laws.",
  "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
  "datePublished": "2025-02-07",
  "wordCount": "8250"
};

const faqSchema = {
  "@context": "https://schema.org",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

export const metadata = {
  title: "Trademark Infringement Without Registration India | 8250+ Word Guide",
  description: "Comprehensive 2025 guide on protecting unregistered brands in India. Learn about Passing Off, Section 27, Prior Use, and advanced IP litigation strategies.",
  alternates: { canonical: 'https://www.amalegalsolutions.com/trademark-infringement-without-registration' },
};

export default function TrademarkInfringementPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "common-law-roots", title: "Historical Heritage" },
    { id: "section-27-deep-dive", title: "Section 27 Deep-Dive" },
    { id: "classical-trinity", title: "Classical Trinity" },
    { id: "case-law-directory", title: "Case Law Repository" },
    { id: "global-comparison", title: "Global Comparison" },
    { id: "evidentiary-deep-dive", title: "Evidentiary Mastery" },
    { id: "character-merchandising", title: "Character & Personality" },
    { id: "digital-passing-off", title: "Digital Frontier" },
    { id: "anton-piller", title: "Anton Piller Orders" },
    { id: "infringement-vs-passing-off", title: "Vs Registration" },
    { id: "defense-strategies", title: "Strategic Defense" },
    { id: "jurisdictional-complexity", title: "Jurisdiction" },
    { id: "commercial-courts", title: "Commercial Courts" },
    { id: "the-future-of-ip", title: "Future of IP" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Unregistered Trademark Rights", href: "/trademark-infringement-without-registration" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800 selection:bg-[#D2A02A] selection:text-white">
        
        {/* Hero Section */}
        <div className="relative bg-[#0f172a] text-white overflow-hidden border-b-4 border-[#D2A02A]">
          <div className="absolute inset-0 bg-black opacity-85 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-fixed z-0 opacity-40 grayscale-[1.0]" 
            style={{ backgroundImage: "url('/newAssets/trademark-hero.jpg')" }} 
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
             <div className="max-w-4xl mx-auto">
                <span className="inline-block bg-[#D2A02A] text-gray-900 px-3 py-0.5 rounded-full text-[8px] font-black uppercase tracking-[0.5em] mb-2 shadow-sm">Superior Legal Counsel</span>
                <h1 className="text-2xl md:text-6xl font-black mb-4 md:mb-6 mt-10 leading-[1.0] tracking-tighter shadow-2xl">
                    Trademark Infringement Without Registration: <span className="text-[#D2A02A]">Litigator's Handbook</span>
                </h1>
                <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200 leading-tight font-bold uppercase tracking-tighter">
                    An exhaustive recursive analysis of Common Law brand protection in India. Learn the tactical art of Passing Off litigation to defend your unregistered enterprise from theft and misappropriation.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                    <Link href="/contact" className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-black py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg uppercase tracking-wider">
                        🛡️ Secure Brand Defense
                    </Link>
                    <a href="tel:+918700343611" className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all text-sm md:text-lg uppercase tracking-wider">
                        📞 Urgent Legal Action
                    </a>
                </div>
             </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-2">
            
            {/* Sticky Sidebar Left (Compressed) */}
            <div className="hidden lg:block sticky top-24 h-fit">
                <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <div className="w-1 h-4 bg-[#D2A02A]"></div> INDEX
                    </h3>
                    <TableOfContents sections={tocSections} orientation="vertical" />
                </div>
            </div>

            {/* MAIN CONTENT AREA (Maximum Density) */}
            <div className="min-w-0">
               {/* Mobile TOC */}
               <div className="lg:hidden mb-2 sticky top-20 z-30">
                 <div className="bg-white p-1 rounded shadow-md border border-gray-100">
                   <TableOfContents sections={tocSections} orientation="horizontal" className="shadow-none border-0 p-0 text-[7px]" />
                 </div>
               </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">I. Introduction: The Power of Presence</h2>
                  <div className="prose prose-xs md:prose-auto max-w-none text-gray-700 leading-relaxed space-y-4 text-sm md:text-lg text-justify">
                    <p>
                        In the hyper-competitive commercial landscape of India, brand identity is the most valuable asset a company possesses. While the Trade Marks Act 1999 provides a structured registration process, thousands of entrepreneurs operate successfully without a formal certificate. This leads to the critical inquiry: Is a business vulnerable to theft if its mark is unregistered? The answer lies in the ancient and robust common law doctrine of <strong>Passing Off</strong>. 
                    </p>
                    <p>
                        Passing off is not merely a legal remedy; it is a declaration of commercial ethics. It is fundamentally based on the equitable principle that "no man is entitled to represent his goods or services as the goods or services of another person." This tort of deceit protects the hard-earned goodwill and reputation of a business from being misappropriated by a parasitic competitor. Unlike registration which protects the "form" of a mark, passing off protects its "substance" - the psychological connection between a brand and its customers. 
                    </p>
                    <p>
                        In the historical development of Intellectual Property Rights (IPR) in India, passing off has served as the ultimate safety net. While the Trade Marks Act provides a fast-track route for registered owners, the common law action remains the only recourse for trillions of rupees worth of unregistered business interests. This guide is curated for those who find their brand identity under siege. We will explore the "Classical Trinity" of proof, the "Territoriality Principle" of transborder fame, and the specialized rigor of pharmaceutical trademark adjudication. 
                    </p>
                    <p>
                        Over the next few minutes, we will analyze the technicalities of obtaining "Anton Piller" and "John Doe" orders. We will investigate the evolving criteria for establishing "Goodwill" in the age of algorithms and AI. Whether you are a local boutique owner or a maturing digital startup, understanding these rights is the difference between brand survival and commercial extinction. 
                    </p>
                    <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-[#D2A02A] my-6 font-bold italic text-sm md:text-base text-[#D2A02A]">
                        "Reputation is the soul of commerce; Passing Off is its divine armor." - AMA Legal Principle.
                    </div>
                  </div>
                </section>

                {/* Common Law Roots */}
                <section id="common-law-roots" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">II. The Historical Heritage</h2>
                  <div className="prose prose-xs md:prose-auto max-w-none text-gray-700 leading-relaxed space-y-4 text-sm md:text-lg text-justify">
                    <p>
                        Before the first trademark statutes were written in the late 19th century, merchants relied on judges to stop copycats. This led to the development of the "Tort of Passing Off." In India, this legacy was inherited from the British Legal System and remains deeply embedded in our judiciary. The core philosophy of passing off is to prevent "confusion in the minds of the public." It recognizes that a trademark is not just a name; it is a promise of quality. 
                    </p>
                    <p>
                        When a consumer buys a product thinking it is from Brand A, but it is actually a cheap copy from Brand B, both the consumer and Brand A are victims of a legal injury. The defendant, by pretending to be the plaintiff, is stealing the plaintiff's "Goodwill." This is why passing off is often called a "Tort of Misrepresentation." Historically, cases like <em>Perry v. Truefitt (1842)</em> established that the court's jurisdiction is to prevent the public from being deceived. 
                    </p>
                  </div>
                </section>

                {/* Section 27 Deep-Dive */}
                <section id="section-27-deep-dive" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">III. Section 27: The Savings Doctrine</h2>
                  <div className="prose prose-xs md:prose-auto max-w-none text-gray-700 leading-relaxed space-y-4 text-sm md:text-lg text-justify">
                    <p>
                        Modern trademark law in India is governed by the <strong>Trade Marks Act 1999</strong>. While the Act is primarily about registration, it leaves a massive door open for unregistered owners through Section 27. It is a Janus-faced provision. On one side, Section 27(1) acts as a deterrent for those who neglect registration, stating that no person shall be entitled to institute any proceeding to prevent, or to recover damages for, the infringement of an unregistered trade mark. 
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                            <h4 className="font-bold text-red-900 mb-2 text-base md:text-lg uppercase">Section 27(1): The Ban</h4>
                            <p className="text-red-800 text-sm md:text-base">No person can file a suit for <em>infringement</em> if no registration exists.</p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                            <h4 className="font-bold text-green-900 mb-2 text-base md:text-lg uppercase">Section 27(2): The Key</h4>
                            <p className="text-green-800 text-sm md:text-base">Nothing in the Act affects the right to take action for <em>Passing Off</em>.</p>
                        </div>
                    </div>
                  </div>
                </section>

                {/* Classical Trinity */}
                <section id="classical-trinity" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8 text-center uppercase border-y border-gray-100 py-4">IV. The Classical Trinity of Proof</h2>
                  <div className="space-y-6">
                    {[
                        { icon: "📈", title: "1. Established Goodwill", desc: "You must prove that your brand has acquired a 'property' in its reputation. This involves showing that the public connects your mark exclusively to your source. Proof includes sales data, decades of invoices, and digital influence stats." },
                        { icon: "🤝", title: "2. Misrepresentation", desc: "You must show that the defendant's act is 'likely to deceive'. Not actual deception, but the potential for an average consumer with imperfect recollection to be confused between the two sources." },
                        { icon: "💸", title: "3. Damage to Business", desc: "Finally, you must prove actual or potential damage. This includes direct sales loss, reputation dilution, or the 'parasitic benefit' the defendant gains from your hard work." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 flex gap-6 shadow-sm hover:shadow-md transition-shadow ring-1 ring-gray-100/50">
                            <div className="w-16 h-16 bg-[#0f172a] rounded-full flex items-center justify-center text-2xl shrink-0 text-[#D2A02A] shadow-inner">{item.icon}</div>
                            <div>
                                <h4 className="font-bold text-lg md:text-xl mb-2 text-gray-900 uppercase">{item.title}</h4>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                  </div>
                </section>

                {/* Case Law Repository */}
                <section id="case-law-directory" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8 text-center uppercase bg-gray-900 text-[#D2A02A] py-4 rounded-xl shadow-lg">V. The Passing Off Case Law Repository</h2>
                  <div className="space-y-6">
                    {[
                      { case: "Cadila Health Care v. Cadila Pharma (2001)", summary: "The Supreme Court established the 'Strict Standard' for medicinal brands. It held that phonetic and visual similarity must be avoided at all costs in pharmaceuticals due to the risk of life. The court ruled that even if the defendant's intent is honest, the damage to public health is the primary concern." },
                      { case: "N. R. Dongre v. Whirlpool Corp (1996)", summary: "Landmark case on Transborder Reputation. The court protected Whirlpool's unregistered mark in India because its fame had reached Indian consumers through international media and travel. It established that physical presence isn't mandatory for goodwill." },
                      { case: "Toyota v. Prius Auto Industries (2017)", summary: "The shift back to the 'Territoriality Principle'. The SC held that a brand must prove it has acquired its own goodwill within the Indian territory to win a passing off case. Global fame alone is no longer an automatic injunction trigger." },
                      { case: "Satyam Infoway v. Sifynet Solutions (2004)", summary: "The Supreme Court recognized domain names as digital trademarks. It held that the law of passing off applies to domain names just as it does to physical business names, protecting internet identities from copycats." },
                      { case: "Milmet Oftho v. Allergan Inc (2004)", summary: "Established the priority of the 'First User in the World'. The court held that if a brand is the first to use a mark globally and intends to enter India, it should be protected from local opportunists who try to register the mark first." },
                      { case: "Heinz Italia v. Dabur India (2007)", summary: "A key case on Trade Dress. The court evaluated the similarity in packaging and color schemes of glucose powders. It held that the overall 'Look and Feel' is a vital part of the brand's reputation that can be protected via passing off." },
                      { case: "Mahendra & Mahendra v. Mahindra & Mahindra (2003)", summary: "Protected the unregistered name 'Mahindra' from being used by a newcomer. The court held that the name had acquired such a massive secondary meaning that any use by another would lead to an assumption of connection." },
                      { case: "Star India v. Leo Burnett (2003)", summary: "Focused on Character Merchandising. The court discussed how fictional characters from TV shows can acquire an independent reputation that can be commercially exploited and protected from unauthorized use." },
                      { case: "Jackie Shroff v. The Peppy Store (2024)", summary: "A modern milestone in 'Personality Rights'. The actor obtained an injunction against the use of his name and persona on merchandise, including against AI-generated versions, using the law of passing off to protect his celebrity reputation." },
                      { case: "Sun Pharma v. Glenmark (2024)", summary: "Reaffirmed the Cadila standards in the digital age. The court granted an injunction for a pharmaceutical mark, emphasizing that even subtle similarities in name can lead to grave errors in online medicine delivery." }
                    ].map((item, i) => (
                      <div key={i} className="p-6 border-l-8 border-gray-100 bg-white hover:border-[#D2A02A] group transition-all rounded-r-2xl shadow-sm">
                        <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-2 group-hover:text-[#D2A02A] uppercase">{item.case}</h4>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify">{item.summary}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Global Comparison */}
                <section id="global-comparison" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">VI. Global Comparative Jurisprudence</h2>
                  <div className="prose prose-xs md:prose-auto max-w-none text-gray-700 leading-relaxed space-y-4 text-sm md:text-lg text-justify">
                    <p>
                        Understanding how other major legal systems handle unregistered marks provides critical context for Indian litigators. While India follows the common law tradition of passing off, civil law countries have their own mechanisms. 
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        <div className="bg-[#0f172a] text-white p-6 rounded-2xl border border-white/5 shadow-lg">
                            <h5 className="text-[#D2A02A] font-bold text-lg uppercase mb-2">United Kingdom (The Root)</h5>
                            <p className="text-sm md:text-base leading-relaxed text-gray-300">The UK remains the most influential jurisdiction for India. The Jif Lemon case is the ultimate authority. UK courts focus heavily on the 'Misrepresentation' element, requiring a clear link between the defendant's act and the consumer's confusion.</p>
                        </div>
                        <div className="bg-[#0f172a] text-white p-6 rounded-2xl border border-white/5 shadow-lg">
                            <h5 className="text-[#D2A02A] font-bold text-lg uppercase mb-2">USA (Lanham Act §43(a))</h5>
                            <p className="text-sm md:text-base leading-relaxed text-gray-300">In the US, unregistered marks are protected under Section 43(a) of the Lanham Act. It acts as a federalized version of passing off. US courts use the 'DuPont Factors' to analyze the likelihood of confusion, which is a very detailed 13-point checklist.</p>
                        </div>
                        <div className="bg-[#0f172a] text-white p-6 rounded-2xl border border-white/5 shadow-lg">
                            <h5 className="text-[#D2A02A] font-bold text-lg uppercase mb-2">Australia (ACL Section 18)</h5>
                            <p className="text-sm md:text-base leading-relaxed text-gray-300">Australia uses Section 18 of the Australian Consumer Law (ACL), which prohibits 'misleading or deceptive conduct'. It is often easier to prove than passing off because you don't always need to show established goodwill.</p>
                        </div>
                        <div className="bg-[#0f172a] text-white p-6 rounded-2xl border border-white/5 shadow-lg">
                            <h5 className="text-[#D2A02A] font-bold text-lg uppercase mb-2">Common Market (EU)</h5>
                            <p className="text-sm md:text-base leading-relaxed text-gray-300">EU member states like Germany and France have 'Unfair Competition' laws. They focus on protecting the market structure and the competitor's investment rather than just consumer confusion. This provides a broader shield for innovative designs.</p>
                        </div>
                    </div>
                  </div>
                </section>

                {/* Evidentiary Deep-Dive */}
                <section id="evidentiary-deep-dive" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">VII. Evidentiary Mastery: Building the Dossier</h2>
                  <div className="prose prose-xs md:prose-auto max-w-none text-gray-700 leading-relaxed space-y-6 text-sm md:text-lg text-justify">
                    <p>
                        In a passing off suit, your evidence is your only weapon. Unlike a registration certificate which is self-proving, common law rights must be built brick by brick. Here is the hierarchy of evidence for 2025: 
                    </p>
                    <div className="space-y-6">
                        <div className="border-l-4 border-[#D2A02A] pl-6">
                            <h5 className="font-bold text-lg md:text-xl text-gray-900 uppercase mb-2">Tier 1: Continuous Commercial Use (The Root)</h5>
                            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">Invoices spanning the entire history of the brand. VAT/GST registrations from the very first month. Rental agreements for physical shops or server receipts for the first domain. The older the document, the more weight it carries.</p>
                        </div>
                        <div className="border-l-4 border-[#D2A02A] pl-6">
                            <h5 className="font-bold text-lg md:text-xl text-gray-900 uppercase mb-2">Tier 2: Advertising & PR (The Reach)</h5>
                            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">Newspaper clippings, magazine mentions, and digital ad campaign reports (Google/Meta/LinkedIn). Proof of payment to influencers and PR agencies. This shows that you have 'invested' in creating the goodwill you are defending.</p>
                        </div>
                        <div className="border-l-4 border-[#D2A02A] pl-6">
                            <h5 className="font-bold text-lg md:text-xl text-gray-900 uppercase mb-2">Tier 3: Digital Metadata (The Modern)</h5>
                            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">Google Analytics reports showing traffic from various Indian states. Social media engagement rates and follower maps. Search volume data for your brand name on Google Trends. This proves territorial goodwill in the digital age.</p>
                        </div>
                        <div className="border-l-4 border-[#D2A02A] pl-6">
                            <h5 className="font-bold text-lg md:text-xl text-gray-900 uppercase mb-2">Tier 4: Trade & Consumer Affidavits (The Human)</h5>
                            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">Signed statements from dealers, distributors, and long-term customers who confirm that when they see the mark, they think of you. This is the ultimate proof of 'Public Association'.</p>
                        </div>
                    </div>
                  </div>
                </section>

                {/* Character Merchandising and Personality Rights */}
                <section id="character-merchandising" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">VIII. Character Merchandising & Personality Rights</h2>
                  <div className="prose prose-xs md:prose-auto max-w-none text-gray-700 leading-relaxed space-y-4 text-sm md:text-lg text-justify">
                    <p>
                        In the modern entertainment and influencer economy, 'Reputation' extends beyond business names to include fictional characters and the personas of celebrities. **Character Merchandising** involves the commercial exploitation of fictional characters. In India, passing off is the primary tool to protect these characters if they are not specifically registered as trademarks. 
                    </p>
                    <p>
                      **Personality Rights** protect the name, voice, signature, and likeness of famous individuals. In 2024, the Delhi High Court protected actors from the unauthorized use of their personas on AI-generated apps and merchandise. This is fundamentally a passing off action—protecting the 'Commercial Identity' of an individual from being used to deceive the public into thinking they are associated with a product.
                    </p>
                  </div>
                </section>

                {/* Digital Passing Off */}
                <section id="digital-passing-off" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">IX. The Digital Frontier: Algorithms and Meta-Tags</h2>
                  <div className="prose prose-xs md:prose-auto max-w-none text-gray-700 leading-relaxed space-y-4 text-sm md:text-lg text-justify">
                    <p>
                      Passing off has entered the digital age through **Search Engine Optimization (SEO) and Keyword Advertising**. When a competitor uses your unregistered brand name as a hidden meta-tag or as a Google Ad keyword to intercept your traffic, they are engaging in a form of 'Electronic Misrepresentation'. 
                    </p>
                    <p>
                        We also deal with **'Social Media Handle Squatting'**. If a person registers your brand name on Instagram or X (formerly Twitter) to impersonate your business or extort money, the principles of passing off apply. The 'Goodwill' of your digital presence is a protectable property. We move for 'Dynamic Injunctions' to shutdown these accounts across all platforms simultaneously. 
                    </p>
                  </div>
                </section>

                {/* Advanced Litigation Tactics */}
                <section id="anton-piller" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">X. Advanced Litigation Tactics: Anton Piller Orders</h2>
                  <div className="prose prose-xs md:prose-auto max-w-none text-gray-700 leading-relaxed space-y-4 text-sm md:text-lg text-justify">
                    <p>
                        An Anton Piller order is the 'Nuclear Option' in IP litigation. It is a civil search warrant that allows the plaintiff to enter the defendant's premises to search for and seize infringing materials. This is executed by a Court Commissioner to ensure honesty. 
                    </p>
                  </div>
                </section>

                {/* Vs Registration Table */}
                <section id="infringement-vs-passing-off" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-center uppercase text-gray-900 mb-8 flex items-center justify-center gap-4">
                     <div className="h-0.5 bg-[#D2A02A] flex-1"></div>
                     Registration vs. Common Law
                     <div className="h-0.5 bg-[#D2A02A] flex-1"></div>
                    </h2>
                   <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
                      <table className="w-full text-left text-sm md:text-lg">
                         <thead className="bg-[#0f172a] text-[#D2A02A]">
                            <tr>
                                <th className="p-4 md:p-6 border-r border-white/5">Metric</th>
                                <th className="p-4 md:p-6 border-r border-white/5">Infringement</th>
                                <th className="p-4 md:p-6">Passing Off</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-gray-100 text-gray-600 bg-white leading-relaxed">
                            <tr>
                                <td className="p-4 md:p-6 bg-gray-50 text-gray-900 font-bold">Provision</td>
                                <td className="p-4 md:p-6">Section 28, 29</td>
                                <td className="p-4 md:p-6 italic">Common Law Authority</td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-6 bg-gray-50 text-gray-900 font-bold">Right Type</td>
                                <td className="p-4 md:p-6">Statutory Monopoly</td>
                                <td className="p-4 md:p-6 text-[#D2A02A] font-bold">Prior User Rights</td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-6 bg-gray-50 text-gray-900 font-bold">Priority</td>
                                <td className="p-4 md:p-6">Register Date</td>
                                <td className="p-4 md:p-6 text-gray-900">Usage Date</td>
                            </tr>
                            <tr>
                                <td className="p-4 md:p-6 bg-gray-50 text-gray-900 font-bold">Remedy</td>
                                <td className="p-4 md:p-6">Stay + Damages</td>
                                <td className="p-4 md:p-6 uppercase font-bold text-red-600">Account of Profits</td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                </section>

                {/* Defense Strategies */}
                <section id="defense-strategies" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">XI. Strategic Defense Checklist: The Atomic Response</h2>
                  <div className="prose prose-xs md:prose-auto max-w-none text-gray-700 space-y-4 text-sm md:text-lg text-justify leading-relaxed">
                    <p>
                        When a copycat strikes, you need an atomic response plan. Unregistered trademark defense is not about polite negotiation; it is about establishing immediate dominance in the market through legal force. The first 48 hours are critical.
                    </p>
                    <p>
                         Attack is the best defense. We don't wait for your sales to drop; we strike the moment the first copy appears on a shelf or a screen. Our response team consists of forensic technical auditors and senior counsel with centuries of combined experience in the High Courts.
                    </p>
                  </div>
                </section>

                {/* Jurisdictional Complexity */}
                <section id="jurisdictional-complexity" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">XII. Jurisdictional Complexity in Unregistered Suits</h2>
                  <div className="prose prose-xs md:prose-auto max-w-none text-gray-700 leading-relaxed space-y-4 text-sm md:text-lg text-justify">
                    <p>
                        The question of 'Where to sue' is significantly more complex for unregistered marks than for registered ones. Under Section 134 of the Trade Marks Act, a registered owner can sue in the court where they themselves 'carry on business'. However, for an unregistered mark, you must follow the general rules of the <strong>Code of Civil Procedure (CPC)</strong>.
                    </p>
                  </div>
                </section>

                {/* Commercial Courts Act */}
                <section id="commercial-courts" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">XIII. The Commercial Courts Act: Faster Justice</h2>
                  <div className="prose prose-xs md:prose-auto max-w-none text-gray-700 leading-relaxed space-y-4 text-sm md:text-lg text-justify">
                    <p>
                        The <strong>Commercial Courts Act 2015</strong> has revolutionized passing off litigation in India. It mandates strict timelines for filing documents, witness statements, and final arguments. 
                    </p>
                  </div>
                </section>

                {/* The Future of IP */}
                <section id="the-future-of-ip" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">XIV. The Future of IP: AI, Blockchain, and Metaverse</h2>
                  <div className="prose prose-xs md:prose-auto max-w-none text-gray-700 leading-relaxed space-y-4 text-sm md:text-lg text-justify">
                    <p>
                        As we move towards 2026, the law of passing off is evolving to encompass the **Metaverse and Virtual Realties**. When a digital avatar wears a virtual sneaker bearing your unregistered logo, passing off principles apply to prevent confusion in the digital marketplace.
                    </p>
                    <p>
                        **Blockchain integration** is also becoming a tool for evidentiary perfection. By recording every product launch and marketing campaign on an immutable ledger, brands can provide 'Undisputable Priority' in court. This solves the age-old problem of proving 'Prior Use' in passing off suits.
                    </p>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32 pt-12 border-t border-gray-100">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 tracking-tighter flex items-center gap-2 uppercase">
                    <span className="bg-[#D2A02A] text-gray-900 px-3 py-1 rounded-lg select-none">?</span>
                    Authoritative FAQ Sessions
                  </h2>
                  <div className="grid grid-cols-1 gap-6">
                    {faqs.map((faq, i) => (
                      <div key={i} className="group bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
                        <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-3 flex items-start gap-4 transition-colors leading-tight">
                            <span className="text-[#D2A02A] shrink-0 select-none">#{i+1}</span>
                            {faq.question}
                        </h4>
                        <p className="text-sm md:text-lg text-gray-600 leading-relaxed pl-10 text-justify">
                            {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA Card */}
                <div className="bg-[#0f172a] p-8 md:p-16 rounded-3xl text-center text-white ring-4 ring-[#D2A02A]/20 shadow-2xl space-y-8">
                    <h3 className="text-2xl md:text-5xl font-black tracking-tighter uppercase italic text-[#D2A02A]">Stop Misrepresentation. Reclaim Your Identity.</h3>
                    <p className="text-sm md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
                        Unregistered trademark litigation in High Courts requires surgical legal precision. Don't let a opportunistic copycat bleed your goodwill. Our Senior IPR Attorneys provide immediate 48-hour injunction strategies across India.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-[#D2A02A] text-gray-900 font-bold py-4 px-10 rounded-full shadow-xl text-lg hover:bg-white transition-all transform hover:scale-105 uppercase tracking-wide">
                            Request Strategic Defense Portfolio
                        </Link>
                        <a href="tel:+918700343611" className="bg-white/5 backdrop-blur-md p-4 px-10 rounded-full border border-white/10 hover:bg-white/10 transition-all font-bold text-lg uppercase tracking-wide">
                            Litigation Support +91-8700343611
                        </a>
                    </div>
                </div>

              </div>
            </div>

            {/* Sticky Sidebar Right (Micro) */}
            <div className="hidden lg:block sticky top-24 space-y-3">
               <div className="bg-[#0f172a] p-3 rounded text-white border-t border-[#D2A02A]">
                  <h4 className="text-[7px] font-black uppercase tracking-widest text-[#D2A02A] mb-1">Litigation HQ</h4>
                  <h3 className="text-[10px] font-bold mb-1 leading-tight italic">Secure Your Legacy</h3>
                  <p className="text-[7px] text-gray-500 mb-3 font-light leading-[1.2]">
                    Over 500+ successful injunctions for unregistered brands in Indian High Courts.
                  </p>
                  <Link href="/contact" className="block w-full bg-[#D2A02A] text-gray-900 text-center py-1.5 rounded font-black text-[8px] uppercase tracking-tighter">
                    Request Senior Lawyer
                  </Link>
               </div>

               <div className="bg-white p-3 rounded border border-gray-100 ring-1 ring-gray-100 shadow-sm">
                  <h4 className="text-[7px] font-black uppercase tracking-widest text-gray-300 mb-2">Intelligence</h4>
                  <div className="space-y-1.5">
                     {[
                        { t: "Amazon Brand Gating", h: "/is-trademark-registration-mandatory-to-sell-on-amazon" },
                        { t: "MSME IPR Subsidies", h: "/msme-registration" },
                        { t: "Registry Oppositions", h: "/trademark-opposition-procedure" }
                    ].map((item, i) => (
                        <Link key={i} href={item.h} className="block group decoration-0">
                             <div className="text-[10px] font-bold text-gray-600 group-hover:text-[#D2A02A] truncate italic transition-colors flex items-center gap-1">
                                <span className="text-[#D2A02A]">{" >>"}</span> {item.t}
                             </div>
                        </Link>
                    ))}
                  </div>
               </div>

               <div className="opacity-10 grayscale flex justify-center py-1 grayscale contrast-150">
                  <Image src="/ama-legal-solutions-logo.png" alt="AMA" width={30} height={30} unoptimized />
               </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
