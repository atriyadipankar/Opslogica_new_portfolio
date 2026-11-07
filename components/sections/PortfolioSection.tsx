"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { getProjectById } from "@/lib/portfolio";

const FACTS = [
  ["6", "product categories"],
  ["7", "core pages"],
  ["1", "validated inquiry flow"],
];

export default function PortfolioSection() {
  const risin = getProjectById("manufacturing-export-01-risinexim");

  return (
    <section className="section-padding relative overflow-hidden bg-cream-2" id="work">
      <div className="blob -left-24 top-24 h-72 w-72 animate-[drift_16s_ease-in-out_infinite] bg-butter/60" />
      <div className="relative mx-auto max-w-[1280px] px-6">
        <SectionHeader
          badge="Featured Work"
          title="Built, shipped, live"
          subtitle="A recent build for an export business, from catalogue to inquiry flow."
        />

        {risin && (
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* auto-scrolling site preview */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -inset-3 rounded-[40px] bg-forest/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] bg-paper shadow-[0_50px_80px_-40px_rgba(20,38,31,0.6)] ring-1 ring-border-subtle">
                <div className="flex items-center gap-2 bg-cream-2 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-coral/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-butter" />
                  <span className="h-2.5 w-2.5 rounded-full bg-signal-green/70" />
                  <span className="ml-3 flex-1 truncate rounded-full bg-paper px-4 py-1 text-xs text-text-secondary">
                    risin-axim.vercel.app
                  </span>
                </div>
                <div className="relative h-[380px] overflow-hidden bg-cream sm:h-[460px]">
                  <img
                    src={risin.fullImage}
                    alt={`${risin.name} full page preview`}
                    className="w-full"
                    style={{ animation: "site-scroll 26s ease-in-out infinite alternate", ["--scroll-dist" as string]: "-86%" }}
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-paper/70 to-transparent" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex rounded-full bg-sage px-3 py-1 text-xs font-semibold text-forest">{risin.industry}</span>
              <h3 className="mt-4 text-3xl leading-tight text-ink sm:text-4xl">{risin.name}</h3>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">{risin.description}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {risin.tags?.map((t, i) => (
                  <motion.li
                    key={t}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.06, type: "spring", stiffness: 300, damping: 18 }}
                    className="rounded-full bg-paper px-3.5 py-1.5 text-xs font-semibold text-forest ring-1 ring-border-subtle"
                  >
                    {t}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {FACTS.map(([n, l]) => (
                  <div key={l} className="rounded-2xl bg-paper px-4 py-3 ring-1 ring-border-subtle">
                    <p className="font-display text-3xl text-coral">{n}</p>
                    <p className="text-xs leading-tight text-text-secondary">{l}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {risin.liveUrl && (
                  <a href={risin.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Visit live site <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                <Link href="/case-studies" className="btn-secondary">
                  More projects <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
