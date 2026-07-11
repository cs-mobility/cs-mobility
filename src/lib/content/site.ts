export const site = {
  name: "CS Mobility",
  email: "advice@csmobility.se",
  phone: "+46 768 505 949",
  address: "Beryllgatan 13, 426 59 Västra Frölunda, Sweden",
  tagline: "Helping international companies establish and operate in Sweden.",
  footerNote:
    "Let us handle the complexity so that you can focus on building your business.",
  copyright: "© 2026 CS Mobility AB. All rights reserved.",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About us", href: "#about" },
  { label: "Client stories", href: "#stories" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = [
  { label: "LinkedIn", href: "", icon: "linkedin" as const },
  { label: "Facebook", href: "", icon: "facebook" as const },
  { label: "Instagram", href: "", icon: "instagram" as const },
] as const;
