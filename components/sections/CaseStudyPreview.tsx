"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

interface CaseStudy {
  title: string;
  result: string;
  industry: string;
  slug: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Dental Clinic AI Scheduling",
    result: "40% reduction in patient no-shows",
    industry: "Healthcare",
    slug: "dental-clinic-ai-scheduling",
  },
  {
    title: "Physician Practice Automation",
    result: "15 hours saved per week in admin tasks",
    industry: "Healthcare",
    slug: "physician-practice-automation",
  },
  {
    title: "E-Commerce Platform Rebuild",
    result: "3x increase in conversion rate",
    industry: "Retail",
    slug: "ecommerce-platform-rebuild",
  },
];

export default function CaseStudyPreview() {
  return (
    <section className="section-padding section-border">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeader
          badge="Case Studies"
          title="Results We've Delivered"
          subtitle="See how we've helped healthcare businesses and enterprises transform their operations."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.slug}
              className="group border-l-2 border-t border-r border-b border-border-subtle border-l-text-primary bg-white transition-colors duration-200 hover:border-text-primary"
            >
              <div className="p-6">
                {/* Industry tag badge — uppercase monospace, bordered pill */}
                <span className="mb-3 inline-block border border-border-subtle px-2.5 py-0.5 font-mono text-xs uppercase tracking-wider text-text-secondary">
                  {study.industry}
                </span>

                {/* Project title */}
                <h3 className="mb-2 text-base font-semibold tracking-tight text-text-primary">
                  {study.title}
                </h3>

                {/* Result headline */}
                <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                  {study.result}
                </p>

                {/* Read Case Study link */}
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-wider text-text-secondary transition-colors group-hover:text-text-primary"
                >
                  Read Case Study
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Case Studies button */}
        <div className="mt-12 text-center">
          <Link href="/case-studies" className="btn-secondary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
