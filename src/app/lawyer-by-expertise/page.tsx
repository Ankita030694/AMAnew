import React from "react";
import Link from "next/link";
import { getExpertiseData, slugify } from "./expertiseData";

export const metadata = {
  title: "Lawyers by Expertise | AMA Legal Solutions",
  description:
    "Find the best advocates and lawyers for specialized legal areas. Browse our comprehensive list of legal expertise to find the right professional.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/lawyer-by-expertise',
  },
};

const ITEMS_PER_PAGE = 60;

export default async function LawyerByExpertise({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const page =
    typeof resolvedSearchParams?.page === "string" ? parseInt(resolvedSearchParams.page, 10) : 1;
  const currentPage = isNaN(page) || page < 1 ? 1 : page;

  const { array: expertiseData } = getExpertiseData();

  const totalItems = expertiseData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  const currentItems = expertiseData.slice(startIndex, endIndex);

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
            Find Lawyers by <span className="text-[#D29E0D]">Expertise</span>
          </h1>
          <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed">
            Browse our comprehensive directory of specialized advocates for
            various legal matters. Showing {startIndex + 1} - {endIndex} of{" "}
            {totalItems} expertise areas.
          </p>
        </div>

        {/* 5 Column Layout as requested */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {currentItems.map((expertise, index) => {
            const slug = slugify(expertise);
            return (
              <Link
                href={`/lawyer-by-expertise/${slug}`}
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex flex-wrap justify-center gap-2 items-center">
            {currentPage > 1 && (
              <Link
                href={`/lawyer-by-expertise?page=${currentPage - 1}`}
                className="px-4 py-2 border border-[#30261C]/20 rounded-md hover:bg-[#D29E0D] hover:text-white hover:border-[#D29E0D] transition-all"
              >
                Previous
              </Link>
            )}
            
            <div className="px-4 py-2 text-sm text-[#30261C]/60">
              Page {currentPage} of {totalPages}
            </div>

            {currentPage < totalPages && (
              <Link
                href={`/lawyer-by-expertise?page=${currentPage + 1}`}
                className="px-4 py-2 border border-[#30261C]/20 rounded-md hover:bg-[#D29E0D] hover:text-white hover:border-[#D29E0D] transition-all"
              >
                Next
              </Link>
            )}
          </div>
        )}
      </div>

      {/* SEO Content Section */}
      <section className="mt-24 max-w-5xl mx-auto relative z-10 border-t border-[#30261C]/5 pt-16 px-6 pb-12">
        <h2 className="text-[28px] md:text-[40px] font-semibold text-[#30261C] mb-8 text-center" style={{ fontFamily: "var(--font-polysans)" }}>
          Strategic Legal Solutions Through Specialized Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#30261C]/80 leading-relaxed text-lg">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#30261C]">The Power of Specialization in Law</h3>
            <p>
              The legal field is vast, and no single advocate can be a master of every domain. This is why specialization is so critical in the modern legal landscape. A lawyer who focuses exclusively on a particular area-be it intellectual property, banking law, or matrimonial disputes-brings a level of depth and tactical awareness that a general practitioner may not possess.
            </p>
            <p>
              <strong>AMA Legal Solutions</strong> connects you with specialists who have dedicated their careers to mastering specific legal domains. By choosing an expert with focused experience, you ensure that your legal strategy is built on a foundation of deep knowledge and successful precedents.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#30261C]">Finding the Right Expert for Your Unique Case</h3>
            <p>
              Every legal challenge has its own set of rules, precedents, and procedural requirements. For instance, a trademark infringement case requires a deep understanding of IP laws and the registry&apos;s procedures, while a debt recovery case involves the specific regulations of the RBI and the Debt Recovery Tribunal.
            </p>
            <p>
              At <strong>AMA Legal Solutions</strong>, we meticulously vet our network of advocates to ensure they meet our high standards of professionalism and expertise. Our goal is to empower individuals and businesses by providing a platform where they can easily find and connect with the right legal experts for their needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
