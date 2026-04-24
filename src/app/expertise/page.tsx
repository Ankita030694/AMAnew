import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "All Legal Expertise Areas | AMA Legal Solutions",
  description:
    "Explore our comprehensive list of legal expertise areas, covering family law, civil property, documentation, legal notices, and more.",
};

// Helper to convert expertise string to URL slug
const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

type ExpertiseCategory = {
  category: string;
  items: string[];
};

export default async function ExpertiseDirectory() {
  // Read data
  const dataPath = path.join(process.cwd(), "src/app/expertise/expertiseData.json");
  const rawData = await fs.promises.readFile(dataPath, "utf-8");
  const groupedData: ExpertiseCategory[] = JSON.parse(rawData);

  // Calculate total items
  const totalItems = groupedData.reduce((acc, cat) => acc + cat.items.length, 0);

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

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-16 mt-12">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6 text-[#30261C]"
            style={{ fontFamily: "var(--font-polysans)" }}
          >
            Our Areas of <span className="text-[#D29E0D]">Expertise</span>
          </h1>
          <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed">
            Browse our comprehensive directory of specialized legal services. We offer support across {totalItems} distinct areas of practice.
          </p>
        </div>

        <div className="space-y-16">
          {groupedData.map((group, groupIdx) => (
            <div key={groupIdx} className="bg-white/40 backdrop-blur-md rounded-2xl p-6 md:p-10 border border-[#30261C]/5">
              <h2 className="text-2xl md:text-3xl font-medium text-[#30261C] mb-8 pb-4 border-b border-[#30261C]/10 flex items-center">
                <span className="w-2 h-8 bg-[#D29E0D] rounded-full mr-4"></span>
                {group.category}
              </h2>

              {/* 5 Column Layout as requested */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {group.items.map((expertise, index) => {
                  const slug = slugify(expertise);
                  return (
                    <Link
                      href={`/expertise/${slug}`}
                      key={index}
                      className="bg-white/70 backdrop-blur-sm border border-black/5 hover:border-[#D29E0D]/30 p-4 rounded-xl transition-all duration-300 hover:shadow-[0_4px_20px_rgb(0,0,0,0.04)] group hover:-translate-y-1 block relative"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#D29E0D] opacity-0 group-hover:opacity-100 transition-opacity rounded-l-xl"></div>
                      <h3 className="text-sm font-medium text-[#30261C] group-hover:text-[#D29E0D] transition-colors leading-snug">
                        {expertise}
                      </h3>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEO Content Section */}
      <section className="mt-24 max-w-5xl mx-auto relative z-10 border-t border-[#30261C]/5 pt-16 px-6">
        <h2 className="text-[28px] md:text-[40px] font-semibold text-[#30261C] mb-8 text-center" style={{ fontFamily: "var(--font-polysans)" }}>
          Professional Legal Expertise Across Diverse Domains
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#30261C]/80 leading-relaxed text-lg">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#30261C]">Navigating the Complexities of Indian Law</h3>
            <p>
              In an ever-evolving legal landscape, having access to specialized knowledge is essential for protecting your rights and interests. <strong>AMA Legal Solutions</strong> offers a comprehensive directory of legal expertise, covering everything from family law and civil disputes to complex corporate litigation and intellectual property protection. Our firm is dedicated to providing high-quality legal advice that is both practical and results-oriented.
            </p>
            <p>
              The legal system in India is vast and intricate, with specialized courts and tribunals handling different types of cases. Whether it&apos;s the Debt Recovery Tribunal (DRT) for banking matters, the RERA authorities for real estate disputes, or the Trade Marks Registry for IP protection, each domain requires a specific set of skills and experience.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#30261C]">Why Specialized Legal Representation Matters</h3>
            <p>
              By choosing an advocate with deep expertise in your specific legal challenge, you increase the likelihood of a favorable outcome. Specialized representation ensures that every nuance of the law is considered, every procedural requirement is met, and every strategic advantage is leveraged in your favor.
            </p>
            <p>
              At <strong>AMA Legal Solutions</strong>, we pride ourselves on our client-centric approach. We understand that every legal situation is unique, which is why we offer tailored solutions across dozens of practice areas. Our team of experienced advocates combines local knowledge with national standards of excellence, ensuring that our clients receive the best possible representation regardless of the complexity of their case.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
