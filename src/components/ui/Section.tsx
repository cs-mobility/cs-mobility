import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark";
};

export function Section({
  id,
  children,
  className = "",
  variant = "light",
}: SectionProps) {
  const bg = variant === "dark" ? "bg-prussian-blue text-white" : "bg-white text-prussian-blue";

  return (
    <section id={id} className={`py-16 md:py-20 lg:py-24 ${bg} ${className}`}>
      {children}
    </section>
  );
}
