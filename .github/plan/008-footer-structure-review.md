# 008 — Footer structure review

## Current structure

```
[ Brand: logo + tagline ]  [ Quick Links (5) ]  [ Follow Us + Hours ]
──────────────────────────── border ────────────────────────────
[ © copyright ]                              [ Made with ♥… ]
```

Grid: `1 → 3 cols` from `sm` up. Content is calm and on-brand after the logo fix.

## Verdict

**No major rebuild needed.** The three-zone café footer pattern works. What’s worth considering is hierarchy and a couple of small tensions — not a new layout system.

## What works

- Navy footer as a clear page closer
- Brand column kept quiet (logo + tagline) — matches your direction
- Hours in the footer — high utility for a café; Contact already has the same info, which is fine
- Social as icons, not a long list
- Bottom bar is light

## What feels off (in priority order)

1. **Column 3 hierarchy** — “Follow Us” sits above Hours. For a café, hours are the practical reason people look at the footer; social is secondary. Leading with Hours (or giving Hours its own visual weight) would read better.

2. **Quick Links is the softest column** — On a single-page site with a sticky nav, five vertical jump links mostly repeat the header. Useful, but they eat a full third of the footer for low new value. Not wrong — just the first thing I’d slim if we simplify.

3. **Tagline vs hours** — Tagline says “Open daily from sunrise to sunset,” while Hours lists fixed times (and summer Fri–Sun). Slight credibility clash. Soften the tagline (drop the open-hours claim) or leave hours to speak for themselves.

4. **Mobile order** — Stack is Brand → Links → Social/Hours. Users often want hours near the bottom of the page without scrolling past a link list. Minor; only matters if we restructure.

5. **Polish (optional)** — External social links should use `target="_blank"` + `rel="noopener noreferrer"`.

## Recommended directions (pick one)

### A — Keep structure, light polish (recommended default)
- Swap order in col 3: **Hours first**, then Follow Us
- Soften tagline so it doesn’t claim open hours
- Add external-link attributes on social
- No grid change

### B — Slim Quick Links
- Keep 3 cols, but make Quick Links a tighter set (e.g. Menu, Patio, Contact) or a horizontal chip/row under the brand
- More air for brand + hours

### C — Two-band footer
- Top: Brand + Hours + Social (no Quick Links column)
- Bottom band: copyright | compact horizontal section links
- Cleaner, less “template three-column,” still calm

## Recommendation

**Go with A**, plus one small copy fix.

Why not B/C: this site is calm and already simple; reshaping the grid (B/C) is more change than the footer’s problems deserve. Quick Links aren’t harmful — they’re just lower value. Hours-first + honest tagline fixes the real friction without redesign noise.

## Implemented

Applied **A**:
- Hours first, then Follow Us
- Tagline atmosphere only (removed sunrise–sunset claim)
- Social links: `target="_blank"` + `rel="noopener noreferrer"`
