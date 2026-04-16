import { type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export default function GradientText({
  children,
  className,
  as: Component = "span",
}: GradientTextProps) {
  return (
    <Component className={cn("text-text-secondary", className)}>
      {children}
    </Component>
  );
}
