import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Microscope,
  ShieldCheck,
  FileText,
  Bot,
  FlaskConical,
  BarChart3,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "AI Automation & Software Solutions for Pathological Labs",
  description:
    "Opslogica builds lab information management systems, automated specimen tracking, and AI-powered diagnostic analysis for pathology laboratories. Reduce turnaround time by 50% and improve diagnostic accuracy.",
  keywords: [
    "pathology lab software",
    "laboratory information management system",
    "LIMS software development",
    "AI pathology diagnostics",
    "specimen tracking automation",
    "lab workflow automation",
    "pathology billing software",
    "clinical laboratory software",
    "digital pathology solutions",
    "lab turnaround time optimization",
  ],
  alternates: {
    canonical: "https://opslogica.com/industries/pathological-labs",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Pathology Lab Software & AI Automation",
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
    "Custom software development and AI-powered automation for pathology laboratories, including LIMS, specimen tracking, AI-assisted diagnostics, result reporting, and billing automation.",
};

const painPoints = [
  {
    title: "Slow Turnaround Times",
    description:
      "Manual data entry, paper requisitions, and disconnected systems create bottlenecks at every stage from accessioning to reporting. Referring physicians and patients wait days for results that should take hours.",
  },
  {
    title: "Specimen Tracking & Chain of Custody",
    description:
      "Lost or mislabeled specimens are a lab's worst nightmare. Manual barcode scanning, handwritten logs, and lack of real-time tracking lead to costly re-collections, delayed diagnoses, and compliance risks.",
  },
  {
    title: "Rising Volume, Flat Headcount",
    description:
      "Test volumes increase 5-8% annually while lab staffing remains flat or declines. Without automation, quality suffers, overtime costs spike, and experienced technologists burn out.",
  },
  {
    title: "Complex Billing & Coding",
    description:
      "Pathology billing involves CPT codes, modifier stacking, panel bundling rules, and payer-specific requirements. Manual coding leads to 12-18% denial rates and significant revenue leakage.",
  },
];

const features = [
  {
    icon: Microscope,
    title: "Lab Information Management (LIMS)",
    description:
      "End-to-end LIMS covering order entry, accessioning, testing, quality control, result validation, and report delivery with full audit trails.",
  },
  {
    icon: FlaskConical,
    title: "Specimen Tracking & Barcoding",
    description:
      "Real-time specimen tracking from collection through disposal with barcode/RFID integration, chain of custody logging, and automated alerts for exceptions.",
  },
  {
    icon: Bot,
    title: "AI-Assisted Diagnostics",
    description:
      "Machine learning models that flag abnormal results, suggest differential diagnoses, and assist pathologists with digital slide analysis and pattern recognition.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Quality Dashboards",
    description:
      "Real-time dashboards for turnaround time, test volume, QC metrics, proficiency testing results, and productivity benchmarks across departments.",
  },
  {
    icon: FileText,
    title: "Automated Result Reporting",
    description:
      "Auto-generated, structured reports delivered electronically to ordering providers via HL7, FHIR, fax, or patient portal with critical value alerts.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Accreditation",
    description:
      "Built-in support for CAP, CLIA, ISO 15189, and state-specific accreditation requirements with automated documentation and audit-ready reporting.",
  },
];

const caseStudies = [
  {
    title: "Precision Path Labs — 50% Faster Turnaround",
    description:
      "We replaced a legacy LIMS with a modern, fully integrated platform. Average turnaround time dropped from 72 hours to 36 hours for routine tests, and critical value reporting time fell from 45 minutes to under 10 minutes.",
  },
  {
    title: "Cascade Clinical Labs — Zero Specimen Loss in 12 Months",
    description:
      "Our barcode-driven specimen tracking system eliminated the 0.3% specimen loss rate this reference lab had been experiencing. In the 12 months since deployment, they have reported zero lost or mislabeled specimens.",
  },
];

const metrics = [
  { value: "50%", label: "Faster Turnaround Time" },
  { value: "0", label: "Specimens Lost in 12 Months" },
  { value: "35%", label: "Less Manual Data Entry" },
  { value: "60%", label: "Fewer Billing Denials" },
];

const faqItems = [
  {
    question: "Can you replace our existing LIMS or integrate with it?",
    answer:
      "Both. We can build a completely custom LIMS tailored to your lab's workflows, or we can integrate with your existing system (Sunquest, Cerner PathNet, Orchard, LigoLab, etc.) to add automation layers, dashboards, and AI capabilities on top of what you already have.",
  },
  {
    question: "How does AI-assisted pathology diagnostics work?",
    answer:
      "Our AI models are trained on large datasets of validated pathology cases. For histopathology, the system analyzes digital whole-slide images to highlight regions of interest, classify tissue patterns, and flag potential malignancies for pathologist review. For clinical pathology, it identifies abnormal result patterns and suggests differentials. The pathologist always makes the final diagnosis.",
  },
  {
    question: "Do you support HL7 and FHIR interfaces for result delivery?",
    answer:
      "Yes. We build HL7 v2.x, HL7 FHIR R4, and custom API interfaces for bi-directional communication with hospitals, EHRs, and reference labs. This includes ORM/ORU message handling, ADT feeds, and result delivery to patient portals.",
  },
  {
    question: "How do you handle CAP and CLIA compliance requirements?",
    answer:
      "Our platform includes built-in compliance modules for CAP checklist tracking, CLIA proficiency testing management, quality control documentation, competency assessment records, and automated incident reporting. All audit trails are maintained for accreditation inspections.",
  },
  {
    question: "What is the implementation timeline for a mid-size reference lab?",
    answer:
      "A full LIMS implementation for a mid-size reference lab (50-200 employees, multiple departments) typically takes 12-16 weeks. We follow a phased approach starting with accessioning and result reporting, then expanding to advanced analytics and AI features. Instrument integrations run in parallel. We provide dedicated go-live support.",
  },
];

export default function PathologicalLabsPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6">
                <span className="badge-label">Pathological Labs</span>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
                AI Automation &amp; Software Solutions for{" "}
                <span className="gradient-text">Pathological Labs</span>
              </h1>
              <p className="mt-6 text-lg text-text-secondary md:text-xl">
                Lab information management, automated specimen tracking, and
                AI-powered diagnostic analysis that cut turnaround times in half
                and eliminate specimen handling errors.
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
            title="Running a Pathology Lab in 2026 Means..."
            subtitle="Clinical laboratories face relentless pressure to deliver faster, more accurate results with fewer resources."
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
            title="How Opslogica Transforms Pathology Labs"
            subtitle="We engineer end-to-end lab automation that accelerates every step from order entry to result delivery."
          />
          <div className="mt-12 space-y-6">
            <AnimatedSection>
              <div className="glass-card p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  Modern Lab Information Management
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Our custom LIMS replaces fragmented, legacy systems with a
                  unified platform covering the complete lab workflow: electronic
                  order entry, specimen accessioning, test scheduling, quality
                  control, result validation, auto-verification, and structured
                  report delivery. Everything is connected, everything is tracked,
                  and everything is auditable.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  Specimen Tracking & Chain of Custody
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Barcode and RFID-based tracking follows every specimen from
                  collection point to testing bench to archival or disposal. Real-time
                  location visibility, automated exception alerts, and complete chain
                  of custody documentation ensure zero specimen loss and full
                  regulatory compliance.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  AI-Powered Diagnostics & Quality Intelligence
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Machine learning models assist pathologists by flagging abnormal
                  results, identifying patterns in digital slide images, and
                  suggesting differential diagnoses. Real-time analytics dashboards
                  monitor turnaround times, QC trends, proficiency testing
                  performance, and productivity benchmarks across every department.
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
            title="Built for Laboratory Workflows"
            subtitle="Every feature is designed for the precision and compliance demands of clinical pathology."
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
            title="How We've Helped Pathology Labs"
            subtitle="Real outcomes from real laboratory clients."
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
            title="Labs Using Opslogica See..."
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
              <span className="gradient-text">Pathology Lab</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              See how Opslogica can modernize your LIMS, automate specimen tracking,
              and accelerate result delivery in a personalized 30-minute walkthrough.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Schedule Your Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services/software-development" className="btn-secondary">
                Learn About Custom Software
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
            subtitle="Common questions from lab directors and laboratory managers."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}
