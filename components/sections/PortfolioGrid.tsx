"use client";

import { useState } from "react";
import { getAllProjects } from "@/lib/portfolio";
import PortfolioCard from "@/components/ui/PortfolioCard";

const industries = [
  { label: "All", slug: "all" },
  { label: "Dental", slug: "dental-clinics" },
  { label: "Orthopedic", slug: "orthopedic-clinics" },
  { label: "Psychology", slug: "psychology-practices" },
  { label: "Physician", slug: "physician-practices" },
  { label: "Path Labs", slug: "pathological-labs" },
  { label: "Dermatology", slug: "dermatology-clinics" },
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const allProjects = getAllProjects();

  const filtered =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.industrySlug === activeFilter);

  return (
    <div>
      {/* Filter Pills */}
      <div className="mb-10 flex flex-wrap gap-3">
        {industries.map((ind) => (
          <button
            key={ind.slug}
            onClick={() => setActiveFilter(ind.slug)}
            className={`px-5 py-2 font-mono text-xs font-medium uppercase tracking-wider transition-colors ${
              activeFilter === ind.slug
                ? "bg-text-primary text-white"
                : "border border-border-subtle text-text-secondary hover:border-text-primary hover:text-text-primary"
            }`}
          >
            {ind.label}
          </button>
        ))}
      </div>

      {/* Project Grid */}
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
