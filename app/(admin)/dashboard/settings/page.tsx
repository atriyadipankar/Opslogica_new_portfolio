"use client";

import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Settings,
  Save,
  Building2,
  Share2,
  BarChart3,
  Mail,
  CheckCircle,
} from "lucide-react";

export default function SiteSettingsPage() {
  // Company Info
  const [companyName, setCompanyName] = useState("OpsLogica");
  const [tagline, setTagline] = useState(
    "AI-Powered Business Automation"
  );
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [email, setEmail] = useState("hello@opslogica.com");
  const [address, setAddress] = useState(
    "123 Innovation Drive, Suite 400, San Francisco, CA 94105"
  );

  // Social Links
  const [linkedIn, setLinkedIn] = useState(
    "https://linkedin.com/company/opslogica"
  );
  const [twitter, setTwitter] = useState("https://twitter.com/opslogica");
  const [github, setGithub] = useState("https://github.com/opslogica");
  const [facebook, setFacebook] = useState(
    "https://facebook.com/opslogica"
  );

  // Analytics
  const [gaId, setGaId] = useState("G-XXXXXXXXXX");
  const [gscCode, setGscCode] = useState("");

  // Email
  const [notificationEmail, setNotificationEmail] = useState(
    "leads@opslogica.com"
  );
  const [apiKey, setApiKey] = useState("");

  // Success states per section
  const [successSection, setSuccessSection] = useState<string | null>(null);

  function handleSave(section: string) {
    // TODO: connect to API
    setSuccessSection(section);
    setTimeout(() => setSuccessSection(null), 3000);
  }

  const inputClasses =
    "w-full bg-white border border-border-subtle text-text-primary px-4 py-3 text-sm placeholder:text-text-secondary/50 focus:border-text-primary focus:outline-none transition-colors";

  const labelClasses =
    "mb-1.5 block text-sm font-medium text-text-secondary";

  function SuccessBadge({ section }: { section: string }) {
    if (successSection !== section) return null;
    return (
      <div className="flex items-center gap-1.5 text-sm font-medium text-text-primary">
        <CheckCircle className="h-4 w-4" />
        Saved
      </div>
    );
  }

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <Settings className="h-6 w-6 text-text-primary" />
        <h1 className="font-display text-2xl font-bold text-text-primary">
          Site Settings
        </h1>
      </div>

      <div className="mx-auto max-w-4xl space-y-8">
        {/* Company Info */}
        <section className="border border-border-subtle bg-white p-6">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-text-primary" />
              <h2 className="font-display text-lg font-semibold text-text-primary">
                Company Info
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <SuccessBadge section="company" />
              <button
                onClick={() => handleSave("company")}
                className="btn-primary text-sm !px-4 !py-2"
              >
                <Save className="h-3.5 w-3.5" />
                Save
              </button>
            </div>
          </div>
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="companyName" className={labelClasses}>
                  Company Name
                </label>
                <input
                  id="companyName"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="tagline" className={labelClasses}>
                  Tagline
                </label>
                <input
                  id="tagline"
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className={inputClasses}
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClasses}
                />
              </div>
            </div>
            <div>
              <label htmlFor="address" className={labelClasses}>
                Address
              </label>
              <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={inputClasses}
              />
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="border border-border-subtle bg-white p-6">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Share2 className="h-5 w-5 text-text-primary" />
              <h2 className="font-display text-lg font-semibold text-text-primary">
                Social Links
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <SuccessBadge section="social" />
              <button
                onClick={() => handleSave("social")}
                className="btn-primary text-sm !px-4 !py-2"
              >
                <Save className="h-3.5 w-3.5" />
                Save
              </button>
            </div>
          </div>
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="linkedin" className={labelClasses}>
                  LinkedIn URL
                </label>
                <input
                  id="linkedin"
                  type="url"
                  placeholder="https://linkedin.com/company/..."
                  value={linkedIn}
                  onChange={(e) => setLinkedIn(e.target.value)}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="twitter" className={labelClasses}>
                  Twitter URL
                </label>
                <input
                  id="twitter"
                  type="url"
                  placeholder="https://twitter.com/..."
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                  className={inputClasses}
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="github" className={labelClasses}>
                  GitHub URL
                </label>
                <input
                  id="github"
                  type="url"
                  placeholder="https://github.com/..."
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="facebook" className={labelClasses}>
                  Facebook URL
                </label>
                <input
                  id="facebook"
                  type="url"
                  placeholder="https://facebook.com/..."
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                  className={inputClasses}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Analytics */}
        <section className="border border-border-subtle bg-white p-6">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-text-primary" />
              <h2 className="font-display text-lg font-semibold text-text-primary">
                Analytics
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <SuccessBadge section="analytics" />
              <button
                onClick={() => handleSave("analytics")}
                className="btn-primary text-sm !px-4 !py-2"
              >
                <Save className="h-3.5 w-3.5" />
                Save
              </button>
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <label htmlFor="gaId" className={labelClasses}>
                Google Analytics 4 ID
              </label>
              <input
                id="gaId"
                type="text"
                placeholder="G-XXXXXXXXXX"
                value={gaId}
                onChange={(e) => setGaId(e.target.value)}
                className={inputClasses}
              />
              <p className="mt-1 text-xs text-text-secondary/60">
                Your GA4 Measurement ID (starts with G-)
              </p>
            </div>
            <div>
              <label htmlFor="gscCode" className={labelClasses}>
                Google Search Console Verification Code
              </label>
              <input
                id="gscCode"
                type="text"
                placeholder="Paste your verification meta tag content"
                value={gscCode}
                onChange={(e) => setGscCode(e.target.value)}
                className={inputClasses}
              />
              <p className="mt-1 text-xs text-text-secondary/60">
                The content value from the Google Search Console verification
                meta tag
              </p>
            </div>
          </div>
        </section>

        {/* Email */}
        <section className="border border-border-subtle bg-white p-6">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-text-primary" />
              <h2 className="font-display text-lg font-semibold text-text-primary">
                Email
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <SuccessBadge section="email" />
              <button
                onClick={() => handleSave("email")}
                className="btn-primary text-sm !px-4 !py-2"
              >
                <Save className="h-3.5 w-3.5" />
                Save
              </button>
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <label htmlFor="notificationEmail" className={labelClasses}>
                Lead Notification Email Address
              </label>
              <input
                id="notificationEmail"
                type="email"
                placeholder="leads@yourcompany.com"
                value={notificationEmail}
                onChange={(e) => setNotificationEmail(e.target.value)}
                className={inputClasses}
              />
              <p className="mt-1 text-xs text-text-secondary/60">
                New lead submissions will be sent to this email address
              </p>
            </div>
            <div>
              <label htmlFor="apiKey" className={labelClasses}>
                SMTP / Resend API Key
              </label>
              <input
                id="apiKey"
                type="password"
                placeholder="Enter your API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className={inputClasses}
              />
              <p className="mt-1 text-xs text-text-secondary/60">
                API key for email sending service (e.g. Resend, SendGrid)
              </p>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}
