import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";
import FAQAccordion from "@/components/ui/FAQAccordion";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import JsonLd from "@/components/seo/JsonLd";
import {
  CheckCircle2,
  ArrowRight,
  Code2,
  Layers,
  Rocket,
  Search,
  Paintbrush,
  Cpu,
  Send,
  BarChart3,
  Clock,
  DollarSign,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development Services",
  description:
    "Opslogica builds custom software applications that scale with your business. From MVPs to enterprise platforms, we deliver high-quality web and mobile solutions using React, Next.js, Node.js, Python, and cloud-native architectures.",
  keywords: [
    "custom software development",
    "software development company USA",
    "custom web application development",
    "enterprise software development",
    "MVP development services",
    "software development for healthcare",
    "React Next.js development",
  ],
  alternates: {
    canonical: "https://opslogica.com/services/software-development",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Software Development",
  provider: {
    "@type": "Organization",
    name: "Opslogica",
    url: "https://opslogica.com",
  },
  description:
    "Custom web and mobile application development using modern frameworks like React, Next.js, Node.js, and Python. We build MVPs, enterprise platforms, and healthcare software that scales.",
  serviceType: "Custom Software Development",
  areaServed: ["US", "CA", "GB", "AU", "AE"],
  url: "https://opslogica.com/services/software-development",
};

const faqs = [
  {
    question:
      "How long does it take to build a custom software application?",
    answer:
      "Timelines depend on scope and complexity. A focused MVP typically takes 6-8 weeks, while a full-featured enterprise platform can take 3-6 months. We follow agile methodology with bi-weekly demos, so you see measurable progress from week one.",
  },
  {
    question: "What technologies do you use for software development?",
    answer:
      "We work across the modern stack: React, Next.js, and Vue.js on the frontend; Node.js, Python, and Go on the backend; PostgreSQL, MongoDB, and Redis for data; and AWS, GCP, and Azure for cloud infrastructure. We select the best tools for your specific use case and team.",
  },
  {
    question: "Can you build software that integrates with our existing systems?",
    answer:
      "Absolutely. Integration is one of our core strengths. We connect with EHRs like Epic and Cerner, CRMs like Salesforce and HubSpot, ERPs, payment gateways, third-party APIs, and legacy databases. Our middleware layer ensures smooth, reliable data flow.",
  },
  {
    question: "Do you build HIPAA-compliant healthcare software?",
    answer:
      "Yes. Healthcare is one of our key verticals. Every application we build for healthcare clients includes encrypted data at rest and in transit, role-based access controls, comprehensive audit logging, and we sign Business Associate Agreements (BAAs).",
  },
  {
    question: "What happens after the software is launched?",
    answer:
      "We offer flexible post-launch support and maintenance plans that include bug fixes, performance monitoring, security patching, feature enhancements, and 24/7 incident response. Most clients choose our monthly retainer for continuous improvement.",
  },
];

const painPoints = [
  {
    icon: Clock,
    title: "Off-the-shelf software that doesn't fit",
    description:
      "You're paying for features you don't need while workarounds for the features you do need cost you hours every week.",
  },
  {
    icon: DollarSign,
    title: "Scaling bottlenecks slowing growth",
    description:
      "Manual processes and disconnected tools create friction that limits your ability to serve more customers without adding headcount.",
  },
  {
    icon: ShieldCheck,
    title: "Security and compliance concerns",
    description:
      "Generic tools don't meet your industry's regulatory requirements, leaving you exposed to audits, fines, and data breach risk.",
  },
];

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We map your workflows, interview stakeholders, and define clear success metrics. The output is a detailed requirements document and technical architecture plan.",
  },
  {
    icon: Paintbrush,
    title: "Design",
    description:
      "Our UX designers create wireframes and interactive prototypes you can click through. We iterate until the user experience is exactly right before writing any code.",
  },
  {
    icon: Cpu,
    title: "Development",
    description:
      "Agile sprints with bi-weekly demos keep you in the loop. We write clean, tested code with CI/CD pipelines, so every build is deployable and every feature is verified.",
  },
  {
    icon: Send,
    title: "Delivery",
    description:
      "Comprehensive QA, load testing, and security audits before launch. We handle deployment, migration, team training, and provide ongoing support and maintenance.",
  },
];

const useCases = [
  {
    title: "Patient Management Platform",
    description:
      "A dental clinic group needed to replace three disconnected tools with a single HIPAA-compliant platform. We built a unified system for scheduling, charting, billing, and patient communication that reduced admin overhead by 35%.",
    industry: "Healthcare",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description:
      "A pathological lab wanted real-time visibility into specimen turnaround times and technician productivity. Our custom dashboard surfaces KPIs automatically and sends alerts when SLAs are at risk.",
    industry: "Diagnostics",
  },
  {
    title: "Multi-Vendor Marketplace",
    description:
      "A growing e-commerce business needed a custom marketplace with vendor onboarding, order splitting, and dynamic pricing. We delivered a scalable platform that processed 10,000+ transactions in its first month.",
    industry: "E-Commerce",
  },
];

const metrics = [
  { value: "40%", label: "Average reduction in manual processes" },
  { value: "3x", label: "Faster time-to-market vs. in-house teams" },
  { value: "99.9%", label: "Uptime SLA on deployed applications" },
  { value: "50+", label: "Custom software projects delivered" },
];

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Software Development", href: "/services/software-development" },
        ]}
      />
      <JsonLd data={serviceSchema} />

      {/* ===== HERO ===== */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6">
                <span className="badge-label">Software Development</span>
              </div>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl">
                Custom Software Development That{" "}
                <span className="gradient-text">Scales With Your Business</span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                Stop forcing your business into rigid off-the-shelf tools. We
                build custom web and mobile applications engineered around your
                workflows, designed for performance, and built to grow with you.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-primary"
                >
                  Get a Free Consultation
                </Link>
                <Link
                  href="/case-studies"
                  className="btn-secondary"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== PAIN POINTS ===== */}
      <section className="section-border py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <SectionHeader
              badge="The Problem"
              title="Sound Familiar?"
              subtitle="Most growing businesses hit a wall when their tools can't keep up with their ambition. Here are the three biggest pain points we solve."
            />
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {painPoints.map((point, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="border border-border-subtle bg-white p-6 transition-colors duration-200 hover:border-text-primary">
                  <div className="mb-4 inline-flex border border-border-subtle p-2">
                    <point.icon className="h-6 w-6 text-text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-text-primary">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {point.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOLUTION ===== */}
      <section className="section-border bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <div className="mb-6">
                <span className="badge-label">The Solution</span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
                Software Built Around{" "}
                <span className="gradient-text">Your Business</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                Opslogica delivers custom applications that fit your processes
                like a glove. No compromises, no workarounds, no feature bloat.
                Just clean, scalable software that solves your exact problems.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {[
                  "Tailored to your exact workflows and business rules",
                  "Built with modern, scalable architectures (React, Next.js, Node.js, Python)",
                  "Full API integrations with your existing tools and data sources",
                  "HIPAA, SOC 2, and GDPR compliance built from day one",
                  "Responsive design optimized for desktop, tablet, and mobile",
                  "Comprehensive testing, CI/CD, and automated deployments",
                  "Ongoing support, maintenance, and continuous improvement",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 border border-border-subtle bg-white p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-text-primary" />
                    <span className="text-sm leading-relaxed text-text-secondary">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section-border py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <SectionHeader
              badge="Our Process"
              title="How It Works"
              subtitle="A proven four-phase process that keeps projects on time, on budget, and aligned with your goals from start to finish."
            />
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.12}>
                <div className="border border-border-subtle bg-white p-6 transition-colors duration-200 hover:border-text-primary">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center border border-border-subtle font-mono text-lg font-semibold text-text-primary">
                      {index + 1}
                    </span>
                    <step.icon className="h-5 w-5 text-text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== USE CASES ===== */}
      <section className="section-border bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <SectionHeader
              badge="Real Results"
              title="Use Cases"
              subtitle="See how custom software has transformed operations for businesses like yours."
            />
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {useCases.map((useCase, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="flex h-full flex-col border border-border-subtle bg-white p-6 transition-colors duration-200 hover:border-text-primary">
                  <span className="mb-3 inline-block self-start border border-border-subtle px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-text-secondary">
                    {useCase.industry}
                  </span>
                  <h3 className="mb-3 text-lg font-semibold text-text-primary">
                    {useCase.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {useCase.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== METRICS / ROI ===== */}
      <section className="section-border py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <SectionHeader
              badge="By the Numbers"
              title="The ROI of Custom Software"
              subtitle="Our clients see measurable results from day one."
            />
          </AnimatedSection>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="border border-border-subtle bg-white p-6 text-center transition-colors duration-200 hover:border-text-primary">
                  <div className="font-mono text-4xl font-semibold text-text-primary">
                    {metric.value}
                  </div>
                  <p className="mt-2 text-sm text-text-secondary">
                    {metric.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section-border bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <SectionHeader
              badge="FAQ"
              title="Frequently Asked Questions"
              subtitle="Answers to the most common questions about our custom software development services."
            />
          </AnimatedSection>

          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-border bg-bg-secondary py-24 md:py-32">
        <AnimatedSection className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
            Ready to Build Software That{" "}
            <span className="gradient-text">Actually Fits?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary">
            Tell us about your project. We&apos;ll provide a free technical
            consultation, scope estimate, and a clear roadmap to get you from
            idea to production.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Start Your Project
            </Link>
            <Link
              href="/services/ai-automation"
              className="btn-secondary"
            >
              Explore AI Automation
              <ArrowRight className="ml-2 inline-block h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
