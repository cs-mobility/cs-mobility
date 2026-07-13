import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ContactLink } from "@/components/ui/ContactLink";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100svh-var(--header-height))] flex-col overflow-hidden bg-white"
    >
      <div className="grid min-h-[calc(100svh-var(--header-height))] flex-1 grid-cols-1 lg:grid-cols-2 lg:items-stretch">
        {/* Copy — blue panel, left half on lg */}
        <div className="flex flex-col justify-center bg-prussian-blue px-5 py-12 text-white md:px-10 md:py-14 lg:px-12 lg:py-16 xl:px-20">
          <h1 className="font-serif text-[30px] leading-tight font-bold md:text-4xl lg:text-5xl">
            Your partner for seamless Business transition in{" "}
            <span className="text-gold">Sweden</span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/90 md:text-base lg:max-w-lg">
            We help international companies establish and operate in Sweden with
            expert planning, advisory, and hands-on support, covering everything
            from tax matters to work and residency permits.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button
              href="#contact"
              variant="accent"
              icon={<ArrowRightIcon className="h-5 w-5" />}
            >
              Get in touch
            </Button>
            <ContactLink light />
          </div>
        </div>

        {/* Image — fills remaining height on mobile, right half on lg */}
        <div className="relative min-h-[280px] md:min-h-[360px] lg:min-h-0">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/backgrounds/city-blue-w.png"
              alt="Stockholm skyline at dusk"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
