# design-sync notes — magnet-clinical-ui

Repo-specific gotchas for future syncs of this design system. Append as you learn more.

## Setup / build
- The component library lives in `library/` (its own npm package `magnet-clinical-ui`, globalName `MagnetUI`). The repo root is the design-sync config home (`.design-sync/`).
- Build: `npm --prefix library run build` (tsup → `library/dist/index.js` ESM + `index.d.ts`). `cfg.buildCmd` records this. The converter `--entry library/dist/index.js --node-modules library/node_modules`.
- `npm` in this environment gates package install scripts (`allowScripts`). After any `npm i` that pulls esbuild, run `npm approve-scripts esbuild` or esbuild's binary won't install and the build/converter fails.
- Converter deps in `.ds-sync/`: `npm i esbuild ts-morph @types/react` (+ `npm approve-scripts esbuild`).

## Render check / chromium
- No playwright browser is downloaded. We reuse **system chromium** at `/usr/bin/chromium` via `DS_CHROMIUM_PATH=/usr/bin/chromium` on every `package-validate.mjs` / `package-capture.mjs` / `resync.mjs` invocation. Install only the `playwright` npm pkg with `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1`. If renders fail with "Executable doesn't exist", confirm `/usr/bin/chromium` still exists and `DS_CHROMIUM_PATH` is exported.

## Styling
- Tokens are NOT a separate npm package, so `tokensPkg`/`tokensGlob` (which only read from a node_modules package) do NOT apply. All tokens + 10 alternate themes + base + component CSS live in ONE source file `library/styles/styles.css`, pointed at by `cfg.cssEntry`. This is what lands in `_ds_bundle.css` and satisfies the token closure. Do not re-split it into tokens.css/components.css — the converter won't @import a sibling and `[TOKENS_MISSING]` returns.

## Known render warns (triaged, treat as clean)
- `[FONT_REMOTE] "Inter", "Playfair Display"` — fonts load from a Google Fonts `@import url(...)` in styles.css, exactly as the live website does. Intentional; no `@font-face` ships. Not a regression.

## Component facts
- 21 components, all in group `general` (no per-component docs, so the prompt.md is synthesized from `.d.ts` + the authored preview). `WhyItem.tsx` exports TWO components (`WhyItem` + `FeatureList`), so the build reports "20 src-matched" of 21 — expected, both still get a `.d.ts`.
- Full-width section components (`Hero`, `PageHero`, `Footer`, `CtaSection`, `ServiceDetail`, `Navbar`) have `cfg.overrides.<Name>.cardMode = "column"` so they present full card width instead of overflowing a grid cell.
- Dark-background components (`Stat`, `Badge`, `AboutPill`) render invisible (white text) on a white card — their authored previews wrap them in a navy `<div>`. Don't remove those wrappers or the cards photograph blank (`[RENDER_THIN]`/blank).

## Re-sync risks (what can silently go stale)
- **Preview realistic content is inlined** in `.design-sync/previews/*.tsx` (clinical-research copy, Moldova). If a component's prop API changes, the preview may compile against stale props — re-check against the fresh `.d.ts`.
- **conventions.md enumerates tokens, classes, and the dark/light component lists.** If components are added/removed/renamed or a token is dropped, re-run the conventions validation (grep names against the built `_ds_bundle.css` and `components/general/`) — the base skill does this automatically on re-sync.
- **System chromium version drift**: pinned to whatever `/usr/bin/chromium` is (was 149 at first sync). A major bump could change rendering subtly; spot-check a few sheets after an OS upgrade.
- **Google Fonts dependency**: previews/designs need network to fetch Inter/Playfair. Offline, they fall back to system serif/sans — the look degrades but nothing errors.
