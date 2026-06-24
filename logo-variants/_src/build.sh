#!/usr/bin/env bash
# Reproducible build of all Magnet Clinical Solutions logo assets.
# Source of truth: the 12 SVGs in logo-variants/svg/ (traced from website/assets/images/logo.png).
# Requires: rsvg-convert (librsvg), ImageMagick 7 (magick).
set -euo pipefail
cd "$(dirname "$0")/.."        # -> logo-variants/
SVG=svg

colors=(navy white black gold)
# JPEG/BMP flatten background per color (white ink needs a dark bg to be visible)
declare -A BG=( [navy]="white" [white]="#000743" [black]="white" [gold]="#101010" )

render() { # render <svg> <png> <geom-args...>
  rsvg-convert "${@:3}" -o "$2" "$1"
}

square() { # square <png-in> <png-out> <size>
  magick "$1" -background none -gravity center -extent "$3x$3" "$2"
}

transcode() { # transcode <png> <stem> <bgcolor>   stem e.g. magnet-full-navy
  local png="$1" stem="$2" bg="$3"
  magick "$png" "webp/${stem}.webp"
  magick "$png" "gif/${stem}.gif"
  magick "$png" -define tiff:rows-per-strip=64 "tiff/${stem}.tiff"
  magick "$png" -background "$bg" -flatten "bmp/${stem}.bmp"
  magick "$png" -background "$bg" -flatten -quality 95 "jpg/${stem}.jpg"
  avifenc -q 82 "$png" "avif/${stem}.avif"  >/dev/null 2>&1
  heif-enc -q 82 "$png" -o "heic/${stem}.heic" >/dev/null 2>&1
}

for c in "${colors[@]}"; do
  bg="${BG[$c]}"

  ## ICON — square ladder
  for s in 16 32 48 64 128 256 512 1024; do
    tmp="/tmp/ic_${c}_${s}.png"
    render "$SVG/magnet-icon-$c.svg" "$tmp" -h "$s"
    square "$tmp" "png/magnet-icon-${c}-${s}.png" "$s"
  done

  ## FULL lockup — width ladder
  for w in 400 800 1200 2400; do
    render "$SVG/magnet-full-$c.svg" "png/magnet-full-${c}-${w}w.png" -w "$w"
  done
  transcode "png/magnet-full-${c}-2400w.png" "magnet-full-${c}" "$bg"

  ## WORDMARK — width ladder
  for w in 400 800 1600 2400; do
    render "$SVG/magnet-wordmark-$c.svg" "png/magnet-wordmark-${c}-${w}w.png" -w "$w"
  done
  transcode "png/magnet-wordmark-${c}-2400w.png" "magnet-wordmark-${c}" "$bg"
done

## ICON transcodes (re-run cleanly, the inline one above is best-effort)
for c in "${colors[@]}"; do
  bg="${BG[$c]}"
  png="png/magnet-icon-${c}-1024.png"
  transcode "$png" "magnet-icon-${c}" "$bg"
done

## APP ICONS — multi-resolution .ico and .icns from the icon
for c in navy white; do
  magick png/magnet-icon-${c}-16.png png/magnet-icon-${c}-32.png \
         png/magnet-icon-${c}-48.png png/magnet-icon-${c}-64.png \
         png/magnet-icon-${c}-256.png "ico/magnet-icon-${c}.ico"
  python3 -c "from PIL import Image; Image.open('png/magnet-icon-${c}-1024.png').convert('RGBA').save('icns/magnet-icon-${c}.icns', format='ICNS', sizes=[(16,16),(32,32),(64,64),(128,128),(256,256),(512,512),(1024,1024)])"
done

## FAVICON bundle (web-ready)
cp ico/magnet-icon-navy.ico favicon/favicon.ico
cp png/magnet-icon-navy-16.png  favicon/favicon-16x16.png
cp png/magnet-icon-navy-32.png  favicon/favicon-32x32.png
cp png/magnet-icon-navy-512.png favicon/android-chrome-512x512.png
cp png/magnet-icon-navy-192*.png favicon/ 2>/dev/null || true
# 192 explicitly + apple-touch (navy on white, 180, slight padding already baked)
render "$SVG/magnet-icon-navy.svg" /tmp/at.png -h 180
magick /tmp/at.png -background none -gravity center -extent 192x192 favicon/android-chrome-192x192.png
magick /tmp/at.png -background white -gravity center -extent 180x180 favicon/apple-touch-icon.png
cp svg/magnet-icon-navy.svg favicon/safari-pinned-tab.svg

echo "BUILD COMPLETE"
