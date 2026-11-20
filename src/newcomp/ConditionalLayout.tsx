'use client'

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Navbar from "./Navbar";
import { isUtilityPath } from '@/components/InteractiveLeadModal';
import { track } from '@vercel/analytics';
import { WHATSAPP_NUMBER, LEGACY_WHATSAPP_NUMBER, pageTag } from '@/lib/whatsapp';

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

  // Count WhatsApp clicks and tag the pre-filled message with the page. The tag is how /api/whatsapp-inbound
  // recognises a website chat on the WATI number and saves it as a lead.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link) return;
      let url: URL;
      try {
        url = new URL(link.href);
      } catch {
        return;
      }
      const ours = (n: string | null) => {
        const digits = (n || '').replace(/\D/g, '');
        return digits === WHATSAPP_NUMBER || digits === LEGACY_WHATSAPP_NUMBER;
      };
      const isWaMe = url.hostname === 'wa.me' && ours(url.pathname);
      const isApi = /(^|\.)whatsapp\.com$/.test(url.hostname) && ours(url.searchParams.get('phone'));
      if (!isWaMe && !isApi) return; // share buttons (no phone) are left alone

      const page = window.location.pathname;
      track('whatsapp_click', { page });
      const text = url.searchParams.get('text') || 'I want legal help';
      // The floating button stays mounted across pages, so replace any earlier page tag
      const base = text.replace(/\n?\(Ref: amalegalsolutions\.com[^)]*\)$/, '');
      // Any link still on the old number is sent to the WATI number
      if (isApi) url.searchParams.set('phone', WHATSAPP_NUMBER);
      const path = isWaMe ? `/${WHATSAPP_NUMBER}` : url.pathname;
      // Build the query by hand: URLSearchParams writes spaces as "+", which WhatsApp can show literally
      const params = [...url.searchParams.entries()]
        .filter(([k]) => k !== 'text')
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
      params.push(`text=${encodeURIComponent(`${base}\n${pageTag(page)}`)}`);
      link.href = `${url.origin}${path}?${params.join('&')}`;
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  if (isExcluded) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      {/* Single lead modal: opened by CTA buttons, plus at most one engagement-based auto prompt (see leadCapturePolicy) */}
      <InteractiveLeadModal />
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
