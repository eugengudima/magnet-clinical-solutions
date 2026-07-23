#!/usr/bin/env python3
"""Pre-render the Romanian version of the site.

Reads website/*.html (English source of truth) and the EN→RO dictionary in
tools/ro-dict.js, writes website/ro/*.html with:
  - text nodes / <title> / meta descriptions / placeholders translated
    (exact trimmed-English-text match, same rule the old runtime i18n used)
  - <html lang="ro">
  - canonical rewritten to the /ro/ URL
  - relative asset paths prefixed with ../
  - the language switcher flipped (RO active, EN flag links back up)

Run after any copy change:  python3 tools/build-ro.py
Untranslated strings are listed so dictionary gaps are visible.
"""
import json
import re
import sys
from html import escape
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "website"
OUT = SITE / "ro"
PAGES = ["index.html", "about.html", "services.html", "gallery.html", "contact.html"]
DOMAIN = "https://magnet-clinical-solutions.com"

VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input",
        "link", "meta", "param", "source", "track", "wbr"}


def load_dict():
    src = (ROOT / "tools" / "ro-dict.js").read_text(encoding="utf-8")
    body = src[src.index("var RO = {") + len("var RO = "):src.rindex("};") + 1]
    body = re.sub(r"/\*.*?\*/", "", body, flags=re.S)  # strip comments
    return json.loads(body)


RO = load_dict()
missed = set()


def translate(text):
    """Translate one text run, preserving surrounding whitespace."""
    key = text.strip()
    if not key:
        return text
    val = RO.get(key)
    if val is None:
        missed.add(key)
        return text
    i = text.find(key)
    return text[:i] + val + text[i + len(key):]


class RoRenderer(HTMLParser):
    def __init__(self, page):
        super().__init__(convert_charrefs=True)
        self.page = page
        self.out = []
        self.raw_text_tag = None  # inside <script>/<style>: pass data through

    # ---- serialization helpers -------------------------------------
    def emit_tag(self, tag, attrs):
        parts = [f"<{tag}"]
        for k, v in attrs:
            parts.append(f" {k}" if v is None else f' {k}="{escape(v, quote=True)}"')
        parts.append(">")
        self.out.append("".join(parts))

    # ---- tag handling -----------------------------------------------
    def rewrite(self, tag, attrs):
        """Return modified attrs, or None if the tag needs no changes."""
        d = dict(attrs)
        changed = False

        if tag == "html":
            d["lang"] = "ro"
            changed = True
        if tag == "meta" and d.get("name") == "description" and d.get("content"):
            d["content"] = translate(d["content"])
            changed = True
        if tag == "link" and d.get("rel") == "canonical":
            d["href"] = f"{DOMAIN}/ro/" if self.page == "index.html" else f"{DOMAIN}/ro/{self.page}"
            changed = True
        if d.get("placeholder"):
            d["placeholder"] = translate(d["placeholder"])
            changed = True
        if tag == "a" and "data-lang" in d:  # language switcher
            if d["data-lang"] == "en":
                d["href"] = "../" + self.page
                d["class"] = d.get("class", "").replace(" active", "").replace("active", "").strip() or "lang-btn"
            else:
                d["href"] = self.page
                if "active" not in d.get("class", ""):
                    d["class"] = (d.get("class", "") + " active").strip()
            changed = True
        for attr in ("src", "href"):
            v = d.get(attr)
            if v and v.startswith("assets/"):
                d[attr] = "../" + v
                changed = True

        return list(d.items()) if changed else None

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style"):
            self.raw_text_tag = tag
        new = self.rewrite(tag, attrs)
        if new is None:
            self.out.append(self.get_starttag_text())
        else:
            self.emit_tag(tag, new)

    def handle_startendtag(self, tag, attrs):
        new = self.rewrite(tag, attrs)
        if new is None:
            self.out.append(self.get_starttag_text())
        else:
            self.emit_tag(tag, new)  # void/self-closing: ">" is fine

    def handle_endtag(self, tag):
        if tag == self.raw_text_tag:
            self.raw_text_tag = None
        self.out.append(f"</{tag}>")

    # ---- content ------------------------------------------------------
    def handle_data(self, data):
        if self.raw_text_tag:
            self.out.append(data)
        else:
            self.out.append(escape(translate(data), quote=False))

    def handle_comment(self, data):
        self.out.append(f"<!--{data}-->")

    def handle_decl(self, decl):
        self.out.append(f"<!{decl}>")


def main():
    OUT.mkdir(exist_ok=True)
    for page in PAGES:
        r = RoRenderer(page)
        r.feed((SITE / page).read_text(encoding="utf-8"))
        r.close()
        (OUT / page).write_text("".join(r.out), encoding="utf-8")
        print(f"wrote website/ro/{page}")
    if missed:
        print(f"\n{len(missed)} untranslated string(s) left in English:", file=sys.stderr)
        for k in sorted(missed):
            print(f"  · {k[:100]}", file=sys.stderr)


if __name__ == "__main__":
    main()
