"use client";

import { useState } from "react";
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
        className="group block w-full border border-border-subtle text-left transition-colors duration-200 hover:border-text-primary focus:outline-none"
      >
        {/* Thumbnail with hover overlay */}
        <div className="relative overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.name}
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/40">
            <div className="flex flex-col items-center gap-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <span className="text-sm font-semibold text-white">
                {project.name}
              </span>
              <span className="font-mono text-xs text-white/80">
                View Project &rarr;
              </span>
            </div>
          </div>
        </div>

        {/* Card body */}
        <div className="p-4">
          <h3 className="text-sm font-semibold text-text-primary">
            {project.name}
          </h3>
          <span className="mt-1 inline-block font-mono text-xs uppercase tracking-wider text-text-secondary">
            {project.industry}
          </span>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-secondary">
            {project.description}
          </p>
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
