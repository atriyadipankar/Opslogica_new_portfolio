"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Maximize2, ArrowUpRight } from "lucide-react";
import type { PortfolioProject } from "@/lib/portfolio";
import Lightbox from "@/components/ui/Lightbox";

interface ProjectModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // All images: full page first, then scroll screenshots
  const allImages = project ? [project.fullImage, ...project.images] : [];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || lightboxOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, lightboxOpen, onClose]);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink/60 p-3 pb-12 pt-10 backdrop-blur-sm sm:p-4 sm:pt-12"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={project.name}
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }}
              className="relative w-full max-w-5xl overflow-hidden rounded-[32px] bg-cream shadow-[0_50px_100px_-30px_rgba(0,0,0,0.6)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-paper text-ink shadow-md transition-transform hover:scale-105 hover:bg-white"
                aria-label="Close project"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Full-page screenshot (hero) */}
              <button
                onClick={() => openLightbox(0)}
                className="group relative block w-full overflow-hidden bg-cream-2 focus:outline-none"
              >
                <img
                  src={project.fullImage}
                  alt={`${project.name} — full page`}
                  className="w-full object-contain object-top"
                  style={{ maxHeight: "62vh" }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/15">
                  <span className="flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-xs font-semibold text-ink opacity-0 transition-opacity group-hover:opacity-100">
                    <Maximize2 className="h-3.5 w-3.5" />
                    View full size
                  </span>
                </div>
              </button>

              {/* Info */}
              <div className="px-6 py-7 md:px-9">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-full bg-sage/70 px-3 py-1 text-xs font-semibold text-forest">
                      {project.industry}
                    </span>
                    <h2 className="mt-3 text-3xl leading-tight text-ink md:text-4xl">
                      {project.name}
                    </h2>
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !px-6 !py-3.5"
                    >
                      Visit live site
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary">
                  {project.description}
                </p>

                {project.tags && project.tags.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-paper px-3.5 py-1.5 text-xs font-semibold text-forest ring-1 ring-border-subtle"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Section screenshots */}
              <div className="px-6 pb-9 md:px-9">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
                  Section details · {allImages.length} screenshots
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.images.map((src, idx) => (
                    <button
                      key={src}
                      onClick={() => openLightbox(idx + 1)}
                      className="group relative block overflow-hidden rounded-[22px] bg-paper ring-1 ring-border-subtle transition-all duration-300 hover:-translate-y-1 hover:ring-forest/40 focus:outline-none"
                    >
                      <img
                        src={src}
                        alt={`${project.name} section ${idx + 1}`}
                        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/15">
                        <span className="rounded-full bg-paper px-3.5 py-1.5 text-xs font-semibold text-ink opacity-0 transition-opacity group-hover:opacity-100">
                          View
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox for fullscreen viewing */}
      {project && (
        <Lightbox
          images={allImages}
          initialIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
