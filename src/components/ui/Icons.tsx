import type { FeatureIcon } from "@/lib/content/types";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3 7l9 6 9-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.5 4h3l1.5 4-2 1.5a11 11 0 005 5L15.5 13 19.5 14.5V18a2 2 0 01-2 2A14 14 0 014 6.5a2 2 0 012-2.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 20" fill="none" aria-hidden="true" {...props}>
      <path d="M0 1h32M0 10h32M0 19h32" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM3.5 9h3v12h-3V9zm7 0h2.9v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-5.6c0-1.34-.02-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.95V21h-3V9z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 9.5V7.7c0-.8.6-1 1-1h1.6V4h-2.2c-2.7 0-3.8 1.7-3.8 3.9v1.6H7v2.8h2.1V20h3.4v-7.7h2.3l.3-2.8h-2.6z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function FeatureIconGraphic({
  icon,
  className,
}: {
  icon: FeatureIcon;
  className?: string;
}) {
  const common = {
    viewBox: "0 0 40 40",
    fill: "none",
    className,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "tax":
      return (
        <svg {...common}>
          <rect x="8" y="6" width="24" height="28" rx="2" stroke="#142345" strokeWidth="1.5" />
          <path d="M14 14h12M14 20h12M14 26h8" stroke="#142345" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "business":
      return (
        <svg {...common}>
          <path d="M8 34V14l12-6 12 6v20" stroke="#142345" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M16 34V22h8v12" stroke="#142345" strokeWidth="1.5" />
        </svg>
      );
    case "permits":
      return (
        <svg {...common}>
          <rect x="10" y="6" width="20" height="28" rx="2" stroke="#142345" strokeWidth="1.5" />
          <circle cx="20" cy="18" r="5" stroke="#142345" strokeWidth="1.5" />
          <path d="M14 30h12" stroke="#142345" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "support":
      return (
        <svg {...common}>
          <path d="M8 20a12 12 0 0124 0v6H8v-6z" stroke="#142345" strokeWidth="1.5" />
          <path d="M16 32v2a4 4 0 008 0v-2" stroke="#142345" strokeWidth="1.5" />
        </svg>
      );
    case "expert":
      return (
        <svg {...common}>
          <circle cx="20" cy="14" r="6" stroke="#142345" strokeWidth="1.5" />
          <path d="M8 34c0-6.6 5.4-10 12-10s12 3.4 12 10" stroke="#142345" strokeWidth="1.5" />
        </svg>
      );
    case "efficient":
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="12" stroke="#142345" strokeWidth="1.5" />
          <path d="M20 12v8l5 3" stroke="#142345" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "tailored":
      return (
        <svg {...common}>
          <path d="M10 30l10-20 10 20H10z" stroke="#142345" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M16 24h8" stroke="#142345" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "trusted":
      return (
        <svg {...common}>
          <path d="M20 6l12 4v10c0 8-5.2 12.4-12 14-6.8-1.6-12-6-12-14V10l12-4z" stroke="#142345" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M15 20l3 3 7-7" stroke="#142345" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}
