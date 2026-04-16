import type { Metadata } from "next";
import Link from "next/link";
import { Lightbulb, Eye, Heart, Award } from "lucide-react";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import GradientText from "@/components/ui/GradientText";

export const metadata: Metadata = {
  title: "About Opslogica",
  description:
    "Learn about Opslogica — a global software development and AI automation company helping businesses automate, innovate, and grow across USA, Canada, Europe, Australia, and the Gulf.",
  alternates: {
    canonical: "https://opslogica.com/about",
  },
};

const values = [
  {
    title: "Innovation",
    description:
      "We stay at the cutting edge of technology, leveraging AI, automation, and modern frameworks to deliver solutions that keep our clients ahead of the curve.",
    icon: <Lightbulb className="h-8 w-8" />,
  },
  {
    title: "Transparency",
    description:
      "No hidden fees, no surprise timelines. We communicate openly at every stage of the project and give you full visibility into progress, challenges, and milestones.",
    icon: <Eye className="h-8 w-8" />,
  },
  {
    title: "Client-First",
    description:
      "Your success is our success. We treat every project as a partnership, not a transaction. We listen deeply, advise honestly, and deliver with your business goals in mind.",
    icon: <Heart className="h-8 w-8" />,
  },
  {
    title: "Excellence",
    description:
      "Good enough is never good enough. We hold ourselves to the highest standards of quality in code, design, testing, and delivery — every single time.",
    icon: <Award className="h-8 w-8" />,
  },
];

const regions = [
  { name: "United States", flag: "US" },
  { name: "Canada", flag: "CA" },
  { name: "Europe", flag: "EU" },
  { name: "Australia", flag: "AU" },
  { name: "Gulf Region", flag: "GCC" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      {/* ======== Hero Section ======== */}
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="max-w-3xl">
            <span className="badge-label">About Us</span>
            <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-text-primary md:text-6xl">
              About <GradientText>Opslogica</GradientText>
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-text-secondary">
              We&apos;re a team of engineers, designers, and AI specialists
              helping businesses across USA, Canada, Europe, Australia, and the
              Gulf automate operations and build world-class software.
            </p>
          </div>
        </div>
      </section>

      {/* ======== Mission Section ======== */}
      <div className="section-border" />
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeader
            title="Our Mission"
            subtitle="What drives us forward every single day."
            badge="Purpose"
          />
          <div className="mt-16 flex justify-center">
            <GlassCard className="max-w-3xl p-10 text-center">
              <p className="text-2xl font-semibold leading-relaxed text-text-primary">
                &ldquo;To democratize access to enterprise-grade technology for
                businesses of every size.&rdquo;
              </p>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                We believe every organization — whether a five-person startup or
                a multinational enterprise — deserves tools that are powerful,
                reliable, and built to scale. Our mission is to make that a
                reality through custom software, intelligent automation, and
                strategic digital consulting.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ======== Values Section ======== */}
      <div className="section-border" />
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeader
            title="What We Stand For"
            subtitle="The principles that guide every decision we make and every line of code we write."
            badge="Our Values"
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <GlassCard key={value.title} className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center border border-border-subtle text-text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-text-primary">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {value.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ======== Global Reach Section ======== */}
      <div className="section-border" />
      <section className="bg-white section-padding">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeader
            title="Global Reach, Local Expertise"
            subtitle="We serve clients across five major regions, delivering world-class solutions with an understanding of local business needs."
            badge="Where We Operate"
          />
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
            {regions.map((region) => (
              <div
                key={region.name}
                className="flex items-center gap-3 border border-border-subtle bg-white px-6 py-4 transition-colors hover:border-text-primary"
              >
                <span className="flex h-10 w-10 items-center justify-center border border-border-subtle text-sm font-bold text-text-primary">
                  {region.flag}
                </span>
                <span className="text-lg font-medium text-text-primary">
                  {region.name}
                </span>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg leading-relaxed text-text-secondary">
            Whether you&apos;re based in New York, Toronto, London, Sydney, or
            Dubai, our distributed team ensures seamless collaboration and
            support in your time zone.
          </p>
        </div>
      </section>

      {/* ======== CTA Section ======== */}
      <div className="section-border" />
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
            Ready to Work With <GradientText>Us?</GradientText>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            Whether you need custom software, AI-powered automation, or a
            complete digital transformation strategy, we&apos;re ready to help
            you move forward.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="btn-secondary px-8 py-4 text-base"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
