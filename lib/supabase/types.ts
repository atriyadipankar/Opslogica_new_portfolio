// ---------------------------------------------------------------------------
// Supabase Database Types for OpsLogica
// ---------------------------------------------------------------------------

// Enum types matching Postgres enums
export type LeadStatus = 'new' | 'in_progress' | 'converted' | 'archived'
export type PostStatus = 'draft' | 'published'

// ---------------------------------------------------------------------------
// Row types (snake_case matching Supabase column names)
// ---------------------------------------------------------------------------

export interface Lead {
  id: string
  name: string
  email: string
  phone: string | null
  company: string | null
  industry: string | null
  services_interested: string[]
  budget_range: string | null
  hear_about_us: string | null
  message: string
  status: LeadStatus
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  cover_image: string | null
  tags: string[]
  category: string | null
  status: PostStatus
  seo_title: string | null
  seo_description: string | null
  focus_keyword: string | null
  og_image: string | null
  published_at: string | null
  created_at: string
  updated_at: string
}

export interface CaseStudy {
  id: string
  title: string
  slug: string
  client_name: string | null
  industry: string
  services_used: string[]
  challenge: string
  solution: string
  results: string
  metrics: Record<string, unknown>[]
  testimonial_quote: string | null
  testimonial_author: string | null
  testimonial_title: string | null
  cover_image: string | null
  status: PostStatus
  seo_title: string | null
  seo_description: string | null
  published_at: string | null
  created_at: string
  updated_at: string
}

export interface PageSEO {
  id: string
  page_route: string
  seo_title: string | null
  seo_description: string | null
  focus_keyword: string | null
  no_index: boolean
  updated_at: string
}

export interface SiteSetting {
  id: string
  key: string
  value: string
  updated_at: string
}

// ---------------------------------------------------------------------------
// Insert types (omit server-generated fields)
// ---------------------------------------------------------------------------

export type LeadInsert = Omit<Lead, 'id' | 'created_at' | 'updated_at' | 'status'> & {
  status?: LeadStatus
}

export type BlogPostInsert = Omit<BlogPost, 'id' | 'created_at' | 'updated_at'> & {
  status?: PostStatus
}

export type CaseStudyInsert = Omit<CaseStudy, 'id' | 'created_at' | 'updated_at'> & {
  status?: PostStatus
}

export type PageSEOInsert = Omit<PageSEO, 'id' | 'updated_at'>

export type SiteSettingInsert = Omit<SiteSetting, 'id' | 'updated_at'>

// ---------------------------------------------------------------------------
// Update types (all fields optional except id)
// ---------------------------------------------------------------------------

export type LeadUpdate = Partial<Omit<Lead, 'id' | 'created_at' | 'updated_at'>>
export type BlogPostUpdate = Partial<Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>>
export type CaseStudyUpdate = Partial<Omit<CaseStudy, 'id' | 'created_at' | 'updated_at'>>
export type PageSEOUpdate = Partial<Omit<PageSEO, 'id' | 'updated_at'>>
export type SiteSettingUpdate = Partial<Omit<SiteSetting, 'id' | 'updated_at'>>

// ---------------------------------------------------------------------------
// Database type for Supabase client generic parameter
// ---------------------------------------------------------------------------

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: Lead
        Insert: LeadInsert
        Update: LeadUpdate
      }
      blog_posts: {
        Row: BlogPost
        Insert: BlogPostInsert
        Update: BlogPostUpdate
      }
      case_studies: {
        Row: CaseStudy
        Insert: CaseStudyInsert
        Update: CaseStudyUpdate
      }
      page_seo: {
        Row: PageSEO
        Insert: PageSEOInsert
        Update: PageSEOUpdate
      }
      site_settings: {
        Row: SiteSetting
        Insert: SiteSettingInsert
        Update: SiteSettingUpdate
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: {
      lead_status: LeadStatus
      post_status: PostStatus
    }
  }
}
