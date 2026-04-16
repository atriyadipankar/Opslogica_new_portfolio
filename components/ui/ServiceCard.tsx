"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { icons, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  const IconComponent: LucideIcon =
    (icons as Record<string, LucideIcon>)[icon] ??
    (icons as Record<string, LucideIcon>)["Layers"];

  return (
    <div
      className={cn(
        "group border border-border-subtle bg-white p-6 transition-colors duration-200 hover:border-text-primary",
        className
      )}
    >
      <Link href={href} className="block no-underline">
        <div className="mb-4 inline-flex border border-border-subtle p-2">
          <IconComponent className="h-6 w-6 text-text-primary" />
        </div>

        <h3 className="mb-2 text-lg font-semibold text-text-primary">
          {title}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>

        <span className="inline-flex items-center gap-1 font-mono text-sm text-text-secondary transition-colors group-hover:text-text-primary">
          Learn More
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </div>
  );
}
