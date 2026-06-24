# NOTES.md — mom's_company
# Location: /home/eugen/claudehome/projects/mom's_company/NOTES.md
# Rule: NEVER overwrite — append and update in place
# Last updated: 2026-06-24

---

- Current live design (as of 2026-06-24): "warm-earth-site"
  - Supersedes the v1.0 navy/gold theme-picker site (now in website/archive/)
  - Visual language: cream/sand backgrounds, forest-green primary, gold accent, brown
    - Fonts: Lora (serif headings) + Nunito Sans (body)
    - Light + dark mode (persisted in localStorage key mcs_theme)
  - Bilingual EN/RO (localStorage key mcs_lang); RO = Romanian for the Moldova market
    - i18n.js holds the EN→RO dictionary and translates by walking text nodes at runtime
  - Self-contained: no GSAP / CDN JS; scroll reveals via IntersectionObserver
  - Contact email of record: info@magnetclinical.md
  - Build/run reproduction contract lives in SPEC.md
  - Tech-stack note: NOTES originally planned Astro+Tailwind+GSAP; actual implementation is
    vanilla HTML/CSS/JS (disk-space constraint, see action log 3.1) — kept for the new site too

---

- Project: Magnet Clinical Solutions website
  - Goal: Build a professional, animated B2B website for the company
    - Deployment: local first, then push to existing domain
    - Hosting: TBD (domain already owned by client)
  - Company
    - Name: Magnet Clinical Solutions
    - Industry: Pharmaceutical / Clinical Research
    - Location: Republic of Moldova
    - Business model: B2B
    - Tagline: exists — pending (in branding materials)
    - Logo: PNG — pending delivery
    - Patient pools targeted: north Moldova, south Moldova, Gagauzia (untapped)
  - Target audience
    - Pharmaceutical sponsors needing clinical studies run in Moldova
    - Companies needing clinical study audits
    - Doctors seeking certified training / authorization
    - Research organizations needing patient recruitment
  - Four service directions
    - 1. Audit in Clinical Studies
      - Founder is internationally certified clinical studies auditor
      - Contract-based; deliverable is official audit report
    - 2. Training Platform
      - Five domains: clinical studies, doctor authorization, pharmacovigilance, medical availability, GVP certification (5th tentative)
      - Certified by Ministry of Education of Republic of Moldova
      - Courses carry official recognized status
    - 3. Contract Research Organization (CRO)
      - Brings international clinical studies into Moldova
      - Full service: authorization, doctor contracting, patient recruitment, protocol execution
    - 4. Recruitment Platform (emerging vision)
      - Platform connecting sponsors with Moldovan patient populations
      - Targets untapped regional patient pools
  - Website requirements
    - Pages: Home, About, Services (with 4 directions), Contact, Gallery, Previous Clients / Testimonials
    - Content: starting from scratch — placeholder copy until real content provided
    - Style: professional, cool animations, B2B credibility
    - Languages: TBD (Romanian + English likely)
  - Tech stack (chosen)
    - Framework: Astro (static, fast, component-based)
    - Styling: Tailwind CSS
    - Animations: GSAP
  - Status: awaiting logo PNG and any additional documents before build starts
  - Pending actions
    - Receive logo PNG — in progress
    - Receive any additional company documents
    - Confirm brand colors (may be in logo)
    - Confirm contact details for website (email, phone, address)
    - Build website
    - Client visual review
    - Deploy to domain
