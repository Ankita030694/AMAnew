import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";

// FAQ data for rendering
const faqs = [
  {
    question: "What types of real estate legal services do you provide?",
    answer: "We provide comprehensive real estate legal services including property registration, title verification, real estate contracts, property disputes, RERA compliance, and real estate litigation. Our real estate lawyers handle all aspects of property law."
  },
  {
    question: "How important is title verification before buying property?",
    answer: "Title verification is crucial before buying any property. Our real estate lawyers conduct thorough title searches to ensure clear ownership, identify encumbrances, and protect you from future legal disputes and property claims."
  },
  {
    question: "Can you help with RERA compliance for builders?",
    answer: "Yes, we specialize in RERA compliance including project registration, disclosure requirements, compliance audits, and representing builders in RERA proceedings to ensure adherence to real estate regulations."
  },
  {
    question: "Do you handle property dispute resolution?",
    answer: "Absolutely. We handle property disputes, boundary conflicts, ownership disputes, tenancy issues, and represent clients in real estate litigation with expertise in property laws and regulations."
  }
];

// WebPage Schema with FAQ content for SEO
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Real Estate Legal Services in India",
  "description": "Expert real estate lawyers in India. AMA Legal Solutions provides property law services, title verification, RERA compliance, and real estate dispute resolution.",
  "url": "https://amalegalsolutions.com/services/real-estate",
  "mainEntity": {
    "@type": "FAQPage",
    "name": "Real Estate Services FAQs",
    "description": "Frequently asked questions about real estate legal services, property law, and real estate transactions in India",
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
  title: "Real Estate Lawyers in India | Property Dispute & RERA Compliance – AMA Legal Solutions",
  description:
    "Expert real estate lawyers in India. AMA Legal Solutions provides property dispute resolution, RERA compliance, property registration, and real estate litigation services. Book your consultation now.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/real-estate',
  },
};

export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Real Estate Legal Services",
    bannerImage: "/services/6.png", // Replace with your actual image path
    description:
      "Our real estate legal services provide comprehensive support for all property-related legal matters. We work closely with you to understand your real estate needs and deliver effective legal solutions.",
    buttonText: "Get Started",
    buttonLink: "/contact",
  };

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="real-estate-webpage-schema"
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
              Expert <span className="text-[#D2A02A]">Real Estate</span> Legal Solutions in India
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Facing property disputes or real estate legal issues? Get professional legal help for property matters, RERA compliance, and real estate litigation with our experienced lawyers.
            </p>
          </div>

          {/* Introduction Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Real Estate Legal Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Real estate transactions and property matters involve complex legal considerations that require expert legal guidance. Whether you're buying, selling, developing, or facing property disputes, having the right legal experts by your side is crucial for protecting your interests.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At AMA Legal Solutions, we specialize in <strong>real estate law</strong>, providing comprehensive legal services for property disputes, RERA compliance, property registration, and real estate litigation. Our expert <strong>real estate lawyers in India</strong> ensure your property interests are fully protected.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Real Estate Legal Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We provide comprehensive <strong>real estate legal services</strong> covering all aspects of property law, from transaction support to dispute resolution. Our expertise spans residential, commercial, and industrial real estate matters.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-blue-800 font-medium">
                    Our expert <strong>real estate lawyers</strong> ensure you get the best possible legal representation while protecting your property interests throughout the process.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Property dispute resolution
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    RERA compliance & registration
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Property registration & documentation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Real estate litigation & arbitration
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service Categories Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Real Estate Legal Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🏠</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Property Disputes</h3>
                <p className="text-gray-600 text-center">
                  Resolution of <strong>property disputes</strong> including boundary conflicts, ownership issues, possession disputes, and title verification with expert legal representation.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">📋</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">RERA Compliance</h3>
                <p className="text-gray-600 text-center">
                  <strong>RERA compliance</strong> services for developers and agents including registration, documentation, and representation before RERA authorities.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">📄</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Property Registration</h3>
                <p className="text-gray-600 text-center">
                  <strong>Property registration</strong> and documentation services including title verification, due diligence, and legal documentation for all transactions.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">⚖️</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Real Estate Litigation</h3>
                <p className="text-gray-600 text-center">
                  <strong>Real estate litigation</strong> services including construction disputes, landlord-tenant matters, and property fraud cases with expert representation.
                </p>
              </div>
            </div>
          </section>

          {/* How We Help Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How AMA Legal Solutions Helps with Real Estate Matters
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Property Assessment & Legal Due Diligence</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We conduct comprehensive property assessment and legal due diligence:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Title verification and chain of ownership analysis</li>
                  <li>• Property documentation review and validation</li>
                  <li>• Legal compliance assessment and risk evaluation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Transaction Support & Documentation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our experienced real estate lawyers provide complete transaction support:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Drafting and reviewing property agreements and contracts</li>
                  <li>• Facilitating property registration and documentation</li>
                  <li>• Ensuring RERA compliance for developers and agents</li>
                  <li>• Managing stamp duty and registration formalities</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Dispute Resolution & Litigation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Comprehensive dispute resolution and litigation services including:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Property dispute resolution through negotiation and mediation</li>
                  <li>• Real estate litigation in civil courts and tribunals</li>
                  <li>• Construction dispute resolution and arbitration</li>
                  <li>• Landlord-tenant dispute resolution and representation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Benefits of Choosing Our Real Estate Lawyers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🏗️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Expertise</h3>
                <p className="text-gray-600">
                  Expert lawyers specialized in real estate laws, property regulations, and RERA compliance with deep industry knowledge.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Thorough Due Diligence</h3>
                <p className="text-gray-600">
                  Comprehensive property due diligence including title verification, documentation review, and risk assessment.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Dispute Resolution</h3>
                <p className="text-gray-600">
                  Effective dispute resolution through negotiation, mediation, arbitration, and litigation when necessary.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">RERA Compliance</h3>
                <p className="text-gray-600">
                  Complete RERA compliance services ensuring developers and agents meet all regulatory requirements.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Processing</h3>
                <p className="text-gray-600">
                  Efficient property registration and documentation with minimal delays and maximum legal protection.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Protection</h3>
                <p className="text-gray-600">
                  Comprehensive risk assessment and legal protection to safeguard your property interests and investments.
                </p>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Proven 4-Step Real Estate Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Property Assessment</h3>
                  <p className="text-gray-300">Comprehensive property evaluation and legal due diligence</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Legal Strategy</h3>
                  <p className="text-gray-300">Develop comprehensive legal strategy and documentation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Transaction Support</h3>
                  <p className="text-gray-300">Provide complete transaction support and registration assistance</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Ongoing Protection</h3>
                  <p className="text-gray-300">Ensure ongoing legal protection and dispute resolution</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              FAQs on Real Estate Legal Services
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
                Have more questions about real estate legal services?
              </p>
              <Link href="/contact" className="text-[#D2A02A] font-semibold hover:underline">
                Contact our real estate lawyers for expert advice →
              </Link>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="text-center bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Expert Real Estate Legal Assistance?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get professional legal help for property matters and real estate disputes today.
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

          <GenericStatesGrid serviceName="Real Estate" servicePath="real-estate" />
        </div>
      </div>
    </>
  );
}
