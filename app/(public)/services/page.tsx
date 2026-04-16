import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Opslogica offers custom software development, website development, AI automation, and business process automation services for healthcare practices and local enterprises across the US, Canada, Europe, Australia, and Gulf.",
  keywords: [
    "software development services",
    "AI automation services",
    "business automation",
    "website development",
    "custom software company",
    "healthcare technology solutions",
  ],
  alternates: {
    canonical: "https://opslogica.com/services",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Opslogica Services",
  description:
    "Comprehensive technology services including software development, web development, AI automation, and business process automation.",
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `https://opslogica.com/services/${service.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
      <JsonLd data={servicesSchema} />

      {/* --- Hero Section --- */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeader
            badge="What We Do"
            title="Our Services"
            subtitle="From custom software and high-converting websites to AI-powered automation and streamlined business processes, Opslogica delivers end-to-end technology solutions that drive measurable results."
          />
        </div>
      </section>

      {/* --- Service Cards Grid --- */}
      <section className="section-border py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Opslogica Section --- */}
      <section className="section-border bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
                Why Businesses Choose{" "}
                <span className="gradient-text">Opslogica</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
                We combine deep technical expertise with a genuine understanding
                of business operations to deliver solutions that actually work.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0.1}>
              <div className="border border-border-subtle bg-white p-6 transition-colors duration-200 hover:border-text-primary">
                <div className="mb-4 inline-flex border border-border-subtle p-2">
                  <span className="text-2xl">&#x1F3AF;</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary">
                  Domain Expertise
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  Specialized experience in healthcare, professional services,
                  and local businesses means we understand your workflows before
                  writing a single line of code.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="border border-border-subtle bg-white p-6 transition-colors duration-200 hover:border-text-primary">
                <div className="mb-4 inline-flex border border-border-subtle p-2">
                  <span className="text-2xl">&#x26A1;</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary">
                  Agile Delivery
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  Bi-weekly sprints with demos mean you see progress early and
                  often. No black-box development, no surprises at launch.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="border border-border-subtle bg-white p-6 transition-colors duration-200 hover:border-text-primary">
                <div className="mb-4 inline-flex border border-border-subtle p-2">
                  <span className="text-2xl">&#x1F512;</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary">
                  Security First
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  HIPAA compliance, OWASP best practices, end-to-end encryption,
                  and regular penetration testing are built into every project.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="section-border bg-bg-secondary py-24 md:py-32">
        <AnimatedSection className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
            Not Sure Which Service You Need?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary">
            Book a free 30-minute strategy call. We&apos;ll audit your current
            workflows, identify the biggest opportunities for automation, and
            recommend the right solution for your budget and timeline.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Book a Free Strategy Call
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn About Us
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
