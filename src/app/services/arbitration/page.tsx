import Link from "next/link";
import Script from "next/script";

// FAQ data for rendering
const faqs = [
  {
    question: "What types of arbitration services do you provide?",
    answer: "We provide comprehensive arbitration services including arbitration agreement drafting, arbitration proceedings, arbitral awards, interim relief, banking and finance arbitration, commercial disputes, and international arbitration. Our arbitration lawyers handle all aspects of alternative dispute resolution."
  },
  {
    question: "How does arbitration differ from court litigation?",
    answer: "Arbitration is a private, confidential alternative to court litigation that offers faster resolution, flexibility in procedure, and expert arbitrators. It's often less expensive and more efficient than traditional court proceedings, with enforceable awards."
  },
  {
    question: "Can you help with international arbitration cases?",
    answer: "Yes, we specialize in international arbitration including cross-border disputes, enforcement of foreign arbitral awards, and representation in international arbitration institutions. Our lawyers have experience with various international arbitration rules and procedures."
  },
  {
    question: "What should I include in an arbitration agreement?",
    answer: "A well-drafted arbitration agreement should include the scope of disputes covered, choice of arbitrators, governing law, seat of arbitration, language of proceedings, and enforcement mechanisms. Our arbitration lawyers can draft comprehensive agreements to protect your interests."
  }
];

// WebPage Schema with FAQ content for SEO
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Arbitration Legal Services in India",
  "description": "Expert arbitration lawyers in India. AMA Legal Solutions provides arbitration services, arbitral awards, interim relief, and international arbitration representation.",
  "url": "https://amalegalsolutions.com/services/arbitration",
  "mainEntity": {
    "@type": "FAQPage",
    "name": "Arbitration Services FAQs",
    "description": "Frequently asked questions about arbitration services, alternative dispute resolution, and arbitration legal services in India",
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
  title: "Arbitration Lawyers in India | Commercial & International Arbitration – AMA Legal Solutions",
  description:
    "Expert arbitration lawyers in India. AMA Legal Solutions provides arbitration services, arbitral awards, interim relief, and international arbitration representation. Book your consultation now.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/arbitration',
  },
};

export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Arbitration Legal Services",
    bannerImage: "/services/9.png", // Replace with your actual image path
    description:
      "Our arbitration legal services provide comprehensive alternative dispute resolution solutions. We work closely with you to understand your dispute and deliver effective arbitration strategies.",
    buttonText: "Get Started",
    buttonLink: "/contact",
  };

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="arbitration-webpage-schema"
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
              Expert <span className="text-[#D2A02A]">Arbitration</span> Services in India
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Need efficient dispute resolution? Get professional legal help for arbitration proceedings, arbitral awards, and alternative dispute resolution with our experienced arbitration lawyers.
            </p>
          </div>

          {/* Introduction Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Arbitration & Alternative Dispute Resolution
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Arbitration offers an efficient, confidential, and cost-effective alternative to traditional court litigation. Whether you're dealing with commercial disputes, international conflicts, or complex business matters, arbitration provides a streamlined path to resolution.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At AMA Legal Solutions, we specialize in <strong>arbitration law</strong>, providing comprehensive legal services for arbitration proceedings, arbitral awards, interim relief, and international arbitration. Our expert <strong>arbitration lawyers in India</strong> ensure your disputes are resolved efficiently and fairly.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Arbitration Legal Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We provide comprehensive <strong>arbitration services</strong> covering all aspects of alternative dispute resolution, from initial agreement drafting to final award enforcement. Our expertise spans domestic and international arbitration matters.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-blue-800 font-medium">
                    Our expert <strong>arbitration lawyers</strong> ensure you get the best possible resolution while protecting your interests throughout the arbitration process.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Arbitration agreement drafting
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Arbitration proceedings & representation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Arbitral awards & enforcement
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    International arbitration
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service Categories Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Arbitration Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">📄</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Arbitration Agreements</h3>
                <p className="text-gray-600 text-center">
                  <strong>Arbitration agreement drafting</strong> including scope definition, arbitrator selection, governing law, and enforcement mechanisms for effective dispute resolution.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">⚖️</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Arbitration Proceedings</h3>
                <p className="text-gray-600 text-center">
                  <strong>Arbitration proceedings</strong> representation including evidence presentation, witness examination, and legal arguments in arbitration tribunals.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🏆</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Arbitral Awards</h3>
                <p className="text-gray-600 text-center">
                  <strong>Arbitral awards</strong> and enforcement services including award preparation, challenge proceedings, and enforcement in domestic and international courts.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🌍</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">International Arbitration</h3>
                <p className="text-gray-600 text-center">
                  <strong>International arbitration</strong> services including cross-border disputes, foreign award enforcement, and representation in international arbitration institutions.
                </p>
              </div>
            </div>
          </section>

          {/* How We Help Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How AMA Legal Solutions Helps with Arbitration
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Arbitration Agreement & Strategy Development</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We help develop effective arbitration strategies and agreements:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Drafting comprehensive arbitration agreements</li>
                  <li>• Selecting appropriate arbitrators and institutions</li>
                  <li>• Developing case strategy and evidence preparation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Arbitration Proceedings & Representation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our experienced arbitration lawyers provide complete representation:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Representing clients in arbitration proceedings</li>
                  <li>• Presenting evidence and examining witnesses</li>
                  <li>• Making legal arguments and submissions</li>
                  <li>• Negotiating settlements when appropriate</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Award Enforcement & Post-Arbitration Support</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Comprehensive post-arbitration support including:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Arbitral award preparation and review</li>
                  <li>• Award enforcement in domestic and international courts</li>
                  <li>• Challenge proceedings and appeals</li>
                  <li>• Compliance monitoring and implementation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Benefits of Choosing Our Arbitration Lawyers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Resolution</h3>
                <p className="text-gray-600">
                  Efficient dispute resolution with faster proceedings compared to traditional court litigation.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Confidentiality</h3>
                <p className="text-gray-600">
                  Private and confidential proceedings protecting your business interests and reputation.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Arbitrators</h3>
                <p className="text-gray-600">
                  Access to specialized arbitrators with deep industry knowledge and legal expertise.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Effective</h3>
                <p className="text-gray-600">
                  More cost-effective than traditional litigation with streamlined procedures and faster resolution.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">International Reach</h3>
                <p className="text-gray-600">
                  International arbitration services with cross-border enforcement capabilities.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-600">
                  Successful track record in arbitration with numerous favorable awards and settlements.
                </p>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Proven 4-Step Arbitration Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Case Assessment</h3>
                  <p className="text-gray-300">Comprehensive dispute evaluation and arbitration strategy development</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Proceedings</h3>
                  <p className="text-gray-300">Representation in arbitration proceedings with evidence presentation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Award</h3>
                  <p className="text-gray-300">Arbitral award preparation and review for optimal outcome</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Enforcement</h3>
                  <p className="text-gray-300">Award enforcement and post-arbitration support</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              FAQs on Arbitration Services
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
                Have more questions about arbitration services?
              </p>
              <Link href="/contact" className="text-[#D2A02A] font-semibold hover:underline">
                Contact our arbitration lawyers for expert advice →
              </Link>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="text-center bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Efficient Dispute Resolution?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert legal assistance for arbitration and alternative dispute resolution today.
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
