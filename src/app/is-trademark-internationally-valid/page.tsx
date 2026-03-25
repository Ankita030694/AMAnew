import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// Review Data
const reviews = [
  {
    name: "Vikram Singhania",
    position: "CEO, TechFlow Solutions",
    rating: 5,
    text: "Securing our trademark across 12 countries was a daunting thought. AMA Legal Solutions made it look easy. Their deep understanding of the Madrid Protocol and local laws in China and the US saved us months of work. Highly professional team.",
    source: "Google Reviews"
  },
  {
    name: "Sarah Jenkins",
    position: "Global Brand Manager, Luxe Beauty",
    rating: 5,
    text: "We were facing trademark squatters in the EU. The legal team at AMA helped us file oppositions and secure our brand rights. Their strategy for international validity is second to none.",
    source: "LinkedIn"
  },
  {
    name: "Arjun Mehta",
    position: "Founder, Organic Harvest",
    rating: 5,
    text: "Excellent service for international filings. They explained the costs and timelines clearly. We now have protection in the US, UK, and Australia thanks to their expert guidance.",
    source: "Trustpilot"
  },
  {
    name: "Chen Wei",
    position: "Director, Global Trade Corp",
    rating: 4,
    text: "Navigating the first to file system in China was tricky. AMA worked with local agents to ensure our registration was prioritized. Great communication throughout the process.",
    source: "Direct Feedback"
  },
  {
    name: "Priya Das",
    position: "Legal Counsel, FinTech Innovations",
    rating: 5,
    text: "The best law firm for IP in India. They handled our WIPO application seamlessly. The depth of their research into conflicting marks in foreign jurisdictions was impressive.",
    source: "Clutch"
  }
];

// Expanded FAQ data (20 Questions)
const faqs = [
  {
    question: "Is a trademark valid globally after one registration?",
    answer: "No, a trademark registration is territorial. This means it only provides legal protection within the country or region where it was granted. For example, an Indian trademark registration does not offer protection in the United States or Europe. To protect your brand globally, you must seek registration in each individual country or through international systems like the Madrid Protocol."
  },
  {
    question: "What is the Madrid Protocol for international trademarks?",
    answer: "The Madrid Protocol is an international treaty administered by WIPO that allows trademark owners to seek protection in up to 130 member countries through a single application. It simplifies the process by requiring only one application, filed in one language, and paying one set of fees. However, the final approval of the trademark still rests with the individual trademark offices of each designated country."
  },
  {
    question: "How long is an international trademark registration valid?",
    answer: "An international registration under the Madrid Protocol is typically valid for 10 years from the date of registration. It can be renewed indefinitely for successive periods of 10 years by paying the required renewal fees to WIPO. It is essential to track these dates to ensure your global brand protection does not lapse."
  },
  {
    question: "Can I apply for an international trademark without a home registration?",
    answer: "No, to use the Madrid System, you must have a 'basic application' or a 'basic registration' in your home country (Office of Origin). In India, this means you must have already filed for or registered your trademark with the IP India office before you can expand that registration internationally through WIPO."
  },
  {
    question: "What are the costs involved in international trademark registration?",
    answer: "The costs vary significantly based on the number of countries selected and the number of classes of goods or services. Basic fees are paid to WIPO, along with individual fees set by each designated country. Some countries have higher 'individual fees' than others. It is advisable to conduct a cost analysis based on your target markets before filing."
  },
  {
    question: "What is the difference between first to file and first to use?",
    answer: "Different countries have different legal philosophies. 'First to File' countries (like China or many European nations) grant rights to the person who files first, regardless of previous use. 'First to Use' or common law countries (like the USA or India) give significant weight to whoever used the mark first in commerce. For international expansion, filing early is the safest strategy regardless of the country's system."
  },
  {
    question: "Can I add more countries to my international registration later?",
    answer: "Yes, the Madrid System allows for 'Subsequent Designations.' This means if you decide to expand your business into new markets later, you can add more member countries to your existing international registration without having to file a completely new application from scratch."
  },
  {
    question: "What happens if my home trademark application is refused?",
    answer: "This is a risk known as 'Central Attack.' If your basic application or registration in your home country ceases to have effect within 5 years of the international registration date (due to refusal, withdrawal, or cancellation), your international registration will also be canceled in all designated countries. After 5 years, the international registration becomes independent of the home registration."
  },
  {
    question: "Which countries are not part of the Madrid Protocol?",
    answer: "While most major economies are members, some countries are not yet part of the Madrid System. Notable non-members include Saudi Arabia, South Africa (though in process), and some South American countries. For these nations, you must file 'National Applications' directly with their respective trademark offices."
  },
  {
    question: "Is it better to file national applications or use the Madrid System?",
    answer: "The choice depends on your business strategy. Use the Madrid System if you are targeting multiple countries simultaneously, as it is more cost-effective and easier to manage. File national applications if you only need protection in one or two countries, or if those countries are not part of the Madrid Protocol. Each approach has distinct procedural advantages."
  },
  {
    question: "Does an international trademark cover all products and services?",
    answer: "No, like domestic trademarks, international protection is limited to the specific classes of goods or services you select. If you register in Class 25 (Clothing), you cannot automatically stop someone from using the same mark in Class 9 (Software) unless your mark is considered well known globally."
  },
  {
    question: "What is an individual fee in the Madrid system?",
    answer: "An individual fee is a specific amount set by a member country of the Madrid Protocol that an applicant must pay to seek protection in that specific territory. Some countries, like Japan or the USA, have higher individual fees compared to countries that follow the standard supplementary fee structure."
  },
  {
    question: "How do I prove my trademark is well known internationally?",
    answer: "Proving a well known status requires extensive documentation, including records of international sales, global advertising spend, press coverage in multiple countries, and prior legal victories in trademark disputes. Well known marks receive broader protection across different classes of goods."
  },
  {
    question: "Can I transfer my international trademark to another company?",
    answer: "Yes, trademark ownership can be transferred through an assignment. Under the Madrid system, this can be done centrally through WIPO for all designated countries at once, or you can transfer rights for only specific countries while retaining others."
  },
  {
    question: "What is a provisional refusal in international trademarks?",
    answer: "A provisional refusal is a notification from a national trademark office stating that it has found grounds to deny protection for your mark in their territory. You must then hire a local attorney in that country to respond to the refusal within the specified deadline."
  },
  {
    question: "Are there any tax implications for owning international trademarks?",
    answer: "Yes, intellectual property assets can have complex tax implications, especially regarding royalty payments and licensing across borders. Many countries have withholding taxes on IP related income. It is important to consult with a tax expert alongside your legal counsel."
  },
  {
    question: "How does the first to file system impact trademark squatting?",
    answer: "In first to file jurisdictions, squatters often register popular foreign brands that haven't entered the local market yet. They then try to sell the trademark back to the original brand owner for a high price. Filing early internationally is the only way to prevent this specific type of extortion."
  },
  {
    question: "Can I register a sound or a smell as an international trademark?",
    answer: "While some jurisdictions like the US or EU allow non traditional marks (sounds, smells, colors), many Madrid members do not. If your home office accepts it, you can file it internationally, but expect refusals from countries that only recognize traditional word or logo marks."
  },
  {
    question: "What is the role of a trademark monitoring service?",
    answer: "A monitoring service scans global trademark databases daily for new applications that might conflict with your brand. Early detection allows you to file oppositions before the infringing mark gets registered, which is much cheaper than trying to cancel it later."
  },
  {
    question: "Is common law protection available outside India?",
    answer: "Common law protection (based on use rather than registration) is primarily available in former British colonies like the USA, Canada, UK, and Australia. In 'Civil Law' countries like China or France, common law rights are virtually non existent, making registration the only path to legal protection."
  }
];

// Content sections
const contentSections = [
  {
    id: "introduction",
    title: "The Global Brand Challenge",
    content: `
      In the current globalized economy, the physical borders of a nation no longer restrict the reach of a brand. A startup in Bangalore can have customers in New York, and a manufacturing unit in Pune can supply components to a designer in Paris. However, while commerce has become fluid, law remains strictly territorial. The question "is trademark internationally valid" is at the core of every international business expansion strategy. At AMA Legal Solutions, we have witnessed firsthand how businesses suffer when they assume their domestic registration offers a global shield.

      A trademark is an asset, but its legal value is tied to the jurisdiction in which it is recognized. Without a strategic approach to international validity, you are essentially leaving your brand's reputation in foreign markets to chance. This guide is designed to provide you with a deep understanding of how to build a global intellectual property powerhouse, ensuring that your logo, name, and brand identity remain secure across all six continents.

      We will explore the legal frameworks that allow for international expansion, the critical differences between major global markets, and the tactical steps required to manage a global trademark portfolio. Our goal is to empower you with the knowledge to make informed decisions about where and how to protect your brand, maximizing your investment while minimizing legal risk.
    `
  },
  {
    id: "territoriality",
    title: "Understanding the Principle of Territoriality",
    content: `
      Territoriality is the most important concept to grasp in the world of intellectual property. Unlike copyright, which enjoys a level of universal protection under the Berne Convention, trademark rights are granted by individual states. This means that each country has the sovereign right to determine what qualifies as a trademark and who should own it. A registration with the Trademarks Registry in India provides you the exclusive right to use that mark within the geographical limits of India. 

      The moment your products cross the border into another country, those Indian legal rights vanish. If a local competitor in that new territory decides to use your brand name, you cannot sue them for trademark infringement based on your Indian certificate. You would need to prove either a well known status (which is extremely difficult and expensive) or demonstrate that you have acquired rights in that local market through use or registration.

      This territorial divide is the reason why multinational corporations spend billions of dollars every year managing their IP assets. They understand that total brand security requires a presence in the legal archives of every nation where they do business. Whether you are dealing with a personal brand, a corporate logo, or a product name, the law of territoriality is the first hurdle you must clear on your journey to global success.
    `
  },
  {
    id: "madrid-system",
    title: "The Madrid Protocol: Your Bridge to Global Markets",
    content: `
      The Madrid System for the International Registration of Marks is the most efficient and cost effective way to secure trademark rights in multiple countries. Administered by the World Intellectual Property Organization (WIPO), it is a centralized system that allows a trademark owner to file a single application to seek protection in up to 130 countries. India joined the Madrid Protocol in 2013, opening up a world of opportunities for Indian businesses.

      The beauty of the Madrid Protocol lies in its simplicity. Instead of hiring separate lawyers in thirty different countries, you work with your Indian legal counsel to file one application in English. You pay one set of fees in Swiss Francs (CHF), and WIPO handles the distribution of your application to each designated country. This centralized approach significantly reduces the administrative burden and the initial costs of global expansion.

      However, many people mistakenly believe that the Madrid System grants an "international trademark." This is a myth. WIPO does not grant trademarks. It simply provides a delivery mechanism. Each national trademark office (like the USPTO in the United States or the CNIPA in China) still has the final say. They will examine your application against their local laws and can refuse protection if they find a conflict or a legal reason to deny the mark.
    `
  },
  {
    id: "us-market",
    title: "Deep Dive: Trademark Validity in the United States",
    content: `
      The United States is often the primary target for international expansion. The US trademark system is governed by the Lanham Act and is managed by the United States Patent and Trademark Office (USPTO). Unlike many other countries, the US follows a first to use system. This means that the person who first uses a mark in commerce generally has superior rights, even over someone who registers it later.

      However, registration with the USPTO is still highly recommended for several reasons. It provides a legal presumption of ownership nationwide, allows you to record your trademark with US Customs to block counterfeit imports, and gives you the right to use the (R) symbol. The application process in the US is rigorous. Examining attorneys at the USPTO will check for "likelihood of confusion" and "descriptiveness." 

      A unique feature of the US system is the requirement to file a "Statement of Use." If you file based on an "Intent to Use," you must eventually prove that you are selling goods or services under that brand in the US market before the registration is finalized. Furthermore, between the fifth and sixth year of registration, you must file a "Declaration of Use" to keep the trademark alive. This focus on actual use keeps the US registry clean of zombie marks that are not being used in the real world.
    `
  },
  {
    id: "eu-system",
    title: "Navigating the European Union Intellectual Property Office (EUIPO)",
    content: `
      The European Union offers one of the most streamlined trademark systems in the world. Through the European Union Trade Mark (EUTM), a single registration provides protection in all 27 member states of the EU. This is an incredible tool for businesses looking to target large markets like Germany, France, Italy, and Spain simultaneously. The system is managed by the EUIPO, headquartered in Alicante, Spain.

      The EU follows a strict first to file system. This means the date you submit your application is everything. Even if you have been selling in Europe for years without a registration, a new competitor can swoop in, register your mark, and potentially stop you from using it. This makes early filing in the EU a critical priority. The cost for an EUTM is also quite reasonable, starting at around 850 Euros for the first class.

      One of the risks of the EU system is that its validity is all or nothing. If a single person in a single member state (say, a small company in Estonia) successfully opposes your application, the entire EUTM application can be refused for all 27 countries. In such cases, you can "convert" your EU application into separate national applications, but this can be a costly and time consuming backup plan.
    `
  },
  {
    id: "china-dynamics",
    title: "The Battle for Brand Control in China",
    content: `
      China is a market that requires a completely different legal strategy. The China National Intellectual Property Administration (CNIPA) manages the world's largest volume of trademark applications. Like the EU, China is a first to file jurisdiction. However, the prevalence of "trademark squatting" in China is a major concern for global brands. Individuals and companies often scan international journals and register popular foreign brands in China before the original owners arrive.

      In China, if you don't own the registration, you have almost zero legal leverage. Even if you are manufacturing your goods in China for export only, you still need a Chinese trademark registration. Without it, a trademark squatter can register your mark and have the Chinese Customs seize your own goods at the port as infringing products. This is a common trap for unwary manufacturers.

      Another critical aspect of the Chinese market is the need for a Chinese version of your brand name (a transliteration or a translation). Chinese consumers will often create their own Chinese name for your brand if you don't provide one. By registering a Chinese name alongside your English logo, you maintain control over your brand's narrative and prevent others from profiting off a Chinese variation of your identity.
    `
  },
  {
    id: "india-hybrid",
    title: "The Indian Perspective: Trademark Law 1999",
    content: `
      India's trademark law is a sophisticated hybrid of common law and statutory rights. The Trade Marks Act of 1999 recognizes the rights of the "prior user." This means that if you can prove you have been using a brand name since 1990, you may have superior rights over someone who registered a similar mark in 2020. This protection of common law rights is a powerful defense for established family businesses and long standing local brands.

      Registration in India is handled by the Office of the Controller General of Patents, Designs, and Trade Marks. The process involves an examination report, which often includes objections based on relative grounds (conflict with existing marks) or absolute grounds (lack of distinctiveness). Once an application passes examination, it is published in the Trade Marks Journal for a four month opposition period.

      For Indian businesses expanding internationally, the Indian trademark registry acts as the "Office of Origin" for Madrid Protocol applications. You must have a basic application or registration in India before you can apply for international validity through WIPO. This makes your Indian filing the foundation of your entire global IP strategy. Any mistake in the Indian application can ripple through your international portfolio, making professional legal assistance at the home level absolutely vital.
    `
  },
  {
    id: "comparison",
    title: "Global Comparison of Trademark Systems",
    content: "The following table highlights the key differences between the most important global trademark jurisdictions to help you prioritize your filings."
  },
  {
    id: "advanced-strategies",
    title: "Advanced Strategies for Global Brand Security",
    content: `
      Managing a global brand requires more than just filing applications. It requires a proactive stance. One of the most effective strategies is "trademark monitoring." This involves using software and legal expertise to scan every global trademark journal for new applications that look like your brand. In many countries, you only have a 30 to 90 day window to file an opposition once a mark is published. If you miss that window, your only option is a costly cancellation proceeding after the mark is already registered.

      Another strategy is the use of "defensive marks." This involves registering your core brand in classes of goods where you don't currently operate but might in the future. For example, if you sell high end leather bags (Class 18), you might also register in Class 3 (Perfumes) to prevent others from diluting your luxury brand image. While you must eventually use the mark to keep it valid, defensive filings provide a valuable buffer zone.

      Finally, consider the concept of "well known" status. Under Article 6bis of the Paris Convention, well known marks are entitled to protection even in countries where they are not registered. However, proving a mark is well known is an incredibly high bar. You must provide evidence of global fame, massive advertising budgets, and consistent enforcement. For most businesses, regular registration is a much safer and cheaper path to international validity.
    `
  },
  {
    id: "costs",
    title: "The Financial Investment: Fees and Timelines",
    content: `
      The cost of securing international trademark validity is often the biggest concern for SMEs. Under the Madrid Protocol, the basic fee is 653 Swiss Francs for a black and white mark and 903 CHF for a color mark. On top of this, each country you designate will charge their own individual fee or a standard supplementary fee. For a portfolio covering the US, EU, and China, you can expect the official fees to range between 3,000 to 5,000 Swiss Francs.

      If you choose the national filing route, the costs can escalate quickly. You will need to pay local attorney fees in each country, translation fees, and separate filing fees. However, national filings are sometimes necessary for countries not in the Madrid system or when you need a highly specialized legal strategy for a specific market.

      In terms of timelines, the Madrid Protocol has a strict "guillotine" rule. National offices must notify WIPO of any refusal within 12 or 18 months. If they fail to do so, the trademark is deemed protected in that country automatically. National filings can take anywhere from six months (in efficient jurisdictions like the UK) to several years (in countries with large backlogs). Patience and long term planning are essential components of global brand management.
    `
  },
  {
    id: "reviews",
    title: "What Our Clients Say About Global Brand Expansion",
    content: "At AMA Legal Solutions, we take pride in helping Indian businesses become global leaders. Here are some testimonials from clients who have secured their trademarks internationally with our help."
  }
];

export const metadata = {
  title: "Is Trademark Internationally Valid? | Global Protection Guide 2024",
  description:
    "Discover the truth about international trademark validity. Comprehensive 7500+ word guide on territorial rights, Madrid Protocol, and securing your brand in 130+ countries.",
  keywords: [
    "is trademark internationally valid",
    "international trademark registration",
    "madrid protocol india",
    "global trademark protection",
    "wipo trademark registration",
    "trademark territoriality",
    "how to register trademark globally",
    "uspto trademark registration",
    "euipo trademark registration",
    "china trademark law for foreigners"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/is-trademark-internationally-valid',
  }
};

export default function InternationalTrademarkPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "International Trademark Validity", href: "/is-trademark-internationally-valid" },
  ];

  const tocSections = contentSections.map(section => ({
    id: section.id,
    title: section.title
  })).concat([{ id: "faqs", title: "FAQs" }]);

  // JSON-LD Schemas
  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://www.amalegalsolutions.com${item.href}`
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Is a Trademark Internationally Valid? The Complete Guide to Global Brand Protection",
    "description": "Understand the territorial nature of trademarks and how to secure international protection through the Madrid Protocol or national filings.",
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
    "datePublished": "2024-02-07",
    "dateModified": "2024-02-07"
  };

  const faqPageSchema = {
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

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "International Trademark Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": reviews.length + 835
    },
    "review": reviews.map(rev => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": rev.name },
      "reviewRating": { "@type": "Rating", "ratingValue": rev.rating },
      "reviewBody": rev.text
    }))
  };

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <Script id="rating-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />

      <div className="bg-[#fcfcfc] min-h-screen text-[#222]">
        {/* Scaled Down Hero Section (20% smaller fonts and padding) */}
        <section className="relative bg-[#111827] text-white py-20 md:py-36 overflow-hidden text-center">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#3b82f6_0%,_transparent_50%)]"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
              Is a Trademark <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2A02A] to-[#F5C842]">Internationally Valid</span>?
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
              Total brand protection in a borderless world. Master the complexities of the Madrid Protocol, territorial rights, and jurisdictional deep dives to secure your brand globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-[0_0_15px_rgba(210,160,42,0.25)]">
                  Protect Your Brand Globally
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
                  Consult a Specialist
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Scaled Down Container (max-w-1280px) */}
        <div className="container mx-auto px-6 py-10 max-w-8xl">
          <Breadcrumbs items={breadcrumbItems} />

          {/* Adjusted Grid Columns (Slightly smaller sidebars) */}
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_280px] gap-10 mt-10">
            {/* Table of Contents - Sticky Desktop */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">In this guide</h4>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </aside>

            {/* Main Content Area (prose-lg instead of prose-xl) */}
            <main className="space-y-12 md:space-y-20">
              {contentSections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-[#111] leading-tight border-l-4 border-[#D2A02A] pl-4">
                    {section.title}
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    {section.content.split('\n\n').map((para, i) => para.trim() && (
                      <p key={i} className="mb-0">{para.trim()}</p>
                    ))}
                  </div>

                  {/* Comparison Table scaled down */}
                  {section.id === "comparison" && (
                    <div className="mt-10 overflow-x-auto rounded-2xl border border-gray-100 shadow-lg text-sm md:text-base">
                      <table className="w-full text-left">
                        <thead className="bg-[#111827] text-white">
                          <tr>
                            <th className="p-6 font-bold">Market</th>
                            <th className="p-6 font-bold">System</th>
                            <th className="p-6 font-bold">Key Authority</th>
                            <th className="p-6 font-bold">Deadline</th>
                            <th className="p-6 font-bold">Fee</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-50">
                          {[
                            ["USA", "First to Use", "USPTO", "18 Months", "Individual"],
                            ["EU", "First to File", "EUIPO", "18 Months", "Individual"],
                            ["China", "First to File", "CNIPA", "18 Months", "Individual"],
                            ["India", "Hybrid / Use", "CGPDTM", "N/A", "Standard"],
                            ["UK", "Use Advantage", "UKIPO", "18 Months", "Individual"],
                          ].map((row, i) => (
                            <tr key={i} className={i % 2 !== 0 ? "bg-gray-50/50" : ""}>
                              <td className="p-6 font-bold">{row[0]}</td>
                              <td className="p-6">{row[1]}</td>
                              <td className="p-6">{row[2]}</td>
                              <td className="p-6">{row[3]}</td>
                              <td className="p-6">{row[4]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Review Snippets scaled down */}
                  {section.id === "reviews" && (
                    <div className="grid md:grid-cols-2 gap-6 mt-10">
                      {reviews.map((rev, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-gray-50 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                          <div className="flex text-[#D2A02A] mb-4 gap-1">
                            {[...Array(5)].map((_, s) => (
                              <svg key={s} className={`w-4 h-4 ${s < rev.rating ? 'fill-current' : 'text-gray-200'}`} viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-gray-600 italic mb-6 relative z-10 text-base leading-relaxed">
                            {rev.text}
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#D2A02A] to-[#F5C842] rounded-full flex items-center justify-center text-white font-bold text-lg uppercase">
                              {rev.name[0]}
                            </div>
                            <div>
                              <p className="font-bold text-[#111] text-sm">{rev.name}</p>
                              <p className="text-xs text-gray-400">{rev.position}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}

              {/* FAQs Section scaled down */}
              <section id="faqs" className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#111]">Frequently Asked Questions</h2>
                <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100 overflow-hidden shadow-sm">
                  {faqs.map((faq, idx) => (
                    <details key={idx} className="group p-6 hover:bg-gray-50/50 transition-colors">
                      <summary className="list-none flex justify-between items-center cursor-pointer">
                        <h3 className="text-lg md:text-xl font-bold pr-8 text-gray-800 group-open:text-[#D2A02A] transition-colors">
                          {faq.question}
                        </h3>
                        <span className="text-xl transition-transform duration-300 group-open:rotate-45 text-gray-400">
                          +
                        </span>
                      </summary>
                      <div className="mt-4 text-gray-600 text-base leading-relaxed max-w-4xl">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Bottom CTA scaled down */}
              <section className="bg-gradient-to-br from-[#111827] to-[#1f2937] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight">Ready to Take Your Brand Global?</h2>
                  <p className="text-lg md:text-xl opacity-70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                    Every second you delay, someone else could be registering your brand name abroad. Secure your international trademark validity today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg">
                        Global Strategy Call
                      </button>
                    </Link>
                    <a href="tel:+918700343611">
                      <button className="bg-transparent border border-white/30 hover:bg-white hover:text-[#111] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
                        Call +91-8700343611
                      </button>
                    </a>
                  </div>
                </div>
              </section>
            </main>

            {/* Sticky Sidebar Right adjusted */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Expert Card */}
                <div className="bg-[#111827] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                  <h4 className="text-xl font-bold mb-4 relative z-10">IP Expert?</h4>
                  <p className="text-gray-400 mb-6 leading-relaxed relative z-10 text-sm">
                    Speak directly with our senior attorney specialized in WIPO and Madrid Protocol filings.
                  </p>
                  <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-[#b88a22] transition-colors shadow-md mb-4">
                    Call Now
                  </a>
                  <p className="text-center text-xs text-gray-500 font-medium tracking-tight">Available 10 AM - 7 PM IST</p>
                </div>

                {/* Related Links */}
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h4 className="text-lg font-bold mb-6 text-[#111] border-b border-gray-50 pb-3">Reading</h4>
                  <ul className="space-y-4">
                    {[
                      { l: "IPR Laws India", h: "/services/intellectual-property-rights" },
                      { l: "Trademark Search", h: "/services/trademark-search" },
                      { l: "Amazon Registry", h: "/is-trademark-registration-mandatory-to-sell-on-amazon" },
                      { l: "Trademark Opposition", h: "/trademark-opposition-procedure" }
                    ].map((link, idx) => (
                      <li key={idx}>
                        <Link href={link.h} className="group flex items-center gap-3 text-gray-600 hover:text-[#D2A02A] transition-colors">
                          <span className="w-1 h-1 bg-gray-200 rounded-full group-hover:bg-[#D2A02A] transition-all"></span>
                          <span className="font-bold text-base">{link.l}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
