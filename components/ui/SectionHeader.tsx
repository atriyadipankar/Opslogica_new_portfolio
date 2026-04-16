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
        <div className="mb-4">
          <span className="badge-label">{badge}</span>
        </div>
      )}

      <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
        {title}
      </h2>

      <p
        className={cn(
          "mt-4 text-base text-text-secondary",
          centered && "mx-auto max-w-2xl"
        )}
      >
        {subtitle}
      </p>
    </div>
  );
}
