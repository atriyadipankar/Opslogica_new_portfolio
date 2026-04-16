"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "@/components/admin/AdminLayout";
import { Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

const industryOptions = [
  "Dental Clinics",
  "Orthopedic Clinics",
  "Psychology Practices",
  "Physician Practices",
  "Pathological Labs",
  "Dermatology Clinics",
  "Other",
];

const serviceOptions = [
  "Software Development",
  "Website Development",
  "AI Automation",
  "Business Automation",
];

export default function NewCaseStudyPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [clientName, setClientName] = useState("");
  const [industry, setIndustry] = useState("");
  const [servicesUsed, setServicesUsed] = useState<string[]>([]);

  const [challenge, setChallenge] = useState("");
  const [solution, setSolution] = useState("");
  const [results, setResults] = useState("");

  const [metrics, setMetrics] = useState([
    { value: "", description: "" },
    { value: "", description: "" },
    { value: "", description: "" },
    { value: "", description: "" },
  ]);

  const [testimonialQuote, setTestimonialQuote] = useState("");
  const [testimonialAuthor, setTestimonialAuthor] = useState("");
  const [testimonialTitle, setTestimonialTitle] = useState("");

  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [status, setStatus] = useState<"Draft" | "Published">("Draft");

  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");

  // Auto-generate slug from title
  useEffect(() => {
    const generated = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    setSlug(generated);
  }, [title]);

  function handleServiceToggle(service: string) {
    setServicesUsed((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  }

  function updateMetric(
    index: number,
    field: "value" | "description",
    val: string
  ) {
    setMetrics((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: val };
      return updated;
    });
  }

  function handleSave() {
    // TODO: connect to API
    alert("Case study saved!");
    router.push("/admin/dashboard/case-studies");
  }

  const inputClasses =
    "w-full bg-white border border-border-subtle text-text-primary px-4 py-3 text-sm placeholder:text-text-secondary/50 focus:border-text-primary focus:outline-none transition-colors";

  const labelClasses =
    "mb-1.5 block text-sm font-medium text-text-secondary";

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <Link
          href="/admin/dashboard/case-studies"
          className="p-2 text-text-secondary transition-colors hover:bg-bg-glass hover:text-text-primary"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="font-display text-2xl font-bold text-text-primary">
          New Case Study
        </h1>
      </div>

      <div className="mx-auto max-w-4xl space-y-8">
        {/* Basic Info */}
        <section className="border border-border-subtle bg-white p-6">
          <h2 className="mb-5 font-display text-lg font-semibold text-text-primary">
            Basic Info
          </h2>
          <div className="space-y-5">
            <div>
              <label htmlFor="title" className={labelClasses}>
                Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Enter case study title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="slug" className={labelClasses}>
                Slug
              </label>
              <input
                id="slug"
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className={inputClasses}
              />
              <p className="mt-1 text-xs text-text-secondary/60">
                Auto-generated from title. Edit if needed.
              </p>
            </div>

            <div>
              <label htmlFor="clientName" className={labelClasses}>
                Client Name
              </label>
              <input
                id="clientName"
                type="text"
                placeholder="e.g. SmileBright Dental"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="industry" className={labelClasses}>
                Industry
              </label>
              <select
                id="industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className={inputClasses}
              >
                <option value="">Select an industry</option>
                {industryOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <span className={labelClasses}>Services Used</span>
              <div className="mt-2 flex flex-wrap gap-3">
                {serviceOptions.map((service) => (
                  <label
                    key={service}
                    className="flex cursor-pointer items-center gap-2 text-sm text-text-secondary"
                  >
                    <input
                      type="checkbox"
                      checked={servicesUsed.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                      className="h-4 w-4 border-border-subtle bg-white text-text-primary focus:ring-0"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="border border-border-subtle bg-white p-6">
          <h2 className="mb-5 font-display text-lg font-semibold text-text-primary">
            Content
          </h2>
          <div className="space-y-5">
            <div>
              <label htmlFor="challenge" className={labelClasses}>
                Challenge
              </label>
              <textarea
                id="challenge"
                rows={4}
                placeholder="Describe the client's challenge..."
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="solution" className={labelClasses}>
                Solution
              </label>
              <textarea
                id="solution"
                rows={4}
                placeholder="Describe the solution OpsLogica provided..."
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="results" className={labelClasses}>
                Results
              </label>
              <textarea
                id="results"
                rows={4}
                placeholder="Describe the outcomes and results..."
                value={results}
                onChange={(e) => setResults(e.target.value)}
                className={inputClasses}
              />
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="border border-border-subtle bg-white p-6">
          <h2 className="mb-5 font-display text-lg font-semibold text-text-primary">
            Metrics
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((metric, i) => (
              <div
                key={i}
                className="border border-border-subtle bg-white p-4"
              >
                <label className="mb-1.5 block text-xs font-medium text-text-secondary">
                  Metric {i + 1} &mdash; Value
                </label>
                <input
                  type="text"
                  placeholder='e.g. "40%"'
                  value={metric.value}
                  onChange={(e) => updateMetric(i, "value", e.target.value)}
                  className={inputClasses}
                />
                <label className="mb-1.5 mt-3 block text-xs font-medium text-text-secondary">
                  Description
                </label>
                <input
                  type="text"
                  placeholder='e.g. "reduction in admin time"'
                  value={metric.description}
                  onChange={(e) =>
                    updateMetric(i, "description", e.target.value)
                  }
                  className={inputClasses}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="border border-border-subtle bg-white p-6">
          <h2 className="mb-5 font-display text-lg font-semibold text-text-primary">
            Testimonial
          </h2>
          <div className="space-y-5">
            <div>
              <label htmlFor="testimonialQuote" className={labelClasses}>
                Quote
              </label>
              <textarea
                id="testimonialQuote"
                rows={3}
                placeholder="Client testimonial quote..."
                value={testimonialQuote}
                onChange={(e) => setTestimonialQuote(e.target.value)}
                className={inputClasses}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="testimonialAuthor" className={labelClasses}>
                  Author Name
                </label>
                <input
                  id="testimonialAuthor"
                  type="text"
                  placeholder="e.g. Dr. Sarah Chen"
                  value={testimonialAuthor}
                  onChange={(e) => setTestimonialAuthor(e.target.value)}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="testimonialTitle" className={labelClasses}>
                  Author Title
                </label>
                <input
                  id="testimonialTitle"
                  type="text"
                  placeholder="e.g. Clinic Director"
                  value={testimonialTitle}
                  onChange={(e) => setTestimonialTitle(e.target.value)}
                  className={inputClasses}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Media */}
        <section className="border border-border-subtle bg-white p-6">
          <h2 className="mb-5 font-display text-lg font-semibold text-text-primary">
            Media
          </h2>
          <div>
            <label htmlFor="coverImage" className={labelClasses}>
              Cover Image URL
            </label>
            <input
              id="coverImage"
              type="url"
              placeholder="https://example.com/image.jpg"
              value={coverImageUrl}
              onChange={(e) => setCoverImageUrl(e.target.value)}
              className={inputClasses}
            />
          </div>
        </section>

        {/* Status */}
        <section className="border border-border-subtle bg-white p-6">
          <h2 className="mb-5 font-display text-lg font-semibold text-text-primary">
            Status
          </h2>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setStatus("Draft")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                status === "Draft"
                  ? "bg-text-primary text-white"
                  : "bg-white text-text-secondary border border-border-subtle hover:text-text-primary"
              }`}
            >
              Draft
            </button>
            <button
              type="button"
              onClick={() => setStatus("Published")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                status === "Published"
                  ? "bg-text-primary text-white"
                  : "bg-white text-text-secondary border border-border-subtle hover:text-text-primary"
              }`}
            >
              Published
            </button>
          </div>
        </section>

        {/* SEO */}
        <section className="border border-border-subtle bg-white p-6">
          <h2 className="mb-5 font-display text-lg font-semibold text-text-primary">
            SEO
          </h2>
          <div className="space-y-5">
            <div>
              <label htmlFor="seoTitle" className={labelClasses}>
                SEO Title
                <span className="ml-2 text-xs font-normal text-text-secondary/60">
                  {seoTitle.length}/60
                </span>
              </label>
              <input
                id="seoTitle"
                type="text"
                placeholder="SEO-optimized title"
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
                maxLength={60}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="seoDescription" className={labelClasses}>
                Meta Description
                <span className="ml-2 text-xs font-normal text-text-secondary/60">
                  {seoDescription.length}/160
                </span>
              </label>
              <textarea
                id="seoDescription"
                rows={2}
                placeholder="SEO meta description..."
                value={seoDescription}
                onChange={(e) => setSeoDescription(e.target.value)}
                maxLength={160}
                className={inputClasses}
              />
            </div>
          </div>
        </section>

        {/* Save */}
        <div className="flex justify-end pb-8">
          <button onClick={handleSave} className="btn-primary">
            <Save className="h-4 w-4" />
            Save Case Study
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
