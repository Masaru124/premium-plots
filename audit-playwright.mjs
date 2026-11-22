import { chromium } from '@playwright/test';
import fs from 'node:fs';

const BASE = 'http://localhost:3222';
const OUT = '.taste-skill/audit';
fs.mkdirSync(OUT, { recursive: true });

const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'projects', path: '/?page=projects' },
  { name: 'dubai', path: '/?page=dubai' },
  { name: 'interior', path: '/?page=interior' },
  { name: 'about', path: '/?page=about' },
  { name: 'contact', path: '/?page=contact' },
  { name: 'blog', path: '/?page=blog' },
  { name: 'matchmaker', path: '/matchmaker' },
  { name: 'plots', path: '/plots-in-bangalore' },
  { name: 'villas', path: '/luxury-villas-bangalore' },
  { name: 'purva', path: '/purva-sounds-of-water' },
  { name: 'qna', path: '/qna' },
];
const SIZES = [
  { w: 390, h: 844, label: 'mobile' },
  { w: 834, h: 1112, label: 'tablet' },
  { w: 1440, h: 900, label: 'desktop' },
];

// Same collection logic, but only images at these widths so it's fast.
const COLLECT = () => {
  // oklab/oklch -> srgb
  const parseColor = (c) => {
    if (!c) return null;
    if (c.startsWith('oklab(')) {
      const m = c.match(/-?[\d.]+(?:e-?\d+)?/g); if (!m) return null;
      const [L, a, b, al = 1] = m.map(Number);
      const A = L + 0.3963377774 * a + 0.2158037573 * b;
      const B = L - 0.1055613458 * a - 0.0638541728 * b;
      const C = L - 0.0894841775 * a - 1.291485548 * b;
      if (A < 0 || B < 0 || C < 0) return null;
      const r = 4.0767416621 * A * A * A - 3.3077115913 * B * B * B + 0.2309699292 * C * C * C;
      const g = -1.2684380046 * A * A * A + 2.6097574011 * B * B * B - 0.3413193965 * C * C * C;
      const b_ = -0.0041960863 * A * A * A - 0.7034186147 * B * B * B + 1.707614701 * C * C * C;
      return { rgb: [Math.max(0, Math.min(1, r)), Math.max(0, Math.min(1, g)), Math.max(0, Math.min(1, b_))], a: al };
    }
    if (c.startsWith('oklch(')) {
      const m = c.match(/-?[\d.]+(?:e-?\d+)?/g); if (!m) return null;
      const [L, C, H, al = 1] = m.map(Number);
      const rad = (H * Math.PI) / 180;
      const a = C * Math.cos(rad);
      const b = C * Math.sin(rad);
      return parseColor(`oklab(${L} ${a} ${b} / ${al})`);
    }
    const m = c.match(/-?[\d.]+/g); if (!m) return null;
    const [r, g, b, al = 1] = m.map(Number);
    const lin = [r, g, b].map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
    return { rgb: lin, a: al };
  };
  const relLum = (p) => 0.2126 * p.rgb[0] + 0.7152 * p.rgb[1] + 0.0722 * p.rgb[2];

  const bgStack = (el) => {
    const stack = [];
    let n = el;
    while (n) {
      const cs = getComputedStyle(n);
      const bg = cs.backgroundImage;
      if (bg && bg !== 'none' && bg.startsWith('linear-gradient')) {
        stack.push({ type: 'gradient', val: bg, a: parseFloat(cs.opacity) || 1, cs: cs });
      }
      const rgb = parseColor(cs.backgroundColor);
      if (rgb && rgb.a > 0) stack.push({ type: 'solid', color: rgb, a: 1 });
      n = n.parentElement;
    }
    // Build final bg as base white, then composite each layer bottom-up
    let base = { rgb: [1, 1, 1], a: 1 };
    for (let i = stack.length - 1; i >= 0; i--) {
      const layer = stack[i];
      if (layer.type === 'solid') {
        const bl = base;
        base = { rgb: [layer.color.rgb[0] * layer.color.a + bl.rgb[0] * (1 - layer.color.a),
                         layer.color.rgb[1] * layer.color.a + bl.rgb[1] * (1 - layer.color.a),
                         layer.color.rgb[2] * layer.color.a + bl.rgb[2] * (1 - layer.color.a)], a: 1 };
      } else {
        // Gradient: only handle simple solid-opacity layers for contrast estimation (use palette for hatch)
        // For our pages, banners use navy rgba backgrounds from bg-[#0B1F3A]/opacity — map through gradient.
        // Parse rgba stops from linear-gradient's color stops.
        const stops = layer.val.match(/#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}|rgba?\([^)]+\)|okl[a-z]*\([^)]+\)/gi) || [];
        if (stops.length >= 2) {
          const c0 = parseColor(stops[0]);
          if (c0 && c0.a > 0) {
            // gradient start color over base (approximate: take first stop as the bg for contrast)
            const bl = base;
            base = { rgb: [c0.rgb[0] * c0.a + bl.rgb[0] * (1 - c0.a),
                             c0.rgb[1] * c0.a + bl.rgb[1] * (1 - c0.a),
                             c0.rgb[2] * c0.a + bl.rgb[2] * (1 - c0.a)], a: 1 };
          }
        }
      }
    }
    return base;
  };

  const low = [], small = [], overflow = [];
  const vw = document.documentElement.clientWidth;
  const sel = 'p,span,a,li,h1,h2,h3,h4,h5,label,button,div,td,th,figcaption,blockquote,q,strong,em';
  document.querySelectorAll(sel).forEach((el) => {
    const hasText = Array.from(el.childNodes || []).some((n) => n.nodeType === 3 && n.textContent.trim().length > 1);
    if (!hasText) return;
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) === 0) return;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return;
    const txt = el.textContent.trim().replace(/\s+/g, ' ').slice(0, 50);
    const fs = parseFloat(cs.fontSize);
    const bold = parseInt(cs.fontWeight || '400', 10) >= 700;
    const fg = parseColor(cs.color);
    if (!fg) return;
    const bg = bgStack(el);
    const eff = { rgb: [fg.rgb[0] * fg.a + bg.rgb[0] * (1 - fg.a),
                         fg.rgb[1] * fg.a + bg.rgb[1] * (1 - fg.a),
                         fg.rgb[2] * fg.a + bg.rgb[2] * (1 - fg.a)], a: 1 };
    const aLum = relLum(eff), bLum = relLum(bg);
    const cr = (Math.max(aLum, bLum) + 0.05) / (Math.min(aLum, bLum) + 0.05);
    const need = (fs >= 24 || (fs >= 18.66 && bold)) ? 3 : 4.5;
    if (cr < need - 0.04) low.push({ cr: +cr.toFixed(2), fs: +fs.toFixed(1), txt, color: cs.color });
    if (fs < 14.5 && txt.length > 2) small.push({ fs: +fs.toFixed(1), txt });
    if (r.right > vw + 2 && r.width > 3) overflow.push({ txt: txt.slice(0, 40), right: Math.round(r.right - vw) });
  });

  const imgs = [...document.querySelectorAll('img')];
  return {
    vw, scrollW: document.documentElement.scrollWidth,
    height: document.body.scrollHeight,
    sections: document.querySelectorAll('section').length,
    imgs: imgs.length,
    imgsNoAlt: imgs.filter((i) => !i.getAttribute('alt')).length,
    lowCount: low.length, low: low.slice(0, 16),
    smallCount: small.length, small: small.slice(0, 16),
    overflow: overflow.slice(0, 8),
    h1: [...document.querySelectorAll('h1')].map((h) => h.textContent.trim().slice(0, 55)),
    h23: document.querySelectorAll('h2, h3').length,
    btns: document.querySelectorAll('button, [role=button]').length,
  };
};

const browser = await chromium.launch();
const errs = [];
for (const route of ROUTES) {
  for (const sz of SIZES) {
    const ctx = await browser.newContext({ viewport: { width: sz.w, height: sz.h }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    page.on('console', (m) => { if (m.type() === 'error') errs.push(`${route.name}/${sz.label}: ${m.text().slice(0, 200)}`); });
    page.on('pageerror', (e) => errs.push(`${route.name}/${sz.label}: pageerror ${String(e).slice(0, 200)}`));
    try {
      await page.goto(BASE + route.path, { waitUntil: 'networkidle', timeout: 45000 });
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(900);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(400);
      if (sz.label === 'mobile' || sz.label === 'desktop') {
        await page.screenshot({ path: `${OUT}/${route.name}-${sz.label}.jpg`, fullPage: true, quality: 72, type: 'jpeg' });
      }
      const data = await page.evaluate(COLLECT);
      console.log(`${route.name.padEnd(10)}${sz.label.padEnd(7)} h=${String(data.height).padEnd(6)} sec=${String(data.sections).padEnd(3)} imgs=${String(data.imgs).padEnd(3)} alt=${String(data.imgsNoAlt).padEnd(3)} low=${String(data.lowCount).padEnd(3)} sm=${String(data.smallCount).padEnd(3)} ovf=${data.overflow.length} sw=${data.scrollW > data.vw ? 'OVER' : 'ok'} h1=[${data.h1.join(' / ')}]`);
      if (data.low.length) console.log('   LOW CONTRAST: ' + data.low.map((x) => `[${x.cr} ${x.fs}px] ${x.txt}`).join(' | '));
      if (data.small.length) console.log('   SMALL TEXT: ' + data.small.map((x) => `${x.fs}px "${x.txt}"`).slice(0, 6).join(' | '));
      if (data.overflow.length) console.log('   OVERFLOW: ' + data.overflow.map((x) => `"${x.txt}" +${x.right}px`).join(' | '));
    } catch (e) { errs.push(`${route.name}/${sz.label}: FAILED ${String(e).slice(0, 160)}`); }
    await ctx.close();
  }
}
await browser.close();
fs.writeFileSync(`${OUT}/audit.json`, JSON.stringify(errs, null, 1));
console.log('\n--- ERRORS ---\n' + (errs.join('\n') || 'none'));
