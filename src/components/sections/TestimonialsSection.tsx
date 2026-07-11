"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout/Container";
import {
  CarouselItem,
  CarouselRoot,
  CarouselTrack,
  useCarousel,
  useCarouselControls,
} from "@/components/ui/Carousel";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/content/testimonials";

function TestimonialSlide({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className="flex h-full w-full flex-col rounded-lg bg-white p-6 text-prussian-blue md:p-10">
      <span
        className="block font-serif text-4xl leading-none font-bold text-gold md:text-5xl lg:text-6xl"
        aria-hidden
      >
        &ldquo;
      </span>
      <blockquote className="mt-0 flex-1 font-serif text-2xl leading-snug font-bold md:text-3xl lg:text-4xl">
        {quote}
      </blockquote>
      <footer className="mt-10 shrink-0">
        <p className="font-serif text-lg font-bold md:text-xl">{name}</p>
        <p className="mt-1 text-sm font-medium text-gold md:text-base">{role}</p>
      </footer>
    </div>
  );
}

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useCarousel({ loop: true, align: "start" });
  const { selectedIndex, scrollSnaps, scrollPrev, scrollNext, scrollTo } =
    useCarouselControls(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;

    const syncEqualHeight = () => {
      const slides = emblaApi.slideNodes();
      const root = emblaApi.rootNode();
      if (!slides.length || !root) return;

      slides.forEach((slide) => {
        slide.style.height = "auto";
      });
      root.style.height = "auto";

      const maxHeight = Math.max(
        ...slides.map((slide) => slide.getBoundingClientRect().height),
      );

      if (maxHeight <= 0) return;

      root.style.height = `${maxHeight}px`;
      slides.forEach((slide) => {
        slide.style.height = `${maxHeight}px`;
      });
    };

    const frame = requestAnimationFrame(syncEqualHeight);
    emblaApi.on("reInit", syncEqualHeight);
    window.addEventListener("resize", syncEqualHeight);
    document.fonts?.ready.then(syncEqualHeight).catch(() => undefined);

    return () => {
      cancelAnimationFrame(frame);
      emblaApi.off("reInit", syncEqualHeight);
      window.removeEventListener("resize", syncEqualHeight);
    };
  }, [emblaApi]);

  return (
    <Section id="stories" variant="dark">
      <Container>
        <SectionLabel light>Client stories</SectionLabel>
        <SectionHeading light className="max-w-md">
          Trusted by companies worldwide
        </SectionHeading>

        <div className="mt-10 w-full">
          <div className="mb-4 flex items-center justify-between px-2">
            <div className="flex gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === selectedIndex ? "true" : undefined}
                  onClick={() => scrollTo(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === selectedIndex ? "bg-gold" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-1">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={scrollPrev}
                className="px-3 py-1 text-xl text-gold transition-colors hover:text-white"
              >
                &lt;
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={scrollNext}
                className="px-3 py-1 text-xl text-gold transition-colors hover:text-white"
              >
                &gt;
              </button>
            </div>
          </div>

          <CarouselRoot emblaRef={emblaRef} className="w-full rounded-lg">
            <CarouselTrack className="items-stretch">
              {testimonials.map((item) => (
                <CarouselItem key={item.name} className="flex w-full">
                  <TestimonialSlide
                    quote={item.quote}
                    name={item.name}
                    role={item.role}
                  />
                </CarouselItem>
              ))}
            </CarouselTrack>
          </CarouselRoot>
        </div>
      </Container>
    </Section>
  );
}
