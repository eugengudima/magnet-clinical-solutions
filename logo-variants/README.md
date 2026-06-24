# Magnet Clinical Solutions — Logo Variants

All assets are **vector-traced from** `website/assets/images/logo.png` and exported to
every common format. Source of truth = the 12 SVGs in `svg/`; every raster is derived
from them. Rebuild everything with `_src/build.sh` (needs `rsvg-convert`, ImageMagick 7,
`potrace`, `avifenc`, `heif-enc`, Python+Pillow).

## The mark

- **Icon** — the "LM" monogram inside a square frame. **The box doubles as the "M" of MAGNET.**
- **Wordmark** — the text as drawn in the source: `AGNET CLINICAL SOLUTIONS`.
  ⚠️ The leading "M" is intentionally absent — in the brand lockup the icon box *is* the M.
  Use the wordmark only beside the icon; for standalone text use the **full** lockup.
- **Full** — icon + wordmark horizontal lockup = the original logo, reads `MAGNET CLINICAL SOLUTIONS`.

## Brand colors

| Token        | Hex        | Use                                              |
|--------------|------------|--------------------------------------------------|
| **Navy**     | `#000743`  | Primary ink — exact color of the original logo   |
| **White**    | `#FFFFFF`  | Reversed / knockout for dark backgrounds         |
| **Black**    | `#000000`  | Single-color / fax / engraving / stamps          |
| **Gold**     | `#C9A84C`  | Accent variant (matches the UI library `--gold`) |

Related UI theme tokens (from `library/styles/styles.css`): navy `#1B2A6B`, gold `#C9A84C`.

## Naming

```
magnet-<shape>-<color>[-<size>].<ext>
        │        │        │
        │        │        └ icon: 16…1024 (square px) · full/wordmark: ###w (width px)
        │        └ navy | white | black | gold
        └ full | icon | wordmark
```

## What's in each folder

| Folder       | Format | Contents                                                            |
|--------------|--------|---------------------------------------------------------------------|
| `svg/`       | SVG    | 12 masters: 3 shapes × 4 colors. Infinitely scalable, transparent.  |
| `png/`       | PNG    | Transparent. Icon @16/32/48/64/128/256/512/1024; full & wordmark @ 400/800/1200–1600/2400 wide. |
| `webp/`      | WebP   | Transparent, one large size per shape×color.                        |
| `avif/`      | AVIF   | Transparent, modern web.                                            |
| `heic/`      | HEIC   | Apple high-efficiency.                                              |
| `jpg/`       | JPEG   | Flattened (white bg; white-ink variant on dark bg).                 |
| `gif/`       | GIF    | Transparent.                                                        |
| `tiff/`      | TIFF   | Print / editorial.                                                  |
| `bmp/`       | BMP    | Legacy / Windows.                                                   |
| `pdf/`       | PDF    | Vector (navy), for print & Office docs.                             |
| `eps/`       | EPS    | Vector (navy), for Illustrator / pro print.                        |
| `ico/`       | ICO    | Multi-res Windows icon (navy, white) — 16/32/48/64/256.             |
| `icns/`      | ICNS   | macOS app icon (navy, white) — true ICNS container.                 |
| `favicon/`   | mixed  | Drop-in web bundle (see below).                                     |
| `_src/`      | —      | Bitmaps + `build.sh` (regeneration only; not a deliverable).        |

## Favicon bundle (`favicon/`)

`favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`,
`apple-touch-icon.png` (180, on white), `android-chrome-192x192.png`,
`android-chrome-512x512.png`, `safari-pinned-tab.svg`.

```html
<link rel="icon" href="/favicon/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png">
```

## Picking a variant

- **Light background** → `*-navy.*`
- **Dark background** → `*-white.*`
- **One-color print / stamp** → `*-black.*`
- **Accent / premium** → `*-gold.*`
- **Web** → SVG first, WebP/AVIF fallback; **print** → PDF/EPS/TIFF; **app icon** → ICO/ICNS.

## Regenerate

```bash
bash logo-variants/_src/build.sh      # rebuilds every raster + app icon from svg/
```
The 12 SVGs are produced from the source PNG via `potrace`; see `_src/` and the top of
`build.sh` for the exact crops, threshold, and color flags.
