import type { Metadata } from "next";
import Link from "next/link";
import { INDUSTRIES } from "@/lib/constants";
import IndustryCard from "@/components/ui/IndustryCard";
import SectionHeader from "@/components/ui/SectionHeader";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Industries We Serve | Healthcare & Local Business Solutions",
  description:
    "Opslogica delivers AI automation and custom software solutions for dental clinics, orthopedic practices, psychology offices, physician groups, pathology labs, and dermatology clinics across the USA, Canada, Europe, Australia, and Gulf.",
  keywords: [
    "healthcare software solutions",
    "dental clinic software",
    "orthopedic practice automation",
    "psychology practice management",
    "physician practice software",
    "pathology lab software",
    "dermatology clinic automation",
    "medical practice AI automation",
    "healthcare technology company",
  ],
  alternates: {
    canonical: "https://opslogica.com/industries",
  },
};

const industriesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Healthcare Technology Solutions",
  provider: {
    "@type": "Organization",
    name: "Opslogica",
    url: "https://opslogica.com",
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  description:
    "Custom software development and AI automation solutions for healthcare practices including dental, orthopedic, psychology, physician, pathology, and dermatology.",
};

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={industriesSchema} />

      {/* Hero */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeader
            badge="Industries"
            title="Industries We Serve"
            subtitle="We specialize in healthcare and local business technology. From dental clinics to pathology labs, our AI-powered software solutions are purpose-built to solve the unique challenges of each vertical."
          />
        </div>
      </section>

      {/* Industry Grid */}
      <section className="section-padding section-border">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <IndustryCard
                key={industry.id}
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                href={`/industries/${industry.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Healthcare */}
      <section className="section-padding section-border">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeader
            badge="Our Focus"
            title="Why Healthcare?"
            subtitle="Healthcare practices face unique regulatory, operational, and patient-experience challenges. We combine deep domain knowledge with modern technology to solve them."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="border border-border-subtle bg-white p-6 transition-all hover:border-text-primary">
              <h3 className="mb-3 text-lg font-semibold tracking-tight text-text-primary">
                HIPAA-First Engineering
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Every line of code we write is built around compliance. Encrypted data storage, role-based access controls, audit logging, and signed BAAs come standard.
              </p>
            </div>
            <div className="border border-border-subtle bg-white p-6 transition-all hover:border-text-primary">
              <h3 className="mb-3 text-lg font-semibold tracking-tight text-text-primary">
                EHR & PMS Integration
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                We integrate with the systems you already use, including Epic, Cerner, Dentrix, Open Dental, Athenahealth, DrChrono, and dozens more via HL7 FHIR and custom APIs.
              </p>
            </div>
            <div className="border border-border-subtle bg-white p-6 transition-all hover:border-text-primary">
              <h3 className="mb-3 text-lg font-semibold tracking-tight text-text-primary">
                Measurable ROI
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Our solutions are designed to pay for themselves. On average, our healthcare clients see a 35% reduction in administrative overhead within the first 90 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-border">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
            Ready to Modernize Your Practice?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
            Book a free consultation and discover how Opslogica can automate your
            workflows, reduce overhead, and improve patient outcomes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Book a Free Consultation
            </Link>
            <Link href="/case-studies" className="btn-secondary">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
