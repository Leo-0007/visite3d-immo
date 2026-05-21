---
name: launch-readiness
description: Pre-launch checklist covering technical, legal, and business readiness
---

# Launch Readiness Checklist

## Technical
- [ ] `next build` passes with zero errors
- [ ] All env vars set in Vercel (STRIPE_SECRET_KEY, SUPABASE_URL, etc.)
- [ ] Stripe webhook configured for production domain
- [ ] Stripe payment links redirect correctly with ?pack= param
- [ ] BETA3D promo code works (resolvePackFromSession handles 0 CHF)
- [ ] Brevo templates exist (IDs 1, 2, 3) with correct sender
- [ ] Telegram alerts fire on new orders
- [ ] DNS configured: visite3dimmo.ch -> Vercel
- [ ] SSL certificate active
- [ ] robots.txt allows indexing
- [ ] sitemap.xml includes all public pages

## Legal
- [ ] CGV page exists and is accessible
- [ ] Confidentialite page exists and is accessible
- [ ] Company name correct: SwissEmpire2 Sàrl
- [ ] Location correct: Moutier, Suisse
- [ ] Contact email accessible
- [ ] No mention of WhatsApp (disabled)
- [ ] Hebergement durations consistent (6 mois Solo, 12 mois Pack)
- [ ] LPD (Swiss data law) referenced, not just RGPD

## Business
- [ ] Pricing consistent across all pages (49/89/399 CHF)
- [ ] All Stripe payment links valid and pointing to correct products
- [ ] Post-payment email flow works (Brevo templates)
- [ ] Confirmation page shows correct pack details
- [ ] Upload/Envoyer flow works end to end

## Content
- [ ] No fake testimonials presented as real
- [ ] No unverifiable statistics
- [ ] All copy in French (Swiss French conventions)
- [ ] No English leaks in UI
- [ ] No Lorem ipsum or placeholder text

## Design
- [ ] Landing page fully light mode
- [ ] Inner pages fully light mode (except confirmation)
- [ ] No broken layouts on mobile
- [ ] Footer present on all pages with navbar
- [ ] Favicon and OG image configured

## Commands
```bash
# Full build test
npx next build
# Check for placeholder content
rg -i "lorem|placeholder|todo|fixme|xxx|TBD" src/ --glob "*.{ts,tsx}" -l
# Check for console.log
rg "console\.log" src/ --glob "*.{ts,tsx}" -l
# Check all prices match
rg "49|89|399" src/content/pricing.ts
```
