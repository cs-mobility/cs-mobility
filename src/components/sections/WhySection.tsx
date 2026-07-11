import { FeatureCard } from "@/components/cards/FeatureCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { benefits } from "@/lib/content/benefits";

export function WhySection() {
  return (
    <Section id="about">
      <Container>
        <SectionLabel>Why CS Mobility</SectionLabel>
        <SectionHeading className="max-w-lg">
          Local expertise with a global perspective
        </SectionHeading>

        <div className="mt-10 grid gap-3 md:grid-cols-2 md:gap-4 lg:gap-6">
          {benefits.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
