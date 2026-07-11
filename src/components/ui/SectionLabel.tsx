import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  light?: boolean;
};

export function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <p
      className={`mb-2 text-sm font-bold tracking-wide uppercase ${
        light ? "text-gold" : "text-gold"
      }`}
    >
      {children}
    </p>
  );
}
