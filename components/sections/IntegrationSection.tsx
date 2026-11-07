"use client";

import { useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

// ---------------------------------------------------------------------------
// "How it plugs in": the tools a business already uses flow into an automation
// layer, and out come finished outcomes. Drawn as one scaling SVG on desktop,
// and as three stacked cards on small screens.
// ---------------------------------------------------------------------------

const SOURCES = [
  { label: "CRM & sales tools", tint: "var(--sage)" },
  { label: "Email & calendar", tint: "var(--butter)" },
  { label: "Spreadsheets & databases", tint: "var(--peach)" },
  { label: "Accounting & ERP", tint: "var(--sky)" },
  { label: "Websites & forms", tint: "var(--sage)" },
  { label: "WhatsApp, chat & SMS", tint: "var(--butter)" },
];

const LAYER = [
  "Triggers & schedules",
  "AI that reads & decides",
  "Rules & approvals",
  "Monitoring & alerts",
];

const OUTCOMES = [
  { label: "Records updated", tint: "var(--sage)" },
  { label: "Messages sent", tint: "var(--butter)" },
  { label: "Reports delivered", tint: "var(--peach)" },
  { label: "Alerts for your team", tint: "var(--sky)" },
];

const FONT = "var(--font-dm-sans), system-ui, sans-serif";
const SERIF = "var(--font-fraunces), Georgia, serif";

// layout constants (viewBox 1120 x 500)
const LEFT_Y0 = 50;
const LEFT_STEP = 70;
const BOX_H = 54;
const OUT_Y0 = 86;
const OUT_STEP = 90;

function leftPath(i: number) {
  const y = LEFT_Y0 + i * LEFT_STEP + BOX_H / 2;
  const ty = 140 + i * 24;
  return `M250 ${y} C325 ${y}, 330 ${ty}, 395 ${ty}`;
}
function rightPath(i: number) {
  const y = OUT_Y0 + i * OUT_STEP + BOX_H / 2;
  const sy = 160 + i * 56;
  return `M725 ${sy} C790 ${sy}, 800 ${y}, 870 ${y}`;
}

export default function IntegrationSection() {
  const reduce = useReducedMotion();

  return (
    <section className="section-padding bg-cream-2">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeader
          badge="How It Plugs In"
          title="Works with the tools you already use"
          subtitle="We connect AI-powered workflows to your existing CRMs, ERPs and other systems through APIs, webhooks and middleware. The goal is to enhance your current setup, not replace it."
        />

        {/* Desktop scheme */}
        <div className="mt-14 hidden lg:block">
          <svg
            viewBox="0 0 1120 500"
            className="h-auto w-full"
            role="img"
            aria-label="Your existing tools feed the Opslogica automation layer, which produces updated records, sent messages, delivered reports and alerts for your team."
            fill="none"
          >
            {/* column headings */}
            <text x="125" y="26" textAnchor="middle" fontSize="13" fontWeight="700" letterSpacing="1.6" fill="var(--text-secondary)" fontFamily={FONT}>
              WHAT YOU ALREADY USE
            </text>
            <text x="560" y="26" textAnchor="middle" fontSize="13" fontWeight="700" letterSpacing="1.6" fill="var(--forest)" fontFamily={FONT}>
              WHAT WE BUILD
            </text>
            <text x="995" y="26" textAnchor="middle" fontSize="13" fontWeight="700" letterSpacing="1.6" fill="var(--text-secondary)" fontFamily={FONT}>
              WHAT YOU GET
            </text>

            {/* connectors */}
            {SOURCES.map((_, i) => (
              <path key={`l${i}`} d={leftPath(i)} stroke="var(--forest)" strokeOpacity="0.3" strokeWidth="1.6" strokeDasharray="4 6" />
            ))}
            {OUTCOMES.map((_, i) => (
              <path key={`r${i}`} d={rightPath(i)} stroke="var(--forest)" strokeOpacity="0.3" strokeWidth="1.6" strokeDasharray="4 6" />
            ))}

            {/* moving dots */}
            {!reduce &&
              SOURCES.map((_, i) => (
                <circle key={`ld${i}`} r="5" fill="var(--coral)">
                  <animateMotion dur="3.2s" begin={`${i * 0.55}s`} repeatCount="indefinite" path={leftPath(i)} />
                </circle>
              ))}
            {!reduce &&
              OUTCOMES.map((_, i) => (
                <circle key={`rd${i}`} r="5" fill="var(--forest)">
                  <animateMotion dur="2.6s" begin={`${0.9 + i * 0.7}s`} repeatCount="indefinite" path={rightPath(i)} />
                </circle>
              ))}

            {/* left: sources */}
            {SOURCES.map((s, i) => {
              const y = LEFT_Y0 + i * LEFT_STEP;
              return (
                <g key={s.label}>
                  <rect x="0" y={y} width="250" height={BOX_H} rx="27" fill="var(--paper)" stroke="var(--border-subtle)" />
                  <circle cx="30" cy={y + BOX_H / 2} r="11" fill={s.tint} />
                  <text x="54" y={y + BOX_H / 2 + 5} fontSize="16" fontWeight="500" fill="var(--ink)" fontFamily={FONT}>
                    {s.label}
                  </text>
                </g>
              );
            })}

            {/* center: automation layer */}
            <rect x="395" y="44" width="330" height="410" rx="40" fill="var(--forest)" />
            <circle cx="690" cy="84" r="9" fill="var(--coral)">
              {!reduce && <animate attributeName="opacity" values="1;0.35;1" dur="1.8s" repeatCount="indefinite" />}
            </circle>
            <text x="560" y="92" textAnchor="middle" fontSize="23" fill="var(--cream)" fontFamily={SERIF} fontWeight="500">
              Opslogica
            </text>
            <text x="560" y="116" textAnchor="middle" fontSize="14" fill="var(--butter)" fontFamily={FONT} fontWeight="600">
              automation layer
            </text>
            {LAYER.map((l, i) => {
              const y = 142 + i * 62;
              return (
                <g key={l}>
                  <rect x="425" y={y} width="270" height="48" rx="24" fill="rgba(255,253,248,0.1)" stroke="rgba(255,253,248,0.28)" />
                  <circle cx="452" cy={y + 24} r="6" fill="var(--butter)" />
                  <text x="472" y={y + 29} fontSize="15.5" fontWeight="500" fill="var(--cream)" fontFamily={FONT}>
                    {l}
                  </text>
                </g>
              );
            })}
            <rect x="425" y="396" width="270" height="38" rx="19" fill="var(--butter)" />
            <text x="560" y="420" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--ink)" fontFamily={FONT}>
              People stay in the loop
            </text>

            {/* right: outcomes */}
            {OUTCOMES.map((o, i) => {
              const y = OUT_Y0 + i * OUT_STEP;
              return (
                <g key={o.label}>
                  <rect x="870" y={y} width="250" height={BOX_H} rx="27" fill="var(--paper)" stroke="var(--border-subtle)" />
                  <circle cx="900" cy={y + BOX_H / 2} r="11" fill={o.tint} />
                  <text x="924" y={y + BOX_H / 2 + 5} fontSize="16" fontWeight="500" fill="var(--ink)" fontFamily={FONT}>
                    {o.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Mobile / tablet: stacked version of the same idea */}
        <div className="mt-12 space-y-3 lg:hidden">
          <div className="rounded-[28px] bg-paper p-5 ring-1 ring-border-subtle">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-text-secondary">
              What you already use
            </p>
            <ul className="flex flex-wrap gap-2">
              {SOURCES.map((s) => (
                <li key={s.label} className="rounded-full bg-cream-2 px-3.5 py-1.5 text-sm font-medium text-ink">
                  {s.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid place-items-center text-coral">
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </div>

          <div className="rounded-[28px] bg-forest p-5 text-cream">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-butter">
              What we build: the automation layer
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {LAYER.map((l) => (
                <li key={l} className="rounded-2xl border border-cream/25 bg-cream/10 px-4 py-2.5 text-sm font-medium">
                  {l}
                </li>
              ))}
            </ul>
            <p className="mt-3 inline-block rounded-full bg-butter px-4 py-1.5 text-sm font-bold text-ink">
              People stay in the loop
            </p>
          </div>

          <div className="grid place-items-center text-coral">
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </div>

          <div className="rounded-[28px] bg-paper p-5 ring-1 ring-border-subtle">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-text-secondary">
              What you get
            </p>
            <ul className="flex flex-wrap gap-2">
              {OUTCOMES.map((o) => (
                <li key={o.label} className="rounded-full bg-sage/70 px-3.5 py-1.5 text-sm font-medium text-forest">
                  {o.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
