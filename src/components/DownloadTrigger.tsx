"use client";

import React from "react";

interface DownloadTriggerProps {
  className?: string;
  children: React.ReactNode;
}

const DownloadTrigger: React.FC<DownloadTriggerProps> = ({ className, children }) => {
  const handleClick = () => {
    // Dispatch custom event to open global popup
    const event = new CustomEvent("openGlobalPopup");
    window.dispatchEvent(event);
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default DownloadTrigger;
