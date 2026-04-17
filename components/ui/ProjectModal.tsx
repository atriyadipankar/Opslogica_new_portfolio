"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Maximize2 } from "lucide-react";
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
  const allImages = project
    ? [project.fullImage, ...project.images]
    : [];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
            className="fixed inset-0 z-40 flex items-start justify-center overflow-y-auto bg-black/50 p-4 pt-12 pb-12"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] as const }}
              className="relative w-full max-w-5xl border border-border-subtle bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center bg-white/80 text-text-secondary transition-colors hover:text-text-primary"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* ── Full-page screenshot (hero) ── */}
              <button
                onClick={() => openLightbox(0)}
                className="group relative block w-full overflow-hidden border-b border-border-subtle focus:outline-none"
              >
                <div className="relative">
                  <img
                    src={project.fullImage}
                    alt={`${project.name} — full page`}
                    className="w-full object-contain"
                    style={{ maxHeight: "70vh" }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/10">
                    <span className="flex items-center gap-2 bg-white/90 px-4 py-2 font-mono text-xs uppercase tracking-wider text-text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      <Maximize2 className="h-3.5 w-3.5" />
                      View Full Size
                    </span>
                  </div>
                </div>
              </button>

              {/* ── Project Info ── */}
              <div className="border-b border-border-subtle px-6 py-6 md:px-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-text-primary md:text-2xl">
                      {project.name}
                    </h2>
                    <span className="mt-2 inline-block font-mono text-xs uppercase tracking-wider text-text-secondary">
                      {project.industry}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-text-secondary">
                    {allImages.length} screenshots
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>
              </div>

              {/* ── Section screenshots grid ── */}
              <div className="px-6 py-6 md:px-8">
                <p className="mb-4 font-mono text-xs uppercase tracking-wider text-text-secondary">
                  Section Details
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.images.map((src, idx) => (
                    <button
                      key={src}
                      onClick={() => openLightbox(idx + 1)}
                      className="group relative block overflow-hidden border border-border-subtle transition-colors hover:border-text-primary focus:outline-none"
                    >
                      <img
                        src={src}
                        alt={`${project.name} section ${idx + 1}`}
                        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/10">
                        <span className="font-mono text-xs uppercase tracking-wider text-white opacity-0 transition-opacity group-hover:opacity-100">
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
