import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

// ---------------------------------------------------------------------------
// GET /api/blog — Paginated published blog posts
// Query params: page (default 1), limit (default 10), tag (optional filter)
// ---------------------------------------------------------------------------

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;

    const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
    const limit = Math.min(50, Math.max(1, parseInt(searchParams.get("limit") ?? "10", 10)));
    const tag = searchParams.get("tag");

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    // Build query — only published posts for public API
    let query = supabaseAdmin
      .from("blog_posts")
      .select(
        "id, title, slug, excerpt, cover_image, tags, category, published_at, created_at",
        { count: "exact" }
      )
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .range(from, to);

    if (tag) {
      query = query.contains("tags", [tag]);
    }

    const { data: posts, count, error } = await query;

    if (error) {
      console.error("[api/blog] Supabase GET error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to fetch blog posts." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: posts,
      pagination: {
        page,
        limit,
        total: count ?? 0,
        totalPages: Math.ceil((count ?? 0) / limit),
      },
    });
  } catch (error) {
    console.error("[api/blog] GET error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch blog posts." },
      { status: 500 }
    );
  }
}

// ---------------------------------------------------------------------------
// POST /api/blog — Create a new blog post (admin-protected)
// Body: { title, slug, excerpt?, content, coverImage?, tags?, category?,
//         status?, seoTitle?, seoDescription?, focusKeyword?, ogImage?,
//         publishedAt? }
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json(
        { success: false, message: "title, slug, and content are required." },
        { status: 400 }
      );
    }

    // Check for duplicate slug
    const { data: existing } = await supabaseAdmin
      .from("blog_posts")
      .select("id")
      .eq("slug", body.slug)
      .maybeSingle();

    if (existing) {
      return NextResponse.json(
        { success: false, message: "A post with this slug already exists." },
        { status: 409 }
      );
    }

    const postStatus = body.status ?? "draft";

    // Insert new blog post (camelCase body fields → snake_case DB columns)
    const { data: post, error } = await supabaseAdmin
      .from("blog_posts")
      .insert({
        title: body.title,
        slug: body.slug,
        excerpt: body.excerpt ?? null,
        content: body.content,
        cover_image: body.coverImage ?? null,
        tags: body.tags ?? [],
        category: body.category ?? null,
        status: postStatus,
        seo_title: body.seoTitle ?? null,
        seo_description: body.seoDescription ?? null,
        focus_keyword: body.focusKeyword ?? null,
        og_image: body.ogImage ?? null,
        published_at: postStatus === "published" ? new Date().toISOString() : null,
      })
      .select()
      .single();

    if (error) {
      console.error("[api/blog] Supabase POST error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to create blog post." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: post }, { status: 201 });
  } catch (error) {
    console.error("[api/blog] POST error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create blog post." },
      { status: 500 }
    );
  }
}
