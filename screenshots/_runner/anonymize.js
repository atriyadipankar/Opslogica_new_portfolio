const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const FINAL = path.resolve(__dirname, '..', 'final');
const OUT   = path.resolve(__dirname, '..', 'final-anon');
fs.mkdirSync(OUT, { recursive: true });

// Images are captured at 1440x900 CSS px, 2x DPI → pixel dimensions 2880x1800.
// Headers in these sites range 60-100 CSS px; footers often 180-400 CSS px.
// Strip heights in PIXELS (2x):
const TOP_H = 200;   // ≈100 CSS px — covers header/logo
const BOT_H = 520;   // ≈260 CSS px — covers typical footer brand block

// How many trailing slices per site contain the footer. Keyed by base name
// (category-slug). Built from the capture-final.js slice counts.
const SITE_LAST_SLICE = {
  'dental-01-swisssmile': 7,
  'dental-09-novadent': 6,
  'dermatology-04-cliniquedeschampselysees': 9,
  'dermatology-08-dermaeliteclinic': 11,
  'orthopedic-02-schoen-klinik': 4,
  'orthopedic-03-waldkliniken-eisenberg': 5,
  'orthopedic-09-mediclinic': 5,
  'pathlabs-01-synlab': 4,
  'pathlabs-03-laboklin': 4,
  'pathlabs-05-biomnis': 7,
  'physician-08-clevelandclinicabudhabi': 9,
  'physician-10-drsulaimanalhabib': 6,
  'psychology-01-klinik-gut': 8,
  'psychology-03-my-international-therapy': 5,
  'psychology-05-parispsychologycentre': 12,
};

async function blurStrip(srcBuf, left, top, width, height) {
  // Heavy pixelate (downsample + nearest-neighbor upsample) so any text in
  // the region becomes unreadable regardless of font size.
  const block = 32;
  const downW = Math.max(1, Math.round(width / block));
  const downH = Math.max(1, Math.round(height / block));
  return sharp(srcBuf)
    .extract({ left, top, width, height })
    .resize(downW, downH, { kernel: 'nearest' })
    .resize(width, height, { kernel: 'nearest' })
    .blur(6)   // small blur over the pixel blocks softens the edges a touch
    .toBuffer();
}

async function processOne(file) {
  const src = path.join(FINAL, file);
  const dst = path.join(OUT, file);
  const srcBuf = await fs.promises.readFile(src);
  const { width, height } = await sharp(srcBuf).metadata();

  const isFull = /-full\.png$/.test(file);
  const sliceM = file.match(/-scroll-(\d+)\.png$/);
  const sliceN = sliceM ? parseInt(sliceM[1], 10) : null;
  const baseM  = file.match(/^(.*?)-(?:full|scroll-\d+)\.png$/);
  const base   = baseM ? baseM[1] : null;
  const lastSlice = base ? SITE_LAST_SLICE[base] : null;
  const isFooterSlice = sliceN != null && lastSlice != null && sliceN === lastSlice;

  const overlays = [];

  // Top strip: header/logo — applied to every image
  const topH = Math.min(TOP_H, height);
  overlays.push({
    input: await blurStrip(srcBuf, 0, 0, width, topH),
    top: 0, left: 0,
  });

  // Bottom strip: footer — only on full-page and last scroll slice
  if (isFull || isFooterSlice) {
    const botH = Math.min(BOT_H, height);
    overlays.push({
      input: await blurStrip(srcBuf, 0, height - botH, width, botH),
      top: height - botH, left: 0,
    });
  }

  await sharp(srcBuf).composite(overlays).toFile(dst);
  return { file, isFull, isFooterSlice, width, height };
}

(async () => {
  const onlyIdx = process.argv.indexOf('--only');
  const only = onlyIdx >= 0 ? process.argv[onlyIdx + 1] : null;
  let files = fs.readdirSync(FINAL).filter(f => f.endsWith('.png')).sort();
  if (only) files = files.filter(f => f.startsWith(only));
  console.log(`Processing ${files.length} images → ${OUT}`);
  let done = 0;
  for (const f of files) {
    try {
      const r = await processOne(f);
      done++;
      const tag = r.isFull ? 'FULL' : r.isFooterSlice ? 'FOOTER' : 'top-only';
      process.stdout.write(`[${String(done).padStart(3, '0')}/${files.length}] ${f} (${tag})\n`);
    } catch (e) {
      console.error(`FAIL ${f}: ${e.message}`);
    }
  }
  console.log(`\nDone → ${OUT}`);
})();
