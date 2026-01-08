import Navbar from "@/newcomp/Navbar";
import Footer from "@/newcomp/Footer";
import Image from "next/image";
import { Metadata } from "next";
import { baseTestimonials } from "@/data/testimonials";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Success Stories | AMA Legal Solutions",
  description: "Read real stories of how AMA Legal Solutions helped clients become debt-free and stop harassment. Proven legal excellence in loan settlement.",
};

export default function SuccessStoriesPage() {
  const stats = [
    { label: "Clients Served", value: "5000+" },
    { label: "Our Offices", value: "20+" },
    { label: "Cases Handled", value: "3000+" },
    { label: "Years Experience", value: "40+" },
  ];

  
  const stories = [
    {
      name: "Aditya K.",
      role: "IT Professional, Bengaluru",
      slug: "how-aditya-settled-20-lakh-loan-bengaluru",
      title: "₹20L Loan Settled at ₹10.5L",
      quote: "Medical emergencies don't knock before entering. When hospital bills piled up, my ₹20L loan became a trap. Drowning in EMI demands and harassment, I thought I’d lose everything... until AMA stepped in.",
      saved: "Saved ₹9.5 Lakhs",
    },
    {
      name: "Rahul M.",
      role: "Business Owner, Delhi",
      slug: "how-rahul-settled-15-lakh-business-loan-delhi",
      title: "₹15L Loan Settled at ₹7.2L",
      quote: "My business took a hit post pandemic, and suddenly my ₹15L capital loan felt like a noose. Creditors were showing up at my shop. AMA Legal Solutions shielded me from the harassment and negotiated a lifeline.",
      saved: "Saved ₹7.8 Lakhs",
    },
    {
      name: "Priya S.",
      role: "School Teacher, Mumbai",
      slug: "how-priya-settled-8-lakh-loan-mumbai",
      title: "₹8L Loan Settled at ₹4.1L",
      quote: "Living in Mumbai on a teacher's salary is hard enough. A personal loan of ₹8L for my brother's education spiraled out of control. The constant recovery calls were humiliating during school hours. AMA silenced the noise.",
      saved: "Saved ₹3.9 Lakhs",
    },
    {
      name: "Vikram R.",
      role: "Sales Manager, Gurugram",
      slug: "how-vikram-settled-12-lakh-credit-card-debt-gurugram",
      title: "₹12L Loan Settled at ₹5.8L",
      quote: "Targets missed, incentives gone. My credit card debt of ₹12L ballooned with hidden charges. I was borrowing just to pay interest. AMA Legal Solutions stopped the cycle and settled it for less than half so I could breathe.",
      saved: "Saved ₹6.2 Lakhs",
    },
    {
      name: "Sneha D.",
      role: "Marketing Exec, Pune",
      slug: "how-sneha-settled-5-lakh-wedding-loan-pune",
      title: "₹5L Loan Settled at ₹2.4L",
      quote: "I took a ₹5L loan for a dream wedding that got cancelled. The emotional toll was bad, but the bank's aggression was worse. AMA handled the legal side with such empathy, settling it for just ₹2.4L and giving me peace.",
      saved: "Saved ₹2.6 Lakhs",
    },
     {
      name: "Anil T.",
      role: "Retd. Govt. Servant, Noida",
      slug: "how-anil-settled-18-lakh-loan-noida",
      title: "₹18L Loan Settled at ₹9.5L",
      quote: "I wanted to build a home for my retirement, but delays and costs pushed my loan to ₹18L. My pension couldn't cover the EMIs. AMA fought for my dignity and settled the debt so I could finally rest easy.",
      saved: "Saved ₹8.5 Lakhs",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Success Stories | AMA Legal Solutions",
    "description": "Real stories of loan settlement and legal victory against harassment.",
    "publisher": {
      "@type": "Organization",
      "name": "AMA Legal Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://amalegalsolutions.com/logo.png"
      }
    },
    "hasPart": stories.map(story => ({
      "@type": "Abstract",
      "name": `${story.name} - ${story.title}`,
      "description": story.quote,
      "attendee": {
        "@type": "Person",
        "name": story.name
      }
    }))
  };

  return (
    <div className="bg-[#EAE6DB] min-h-screen font-[family-name:var(--font-polysans)]">
      {/* ... (Script and Navbar) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="pb-20 overflow-x-hidden relative">
        {/* ... (Hero and Strips remain same) */}
        {/* Hero Section with Twisted Tape */}
        <section className="relative pt-32 pb-20 text-center bg-[#EAE6DB] overflow-hidden">
          <h1 className="hidden md:block text-4xl md:text-6xl font-bold mb-4 text-[#30261C]">
            Legal Excellence,<br />
            <span className="text-[#D2A02A]">Proven by Numbers</span>
          </h1>

        {/* The Dark Intersecting Strip */}
        <div className="relative w-full mt-30 md:mt-32 z-0">
             <div 
               className="w-[120%] -ml-[10%] h-[110px] md:h-[140px] transform rotate-25 md:rotate-10 flex flex-col md:flex-row items-stretch border-y border-[#D2A02A]/20"
               style={{
                 background: "#30261C",
                 boxShadow: "3px 4px 30.5px 0 rgba(0, 0, 0, 0.05)",
                 backdropFilter: "blur(2px)",
               }}
             >
                <div className="flex flex-row w-full h-full items-center md:items-stretch md:pr-[5%]">
                   {/* Column 1: Testimonial Slider (Mobile: Full width, Desktop: 80%) */}
                   <div className="w-[65%] md:w-[80%] h-full flex items-center overflow-hidden relative border-r border-[#D2A02A]/10">
                      <div className="animate-marquee whitespace-nowrap flex gap-12 px-2 md:px-8">
                         {[...baseTestimonials, ...baseTestimonials].map((t, i) => (
                           <div key={i} className="inline-flex items-center gap-4 md:gap-6 min-w-[250px] md:min-w-[500px]">
                              {/* Left: Avatar & Info */}
                              <div className="flex items-center gap-2 md:gap-3 shrink-0">
                                 <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-white rounded-full flex items-center justify-center p-1">
                                    <Image src="/newAssets/google-g.svg" alt="G" width={24} height={24} unoptimized />
                                 </div>
                                 <div className="text-left">
                                    <div className="text-[#D2A02A] font-bold text-xs md:text-sm">{t.author}</div>
                                    <Image src="/newAssets/stars.png" alt="Stars" width={50} height={8} className="mt-1 block md:hidden" />
                                     <Image src="/newAssets/stars.png" alt="Stars" width={60} height={10} className="mt-1 hidden md:block" />
                                 </div>
                              </div>
                              
                              {/* Center: Divider */}
                              <div className="w-[1px] h-[30px] md:h-[40px] bg-[#D2A02A]/30"></div>
                              
                              {/* Right: Text */}
                              <div className="text-white/80 text-xs md:text-sm whitespace-normal line-clamp-3 md:line-clamp-2 max-w-[150px] md:max-w-[300px] text-left italic">
                                "{t.text}"
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>

                   {/* Column 2: Static Badge (Mobile: 35%, Desktop: 20%) */}
                   <div className="w-[35%] md:w-[20%] h-full flex flex-col items-center justify-center bg-[#251D16] z-10 p-2 md:p-4 shadow-[-10px_0_20px_rgba(0,0,0,0.2)] gap-2 md:gap-3">
                      <Image src="/newAssets/google.png" alt="Google" width={60} height={20} className="object-contain md:w-[80px] md:h-[26px]" unoptimized />
                      <div className="flex flex-col items-start scale-90 md:scale-100">
                          <div className="flex gap-0.5 mb-1">
                              {[1,2,3,4,5].map(s => <span key={s} className="text-[#F4B400] text-sm leading-none">★</span>)}
                          </div>
                          <div className="text-white text-[10px] font-light leading-none mb-0.5">Overall 4.7/5</div>
                          <div className="text-[#D2A02A] text-[9px] font-bold uppercase tracking-widest leading-none">Excellent</div>
                      </div>
                   </div>
                </div>
             </div>
        </div>

        {/* The Stats Strip Container */}
        <div className="relative w-full -mt-15 md:-mt-32 mb-10 md:mb-20 z-10">
          <div className="w-full transform -rotate-12 md:-rotate-8 scale-105 origin-center">
            <div 
              className="w-full min-h-[110px] md:min-h-[140px] flex flex-row items-center justify-between px-2 md:px-12 py-4 md:py-2"
              style={{
                background: "rgba(255, 255, 255, 0.45)",
                boxShadow: "0 0 89.8px 0 rgba(0, 0, 0, 0.45)",
                backdropFilter: "blur(78.5px)",
              }}
            >
               {/* Stats Content - Single Row */}
               <div className="w-full flex flex-row justify-around items-center">
                 {stats.map((stat, idx) => (
                   <div key={idx} className="text-center group cursor-default">
                     <div 
                       className="text-[#30261C] text-xl md:text-5xl font-medium mb-0.5 md:mb-1 group-hover:scale-110 transition-transform duration-300"
                       style={{ fontFamily: "var(--font-polysans)" }}
                     >
                       {stat.value}
                     </div>
                     <div 
                       className="text-[#30261C] text-[10px] md:text-sm uppercase tracking-widest opacity-80 leading-tight"
                       style={{ fontFamily: "var(--font-polysans)" }}
                     >
                       {stat.label.replace("Experience", "Exp.")}
                     </div>
                   </div>
                 ))}
               </div>
               
            </div>
          </div>
        </div>
        </section>

        {/* Stories Section */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#30261C] mb-4">Stories That Build Trust</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore real cases where AMA Legal Solutions successfully negotiated loan settlements and restored financial peace for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story, idx) => (
              <Link
                href={`/success-stories/${story.slug}`}
                key={idx}
                className={`flex flex-col justify-start items-start p-[24px] rounded-[20px] border-[1px] border-white/40 shadow-[3px_4px_30.5px_0_rgba(0,0,0,0.05)] backdrop-blur-[2px] w-full min-h-[280px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group ${story.slug === '#' ? 'pointer-events-none opacity-100' : ''}`}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
                }}
              >
                {/* Headline / Title */}
                <div className="mb-4 w-full">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-[#30261C] font-bold text-xl leading-tight group-hover:text-[#D2A02A] transition-colors">
                            {story.title}
                        </h3>
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-[#D2A02A]/10 border border-[#D2A02A]/20">
                        <p className="text-xs text-[#D2A02A] font-bold uppercase tracking-wider">
                            {story.saved}
                        </p>
                    </div>
                </div>

                {/* Main Text */}
                <p
                  className="text-[#30261C]/80 text-sm sm:text-base leading-[1.6] mb-auto line-clamp-6 italic"
                  style={{ fontFamily: "var(--font-polysans)" }}
                >
                  "{story.quote}"
                </p>

                {/* Footer Section - Generic */}
                <div className="w-full mt-[24px] pt-[16px] border-t border-[#30261C]/10">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-0.5">
                      <h4
                        className="text-[#30261C] text-md font-bold leading-tight"
                        style={{ fontFamily: "var(--font-polysans)" }}
                      >
                        {story.name}
                      </h4>
                      <p className="text-[11px] text-[#30261C]/60 font-medium uppercase tracking-wide">
                        {story.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
