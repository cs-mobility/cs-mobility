import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhySection } from "@/components/sections/WhySection";
import { featureFlags } from "@/lib/content/site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <WhySection />
        {featureFlags.showTestimonials && <TestimonialsSection />}
        {featureFlags.showPartners && <PartnersSection />}
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
