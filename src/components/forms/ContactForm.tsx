"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronDownIcon } from "@/components/ui/Icons";

type FormState = "idle" | "submitting" | "success" | "error";

type ContactFormProps = {
  className?: string;
};

export function ContactForm({ className = "" }: ContactFormProps) {
  const [expanded, setExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const syncViewport = () => {
      const desktop = desktopQuery.matches;
      setIsDesktop(desktop);
      if (desktop) {
        setExpanded(true);
      }
    };

    const expandForHash = () => {
      if (
        window.location.hash === "#contact-form" &&
        !desktopQuery.matches
      ) {
        setExpanded(true);
      }
    };

    syncViewport();
    expandForHash();

    desktopQuery.addEventListener("change", syncViewport);
    window.addEventListener("hashchange", expandForHash);

    return () => {
      desktopQuery.removeEventListener("change", syncViewport);
      window.removeEventListener("hashchange", expandForHash);
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setState("success");
        form.reset();
        return;
      }

      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      // Netlify Forms fallback when API is unavailable in production
      if (response.status === 503 && typeof window !== "undefined") {
        const netlifyBody = new URLSearchParams({
          "form-name": "contact",
          ...payload,
        });
        const netlifyResponse = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: netlifyBody.toString(),
        });
        if (netlifyResponse.ok) {
          setState("success");
          form.reset();
          return;
        }
      }

      setErrorMessage(data?.error ?? "Something went wrong. Please try again.");
      setState("error");
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setState("error");
    }
  }

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between rounded-md bg-gold px-6 py-3.5 text-base font-semibold text-white lg:hidden"
        aria-expanded={expanded}
        aria-controls="contact-form-panel"
      >
        Get in touch
        <ChevronDownIcon
          className={`h-5 w-5 transition-transform duration-300 ease-out motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none lg:grid-rows-[1fr] ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          id="contact-form-panel"
          className="overflow-hidden lg:overflow-visible"
          aria-hidden={!isDesktop && !expanded}
        >
          <div className="rounded-md bg-gold p-4 md:p-5 lg:mt-0">
            {state === "success" ? (
              <div className="rounded-md bg-white p-6 text-center text-prussian-blue">
                <p className="font-serif text-lg font-bold">Thank you!</p>
                <p className="mt-2 text-sm">
                  Your message has been sent. We will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setState("idle")}
                  className="mt-4 text-sm font-semibold text-gold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-3"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  autoComplete="name"
                  tabIndex={!isDesktop && !expanded ? -1 : undefined}
                  className="w-full rounded-md bg-white px-4 py-2.5 text-sm text-prussian-blue placeholder:text-prussian-blue/50 outline-none focus:ring-2 focus:ring-prussian-blue/20"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  autoComplete="email"
                  tabIndex={!isDesktop && !expanded ? -1 : undefined}
                  className="w-full rounded-md bg-white px-4 py-2.5 text-sm text-prussian-blue placeholder:text-prussian-blue/50 outline-none focus:ring-2 focus:ring-prussian-blue/20"
                />
                <textarea
                  name="message"
                  required
                  rows={8}
                  placeholder="Your message"
                  tabIndex={!isDesktop && !expanded ? -1 : undefined}
                  className="w-full resize-y rounded-md bg-white px-4 py-2.5 text-sm text-prussian-blue placeholder:text-prussian-blue/50 outline-none focus:ring-2 focus:ring-prussian-blue/20"
                />

                {state === "error" && errorMessage && (
                  <p className="text-sm text-white" role="alert">
                    {errorMessage}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  disabled={state === "submitting"}
                  className="w-full"
                >
                  {state === "submitting" ? "Sending…" : "Send message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
