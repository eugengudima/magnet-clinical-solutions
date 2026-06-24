# SPEC.md — magnet-clinical-ui
# Location: /home/eugen/projects/mom's_company/library/SPEC.md
# Rule: describes the CURRENT state — update in place, never append-only.
# Last updated: 2026-06-21

The reproduction contract for the Magnet Clinical Solutions React component
library and its claude.ai/design sync. A fresh session given only this file
should be able to rebuild a behaviourally and visually equivalent library.

## Stack & run

- **Language**: TypeScript + React 18 (JSX `react-jsx`). ESM only (`"type": "module"`).
- **Build**: `tsup` (esbuild + dts). Package name `magnet-clinical-ui`, globalName for the design bundle `MagnetUI`.
- **Commands** (run from `library/`):
  - `npm install` — then `npm approve-scripts esbuild` (this env gates install scripts; without it esbuild's binary is missing).
  - `npm run build` → `tsup src/index.ts --format esm --dts --external react --external react-dom --clean` → `dist/index.js` (ESM, `import { jsx } from "react/jsx-runtime"` externalized) + `dist/index.d.ts`.
- **Entry fields**: `module`/`main` → `./dist/index.js`, `types` → `./dist/index.d.ts`, `exports["./styles.css"]` → `./styles/styles.css`.
- **Peer deps**: react, react-dom ≥18. Dev deps: @types/react(-dom), react, react-dom, tsup, typescript.

## Architecture

- `src/index.ts` — barrel; named export of every component + its `*Props` (and `ButtonVariant`, `NavLink`, `FooterColumn`/`FooterLink`, `FormFieldOption`).
- `src/components/<Name>.tsx` — one file per component. Each is a **thin, typed function component** that renders the brand's exact HTML structure with the exact class names, styled entirely by the external stylesheet. No internal CSS-in-JS except small inline `style` for dark-wrapper/fullWidth affordances. Each carries a leading JSDoc (used by the design sync to synthesize docs).
- `styles/styles.css` — the ONE stylesheet. Order: Google-Fonts `@import` (Inter + Playfair Display) → `:root` tokens → `[data-theme="2"..="10"]` overrides → reset/base/typography → every component's rules → responsive `@media` (900px, 640px). Import once at app root.

### The 21 components (all group `general`)
Button, SectionLabel, Badge, SectionHeader, Navbar, Stat, Hero, ServiceCard,
WhyItem, FeatureList, AboutPill, TestimonialCard, CtaSection, Footer, PageHero,
FormField, ContactForm, GalleryItem, CredentialItem, TeamCard, ServiceDetail.
(`WhyItem.tsx` exports both `WhyItem` and `FeatureList`.)

Key prop contracts:
- `Button`: `variant?: "primary"|"outline"|"navy"`, `href?` (anchor vs button), `fullWidth?`, `type?`, `onClick?`. Class `btn btn-<variant>`.
- `Navbar`: `logoSrc?`, `brand?`, `links: {label,href,active?}[]`, `ctaLabel?`/`ctaHref?`, `scrolled?`. Brand text fallback is white on the dark bar, navy when `scrolled`.
- `Hero`: `badge?`/`badgeIcon?`, `title`, `highlight?` (gold span), `subtitle?`, `actions?`, `stats?: {number,label}[]`.
- `ServiceDetail`: `label?`, `icon`, `title`, `description`, `features?: string[]`, `children?`, `alt?` (off-white band), `reversed?` (visual on right). Classes `service-detail [alt] [reversed]`.
- `FormField`: `as?: "input"|"textarea"|"select"`, `type?`, `options?`, `required?`.
- Dark-background components (white text, need a navy parent): `Stat`, `Badge`, `AboutPill`. Self-dark sections: `Hero`, `PageHero`, `CtaSection`, `Footer`, `ServiceDetail` visual, `Navbar` (until scrolled).

## Design tokens & magic values

15 CSS custom properties (default theme = navy/gold):
`--navy #1B2A6B`, `--navy-dark #101d52`, `--navy-light #2d3f8a`, `--gold #C9A84C`,
`--gold-light #e0c068`, `--white #fff`, `--off-white #f8f9fc`, `--light-gray #eef0f7`,
`--mid-gray #8a92b2`, `--text #1a1f3c`, `--text-light #4a5080`,
`--shadow 0 4px 32px rgba(27,42,107,.10)`, `--shadow-hover 0 8px 48px rgba(27,42,107,.18)`,
`--radius 12px`, `--transition .35s cubic-bezier(.4,0,.2,1)`.
10 alternate themes (`[data-theme="2"]`..`"10"`) override `--navy*`/`--gold*`/`--shadow*` only — Forest, Steel, Burgundy, Charcoal, Midnight, Olive, Plum, Dark-Teal, Carbon. Fonts: Playfair Display (h1–h4, stat numbers), Inter (body, buttons).

## Claude Design integration (design-sync, package shape)

- Config home `../.design-sync/` (repo root). `config.json`: `pkg`, `globalName: MagnetUI`, `projectId 16b02ea8-5ae3-46c4-9704-d6059f3abf86`, `shape: package`, `buildCmd: "npm --prefix library run build"`, `cssEntry: styles/styles.css`, `readmeHeader: .design-sync/conventions.md`, `overrides` (column cardMode for Hero/PageHero/Footer/CtaSection/ServiceDetail/Navbar). No `tokensPkg`/`tokensGlob` — tokens are in `cssEntry`, not a separate package.
- Converter (staged in `.ds-sync/`): `package-build.mjs --entry library/dist/index.js --node-modules library/node_modules --out ./ds-bundle`; `package-validate.mjs`/`package-capture.mjs`/`resync.mjs`. Render check uses system chromium via `DS_CHROMIUM_PATH=/usr/bin/chromium` (playwright npm installed with `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1`).
- Authored preview cards live in `../.design-sync/previews/<Name>.tsx` (one per component). Re-sync: `resync.mjs ... --remote .design-sync/.cache/remote-sync.json` after fetching the project's `_ds_sync.json`. See `../.design-sync/NOTES.md` for gotchas.
