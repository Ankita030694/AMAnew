import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "AMA Connect App Success | India's Best Legal Application",
  description: "Discover how the AMA Connect App is revolutionizing legal access in India. Learn about the 'Ask Me Anything' (AMA) section and how thousands are becoming debt-free.",
  keywords: ["best legal app India", "AMA Connect app success", "loan settlement app", "legal advice app", "AMA section legal solutions"],
};

export default function AppSuccessPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "AMA Connect App", href: "/success-stories/ama-connect-app" },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://www.amalegalsolutions.com${item.href}`
    }))
  };

  return (
    <div className="bg-[#EAE6DB] min-h-screen font-[family-name:var(--font-polysans)] text-[#30261C]">
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 text-center mb-16 md:mb-24">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#D2A02A]/10 border border-[#D2A02A]/20 backdrop-blur-sm">
            <span className="text-sm text-[#D2A02A] font-bold uppercase tracking-wider">
              Legal Technology Excellence
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#30261C] leading-tight">
            AMA Connect: <span className="text-[#D2A02A]">Revolutionizing</span> <br className="hidden md:block" />
            Legal Access in India
          </h1>
          <p className="text-xl md:text-2xl text-[#30261C]/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            With over 1,00,000+ downloads, AMA Connect has emerged as India's most trusted companion for loan settlement and legal empowerment.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="transform transition hover:scale-105">
                <Image src="/newAssets/playstore.svg" alt="Play Store" width={180} height={54} className="h-14 w-auto" />
            </Link>
            <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="transform transition hover:scale-105">
                <Image src="/newAssets/appstore.svg" alt="App Store" width={180} height={54} className="h-14 w-auto" />
            </Link>
          </div>

          <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/30 aspect-video md:aspect-[21/9] bg-gradient-to-br from-[#30261C] to-[#453628] flex items-center justify-center">
             <div className="text-white p-8 md:p-12 text-left w-full h-full flex flex-col justify-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">A Multi-Award Winning Experience</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-4 md:mt-8">
                    <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold text-[#D2A02A]">4.8/5</div>
                        <div className="text-xs md:text-sm uppercase tracking-widest opacity-70 mt-2">App Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold text-[#D2A02A]">30K+</div>
                        <div className="text-xs md:text-sm uppercase tracking-widest opacity-70 mt-2">Active Users</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold text-[#D2A02A]">₹150Cr+</div>
                        <div className="text-xs md:text-sm uppercase tracking-widest opacity-70 mt-2">Debt Settled</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-5xl font-bold text-[#D2A02A]">Instant</div>
                        <div className="text-xs md:text-sm uppercase tracking-widest opacity-70 mt-2">Legal Help</div>
                    </div>
                </div>
             </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
           <Breadcrumbs items={breadcrumbItems} />
           
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
              {/* Content Side */}
              <div className="lg:col-span-8 space-y-16">
                 
                 <div id="ama-section" className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-white/50">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-[#D2A02A] flex items-center justify-center text-white transform -rotate-12 font-bold text-xl">
                            ?
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#30261C]">The "AMA" Section: Power in Your Pocket</h2>
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                       The crown jewel of AMA Connect is the <strong>"Ask Me Anything" (AMA) Section</strong>. This isn't just a FAQ page; it's a living, breathing legal ecosystem where borrowers and individuals facing legal crises can get direct answers from verified, enrolled advocates.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 my-10">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-[#D2A02A]">Direct Advocate Access</h3>
                            <p className="text-gray-600">Every question asked in the AMA section is routed to a panel of expert lawyers who specialize in debt recovery, consumer law, and harassment protection.</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-[#D2A02A]">Community Empowerment</h3>
                            <p className="text-gray-600">Browse thousands of answered questions. Chances are, someone has already solved the exact problem you're facing today.</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-[#D2A02A]">Verified Information</h3>
                            <p className="text-gray-600">Unlike social media comments, every answer on AMA is verified for legal accuracy, ensuring you don't take the wrong step.</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-[#D2A02A]">Zero Cost, High Value</h3>
                            <p className="text-gray-600">The basic legal guidance in the AMA section is completely free, making high-quality legal advice accessible to the common man.</p>
                        </div>
                    </div>
                 </div>

                 <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">Why AMA Connect is India's Best Legal App</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Harassment Shield",
                                desc: "One-tap feature to report illegal recovery agent behavior and get immediate legal protection notices sent on your behalf.",
                                icon: "🛡️"
                            },
                            {
                                title: "Settlement Calculator",
                                desc: "Proprietary AI-driven tool that calculates the realistic settlement amount for your loans based on bank historical data.",
                                icon: "📈"
                            },
                            {
                                title: "Document Vault",
                                desc: "Securely store your loan documents, legal notices, and settlement letters. Never lose a crucial piece of evidence again.",
                                icon: "📂"
                            },
                            {
                                title: "Real-time Tracking",
                                desc: "Track every step of your legal case or negotiation process with our dedicated dashboard for clients.",
                                icon: "📍"
                            }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white/40 border border-white/60 shadow-sm hover:shadow-md transition-all">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                 </div>

                 <div className="bg-[#30261C] text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A]/20 blur-[100px] -mr-32 -mt-32"></div>
                    <h2 className="text-3xl font-bold mb-6">A User Success Story from the App</h2>
                    <blockquote className="space-y-6 italic text-lg md:text-xl text-white/90">
                        <p>
                           "I was suicidal because of the 50+ calls I received daily from loan apps. I happened to download AMA Connect and posted my situation in the AMA section. Within 30 minutes, an advocate replied explaining my rights. Using the app's Harassment Shield, a notice was sent. The calls stopped within a day. AMA Connect literally saved my life."
                        </p>
                        <footer className="not-italic flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center font-bold">M</div>
                            <div>
                                <div className="font-bold">Manish R.</div>
                                <div className="text-sm opacity-70">App User from Hyderabad</div>
                            </div>
                        </footer>
                    </blockquote>
                 </div>

              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-8 sticky top-24 h-fit">
                 <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#D2A02A]/10">
                    <h3 className="text-2xl font-bold mb-6">Download Now</h3>
                    <p className="text-gray-600 mb-8">Take the first step towards a debt-free life. Secure your legal rights today.</p>
                    <div className="space-y-4">
                       <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="block w-full text-center py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition shadow-md">
                          Get it on Play Store
                       </Link>
                       <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="block w-full text-center py-4 border-2 border-black text-black rounded-xl font-bold hover:bg-black hover:text-white transition">
                          Download on App Store
                       </Link>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-center gap-4">
                        <div className="flex -space-x-3">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-[#EAE6DB] flex items-center justify-center text-[10px] font-bold">U{i}</div>
                            ))}
                        </div>
                        <div className="text-xs font-semibold text-gray-500">Joined by 10,000+ users this month</div>
                    </div>
                 </div>

                 <div className="bg-[#D2A02A] p-8 rounded-3xl text-white">
                    <h3 className="text-xl font-bold mb-4">Want more stories?</h3>
                    <p className="mb-6 opacity-90">Read how we've helped thousands of individuals tackle debt in their specific cities.</p>
                    <Link href="/success-stories" className="inline-flex items-center gap-2 font-bold hover:underline">
                      See All Success Stories <span className="text-xl">→</span>
                    </Link>
                 </div>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
}
