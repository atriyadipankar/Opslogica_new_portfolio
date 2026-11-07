"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { Phone, Search, PenTool, Hammer, Rocket, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

// "If you choose us": the engagement, start to finish. Facts come from our FAQ
// (strategy call, four phases, bi-weekly demos, MVP in 6-8 weeks, ongoing support).
const STOPS = [
  {
    icon: Phone,
    tint: "bg-butter",
    step: "Day 0",
    title: "Free strategy call",
    you: "Tell us what slows your team down.",
    we: "Analyse your workflows and show where automation pays off.",
    get: "A clear shortlist of what to automate first.",
  },
  {
    icon: Search,
    tint: "bg-sage",
    step: "Phase 1",
    title: "Discovery",
    you: "Walk us through your tools and the people involved.",
    we: "Map the process, the systems and the edge cases.",
    get: "A scoped plan with fixed milestones.",
  },
  {
    icon: PenTool,
    tint: "bg-peach",
    step: "Phase 2",
    title: "Design",
    you: "Review the flow and say where a person must approve.",
    we: "Design the automation, the rules and the hand-offs.",
    get: "A blueprint you can read in five minutes.",
  },
  {
    icon: Hammer,
    tint: "bg-sky",
    step: "Phase 3",
    title: "Build",
    you: "Join a short demo every two weeks.",
    we: "Build and connect to your tools through APIs, webhooks and middleware.",
    get: "Working software you can try early, not at the end.",
  },
  {
    icon: Rocket,
    tint: "bg-butter",
    step: "Phase 4",
    title: "Launch",
    you: "Switch it on, with us watching.",
    we: "Test, deploy, monitor and train your team.",
    get: "An MVP in about 6 to 8 weeks. Larger platforms take 3 to 6 months.",
  },
  {
    icon: TrendingUp,
    tint: "bg-sage",
    step: "After",
    title: "Grow",
    you: "Tell us what to automate next.",
    we: "Support it, improve it and extend it on a monthly retainer.",
    get: "A system that keeps getting better.",
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const grow = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="mx-auto max-w-[1100px] px-6">
        <SectionHeader
          badge="If You Choose Us"
          title="Here is what working with us looks like"
          subtitle="From the first call to a system that runs on its own. Scroll to follow the journey."
        />

        <div ref={ref} className="relative mt-16">
          {/* track + progress line */}
          <div className="absolute bottom-0 left-[26px] top-0 w-[3px] rounded bg-border-subtle md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            className="absolute left-[26px] top-0 w-[3px] origin-top rounded bg-gradient-to-b from-forest via-forest to-coral md:left-1/2 md:-translate-x-1/2"
            style={{ height: "100%", scaleY: reduce ? 1 : grow }}
          />

          <ol className="space-y-10 md:space-y-16">
            {STOPS.map((s, i) => {
              const Icon = s.icon;
              const right = i % 2 === 1;
              return (
                <li key={s.title} className="relative pl-[72px] md:grid md:grid-cols-2 md:gap-24 md:pl-0">
                  {/* node */}
                  <motion.span
                    className={`absolute left-0 top-2 z-10 grid h-[54px] w-[54px] place-items-center rounded-full text-ink ring-[6px] ring-cream md:left-1/2 md:-translate-x-1/2 ${s.tint}`}
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.9} />
                  </motion.span>

                  <motion.div
                    className={`rounded-[28px] bg-paper p-6 ring-1 ring-border-subtle shadow-[0_24px_40px_-30px_rgba(20,38,31,0.5)] md:p-7 ${
                      right ? "md:col-start-2" : "md:col-start-1"
                    }`}
                    initial={{ opacity: 0, x: reduce ? 0 : right ? 44 : -44, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4 }}
                  >
                    <span className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-coral">{s.step}</span>
                    <h3 className="mt-1 text-2xl text-ink">{s.title}</h3>
                    <dl className="mt-4 space-y-3 text-[0.9375rem] leading-snug">
                      <div className="flex gap-3">
                        <dt className="w-14 shrink-0 pt-0.5 text-xs font-bold uppercase tracking-wider text-text-secondary">You</dt>
                        <dd className="text-ink">{s.you}</dd>
                      </div>
                      <div className="flex gap-3">
                        <dt className="w-14 shrink-0 pt-0.5 text-xs font-bold uppercase tracking-wider text-text-secondary">We</dt>
                        <dd className="text-ink">{s.we}</dd>
                      </div>
                      <div className="flex gap-3 rounded-2xl bg-sage/60 px-3 py-2.5">
                        <dt className="w-11 shrink-0 pt-0.5 text-xs font-bold uppercase tracking-wider text-forest">Get</dt>
                        <dd className="font-medium text-forest">{s.get}</dd>
                      </div>
                    </dl>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
