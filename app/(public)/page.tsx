import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import StatsSection from "@/components/sections/StatsSection";
import IntegrationSection from "@/components/sections/IntegrationSection";
import ProcessSection from "@/components/sections/ProcessSection";
import Marquee from "@/components/ui/Marquee";
import PortfolioSection from "@/components/sections/PortfolioSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "Opslogica | Software Development, AI Automation & Business Solutions",
  },
  description:
    "Opslogica builds custom software and AI automation for any team: leads, support, invoices, scheduling, reporting and more. Serving businesses across the USA, Canada, Europe, Australia, India and the Gulf.",
  keywords: [
    "software development company",
    "AI automation for small business",
    "business automation services",
    "AI workflow automation",
    "custom automation agency",
    "custom software USA Canada",
  ],
  alternates: {
    canonical: "https://opslogica.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Opslogica",
  url: "https://opslogica.com",
  logo: "https://opslogica.com/images/logo.png",
  description:
    "Software development, AI automation, and business automation company serving US, Canada, Europe, Australia, and Gulf businesses.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: "English",
  },
  sameAs: [
    "https://linkedin.com/company/opslogica",
    "https://github.com/opslogica",
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <HeroSection />
      <Marquee />
      <ServicesSection />
      <IntegrationSection />
      <IndustriesSection />
      <ProcessSection />
      <WhyUsSection />
      <StatsSection />
      <PortfolioSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
