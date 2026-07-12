import Image from "next/image";
import { navLinks, site, socialLinks } from "@/lib/content/site";
import { HashLink } from "../ui/HashLink";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "../ui/Icons";
import { Container } from "./Container";

function SocialIcon({ icon }: { icon: (typeof socialLinks)[number]["icon"] }) {
  switch (icon) {
    case "linkedin":
      return <LinkedInIcon className="h-7 w-7" />;
    case "facebook":
      return <FacebookIcon className="h-7 w-7" />;
    case "instagram":
      return <InstagramIcon className="h-7 w-7" />;
  }
}

function SocialLink({ link }: { link: (typeof socialLinks)[number] }) {
  const icon = <SocialIcon icon={link.icon} />;

  if (link.href) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        className="text-prussian-blue transition-colors hover:text-gold"
      >
        {icon}
      </a>
    );
  }

  return (
    <span aria-label={link.label} className="text-prussian-blue">
      {icon}
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-white pt-16 pb-8 text-prussian-blue">
      <Container>
        <div className="grid gap-12 lg:grid-cols-3 lg:items-start">
          <div className="lg:justify-self-start">
            <Image
              src="/logotypes/cs_mobility_crisp_trimmed_transparent.svg"
              alt="CS Mobility"
              width={135}
              height={51}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {site.footerNote}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-prussian-blue/80">
              {site.tagline}
            </p>
          </div>

          <div className="lg:justify-self-center">
            <p className="mb-4 text-sm font-bold tracking-wide text-gold uppercase">
              Quick links
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <HashLink
                    href={link.href}
                    className="transition-colors hover:text-gold"
                  >
                    {link.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:justify-self-end">
            <p className="mb-4 text-sm font-bold tracking-wide text-gold uppercase">
              Get in touch
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${site.locations.join(", ")}, Sweden`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-gold"
                >
                  <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0" />
                  <span className="max-w-16 leading-relaxed sm:max-w-none">
                    {site.locations.map((city, index) => (
                      <span key={city}>
                        {index > 0 && (
                          <span aria-hidden="true" className="text-gold/60">
                            {" · "}
                          </span>
                        )}
                        {city}
                      </span>
                    ))}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-gold"
                >
                  <MailIcon className="h-5 w-5 shrink-0" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-white-smoke" />

        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="text-xs text-prussian-blue/70">{site.copyright}</p>
          <div className="flex items-center gap-4" aria-label="Social media">
            {socialLinks.map((link) => (
              <SocialLink key={link.label} link={link} />
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
