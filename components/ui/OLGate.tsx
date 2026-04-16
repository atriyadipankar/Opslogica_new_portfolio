"use client";

import { useEffect, useRef, useState, useCallback, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Shield, Radio } from "lucide-react";

interface OLGateProps {
  isOpen: boolean;
  onClose: () => void;
}

type GateStatus = "idle" | "verifying" | "granted" | "denied";

export default function OLGate({ isOpen, onClose }: OLGateProps) {
  const router = useRouter();
  const [digits, setDigits] = useState<string[]>(Array(6).fill(""));
  const [status, setStatus] = useState<GateStatus>("idle");
  const [shake, setShake] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const backdropRef = useRef<HTMLDivElement>(null);

  const allFilled = digits.every((d) => d !== "");

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setDigits(Array(6).fill(""));
      setStatus("idle");
      setShake(false);
      // Focus first input after animation
      setTimeout(() => inputRefs.current[0]?.focus(), 350);
    }
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleDigitChange = useCallback(
    (index: number, value: string) => {
      // Only accept single digits
      const digit = value.replace(/\D/g, "").slice(-1);
      setDigits((prev) => {
        const next = [...prev];
        next[index] = digit;
        return next;
      });
      // Auto-advance to next input
      if (digit && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    []
  );

  const handleKeyDown = useCallback(
    (index: number, e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace") {
        if (digits[index] === "" && index > 0) {
          // Move to previous and clear it
          inputRefs.current[index - 1]?.focus();
          setDigits((prev) => {
            const next = [...prev];
            next[index - 1] = "";
            return next;
          });
        } else {
          setDigits((prev) => {
            const next = [...prev];
            next[index] = "";
            return next;
          });
        }
      }
      // Allow Enter to submit when all filled
      if (e.key === "Enter" && allFilled && status === "idle") {
        verifyCode();
      }
    },
    [digits, allFilled, status]
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
      if (pasted.length > 0) {
        const newDigits = Array(6).fill("");
        for (let i = 0; i < pasted.length; i++) {
          newDigits[i] = pasted[i];
        }
        setDigits(newDigits);
        // Focus the next empty input, or the last one
        const focusIndex = Math.min(pasted.length, 5);
        inputRefs.current[focusIndex]?.focus();
      }
    },
    []
  );

  const verifyCode = async () => {
    if (!allFilled || status === "verifying") return;
    const code = digits.join("");
    setStatus("verifying");

    try {
      const res = await fetch("/api/auth/gate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (res.ok) {
        setStatus("granted");
        setTimeout(() => {
          router.push("/login");
          onClose();
        }, 800);
      } else {
        triggerDenied();
      }
    } catch {
      triggerDenied();
    }
  };

  const triggerDenied = () => {
    setStatus("denied");
    setShake(true);
    setTimeout(() => {
      setShake(false);
      setDigits(Array(6).fill(""));
      setStatus("idle");
      inputRefs.current[0]?.focus();
    }, 1000);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={backdropRef}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(20, 24, 31, 0.98)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackdropClick}
        >
          {/* Scanline effect overlay */}
          <div className="pointer-events-none fixed inset-0 z-[51] overflow-hidden">
            <div className="ol-gate-scanline absolute left-0 h-[2px] w-full bg-white/[0.03]" />
          </div>

          <motion.div
            className="relative z-[52] w-full max-w-md mx-4"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              x: shake ? [0, -10, 10, -5, 5, 0] : 0,
            }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={
              shake
                ? { x: { duration: 0.4, ease: "easeInOut" } }
                : { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
            }
          >
            {/* Modal card */}
            <div
              className="relative overflow-hidden border border-[rgb(179,0,0)]/30 p-8"
              style={{ backgroundColor: "rgb(20, 24, 31)" }}
            >
              {/* Corner accents */}
              <div className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-[rgb(179,0,0)]/60" />
              <div className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-[rgb(179,0,0)]/60" />
              <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-[rgb(179,0,0)]/60" />
              <div className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[rgb(179,0,0)]/60" />

              {/* Scanline effect inside card */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="ol-gate-scanline-card absolute left-0 h-px w-full bg-[rgb(179,0,0)]/[0.06]" />
              </div>

              <div className="flex flex-col items-center gap-6">
                {/* Shield icon */}
                <div className="rounded-full border-2 border-[rgb(179,0,0)]/50 p-4">
                  <Shield className="h-8 w-8 text-[rgb(179,0,0)]" strokeWidth={1.5} />
                </div>

                {/* CLASSIFIED badge */}
                <span className="inline-block rounded-full border border-[rgb(179,0,0)]/40 px-4 py-1 font-mono text-xs uppercase tracking-[0.2em] text-[rgb(179,0,0)]">
                  Classified
                </span>

                {/* OL GATE heading */}
                <h2 className="font-mono text-3xl font-bold tracking-[0.3em] text-white">
                  OL GATE
                </h2>

                {/* Enter security code */}
                <div className="flex items-center gap-2 text-white/50">
                  <Radio className="h-4 w-4" strokeWidth={1.5} />
                  <span className="font-mono text-sm uppercase tracking-wider">
                    Enter Security Code
                  </span>
                </div>

                {/* 6 digit inputs */}
                <div className="flex gap-3">
                  {digits.map((digit, i) => (
                    <input
                      key={i}
                      ref={(el) => {
                        inputRefs.current[i] = el;
                      }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleDigitChange(i, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(i, e)}
                      onPaste={i === 0 ? handlePaste : undefined}
                      className="h-16 w-14 border border-white/10 bg-black/50 text-center font-mono text-xl text-white outline-none transition-colors duration-200 focus:border-[rgb(179,0,0)]/50 focus:ring-1 focus:ring-[rgb(179,0,0)]/20"
                      autoComplete="off"
                      disabled={status === "verifying" || status === "granted"}
                    />
                  ))}
                </div>

                {/* Decorative divider with triangle */}
                <div className="flex w-full items-center gap-3">
                  <div className="h-px flex-1 bg-white/10" />
                  <div
                    className="h-0 w-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-[rgb(179,0,0)]/40"
                  />
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                {/* Launch Sequence button */}
                <button
                  onClick={verifyCode}
                  disabled={!allFilled || status === "verifying" || status === "granted"}
                  className={`w-full border py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300 ${
                    allFilled && status === "idle"
                      ? "cursor-pointer border-[rgb(179,0,0)]/40 bg-[rgb(179,0,0)]/20 text-[rgb(179,0,0)] hover:bg-[rgb(179,0,0)]/30"
                      : "cursor-not-allowed border-white/10 bg-[rgb(30,34,42)] text-white/40"
                  }`}
                >
                  Launch Sequence
                </button>

                {/* Status indicator */}
                <div className="flex items-center gap-3">
                  <StatusIndicator status={status} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Keyframe styles */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes ol-gate-scanline {
              0% { top: -2px; }
              100% { top: 100vh; }
            }
            @keyframes ol-gate-scanline-card {
              0% { top: -1px; }
              100% { top: 100%; }
            }
            @keyframes ol-gate-pulse {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 1; }
            }
            .ol-gate-scanline {
              animation: ol-gate-scanline 4s linear infinite;
            }
            .ol-gate-scanline-card {
              animation: ol-gate-scanline-card 3s linear infinite;
            }
            .ol-gate-pulse {
              animation: ol-gate-pulse 1.2s ease-in-out infinite;
            }
          `}} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function StatusIndicator({ status }: { status: GateStatus }) {
  if (status === "verifying") {
    return (
      <>
        <span className="ol-gate-pulse inline-block h-2 w-2 bg-[rgb(179,0,0)]" />
        <span className="ol-gate-pulse font-mono text-xs uppercase tracking-wider text-[rgb(179,0,0)]">
          Verifying...
        </span>
        <span className="ol-gate-pulse inline-block h-2 w-2 bg-[rgb(179,0,0)]" />
      </>
    );
  }

  if (status === "granted") {
    return (
      <>
        <span className="inline-block h-2 w-2 bg-emerald-500" />
        <span className="font-mono text-xs uppercase tracking-wider text-emerald-500">
          Access Granted
        </span>
        <span className="inline-block h-2 w-2 bg-emerald-500" />
      </>
    );
  }

  if (status === "denied") {
    return (
      <>
        <span className="inline-block h-2 w-2 bg-[rgb(179,0,0)]" />
        <span className="font-mono text-xs uppercase tracking-wider text-[rgb(179,0,0)]">
          Access Denied
        </span>
        <span className="inline-block h-2 w-2 bg-[rgb(179,0,0)]" />
      </>
    );
  }

  return (
    <>
      <span className="inline-block h-2 w-2 bg-[rgb(179,0,0)]/40" />
      <span className="font-mono text-xs uppercase tracking-wider text-white/30">
        Awaiting Coordinates
      </span>
      <span className="inline-block h-2 w-2 bg-[rgb(179,0,0)]/40" />
    </>
  );
}
