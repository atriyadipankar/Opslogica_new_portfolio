import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase/admin";

// ---------------------------------------------------------------------------
// Validation Schema
// ---------------------------------------------------------------------------

const gateSchema = z.object({
  code: z
    .string()
    .length(6, "Code must be exactly 6 digits.")
    .regex(/^\d{6}$/, "Code must contain only digits."),
});

// ---------------------------------------------------------------------------
// In-Memory Rate Limiter (5 attempts per IP per 15 minutes)
// ---------------------------------------------------------------------------

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
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
// Default fallback code when no gate_code is configured in the database
// ---------------------------------------------------------------------------

const DEFAULT_GATE_CODE = "142857";

// ---------------------------------------------------------------------------
// POST /api/auth/gate
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    // --- Rate limiting ---
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const ip = forwarded?.split(",")[0]?.trim() ?? realIp ?? "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many attempts. Please try again later." },
        { status: 429 }
      );
    }

    // --- Parse & validate body ---
    const body = await request.json();
    const parsed = gateSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, message: "Validation failed.", errors },
        { status: 400 }
      );
    }

    const { code } = parsed.data;

    // --- Fetch the stored gate code from Supabase ---
    let storedCode = DEFAULT_GATE_CODE;

    const { data, error } = await supabaseAdmin
      .from("site_settings")
      .select("value")
      .eq("key", "gate_code")
      .single();

    if (!error && data?.value) {
      storedCode = data.value;
    }

    // --- Compare codes ---
    if (code !== storedCode) {
      return NextResponse.json(
        { success: false, message: "Invalid security code" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { success: true, redirect: "/login" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[api/auth/gate] Unexpected error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
