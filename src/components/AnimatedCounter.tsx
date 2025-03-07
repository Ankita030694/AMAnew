'use client'

import { useState, useEffect, useRef } from "react";

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

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  label: string;
}

export default function AnimatedCounter({ end, duration = 2, label }: AnimatedCounterProps) {
  const { count, nodeRef } = useCounter(end, duration);
  
  return (
    <div className="p-6" ref={nodeRef}>
      <div className="text-5xl font-bold text-[#D2A02A] mb-2">{count}+</div>
      <div className="uppercase tracking-wider text-sm">{label}</div>
    </div>
  );
} 