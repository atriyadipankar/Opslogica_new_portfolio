"use client";

import { Shield, Brain, Rocket, DollarSign } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

const differentiators = [
  {
    id: "deep-knowledge",
    icon: Shield,
    title: "Deep Industry Knowledge",
    description:
      "Operations, logistics, finance, sales or support: we learn how your business runs first, so the automation fits the way you already work.",
    tint: "bg-sage",
  },
  {
    id: "ai-expertise",
    icon: Brain,
    title: "Proven AI Expertise",
    description:
      "Our team has deployed AI solutions across 50+ projects, from intelligent chatbots to predictive analytics pipelines.",
    tint: "bg-butter/70",
  },
  {
    id: "end-to-end",
    icon: Rocket,
    title: "End-to-End Delivery",
    description:
      "From strategy and design to development, deployment, and ongoing support — we own every stage of the journey.",
    tint: "bg-peach",
  },
  {
    id: "transparent-pricing",
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprise invoices. You get a clear scope, fixed milestones, and honest communication throughout.",
    tint: "bg-sky",
  },
];

export default function WhyUsSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            centered={false}
            badge="Why Opslogica"
            title="Your unfair advantage in tech"
            subtitle="Four things we hold ourselves to on every project."
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.id} delay={i * 0.07}>
                <div className="group relative h-full rounded-[32px] bg-paper p-7 ring-1 ring-border-subtle transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_44px_-28px_rgba(20,38,31,0.55)]">
                  <div className="flex items-center justify-between">
                    <span className={`grid h-12 w-12 place-items-center rounded-2xl text-forest ${item.tint}`}>
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="font-display text-4xl text-ink/15 transition-colors duration-300 group-hover:text-coral/60">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 text-2xl leading-tight text-ink">{item.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
