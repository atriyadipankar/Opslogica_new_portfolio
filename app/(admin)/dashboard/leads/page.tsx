"use client";

import { useState, useMemo, Fragment } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Search,
  Download,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type LeadStatus = "NEW" | "IN_PROGRESS" | "CONVERTED" | "ARCHIVED";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterested: string;
  message: string;
  status: LeadStatus;
  createdAt: string;
}

// ---------------------------------------------------------------------------
// Placeholder Data
// ---------------------------------------------------------------------------

const INITIAL_LEADS: Lead[] = [
  {
    id: "lead-001",
    name: "Dr. Sarah Mitchell",
    email: "sarah.mitchell@brightsmiledental.com",
    phone: "+1 (415) 555-0112",
    company: "BrightSmile Dental",
    serviceInterested: "Website Development",
    message:
      "We need a modern website for our dental practice with online booking integration and patient portal.",
    status: "NEW",
    createdAt: "2026-04-15T10:30:00Z",
  },
  {
    id: "lead-002",
    name: "James Chen",
    email: "jchen@techforgeglobal.io",
    phone: "+1 (628) 555-0198",
    company: "TechForge Global",
    serviceInterested: "AI Automation",
    message:
      "Interested in automating our customer support pipeline with AI chatbots and ticket routing.",
    status: "IN_PROGRESS",
    createdAt: "2026-04-14T14:20:00Z",
  },
  {
    id: "lead-003",
    name: "Maria Rodriguez",
    email: "maria@sunvalleyortho.com",
    phone: "+1 (510) 555-0145",
    company: "Sun Valley Orthopedics",
    serviceInterested: "Software Development",
    message:
      "Looking for a custom patient management system that integrates with our existing EHR software.",
    status: "CONVERTED",
    createdAt: "2026-04-12T09:15:00Z",
  },
  {
    id: "lead-004",
    name: "Robert Kim",
    email: "rkim@pacificretail.co",
    phone: "+1 (323) 555-0167",
    company: "Pacific Retail Group",
    serviceInterested: "Business Automation",
    message:
      "We want to automate inventory tracking, supplier orders, and sales reporting across 12 store locations.",
    status: "NEW",
    createdAt: "2026-04-11T16:45:00Z",
  },
  {
    id: "lead-005",
    name: "Dr. Anika Patel",
    email: "anika.patel@mindwellclinic.com",
    phone: "+1 (212) 555-0134",
    company: "MindWell Psychology",
    serviceInterested: "Website Development",
    message:
      "Need a HIPAA-compliant website with online scheduling and a secure patient intake form.",
    status: "IN_PROGRESS",
    createdAt: "2026-04-10T11:00:00Z",
  },
  {
    id: "lead-006",
    name: "Tom Bradley",
    email: "tom@bradleylawfirm.com",
    phone: "+1 (617) 555-0189",
    company: "Bradley & Associates",
    serviceInterested: "AI Automation",
    message:
      "Exploring AI-powered document review and contract analysis for our legal practice.",
    status: "ARCHIVED",
    createdAt: "2026-04-08T08:30:00Z",
  },
  {
    id: "lead-007",
    name: "Lisa Nguyen",
    email: "lnguyen@greenleafmedspa.com",
    phone: "+1 (949) 555-0156",
    company: "GreenLeaf Med Spa",
    serviceInterested: "Website Development",
    message:
      "We need a luxury-feeling website with before/after galleries, online booking, and gift card purchases.",
    status: "NEW",
    createdAt: "2026-04-07T13:20:00Z",
  },
  {
    id: "lead-008",
    name: "David Okafor",
    email: "david@precisionpathlab.com",
    phone: "+1 (713) 555-0178",
    company: "Precision Path Lab",
    serviceInterested: "Software Development",
    message:
      "Building a LIMS (Laboratory Information Management System) with barcode scanning and result tracking.",
    status: "IN_PROGRESS",
    createdAt: "2026-04-05T15:10:00Z",
  },
  {
    id: "lead-009",
    name: "Emily Foster",
    email: "efoster@novadigital.co",
    phone: "+1 (312) 555-0123",
    company: "Nova Digital Marketing",
    serviceInterested: "Business Automation",
    message:
      "Want to automate our client reporting, social media scheduling, and lead nurturing workflows.",
    status: "CONVERTED",
    createdAt: "2026-04-03T10:45:00Z",
  },
  {
    id: "lead-010",
    name: "Dr. Hassan Ali",
    email: "hali@dermacareclinic.com",
    phone: "+1 (202) 555-0190",
    company: "DermaCare Clinic",
    serviceInterested: "Website Development",
    message:
      "Looking for a modern website with patient education content, telemedicine integration, and appointment booking.",
    status: "NEW",
    createdAt: "2026-04-01T09:00:00Z",
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const STATUS_CONFIG: Record<
  LeadStatus,
  { label: string; classes: string }
> = {
  NEW: { label: "New", classes: "border border-text-primary text-text-primary" },
  IN_PROGRESS: {
    label: "In Progress",
    classes: "border border-border-subtle text-text-secondary",
  },
  CONVERTED: {
    label: "Converted",
    classes: "border border-border-subtle text-text-primary",
  },
  ARCHIVED: { label: "Archived", classes: "border border-border-subtle text-text-secondary" },
};

const ALL_STATUSES: LeadStatus[] = [
  "NEW",
  "IN_PROGRESS",
  "CONVERTED",
  "ARCHIVED",
];

type DateRange = "all" | "week" | "month";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function isWithinRange(iso: string, range: DateRange): boolean {
  if (range === "all") return true;
  const date = new Date(iso);
  const now = new Date();
  if (range === "week") {
    const weekAgo = new Date(now);
    weekAgo.setDate(weekAgo.getDate() - 7);
    return date >= weekAgo;
  }
  // month
  const monthAgo = new Date(now);
  monthAgo.setMonth(monthAgo.getMonth() - 1);
  return date >= monthAgo;
}

function exportCSV(leads: Lead[]) {
  const headers = [
    "Name",
    "Email",
    "Phone",
    "Company",
    "Service Interested",
    "Date",
    "Status",
  ];
  const rows = leads.map((l) => [
    l.name,
    l.email,
    l.phone,
    l.company,
    l.serviceInterested,
    formatDate(l.createdAt),
    STATUS_CONFIG[l.status].label,
  ]);
  const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "opslogica-leads.csv";
  a.click();
  URL.revokeObjectURL(url);
}

// ---------------------------------------------------------------------------
// Page Constants
// ---------------------------------------------------------------------------

const ITEMS_PER_PAGE = 5;

// ---------------------------------------------------------------------------
// Leads Management Page
// ---------------------------------------------------------------------------

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "ALL">("ALL");
  const [dateRange, setDateRange] = useState<DateRange>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedLead, setExpandedLead] = useState<string | null>(null);

  // Filtered leads
  const filtered = useMemo(() => {
    return leads.filter((lead) => {
      // Status filter
      if (statusFilter !== "ALL" && lead.status !== statusFilter) return false;
      // Date range filter
      if (!isWithinRange(lead.createdAt, dateRange)) return false;
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const searchable = [
          lead.name,
          lead.email,
          lead.phone,
          lead.company,
          lead.serviceInterested,
          lead.message,
        ]
          .join(" ")
          .toLowerCase();
        if (!searchable.includes(q)) return false;
      }
      return true;
    });
  }, [leads, statusFilter, dateRange, searchQuery]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedLeads = filtered.slice(
    (safePage - 1) * ITEMS_PER_PAGE,
    safePage * ITEMS_PER_PAGE
  );

  // Handlers
  function handleStatusChange(id: string, newStatus: LeadStatus) {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
    );
  }

  function handleDelete(id: string) {
    if (window.confirm("Are you sure you want to delete this lead? This action cannot be undone.")) {
      setLeads((prev) => prev.filter((l) => l.id !== id));
    }
  }

  function handlePageChange(page: number) {
    setCurrentPage(page);
    setExpandedLead(null);
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* ---- Header ---- */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-text-primary">
              Lead Management
            </h1>
            <p className="mt-1 text-sm text-text-secondary">
              {filtered.length} lead{filtered.length !== 1 ? "s" : ""} total
            </p>
          </div>
          <button
            type="button"
            onClick={() => exportCSV(filtered)}
            className="btn-secondary !py-2.5 !px-5 !text-sm inline-flex items-center gap-2 self-start"
          >
            <Download size={16} />
            Export CSV
          </button>
        </div>

        {/* ---- Filters ---- */}
        <div className="border border-border-subtle bg-white p-4 space-y-4">
          {/* Status Pills */}
          <div className="flex flex-wrap gap-2">
            {(["ALL", ...ALL_STATUSES] as const).map((s) => {
              const active = statusFilter === s;
              const label = s === "ALL" ? "All" : STATUS_CONFIG[s].label;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setStatusFilter(s);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    active
                      ? "bg-text-primary text-white"
                      : "border border-border-subtle text-text-secondary hover:bg-bg-glass hover:text-text-primary"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Date Range & Search */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Date Range */}
            <select
              value={dateRange}
              onChange={(e) => {
                setDateRange(e.target.value as DateRange);
                setCurrentPage(1);
              }}
              className="border border-border-subtle bg-white px-4 py-2 text-sm text-text-primary outline-none focus:border-text-primary transition-colors"
            >
              <option value="all">All Time</option>
              <option value="month">This Month</option>
              <option value="week">This Week</option>
            </select>

            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
              />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full border border-border-subtle bg-white py-2 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-secondary/60 outline-none focus:border-text-primary transition-colors"
              />
            </div>
          </div>
        </div>

        {/* ---- Table ---- */}
        <div className="border border-border-subtle bg-white overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Name
                  </th>
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Email
                  </th>
                  <th className="hidden px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-text-secondary md:table-cell">
                    Phone
                  </th>
                  <th className="hidden px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-text-secondary lg:table-cell">
                    Company
                  </th>
                  <th className="hidden px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-text-secondary xl:table-cell">
                    Service Interested
                  </th>
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Date
                  </th>
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Status
                  </th>
                  <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedLeads.length === 0 ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-5 py-12 text-center text-sm text-text-secondary"
                    >
                      No leads found matching your filters.
                    </td>
                  </tr>
                ) : (
                  paginatedLeads.map((lead) => (
                    <Fragment key={lead.id}>
                      <tr
                        className="border-b border-border-subtle transition-colors hover:bg-bg-glass cursor-pointer"
                        onClick={() =>
                          setExpandedLead(
                            expandedLead === lead.id ? null : lead.id
                          )
                        }
                      >
                        <td className="px-5 py-3.5 text-sm font-medium text-text-primary whitespace-nowrap">
                          {lead.name}
                        </td>
                        <td className="px-5 py-3.5 text-sm text-text-secondary whitespace-nowrap">
                          {lead.email}
                        </td>
                        <td className="hidden px-5 py-3.5 text-sm text-text-secondary whitespace-nowrap md:table-cell">
                          {lead.phone}
                        </td>
                        <td className="hidden px-5 py-3.5 text-sm text-text-secondary whitespace-nowrap lg:table-cell">
                          {lead.company}
                        </td>
                        <td className="hidden px-5 py-3.5 text-sm text-text-secondary whitespace-nowrap xl:table-cell">
                          {lead.serviceInterested}
                        </td>
                        <td className="px-5 py-3.5 text-sm text-text-secondary whitespace-nowrap">
                          {formatDate(lead.createdAt)}
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap">
                          <span
                            className={`inline-flex px-2.5 py-0.5 text-xs font-semibold ${STATUS_CONFIG[lead.status].classes}`}
                          >
                            {STATUS_CONFIG[lead.status].label}
                          </span>
                        </td>
                        <td className="px-5 py-3.5 whitespace-nowrap">
                          <div
                            className="flex items-center gap-2"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {/* Status change */}
                            <select
                              value={lead.status}
                              onChange={(e) =>
                                handleStatusChange(
                                  lead.id,
                                  e.target.value as LeadStatus
                                )
                              }
                              className="border border-border-subtle bg-white px-2 py-1 text-xs text-text-primary outline-none focus:border-text-primary"
                            >
                              {ALL_STATUSES.map((s) => (
                                <option key={s} value={s}>
                                  {STATUS_CONFIG[s].label}
                                </option>
                              ))}
                            </select>

                            {/* View details */}
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedLead(
                                  expandedLead === lead.id ? null : lead.id
                                )
                              }
                              className="p-1.5 text-text-secondary hover:bg-bg-glass hover:text-text-primary transition-colors"
                              title="View Details"
                            >
                              <Eye size={15} />
                            </button>

                            {/* Delete */}
                            <button
                              type="button"
                              onClick={() => handleDelete(lead.id)}
                              className="p-1.5 text-text-secondary hover:bg-error/10 hover:text-error transition-colors"
                              title="Delete Lead"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>

                      {/* Expanded Details Row */}
                      {expandedLead === lead.id && (
                        <tr
                          key={`${lead.id}-details`}
                          className="border-b border-border-subtle bg-bg-glass"
                        >
                          <td colSpan={8} className="px-5 py-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="space-y-3 max-w-3xl">
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                                      Name
                                    </p>
                                    <p className="mt-0.5 text-sm text-text-primary">
                                      {lead.name}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                                      Email
                                    </p>
                                    <p className="mt-0.5 text-sm text-text-primary">
                                      {lead.email}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                                      Phone
                                    </p>
                                    <p className="mt-0.5 text-sm text-text-primary">
                                      {lead.phone}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                                      Company
                                    </p>
                                    <p className="mt-0.5 text-sm text-text-primary">
                                      {lead.company}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                                      Service Interested
                                    </p>
                                    <p className="mt-0.5 text-sm text-text-primary">
                                      {lead.serviceInterested}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                                      Submitted
                                    </p>
                                    <p className="mt-0.5 text-sm text-text-primary">
                                      {formatDate(lead.createdAt)}
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                                    Message
                                  </p>
                                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                                    {lead.message}
                                  </p>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => setExpandedLead(null)}
                                className="shrink-0 p-1 text-text-secondary hover:text-text-primary transition-colors"
                              >
                                <X size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* ---- Pagination ---- */}
          {filtered.length > ITEMS_PER_PAGE && (
            <div className="flex items-center justify-between border-t border-border-subtle px-5 py-3.5">
              <p className="text-xs text-text-secondary">
                Showing {(safePage - 1) * ITEMS_PER_PAGE + 1} to{" "}
                {Math.min(safePage * ITEMS_PER_PAGE, filtered.length)} of{" "}
                {filtered.length}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={safePage <= 1}
                  onClick={() => handlePageChange(safePage - 1)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:bg-bg-glass hover:text-text-primary disabled:opacity-40 disabled:pointer-events-none"
                >
                  <ChevronLeft size={14} />
                  Previous
                </button>

                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => handlePageChange(page)}
                      className={`h-7 w-7 text-xs font-medium transition-colors ${
                        page === safePage
                          ? "bg-text-primary text-white"
                          : "text-text-secondary hover:bg-bg-glass hover:text-text-primary"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  type="button"
                  disabled={safePage >= totalPages}
                  onClick={() => handlePageChange(safePage + 1)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:bg-bg-glass hover:text-text-primary disabled:opacity-40 disabled:pointer-events-none"
                >
                  Next
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
