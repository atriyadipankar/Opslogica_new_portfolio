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
}

export default function AnimatedCounter({
  value,
  suffix = "",
  label,
  duration = 2,
  className,
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
        <span className="text-5xl font-semibold text-text-primary md:text-6xl">
          {displayValue}
        </span>
        {suffix && (
          <span className="text-4xl font-semibold text-text-primary md:text-5xl">
            {suffix}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-text-secondary">{label}</p>
    </div>
  );
}
