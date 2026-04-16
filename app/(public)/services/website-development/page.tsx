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
  Globe,
  Search,
  Paintbrush,
  Cpu,
  Send,
  Clock,
  DollarSign,
  ShieldCheck,
  Smartphone,
  Gauge,
  MousePointerClick,
  ShoppingCart,
  Layers,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Development Services",
  description:
    "Opslogica builds high-performance websites that convert visitors into customers. We specialize in Next.js, WordPress, and Shopify development with SEO optimization, responsive design, and blazing-fast load times.",
  keywords: [
    "website development services",
    "web design for local businesses",
    "Next.js website development",
    "WordPress development services",
    "Shopify development",
    "responsive web design",
    "SEO-optimized websites",
    "healthcare website development",
  ],
  alternates: {
    canonical: "https://opslogica.com/services/website-development",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Development Services",
  provider: {
    "@type": "Organization",
    name: "Opslogica",
    url: "https://opslogica.com",
  },
  description:
    "High-performance website development using Next.js, WordPress, and Shopify. We build responsive, SEO-optimized websites that drive conversions for local businesses and healthcare practices.",
  serviceType: "Website Development",
  areaServed: ["US", "CA", "GB", "AU", "AE"],
  url: "https://opslogica.com/services/website-development",
};

const faqs = [
  {
    question: "What platforms do you build websites on?",
    answer:
      "We build on the platform that best suits your needs. For maximum performance and customization, we use Next.js and React. For content-heavy sites that need easy editing, we use WordPress with custom themes. For e-commerce, we use Shopify or WooCommerce. We'll recommend the right platform during our discovery call.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A standard business website takes 4-6 weeks from kickoff to launch. E-commerce sites and complex web applications typically take 6-10 weeks. We provide a detailed timeline during our proposal phase and use agile sprints with weekly progress demos.",
  },
  {
    question: "Will my website be optimized for search engines?",
    answer:
      "Absolutely. SEO is built into every site we develop. This includes technical SEO (structured data, meta tags, sitemaps, Core Web Vitals optimization), on-page SEO (keyword-optimized content structure, heading hierarchy, internal linking), and local SEO setup for businesses targeting specific geographic areas.",
  },
  {
    question: "Can you redesign my existing website without losing SEO rankings?",
    answer:
      "Yes. We follow a careful migration process that includes URL mapping, 301 redirects, content audit, and structured data preservation. We monitor search console data throughout the transition to ensure your rankings are maintained or improved.",
  },
  {
    question: "Do you provide website maintenance and hosting?",
    answer:
      "Yes. We offer managed hosting and maintenance packages that include security updates, performance monitoring, uptime tracking, content updates, and monthly analytics reports. Our hosting infrastructure ensures 99.9% uptime with CDN distribution for fast global load times.",
  },
];

const painPoints = [
  {
    icon: Clock,
    title: "Slow, outdated website hurting your brand",
    description:
      "Your site takes too long to load, looks outdated on mobile, and visitors bounce before they ever see your services. Every day it stays this way, you lose potential customers.",
  },
  {
    icon: DollarSign,
    title: "Low conversion rates despite traffic",
    description:
      "You're getting visitors but they're not calling, booking, or buying. Your website doesn't have clear calls-to-action, trust signals, or a user journey designed to convert.",
  },
  {
    icon: ShieldCheck,
    title: "No visibility on Google or local search",
    description:
      "Your competitors rank above you for the keywords your customers are searching. Without proper SEO, your website is effectively invisible to the people who need you most.",
  },
];

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We audit your current site, analyze competitors, define your ideal customer personas, and establish clear conversion goals. You'll get a detailed sitemap and content strategy.",
  },
  {
    icon: Paintbrush,
    title: "Design",
    description:
      "High-fidelity mockups of every page, optimized for desktop and mobile. We iterate on the design until it's pixel-perfect, on-brand, and built to convert visitors into customers.",
  },
  {
    icon: Cpu,
    title: "Development",
    description:
      "Clean, semantic code with performance baked in. We optimize images, implement lazy loading, configure CDN caching, and ensure your site scores 90+ on Google PageSpeed Insights.",
  },
  {
    icon: Send,
    title: "Launch & Optimize",
    description:
      "We handle DNS, SSL, analytics setup, and search console submission. Post-launch, we monitor Core Web Vitals and run A/B tests to continuously improve your conversion rates.",
  },
];

const useCases = [
  {
    title: "Dental Practice Website",
    description:
      "We built a conversion-optimized website for a multi-location dental practice that increased online appointment bookings by 60%. The site features an integrated booking widget, patient testimonials, and service-specific landing pages.",
    industry: "Healthcare",
  },
  {
    title: "E-Commerce Storefront",
    description:
      "A specialty retailer needed a fast, mobile-first Shopify store with custom product filters and a seamless checkout experience. The redesign increased mobile conversion rates by 45% and reduced cart abandonment by 30%.",
    industry: "E-Commerce",
  },
  {
    title: "Professional Services Firm",
    description:
      "A consulting firm needed a content-rich WordPress site to establish thought leadership and generate qualified leads. Our SEO-first approach drove a 120% increase in organic traffic within six months of launch.",
    industry: "Professional Services",
  },
];

const metrics = [
  { value: "95+", label: "Average PageSpeed Insights score" },
  { value: "60%", label: "Average increase in lead conversions" },
  { value: "3s", label: "Target full page load time" },
  { value: "100%", label: "Mobile-responsive across all devices" },
];

const platforms = [
  {
    icon: Code2,
    name: "Next.js / React",
    description:
      "Maximum performance, full customization, and server-side rendering for the best SEO and user experience.",
  },
  {
    icon: Layers,
    name: "WordPress",
    description:
      "Content management made easy with custom themes, page builders, and a library of plugins for any functionality.",
  },
  {
    icon: ShoppingCart,
    name: "Shopify",
    description:
      "E-commerce excellence with custom themes, app integrations, and a checkout experience optimized for conversions.",
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Website Development", href: "/services/website-development" },
        ]}
      />
      <JsonLd data={serviceSchema} />

      {/* ===== HERO ===== */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6">
                <span className="badge-label">Website Development</span>
              </div>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl">
                High-Performance Websites That{" "}
                <span className="gradient-text">
                  Convert Visitors Into Customers
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                Your website is your most important salesperson. We build fast,
                beautiful, SEO-optimized websites on Next.js, WordPress, and
                Shopify that turn browsers into buyers and first-time visitors
                into loyal customers.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-primary"
                >
                  Get a Free Website Audit
                </Link>
                <Link
                  href="/case-studies"
                  className="btn-secondary"
                >
                  View Our Work
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
              title="Is Your Website Working Against You?"
              subtitle="A bad website doesn't just look unprofessional. It actively drives customers to your competitors."
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

      {/* ===== PLATFORMS ===== */}
      <section className="section-border bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <SectionHeader
              badge="Our Platforms"
              title="The Right Platform for Your Business"
              subtitle="We don't force you into a one-size-fits-all solution. We recommend the platform that best matches your goals, budget, and team."
            />
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {platforms.map((platform, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="flex h-full flex-col border border-border-subtle bg-white p-6 transition-colors duration-200 hover:border-text-primary">
                  <div className="mb-4 inline-flex self-start border border-border-subtle p-2">
                    <platform.icon className="h-6 w-6 text-text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-text-primary">
                    {platform.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {platform.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOLUTION ===== */}
      <section className="section-border py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <div className="mb-6">
                <span className="badge-label">What You Get</span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
                Websites That Work as Hard as{" "}
                <span className="gradient-text">You Do</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                Every website we build is designed to achieve a specific business
                outcome. Whether that is generating leads, booking appointments,
                selling products, or establishing authority in your market.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {[
                  "Custom responsive design that looks stunning on every device",
                  "SEO-optimized structure, metadata, and content hierarchy",
                  "Core Web Vitals optimized for 90+ Google PageSpeed scores",
                  "Integrated booking, contact forms, and lead capture systems",
                  "Analytics and conversion tracking configured from day one",
                  "ADA/WCAG accessibility compliance for inclusive experiences",
                  "Managed hosting with SSL, CDN, and 99.9% uptime guarantee",
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
      <section className="section-border bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <SectionHeader
              badge="Our Process"
              title="How We Build Your Website"
              subtitle="A streamlined four-phase process that delivers beautiful, high-performing websites on time and on budget."
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
      <section className="section-border py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <SectionHeader
              badge="Real Results"
              title="Websites That Deliver"
              subtitle="See how our website development services have helped businesses across industries grow their online presence and revenue."
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
      <section className="section-border bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <SectionHeader
              badge="Performance"
              title="The Numbers Speak"
              subtitle="We build websites that aren't just beautiful -- they're measurably effective."
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
      <section className="section-border py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <SectionHeader
              badge="FAQ"
              title="Frequently Asked Questions"
              subtitle="Common questions about our website development services."
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
            Ready for a Website That{" "}
            <span className="gradient-text">Actually Converts?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary">
            Get a free website audit and see exactly where your current site is
            losing visitors and revenue. We&apos;ll provide a clear plan to fix
            it.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Get Your Free Audit
            </Link>
            <Link
              href="/services/software-development"
              className="btn-secondary"
            >
              Custom Software
              <ArrowRight className="ml-2 inline-block h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
