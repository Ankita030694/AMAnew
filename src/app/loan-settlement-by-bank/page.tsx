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

      {/* SEO Content Section */}
      <section className="mt-24 max-w-5xl mx-auto relative z-10 border-t border-[#30261C]/5 pt-16 px-6 pb-12">
        <h2 className="text-[28px] md:text-[40px] font-semibold text-[#30261C] mb-8 text-center" style={{ fontFamily: "var(--font-polysans)" }}>
          Expert Legal Assistance for Bank & NBFC Loan Settlements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#30261C]/80 leading-relaxed text-lg">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#30261C]">Navigating One-Time Settlement (OTS) Policies</h3>
            <p>
              Loan settlement, often referred to as a One-Time Settlement (OTS), is a process where a borrower and a lender agree on a final payment amount that is less than the total outstanding debt. While this can provide significant relief for borrowers in financial distress, navigating the specific policies of different banks and NBFCs in India requires expert guidance.
            </p>
            <p>
              Each financial institution has its own criteria for eligibility, settlement percentages, and procedural requirements. Our advocates at <strong>AMA Legal Solutions</strong> are well-versed in RBI guidelines, the SARFAESI Act, and the latest banking regulations, ensuring you receive the best possible advice for your specific lender.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#30261C]">Why You Need Legal Advocacy for Settlements</h3>
            <p>
              Negotiating with banks can be an intimidating and complex process. Lenders often have strict recovery protocols and may use aggressive tactics to recover dues. Having a legal expert on your side ensures that your rights as a borrower are protected. We help you present a strong case for settlement, negotiate the best possible terms, and ensure that the final agreement is legally sound.
            </p>
            <p>
              Whether you are dealing with HDFC Bank, ICICI Bank, SBI, or NBFCs like Bajaj Finance and Hero Fincorp, our team is equipped to handle your case. At <strong>AMA Legal Solutions</strong>, our goal is to help you resolve your debt burden ethically and efficiently, allowing you to move toward a more stable financial future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}