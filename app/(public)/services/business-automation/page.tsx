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
  Workflow,
  Search,
  Paintbrush,
  Cpu,
  Send,
  Clock,
  DollarSign,
  ShieldCheck,
  Database,
  GitBranch,
  BarChart3,
  Receipt,
  Users,
  Settings,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Business Process Automation Services",
  description:
    "Opslogica automates your business processes with CRM, ERP, and RPA solutions that eliminate bottlenecks, cut costs, and transform how your business runs. End-to-end automation from quote to cash.",
  keywords: [
    "business process automation",
    "RPA services",
    "CRM automation",
    "ERP implementation",
    "workflow automation services",
    "business automation company",
    "process automation for healthcare",
    "robotic process automation",
  ],
  alternates: {
    canonical: "https://opslogica.com/services/business-automation",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Business Process Automation Services",
  provider: {
    "@type": "Organization",
    name: "Opslogica",
    url: "https://opslogica.com",
  },
  description:
    "End-to-end business process automation using CRM, ERP, and RPA solutions. We streamline operations, eliminate manual bottlenecks, and transform how businesses run from quote to cash.",
  serviceType: "Business Process Automation",
  areaServed: ["US", "CA", "GB", "AU", "AE"],
  url: "https://opslogica.com/services/business-automation",
};

const faqs = [
  {
    question: "What business processes can be automated?",
    answer:
      "Almost any repetitive, rule-based process can be automated. Common examples include invoice processing, employee onboarding, inventory management, appointment scheduling, insurance verification, billing and collections, report generation, data migration, and customer follow-up sequences. We start with a process audit to identify the highest-ROI automation opportunities.",
  },
  {
    question: "What is the difference between RPA and business process automation?",
    answer:
      "RPA (Robotic Process Automation) uses software bots to mimic human actions on existing applications -- clicking buttons, copying data between systems, and filling forms. Business Process Automation (BPA) is broader: it redesigns and optimizes entire workflows, often combining RPA with system integrations, custom software, and AI to create seamless end-to-end processes.",
  },
  {
    question: "How do you choose between CRM, ERP, and custom solutions?",
    answer:
      "It depends on your needs and scale. For sales and customer management, we often start with CRM platforms like Salesforce or HubSpot. For operations-heavy businesses, ERP systems like NetSuite or Odoo make sense. When off-the-shelf platforms don't fit, we build custom solutions. Many clients end up with a hybrid approach that combines the best of each.",
  },
  {
    question: "Will automation disrupt our current operations?",
    answer:
      "No. We follow a phased implementation approach that runs new automated processes in parallel with existing ones until we verify they work correctly. There's always a transition period with fallback procedures. We train your team thoroughly and provide dedicated support during the switchover to ensure zero disruption.",
  },
  {
    question: "How do you measure the success of automation?",
    answer:
      "We define measurable KPIs before implementation, such as processing time per task, error rates, labor hours saved, cost per transaction, and customer satisfaction scores. We build monitoring dashboards that track these metrics in real time so you can see the exact ROI of every automated process.",
  },
];

const painPoints = [
  {
    icon: Clock,
    title: "Manual processes eating your margins",
    description:
      "Your team copies data between spreadsheets, sends follow-up emails by hand, and processes invoices one at a time. Every manual step is a cost that compounds as you grow.",
  },
  {
    icon: DollarSign,
    title: "Disconnected tools creating data silos",
    description:
      "Your CRM doesn't talk to your accounting software. Your scheduling tool doesn't sync with your EHR. Information lives in five different places and nobody has the complete picture.",
  },
  {
    icon: ShieldCheck,
    title: "Scaling requires hiring, not optimizing",
    description:
      "Every time business grows, you need more admin staff to handle the increased volume. You're scaling linearly when your competitors are scaling exponentially through automation.",
  },
];

const steps = [
  {
    icon: Search,
    title: "Process Audit",
    description:
      "We map every step of your core business processes, identify bottlenecks, quantify time and cost per task, and prioritize automation opportunities by ROI. You receive a detailed automation roadmap.",
  },
  {
    icon: Paintbrush,
    title: "Solution Design",
    description:
      "We architect the right combination of CRM, ERP, RPA, and custom integrations to automate your workflows. You approve the design before any development begins.",
  },
  {
    icon: Cpu,
    title: "Implementation",
    description:
      "We build and configure the automation layer, integrate your existing systems, migrate data, and run parallel testing to ensure everything works correctly before going live.",
  },
  {
    icon: Send,
    title: "Launch & Scale",
    description:
      "We deploy in phases, train your team, and monitor performance with real-time dashboards. Once core processes are running smoothly, we expand automation to additional workflows.",
  },
];

const useCases = [
  {
    title: "End-to-End Patient Billing",
    description:
      "An orthopedic practice needed to automate their billing workflow from insurance verification to claim submission to payment posting. We integrated their EHR, billing system, and clearinghouse into a single automated pipeline that reduced billing cycle time by 60% and increased first-pass claim acceptance to 96%.",
    industry: "Healthcare",
  },
  {
    title: "CRM-Driven Sales Automation",
    description:
      "A professional services firm was losing leads due to inconsistent follow-up. We implemented HubSpot CRM with automated lead scoring, email sequences, task assignment, and pipeline reporting. Qualified lead conversion improved by 35% in the first quarter.",
    industry: "Professional Services",
  },
  {
    title: "Inventory & Order Management",
    description:
      "A multi-location retailer needed to synchronize inventory across their warehouse, e-commerce store, and three physical locations. We built an automated inventory management system that eliminated overselling, reduced stockouts by 80%, and saved 20 hours per week in manual reconciliation.",
    industry: "Retail",
  },
];

const capabilities = [
  {
    icon: Database,
    title: "CRM Implementation & Automation",
    description:
      "Salesforce, HubSpot, and custom CRM solutions with automated lead scoring, email sequences, pipeline management, and reporting dashboards.",
  },
  {
    icon: GitBranch,
    title: "ERP Integration",
    description:
      "NetSuite, Odoo, and custom ERP integrations that connect finance, operations, HR, and supply chain into a single source of truth.",
  },
  {
    icon: Settings,
    title: "Robotic Process Automation (RPA)",
    description:
      "Software bots that automate repetitive tasks across your existing applications -- data entry, form filling, report generation, and cross-system data transfer.",
  },
  {
    icon: Receipt,
    title: "Billing & Invoicing Automation",
    description:
      "Automated billing workflows from quote generation to invoice delivery to payment collection, with exception handling and aging reports.",
  },
  {
    icon: Users,
    title: "Employee Onboarding Automation",
    description:
      "Automated onboarding workflows that handle document collection, system provisioning, training assignment, and compliance tracking.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics Automation",
    description:
      "Automated report generation, KPI dashboards, and scheduled data exports that give you real-time visibility into every business process.",
  },
];

const metrics = [
  { value: "60%", label: "Average reduction in process cycle time" },
  { value: "30%", label: "Typical operational cost savings" },
  { value: "80%", label: "Reduction in manual data entry errors" },
  { value: "20hrs", label: "Average weekly time saved per team" },
];

export default function BusinessAutomationPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          {
            name: "Business Automation",
            href: "/services/business-automation",
          },
        ]}
      />
      <JsonLd data={serviceSchema} />

      {/* ===== HERO ===== */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6">
                <span className="badge-label">Business Automation</span>
              </div>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl">
                Automate Your Business Processes.{" "}
                <span className="gradient-text">Eliminate Bottlenecks.</span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                Stop scaling by hiring. We implement CRM, ERP, and RPA solutions
                that connect your disconnected tools, automate your manual
                workflows, and transform your business from a collection of
                spreadsheets into a well-oiled machine.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-primary"
                >
                  Get a Process Automation Audit
                </Link>
                <Link
                  href="/case-studies"
                  className="btn-secondary"
                >
                  See Results
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
              title="Manual Processes Are Killing Your Growth"
              subtitle="You've outgrown spreadsheets and email chains, but you haven't outgrown the mindset. Here are the symptoms of a business that needs automation."
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

      {/* ===== CAPABILITIES ===== */}
      <section className="section-border bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <SectionHeader
              badge="What We Automate"
              title="Business Automation Solutions"
              subtitle="We connect your systems, automate your workflows, and give you real-time visibility into every process."
            />
          </AnimatedSection>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="flex h-full flex-col border border-border-subtle bg-white p-6 transition-colors duration-200 hover:border-text-primary">
                  <div className="mb-4 inline-flex self-start border border-border-subtle p-2">
                    <capability.icon className="h-6 w-6 text-text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-text-primary">
                    {capability.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {capability.description}
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
                <span className="badge-label">Our Approach</span>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
                Connected Systems,{" "}
                <span className="gradient-text">Streamlined Operations</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                We don&apos;t just automate individual tasks. We connect your
                entire technology ecosystem so data flows seamlessly from one
                system to the next. The result is a business that runs faster,
                costs less, and scales without adding headcount.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {[
                  "Connect CRM, ERP, accounting, and operational tools into one ecosystem",
                  "Automate lead-to-cash workflows from first contact to final payment",
                  "Eliminate duplicate data entry across all business systems",
                  "Real-time dashboards with KPIs for every business process",
                  "Automated exception handling and escalation rules",
                  "Phased rollout with parallel testing to ensure zero disruption",
                  "Ongoing optimization with quarterly process reviews",
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
              title="How We Automate Your Business"
              subtitle="A methodical four-phase approach that ensures every automation delivers measurable business value."
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
              title="Business Automation in Action"
              subtitle="See how process automation has transformed operations for businesses across healthcare, professional services, and retail."
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
              badge="Impact"
              title="The ROI of Business Automation"
              subtitle="Our automation projects pay for themselves within months, not years."
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
              subtitle="Common questions about our business process automation services."
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
            Ready to Automate Your{" "}
            <span className="gradient-text">Business Operations?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary">
            Get a free process automation audit. We&apos;ll map your workflows,
            identify the highest-ROI automation opportunities, and give you a
            clear implementation roadmap with expected cost savings.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Get Your Free Audit
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
