import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  CalendarCheck,
  ShieldCheck,
  FileText,
  Bot,
  Video,
  Heart,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "AI Automation & Software Solutions for Psychology Practices",
  description:
    "Opslogica builds HIPAA-compliant teletherapy platforms, automated session documentation, and patient engagement tools for psychology and mental health practices. Reduce admin time by 40% and improve patient retention.",
  keywords: [
    "psychology practice software",
    "mental health practice management",
    "AI automation for therapists",
    "HIPAA compliant teletherapy platform",
    "therapy session notes automation",
    "mental health billing software",
    "psychology practice EHR",
    "behavioral health software",
    "teletherapy software development",
    "psychologist practice automation",
  ],
  alternates: {
    canonical: "https://opslogica.com/industries/psychology-practices",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Psychology Practice Software & AI Automation",
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
    "Custom software development and AI-powered automation for psychology and mental health practices, including HIPAA-compliant teletherapy, automated session notes, patient engagement, and billing.",
};

const painPoints = [
  {
    title: "Session Documentation Burnout",
    description:
      "Therapists spend 30-60 minutes after each session writing clinical notes, treatment plans, and progress updates. With 6-8 sessions daily, documentation steals hours from patient care and personal time.",
  },
  {
    title: "No-Shows & Late Cancellations",
    description:
      "Mental health practices experience 20-30% no-show rates, the highest of any medical specialty. Each missed session represents $150-$300 in lost revenue and a gap in the patient's therapeutic continuity.",
  },
  {
    title: "Insurance & Billing Complexity",
    description:
      "Behavioral health billing codes (CPT 90834, 90837, 90847) have strict time-based requirements. Incorrect coding, missing modifiers, and authorization lapses lead to 15-20% claim denial rates.",
  },
  {
    title: "Patient Engagement Between Sessions",
    description:
      "Therapeutic progress depends on what happens between sessions. Without digital tools for homework assignments, mood tracking, and crisis resources, patients disengage between appointments.",
  },
];

const features = [
  {
    icon: Video,
    title: "HIPAA Teletherapy Platform",
    description:
      "End-to-end encrypted video sessions with virtual waiting room, screen sharing, whiteboard tools, and session recording with patient consent.",
  },
  {
    icon: Bot,
    title: "AI Session Documentation",
    description:
      "AI-assisted progress notes, treatment plan updates, and DAP/SOAP notes generated from session summaries in under 2 minutes.",
  },
  {
    icon: CalendarCheck,
    title: "Smart Scheduling",
    description:
      "Online booking with recurring session support, automated reminders, waitlist management, and no-show prediction alerts.",
  },
  {
    icon: Heart,
    title: "Patient Engagement Tools",
    description:
      "Between-session homework delivery, mood tracking journals, crisis resource access, and secure therapist-patient messaging.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance & Superbill Automation",
    description:
      "Automated CPT code selection, superbill generation, electronic claim submission, and out-of-network benefit verification.",
  },
  {
    icon: FileText,
    title: "Intake & Assessment Forms",
    description:
      "Digital PHQ-9, GAD-7, PCL-5, and custom intake forms with automated scoring, risk flagging, and EHR integration.",
  },
];

const caseStudies = [
  {
    title: "Mindwell Behavioral Health — 50% Faster Documentation",
    description:
      "We deployed AI-assisted clinical notes for this 12-therapist group practice. Documentation time dropped from 45 minutes to under 20 minutes per session, and therapist satisfaction scores increased by 35%.",
  },
  {
    title: "ClearPath Counseling — 22% Fewer No-Shows",
    description:
      "Our multi-channel reminder system with predictive no-show alerts helped this solo practice reduce missed appointments from 28% to 6%. Annual recovered revenue exceeded $38,000.",
  },
];

const metrics = [
  { value: "50%", label: "Faster Session Documentation" },
  { value: "22%", label: "Reduction in No-Shows" },
  { value: "40%", label: "Less Admin Time" },
  { value: "95%", label: "Patient Satisfaction Rate" },
];

const faqItems = [
  {
    question: "Is your teletherapy platform truly HIPAA compliant?",
    answer:
      "Yes. Our platform uses AES-256 encryption at rest, TLS 1.3 in transit, and is hosted on HIPAA-compliant infrastructure with signed Business Associate Agreements. We also support session recording with explicit patient consent, and all recordings are encrypted and stored in compliance with state and federal regulations.",
  },
  {
    question: "How does AI session documentation work?",
    answer:
      "After each session, the therapist provides a brief structured summary or voice note. Our AI generates a complete DAP, SOAP, or BIRP note with appropriate clinical language, treatment goals, and progress indicators. The therapist reviews, edits if needed, and approves in under 2 minutes. The AI never records sessions without consent.",
  },
  {
    question: "Can you integrate with our existing EHR system?",
    answer:
      "Yes. We integrate with TherapyNotes, SimplePractice, Jane App, Valant, and other behavioral health EHRs. We can also connect to general-purpose systems like athenahealth and eClinicalWorks via their APIs.",
  },
  {
    question: "Do you support group therapy and couples session scheduling?",
    answer:
      "Absolutely. Our scheduling system supports individual, couples, family, and group therapy sessions with distinct booking rules, duration settings, and billing codes for each modality. Group sessions support automated attendance tracking and per-participant billing.",
  },
  {
    question: "What about patient privacy beyond HIPAA?",
    answer:
      "We go beyond HIPAA minimum requirements. Our platform supports anonymous booking options for sensitive populations, discreet appointment reminders that never mention the practice type, and granular consent management for research and outcome data. We also comply with state-specific mental health privacy laws like California's Lanterman-Petris-Short Act.",
  },
];

export default function PsychologyPracticesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6">
                <span className="badge-label">Psychology Practices</span>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
                AI Automation &amp; Software Solutions for{" "}
                <span className="gradient-text">Psychology Practices</span>
              </h1>
              <p className="mt-6 text-lg text-text-secondary md:text-xl">
                HIPAA-compliant teletherapy, AI-powered session documentation,
                and patient engagement tools that give therapists their time back
                and keep patients on track between sessions.
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
            title="Running a Psychology Practice in 2026 Means..."
            subtitle="Mental health providers face unique pressures around documentation, no-shows, and maintaining therapeutic engagement."
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
            title="How Opslogica Transforms Psychology Practices"
            subtitle="We build secure, therapist-friendly tools that automate administration and enhance the therapeutic relationship."
          />
          <div className="mt-12 space-y-6">
            <AnimatedSection>
              <div className="glass-card p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  Teletherapy & Virtual Care
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Our HIPAA-compliant video platform provides a seamless virtual
                  therapy experience with virtual waiting rooms, in-session tools
                  (whiteboard, screen sharing, worksheets), and optional session
                  recording with patient consent. Therapists can transition between
                  in-person and virtual modalities without switching platforms.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  AI-Powered Clinical Documentation
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Our AI documentation engine transforms brief session summaries
                  into complete clinical notes in DAP, SOAP, or BIRP format. It
                  learns each therapist's documentation style, suggests appropriate
                  clinical language, and auto-populates treatment goals and progress
                  indicators. Documentation time drops from 45 minutes to under 10.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  Patient Engagement & Outcome Tracking
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Between-session tools keep patients engaged with homework
                  delivery, mood tracking, journaling prompts, and crisis
                  resources. Automated PHQ-9 and GAD-7 assessments at configurable
                  intervals let therapists track clinical progress quantitatively,
                  and patients see their own improvement over time.
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
            title="Built for Mental Health Workflows"
            subtitle="Every feature respects the sensitivity and clinical requirements of behavioral health care."
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
            title="How We've Helped Mental Health Practices"
            subtitle="Real outcomes from real behavioral health clients."
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
              <span className="gradient-text">Psychology Practice</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              See how Opslogica can automate your documentation, reduce no-shows,
              and enhance patient engagement in a personalized 30-minute
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
            subtitle="Common questions from therapists, psychologists, and practice managers."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}
