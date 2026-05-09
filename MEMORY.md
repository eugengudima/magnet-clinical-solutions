# MEMORY.md — mom's_company
# Location: /home/eugen/claudehome/projects/mom's_company/MEMORY.md
# Rule: NEVER overwrite — append only (except FILE STRUCTURE which updates in place)
# Last updated: 2026-05-09

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

---

## FILE STRUCTURE

```
mom's_company/
├── MEMORY.md                                   — action log and file structure (this file)
├── NOTES.md                                    — knowledge tree: goals, domain, content, decisions
├── 2026-05-09-140210_hyprshot.png              — logo source screenshot
├── WhatsApp Ptt 2026-05-09 at 11.19.52 AM.ogg — test voice message
├── WhatsApp Ptt 2026-05-09 at 11.19.52 AM.txt — transcription (just a mic test)
├── WhatsApp Ptt 2026-05-09 at 1.36.44 PM.ogg  — company briefing voice message
├── WhatsApp Ptt 2026-05-09 at 1.36.44 PM.txt  — English translation of briefing
└── website/
    ├── index.html          — Home page
    ├── about.html          — About page
    ├── services.html       — Services page (all 4 directions with anchors)
    ├── gallery.html        — Gallery page (placeholder grid + tabs)
    ├── contact.html        — Contact page (form + FAQ)
    └── assets/
        ├── style.css       — All styles; CSS custom properties, responsive
        ├── main.js         — GSAP animations, navbar, mobile menu, form handler
        └── images/
            └── logo.png    — Company logo (navy wordmark)
```

## KEY NUMBERS

- Pages: 5 (Home, About, Services, Gallery, Contact)
- Services documented: 4 directions
- CSS custom properties: 15 brand tokens
- JS animations: 8 animation types (fade-up, fade-in, slide-left, slide-right, scale-in, stagger, parallax, counter)
