'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Script from 'next/script'

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  
  // Load Cloudinary script dynamically - as a backup
  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window === 'undefined') return;
    
    // Check if script is already loaded
    if (document.getElementById('cloudinary-widget-script')) {
      setScriptLoaded(true);
      console.log('Cloudinary script already loaded');
      return;
    }
    
    console.log('Loading Cloudinary script...');
    const script = document.createElement('script');
    script.id = 'cloudinary-widget-script';
    script.src = 'https://upload-widget.cloudinary.com/global/all.js';
    script.async = true;
    script.onload = () => {
      console.log('Cloudinary script loaded successfully');
      setScriptLoaded(true);
    };
    script.onerror = (error) => {
      console.error('Failed to load Cloudinary script:', error);
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Clean up script on unmount
      const existingScript = document.getElementById('cloudinary-widget-script');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);
  
  // Add a script to check if Cloudinary is available globally
  useEffect(() => {
    if (scriptLoaded) {
      console.log('Checking Cloudinary global object...');
      // Check if Cloudinary object is available
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          // @ts-ignore
          if (window.cloudinary) {
            console.log('✅ Cloudinary is available globally');
          } else {
            console.error('❌ Cloudinary global object not available');
          }
        }
      }, 1000);
    }
  }, [scriptLoaded]);
  
  return (
    <div>
      {/* Use Next.js Script component for better script loading */}
      <Script
        id="cloudinary-widget-script-next"
        src="https://upload-widget.cloudinary.com/global/all.js"
        strategy="beforeInteractive"
        onLoad={() => {
          console.log('Cloudinary script loaded via Next.js Script component');
          setScriptLoaded(true);
        }}
        onError={(e) => {
          console.error('Error loading Cloudinary script via Next.js:', e);
        }}
      />
      
      {children}
      <Toaster position="top-right" />
      
      {/* Debug info */}
      {process.env.NODE_ENV !== 'production' && (
        <div style={{ 
          position: 'fixed', 
          bottom: '10px', 
          right: '10px', 
          backgroundColor: 'rgba(0,0,0,0.7)', 
          color: 'white', 
          padding: '5px 10px', 
          borderRadius: '4px',
          fontSize: '12px',
          zIndex: 9999
        }}>
          Cloudinary Script: {scriptLoaded ? '✅' : '❌'}
        </div>
      )}
    </div>
  );
} 