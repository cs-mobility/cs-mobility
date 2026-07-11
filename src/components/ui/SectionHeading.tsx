import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  children,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`font-serif text-[23px] leading-snug font-bold md:text-3xl lg:text-4xl ${
        light ? "text-white" : "text-prussian-blue"
      } ${className}`}
    >
      {children}
    </h2>
  );
}
