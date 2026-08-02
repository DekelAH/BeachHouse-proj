# 010 — Scroll indicator: mouse (lg+) / hand (sm–md)

## Goal

Replace the generic scroll pill so device metaphor matches input:
- **Large (`lg+`)**: mouse scroll cue
- **Medium & small (`< lg`)**: hand / swipe cue

## Approach

Update Hero scroll indicator with two SVGs toggled via Tailwind `hidden lg:flex` / `lg:hidden`. Keep bounce animation on the active cue.

Label: **Swipe** below `lg`, **Scroll** on `lg+`.
