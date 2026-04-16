import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

// ---------------------------------------------------------------------------
// GET /api/leads — Paginated leads list
// Query params: page (default 1), limit (default 20), status, search
// ---------------------------------------------------------------------------

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;

    const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") ?? "20", 10)));
    const status = searchParams.get("status"); // e.g. "new", "in_progress"
    const search = searchParams.get("search");

    const from = (page - 1) * limit;
    const to = from + limit - 1;

    // Build query
    let query = supabaseAdmin
      .from("leads")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(from, to);

    if (status) {
      query = query.eq("status", status);
    }

    if (search) {
      query = query.or(
        `name.ilike.%${search}%,email.ilike.%${search}%,company.ilike.%${search}%,message.ilike.%${search}%`
      );
    }

    const { data: leads, count, error } = await query;

    if (error) {
      console.error("[api/leads] Supabase GET error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to fetch leads." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: leads,
      pagination: {
        page,
        limit,
        total: count ?? 0,
        totalPages: Math.ceil((count ?? 0) / limit),
      },
    });
  } catch (error) {
    console.error("[api/leads] GET error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch leads." },
      { status: 500 }
    );
  }
}

// ---------------------------------------------------------------------------
// PATCH /api/leads — Update lead status
// Body: { id: string, status: "new" | "in_progress" | "converted" | "archived" }
// ---------------------------------------------------------------------------

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { success: false, message: "Both 'id' and 'status' are required." },
        { status: 400 }
      );
    }

    const validStatuses = ["new", "in_progress", "converted", "archived"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, message: `Invalid status. Must be one of: ${validStatuses.join(", ")}` },
        { status: 400 }
      );
    }

    const { data: lead, error } = await supabaseAdmin
      .from("leads")
      .update({ status })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("[api/leads] Supabase PATCH error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to update lead." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: lead });
  } catch (error) {
    console.error("[api/leads] PATCH error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update lead." },
      { status: 500 }
    );
  }
}

// ---------------------------------------------------------------------------
// DELETE /api/leads — Delete a lead
// Body: { id: string }
// ---------------------------------------------------------------------------

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "'id' is required." },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin
      .from("leads")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("[api/leads] Supabase DELETE error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to delete lead." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Lead deleted." });
  } catch (error) {
    console.error("[api/leads] DELETE error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete lead." },
      { status: 500 }
    );
  }
}
