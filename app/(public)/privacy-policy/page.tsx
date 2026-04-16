import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Privacy Policy | Opslogica",
  description:
    "Read the Opslogica privacy policy to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://opslogica.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />

      {/* ======== Header ======== */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[800px] px-6">
          <h1 className="text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-text-secondary">
            Last updated: April 2026
          </p>
        </div>
      </section>

      {/* ======== Content ======== */}
      <div className="section-border" />
      <section className="bg-white section-padding pt-0">
        <div className="mx-auto max-w-[800px] space-y-12 px-6">
          {/* Introduction */}
          <div>
            <p className="text-lg leading-relaxed text-text-secondary">
              At Opslogica (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;), we are committed to protecting your privacy
              and ensuring that your personal information is handled
              responsibly. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website at{" "}
              <Link
                href="/"
                className="font-medium text-text-primary hover:underline"
              >
                opslogica.com
              </Link>{" "}
              or engage with our services.
            </p>
          </div>

          {/* 1. Information We Collect */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
              1. Information We Collect
            </h2>
            <div className="mt-4 space-y-4 text-text-secondary">
              <p className="leading-relaxed">
                We may collect the following types of information:
              </p>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary">
                  Personal Information
                </h3>
                <p className="leading-relaxed">
                  When you fill out a contact form, request a consultation, or
                  subscribe to our newsletter, we may collect your name, email
                  address, phone number, company name, and any other details
                  you voluntarily provide.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary">
                  Usage Data
                </h3>
                <p className="leading-relaxed">
                  We automatically collect certain information when you visit
                  our website, including your IP address, browser type,
                  operating system, referring URLs, pages viewed, time spent on
                  pages, and other diagnostic data.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-text-primary">
                  Device Information
                </h3>
                <p className="leading-relaxed">
                  We may collect information about the device you use to access
                  our website, including hardware model, operating system
                  version, unique device identifiers, and network information.
                </p>
              </div>
            </div>
          </div>

          {/* 2. How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
              2. How We Use Your Information
            </h2>
            <div className="mt-4 space-y-3 text-text-secondary">
              <p className="leading-relaxed">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-relaxed">
                <li>
                  To respond to your inquiries and provide the services you
                  request
                </li>
                <li>
                  To send you project updates, proposals, and relevant
                  communications
                </li>
                <li>
                  To improve our website, services, and overall user
                  experience
                </li>
                <li>
                  To analyze usage trends and optimize our marketing efforts
                </li>
                <li>
                  To detect, prevent, and address technical issues or security
                  threats
                </li>
                <li>
                  To comply with legal obligations and enforce our terms of
                  service
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Cookies and Tracking */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
              3. Cookies and Tracking
            </h2>
            <div className="mt-4 space-y-3 text-text-secondary">
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to monitor
                activity on our website and retain certain information. Cookies
                are small data files placed on your device that help us
                understand how you interact with our site.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium text-text-primary">
                  Essential Cookies:
                </span>{" "}
                Required for the website to function properly, such as session
                management and security.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium text-text-primary">
                  Analytics Cookies:
                </span>{" "}
                Help us understand how visitors interact with our website by
                collecting and reporting information anonymously.
              </p>
              <p className="leading-relaxed">
                <span className="font-medium text-text-primary">
                  Marketing Cookies:
                </span>{" "}
                Used to track visitors across websites to display relevant
                advertisements.
              </p>
              <p className="leading-relaxed">
                You can configure your browser to refuse all cookies or to
                indicate when a cookie is being sent. However, some features
                of our website may not function properly without cookies.
              </p>
            </div>
          </div>

          {/* 4. Third-Party Services */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
              4. Third-Party Services
            </h2>
            <div className="mt-4 space-y-3 text-text-secondary">
              <p className="leading-relaxed">
                We may use third-party service providers to help us operate
                our website, conduct our business, or provide services to you.
                These third parties have access to your personal information
                only to perform specific tasks on our behalf and are obligated
                not to disclose or use it for any other purpose.
              </p>
              <p className="leading-relaxed">
                Third-party services we may use include:
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-relaxed">
                <li>
                  <span className="font-medium text-text-primary">
                    Analytics providers
                  </span>{" "}
                  (e.g., Google Analytics) for website traffic analysis
                </li>
                <li>
                  <span className="font-medium text-text-primary">
                    Email service providers
                  </span>{" "}
                  for sending newsletters and communications
                </li>
                <li>
                  <span className="font-medium text-text-primary">
                    Cloud hosting providers
                  </span>{" "}
                  for storing and serving website data
                </li>
                <li>
                  <span className="font-medium text-text-primary">
                    CRM platforms
                  </span>{" "}
                  for managing client relationships and communications
                </li>
              </ul>
            </div>
          </div>

          {/* 5. Data Security */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
              5. Data Security
            </h2>
            <div className="mt-4 space-y-3 text-text-secondary">
              <p className="leading-relaxed">
                We implement industry-standard security measures to protect
                your personal information from unauthorized access,
                alteration, disclosure, or destruction. These measures include
                encryption of data in transit (SSL/TLS), secure server
                infrastructure, regular security audits, and access controls.
              </p>
              <p className="leading-relaxed">
                However, no method of transmission over the Internet or method
                of electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your personal
                information, we cannot guarantee its absolute security.
              </p>
            </div>
          </div>

          {/* 6. Your Rights */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
              6. Your Rights
            </h2>
            <div className="mt-4 space-y-3 text-text-secondary">
              <p className="leading-relaxed">
                Depending on your jurisdiction, you may have the following
                rights regarding your personal data:
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-relaxed">
                <li>
                  <span className="font-medium text-text-primary">
                    Right to Access:
                  </span>{" "}
                  You can request a copy of the personal data we hold about
                  you.
                </li>
                <li>
                  <span className="font-medium text-text-primary">
                    Right to Rectification:
                  </span>{" "}
                  You can request that we correct any inaccurate or incomplete
                  information.
                </li>
                <li>
                  <span className="font-medium text-text-primary">
                    Right to Erasure:
                  </span>{" "}
                  You can request that we delete your personal data, subject
                  to certain legal exceptions.
                </li>
                <li>
                  <span className="font-medium text-text-primary">
                    Right to Restrict Processing:
                  </span>{" "}
                  You can request that we limit how we use your data.
                </li>
                <li>
                  <span className="font-medium text-text-primary">
                    Right to Data Portability:
                  </span>{" "}
                  You can request to receive your data in a structured,
                  commonly used, machine-readable format.
                </li>
                <li>
                  <span className="font-medium text-text-primary">
                    Right to Object:
                  </span>{" "}
                  You can object to the processing of your personal data for
                  direct marketing purposes.
                </li>
              </ul>
              <p className="leading-relaxed">
                To exercise any of these rights, please contact us using the
                information provided at the bottom of this page. We will
                respond to your request within 30 days.
              </p>
            </div>
          </div>

          {/* 7. Children's Privacy */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
              7. Children&apos;s Privacy
            </h2>
            <div className="mt-4 space-y-3 text-text-secondary">
              <p className="leading-relaxed">
                Our website and services are not directed to individuals under
                the age of 16. We do not knowingly collect personal
                information from children. If we become aware that we have
                collected personal data from a child without verification of
                parental consent, we will take steps to remove that
                information from our servers promptly.
              </p>
            </div>
          </div>

          {/* 8. Changes to This Policy */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
              8. Changes to This Policy
            </h2>
            <div className="mt-4 space-y-3 text-text-secondary">
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to
                reflect changes in our practices, technology, legal
                requirements, or other factors. When we make changes, we will
                update the &ldquo;Last updated&rdquo; date at the top of this
                page and post the revised policy on our website.
              </p>
              <p className="leading-relaxed">
                We encourage you to review this Privacy Policy periodically
                to stay informed about how we are protecting your information.
                Your continued use of our website after any changes to this
                policy constitutes your acceptance of the updated terms.
              </p>
            </div>
          </div>

          {/* 9. Contact Us */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
              9. Contact Us
            </h2>
            <div className="mt-4 space-y-3 text-text-secondary">
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, your
                personal data, or would like to exercise your data rights,
                please contact us:
              </p>
              <div className="mt-4 border border-border-subtle bg-white p-6">
                <p className="font-medium text-text-primary">Opslogica</p>
                <p className="mt-1">
                  Email:{" "}
                  <a
                    href="mailto:hello@opslogica.com"
                    className="font-medium text-text-primary hover:underline"
                  >
                    hello@opslogica.com
                  </a>
                </p>
                <p className="mt-1">
                  Website:{" "}
                  <Link
                    href="/contact"
                    className="font-medium text-text-primary hover:underline"
                  >
                    opslogica.com/contact
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
