"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { getFeaturedProjects, getAllProjects } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

const INDUSTRY_FILTERS = [
  { label: "All", slug: "all" },
  { label: "Dental", slug: "dental-clinics" },
  { label: "Orthopedic", slug: "orthopedic-clinics" },
  { label: "Psychology", slug: "psychology-practices" },
  { label: "Physician", slug: "physician-practices" },
  { label: "Path Labs", slug: "pathological-labs" },
  { label: "Dermatology", slug: "dermatology-clinics" },
] as const;

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = useMemo(() => {
    if (activeFilter === "all") {
      return getFeaturedProjects(6);
    }
    return getAllProjects().filter((p) => p.industrySlug === activeFilter);
  }, [activeFilter]);

  return (
    <section className="section-padding section-border">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeader
          badge="OUR WORK"
          title="Projects We've Delivered"
          subtitle="Real websites built for real healthcare businesses across the globe."
        />

        {/* Filter pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {INDUSTRY_FILTERS.map((filter) => (
            <button
              key={filter.slug}
              onClick={() => setActiveFilter(filter.slug)}
              className={cn(
                "px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors duration-150",
                activeFilter === filter.slug
                  ? "bg-text-primary text-white"
                  : "border border-border-subtle text-text-secondary hover:border-text-primary hover:text-text-primary"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        {/* View all link */}
        <div className="mt-10 text-center">
          <Link
            href="/case-studies"
            className="inline-block border border-border-subtle px-6 py-2.5 font-mono text-xs uppercase tracking-wider text-text-primary transition-colors hover:border-text-primary hover:bg-text-primary hover:text-white"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
