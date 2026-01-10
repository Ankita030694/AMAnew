'use client'
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Locations() {
  
  const locations = [
    {
      id: 1,
      name: "New Delhi",
      link: "/locations/newdelhi",
    },
    {
      id: 2,
      name: "Mumbai",
      link: "/locations/mumbai",
    },
    {
      id: 3,
      name: "Kolkata",
      link: "/locations/kolkata",
    },
    {
      id: 4,
      name: "Jaipur",
      link: "/locations/jaipur",
    },
    {
      id: 5,
      name: "Bengaluru",
      link: "/locations/bengaluru",
    },
    {
      id: 6,
      name: "Chennai",
      link: "/locations/chennai",
    },
    {
      id: 7,
      name: "Punjab",
      link: "/locations/punjab",
    },
    {
      id: 8,
      name: "Telangana",
      link: "/locations/telangana",
    },
    {
      id: 9,
      name: "Uttar Pradesh",
      link: "/locations/uttar-pradesh",
    },
    {
      id: 10,
      name: "Uttarakhand",
      link: "/locations/uttarakhand",
    },
    {
      id: 11,
      name: "Rajasthan",
      link: "/locations/rajasthan",
      image: "/city1.svg",
      description: "High Court (Jaipur/Jodhpur), Mining & Heritage Law",
    },
    {
      id: 12,
      name: "Chandigarh",
      link: "/locations/chandigarh", // Assuming link based on other entries, slug was in instruction but link is consistent
      image: "/city1.svg",
      description: "High Court, NCLT, CAT & Estate Office Matters",
    },
    {
      id: 13,
      name: "Tamil Nadu",
      link: "/locations/tamil-nadu",
      image: "/city1.svg",
      description: "Madras High Court, Corporate, SaaS & Maritime",
    },
    {
      id: 14,
      name: "Kerala",
      link: "/locations/kerala",
      image: "/city1.svg",
      description: "NRI Services, High Court & Maritime Law",
    },
    {
      id: 15,
      name: "Mizoram",
      link: "/locations/mizoram",
      image: "/city1.svg",
      description: "Gauhati High Court, Customary Law & Trade",
    },
    {
      id: 16, // Updated ID for Haryana
      name: "Haryana",
      link: "/locations/haryana",
    },
  ];
  

  return (
    <div className="w-full relative z-10 mt-10">
      <div className="text-center mb-10">
        <h2 className="text-[32px] md:text-[65px] font-semibold text-[#30261C] leading-[40px] md:leading-[65px] mb-[30px] opacity-100" style={{ fontFamily: "var(--font-polysans)" }}>
          Our Locations
        </h2>
        <p className="max-w-4xl mx-auto mt-6 text-[13px] md:text-[20px] leading-[24px] md:leading-[29px] font-normal opacity-85 text-[#30261C]">
        AMA Legal Solutions is a trusted law firm in India. It is headquartered in Gurugram with offices strategically located throughout the region, including as a law firm in Delhi, Mumbai, Bangalore, and Chennai. We make legal services accessible in India wherever you are.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location) => (
          <Link key={location.id} href={location.link} className="group block">
            <div className="h-full bg-white/50 backdrop-blur-sm border border-[#D29E0D]/20 rounded-2xl p-6 flex items-center justify-between transition-all duration-300 hover:bg-white hover:shadow-lg hover:border-[#D29E0D] hover:-translate-y-1">
              <span className="text-xl md:text-xl font-medium text-[#30261C] group-hover:text-[#D29E0D] transition-colors" style={{ fontFamily: "var(--font-polysans)" }}>
                {location.name}
              </span>
              <div className="w-10 h-10 rounded-full bg-[#30261C]/5 flex items-center justify-center text-[#30261C] group-hover:bg-[#D29E0D] group-hover:text-white transition-all duration-300">
                 <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
}
