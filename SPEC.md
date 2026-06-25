# SPEC.md — Magnet Clinical Solutions website

# Location: /home/eugen/projects/mom's_company/SPEC.md
# Rule: This file describes the CURRENT state — update IN PLACE, never append-only. Reconcile at the end of any session that changes a contract, value, or schema.
# Last updated: 2026-06-25

This is the reproduction contract for the **live website** under `website/` (the
"warm-earth" design). A fresh session given only this file should be able to rebuild a
behaviourally and visually equivalent site. Archived/older designs live at the repo-root
`archive/` (kept in the repo but deliberately OUTSIDE `website/` so they are never deployed)
and are out of scope here.

---

## 1. Stack & run

- **Type:** fully static site. Vanilla HTML + CSS + JavaScript. No build step, no
  framework, no bundler, no npm dependencies. No CDN JS (fonts are the only external load).
- **External fonts:** Google Fonts — `Lora` (ital 400/500/600/700, italic 400/500) and
  `Nunito Sans` (300/400/600/700/800), loaded via `<link>` with `preconnect` to
  `fonts.googleapis.com` / `fonts.gstatic.com`.
- **Run locally:** serve the `website/` directory with any static server, e.g.
  `python3 -m http.server -d website 8000` then open `http://localhost:8000/`.
  (Opening `file://` also mostly works; a server is preferred so relative asset paths and
  `localStorage` behave normally.)
- **Deploy (LIVE):** GitHub Pages. `.github/workflows/pages.yml` publishes the `website/`
  dir to Pages on every push to `master`. Custom domain **`magnet-clinical-solutions.com`**
  (set via the Pages API/Settings; `website/CNAME` mirrors it as belt-and-suspenders).
  HTTPS enforced (Let's Encrypt cert covering apex + `www`). **DNS is on Cloudflare**
  (same account/nameservers as before): apex `@` → 4 GitHub A records
  (185.199.108–111.153) + `www` CNAME → `eugengudima.github.io`, all **DNS-only/grey-cloud**
  (proxied/orange breaks GitHub's cert). The old domain `magnet-solutions.org` 301-redirects
  to `.com` via a Cloudflare redirect rule.
- **Deploy (fallback, optional):** Cloudflare Workers static assets. `wrangler.jsonc` at repo
  root sets `name: "magnet-clinical-solutions"`, `assets.directory: "website"`,
  `compatibility_date: "2026-05-09"`, `compatibility_flags: ["nodejs_compat"]`. Manual
  `npx wrangler deploy` → `*.workers.dev`. Not the production path.
- **System deps:** none beyond a browser; deploy is automatic on push (Node + wrangler only
  needed for the optional Workers fallback).

## 2. Architecture (files & responsibilities)

```
website/
├── index.html      Home: hero + stat band + 4-service overview + why-us + about strip + CTA + footer
├── about.html      About: founder story, mission/values, Moldova context, CTA
├── services.html   Services: 4 detail sections with anchors #audit #training #cro #recruitment
├── gallery.html    Gallery grid
├── contact.html    Contact form + contact details
│   (website/ holds ONLY shippable files — wrangler deploys this dir verbatim, so nothing
│    non-public may live inside it; archived work stays at repo-root archive/)
└── assets/
    ├── theme.css   ALL styling: :root tokens, [data-theme="dark"] overrides, base, components, responsive
    ├── main.js     UI behaviour: navbar scroll state, dark-mode toggle, mobile menu, reveal/timeline/counter observers
    ├── i18n.js     Runtime EN→RO translation (DOM text-node walker + dictionary)
    ├── logo.png            full logo lockup (navy)
    ├── lm-mono-white.png   "LM" monogram mark — used in navbar + footer wordmark (and the email signature lockup)
    ├── flag-uk.png         English language-toggle flag
    └── flag-md.png         Moldova/Romanian language-toggle flag
```

Every page is self-contained HTML that links `assets/theme.css` in `<head>` and loads
`assets/i18n.js` then `assets/main.js` at end of `<body>`. There is no shared HTML
include mechanism — navbar and footer markup are duplicated per page (keep them in sync
manually).

**Control flow on load:** `<head>` runs a tiny inline script that reads
`localStorage.mcs_theme` and sets `data-theme="dark"` before paint (prevents flash).
After DOM ready: `i18n.js init()` snapshots text and applies the saved language;
`main.js` wires up scroll/toggle/menu and starts IntersectionObservers.

## 3. Persisted state (localStorage schema)

| Key         | Values            | Meaning                                    | Written by |
|-------------|-------------------|--------------------------------------------|------------|
| `mcs_theme` | `"dark"`/`"light"`| colour theme; `dark` ⇒ `<html data-theme="dark">` | inline head script (read) + main.js (write) |
| `mcs_lang`  | `"en"`/`"ro"`     | active language; `ro` ⇒ Romanian applied   | i18n.js    |

No cookies, no backend, no other persistence. The contact form does not POST anywhere
(client-only; success handled in JS).

## 4. Interfaces & contracts

- **HTML hooks main.js / i18n.js depend on (class/attr contract):**
  - `.navbar` — gets a scrolled state class on `window scroll`.
  - `.theme-toggle` — click toggles dark mode.
  - `.navbar-hamburger` + `.navbar-links` (`.open` class) — mobile menu.
  - `.navbar-links a` — active-link detection by current path.
  - `.reveal` — scroll-in reveal; receives `.in` when intersecting (or immediately if no IO).
  - `.tl-item` — timeline reveal (same pattern).
  - `.stat-number[data-count]` — animated count-up to the integer in `data-count`.
  - `.lang-btn[data-lang="en|ro"]` — language switch buttons; get `.active` + `aria-pressed`.
  - `.lang-switch` — its subtree is excluded from translation.
- **Global JS API:** `window.mcsTranslate(str)` → returns the RO string if RO active and a
  dictionary entry exists, else `str` (used for dynamically created text, e.g. form
  success messages). `window.__mcsLang` holds the active lang code.
- **Analytics:** Cloudflare Web Analytics beacon on every page, immediately before `</body>`
  (after `assets/main.js`): `<script defer src='https://static.cloudflareinsights.com/beacon.min.js'
  data-cf-beacon='{"token": "fc06107ae3114177bbcc1b9be8e26094"}'></script>`. Manual/JS-beacon
  mode (NOT edge-injected) because hosting is GitHub Pages with grey-cloud Cloudflare DNS, so
  traffic never passes through CF's proxy. Cookieless — no consent banner. View at CF dash →
  Analytics → Web Analytics.
- **Contact contract:** the contact email is `lina.gudima@magnet-clinical-solutions.com`
  (matches the email signature + working M365 admin UPN), linked as a plain `mailto:`. The
  phone is `+373 69 607 851`, linked as `tel:+37369607851`. Both appear in every page footer
  (order: Email · Phone · Location) and in `contact.html`'s main contact block. (Do NOT
  reintroduce Cloudflare `/cdn-cgi/l/email-protection` obfuscation or `__cf_email__` spans —
  these were stripped during integration and the decode script removed. The old
  `info@magnetclinical.md` address is retired site-wide.)

## 5. i18n algorithm (re-implementable detail)

- `i18n.js` holds one object `RO = { "<exact trimmed English>": "<Romanian>", ... }`,
  keyed by the trimmed English source text (covers nav, all section copy, form
  placeholders, and the per-page `<title>`).
- `collect()` runs once: a `TreeWalker(SHOW_TEXT)` over `document.body` snapshots every
  non-empty text node, skipping `SCRIPT/STYLE/NOSCRIPT` and anything inside `.lang-switch`.
  Separately snapshots all `[placeholder]` attributes and `document.title`.
- `applyLang(lang)`: for `ro`, replaces each snapshot node's value with its dictionary
  match (preserving surrounding whitespace by splicing at the trimmed key's offset);
  for `en`, restores the original snapshot. Also swaps placeholders and `<title>`, sets
  `document.documentElement.lang`, updates `.lang-btn` active/aria state, persists
  `mcs_lang`. Missing keys fall back to English (graceful).
- Init reads `localStorage.mcs_lang` (default `en`) and applies it; buttons call
  `applyLang(data-lang)` on click. Adding a new translatable string = add its English→RO
  pair to `RO`.

## 6. Design tokens (theme.css `:root`)

**Light (default):**
`--cream #faf6f1` · `--sand #f0e8da` · `--warm #e8d5c0` · `--forest #2c5f3c` ·
`--forest-light #3d7a51` · `--forest-dark #224b30` · `--brown #6b4c3b` ·
`--gold #c4963a` · `--gold-light #d9b25f` · `--text #2a1f18` · `--muted #7a6558` ·
`--border #ddd0c0` · `--white #ffffff` · `--surface #ffffff`

**Dark (`[data-theme="dark"]` overrides):**
`--cream #17120f` · `--sand #1e1813` · `--warm #2a211b` · `--surface #221b16` ·
`--forest #3d7a51` · `--forest-light #519368` · `--forest-dark #2c5f3c` ·
`--brown #cbb6a3` · `--gold #d9b25f` · `--gold-light #e6c77f` · `--text #f1e9dd` ·
`--muted #ad9d8d` · `--border #382c24` · `--white #221b16`

**Shared:** `--shadow 0 2px 20px rgba(42,31,24,.08)` ·
`--shadow-hover 0 12px 40px rgba(42,31,24,.14)` (dark uses heavier black shadows) ·
`--radius 14px` · `--radius-sm 8px` · `--transition .35s cubic-bezier(.4,0,.2,1)`.

**Typography:** headings `'Lora', Georgia, serif` (weight 600–700, `text-wrap: balance`);
body `'Nunito Sans', system-ui, sans-serif`. Responsive breakpoints in the same family as
the v1.0 site (~900px / ~640px).

## 7. Content model (what each page must contain)

- **4 service directions** (consistent across site, anchored on services.html):
  `#audit` Clinical Auditing · `#training` Training Platform · `#cro` CRO Services ·
  `#recruitment` Patient Recruitment. (Domain detail in NOTES.md.)
- Company: **Magnet Clinical Solutions**, clinical research, **Republic of Moldova**, B2B.
- Footer brand wordmark uses the `lm-mono-white.png` mark + "Magnet Clinical Solutions".
- Language switch (EN/RO flags) lives in the navbar; RO targets the Moldova market.

## 8. Non-obvious behaviours / gotchas

- Theme is set pre-paint by an inline `<head>` script — keep that snippet in every page or
  dark mode will flash on load.
- IntersectionObserver code degrades gracefully: if IO is unavailable, reveal elements get
  `.in` immediately (content never stays hidden).
- The HTML was originally a Cloudflare export. Any re-export from that source will
  reintroduce `/cdn-cgi/...` email obfuscation and a `data-cfasync` decode script — both
  must be stripped again (see §4 email contract).
- Navbar/footer are copy-pasted per page; a change to one must be propagated to all five.
