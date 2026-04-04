import React from "react";
import Link from "next/link";
import { locationData } from "./locationData";

export const metadata = {
  title: "Best Lawyers for Loan Settlement by City | AMA Legal Solutions",
  description:
    "Find the best advocates and lawyers for loan settlement across various cities in India. Get expert legal assistance with AMA Legal Solutions.",
};

export default function LawyerByCity() {
  return (
    <div className="min-h-screen bg-[#EBE9E4] text-[#30261C] py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#30261C 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-12 text-[#30261C]"
            style={{ fontFamily: "var(--font-polysans)" }}
          >
            Find the Best{" "}
            <span className="text-[#D29E0D]">Lawyers for Loan Settlement</span>
          </h1>
          <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed">
            Browse our comprehensive directory of top-rated advocates across
            different cities in India. We can assist you in finding the right
            professional for your loan settlement needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationData.map((loc, index) => (
            <Link
              key={index}
              href={`/lawyer-by-city/${loc.slug}`}
              className="bg-white/70 backdrop-blur-sm border border-black/5 hover:border-[#D29E0D]/30 p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:-translate-y-1 block relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#D29E0D] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-base md:text-lg font-medium text-[#30261C] group-hover:text-[#D29E0D] transition-colors leading-snug">
                {loc.title}
              </h3>
              <div className="mt-4 flex items-center text-sm text-[#D29E0D] font-medium opacity-100 transition-all duration-300">
                View Details{" "}
                <span className="ml-1 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
