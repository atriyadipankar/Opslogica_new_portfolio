import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { sendContactConfirmation, sendLeadNotification } from "@/lib/email";

// ---------------------------------------------------------------------------
// Validation Schema
// ---------------------------------------------------------------------------

const contactSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("A valid email address is required."),
  message: z.string().min(1, "Message is required."),
  phone: z.string().optional(),
  company: z.string().optional(),
  industry: z.string().optional(),
  servicesInterested: z.array(z.string()).optional(),
  budgetRange: z.string().optional(),
  hearAboutUs: z.string().optional(),
});

// ---------------------------------------------------------------------------
// In-Memory Rate Limiter (5 requests per IP per hour)
// ---------------------------------------------------------------------------

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

// Periodically clean up expired entries to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetAt) {
      rateLimitMap.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW_MS);

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    // --- Rate limiting ---
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const ip = forwarded?.split(",")[0]?.trim() ?? realIp ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // --- Parse & validate body ---
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, message: "Validation failed.", errors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // --- Save to database (camelCase form fields → snake_case DB columns) ---
    try {
      const { data: lead, error } = await supabaseAdmin
        .from("leads")
        .insert({
          name: data.name,
          email: data.email,
          message: data.message,
          phone: data.phone ?? null,
          company: data.company ?? null,
          industry: data.industry ?? null,
          services_interested: data.servicesInterested ?? [],
          budget_range: data.budgetRange ?? null,
          hear_about_us: data.hearAboutUs ?? null,
        })
        .select()
        .single();

      if (error) {
        console.error("[api/contact] Supabase insert error:", error);
      } else {
        // Fire-and-forget email notifications (don't block the response)
        sendContactConfirmation(data.email, data.name).catch(() => {});
        sendLeadNotification(lead as unknown as Record<string, unknown>).catch(() => {});
      }
    } catch (dbError) {
      console.error("[api/contact] Database error:", dbError);
      // Still return success — we don't want to expose DB issues to the user.
    }

    return NextResponse.json(
      { success: true, message: "Your request has been received." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[api/contact] Unexpected error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
