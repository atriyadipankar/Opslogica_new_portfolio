"use client";

import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CTASection() {
  return (
    <section className="section-border bg-bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeader
          badge="Get Started"
          title="Ready to Automate Your Business?"
          subtitle="Book a free strategy call with our team. We'll analyze your workflows and show you exactly how AI automation can save you time and money."
        />

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            Book a Free Call
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
