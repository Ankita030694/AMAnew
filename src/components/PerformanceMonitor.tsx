'use client'
import { useEffect } from 'react';

// Simple performance monitoring component
export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;

    // Monitor page load performance
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Page Load Performance:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            totalTime: navEntry.duration
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 1000) { // Log resources that take more than 1 second
          const resourceEntry = entry as PerformanceResourceTiming;
          console.log('Slow Resource:', {
            name: resourceEntry.name,
            duration: resourceEntry.duration,
            type: resourceEntry.initiatorType
          });
        }
      }
    });

    resourceObserver.observe({ entryTypes: ['resource'] });

    return () => {
      observer.disconnect();
      resourceObserver.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}
