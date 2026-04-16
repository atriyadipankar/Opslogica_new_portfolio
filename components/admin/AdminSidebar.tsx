"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  LayoutDashboard,
  Inbox,
  FileText,
  Briefcase,
  Search,
  Settings,
  ExternalLink,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/leads", label: "Leads", icon: Inbox },
  { href: "/dashboard/blog", label: "Blog Posts", icon: FileText },
  { href: "/dashboard/case-studies", label: "Case Studies", icon: Briefcase },
  { href: "/dashboard/seo", label: "SEO Settings", icon: Search },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  function isActive(href: string) {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }
    return pathname.startsWith(href);
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-border-subtle bg-white">
      {/* Logo */}
      <div className="border-b border-border-subtle px-6 py-5">
        <Link href="/dashboard" className="block">
          <img
            src="/images/logo.png"
            alt="Opslogica"
            className="h-4 w-auto"
          />
          <p className="mt-2 text-xs font-medium text-text-secondary">
            Admin Panel
          </p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "border-l-2 border-text-primary text-text-primary bg-bg-glass"
                      : "text-text-secondary hover:bg-bg-glass hover:text-text-primary"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-[18px] w-[18px] shrink-0",
                      active ? "text-text-primary" : "text-text-secondary"
                    )}
                  />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Actions */}
      <div className="border-t border-border-subtle px-3 py-4 space-y-1">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-text-secondary hover:bg-bg-glass hover:text-text-primary transition-colors"
        >
          <ExternalLink className="h-[18px] w-[18px] shrink-0" />
          Back to Site
        </Link>
        <button
          onClick={handleSignOut}
          className="flex w-full items-center gap-3 px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
        >
          <LogOut className="h-[18px] w-[18px] shrink-0" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
