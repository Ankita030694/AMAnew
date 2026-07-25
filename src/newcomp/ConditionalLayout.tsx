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
    console.log("ConditionalLayout: setting timer to show popup");
    const timer = setTimeout(() => {
      console.log("ConditionalLayout: showPopup set to true");
      setShowPopup(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Exclude common components for admin and login routes
  const isExcluded = pathname?.startsWith('/admin') || pathname?.startsWith('/login') || pathname === '/contact';

  if (isExcluded) {
    return <>{children}</>;
  }

  const hidePopup = pathname === '/support';

  return (
    <>
      <Navbar />
      {children}
      {showPopup && !hidePopup && <GlobalPopupForm />}
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
