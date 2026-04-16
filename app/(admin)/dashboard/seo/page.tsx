"use client";

import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Save, Search, CheckCircle } from "lucide-react";

interface SeoEntry {
  route: string;
  title: string;
  description: string;
  focusKeyword: string;
  noIndex: boolean;
}

const initialSeoData: SeoEntry[] = [
  {
    route: "/",
    title: "OpsLogica | AI-Powered Business Automation",
    description:
      "OpsLogica builds custom software, websites, and AI automation solutions for healthcare and professional services.",
    focusKeyword: "business automation",
    noIndex: false,
  },
  {
    route: "/about",
    title: "About OpsLogica | Our Mission & Team",
    description:
      "Learn about OpsLogica's mission to streamline operations for healthcare practices through intelligent automation.",
    focusKeyword: "about opslogica",
    noIndex: false,
  },
  {
    route: "/services",
    title: "Our Services | OpsLogica",
    description:
      "Explore OpsLogica's full range of services including software development, web design, AI automation, and business process automation.",
    focusKeyword: "automation services",
    noIndex: false,
  },
  {
    route: "/services/software-development",
    title: "Custom Software Development | OpsLogica",
    description:
      "Bespoke software solutions built to automate workflows, manage patients, and integrate with existing systems.",
    focusKeyword: "custom software development",
    noIndex: false,
  },
  {
    route: "/services/website-development",
    title: "Website Development | OpsLogica",
    description:
      "High-performance, SEO-optimized websites built with Next.js and modern technologies for healthcare practices.",
    focusKeyword: "website development",
    noIndex: false,
  },
  {
    route: "/services/ai-automation",
    title: "AI Automation Solutions | OpsLogica",
    description:
      "Leverage artificial intelligence to automate diagnostics, patient communication, and clinical workflows.",
    focusKeyword: "AI automation healthcare",
    noIndex: false,
  },
  {
    route: "/services/business-automation",
    title: "Business Process Automation | OpsLogica",
    description:
      "End-to-end business automation for scheduling, billing, intake forms, and operational workflows.",
    focusKeyword: "business process automation",
    noIndex: false,
  },
  {
    route: "/industries",
    title: "Industries We Serve | OpsLogica",
    description:
      "OpsLogica specializes in automation solutions for dental clinics, orthopedic practices, psychology, dermatology, and labs.",
    focusKeyword: "healthcare automation industries",
    noIndex: false,
  },
  {
    route: "/industries/dental-clinics",
    title: "Dental Clinic Automation | OpsLogica",
    description:
      "Streamline patient intake, scheduling, and billing for dental practices with custom automation solutions.",
    focusKeyword: "dental clinic automation",
    noIndex: false,
  },
  {
    route: "/industries/orthopedic-clinics",
    title: "Orthopedic Clinic Solutions | OpsLogica",
    description:
      "Custom software and AI tools designed for orthopedic clinics to improve patient outcomes and operational efficiency.",
    focusKeyword: "orthopedic clinic software",
    noIndex: false,
  },
  {
    route: "/industries/psychology-practices",
    title: "Psychology Practice Automation | OpsLogica",
    description:
      "Digital solutions for psychology practices including EHR integration, appointment scheduling, and patient portals.",
    focusKeyword: "psychology practice software",
    noIndex: false,
  },
  {
    route: "/industries/physician-practices",
    title: "Physician Practice Solutions | OpsLogica",
    description:
      "Comprehensive automation for physician practices covering patient management, billing, and clinical workflows.",
    focusKeyword: "physician practice automation",
    noIndex: false,
  },
  {
    route: "/industries/pathological-labs",
    title: "Pathological Lab Automation | OpsLogica",
    description:
      "Automated reporting, sample tracking, and lab management systems for pathological laboratories.",
    focusKeyword: "pathology lab software",
    noIndex: false,
  },
  {
    route: "/industries/dermatology-clinics",
    title: "Dermatology Clinic Solutions | OpsLogica",
    description:
      "AI-powered image analysis, patient portals, and workflow automation for dermatology clinics.",
    focusKeyword: "dermatology clinic software",
    noIndex: false,
  },
  {
    route: "/blog",
    title: "Blog | OpsLogica Insights",
    description:
      "Expert insights on AI automation, healthcare technology, and business process optimization from the OpsLogica team.",
    focusKeyword: "healthcare automation blog",
    noIndex: false,
  },
  {
    route: "/case-studies",
    title: "Case Studies | OpsLogica",
    description:
      "Real-world results from OpsLogica's automation projects across healthcare and professional services.",
    focusKeyword: "automation case studies",
    noIndex: false,
  },
  {
    route: "/contact",
    title: "Contact Us | OpsLogica",
    description:
      "Get in touch with OpsLogica to discuss your automation needs. Free consultation available.",
    focusKeyword: "contact opslogica",
    noIndex: false,
  },
  {
    route: "/privacy",
    title: "Privacy Policy | OpsLogica",
    description:
      "OpsLogica's privacy policy outlining how we collect, use, and protect your personal information.",
    focusKeyword: "",
    noIndex: true,
  },
];

export default function SeoSettingsPage() {
  const [seoData, setSeoData] = useState<SeoEntry[]>(initialSeoData);
  const [showSuccess, setShowSuccess] = useState(false);

  function updateEntry(
    index: number,
    field: keyof SeoEntry,
    value: string | boolean
  ) {
    setSeoData((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  }

  function handleSaveAll() {
    // TODO: connect to API
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  }

  const inputClasses =
    "w-full bg-white border border-border-subtle text-text-primary px-3 py-2 text-sm placeholder:text-text-secondary/50 focus:border-text-primary focus:outline-none transition-colors";

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Search className="h-6 w-6 text-text-primary" />
          <h1 className="font-display text-2xl font-bold text-text-primary">
            SEO Settings
          </h1>
        </div>
        <div className="flex items-center gap-3">
          {showSuccess && (
            <div className="flex items-center gap-2 border border-border-subtle bg-white px-4 py-2 text-sm font-medium text-text-primary">
              <CheckCircle className="h-4 w-4" />
              Settings saved successfully
            </div>
          )}
          <button onClick={handleSaveAll} className="btn-primary text-sm">
            <Save className="h-4 w-4" />
            Save All
          </button>
        </div>
      </div>

      {/* SEO Entries */}
      <div className="space-y-4">
        {seoData.map((entry, index) => (
          <div key={entry.route} className="border border-border-subtle bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <code className="bg-bg-glass px-3 py-1 text-sm font-medium text-text-primary">
                {entry.route}
              </code>
              <label className="flex cursor-pointer items-center gap-2 text-sm text-text-secondary">
                <input
                  type="checkbox"
                  checked={entry.noIndex}
                  onChange={(e) =>
                    updateEntry(index, "noIndex", e.target.checked)
                  }
                  className="h-4 w-4 border-border-subtle bg-white text-text-primary focus:ring-0"
                />
                noIndex
              </label>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <div>
                <label className="mb-1 block text-xs font-medium text-text-secondary">
                  SEO Title
                  <span className="ml-1 text-text-secondary/60">
                    ({entry.title.length}/60)
                  </span>
                </label>
                <input
                  type="text"
                  value={entry.title}
                  onChange={(e) =>
                    updateEntry(index, "title", e.target.value)
                  }
                  maxLength={60}
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-text-secondary">
                  Meta Description
                  <span className="ml-1 text-text-secondary/60">
                    ({entry.description.length}/160)
                  </span>
                </label>
                <textarea
                  rows={2}
                  value={entry.description}
                  onChange={(e) =>
                    updateEntry(index, "description", e.target.value)
                  }
                  maxLength={160}
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-text-secondary">
                  Focus Keyword
                </label>
                <input
                  type="text"
                  value={entry.focusKeyword}
                  onChange={(e) =>
                    updateEntry(index, "focusKeyword", e.target.value)
                  }
                  placeholder="Primary keyword"
                  className={inputClasses}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
