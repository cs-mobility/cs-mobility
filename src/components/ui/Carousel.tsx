"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";

type UseEmblaCarouselParams = Parameters<typeof useEmblaCarousel>;

export function useCarousel(
  options?: UseEmblaCarouselParams[0],
  plugins?: UseEmblaCarouselParams[1],
) {
  return useEmblaCarousel(options, plugins);
}

export function CarouselRoot({
  emblaRef,
  children,
  className = "",
}: {
  emblaRef: (node: HTMLDivElement | null) => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className}`} ref={emblaRef}>
      {children}
    </div>
  );
}

export function CarouselTrack({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`flex touch-pan-y ${className}`}>{children}</div>;
}

export function CarouselItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`min-w-0 shrink-0 grow-0 basis-full ${className}`}>
      {children}
    </div>
  );
}

export function useCarouselControls(
  emblaApi: ReturnType<typeof useEmblaCarousel>[1],
) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const sync = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", sync);
    emblaApi.on("reInit", sync);
    const frame = requestAnimationFrame(sync);

    return () => {
      cancelAnimationFrame(frame);
      emblaApi.off("select", sync);
      emblaApi.off("reInit", sync);
    };
  }, [emblaApi]);

  return {
    selectedIndex,
    scrollSnaps,
    scrollPrev,
    scrollNext,
    scrollTo,
  };
}
