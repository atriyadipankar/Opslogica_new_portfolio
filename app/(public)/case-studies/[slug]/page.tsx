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
    title: `${title} | Opslogica Case Studies`,
    description: `See how Opslogica helped deliver measurable results: "${title}". Read the full case study.`,
    alternates: {
      canonical: `https://opslogica.com/case-studies/${slug}`,
    },
  };
}

/* ---------- Page ---------- */
export default async function CaseStudyDetailPage({
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
          { name: "Case Studies", href: "/case-studies" },
          { name: title, href: `/case-studies/${slug}` },
        ]}
      />

      {/* ======== Header ======== */}
      <section className="section-padding pb-0">
        <div className="mx-auto max-w-[1280px] px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-text-secondary">
            <Link href="/" className="transition-colors hover:text-text-primary">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/case-studies"
              className="transition-colors hover:text-text-primary"
            >
              Case Studies
            </Link>
            <span>/</span>
            <span className="text-text-primary">{title}</span>
          </nav>

          {/* Industry Badge */}
          <span className="mb-4 inline-block border border-border-subtle px-4 py-1.5 text-xs font-medium text-text-primary">
            Healthcare
          </span>

          {/* Title */}
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-text-primary md:text-5xl">
            {title}
          </h1>

          {/* Client */}
          <p className="mt-4 text-lg text-text-secondary">
            Client: <span className="font-medium text-text-primary">Bright Smile Dental Group</span>
          </p>
        </div>
      </section>

      {/* ======== The Challenge ======== */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-text-primary">
                The Challenge
              </h2>
              <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Bright Smile Dental Group operates seven locations across the
                  metropolitan area, serving over 15,000 patients annually. Their
                  front-desk teams were overwhelmed by manual patient intake
                  processes that consumed an average of 12 minutes per patient visit.
                </p>
                <p>
                  Insurance verification was handled through phone calls and fax
                  machines, leading to frequent errors and claim denials. New patient
                  paperwork was still printed on paper, requiring manual data entry
                  into their practice management system. Staff burnout was rising,
                  and patient wait times were averaging 25 minutes.
                </p>
                <p>
                  The group needed a solution that could automate the most
                  time-consuming aspects of patient intake without disrupting
                  their existing workflows or requiring extensive staff retraining.
                </p>
              </div>
            </div>

            {/* Challenge visual placeholder */}
            <div className="flex items-center justify-center border border-border-subtle bg-white p-12">
              <div className="text-center">
                <p className="text-6xl font-semibold text-text-secondary">12 min</p>
                <p className="mt-2 text-sm text-text-secondary">
                  Average intake time per patient (before)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== Our Solution ======== */}
      <div className="section-border" />
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary">
            Our Solution
          </h2>
          <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
            Opslogica designed and built a comprehensive AI-powered patient intake
            platform that integrates directly with the group&apos;s existing practice
            management and EHR systems. The solution includes:
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                label: "Intelligent Digital Forms",
                description:
                  "Pre-populated intake forms that pull from existing patient records and adapt questions based on appointment type and provider specialty.",
              },
              {
                label: "Real-Time Insurance Verification",
                description:
                  "Automated eligibility checks that verify coverage, co-pays, and deductibles before the patient arrives, reducing claim denials by 40%.",
              },
              {
                label: "AI-Powered Document Processing",
                description:
                  "OCR and NLP technology that extracts data from uploaded ID cards and insurance documents, eliminating manual data entry entirely.",
              },
              {
                label: "Automated Appointment Reminders",
                description:
                  "Multi-channel reminder system via SMS, email, and voice that reduced no-show rates by 35% across all seven locations.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 border border-border-subtle bg-white p-6 transition-colors hover:border-text-primary"
              >
                {/* Checkmark */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-border-subtle text-text-primary">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== Results ======== */}
      <div className="section-border" />
      <section className="section-padding">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-text-primary">
            Results
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-text-secondary">
            Within 90 days of deployment, Bright Smile Dental Group saw
            transformative improvements across every key metric.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { metric: "60%", label: "Reduction in front-desk workload" },
              { metric: "35%", label: "Fewer patient no-shows" },
              { metric: "4.9", label: "Star average patient rating" },
              { metric: "$180K", label: "Annual cost savings" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center border border-border-subtle bg-white p-8 text-center transition-colors hover:border-text-primary"
              >
                <p className="text-4xl font-semibold text-text-primary">{item.metric}</p>
                <p className="mt-2 text-sm text-text-secondary">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== Client Testimonial ======== */}
      <div className="section-border" />
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="border border-border-subtle bg-white p-8 md:p-12">
            <svg
              className="mb-6 h-10 w-10 text-text-secondary opacity-40"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-lg leading-relaxed text-text-primary md:text-xl">
              &ldquo;Opslogica transformed our patient experience. What used to
              take 12 minutes now happens before the patient even walks through
              the door. Our staff is happier, our patients rate us higher, and
              we have saved over $180,000 in the first year alone.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border border-border-subtle bg-white text-sm font-bold text-text-primary">
                DR
              </div>
              <div>
                <p className="font-semibold text-text-primary">
                  Dr. Rebecca Martinez
                </p>
                <p className="text-sm text-text-secondary">
                  Managing Partner, Bright Smile Dental Group
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== CTA ======== */}
      <div className="section-border" />
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
            Ready to Become Our Next{" "}
            <span className="text-text-secondary">Success Story?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            Let&apos;s discuss how we can help your business achieve measurable
            results with custom software and intelligent automation.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              Start a Project
            </Link>
            <Link href="/services" className="btn-secondary px-8 py-4 text-base">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
