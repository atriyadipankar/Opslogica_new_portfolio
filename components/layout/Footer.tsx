"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import OLGate from "@/components/ui/OLGate";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const socialLinks = [
  { label: "LinkedIn", href: SITE_CONFIG.social.linkedin, Icon: LinkedInIcon },
  { label: "Twitter / X", href: SITE_CONFIG.social.twitter, Icon: XIcon },
  { label: "GitHub", href: SITE_CONFIG.social.github, Icon: GitHubIcon },
];

const linkClass =
  "text-[0.9375rem] text-cream/70 transition-colors duration-200 hover:text-butter";
const headingClass =
  "mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-butter";

export default function Footer() {
  const [gateOpen, setGateOpen] = useState(false);

  return (
    <>
      <footer className="px-3 pb-3 pt-10">
        <div className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[40px] bg-forest px-6 pb-8 pt-16 text-cream sm:px-10 lg:px-14">
          {/* soft decorative shapes */}
          <div className="blob -right-24 -top-24 h-72 w-72 bg-[#2e6b52]" />
          <div className="blob -bottom-28 left-1/3 h-64 w-64 bg-coral/40" />

          {/* Statement + CTA */}
          <div className="relative flex flex-col items-start justify-between gap-8 border-b border-cream/15 pb-14 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl font-display text-4xl leading-[1.08] text-cream sm:text-5xl">
              Build once.{" "}
              <em className="text-butter">Let it run itself.</em>
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-butter px-7 py-4 text-[0.9375rem] font-semibold text-ink transition-transform duration-300 hover:-translate-y-1"
            >
              Book a free strategy call
              <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-butter transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          {/* Link grid */}
          <div className="relative grid grid-cols-1 gap-12 pt-14 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-5">
              <Link href="/" className="inline-block" aria-label="Opslogica home">
                <img
                  src="/images/logo.png"
                  alt="Opslogica"
                  className="h-[20px] w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-[0.9375rem] leading-relaxed text-cream/70">
                {SITE_CONFIG.description}
              </p>
              <div className="flex items-center gap-3 pt-1">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-cream/25 text-cream transition-all duration-200 hover:border-butter hover:bg-butter hover:text-ink"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className={headingClass}>Services</h3>
              <ul className="space-y-3">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <Link href={`/services/${service.slug}`} className={linkClass}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={headingClass}>We automate</h3>
              <ul className="space-y-3">
                {["Sales & marketing", "Customer support", "Finance & back office", "Operations & logistics", "People & onboarding", "Data & reporting"].map((t) => (
                  <li key={t}>
                    <Link href="/#automate" className={linkClass}>
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={headingClass}>Company</h3>
              <ul className="space-y-3">
                {companyLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className={linkClass}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-6 sm:flex-row">
            <p className="text-sm text-cream/60">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {legalLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-cream/60 transition-colors duration-200 hover:text-butter"
                >
                  {label}
                </Link>
              ))}
              {/* OL Gate trigger — kept exactly as before */}
              <button
                onClick={() => setGateOpen(true)}
                className="text-sm text-cream/60 transition-colors duration-200 hover:text-butter"
              >
                System Access
              </button>
            </div>
          </div>
        </div>
      </footer>

      <OLGate isOpen={gateOpen} onClose={() => setGateOpen(false)} />
    </>
  );
}
