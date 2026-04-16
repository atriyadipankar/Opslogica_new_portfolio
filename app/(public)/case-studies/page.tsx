import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Case Studies | Opslogica",
  description:
    "Real results from real projects across healthcare and enterprise. Explore how Opslogica delivers measurable outcomes through custom software and AI automation.",
  alternates: {
    canonical: "https://opslogica.com/case-studies",
  },
};

const filters = ["All", "Healthcare", "Retail", "Technology"];

const caseStudies = [
  {
    slug: "dental-clinic-ai-patient-intake",
    industry: "Healthcare",
    title: "AI-Powered Patient Intake for a Multi-Location Dental Group",
    result: "60% reduction in front-desk workload",
  },
  {
    slug: "physician-practice-ehr-integration",
    industry: "Healthcare",
    title: "Seamless EHR Integration for a 15-Physician Practice",
    result: "45% faster charting time",
  },
  {
    slug: "psychology-clinic-telehealth-platform",
    industry: "Healthcare",
    title: "Custom Telehealth Platform for a Psychology Clinic Network",
    result: "3x increase in patient reach",
  },
  {
    slug: "retail-inventory-automation",
    industry: "Retail",
    title: "Automated Inventory Management for a 12-Store Retail Chain",
    result: "28% decrease in stockouts",
  },
  {
    slug: "saas-platform-nextjs-rebuild",
    industry: "Technology",
    title: "Next.js Platform Rebuild for a High-Growth SaaS Startup",
    result: "4x improvement in page load speed",
  },
  {
    slug: "ai-chatbot-customer-support",
    industry: "Technology",
    title: "AI Chatbot Deployment for Enterprise Customer Support",
    result: "70% of tickets resolved automatically",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Case Studies", href: "/case-studies" },
        ]}
      />

      {/* ======== Hero ======== */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeader
            title="Our Work Speaks for Itself"
            subtitle="Real results from real projects across healthcare and enterprise."
            badge="Case Studies"
          />
        </div>
      </section>

      {/* ======== Filter Buttons ======== */}
      <section className="pb-4">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter, idx) => (
              <button
                key={filter}
                className={`px-5 py-2 text-sm font-medium transition-colors ${
                  idx === 0
                    ? "bg-text-primary text-white"
                    : "border border-border-subtle text-text-secondary hover:border-text-primary hover:text-text-primary"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ======== Case Study Grid ======== */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group flex flex-col overflow-hidden border border-border-subtle bg-white p-0 no-underline transition-colors hover:border-text-primary"
              >
                {/* Accent bar */}
                <div className="h-1.5 w-full bg-border-subtle group-hover:bg-text-primary transition-colors" />

                <div className="flex flex-1 flex-col p-6">
                  {/* Industry Badge */}
                  <span className="mb-3 w-fit border border-border-subtle px-3 py-1 text-xs font-medium text-text-primary">
                    {study.industry}
                  </span>

                  {/* Title */}
                  <h2 className="text-lg font-semibold leading-snug tracking-tight text-text-primary">
                    {study.title}
                  </h2>

                  {/* Result Headline */}
                  <p className="mt-2 text-base font-semibold text-text-secondary">
                    {study.result}
                  </p>

                  {/* Read More */}
                  <div className="mt-auto pt-5 flex items-center gap-1 text-sm font-medium text-text-primary">
                    Read Case Study
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
