"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 5, suffix: "", label: "Countries" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export default function StatsSection() {
  return (
    <section className="section-padding section-border bg-bg-secondary">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <AnimatedCounter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}
