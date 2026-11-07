// Knowledge base for the Opslogica assistant. Every fact here comes from the
// public site copy (services, FAQ, process, portfolio). Retrieval is BM25 over
// these chunks, in-process, so the bot has no extra database to run.

import { FAQ_ITEMS, SERVICES } from "@/lib/constants";

export interface Chunk {
  id: string;
  title: string;
  text: string;
  keywords?: string;
}

const base: Chunk[] = [
  {
    id: "about",
    title: "What Opslogica is",
    keywords: "who what company about opslogica do you offer help business studio agency",
    text: "Opslogica is an AI automation and software studio. We design custom software and AI automation for any team in any industry: leads, customer support, invoices and payments, scheduling, reporting, onboarding, orders and stock, documents and more. We also design and build websites and web applications, with AI built in (for example smart chat assistants, lead capture, personalisation and search). If a process repeats, we can automate it, and if you need a site or app, we can build that too. We serve businesses across the United States, Canada, Europe, Australia, India and the Gulf region.",
  },
  {
    id: "automate-examples",
    title: "Examples of what we automate",
    keywords: "examples use cases automate sales marketing support finance operations logistics people hr data reporting",
    text: "Examples by team. Sales and marketing: qualify and route new leads, personalised follow-ups that send themselves, campaign and content drafts. Customer support: answer common questions instantly, triage and tag tickets, hand tricky cases to a person with context. Finance and back office: read and enter invoices, match payments and flag mismatches, chase approvals. Operations and logistics: orders, stock and supplier updates, scheduling and dispatch, status updates. People and onboarding: collect documents, create accounts, book training, send reminders. Data and reporting: pull numbers from every tool, spot changes and send summaries, keep dashboards fresh. These are illustrative examples of what we build, not a limit: if it repeats, we can likely automate it.",
  },
  {
    id: "how-it-works",
    title: "How an automation flow works",
    keywords: "flow workflow trigger ai decide human loop approve how works",
    text: "A typical automation has a trigger (a new enquiry, an invoice in the inbox, a schedule), an AI step that reads and understands it, a decision (for example hot lead versus cold lead, or matches the purchase order versus mismatch), then actions (send a reply, enter a record, book a meeting, alert someone) and a finished result. A person can approve any step wherever you want one in the loop.",
  },
  {
    id: "integrations",
    title: "Working with your existing tools",
    keywords: "integrate integration crm erp api webhook existing systems tools connect whatsapp email sheets",
    text: "We connect AI-powered workflows to your existing CRMs, ERPs, email and calendar, spreadsheets and databases, accounting tools, websites and forms, and chat channels such as WhatsApp and SMS, through APIs, webhooks and middleware. The goal is to enhance your current setup, not replace it. The automation layer covers triggers and schedules, AI that reads and decides, rules and approvals, and monitoring and alerts.",
  },
  {
    id: "process",
    title: "What working with us looks like",
    keywords: "process engagement steps phases discovery design build launch start begin onboarding timeline",
    text: "It starts with a free strategy call where we analyse your workflows and show where automation pays off. Then four phases: Discovery (understand your needs, tools and pain points, with a scoped plan and fixed milestones), Design (architecture, UX and technical specification, including where a person must approve), Development (agile sprints with a demo every two weeks), and Delivery (testing, deployment, training and ongoing support). After launch we support, improve and extend the system, usually on a monthly retainer.",
  },
  {
    id: "timeline",
    title: "Project timelines",
    keywords: "how long time weeks months timeline duration fast deadline mvp",
    text: "Timelines depend on scope and complexity. A focused MVP can be delivered in about 6 to 8 weeks. A full-featured enterprise platform typically takes 3 to 6 months. We work in an agile way with bi-weekly demos so you see progress throughout.",
  },
  {
    id: "pricing",
    title: "Pricing and getting a quote",
    keywords: "price pricing cost quote budget how much fee charge rate retainer",
    text: "We do not publish fixed prices because cost depends on scope. Projects are planned with fixed milestones and a clear scope after discovery. Ongoing support is usually a monthly retainer. The best way to get a quote is to book the free strategy call or send a message through the contact page.",
  },
  {
    id: "support",
    title: "Support after launch",
    keywords: "support maintenance after launch retainer monitoring bug fixes",
    text: "We offer flexible support and maintenance plans covering bug fixes, performance monitoring, security updates, feature enhancements and dedicated account management. Most clients choose a monthly retainer for continuous improvement.",
  },
  {
    id: "security",
    title: "Security and sensitive data",
    keywords: "security secure data privacy compliance regulated encryption owasp gdpr hipaa",
    text: "We build with security in mind from day one: encrypted data storage, role-based access controls and audit logging, and we can work within your compliance requirements and sign the agreements your industry needs. We follow OWASP best practices, run regular penetration testing, use least-privilege access and arrange third-party security audits before launch.",
  },
  {
    id: "web-ai",
    title: "Websites and web apps with AI",
    keywords: "website web app application build develop design ecommerce shop nextjs wordpress shopify ai powered chatbot",
    text: "We build websites and web applications from scratch and power them with AI: assistants that answer visitors, smart lead capture and routing, personalised content, search over your own documents, and dashboards, all connected to your existing tools. We use Next.js, React, WordPress and Shopify depending on the need. A recent example is the Risin Exim export website.",
  },
  {
    id: "tech",
    title: "Technology we use",
    keywords: "technology tech stack nextjs react node python typescript aws gcp azure openai anthropic llm",
    text: "Application side: Next.js, React, Node.js, Python and TypeScript. Cloud: AWS, GCP and Azure. For AI we use OpenAI, Anthropic and open-source LLMs depending on the use case.",
  },
  {
    id: "why",
    title: "Why choose Opslogica",
    keywords: "why choose different better trust values promise",
    text: "Four things we hold ourselves to on every project: we learn how your business runs first so the automation fits the way you already work, we bring proven AI expertise, we plan with fixed milestones and a clear scope, and we stay with you after launch.",
  },
  {
    id: "portfolio-risin",
    title: "Featured project: Risin Exim",
    keywords: "portfolio work project case study example website risin exim garment export manufacturer",
    text: "Risin Exim is a premium corporate website we built for a New Delhi garment manufacturer and exporter. It has a six-category product catalogue, manufacturing, quality and sustainability stories, an export-markets showcase and a newsroom, plus a sample-request flow that validates every inquiry, stores it in a database and sends email notifications. Built with Next.js, Tailwind CSS, GSAP, Prisma, PostgreSQL and Resend. Live at https://risin-axim.vercel.app",
  },
  {
    id: "contact",
    title: "How to contact us or start a project",
    keywords: "contact reach email call book demo strategy call talk hire start get started quote",
    text: "To start, book a free strategy call or send a message on the contact page at /contact. You can also email hello@opslogica.com. Tell us what slows your team down and we will show what we would automate first.",
  },
];

const services: Chunk[] = SERVICES.map((s) => ({
  id: `service-${s.slug}`,
  title: `Service: ${s.title}`,
  keywords: `service offer ${s.title.toLowerCase()} ${s.slug.replace(/-/g, " ")}`,
  text: `${s.title}. ${s.description} More at /services/${s.slug}.`,
}));

const faq: Chunk[] = FAQ_ITEMS.filter((f) => f.id !== "faq-3" && f.id !== "faq-8").map((f) => ({
  id: f.id,
  title: f.question,
  text: `${f.question} ${f.answer}`,
}));

export const CHUNKS: Chunk[] = [...base, ...services, ...faq];

// ---------------------------------------------------------------------------
// BM25 retrieval
// ---------------------------------------------------------------------------

const STOP = new Set(
  "a an and are as at be by can could do does for from get has have how i if in is it its me my of on or our so that the their them there these they this to us was we what when where which who will with would you your tell about please want need like".split(" ")
);

const tok = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP.has(w))
    .map((w) => (w.length > 4 && w.endsWith("s") ? w.slice(0, -1) : w));

const docs = CHUNKS.map((c) => {
  const t = tok(`${c.title} ${c.title} ${c.keywords ?? ""} ${c.text}`);
  const tf = new Map<string, number>();
  t.forEach((w) => tf.set(w, (tf.get(w) ?? 0) + 1));
  return { c, tf, len: t.length };
});
const avgLen = docs.reduce((a, d) => a + d.len, 0) / docs.length;
const df = new Map<string, number>();
docs.forEach((d) => d.tf.forEach((_, w) => df.set(w, (df.get(w) ?? 0) + 1)));

export function retrieve(query: string, k = 4): { chunk: Chunk; score: number }[] {
  const q = tok(query);
  const scored = docs.map((d) => {
    let score = 0;
    for (const w of new Set(q)) {
      const f = d.tf.get(w);
      if (!f) continue;
      const n = df.get(w) ?? 0;
      const idf = Math.log(1 + (docs.length - n + 0.5) / (n + 0.5));
      score += (idf * (f * 2.2)) / (f + 1.2 * (0.25 + 0.75 * (d.len / avgLen)));
    }
    return { chunk: d.c, score };
  });
  return scored.filter((s) => s.score > 0).sort((a, b) => b.score - a.score).slice(0, k);
}
