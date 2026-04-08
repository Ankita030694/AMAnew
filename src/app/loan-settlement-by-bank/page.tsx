import React from "react";
import Link from "next/link";
import banksData from "./banks.json";

export const metadata = {
  title: "Loan Settlement by Bank | AMA Legal Solutions",
  description:
    "Find expert legal assistance for loan settlement and grievance redressal across various banks and NBFCs in India.",
};

// Helper function to convert bank names to URL-friendly slugs
const generateSlug = (name: any) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

export default function LoanSettlementByBank() {
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
            Loan Settlement by{" "}
            <span className="text-[#D29E0D]">Bank & NBFC</span>
          </h1>
          <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed">
            Browse our comprehensive directory of banks and financial institutions in India. We provide expert legal assistance to help you navigate your loan settlement and grievance redressal needs effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {banksData.map((bank, index) => (
            <Link
              key={index}
              href={`/loan-settlement-by-bank/${generateSlug(bank.company)}`}
              className="bg-white/70 backdrop-blur-sm border border-black/5 hover:border-[#D29E0D]/30 p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:-translate-y-1 block relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#D29E0D] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-base md:text-lg font-medium text-[#30261C] group-hover:text-[#D29E0D] transition-colors leading-snug">
                {bank.company}
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