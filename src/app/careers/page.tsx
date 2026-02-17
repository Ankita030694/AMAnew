import React from "react";
import Navbar from "@/newcomp/Navbar";
import CareersForm from "./CareersForm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | AMA Legal Solutions",
  description: "Join our team at AMA Legal Solutions. Explore open positions for Business Development Associate, Legal Associate, and SDE Intern.",
};

const OPEN_POSITIONS = [
  {
    title: "Business Development Associate",
    type: "Full-Time",
    location: "Gurugram / In Office",
    description: "Drive growth and expand our client base by identifying new business opportunities and maintaining strong relations.",
    slug: "business-development-associate"
  },
  {
    title: "Legal Associate",
    type: "Full-Time",
    location: "Gurugram / In Office",
    description: "Support our legal team in case research, document drafting, and client representation across various legal domains.",
    slug: "legal-associate"
  },
  {
    title: "SDE Intern",
    type: "Internship",
    location: "In Office",
    description: "Assist in developing and maintaining our digital platforms, focusing on performance, scalability, and user experience.",
    slug: "sde-intern"
  },
];

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F5EC] font-[family-name:var(--font-polysans)]">
      <Navbar />
      
      <main className="pt-[120px] pb-[100px] px-4 md:px-8 max-w-[1200px] mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-[40px] md:text-[60px] font-bold text-[#30261C] leading-tight mb-6">
            Join Our Mission
          </h1>
          <p className="text-[18px] md:text-[22px] text-[#30261C]/80 max-w-2xl mx-auto">
            At AMA Legal Solutions, we are building the future of legal services. Join a team dedicated to excellence, innovation, and client success.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Open Positions */}
          <section>
            <h2 className="text-3xl font-bold text-[#30261C] mb-8">Open Positions</h2>
            <div className="space-y-6">
              {OPEN_POSITIONS.map((job) => (
                <div 
                  key={job.title}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-[#D2A02A]/10 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#30261C]">{job.title}</h3>
                      <p className="text-sm text-[#D2A02A] font-semibold">{job.type} • {job.location}</p>
                    </div>
                  </div>
                  <p className="text-[#30261C]/80 leading-relaxed mb-4">
                    {job.description}
                  </p>
                  <Link 
                    href={`/careers/${job.slug}`}
                    className="text-[#D2A02A] font-semibold hover:underline flex items-center gap-2 group"
                  >
                    View Details & Requirements
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Right: Application Form */}
          <section className="lg:sticky lg:top-[120px] h-fit">
            <CareersForm />
          </section>
        </div>
      </main>
    </div>
  );
};

export default CareersPage;
