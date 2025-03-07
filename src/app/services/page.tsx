'use client'

import { useState, useEffect, useRef } from "react";
import PracticeAreas from "@/components/PracticeAreas";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBalanceScale, 
  faCertificate, 
  faHandshake, 
  faTrophy, 
  faChevronLeft, 
  faChevronRight 
} from '@fortawesome/free-solid-svg-icons';
import AnimatedCounter from "@/components/AnimatedCounter";

// Animated counter hook
const useCounter = (end: number, duration = 2) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime: number;
          const updateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };
          requestAnimationFrame(updateCount);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    
    return () => observer.disconnect();
  }, [end, duration]);
  
  return { count, nodeRef };
};

// Testimonials data
const testimonials = [
  {
    id: 1,
    quote: "The team at AMA Law provided exceptional guidance during my real estate transaction. Their attention to detail saved me from potential legal issues I hadn't even considered.",
    author: "Sarah M.",
    position: "Homeowner"
  },
  {
    id: 2,
    quote: "As a small business owner, having AMA Law handle our corporate matters has been invaluable. Their strategic advice helped us navigate complex regulations while growing our company.",
    author: "Michael T.", 
    position: "CEO, TechStart Inc."
  },
  {
    id: 3,
    quote: "During my divorce case, the compassion and expertise I received from AMA Law made an incredibly difficult time much more manageable. I couldn't recommend them more highly.",
    author: "Jennifer K.",
    position: "Family Law Client"
  }
];

export default function Services() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Counter stats
  const casesWon = useCounter(2500);
  const clientsServed = useCounter(5000);
  const yearsExperience = useCounter(35);
  const awards = useCounter(120);
  
  // For floating decorative elements
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const floatingRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleTestimonialSelect = (index: number) => {
    setCurrentTestimonial(index);
  };
  
  return (
    <main className="overflow-hidden">
      {/* Dynamic Hero Section with Parallax */}
      <div className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <motion.div 
          style={{ 
            scale: heroScale,
            opacity: heroOpacity,
            y: useTransform(scrollYProgress, [0, 0.5], [0, 100])
          }}
          className="absolute inset-0"
        >
         <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover" 
            style={{ objectFit: 'cover' }}
          >
            <source src="/about.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-shadow-lg relative">
                <span className="inline-block">Our Legal </span>
                <span className="inline-block relative">
                  Services
                  <motion.div 
                    className="absolute -bottom-3 left-0 right-0 h-1 bg-[#D2A02A]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Comprehensive legal solutions tailored to your needs with 
              <span className="relative font-semibold px-2">
                <span className="relative z-10">decades of expertise</span>
                <span className="absolute inset-0 bg-[#D2A02A]/20 -skew-x-6 rounded z-0" />
              </span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10"
            >
              <button 
                type="button"
                className="bg-[#D2A02A] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#b88a24] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Consult Now</span>
                <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </motion.div>
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <motion.div 
          className="absolute top-20 right-20 w-24 h-24 rounded-full border-4 border-[#D2A02A]/30 hidden md:block"
          style={{ y: floatingY, rotate: floatingRotate }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-16 h-16 bg-[#5A4C33]/10 rounded-lg hidden md:block"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 30]), rotate: useTransform(scrollYProgress, [0, 1], [0, -180]) }}
        />
      </div>

      {/* Practice Areas Section with enhanced styling */}
      <div className="bg-gradient-to-b from-[#F9F9F9] to-white relative">
        <div className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F9F9F9] -top-24" />
        <PracticeAreas />
      </div>
      
      {/* Animated Statistics Section */}
      {/* <div className="bg-[#5A4C33] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedCounter end={2500} label="Cases Won" />
            <AnimatedCounter end={5000} label="Clients Served" />
            <AnimatedCounter end={35} label="Years Experience" />
            <AnimatedCounter end={120} label="Awards Received" />
          </div>
        </div>
      </div> */}

      {/* Enhanced Why Choose Us Section */}
      <div className="bg-white py-10 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#D2A02A]/5 rounded-br-full" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#5A4C33]/5 rounded-tl-full" />
        
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl font-bold text-[#5A4C33] mb-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Why Choose Us
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-[#D2A02A] mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.p
              className="max-w-2xl mx-auto mt-6 text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Our firm combines decades of legal experience with personalized service to deliver exceptional results for all our clients.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: faBalanceScale,
                title: "Expert Team",
                description: "Our attorneys bring decades of combined experience across various practice areas."
              },
              {
                icon: faHandshake,
                title: "Client-Focused",
                description: "We prioritize understanding your unique needs to deliver tailored legal solutions."
              },
              {
                icon: faTrophy,
                title: "Proven Results",
                description: "Successfully handled thousands of cases with exceptional results for our clients."
              },
              {
                icon: faCertificate,
                title: "Ethical Practice",
                description: "We maintain the highest standards of integrity and professional ethics in all our work."
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="p-8 rounded-xl border border-gray-200 hover:border-[#D2A02A] transition-all duration-300 h-full group-hover:shadow-lg group-hover:-translate-y-2 bg-white relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#5A4C33]/10 flex items-center justify-center text-[#D2A02A] mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-all duration-300 mx-auto">
                    <FontAwesomeIcon icon={item.icon} className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#5A4C33] mb-4 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D2A02A]/20 to-[#5A4C33]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 z-0" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Testimonials Carousel */}
      <div className="bg-[#F9F9F9] py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div 
          className="absolute -right-16 top-20 w-80 h-80 rounded-full bg-[#D2A02A]/5"
          style={{ 
            y: useTransform(scrollYProgress, [0.5, 1], [100, -100]),
            opacity: useTransform(scrollYProgress, [0.5, 0.7], [0.3, 1])
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#5A4C33] mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-[#D2A02A] mx-auto" />
          </motion.div>
          
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 md:p-12 shadow-xl"
              >
                <div className="text-4xl text-[#D2A02A] mb-6">&quot;</div>
                <p className="text-lg md:text-xl italic text-gray-700 mb-8">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#5A4C33] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentTestimonial].author.charAt(0)}
                  </div>
                  <div className="ml-4 text-left">
                    <div className="font-semibold text-[#5A4C33]">{testimonials[currentTestimonial].author}</div>
                    <div className="text-sm text-gray-500">{testimonials[currentTestimonial].position}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                type="button"
                onClick={handlePrevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleTestimonialSelect(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentTestimonial ? 'bg-[#D2A02A] w-6' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
              <button 
                type="button"
                onClick={handleNextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#5A4C33] hover:bg-[#D2A02A] hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Call to Action Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#5A4C33] transform skew-y-2 origin-bottom-right" />
        <div className="relative bg-[#5A4C33] text-white py-24 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to Discuss Your Case?
            </motion.h2>
            <motion.p 
              className="text-xl mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our team is standing by to provide the expert legal guidance you need. Schedule your consultation today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <button 
                type="button"
                className="bg-[#D2A02A] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#5A4C33] transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10">Schedule a Consultation</span>
                <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </motion.div>
            <motion.div 
              className="mt-8 flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-white/80 hover:text-white transition-colors">
                <span className="font-medium">Call us:</span> (555) 123-4567
              </div>
              <div className="text-white/80 hover:text-white transition-colors">
                <span className="font-medium">Email:</span> contact@amalaw.com
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}