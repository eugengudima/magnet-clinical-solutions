# Magnet Clinical Solutions — design system conventions

A React component library for a clinical-research company. Navy + gold, serif
display type, restrained and corporate. Build screens by **composing these
components**; reach for raw HTML only for page scaffolding (sections, grids).

## Setup — required

Import the stylesheet **once** at the app root, then use components directly:

```jsx
import "magnet-clinical-ui/styles.css";
import { Navbar, Hero, ServiceCard, Button } from "magnet-clinical-ui";
```

There is **no provider and no ThemeProvider** — styling is global CSS driven by
custom-property tokens. Without the stylesheet import every component renders
unstyled (browser-default text, no colors). That import is the whole setup.

## Styling idiom — tokens, NOT utility classes

This is **not** a Tailwind/utility-class system and **not** a prop-styling
system. Components carry their own look; your own layout glue should reference
the design tokens (CSS custom properties), never hard-coded hex. Use them in
`style={{…}}` or your own CSS:

| Token | Use |
|---|---|
| `--navy`, `--navy-dark`, `--navy-light` | brand blues (surfaces, gradients) |
| `--gold`, `--gold-light` | accent / CTA / eyebrow labels |
| `--white`, `--off-white`, `--light-gray` | light surfaces (alternate section bands) |
| `--text`, `--text-light`, `--mid-gray` | body text shades |
| `--shadow`, `--shadow-hover` | card elevation |
| `--radius` (12px), `--transition` | rounding & motion |

Fonts: **Playfair Display** (all headings, big numbers) and **Inter** (body) —
loaded by the stylesheet, applied automatically to `h1–h4`, `.btn`, etc.

**Alternate themes:** set `data-theme="2"` … `"10"` on a root element (e.g.
`<html data-theme="3">`) to re-skin the whole palette (10 alternates ship;
default = navy/gold). Components need no change.

## Light vs. dark components — important

Several components are built for **dark (navy) backgrounds** and render
near-invisible on white. Place them on a navy surface (a parent with
`background: var(--navy)` / a gradient), or use the components that already
carry their own dark background:

- Own dark background: `Hero`, `PageHero`, `CtaSection`, `Footer`,
  `ServiceDetail` (visual panel), `Navbar` (transparent until `scrolled`).
- Need a dark parent you provide: `Stat`, `Badge`, `AboutPill`.
- Light surface: `ServiceCard`, `TestimonialCard`, `TeamCard`, `CredentialItem`,
  `ContactForm`, `FormField`, `GalleryItem`, `SectionHeader`, `WhyItem`.

`Button` variants: `primary` (gold, anywhere), `navy` (light backgrounds),
`outline` (dark backgrounds only — white ghost).

## Where the truth lives

- `magnet-clinical-ui/styles.css` — every token, theme, and component rule.
  Read it before adding custom CSS so you reuse the vocabulary.
- Each component's `<Name>.d.ts` (props) and `<Name>.prompt.md` (usage).

## Idiomatic build snippet

```jsx
import "magnet-clinical-ui/styles.css";
import { Navbar, Hero, SectionHeader, ServiceCard, Button } from "magnet-clinical-ui";

export default function Landing() {
  return (
    <>
      <Navbar
        brand="Magnet Clinical Solutions"
        links={[{ label: "Home", href: "#", active: true }, { label: "Services", href: "#services" }]}
        ctaLabel="Contact Us"
      />
      <Hero
        badge="Republic of Moldova · Clinical Research" badgeIcon="🏥"
        title="Advancing Clinical Research in" highlight="Moldova"
        subtitle="World-class auditing, training, CRO, and recruitment services."
        actions={<Button variant="primary" href="#services">Explore Our Services</Button>}
        stats={[{ number: "4+", label: "Service Directions" }, { number: "100%", label: "Certified" }]}
      />
      <section className="services">
        <div className="container">
          <SectionHeader label="What We Offer" title="Four Pillars of Clinical Excellence" />
          <div className="services-grid">
            <ServiceCard icon="🔍" title="Clinical Study Auditing"
              description="Internationally certified audit services." linkText="Learn More →" href="#audit" />
          </div>
        </div>
      </section>
    </>
  );
}
```

Layout helpers from the stylesheet you can reuse: `.container` (max-width
wrapper), `.services-grid` / `.testimonials-grid` / `.team-grid` (auto-fit card
grids), `.section-label` (gold eyebrow), and `section { padding: 6rem 0 }`.
