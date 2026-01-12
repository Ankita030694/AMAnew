"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

const CHECKPOINTS = [
  { id: 1, progress: 0.08, side: "left", brownText: "Download App", whiteText: "App Downloaded" },
  { id: 2, progress: 0.20, side: "left", brownText: "Raise Query", whiteText: "Query Received" },
  { id: 3, progress: 0.48, side: "bottom", brownText: "Connect To Expert", whiteText: "Expert Connected" },
  { id: 4, progress: 0.80, side: "right", brownText: "Get Legal Answers", whiteText: "Query Answered" },
  { id: 5, progress: 0.92, side: "right", brownText: "Track Case", whiteText: "Real Time Updates Active" },
];

const LoaderTick = () => {
  const [showTick, setShowTick] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTick(true);
    }, 600); // Spin for 600ms then show tick
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-6 h-6 flex items-center justify-center">
      {/* Circle Loader */}
      {!showTick && (
        <motion.span
          className="block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Tick Mark */}
      {showTick && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <motion.path
            d="M20 6L9 17L4 12"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </svg>
      )}
    </div>
  );
};

import { AnimatePresence } from "framer-motion";

const AnimatedBorder = ({ isMobileView = false }: { isMobileView?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { width, height } = dimensions; // Destructure early for use in all effects
  
  const progress = useMotionValue(0);
  const blobProgress = useMotionValue(0); 
  const [completedCheckpoints, setCompletedCheckpoints] = useState<number[]>([]);
  const [activeCheckpoint, setActiveCheckpoint] = useState<number | null>(null);
  const [lastActiveCheckpoint, setLastActiveCheckpoint] = useState<number | null>(null);

  // Mobile State
  const [mobileState, setMobileState] = useState<{ index: number; phase: 'request' | 'result' }>({ 
    index: 0, 
    phase: 'request' 
  });

  // --- MOBILE EFFECT ---
  useEffect(() => {
    if (!isMobileView) return;
    
    const duration = 2500; // 2.5s per phase (Enter + Stop + Exit transition time)
    
    const timer = setTimeout(() => {
        setMobileState(prev => {
            if (prev.phase === 'request') {
                return { ...prev, phase: 'result' };
            } else {
                return { index: (prev.index + 1) % CHECKPOINTS.length, phase: 'request' };
            }
        });
    }, duration);

    return () => clearTimeout(timer);
  }, [isMobileView, mobileState]);

  // --- DESKTOP RESIZE OBSERVER ---
  useEffect(() => {
    if (isMobileView || !containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [isMobileView]);

  // --- DESKTOP CHECKPOINT ANIMATION ---
  useEffect(() => {
    if (isMobileView) return;
    const { width, height } = dimensions;
    if (width === 0 || height === 0) return;

    let isMounted = true;
    let observer: IntersectionObserver | null = null;
    let isVisible = false;

    // Animation runner
    const runAnimation = async () => {
      // Wait for visibility before starting loop
      while (!isVisible && isMounted) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      while (isMounted) {
        // If became invisible during loop, wait again
        while (!isVisible && isMounted) {
          await new Promise(resolve => setTimeout(resolve, 500));
        }
        
        setCompletedCheckpoints([]);
        progress.set(0.05);
        blobProgress.set(0.05);
        setLastActiveCheckpoint(null);
        
        for (const checkpoint of CHECKPOINTS) {
          if (!isMounted) break;
          // Check visibility
          while (!isVisible && isMounted) { await new Promise(resolve => setTimeout(resolve, 500)); }

          // 1. Move to checkpoint
          const duration = 1.5; 
          
          await Promise.all([
            animate(progress, checkpoint.progress, { duration, ease: "linear" }),
            animate(blobProgress, checkpoint.progress, { duration, ease: "linear" })
          ]);

          if (!isMounted) break;

          // 2. Pause & Expand
          setActiveCheckpoint(checkpoint.id);
          setLastActiveCheckpoint(checkpoint.id); 
          
          await new Promise((resolve) => setTimeout(resolve, 2000)); 
          
          if (!isMounted) break;

          // 3. Mark completed
          setCompletedCheckpoints((prev) => [...prev, checkpoint.id]);
          
          // 4. Move on
          setActiveCheckpoint(null); 
        }

        if (!isMounted) break;

        // Finish path
        await Promise.all([
            animate(progress, 0.95, { duration: 1.5, ease: "linear" }),
            animate(blobProgress, 0.95, { duration: 1.5, ease: "linear" })
        ]);
        
        // Reset
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    };

    // Intersection Observer to toggle isVisible flag
    if (containerRef.current) {
      observer = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
      }, { threshold: 0.1 }); // 10% visible to start/resume
      
      observer.observe(containerRef.current);
    }

    runAnimation();

    return () => {
      isMounted = false;
      if (observer) observer.disconnect();
    };
  }, [width, height, isMobileView, progress, blobProgress]);

  // --- MOBILE RENDER ---
  if (isMobileView) {
      const currentCP = CHECKPOINTS[mobileState.index];

      return (
        <div className="relative w-full h-[140px] flex flex-col items-center justify-start overflow-hidden mt-2">
            {/* Base Horizontal Line*/}
            <div className="absolute top-[20px] w-full h-[2px] bg-[#30261C]/20" />

             {/* Animation Container */}
             <div className="relative w-full flex justify-center h-full">
                 <AnimatePresence mode="popLayout">
                    {mobileState.phase === 'request' ? (
                        <motion.div
                            key={`req-${currentCP.id}`}
                            initial={{ y: -60, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 60, opacity: 0 }}
                            transition={{ 
                                y: { type: "spring", stiffness: 90, damping: 20 },
                                opacity: { duration: 0.3 }
                            }}
                            className="absolute top-[1px] flex flex-row items-center gap-3 z-20"
                        >
                             {/* Group.svg in Brown Rounded Square (Left) */}
                             <div className="p-2 bg-[#30261C] rounded-xl shadow-sm border border-[#EAE6DB]">
                                <Image src="/newAssets/Group.svg" alt="Icon" width={20} height={20} className="brightness-0 invert" />
                             </div>

                            {/* Brown Container (Right) - Permanent Loader */}
                             <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#30261C]/95 shadow-md">
                                 <span className="text-sm font-medium text-[#EAE6DB] whitespace-nowrap">
                                    {currentCP.brownText}
                                </span>
                                <div className="h-[16px] w-[16px] shrink-0 flex items-center justify-center">
                                    <motion.span
                                      className="block w-3 h-3 border-2 border-white/30 border-t-white rounded-full"
                                      animate={{ rotate: 360 }}
                                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key={`res-${currentCP.id}`}
                            initial={{ y: -60, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 60, opacity: 0 }}
                            transition={{ 
                                y: { type: "spring", stiffness: 90, damping: 20 },
                                opacity: { duration: 0.3 }
                            }}
                            className="absolute top-[-3px] flex flex-row items-center gap-3 z-20"
                        >
                            {/* White Container */}
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-md border border-[#EAE6DB]">
                                 <span className="text-lg font-medium text-[#30261C] whitespace-nowrap">
                                    {currentCP.whiteText}
                                </span>
                                <div className="h-[24px] w-[24px] flex items-center justify-center shrink-0 rounded-full bg-green-500/10">
                                    <Image src="/newAssets/Vector.svg" alt="Check" width={14} height={10} />
                                </div>
                            </div>
                        </motion.div>
                    )}
                 </AnimatePresence>
             </div>
        </div>
      );
  }

  // --- DESKTOP RENDER ---
  const pathD = `M 0 0 V ${height - 50} Q 0 ${height} 50 ${height} H ${width - 50} Q ${width} ${height} ${width} ${height - 50} V 0`;

  return (
    <div 
      ref={containerRef} 
      className="absolute -top-1 left-1/2 -translate-x-1/2 right-auto bottom-0 pointer-events-none w-full max-w-[820px]"
    >
      {/* Static Border (Background) */}
      <svg className="absolute inset-0 w-full h-full overflow-visible">
        <path 
          d={pathD} 
          fill="none" 
          stroke="rgba(48, 38, 28, 0.25)" 
          strokeWidth="2"
        />
      </svg>

      {/* Permanent Checkpoints (White) */}
      {CHECKPOINTS.map((cp) => {
        const isCompleted = completedCheckpoints.includes(cp.id);
        const isLeft = cp.side === 'left';
        const isRight = cp.side === 'right';
        const isBottom = cp.side === 'bottom';
        
        return (
            <motion.div
                key={`cp-${cp.id}`}
                className="absolute top-0 left-0 z-10 flex items-center justify-center border-none"
                style={{
                    offsetPath: `path("${pathD}")`,
                    offsetDistance: `${cp.progress * 100}%`,
                    offsetRotate: "0deg",
                    width: 40, height: 40, x: -20, y: -20,
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isCompleted ? 1 : 0 }}
                    className={`flex items-center gap-2 px-1 py-1 rounded-lg overflow-hidden whitespace-nowrap bg-white/60 shadow-sm border border-[#EAE6DB]`}
                    style={{
                        position: 'absolute',
                        height: 40,
                        flexDirection: isLeft ? 'row' : 'row-reverse',
                        ...(isLeft ? { right: '-10%', marginRight: -16 } : {}),
                        ...(isRight ? { left: '80%', marginLeft: -16 } : {}),
                        ...(isBottom ? { left: '-100%', marginTop: 40 } : {}),
                    }}
                >
                    <span className="text-lg font-medium px-3 text-[#30261C]">
                        {cp.whiteText}
                    </span>
                    <div className="h-[32px] w-[32px] flex items-center justify-center shrink-0 rounded-full">
                        <Image src="/newAssets/Vector.svg" alt="Check" width={16} height={12} />
                    </div>
                </motion.div>
            </motion.div>
        );
      })}

      {/* Active Blob (Brown) */}
      <motion.div
        className="absolute top-0 left-0 z-20 flex items-center justify-center border-none"
        style={{
            offsetPath: `path("${pathD}")`,
            offsetDistance: useTransform(blobProgress, v => `${v * 100}%`),
            offsetRotate: "0deg",
            width: 40, height: 40, x: -20, y: -20,
        }}
      >
         {CHECKPOINTS.map(cp => {
             const isActive = activeCheckpoint === cp.id;
             const isLastActive = lastActiveCheckpoint === cp.id;
             
             if (!isActive && !isLastActive) return null;
             
             const isLeft = cp.side === 'left';
             const isRight = cp.side === 'right';
             const isBottom = cp.side === 'bottom';

             return (
                 <motion.div
                    key={`blob-${cp.id}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                        scale: isActive ? 1 : 0, 
                        opacity: isActive ? 1 : 0,
                        x: isActive ? (isLeft ? -40 : 60) : 0 
                    }}
                    transition={{ 
                        duration: isActive ? 0.4 : 1.2, 
                        ease: "easeInOut"
                    }}
                    className="absolute flex items-center gap-4 px-2 py-1 rounded-lg overflow-hidden whitespace-nowrap bg-[#30261C]/90"
                    style={{
                        height: 40,
                        flexDirection: isLeft ? 'row' : 'row-reverse',
                        ...(isLeft ? { right: '50%', marginRight: -16 } : {}),
                        ...(isRight ? { left: '50%', marginLeft: 2 } : {}),
                        ...(isBottom ? { left: '50%', marginTop: -16 } : {}),
                    }}
                 >
                    <span className="text-md font-medium px-2 text-[#EAE6DB]">
                        {cp.brownText}
                    </span>
                    <div className="h-[32px] w-[32px] shrink-0 flex items-center justify-center">
                        <LoaderTick />
                    </div>
                 </motion.div>
             );
         })}
      </motion.div>

      {/* Moving Icon */}
      <motion.div
        className="absolute top-0 left-0 z-30 flex items-center justify-center bg-[#30261C] rounded-lg shadow-md"
        style={{ 
          offsetPath: `path("${pathD}")`,
          offsetDistance: useTransform(progress, (v) => `${v * 100}%`),
          offsetRotate: "0deg",
          width: 40,
          height: 40,
          x: 0,
          y: -20,
        }}
      >
        <Image src="/newAssets/Group.svg" alt="Moving Icon" width={24} height={24} />
      </motion.div>
    </div>
  );
};

export default AnimatedBorder;
