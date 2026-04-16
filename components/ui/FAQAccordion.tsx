"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
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
            className="border-b border-border-subtle"
          >
            <Accordion.Trigger
              className={cn(
                "group flex w-full items-center justify-between py-5 text-left",
                "text-base font-medium text-text-primary",
                "transition-colors hover:text-text-primary",
                "cursor-pointer"
              )}
            >
              {item.question}
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-text-secondary transition-transform duration-300",
                  "group-data-[state=open]:rotate-180"
                )}
              />
            </Accordion.Trigger>
            <Accordion.Content
              className={cn(
                "overflow-hidden text-sm leading-relaxed text-text-secondary",
                "data-[state=open]:animate-[slideDown_300ms_ease-out]",
                "data-[state=closed]:animate-[slideUp_300ms_ease-out]"
              )}
            >
              <div className="pb-5">{item.answer}</div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
