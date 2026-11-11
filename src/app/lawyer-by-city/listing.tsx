import React from "react";
import Link from "next/link";
import { locationData } from "./locationData";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolved = await searchParams;
  const pageNum = typeof resolved?.page === "string" ? parseInt(resolved.page, 10) : 1;
  const page = isNaN(pageNum) || pageNum < 1 ? 1 : pageNum;
  const pageTitleSuffix = page > 1 ? ` (Page ${page})` : "";
  const pageDescSuffix = page > 1 ? ` - Page ${page}` : "";

  return {
    title: `Loan Settlement Lawyers by City${pageTitleSuffix} | AMA Legal`,
    description: `Find top advocates for loan settlement across Indian cities${pageDescSuffix}. Expert legal help for bank debt resolution with AMA Legal Solutions.`,
    alternates: {
      canonical: page > 1 ? `https://www.amalegalsolutions.com/lawyer-by-city?page=${page}` : 'https://www.amalegalsolutions.com/lawyer-by-city',
    },
  };
}

const ITEMS_PER_PAGE = 60;

export default async function LawyerByCity({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolved = await searchParams;
  const pageNum = typeof resolved?.page === "string" ? parseInt(resolved.page, 10) : 1;
  const currentPage = isNaN(pageNum) || pageNum < 1 ? 1 : pageNum;

  const totalItems = locationData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  const currentLocations = locationData.slice(startIndex, endIndex);

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
          {currentLocations.map((loc, index) => (
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

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-16">
            {currentPage > 1 && (
              <Link
                href={currentPage === 2 ? `/lawyer-by-city` : `/lawyer-by-city?page=${currentPage - 1}`}
                className="px-4 py-2 border border-[#30261C]/20 rounded-md hover:bg-[#D29E0D] hover:text-white hover:border-[#D29E0D] transition-all"
              >
                Previous
              </Link>
            )}
            
            <div className="px-4 py-2 text-sm text-[#30261C]/60 font-medium">
              Page {currentPage} of {totalPages}
            </div>

            {currentPage < totalPages && (
              <Link
                href={`/lawyer-by-city?page=${currentPage + 1}`}
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
          Expert Legal Representation Across Major Cities in India
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#30261C]/80 leading-relaxed text-lg">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#30261C]">The Importance of Local Legal Knowledge</h3>
            <p>
              Legal matters are deeply influenced by regional regulations, local court procedures, and the specific nuances of state-level laws. Finding a lawyer who is not only an expert in their field but also well-versed in the local legal environment is crucial for success. <strong>AMA Legal Solutions</strong> provides a curated directory of top-rated advocates across major Indian cities, including New Delhi, Mumbai, Bengaluru, Chennai, Kolkata, and beyond.
            </p>
            <p>
              Each city in India has its own judicial landscape, from District Courts and High Courts to specialized tribunals like the NCLT, DRT, and Consumer Commissions. Our local legal experts understand how these institutions operate in their respective regions.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#30261C]">Navigating Local Courts and Tribunals</h3>
            <p>
              This localized approach allows us to provide more strategic and efficient legal services, as our advocates can navigate the procedural requirements of local courts with ease. Whether you need assistance with property documentation in Jaipur, a loan settlement in Delhi, or corporate compliance in Mumbai, our city-specific legal directory is here to help.
            </p>
            <p>
              We understand that finding a reliable lawyer in a new city or for a specific local matter can be daunting. Our platform is designed to simplify this process by connecting you with experienced professionals who have a proven track record in their respective cities. At <strong>AMA Legal Solutions</strong>, we bridge the gap between clients and quality advocacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
