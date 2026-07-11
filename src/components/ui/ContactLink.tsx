import { site } from "@/lib/content/site";
import { MailIcon } from "./Icons";

type ContactLinkProps = {
  light?: boolean;
  className?: string;
};

export function ContactLink({ light = false, className = "" }: ContactLinkProps) {
  return (
    <a
      href={`mailto:${site.email}`}
      className={`inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80 md:text-base ${
        light ? "text-white" : "text-prussian-blue"
      } ${className}`}
    >
      <MailIcon className="h-5 w-5 shrink-0" />
      {site.email}
    </a>
  );
}
