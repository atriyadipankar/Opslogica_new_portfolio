import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  CalendarCheck,
  ShieldCheck,
  FileText,
  Bot,
  CreditCard,
  Users,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FAQAccordion from "@/components/ui/FAQAccordion";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "AI Automation & Software Solutions for Dental Clinics",
  description:
    "Opslogica builds custom software and AI automation for dental clinics. Automate patient scheduling, insurance verification, treatment plans, and billing to reduce no-shows by 40% and cut admin overhead by 35%.",
  keywords: [
    "dental clinic software",
    "dental practice management software",
    "AI automation for dentists",
    "dental patient scheduling software",
    "dental insurance verification automation",
    "dental clinic billing software",
    "HIPAA compliant dental software",
    "dental practice automation",
    "Dentrix integration",
    "Open Dental automation",
  ],
  alternates: {
    canonical: "https://opslogica.com/industries/dental-clinics",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Dental Clinic Software & AI Automation",
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
    "Custom software development and AI-powered automation solutions purpose-built for dental clinics, including patient scheduling, insurance verification, treatment planning, and billing automation.",
};

const painPoints = [
  {
    title: "No-Shows & Last-Minute Cancellations",
    description:
      "Empty chairs cost your practice $200-$500 per missed appointment. Manual reminder calls eat up front-desk hours and still fail to prevent gaps in your schedule.",
  },
  {
    title: "Insurance Verification Bottlenecks",
    description:
      "Staff spend 15-20 minutes per patient verifying eligibility, benefits, and coverage details. Multiply that across 30+ daily patients and you lose an entire FTE to phone holds and portal logins.",
  },
  {
    title: "Treatment Plan Drop-Off",
    description:
      "Patients leave the chair agreeing to treatment but never schedule. Without automated follow-up sequences, case acceptance rates stagnate at 40-50% instead of 70%+.",
  },
  {
    title: "Billing Errors & Claim Denials",
    description:
      "Incorrect CDT codes, missing attachments, and incomplete narratives cause 10-15% of dental claims to be denied on first submission, delaying revenue by 30-90 days.",
  },
];

const features = [
  {
    icon: CalendarCheck,
    title: "Smart Scheduling",
    description:
      "AI-powered appointment booking with automated reminders via SMS, email, and voice that reduce no-shows by up to 40%.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Auto-Verification",
    description:
      "Real-time eligibility checks that verify patient coverage, benefits, and remaining maximums before the appointment.",
  },
  {
    icon: FileText,
    title: "Digital Treatment Plans",
    description:
      "Interactive treatment presentations patients can review on any device, with e-signature acceptance and payment plan options.",
  },
  {
    icon: Bot,
    title: "AI Patient Follow-Up",
    description:
      "Automated post-visit sequences that nurture unscheduled treatment, request reviews, and re-engage dormant patients.",
  },
  {
    icon: CreditCard,
    title: "Claims & Billing Automation",
    description:
      "Automated CDT code validation, attachment bundling, and electronic claim submission that cuts denials by 60%.",
  },
  {
    icon: Users,
    title: "Patient Portal",
    description:
      "HIPAA-compliant self-service portal for intake forms, appointment requests, payment history, and secure messaging.",
  },
];

const caseStudies = [
  {
    title: "Bright Smile Dental — 40% Fewer No-Shows",
    description:
      "We deployed an AI scheduling and reminder system for this 4-location dental group. Within 60 days, no-show rates dropped from 18% to 11%, recovering over $24,000 in monthly revenue.",
  },
  {
    title: "Lakewood Family Dentistry — 65% Faster Insurance Verification",
    description:
      "By automating insurance eligibility checks and benefit breakdowns, we freed up 22 staff-hours per week. The front desk now confirms coverage in under 30 seconds per patient.",
  },
];

const metrics = [
  { value: "40%", label: "Reduction in No-Shows" },
  { value: "35%", label: "Less Admin Overhead" },
  { value: "60%", label: "Fewer Claim Denials" },
  { value: "3x", label: "Faster Insurance Verification" },
];

const faqItems = [
  {
    question: "Does your software integrate with Dentrix and Open Dental?",
    answer:
      "Yes. We build custom integrations with all major dental PMS platforms including Dentrix, Open Dental, Eaglesoft, Curve Dental, and Denticon. We use their APIs and HL7 interfaces to sync patient data, appointments, and billing in real time.",
  },
  {
    question: "Is the patient portal HIPAA compliant?",
    answer:
      "Absolutely. All patient-facing features are built with HIPAA compliance from the ground up. We use AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls, full audit logging, and we sign a Business Associate Agreement (BAA) with every client.",
  },
  {
    question: "How long does implementation take for a typical dental practice?",
    answer:
      "A standard implementation takes 4-8 weeks depending on the number of locations and integrations required. We follow an agile approach with bi-weekly demos so you see progress from day one. Most practices go live within 6 weeks.",
  },
  {
    question: "Can you automate patient recall and reactivation campaigns?",
    answer:
      "Yes. Our AI-powered patient engagement engine automatically identifies patients overdue for hygiene, follow-up treatment, or periodic exams and sends personalized outreach via SMS, email, and voice. Practices typically see a 25-30% reactivation rate.",
  },
  {
    question: "What does onboarding and training look like?",
    answer:
      "We provide hands-on training for your entire team, including front desk, clinical staff, and office managers. Training includes live workshops, recorded walkthroughs, and a dedicated support channel. Most teams are fully proficient within 1-2 weeks.",
  },
];

export default function DentalClinicsPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <section className="section-padding">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6">
                <span className="badge-label">Dental Clinics</span>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
                AI Automation &amp; Software Solutions for{" "}
                <span className="gradient-text">Dental Clinics</span>
              </h1>
              <p className="mt-6 text-lg text-text-secondary md:text-xl">
                Reduce no-shows, automate insurance verification, digitize
                treatment plans, and streamline billing. Purpose-built software
                that lets your team focus on patient care, not paperwork.
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
            title="Running a Dental Clinic in 2026 Means..."
            subtitle="Modern dental practices face mounting operational pressures that manual processes cannot keep up with."
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
            title="How Opslogica Transforms Dental Practices"
            subtitle="We build intelligent software that automates the most time-consuming workflows in your practice, from the moment a patient books to the final claim payment."
          />
          <div className="mt-12 space-y-6">
            <AnimatedSection>
              <div className="glass-card p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  Appointment Automation & Patient Communication
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Our AI scheduling engine fills open slots, sends multi-channel
                  reminders (SMS, email, voice), confirms appointments
                  automatically, and manages waitlists. Patients can book, reschedule,
                  and cancel online, reducing phone call volume by 50% and no-shows
                  by 40%.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  Insurance Verification & Revenue Cycle
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We automate real-time eligibility checks, benefit breakdowns,
                  claim scrubbing, electronic attachment submission, and ERA
                  posting. Your team no longer spends hours on hold with insurance
                  carriers. Claim denial rates drop by 60% and first-pass
                  acceptance rates climb above 95%.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="glass-card p-6 md:p-8">
                <h3 className="mb-3 text-xl font-semibold tracking-tight text-text-primary">
                  Treatment Planning & Case Acceptance
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Digital treatment presentations with visual aids, cost breakdowns,
                  financing options, and e-signatures make it easy for patients to
                  say yes. Automated follow-up sequences nurture undecided patients
                  and drive case acceptance rates above 70%.
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
            title="Built for Dental Workflows"
            subtitle="Every feature is designed around the way dental practices actually operate."
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
            title="How We've Helped Dental Practices"
            subtitle="Real outcomes from real dental clients."
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
              <span className="gradient-text">Dental Practice</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              See exactly how Opslogica can automate your scheduling, insurance
              verification, billing, and patient engagement in a personalized
              30-minute walkthrough.
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
            subtitle="Common questions from dental practice owners and office managers."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}
