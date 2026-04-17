import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import SectionHeader from "@/components/ui/SectionHeader";
import PortfolioGrid from "@/components/sections/PortfolioGrid";

export const metadata: Metadata = {
  title: "Case Studies | Opslogica",
  description:
    "Real results from real projects across healthcare and enterprise. Explore how Opslogica delivers measurable outcomes through custom software and AI automation.",
  alternates: {
    canonical: "https://opslogica.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Case Studies", href: "/case-studies" },
        ]}
      />

      {/* Hero */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeader
            title="Our Work Speaks for Itself"
            subtitle="Real websites built for real healthcare businesses across the globe. Click any project to explore."
            badge="Case Studies"
          />
        </div>
      </section>

      {/* Full Portfolio Grid with filters */}
      <section className="section-padding section-border">
        <div className="mx-auto max-w-[1280px] px-6">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
