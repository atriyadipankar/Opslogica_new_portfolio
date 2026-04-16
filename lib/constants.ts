// ---------------------------------------------------------------------------
// Site Configuration
// ---------------------------------------------------------------------------

export const SITE_CONFIG = {
  name: "Opslogica",
  tagline: "Automate. Accelerate. Dominate.",
  url: "https://opslogica.com",
  description:
    "Opslogica delivers custom software development and AI-powered automation solutions that help businesses automate workflows, accelerate growth, and dominate their markets.",
  social: {
    twitter: "https://twitter.com/opslogica",
    linkedin: "https://linkedin.com/company/opslogica",
    github: "https://github.com/opslogica",
    youtube: "https://youtube.com/@opslogica",
  },
} as const;

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Software Development", href: "/services/software-development" },
      { label: "Website Development", href: "/services/website-development" },
      { label: "AI Automation", href: "/services/ai-automation" },
      { label: "Business Automation", href: "/services/business-automation" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Dental Clinics", href: "/industries/dental-clinics" },
      { label: "Orthopedic Clinics", href: "/industries/orthopedic-clinics" },
      { label: "Psychology Practices", href: "/industries/psychology-practices" },
      { label: "Physician Practices", href: "/industries/physician-practices" },
      { label: "Pathological Labs", href: "/industries/pathological-labs" },
      { label: "Dermatology Clinics", href: "/industries/dermatology-clinics" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: "software-development",
    title: "Software Development",
    slug: "software-development",
    description:
      "Custom web and mobile applications engineered with modern frameworks, designed to scale with your business and deliver exceptional user experiences across every device.",
    icon: "Code",
  },
  {
    id: "website-development",
    title: "Website Development",
    slug: "website-development",
    description:
      "High-performance websites built with Next.js, WordPress, and Shopify that convert visitors into customers with stunning design and blazing-fast load times.",
    icon: "Globe",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    slug: "ai-automation",
    description:
      "Intelligent chatbots, workflow automation, and LLM integration that eliminate repetitive tasks, reduce errors, and free your team to focus on growth.",
    icon: "Bot",
  },
  {
    id: "business-automation",
    title: "Business Process Automation",
    slug: "business-automation",
    description:
      "End-to-end CRM, ERP, and RPA solutions that streamline operations, cut costs, and transform how your business runs from quote to cash.",
    icon: "Workflow",
  },
];

// ---------------------------------------------------------------------------
// Industries (Healthcare Verticals)
// ---------------------------------------------------------------------------

export interface Industry {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
}

export const INDUSTRIES: Industry[] = [
  {
    id: "dental-clinics",
    title: "Dental Clinics",
    slug: "dental-clinics",
    description:
      "Streamline patient scheduling, automate insurance verification, and digitize treatment plans for modern dental practices.",
    icon: "Smile",
  },
  {
    id: "orthopedic-clinics",
    title: "Orthopedic Clinics",
    slug: "orthopedic-clinics",
    description:
      "Optimize surgical workflows, automate pre-op assessments, and enhance patient outcome tracking for orthopedic practices.",
    icon: "Bone",
  },
  {
    id: "psychology-practices",
    title: "Psychology Practices",
    slug: "psychology-practices",
    description:
      "HIPAA-compliant teletherapy platforms, automated session notes, and patient engagement tools for mental health providers.",
    icon: "Brain",
  },
  {
    id: "physician-practices",
    title: "Physician Practices",
    slug: "physician-practices",
    description:
      "EHR integrations, AI-assisted diagnostics support, and automated billing workflows that let physicians focus on patient care.",
    icon: "Stethoscope",
  },
  {
    id: "pathological-labs",
    title: "Pathological Labs",
    slug: "pathological-labs",
    description:
      "Lab information management systems, automated specimen tracking, and AI-powered diagnostic analysis for pathology laboratories.",
    icon: "Microscope",
  },
  {
    id: "dermatology-clinics",
    title: "Dermatology Clinics",
    slug: "dermatology-clinics",
    description:
      "AI-assisted skin analysis, automated patient intake forms, and telemedicine solutions purpose-built for dermatology practices.",
    icon: "ScanFace",
  },
];

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "Opslogica transformed our patient scheduling with an AI-driven system that cut no-shows by 40%. Their team understood our clinical workflow from day one.",
    author: "Dr. Sarah Mitchell",
    role: "Practice Owner",
    company: "Bright Smile Dental",
  },
  {
    id: "testimonial-2",
    quote:
      "We replaced three disconnected tools with a single custom platform built by Opslogica. Our operational costs dropped by 30% in the first quarter.",
    author: "James Henderson",
    role: "COO",
    company: "PeakForm Orthopedics",
  },
  {
    id: "testimonial-3",
    quote:
      "The HIPAA-compliant teletherapy platform they delivered exceeded our expectations. Our therapists love it and patient satisfaction scores are at an all-time high.",
    author: "Dr. Emily Carter",
    role: "Clinical Director",
    company: "Mindwell Behavioral Health",
  },
  {
    id: "testimonial-4",
    quote:
      "Opslogica's data analytics dashboards gave us real-time visibility into lab turnaround times. We identified bottlenecks we didn't even know existed.",
    author: "Raj Patel",
    role: "Lab Director",
    company: "Precision Path Labs",
  },
  {
    id: "testimonial-5",
    quote:
      "Their cloud migration was seamless. Zero downtime, improved performance, and our monthly infrastructure costs were cut nearly in half.",
    author: "Laura Kim",
    role: "CTO",
    company: "DermaCare Clinics",
  },
  {
    id: "testimonial-6",
    quote:
      "From initial consultation to delivery, Opslogica was professional, transparent, and technically brilliant. They are our go-to technology partner.",
    author: "Dr. Michael Torres",
    role: "Managing Partner",
    company: "Metro Physician Group",
  },
];

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { id: "stat-projects", value: "50+", label: "Projects Delivered" },
  { id: "stat-industries", value: "10+", label: "Industries Served" },
  { id: "stat-countries", value: "5", label: "Countries" },
  { id: "stat-satisfaction", value: "98%", label: "Client Satisfaction" },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is AI automation and how can it help my business?",
    answer:
      "AI automation uses machine learning, natural language processing, and intelligent agents to handle repetitive tasks such as data entry, scheduling, document processing, and customer support. It reduces human error, cuts operational costs, and lets your team focus on strategic, high-value work.",
  },
  {
    id: "faq-2",
    question: "How long does a typical custom software project take?",
    answer:
      "Timelines vary based on scope and complexity. A focused MVP can be delivered in 6-8 weeks, while a full-featured enterprise platform typically takes 3-6 months. We follow an agile methodology with bi-weekly demos so you see progress throughout the engagement.",
  },
  {
    id: "faq-3",
    question: "Do you work with healthcare organizations that require HIPAA compliance?",
    answer:
      "Absolutely. Healthcare is one of our core verticals. All our solutions are built with HIPAA compliance in mind, including encrypted data storage, role-based access controls, audit logging, and signed Business Associate Agreements (BAAs).",
  },
  {
    id: "faq-4",
    question: "What technologies do you use for software development?",
    answer:
      "We work across the modern stack including Next.js, React, Node.js, Python, and TypeScript on the application side, with AWS, GCP, and Azure for cloud infrastructure. Our AI solutions leverage OpenAI, Anthropic, and open-source LLMs depending on the use case.",
  },
  {
    id: "faq-5",
    question: "Can you integrate AI automation with our existing systems?",
    answer:
      "Yes. We specialize in integrating AI-powered workflows with existing EHRs, CRMs, ERPs, and other business systems via APIs, webhooks, and middleware. Our goal is to enhance your current ecosystem, not replace it.",
  },
  {
    id: "faq-6",
    question: "What does your engagement process look like?",
    answer:
      "We follow a structured four-phase approach: Discovery (understanding your needs and pain points), Design (architecture, UX wireframes, and technical specification), Development (agile sprints with continuous feedback), and Delivery (testing, deployment, training, and ongoing support).",
  },
  {
    id: "faq-7",
    question: "Do you provide ongoing support and maintenance after launch?",
    answer:
      "Yes. We offer flexible support and maintenance plans that include bug fixes, performance monitoring, security updates, feature enhancements, and dedicated account management. Most clients opt for our monthly retainer model for continuous improvement.",
  },
  {
    id: "faq-8",
    question: "How do you ensure the security of the applications you build?",
    answer:
      "Security is embedded in every stage of our development lifecycle. We follow OWASP best practices, conduct regular penetration testing, implement end-to-end encryption, enforce least-privilege access controls, and perform third-party security audits before launch.",
  },
];
