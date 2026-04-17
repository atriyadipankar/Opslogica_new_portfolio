"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const CYCLING_WORDS = ["Automation", "Intelligence", "Growth", "Innovation"];
const CYCLE_INTERVAL = 3000;

const SOCIAL_PROOF_COUNTRIES = [
  "United States",
  "Canada",
  "Europe",
  "Australia",
  "India",
  "Gulf Region",
];

const STATUS_ROWS = [
  {
    label: "Message Integrity",
    value: "Verified",
    dotColor: "bg-emerald-500",
    valueColor: null as string | null,
  },
  {
    label: "AI Deployment",
    value: "Active",
    dotColor: "bg-text-primary",
    valueColor: null as string | null,
  },
  {
    label: "System Compliance",
    value: "Compliant",
    dotColor: "bg-blue-500",
    valueColor: null as string | null,
  },
  {
    label: "System Status",
    value: "Operational",
    dotColor: null as string | null,
    valueColor: "text-emerald-600" as string | null,
  },
] as const;

// ---------------------------------------------------------------------------
// Animation Variants
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      delay: 0.5,
    },
  },
};

// ---------------------------------------------------------------------------
// Decorative SVG Line — draw-on animation
// ---------------------------------------------------------------------------

function DecorativeLine() {
  return (
    <motion.svg
      className="pointer-events-none absolute bottom-12 left-0 hidden w-full lg:block"
      height="2"
      viewBox="0 0 1280 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      <motion.line
        x1="0"
        y1="1"
        x2="1280"
        y2="1"
        stroke="var(--border-subtle)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

// ---------------------------------------------------------------------------
// HeroSection Component
// ---------------------------------------------------------------------------

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  // Cycle through words
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
    }, CYCLE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-bg-primary"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(226,228,233,0.4) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(226,228,233,0.4) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    >
      {/* ================================================================
          CONTENT — Two-column layout
          ================================================================ */}

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ──────────────────────────────────────────────────────────
              LEFT SIDE — Headline & CTAs
              ────────────────────────────────────────────────────────── */}

          <motion.div
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="badge-label">Engineered Software Studio</span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl font-semibold leading-[1] tracking-tight text-text-primary md:text-6xl lg:text-[60px]"
                  style={{ letterSpacing: "-1.5px" }}
              >
                Intelligent{" "}
                <span className="relative inline-block align-baseline">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={CYCLING_WORDS[wordIndex]}
                      className="inline-block text-text-secondary"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94] as [
                          number,
                          number,
                          number,
                          number,
                        ],
                      }}
                    >
                      {CYCLING_WORDS[wordIndex]}.
                    </motion.span>
                  </AnimatePresence>
                </span>
                <br />
                <span className="mt-1 inline-block">Engineered Growth.</span>
                <br />
                <span className="mt-1 inline-block text-text-secondary">
                  Building High-Stakes
                </span>
                <br />
                <span className="inline-block text-text-secondary">
                  Digital Solutions.
                </span>
              </h1>
            </motion.div>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
            >
              We fuse world-class engineering with proprietary AI systems to{" "}
              <strong className="font-semibold text-text-primary">
                guarantee operational excellence
              </strong>{" "}
              and eliminate inefficiencies that plague traditional agencies.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center md:mt-10"
            >
              <Link href="/case-studies" className="btn-primary group">
                View Our Work
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Escape the Noise
              </Link>
            </motion.div>

            {/* Monospace tagline */}
            <motion.p
              variants={itemVariants}
              className="mt-10 font-mono text-xs tracking-wider text-text-secondary"
            >
              Mobilization at 70% Over-Target
            </motion.p>
          </motion.div>

          {/* ──────────────────────────────────────────────────────────
              RIGHT SIDE — Status Card (Intelligence Engine)
              ────────────────────────────────────────────────────────── */}

          <motion.div
            className="lg:col-span-5"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="border border-border-subtle bg-bg-primary">
              {/* Card Header */}
              <div className="border-b border-border-subtle px-6 py-5">
                <span className="font-mono text-xs font-medium tracking-widest text-text-secondary">
                  OPSLOGICA INTELLIGENCE ENGINE
                </span>
              </div>

              {/* Status Rows */}
              <div className="divide-y divide-border-subtle">
                {STATUS_ROWS.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between px-6 py-4"
                  >
                    <span className="text-sm text-text-secondary">
                      {row.label}
                    </span>
                    <span
                      className={`flex items-center gap-2 font-mono text-sm font-medium ${
                        row.valueColor ?? "text-text-primary"
                      }`}
                    >
                      {row.dotColor && (
                        <span
                          className={`inline-block h-2.5 w-2.5 ${row.dotColor}`}
                        />
                      )}
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card Footer — timestamp */}
              <div className="border-t border-border-subtle px-6 py-3">
                <span className="font-mono text-[10px] tracking-wider text-text-secondary/60">
                  LAST SYNC: {new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }).toUpperCase()} — 00:00 UTC
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================================================================
            SOCIAL PROOF STRIP
            ================================================================ */}

        <motion.div
          className="mt-16 border-t border-border-subtle pt-8 lg:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-wider text-text-secondary">
            Trusted by businesses across{" "}
            {SOCIAL_PROOF_COUNTRIES.map((country, i) => (
              <span key={country}>
                <span className="text-text-primary/70">{country}</span>
                {i < SOCIAL_PROOF_COUNTRIES.length - 1 && (
                  <span className="mx-1.5 text-border-subtle">/</span>
                )}
              </span>
            ))}
          </p>
        </motion.div>
      </div>

      {/* Decorative draw-line */}
      <DecorativeLine />
    </section>
  );
}
