import { chromium } from 'playwright';
import fs from 'node:fs';

const BASE = process.env.BASE || 'http://127.0.0.1:3222';
const OUT = '.taste-skill/audit';
fs.mkdirSync(OUT, { recursive: true });

const ROUTES = [
  ['home', '/'],
  ['projects', '/?page=projects'],
  ['dubai', '/?page=dubai'],
  ['interior', '/?page=interior'],
  ['about', '/?page=about'],
  ['contact', '/?page=contact'],
  ['blog', '/?page=blog'],
  ['matchmaker', '/matchmaker'],
  ['plots', '/plots-in-bangalore'],
  ['villas', '/luxury-villas-bangalore'],
  ['purva', '/purva-sounds-of-water'],
  ['qna', '/qna'],
  ['privacy', '/?page=privacy'],
  ['terms', '/?page=terms'],
];

const WIDTHS = [
  ['mobile', 390, 844],
  ['tablet', 834, 1112],
  ['desktop', 1440, 900],
];

// In-page collector. Converts oklab()/oklch() colours (Tailwind v4 output) to sRGB.
const COLLECT = () => {
  const parse = (c) => {
    if (!c) return null;
    if (c.startsWith('oklab')) {
      const n = c.match(/-?[\d.]+(?:e-?\d+)?/g).map(Number);
      const [L, a, b, al = 1] = n;
      const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
      const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
      const s_ = L - 0.0894841775 * a - 1.291485548 * b;
      const l = l_ ** 3, m = m_ ** 3, s = s_ ** 3;
      const lin = [
        4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
        -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
        -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
      ];
      return { rgb: lin.map((v) => Math.min(1, Math.max(0, v))), a: al };
    }
    if (c.startsWith('oklch')) {
      const n = c.match(/-?[\d.]+(?:e-?\d+)?/g).map(Number);
      const [L, C, H, al = 1] = n;
      const rad = (H * Math.PI) / 180;
      const a = C * Math.cos(rad), b = C * Math.sin(rad);
      return parse(`oklab(${L} ${a} ${b} / ${al})`);
    }
    const n = c.match(/-?[\d.]+/g);
    if (!n) return null;
    const [r, g, b, al = 1] = n.map(Number);
    return { rgb: [r, g, b].map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }), a: al };
  };
  const rel = (p) => 0.2126 * p.rgb[0] + 0.7152 * p.rgb[1] + 0.0722 * p.rgb[2];
  const over = (fg, bg) => fg.rgb.map((v, i) => v * fg.a + bg.rgb[i] * (1 - fg.a));
  const bgOf = (el) => {
    let n = el;
    const stack = [];
    while (n) {
      const c = parse(getComputedStyle(n).backgroundColor);
      if (c && c.a > 0) stack.push(c);
      n = n.parentElement;
    }
    let base = { rgb: [1, 1, 1], a: 1 };
    for (let i = stack.length - 1; i >= 0; i--) base = { rgb: stack[i].rgb.map((v, j) => v * stack[i].a + base.rgb[j] * (1 - stack[i].a)), a: 1 };
    return base;
  };

  const low = [], small = [], overflow = [], hidden = [];
  const vw = document.documentElement.clientWidth;
  const sel = 'p,span,a,li,h1,h2,h3,h4,h5,label,button,div,td,th,figcaption,blockquote,strong,em';
  document.querySelectorAll(sel).forEach((el) => {
    const own = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 1);
    if (!own) return;
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || parseFloat(cs.opacity) === 0) return;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return;
    const txt = el.textContent.trim().replace(/\s+/g, ' ').slice(0, 46);
    const fs = parseFloat(cs.fontSize);
    const bold = parseInt(cs.fontWeight, 10) >= 700;
    const fg = parse(cs.color);
    if (!fg) return;
    const bg = bgOf(el);
    const eff = { rgb: over(fg, bg), a: 1 };
    const a = rel(eff), b = rel(bg);
    const cr = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
    const need = fs >= 24 || (fs >= 18.66 && bold) ? 3 : 4.5;
    if (cr < need - 0.05) low.push({ cr: +cr.toFixed(2), fs: +fs.toFixed(1), txt, color: cs.color });
    if (fs < 14) small.push({ fs: +fs.toFixed(1), txt });
    if (r.right > vw + 2 && r.width > 4) overflow.push({ txt, right: Math.round(r.right - vw) });
    if (r.height < 4 && txt.length > 4 && fs > 0) hidden.push(txt);
  });

  const imgs = [...document.images];
  return {
    vw,
    scrollW: document.documentElement.scrollWidth,
    height: document.body.scrollHeight,
    imgs: imgs.length,
    brokenImgs: imgs.filter((i) => i.complete && i.naturalWidth === 0).length,
    imgsNoAlt: imgs.filter((i) => !i.getAttribute('alt') && i.getAttribute('alt') !== '').length,
    imgVsText: Math.round((imgs.length / Math.max(1, document.querySelectorAll('section').length)) * 10) / 10,
    sections: document.querySelectorAll('section').length,
    lowCount: low.length,
    low: low.slice(0, 14),
    smallCount: small.length,
    small: small.slice(0, 14),
    overflow: overflow.slice(0, 8),
    hidden,
    h1: [...document.querySelectorAll('h1')].map((h) => h.textContent.trim().slice(0, 60)),
    h2Count: document.querySelectorAll('h2, h3').length,
    btns: document.querySelectorAll('button, a[role=button]').length,
    focusable: document.querySelectorAll('a[href], button, input, select, textarea').length,
  };
};

const browser = await chromium.launch();
const results = [];
const errors = [];

for (const [name, path] of ROUTES) {
  for (const [wName, w, h] of WIDTHS) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    page.on('console', (m) => { if (m.type() === 'error') errors.push(`${name}/${wName}: ${m.text().slice(0, 200)}`); });
    page.on('pageerror', (e) => errors.push(`${name}/${wName}: pageerror ${String(e).slice(0, 200)}`));
    try {
      await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 45000 });
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(900);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(400);
      const data = await page.evaluate(COLLECT);
      results.push({ name, path, width: wName, ...data });
      if (wName === 'mobile' || wName === 'desktop') {
        await page.screenshot({ path: `${OUT}/${name}-${wName}.jpg`, fullPage: true, quality: 62, type: 'jpeg' });
      }
    } catch (e) {
      errors.push(`${name}/${wName}: FAILED ${String(e).slice(0, 160)}`);
    }
    await ctx.close();
  }
}

await browser.close();
fs.writeFileSync(`${OUT}/report.json`, JSON.stringify(results, null, 1));
fs.writeFileSync(`${OUT}/errors.txt`, errors.join('\n'));

const line = (r) =>
  `${r.name.padEnd(11)} ${r.width.padEnd(7)} h=${String(r.height).padEnd(6)} imgs=${String(r.imgs).padEnd(3)} sec=${String(r.sections).padEnd(3)} low=${String(r.lowCount).padEnd(3)} small=${String(r.smallCount).padEnd(3)} ovf=${r.overflow.length} sw=${r.scrollW > r.vw ? 'YES' : 'no'} h1=${r.h1.length}`;
console.log(results.map(line).join('\n'));
console.log('\n--- errors ---\n' + (errors.join('\n') || 'none'));
