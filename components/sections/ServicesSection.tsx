"use client";

import Link from "next/link";
import { icons, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Each service gets its own soft colour so the four read as four distinct things.
const TILES = [
  { bg: "bg-sage", chip: "bg-paper text-forest", n: "01" },
  { bg: "bg-butter/70", chip: "bg-paper text-ink", n: "02" },
  { bg: "bg-peach", chip: "bg-paper text-coral", n: "03" },
  { bg: "bg-sky", chip: "bg-paper text-forest", n: "04" },
] as const;

export default function ServicesSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeader
          badge="What We Do"
          title="Services that take work off your plate"
          subtitle="From custom software to AI automation, we build solutions that save time, cut costs, and accelerate your growth."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon: LucideIcon =
              (icons as Record<string, LucideIcon>)[service.icon] ??
              (icons as Record<string, LucideIcon>)["Layers"];
            const tile = TILES[i % TILES.length];
            return (
              <AnimatedSection key={service.id} delay={i * 0.08} className="h-full">
                <Link
                  href={`/services/${service.slug}`}
                  className={`group relative flex h-full min-h-[340px] flex-col rounded-[32px] p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_32px_50px_-28px_rgba(20,38,31,0.55)] ${tile.bg}`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`grid h-14 w-14 place-items-center rounded-2xl ${tile.chip}`}>
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                    <span className="font-display text-3xl text-ink/25">{tile.n}</span>
                  </div>

                  <h3 className="mt-10 text-[1.65rem] leading-tight text-ink">{service.title}</h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink/70">
                    {service.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                    Learn more
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-cream transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </span>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
