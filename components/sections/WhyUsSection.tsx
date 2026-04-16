"use client";

import { Shield, Brain, Rocket, DollarSign } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const differentiators = [
  {
    id: "deep-knowledge",
    icon: Shield,
    title: "Deep Industry Knowledge",
    description:
      "We specialize in healthcare, logistics, and regulated industries — so we speak your language from day one.",
  },
  {
    id: "ai-expertise",
    icon: Brain,
    title: "Proven AI Expertise",
    description:
      "Our team has deployed AI solutions across 50+ projects, from intelligent chatbots to predictive analytics pipelines.",
  },
  {
    id: "end-to-end",
    icon: Rocket,
    title: "End-to-End Delivery",
    description:
      "From strategy and design to development, deployment, and ongoing support — we own every stage of the journey.",
  },
  {
    id: "transparent-pricing",
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprise invoices. You get a clear scope, fixed milestones, and honest communication throughout.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="section-padding section-border">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeader
          badge="Why Opslogica"
          title="Your Unfair Advantage in Tech"
          subtitle=""
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group border border-border-subtle bg-white p-6 transition-colors duration-200 hover:border-text-primary"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center border border-border-subtle">
                  <Icon className="h-5 w-5 text-text-primary" />
                </div>
                <h3 className="mb-2 text-base font-semibold tracking-tight text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
