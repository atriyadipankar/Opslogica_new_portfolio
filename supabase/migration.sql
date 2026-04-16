-- ==========================================================================
-- OpsLogica — Supabase Migration
-- Replaces Prisma schema with native Postgres tables + RLS
-- ==========================================================================

-- ---------------------------------------------------------------------------
-- 1. Enum Types
-- ---------------------------------------------------------------------------

CREATE TYPE lead_status AS ENUM ('new', 'in_progress', 'converted', 'archived');
CREATE TYPE post_status AS ENUM ('draft', 'published');

-- ---------------------------------------------------------------------------
-- 2. Tables
-- ---------------------------------------------------------------------------

CREATE TABLE leads (
  id                  uuid         PRIMARY KEY DEFAULT gen_random_uuid(),
  name                text         NOT NULL,
  email               text         NOT NULL,
  phone               text,
  company             text,
  industry            text,
  services_interested text[]       DEFAULT '{}',
  budget_range        text,
  hear_about_us       text,
  message             text         NOT NULL,
  status              lead_status  DEFAULT 'new',
  created_at          timestamptz  DEFAULT now(),
  updated_at          timestamptz  DEFAULT now()
);

CREATE TABLE blog_posts (
  id               uuid         PRIMARY KEY DEFAULT gen_random_uuid(),
  title            text         NOT NULL,
  slug             text         UNIQUE NOT NULL,
  excerpt          text,
  content          text         NOT NULL,
  cover_image      text,
  tags             text[]       DEFAULT '{}',
  category         text,
  status           post_status  DEFAULT 'draft',
  seo_title        text,
  seo_description  text,
  focus_keyword    text,
  og_image         text,
  published_at     timestamptz,
  created_at       timestamptz  DEFAULT now(),
  updated_at       timestamptz  DEFAULT now()
);

CREATE TABLE case_studies (
  id                   uuid         PRIMARY KEY DEFAULT gen_random_uuid(),
  title                text         NOT NULL,
  slug                 text         UNIQUE NOT NULL,
  client_name          text,
  industry             text         NOT NULL,
  services_used        text[]       DEFAULT '{}',
  challenge            text         NOT NULL,
  solution             text         NOT NULL,
  results              text         NOT NULL,
  metrics              jsonb[]      DEFAULT '{}',
  testimonial_quote    text,
  testimonial_author   text,
  testimonial_title    text,
  cover_image          text,
  status               post_status  DEFAULT 'draft',
  seo_title            text,
  seo_description      text,
  published_at         timestamptz,
  created_at           timestamptz  DEFAULT now(),
  updated_at           timestamptz  DEFAULT now()
);

CREATE TABLE page_seo (
  id               uuid         PRIMARY KEY DEFAULT gen_random_uuid(),
  page_route       text         UNIQUE NOT NULL,
  seo_title        text,
  seo_description  text,
  focus_keyword    text,
  no_index         boolean      DEFAULT false,
  updated_at       timestamptz  DEFAULT now()
);

CREATE TABLE site_settings (
  id          uuid         PRIMARY KEY DEFAULT gen_random_uuid(),
  key         text         UNIQUE NOT NULL,
  value       text         NOT NULL,
  updated_at  timestamptz  DEFAULT now()
);

-- ---------------------------------------------------------------------------
-- 3. Indexes
-- ---------------------------------------------------------------------------

CREATE INDEX idx_blog_posts_slug   ON blog_posts (slug);
CREATE INDEX idx_blog_posts_status ON blog_posts (status);
CREATE INDEX idx_case_studies_slug   ON case_studies (slug);
CREATE INDEX idx_case_studies_status ON case_studies (status);
CREATE INDEX idx_leads_status      ON leads (status);
CREATE INDEX idx_leads_created_at  ON leads (created_at DESC);
CREATE INDEX idx_page_seo_route    ON page_seo (page_route);

-- ---------------------------------------------------------------------------
-- 4. Updated-at Trigger Function
-- ---------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to all tables

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON case_studies
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON page_seo
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON site_settings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ---------------------------------------------------------------------------
-- 5. Row Level Security
-- ---------------------------------------------------------------------------

ALTER TABLE leads         ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts    ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies  ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_seo      ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Service role: full access on all tables

CREATE POLICY "Service role full access on leads"
  ON leads FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Service role full access on blog_posts"
  ON blog_posts FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Service role full access on case_studies"
  ON case_studies FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Service role full access on page_seo"
  ON page_seo FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "Service role full access on site_settings"
  ON site_settings FOR ALL
  USING (auth.role() = 'service_role')
  WITH CHECK (auth.role() = 'service_role');

-- Public (anon/authenticated): read published blog posts

CREATE POLICY "Anyone can read published blog posts"
  ON blog_posts FOR SELECT
  USING (status = 'published');

-- Public (anon/authenticated): read published case studies

CREATE POLICY "Anyone can read published case studies"
  ON case_studies FOR SELECT
  USING (status = 'published');

-- Public: submit contact form (insert leads)

CREATE POLICY "Anyone can submit a lead"
  ON leads FOR INSERT
  WITH CHECK (true);

-- Authenticated users can read page_seo and site_settings

CREATE POLICY "Authenticated users can read page_seo"
  ON page_seo FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can read site_settings"
  ON site_settings FOR SELECT
  USING (auth.role() = 'authenticated');

-- Allow anon to read page_seo (needed for public page metadata)

CREATE POLICY "Anon can read page_seo"
  ON page_seo FOR SELECT
  USING (auth.role() = 'anon');

-- Allow anon to read site_settings (needed for public site config)

CREATE POLICY "Anon can read site_settings"
  ON site_settings FOR SELECT
  USING (auth.role() = 'anon');

-- ---------------------------------------------------------------------------
-- 6. Seed Data
-- ---------------------------------------------------------------------------

-- Blog Posts (2 published, 1 draft)

INSERT INTO blog_posts (title, slug, excerpt, content, tags, category, status, seo_title, seo_description, focus_keyword, published_at)
VALUES
(
  'How AI Automation Is Transforming Dental Clinics in 2026',
  'ai-automation-transforming-dental-clinics-2026',
  'Discover how forward-thinking dental practices are using AI to reduce no-shows, automate insurance verification, and improve patient outcomes.',
  'Dental clinics across the US and Canada are adopting AI-powered systems to streamline operations. From automated appointment reminders that cut no-shows by up to 40%, to intelligent insurance verification that processes claims in seconds, the impact is measurable and immediate.

In this article, we explore three key areas where AI is making the biggest difference for dental practices.',
  ARRAY['AI Automation', 'Healthcare', 'Dental'],
  'AI Automation',
  'published',
  'AI Automation for Dental Clinics | Opslogica',
  'Learn how AI automation is helping dental clinics reduce no-shows, automate insurance, and improve patient care in 2026.',
  'AI automation dental clinics',
  '2026-03-15T00:00:00Z'
),
(
  'The Real ROI of Business Process Automation for Healthcare',
  'roi-business-process-automation-healthcare',
  'We break down the actual numbers behind BPA implementations in healthcare — what it costs, what it saves, and how long until you see returns.',
  'Business process automation isn''t just a buzzword. For healthcare organizations, it translates directly to reduced administrative burden, fewer billing errors, and faster revenue cycles.

We analyzed data from 20+ healthcare BPA implementations and found that the average practice sees ROI within 4.2 months.',
  ARRAY['Business Automation', 'Healthcare', 'ROI'],
  'Business Automation',
  'published',
  'ROI of Business Automation in Healthcare | Opslogica',
  'Real numbers on healthcare business process automation ROI — costs, savings, and timeline to returns.',
  'business automation ROI healthcare',
  '2026-03-28T00:00:00Z'
),
(
  'Next.js vs WordPress: Which Is Right for Your Business Website?',
  'nextjs-vs-wordpress-business-website',
  'A practical comparison for business owners choosing between Next.js and WordPress for their company website.',
  'Choosing the right platform for your business website depends on your goals, budget, and growth plans. WordPress powers 40% of the web but Next.js is rapidly gaining ground for performance-critical sites.

Here''s our honest breakdown of when each platform makes sense.',
  ARRAY['Website Development', 'Next.js', 'WordPress'],
  'Website Development',
  'draft',
  'Next.js vs WordPress for Business | Opslogica',
  'Next.js vs WordPress — which is the right choice for your business website? A practical guide.',
  'Next.js vs WordPress',
  NULL
);

-- Case Studies (2 published)

INSERT INTO case_studies (title, slug, client_name, industry, services_used, challenge, solution, results, metrics, testimonial_quote, testimonial_author, testimonial_title, status, seo_title, seo_description, published_at)
VALUES
(
  'Reducing Patient Intake Time by 82% for SmileBright Dental',
  'smilebright-dental-intake-automation',
  'SmileBright Dental',
  'Dental Clinics',
  ARRAY['Software Development', 'Business Automation'],
  'SmileBright Dental was spending over 45 minutes per patient on manual paperwork, leading to long wait times and frustrated patients.',
  'Opslogica built a custom digital intake system with real-time insurance verification, automated form pre-population, and a tablet-friendly interface.',
  'Patient intake time dropped from 45 minutes to under 8 minutes. Front-desk staff could focus on patient experience, and insurance claim rejections fell by 60%.',
  ARRAY[
    '{"value": "82%", "description": "reduction in intake time"}'::jsonb,
    '{"value": "60%", "description": "fewer claim rejections"}'::jsonb,
    '{"value": "4.9/5", "description": "patient satisfaction score"}'::jsonb,
    '{"value": "$120K", "description": "annual cost savings"}'::jsonb
  ],
  'Opslogica transformed our front office. Patients comment on how smooth the process is, and our staff finally have time to breathe.',
  'Dr. Sarah Chen',
  'Founder, SmileBright Dental',
  'published',
  'SmileBright Dental Case Study | Opslogica',
  'See how Opslogica reduced patient intake time by 82% and saved $120K annually for SmileBright Dental.',
  '2026-02-20T00:00:00Z'
),
(
  'Saving 15 Hours Per Week for Metro Physician Group',
  'metro-physician-group-automation',
  'Metro Physician Group',
  'Physician Practices',
  ARRAY['AI Automation', 'Software Development'],
  'Metro Physician Group''s administrative team was drowning in manual referral tracking, appointment scheduling, and insurance follow-ups across 4 locations.',
  'Opslogica deployed an AI-powered workflow engine that automated referral routing, appointment confirmations, and insurance pre-authorization across all locations.',
  'Administrative workload dropped by 15 hours per week. Referral processing time decreased from 3 days to 4 hours, and patient wait times fell by 35%.',
  ARRAY[
    '{"value": "15hrs", "description": "saved per week"}'::jsonb,
    '{"value": "35%", "description": "shorter wait times"}'::jsonb,
    '{"value": "92%", "description": "referral completion rate"}'::jsonb,
    '{"value": "3→0.5", "description": "days to process referrals"}'::jsonb
  ],
  'The automation Opslogica built handles in minutes what used to take our team half a day. It''s been a game changer for our operations.',
  'Dr. Michael Torres',
  'Managing Partner, Metro Physician Group',
  'published',
  'Metro Physician Group Case Study | Opslogica',
  'How Opslogica saved Metro Physician Group 15 hours per week through AI-powered workflow automation.',
  '2026-03-05T00:00:00Z'
);

-- Page SEO (18 entries for all static routes)

INSERT INTO page_seo (page_route, seo_title, seo_description, focus_keyword)
VALUES
  ('/', 'Opslogica | Software Development, AI & Business Automation', '', 'Opslogica'),
  ('/about', 'About Opslogica', '', 'about opslogica'),
  ('/services', 'Our Services', '', 'software development services'),
  ('/services/software-development', 'Custom Software Development', '', 'custom software development'),
  ('/services/website-development', 'Website Development Services', '', 'website development services'),
  ('/services/ai-automation', 'AI Automation for Small Business', '', 'AI automation small business'),
  ('/services/business-automation', 'Business Process Automation', '', 'business process automation'),
  ('/industries', 'Industries We Serve', '', 'healthcare software'),
  ('/industries/dental-clinics', 'AI Automation for Dental Clinics', '', 'dental clinic software'),
  ('/industries/orthopedic-clinics', 'Software for Orthopedic Clinics', '', 'orthopedic practice software'),
  ('/industries/psychology-practices', 'Technology for Psychology Practices', '', 'mental health practice software'),
  ('/industries/physician-practices', 'Physician Practice Automation', '', 'physician practice management'),
  ('/industries/pathological-labs', 'Lab Information Management Systems', '', 'pathology lab software'),
  ('/industries/dermatology-clinics', 'Digital Solutions for Dermatology', '', 'dermatology clinic software'),
  ('/blog', 'Blog | Opslogica', '', 'software development blog'),
  ('/case-studies', 'Case Studies | Opslogica', '', 'software case studies'),
  ('/contact', 'Contact Us | Opslogica', '', 'hire software development company'),
  ('/privacy-policy', 'Privacy Policy | Opslogica', '', 'privacy policy');
