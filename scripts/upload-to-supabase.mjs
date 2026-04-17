// ---------------------------------------------------------------------------
// Upload portfolio images to Supabase Storage
// Usage: node scripts/upload-to-supabase.mjs
// ---------------------------------------------------------------------------
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// ── Config ──────────────────────────────────────────────────────────────────
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET_NAME = "portfolio";
const IMAGE_DIR = path.join(ROOT, "public", "images", "portfolio");

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error("Missing env vars. Run with:");
  console.error(
    '  source .env.local && node scripts/upload-to-supabase.mjs'
  );
  console.error("Required: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

// ── Mime type helper ────────────────────────────────────────────────────────
function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const types = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".gif": "image/gif",
  };
  return types[ext] || "application/octet-stream";
}

// ── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log("╔══════════════════════════════════════════╗");
  console.log("║  Supabase Portfolio Image Uploader       ║");
  console.log("╚══════════════════════════════════════════╝\n");

  // 1. Create bucket if it doesn't exist
  console.log(`→ Checking bucket "${BUCKET_NAME}"...`);
  const { data: buckets } = await supabase.storage.listBuckets();
  const exists = buckets?.some((b) => b.name === BUCKET_NAME);

  if (!exists) {
    console.log(`→ Creating public bucket "${BUCKET_NAME}"...`);
    const { error } = await supabase.storage.createBucket(BUCKET_NAME, {
      public: true,
      fileSizeLimit: 52428800, // 50MB
      allowedMimeTypes: [
        "image/png",
        "image/jpeg",
        "image/webp",
        "image/svg+xml",
        "image/gif",
      ],
    });
    if (error) {
      console.error("Failed to create bucket:", error.message);
      process.exit(1);
    }
    console.log("✓ Bucket created\n");
  } else {
    console.log("✓ Bucket already exists\n");
  }

  // 2. Read all image files
  const files = fs
    .readdirSync(IMAGE_DIR)
    .filter((f) => /\.(png|jpe?g|webp|svg|gif)$/i.test(f))
    .sort();

  console.log(`→ Found ${files.length} images to upload\n`);

  // 3. Upload each file
  let uploaded = 0;
  let skipped = 0;
  let failed = 0;
  const errors = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(IMAGE_DIR, file);
    const fileBuffer = fs.readFileSync(filePath);
    const mimeType = getMimeType(filePath);
    const sizeMB = (fileBuffer.length / 1024 / 1024).toFixed(1);

    const progress = `[${String(i + 1).padStart(3)}/${files.length}]`;

    // Upload (upsert to overwrite if exists)
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(file, fileBuffer, {
        contentType: mimeType,
        upsert: true,
        cacheControl: "public, max-age=31536000, immutable",
      });

    if (error) {
      console.log(`${progress} ✗ ${file} (${sizeMB}MB) — ${error.message}`);
      failed++;
      errors.push({ file, error: error.message });
    } else {
      console.log(`${progress} ✓ ${file} (${sizeMB}MB)`);
      uploaded++;
    }
  }

  // 4. Summary
  const publicBase = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}`;

  console.log("\n══════════════════════════════════════════");
  console.log(`  Uploaded: ${uploaded}`);
  console.log(`  Skipped:  ${skipped}`);
  console.log(`  Failed:   ${failed}`);
  console.log("══════════════════════════════════════════");
  console.log(`\n  CDN Base URL:`);
  console.log(`  ${publicBase}/\n`);

  if (errors.length > 0) {
    console.log("  Failed files:");
    errors.forEach((e) => console.log(`    - ${e.file}: ${e.error}`));
  }

  console.log("  Example URL:");
  console.log(`  ${publicBase}/${files[0]}\n`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
