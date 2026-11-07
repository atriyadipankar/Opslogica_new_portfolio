"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Signature element: a live workflow canvas. A trigger enters, AI reads it,
// the flow branches on a decision, then converges on a finished result.
// The scenario changes on its own. (Illustrative, not client results.)
// ---------------------------------------------------------------------------

const SCENARIOS = [
  { name: "Lead follow-up", trigger: "New enquiry arrives", ai: "AI scores & researches it", a: "Hot lead: book a call", b: "Cold: nurture emails", result: "CRM updated, nothing slips" },
  { name: "Customer support", trigger: "Customer message in", ai: "AI finds the answer in docs", a: "Confident: reply now", b: "Unsure: hand to a person", result: "Ticket tagged and closed" },
  { name: "Invoices & payments", trigger: "Invoice hits the inbox", ai: "AI reads the PDF", a: "Matches PO: enter it", b: "Mismatch: flag for review", result: "Booked, no retyping" },
  { name: "Scheduling", trigger: "Someone asks for a time", ai: "AI checks availability", a: "Free: confirm it", b: "Busy: offer alternatives", result: "Booked + reminders sent" },
  { name: "Weekly reporting", trigger: "Monday 9:00 schedule", ai: "AI pulls and compares data", a: "Big change: alert team", b: "Steady: send summary", result: "Fresh dashboards delivered" },
  { name: "Onboarding", trigger: "New hire or client signs", ai: "AI collects and checks docs", a: "Complete: create accounts", b: "Missing: nudge them", result: "Smooth first week" },
  { name: "Orders & stock", trigger: "Order in or stock low", ai: "AI reads demand", a: "Reorder from supplier", b: "Backorder and notify", result: "Fewer stock-outs" },
  { name: "Documents", trigger: "Contract or ID arrives", ai: "AI sorts and extracts fields", a: "Valid: file it", b: "Unclear: request review", result: "Systems filled automatically" },
] as const;

const STEP_MS = 1000;
const HOLD_TICKS = 3;

const HEADLINE = ["If", "a", "process", "repeats,", "we", "can", "automate", "it."];

const TOASTS = [
  { text: "Invoice #4821 matched to PO", tint: "bg-sage", pos: "-left-14 top-28" },
  { text: "New lead scored 92 and routed", tint: "bg-butter", pos: "-right-12 top-52" },
  { text: "Weekly report sent to 14 people", tint: "bg-sky", pos: "-left-12 -bottom-3" },
  { text: "Support ticket answered in 8s", tint: "bg-peach", pos: "-right-8 -top-4" },
];

const COUNTRIES = ["United States", "Canada", "Europe", "Australia", "India", "Gulf Region"];

function Node({ x, y, w, label, tag, state, tone }: { x: number; y: number; w: number; label: string; tag: string; state: "idle" | "active" | "done"; tone: string }) {
  const on = state !== "idle";
  return (
    <g style={{ transition: "opacity .4s" }} opacity={on ? 1 : 0.45}>
      <rect x={x} y={y} width={w} height="54" rx="27" fill={state === "active" ? tone : "var(--paper)"} stroke={state === "done" ? "var(--forest)" : state === "active" ? "var(--coral)" : "var(--border-subtle)"} strokeWidth={on ? 2 : 1} />
      <text x={x + w / 2} y={y + 21} textAnchor="middle" fontSize="9.5" fontWeight="700" letterSpacing="1.4" fill="var(--forest)" fontFamily="var(--font-dm-sans), sans-serif">{tag}</text>
      <text x={x + w / 2} y={y + 38} textAnchor="middle" fontSize="12.5" fontWeight="500" fill="var(--ink)" fontFamily="var(--font-dm-sans), sans-serif">{label}</text>
    </g>
  );
}

const P = {
  t_ai: "M220 64 L220 116",
  ai_a: "M220 170 C220 205, 108 195, 108 232",
  ai_b: "M220 170 C220 205, 332 195, 332 232",
  a_r: "M108 286 C108 320, 220 310, 220 346",
  b_r: "M332 286 C332 320, 220 310, 220 346",
};

function AutomationBuilder() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduce = useReducedMotion();
  const [scenario, setScenario] = useState(0);
  const [tick, setTick] = useState(-1);

  useEffect(() => {
    if (reduce) {
      setTick(5);
      return;
    }
    if (!inView) return;
    const id = setInterval(() => {
      setTick((t) => {
        if (t >= 5 + HOLD_TICKS) {
          setScenario((s) => (s + 1) % SCENARIOS.length);
          return -1;
        }
        return t + 1;
      });
    }, STEP_MS);
    return () => clearInterval(id);
  }, [inView, reduce]);

  const c = SCENARIOS[scenario];
  const st = (i: number): "idle" | "active" | "done" => (tick > i ? "done" : tick === i ? "active" : "idle");
  const line = (i: number, d: string, color = "var(--forest)") => (
    <g key={d}>
      <path d={d} stroke="var(--border-subtle)" strokeWidth="2" fill="none" strokeDasharray="4 6" />
      <motion.path d={d} stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" initial={false} animate={{ pathLength: tick > i ? 1 : 0, opacity: tick > i ? 1 : 0 }} transition={{ duration: 0.5 }} />
    </g>
  );

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[480px]">
      {!reduce &&
        TOASTS.map((t, i) => (
          <div
            key={t.text}
            className={cn(
              "pointer-events-none absolute z-20 hidden items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold text-ink shadow-[0_18px_30px_-14px_rgba(20,38,31,0.5)] ring-1 ring-black/5 xl:flex",
              t.tint,
              t.pos
            )}
            style={{ animation: `toast-in 6s ease-in-out ${i * 1.5}s infinite both` }}
          >
            <Check className="h-3.5 w-3.5 text-forest" strokeWidth={3} />
            {t.text}
          </div>
        ))}

      <div className="relative rounded-[32px] border border-border-subtle bg-paper/90 p-4 shadow-[0_40px_80px_-40px_rgba(20,38,31,0.55)] backdrop-blur-sm sm:p-5">
        <div className="mb-2 flex items-center justify-between px-1">
          <div className="min-h-[38px]">
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-text-secondary">Live workflow</p>
            <AnimatePresence mode="wait">
              <motion.p key={c.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="font-display text-xl leading-tight text-ink">
                {c.name}
              </motion.p>
            </AnimatePresence>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sage px-2.5 py-1 text-[0.6875rem] font-semibold text-forest">
            <span className="h-1.5 w-1.5 animate-[pulse-glow_1.4s_ease-in-out_infinite] rounded-full bg-signal-green" />
            Running
          </span>
        </div>

        <svg viewBox="0 0 440 410" className="h-auto w-full" role="img" aria-label={`Workflow: ${c.trigger}, ${c.ai}, then ${c.a} or ${c.b}, ending in ${c.result}`} fill="none">
          {line(0, P.t_ai)}
          {line(1, P.ai_a)}
          {line(1, P.ai_b, "var(--butter)")}
          {line(2, P.a_r)}
          {line(2, P.b_r, "var(--butter)")}

          {!reduce && tick >= 0 && tick < 5 && (
            <circle r="6" fill="var(--coral)" key={`${scenario}-${tick}`}>
              {tick === 0 && <animateMotion dur="0.9s" path={P.t_ai} fill="freeze" />}
              {tick === 1 && <animateMotion dur="0.9s" path={P.ai_a} fill="freeze" />}
              {tick === 2 && <animateMotion dur="0.9s" path={P.a_r} fill="freeze" />}
              {tick >= 3 && <animate attributeName="opacity" to="0" dur="0.1s" fill="freeze" />}
            </circle>
          )}

          <AnimatePresence mode="wait">
            <motion.g key={scenario} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <Node x={110} y={10} w={220} label={c.trigger} tag="TRIGGER" state={st(0)} tone="var(--sky)" />
              <Node x={110} y={116} w={220} label={c.ai} tag="AI" state={st(1)} tone="var(--butter)" />
              <Node x={10} y={232} w={196} label={c.a} tag="IF YES" state={st(2)} tone="var(--sage)" />
              <Node x={234} y={232} w={196} label={c.b} tag="OTHERWISE" state={tick >= 2 ? "idle" : "idle"} tone="var(--peach)" />
              <Node x={110} y={346} w={220} label={c.result} tag="RESULT" state={st(4)} tone="var(--sage)" />
            </motion.g>
          </AnimatePresence>
        </svg>

        <div className="mt-1 flex items-center justify-between px-1">
          <div className="flex gap-1.5" aria-hidden>
            {SCENARIOS.map((_, i) => (
              <span key={i} className={cn("h-1.5 rounded-full transition-all duration-300", i === scenario ? "w-6 bg-coral" : "w-1.5 bg-border-subtle")} />
            ))}
          </div>
          <span className="text-[0.6875rem] text-text-secondary">A person can approve any step</span>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-text-secondary">
        Illustrative examples of what we build. Don&apos;t see yours? We can automate that too.
      </p>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-6 sm:pt-10 lg:pb-28">
      {/* atmosphere */}
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_65%_30%,black,transparent_75%)]" />
      <div className="blob -right-28 -top-10 h-[420px] w-[420px] animate-[drift_14s_ease-in-out_infinite] bg-sage" />
      <div className="blob -left-32 bottom-0 h-[340px] w-[340px] animate-[drift_18s_ease-in-out_infinite] bg-butter/60" />
      <div className="blob right-1/3 top-2/3 h-[220px] w-[220px] bg-peach/80" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div>
          <motion.span
            className="badge-label"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI automation &amp; software studio
          </motion.span>

          <h1 className="mt-6 text-[2.7rem] leading-[1.04] text-ink sm:text-6xl lg:text-[4.35rem]" aria-label="If a process repeats, we can automate it.">
            {HEADLINE.map((w, i) => (
              <span key={i} className="mr-[0.26em] inline-block overflow-hidden align-bottom pb-[0.12em]" aria-hidden>
                <motion.span
                  className={cn("inline-block", w === "automate" && "marker")}
                  initial={{ y: "110%", rotate: 4 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-xl text-lg leading-relaxed text-text-secondary"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Opslogica designs custom software and AI automation for any team in any industry:
            leads, support, invoices, scheduling, reporting and everything in between. Pick a
            process and see how we would do it.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/contact" className="btn-primary">
              Book a free strategy call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/case-studies" className="btn-secondary">
              See our work
            </Link>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
              Trusted by businesses across
            </p>
            <ul className="flex flex-wrap gap-2">
              {COUNTRIES.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-border-subtle bg-paper/80 px-3.5 py-1.5 text-sm text-text-secondary"
                >
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <AutomationBuilder />
        </motion.div>
      </div>
    </section>
  );
}
