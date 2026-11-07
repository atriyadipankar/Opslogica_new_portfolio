"use client";

import {
  BarChart3,
  Headphones,
  Megaphone,
  Receipt,
  Truck,
  UsersRound,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Examples of what AI automation can take over, grouped by the team that feels it.
// (Illustrative of what we build; not client results.)
const TEAMS = [
  {
    title: "Sales & marketing",
    icon: Megaphone,
    tint: "bg-sage",
    items: ["Qualify and route new leads", "Personalised follow-ups that send themselves", "Campaign and content drafts"],
  },
  {
    title: "Customer support",
    icon: Headphones,
    tint: "bg-butter/70",
    items: ["Answer common questions instantly", "Triage and tag every ticket", "Hand tricky cases to a person with context"],
  },
  {
    title: "Finance & back office",
    icon: Receipt,
    tint: "bg-peach",
    items: ["Read and enter invoices", "Match payments and flag mismatches", "Chase approvals automatically"],
  },
  {
    title: "Operations & logistics",
    icon: Truck,
    tint: "bg-sky",
    items: ["Orders, stock and supplier updates", "Scheduling and dispatch", "Status updates without the phone calls"],
  },
  {
    title: "People & onboarding",
    icon: UsersRound,
    tint: "bg-sage",
    items: ["Collect documents and answer questions", "Create accounts and book training", "Reminders that keep things moving"],
  },
  {
    title: "Data & reporting",
    icon: BarChart3,
    tint: "bg-butter/70",
    items: ["Pull numbers from every tool", "Spot changes and send summaries", "Dashboards that stay fresh"],
  },
] as const;

export default function IndustriesSection() {
  return (
    <section id="automate" className="section-padding relative scroll-mt-24 overflow-hidden">
      <div className="blob -right-24 top-20 h-64 w-64 bg-peach/80" />
      <div className="relative mx-auto max-w-[1280px] px-6">
        <SectionHeader
          badge="What We Automate"
          title="Whatever is slowing your team down"
          subtitle="There is almost always a repeating process behind the busywork. Here are some of the places we start."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TEAMS.map((team, i) => {
            const Icon = team.icon;
            return (
              <AnimatedSection key={team.title} delay={i * 0.06}>
                <div className="group h-full rounded-[32px] bg-paper p-7 ring-1 ring-border-subtle transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_44px_-28px_rgba(20,38,31,0.55)]">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl text-forest ${team.tint}`}>
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-6 text-2xl text-ink">{team.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {team.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[0.9375rem] leading-snug text-text-secondary">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}
