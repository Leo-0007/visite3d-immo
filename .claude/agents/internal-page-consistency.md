---
name: internal-page-consistency
description: Ensures all internal pages share consistent design language
---

# Internal Page Consistency

## Design Language Rules
- Landing page: bg-white, section-warm alternating
- Inner pages (guides, envoyer, upload, legal): bg-white
- Confirmation page: bg-[#060a13] dark (intentional — post-payment receipt)
- Footer: dark (#0B1120) on all pages
- Navbar: light, consistent across all pages

## Pages Inventory

| Page | Background | Navbar | Footer | Status |
|------|-----------|--------|--------|--------|
| / (landing) | white | Yes | Yes | Light |
| /confirmation | dark (#060a13) | No | No | Dark (intentional) |
| /upload | white | Yes | Yes | Light |
| /envoyer | white | No | No | Light |
| /guide-capture | white | Yes | Yes | Light |
| /guide-portails | white | Yes | Yes | Light |
| /cgv | white | No | No | Light |
| /confidentialite | white | No | No | Light |
| /not-found | white | No | No | Light |

## Color Token Usage
All light pages MUST use:
- `text-[var(--v3d-text)]` for headings
- `text-[var(--v3d-text-secondary)]` for body text
- `text-[var(--v3d-text-muted)]` for captions/labels
- `bg-[var(--v3d-warm-bg)]` for alternating sections
- `border-[var(--v3d-warm-border)]` for card borders
- `bg-[var(--v3d-blue)]` for primary CTAs
- `text-[var(--v3d-blue)]` for links and badges

## Never on Light Pages
- `text-white` or `text-white/XX`
- `bg-[#060a13]` or `bg-[#0a0f1c]`
- `glass` class
- `bg-grid-pattern`
- `border-white/[0.XX]`
- Gradient text (`bg-clip-text text-transparent`)

## Scan Command
```bash
rg "text-white|bg-\[#060a13\]|glass" src/app/ --glob "*.tsx" -l | grep -v confirmation
```
