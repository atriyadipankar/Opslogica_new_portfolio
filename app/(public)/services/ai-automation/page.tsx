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
  Bot,
  Search,
  Paintbrush,
  Cpu,
  Send,
  Clock,
  DollarSign,
  ShieldCheck,
  MessageSquare,
  Zap,
  BrainCircuit,
  FileText,
  CalendarCheck,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation for Small Business",
  description:
    "Opslogica builds AI automation solutions that save time and cut costs. Intelligent chatbots, workflow automation, LLM integration, document processing, and predictive analytics for healthcare and local businesses.",
  keywords: [
    "AI automation for small business",
    "AI chatbot for business",
    "workflow automation AI",
    "LLM integration services",
    "AI document processing",
    "intelligent automation healthcare",
    "business AI solutions",
    "ChatGPT integration for business",
  ],
  alternates: {
    canonical: "https://opslogica.com/services/ai-automation",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Automation for Small Business",
  provider: {
    "@type": "Organization",
    name: "Opslogica",
    url: "https://opslogica.com",
  },
  description:
    "AI-powered automation solutions including intelligent chatbots, workflow automation, LLM integration, and document processing that help businesses save time, reduce errors, and cut operational costs.",
  serviceType: "AI Automation",
  areaServed: ["US", "CA", "GB", "AU", "AE"],
  url: "https://opslogica.com/services/ai-automation",
};

const faqs = [
  {
    question: "What is AI automation and how is it different from regular automation?",
    answer:
      "Traditional automation follows rigid, predefined rules (if X, then Y). AI automation uses machine learning and natural language processing to handle unstructured data, make decisions in ambiguous situations, learn from patterns, and improve over time. It can read documents, understand customer questions, predict outcomes, and adapt to new scenarios without being explicitly programmed for each one.",
  },
  {
    question: "How much does it cost to implement AI automation?",
    answer:
      "Costs vary based on complexity. A focused AI chatbot integration can start at $5,000-$15,000, while a comprehensive AI-powered workflow automation system typically ranges from $25,000-$75,000. We always start with an ROI analysis to ensure the investment pays for itself within 3-6 months through labor savings and efficiency gains.",
  },
  {
    question: "Will AI automation replace my employees?",
    answer:
      "No. AI automation is designed to augment your team, not replace it. It handles repetitive, time-consuming tasks like data entry, scheduling, and document processing so your team can focus on high-value work that requires human judgment, creativity, and empathy. Most clients reallocate freed-up staff time to revenue-generating activities.",
  },
  {
    question: "Is my business data safe with AI automation?",
    answer:
      "Absolutely. We implement enterprise-grade security including end-to-end encryption, role-based access controls, data anonymization where appropriate, and compliance with HIPAA, SOC 2, and GDPR requirements. We can deploy AI models on your own infrastructure if data sovereignty is a concern.",
  },
  {
    question: "How long does it take to implement AI automation?",
    answer:
      "A single-purpose AI solution like a customer support chatbot can be deployed in 2-4 weeks. Multi-process automation systems typically take 6-12 weeks. We follow a phased approach, deploying quick wins first so you see ROI early while building toward a comprehensive automation ecosystem.",
  },
];

const painPoints = [
  {
    icon: Clock,
    title: "Staff drowning in repetitive tasks",
    description:
      "Your team spends hours every day on data entry, scheduling, email responses, and document processing. These tasks are essential but they don't generate revenue and they burn out your best people.",
  },
  {
    icon: DollarSign,
    title: "Rising labor costs outpacing revenue",
    description:
      "Every new customer means more admin work, but hiring more staff isn't sustainable. You need to serve more customers without proportionally increasing headcount and overhead.",
  },
  {
    icon: ShieldCheck,
    title: "Human errors causing costly mistakes",
    description:
      "Manual data handling leads to typos, missed appointments, incorrect billing, and compliance gaps. Each error costs money to fix and erodes customer trust.",
  },
];

const steps = [
  {
    icon: Search,
    title: "Audit & Identify",
    description:
      "We map your workflows and identify the processes with the highest automation ROI. You'll receive a prioritized automation roadmap with expected time and cost savings for each opportunity.",
  },
  {
    icon: Paintbrush,
    title: "Design & Prototype",
    description:
      "We design the AI solution architecture, select the right models and tools, and build a working prototype. You test it with real data and provide feedback before we scale it.",
  },
  {
    icon: Cpu,
    title: "Build & Integrate",
    description:
      "We build the production system and integrate it with your existing tools -- CRMs, EHRs, email, calendars, payment systems. The AI learns from your data and improves continuously.",
  },
  {
    icon: Send,
    title: "Deploy & Optimize",
    description:
      "We deploy, train your team, and monitor performance. Our AI systems include feedback loops that automatically improve accuracy over time. We provide ongoing support and model tuning.",
  },
];

const useCases = [
  {
    title: "AI-Powered Patient Scheduling",
    description:
      "A dental clinic automated their appointment scheduling with an AI chatbot that handles booking, rescheduling, and reminders via text and web chat. No-shows dropped by 40% and front-desk staff reclaimed 3 hours per day.",
    industry: "Healthcare",
  },
  {
    title: "Intelligent Document Processing",
    description:
      "A pathology lab automated the extraction and classification of data from referral forms, insurance documents, and lab reports. Processing time dropped from 15 minutes per document to under 30 seconds with 98% accuracy.",
    industry: "Diagnostics",
  },
  {
    title: "AI Customer Support Agent",
    description:
      "An e-commerce company deployed an LLM-powered support agent that resolves 75% of customer inquiries without human intervention. Average response time went from 4 hours to under 30 seconds, and customer satisfaction scores improved by 25%.",
    industry: "E-Commerce",
  },
];

const capabilities = [
  {
    icon: MessageSquare,
    title: "AI Chatbots & Virtual Assistants",
    description:
      "Customer-facing chatbots powered by GPT-4, Claude, and custom LLMs that handle support, scheduling, and lead qualification 24/7.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "AI-driven automation of multi-step business processes including approvals, data routing, notifications, and exception handling.",
  },
  {
    icon: BrainCircuit,
    title: "LLM Integration",
    description:
      "Custom integrations with OpenAI, Anthropic, and open-source models for content generation, data analysis, and decision support.",
  },
  {
    icon: FileText,
    title: "Document Processing",
    description:
      "Automated extraction, classification, and routing of data from invoices, forms, contracts, and medical records using AI vision and NLP.",
  },
  {
    icon: CalendarCheck,
    title: "Intelligent Scheduling",
    description:
      "AI-powered scheduling that considers availability, preferences, travel time, and historical patterns to optimize appointment booking.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description:
      "Machine learning models that forecast demand, identify churn risk, predict equipment failures, and surface revenue opportunities.",
  },
];

const metrics = [
  { value: "75%", label: "Reduction in manual processing time" },
  { value: "40%", label: "Decrease in missed appointments" },
  { value: "3-6mo", label: "Typical ROI payback period" },
  { value: "98%", label: "AI document processing accuracy" },
];

export default function AIAutomationPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "AI Automation", href: "/services/ai-automation" },
        ]}
      />
      <JsonLd data={serviceSchema} />

      {/* ===== HERO ===== */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6">
                <span className="badge-label">AI Automation</span>
              </div>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl">
                AI Automation Solutions That{" "}
                <span className="gradient-text">Save Time and Cut Costs</span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
                Stop losing hours to repetitive tasks. Our AI automation
                solutions handle scheduling, document processing, customer
                support, and workflow management so your team can focus on what
                actually grows your business.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-primary"
                >
                  Get an AI Automation Audit
                </Link>
                <Link
                  href="/case-studies"
                  className="btn-secondary"
                >
                  See AI in Action
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
              title="Your Team Is Drowning in Busywork"
              subtitle="The biggest drain on your business isn't a lack of talent. It's talented people spending their time on tasks a machine should handle."
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
              badge="What We Build"
              title="AI Automation Capabilities"
              subtitle="From chatbots to predictive analytics, we build intelligent systems that handle the work your team shouldn't have to."
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
                AI That Works With{" "}
                <span className="gradient-text">Your Existing Systems</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-text-secondary">
                We don&apos;t rip and replace your tools. We build AI layers
                that connect to your existing software, learn from your data, and
                automate your most time-consuming workflows without disrupting
                what already works.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {[
                  "Integrates with your existing CRM, EHR, and business tools",
                  "Uses leading AI models (OpenAI, Anthropic, open-source LLMs)",
                  "Custom-trained on your business data for maximum accuracy",
                  "HIPAA, SOC 2, and GDPR compliant security architecture",
                  "Human-in-the-loop fallbacks for edge cases and exceptions",
                  "Continuous learning with feedback loops that improve over time",
                  "Transparent pricing with clear ROI projections before you commit",
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
              title="How We Implement AI Automation"
              subtitle="A structured approach that delivers quick wins early while building toward comprehensive intelligent automation."
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
              title="AI Automation in Action"
              subtitle="See how our AI solutions have transformed operations for businesses in healthcare, diagnostics, and e-commerce."
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
              title="The ROI of AI Automation"
              subtitle="Our clients see measurable returns within weeks, not years."
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
              subtitle="Common questions about AI automation for your business."
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
            Ready to Put AI to Work{" "}
            <span className="gradient-text">For Your Business?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary">
            Get a free AI automation audit. We&apos;ll identify the top 3
            processes in your business where AI can save the most time and money,
            and show you exactly how it works.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary"
            >
              Get Your Free AI Audit
            </Link>
            <Link
              href="/services/business-automation"
              className="btn-secondary"
            >
              Business Automation
              <ArrowRight className="ml-2 inline-block h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
