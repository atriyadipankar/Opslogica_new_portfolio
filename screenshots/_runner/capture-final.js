const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT = path.resolve(__dirname, '..', 'final');

const SITES = [
  ['dental',       '01-swisssmile',                'https://swisssmile.com'],
  ['dental',       '09-novadent',                  'https://novadent.ae'],
  ['dermatology',  '04-cliniquedeschampselysees',  'https://cliniquedeschampselysees.com'],
  ['dermatology',  '08-dermaeliteclinic',          'https://dermaeliteclinic.ae'],
  ['orthopedic',   '02-schoen-klinik',             'https://schoen-klinik.de'],
  ['orthopedic',   '03-waldkliniken-eisenberg',    'https://waldkliniken-eisenberg.de'],
  ['orthopedic',   '09-mediclinic',                'https://mediclinic.ae'],
  ['pathlabs',     '01-synlab',                    'https://synlab.de'],
  ['pathlabs',     '03-laboklin',                  'https://laboklin.de'],
  ['pathlabs',     '05-biomnis',                   'https://biomnis.fr'],
  ['physician',    '08-clevelandclinicabudhabi',   'https://clevelandclinicabudhabi.ae'],
  ['physician',    '10-drsulaimanalhabib',         'https://drsulaimanalhabib.ae'],
  ['psychology',   '01-klinik-gut',                'https://klinik-gut.ch'],
  ['psychology',   '03-my-international-therapy',  'https://my-international-therapy.com'],
  ['psychology',   '05-parispsychologycentre',     'https://parispsychologycentre.com'],
];

const CONCURRENCY = 3;
const NAV_TIMEOUT = 60000;
const VIEWPORT = { width: 1440, height: 900 };
const MAX_SCROLLS = 12;     // cap very long pages at 12 viewport slices
const MIN_REMAINING = 120;  // only take a final slice if >120px remains uncaptured

async function dismissConsent(page) {
  await page.waitForTimeout(1500);
  for (let pass = 0; pass < 4; pass++) {
    const hit = await page.evaluate(() => {
      const known = [
        '#onetrust-accept-btn-handler',
        '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
        '#CybotCookiebotDialogBodyButtonAccept',
        '.cc-btn.cc-allow',
        '.cky-btn-accept',
        '#hs-eu-confirmation-button',
        'button[data-testid="uc-accept-all-button"]',
        'button[data-tid="banner-accept"]',
        '#didomi-notice-agree-button',
        'button.didomi-components-button--color-primary',
        '.fc-cta-consent',
        'button.iubenda-cs-accept-btn',
        'button.qc-cmp2-accept-all',
        '.osano-cm-accept-all',
        '#axeptio_btn_acceptAll',
        'button[aria-label*="ccept"]',
      ];
      for (const sel of known) {
        const el = document.querySelector(sel);
        if (el) { try { el.click(); return sel; } catch {} }
      }
      const collect = (root, out) => {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
        let n = walker.currentNode;
        while (n) {
          if (n.shadowRoot) collect(n.shadowRoot, out);
          const tag = n.tagName;
          if (tag === 'BUTTON' || tag === 'A' ||
              (n.getAttribute && n.getAttribute('role') === 'button') ||
              (tag === 'INPUT' && /button|submit/i.test(n.type))) {
            out.push(n);
          }
          n = walker.nextNode();
        }
      };
      const clickables = [];
      collect(document, clickables);
      const patterns = [
        /^accept all$/i, /accept all/i, /accept cookies/i, /allow all/i,
        /^i agree$/i, /agree and close/i, /^agree$/i,
        /alles?\s+akzeptieren/i, /^akzeptieren$/i, /akzeptieren/i,
        /^zustimmen$/i, /einverstanden/i,
        /^tout accepter$/i, /tout accepter/i, /^accepter$/i, /j'accepte/i,
        /^aceptar todo$/i, /aceptar todas/i, /^aceptar$/i, /acepto/i,
        /قبول الكل/, /^قبول$/, /^موافق$/,
        /^got it$/i, /^ok$/i, /^continue$/i,
      ];
      for (const p of patterns) {
        for (const n of clickables) {
          const txt = ((n.innerText || n.textContent || n.value || '') + '').trim();
          if (txt && p.test(txt)) {
            try { n.click(); return `text:${p.source}`; } catch {}
          }
        }
      }
      return null;
    });
    if (!hit) break;
    await page.waitForTimeout(700);
  }

  // Aggressive fallback: remove fixed/sticky overlays matching known consent
  // vendors or generic cookie/consent tokens. Done regardless of z-index since
  // vendors like Usercentrics use string/auto z-index values.
  await page.evaluate(() => {
    const killSelectors = [
      '[id*="cookie" i]', '[class*="cookie" i]',
      '[id*="consent" i]', '[class*="consent" i]',
      '[id*="onetrust" i]', '[id*="usercentrics" i]',
      '[id*="didomi" i]', '[id*="cookiebot" i]',
      '[id*="axeptio" i]', '[id*="gdpr" i]',
      '[data-testid*="uc-" i]', '[data-tid*="uc-" i]',
      '#uc-main-banner', '#usercentrics-root', '#uc-center-container',
      '.ot-sdk-container', '.ot-sdk-row',
    ];
    const killEl = el => {
      try { el.style.setProperty('display', 'none', 'important'); } catch {}
      try { el.remove(); } catch {}
    };
    for (const sel of killSelectors) {
      document.querySelectorAll(sel).forEach(el => {
        const cs = getComputedStyle(el);
        if (cs.position === 'fixed' || cs.position === 'sticky' ||
            el.id === 'usercentrics-root' ||
            /cookie|consent|gdpr|usercentrics|onetrust|didomi|axeptio|cookiebot/i.test(el.id + ' ' + el.className)) {
          killEl(el);
        }
      });
    }
    // Pierce shadow roots and kill consent hosts living inside them
    const walker = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT);
    let n = walker.currentNode;
    while (n) {
      if (n.shadowRoot) {
        n.shadowRoot.querySelectorAll('*').forEach(child => {
          if (/cookie|consent|gdpr|usercentrics|onetrust|didomi/i.test(child.id + ' ' + child.className)) {
            killEl(child);
          }
        });
        if (/usercentrics|onetrust|didomi|cookiebot/i.test(n.id + ' ' + n.className)) {
          killEl(n);
        }
      }
      n = walker.nextNode();
    }
    // Restore scrolling in case a modal disabled it
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  });
  await page.waitForTimeout(400);
}

async function captureOne(browser, [category, slug, url]) {
  const baseName = `${category}-${slug}`;
  const fullPath = path.join(OUT, `${baseName}-full.png`);

  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    locale: 'en-US',
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT });
    try { await page.waitForLoadState('networkidle', { timeout: 15000 }); } catch {}
    await page.waitForTimeout(2500);

    await dismissConsent(page);

    // Pre-scroll through the page once to trigger lazy-loaded images/animations
    await page.evaluate(async () => {
      await new Promise(resolve => {
        let y = 0;
        const step = 500;
        const timer = setInterval(() => {
          window.scrollTo(0, y);
          y += step;
          if (y >= document.body.scrollHeight) {
            clearInterval(timer);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 120);
      });
    });
    await page.waitForTimeout(1500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(800);

    // Full-page screenshot
    await page.screenshot({ path: fullPath, fullPage: true, type: 'png' });

    // Viewport-by-viewport screenshots
    const totalHeight = await page.evaluate(() => Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
    ));
    const viewH = VIEWPORT.height;
    const positions = [];
    for (let y = 0, i = 0; i < MAX_SCROLLS; i++, y += viewH) {
      if (y >= totalHeight) break;
      const remaining = totalHeight - y;
      if (i > 0 && remaining < MIN_REMAINING) break;
      positions.push(y);
    }
    // Ensure we capture the very bottom
    const lastY = Math.max(0, totalHeight - viewH);
    if (positions[positions.length - 1] < lastY - 50 && positions.length < MAX_SCROLLS) {
      positions.push(lastY);
    }

    for (let i = 0; i < positions.length; i++) {
      const y = positions[i];
      await page.evaluate(yy => window.scrollTo({ top: yy, left: 0, behavior: 'instant' }), y);
      await page.waitForTimeout(900); // let sticky headers / lazy content settle
      const idx = String(i + 1).padStart(2, '0');
      const p = path.join(OUT, `${baseName}-scroll-${idx}.png`);
      await page.screenshot({ path: p, fullPage: false, type: 'png' });
    }

    return { slug: baseName, status: 'ok', slices: positions.length, totalHeight };
  } catch (err) {
    return { slug: baseName, status: 'error', error: err.message };
  } finally {
    await context.close();
  }
}

async function runPool(browser, tasks, concurrency) {
  const results = [];
  let idx = 0;
  const workers = Array.from({ length: concurrency }, async () => {
    while (idx < tasks.length) {
      const my = idx++;
      const t = tasks[my];
      const started = Date.now();
      process.stdout.write(`[${String(my + 1).padStart(2, '0')}/${tasks.length}] ${t[0]}/${t[1]} — start\n`);
      const res = await captureOne(browser, t);
      const dur = ((Date.now() - started) / 1000).toFixed(1);
      const tag = res.status === 'ok' ? `OK (${res.slices} slices, h=${res.totalHeight}px)` : 'ERR';
      process.stdout.write(`[${String(my + 1).padStart(2, '0')}/${tasks.length}] ${t[0]}/${t[1]} — ${tag} (${dur}s)${res.error ? ' — ' + res.error.split('\n')[0] : ''}\n`);
      results.push({ ...res, category: t[0], url: t[2] });
    }
  });
  await Promise.all(workers);
  return results;
}

(async () => {
  const onlyIdx = process.argv.indexOf('--only');
  const filter = onlyIdx >= 0 ? new Set(process.argv[onlyIdx + 1].split(',')) : null;
  const tasks = filter
    ? SITES.filter(([cat, slug]) => filter.has(`${cat}/${slug}`) || filter.has(slug))
    : SITES;
  if (filter) console.log(`Filter active — running ${tasks.length} of ${SITES.length} sites`);
  // Remove previous outputs for sites we're re-capturing so stale slice indexes
  // from a longer prior run don't mix with a shorter new run.
  for (const [cat, slug] of tasks) {
    const prefix = `${cat}-${slug}-`;
    for (const f of fs.readdirSync(OUT)) {
      if (f.startsWith(prefix)) fs.unlinkSync(path.join(OUT, f));
    }
  }
  const browser = await chromium.launch({ headless: true });
  try {
    const results = await runPool(browser, tasks, CONCURRENCY);
    const ok  = results.filter(r => r.status === 'ok').length;
    const err = results.filter(r => r.status === 'error');
    console.log(`\n=== DONE === ok=${ok} err=${err.length}`);
    if (err.length) {
      console.log('\nErrors:');
      for (const e of err) console.log(`  - ${e.category}/${e.slug} (${e.url}) :: ${e.error}`);
    }
    fs.writeFileSync(path.join(__dirname, 'results-final.json'), JSON.stringify(results, null, 2));
  } finally {
    await browser.close();
  }
})().catch(e => { console.error(e); process.exit(1); });
