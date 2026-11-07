"use client";

import { useState } from "react";
import { getAllProjects, getIndustryFilters } from "@/lib/portfolio";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { cn } from "@/lib/utils";

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const allProjects = getAllProjects();
  const industries = getIndustryFilters();

  const filtered =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.industrySlug === activeFilter);

  return (
    <div>
      {/* Filter pills */}
      <div className="mb-10 flex flex-wrap gap-2.5" role="tablist" aria-label="Filter projects by industry">
        {industries.map((ind) => (
          <button
            key={ind.slug}
            role="tab"
            aria-selected={activeFilter === ind.slug}
            onClick={() => setActiveFilter(ind.slug)}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200",
              activeFilter === ind.slug
                ? "bg-forest text-cream shadow-[0_12px_22px_-12px_rgba(31,77,58,0.8)]"
                : "bg-paper text-text-secondary ring-1 ring-border-subtle hover:text-ink hover:ring-forest/40"
            )}
          >
            {ind.label}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-20 text-center text-text-secondary">
          No projects found for this industry.
        </p>
      )}
    </div>
  );
}
