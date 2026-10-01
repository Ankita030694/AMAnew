'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Navbar from "./Navbar";
import { getPresetForPath, isUtilityPath, hasManualInlineFunnel } from '@/components/InteractiveLeadModal';

const Footer = dynamic(() => import("./Footer"), { ssr: false });
const WhatsAppWidget = dynamic(() => import("./WhatsAppWidget"), { ssr: false });
const InteractiveLeadFunnel = dynamic(() => import("@/components/InteractiveLeadFunnel"), { ssr: false });
const InteractiveLeadModal = dynamic(() => import("@/components/InteractiveLeadModal"), { ssr: false });

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Exclude common components for admin, login, and contact routes
  const isExcluded = pathname?.startsWith('/admin') || pathname?.startsWith('/login') || pathname === '/contact';

  if (isExcluded) {
    return <>{children}</>;
  }

  const isUtility = isUtilityPath(pathname);
  const routePreset = getPresetForPath(pathname);
  const isInteractivePage = Boolean(routePreset) && !isUtility;
  const isManualPage = hasManualInlineFunnel(pathname);

  return (
    <>
      <Navbar />
      {children}

      {/* In-Page Interactive Assessment Funnel on all SEO pages (same as Home page) */}
      {isInteractivePage && !isManualPage && (
        <section className="max-w-6xl mx-auto px-4 lg:px-8 py-12 relative z-20 my-6">
          <InteractiveLeadFunnel 
            preset={routePreset || "homepage"} 
            theme="light" 
          />
        </section>
      )}

      {/* Modal available only for explicit user button triggers, zero auto-popups */}
      <InteractiveLeadModal />
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
