"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Refs for measuring positions
  const navLinksRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLAnchorElement>(null);
  const servicesRef = useRef<HTMLAnchorElement>(null);
  
  // State for animation targets
  const [targetX, setTargetX] = useState(0);
  const [isMounted, setIsMounted] = useState(false);


  // Scroll progress
  const { scrollY } = useScroll();
  
  // Map scroll (0-150px) to progress (0-1)
  const progress = useTransform(scrollY, [0, 150], [0, 1]);
  
  // Smooth out the progress
  const smoothProgress = useSpring(progress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });



  // Calculate positions on mount and resize
  useEffect(() => {
    setIsMounted(true);
    
    const calculatePositions = () => {
      // Small delay to ensure layout is stable
      setTimeout(() => {
        if (aboutUsRef.current && servicesRef.current && logoContainerRef.current) {
          const aboutRect = aboutUsRef.current.getBoundingClientRect();
          const servicesRect = servicesRef.current.getBoundingClientRect();
          const logoRect = logoContainerRef.current.getBoundingClientRect();
          
          // Calculate midpoint between the two links
          const midpoint = (aboutRect.right + servicesRect.left) / 2;
          // Start is center of logo container
          const logoCenter = logoRect.left + logoRect.width / 2;
          
          const distance = midpoint - logoCenter;
          setTargetX(distance);
        }
      }, 200);
    };

    calculatePositions();
    window.addEventListener('resize', calculatePositions);
    return () => window.removeEventListener('resize', calculatePositions);
  }, []);

  // Animation values
  const x = useTransform(smoothProgress, [0, 1], [0, targetX]);
  // More detailed arc
  const y = useTransform(smoothProgress, [0, 1], [0, 0]);
  // No rotation wiggle
  const rotate = useTransform(smoothProgress, [0, 1], [0, 0]);
  // Subtle scale pop then shrink
  const scale = useTransform(smoothProgress, [0, 0.15, 1], [1, 1.02, 0.7]);
  
  // Professional cross-scale swap
  const logoOpacity = useTransform(smoothProgress, [0.75, 0.9], [1, 0]);
  const logoScale = useTransform(smoothProgress, [0.75, 0.9], [1, 0.4]);
  
  const boxOpacity = useTransform(smoothProgress, [0.8, 1], [0, 1]);
  const boxScale = useTransform(smoothProgress, [0.8, 1], [0.4, 1]);

  // Motion blur effect
  const blur = useTransform(
    smoothProgress, 
    [0, 0.4, 0.6, 1], 
    ["blur(0px)", "blur(1.5px)", "blur(1.5px)", "blur(0px)"]
  );

  // Subtle glow during move
  const boxShadow = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [
      "0px 0px 0px rgba(210, 158, 13, 0)",
      "0px 0px 20px rgba(210, 158, 13, 0.3)",
      "0px 0px 0px rgba(210, 158, 13, 0)"
    ]
  );

  // Background color (keep transparent as requested)
  const backgroundColor = useTransform(
    smoothProgress,
    [0, 1],
    ["transparent", "transparent"]
  );

  // Spacer width for the logo to dock
  const spacerWidth = useTransform(smoothProgress, [0, 1], ["0px", "80px"]);
  // Animate negative margin to counteract the gap when spacer is "hidden"
  // Assuming gap-15 is 60px. At 0, we need -60px to cancel one gap.
  const spacerMarginLeft = useTransform(smoothProgress, [0, 1], ["-60px", "-15px"]);

  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileInsightsOpen, setIsMobileInsightsOpen] = useState(false);

  if (!isMounted) return null;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-20 py-4 pointer-events-auto md:pointer-events-none bg-[rgba(255,255,255,0.2)] backdrop-blur-[12px] border-b border-white/10 md:bg-transparent md:backdrop-blur-none md:border-none transition-all duration-300">
        <div className="max-w-8xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Left: Logo */}
          <div className="flex-shrink-0 relative z-50" ref={logoContainerRef}>
            {/* Desktop Animated Logo */}
            <motion.div
              style={{
                x,
                y,
                rotate,
                scale,
                boxShadow,
                backgroundColor,
                filter: blur,
                borderRadius: "12px",
                padding: 0,
              }}
              className="hidden md:flex relative items-center justify-center origin-center"
            >
              <Link href="/" className="block relative" onClick={() => setIsMobileMenuOpen(false)}>
                {/* Original Logo */}
                <motion.div
                  style={{
                    opacity: logoOpacity,
                    scale: logoScale
                  }}
                  className="relative"
                >
                  <img
                    src="/newAssets/logo/ama.svg"
                    alt="AMA Legal Solutions"
                    width={310}
                    height={60}
                    className="h-10 md:h-12 w-auto"

                  />
                </motion.div>

                {/* Box Logo */}
                <motion.div
                  style={{
                    opacity: boxOpacity,
                    scale: boxScale
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img
                    src="/newAssets/logo/ama_box.svg"
                    alt="AMA Legal Solutions"
                    width={40}
                    height={40}
                    className="h-12 w-12 md:h-15 md:w-15"
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* Mobile Static Logo */}
            <div className="md:hidden">
                <Link href="/" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                    <img
                    src="/newAssets/logo/ama.svg"
                    alt="AMA Legal Solutions"
                    width={310}
                    height={60}
                    className="h-10 w-auto"

                    />
                </Link>
            </div>
          </div>

          {/* Desktop Middle: Nav Links */}
          <div
            ref={navLinksRef}
            className="hidden md:flex items-center gap-15 px-15 py-3 rounded-full relative z-40 transition-all duration-300"
            style={{
              background: "rgba(48, 38, 28, 0.90)",
              boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.10)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Link href="/" className="text-white/90 hover:text-white transition-colors text-lg font-light">
              Home
            </Link>
            <Link ref={aboutUsRef} href="/about" className="text-white/90 hover:text-white transition-colors text-lg font-light">
              About Us
            </Link>

            {/* Spacer for Logo */}
            <motion.div
              style={{
                width: spacerWidth,
                marginLeft: spacerMarginLeft
              }}
              className="h-1 flex-shrink-0"
            />

            <Link ref={servicesRef} href="/services" className="text-white/90 hover:text-white transition-colors text-lg font-light">
              Services
            </Link>

            {/* Dropdown */}
            <div
              className="group h-full flex items-center"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-white/90 hover:text-white transition-colors text-lg font-light h-full"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Insights
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 w-full pt-2 z-50 cursor-default"
                    style={{ top: "100%" }}
                  >
                    <div 
                      className="flex w-full p-4 gap-8"
                      style={{
                        borderRadius: "25px",
                        background: "rgba(255, 255, 255, 1)",
                        backdropFilter: "blur(8px)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                      }}
                    >
                      {/* Left Column */}
                      <div className="flex-1 flex flex-col justify-start gap-8 pl-8 pt-5">
                        <Link href="/articles" className="flex items-center gap-6 group hover:opacity-80 transition-opacity">
                          <div className="w-[40px] h-[40px] relative flex-shrink-0">
                            <Image 
                              src="/article.svg" 
                              alt="Articles" 
                              fill 
                              className="object-contain"
                              unoptimized
                            />
                          </div>
                          <span style={{ 
                            color: "#000", 
                            fontFamily: "var(--font-polysans)", 
                            fontSize: "25px", 
                            fontWeight: 300, 
                            fontStyle: "normal",
                            lineHeight: "25px" 
                          }}>
                            Articles
                          </span>
                        </Link>
                        
                        <Link href="/ama-live" className="flex items-center gap-6 group hover:opacity-80 transition-opacity">
                          <div className="w-[40px] h-[40px] relative flex-shrink-0">
                            <Image 
                              src="/live.svg" 
                              alt="AMA Live" 
                              fill 
                              className="object-contain"
                              unoptimized
                            />
                          </div>
                          <span style={{ 
                            color: "#000", 
                            fontFamily: "var(--font-polysans)", 
                            fontSize: "25px", 
                            fontWeight: 300, 
                            fontStyle: "normal",
                            lineHeight: "25px" 
                          }}>
                            AMA Live
                          </span>
                        </Link>

                        <Link href="/success-stories" className="flex items-center gap-6 group hover:opacity-80 transition-opacity">
                          <div className="w-[40px] h-[40px] relative flex-shrink-0 flex items-center justify-center">
                             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                                stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                             </svg>
                          </div>
                          <span style={{ 
                            color: "#000", 
                            fontFamily: "var(--font-polysans)", 
                            fontSize: "25px", 
                            fontWeight: 300, 
                            fontStyle: "normal",
                            lineHeight: "25px" 
                          }}>
                            Success Stories
                          </span>
                        </Link>

                        <Link href="/careers" className="flex items-center gap-6 group hover:opacity-80 transition-opacity">
                          <div className="w-[40px] h-[40px] relative flex-shrink-0 flex items-center justify-center">
                             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 12V16" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                             </svg>
                          </div>
                          <span style={{ 
                            color: "#000", 
                            fontFamily: "var(--font-polysans)", 
                            fontSize: "25px", 
                            fontWeight: 300, 
                            fontStyle: "normal",
                            lineHeight: "25px" 
                          }}>
                            Careers
                          </span>
                        </Link>
                      </div>

                      {/* Right Column - Split into two */}
                      <div className="flex-1 flex flex-col gap-4">
                        {/* Blogs Container (Top Half) */}
                        <div 
                          className="flex-1 p-6 flex flex-col justify-center gap-2" 
                          style={{
                            borderRadius: "10px",
                            background: "rgba(210, 158, 13, 1)" // Gold
                          }}
                        >
                          <Link href="/blog" className="block w-full group">
                            <div className="flex justify-between items-start">
                              <h3 
                                className="text-[25px] font-normal mb-1 text-black group-hover:opacity-80 transition-opacity"
                                style={{ fontFamily: "var(--font-polysans)" }}
                              >
                                Blogs
                              </h3>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black transform group-hover:translate-x-1 transition-transform">
                                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </Link>
                        </div>

                        {/* Bottom Half - Split into two side-by-side */}
                        <div className="flex-1 flex flex-row gap-4">
                          {/* AMA Container */}
                          <div 
                            className="flex-1 p-4 lg:p-6 flex flex-col justify-center gap-2" 
                            style={{
                              borderRadius: "10px",
                              background: "#30261C" // Brown from brand
                            }}
                          >
                            <Link href="/ask-me-anything" className="block w-full group">
                              <div className="flex justify-between items-start gap-2">
                                <h3 
                                  className="text-[20px] lg:text-[23px] font-normal leading-tight mb-1 text-[#EBE9E4] group-hover:opacity-80 transition-opacity whitespace-normal"
                                  style={{ fontFamily: "var(--font-polysans)" }}
                                >
                                  AMA
                                </h3>
                                <div className="w-6 h-6 shrink-0 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EBE9E4" className="transform transition-transform">
                                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                              </div>
                            </Link>
                          </div>

                          {/* Virtual Counsel Container */}
                          <div 
                            className="flex-1 p-4 lg:p-6 flex flex-col justify-center gap-2" 
                            style={{
                              borderRadius: "10px",
                              background: "#EAE6DB" // Light background
                            }}
                          >
                            <Link href="/virtual-inhouse-councel" className="block w-full group">
                              <div className="flex justify-between items-start gap-2">
                                <h3 
                                  className="text-[20px] lg:text-[23px] font-normal leading-tight mb-1 text-[#30261C] group-hover:opacity-80 transition-opacity whitespace-normal"
                                  style={{ fontFamily: "var(--font-polysans)" }}
                                >
                                  Virtual<br/>Counsel
                                </h3>
                                <div className="w-6 h-6 shrink-0 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#30261C" className="transform transition-transform">
                                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Right: Pay Now and Contact Us Buttons */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
         
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full text-[#30261C] font-light transition-all hover:opacity-90 active:scale-95"
              style={{
                background: "rgba(210, 158, 13, 0.80)",
                boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.10)",
                backdropFilter: "blur(8px)",
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Right: Burger Menu */}
          <div className="md:hidden relative z-50">
            <button
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="w-[50px] h-[50px] flex items-center justify-center rounded-full"
               style={{
                background: "rgba(255, 255, 255, 0.2)", // Liquid glass effect
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
               }}
            >
                {/* Simple Burger Icon */}
                <div className="flex flex-col gap-[5px] items-center justify-center">
                    <motion.div 
                        animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 7 : 0 }}
                        className="w-[24px] h-[2px] bg-[#30261C]" 
                    />
                    <motion.div 
                        animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                        className="w-[24px] h-[2px] bg-[#30261C]" 
                    />
                     <motion.div 
                        animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -7 : 0 }}
                        className="w-[24px] h-[2px] bg-[#30261C]" 
                    />
                </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
                initial={{ height: 0, borderBottomLeftRadius: "100%", borderBottomRightRadius: "100%", opacity: 0 }}
                animate={{ 
                  height: "auto", 
                  borderBottomLeftRadius: "30px", 
                  borderBottomRightRadius: "30px", 
                  opacity: 1,
                  transition: { 
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1] // Custom ease for fluid motion
                  } 
                }}
                exit={{ 
                  height: 0, 
                  borderBottomLeftRadius: "100%", 
                  borderBottomRightRadius: "100%", 
                  opacity: 0,
                  transition: { duration: 0.4, ease: "easeInOut" }
                }}
                className="fixed top-0 left-0 w-full z-40 overflow-hidden shadow-2xl origin-top"
                style={{
                     paddingTop: "100px", // Space for header
                     background: "rgba(234, 230, 219, 0.65)", // Light translucent base
                     backdropFilter: "blur(16px) saturate(180%)", // Heavy blur + saturation for "glass"
                     borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
                     boxShadow: "0 20px 40px rgba(0,0,0,0.1), inset 0 -1px 0 rgba(255,255,255,0.3)"
                }}
            >
                {/* Gloss Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

               <div className="flex flex-col px-6 pb-12 gap-8 relative z-10">
                   {/* Nav Links */}
                   <div className="flex flex-col gap-6">
                       <Link 
                           href="/"
                           className="text-[#30261C] font-[400] tracking-wide"
                           style={{ fontFamily: "var(--font-polysans)", fontSize: "35px", lineHeight: "35px" }}
                           onClick={() => setIsMobileMenuOpen(false)}
                       >
                           Home
                       </Link>
                       <Link 
                           href="/about"
                           className="text-[#30261C] font-[400] tracking-wide"
                           style={{ fontFamily: "var(--font-polysans)", fontSize: "35px", lineHeight: "35px" }}
                           onClick={() => setIsMobileMenuOpen(false)}
                       >
                           About Us
                       </Link>
                       <Link 
                           href="/services"
                           className="text-[#30261C] font-[400] tracking-wide"
                           style={{ fontFamily: "var(--font-polysans)", fontSize: "35px", lineHeight: "35px" }}
                           onClick={() => setIsMobileMenuOpen(false)}
                       >
                           Services
                       </Link>

                       {/* Insights Dropdown */}
                       <div className="flex flex-col gap-4">
                           <button 
                               onClick={() => setIsMobileInsightsOpen(!isMobileInsightsOpen)}
                               className="flex items-center justify-between text-[#30261C] font-[400] tracking-wide w-full"
                               style={{ fontFamily: "var(--font-polysans)", fontSize: "35px", lineHeight: "35px" }}
                           >
                               Insights
                               <svg 
                                   width="24" 
                                   height="24" 
                                   viewBox="0 0 24 24" 
                                   fill="none" 
                                   stroke="currentColor" 
                                   strokeWidth="2"
                                   className={`transition-transform duration-300 ${isMobileInsightsOpen ? 'rotate-180' : ''}`}
                               >
                                   <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                               </svg>
                           </button>
                           
                           <AnimatePresence>
                               {isMobileInsightsOpen && (
                                   <motion.div
                                       initial={{ height: 0, opacity: 0 }}
                                       animate={{ height: "auto", opacity: 1 }}
                                       exit={{ height: 0, opacity: 0 }}
                                       className="overflow-hidden flex flex-col gap-4 pl-4"
                                   >
                                       <Link 
                                            href="/success-stories"
                                            className="text-[#30261C]/80 font-[400] tracking-wide"
                                            style={{ fontFamily: "var(--font-polysans)", fontSize: "28px", lineHeight: "28px" }}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Success Stories
                                        </Link>
                                       <Link 
                                           href="/blog"
                                           className="text-[#30261C]/80 font-[400] tracking-wide"
                                           style={{ fontFamily: "var(--font-polysans)", fontSize: "28px", lineHeight: "28px" }}
                                           onClick={() => setIsMobileMenuOpen(false)}
                                       >
                                           Blog
                                       </Link>
                                       <Link 
                                           href="/ama-live"
                                           className="text-[#30261C]/80 font-[400] tracking-wide"
                                           style={{ fontFamily: "var(--font-polysans)", fontSize: "28px", lineHeight: "28px" }}
                                           onClick={() => setIsMobileMenuOpen(false)}
                                       >
                                           AMA Live
                                       </Link>
                                        <Link 
                                            href="/articles"
                                            className="text-[#30261C]/80 font-[400] tracking-wide"
                                            style={{ fontFamily: "var(--font-polysans)", fontSize: "28px", lineHeight: "28px" }}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Articles
                                        </Link>
                                         <Link 
                                             href="/ask-me-anything"
                                             className="text-[#30261C]/80 font-[400] tracking-wide"
                                             style={{ fontFamily: "var(--font-polysans)", fontSize: "28px", lineHeight: "28px" }}
                                             onClick={() => setIsMobileMenuOpen(false)}
                                         >
                                             AMA
                                         </Link>
                                         <Link 
                                             href="/virtual-inhouse-councel"
                                             className="text-[#30261C]/80 font-[400] tracking-wide"
                                             style={{ fontFamily: "var(--font-polysans)", fontSize: "28px", lineHeight: "28px" }}
                                             onClick={() => setIsMobileMenuOpen(false)}
                                         >
                                             Virtual Counsel
                                         </Link>
                                         <Link 
                                             href="/careers"
                                             className="text-[#30261C]/80 font-[400] tracking-wide"
                                             style={{ fontFamily: "var(--font-polysans)", fontSize: "28px", lineHeight: "28px" }}
                                             onClick={() => setIsMobileMenuOpen(false)}
                                         >
                                             Careers
                                         </Link>
                                   </motion.div>
                               )}
                           </AnimatePresence>
                       </div>

                       
                        <Link 
                            href="/contact"
                            className="text-[#30261C] font-[400] tracking-wide"
                            style={{ fontFamily: "var(--font-polysans)", fontSize: "35px", lineHeight: "35px" }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                   </div>

                   {/* Divider - Faded from left and right */}
                   <div className="w-full h-[1px]" style={{
                     background: "linear-gradient(90deg, rgba(48, 38, 28, 0.00) 0%, rgba(48, 38, 28, 0.30) 50%, rgba(48, 38, 28, 0.00) 100%)"
                   }} />

                    {/* App Buttons */}
                   <div className="flex justify-center items-center gap-4">
                         <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank">
                            <Image 
                                src="/newAssets/appstore.svg" 
                                alt="App Store" 
                                width={120} 
                                height={36} 
                                className="h-[36px] w-auto"
                            />
                        </Link>
                        <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank">
                            <Image 
                                src="/newAssets/playstore.svg" 
                                alt="Play Store" 
                                width={120} 
                                height={36} 
                                className="h-[36px] w-auto"
                            />
                        </Link>
                   </div>
               </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
