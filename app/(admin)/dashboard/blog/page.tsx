"use client";

import { useState } from "react";
import Link from "next/link";
import AdminLayout from "@/components/admin/AdminLayout";
import { Plus, Pencil, Trash2, FileText } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type PostStatus = "PUBLISHED" | "DRAFT";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  status: PostStatus;
  createdAt: string;
}

// ---------------------------------------------------------------------------
// Placeholder Data
// ---------------------------------------------------------------------------

const INITIAL_POSTS: BlogPost[] = [
  {
    id: "post-001",
    title: "How AI Automation Is Transforming Small Business Operations in 2026",
    slug: "ai-automation-transforming-small-business-2026",
    status: "PUBLISHED",
    createdAt: "2026-04-10T09:00:00Z",
  },
  {
    id: "post-002",
    title: "5 Signs Your Dental Practice Needs a Website Redesign",
    slug: "dental-practice-website-redesign-signs",
    status: "PUBLISHED",
    createdAt: "2026-04-05T14:30:00Z",
  },
  {
    id: "post-003",
    title: "Building HIPAA-Compliant Patient Portals: A Developer's Guide",
    slug: "hipaa-compliant-patient-portals-guide",
    status: "DRAFT",
    createdAt: "2026-04-02T11:15:00Z",
  },
  {
    id: "post-004",
    title: "The ROI of Business Process Automation for Healthcare Clinics",
    slug: "roi-business-process-automation-healthcare",
    status: "PUBLISHED",
    createdAt: "2026-03-28T08:45:00Z",
  },
  {
    id: "post-005",
    title: "Custom Software vs. Off-the-Shelf: Making the Right Choice",
    slug: "custom-software-vs-off-the-shelf",
    status: "DRAFT",
    createdAt: "2026-03-22T16:00:00Z",
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// ---------------------------------------------------------------------------
// Blog Posts Management Page
// ---------------------------------------------------------------------------

export default function BlogListPage() {
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_POSTS);

  function handleDelete(id: string) {
    if (
      window.confirm(
        "Are you sure you want to delete this blog post? This action cannot be undone."
      )
    ) {
      setPosts((prev) => prev.filter((p) => p.id !== id));
    }
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* ---- Header ---- */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Blog Posts</h1>
            <p className="mt-1 text-sm text-text-secondary">
              {posts.length} post{posts.length !== 1 ? "s" : ""}
            </p>
          </div>
          <Link
            href="/admin/dashboard/blog/new"
            className="btn-primary !py-2.5 !px-5 !text-sm inline-flex items-center gap-2 self-start"
          >
            <Plus size={16} />
            New Post
          </Link>
        </div>

        {/* ---- Table ---- */}
        <div className="border border-border-subtle bg-white overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Title
                  </th>
                  <th className="hidden px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-text-secondary sm:table-cell">
                    Slug
                  </th>
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Status
                  </th>
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Date
                  </th>
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-5 py-16 text-center"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <FileText
                          size={40}
                          className="text-text-secondary/40"
                        />
                        <p className="text-sm text-text-secondary">
                          No blog posts yet.
                        </p>
                        <Link
                          href="/admin/dashboard/blog/new"
                          className="btn-primary !py-2 !px-4 !text-xs"
                        >
                          Create your first post
                        </Link>
                      </div>
                    </td>
                  </tr>
                ) : (
                  posts.map((post) => (
                    <tr
                      key={post.id}
                      className="border-b border-border-subtle transition-colors hover:bg-bg-glass"
                    >
                      <td className="px-5 py-3.5">
                        <p className="text-sm font-medium text-text-primary line-clamp-1">
                          {post.title}
                        </p>
                      </td>
                      <td className="hidden px-5 py-3.5 sm:table-cell">
                        <code className="bg-bg-glass px-2 py-0.5 text-xs text-text-secondary font-mono">
                          {post.slug}
                        </code>
                      </td>
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2.5 py-0.5 text-xs font-semibold ${
                            post.status === "PUBLISHED"
                              ? "border border-border-subtle text-text-primary"
                              : "border border-border-subtle text-text-secondary"
                          }`}
                        >
                          {post.status === "PUBLISHED"
                            ? "Published"
                            : "Draft"}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-sm text-text-secondary whitespace-nowrap">
                        {formatDate(post.createdAt)}
                      </td>
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/admin/dashboard/blog/${post.id}/edit`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:bg-bg-glass hover:text-text-primary"
                          >
                            <Pencil size={13} />
                            Edit
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleDelete(post.id)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:bg-error/10 hover:text-error"
                          >
                            <Trash2 size={13} />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
