"use client";

import { useState, useEffect, useRef } from "react";

interface TableOfContentsProps {
  sections: Array<{
    id: string;
    title: string;
  }>;
  orientation?: 'horizontal' | 'vertical';
}

export default function TableOfContents({ sections, orientation = "horizontal" }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      const offset = orientation === "vertical" ? 100 : 150;
      const scrollPosition = window.scrollY + offset;

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
  }, [sections, orientation]);

  // Scroll active button into view (only for horizontal)
  useEffect(() => {
    if (orientation === "horizontal" && activeSection && scrollContainerRef.current && buttonRefs.current[activeSection]) {
      const container = scrollContainerRef.current;
      const button = buttonRefs.current[activeSection];

      if (button) {
        const containerWidth = container.offsetWidth;
        const buttonLeft = button.offsetLeft;
        const buttonWidth = button.offsetWidth;

        // Calculate scroll position to center the button
        const scrollLeft = buttonLeft - containerWidth / 2 + buttonWidth / 2;

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  }, [activeSection, orientation]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = orientation === "vertical" ? 100 : 120; // Account for navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  // Scroll active button into view (for vertical)
  useEffect(() => {
    if (orientation === "vertical" && activeSection && scrollContainerRef.current && buttonRefs.current[activeSection]) {
      const container = scrollContainerRef.current;
      const button = buttonRefs.current[activeSection];

      if (button) {
        const containerTop = container.offsetTop;
        const containerHeight = container.clientHeight;
        const buttonTop = button.offsetTop - containerTop; // Relative position
        const buttonHeight = button.offsetHeight;

        // Calculate scroll position to keep button in view (e.g. center it)
        const scrollTop = buttonTop - containerHeight / 2 + buttonHeight / 2;

        container.scrollTo({
          top: scrollTop,
          behavior: "smooth",
        });
      }
    }
  }, [activeSection, orientation]);


  if (orientation === "vertical") {
    return (
      <nav 
        ref={scrollContainerRef}
        className="flex flex-col space-y-1 max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar pr-2"
      >
        {sections.map((section) => (
          <button
            key={section.id}
            ref={(el) => {
              buttonRefs.current[section.id] = el;
            }}
            onClick={() => scrollToSection(section.id)}
            className={`text-left px-4 py-3 text-sm font-medium rounded-r-lg transition-all duration-200 border-l-4 flex-shrink-0 ${
              activeSection === section.id
                ? "bg-gray-50 border-[#D2A02A] text-[#D2A02A]"
                : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            {section.title}
          </button>
        ))}
      </nav>
    );
  }

  return (
    <div className="bg-white border-b border-gray-200 sticky top-20 z-30 shadow-sm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div 
          ref={scrollContainerRef}
          className="flex items-center py-3 overflow-x-auto no-scrollbar scroll-smooth"
        >
          <div className="flex items-center space-x-1 md:space-x-4 mx-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                ref={(el) => {
                  buttonRefs.current[section.id] = el;
                }}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
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
