'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Navbar from "./Navbar";
import { getPresetForPath, isUtilityPath } from '@/components/InteractiveLeadModal';

const GlobalPopupForm = dynamic(() => import("./GlobalPopupForm"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });
const WhatsAppWidget = dynamic(() => import("./WhatsAppWidget"), { ssr: false });
const InteractiveLeadModal = dynamic(() => import("@/components/InteractiveLeadModal"), { ssr: false });

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showPopup, setShowPopup] = React.useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Exclude common components for admin, login, and contact routes
  const isExcluded = pathname?.startsWith('/admin') || pathname?.startsWith('/login') || pathname === '/contact';

  if (isExcluded) {
    return <>{children}</>;
  }

  const isUtility = isUtilityPath(pathname);
  const isInteractivePage = Boolean(getPresetForPath(pathname));
  const showOldGlobalPopup = showPopup && !isUtility && !isInteractivePage;

  return (
    <>
      <Navbar />
      {children}
      {showOldGlobalPopup && <GlobalPopupForm />}
      <InteractiveLeadModal />
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
