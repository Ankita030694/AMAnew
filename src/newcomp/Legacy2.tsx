"use client";

import Image from "next/image";

const legacyData = [
  {
    id: 1,
    heading: "The Foundation",
    name: "Late Adv. R.C. Malik",
    titles: [
      "Ex-Comptroller and Auditor General of India",
      "Director General of Audit (Central-Receipt)"
    ],
    description: "R.C. Malik started his professional journey as a gazetted officer at DGACR, progressing through different roles within the Income Tax Department before taking on administrative duties at the Office of the Comptroller and Auditor General (CAG) of India. After retiring from the CAG office, R.C. Malik transitioned into a legal career as an advocate specializing in taxation, leveraging the extensive experience gained during his tenure as an officer.",
    image: "/dadaji2.jpg",
    objectPosition: "center 70%"
  },
  {
    id: 2,
    heading: "The Vision",
    name: "Anuj Anand Malik",
    titles: [
      "Founder, AMA Legal Solutions",
      "Advocate & Legal Strategist"
    ],
    description: "Anuj Anand Malik works at the intersection of law, finance, and business strategy, specializing in banking disputes and debt resolution. Driven by the vision to make quality legal assistance accessible across India, he recently launched the country's first pro-bono law firm–backed legal assistance app. His mission is to provide fast, reliable legal guidance and awareness to everyone when they need it most.",
    image: "/newAssets/bhiya.png",
    objectPosition: "center 60%"
  }
];

const Legacy2 = () => {
  return (
    <section className="w-full bg-[#EBE9E4] py-16 md:py-24 px-4 md:px-8 xl:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            className="text-[32px] md:text-[48px] text-[#30261C] mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-polysans)" }}
          >
            Legacy Extended
          </h2>
          <div className="w-16 h-0.5 bg-[#D29E0D] mx-auto mb-6"></div>
          <p className="text-[#30261C]/80 max-w-[680px] mx-auto text-[16px] md:text-[20px] leading-relaxed">
            A journey of vision, integrity, and legal excellence carried forward across generations.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {legacyData.map((person) => (
            <div
              key={person.id}
              className="flex flex-col bg-white/40 border border-black/5 rounded-2xl p-6 md:p-8 hover:shadow-md transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full h-[320px] md:h-[400px] rounded-xl overflow-hidden mb-6 bg-[#DFDAD0]/50 border border-black/5">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: person.objectPosition }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Tag / Role */}
              <div className="mb-2">
                <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-[#D29E0D] bg-[#D29E0D]/10 px-3 py-1 rounded-full">
                  {person.heading}
                </span>
              </div>

              {/* Name */}
              <h3
                className="text-[28px] md:text-[34px] text-[#30261C] font-normal mb-3"
                style={{ fontFamily: "var(--font-polysans)" }}
              >
                {person.name}
              </h3>

              {/* Subtitles */}
              <div className="space-y-1 mb-6">
                {person.titles.map((title, index) => (
                  <p
                    key={index}
                    className={`text-[14px] md:text-[16px] ${
                      index === 0 ? "text-[#30261C]/80 font-medium" : "text-[#30261C]/65"
                    }`}
                  >
                    {title}
                  </p>
                ))}
              </div>

              {/* Description */}
              <p className="text-[#30261C]/80 text-[15px] md:text-[17px] leading-relaxed mt-auto border-t border-black/5 pt-6">
                {person.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legacy2;
