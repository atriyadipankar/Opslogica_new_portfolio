import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Admin — Opslogica",
    default: "Admin — Opslogica",
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-text-primary">
      {children}
    </div>
  );
}
