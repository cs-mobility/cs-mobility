import { FeatureCard } from "@/components/cards/FeatureCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/lib/content/services";

export function ServicesSection() {
  return (
    <Section id="services">
      <Container>
        <SectionLabel>How we help</SectionLabel>
        <SectionHeading className="max-w-lg">
          Comprehensive support for your business journey
        </SectionHeading>

        <div className="mt-10 grid gap-3 md:grid-cols-2 md:gap-4 lg:gap-6">
          {services.map((item) => (
            <FeatureCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
