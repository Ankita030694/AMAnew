"use client";

import { useState, useEffect } from "react";

interface TableOfContentsProps {
  sections: Array<{
    id: string;
    title: string;
  }>;
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for navbar + table of contents

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Account for navbar + table of contents height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 sticky top-20 z-30 shadow-sm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-center py-3 overflow-x-auto">
          <div className="flex items-center space-x-1 md:space-x-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-[#D2A02A] text-white shadow-md"
                    : "text-gray-600 hover:text-[#D2A02A] hover:bg-gray-50"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
