# MEMORY.md — mom's_company
# Location: /home/eugen/claudehome/projects/mom's_company/MEMORY.md
# Rule: NEVER overwrite — append only (except FILE STRUCTURE which updates in place)
# Last updated: 2026-06-25 (added doctor brochure "Broșura medici" — serious, no infographics)

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

7. First Cloudflare deploy of new site + archive moved out of the served dir — 2026-06-24
   7.1. Deployed `website/` to the Cloudflare Worker `magnet-clinical-solutions` via `npx wrangler deploy`
         Live at https://magnet-clinical-solutions.eugengudima15.workers.dev (default workers.dev subdomain). Deploy is manual — no CI/git-integration. Verified new warm-earth design renders.
   7.2. Caught that `website/archive/` was being served publicly (deploy read 49 files; /archive/old-site/picker.html etc. returned 200)
         Fix: `git mv website/archive archive` — archive now lives at repo ROOT, outside the deploy artifact. Redeployed → 13 files; archive paths now 404, live pages 200.
         Rule going forward: `website/` contains ONLY what ships; archived/experimental work stays at top-level `archive/`.

8. Patient FAQ brochure — logo recolor, infographic fixes, print white-line fix — 2026-06-25
   Context: `brochure/Brosura FAQ Pacienti - EDITABILA.html` is a self-contained editable A4 brochure (9 sections: Cover A editorial/cream, Cover B forest band, 6 inner FAQ pages, back cover) reusing the warm-earth tokens (forest #2c5f3c, gold #c4963a, cream #faf6f1, Lora/Nunito). Editor chrome = top bar with "Salvează ca PDF" (window.print) + "Descarcă o copie editabilă"; body text is contenteditable. All of `brochure/` is still UNTRACKED in git.
   8.1. Logo was a screenshot PNG: navy ink #000743 on an OPAQUE white bg with a gray #c0c0c0 border, embedded as base64 in 3 places (covers A, B, back) — clashed with the cream/forest theme and forced white "badge" cards on the forest covers.
         Fix: extracted the PNG, cropped to the ink bbox (drops border + white margin), made bg transparent (alpha = 255-min(r,g,b)), recolored ink → forest #224b30 (cover A on cream) and → white (covers B + back on forest). Re-embedded as base64; removed the two white card wrappers so the white logo sits directly on forest. Recolor script + assets in scratchpad (logo_forest.png / logo_white.png).
   8.2. First infographic (the doctor+patient SVG, viewBox 0 0 800 470, on Cover A) — the patient had only ONE eye (`circle cx=210 cy=162`). Added the missing eye (`circle cx=192 cy=163 r=2.4`). Doctor already had two (glasses). User wants the literal human-figure illustrations KEPT but prefers the symbolic ones.
   8.3. White-line bug (others' PDF exports show thin white lines author can't see): root cause = `@media print{html,body{background:#fff}}` while pages are cream — sub-pixel page-edge gaps in other renderers reveal the white body. Fix: print body bg → `var(--mcs-cream)`; also bled Cover B's 61% forest band (`top/left/right:-2px; height:calc(61% + 2px)`) to kill the one abutting forest↔cream seam. Verified clean via chromium print-to-pdf at 300dpi.
   8.4. Infographic style identified + extended: the loved "heart in hands" illo (Cover B, viewBox 0 0 380 300) = symbolic recipe — cream gradient bg + radial glow + gold sparkle/dot accents + cupped hands cradling a forest-green central symbol with a gold accent line. Authored 4 NEW ones on the same recipe (shield+check = oversight, document+check = consent, padlock = data confidentiality, medical cross = care). Preview sheet rendered; awaiting user pick on which to keep and where to place (Q3 + Q11 have empty placeholder slots).
         Note: `brochure/Brosura FAQ Pacienti.pdf` (824KB) + `.dc.html` are now STALE (pre-fix) — regenerate after brochure changes settle.
   8.5. Baked real contact info into back-cover contact strip (was "— de completat —"): Telefon **+373 69 607 851**, Email **linagudima@magnet-clinical-solutions.com**. The email is long (40 chars) and wrapped to 2 lines → restructured the strip to a 2-col grid (Adresă | Telefon) with Email on its own full-width row (`grid-column:1/-1`, white-space:nowrap) so it stays one line at full size. (Brochure contact differs from the website's info@magnetclinical.md.)
         Open decision still pending: deliver a single generated master PDF (verified clean in chromium) as the thing shared with recipients, because recipients re-printing the HTML in their own browser engines get full-bleed white-line artifacts that CSS can't control across engines.
   8.6. Generated the master PDF and hit two PDF-only rendering bugs (fixed):
         (a) `@media print` had `[contenteditable]{background:none!important}` which stripped the gold fill off the CTA button (`.btn-cta` is in the editable list) → removed that declaration.
         (b) box-shadows render as HARD FLAT RECTANGLES in PDF (the aspirin card + CTA button) → added `@media print{ *,*::before,*::after{box-shadow:none!important} }`. RULE: for any print/PDF deliverable here, kill box-shadows in print — they flatten to ugly boxes.
         Also removed `.btn-cta` from the contenteditable SEL list (was showing the hover/focus editing box in-browser) and made the button a real `mailto:linagudima@magnet-clinical-solutions.com` link.
         PDF pipeline: chromium `--headless --print-to-pdf` (28MB, grain texture inflates it) → ghostscript `-dPDFSETTINGS=/printer -dColorImageResolution=200` → ~4.2MB. Deliverable = `brochure/Brosura FAQ Pacienti.pdf` (regenerated, contact filled, verified clean by rasterizing pages 5 + 9).

9. Live site moved to the real brand domain `magnet-clinical-solutions.com` — 2026-06-25
   Context: user finally bought `magnet-clinical-solutions.com` (the .com they originally wanted; previously the site lived on the fallback `magnet-solutions.org`). The new domain's nameservers are the SAME Cloudflare account (bailey/ned.ns.cloudflare.com) → bought via/added to Cloudflare, so DNS was already on CF.
   9.1. User added DNS in the Cloudflare `.com` zone (I have no DNS scope — wrangler token is workers-only): apex `@` → 4 GitHub A records (185.199.108–111.153) + `www` CNAME → `eugengudima.github.io`, all DNS-only/grey. (www was missed on the first save; re-added.)
   9.2. Switched GitHub Pages custom domain `.org` → `.com` via `gh api PUT .../pages -f cname=magnet-clinical-solutions.com -f build_type=workflow`; updated `website/CNAME` → `.com`; committed (680847e) + pushed. Cert provisioned FAST this time (no stall): state went `authorized` → `approved`, valid Let's Encrypt cert SAN = apex + www. Enforced HTTPS with `-F https_enforced=true` (real boolean; string form 422s). www → 301 → apex confirmed.
   9.3. STILL TODO (user, Cloudflare dash): redirect old `magnet-solutions.org` → `.com`. Since Pages now serves `.com`, `.org` (still pointing at GitHub IPs) returns GitHub's generic 404 until a redirect is set. Plan: turn `.org` apex+www proxied/orange, add a Single Redirect rule → `https://magnet-clinical-solutions.com` preserving path (301).

10. Doctor brochure "Broșura medici" — serious, infographic-free — 2026-06-25
    Context: user wanted a SECOND brochure (companion to the patient FAQ one), aimed at *collaborating physicians* (medici colaboratori), built from the content in `brochure/Broșura medici.docx`. Explicit brief: same brand, but a bit MORE SERIOUS → drop the human-figure/symbolic SVG infographics entirely; keep it typographic.
    10.1. Source = `Broșura medici.docx` (10 FAQ items for collaborating physicians: role, how they help concretely, patient risks, "are they a researcher? — No", why their contribution matters even with a PI, MD/Moldova regulatory approval, where Phase I–II run, patient compensation, what happens post-study, physician remuneration). Extracted via python zipfile/ElementTree. Cleaned the docx's many typos (SOLTIONS→SOLUTIONS, COLABORAOTR→COLABORATOR, MEDICAUL→MEDICUL, etc.) and rewrote into polished professional Romanian addressed to colleagues ("dumneavoastră").
    10.2. Reused the patient brochure's ENTIRE warm-earth design system verbatim — same `<style>` block (tokens, Lora/Nunito, A4 `.page`, grain, editor chrome, print CSS incl. the box-shadow-kill + cream print-bg fixes) and the same edit/save/print `<script>` — by slicing them out of `Brosura FAQ Pacienti - EDITABILA.html` in a build script. Also reused the two embedded base64 logos (uris[0]=forest ink for cream pages, uris[1]=white for forest pages). Build script: scratchpad `build_medici.py` (regenerate from there).
    10.3. NO illustrations (the differentiator from the patient brochure). 8 A4 pages: cream editorial Cover (logo + title + lead + a typographic "În acest ghid" 6-item index) → P1 lead+Q1 → P2 Q2 (full) → P3 Q3+Q4 (Q4 = big italic "Nu.") → P4 FOREST page Q5 with a typographic "9 din 10" screening-failure stat callout (the only "data viz", purely type) → P5 Q6 (2 numbered regulatory cards: AMDM + Comitetul de Etică) + Q7 → P6 Q8+Q9+Q10 → forest Back cover. Contact = Lina Gudima, +373 69 607 851, linagudima@magnet-clinical-solutions.com (same updated contact as the patient brochure, NOT the docx's stale lina.gudima@magnet-solutions.org).
    10.4. Deliverable = `brochure/Brosura FAQ Medici - EDITABILA.html` (self-contained, editable). Verified by chromium `--print-to-pdf` → 8 A4 pages, no overflow, footers seated, forest stat page + back cover render clean (rasterized montage + hi-res pages 6/8). Compressed master PDF via the same pipeline as the patient one (chromium → ghostscript /printer @200dpi).
    10.7. Corrected the contact email on BOTH brochures: `linagudima@…` → `lina.gudima@magnet-clinical-solutions.com` (with the dot). This matches the real working admin UPN (see m365-tenant-account memory). Changed both spots per brochure (the `mailto:` href + the displayed contact-strip value) in `brochure-patients.html` + `brochure-medics.html`, plus the scratchpad `build_medici.py`. Both PDFs regenerated (patient 9pp/4.2 MB, medics 6pp/2.9 MB); back-cover email verified rendering on one line.
    10.8. Justified the body text on BOTH brochures (user: "fill the entire line, variations line by line as low as possible" = `text-align:justify`). Applied `text-align:justify; hyphens:auto;` ONLY to the FAQ answer paragraphs — left headings, serif leads, italic pull-quotes, accent-card text, and the centered cover/back-cover text ragged/centered as designed. Medics: added to the `P`/`PN` style strings in `build_medici.py` + rebuilt. Patient: `perl` insert after `color:#463931;` (cream answers) and `color:rgba(255,255,255,.9);` (forest-page answers) — 32 spots; the bullet `<li>` flex rows are unaffected (justify is a no-op on the flex container). Verified render: flush right edges, no ugly word-gaps, back covers stay centered. Both PDFs regenerated.
    10.6. Re-paginated the doctor brochure 8pp → 6pp (user: "removed the infographics, now lots of empty space — pull them together"). Removing the SVGs left several cream pages ~40–50% full. Fix: cover + 4 DENSE inner pages + back, compact inner type scale (body 14.5px/1.6, h3 17px, num 22px, 17/20mm padding). Grouping (numeric order preserved): P1 lead+Q1+Q2 · P2 Q3+Q4+Q5 (Q5's "9 din 10" screening stat kept as an inline forest CARD, not a whole page) · P3 Q6(2 reg cards)+Q7 + a forest "Standarde și acreditare" pull-quote that carries the AMDM/EMA/FDA inspection line (moved out of Q7 to fill the page, no redundancy) · P4 Q8+Q9+Q10. Two forest accent cards now provide the visual variety the illustrations used to. Verified: 6 A4 pages, no clipping, footers seated. Master PDF regenerated (~2.9 MB). Build: scratchpad `build_medici.py`.
    10.5. Renamed all four brochure deliverables to plain ASCII slugs (user request): patient `Brosura FAQ Pacienti - EDITABILA.html`/`.pdf` → `brochure-patients.html`/`brochure-patients.pdf`; doctor `Brosura FAQ Medici - EDITABILA.html`/`.pdf` → `brochure-medics.html`/`brochure-medics.pdf`. Also updated each file's internal "Descarcă o copie editabilă" download name → `brochure-patients-editat.html` / `brochure-medics-editat.html`. (Stale `Brosura FAQ Pacienti.dc.html` left as-is.)

11. Built a warm-earth email signature (user: "give me a mail signature I can put in the settings of an account, nice and clean"). Deliverable `mail_signiture/signature.html` — table-based, inline-styled, web-safe fonts (Georgia ≈ Lora for the name, Arial for body) so it survives Outlook/OWA/Gmail/Apple Mail. Uses the live hosted logo `https://magnet-clinical-solutions.com/assets/logo.png` (232×27, verified 200) so it always loads for recipients. Layout: logo → [Full Name] (Georgia bold, forest #224b30) → [Job Title] (uppercase muted #7a6558) → forest→gold divider bar (#224b30/#c4963a) → Email/Web/Office rows with gold uppercase labels (info@magnetclinical.md · magnet-clinical-solutions.com · Republic of Moldova, links forest #2c5f3c) → italic gold tagline "Rooted in Moldova." Name/title left as bracketed placeholders to fill per account. Preview rendered via chromium headless → `mail_signiture/preview.png`.
    11.1. Swapped the signature logo navy → warm-earth GOLD (user: "use the warm earth logo png not the blue one, in fact delete that one"). Source = `logo-variants/png/magnet-full-gold-1200w.png` (1200×92, no baked-in border box, unlike the navy crop). Staged as `website/assets/logo-gold.png` so it deploys/hosts at `https://magnet-clinical-solutions.com/assets/logo-gold.png` (signature now points there; displayed 260×20). DELETED the orphan navy `website/assets/logo.png` — grep confirmed NO page references it (pages use `lm-mono-white.png` monogram in navbar/footer), so removal is safe and doesn't touch the live site. NOTE: gold logo is live in email only AFTER the next push/deploy to GitHub Pages; until then real-client emails would 404 on the image. `logo-variants/` navy pack left intact.
    11.2. Signature edits (user): email → `lina.gudima@magnet-clinical-solutions.com` (mailto + display, replaced info@magnetclinical.md), web display → `www.magnet-clinical-solutions.com` (link https://www.…), and added a FULL-HEIGHT warm-earth accent BLOCK down the left edge (6px forest #224b30 table cell + 20px gap, wrapping the whole content cell so it stretches to the signature's height). Replaced the old short forest→gold divider with a 230px hairline (#e3d8c8) between title and contacts. Filled name placeholder → "Lina Gudima" (inferred from the email; title still `[Job Title]` placeholder).
    11.3. Removed the "Rooted in Moldova." tagline and added a Phone row → `+373 69 607 851` (display) / `tel:+37369607851` (link), placed between Email and Web. Number reused from Lina's brochure contact block. Contact order now Email · Phone · Web · Office.
    11.4. Filled the job title → "Founder & CEO" (`Founder &amp; CEO`). Signature now has no remaining placeholders.
    11.5. PIVOT (user: logo broke in Outlook + "I need the same logo that's on the website page, the main one").

12. Synced the website's public contact info to the email signature (user: "update the contact information on the website with what we have prepared in the mail_signiture"). Replaced the retired `info@magnetclinical.md` with `lina.gudima@magnet-clinical-solutions.com` site-wide (user picked Lina's signature email over a generic info@), and ADDED the phone `+373 69 607 851` (`tel:+37369607851`) which the site had been missing entirely. Footers on all 5 pages now list Email · Phone · Location; `contact.html`'s main contact block gained a 📞 Phone detail row. Verified: zero residual `magnetclinical.md` refs. Updated SPEC.md §4 "Contact contract" + MEMORY KEY NUMBERS. NOT yet committed/pushed (awaiting Cloudflare Web Analytics beacon token to bundle both into one Pages deploy).
    12.1. Cloudflare Web Analytics: hosting is GitHub Pages with grey-cloud/DNS-only Cloudflare DNS, so CF's edge/proxy injection + proxy analytics see no traffic. SOLUTION = manual JS beacon snippet added to every page before `</body>` (after main.js): `<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "fc06107ae3114177bbcc1b9be8e26094"}'></script>`. Token `fc06107ae3114177bbcc1b9be8e26094` (site `magnet-clinical-solutions.com`, Manual setup). Privacy-first/cookieless — no consent banner needed (good for an EU medical clinic). On all 5 pages. Dashboard: CF dash → Analytics → Web Analytics. Data appears within a few min of the first real visit post-deploy. The website "main logo" is NOT an image file — it's a CSS lockup: forest tile (`background:var(--forest)` #2c5f3c, ~36px, border-radius 8px) holding the white `lm-mono-white.png` monogram, + serif wordmark "Magnet Clinical Solutions" (Lora→Georgia, forest #2c5f3c). Rebuilt the signature logo as an email-safe nested table replicating that: 38px green tile (bg #2c5f3c, radius 8px) with the monogram img (21px) + 10px gap + Georgia 18px/700 forest wordmark, wrapped in a link to the site. KEY WIN: `lm-mono-white.png` is ALREADY hosted live (200) → loads in Outlook with NO deploy/push. Reverted the earlier gold-logo detour: undid the local commit (`git reset HEAD~1`), restored `website/assets/logo.png`, deleted `website/assets/logo-gold.png` + `mail_signiture/logo-gold.png`, reverted the SPEC.md asset line. Net website change from this whole signature task = ZERO (site untouched). The gold full-lockup approach is abandoned. NOTE for future: an email-signature image must be a public URL — prefer reusing an already-hosted site asset over adding a new one (which would need a deploy).

13. Code-reviewed commit 7d20f99 (the analytics+contact sync) and applied a follow-up i18n fix — 2026-06-28
    Context: user asked for a bug/runtime review of the last commit (`/code-review HEAD`). One real defect found: the new `<strong>Phone</strong>` contact-detail row + footer phone label had NO entry in the RO dictionary, so switching to Romanian left "Phone" untranslated between the (translated) "Email" and "Locație" labels. Everything else in the commit verified clean (no residual `info@magnetclinical.md`, `tel:` digits match the display, beacon placement/`defer` correct, same token on all 5 pages).
    13.1. Fix applied: added `"Phone": "Telefon",` to `website/assets/i18n.js` (contact-page section, right after the `"Email"` entry). One line. No SPEC/contract drift (SPEC §5 documents the i18n algorithm, not the key list).
    13.2. UNCOMMITTED STATE for next session (user: "list of uncommitted actions"):
          • `website/assets/i18n.js` — MODIFIED, not committed/pushed. This is the Phone→Telefon fix above; it's a follow-up to the already-pushed 7d20f99 and should be committed + pushed on its own (small Pages deploy). This is the ONLY pending tracked change.
          • HEAD `7d20f99` is ALREADY on `origin/master` (analytics beacon + contact sync are live after the Pages build) — nothing to re-push there.
          • Untracked-by-DESIGN (do NOT `git add` without asking — these are deliverables deliberately kept out of git): all of `brochure/` (brochure-patients/medics .html+.pdf, `Broșura medici.docx`, the 4 near-dup `Clinical Magnet brochure design*.zip`, `_ds/`, `assets/`, `support.js`, stale `Brosura FAQ Pacienti.dc.html`) and all of `mail_signiture/` (signature.html, preview.png, logo-gold.png).
          • Still-open external TODO (carried from 9.3, user-side, Cloudflare dash): redirect old `magnet-solutions.org` → `.com` (301, preserve path).

14. Site review → real contact form + indexable Romanian pages — 2026-07-07
    Context: user asked for a full website review, then "please would you do 1,4. i need it to be romanian-indexable" (1 = the contact form silently discarded submissions; 4 = RO existed only as client-side JS translation, invisible to search engines).
    14.1. Contact form wired to FormSubmit.co (no signup/API key needed): `main.js` now POSTs FormData to `https://formsubmit.co/ajax/lina.gudima@magnet-clinical-solutions.com`; success shows "Message Sent ✓"/"Mesaj trimis ✓" (by `document.documentElement.lang`), failure shows an inline mailto fallback (built with createElement — innerHTML is hook-blocked). Hidden fields added to contact.html: `_subject`, `_template=table`, `_captcha=false`, `_honey` honeypot. Sent the activation-trigger test POST (needs `Origin:` header or FormSubmit rejects as file://) — **ACTIVATION EMAIL IS SITTING IN lina.gudima@'s INBOX; form delivers nothing until that link is clicked** (fails safe: mailto fallback shows meanwhile).
    14.2. Romanian made crawlable by PRE-RENDERING static pages: new `tools/build-ro.py` (Python stdlib html.parser) transforms the 5 EN pages into committed `website/ro/*.html` — text/title/placeholder/meta-description translation via the dictionary, `lang="ro"`, canonical → /ro/ URL, `assets/` → `../assets/`, lang-switcher flipped. The old runtime translator was RETIRED: `git mv website/assets/i18n.js tools/ro-dict.js` + stripped to dictionary-only (added 5 meta-description keys); pages no longer load i18n.js; `mcs_lang` localStorage is dead. Lang switch flags are now real `<a>` links (EN↔RO URL pairs), so no-JS users and crawlers can navigate languages.
    14.3. SEO plumbing: canonical + hreflang en/ro/x-default `<link>`s on all 10 pages (absolute `https://magnet-clinical-solutions.com` URLs), new `website/sitemap.xml` (10 URLs with xhtml:link alternates) + `website/robots.txt`. Verified: all links/anchors/sitemap URLs resolve on disk (local http.server was sandbox-blocked); RO pages carry translated h1/blockquote/placeholders; beacon + pre-paint theme script intact in ro/. Build prints 44 "untranslated" strings — all intentional (emoji, numbers, names, brand, ICH–GCP).
    14.4. Docs reconciled: SPEC.md §§1–8 rewritten where contracts changed (build step, ro/ tree, localStorage, form contract, build-time i18n algorithm, gotchas: never hand-edit ro/, re-run build after any copy change). NOT committed — awaiting user go-ahead (previous pending i18n.js one-liner from 13.1 is superseded/absorbed by the ro-dict.js move).
    Review findings NOT acted on (user chose 1+4 only): fabricated-looking testimonials (legal/credibility risk), ICH GCP E6(R2) outdated → E6(R3), no favicon/OG tags, gallery is all placeholders, footer "Republic of Moldova" dead `#` link.

15. Copy-rewrite inventory created — 2026-07-07
    Context: user wants to replace the site's writing with copy his mom will actually write ("table of current and future content; once completed you will have that as input and make changes").
    15.1. Created `CONTENT-REWRITE.md` at repo root (outside website/, never deploys): every visible string on all 5 pages + global nav/footer + browser titles + meta descriptions, numbered per page/section (0.x global … 5.x contact), each with the current text and a blank `New:` slot. Conventions defined in its header: blank = keep; `New: REMOVE` = delete element; EN or RO accepted (I translate the other); `New EN:`/`New RO:` for controlling both. 📷 marks image-placeholder labels; testimonials flagged ⚠️ as needing real quotes.
    15.2. PENDING NEXT SESSION: when the user returns the filled file, apply it → edit EN pages → update `tools/ro-dict.js` keys (old EN key out, new pair in) → `python3 tools/build-ro.py` → verify → update SPEC/MEMORY. Everything from entries 14–15 is still UNCOMMITTED (push = live deploy; awaiting user go-ahead).

16. Real Moldovan flag icon — 2026-07-07
    Context: user spotted that `flag-md.png` was a tricolor with a crude blob, not the actual coat of arms. Replaced with the official flag: downloaded the public-domain `Flag_of_Moldova.svg` from Wikimedia Commons (1800×900, stripes + arms paths), rebuilt it at 3:2 to match the UK icon's format — equal 450-wide stripes, arms group kept 1:1 and recentered via `translate(-225,0)` — rasterized with rsvg-convert to the same 240×160 → `website/assets/flag-md.png` (9 KB). Verified legible at the 30×21 navbar size. Same path referenced by EN + RO pages, so no page edits/rebuild needed. Uncommitted like the rest.

17. All visible email/phone mentions commented out site-wide — 2026-07-23
    Context: user asked to "comment out any mention of the email or phone number within the website" (reason not stated).
    17.1. Wrapped in `<!-- -->`: the footer Email/Phone `<li>`s on all 10 pages (5 EN + 5 RO) and the 📧/📞 `.contact-detail` blocks in `contact.html` + `ro/contact.html` (whole divs, so no orphan icons). Markup preserved in place — restore by deleting the comment wrappers.
    17.2. `assets/main.js`: commented out the form-failure `.form-status` paragraph that rendered the email on-page; on failure the button now silently resets. `FORM_EMAIL` KEPT — it is the FormSubmit.co delivery endpoint; commenting it would kill the contact form, now the site's only contact channel. Email remains visible in JS source.
    17.3. Re-ran `python3 tools/build-ro.py` — comments survive the RO build. Reconciled SPEC.md §4 (form contract + contact contract). Then committed & pushed the whole pending batch (entries 14–17) per user request — push to master = live Pages deploy.

---

## FILE STRUCTURE

```
mom's_company/
├── MEMORY.md                — action log and file structure (this file)
├── NOTES.md                — knowledge tree: goals, domain, content, decisions
├── SPEC.md                 — reproduction contract for the live website
├── wrangler.jsonc          — Cloudflare Workers config (assets.directory = website)
├── website/                — THE LIVE SITE (warm-earth design, GitHub Pages deploys this dir)
│   ├── index.html          — Home page (EN pages are the copy source of truth)
│   ├── about.html          — About page
│   ├── services.html       — Services page (4 directions, anchors #audit/#training/#cro/#recruitment)
│   ├── gallery.html        — Gallery page
│   ├── contact.html        — Contact page (FormSubmit.co form + details + FAQ)
│   ├── ro/                 — GENERATED Romanian mirror of the 5 pages (tools/build-ro.py; never hand-edit)
│   ├── robots.txt          — allow-all + sitemap pointer
│   ├── sitemap.xml         — 10 URLs (EN+RO) with hreflang alternates
│   ├── assets/
│   │   ├── theme.css       — all styles: tokens + light/dark themes + components, responsive
│   │   ├── main.js         — navbar scroll, dark-mode toggle, mobile menu, reveal/counter observers, form AJAX submit
│   │   ├── logo.png        — full logo lockup (navy)
│   │   ├── lm-mono-white.png — LM monogram mark used in navbar/footer + email signature
│   │   ├── flag-uk.png     — EN language-switch flag (now a link, not a JS button)
│   │   └── flag-md.png     — RO (Moldova) language-switch flag
│       (only the files above ship — see archive/ at repo root, kept OUT of the deploy)
├── tools/                  — build tooling (outside website/ so it never deploys)
│   ├── ro-dict.js          — EN→RO dictionary (moved from website/assets/i18n.js, dict-only now)
│   └── build-ro.py         — pre-renders website/ro/*.html; run after any EN copy change
├── archive/                — superseded design work (in repo, NOT deployed)
│   ├── old-site/           — v1.0 navy/gold site (pages + style.css/themes.css/theme-picker.js + images/)
│   ├── suggestions/        — design explorations s2–s10
│   └── suggestion-1/       — alternate full-site exploration
├── source-materials/       — raw briefs & source inputs (gathered from repo root)
│   ├── WhatsApp Ptt 2026-05-09 at 11.19.52 AM.{ogg,txt} — mic-test voice note + transcript
│   ├── WhatsApp Ptt 2026-05-09 at 1.36.44 PM.{ogg,txt}  — company briefing voice note + EN translation
│   ├── 2026-05-09-140210_hyprshot.png  — logo source screenshot
│   ├── persona-infographic.html        — target-persona infographic
│   └── warm-earth-site-export.zip      — original design export (assets, now unpacked into website/)
├── brochure/               — patient + doctor FAQ brochures (UNTRACKED in git)
│   ├── brochure-patients.html                 — PATIENT brochure: self-contained editable A4 (illustrated; logo recolored, eye + white-line fixes)
│   ├── brochure-patients.pdf                  — exported patient master PDF
│   ├── brochure-medics.html                   — DOCTOR brochure: self-contained editable A4, 6pp (dense), NO infographics (serious); same design system, built from Broșura medici.docx
│   ├── brochure-medics.pdf                    — exported doctor master PDF (chromium → ghostscript /printer @200dpi)
│   ├── Broșura medici.docx                    — source content for the doctor brochure (10 FAQ items for collaborating physicians)
│   ├── Brosura FAQ Pacienti.dc.html           — earlier patient print-layout export (STALE, pre-fix)
│   ├── IMG-20260624-WA0002..0006.jpg          — client's original brochure design (source being reproduced)
│   ├── Clinical Magnet brochure design*.zip   — design exports (4 near-dup zips; candidate cleanup)
│   ├── assets/magnet-logo.png                 — logo asset; _ds/ — Claude Design system export (tokens+bundle); support.js
├── mail_signiture/         — email signature deliverable
│   ├── signature.html      — warm-earth HTML email signature (paste into mail client settings; hosted gold logo + placeholders)
│   ├── logo-gold.png       — local copy of the gold logo (for offline preview rendering)
│   └── preview.png         — rendered preview of the signature
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
- Languages: 2 (EN at /, RO at /ro/) — static pages generated by tools/build-ro.py from tools/ro-dict.js
- Themes: 2 (light / dark) via data-theme + mcs_theme
- Live design palette (warm-earth): cream #faf6f1, forest #2c5f3c, gold #c4963a, text #2a1f18
- Fonts: Lora (headings), Nunito Sans (body)
- Email of record: lina.gudima@magnet-clinical-solutions.com (phone: +373 69 607 851)
