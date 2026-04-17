import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import StatsSection from "@/components/sections/StatsSection";
import CaseStudyPreview from "@/components/sections/CaseStudyPreview";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "Opslogica | Software Development, AI Automation & Business Solutions",
  },
  description:
    "Opslogica delivers custom software development, AI automation, and business automation to healthcare clinics and local enterprises across USA, Canada, Europe, Australia, and Gulf.",
  keywords: [
    "software development company",
    "AI automation for small business",
    "business automation services",
    "website development for dental clinics",
    "healthcare software solutions",
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
      <ServicesSection />
      <IndustriesSection />
      <WhyUsSection />
      <StatsSection />
      <PortfolioSection />
      <CaseStudyPreview />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
