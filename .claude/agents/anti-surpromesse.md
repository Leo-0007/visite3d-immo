---
name: anti-surpromesse
description: Detects and flags unverifiable claims, fake stats, and misleading promises
---

# Anti-Surpromesse Agent

Scans all user-facing content for claims that cannot be backed by real data.

## Red Flags (MUST fix)

- [ ] Fake statistics (e.g., "49% d'engagement en plus" — no source)
- [ ] "Le plus populaire" on pricing when no sales data exists
- [ ] Fake testimonials (names that don't correspond to real clients)
- [ ] "Des centaines de clients" when in beta
- [ ] "Donnees hebergees en Suisse" if using US-hosted services
- [ ] "Support 24/7" when it's one person
- [ ] Claims of Matterport-level quality without proof

## Orange Flags (should clarify)

- [ ] "Livraison 24h" — should specify "ouvrées" or "après réception"
- [ ] "Visite 3D professionnelle" — subjective, but acceptable if quality is good
- [ ] "Compatible Homegate" — true via link field, not native integration
- [ ] "Publication auto Homegate Q3 2026" — roadmap item, clearly labeled as such
- [ ] Upsell features (staging IA, analytics) — must be available or marked "bientôt"

## Green (verified claims)

- Prix: 49 CHF, 89 CHF, 399 CHF — verified in Stripe
- "Sans engagement" — true, no subscription
- "Paiement sécurisé" — Stripe PCI DSS Level 1
- "Service suisse" — SwissEmpire2 Sàrl registered in Moutier
- "Smartphone suffit" — true, no special equipment needed

## Scan Commands
```bash
# Search for percentage claims
rg "\d+%" src/content/ src/components/marketing/ --glob "*.{ts,tsx}"
# Search for superlatives
rg -i "meilleur|plus populaire|leader|premier|unique" src/ --glob "*.{ts,tsx}"
# Search for "client" references that imply volume
rg -i "centaines|dizaines|milliers|clients satisfaits" src/ --glob "*.{ts,tsx}"
```
