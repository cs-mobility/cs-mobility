import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";
import { ContactLink } from "@/components/ui/ContactLink";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function ContactSection() {
  return (
    <Section id="contact" variant="dark" className="pb-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel light>Contact</SectionLabel>
            <SectionHeading light>
              Ready to make your transition to Sweden smoother?
            </SectionHeading>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 md:text-base">
              Tell us about your plans and we will help you navigate the path to
              establishing your business in Sweden.
            </p>
            <div className="mt-8 hidden flex-col items-start gap-4 sm:flex-row sm:items-center lg:flex">
              <Button
                href="#contact-form"
                variant="accent"
                icon={<ArrowRightIcon className="h-5 w-5" />}
              >
                Get in touch
              </Button>
              <ContactLink light />
            </div>
          </div>

          <div id="contact-form">
            <ContactForm />
            <ContactLink light className="mt-6 lg:hidden" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
