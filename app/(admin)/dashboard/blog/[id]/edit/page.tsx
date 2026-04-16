"use client";

import { useState, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import AdminLayout from "@/components/admin/AdminLayout";
import { slugify } from "@/lib/utils";
import {
  ArrowLeft,
  Save,
  Send,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon,
  Tag,
  Eye,
} from "lucide-react";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

const CATEGORIES = [
  "Technology",
  "AI & Automation",
  "Healthcare",
  "Web Development",
  "Business Strategy",
  "Case Studies",
  "Industry Insights",
];

// ---------------------------------------------------------------------------
// Sample data to pre-fill the form (simulates fetching from API)
// ---------------------------------------------------------------------------

const SAMPLE_POST = {
  title: "How AI Automation Is Transforming Small Business Operations in 2026",
  slug: "ai-automation-transforming-small-business-2026",
  content: `Artificial intelligence is no longer a luxury reserved for Fortune 500 companies. In 2026, small and mid-sized businesses across healthcare, retail, and professional services are leveraging AI automation to streamline operations, reduce costs, and deliver better customer experiences.

From intelligent chatbots handling patient inquiries at dental clinics to automated inventory management systems for retail chains, the applications are vast and growing rapidly.

## Key Areas of Impact

### 1. Customer Support Automation
AI-powered chatbots and virtual assistants can handle up to 80% of routine customer inquiries, freeing up staff for higher-value interactions.

### 2. Document Processing
Intelligent document processing (IDP) uses machine learning to extract, classify, and route information from invoices, forms, and contracts automatically.

### 3. Predictive Analytics
Small businesses can now access the same predictive analytics capabilities that were once exclusive to enterprises, helping them forecast demand, optimize pricing, and identify at-risk customers.

## Getting Started

The key to successful AI adoption is starting small. Identify one high-volume, repetitive process in your business and explore how automation could improve it. The ROI often becomes apparent within the first quarter.`,
  excerpt:
    "Discover how small and mid-sized businesses are leveraging AI automation in 2026 to streamline operations, cut costs, and deliver superior customer experiences.",
  status: "PUBLISHED" as const,
  coverImage: "/images/blog/ai-automation-2026.jpg",
  tags: "ai, automation, small business, healthcare, 2026",
  category: "AI & Automation",
  seoTitle: "AI Automation for Small Business in 2026 | Opslogica",
  seoDescription:
    "Learn how AI automation is transforming small business operations in 2026. Explore real-world applications in healthcare, retail, and professional services.",
  focusKeyword: "ai automation small business",
};

// ---------------------------------------------------------------------------
// Edit Blog Post Page
// ---------------------------------------------------------------------------

export default function EditBlogPostPage() {
  const router = useRouter();
  const params = useParams();
  const postId = params.id as string;

  // Form state — pre-filled with sample data
  const [title, setTitle] = useState(SAMPLE_POST.title);
  const [slug, setSlug] = useState(SAMPLE_POST.slug);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(true);
  const [content, setContent] = useState(SAMPLE_POST.content);
  const [excerpt, setExcerpt] = useState(SAMPLE_POST.excerpt);
  const [status, setStatus] = useState<"DRAFT" | "PUBLISHED">(
    SAMPLE_POST.status
  );
  const [coverImage, setCoverImage] = useState(SAMPLE_POST.coverImage);
  const [tags, setTags] = useState(SAMPLE_POST.tags);
  const [category, setCategory] = useState(SAMPLE_POST.category);

  // SEO state
  const [seoOpen, setSeoOpen] = useState(false);
  const [seoTitle, setSeoTitle] = useState(SAMPLE_POST.seoTitle);
  const [seoDescription, setSeoDescription] = useState(
    SAMPLE_POST.seoDescription
  );
  const [focusKeyword, setFocusKeyword] = useState(SAMPLE_POST.focusKeyword);

  // UI state
  const [saving, setSaving] = useState(false);

  // Auto-generate slug from title
  const handleTitleChange = useCallback(
    (value: string) => {
      setTitle(value);
      if (!slugManuallyEdited) {
        setSlug(slugify(value));
      }
    },
    [slugManuallyEdited]
  );

  // Google preview snippet
  const previewTitle = seoTitle || title || "Page Title";
  const previewDescription =
    seoDescription || excerpt || "Page description will appear here...";
  const previewSlug = slug || "page-slug";

  // Save handler
  async function handleSave() {
    if (!title.trim()) {
      alert("Title is required.");
      return;
    }
    if (!slug.trim()) {
      alert("Slug is required.");
      return;
    }
    if (!content.trim()) {
      alert("Content is required.");
      return;
    }

    setSaving(true);

    try {
      // In a real implementation, this would be a PATCH/PUT to /api/blog/[id]
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: postId,
          title: title.trim(),
          slug: slug.trim(),
          content: content.trim(),
          excerpt: excerpt.trim() || undefined,
          coverImage: coverImage.trim() || undefined,
          tags: tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
          category: category || undefined,
          status,
          seoTitle: seoTitle.trim() || undefined,
          seoDescription: seoDescription.trim() || undefined,
          focusKeyword: focusKeyword.trim() || undefined,
        }),
      });

      if (res.ok) {
        alert("Blog post updated successfully!");
        router.push("/dashboard/blog");
      } else {
        const data = await res.json();
        alert(data.message || "Failed to update blog post.");
      }
    } catch {
      alert("An error occurred while saving. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* ---- Header ---- */}
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/blog"
            className="p-2 text-text-secondary transition-colors hover:bg-bg-glass hover:text-text-primary"
          >
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-text-primary">
              Edit Blog Post
            </h1>
            <p className="mt-0.5 text-sm text-text-secondary">
              Editing: {postId}
            </p>
          </div>
        </div>

        {/* ---- Two-Column Layout ---- */}
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* ---- Left Column (2/3) — Editor ---- */}
          <div className="flex-1 space-y-5 lg:max-w-[66%]">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-text-secondary"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Enter post title..."
                className="w-full border border-border-subtle bg-white px-4 py-3 text-2xl font-bold text-text-primary placeholder:text-text-secondary/40 outline-none focus:border-text-primary transition-colors"
              />
            </div>

            {/* Slug */}
            <div>
              <label
                htmlFor="slug"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-text-secondary"
              >
                Slug
              </label>
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-secondary">
                  /blog/
                </span>
                <input
                  id="slug"
                  type="text"
                  value={slug}
                  onChange={(e) => {
                    setSlug(e.target.value);
                    setSlugManuallyEdited(true);
                  }}
                  placeholder="post-slug"
                  className="flex-1 border border-border-subtle bg-white px-4 py-2.5 text-sm font-mono text-text-primary placeholder:text-text-secondary/40 outline-none focus:border-text-primary transition-colors"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <label
                htmlFor="content"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-text-secondary"
              >
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your blog post content here... (Tiptap rich text editor integration coming soon)"
                rows={18}
                className="w-full border border-border-subtle bg-white px-4 py-3 font-mono text-sm leading-relaxed text-text-primary placeholder:text-text-secondary/40 outline-none focus:border-text-primary transition-colors resize-y"
              />
            </div>

            {/* Excerpt */}
            <div>
              <label
                htmlFor="excerpt"
                className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-text-secondary"
              >
                Excerpt
              </label>
              <textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="A short summary of the post for listing pages and social sharing..."
                rows={3}
                className="w-full border border-border-subtle bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/40 outline-none focus:border-text-primary transition-colors resize-y"
              />
            </div>
          </div>

          {/* ---- Right Column (1/3) — Sidebar ---- */}
          <div className="w-full space-y-5 lg:w-80 xl:w-96">
            {/* Publish / Save */}
            <div className="border border-border-subtle bg-white p-5 space-y-4">
              {/* Status Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-text-primary">
                  Status
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setStatus((s) =>
                      s === "DRAFT" ? "PUBLISHED" : "DRAFT"
                    )
                  }
                  className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${
                    status === "PUBLISHED"
                      ? "bg-text-primary"
                      : "bg-white border border-border-subtle"
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 rounded-full transition-transform ${
                      status === "PUBLISHED"
                        ? "translate-x-8 bg-white"
                        : "translate-x-1 bg-text-secondary"
                    }`}
                  />
                </button>
              </div>
              <p className="text-xs text-text-secondary">
                {status === "PUBLISHED" ? (
                  <span className="text-text-primary font-medium">
                    Published — visible on the site
                  </span>
                ) : (
                  <span className="text-text-secondary font-medium">
                    Draft — only visible in admin
                  </span>
                )}
              </p>

              {/* Action button */}
              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                className="btn-primary w-full !text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {saving ? (
                  "Saving..."
                ) : status === "PUBLISHED" ? (
                  <>
                    <Send size={16} />
                    Update & Publish
                  </>
                ) : (
                  <>
                    <Save size={16} />
                    Save Draft
                  </>
                )}
              </button>
            </div>

            {/* Cover Image */}
            <div className="border border-border-subtle bg-white p-5 space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-text-primary">
                <ImageIcon size={16} className="text-text-secondary" />
                Cover Image
              </div>
              <input
                type="text"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full border border-border-subtle bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/40 outline-none focus:border-text-primary transition-colors"
              />
              {coverImage && (
                <div className="relative overflow-hidden border border-border-subtle">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={coverImage}
                    alt="Cover preview"
                    className="h-32 w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="border border-border-subtle bg-white p-5 space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-text-primary">
                <Tag size={16} className="text-text-secondary" />
                Tags
              </div>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="ai, automation, healthcare (comma-separated)"
                className="w-full border border-border-subtle bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/40 outline-none focus:border-text-primary transition-colors"
              />
              {tags && (
                <div className="flex flex-wrap gap-1.5">
                  {tags
                    .split(",")
                    .map((t) => t.trim())
                    .filter(Boolean)
                    .map((tag, i) => (
                      <span
                        key={i}
                        className="border border-border-subtle px-2.5 py-0.5 text-xs font-medium text-text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              )}
            </div>

            {/* Category */}
            <div className="border border-border-subtle bg-white p-5 space-y-3">
              <label
                htmlFor="category"
                className="text-sm font-medium text-text-primary"
              >
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-border-subtle bg-white px-4 py-2.5 text-sm text-text-primary outline-none focus:border-text-primary transition-colors"
              >
                <option value="">Select a category</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* SEO Section (Collapsible) */}
            <div className="border border-border-subtle bg-white overflow-hidden">
              <button
                type="button"
                onClick={() => setSeoOpen(!seoOpen)}
                className="flex w-full items-center justify-between p-5 text-sm font-medium text-text-primary transition-colors hover:bg-bg-glass"
              >
                <div className="flex items-center gap-2">
                  <Eye size={16} className="text-text-secondary" />
                  SEO Settings
                </div>
                {seoOpen ? (
                  <ChevronUp size={16} className="text-text-secondary" />
                ) : (
                  <ChevronDown size={16} className="text-text-secondary" />
                )}
              </button>

              {seoOpen && (
                <div className="border-t border-border-subtle p-5 space-y-4">
                  {/* SEO Title */}
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label
                        htmlFor="seo-title"
                        className="text-xs font-semibold uppercase tracking-wider text-text-secondary"
                      >
                        SEO Title
                      </label>
                      <span
                        className={`text-xs font-mono ${
                          seoTitle.length > 60
                            ? "text-error"
                            : "text-text-secondary"
                        }`}
                      >
                        {seoTitle.length}/60
                      </span>
                    </div>
                    <input
                      id="seo-title"
                      type="text"
                      value={seoTitle}
                      onChange={(e) => setSeoTitle(e.target.value)}
                      placeholder="SEO-optimized title..."
                      maxLength={80}
                      className="w-full border border-border-subtle bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/40 outline-none focus:border-text-primary transition-colors"
                    />
                  </div>

                  {/* Meta Description */}
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label
                        htmlFor="seo-desc"
                        className="text-xs font-semibold uppercase tracking-wider text-text-secondary"
                      >
                        Meta Description
                      </label>
                      <span
                        className={`text-xs font-mono ${
                          seoDescription.length > 160
                            ? "text-error"
                            : "text-text-secondary"
                        }`}
                      >
                        {seoDescription.length}/160
                      </span>
                    </div>
                    <textarea
                      id="seo-desc"
                      value={seoDescription}
                      onChange={(e) => setSeoDescription(e.target.value)}
                      placeholder="Meta description for search engines..."
                      rows={3}
                      maxLength={200}
                      className="w-full border border-border-subtle bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/40 outline-none focus:border-text-primary transition-colors resize-y"
                    />
                  </div>

                  {/* Focus Keyword */}
                  <div>
                    <label
                      htmlFor="focus-kw"
                      className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-text-secondary"
                    >
                      Focus Keyword
                    </label>
                    <input
                      id="focus-kw"
                      type="text"
                      value={focusKeyword}
                      onChange={(e) => setFocusKeyword(e.target.value)}
                      placeholder="e.g. ai automation healthcare"
                      className="w-full border border-border-subtle bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/40 outline-none focus:border-text-primary transition-colors"
                    />
                  </div>

                  {/* Google Preview Snippet */}
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                      Google Preview
                    </p>
                    <div className="border border-border-subtle bg-white p-4 space-y-1">
                      <p className="text-base font-medium text-blue-600 line-clamp-1">
                        {previewTitle}
                      </p>
                      <p className="text-xs text-green-700">
                        opslogica.com/blog/{previewSlug}
                      </p>
                      <p className="text-xs leading-relaxed text-text-secondary line-clamp-2">
                        {previewDescription}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
