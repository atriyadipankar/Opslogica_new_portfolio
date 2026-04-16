"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  href?: string;
}

export default function GlassCard({
  children,
  className,
  hover = true,
  href,
}: GlassCardProps) {
  const classes = cn(
    "border border-border-subtle bg-white p-6 transition-colors duration-200",
    hover && "hover:border-text-primary",
    className
  );

  if (href) {
    return (
      <div className={classes}>
        <Link href={href} className="block no-underline">
          {children}
        </Link>
      </div>
    );
  }

  return <div className={classes}>{children}</div>;
}
