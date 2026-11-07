"use client";

import { Sparkles } from "lucide-react";

const ROW_A = ["Lead follow-ups", "Invoice matching", "Support triage", "Smart scheduling", "Weekly reports", "Document intake", "Stock reorders", "Client onboarding"];
const ROW_B = ["CRM sync", "Email routing", "WhatsApp replies", "Approvals", "Data entry", "Alerts & monitoring", "Spreadsheet clean-up", "Custom AI agents"];

function Row({ items, dir, tone }: { items: string[]; dir: "left" | "right"; tone: "solid" | "outline" }) {
  const doubled = [...items, ...items];
  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div
        className="marquee-track gap-0 group-hover:[animation-play-state:paused]"
        style={{ animation: `marquee-${dir} ${dir === "left" ? 38 : 46}s linear infinite` }}
      >
        {doubled.map((t, i) => (
          <span key={i} className="flex items-center">
            <span
              className={
                tone === "solid"
                  ? "font-display text-[2.6rem] leading-none text-cream sm:text-6xl"
                  : "font-display text-[2.6rem] italic leading-none text-transparent [-webkit-text-stroke:1.5px_var(--butter)] sm:text-6xl"
              }
            >
              {t}
            </span>
            <Sparkles className="mx-6 h-6 w-6 shrink-0 text-coral sm:mx-9 sm:h-8 sm:w-8" style={{ animation: "spin-slow 9s linear infinite" }} />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-label="Things we automate" className="relative overflow-hidden bg-forest py-10 sm:py-14">
      <div className="space-y-5 sm:space-y-7">
        <Row items={ROW_A} dir="left" tone="solid" />
        <Row items={ROW_B} dir="right" tone="outline" />
      </div>
    </section>
  );
}
