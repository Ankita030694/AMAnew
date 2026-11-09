'use client'

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Navbar from "./Navbar";
import { isUtilityPath } from '@/components/InteractiveLeadModal';

const Footer = dynamic(() => import("./Footer"), { ssr: false });
const WhatsAppWidget = dynamic(() => import("./WhatsAppWidget"), { ssr: false });
const InteractiveLeadModal = dynamic(() => import("@/components/InteractiveLeadModal"), { ssr: false });

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Exclude common components for admin, login, and contact routes
  const isExcluded = pathname?.startsWith('/admin') || pathname?.startsWith('/login') || pathname === '/contact';

  // Persist the most recent non-utility SEO page URL so /contact retains landing-page attribution in submissionUrl
  useEffect(() => {
    if (!isExcluded && !isUtilityPath(pathname) && typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('ama_seo_landing_url', window.location.href);
      } catch {
        // Ignore storage errors
      }
    }
  }, [pathname, isExcluded]);

  if (isExcluded) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      {/* Modal available only for explicit user button triggers, zero auto-popups */}
      <InteractiveLeadModal />
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
