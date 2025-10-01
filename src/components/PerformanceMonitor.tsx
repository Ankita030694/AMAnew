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
          console.log('Page Load Performance:', {
            domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
            loadComplete: entry.loadEventEnd - entry.loadEventStart,
            totalTime: entry.loadEventEnd - entry.navigationStart
          });
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 1000) { // Log resources that take more than 1 second
          console.log('Slow Resource:', {
            name: entry.name,
            duration: entry.duration,
            type: entry.initiatorType
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
