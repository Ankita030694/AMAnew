import React from "react";
import Link from "next/link";
import { getExpertiseData, slugify } from "./expertiseData";

export const metadata = {
  title: "Lawyers by Expertise | AMA Legal Solutions",
  description:
    "Find the best advocates and lawyers for specialized legal areas. Browse our comprehensive list of legal expertise to find the right professional.",
};

const ITEMS_PER_PAGE = 500;

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
    </div>
  );
}
