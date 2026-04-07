"use client";

import React from "react";
import Image from "next/image";

import { baseTestimonials, Testimonial } from "@/data/testimonials";

// Duplicate testimonials to ensure enough content for scrolling and visibility
const testimonials: Testimonial[] = [
  ...baseTestimonials,
  ...baseTestimonials.map(t => ({ ...t, id: t.id + 10 }))
];

const TestimonialCard = ({
  testimonial,
  onMouseEnter,
}: {
  testimonial: Testimonial;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>, testimonial: Testimonial) => void;
}) => {
  return (
    <div
      onMouseEnter={(e) => onMouseEnter?.(e, testimonial)}
      className={`testimonial-card flex flex-col justify-start items-start p-[16px] rounded-[20px] border-[2px] border-white shadow-[3px_4px_30.5px_0_rgba(0,0,0,0.05)] backdrop-blur-[2px] w-full ${
        testimonial.size === "tall" ? "min-h-[280px]" : "min-h-[200px]"
      } transition-colors duration-300`}
      style={{
        background:
          "linear-gradient(180deg, rgba(210, 158, 13, 0.15) 0%, rgba(255, 255, 255, 0.15) 100%)",
      }}
    >
      <p
        className="text-[#30261C] text-sm sm:text-base leading-[18px] mb-auto line-clamp-6"
        style={{ fontFamily: "var(--font-polysans)" }}
      >
        {testimonial.text}
      </p>

      <div className="w-full mt-[16px]">
        <div className="w-full h-[1px] bg-[rgba(48,38,28,0.35)] mb-[16px]"></div>

        <div className="flex items-center gap-4">
          <div className="w-[38px] h-[38px] rounded-full bg-white flex-shrink-0 flex items-center justify-center p-1">
            <Image
              src="/newAssets/google-g.svg"
              alt="Google"
              width={30}
              height={30}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col gap-1">
            <h3
              className="text-[#30261C] text-lg sm:text-[20px] leading-[20px]"
              style={{ fontFamily: "var(--font-polysans)" }}
            >
              {testimonial.author}
            </h3>
            <Image
              src={testimonial.rating}
              alt="Rating"
              width={92}
              height={16}
              className="h-auto w-auto max-w-[92px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [hoveredData, setHoveredData] = React.useState<{
    id: number;
    data: Testimonial;
    rect: DOMRect;
  } | null>(null);

  // Split baseTestimonials into 3 columns
  const column1 = baseTestimonials
    .filter((_, i) => i % 3 === 0)
    .map((t) => ({ ...t, size: "tall" as const }));
  const column2 = baseTestimonials
    .filter((_, i) => i % 3 === 1)
    .map((t) => ({ ...t, size: "short" as const }));
  const column3 = baseTestimonials
    .filter((_, i) => i % 3 === 2)
    .map((t) => ({ ...t, size: "tall" as const }));

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement>,
    testimonial: Testimonial
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setHoveredData({ id: testimonial.id, data: testimonial, rect });
  };

  const handleMouseLeave = () => {
    setHoveredData(null);
  };

  React.useEffect(() => {
    if (hoveredData) {
      const handleScroll = () => setHoveredData(null);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [hoveredData]);

  const renderColumn = (
    items: Testimonial[],
    animationClass: string,
    extraClass: string = ""
  ) => (
    <div className={`flex flex-col ${extraClass} h-[450px] overflow-hidden`}>
      <div
        className={animationClass}
        style={{
          animationPlayState: hoveredData ? "paused" : "running",
        }}
      >
        {/* First copy */}
        <div className="flex flex-col gap-4 lg:gap-[16px] pb-4 lg:pb-[16px]">
          {items.map((testimonial) => (
            <TestimonialCard
              key={`original-${testimonial.id}`}
              testimonial={testimonial}
              onMouseEnter={handleMouseEnter}
            />
          ))}
        </div>
        {/* Second copy for seamless loop */}
        <div className="flex flex-col gap-4 lg:gap-[16px] pb-4 lg:pb-[16px]">
          {items.map((testimonial) => (
            <TestimonialCard
              key={`duplicate-${testimonial.id}`}
              testimonial={testimonial}
              onMouseEnter={handleMouseEnter}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full py-4 relative">
      <div
        className="h-[450px] overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-[16px]">
          {/* Column 1 - Tall Cards - Up */}
          {renderColumn(column1, "animate-scroll-up")}

          {/* Column 2 - Short Cards - Down */}
          {renderColumn(column2, "animate-scroll-down")}

          {/* Column 3 - Tall Cards - Up - Hidden on small mobile */}
          {renderColumn(column3, "animate-scroll-up", "hidden md:flex")}
        </div>
      </div>

      {hoveredData && (
        <div
          className="fixed z-50 flex flex-col justify-start items-start p-[16px] rounded-[20px] border-[2px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
          style={{
            top: hoveredData.rect.top,
            left: hoveredData.rect.left,
            width: hoveredData.rect.width,
            minHeight: hoveredData.rect.height,
            background: "#FCEBB8", // Solid background to cover the underlying card
            fontFamily: "var(--font-polysans)",
          }}
          onMouseLeave={handleMouseLeave}
        >
          <p className="text-[#30261C] text-sm sm:text-base leading-[18px] mb-4">
            {hoveredData.data.text}
          </p>

          <div className="w-full mt-auto">
            <div className="w-full h-[1px] bg-[rgba(48,38,28,0.35)] mb-[16px]"></div>

            <div className="flex items-center gap-4">
              <div className="w-[38px] h-[38px] rounded-full bg-white flex-shrink-0 flex items-center justify-center p-1">
                <Image
                  src="/newAssets/google-g.svg"
                  alt="Google"
                  width={30}
                  height={30}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-[#30261C] text-lg sm:text-[20px] leading-[20px]">
                  {hoveredData.data.author}
                </h3>
                <Image
                  src={hoveredData.data.rating}
                  alt="Rating"
                  width={92}
                  height={16}
                  className="h-auto w-auto max-w-[92px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
