"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const WORDS = [
  "invoice matching",
  "support triage",
  "lead follow-ups",
  "smart scheduling",
  "weekly reports",
  "document intake",
  "stock reorders",
  "client onboarding",
  "CRM sync",
  "email routing",
  "WhatsApp replies",
  "approvals",
  "data entry",
  "custom AI agents",
];

// A single rolling line: "We automate ___", the word flips like a departures board.
export default function Marquee() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((n) => (n + 1) % WORDS.length), 1900);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section aria-label="Things we automate" className="relative overflow-hidden bg-forest py-16 sm:py-24">
      <div className="blob -left-20 top-0 h-64 w-64 animate-[drift_14s_ease-in-out_infinite] bg-[#2e6b52]" />
      <div className="blob -right-16 bottom-0 h-64 w-64 animate-[drift_18s_ease-in-out_infinite] bg-coral/30" />
      <div className="relative mx-auto max-w-[1100px] px-6 text-center">
        <p className="font-display text-3xl text-cream/80 sm:text-5xl">We automate</p>
        <div className="mx-auto mt-3 flex h-[4.2rem] items-center justify-center overflow-hidden sm:h-28" aria-live="off">
          <AnimatePresence mode="wait">
            <motion.span
              key={WORDS[i]}
              className="font-display text-[2.6rem] italic leading-none text-butter sm:text-7xl"
              initial={{ y: "100%", opacity: 0, rotateX: -70 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={{ y: "-100%", opacity: 0, rotateX: 70 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {WORDS[i]}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="mx-auto mt-8 h-1 w-40 overflow-hidden rounded-full bg-cream/15">
          <motion.div
            key={i}
            className="h-full rounded-full bg-coral"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.9, ease: "linear" }}
          />
        </div>
        <p className="mt-6 text-sm text-cream/60">…and anything else that repeats.</p>
      </div>
    </section>
  );
}
