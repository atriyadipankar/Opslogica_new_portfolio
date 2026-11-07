"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Msg = { role: "user" | "assistant"; content: string };

const WELCOME: Msg = {
  role: "assistant",
  content: "Hi! I'm the Opslogica assistant. Ask me what we can automate, how a project works, or how to get started.",
};
const START = ["What do you automate?", "Can you build my website?", "How does a project work?", "How long does it take?", "I need a quote"];

// Tiny markdown: **bold**, [label](url), "- " bullets.
function inline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((p, i) => {
    const b = p.match(/^\*\*([^*]+)\*\*$/);
    if (b) return <strong key={i}>{b[1]}</strong>;
    const l = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (l) {
      const internal = l[2].startsWith("/");
      return internal ? (
        <Link key={i} href={l[2]} className="font-semibold text-coral underline underline-offset-2">{l[1]}</Link>
      ) : (
        <a key={i} href={l[2]} target="_blank" rel="noopener noreferrer" className="font-semibold text-coral underline underline-offset-2">{l[1]}</a>
      );
    }
    return p;
  });
}
function Rich({ text }: { text: string }) {
  return (
    <div className="space-y-1.5">
      {text.split("\n").filter(Boolean).map((line, i) =>
        line.startsWith("- ") ? (
          <p key={i} className="flex gap-2"><span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-coral" /><span>{inline(line.slice(2))}</span></p>
        ) : (
          <p key={i}>{inline(line)}</p>
        )
      )}
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([WELCOME]);
  const [sugg, setSugg] = useState<string[]>(START);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [msgs, busy, open]);
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  async function send(text: string) {
    const message = text.trim();
    if (!message || busy) return;
    const history = msgs.filter((m) => m !== WELCOME).slice(-6);
    setMsgs((m) => [...m, { role: "user", content: message }]);
    setInput("");
    setSugg([]);
    setBusy(true);
    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data?.error || "error");
      setMsgs((m) => [...m, { role: "assistant", content: data.reply }]);
      setSugg(data.suggestions || []);
    } catch (e) {
      setMsgs((m) => [
        ...m,
        { role: "assistant", content: `Sorry, I couldn't reach the assistant just now. You can still [book a free call](/contact) or email hello@opslogica.com.` },
      ]);
      setSugg([]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* launcher */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Chat with Opslogica"}
        className="fixed bottom-5 right-5 z-[55] grid h-14 w-14 place-items-center rounded-full bg-forest text-cream shadow-[0_18px_34px_-10px_rgba(21,58,43,0.8)] transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 16 }}
      >
        {!open && <span className="absolute inset-0 animate-[pulse-ring_2.4s_ease-out_infinite] rounded-full border-2 border-coral" />}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={open ? "x" : "m"} initial={{ rotate: -80, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 80, opacity: 0 }} transition={{ duration: 0.18 }}>
            {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Opslogica assistant"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-3 bottom-24 z-[55] flex h-[min(620px,calc(100dvh-8rem))] origin-bottom-right flex-col overflow-hidden rounded-[28px] bg-cream shadow-[0_40px_80px_-20px_rgba(20,38,31,0.55)] ring-1 ring-border-subtle sm:inset-x-auto sm:right-6 sm:w-[390px]"
          >
            <div className="flex items-center gap-3 bg-forest px-5 py-4 text-cream">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-butter text-ink"><Sparkles className="h-5 w-5" /></span>
              <div className="flex-1">
                <p className="font-display text-lg leading-tight">Opslogica assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-cream/70"><span className="h-1.5 w-1.5 rounded-full bg-signal-green" /> Ask about services, process or pricing</p>
              </div>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-4" data-lenis-prevent>
              {msgs.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div className={cn("max-w-[86%] rounded-[20px] px-4 py-2.5 text-[0.9rem] leading-snug", m.role === "user" ? "rounded-br-md bg-forest text-cream" : "rounded-bl-md bg-paper text-ink ring-1 ring-border-subtle")}>
                    {m.role === "user" ? m.content : <Rich text={m.content} />}
                  </div>
                </motion.div>
              ))}
              {busy && (
                <div className="flex justify-start">
                  <div className="flex gap-1.5 rounded-[20px] rounded-bl-md bg-paper px-4 py-3.5 ring-1 ring-border-subtle">
                    {[0, 1, 2].map((d) => (
                      <span key={d} className="h-2 w-2 rounded-full bg-forest/60" style={{ animation: `float 0.9s ease-in-out ${d * 0.15}s infinite` }} />
                    ))}
                  </div>
                </div>
              )}
              {!busy && sugg.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {sugg.map((s) => (
                    <button key={s} onClick={() => send(s)} className="rounded-full bg-butter/70 px-3.5 py-1.5 text-xs font-semibold text-ink transition-colors hover:bg-butter">
                      {s}
                    </button>
                  ))}
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="border-t border-border-subtle bg-paper px-3 py-3">
              <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  maxLength={500}
                  placeholder="What do you want to automate?"
                  className="min-w-0 flex-1 rounded-full bg-cream-2 px-4 py-3 text-base text-ink outline-none placeholder:text-text-secondary focus:ring-2 focus:ring-forest/40 sm:text-sm"
                />
                <button type="submit" disabled={busy || !input.trim()} aria-label="Send" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-coral text-white transition-all hover:scale-105 disabled:opacity-40">
                  <ArrowUp className="h-5 w-5" />
                </button>
              </form>
              <p className="mt-2 text-center text-[0.6875rem] text-text-secondary">
                Need a person? <Link href="/contact" className="font-semibold text-forest underline underline-offset-2">Book a free call</Link>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
