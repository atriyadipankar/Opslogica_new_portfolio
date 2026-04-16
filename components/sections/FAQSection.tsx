"use client";

import { FAQ_ITEMS } from "@/lib/constants";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SectionHeader from "@/components/ui/SectionHeader";

export default function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="section-padding section-border">
      <div className="mx-auto max-w-[800px] px-6">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our services and process."
        />

        <div className="mt-12">
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </div>

      {/* JSON-LD FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
