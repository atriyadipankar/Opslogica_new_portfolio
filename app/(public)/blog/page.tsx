import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Blog | Opslogica",
  description:
    "Explore expert insights and resources on AI automation, software development, and business growth from the Opslogica team.",
  alternates: {
    canonical: "https://opslogica.com/blog",
  },
};

const blogPosts = [
  {
    slug: "how-ai-automation-transforms-healthcare-clinics",
    title: "How AI Automation Is Transforming Healthcare Clinics in 2026",
    excerpt:
      "From patient intake to billing reconciliation, AI automation is helping healthcare clinics reduce overhead by up to 40%. Here is what you need to know.",
    date: "April 10, 2026",
    readingTime: "7 min read",
    tag: "AI Automation",
  },
  {
    slug: "choosing-the-right-tech-stack-for-your-saas",
    title: "Choosing the Right Tech Stack for Your SaaS Product in 2026",
    excerpt:
      "Next.js, Remix, or SvelteKit? PostgreSQL or PlanetScale? We break down the most important decisions for SaaS founders building products that scale.",
    date: "March 28, 2026",
    readingTime: "9 min read",
    tag: "Software Development",
  },
  {
    slug: "business-automation-roi-guide",
    title: "The ROI of Business Automation: A Practical Guide for SMBs",
    excerpt:
      "Most small businesses leave thousands of dollars on the table each month by running manual workflows. Here is how to calculate and capture the ROI.",
    date: "March 15, 2026",
    readingTime: "6 min read",
    tag: "Business Automation",
  },
  {
    slug: "website-performance-optimization-checklist",
    title: "The Ultimate Website Performance Optimization Checklist",
    excerpt:
      "Page speed directly impacts conversions and search rankings. Use our 25-point checklist to ensure your website loads in under 2 seconds on every device.",
    date: "February 28, 2026",
    readingTime: "8 min read",
    tag: "Next.js",
  },
  {
    slug: "dental-practice-digital-transformation",
    title: "Digital Transformation Playbook for Dental Practices",
    excerpt:
      "From online booking to automated reminders and digital treatment plans, learn how forward-thinking dental practices are improving patient experience.",
    date: "February 12, 2026",
    readingTime: "5 min read",
    tag: "Healthcare",
  },
  {
    slug: "ai-chatbots-vs-traditional-support",
    title: "AI Chatbots vs. Traditional Support: What the Data Says",
    excerpt:
      "We analyzed 10,000 support interactions across 50 businesses to compare AI chatbot performance against human-only support teams.",
    date: "January 30, 2026",
    readingTime: "10 min read",
    tag: "AI Automation",
  },
];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />

      {/* ======== Hero ======== */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeader
            title="Insights & Resources"
            subtitle="Expert perspectives on AI automation, software development, and business growth."
            badge="Blog"
          />
        </div>
      </section>

      {/* ======== Blog Grid ======== */}
      <div className="section-border" />
      <section className="section-padding">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden border border-border-subtle bg-white p-0 no-underline transition-colors hover:border-text-primary"
              >
                {/* Cover Placeholder */}
                <div className="h-48 w-full bg-[rgb(226,228,233)]" />

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-semibold leading-snug tracking-tight text-text-primary">
                    {post.title}
                  </h2>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Bottom Row */}
                  <div className="mt-4 flex items-center gap-3 text-xs text-text-secondary">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 bg-text-secondary/50" />
                    <span>{post.readingTime}</span>
                    <span className="ml-auto border border-border-subtle px-2.5 py-0.5 text-xs font-medium text-text-primary">
                      {post.tag}
                    </span>
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
