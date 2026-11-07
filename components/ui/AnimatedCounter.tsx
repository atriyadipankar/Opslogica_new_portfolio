"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
  className?: string;
  /** Extra classes for the big number (colour, size). */
  valueClassName?: string;
  /** Extra classes for the caption under the number. */
  labelClassName?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  label,
  duration = 2,
  className,
  valueClassName,
  labelClassName,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return () => unsubscribe();
  }, [motionValue]);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration,
        ease: [0.4, 0, 0.2, 1] as const,
      });
      return () => controls.stop();
    }
  }, [isInView, motionValue, value, duration]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="flex items-baseline justify-center">
        <span
          className={cn(
            "font-display text-5xl font-medium text-text-primary md:text-6xl",
            valueClassName
          )}
        >
          {displayValue}
        </span>
        {suffix && (
          <span
            className={cn(
              "font-display text-4xl font-medium text-text-primary md:text-5xl",
              valueClassName
            )}
          >
            {suffix}
          </span>
        )}
      </div>
      <p className={cn("mt-2 text-sm text-text-secondary", labelClassName)}>{label}</p>
    </div>
  );
}
