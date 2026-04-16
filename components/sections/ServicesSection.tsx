"use client";

import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ServicesSection() {
  return (
    <section className="section-padding section-border">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeader
          badge="What We Do"
          title="Services That Drive Results"
          subtitle="From custom software to AI automation, we build solutions that save time, cut costs, and accelerate your growth."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
