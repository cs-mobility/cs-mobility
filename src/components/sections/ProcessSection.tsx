import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { processSteps } from "@/lib/content/process";

export function ProcessSection() {
  return (
    <Section id="process" variant="dark">
      <Container>
        <SectionLabel light>Our process</SectionLabel>
        <SectionHeading light className="max-w-md">
          A clear roadmap for a smooth transition
        </SectionHeading>

        {/* Mobile — vertical timeline with dashed connectors */}
        <ol className="relative mt-12 lg:hidden">
          {processSteps.map((step, index) => (
            <li
              key={step.step}
              className="relative flex gap-5 pb-10 last:pb-0"
            >
              {index < processSteps.length - 1 && (
                <span
                  className="absolute top-10 left-[19px] h-[calc(100%-2.5rem)] w-px border-l-2 border-dashed border-gold"
                  aria-hidden
                />
              )}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold font-serif text-lg font-bold text-white">
                {step.step}
              </div>
              <div className="min-w-0 pt-0.5">
                <h3 className="font-serif text-sm font-bold text-white md:text-base">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-white/85 md:text-sm">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Desktop — horizontal row with dashed connectors between blobs */}
        <div className="relative mt-12 hidden lg:block">
          <span
            className="pointer-events-none absolute top-5 right-[10%] left-[10%] border-t-2 border-dashed border-gold"
            aria-hidden
          />
          <ol className="relative grid grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <li key={step.step} className="text-center">
                <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gold font-serif text-lg font-bold text-white">
                  {step.step}
                </div>
                <h3 className="mt-3 font-serif text-sm font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-white/85">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
