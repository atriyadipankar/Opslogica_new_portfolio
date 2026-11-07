"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="px-4 py-16 sm:px-6 md:py-24">
      <motion.div
        className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[44px] bg-forest px-6 py-20 text-center text-cream sm:px-12"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="blob -left-20 -top-24 h-72 w-72 animate-[drift_14s_ease-in-out_infinite] bg-[#2e6b52]" />
        <div className="blob -bottom-28 -right-16 h-72 w-72 animate-[drift_18s_ease-in-out_infinite] bg-coral/40" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/10" style={{ animation: "pulse-ring 4s ease-out infinite" }} />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/[0.06]" />

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-butter px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-ink">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-coral" /> Get started
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl leading-[1.05] text-cream sm:text-6xl">
            Ready to make the busy work <span className="italic text-butter">disappear</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
            Book a free strategy call. We will look at your workflows and show you what we would automate first.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-butter px-8 py-4 font-semibold text-ink transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_30px_-14px_rgba(0,0,0,0.5)]">
              Book a free call
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
            <Link href="/contact" className="rounded-full border border-cream/30 px-8 py-4 font-semibold text-cream transition-colors hover:bg-cream/10">
              Contact us
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
