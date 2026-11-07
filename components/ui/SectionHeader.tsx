"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  centered?: boolean;
  badge?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  badge,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {badge && (
        <div className="mb-5">
          <span className="badge-label">{badge}</span>
        </div>
      )}

      <h2 className="text-[2.1rem] leading-[1.1] text-text-primary md:text-5xl">{title}</h2>

      {subtitle && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-text-secondary",
            centered && "mx-auto max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
