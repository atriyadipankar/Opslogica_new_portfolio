"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/lib/portfolio";
import ProjectModal from "@/components/ui/ProjectModal";

interface PortfolioCardProps {
  project: PortfolioProject;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="group flex h-full w-full flex-col overflow-hidden rounded-[28px] bg-paper text-left ring-1 ring-border-subtle transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_32px_52px_-28px_rgba(20,38,31,0.55)] hover:ring-forest/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
      >
        {/* Browser-frame thumbnail */}
        <div className="p-3 pb-0">
          <div className="overflow-hidden rounded-[18px] bg-cream-2 ring-1 ring-border-subtle">
            <div className="flex items-center gap-1.5 bg-cream-2 px-3.5 py-2.5">
              <span className="h-2 w-2 rounded-full bg-coral/70" />
              <span className="h-2 w-2 rounded-full bg-butter" />
              <span className="h-2 w-2 rounded-full bg-signal-green/70" />
              <span className="ml-2 h-4 flex-1 rounded-full bg-paper/80" />
            </div>
            <div className="relative overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.name}
                className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-ink/35 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-paper px-3.5 py-1.5 text-xs font-semibold text-ink">
                  View project
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card body */}
        <div className="flex flex-1 flex-col p-6 pt-5">
          <span className="inline-flex w-fit rounded-full bg-sage/70 px-3 py-1 text-xs font-semibold text-forest">
            {project.industry}
          </span>
          <h3 className="mt-3 text-[1.35rem] leading-snug text-ink">{project.name}</h3>
          <p className="mt-2 line-clamp-2 flex-1 text-[0.9375rem] leading-relaxed text-text-secondary">
            {project.description}
          </p>

          {project.tags && project.tags.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.slice(0, 4).map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border-subtle px-2.5 py-0.5 text-[0.6875rem] font-medium text-text-secondary"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </button>

      <ProjectModal
        project={project}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
