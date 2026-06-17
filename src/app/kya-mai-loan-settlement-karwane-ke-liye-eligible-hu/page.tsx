import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Kya mai loan settlement karwane ke liye eligible hu?",
    answer: "Aap tabhi eligible hote hain jab aapka default 90 days se zyada ho chuka ho, loan unsecured ho (jaise personal loan ya credit card), aur aapke paas genuine financial hardship (jaise job loss, salary cut, ya medical emergency) ka solid proof ho. AMA Legal Solutions isme aapki eligibility assessment aur bank communication me help karta hai."
  },
  {
    question: "Kya personal loan settlement karwana legal hai India me?",
    answer: "Haan, India me loan settlement karwana poori tarah se legal hai. RBI guidelines ke mutabik banks aur NBFCs ke paas 'One-Time Settlement' (OTS) ka option hota hai jisse woh non-willful defaulters ke outstanding dues ka kuch hissa waive off kar sakte hain."
  },
  {
    question: "Settlement ke liye kitne din ka default hona zaroori hai?",
    answer: "Minimum 90 days (3 mahine) ka payment default hona chahiye, jiske baad bank account ko NPA (Non-Performing Asset) classify karta hai. Is classification ke baad hi bank settlement process shuru karne ke liye raazi hota hai."
  },
  {
    question: "Kya secured loan (home/car loan) ka settlement ho sakta hai?",
    answer: "Secured loans ka settlement bohot mushkil hota hai kyunki bank ke paas aapki property ya vehicle collateral ke roop me hoti hai. Aise cases me bank settlement ke bajaye asset possession par focus karta hai. Halanki, legal guidance se restructuring ya repayment tenure extension negotiate kiya ja sakta hai."
  },
  {
    question: "Loan settlement se CIBIL score par kya farq padta hai?",
    answer: "Loan settlement se aapke credit report par 'Settled' ka tag lag jata hai aur aapka CIBIL score lagbhag 50-100 points gir jata hai. Isse future me loan milna mushkil ho jata hai. Halanki, AMA Legal Solutions ki help se aap legal compliance ke sath settle karke dheere-dheere apna credit score wapas rebuild kar sakte hain."
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
      "name": "Kya Mai Loan Settlement Karwane Ke Liye Eligible Hu?",
      "item": "https://www.amalegalsolutions.com/kya-mai-loan-settlement-karwane-ke-liye-eligible-hu"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Kya Mai Loan Settlement Karwane Ke Liye Eligible Hu? Eligibility & Rules",
  "description": "Struggling with unpaid debt? Read this comprehensive guide to understand loan settlement eligibility in India under RBI guidelines with AMA Legal Solutions.",
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
  "datePublished": "2026-06-17",
  "dateModified": "2026-06-17"
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

// Review Schema matching home page metrics
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Eligibility Consulting",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Evaluate your eligibility for One-Time Settlement (OTS) on unsecured personal loans and credit cards under RBI guidelines.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "910"
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
        "name": "Samrat Basu"
      },
      "reviewBody": "Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Nikka Kheda"
      },
      "reviewBody": "I would like to thanks each member of this firm of helping me and to get out the debt problem without hassle my loan settlement was done easily because of you all."
    }
  ]
};

export const metadata = {
  title: "Kya Mai Loan Settlement Eligible Hu? | AMA Legal Solutions",
  description: "Check your loan settlement eligibility under RBI guidelines. Learn when banks approve One-Time Settlement (OTS) for personal loans & credit cards.",
  keywords: [
    "kya mai loan settlement karwane ke liye eligible hu",
    "loan settlement eligibility",
    "one-time settlement",
    "rbi guidelines for loan settlement",
    "personal loan default settlement eligibility",
    "ama legal solutions",
    "anuj anand malik",
    "sector 57 gurugram"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/kya-mai-loan-settlement-karwane-ke-liye-eligible-hu',
  },
};

export default function LoanSettlementEligibilityPage() {
  const tocSections = [
    { id: "intro", title: "Introduction" },
    { id: "direct-answer", title: "Direct Eligibility Check" },
    { id: "eligibility-rules", title: "Key Eligibility Criteria" },
    { id: "secured-vs-unsecured", title: "Unsecured vs Secured Debt" },
    { id: "rbi-hardship", title: "RBI Hardship Framework" },
    { id: "eligibility-table", title: "Eligibility Scenario Matrix" },
    { id: "harassment", title: "Handling Recovery Agents" },
    { id: "ama-process", title: "AMA Legal Settlement Process" },
    { id: "testimonials", title: "What Our Clients Say" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Eligibility Check", href: "/kya-mai-loan-settlement-karwane-ke-liye-eligible-hu" },
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
        <div className="relative bg-[#1a202c] text-white overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            {/* Google Review Snippet */}
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <Image src="/newAssets/google.png" alt="Google" width={60} height={20} className="h-4 w-auto object-contain opacity-90" />
                <div className="w-px h-4 bg-white/20"></div>
                <div className="flex text-[#D2A02A]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] md:text-sm font-medium tracking-wide">4.9/5 Rating | 910+ Dues Resolved</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-0">
              Kya Mai <span className="text-[#D2A02A]">Loan Settlement</span> Karwane Ke Liye Eligible Hu?
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Know your loan settlement eligibility under RBI rules. Speak with expert legal advisors at AMA Legal Solutions, led by Advocate Anuj Anand Malik. Call 8700343611.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Eligibility Check
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />

          {/* App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
            <div className="flex gap-4">
              <Link 
                href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/appstore.svg" 
                  alt="Get it on Google Play" 
                  width={130} 
                  height={36}
                  className="w-[120px] h-auto"
                />
              </Link>
              <Link 
                href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/playstore.svg" 
                  alt="Download on App Store" 
                  width={130} 
                  height={36}
                  className="w-[120px] h-auto"
                />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Column - TOC */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column - Main Content */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                 <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction & Direct Answer Box */}
                <section id="intro" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 border-l-8 border-[#D2A02A] pl-6">
                    Loan Settlement Eligibility Kya Hai?
                  </h2>
                  
                  {/* Direct Answer Box (50 words optimized for answer engines) */}
                  <div id="direct-answer" className="bg-amber-50 border-l-4 border-[#D2A02A] p-6 rounded-r-xl mb-8 scroll-mt-32">
                    <p className="text-gray-900 font-medium leading-relaxed text-base md:text-lg">
                      To be eligible for a loan settlement in India, you must have defaulted on payments for at least 90 days, resulting in NPA classification. Lenders offer One-Time Settlement (OTS) only for unsecured personal loans or credit cards if you prove genuine financial hardship like job loss, business failure, or illness.
                    </p>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Financial emergencies bina bataaye aati hain. Jab koi borrower apni naukri kho deta hai, business me nuksaan uthata hai, ya kisi gambhir bimari ka shikaar ho jata hai, tab monthly loan EMIs aur credit card payments ko time par chukana impossible ho jata hai. Aisi sthiti me, banks aur NBFCs ke sath outstanding debt ko settle karna hi ekmatra practical raasta bachta hai. Lekin sabse bada sawal jo har borrower ke dimaag me aata hai woh hai: <strong>"Kya mai loan settlement karwane ke liye eligible hu?"</strong>
                    </p>
                    <p>
                      Loan settlement koi automatic right nahi hai jo har defaulter ko mil sake. Yeh bank aur borrower ke beech ek mutual negotiation process hai jisme bank outstanding amount ke ek hisse ko write-off (maaf) karne ke liye taiyaar hota hai. Lenders yeh faisla bohot sochna-samajhna aur borrower ke hardship conditions ko fully verify karne ke baad hi karte hain. Isliye, agar aap loan default ki kagar par hain ya pehle se default kar chuke hain, toh aapko apni <Link href="/services/loan-settlement" className="text-[#D2A02A] font-semibold underline">loan settlement eligibility</Link> ko detail me samajhna behad zaroori hai.
                    </p>
                    <p>
                      Yahan <strong>AMA Legal Solutions</strong> me, hum borrowers ko unke legal rights aur CIBIL recovery options ke bare me guide karte hain. Humare founder <strong>Anuj Anand Malik</strong> aur unki team Gurgaon Sector 57 se operate karti hai aur unhone hazaron borrowers ko credit card aur personal loan ke maamle me legal relief dilwayi hai. Hum aapko batayenge ki kis tarah aap un-necessary late fees aur legal harassment se bachkar banks se correct settlement offer le sakte hain.
                    </p>
                  </div>
                </section>

                {/* Key Eligibility Criteria */}
                <section id="eligibility-rules" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Defaulter Ke Liye Eligibility Criteria (पात्रता नियम)
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Agar aap bank se settlement ki guhaar lagana chahte hain, toh aapko nimnlikhit criteria ko satisfy karna hoga. Bank kisi bhi aam case me bina thos legal aur financial wajeh ke settlement accept nahi karte:
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900">1. Default Ka Duration (Minimum 90 Days)</h3>
                    <p>
                      Jab tak aapki EMI overdue nahi hoti, tab tak aap settlement ke liye apply nahi kar sakte. Bank aapko default category me tabhi dalte hain jab aap lagataar teen mahine (90 days) tak koi payment nahi karte. 90 din pure hone ke baad, bank account ko <Link href="/understanding-non-performing-assets-npa-what-happens-next-your-complete-guide" className="text-[#D2A02A] font-semibold underline">NPA classification</Link> me daal diya jata hai. Is category me aane ke baad hi settlement ke discussions shuru kiye ja sakte hain.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900">2. Genuine Financial Hardship (वास्तविक आर्थिक तंगी)</h3>
                    <p>
                      Bank aapki eligibility ko evaluate karte waqt sabse pehle default ka reason check karega. Agar aap jaan-boojhkar payment nahi kar rahe hain toh use "Willful Default" mana jayega aur bank aapke khilaf recovery ke legal actions shuru karega. Settlement sirf tabhi milti hai jab aap genuine financial hardship show kar sakein, jaise:
                    </p>
                    <ul>
                      <li>Naukri chale jana (Sudden job loss or layoff)</li>
                      <li>Salary cut ya income source puri tarah band ho jana</li>
                      <li>Ghar me kisi member ki bimari ya medical emergency jisme saving kharch ho gayi ho</li>
                      <li>Business me bada loss ya shop/kirana band ho jana</li>
                      <li>Family breadwinner ki achanak death hona</li>
                    </ul>
                    <h3 className="text-xl font-semibold text-gray-900">3. Repayment Capacity Ka Na Hona</h3>
                    <p>
                      Bank aapki complete financial profile check karega. Agar aapke bank statements me regular transactions chal rahe hain aur aapke paas sufficient savings hain, toh bank aapko eligible nahi manega. Aapko bank ko convince karna hoga ki aapke paas poora loan chukane ke resources nahi hain aur aap sirf ek reduced lump-sum <Link href="/one-time-settlement-ots-legal-assistance" className="text-[#D2A02A] font-semibold underline">one-time settlement (ots)</Link> hi afford kar sakte hain.
                    </p>
                  </div>
                </section>

                {/* Secured vs Unsecured Debt */}
                <section id="secured-vs-unsecured" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Secured vs. Unsecured Loans: Kiska Settlement Aasan Hai?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Loan settlement eligibility me loan ka type sabse critical factor hota hai. Sabhi prakar ke loans ko aasaani se settle nahi kiya ja sakta:
                    </p>
                    <p>
                      <strong>Unsecured Loans:</strong> Personal loans, credit cards, digital app-based loans, aur study loans unsecured category me aate hain. Kyunki inme bank ke paas security (collateral) ke roop me koi property ya gold nahi hota, isliye inka settlement sabse aasan hota hai. Agar aap inme default karte hain aur genuine hardship proof dikhate hain, toh bank 30% se le kar 70% tak ka outstanding discount de kar <Link href="/credit-card-settlement-process-india" className="text-[#D2A02A] font-semibold underline">credit card settlement process</Link> complete kar leta hai.
                    </p>
                    <p>
                      <strong>Secured Loans:</strong> Home loans, car loans, aur gold loans secured category me aate hain. In loans me bank ke paas collateral asset hota hai jise SARFAESI Act ke tehat kabje me lekar auction (neelaami) kiya ja sakta hai. Isliye, secured loans ke case me settlement milna behad mushkil hota hai jab tak collateral ki value outstanding debt se bohot kam na ho. Aise cases me, bank restructuring ya tenure extension par focus karte hain, jo ki <strong>AMA Legal Solutions</strong> ke legal experts negotiate karwa sakte hain.
                    </p>
                  </div>
                </section>

                {/* RBI Hardship Framework */}
                <section id="rbi-hardship" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    RBI Guidelines For Loan Settlement Eligibility
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Reserve Bank of India (RBI) ne commercial banks aur NBFCs ke liye strict customer protection guidelines banayi hain. RBI ke mutabik:
                    </p>
                    <ul>
                      <li>Defaulters ko do categories me banta jata hai: Willful Defaulters (jo paisa hone ke baad bhi nahi dete) aur Non-Willful Defaulters (jo majboori me default karte hain). RBI guidelines keval non-willful defaulters ko hi compromise settlement ke liye qualify karti hain.</li>
                      <li>Defaulters ke sath badtameezi karna ya unke references ko call karke badnaam karna illegal hai. Lenders ko strict ethical standards maintain karne hote hain under the RBI Fair Practice Code. Aap humari detail guide <Link href="/what-are-the-rbi-guidelines-for-recovery-agents-in-india" className="text-[#D2A02A] font-semibold underline">RBI guidelines for recovery agents</Link> me iske bare me jaan sakte hain.</li>
                      <li>Agar bank ne aapka account NPA classify kar diya hai, toh bank compromise settlement ya One-Time Settlement offer karne ke liye fully authorized hai. Isse bank ka bad debt recover ho jata hai aur borrower legal liability se mukt ho jata hai.</li>
                    </ul>
                  </div>
                </section>

                {/* Scenario Matrix Table */}
                <section id="eligibility-table" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Eligibility Scenario Matrix
                  </h2>
                  <div className="overflow-x-auto my-6">
                    <table className="min-w-full bg-white border border-gray-200 text-sm md:text-base">
                      <thead>
                        <tr className="bg-gray-100 border-b border-gray-200">
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Loan Category</th>
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Default Period</th>
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Hardship Evidence</th>
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Settlement Probability</th>
                          <th className="py-3 px-4 text-left font-semibold text-gray-700">Expected Dues Waiver</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-3 px-4 font-semibold text-[#D2A02A]">Credit Card Debt</td>
                          <td className="py-3 px-4">90+ Days</td>
                          <td className="py-3 px-4">Medical Bills / Job Loss Certificate</td>
                          <td className="py-3 px-4 text-green-600 font-medium">Very High</td>
                          <td className="py-3 px-4">50% - 80%</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-3 px-4 font-semibold text-[#D2A02A]">Unsecured Personal Loan</td>
                          <td className="py-3 px-4">120+ Days</td>
                          <td className="py-3 px-4">Salary slips showing unpaid leave / Business loss</td>
                          <td className="py-3 px-4 text-green-600 font-medium">High</td>
                          <td className="py-3 px-4">40% - 70%</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="py-3 px-4 font-semibold text-[#D2A02A]">Digital App Loans</td>
                          <td className="py-3 px-4">90+ Days</td>
                          <td className="py-3 px-4">Income statements / Pay cut letter</td>
                          <td className="py-3 px-4 text-green-600 font-medium">High</td>
                          <td className="py-3 px-4">40% - 60%</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-semibold text-[#D2A02A]">Secured Home / Auto Loan</td>
                          <td className="py-3 px-4">180+ Days</td>
                          <td className="py-3 px-4">Permanent disability / Catastrophic financial ruin</td>
                          <td className="py-3 px-4 text-red-600 font-medium">Low (Restructuring Preferred)</td>
                          <td className="py-3 px-4">10% - 30% (Rare cases)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Handling Recovery Agents */}
                <section id="harassment" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Loan Recovery Agent Harassment Se Kaise Bachein?
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Defaulters ke sath hone wali sabse badi pareshani hoti hai bank ya NBFC agents ki dhar-pakar aur badtameezi. Lenders ke agent aksar references ko call karte hain, WhatsApp par badnaam karne ki dhamki dete hain, aur bina consent ke ghar me ghus aate hain. Yeh sab <Link href="/loan-recovery-agents-harassment-complaint" className="text-[#D2A02A] font-semibold underline">loan recovery agent harassment</Link> ki shreni me aata hai aur iske khilaf immediate action liya ja sakta hai.
                    </p>
                    <p>
                      <strong>AMA Legal Solutions</strong> aisi sthiti me aapka legal armor banta hai. Hum bank ko ek formal legal notice bhejte hain jo unhe direct aapko target karne se rokta hai. Humare Gurgaon office se bhejaye gaye notices ke baad bank agents ke illegal calls band ho jate hain aur banking representatives ko hamare legal team ke sath formal legal channels ke through coordinate karna padta hai.
                    </p>
                  </div>
                </section>

                {/* AMA Legal Settlement Process */}
                <section id="ama-process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    How AMA Legal Solutions Helps in Your Settlement
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Agar aap settlement karwane ke liye eligible hain, toh humara structured approach aapke financial burden ko minimal amount par close karne me help karega:
                    </p>
                    <ol>
                      <li><strong>Debt Portfolio Analysis:</strong> Sabse pehle hum aapke sabhi active personal loans aur credit cards ki detailed study karte hain aur check karte hain ki kis bank ke sath settlement hone ki kitni chance hai. Humare <Link href="/loan-settlement-amount-calculator" className="text-[#D2A02A] font-semibold underline">settlement amount calculator</Link> ke calculation framework se hum target settlement values nikalte hain.</li>
                      <li><strong>Hardship File Compilation:</strong> Hum aapke sabhi proof documents (medical reports, layoff letters, bank statements) ko organize karte hain jo bank ke legal team aur credit managers ke samne ek clear non-willful default ka proof bante hain.</li>
                      <li><strong>Direct Mediation & Negotiation:</strong> Hum direct banks aur NBFCs ke credit managers ke sath formal communication establish karte hain aur 50% se 80% tak ke waivers ke liye negotiate karte hain.</li>
                      <li><strong>NOC Validation:</strong> Settlement letter aane ke baad, hum check karte hain ki kya bank ne terms conditions correct rakhi hain ya nahi. Settlement final hone ke baad hum bank se official 'No Dues Certificate' (NOC) claim karte hain.</li>
                    </ol>
                    <p>
                      Humare legal processes se aapka <Link href="/how-to-improve-cibil-score-after-loan-settlement" className="text-[#D2A02A] font-semibold underline">CIBIL score impact</Link> minimal hota hai aur aap future me credit score ko dheere-dheere rebuild karne ke liye qualify ho pate hain.
                    </p>
                  </div>
                </section>

                {/* Client Success Stories & Testimonials (Direct Reviews from Homepage) */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    What Our Clients Say (Success Stories)
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex text-[#D2A02A] mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                        "I would like to thanks each member of this firm of helping me and to get out the debt problem without hassle my loan settlement was done easily because of you all."
                      </p>
                      <h4 className="font-bold text-gray-900 text-sm">- Nikka Kheda</h4>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex text-[#D2A02A] mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                        "I’m truly impressed with AMA legal solutions, services. They made the loan settlement process so smooth and stress-free. The team is professional, transparent, and genuinely cares about solving customer issues. Highly recommended!"
                      </p>
                      <h4 className="font-bold text-gray-900 text-sm">- Vinod Marskole</h4>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex text-[#D2A02A] mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                        "Recommending Anuj in itself is not enough. From the very first meeting he had been patient, attentive and genuinely committed to helping me understand everystep of the legal process in regards to settlement. He stood like a rock beside me."
                      </p>
                      <h4 className="font-bold text-gray-900 text-sm">- Samrat Basu</h4>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex text-[#D2A02A] mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                        "I had a very good experience with AMA Legal Solutions for my credit card settlement. Their team is highly professional, supportive, and transparent throughout the process. They guided me step by step and helped me close my credit card."
                      </p>
                      <h4 className="font-bold text-gray-900 text-sm">- deepak</h4>
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions (FAQs)
                  </h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column - Side Panel */}
            <div className="sticky top-24 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Eligibility Consultation</h3>
                <p className="text-xs text-gray-500 mb-4">Contact Advocate Anuj Anand Malik for legal check.</p>
                <div className="bg-[#D2A02A]/10 text-[#D2A02A] py-2 px-4 rounded-xl font-bold text-sm mb-4">
                  Call: +91 8700343611
                </div>
                <Link href="/contact">
                  <button className="w-full bg-[#30261C] hover:bg-black text-white font-bold py-2.5 rounded-xl text-sm transition-colors">
                    Send Query Online
                  </button>
                </Link>
              </div>

              {/* App Showcase Card */}
              <div className="bg-[#30261C] text-white p-6 rounded-2xl shadow-sm text-center">
                <h3 className="text-base font-bold mb-1" style={{ color: 'rgba(210, 158, 13, 0.9)' }}>AMA Legal App</h3>
                <p className="text-xs text-gray-300 mb-4">Monitor cases & settlement letters on your phone.</p>
                <div className="flex flex-col gap-2.5 items-center justify-center">
                  <Link 
                    href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                    target="_blank"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image 
                      src="/newAssets/appstore.svg" 
                      alt="Google Play" 
                      width={120} 
                      height={34}
                      className="w-[110px] h-auto"
                    />
                  </Link>
                  <Link 
                    href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                    target="_blank"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image 
                      src="/newAssets/playstore.svg" 
                      alt="App Store" 
                      width={120} 
                      height={34}
                      className="w-[110px] h-auto"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
