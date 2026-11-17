"use client";

import React from "react";
import { openLeadModal } from "@/components/InteractiveLeadModal";

interface DownloadTriggerProps {
  className?: string;
  children: React.ReactNode;
}

const DownloadTrigger: React.FC<DownloadTriggerProps> = ({ className, children }) => {
  const handleClick = () => {
    // The old GlobalPopupForm is retired; open the interactive lead modal instead
    openLeadModal();
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default DownloadTrigger;
