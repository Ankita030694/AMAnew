import React from "react";
import Link from "next/link";
import { allServices, getSlug } from "./services-data";

export const metadata = {
  title: "Complete Loan Settlement Services & Legal Help | AMA Legal Solutions",
  description:
    "Explore our comprehensive range of loan settlement services including DRT lawyers, bank harassment protection, SARFAESI defense, and financial restructuring across India.",
};

export default function LoanSettlementServices() {
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
            Comprehensive{" "}
            <span className="text-[#D29E0D]">Loan Settlement Services</span>
          </h1>
          <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed">
            Explore our wide range of expert legal services designed to protect borrowers, 
            negotiate settlements, and resolve complex financial disputes across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allServices.map((service, index) => (
            <Link
              key={index}
              href={`/loan-settlement-services/${getSlug(service)}`}
              className="bg-white/70 backdrop-blur-sm border border-black/5 hover:border-[#D29E0D]/30 p-5 rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:-translate-y-1 block relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#D29E0D] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-sm md:text-base font-medium text-[#30261C] group-hover:text-[#D29E0D] transition-colors leading-snug">
                {service}
              </h3>
              <div className="mt-3 flex items-center text-xs text-[#D29E0D] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                Inquire Now{" "}
                <span className="ml-1 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* SEO Content Section */}
        <section className="mt-24 border-t border-[#30261C]/5 pt-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-[28px] md:text-[40px] font-semibold text-[#30261C] mb-10 text-center" style={{ fontFamily: "var(--font-polysans)" }}>
              Expert Loan Settlement Services: Your Path to Financial Recovery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#30261C]/80 leading-relaxed text-lg">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#30261C]">The Role of Professional Debt Resolution</h3>
                <p>
                  In today&apos;s complex financial world, unexpected life events can sometimes lead to unmanageable debt. Whether due to business losses, medical emergencies, or job instability, falling behind on loan repayments can be a stressful experience. Professional loan settlement services are designed to help borrowers navigate these challenges by providing a legal and structured path to debt resolution.
                </p>
                <p>
                  <strong>AMA Legal Solutions</strong> specializes in helping individuals and businesses regain their financial footing through strategic negotiation and expert legal advocacy. We offer a wide range of specialized services tailored to meet the unique needs of borrowers, including handling matters before the Debt Recovery Tribunal (DRT).
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#30261C]">Empowering Borrowers Through Legal Knowledge</h3>
                <p>
                  Our expertise includes protecting clients from bank harassment and providing a robust defense against SARFAESI Act proceedings. We also assist with credit card debt resolution, personal and business loan settlements, and financial restructuring. Our approach is always rooted in the latest RBI guidelines and legal precedents.
                </p>
                <p>
                  At <strong>AMA Legal Solutions</strong>, we believe that an informed borrower is a protected borrower. Beyond just negotiation, we aim to educate our clients about their legal rights and the options available to them. Let us help you break the cycle of debt and start fresh with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Footer */}
        <div className="mt-24 p-8 bg-[#30261C] text-[#EBE9E4] rounded-3xl text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-polysans)" }}>Need Expert Legal Protection?</h2>
                <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
                    With decades of experience in banking law and RBI regulations, our lawyers provide strategic protection for your financial rights.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <div className="flex flex-col items-center">
                        <p className="text-[#D29E0D] text-sm uppercase tracking-widest font-bold mb-1">Call or WhatsApp</p>
                        <a href="tel:+918700343611" className="text-2xl font-bold hover:text-[#D29E0D] transition-colors">+91 8700343611</a>
                    </div>
                    <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                    <div className="flex flex-col items-center">
                        <p className="text-[#D29E0D] text-sm uppercase tracking-widest font-bold mb-1">Email Us</p>
                        <a href="mailto:notify@amalegalsolutions.com" className="text-xl font-medium hover:text-[#D29E0D] transition-colors">notify@amalegalsolutions.com</a>
                    </div>
                </div>
                <div className="mt-10">
                    <Link href="/contact">
                        <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg">
                            Book a Free Consultation
                        </button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
