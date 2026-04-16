import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const supabase = createClient(
  'https://phtmbqsmucervmxwlagp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBodG1icXNtdWNlcnZteHdsYWdwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NjMyNzE5NCwiZXhwIjoyMDkxOTAzMTk0fQ.2HdiTm1NKUdOP76y-3NcyPyFI3MUjKFUTjwf51twIkw',
  { auth: { autoRefreshToken: false, persistSession: false } }
);

async function seed() {
  console.log('Seeding Supabase...\n');

  // ── 1. Create Admin User via Supabase Auth ──
  const adminEmail = 'admin@opslogica.com';
  const adminPassword = 'opslogica2026';

  const { data: existingUsers } = await supabase.auth.admin.listUsers();
  const adminExists = existingUsers?.users?.some(u => u.email === adminEmail);

  if (!adminExists) {
    const { data, error } = await supabase.auth.admin.createUser({
      email: adminEmail,
      password: adminPassword,
      email_confirm: true,
    });
    if (error) console.log('Admin create error:', error.message);
    else console.log(`Admin created: ${adminEmail} / ${adminPassword}`);
  } else {
    console.log(`Admin already exists: ${adminEmail}`);
  }

  // ── 2. Blog Posts ──
  const { data: existingPosts } = await supabase.from('blog_posts').select('id', { count: 'exact', head: true });

  const blogPosts = [
    {
      title: 'How AI Automation Is Transforming Dental Clinics in 2026',
      slug: 'ai-automation-transforming-dental-clinics-2026',
      excerpt: 'Discover how forward-thinking dental practices are using AI to reduce no-shows, automate insurance verification, and improve patient outcomes.',
      content: 'Dental clinics across the US and Canada are adopting AI-powered systems to streamline operations. From automated appointment reminders that cut no-shows by up to 40%, to intelligent insurance verification that processes claims in seconds, the impact is measurable and immediate.\n\nIn this article, we explore three key areas where AI is making the biggest difference for dental practices.',
      tags: ['AI Automation', 'Healthcare', 'Dental'],
      category: 'AI Automation',
      status: 'published',
      seo_title: 'AI Automation for Dental Clinics | Opslogica',
      seo_description: 'Learn how AI automation is helping dental clinics reduce no-shows, automate insurance, and improve patient care in 2026.',
      focus_keyword: 'AI automation dental clinics',
      published_at: '2026-03-15T00:00:00Z',
    },
    {
      title: 'The Real ROI of Business Process Automation for Healthcare',
      slug: 'roi-business-process-automation-healthcare',
      excerpt: 'We break down the actual numbers behind BPA implementations in healthcare.',
      content: 'Business process automation translates directly to reduced administrative burden, fewer billing errors, and faster revenue cycles.\n\nWe analyzed data from 20+ healthcare BPA implementations and found that the average practice sees ROI within 4.2 months.',
      tags: ['Business Automation', 'Healthcare', 'ROI'],
      category: 'Business Automation',
      status: 'published',
      seo_title: 'ROI of Business Automation in Healthcare | Opslogica',
      seo_description: 'Real numbers on healthcare business process automation ROI.',
      focus_keyword: 'business automation ROI healthcare',
      published_at: '2026-03-28T00:00:00Z',
    },
    {
      title: 'Next.js vs WordPress: Which Is Right for Your Business Website?',
      slug: 'nextjs-vs-wordpress-business-website',
      excerpt: 'A practical comparison for business owners choosing between Next.js and WordPress.',
      content: 'Choosing the right platform for your business website depends on your goals, budget, and growth plans.',
      tags: ['Website Development', 'Next.js', 'WordPress'],
      category: 'Website Development',
      status: 'draft',
      seo_title: 'Next.js vs WordPress for Business | Opslogica',
      seo_description: 'Next.js vs WordPress — which is the right choice?',
      focus_keyword: 'Next.js vs WordPress',
    },
  ];

  for (const post of blogPosts) {
    const { error } = await supabase.from('blog_posts').upsert(post, { onConflict: 'slug' });
    if (error) console.log('Blog insert error:', error.message);
  }
  console.log(`Blog posts seeded: ${blogPosts.length}`);

  // ── 3. Case Studies ──
  const caseStudies = [
    {
      title: 'Reducing Patient Intake Time by 82% for SmileBright Dental',
      slug: 'smilebright-dental-intake-automation',
      client_name: 'SmileBright Dental',
      industry: 'Dental Clinics',
      services_used: ['Software Development', 'Business Automation'],
      challenge: 'SmileBright Dental was spending over 45 minutes per patient on manual paperwork, leading to long wait times and frustrated patients.',
      solution: 'Opslogica built a custom digital intake system with real-time insurance verification, automated form pre-population, and a tablet-friendly interface.',
      results: 'Patient intake time dropped from 45 minutes to under 8 minutes. Insurance claim rejections fell by 60%.',
      metrics: [
        { value: '82%', description: 'reduction in intake time' },
        { value: '60%', description: 'fewer claim rejections' },
        { value: '4.9/5', description: 'patient satisfaction score' },
        { value: '$120K', description: 'annual cost savings' },
      ],
      testimonial_quote: 'Opslogica transformed our front office. Patients comment on how smooth the process is.',
      testimonial_author: 'Dr. Sarah Chen',
      testimonial_title: 'Founder, SmileBright Dental',
      status: 'published',
      seo_title: 'SmileBright Dental Case Study | Opslogica',
      seo_description: 'See how Opslogica reduced patient intake time by 82%.',
      published_at: '2026-02-20T00:00:00Z',
    },
    {
      title: 'Saving 15 Hours Per Week for Metro Physician Group',
      slug: 'metro-physician-group-automation',
      client_name: 'Metro Physician Group',
      industry: 'Physician Practices',
      services_used: ['AI Automation', 'Software Development'],
      challenge: 'Metro Physician Group was drowning in manual referral tracking and appointment scheduling across 4 locations.',
      solution: 'Opslogica deployed an AI-powered workflow engine that automated referral routing and appointment confirmations.',
      results: 'Administrative workload dropped by 15 hours per week. Referral processing decreased from 3 days to 4 hours.',
      metrics: [
        { value: '15hrs', description: 'saved per week' },
        { value: '35%', description: 'shorter wait times' },
        { value: '92%', description: 'referral completion rate' },
        { value: '3→0.5', description: 'days to process referrals' },
      ],
      testimonial_quote: 'The automation handles in minutes what used to take our team half a day.',
      testimonial_author: 'Dr. Michael Torres',
      testimonial_title: 'Managing Partner, Metro Physician Group',
      status: 'published',
      seo_title: 'Metro Physician Group Case Study | Opslogica',
      seo_description: 'How Opslogica saved 15 hours per week through AI-powered automation.',
      published_at: '2026-03-05T00:00:00Z',
    },
  ];

  for (const cs of caseStudies) {
    const { error } = await supabase.from('case_studies').upsert(cs, { onConflict: 'slug' });
    if (error) console.log('Case study insert error:', error.message);
  }
  console.log(`Case studies seeded: ${caseStudies.length}`);

  // ── 4. Page SEO ──
  const seoPages = [
    { page_route: '/', seo_title: 'Opslogica | Software Development, AI & Business Automation', focus_keyword: 'Opslogica' },
    { page_route: '/about', seo_title: 'About Opslogica', focus_keyword: 'about opslogica' },
    { page_route: '/services', seo_title: 'Our Services', focus_keyword: 'software development services' },
    { page_route: '/services/software-development', seo_title: 'Custom Software Development', focus_keyword: 'custom software development' },
    { page_route: '/services/website-development', seo_title: 'Website Development Services', focus_keyword: 'website development services' },
    { page_route: '/services/ai-automation', seo_title: 'AI Automation for Small Business', focus_keyword: 'AI automation small business' },
    { page_route: '/services/business-automation', seo_title: 'Business Process Automation', focus_keyword: 'business process automation' },
    { page_route: '/industries', seo_title: 'Industries We Serve', focus_keyword: 'healthcare software' },
    { page_route: '/industries/dental-clinics', seo_title: 'AI for Dental Clinics', focus_keyword: 'dental clinic software' },
    { page_route: '/industries/orthopedic-clinics', seo_title: 'Software for Orthopedic Clinics', focus_keyword: 'orthopedic practice software' },
    { page_route: '/industries/psychology-practices', seo_title: 'Technology for Psychology Practices', focus_keyword: 'mental health practice software' },
    { page_route: '/industries/physician-practices', seo_title: 'Physician Practice Automation', focus_keyword: 'physician practice management' },
    { page_route: '/industries/pathological-labs', seo_title: 'Lab Information Management', focus_keyword: 'pathology lab software' },
    { page_route: '/industries/dermatology-clinics', seo_title: 'Digital Solutions for Dermatology', focus_keyword: 'dermatology clinic software' },
    { page_route: '/blog', seo_title: 'Blog | Opslogica', focus_keyword: 'software development blog' },
    { page_route: '/case-studies', seo_title: 'Case Studies | Opslogica', focus_keyword: 'software case studies' },
    { page_route: '/contact', seo_title: 'Contact Us | Opslogica', focus_keyword: 'hire software development company' },
    { page_route: '/privacy-policy', seo_title: 'Privacy Policy | Opslogica', focus_keyword: 'privacy policy' },
  ];

  for (const page of seoPages) {
    const { error } = await supabase.from('page_seo').upsert(
      { ...page, seo_description: '', no_index: false },
      { onConflict: 'page_route' }
    );
    if (error) console.log('PageSEO insert error:', error.message);
  }
  console.log(`Page SEO entries seeded: ${seoPages.length}`);

  console.log('\nDone! Your database is ready.');
  console.log('\nAdmin login:');
  console.log('  Email:    admin@opslogica.com');
  console.log('  Password: opslogica2026');
}

seed().catch(console.error);
