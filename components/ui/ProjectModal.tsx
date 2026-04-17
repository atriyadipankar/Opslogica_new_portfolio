"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
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

  // Prevent body scroll while open
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

  // Close on Escape (only when lightbox is not open)
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
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="relative w-full max-w-5xl border border-border-subtle bg-white p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center text-text-secondary transition-colors hover:text-text-primary"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header */}
              <div className="mb-6 pr-8">
                <h2 className="text-2xl font-semibold text-text-primary">
                  {project.name}
                </h2>
                <span className="mt-2 inline-block font-mono text-xs uppercase tracking-wider text-text-secondary">
                  {project.industry}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>
              </div>

              {/* Screenshot gallery grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.images.map((src, idx) => (
                  <button
                    key={src}
                    onClick={() => openLightbox(idx)}
                    className="group relative block overflow-hidden border border-border-subtle transition-colors hover:border-text-primary focus:outline-none"
                  >
                    <img
                      src={src}
                      alt={`${project.name} screenshot ${idx + 1}`}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox for fullscreen viewing */}
      {project && (
        <Lightbox
          images={project.images}
          initialIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
