"use client";

import { INDUSTRIES } from "@/lib/constants";
import IndustryCard from "@/components/ui/IndustryCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function IndustriesSection() {
  return (
    <section className="section-padding section-border bg-bg-secondary">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeader
          badge="Who We Serve"
          title="Built for Healthcare & Local Businesses"
          subtitle="Deep domain expertise in healthcare verticals — we understand your workflows, compliance needs, and growth challenges."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <IndustryCard
              key={industry.id}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              href={`/industries/${industry.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
