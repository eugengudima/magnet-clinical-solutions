# MEMORY.md — mom's_company
# Location: /home/eugen/claudehome/projects/mom's_company/MEMORY.md
# Rule: NEVER overwrite — append only (except FILE STRUCTURE which updates in place)
# Last updated: 2026-06-24 (new "warm-earth" site integrated; repo reorganized)

---

## ACTION LOG

1. Project initialized
   1.1. Created project directory and MEMORY.md / NOTES.md scaffold per CLAUDE.md instructions
         Triggered by: user request to start mom's company website project

2. Requirements gathered
   2.1. Transcribed Romanian WhatsApp voice message (whisper small model, translate to English)
         Produced: full description of 4 service directions
   2.2. Identified logo PNG (2026-05-09-140210_hyprshot.png)
         Produced: brand color (navy #1B2A6B), logo style (M icon + wordmark in caps)
   2.3. Updated NOTES.md with company structure, services, target audience, tech stack decision

3. Website built — v1.0
   3.1. Tech stack decision: vanilla HTML/CSS/JS with CDN imports (GSAP + Google Fonts)
         Reason: root partition only had 1.5GB free — insufficient for node_modules (Astro would need ~400MB)
         Logged in NOTES.md
   3.2. Created shared stylesheet (assets/style.css)
         Decisions: navy/gold color palette from logo; Inter + Playfair Display fonts; CSS custom properties throughout; responsive breakpoints at 900px and 640px
   3.3. Created shared JS (assets/main.js)
         Features: navbar scroll effect, mobile menu, active link detection, GSAP ScrollTrigger animations (fade-up, slide, scale, stagger, parallax, counter), contact form feedback
   3.4. Built index.html (Home)
         Sections: navbar, full-viewport hero with grid overlay + stats, services overview (4 cards), why-us with floating card, about strip, testimonials (3 placeholder), CTA, footer
   3.5. Built about.html
         Sections: page hero, founder story with photo placeholder + credentials grid, mission & values (4 cards), team (3 placeholders), Moldova context strip, CTA, footer
   3.6. Built services.html
         Sections: page hero, 4 full service detail sections (alternating layout), CTA, footer
         Each service has: icon visual, description, feature list, CTA button, anchor ID
   3.7. Built gallery.html
         Sections: page hero, tab filter UI (All/Team/Training/Events/Clinical Work), 9-item grid with hover overlay, placeholder content, CTA, footer
   3.8. Built contact.html
         Sections: page hero, contact form (name, email, company, service dropdown, message), contact details, FAQ (4 items), footer
   3.9. Copied logo to website/assets/images/logo.png

4. Component library + Claude Design sync — 2026-06-21
   4.1. Decided to convert the static site's design language into a real React component library, then sync THAT to claude.ai/design
         Triggered by: user ran /design-sync; the repo is a static HTML site (no components), so the standard sync had nothing to upload. User chose "build a real component library first."
   4.2. Built `library/` — npm package `magnet-clinical-ui` (globalName MagnetUI), React 18 + TypeScript, tsup build → dist/ (ESM + .d.ts)
         21 components: thin typed wrappers that emit the site's exact markup/classes against the site's own CSS (faithful — CSS untouched). styles.css = tokens + 11 themes + components (consolidated from style.css + themes.css).
   4.3. Ran design-sync package-shape converter (.ds-sync/) → ds-bundle/ (window.MagnetUI bundle + per-component .html/.d.ts/.prompt.md + previews)
         Authored all 21 preview cards (.design-sync/previews/), graded every cell `good` against system chromium render check.
         Fixes: consolidated tokens into cssEntry (tokensPkg only reads node_modules pkgs); column cardMode for full-width sections; navy wrappers for dark-bg components; theme-aware Navbar brand fallback.
   4.4. Authored conventions header (.design-sync/conventions.md) and uploaded to new Claude Design project "Magnet Clinical Solutions"
         Project: https://claude.ai/design/p/16b02ea8-5ae3-46c4-9704-d6059f3abf86 — 21 components live, render check clean.

5. Logo variants asset pack — 2026-06-21
   5.1. Vector-traced `website/assets/images/logo.png` with potrace (upscaled+thresholded crops for full lockup / icon / wordmark), excluding the gray screenshot border
         Produced: 12 master SVGs = 3 shapes (full, icon, wordmark) × 4 colors (navy #000743, white, black, gold #C9A84C)
         Triggered by: user asked for a logo-variants directory with all SVGs and "absolutely all extensions" for reuse
   5.2. Confirmed the mark is an "LM" monogram in a square frame; exact logo ink is #000743 (sampled from PNG), brand gold #C9A84C (from library/styles/styles.css)
   5.3. Built every raster/vector format via `logo-variants/_src/build.sh`: PNG (size ladders), WebP, AVIF (avifenc), HEIC (heif-enc), JPEG, GIF, TIFF, BMP, PDF+EPS (potrace vector), multi-res ICO, true ICNS (Pillow), plus a web favicon bundle. 177 deliverable files.
         Note: ImageMagick here cannot encode AVIF/HEIC (no AV1 enc) → used avifenc/heif-enc; magick wrote ICNS as bare PNG → used Pillow for real ICNS container.

6. New "warm-earth" website integrated + repo reorganized — 2026-06-24
   6.1. Replaced the old theme-picker site with the new design delivered in `newwebsitedesign/`
         Triggered by: user dropped a `newwebsitedesign/` dir (5 HTML pages + `Magnet Clinical Solutions.zip` of assets) and asked to reintegrate it into the actual website, merge files, and tidy up
         New design = "warm-earth-site": cream/forest/gold palette, Lora + Nunito Sans fonts, light/dark mode, EN/RO bilingual (Moldova). Self-contained — no GSAP/CDN-JS dependency (vanilla IntersectionObserver reveals).
   6.2. Archived the old v1.0 site instead of deleting (user choice)
         Moved to `website/archive/`: old-site/ (the navy/gold pages + style.css/themes.css/theme-picker.js), suggestions/ (s2–s10), suggestion-1/. Removed identical root-level duplicates of suggestions/ + suggestion-1/ (git rm).
   6.3. Extracted zip assets into `website/assets/` and moved the 5 new pages into `website/`
         Assets: theme.css, main.js, i18n.js (EN/RO dictionary + DOM text-walker), logo.png, lm-mono-white.png, flag-uk.png, flag-md.png. All page→asset and page→page links verified resolving; all 5 pages parse clean.
   6.4. Stripped Cloudflare export cruft from all 5 pages
         The HTML was exported through Cloudflare → had `/cdn-cgi/l/email-protection` obfuscation + `__cf_email__` spans + the email-decode.min.js script. Decoded the real address (info@magnetclinical.md) and replaced every instance with a plain `mailto:` link; removed the decode script. Zero residual cdn-cgi/cf_email refs.
   6.5. Gathered loose root files into `source-materials/` (user choice: gather, not delete)
         Moved: both WhatsApp .ogg/.txt briefs, the hyprshot logo screenshot, the persona infographic (→ persona-infographic.html), and the original design export (→ warm-earth-site-export.zip). Root now holds only website/, library/, logo-variants/, brochure/, source-materials/ + the 3 doc files + wrangler.jsonc.
         Note: wrangler.jsonc still points `assets.directory` at `website` — unchanged, still correct.

---

## FILE STRUCTURE

```
mom's_company/
├── MEMORY.md                — action log and file structure (this file)
├── NOTES.md                — knowledge tree: goals, domain, content, decisions
├── SPEC.md                 — reproduction contract for the live website
├── wrangler.jsonc          — Cloudflare Workers config (assets.directory = website)
├── website/                — THE LIVE SITE (warm-earth design, served by wrangler)
│   ├── index.html          — Home page
│   ├── about.html          — About page
│   ├── services.html       — Services page (4 directions, anchors #audit/#training/#cro/#recruitment)
│   ├── gallery.html        — Gallery page
│   ├── contact.html        — Contact page (form + details)
│   ├── assets/
│   │   ├── theme.css       — all styles: tokens + light/dark themes + components, responsive
│   │   ├── main.js         — navbar scroll, dark-mode toggle, mobile menu, reveal/counter observers
│   │   ├── i18n.js         — EN/RO dictionary + runtime DOM text-walker translator
│   │   ├── logo.png        — full logo (navy lockup)
│   │   ├── lm-mono-white.png — LM monogram mark used in navbar/footer
│   │   ├── flag-uk.png     — EN language toggle flag
│   │   └── flag-md.png     — RO (Moldova) language toggle flag
│   └── archive/            — superseded design work (kept for reference, not served as primary)
│       ├── old-site/       — v1.0 navy/gold site (pages + style.css/themes.css/theme-picker.js + images/)
│       ├── suggestions/    — design explorations s2–s10
│       └── suggestion-1/   — alternate full-site exploration
├── source-materials/       — raw briefs & source inputs (gathered from repo root)
│   ├── WhatsApp Ptt 2026-05-09 at 11.19.52 AM.{ogg,txt} — mic-test voice note + transcript
│   ├── WhatsApp Ptt 2026-05-09 at 1.36.44 PM.{ogg,txt}  — company briefing voice note + EN translation
│   ├── 2026-05-09-140210_hyprshot.png  — logo source screenshot
│   ├── persona-infographic.html        — target-persona infographic
│   └── warm-earth-site-export.zip      — original design export (assets, now unpacked into website/)
├── brochure/               — client brochure source images (WA0002–WA0006.jpg)
├── logo-variants/          — full logo asset pack (see logo-variants/README.md)
│   ├── README.md           — inventory, brand colors, naming, favicon snippet, regen steps
│   ├── svg/                — 12 masters: {full,icon,wordmark} × {navy,white,black,gold}
│   ├── png/ webp/ avif/ heic/ jpg/ gif/ tiff/ bmp/  — raster exports per variant
│   ├── pdf/ eps/           — vector print formats (navy)
│   ├── ico/ icns/          — Windows + macOS app icons (navy, white)
│   ├── favicon/            — drop-in web favicon bundle
│   └── _src/               — bitonal source bitmaps + build.sh (regeneration only)
├── library/                — React component library `magnet-clinical-ui` (see library/SPEC.md)
│   ├── package.json        — tsup build, React peer dep
│   ├── src/
│   │   ├── index.ts        — barrel: exports all 21 components + prop types
│   │   └── components/      — one .tsx per component (typed wrappers over the brand markup)
│   ├── styles/styles.css   — tokens + 11 themes + base + every component's CSS (the cssEntry)
│   └── dist/               — build output (gitignored): index.js (ESM) + index.d.ts
└── .design-sync/           — Claude Design sync inputs (committed durable set)
    ├── config.json         — pkg/globalName/projectId/cssEntry/overrides/readmeHeader
    ├── conventions.md      — design-agent conventions header (prepended to README)
    ├── NOTES.md            — re-sync gotchas + risks
    └── previews/           — one .tsx per component: authored preview cards
```

## KEY NUMBERS

- Pages: 5 (Home, About, Services, Gallery, Contact)
- Services documented: 4 directions
- Languages: 2 (EN / RO) via i18n.js
- Themes: 2 (light / dark) via data-theme + mcs_theme
- Live design palette (warm-earth): cream #faf6f1, forest #2c5f3c, gold #c4963a, text #2a1f18
- Fonts: Lora (headings), Nunito Sans (body)
- Email of record: info@magnetclinical.md
