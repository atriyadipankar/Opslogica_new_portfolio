import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  CalendarCheck,
  ShieldCheck,
  FileText,
  Bot,
  Camera,
  Smartphone,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "AI Automation & Software Solutions for Dermatology Clinics",
  description:
    "Opslogica builds AI-assisted skin analysis, automated patient intake, telemedicine platforms, and practice management tools for dermatology clinics. Reduce admin time by 40% and enhance diagnostic accuracy.",
  keywords: [
    "dermatology clinic software",
    "dermatology practice management",
    "AI skin analysis software",
    "dermatology telemedicine platform",
    "dermatology patient intake automation",
    "dermatology billing software",
    "HIPAA compliant dermatology software",
    "dermoscopy AI software",
    "teledermatology solutions",
    "dermatology EHR integration",
  ],
  alternates: {
    canonical: "https://opslogica.com/industries/dermatology-clinics",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Dermatology Clinic Software & AI Automation",
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
    "Custom software development and AI-powered automation for dermatology clinics, including AI-assisted skin analysis, teledermatology, automated intake, clinical photography management, and billing automation.",
};

const painPoints = [
  {
    title: "Clinical Photography Chaos",
    description:
      "Dermatology depends on visual documentation, yet most practices use phones, inconsistent lighting, and disorganized folders. Finding a patient's baseline photos from 6 months ago takes minutes instead of seconds.",
  },
  {
    title: "High-Volume, Short-Visit Scheduling",
    description:
      "Derm practices average 30-50 patients per day with visit times as short as 10 minutes. Overbooking, procedure time variability, and walk-in cosmetic consultations create constant scheduling chaos.",
  },
  {
    title: "Cosmetic vs. Medical Billing Complexity",
    description:
      "Dermatology practices bill both medical insurance and cosmetic self-pay, each with different coding, documentation, and payment workflows. Mixing them up leads to compliance issues and revenue loss.",
  },
  {
    title: "Prior Authorization for Biologics & Procedures",
    description:
      "Biologic medications (Dupixent, Skyrizi, Humira) and certain procedures (Mohs surgery, phototherapy) require extensive prior authorizations. Each payer has different criteria, forms, and appeal processes.",
  },
];

const features = [
  {
    icon: Camera,
    title: "Clinical Photography System",
    description:
      "Standardized photo capture with consistent lighting guides, automatic patient record linking, side-by-side comparison tools, and HIPAA-compliant cloud storage.",
  },
  {
    icon: Bot,
    title: "AI Skin Analysis",
    description:
      "Computer vision models that analyze dermoscopic and clinical images, flag suspicious lesions, track mole evolution, and assist with triage prioritization.",
  },
  {
    icon: Smartphone,
    title: "Teledermatology Platform",
    description:
      "Asynchronous store-and-forward and live video consults with integrated image upload, annotation tools, and automated patient routing.",
  },
  {
    icon: CalendarCheck,
    title: "High-Volume Scheduling",
    description:
      "AI-optimized scheduling for mixed medical/cosmetic visits with procedure-specific time blocks, provider workload balancing, and automated reminders.",
  },
  {
    icon: FileText,
    title: "Smart Intake & Documentation",
    description:
      "Digital intake forms with dermatology-specific templates (skin type, allergy history, medication list) and AI-assisted visit documentation.",
  },
  {
    icon: ShieldCheck,
    title: "Prior Auth & Billing Automation",
    description:
      "Automated prior authorization for biologics, procedure-specific CPT/ICD coding, and separate medical/cosmetic billing workflows with full compliance.",
  },
];

const caseStudies = [
  {
    title: "DermaCare Clinics — 40% Faster Documentation",
    description:
      "We built a custom EHR workflow with dermatology-specific templates and AI-assisted documentation for this 5-provider practice. Visit documentation time dropped from 8 minutes to under 5 minutes per patient, enabling an additional 6 patients per day per provider.",
  },
  {
    title: "SkinFirst Dermatology — 3x Faster Prior Authorization",
    description:
      "Our automated prior auth system slashed biologic medication approval times from 14 days to under 5 days. Patient time-to-treatment improved dramatically, and the practice saw a 25% increase in biologic prescription fulfillment.",
  },
];

const metrics = [
  { value: "40%", label: "Faster Documentation" },
  { value: "3x", label: "Faster Prior Auth Approvals" },
  { value: "35%", label: "Less Admin Overhead" },
  { value: "25%", label: "Higher Rx Fulfillment" },
];

const faqItems = [
  {
    question: "Does your AI skin analysis replace the dermatologist's diagnosis?",
    answer:
      "No. Our AI serves as a decision support tool that assists dermatologists, not replaces them. It highlights regions of interest in dermoscopic images, flags lesions with atypical patterns, and tracks changes over time. The dermatologist always makes the final clinical decision. Our AI is designed to enhance accuracy and efficiency, not to practice medicine.",
  },
  {
    question: "Can you integrate with dermatology-specific EHR systems?",
    answer:
      "Yes. We integrate with ModMed (Modernizing Medicine) EMA, Nextech, PatientNow, DrChrono, and other dermatology-focused platforms. We also connect with general EHRs like athenahealth and eClinicalWorks. Our integrations cover patient data, scheduling, clinical documentation, and billing.",
  },
  {
    question: "How does the clinical photography system work?",
    answer:
      "Our system provides standardized capture guides (body region, lighting, distance) displayed on any tablet or phone camera. Photos are automatically tagged with patient ID, body location, date, and linked to the correct visit record. Side-by-side comparison tools let providers track lesion evolution over time. All images are encrypted and stored in HIPAA-compliant cloud storage.",
  },
  {
    question: "Do you handle both medical and cosmetic billing workflows?",
    answer:
      "Yes. Our platform maintains completely separate billing workflows for medical (insurance) and cosmetic (self-pay) services. Each has its own coding rules, documentation requirements, and payment processing. This prevents cross-contamination that causes compliance issues, and gives you clean financial reporting for each revenue stream.",
  },
  {
    question: "What is the typical implementation timeline for a dermatology practice?",
    answer:
      "A standard implementation for a dermatology practice takes 6-10 weeks, depending on the number of providers and integrations. We start with intake automation and scheduling, then roll out documentation, photography, and billing features in phases. Most practices see measurable time savings within the first 2 weeks of go-live.",
  },
];

export default function DermatologyClinicsPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6">
                <span className="badge-label">Dermatology Clinics</span>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
                AI Automation &amp; Software Solutions for{" "}
                <span className="gradient-text">Dermatology Clinics</span>
              </h1>
              <p className="mt-6 text-lg text-text-secondary md:text-xl">
                AI-assisted skin analysis, clinical photography management,
                teledermatology, and practice automation purpose-built for the
                unique workflows of dermatology practices.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Book a Free Demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-padding section-border">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeader
            badge="Challenges"
            title="Running a Dermatology Clinic in 2026 Means..."
            subtitle="Dermatology practices face unique challenges around visual documentation, high patient volume, and mixed billing models."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {painPoints.map((point, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="glass-card h-full p-6">
                  <h3 className="mb-3 text-lg font-semibold tracking-tight text-text-primary">
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

      {/* Our Solutions */}
      <section className="section-padding section-border">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeader
            badge="Solutions"
            title="How Opslogica Transforms Dermatology Practices"
            subtitle="We build visual-first, high-throughput software that matches the pace and precision of modern dermatology."
          />
          <div className="mt-12 space-y-6">
            <AnimatedSection>
              <div className="glass-card p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  AI-Powered Visual Diagnostics
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Our computer vision models analyze dermoscopic and clinical
                  images to highlight suspicious features, classify lesion types,
                  and track morphological changes over time. Dermatologists get
                  an AI second opinion that helps catch subtleties and prioritize
                  high-risk cases. Combined with our clinical photography system,
                  every image is standardized, organized, and instantly accessible.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  Teledermatology & Virtual Triage
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Our teledermatology platform supports both asynchronous
                  store-and-forward consultations (patients upload images for
                  provider review) and synchronous live video visits. AI-powered
                  triage routes cases by urgency, and integrated prescription and
                  referral workflows complete the virtual encounter without
                  switching systems.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  High-Volume Practice Automation
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  From digital intake forms with skin-type-specific templates to
                  AI-assisted visit documentation, procedure-specific scheduling
                  blocks, and automated medical/cosmetic billing separation, every
                  workflow is optimized for the high-throughput reality of derm
                  practices. Providers see more patients with less administrative
                  friction.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding section-border">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeader
            badge="Features"
            title="Built for Dermatology Workflows"
            subtitle="Every feature addresses the visual-first, high-volume demands of dermatology practices."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="glass-card h-full p-6">
                  <div className="mb-4 inline-flex border border-border-subtle p-3">
                    <feature.icon className="h-6 w-6 text-text-primary" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold tracking-tight text-text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding section-border">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeader
            badge="Results"
            title="How We've Helped Dermatology Practices"
            subtitle="Real outcomes from real dermatology clients."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="glass-card h-full p-6 md:p-8">
                  <h3 className="mb-3 text-lg font-semibold tracking-tight text-text-primary">
                    {study.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {study.description}
                  </p>
                  <Link
                    href="/case-studies"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-text-primary hover:underline"
                  >
                    Read Full Case Study <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ROI / Metrics */}
      <section className="section-padding section-border">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeader
            badge="ROI"
            title="Practices Using Opslogica See..."
            subtitle="Measurable results within the first 90 days."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="glass-card p-6 text-center">
                  <p className="text-4xl font-semibold tracking-tight gradient-text">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
                    {metric.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-border">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
              Book a Free Demo for Your{" "}
              <span className="gradient-text">Dermatology Practice</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              See how Opslogica can automate your intake, enhance visual
              documentation, and streamline billing in a personalized 30-minute
              walkthrough.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Schedule Your Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services/ai-automation" className="btn-secondary">
                Learn About AI Automation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-border">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            subtitle="Common questions from dermatologists and practice managers."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}
