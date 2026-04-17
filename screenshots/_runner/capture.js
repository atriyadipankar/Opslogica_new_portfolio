const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT = path.resolve(__dirname, '..');

const SITES = [
  // DENTAL
  ['dental', '01-swisssmile',                      'https://swisssmile.com'],
  ['dental', '02-smile-clinic-fr',                 'https://smile-clinic.fr'],
  ['dental', '03-zahnarzt-am-friedrichsbrunnen',   'https://zahnarzt-am-friedrichsbrunnen.de'],
  ['dental', '04-zahnklinik-ettlingen',            'https://zahnklinik-ettlingen.de'],
  ['dental', '05-clinique-dentaire-victor-hugo',   'https://clinique-dentaire-victor-hugo.fr'],
  ['dental', '06-sonrisas-mx',                     'https://sonrisas.mx'],
  ['dental', '07-dentalstudiomex',                 'https://dentalstudiomex.com.mx'],
  ['dental', '08-germandentaloasis',               'https://germandentaloasis.ae'],
  ['dental', '09-novadent',                        'https://novadent.ae'],
  ['dental', '10-bahri-dental',                    'https://bahri-dental.com.sa'],

  // ORTHOPEDIC
  ['orthopedic', '01-joint-surgeon',               'https://joint-surgeon.com'],
  ['orthopedic', '02-schoen-klinik',               'https://schoen-klinik.de'],
  ['orthopedic', '03-waldkliniken-eisenberg',      'https://waldkliniken-eisenberg.de'],
  ['orthopedic', '04-clinique-du-parc',            'https://clinique-du-parc.fr'],
  ['orthopedic', '05-iuot',                        'https://iuot.com'],
  ['orthopedic', '06-hospitalespanolmx',           'https://hospitalespanolmx.com'],
  ['orthopedic', '07-tocorona',                    'https://tocorona.mx'],
  ['orthopedic', '08-ahdubai',                     'https://ahdubai.com'],
  ['orthopedic', '09-mediclinic',                  'https://mediclinic.ae'],
  ['orthopedic', '10-hmg-ar',                      'https://hmg.com/ar'],

  // PSYCHOLOGY
  ['psychology', '01-klinik-gut',                  'https://klinik-gut.ch'],
  ['psychology', '02-priory-de',                   'https://priory.de'],
  ['psychology', '03-my-international-therapy',    'https://my-international-therapy.com'],
  ['psychology', '04-santemental-paris',           'https://santemental-paris.fr'],
  ['psychology', '05-parispsychologycentre',       'https://parispsychologycentre.com'],
  ['psychology', '06-ipsilon',                     'https://ipsilon.com.mx'],
  ['psychology', '07-centrodepsicologia',          'https://centrodepsicologia.mx'],
  ['psychology', '08-thelighthouse',               'https://thelighthouse.ae'],
  ['psychology', '09-camali-clinic',               'https://camali-clinic.com'],
  ['psychology', '10-shifaak',                     'https://shifaak.sa'],

  // PHYSICIAN
  ['physician', '01-medizinicum-hamburg',          'https://medizinicum-hamburg.de'],
  ['physician', '02-privatpraxis-reichenbach',     'https://privatpraxis-reichenbach.de'],
  ['physician', '03-doctolib',                     'https://doctolib.fr'],
  ['physician', '04-cabinet-docteur-lacroix',      'https://cabinet-docteur-lacroix.fr'],
  ['physician', '05-centremed-paris',              'https://centremed-paris.fr'],
  ['physician', '06-hospitalsanangel',             'https://hospitalsanangel.com.mx'],
  ['physician', '07-medica-sur',                   'https://medica-sur.com.mx'],
  ['physician', '08-clevelandclinicabudhabi',      'https://clevelandclinicabudhabi.ae'],
  ['physician', '09-humansclinics',                'https://humansclinics.com'],
  ['physician', '10-drsulaimanalhabib',            'https://drsulaimanalhabib.ae'],

  // PATHLABS
  ['pathlabs', '01-synlab',                        'https://synlab.de'],
  ['pathlabs', '02-labor-schottdorf',              'https://labor-schottdorf.de'],
  ['pathlabs', '03-laboklin',                      'https://laboklin.de'],
  ['pathlabs', '04-cerba-healthcare',              'https://cerba-healthcare.com'],
  ['pathlabs', '05-biomnis',                       'https://biomnis.fr'],
  ['pathlabs', '06-chopo',                         'https://chopo.com.mx'],
  ['pathlabs', '07-clinicalab',                    'https://clinicalab.com.mx'],
  ['pathlabs', '08-referencelaboratory',           'https://referencelaboratory.ae'],
  ['pathlabs', '09-mediclinic-laboratory',         'https://mediclinic-laboratory.ae'],
  ['pathlabs', '10-alborg',                        'https://alborg.com.sa'],

  // DERMATOLOGY
  ['dermatology', '01-drsturm',                    'https://drsturm.com'],
  ['dermatology', '02-hautzentrum-am-englischen-garten', 'https://hautzentrum-am-englischen-garten.de'],
  ['dermatology', '03-dermatologie-mitte-berlin',  'https://dermatologie-mitte-berlin.de'],
  ['dermatology', '04-cliniquedeschampselysees',   'https://cliniquedeschampselysees.com'],
  ['dermatology', '05-cabinet-dermato-paris',      'https://cabinet-dermato-paris.fr'],
  ['dermatology', '06-dermavidaskin',              'https://dermavidaskin.mx'],
  ['dermatology', '07-drleila',                    'https://drleila.com.mx'],
  ['dermatology', '08-dermaeliteclinic',           'https://dermaeliteclinic.ae'],
  ['dermatology', '09-theaestheticclinic',         'https://theaestheticclinic.ae'],
  ['dermatology', '10-royalclinicsaudia',          'https://royalclinicsaudia.com'],
];

const CONCURRENCY = 4;
const NAV_TIMEOUT = 45000;
const SETTLE_MS = 3500;
const FORCE = process.argv.includes('--force');
const ONLY  = (() => {
  const i = process.argv.indexOf('--only');
  return i >= 0 ? new Set(process.argv[i + 1].split(',')) : null;
})();

async function captureOne(browser, [category, slug, url]) {
  const outDir = path.join(OUT, category);
  const viewportPath = path.join(outDir, `${slug}-viewport.png`);
  const fullPath     = path.join(outDir, `${slug}-full.png`);

  if (!FORCE && fs.existsSync(viewportPath) && fs.existsSync(fullPath)) {
    return { slug, status: 'skip' };
  }

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    locale: 'en-US',
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: NAV_TIMEOUT });
    try { await page.waitForLoadState('networkidle', { timeout: 15000 }); } catch {}
    await page.waitForTimeout(SETTLE_MS);

    // Dismiss cookie banners — tries platform-specific selectors first, then
    // falls back to text-based matching that pierces shadow DOM roots.
    await page.waitForTimeout(1500); // allow banners to mount
    for (let pass = 0; pass < 3; pass++) {
      const dismissed = await page.evaluate(() => {
        // 1. Known consent platforms
        const knownSelectors = [
          '#onetrust-accept-btn-handler',                                   // OneTrust
          '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',         // Cookiebot
          '#CybotCookiebotDialogBodyButtonAccept',
          '.cc-btn.cc-allow',                                               // cookieconsent
          '.cky-btn-accept',                                                // CookieYes
          '#hs-eu-confirmation-button',                                     // HubSpot
          'button[data-testid="uc-accept-all-button"]',                     // Usercentrics
          'button[data-tid="banner-accept"]',                               // Usercentrics v2
          '#didomi-notice-agree-button',                                    // Didomi
          'button.didomi-components-button--color-primary',
          '.fc-cta-consent',                                                // Google FC
          'button.iubenda-cs-accept-btn',                                   // iubenda
          'button.qc-cmp2-accept-all',                                      // Quantcast
          '[aria-label="Consent"] button',
        ];
        for (const sel of knownSelectors) {
          const el = document.querySelector(sel);
          if (el) { try { el.click(); return sel; } catch {} }
        }

        // 2. Walk all shadow roots to collect clickable elements
        const collect = (root, out) => {
          const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
          let n = walker.currentNode;
          while (n) {
            if (n.shadowRoot) collect(n.shadowRoot, out);
            const tag = n.tagName;
            if (tag === 'BUTTON' || tag === 'A' || n.getAttribute && n.getAttribute('role') === 'button' ||
                (tag === 'INPUT' && /button|submit/i.test(n.type))) {
              out.push(n);
            }
            n = walker.nextNode();
          }
        };
        const clickables = [];
        collect(document, clickables);

        const patterns = [
          /^accept all$/i, /^accept$/i, /accept all/i, /accept cookies/i,
          /allow all/i, /^i agree$/i, /agree and close/i, /^agree$/i,
          /^alle akzeptieren$/i, /alle akzeptieren/i, /^akzeptieren$/i,
          /alle cookies akzeptieren/i, /^zustimmen$/i, /einverstanden/i,
          /^tout accepter$/i, /tout accepter/i, /^accepter$/i, /j'accepte/i,
          /^aceptar todo$/i, /aceptar todas/i, /^aceptar$/i, /acepto/i,
          /قبول الكل/, /^قبول$/, /^موافق$/,
          /^got it$/i, /^ok$/i, /continue/i,
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
      if (!dismissed) break;
      await page.waitForTimeout(600);
    }
    await page.waitForTimeout(500);

    // Viewport screenshot
    await page.screenshot({ path: viewportPath, fullPage: false, type: 'png' });

    // Scroll through to trigger lazy content / animations
    await page.evaluate(async () => {
      await new Promise(resolve => {
        let y = 0;
        const step = 600;
        const timer = setInterval(() => {
          window.scrollTo(0, y);
          y += step;
          if (y >= document.body.scrollHeight) {
            window.scrollTo(0, 0);
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });
    await page.waitForTimeout(1500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(800);

    // Full-page screenshot
    await page.screenshot({ path: fullPath, fullPage: true, type: 'png' });

    return { slug, status: 'ok' };
  } catch (err) {
    return { slug, status: 'error', error: err.message };
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
      const tag = res.status === 'ok' ? 'OK' : res.status === 'skip' ? 'SKIP' : 'ERR';
      process.stdout.write(`[${String(my + 1).padStart(2, '0')}/${tasks.length}] ${t[0]}/${t[1]} — ${tag} (${dur}s)${res.error ? ' — ' + res.error.split('\n')[0] : ''}\n`);
      results.push({ ...res, category: t[0], url: t[2] });
    }
  });
  await Promise.all(workers);
  return results;
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const results = await runPool(browser, SITES, CONCURRENCY);
    const ok   = results.filter(r => r.status === 'ok').length;
    const skip = results.filter(r => r.status === 'skip').length;
    const err  = results.filter(r => r.status === 'error');
    console.log(`\n=== DONE === ok=${ok} skip=${skip} err=${err.length}`);
    if (err.length) {
      console.log('\nErrors:');
      for (const e of err) console.log(`  - ${e.category}/${e.slug} (${e.url}) :: ${e.error}`);
    }
    fs.writeFileSync(path.join(OUT, '_runner', 'results.json'), JSON.stringify(results, null, 2));
  } finally {
    await browser.close();
  }
})().catch(e => { console.error(e); process.exit(1); });
