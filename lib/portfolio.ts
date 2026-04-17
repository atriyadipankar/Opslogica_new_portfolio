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
  images: string[];
}

// Helper to generate an array of scroll image paths
function scrollImages(prefix: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => {
    const idx = String(i + 1).padStart(2, "0");
    return `/images/portfolio/${prefix}-scroll-${idx}.png`;
  });
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  // ── Dental Clinics ──────────────────────────────────────────────────────
  {
    id: "dental-01-swisssmile",
    name: "Swiss Smile Dental",
    industry: "Dental Clinics",
    industrySlug: "dental-clinics",
    description:
      "Complete digital presence for a premium Swiss dental practice — patient booking, service showcase, and multi-location directory.",
    thumbnail: "/images/portfolio/dental-01-swisssmile-scroll-01.png",
    images: scrollImages("dental-01-swisssmile", 7),
  },
  {
    id: "dental-09-novadent",
    name: "NovaDent Clinic",
    industry: "Dental Clinics",
    industrySlug: "dental-clinics",
    description:
      "Modern dental clinic website with appointment scheduling and treatment information.",
    thumbnail: "/images/portfolio/dental-09-novadent-scroll-01.png",
    images: scrollImages("dental-09-novadent", 6),
  },

  // ── Dermatology Clinics ─────────────────────────────────────────────────
  {
    id: "dermatology-04-cliniquedeschampselysees",
    name: "Clinique des Champs-\u00c9lys\u00e9es",
    industry: "Dermatology Clinics",
    industrySlug: "dermatology-clinics",
    description:
      "Luxury Parisian dermatology and aesthetic clinic with treatment booking and virtual consultations.",
    thumbnail:
      "/images/portfolio/dermatology-04-cliniquedeschampselysees-scroll-01.png",
    images: scrollImages("dermatology-04-cliniquedeschampselysees", 6),
  },
  {
    id: "dermatology-08-dermaeliteclinic",
    name: "DermaElite Clinic",
    industry: "Dermatology Clinics",
    industrySlug: "dermatology-clinics",
    description:
      "Full-service dermatology platform with AI skin analysis intake and patient portal.",
    thumbnail:
      "/images/portfolio/dermatology-08-dermaeliteclinic-scroll-01.png",
    images: scrollImages("dermatology-08-dermaeliteclinic", 11),
  },

  // ── Orthopedic Clinics ──────────────────────────────────────────────────
  {
    id: "orthopedic-02-schoen-klinik",
    name: "Sch\u00f6n Klinik",
    industry: "Orthopedic Clinics",
    industrySlug: "orthopedic-clinics",
    description:
      "Germany\u2019s leading orthopedic hospital group — doctor finder, treatment guides, and patient resources.",
    thumbnail:
      "/images/portfolio/orthopedic-02-schoen-klinik-scroll-01.png",
    images: scrollImages("orthopedic-02-schoen-klinik", 4),
  },
  {
    id: "orthopedic-03-waldkliniken-eisenberg",
    name: "Waldkliniken Eisenberg",
    industry: "Orthopedic Clinics",
    industrySlug: "orthopedic-clinics",
    description:
      "Award-winning orthopedic hospital website with department navigation and patient journey.",
    thumbnail:
      "/images/portfolio/orthopedic-03-waldkliniken-eisenberg-scroll-01.png",
    images: scrollImages("orthopedic-03-waldkliniken-eisenberg", 5),
  },
  {
    id: "orthopedic-09-mediclinic",
    name: "Mediclinic",
    industry: "Orthopedic Clinics",
    industrySlug: "orthopedic-clinics",
    description:
      "International hospital group digital platform with multi-region clinic finder.",
    thumbnail:
      "/images/portfolio/orthopedic-09-mediclinic-scroll-01.png",
    images: scrollImages("orthopedic-09-mediclinic", 5),
  },

  // ── Pathological Labs ───────────────────────────────────────────────────
  {
    id: "pathlabs-01-synlab",
    name: "SYNLAB",
    industry: "Pathological Labs",
    industrySlug: "pathological-labs",
    description:
      "Europe\u2019s leading medical diagnostics provider — test catalog, results portal, and lab locator.",
    thumbnail: "/images/portfolio/pathlabs-01-synlab-scroll-01.png",
    images: scrollImages("pathlabs-01-synlab", 4),
  },
  {
    id: "pathlabs-03-laboklin",
    name: "LABOKLIN",
    industry: "Pathological Labs",
    industrySlug: "pathological-labs",
    description:
      "Veterinary and clinical laboratory with online test ordering and results delivery.",
    thumbnail: "/images/portfolio/pathlabs-03-laboklin-scroll-01.png",
    images: scrollImages("pathlabs-03-laboklin", 4),
  },
  {
    id: "pathlabs-05-biomnis",
    name: "Biomnis",
    industry: "Pathological Labs",
    industrySlug: "pathological-labs",
    description:
      "International reference laboratory platform with test directory and physician resources.",
    thumbnail: "/images/portfolio/pathlabs-05-biomnis-scroll-01.png",
    images: scrollImages("pathlabs-05-biomnis", 7),
  },

  // ── Physician Practices ─────────────────────────────────────────────────
  {
    id: "physician-08-clevelandclinicabudhabi",
    name: "Cleveland Clinic Abu Dhabi",
    industry: "Physician Practices",
    industrySlug: "physician-practices",
    description:
      "World-class physician practice with appointment booking, department finder, and health library.",
    thumbnail:
      "/images/portfolio/physician-08-clevelandclinicabudhabi-scroll-01.png",
    images: scrollImages("physician-08-clevelandclinicabudhabi", 9),
  },
  {
    id: "physician-10-drsulaimanalhabib",
    name: "Dr. Sulaiman Al Habib",
    industry: "Physician Practices",
    industrySlug: "physician-practices",
    description:
      "Leading Gulf healthcare group with multi-hospital platform, doctor search, and patient services.",
    thumbnail:
      "/images/portfolio/physician-10-drsulaimanalhabib-scroll-01.png",
    images: scrollImages("physician-10-drsulaimanalhabib", 6),
  },

  // ── Psychology Practices ────────────────────────────────────────────────
  {
    id: "psychology-01-klinik-gut",
    name: "Klinik Gut",
    industry: "Psychology Practices",
    industrySlug: "psychology-practices",
    description:
      "Swiss psychiatric and psychotherapy clinic with treatment programs and team profiles.",
    thumbnail:
      "/images/portfolio/psychology-01-klinik-gut-scroll-01.png",
    images: scrollImages("psychology-01-klinik-gut", 8),
  },
  {
    id: "psychology-03-my-international-therapy",
    name: "My International Therapy",
    industry: "Psychology Practices",
    industrySlug: "psychology-practices",
    description:
      "Online therapy platform connecting international patients with licensed therapists.",
    thumbnail:
      "/images/portfolio/psychology-03-my-international-therapy-scroll-01.png",
    images: scrollImages("psychology-03-my-international-therapy", 5),
  },
  {
    id: "psychology-05-parispsychologycentre",
    name: "Paris Psychology Centre",
    industry: "Psychology Practices",
    industrySlug: "psychology-practices",
    description:
      "English-speaking psychology practice in Paris with session booking and therapist profiles.",
    thumbnail:
      "/images/portfolio/psychology-05-parispsychologycentre-scroll-01.png",
    images: scrollImages("psychology-05-parispsychologycentre", 12),
  },
];

// ---------------------------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------------------------

/** Return all projects belonging to a specific industry. */
export function getProjectsByIndustry(
  industrySlug: string
): PortfolioProject[] {
  return PORTFOLIO_PROJECTS.filter((p) => p.industrySlug === industrySlug);
}

/** Return every project. */
export function getAllProjects(): PortfolioProject[] {
  return PORTFOLIO_PROJECTS;
}

/** Find a single project by its unique id. */
export function getProjectById(id: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.id === id);
}

/**
 * Return a balanced selection of featured projects — one per industry,
 * cycling through available projects when an industry has more than one.
 */
export function getFeaturedProjects(count: number): PortfolioProject[] {
  const seen = new Set<string>();
  const featured: PortfolioProject[] = [];

  // First pass: pick one project per industry
  for (const project of PORTFOLIO_PROJECTS) {
    if (featured.length >= count) break;
    if (!seen.has(project.industrySlug)) {
      seen.add(project.industrySlug);
      featured.push(project);
    }
  }

  // Second pass: fill remaining slots if count > number of industries
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
