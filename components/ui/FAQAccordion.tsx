"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <div className={className}>
      <Accordion.Root type="single" collapsible>
        {items.map((item, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="mb-3 overflow-hidden rounded-3xl bg-paper ring-1 ring-border-subtle transition-shadow duration-300 data-[state=open]:shadow-[0_24px_40px_-28px_rgba(20,38,31,0.5)] data-[state=open]:ring-forest/30"
          >
            <Accordion.Trigger
              className={cn(
                "group flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
                "font-display text-lg text-ink",
                "transition-colors hover:text-text-primary",
                "cursor-pointer"
              )}
            >
              {item.question}
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream-2 text-forest transition-all duration-300 group-hover:bg-butter group-data-[state=open]:rotate-45 group-data-[state=open]:bg-coral group-data-[state=open]:text-white">
                <Plus className="h-4 w-4" />
              </span>
            </Accordion.Trigger>
            <Accordion.Content
              className={cn(
                "overflow-hidden text-[0.9375rem] leading-relaxed text-text-secondary",
                "data-[state=open]:animate-[slideDown_300ms_ease-out]",
                "data-[state=closed]:animate-[slideUp_300ms_ease-out]"
              )}
            >
              <div className="px-6 pb-6">{item.answer}</div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
