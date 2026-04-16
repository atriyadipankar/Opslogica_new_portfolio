"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { icons } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export default function IndustryCard({
  icon,
  title,
  description,
  href,
  className,
}: IndustryCardProps) {
  const IconComponent: LucideIcon =
    (icons as Record<string, LucideIcon>)[icon] ??
    (icons as Record<string, LucideIcon>)["Building2"];

  return (
    <div
      className={cn(
        "group border border-border-subtle bg-white p-5 transition-colors duration-200 hover:border-text-primary",
        className
      )}
    >
      <Link href={href} className="block no-underline">
        <div className="mb-3 flex items-center gap-3">
          <div className="inline-flex border border-border-subtle p-2">
            <IconComponent className="h-5 w-5 text-text-primary" />
          </div>
          <h3 className="text-base font-semibold text-text-primary">
            {title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      </Link>
    </div>
  );
}
