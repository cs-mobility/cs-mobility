"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { scrollToHash } from "@/lib/scroll-to-hash";

type ButtonVariant = "primary" | "accent" | "outline";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
  disabled?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-prussian-blue text-white hover:bg-[#1c3158]",
  accent: "bg-gold text-white hover:bg-[#8f7952]",
  outline:
    "border-2 border-white-smoke bg-white text-prussian-blue hover:bg-white-smoke",
};

function scrollToHashLink(hash: string) {
  scrollToHash(hash);
}

export function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  icon,
  disabled,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-base font-semibold transition-colors disabled:opacity-60 ${variantClasses[variant]} ${className}`;

  if (href?.startsWith("#")) {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      scrollToHashLink(href);
      onClick?.();
    };

    return (
      <a href={href} onClick={handleClick} className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
      {icon}
    </button>
  );
}
