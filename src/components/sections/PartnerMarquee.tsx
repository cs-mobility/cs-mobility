"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { partners } from "@/lib/content/partners";

const oneSet = Array.from({ length: 4 }, () => partners).flat();
/** Two identical sets — animation translates exactly one set width (-50%). */
const marqueePartners = [...oneSet, ...oneSet];

/** Match the ~55s desktop feel regardless of track width. */
const MARQUEE_SPEED_PX_PER_S = 50;

export function PartnerMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const syncDuration = () => {
      const setWidth = track.scrollWidth / 2;
      if (setWidth <= 0) return;
      track.style.setProperty(
        "--marquee-duration",
        `${setWidth / MARQUEE_SPEED_PX_PER_S}s`,
      );
    };

    syncDuration();
    const observer = new ResizeObserver(syncDuration);
    observer.observe(track);
    document.fonts?.ready.then(syncDuration).catch(() => undefined);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={trackRef}
        className="partner-marquee-track flex w-max items-center"
      >
        {marqueePartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex h-20 shrink-0 items-center justify-center px-10 md:px-14 lg:px-16"
          >
            {partner.href ? (
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={partner.name}
                className="opacity-90 transition-opacity hover:opacity-100"
              >
                <Image
                  src={partner.src}
                  alt=""
                  width={partner.width}
                  height={partner.height}
                  className="h-auto max-h-16 w-auto max-w-[160px] object-contain md:max-w-[200px]"
                />
              </a>
            ) : (
              <Image
                src={partner.src}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="h-auto max-h-16 w-auto max-w-[160px] object-contain md:max-w-[200px]"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
