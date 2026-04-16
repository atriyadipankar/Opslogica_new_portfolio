import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabase/admin";

// ---------------------------------------------------------------------------
// Validation Schema
// ---------------------------------------------------------------------------

const signupSchema = z.object({
  email: z.string().email("A valid email address is required."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

// ---------------------------------------------------------------------------
// POST /api/auth/signup — One-time admin signup
//
// Security: Only works if no admin users exist yet, OR if a valid
// ADMIN_SETUP_SECRET is provided in the request headers. This prevents
// unauthorized account creation after the initial admin is set up.
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    // --- Parse & validate body ---
    const body = await request.json();
    const parsed = signupSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, message: "Validation failed.", errors },
        { status: 400 }
      );
    }

    const { email, password } = parsed.data;

    // --- Check if any admin users already exist ---
    const { data: existingUsers, error: listError } =
      await supabaseAdmin.auth.admin.listUsers({ page: 1, perPage: 1 });

    if (listError) {
      console.error("[api/auth/signup] Error listing users:", listError);
      return NextResponse.json(
        { success: false, message: "Failed to verify admin status." },
        { status: 500 }
      );
    }

    // If users already exist, require the setup secret
    if (existingUsers.users.length > 0) {
      const setupSecret = request.headers.get("x-admin-setup-secret");
      const expectedSecret = process.env.ADMIN_SETUP_SECRET;

      if (!expectedSecret || setupSecret !== expectedSecret) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Admin account already exists. Provide the setup secret to create additional admins.",
          },
          { status: 403 }
        );
      }
    }

    // --- Create admin user ---
    const { data: user, error: createError } =
      await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
      });

    if (createError) {
      console.error("[api/auth/signup] Supabase create user error:", createError);
      return NextResponse.json(
        { success: false, message: createError.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Admin account created successfully.",
        data: { id: user.user.id, email: user.user.email },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[api/auth/signup] Unexpected error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
