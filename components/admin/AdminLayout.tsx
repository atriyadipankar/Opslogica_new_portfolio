"use client";

import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <AdminSidebar />
      <main className="ml-64 min-h-screen p-6 lg:p-8">{children}</main>
    </div>
  );
}
