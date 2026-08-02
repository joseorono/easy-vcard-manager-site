import { AudienceSection } from "@/components/sections/audience-section";
import { CtaSection } from "@/components/sections/cta-section";
import { DevelopersSection } from "@/components/sections/developers-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { FormatsSection } from "@/components/sections/formats-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { InstallSection } from "@/components/sections/install-section";
import { PrivacySection } from "@/components/sections/privacy-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        <HeroSection />
        <PrivacySection />
        <FeaturesSection />
        <HowItWorksSection />
        <FormatsSection />
        <InstallSection />
        <AudienceSection />
        <DevelopersSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
