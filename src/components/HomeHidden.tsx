"use client";

import { usePathname } from "next/navigation";

export default function HomeHidden({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/contact") {
    return null;
  }

  return <>{children}</>;
}
