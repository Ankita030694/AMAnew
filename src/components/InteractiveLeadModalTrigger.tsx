"use client";

import React from "react";
import { openLeadModal } from "./InteractiveLeadModal";
import { FunnelPreset } from "./InteractiveLeadFunnel";

interface TriggerProps {
  children: React.ReactNode;
  preset?: FunnelPreset;
  className?: string;
}

export default function InteractiveLeadModalTrigger({
  children,
  preset,
  className = "",
}: TriggerProps) {
  return (
    <button
      type="button"
      onClick={() => openLeadModal(preset ? { preset } : undefined)}
      className={className}
    >
      {children}
    </button>
  );
}
