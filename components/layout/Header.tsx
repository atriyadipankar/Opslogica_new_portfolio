"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { NAV_LINKS, type NavLink } from "@/lib/constants";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

// ---------------------------------------------------------------------------
// Header — a floating pill that sits above the page. It gains a soft shadow
// and a more opaque paper background once you scroll.
// ---------------------------------------------------------------------------

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const isActive = (link: NavLink): boolean => {
    if (link.href === "/" && pathname === "/") return true;
    if (link.href !== "/" && pathname.startsWith(link.href)) return true;
    if (link.children?.some((c) => pathname.startsWith(c.href))) return true;
    return false;
  };

  const pill = (active: boolean) =>
    cn(
      "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.9375rem] transition-colors duration-200",
      active
        ? "bg-sage/70 font-semibold text-ink"
        : "text-text-secondary hover:bg-sage/45 hover:text-ink"
    );

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 px-3">
        <div
          className={cn(
            "mx-auto flex h-[60px] max-w-[1180px] items-center justify-between rounded-full border pl-6 pr-2.5 transition-all duration-300",
            scrolled
              ? "border-border-subtle bg-paper/90 shadow-[0_18px_44px_-18px_rgba(20,38,31,0.35)] backdrop-blur-md"
              : "border-transparent bg-paper/55 backdrop-blur-sm"
          )}
        >
          {/* ---- Logo ---- */}
          <Link href="/" className="select-none" aria-label="Opslogica home">
            <img src="/images/logo.png" alt="Opslogica" className="h-5 w-auto" />
          </Link>

          {/* ---- Desktop nav ---- */}
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const active = isActive(link);

              if (link.children) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(link.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link href={link.href} className={pill(active)}>
                      {link.label}
                      <ChevronDown
                        size={14}
                        strokeWidth={2}
                        className={cn(
                          "transition-transform duration-200",
                          openDropdown === link.label && "rotate-180"
                        )}
                      />
                    </Link>

                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.16, ease: "easeOut" }}
                          className="absolute left-0 top-full pt-3"
                        >
                          <div className="min-w-[240px] rounded-3xl border border-border-subtle bg-paper p-2 shadow-[0_24px_50px_-20px_rgba(20,38,31,0.4)]">
                            {link.children.map((child) => {
                              const childActive = pathname.startsWith(child.href);
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={cn(
                                    "block rounded-2xl px-4 py-2.5 text-[0.9375rem] transition-colors duration-150",
                                    childActive
                                      ? "bg-sage/60 font-semibold text-ink"
                                      : "text-text-secondary hover:bg-sage/40 hover:text-ink"
                                  )}
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

              return (
                <Link key={link.label} href={link.href} className={pill(active)}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ---- Right ---- */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="btn-primary max-lg:!hidden !px-5 !py-3 !text-sm"
            >
              Book a demo
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full bg-forest text-cream lg:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <div className="relative h-3.5 w-5">
                <span
                  className={cn(
                    "absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300",
                    mobileOpen ? "top-[6px] rotate-45" : "top-0 rotate-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[6px] h-0.5 w-5 rounded bg-current transition-all duration-300",
                    mobileOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300",
                    mobileOpen ? "top-[6px] -rotate-45" : "top-[12px] rotate-0"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Spacer so content is not hidden behind the floating header */}
      <div className="h-[84px]" />
    </>
  );
}
