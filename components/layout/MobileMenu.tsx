"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// ---------------------------------------------------------------------------
// MobileMenu — full-screen cream sheet with large serif links.
// ---------------------------------------------------------------------------

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (label: string) =>
    setExpandedSection((prev) => (prev === label ? null : label));

  const handleLinkClick = () => {
    onClose();
    setExpandedSection(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-cream lg:hidden"
        >
          <div className="blob -right-16 top-24 h-56 w-56 bg-sage" />
          <div className="blob -left-20 bottom-24 h-56 w-56 bg-butter/70" />

          <nav className="relative flex-1 px-6 pb-6 pt-28" aria-label="Mobile">
            <ul>
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                if (link.children) {
                  const isExpanded = expandedSection === link.label;
                  return (
                    <li key={link.label} className="border-b border-border-subtle/80">
                      <button
                        type="button"
                        onClick={() => toggleSection(link.label)}
                        className="flex w-full items-center justify-between py-4 text-left"
                        aria-expanded={isExpanded}
                      >
                        <span
                          className={cn(
                            "font-display text-[1.9rem] leading-none",
                            active ? "text-forest" : "text-ink"
                          )}
                        >
                          {link.label}
                        </span>
                        <ChevronDown
                          size={22}
                          strokeWidth={1.75}
                          className={cn(
                            "text-text-secondary transition-transform duration-200",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.ul
                            key={`${link.label}-children`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] as const }}
                            className="overflow-hidden"
                          >
                            <div className="mb-3 ml-1 space-y-1 rounded-3xl bg-paper/80 p-2">
                              {link.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={handleLinkClick}
                                    className={cn(
                                      "block rounded-2xl px-4 py-3 text-base",
                                      pathname.startsWith(child.href)
                                        ? "bg-sage/60 font-semibold text-ink"
                                        : "text-text-secondary"
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </div>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                return (
                  <li key={link.label} className="border-b border-border-subtle/80">
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={cn(
                        "block py-4 font-display text-[1.9rem] leading-none",
                        active ? "text-forest" : "text-ink"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="relative px-6 pb-8">
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="btn-primary w-full !py-4"
            >
              Book a demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
