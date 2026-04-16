import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

/* ---------- Static Params ---------- */
export async function generateStaticParams() {
  return [];
}

/* ---------- Metadata ---------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `${title} | Opslogica Blog`,
    description: `Read "${title}" on the Opslogica blog — insights on AI automation, software development, and business growth.`,
    alternates: {
      canonical: `https://opslogica.com/blog/${slug}`,
    },
  };
}

/* ---------- Related Posts (placeholder) ---------- */
const relatedPosts = [
  {
    slug: "business-automation-roi-guide",
    title: "The ROI of Business Automation: A Practical Guide for SMBs",
    date: "March 15, 2026",
  },
  {
    slug: "choosing-the-right-tech-stack-for-your-saas",
    title: "Choosing the Right Tech Stack for Your SaaS Product in 2026",
    date: "March 28, 2026",
  },
  {
    slug: "ai-chatbots-vs-traditional-support",
    title: "AI Chatbots vs. Traditional Support: What the Data Says",
    date: "January 30, 2026",
  },
];

/* ---------- Page ---------- */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: title, href: `/blog/${slug}` },
        ]}
      />

      {/* ======== Article Header ======== */}
      <section className="section-padding pb-0">
        <div className="mx-auto max-w-[800px] px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-text-secondary">
            <Link href="/" className="transition-colors hover:text-text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="transition-colors hover:text-text-primary">
              Blog
            </Link>
            <span>/</span>
            <span className="text-text-primary">{title}</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-text-primary md:text-5xl">
            {title}
          </h1>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
            <span>April 10, 2026</span>
            <span className="h-1 w-1 bg-text-secondary/50" />
            <span>7 min read</span>
          </div>

          {/* Tag Badges */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="border border-border-subtle px-3 py-1 text-xs font-medium text-text-primary">
              AI Automation
            </span>
            <span className="border border-border-subtle px-3 py-1 text-xs font-medium text-text-primary">
              Healthcare
            </span>
          </div>

          {/* Cover placeholder */}
          <div className="mt-8 h-64 w-full bg-[rgb(226,228,233)] md:h-80" />
        </div>
      </section>

      {/* ======== Article Content ======== */}
      <section className="section-padding">
        <article className="mx-auto max-w-[800px] px-6">
          <div className="space-y-6 text-text-secondary">
            <p className="text-lg leading-relaxed">
              The healthcare industry is undergoing a dramatic transformation.
              As clinics and private practices face rising patient volumes,
              increasing regulatory requirements, and tighter margins, the need
              for intelligent automation has never been greater.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
              The Current State of Healthcare Operations
            </h2>
            <p className="leading-relaxed">
              Most healthcare clinics still rely on a patchwork of manual
              processes and disconnected software systems. Front-desk staff
              spend hours each day on phone calls, appointment scheduling, and
              insurance verification. Clinical teams navigate between multiple
              platforms for charting, prescriptions, and lab results. Billing
              departments wrestle with claim denials and payment follow-ups.
            </p>
            <p className="leading-relaxed">
              This operational overhead doesn&apos;t just slow down the
              practice — it directly impacts patient experience, staff
              satisfaction, and revenue. Studies show that administrative
              burden is one of the leading causes of clinician burnout.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
              Where AI Automation Makes the Biggest Impact
            </h2>
            <p className="leading-relaxed">
              AI-powered automation can address these pain points across
              several key areas. Patient intake can be streamlined with
              intelligent forms that pre-populate data and verify insurance in
              real time. Appointment scheduling can be handled by AI assistants
              that understand availability, provider preferences, and patient
              history.
            </p>
            <p className="leading-relaxed">
              On the billing side, automated claim scrubbing reduces denials by
              catching errors before submission. Predictive analytics can
              identify patients at risk of no-shows, enabling proactive
              outreach. And AI-powered follow-up systems ensure that treatment
              plans stay on track without adding to staff workload.
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
              Getting Started: A Practical Roadmap
            </h2>
            <p className="leading-relaxed">
              Implementing AI automation doesn&apos;t require a complete
              systems overhaul. The most successful practices start with a
              focused assessment of their highest-impact, most-repetitive
              workflows. They identify quick wins — processes that can be
              automated with minimal disruption — and build from there.
            </p>
            <p className="leading-relaxed">
              At Opslogica, we work with healthcare practices to map their
              operational workflows, identify automation opportunities, and
              build custom solutions that integrate seamlessly with existing
              EHR and practice management systems. The key is to start small,
              measure results, and expand systematically.
            </p>

            <div className="my-8 border border-border-subtle bg-white p-6">
              <p className="text-base font-medium text-text-primary">
                Key Takeaway
              </p>
              <p className="mt-2 text-base leading-relaxed">
                Healthcare clinics that invest in AI automation today are
                building a durable competitive advantage. The technology is
                proven, the ROI is measurable, and the impact on patient care
                is transformative.
              </p>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
              Conclusion
            </h2>
            <p className="leading-relaxed">
              The question is no longer whether healthcare practices should
              adopt AI automation, but how quickly they can get started. Every
              month of delay means more staff hours wasted on manual tasks,
              more revenue lost to claim denials, and more patients
              experiencing friction in their care journey.
            </p>
          </div>
        </article>
      </section>

      {/* ======== Author Bio ======== */}
      <section className="pb-16">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="flex flex-col items-center gap-6 border border-border-subtle bg-white p-8 sm:flex-row sm:items-start">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-border-subtle bg-white text-xl font-bold text-text-primary">
              OT
            </div>
            <div>
              <p className="font-semibold text-text-primary">Opslogica Team</p>
              <p className="mt-1 text-sm text-text-secondary">
                The Opslogica editorial team consists of engineers, product
                strategists, and industry consultants who share practical
                insights on technology, automation, and digital transformation.
              </p>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://linkedin.com/company/opslogica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary transition-colors hover:text-text-primary"
                  aria-label="LinkedIn"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/opslogica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary transition-colors hover:text-text-primary"
                  aria-label="Twitter / X"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== Related Posts ======== */}
      <div className="section-border" />
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-text-primary">
            Related Articles
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden border border-border-subtle bg-white p-0 no-underline transition-colors hover:border-text-primary"
              >
                <div className="h-36 w-full bg-[rgb(226,228,233)]" />
                <div className="p-6">
                  <p className="mb-2 text-xs text-text-secondary">
                    {post.date}
                  </p>
                  <h3 className="text-base font-semibold leading-snug tracking-tight text-text-primary">
                    {post.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-1 text-sm font-medium text-text-primary">
                    Read Article
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
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
