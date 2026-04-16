import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  CalendarCheck,
  ShieldCheck,
  FileText,
  Bot,
  Activity,
  ClipboardList,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "AI Automation & Software Solutions for Orthopedic Clinics",
  description:
    "Opslogica delivers custom software and AI automation for orthopedic clinics. Streamline surgical workflows, automate pre-op assessments, track patient outcomes, and reduce administrative burden by 35%.",
  keywords: [
    "orthopedic clinic software",
    "orthopedic practice management",
    "AI automation for orthopedics",
    "surgical workflow automation",
    "orthopedic patient outcome tracking",
    "pre-op assessment automation",
    "orthopedic billing software",
    "HIPAA compliant orthopedic software",
    "orthopedic EHR integration",
    "musculoskeletal practice software",
  ],
  alternates: {
    canonical: "https://opslogica.com/industries/orthopedic-clinics",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Orthopedic Clinic Software & AI Automation",
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
    "Custom software development and AI-powered automation solutions purpose-built for orthopedic clinics, including surgical workflow optimization, pre-op assessment automation, outcome tracking, and billing.",
};

const painPoints = [
  {
    title: "Complex Surgical Scheduling",
    description:
      "Coordinating OR availability, surgeon schedules, anesthesia teams, implant inventory, and patient prep creates a scheduling nightmare. Double-bookings and last-minute changes cost thousands in wasted OR time.",
  },
  {
    title: "Pre-Op & Post-Op Documentation Overload",
    description:
      "Surgeons and PAs spend 2-3 hours daily on pre-operative assessments, surgical notes, and post-op follow-up documentation. This administrative burden leads to burnout and reduces the number of patients you can treat.",
  },
  {
    title: "Implant & Supply Chain Tracking",
    description:
      "Managing implant inventories, lot numbers, vendor relationships, and usage reporting across procedures is manual and error-prone. Missing or wrong implants delay surgeries and increase costs.",
  },
  {
    title: "Outcome Tracking & Compliance",
    description:
      "Payers and registries increasingly demand Patient-Reported Outcome Measures (PROMs). Collecting, scoring, and reporting these metrics manually is unsustainable as volume grows.",
  },
];

const features = [
  {
    icon: CalendarCheck,
    title: "Surgical Scheduling Engine",
    description:
      "AI-optimized OR scheduling that coordinates surgeons, anesthesia, equipment, and patient prep in a single unified calendar.",
  },
  {
    icon: ClipboardList,
    title: "Automated Pre-Op Workflows",
    description:
      "Digital pre-op questionnaires, clearance tracking, and automated checklists that ensure every patient is surgery-ready.",
  },
  {
    icon: Activity,
    title: "Outcome Tracking & PROMs",
    description:
      "Automated collection and scoring of HOOS, KOOS, DASH, and VAS metrics with registry-ready reporting.",
  },
  {
    icon: Bot,
    title: "AI Clinical Documentation",
    description:
      "AI-assisted operative notes, discharge instructions, and follow-up orders generated from structured surgical data.",
  },
  {
    icon: ShieldCheck,
    title: "Implant Inventory Management",
    description:
      "Real-time tracking of implant stock, lot numbers, expiration dates, and usage with automatic reorder alerts.",
  },
  {
    icon: FileText,
    title: "Prior Authorization Automation",
    description:
      "Automated prior auth submission, status tracking, and appeal generation that cuts approval times from weeks to days.",
  },
];

const caseStudies = [
  {
    title: "PeakForm Orthopedics — 30% Cost Reduction",
    description:
      "We replaced three disconnected systems with a unified platform for this 6-surgeon orthopedic group. Operational costs dropped 30% in the first quarter and surgical scheduling conflicts were eliminated entirely.",
  },
  {
    title: "Summit Spine & Joint — 70% Faster Pre-Op Clearance",
    description:
      "Our automated pre-op workflow digitized clearance forms, lab orders, and imaging requests. Average pre-op clearance time dropped from 5 days to 1.5 days, reducing surgery cancellations by 45%.",
  },
];

const metrics = [
  { value: "30%", label: "Lower Operating Costs" },
  { value: "45%", label: "Fewer Surgery Cancellations" },
  { value: "70%", label: "Faster Pre-Op Clearance" },
  { value: "2.5x", label: "Faster PROMs Collection" },
];

const faqItems = [
  {
    question: "Do you integrate with orthopedic-specific EHR systems?",
    answer:
      "Yes. We integrate with Modernizing Medicine (ModMed), athenahealth, eClinicalWorks, NextGen, and other orthopedic-focused platforms. We also work with hospital EHRs like Epic and Cerner for practices affiliated with health systems.",
  },
  {
    question: "Can you automate Patient-Reported Outcome Measures (PROMs)?",
    answer:
      "Absolutely. We build automated PROMs collection workflows that send validated questionnaires (HOOS, KOOS, DASH, VAS, SF-36) to patients at the right intervals via SMS and email, score responses automatically, and generate registry-ready reports.",
  },
  {
    question: "How do you handle implant tracking and compliance?",
    answer:
      "Our platform tracks every implant from receipt to implantation, recording lot numbers, serial numbers, vendor details, and patient associations. This supports UDI compliance, recall management, and cost-per-case analytics.",
  },
  {
    question: "What is the typical ROI timeline for orthopedic practices?",
    answer:
      "Most orthopedic clients see measurable ROI within 60-90 days. The biggest early wins come from reduced surgery cancellations, faster pre-op clearance, and lower claim denial rates. Practices typically recover the full implementation cost within 4-6 months.",
  },
  {
    question: "Do you support ambulatory surgery center (ASC) workflows?",
    answer:
      "Yes. We build solutions for both office-based practices and ASCs, including block time management, case costing, implant consignment tracking, and compliance reporting required for ASC accreditation.",
  },
];

export default function OrthopedicClinicsPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6">
                <span className="badge-label">Orthopedic Clinics</span>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
                AI Automation &amp; Software Solutions for{" "}
                <span className="gradient-text">Orthopedic Clinics</span>
              </h1>
              <p className="mt-6 text-lg text-text-secondary md:text-xl">
                Optimize surgical workflows, automate pre-op assessments, track
                patient outcomes, and eliminate administrative bottlenecks with
                software designed for musculoskeletal practices.
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
            title="Running an Orthopedic Clinic in 2026 Means..."
            subtitle="High-volume surgical practices face unique operational complexities that generic software cannot address."
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
            title="How Opslogica Transforms Orthopedic Practices"
            subtitle="We engineer intelligent software that streamlines every touchpoint, from referral intake through post-surgical outcome tracking."
          />
          <div className="mt-12 space-y-6">
            <AnimatedSection>
              <div className="glass-card p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  Surgical Workflow Optimization
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Our AI-powered scheduling engine coordinates surgeon availability,
                  OR blocks, anesthesia teams, and implant requirements into a single
                  intelligent calendar. Automated conflict detection, case duration
                  prediction, and smart waitlist management eliminate double-bookings
                  and maximize OR utilization.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  Pre-Op & Post-Op Automation
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Digital pre-op checklists, automated medical clearance tracking,
                  patient education delivery, and post-op milestone monitoring
                  ensure every patient follows the optimal care pathway. Surgeons
                  get alerted only when intervention is needed, freeing hours of
                  documentation time daily.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  Revenue Cycle & Prior Authorization
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Automated prior authorization requests, real-time status
                  tracking, CPT code optimization, and appeal letter generation
                  slash the time between surgical decision and payer approval.
                  Our clients see prior auth turnaround cut from 14 days to under
                  3 days on average.
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
            title="Built for Orthopedic Workflows"
            subtitle="Every feature addresses the specific demands of musculoskeletal and surgical practices."
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
            title="How We've Helped Orthopedic Practices"
            subtitle="Real outcomes from real orthopedic clients."
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
              <span className="gradient-text">Orthopedic Practice</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              See how Opslogica can optimize your surgical workflows, automate
              pre-op processes, and track outcomes in a personalized 30-minute
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
            subtitle="Common questions from orthopedic practice administrators and surgeons."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}
