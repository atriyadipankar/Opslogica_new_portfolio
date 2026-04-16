"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// ---------------------------------------------------------------------------
// MobileMenu — White bg, charcoal text, clean minimal editorial style
// ---------------------------------------------------------------------------

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (label: string) => {
    setExpandedSection((prev) => (prev === label ? null : label));
  };

  const handleLinkClick = () => {
    onClose();
    setExpandedSection(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] as const }}
          className="fixed inset-0 z-40 flex flex-col bg-white lg:hidden"
        >
          {/* ---- Close button ---- */}
          <div className="flex h-16 items-center justify-end px-6 border-b border-border-subtle">
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center text-text-primary"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* ---- Nav links ---- */}
          <nav className="flex-1 overflow-y-auto px-6 py-6">
            <ul className="space-y-0">
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                // Expandable section (Services / Industries)
                if (link.children) {
                  const isExpanded = expandedSection === link.label;

                  return (
                    <li key={link.label} className="border-b border-border-subtle">
                      {/* Section header */}
                      <button
                        type="button"
                        onClick={() => toggleSection(link.label)}
                        className={`flex w-full items-center justify-between py-3.5 text-left text-sm transition-colors duration-200 ${
                          active
                            ? "text-text-primary font-medium"
                            : "text-text-secondary hover:text-text-primary"
                        }`}
                      >
                        {link.label}
                        <ChevronDown
                          size={15}
                          strokeWidth={1.5}
                          className={`transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Accordion children */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.ul
                            key={`${link.label}-children`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.25,
                              ease: [0.4, 0, 0.2, 1] as const,
                            }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 space-y-0 border-l border-border-subtle pl-4 pb-3">
                              {link.children.map((child) => {
                                const childActive =
                                  pathname.startsWith(child.href);
                                return (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      onClick={handleLinkClick}
                                      className={`block py-2 text-sm transition-colors duration-150 ${
                                        childActive
                                          ? "text-text-primary font-medium"
                                          : "text-text-secondary hover:text-text-primary"
                                      }`}
                                    >
                                      {child.label}
                                    </Link>
                                  </li>
                                );
                              })}
                            </div>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                // Simple link
                return (
                  <li key={link.label} className="border-b border-border-subtle">
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`block py-3.5 text-sm transition-colors duration-200 ${
                        active
                          ? "text-text-primary font-medium"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ---- CTA Button ---- */}
          <div className="border-t border-border-subtle px-6 py-6">
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="btn-primary w-full text-center"
            >
              Book Demo
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
