"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/content/site";
import { HashLink } from "../ui/HashLink";
import { CloseIcon, MenuIcon } from "../ui/Icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current?.contains(target) ||
        toggleRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-prussian-blue bg-white">
      <div className="mx-auto flex h-[82px] max-w-6xl items-center justify-between px-5 md:px-10 lg:px-20">
        <HashLink href="#hero" className="shrink-0" onNavigate={closeMenu}>
          <Image
            src="/logotypes/cs_mobility_crisp_trimmed_transparent.svg"
            alt="CS Mobility"
            width={95}
            height={36}
            priority
            className="h-9 w-auto"
          />
        </HashLink>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <HashLink
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-prussian-blue transition-colors hover:text-gold"
            >
              {link.label}
            </HashLink>
          ))}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="text-prussian-blue lg:hidden cursor-pointer"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-5 w-8" />
          )}
        </button>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav
          ref={menuRef}
          id="mobile-nav"
          className="overflow-hidden border-t border-white-smoke bg-white"
          aria-label="Mobile"
          aria-hidden={!open}
        >
          <ul className="flex flex-col gap-4 px-5 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <HashLink
                  href={link.href}
                  className="block text-base font-medium text-prussian-blue transition-colors hover:text-gold w-fit"
                  onNavigate={closeMenu}
                  tabIndex={open ? undefined : -1}
                >
                  {link.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
