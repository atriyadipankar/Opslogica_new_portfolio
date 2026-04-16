"use client";

import { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import SectionHeader from "@/components/ui/SectionHeader";

const CARD_WIDTH = 350;
const GAP = 24;
const SPEED = 0.5;

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const isPaused = useRef(false);

  const totalWidth = TESTIMONIALS.length * (CARD_WIDTH + GAP);

  useAnimationFrame(() => {
    if (isPaused.current) return;
    const current = x.get();
    if (current <= -totalWidth) {
      x.set(0);
    } else {
      x.set(current - SPEED);
    }
  });

  return (
    <section className="section-padding section-border">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle=""
        />
      </div>

      {/* Carousel container */}
      <div
        className="relative mt-12 overflow-hidden"
        onMouseEnter={() => {
          isPaused.current = true;
        }}
        onMouseLeave={() => {
          isPaused.current = false;
        }}
      >
        {/* Left fade — from white */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        {/* Right fade — from white */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex"
        >
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
            <div
              key={`${testimonial.id}-${i}`}
              className="flex-shrink-0 px-3"
              style={{ width: CARD_WIDTH + GAP }}
            >
              <div
                className="flex h-full flex-col border border-border-subtle bg-white p-6 transition-colors duration-200 hover:border-text-primary"
                style={{ minWidth: CARD_WIDTH }}
              >
                {/* Quote icon */}
                <Quote className="mb-4 h-6 w-6 text-text-secondary" />

                {/* Quote text */}
                <p className="mb-6 flex-1 text-sm leading-relaxed text-text-secondary">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Divider */}
                <div className="mb-4 h-px w-full bg-border-subtle" />

                {/* Author info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>

                  {/* 5 stars — charcoal filled */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="h-3.5 w-3.5 fill-text-primary text-text-primary"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
