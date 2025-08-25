import Link from "next/link";
import Script from "next/script";

// FAQ data for rendering
const faqs = [
  {
    question: "What types of criminal law services do you provide?",
    answer: "We provide comprehensive criminal law services including criminal defense, bail applications, criminal litigation, white-collar crime defense, cybercrime cases, and criminal appeals. Our criminal lawyers handle all aspects of criminal law."
  },
  {
    question: "How quickly can you help with bail applications?",
    answer: "We provide immediate assistance with bail applications including anticipatory bail, regular bail, and interim bail. Our criminal lawyers work efficiently to secure bail and protect your rights throughout the legal process."
  },
  {
    question: "Can you handle white-collar crime cases?",
    answer: "Yes, we specialize in white-collar crime defense including fraud cases, corruption charges, economic offenses, and corporate crime defense with expertise in complex criminal investigations and proceedings."
  },
  {
    question: "Do you provide criminal appeal services?",
    answer: "Absolutely. We handle criminal appeals, revision petitions, and represent clients in higher courts including High Court and Supreme Court appeals with expertise in criminal appellate procedures."
  }
];

// WebPage Schema with FAQ content for SEO
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Criminal Law Legal Services in India",
  "description": "Expert criminal lawyers in India. AMA Legal Solutions provides criminal defense, bail applications, and criminal litigation services.",
  "url": "https://amalegalsolutions.com/services/criminal-law",
  "mainEntity": {
    "@type": "FAQPage",
    "name": "Criminal Law Services FAQs",
    "description": "Frequently asked questions about criminal law services, criminal defense, and criminal litigation in India",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
};

export const metadata = {
  title: "Criminal Lawyers in India | FIR & Cyber Crime Defense – AMA Legal Solutions",
  description:
    "Expert criminal lawyers in India. AMA Legal Solutions provides criminal defense, FIR assistance, cyber crime protection, and police case representation. Book your consultation now.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/criminal-law',
  },
};

export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Criminal Law Legal Services",
    bannerImage: "/services/7.png", // Replace with your actual image path
    description:
      "Our criminal law legal services provide comprehensive defense and representation for all types of criminal cases. We work closely with you to understand your situation and deliver effective legal solutions.",
    buttonText: "Get Started",
    buttonLink: "/contact",
  };

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="criminal-law-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      
      <div className="bg-white min-h-screen">
        {/* Banner Section */}
        <div className="relative w-full h-[300px] md:h-[550px] overflow-hidden">
          <img
            src={service.bannerImage}
            alt={service.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 max-w-6xl py-16">
          
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Expert <span className="text-[#D2A02A]">Criminal Law</span> Defense in India
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Facing criminal charges or police cases? Get professional legal help for criminal defense, FIR assistance, and cyber crime protection with our experienced criminal lawyers.
            </p>
          </div>

          {/* Introduction Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Criminal Defense Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Criminal charges can have serious consequences on your life, career, and future. Whether you're facing false accusations, police cases, or criminal charges, having the right legal representation is crucial for protecting your rights and securing the best possible outcome.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At AMA Legal Solutions, we specialize in <strong>criminal law</strong>, providing comprehensive legal services for criminal defense, FIR assistance, cyber crime protection, and police case representation. Our expert <strong>criminal lawyers in India</strong> ensure your rights are protected throughout the legal process.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Criminal Law Legal Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We provide comprehensive <strong>criminal law services</strong> covering all aspects of criminal defense, from initial police contact to final court proceedings. Our expertise spans traditional criminal cases to modern cyber crimes.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-blue-800 font-medium">
                    Our expert <strong>criminal lawyers</strong> ensure you get the best possible legal defense while protecting your constitutional rights throughout the criminal justice process.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    FIR & police case assistance
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Cyber crime defense
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Bail applications & custody protection
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Criminal litigation & defense
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service Categories Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Criminal Law Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🚔</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">FIR & Police Cases</h3>
                <p className="text-gray-600 text-center">
                  <strong>FIR assistance</strong> and police case representation including legal notices, interrogation protection, and police investigation guidance.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">💻</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Cyber Crime Defense</h3>
                <p className="text-gray-600 text-center">
                  <strong>Cyber crime defense</strong> including online fraud, social media defamation, cyber harassment, and digital evidence cases.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🔓</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Bail & Custody</h3>
                <p className="text-gray-600 text-center">
                  <strong>Bail applications</strong> and custody protection services including anticipatory bail, regular bail, and police custody representation.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">⚖️</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Criminal Litigation</h3>
                <p className="text-gray-600 text-center">
                  <strong>Criminal litigation</strong> and defense services including trial representation, evidence analysis, and appellate advocacy.
                </p>
              </div>
            </div>
          </section>

          {/* How We Help Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How AMA Legal Solutions Helps with Criminal Cases
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Immediate Legal Assistance & Rights Protection</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We provide immediate legal assistance when you're facing criminal charges:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• 24/7 emergency legal support for arrests and police custody</li>
                  <li>• Protection of constitutional rights during police interrogation</li>
                  <li>• Legal guidance for FIR filing and police investigation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Strategic Defense & Evidence Analysis</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our experienced criminal lawyers develop comprehensive defense strategies:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Thorough case analysis and evidence evaluation</li>
                  <li>• Witness preparation and cross-examination strategies</li>
                  <li>• Legal research and precedent analysis</li>
                  <li>• Alternative defense theories and approaches</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Court Representation & Advocacy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Complete court representation and advocacy including:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Bail applications and custody hearings</li>
                  <li>• Trial representation in criminal courts</li>
                  <li>• Appellate advocacy in higher courts</li>
                  <li>• Plea bargaining and settlement negotiations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Benefits of Choosing Our Criminal Lawyers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Emergency Support</h3>
                <p className="text-gray-600">
                  Round-the-clock legal assistance for arrests, police custody, and emergency criminal situations.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Expertise</h3>
                <p className="text-gray-600">
                  Expert lawyers specialized in criminal laws, cyber crimes, and police procedures with deep legal knowledge.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rights Protection</h3>
                <p className="text-gray-600">
                  Comprehensive protection of your constitutional rights throughout the criminal justice process.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Evidence Analysis</h3>
                <p className="text-gray-600">
                  Thorough evidence analysis and investigation to build strong defense strategies for your case.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">💻</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cyber Crime Specialists</h3>
                <p className="text-gray-600">
                  Specialized expertise in cyber crime defense with understanding of both technical and legal aspects.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-600">
                  Successful track record in criminal defense with numerous acquittals and favorable settlements.
                </p>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Proven 4-Step Criminal Defense Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Immediate Response</h3>
                  <p className="text-gray-300">24/7 emergency legal assistance and rights protection</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Case Analysis</h3>
                  <p className="text-gray-300">Comprehensive case evaluation and evidence analysis</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Defense Strategy</h3>
                  <p className="text-gray-300">Develop strong defense strategy and legal representation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Court Advocacy</h3>
                  <p className="text-gray-300">Expert court representation and advocacy for best outcome</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              FAQs on Criminal Law Services
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 mb-4">
                Have more questions about criminal law services?
              </p>
              <Link href="/contact" className="text-[#D2A02A] font-semibold hover:underline">
                Contact our criminal lawyers for expert advice →
              </Link>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="text-center bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Expert Criminal Defense?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get professional legal help for criminal cases and protect your rights today.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold">Call Now</p>
                  <p className="text-lg">+91-8700343611</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌐</span>
                <div>
                  <p className="font-semibold">Visit Online</p>
                  <a href="http://www.amalegalsolutions.com" className="text-lg hover:underline">
                    www.amalegalsolutions.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold">Office Location</p>
                  <p className="text-lg">Sector-57, Gurugram</p>
                </div>
              </div>
            </div>
            
            <Link href={service.buttonLink}>
              <div className="inline-block bg-white text-[#D2A02A] px-12 py-4 rounded-full font-bold text-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                {service.buttonText}
              </div>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}