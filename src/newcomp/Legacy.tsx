"use client";

import Image from "next/image";

const slides = [
  {
    id: 1,
    name: "Late Adv. R.C. Malik",
    titles: [
      "Ex-Comptroller and Auditor General of India",
      "Director General of Audit (Central-Receipt)",
    ],
    description:
      "Inspired by a deep-seated passion for justice and a transformative vision to serve the community, R.C. Malik pursued the legal profession with an unwavering commitment to excellence and public service. Guided by absolute integrity and a steadfast ethical compass, he dedicated his life to providing trusted, effective, and principled legal counsel. His consistent professionalism, combined with a profound understanding of the law, earned him a highly respected reputation across the fraternity. Through his tireless efforts, he laid a robust foundation for the practice, built on the pillars of trust, credibility, and enduring legal values that continue to inspire generations.",
    image: "/newAssets/dadaji12.png",
    imageWidth: "640px",
    objectFit: "cover",
    year: "1982 - 2016",
  },
  {
    id: 2,
    name: "Anuj Anand Malik",
    titles: [
      "Advocate, Legal Consultant, Banking Lawyer, and Loan Settlement Expert",
    ],
    description: (
      <div className="space-y-4">
        <p>
          I am Anuj Anand Malik, an advocate, legal consultant, banking lawyer,
          and loan settlement expert, committed to helping individuals,
          startups, and businesses overcome financial challenges and achieve
          legal security. With in-depth expertise in loan settlements, corporate
          compliance, business contracts, dispute resolution, and financial
          litigation, I provide strategic legal counsel and expert
          representation to safeguard clients’ interests through risk
          mitigation, regulatory compliance, and financial stability.
        </p>
      </div>
    ),
    image: "/newAssets/bhiya.png",
    imageWidth: "480px",
    objectFit: "contain",
    year: null,
  },
];

const Legacy = () => {
  return (
    <section className="w-full py-8 md:py-16 flex flex-col items-center bg-[#EAE6DB] overflow-hidden">
      {/* Main Heading */}
      <h2
        style={{
          color: "#30261C",
          textAlign: "center",
          fontFamily: "var(--font-polysans)",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "1.2",
        }}
        className="mb-2 md:mb-4 text-[31px] md:text-[47px]"
      >
        Legacy Extended
      </h2>

      {/* Sub Heading */}
      <p
        style={{
          color: "rgba(48, 38, 28, 0.85)",
          textAlign: "center",
          fontFamily: "var(--font-polysans)",
          fontSize: "16px", // Mobile size
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "1.4",
          letterSpacing: "0.54px",
        }}
        className="max-w-[640px] mb-8 md:mb-12 px-4 md:text-[22px] md:leading-[25px]"
      >
        A journey of vision, integrity, and legal excellence carried forward
        across generations.
      </p>

      {/* Content Section with Background */}
      <div className="w-full relative px-4 xl:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-center justify-center max-w-full mx-auto mt-4 lg:mt-8">
        {slides.map((currentSlide) => (
          <div key={currentSlide.id} className="relative w-full flex items-center justify-center mt-4 md:mt-0">
            
            <div className="relative w-full h-[650px] lg:h-[620px] xl:h-[580px] border-[8px] lg:border-[16px] border-white/60 z-10 flex flex-col overflow-visible">
              {/* Desktop Top Vertical extension & Year */}
              {currentSlide.year && (
                <>
                  <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-[16px] h-[32px] bg-white/60 z-10" />
                  <div
                    className="hidden lg:block absolute top-[60px] left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 z-20"
                    style={{
                      color: "#30261C",
                      fontFamily: "var(--font-polysans)",
                      fontSize: "19px",
                      fontWeight: 700,
                      letterSpacing: "1px",
                    }}
                  >
                    {currentSlide.year}
                  </div>
                </>
              )}

              {/* Left Content (Top text area) */}
              <div className="flex-1 p-5 lg:p-10 flex flex-col justify-start z-20 w-full max-w-full text-left relative">
                {/* Top Section: Header Info */}
                <div className="w-full flex flex-col gap-1 lg:gap-3 mb-4 text-left z-30 relative">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-1 lg:gap-3">
                      <h3 className="text-[#30261C] text-[24px] lg:text-[28px] font-normal font-sans leading-tight">
                      {currentSlide.name}
                      </h3>
                      {currentSlide.year && (
                        <span className="lg:hidden text-[#30261C] font-bold font-sans text-[18px]">{currentSlide.year}</span>
                      )}
                    </div>

                  <div className="space-y-1 w-full relative z-30">
                      {currentSlide.titles.map((title, idx) => (
                      <p
                          key={idx}
                          className="text-[#D29E0D] text-[15px] lg:text-[17px] font-medium font-sans w-full drop-shadow-sm"
                      >
                          {title}
                      </p>
                      ))}
                  </div>
                </div>

                {/* Bottom Section: Description */}
                <div className="w-[95%] lg:w-[85%] text-[#30261C] text-[13px] lg:text-[16px] leading-[1.5] lg:leading-[24px] font-sans opacity-95 z-20 h-full overflow-y-auto pb-2 content-start pr-2 relative drop-shadow-sm mix-blend-normal lg:mix-blend-multiply">
                    {currentSlide.description}
                </div>
              </div>

               {/* Mobile & Desktop Image - Absolute Bottom Right */}
               <div 
                  className={`absolute -bottom-3 z-10 pointer-events-none ${
                    currentSlide.id === 1 
                      ? "-right-4 lg:-right-4 w-[85%] lg:w-[55%] h-[300px] lg:h-[480px]" 
                      : "-right-4 lg:-right-12 xl:-right-35 w-[80%] lg:w-[48%] h-[420px] lg:h-[500px]"
                  }`}
                > 
                      <Image
                        src={currentSlide.image}
                        alt={currentSlide.name}
                        fill
                        className={`${currentSlide.id === 1 ? "object-cover mt-13 -ml-4" : "object-contain"} object-bottom`}
                        priority
                    />
                </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Legacy;
