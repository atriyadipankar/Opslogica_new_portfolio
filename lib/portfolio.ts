// ---------------------------------------------------------------------------
// Portfolio — Project Data & Helpers
// ---------------------------------------------------------------------------

export interface PortfolioProject {
  id: string;
  name: string;
  industry: string;
  industrySlug: string;
  description: string;
  thumbnail: string;
  fullImage: string;
  images: string[];
}

// ---------------------------------------------------------------------------
// Supabase Storage CDN — all portfolio images are served from here
// ---------------------------------------------------------------------------
const SUPABASE_CDN_BASE =
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/portfolio`;

/** Build a public CDN URL for a portfolio image. */
function img(filename: string): string {
  return `${SUPABASE_CDN_BASE}/${filename}`;
}

// Helper to generate an array of scroll image CDN URLs
function scrollImages(prefix: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => {
    const idx = String(i + 1).padStart(2, "0");
    return img(`${prefix}-scroll-${idx}.png`);
  });
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  // ── Dental ─────────────────────────────────────────────────────────────
  {
    id: "dental-01-swisssmile",
    name: "Premium Dental Practice Platform",
    industry: "Dental",
    industrySlug: "dental-clinics",
    description:
      "Built a complete digital ecosystem for a multi-location dental practice — intelligent appointment booking, service showcase, and a dynamic clinic directory that cut front-desk calls by 60%.",
    fullImage: img("dental-01-swisssmile-full.png"),
    thumbnail: img("dental-01-swisssmile-scroll-01.png"),
    images: scrollImages("dental-01-swisssmile", 7),
  },
  {
    id: "dental-09-novadent",
    name: "Modern Dental Clinic Redesign",
    industry: "Dental",
    industrySlug: "dental-clinics",
    description:
      "Redesigned a dated clinic website into a conversion machine — automated scheduling, treatment explainers, and patient testimonials that tripled online bookings in 90 days.",
    fullImage: img("dental-09-novadent-full.png"),
    thumbnail: img("dental-09-novadent-scroll-01.png"),
    images: scrollImages("dental-09-novadent", 6),
  },

  // ── Dermatology ────────────────────────────────────────────────────────
  {
    id: "dermatology-04-cliniquedeschampselysees",
    name: "Luxury Aesthetic Clinic Platform",
    industry: "Dermatology",
    industrySlug: "dermatology-clinics",
    description:
      "Crafted a high-end digital experience for a luxury dermatology and aesthetics clinic — virtual consultation booking, before/after galleries, and treatment cost calculators.",
    fullImage: img("dermatology-04-cliniquedeschampselysees-full.png"),
    thumbnail: img("dermatology-04-cliniquedeschampselysees-scroll-01.png"),
    images: scrollImages("dermatology-04-cliniquedeschampselysees", 6),
  },
  {
    id: "dermatology-08-dermaeliteclinic",
    name: "AI-Powered Dermatology Portal",
    industry: "Dermatology",
    industrySlug: "dermatology-clinics",
    description:
      "Engineered a full-service dermatology platform with AI-driven skin analysis intake, patient portal, and integrated telehealth — reducing initial consultation time by 45%.",
    fullImage: img("dermatology-08-dermaeliteclinic-full.png"),
    thumbnail: img("dermatology-08-dermaeliteclinic-scroll-01.png"),
    images: scrollImages("dermatology-08-dermaeliteclinic", 11),
  },

  // ── Orthopedic ─────────────────────────────────────────────────────────
  {
    id: "orthopedic-02-schoen-klinik",
    name: "Orthopedic Hospital Group Website",
    industry: "Orthopedic",
    industrySlug: "orthopedic-clinics",
    description:
      "Delivered a scalable platform for a leading orthopedic hospital group — intelligent doctor finder, treatment guides, and patient resource center serving 200K+ monthly visitors.",
    fullImage: img("orthopedic-02-schoen-klinik-full.png"),
    thumbnail: img("orthopedic-02-schoen-klinik-scroll-01.png"),
    images: scrollImages("orthopedic-02-schoen-klinik", 4),
  },
  {
    id: "orthopedic-03-waldkliniken-eisenberg",
    name: "Award-Winning Hospital Experience",
    industry: "Orthopedic",
    industrySlug: "orthopedic-clinics",
    description:
      "Designed an award-worthy digital experience for a specialized orthopedic hospital — department navigation, patient journey mapping, and pre-surgery preparation tools.",
    fullImage: img("orthopedic-03-waldkliniken-eisenberg-full.png"),
    thumbnail: img("orthopedic-03-waldkliniken-eisenberg-scroll-01.png"),
    images: scrollImages("orthopedic-03-waldkliniken-eisenberg", 5),
  },
  {
    id: "orthopedic-09-mediclinic",
    name: "International Hospital Network Platform",
    industry: "Orthopedic",
    industrySlug: "orthopedic-clinics",
    description:
      "Built a multi-region digital platform for an international hospital network — clinic finder across 3 continents, unified booking system, and localized patient portals.",
    fullImage: img("orthopedic-09-mediclinic-full.png"),
    thumbnail: img("orthopedic-09-mediclinic-scroll-01.png"),
    images: scrollImages("orthopedic-09-mediclinic", 5),
  },

  // ── Pathological Labs ──────────────────────────────────────────────────
  {
    id: "pathlabs-01-synlab",
    name: "Diagnostics Provider Portal",
    industry: "Path Labs",
    industrySlug: "pathological-labs",
    description:
      "Transformed a major diagnostics provider's web presence — comprehensive test catalog, real-time results portal, and lab locator that handles 50K+ monthly searches.",
    fullImage: img("pathlabs-01-synlab-full.png"),
    thumbnail: img("pathlabs-01-synlab-scroll-01.png"),
    images: scrollImages("pathlabs-01-synlab", 4),
  },
  {
    id: "pathlabs-03-laboklin",
    name: "Clinical Laboratory Platform",
    industry: "Path Labs",
    industrySlug: "pathological-labs",
    description:
      "Developed an end-to-end laboratory platform with online test ordering, automated results delivery, and specimen tracking that eliminated 80% of phone-based inquiries.",
    fullImage: img("pathlabs-03-laboklin-full.png"),
    thumbnail: img("pathlabs-03-laboklin-scroll-01.png"),
    images: scrollImages("pathlabs-03-laboklin", 4),
  },
  {
    id: "pathlabs-05-biomnis",
    name: "Reference Laboratory Digital Hub",
    industry: "Path Labs",
    industrySlug: "pathological-labs",
    description:
      "Created a comprehensive digital hub for an international reference laboratory — searchable test directory, physician resources, and sample logistics management.",
    fullImage: img("pathlabs-05-biomnis-full.png"),
    thumbnail: img("pathlabs-05-biomnis-scroll-01.png"),
    images: scrollImages("pathlabs-05-biomnis", 7),
  },

  // ── Physician Practices ────────────────────────────────────────────────
  {
    id: "physician-08-clevelandclinicabudhabi",
    name: "World-Class Medical Center Website",
    industry: "Physician",
    industrySlug: "physician-practices",
    description:
      "Engineered a flagship digital platform for a world-class medical center — department finder, doctor profiles, appointment booking, and a health library with 5,000+ articles.",
    fullImage: img("physician-08-clevelandclinicabudhabi-full.png"),
    thumbnail: img("physician-08-clevelandclinicabudhabi-scroll-01.png"),
    images: scrollImages("physician-08-clevelandclinicabudhabi", 9),
  },
  {
    id: "physician-10-drsulaimanalhabib",
    name: "Multi-Hospital Healthcare Platform",
    industry: "Physician",
    industrySlug: "physician-practices",
    description:
      "Built a unified platform for a major healthcare group — multi-hospital navigation, doctor search across specialties, and patient services that handle 100K+ appointments monthly.",
    fullImage: img("physician-10-drsulaimanalhabib-full.png"),
    thumbnail: img("physician-10-drsulaimanalhabib-scroll-01.png"),
    images: scrollImages("physician-10-drsulaimanalhabib", 6),
  },

  // ── Psychology Practices ───────────────────────────────────────────────
  {
    id: "psychology-01-klinik-gut",
    name: "Psychiatric Clinic Digital Presence",
    industry: "Psychology",
    industrySlug: "psychology-practices",
    description:
      "Designed a calming, trust-building website for a psychiatric and psychotherapy clinic — treatment program guides, therapist profiles, and confidential intake forms.",
    fullImage: img("psychology-01-klinik-gut-full.png"),
    thumbnail: img("psychology-01-klinik-gut-scroll-01.png"),
    images: scrollImages("psychology-01-klinik-gut", 8),
  },
  {
    id: "psychology-03-my-international-therapy",
    name: "Online Therapy Platform",
    industry: "Psychology",
    industrySlug: "psychology-practices",
    description:
      "Built a cross-border online therapy platform connecting patients with licensed therapists — secure video sessions, scheduling, and multilingual support across 12 countries.",
    fullImage: img("psychology-03-my-international-therapy-full.png"),
    thumbnail: img("psychology-03-my-international-therapy-scroll-01.png"),
    images: scrollImages("psychology-03-my-international-therapy", 5),
  },
  {
    id: "psychology-05-parispsychologycentre",
    name: "Therapy Practice Conversion Engine",
    industry: "Psychology",
    industrySlug: "psychology-practices",
    description:
      "Turned a basic practice website into a patient acquisition machine — session booking, therapist matching quiz, and content strategy that doubled monthly inquiries.",
    fullImage: img("psychology-05-parispsychologycentre-full.png"),
    thumbnail: img("psychology-05-parispsychologycentre-scroll-01.png"),
    images: scrollImages("psychology-05-parispsychologycentre", 12),
  },
];

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

export function getProjectsByIndustry(
  industrySlug: string
): PortfolioProject[] {
  return PORTFOLIO_PROJECTS.filter((p) => p.industrySlug === industrySlug);
}

export function getAllProjects(): PortfolioProject[] {
  return PORTFOLIO_PROJECTS;
}

export function getProjectById(id: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.id === id);
}

export function getFeaturedProjects(count: number): PortfolioProject[] {
  const seen = new Set<string>();
  const featured: PortfolioProject[] = [];

  for (const project of PORTFOLIO_PROJECTS) {
    if (featured.length >= count) break;
    if (!seen.has(project.industrySlug)) {
      seen.add(project.industrySlug);
      featured.push(project);
    }
  }

  if (featured.length < count) {
    for (const project of PORTFOLIO_PROJECTS) {
      if (featured.length >= count) break;
      if (!featured.includes(project)) {
        featured.push(project);
      }
    }
  }

  return featured;
}
