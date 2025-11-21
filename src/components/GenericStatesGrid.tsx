"use client";

import { useRouter } from 'next/navigation';

interface GenericStatesGridProps {
  serviceName: string;
  servicePath: string;
  customSlugs?: Record<string, string>;
}

export default function GenericStatesGrid({ serviceName, servicePath, customSlugs }: GenericStatesGridProps) {
  const router = useRouter();
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh", 
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];

  const unionTerritories = [
    "Andaman and Nicobar",
    "Chandigarh",
    "Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"
  ];

  // Function to convert state/territory name to slug
  const createSlug = (name: string) => {
    return name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/and/g, 'and');
  };

  // Function to handle state/territory click
  const handleLocationClick = (location: string) => {
    if (customSlugs && customSlugs[location]) {
      router.push(`/services/${servicePath}/${customSlugs[location]}`);
      return;
    }
    const slug = createSlug(location);
    router.push(`/services/${servicePath}/${slug}`);
  };

  return (
    <section className="my-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        We Serve All States & Union Territories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-9 gap-3">
        {/* States */}
        {states.map((state, index) => (
          <button 
            key={`state-${index}`} 
            className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
            onClick={() => handleLocationClick(state)}
          >
            <span className="text-gray-800 font-medium text-sm leading-tight block">{state}</span>
          </button>
        ))}
        
        {/* Union Territories */}
        {unionTerritories.map((territory, index) => (
          <button 
            key={`territory-${index}`} 
            className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 hover:shadow-[#D2A02A]/20 hover:border-[#D2A02A]/30 hover:bg-[#D2A02A]/5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D2A02A]/30 focus:ring-offset-2"
            onClick={() => handleLocationClick(territory)}
          >
            <span className="text-gray-800 font-medium text-sm leading-tight block">{territory}</span>
          </button>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700">
          Our {serviceName.toLowerCase()} services are available across all states and union territories in India
        </p>
      </div>
    </section>
  );
}
