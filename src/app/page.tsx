'use client'
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import AskExperts from "@/components/AskExperts";
import LegalExcellence from "@/components/LegalExcellence";
import Clients from "@/components/Clients";
import TributeCard from "@/components/TributeCard";
// import Yt from "@/components/Yt";
import AnimatedCounter from "@/components/AnimatedCounter";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const locations = [
    {
      id: 1,
      image: "/city1.svg",
      name: "Downtown Office",
      address: "123 Legal Avenue, Downtown",
      phone: "(555) 123-4567",
      link: "/locations/newdelhi",
    },
    {
      id: 2,
      image: "/city2.svg",
      name: "Westside Branch",
      address: "456 Justice Blvd, Westside",
      phone: "(555) 234-5678",
      link: "/locations/mumbai",
    },
    {
      id: 3,
      image: "/city3.svg",
      name: "Suburban Office",
      address: "789 Counsel Lane, Suburbia",
      phone: "(555) 345-6789",
      link: "/locations/kolkata",
    },
    {
      id: 4,
      image: "/city4.svg",
      name: "Suburban Office",
      address: "789 Counsel Lane, Suburbia",
      phone: "(555) 345-6789",
      link: "/locations/jaipur",
    },
    {
      id: 5,
      image: "/city5.svg",
      name: "Suburban Office",
      address: "789 Counsel Lane, Suburbia",
      phone: "(555) 345-6789",
      link: "/locations/bengaluru",
    },
    {
      id: 6,
      image: "/city6.svg",
      name: "Suburban Office",
      address: "789 Counsel Lane, Suburbia",
      phone: "(555) 345-6789",
      link: "/locations/chennai",
    },
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? locations.length - 1 : prev - 1));
  };

  return (
    <main>
      <Hero />
      <Clients />
      <PracticeAreas />
      <AskExperts />
      <TributeCard />
      <div className="text-white py-10 relative">
        <div className="absolute inset-0">
          <Image
            src="/bannerbg.png"
            alt="Background"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedCounter end={3000} label="Cases Handled" />
            <AnimatedCounter end={5000} label="Clients Served" />
            <AnimatedCounter end={40} label="Years Experience" />
            <AnimatedCounter end={20} label="Our Offices" />
          </div>
        </div>
      </div>
      {/* <Yt /> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#5A4C33] mb-4">
            Our Locations
          </h2>
          <div className="w-24 h-1 bg-[#D2A02A] mx-auto" />
          <p className="max-w-2xl mx-auto mt-6 text-gray-600">
            With offices strategically located throughout the region, we make
            expert legal counsel accessible wherever you are.
          </p>
        </div>

        {/* Desktop view - visible on sm and larger screens */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-8">
          {locations.map((location) => (
            <div key={location.id} className="group relative">
              <a href={location.link} className="block h-full">
                <div className="overflow-hidden rounded-t-xl">
                  <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                    <div
                      className="h-full w-full bg-no-repeat bg-contain bg-center transform group-hover:scale-110 transition-transform duration-500 group-hover:filter group-hover:brightness-50"
                      style={{ backgroundImage: `url(${location.image})` }}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-[#D2A02A] text-white font-semibold py-2 px-4 rounded">
                    View More
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        {/* Mobile carousel - only visible on xs screens */}
        <div className="sm:hidden mt-8">
          <div className="relative">
            {/* Current slide */}
            <div className="px-4">
              <div className="group relative">
                <a href={locations[currentSlide].link} className="block h-full">
                  <div className="overflow-hidden rounded-t-xl">
                    <div className="h-48 overflow-hidden">
                      <div
                        className="h-full w-full bg-no-repeat bg-contain bg-center transform group-hover:scale-110 transition-transform duration-500 group-hover:filter group-hover:brightness-50"
                        style={{ backgroundImage: `url(${locations[currentSlide].image})` }}
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-[#D2A02A] text-white font-semibold py-2 px-4 rounded">
                      View More
                    </button>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Carousel controls */}
            <div className="flex justify-between mt-4">
              <button 
                onClick={prevSlide} 
                className="bg-[#D2A02A] text-white p-2 rounded-full"
              >
                <ChevronLeft size={20} />
              </button>
              
              {/* Pagination indicators */}
              <div className="flex items-center space-x-1">
                {locations.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-2 w-2 rounded-full cursor-pointer ${
                      index === currentSlide ? 'bg-[#D2A02A]' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide} 
                className="bg-[#D2A02A] text-white p-2 rounded-full"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <LegalExcellence />
      {/* <Form /> */}
      {/* Other content */}
    </main>
  );
}