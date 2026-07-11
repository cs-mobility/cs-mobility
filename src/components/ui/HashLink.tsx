"use client";

import type { MouseEvent, ReactNode } from "react";
import { handleHashClick } from "@/lib/scroll-to-hash";

type HashLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
  tabIndex?: number;
};

export function HashLink({
  href,
  children,
  className,
  onNavigate,
  tabIndex,
}: HashLinkProps) {
  return (
    <a
      href={href}
      className={className}
      tabIndex={tabIndex}
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        handleHashClick(event, href);
        onNavigate?.();
      }}
    >
      {children}
    </a>
  );
}
