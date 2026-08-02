# 009 — Whole-site structure & design audit

## Page architecture

Single-page marketing site (`src/app/page.tsx`):

```
Navbar (layout — fixed)
├── Hero          #home
├── Menu          #menu
├── Gallery       #gallery
├── About         #about
├── (Reviews)     #reviews — commented out
├── PatioRent     #patio
├── Contact       #contact
└── Footer
```

APIs: `/api/contact`, `/api/patio-rent`. SEO: `layout.tsx` metadata, `robots.ts`, `sitemap.ts`.

## Section-by-section

| Section | Job | Layout | Strength | Weakness |
|---------|-----|--------|----------|----------|
| **Hero** | Brand + 2 CTAs | Full-bleed video, centered type | Brand-first, one composition, real atmosphere | Dual CTAs both strong; “Welcome to” eyebrow is stock |
| **Menu** | Browse dishes | Sand bg, 4-col white cards (~10 items) | Real food photos | Card-catalog feel; no prices; same header formula |
| **Gallery** | Place proof | Navy, editorial mosaic + lightbox | Best visual section after hero | Supporting copy is generic |
| **About** | Story / trust | Split image + long copy | Distinctive (Lifeways, real menu mix) | Long text block; decorative image frame |
| **Reviews** | Social proof | Carousel (disabled) | Correctly off | Copy doesn’t match real menu/locale — keep off until real |
| **Patio** | Lead gen | White, photos around form | Clear business priority (nav + hero CTA) | Heavy; second form before Contact |
| **Contact** | Reach + map | Sand, info/map \| form | Practical (address, hours, email) | Hours duplicated in footer |
| **Footer** | Close + utility | 3-col navy | Calm after logo fix | Hours under social; tagline vs hours (pending A) |

## Design system

- **Colors:** primary `#4F8FA8`, secondary `#C9A46A`, sand `#F5F1E8`, navy `#1E3A4A` — aligned with logo (justified, not random purple AI theme).
- **Type:** Playfair Display headings + Inter body. Playfair fits brand; Inter is the generic half.
- **Rhythm:** Almost every section uses gold eyebrow → Playfair H2 → muted subcopy → content. Cohesive, but predictable.
- **Motion:** Framer Motion on nearly every section (stagger/fade). Presence is there; variety is low.
- **Pattern:** Cards (Menu), rounded-full CTAs, sand/navy alternation.

## What’s working

1. Clear single-page story: eat → see place → know us → book patio → contact.
2. Hero does brand + place correctly (video plane, not inset card).
3. Gallery and patio photography do real visual work.
4. About has actual local identity (Cordova Bay / Lifeways) — not empty coastal filler.
5. Patio as primary conversion is consistent (nav CTA, hero secondary CTA, dedicated section).
6. Palette matches the mark.

## Highest-value issues (priority)

1. **Footer polish (A)** — still open from plan 008; small, high polish.
2. **Reviews stay off** — sample reviews mention dishes/locales that don’t match; re-enable only with real Cordova Bay reviews.
3. **Section template sameness** — same eyebrow/H2/blurb stack everywhere flattens personality; Gallery/About could break the formula slightly.
4. **Menu as product grid** — 10 white cards is the most “template restaurant” block; consider list/editorial or fewer featured + “full menu” later if they want more brand.
5. **Late-page form fatigue** — Patio form then Contact form back-to-back; OK if patio is the money action, but Contact could stay lighter (or patio stays primary).
6. **Local SEO** — metadata is generic “beach café”; Victoria / Cordova Bay should lead keywords and description.
7. **Copy consistency** — footer “sunrise to sunset” vs real hours; hero/about voice is stronger than gallery/menu blurbs.

## What I would not change right now

- Overall section order
- Hero structure
- Gallery mosaic approach
- Navy/sand color system tied to logo
- Disabling Reviews

## Recommended next focus (ask user)

Pick one lane:

**P1 — Polish pass:** Footer A + tagline + social `target="_blank"` + local SEO meta  
**P2 — Menu redesign:** Less card-catalog, more café editorial  
**P3 — Rhythm break:** Vary 1–2 section headers / backgrounds so the scroll doesn’t feel stamped  
**P4 — Conversion:** Tighten Patio vs Contact (which form owns the close?)

## Implemented (P1)

User chose P1 polish:
- Footer A (see plan 008)
- Local SEO in `layout.tsx`: Cordova Bay / Victoria BC in title, description, keywords; `en_CA` locale; OG image path fixed to existing `cafe_exterior_02.jpg`

## Remaining open

- P2 Menu redesign, P3 rhythm break, P4 conversion — not started
- Patio as primary business goal — not confirmed
