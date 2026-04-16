"use client";

import Link from "next/link";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Users,
  UserPlus,
  FileText,
  Briefcase,
  ArrowRight,
  Plus,
  Eye,
  Search,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Placeholder Data                                                   */
/* ------------------------------------------------------------------ */

const stats = [
  {
    label: "Total Leads",
    value: "47",
    icon: Users,
    change: "+12% this month",
  },
  {
    label: "New Leads",
    value: "12",
    icon: UserPlus,
    change: "Last 7 days",
  },
  {
    label: "Published Posts",
    value: "8",
    icon: FileText,
    change: "Blog articles",
  },
  {
    label: "Case Studies",
    value: "5",
    icon: Briefcase,
    change: "Published",
  },
];

const quickActions = [
  {
    label: "New Blog Post",
    href: "/admin/dashboard/blog/new",
    icon: Plus,
    description: "Create a new article",
  },
  {
    label: "View Leads",
    href: "/admin/dashboard/leads",
    icon: Eye,
    description: "Manage contact submissions",
  },
  {
    label: "Edit SEO",
    href: "/admin/dashboard/seo",
    icon: Search,
    description: "Update meta & sitemap",
  },
];

const recentLeads = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "sarah.j@dentalpro.com",
    service: "Website Development",
    date: "Apr 15, 2026",
    status: "New",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@orthocare.ca",
    service: "AI Automation",
    date: "Apr 14, 2026",
    status: "Contacted",
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily@brightskin.com",
    service: "Software Development",
    date: "Apr 13, 2026",
    status: "New",
  },
  {
    id: 4,
    name: "James Wilson",
    email: "jwilson@mindwell.org",
    service: "Business Automation",
    date: "Apr 12, 2026",
    status: "Qualified",
  },
  {
    id: 5,
    name: "Lisa Patel",
    email: "lisa@pathlab.com.au",
    service: "Website Development",
    date: "Apr 11, 2026",
    status: "New",
  },
];

const statusColors: Record<string, string> = {
  New: "border border-border-subtle text-text-primary",
  Contacted: "border border-border-subtle text-text-secondary",
  Qualified: "border border-border-subtle text-text-primary",
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function DashboardPage() {
  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-text-primary">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-text-secondary">
            Welcome back to Opslogica Admin
          </p>
        </div>
        <span className="hidden sm:block font-display text-sm font-semibold text-text-primary">
          Opslogica Admin
        </span>
      </div>

      {/* Stats Grid */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="border border-border-subtle bg-white p-5">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center border border-border-subtle">
                  <Icon className="h-5 w-5 text-text-primary" />
                </div>
              </div>
              <p className="font-display text-3xl font-semibold text-text-primary">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
              <p className="mt-0.5 text-xs text-text-secondary/60">
                {stat.change}
              </p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="mb-4 font-display text-lg font-semibold text-text-primary">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.label}
                href={action.href}
                className="border border-border-subtle bg-white flex items-center gap-4 p-4 group transition-colors hover:bg-bg-glass"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border-subtle">
                  <Icon className="h-5 w-5 text-text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-text-primary">
                    {action.label}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {action.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-text-secondary transition-transform group-hover:translate-x-1 group-hover:text-text-primary" />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Leads */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-text-primary">
            Recent Leads
          </h2>
          <Link
            href="/admin/dashboard/leads"
            className="text-sm font-medium text-text-primary hover:text-text-secondary transition-colors"
          >
            View all
          </Link>
        </div>

        <div className="border border-border-subtle bg-white overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Name
                  </th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Email
                  </th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Service
                  </th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Date
                  </th>
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {recentLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="transition-colors hover:bg-bg-glass"
                  >
                    <td className="whitespace-nowrap px-5 py-3.5 text-sm font-medium text-text-primary">
                      {lead.name}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3.5 text-sm text-text-secondary">
                      {lead.email}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3.5 text-sm text-text-secondary">
                      {lead.service}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3.5 text-sm text-text-secondary">
                      {lead.date}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3.5">
                      <span
                        className={`inline-flex px-2.5 py-1 text-xs font-semibold ${
                          statusColors[lead.status] || "border border-border-subtle text-text-secondary"
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
