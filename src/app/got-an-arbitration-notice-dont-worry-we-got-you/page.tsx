import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What should I do immediately after receiving an arbitration notice in India?",
    answer: "The first and most critical step is to not ignore the notice. In India, under the Arbitration and Conciliation Act, 1996, the clock starts ticking the moment you receive the notice. You should immediately consult a specialized legal expert like AMA Legal Solutions to review the claims, check the validity of the arbitration clause, and draft a formal response within the specified timeline, which is usually 30 days. Ignoring it can lead to an ex-parte award against you."
  },
  {
    question: "Is an arbitration notice the same as a court summons?",
    answer: "While it is not exactly the same as a civil court summons, an arbitration notice carries similar legal weight. It signifies the formal commencement of a legal dispute resolution process that is binding and enforceable by law. If the arbitration ends in an award, that award can be executed like a decree of a civil court. Therefore, it must be treated with the same level of seriousness as a court case."
  },
  {
    question: "Can a bank or NBFC unilaterally appoint an arbitrator?",
    answer: "No, a bank or financial institution cannot unilaterally appoint an arbitrator without your consent, as per the latest judgments from the Supreme Court of India. Any such appointment is often considered biased and legally invalid. If you receive a notice where the bank has already named their arbitrator, you have the right to challenge this and request a neutral appointment through the court under Section 11 of the Arbitration Act."
  },
  {
    question: "How long does the arbitration process usually take in India?",
    answer: "The Arbitration and Conciliation Act mandates that an arbitral award must be made within 12 months from the date the tribunal is constituted. This period can be extended by a further 6 months by mutual consent of the parties. This makes arbitration significantly faster than traditional court litigation, which can often drag on for many years."
  },
  {
    question: "What are the common grounds for receiving an arbitration notice?",
    answer: "Most arbitration notices in India are issued due to defaults in unsecured loans, credit card payments, business contract disputes, or employment agreement breaches. Since most modern financial and commercial contracts include an arbitration clause, lenders and companies prefer this route for faster recovery and dispute resolution compared to the civil courts."
  },
  {
    question: "Can I settle the dispute after receiving the arbitration notice?",
    answer: "Yes, receiving an arbitration notice is often used as a tactical move to bring the parties to the negotiating table. You can always negotiate a 'One Time Settlement' (OTS) even after the proceedings have begun. At AMA Legal Solutions, we often use the arbitration phase to negotiate substantial waivers for our clients, helping them settle their debts for a fraction of the original claim."
  },
  {
    question: "What happens if I lose the arbitration case?",
    answer: "If the arbitrator passes an award against you, you are legally bound to pay the amount specified. If you fail to do so, the other party can file an execution petition in a civil court to attach your bank accounts, property, or other assets. However, you do have the right to challenge the award in a higher court under Section 34 of the Arbitration Act if there were procedural irregularities or jurisdictional issues."
  },
  {
    question: "Do I need a lawyer for arbitration proceedings?",
    answer: "While the law does not strictly mandate a lawyer, it is highly inadvisable to represent yourself. Arbitration involves complex legal procedures, evidence handling, and interpretation of the Arbitration and Conciliation Act. Professional legal representation ensures that your rights are protected, biased appointments are challenged, and technical loopholes in the lender's claim are identified."
  },
  {
    question: "Where does the arbitration hearing take place?",
    answer: "The location (seat) of the arbitration is usually mentioned in the arbitration clause of the contract you signed. However, modern arbitration is increasingly conducted virtually via video conferencing, meaning you might not need to travel. If the location mentioned is highly inconvenient, a lawyer can sometimes argue for a more accessible venue or a virtual hearing."
  },
  {
    question: "What are the costs involved in arbitration?",
    answer: "The costs typically include the arbitrator's fee, administrative fees for the arbitration center (if applicable), and legal fees for your counsel. In many consumer cases, the lender initially pays the arbitrator's fee, but they may attempt to recover this from you if they win the case. Hiring AMA Legal Solutions often saves you significantly more in negotiated settlement amounts than the cost of our professional services."
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
      "name": "Got an Arbitration Notice",
      "item": "https://www.amalegalsolutions.com/got-an-arbitration-notice-dont-worry-we-got-you"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Got an Arbitration Notice? Don't Worry, We Got You | Legal Defense Guide",
  "description": "Received an arbitration notice from a bank, NBFC, or fintech app? Learn your legal rights, how to challenge unilateral appointments, and how to settle your debt legally. Expert guidance from AMA Legal Solutions.",
  "image": "https://www.amalegalsolutions.com/newAssets/logo/ama-white.svg",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2026-03-12"
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
  "@type": "LegalService",
  "name": "Arbitration Notice Defense Consultation",
  "image": "https://www.amalegalsolutions.com/newAssets/logo/ama-white.svg",
  "description": "Professional arbitration defense services to challenge biased appointments, respond to unfair claims, and negotiate settlements across India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "3450"
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
        "name": "Arjun Khanna"
      },
      "reviewBody": "I received an arbitration notice from a major bank for a personal loan default. I was terrified of losing my property. AMA Legal Solutions stepped in, challenged the bank's unilateral arbitrator appointment, and negotiated a settlement at 40% of the total amount. They truly had my back!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sangeeta Mehta"
      },
      "reviewBody": "Highly professional team. They handled my fintech app arbitration case with so much care. The harassment from recovery agents stopped the moment I hired them. If you get a notice, don't ignore it, just call AMA."
    }
  ]
};

export const metadata = {
  title: "Got an Arbitration Notice? Don't Worry, We Got You | Legal Relief India",
  description: "Received an arbitration notice for loan default or contract dispute? Don't worry, we got you. AMA Legal Solutions helps you challenge biased arbitrators and settle debts.",
  keywords: [
    "got an arbitration notice dont worry we got you",
    "arbitration notice India",
    "how to respond to arbitration notice",
    "arbitration notice from bank",
    "Section 21 arbitration notice",
    "unilateral appointment of arbitrator",
    "arbitration defense lawyer India",
    "NBFC arbitration notice help",
    "fintech loan arbitration",
    "AMA legal solutions arbitration"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/got-an-arbitration-notice-dont-worry-we-got-you',
  },
};

export default function ArbitrationNoticePage() {
  const tocSections = [
    { id: "introduction", title: "Don't Panic: We Have Your Back" },
    { id: "what-is-notice", title: "Understanding the Arbitration Notice" },
    { id: "legal-framework", title: "Law: Section 21 & Section 11" },
    { id: "immediate-steps", title: "Critical First Steps to Take" },
    { id: "unilateral-appointment", title: "Challenging Biased Arbitrators" },
    { id: "perils-of-ignoring", title: "Dangers of Ignoring the Notice" },
    { id: "response-strategy", title: "Drafting a Winning Response" },
    { id: "process-walkthrough", title: "Arbitration Process Explained" },
    { id: "section-34-challenge", title: "Challenging the Arbitral Award" },
    { id: "leveraging-settlement", title: "Settlement During Arbitration" },
    { id: "rights-and-protections", title: "Your Rights as a Consumer" },
    { id: "why-ama-legal", title: "Why Choose AMA Legal Solutions?" },
    { id: "pan-india-availability", title: "Serving All Cities in India" },
    { id: "client-testimonials", title: "Real Success Stories" },
    { id: "frequently-asked-questions", title: "FAQs on Arbitration" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Got an Arbitration Notice", href: "/got-an-arbitration-notice-dont-worry-we-got-you" },
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
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Got an Arbitration Notice? <span className="text-[#D2A02A]">Don't Worry, We Got You</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200">
              Stop stressing over legal threats. We specialize in defending your rights against banks and fintech lenders. From challenging biased appointments to negotiating massive debt waivers, we handle everything.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Talk to an Arbitration Expert Now
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Mobile App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our Legal Protection App</p>
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
            {/* Left Sidebar Table Of Contents */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* Mobile Table Of Contents */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Section: Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Don't Panic: We Have Your Back Against Legal Intimidation</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Finding a formal legal document in your mail or inbox with the words 'Arbitration Notice' can be an incredibly jarring experience. For most hardworking people in India, this is the first time they are encountering the complex machinery of private justice. Whether it is a dispute over a personal loan, a credit card default, or a business contract gone wrong, the psychological weight of a legal threat is immense. But here is the first thing you need to know: <strong>Got an arbitration notice? Don't worry, we got you.</strong>
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    At AMA Legal Solutions, we have spent years dismantling the fear that banks and financial institutions use to intimidate borrowers. Arbitration, while a serious legal proceeding, is not a death sentence for your finances or your peace of mind. It is a structured process that has many built in protections for the consumer, provided you have the right legal strategy and representation in your corner. We don't just 'handle' cases; we defend lives and restore futures.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    The modern legal landscape in India has shifted significantly. Regulators and the higher courts are increasingly scrutinizing how lenders use arbitration as a tool for recovery. You are not a helpless target. You are a party to an agreement with specific rights under the Arbitration and Conciliation Act, 1996. By choosing to stand with us, you are choosing to transform from a worried recipient into an empowered litigant who knows exactly how to fight back and win.
                  </p>
                </section>

                {/* Section: What is an Arbitration Notice? */}
                <section id="what-is-notice" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What Exactly is an Arbitration Notice?</h2>
                  <div className="bg-[#fff9e6] border-l-4 border-[#D2A02A] p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-gray-800 italic">
                      An arbitration notice is a formal communication sent by one party (the claimant) to another (the respondent) to signify the intent to resolve a dispute through arbitration instead of a traditional court. It is the legal mechanism that 'triggers' the dispute resolution clause in your original contract.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When you sign a loan agreement with a bank or a fintech app, there is almost always a clause buried in the fine print. This clause states that any dispute will not go to the regular civil courts but will be decided by an independent arbitrator. The notice you have received is the formal invocation of that clause. It usually contains the details of the dispute, the amount claimed, and often a suggestion for who the arbitrator should be.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    It is crucial to understand that this notice is not just a 'letter.' It has severe legal consequences. For instance, it determines the date on which the proceedings officially start for the purposes of the law of limitation. It also sets the stage for the appointment of the judge (arbitrator) who will decide your case. This is why you must never treat it as junk mail or a simple reminder. It is the beginning of a legal battle that you must be prepared to fight.
                  </p>
                </section>

                {/* Section: Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Legal Blueprint: Section 21 and Section 11</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    To effectively defend yourself, you must understand the rules of the game. In India, arbitration is governed by the Arbitration and Conciliation Act, 1996. Two sections of this act are particularly important for anyone who has just received a notice:
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <li>
                      <strong className="text-gray-900">Section 21 (Commencement of Proceedings):</strong> This section states that unless otherwise agreed, the arbitral proceedings in respect of a particular dispute commence on the date on which a request for that dispute to be referred to arbitration is received by the respondent. This is why the date on the notice and the date you received it are mission critical pieces of information.
                    </li>
                    <li>
                      <strong className="text-gray-900">Section 11 (Appointment of Arbitrators):</strong> This is perhaps the most contested area in consumer arbitration. If you and the bank cannot agree on who the arbitrator should be, Section 11 allows either party to approach the court (the High Court or the Supreme Court, depending on the case) to appoint a neutral arbitrator. This is your primary defense against 'kangaroo courts' where the bank tries to appoint its own paid experts to decide your fate.
                    </li>
                  </ul>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    Understanding these sections allows us to build a technical defense. For example, if the notice does not comply with Section 21, the entire proceeding could be potentially invalid. If the bank tries to bypass the court under Section 11, their award could be set aside later. We use these legal levers to put the pressure back on the lenders.
                  </p>
                </section>

                {/* Section: Immediate Steps */}
                <section id="immediate-steps" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Critical First Steps: What to Do in the First 24 Hours</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The moment you receive the notice, you are on a deadline. Most notices give you 30 days to respond. If you miss this window, the claimant can move to the next stage without your input. Here is exactly what you should do immediately:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border-t-4 border-t-[#D2A02A] shadow-sm">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">1. Verify the Receipt</h4>
                      <p className="text-gray-600">Note exactly how and when you received the notice. Was it by email, WhatsApp, or registered post? Keep everything, including the envelope or the screenshot of the delivery. This is your proof of when the clock started.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-t-4 border-t-[#D2A02A] shadow-sm">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">2. Scan for Deadlines</h4>
                      <p className="text-gray-600">Look for specific dates mentioned in the notice. Often, there is a deadline for you to agree to a proposed arbitrator or to file your response. Highlight these dates and never miss them.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-t-4 border-t-[#D2A02A] shadow-sm">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">3. Gather the Original Contract</h4>
                      <p className="text-gray-600">Find the original loan agreement or contract. We need to compare the arbitration clause in that contract with the one invoked in the notice. Even minor discrepancies can be grounds for a legal challenge.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-t-4 border-t-[#D2A02A] shadow-sm">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">4. Call AMA Legal Solutions</h4>
                      <p className="text-gray-600">Do not attempt to draft a response yourself. One wrong admission in your reply can cripple your defense. Let our experts review the document and draft a professional, strategic response that protects your interests.</p>
                    </div>
                  </div>
                </section>

                {/* Section: Unilateral Appointment */}
                <section id="unilateral-appointment" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Wait, Can They Just Choose Their Own Judge?</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This is the number one question we get from clients who receive an arbitration notice. Many notices say something like: 'Since you have defaulted, we have appointed Mr. X, a retired judge, as the sole arbitrator. The first hearing will take place at [Location] on [Date].'
                  </p>
                  <div className="bg-gray-900 text-white p-6 md:p-10 rounded-2xl mb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">⚖️</div>
                    <h4 className="text-[#D2A02A] font-bold text-2xl mb-4">The 'Unilateral Appointment' Defense</h4>
                    <p className="text-gray-300 leading-relaxed">
                      The Supreme Court of India has made it very clear in landmark cases like <strong>TRF Ltd. v. Energo Engineering</strong> and <strong>Perkins Eastman Architects DPC v. HSCC (India) Ltd.</strong> that a party who has an interest in the outcome of the dispute cannot unilaterally appoint an arbitrator. In simple terms: The bank cannot choose its own judge.
                    </p>
                    <p className="text-gray-300 leading-relaxed mt-4">
                      If the notice you received already names an arbitrator without your prior consent, that appointment is likely illegal. We specialize in filing objections against such biased appointments and moving the court to ensure a truly neutral person decides your case. For instance, if you are dealing with HDFC Bank, you can check our detailed breakdown on <Link href="/arbitration-for-hdfc-bank" className="text-[#D2A02A] hover:underline font-semibold">HDFC Bank Arbitration</Link> to learn about their specific processes and how to secure a settlement. Similarly, if you are dealing with ICICI Bank, check our guide on <Link href="/arbitration-for-icici-bank" className="text-[#D2A02A] hover:underline font-semibold">ICICI Bank Arbitration</Link> to resolve your online ODR case. Additionally, if you have received a notice from Axis Bank, read our guide on <Link href="/arbitration-for-axis-bank" className="text-[#D2A02A] hover:underline font-semibold">Axis Bank Arbitration</Link> to understand your settlement options. Furthermore, if you are dealing with State Bank of India, check our comprehensive guide on <Link href="/arbitration-for-sbi-bank" className="text-[#D2A02A] hover:underline font-semibold">SBI Bank Arbitration</Link> to resolve your dispute. Moreover, if you are facing action from Bajaj Finance, read our dedicated guide on <Link href="/arbitration-for-bajaj-bank" className="text-[#D2A02A] hover:underline font-semibold">Bajaj Finance Arbitration</Link> to stop harassment. If you are dealing with IDFC First Bank, explore our checklist on <Link href="/arbitration-for-idfc-bank" className="text-[#D2A02A] hover:underline font-semibold">IDFC Bank Arbitration</Link> to settle your loan under RBI guidelines. In addition, if you are facing arbitration from Kotak Mahindra Bank, review our step-by-step path on <Link href="/arbitration-for-kotak-mahindra-bank" className="text-[#D2A02A] hover:underline font-semibold">Kotak Mahindra Bank Arbitration</Link> to handle the notice legally. Similarly, if you are dealing with Yes Bank, consult our legal advice on <Link href="/arbitration-for-yes-bank" className="text-[#D2A02A] hover:underline font-semibold">Yes Bank Arbitration</Link> to resolve your dispute. Likewise, if you are facing action from RBL Bank, check our comprehensive guide on <Link href="/arbitration-for-rbl-bank" className="text-[#D2A02A] hover:underline font-semibold">RBL Bank Arbitration</Link> to settle your dues under the law. Additionally, if you are dealing with IndusInd Bank, consult our guide on <Link href="/arbitration-for-indusind-bank" className="text-[#D2A02A] hover:underline font-semibold">IndusInd Bank Arbitration</Link> to settle your dues legally. We break the bank's control over the process instantly.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Why do banks do this? Because they want a 'recovery machine' that rubber stamps their claims without looking at your hardships. They want someone who depends on them for future work to hear the case. By challenging this, we level the playing field. We ensure that your side of the story, the job loss, the medical bills, the unfair interest rates, is heard by someone who is actually fair.
                  </p>
                </section>

                {/* Section: Perils of Ignoring */}
                <section id="perils-of-ignoring" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Grave Dangers of Ignoring the Notice</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We understand the temptation. You are already struggling with money, you are being harassed by agents, and now there is more paperwork. It is easy to want to just hide the letter in a drawer and hope it goes away. But in the world of arbitration, silence is seen as consent.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    If you ignore the notice:
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-3">✘</span>
                      <p className="text-gray-700"><strong>Ex-Parte Award:</strong> The arbitrator can continue the proceedings without you. They will hear only the bank's side and pass an order (award) for the full amount plus massive interest and legal costs. You won't be there to object.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-3">✘</span>
                      <p className="text-gray-700"><strong>Waiver of Rights:</strong> By not responding, you may legally 'waive' your right to object to the arbitrator's jurisdiction or the validity of the arbitration agreement later. You lose your leverage before the fight even starts.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-3">✘</span>
                      <p className="text-gray-700"><strong>Direct Execution:</strong> Once the award is passed, it becomes a decree of the court. The bank can go straight to the execution court to attach your salary, freeze your bank accounts, or put your property up for auction. You won't get a second chance to explain your hardship then.</p>
                    </li>
                  </ul>
                  <p className="text-lg leading-relaxed text-gray-700 font-bold text-red-700">
                    Never forget: The bank's greatest wish is that you do nothing. When you don't respond, you make their job 100% easier. When you hire AMA Legal Solutions, you make it 100% harder for them to take your money and your peace.
                  </p>
                </section>

                {/* Section: Response Strategy */}
                <section id="response-strategy" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Drafting a Winning Response: More Than Just a 'No'</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A response to an arbitration notice is your first piece of evidence in the case. It needs to be precise, legalistic, and strategic. At AMA Legal Solutions, our advocates craft responses that do much more than just deny the claim. Our defense strategy includes:
                  </p>
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">A</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Jurisdictional Challenges</h3>
                        <p className="text-gray-700">We analyze if the arbitration clause is even valid. Was the contract properly stamped? Is the dispute even 'arbitrable' under Indian law? Many times, we can kill the case before it even starts on these technical grounds.</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">B</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Challenging the Arbitrator</h3>
                        <p className="text-gray-700">We explicitly refuse to consent to any unilaterally appointed arbitrator. We propose that the parties move the High Court for a neutral appointment, which immediately signals to the bank that you are not an easy target.</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 items-start bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl font-bold">C</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Detailed Denial of Calculations</h3>
                        <p className="text-gray-700">Banks often include 'hidden' charges, excessive penal interest, and flat out wrong calculations in their claims. We demand a forensic statement of accounts and challenge every single rupee that isn't transparently justified.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section: Process Walkthrough */}
                <section id="process-walkthrough" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Arbitration Journey: From Notice to Award</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    If the case proceeds, it follows a very specific timeline mandated by the 1996 Act. Knowing this timeline helps you plan your finances and your life without the constant anxiety of the unknown.
                  </p>
                  <div className="relative border-l-2 border-gray-200 ml-4 md:ml-8 space-y-10">
                    <div className="relative pl-8">
                      <div className="absolute -left-3 top-0 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white shadow-sm"></div>
                      <h4 className="font-bold text-xl text-gray-900">Stage 1: The Notice (Day 1)</h4>
                      <p className="text-gray-600">The claimant sends the notice invoking arbitration. You have 30 days to respond and agree (or object) to the arbitrator.</p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3 top-0 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white shadow-sm"></div>
                      <h4 className="font-bold text-xl text-gray-900">Stage 2: Constitution of Tribunal (Month 1-2)</h4>
                      <p className="text-gray-600">The arbitrator is officially appointed and accepts the case. They hold a 'preliminary meeting' to set the schedule for the rest of the case.</p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3 top-0 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white shadow-sm"></div>
                      <h4 className="font-bold text-xl text-gray-900">Stage 3: Pleadings (Month 2-4)</h4>
                      <p className="text-gray-600">The bank files a 'Statement of Claim.' We file a 'Statement of Defense' and perhaps a 'Counter Claim' if the bank has harassed you or violated RBI rules.</p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3 top-0 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white shadow-sm"></div>
                      <h4 className="font-bold text-xl text-gray-900">Stage 4: Evidence & Hearings (Month 4-10)</h4>
                      <p className="text-gray-600">Both sides present documents and witnesses. In most loan cases, this is done through written affidavits and virtual arguments to save costs.</p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3 top-0 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white shadow-sm"></div>
                      <h4 className="font-bold text-xl text-gray-900">Stage 5: The Award (Month 12)</h4>
                      <p className="text-gray-600">The arbitrator passes a final, written judgment. The law requires this to be done within 12 months of starting the case.</p>
                    </div>
                  </div>
                </section>

                {/* Section: Section 34 Challenge */}
                <section id="section-34-challenge" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What if the Order is Unfair? The Section 34 Shield</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Even after the arbitrator passes an award, you have one more layer of protection. Under Section 34 of the Act, you can approach the civil court to 'set aside' (cancel) the award. You cannot do this just because you don't like the decision, but you can do it if:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-[#D2A02A] mr-3 font-bold text-xl">✓</span> Biased Arbitrator
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-[#D2A02A] mr-3 font-bold text-xl">✓</span> Notice not properly served
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-[#D2A02A] mr-3 font-bold text-xl">✓</span> Award violates public policy
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-[#D2A02A] mr-3 font-bold text-xl">✓</span> Fraud or Corruption
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-[#D2A02A] mr-3 font-bold text-xl">✓</span> Arbitrator exceeded authority
                    </li>
                    <li className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <span className="text-[#D2A02A] mr-3 font-bold text-xl">✓</span> Conflict of interest
                    </li>
                  </ul>
                  <p className="text-lg leading-relaxed mt-6 text-gray-700">
                    If we find that the bank used a biased arbitrator or didn't give you a fair chance to present your case, we will not hesitate to move the court under Section 34. This often takes months or years in the regular courts, during which time the bank's award is essentially on hold (subject to certain conditions). This delay is a powerful tool to force the bank back to the settlement table.
                  </p>
                </section>

                {/* Section: Leveraging Settlement */}
                <section id="leveraging-settlement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Using Arbitration to Force a Massive Settlement</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This is our core expertise. We don't just fight for the sake of fighting. We use the arbitration process as a massive piece of leverage. Banks want quick recovery. If we make the arbitration difficult, challenge their arbitrator, and file detailed defenses highlighting their violations of RBI rules, the bank quickly realizes that a 'quick win' is impossible.
                  </p>
                  <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl">
                    <h3 className="text-2xl font-bold mb-4 text-[#D2A02A]">The Settlement Transformation</h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Lenders start by claiming 100% of the dues. When we enter the arena, we shift the conversation from 'How much can we grab' to 'What is the most we can realistically recover.' By aggressively defending the arbitration, we often force banks to offer <strong>One Time Settlements (OTS)</strong> where our clients pay as little as 30% to 50% of the total claim. The arbitration notice, which was once a source of terror, becomes the starting point of your financial freedom.
                    </p>
                  </div>
                </section>

                {/* Section: Rights and Protections */}
                <section id="rights-and-protections" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Inalienable Rights as an Indian Consumer</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    No legal notice can take away your basic human dignity. The RBI has issued strict guidelines for how banks must conduct themselves, even during legal disputes. If you receive an arbitration notice, you still have the right to:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8 text-sm md:text-base">
                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                      <h5 className="font-bold text-gray-900 mb-2 underline decoration-[#D2A02A] decoration-2">Freedom From Harassment</h5>
                      <p className="text-gray-600">Recovery agents cannot visit your home or office once you are represented by a lawyer. All communication must happen through us.</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                      <h5 className="font-bold text-gray-900 mb-2 underline decoration-[#D2A02A] decoration-2">Right to Privacy</h5>
                      <p className="text-gray-600">The bank cannot tell your neighbors, relatives, or boss about the arbitration. That is a violation of your privacy and can be countered legally.</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                      <h5 className="font-bold text-gray-900 mb-2 underline decoration-[#D2A02A] decoration-2">Right to a Fair Hearing</h5>
                      <p className="text-gray-600">The arbitrator must hear your evidence and your reasons for default. You cannot be silenced or ignored.</p>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                      <h5 className="font-bold text-gray-900 mb-2 underline decoration-[#D2A02A] decoration-2">Right to Official Records</h5>
                      <p className="text-gray-600">You are entitled to copies of every document filed by the bank and every order passed by the arbitrator. Total transparency is your right.</p>
                    </div>
                  </div>
                </section>

                {/* Section: Why AMA Legal */}
                <section id="why-ama-legal" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why AMA Legal Solutions is the Best Shield for You</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We aren't just lawyers; we are debt relief specialists who understand the Indian banking system inside out. We have handled thousands of arbitration cases across India, and we know exactly how to push the right buttons to get results.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">🎯</div>
                      <h4 className="text-xl font-bold mb-3 text-gray-900">Laser Focused Defense</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">We don't use templates. Every response is custom built for your specific financial hardship and the bank's specific errors.</p>
                    </div>
                    <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">🛑</div>
                      <h4 className="text-xl font-bold mb-3 text-gray-900">Stop Agent Menace</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">The calls stop. The visits stop. We become the high wall between you and the aggressive recovery machine.</p>
                    </div>
                    <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">💰</div>
                      <h4 className="text-xl font-bold mb-3 text-gray-900">Maximum Waivers</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Our goal is to save you as much money as possible. We negotiate from a position of legal strength to get you the lowest OTS percentage.</p>
                    </div>
                  </div>
                </section>

                {/* Section: Pan India Availability */}
                <section id="pan-india-availability" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving Every Corner of India Virtually and Locally</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Whether you are in a skyscraper in Mumbai or a family farm in Bihar, we are available to help you. Our digital legal platform allows us to serve clients across all 28 states and 8 union territories. Since most arbitration today is conducted through digital means, your location is no longer a barrier to getting the best legal defense in the country.
                  </p>
                  <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                    <h5 className="font-bold text-lg mb-4 text-center text-gray-700">Comprehensive Presence Across India</h5>
                    <div className="h-40 overflow-y-auto pr-4 text-xs md:text-sm text-gray-500 leading-loose scrollbar-thin scrollbar-thumb-[#D2A02A]">
                      <span className="font-bold text-gray-900">Metros & Tier 1:</span> Delhi, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad, Ahmedabad, Pune. <br/>
                      <span className="font-bold text-gray-900">Uttar Pradesh:</span> Lucknow, Kanpur, Ghaziabad, Agra, Varanasi, Meerut, Prayagraj, Bareilly, Aligarh, Moradabad, Saharanpur, Gorakhpur, Firozabad, Jhansi, Muzaffarnagar. <br/>
                      <span className="font-bold text-gray-900">Maharashtra:</span> Nagpur, Thane, Nashik, Kalyan-Dombivli, Vasai-Virar, Aurangabad, Navi Mumbai, Solapur, Amravati, Nanded, Kolhapur, Akola, Sangli. <br/>
                      <span className="font-bold text-gray-900">Gujarat:</span> Surat, Vadodara, Rajkot, Bhavnagar, Jamnagar, Junagadh, Gandhinagar, Anand, Bharuch. <br/>
                      <span className="font-bold text-gray-900">South India:</span> Visakhapatnam, Vijayawada, Guntur, Nellore, Kurnool, Rajahmundry, Tirupati, Mysore, Hubli-Dharwad, Mangalore, Belgaum, Gulbarga, Coimbatore, Madurai, Tiruchirappalli, Salem, Tirunelveli, Kochi, Thiruvananthapuram, Kozhikode. <br/>
                      <span className="font-bold text-gray-900">Rajasthan & Punjab:</span> Jaipur, Jodhpur, Kota, Bikaner, Ajmer, Udaipur, Ludhiana, Amritsar, Jalandhar, Patiala, Bathinda. <br/>
                      <span className="font-bold text-gray-900">East & Central:</span> Patna, Gaya, Bhagalpur, Muzaffarpur, Ranchi, Jamshedpur, Dhanbad, Bokaro, Raipur, Bhilai, Bilaspur, Bhopal, Indore, Jabalpur, Gwalior, Ujjain, Sagar. <br/>
                      <span className="font-bold text-gray-900">Uttarakhand & HP:</span> Dehradun, Haridwar, Roorkee, Haldwani, Shimla, Dharamshala. <br/>
                      <span className="font-bold text-gray-900">Other States:</span> Jammu, Srinagar, Guwahati, Agartala, Shillong, Imphal, Aizawl, Kohima, Gangtok, Panaji.
                    </div>
                  </div>
                </section>

                {/* Section: Client Testimonials */}
                <section id="client-testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Trust Earned Through Results</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {reviewSchema.review.map((rev, index) => (
                      <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg relative h-full flex flex-col">
                        <div className="absolute top-0 right-0 m-6 opacity-10">
                          <svg className="w-12 h-12 fill-current text-gray-400" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1 21L1 18C1 16.8954 1.89543 16 3 16H6C6.55228 16 7 15.5523 7 15V9C7 8.44772 6.55228 8 6 8H3C1.89543 8 1 7.10457 1 6V5C1 3.89543 1.89543 3 3 3H6C8.20914 3 10 4.79086 10 7V15C10 18.866 6.86599 22 3 22H1V21Z"/></svg>
                        </div>
                        <div className="flex text-[#D2A02A] mb-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-8 flex-grow leading-relaxed">
                          "{rev.reviewBody}"
                        </p>
                        <div className="flex items-center pt-6 border-t border-gray-100">
                          <div className="w-12 h-12 bg-gradient-to-tr from-[#D2A02A] to-[#b88a22] rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-md">
                            {rev.author.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{rev.author.name}</p>
                            <p className="text-xs text-gray-500 uppercase tracking-widest">Verified Client Success</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Section: FAQs */}
                <section id="frequently-asked-questions" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions on Arbitration Defense</h2>
                  <div className="grid gap-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="group bg-gray-50 rounded-2xl p-6 border border-transparent hover:border-[#D2A02A] hover:bg-white transition-all duration-300">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3 mt-1">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-7">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA Section */}
                <section className="bg-gradient-to-r from-[#1a202c] via-[#2d3748] to-[#1a202c] rounded-[2rem] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                      </pattern>
                      <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                  </div>
                  <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-5xl font-bold mb-6 leading-tight">Your Financial Future Matters More Than a Legal Notice.</h2>
                    <p className="text-base md:text-xl opacity-80 mb-12 font-light leading-relaxed">
                      Don't let the fear of arbitration steal your sleep. We have helped thousands of families stop harassment, challenge unfair claims, and settle their debts legally and with dignity. Let us show you the way out.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                      <Link href="/contact" className="contents">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_10px_20px_rgba(210,160,42,0.3)] text-lg">
                          Get a Free Legal Case Review Today
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="contents">
                        <button className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white/20 text-white font-bold py-4 px-12 rounded-full transition-all text-lg shadow-xl">
                          Urgent Helpline: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60 text-xs md:text-sm uppercase tracking-[0.2em]">
                      <span>100% Legal Protection</span>
                      <span>•</span>
                      <span>RBI Guideline Enforcement</span>
                      <span>•</span>
                      <span>Privacy Guaranteed</span>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Urgent Arbitration Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior arbitration defense lawyers today.
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

                {/* Quick Links */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Loan Settlement
                      </Link>
                    </li>
                    <li>
                      <Link href="/rbi-new-recovery-guidelines-july-2026" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> RBI Recovery Rules
                      </Link>
                    </li>
                    <li>
                      <Link href="/loan-recovery-agent-harassment-complaint-online" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Stop Agent Harassment
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Civil Litigation
                      </Link>
                    </li>
                  </ul>
                  
                  {/* App Store Links */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
                    <div className="flex flex-col gap-3">
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
                          className="w-full h-auto max-w-[130px]"
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
                          className="w-full h-auto max-w-[130px]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          
          {/* Banks Grid */}
          <div className="mt-16">
            <section className="my-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Banks & Apps we handle Arbitration Defense against
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                <Link 
                  href="/services/loan-settlement/sbi-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">SBI</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/hdfc-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">HDFC</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/icici-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">ICICI</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/kotak-mahindra"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Kotak Mahindra</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/idfc-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">IDFC</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/yes-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Yes Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/bajaj-finserv"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Bajaj Finserv</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/axis-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Axis Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/bank-of-baroda"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Bank of Baroda</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/hero-fincorp"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Hero Fincorp</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/aditya-birla"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Aditya Birla</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/poonawalla-fincorp"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Poonawalla Fincorp</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/tata-capital"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Tata Capital</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/federal-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Federal Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/payu-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">PayU Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/krazybee"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">KrazyBee</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/au-small-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">AU Small Finance Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/northern-arc"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Northern Arc</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/dmi-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">DMI Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/piramal-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Piramal Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/dbs-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">DBS Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/south-indian-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">South Indian Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/si-creva"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Si Creva (Kissht/Ring)</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/stashfin"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Stashfin</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/l-and-t-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">L&T Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/american-express"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">American Express</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/standard-chartered"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Standard Chartered</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/true-credits"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">True Credits (TrueBalance)</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/moneyview"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Moneyview</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/vivriti-capital"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Vivriti Capital</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/kisetsu-saison-finance"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Kisetsu Saison Finance</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/indusind-bank"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">IndusInd Bank</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/smfg-india-credit"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">SMFG India Credit</span>
                </Link>
                <Link 
                  href="/services/loan-settlement/fibe"
                  className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
                >
                  <span className="text-gray-800 font-medium text-sm leading-tight block">Fibe (EarlySalary)</span>
                </Link>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700">
                  Our arbitration defense services are available for all major banks and fintech lenders in India
                </p>
              </div>
            </section>
          </div>

          <div className="mt-16">
            <GenericStatesGrid 
              serviceName="Arbitration Defense" 
              servicePath="arbitration" 
            />
          </div>
        </div>
      </div>
    </>
  );
}
