import { Container } from "@/components/layout/Container";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PartnersSection() {
  return (
    <Section id="partners" className="overflow-hidden">
      <Container>
        <SectionLabel>Partners</SectionLabel>
        <SectionHeading className="max-w-lg">
          A network built around your needs
        </SectionHeading>
      </Container>

      {/* Edge-to-edge continuous marquee */}
      <div className="relative mt-10 w-full">
        <PartnerMarquee />
      </div>
    </Section>
  );
}
