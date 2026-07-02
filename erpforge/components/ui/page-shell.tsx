"use client";

import { usePathname } from "next/navigation";
import { BackHomeLink } from "@/components/ui/back-home-link";

export function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showBackHome = pathname !== "/";

  return (
    <div className="relative">
      {showBackHome ? (
        <div className="mx-auto max-w-6xl px-5 pt-6 md:px-8 lg:px-10">
          <BackHomeLink />
        </div>
      ) : null}
      {children}
    </div>
  );
}
