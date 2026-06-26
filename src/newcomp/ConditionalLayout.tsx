'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Navbar from "./Navbar";
const GlobalPopupForm = dynamic(() => import("./GlobalPopupForm"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });
const WhatsAppWidget = dynamic(() => import("./WhatsAppWidget"), { ssr: false });

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showPopup, setShowPopup] = React.useState(false);
  
  React.useEffect(() => {
    // Only load the massive GlobalPopupForm chunk after 4 seconds
    // This completely removes it from the initial LCP render path
    const timer = setTimeout(() => setShowPopup(true), 4000);
    return () => clearTimeout(timer);
  }, []);
  
  // Exclude common components for admin and login routes
  const isExcluded = pathname?.startsWith('/admin') || pathname?.startsWith('/login') || pathname === '/contact';

  if (isExcluded) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      {process.env.NODE_ENV !== 'development' && showPopup && <GlobalPopupForm />}
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
