'use client'
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Manoj Veerakumar",
    // role: "CEO, TechCorp",
    content: "Phenomenal services! Turnaround time was half day to get the papers in order, extend a reasonable price, and go for representation the next day to get a favourable result. Truly appreciate the efforts of Mr.Anand & team of AMA Legal solutions. Would strongly recommend them.",
    image: "/testi1.png",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Sanskar Bansal", 
    // role: "Entrepreneur",
    content: "I had the pleasure of consulting with Anand at AMA Legal Solutions recently regarding my financial concerns, and I couldn't be more impressed. Anand took the time to understand my situation thoroughly and provided clear, practical solutions to address my financial challenges.",
    image: "/testi2.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Pratichi Pradhan",
    // role: "General Counsel, Fortune 500",
    content: "I recently worked with AMA Legal solutions, I was impressed with their professionalism and expertise. The team was responsive to my inquiries, and their attention to detail in handling my legal matters was commendable. The services provided were thorough, and I felt confident in their guidance throughout the process.",
    image: "/testi3.png",
    rating: 5,
  },
];

export default function LegalExcellence() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar 
        key={i} 
        className={`${i < rating ? "text-yellow-400" : "text-gray-300"} inline-block text-sm md:text-base`} 
      />
    ));
  };

  return (
    <div className="relative py-12 overflow-hidden bg-gradient-to-b from-white to-[#F5F2EB]" ref={testimonialsRef}>
      {/* Decorative elements - hidden on mobile */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#5A4C33] rounded-full opacity-10"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#5A4C33] rounded-full opacity-5"></div>
        <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-[#4A3C23] rounded-full opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-sm md:text-base font-semibold text-[#5A4C33] tracking-wide uppercase">Voices of Success</h2>
            <h2 className="mt-2 text-4xl font-bold text-[#000000] sm:tracking-tight">
              Client Testimonials
            </h2>
            <div className="relative mt-5 mb-10">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-[#5A4C33] opacity-20"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-gradient-to-b from-white to-[#F5F2EB] text-[#5A4C33]">
                  <svg className="h-4 w-4 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-5-8h2a3 3 0 116 0h2a5 5 0 00-10 0z" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative">
          {/* <div className="flex justify-center mb-6 md:mb-8 gap-1 md:gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 md:h-3 w-8 md:w-12 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "bg-[#5A4C33]" : "bg-gray-300 hover:bg-[#5A4C33]/30"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div> */}

          <div className="relative h-[600px] sm:h-[500px] md:h-[400px]">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, idx) => (
                idx === activeIndex && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 30,
                      duration: 0.5
                    }}
                    className="absolute inset-0 w-full h-full flex justify-center items-center px-4"
                  >
                    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl duration-300">
                      <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-1/3 bg-gradient-to-b from-[#5A4C33] to-[#4A3C23] text-white p-6 md:p-8">
                          <div>
                            <FaQuoteLeft className="text-3xl md:text-4xl text-[#C8BEA9] mb-4" />
                            <div className="h-1 w-16 bg-white mb-4"></div>
                            <h3 className="text-lg md:text-xl font-bold">{testimonial.name}</h3>
                            {/* <p className="text-sm md:text-base text-[#E0D8C7]">{testimonial.role}</p> */}
                          </div>
                          <div className="mt-4 mb-2">
                            <div className="flex space-x-1">
                              {renderStars(testimonial.rating)}
                            </div>
                            <p className="text-[#E0D8C7] mt-1 text-xs md:text-sm">Outstanding Service</p>
                          </div>
                        </div>
                        <div className="w-full lg:w-2/3 p-6 md:p-8 lg:p-12">
                          <div className="flex items-center mb-6">
                            <div className="flex-shrink-0 mr-4">
                              <Image
                                className="h-20 w-20 rounded-full object-cover border-4 border-[#F5F2EB] shadow"
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={80}
                                height={80}
                                onError={(e) => {
                                  // @ts-expect-error - Event target type needs assertion
                                  e.target.src = "https://via.placeholder.com/150";
                                }}
                              />
                            </div>
                            <div className="hidden sm:block lg:hidden">
                              <h3 className="text-lg md:text-xl font-medium text-[#000000]">{testimonial.name}</h3>
                              {/* <p className="text-xs md:text-sm text-gray-500">{testimonial.role}</p> */}
                              <div className="flex mt-1">
                                {renderStars(testimonial.rating)}
                              </div>
                            </div>
                          </div>
                          <div className="prose prose-lg text-gray-700 max-w-none">
                            <p className="italic">&ldquo;{testimonial.content}&rdquo;</p>
                          </div>
                          <div className="mt-6 md:mt-8 flex">
                            <motion.div 
                              className="bg-[#F5F2EB] text-[#5A4C33] py-2 px-4 rounded-full text-xs md:text-sm font-medium"
                              whileHover={{ y: -2, backgroundColor: "#E8E1D5" }}
                            >
                              Verified Client
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center space-x-3 mt-10">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#D2A02A" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))}
              className="px-3 md:px-5 py-2 md:py-3 flex items-center justify-center space-x-2 border border-transparent text-sm md:text-base font-medium rounded-lg shadow-sm text-white bg-[#D2A02A] hover:bg-[#4A3C23] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5A4C33] transition-all duration-200"
            >
              <FaChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden md:inline">Previous</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#D2A02A" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex((current) => (current + 1) % testimonials.length)}
              className="px-3 md:px-5 py-2 md:py-3 flex items-center justify-center space-x-2 border border-transparent text-sm md:text-base font-medium rounded-lg shadow-sm text-white bg-[#D2A02A] hover:bg-[#4A3C23] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5A4C33] transition-all duration-200"
            >
              <span className="hidden md:inline">Next</span>
              <FaChevronRight className="h-3 w-3 md:h-4 md:w-4" />
            </motion.button>
          </div>

          <div className="flex justify-center mt-10">
            <Link href="https://maps.app.goo.gl/NWym1wPL2CTFS9qo8">
              <button className="bg-[#D2A02A] hover:bg-[#5A4C33] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center">
                Our Reviews
              </button>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}