import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  CalendarCheck,
  ShieldCheck,
  FileText,
  Bot,
  Stethoscope,
  BarChart3,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "AI Automation & Software Solutions for Physician Practices",
  description:
    "Opslogica delivers custom software and AI automation for physician practices. EHR integrations, AI-assisted diagnostics support, automated billing, and patient engagement tools that let doctors focus on care.",
  keywords: [
    "physician practice software",
    "medical practice management software",
    "AI automation for doctors",
    "EHR integration services",
    "physician billing automation",
    "medical practice AI tools",
    "HIPAA compliant medical software",
    "primary care practice automation",
    "physician workflow optimization",
    "medical office automation",
  ],
  alternates: {
    canonical: "https://opslogica.com/industries/physician-practices",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Physician Practice Software & AI Automation",
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
    "Custom software development and AI-powered automation for physician practices, including EHR integration, AI-assisted diagnostics support, automated billing workflows, and patient engagement systems.",
};

const painPoints = [
  {
    title: "EHR Fatigue & Documentation Overload",
    description:
      "Physicians spend 2+ hours daily on EHR documentation outside of patient encounters. Clunky interfaces, excessive clicks, and redundant data entry contribute to the #1 cause of physician burnout.",
  },
  {
    title: "Revenue Leakage from Undercoding",
    description:
      "Studies show physicians undercode 20-30% of office visits, leaving significant revenue on the table. Without AI-assisted coding suggestions, complex E/M level selection leads to conservative coding habits.",
  },
  {
    title: "Referral Management Black Hole",
    description:
      "Referrals get lost between ordering and scheduling, especially across health systems. Patients fall through the cracks, outcomes suffer, and your practice loses downstream revenue.",
  },
  {
    title: "Patient Engagement & Chronic Care Gaps",
    description:
      "Managing care plans for chronic disease patients (diabetes, hypertension, COPD) between visits requires proactive outreach that most practices lack the bandwidth to sustain manually.",
  },
];

const features = [
  {
    icon: Bot,
    title: "AI Clinical Documentation",
    description:
      "Ambient AI that drafts visit notes, captures patient history, and generates after-visit summaries from natural physician-patient conversations.",
  },
  {
    icon: Stethoscope,
    title: "AI Diagnostics Support",
    description:
      "Decision support tools that surface differential diagnoses, flag drug interactions, and recommend evidence-based guidelines at the point of care.",
  },
  {
    icon: CalendarCheck,
    title: "Smart Scheduling & Reminders",
    description:
      "AI-optimized scheduling that maximizes provider utilization, reduces gaps, and sends automated multi-channel appointment reminders.",
  },
  {
    icon: BarChart3,
    title: "Revenue Cycle Intelligence",
    description:
      "AI-powered E/M coding suggestions, claim scrubbing, denial prediction, and real-time RCM analytics dashboards.",
  },
  {
    icon: FileText,
    title: "Referral Tracking & Coordination",
    description:
      "Automated referral creation, fax/electronic routing, status tracking, and closed-loop follow-up to ensure no patient falls through the cracks.",
  },
  {
    icon: ShieldCheck,
    title: "Chronic Care Management",
    description:
      "Automated care plan delivery, remote patient monitoring integration, and CCM billing code tracking for reimbursable chronic care services.",
  },
];

const caseStudies = [
  {
    title: "Metro Physician Group — 35% Less Documentation Time",
    description:
      "We deployed AI-assisted ambient documentation for this 8-physician internal medicine group. Doctors reclaimed an average of 1.5 hours per day, and patient throughput increased by 15% without extending office hours.",
  },
  {
    title: "Valley Family Medicine — $180K Annual Revenue Recovery",
    description:
      "Our AI coding assistant identified systematic undercoding across the practice. By suggesting appropriate E/M levels with supporting documentation, we recovered $180,000 in annual revenue within the first year.",
  },
];

const metrics = [
  { value: "35%", label: "Less Documentation Time" },
  { value: "$180K", label: "Annual Revenue Recovered" },
  { value: "40%", label: "Fewer Claim Denials" },
  { value: "15%", label: "Higher Patient Throughput" },
];

const faqItems = [
  {
    question: "Which EHR systems do you integrate with?",
    answer:
      "We integrate with all major EHR platforms including Epic, Cerner (Oracle Health), athenahealth, eClinicalWorks, NextGen, Allscripts, DrChrono, and Practice Fusion. We use HL7 FHIR, REST APIs, and custom middleware to ensure seamless bi-directional data flow.",
  },
  {
    question: "How does ambient AI documentation work in practice?",
    answer:
      "With patient consent, our AI listens to the physician-patient conversation during the encounter and drafts a complete visit note including HPI, ROS, assessment, and plan. The physician reviews and signs the note post-visit. Most physicians report saving 15-20 minutes per patient encounter.",
  },
  {
    question: "Is your AI coding tool compliant with CMS guidelines?",
    answer:
      "Yes. Our coding suggestions are based on the latest CMS E/M guidelines (2025 updates), CPT coding rules, and specialty-specific documentation requirements. The tool provides transparent rationale for each coding recommendation so physicians maintain full control and compliance.",
  },
  {
    question: "Can you help with MIPS and quality reporting?",
    answer:
      "Absolutely. We automate MIPS quality measure tracking, Promoting Interoperability reporting, and Improvement Activities documentation. Our dashboards give you real-time visibility into your MIPS composite score and highlight gaps before the reporting deadline.",
  },
  {
    question: "What does implementation look like for a multi-location practice?",
    answer:
      "We follow a phased rollout approach, starting with one location as a pilot, refining workflows based on provider feedback, and then expanding to remaining locations. Typical multi-location implementations take 8-12 weeks. We provide on-site training, EHR workflow customization, and a dedicated support channel.",
  },
];

export default function PhysicianPracticesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6">
                <span className="badge-label">Physician Practices</span>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
                AI Automation &amp; Software Solutions for{" "}
                <span className="gradient-text">Physician Practices</span>
              </h1>
              <p className="mt-6 text-lg text-text-secondary md:text-xl">
                EHR integrations, AI-assisted clinical documentation, intelligent
                coding, and automated billing workflows that let physicians focus
                on what matters most: patient care.
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
            title="Running a Physician Practice in 2026 Means..."
            subtitle="Independent and group physician practices face mounting administrative pressure that takes time away from patient care."
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
            title="How Opslogica Transforms Physician Practices"
            subtitle="We build AI-powered tools that reduce the administrative burden of practicing medicine so physicians can spend more time with patients."
          />
          <div className="mt-12 space-y-6">
            <AnimatedSection>
              <div className="glass-card p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  AI-Powered Clinical Documentation
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Our ambient AI documentation system captures the physician-patient
                  conversation and generates structured visit notes including HPI,
                  review of systems, physical exam findings, assessment, and plan.
                  Physicians review and sign instead of type, saving 1-2 hours daily
                  and reducing after-hours documentation to near zero.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  Revenue Cycle Optimization
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Our AI analyzes documentation in real time to suggest the most
                  appropriate E/M level, flag missing elements, and identify
                  opportunities for additional billable services (AWV, CCM, RPM,
                  TCM). Automated claim scrubbing and denial prediction reduce
                  first-pass denials by 40% and accelerate reimbursement.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  Referral & Care Coordination
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Our referral management platform creates, routes, and tracks
                  referrals electronically, eliminating fax-and-forget workflows.
                  Automated follow-up ensures patients schedule with specialists,
                  and closed-loop reporting gives referring physicians visibility
                  into specialist findings and recommendations.
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
            title="Built for Physician Workflows"
            subtitle="Every feature is designed to reduce clicks, save time, and improve clinical and financial outcomes."
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
            title="How We've Helped Physician Practices"
            subtitle="Real outcomes from real physician clients."
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
              <span className="gradient-text">Physician Practice</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              See how Opslogica can automate your documentation, optimize coding,
              and streamline operations in a personalized 30-minute walkthrough.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Schedule Your Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services/business-automation" className="btn-secondary">
                Learn About Business Automation
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
            subtitle="Common questions from physicians and practice administrators."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}
