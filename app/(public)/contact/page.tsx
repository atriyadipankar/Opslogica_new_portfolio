import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import GradientText from "@/components/ui/GradientText";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Opslogica",
  description:
    "Get in touch with Opslogica for custom software development, AI automation, and business automation solutions. We serve clients across USA, Canada, Europe, Australia, and Gulf.",
  alternates: {
    canonical: "https://opslogica.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      {/* ======== Hero ======== */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[1280px] px-6 text-center">
          <span className="badge-label">Contact</span>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-text-primary md:text-6xl">
            Let&apos;s Build Something{" "}
            <GradientText>Together</GradientText>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-text-secondary">
            Ready to transform your business? Tell us about your project and
            our team will get back to you within one business day.
          </p>
        </div>
      </section>

      {/* ======== Two-Column Layout ======== */}
      <section className="bg-white section-padding pt-0">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left Column — Form (3/5 width) */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Right Column — Info (2/5 width) */}
            <div className="lg:col-span-2">
              {/* Contact Details Card */}
              <div className="border border-border-subtle bg-white p-8 transition-colors hover:border-text-primary">
                <h3 className="text-xl font-semibold tracking-tight text-text-primary">
                  Contact Information
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Reach out directly or fill in the form and we&apos;ll get
                  back to you.
                </p>

                {/* Email */}
                <div className="mt-8 space-y-6">
                  <a
                    href="mailto:hello@opslogica.com"
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border-subtle text-text-primary transition-colors group-hover:border-text-primary">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary">Email</p>
                      <p className="font-medium text-text-primary transition-colors group-hover:text-text-secondary">
                        hello@opslogica.com
                      </p>
                    </div>
                  </a>
                </div>

                {/* Response Time */}
                <div className="mt-8 flex items-center gap-3 border border-border-subtle bg-white px-4 py-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <p className="text-sm text-text-secondary">
                    <span className="font-medium text-text-primary">
                      We typically respond within 24 hours.
                    </span>
                  </p>
                </div>

                {/* Timezone */}
                <div className="mt-4 flex items-center gap-3 border border-border-subtle bg-white px-4 py-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  <p className="text-sm text-text-secondary">
                    <span className="font-medium text-text-primary">
                      We serve all time zones
                    </span>{" "}
                    — USA, Canada, Europe, Australia, Gulf
                  </p>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <p className="mb-4 text-sm font-medium text-text-secondary">
                    Connect With Us
                  </p>
                  <div className="space-y-3">
                    <a
                      href="https://linkedin.com/company/opslogica"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      <div className="flex h-10 w-10 items-center justify-center border border-border-subtle transition-colors hover:border-text-primary">
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      <span className="font-medium">LinkedIn</span>
                    </a>
                    <a
                      href="https://x.com/opslogica"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      <div className="flex h-10 w-10 items-center justify-center border border-border-subtle transition-colors hover:border-text-primary">
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </div>
                      <span className="font-medium">Twitter / X</span>
                    </a>
                    <a
                      href="https://github.com/opslogica"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      <div className="flex h-10 w-10 items-center justify-center border border-border-subtle transition-colors hover:border-text-primary">
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                      </div>
                      <span className="font-medium">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
