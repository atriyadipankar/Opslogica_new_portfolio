"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NAV_LINKS, type NavLink } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

// ---------------------------------------------------------------------------
// Header — Clean editorial style (anyasegen.com inspired)
// Fixed, white bg 95% opacity, backdrop-blur, border-bottom
// ---------------------------------------------------------------------------

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track scroll position
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Helpers for dropdown hover with delay so cursor can travel to submenu
  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const isActive = (link: NavLink): boolean => {
    if (link.href === "/" && pathname === "/") return true;
    if (link.href !== "/" && pathname.startsWith(link.href)) return true;
    if (link.children?.some((c) => pathname.startsWith(c.href))) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm border-b border-border-subtle ${
          scrolled ? "shadow-[0_1px_3px_rgba(0,0,0,0.04)]" : ""
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
          {/* ---- Logo ---- */}
          <Link href="/" className="select-none">
            <img
              src="/images/logo.png"
              alt="Opslogica"
              className="h-8 w-auto"
            />
          </Link>

          {/* ---- Desktop Nav ---- */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link);

              // Links with dropdown children
              if (link.children) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(link.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={link.href}
                      className={`group inline-flex items-center gap-1 px-3.5 py-2 text-sm transition-colors duration-200 ${
                        active
                          ? "text-text-primary font-medium"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        size={13}
                        strokeWidth={1.5}
                        className={`transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute left-0 top-full pt-1.5"
                        >
                          <div className="min-w-[220px] border border-border-subtle bg-white p-1.5 shadow-sm">
                            {link.children.map((child) => {
                              const childActive = pathname.startsWith(child.href);
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`block px-3.5 py-2 text-sm transition-colors duration-150 ${
                                    childActive
                                      ? "text-text-primary bg-bg-glass"
                                      : "text-text-secondary hover:text-text-primary hover:bg-bg-glass"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // Simple links (no children)
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm transition-colors duration-200 ${
                    active
                      ? "text-text-primary font-medium"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ---- Right Section ---- */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary hidden !px-5 !py-2 !text-[0.6875rem] lg:inline-flex"
            >
              Book Demo
            </Link>

            {/* Mobile hamburger — clean thin lines */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="relative z-50 flex h-10 w-10 items-center justify-center text-text-primary lg:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span className="sr-only">Toggle menu</span>
              <div className="relative h-4 w-5">
                {/* Top bar */}
                <span
                  className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${
                    mobileOpen
                      ? "top-[7px] rotate-45"
                      : "top-0 rotate-0"
                  }`}
                />
                {/* Middle bar */}
                <span
                  className={`absolute left-0 top-[7px] h-px w-5 bg-current transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                  }`}
                />
                {/* Bottom bar */}
                <span
                  className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${
                    mobileOpen
                      ? "top-[7px] -rotate-45"
                      : "top-[14px] rotate-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ---- Mobile Menu ---- */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* ---- Spacer so content is not hidden behind fixed header ---- */}
      <div className="h-16" />
    </>
  );
}
