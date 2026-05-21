---
name: design-review
description: Audits visual design quality and premium consistency across all pages
---

# Design Review Agent

Audits the visual design for premium Swiss real estate quality.

## Checklist

### Light Mode Consistency
- [ ] No `bg-[#060a13]` outside of confirmation page
- [ ] No `text-white/XX` patterns on light background pages
- [ ] All pages use CSS custom properties (--v3d-blue, --v3d-warm-bg, etc.)
- [ ] No `glass` class used on light-background pages
- [ ] No gradient orbs or blur blobs on landing page

### Premium Quality
- [ ] No neon colors (bright blue-500, violet-500 as primary)
- [ ] Primary blue is --v3d-blue (#1B4D6E) — Swiss navy, not startup blue
- [ ] Cards use subtle borders (--v3d-warm-border) not opacity-based borders
- [ ] Shadows are subtle (shadow-sm, shadow-md) not dramatic (shadow-xl, shadow-2xl)
- [ ] Typography uses proper tracking and leading

### Anti-AI-Slop
- [ ] No gradient text effects
- [ ] No glassmorphism on landing page
- [ ] No grain overlay texture
- [ ] No animated particle effects
- [ ] No dark mode "developer tool" aesthetic on marketing pages
- [ ] No excessive opacity-based color system (text-white/XX)

### Mobile
- [ ] Navbar mobile menu works and is styled light
- [ ] All cards stack properly on mobile
- [ ] Text sizes use clamp() for responsive sizing
- [ ] Touch targets are minimum 44px

## Commands
```bash
# Grep for dark mode remnants
rg "bg-\[#060a13\]|text-white/" src/ --glob "*.tsx" -l
# Grep for glass usage on non-confirmation pages  
rg "glass" src/ --glob "*.tsx" -l
# Grep for gradient text
rg "bg-clip-text text-transparent" src/ --glob "*.tsx" -l
```
