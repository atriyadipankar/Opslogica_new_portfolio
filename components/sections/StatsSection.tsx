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
    <section className="px-3 py-10 sm:py-16">
      <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[40px] bg-forest px-6 py-14 sm:px-10">
        <div className="blob -left-16 -top-20 h-60 w-60 bg-[#2e6b52]" />
        <div className="blob -bottom-24 right-10 h-60 w-60 bg-coral/35" />

        <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={
                i > 0 ? "lg:border-l lg:border-cream/15" : ""
              }
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                valueClassName="text-cream md:text-7xl"
                labelClassName="text-butter text-[0.9375rem] font-medium"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
