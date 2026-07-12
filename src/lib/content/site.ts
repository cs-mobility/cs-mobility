export const site = {
  name: "CS Mobility",
  email: "advice@csmobility.se",
  locations: ["Gothenburg", "Stockholm", "Uppsala"] as const,
  tagline: "Helping international companies establish and operate in Sweden.",
  footerNote:
    "Let us handle the complexity so that you can focus on building your business.",
  copyright: "© 2026 CS Mobility AB. All rights reserved.",
} as const;

/** Toggle homepage sections without removing code. Set to true when ready to launch. */
export const featureFlags = {
  showTestimonials: false,
  showPartners: false,
} as const;

const allNavLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About us", href: "#about" },
  { label: "Client stories", href: "#stories" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
] as const;

export const navLinks = allNavLinks.filter((link) => {
  if (link.href === "#stories" && !featureFlags.showTestimonials) return false;
  if (link.href === "#partners" && !featureFlags.showPartners) return false;
  return true;
});

export const socialLinks = [
  { label: "LinkedIn", href: "", icon: "linkedin" as const },
  { label: "Facebook", href: "", icon: "facebook" as const },
  { label: "Instagram", href: "", icon: "instagram" as const },
] as const;
