import Link from "next/link";
import Script from "next/script";

// FAQ data for rendering
const faqs = [
  {
    question: "What types of litigation cases do you handle?",
    answer: "We handle all types of litigation cases including civil litigation, commercial disputes, corporate litigation, property disputes, contract litigation, family law cases, and appellate matters. Our litigation lawyers provide comprehensive legal representation in all courts and tribunals."
  },
  {
    question: "How long does litigation typically take?",
    answer: "Litigation duration varies significantly based on case complexity and court procedures. Simple cases may resolve in 6-12 months, while complex litigation can take 2-5 years. We work efficiently to achieve the best possible outcome while minimizing delays."
  },
  {
    question: "Do you provide appellate services?",
    answer: "Yes, we provide comprehensive appellate services including filing appeals, drafting appellate briefs, and representing clients in High Courts and Supreme Court. Our litigation lawyers have extensive experience in appellate advocacy and complex legal arguments."
  },
  {
    question: "Can you help with out-of-court settlements during litigation?",
    answer: "Absolutely. We specialize in negotiating favorable settlements during litigation proceedings. Our litigation lawyers can explore settlement options, mediation, and alternative dispute resolution to achieve faster and more cost-effective resolutions."
  }
];

// FAQ Schema Markup for SEO
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

export const metadata = {
  title: "Litigation Lawyers in India | Civil & Commercial Litigation – AMA Legal Solutions",
  description:
    "Expert litigation lawyers in India. AMA Legal Solutions provides civil litigation, commercial disputes, appellate services, and court representation. Book your consultation now.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/litigation',
  },
};

export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Litigation Legal Services",
    bannerImage: "/services/13.png", // Replace with your actual image path
    description:
      "Our litigation legal services provide comprehensive court representation and legal advocacy. We work closely with you to understand your litigation needs and deliver effective legal solutions.",
    buttonText: "Get Started",
    buttonLink: "/contact",
  };

  return (
    <>
      {/* FAQ Schema Markup - Using Next.js Script component for proper SSR */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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
              Expert <span className="text-[#D2A02A]">Litigation</span> Services in India
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Facing legal disputes or court proceedings? Get professional litigation services for civil cases, commercial disputes, and appellate matters with our experienced litigation lawyers.
            </p>
          </div>

          {/* Introduction Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Litigation & Court Representation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Litigation involves complex legal proceedings that require expert legal representation and strategic advocacy. Whether you're involved in civil disputes, commercial conflicts, or appellate matters, having skilled litigation lawyers is crucial for protecting your interests.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At AMA Legal Solutions, we specialize in <strong>litigation law</strong>, providing comprehensive legal services for civil litigation, commercial disputes, appellate advocacy, and court representation. Our expert <strong>litigation lawyers in India</strong> ensure your legal interests are fully protected throughout the litigation process.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Litigation Legal Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We provide comprehensive <strong>litigation services</strong> covering all aspects of court proceedings, from initial case assessment to final judgment and appeals. Our expertise spans civil litigation to complex commercial disputes.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-blue-800 font-medium">
                    Our expert <strong>litigation lawyers</strong> ensure you get the best possible legal representation while protecting your interests throughout the litigation process.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Civil litigation & court representation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Commercial disputes & corporate litigation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Appellate services & appeals
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Alternative dispute resolution
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service Categories Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Litigation Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">⚖️</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Civil Litigation</h3>
                <p className="text-gray-600 text-center">
                  <strong>Civil litigation</strong> services including contract disputes, property cases, family law matters, and civil rights litigation with expert court representation.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🏢</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Commercial Litigation</h3>
                <p className="text-gray-600 text-center">
                  <strong>Commercial litigation</strong> including business disputes, corporate conflicts, partnership matters, and commercial contract litigation.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">📋</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Appellate Services</h3>
                <p className="text-gray-600 text-center">
                  <strong>Appellate services</strong> including appeals filing, appellate briefs, and representation in High Courts and Supreme Court with expert advocacy.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🤝</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Dispute Resolution</h3>
                <p className="text-gray-600 text-center">
                  <strong>Dispute resolution</strong> services including mediation, arbitration, and settlement negotiations for efficient conflict resolution.
                </p>
              </div>
            </div>
          </section>

          {/* How We Help Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How AMA Legal Solutions Helps with Litigation
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Case Assessment & Legal Strategy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We conduct comprehensive case assessment and develop effective litigation strategies:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Analyzing legal merits and potential outcomes</li>
                  <li>• Developing strategic litigation approaches</li>
                  <li>• Preparing evidence and legal arguments</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Court Representation & Advocacy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our experienced litigation lawyers provide complete court representation:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Filing lawsuits and legal petitions</li>
                  <li>• Representing clients in all court proceedings</li>
                  <li>• Presenting evidence and making legal arguments</li>
                  <li>• Cross-examining witnesses and expert testimony</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Settlement & Appellate Services</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Comprehensive settlement and appellate services including:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Negotiating favorable settlements during litigation</li>
                  <li>• Filing appeals and appellate representation</li>
                  <li>• Alternative dispute resolution options</li>
                  <li>• Post-judgment enforcement and compliance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Benefits of Choosing Our Litigation Lawyers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">⚖️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Advocacy</h3>
                <p className="text-gray-600">
                  Specialized litigation expertise with deep understanding of court procedures and legal advocacy.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Approach</h3>
                <p className="text-gray-600">
                  Strategic litigation approach tailored to your specific case and desired outcomes.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-600">
                  Successful track record in litigation with numerous favorable judgments and settlements.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Settlement Expertise</h3>
                <p className="text-gray-600">
                  Expert negotiation skills for favorable settlements and alternative dispute resolution.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Appellate Services</h3>
                <p className="text-gray-600">
                  Comprehensive appellate services with expert representation in higher courts.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rights Protection</h3>
                <p className="text-gray-600">
                  Strong focus on protecting your legal rights and interests throughout litigation.
                </p>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Proven 4-Step Litigation Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Case Assessment</h3>
                  <p className="text-gray-300">Comprehensive case evaluation and litigation strategy development</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Court Proceedings</h3>
                  <p className="text-gray-300">File lawsuits, represent in court, and conduct legal proceedings</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Resolution</h3>
                  <p className="text-gray-300">Achieve favorable judgment or negotiate settlements</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Enforcement</h3>
                  <p className="text-gray-300">Enforce judgments and handle appeals if necessary</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              FAQs on Litigation Services
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
                Have more questions about litigation services?
              </p>
              <Link href="/contact" className="text-[#D2A02A] font-semibold hover:underline">
                Contact our litigation lawyers for expert advice →
              </Link>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="text-center bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Expert Litigation Assistance?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get professional litigation services and court representation today.
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