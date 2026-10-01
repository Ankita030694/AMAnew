"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { getPresetForPath, isUtilityPath, hasManualInlineFunnel } from "@/components/InteractiveLeadModal";

const InteractiveLeadFunnel = dynamic(() => import("@/components/InteractiveLeadFunnel"), { ssr: false });

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  hideFunnel?: boolean;
}

export default function Breadcrumbs({ items, hideFunnel = false }: BreadcrumbsProps) {
  const pathname = usePathname();
  const routePreset = getPresetForPath(pathname);
  const isUtility = isUtilityPath(pathname);
  const isManual = hasManualInlineFunnel(pathname);
  const showFunnel = Boolean(routePreset) && !isUtility && !isManual && !hideFunnel;

  return (
    <div className="w-full">
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-[#D2A02A] transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              {index === items.length - 1 ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-[#D2A02A] transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Prominently embedded Interactive Assessment Funnel right below Hero section */}
      {showFunnel && (
        <div className="not-prose my-6 mb-10 max-w-5xl mx-auto">
          <InteractiveLeadFunnel 
            preset={routePreset || "homepage"} 
            theme="light" 
          />
        </div>
      )}
    </div>
  );
}
