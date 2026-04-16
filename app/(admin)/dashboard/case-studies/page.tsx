"use client";

import { useState } from "react";
import Link from "next/link";
import AdminLayout from "@/components/admin/AdminLayout";
import { Plus, Pencil, Trash2, Briefcase } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  status: "Published" | "Draft";
  date: string;
}

const initialCaseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Streamlining Patient Intake for SmileBright Dental",
    industry: "Dental Clinics",
    status: "Published",
    date: "2026-03-15",
  },
  {
    id: "2",
    title: "AI-Powered Diagnostics at OrthoCore Clinic",
    industry: "Orthopedic Clinics",
    status: "Published",
    date: "2026-02-28",
  },
  {
    id: "3",
    title: "Automating Lab Reports for PathFirst Diagnostics",
    industry: "Pathological Labs",
    status: "Draft",
    date: "2026-04-01",
  },
  {
    id: "4",
    title: "Custom EHR Integration for MindWell Psychology",
    industry: "Psychology Practices",
    status: "Published",
    date: "2026-01-20",
  },
];

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] =
    useState<CaseStudy[]>(initialCaseStudies);

  function handleDelete(id: string) {
    if (confirm("Are you sure you want to delete this case study?")) {
      setCaseStudies((prev) => prev.filter((cs) => cs.id !== id));
    }
  }

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Briefcase className="h-6 w-6 text-text-primary" />
          <h1 className="font-display text-2xl font-bold text-text-primary">
            Case Studies
          </h1>
        </div>
        <Link
          href="/admin/dashboard/case-studies/new"
          className="btn-primary text-sm"
        >
          <Plus className="h-4 w-4" />
          New Case Study
        </Link>
      </div>

      {/* Table */}
      <div className="border border-border-subtle bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-subtle">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Title
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Industry
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Date
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-subtle">
              {caseStudies.map((cs) => (
                <tr
                  key={cs.id}
                  className="transition-colors hover:bg-bg-glass"
                >
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-text-primary">
                      {cs.title}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-text-secondary">
                      {cs.industry}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium ${
                        cs.status === "Published"
                          ? "border border-border-subtle text-text-primary"
                          : "border border-border-subtle text-text-secondary"
                      }`}
                    >
                      {cs.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-text-secondary">
                      {cs.date}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/dashboard/case-studies/${cs.id}/edit`}
                        className="p-2 text-text-secondary transition-colors hover:bg-bg-glass hover:text-text-primary"
                        title="Edit"
                      >
                        <Pencil className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(cs.id)}
                        className="p-2 text-text-secondary transition-colors hover:bg-error/10 hover:text-error"
                        title="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {caseStudies.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-sm text-text-secondary"
                  >
                    No case studies yet. Create your first one!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
