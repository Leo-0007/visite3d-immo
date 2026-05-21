# VISITE3D IMMO — CLAUDE.md

## Projet
Premier SaaS suisse de visite 3D self-capture pour l'immobilier.
URL actuelle : visite3d.vercel.app / visite3dimmo.ch
Marche : Suisse romande (FR) -> Suisse alemanique (DE) en V2

## Stack technique
- Framework : Next.js 16 App Router (TypeScript strict)
- UI : Tailwind CSS v4 + shadcn/ui + Motion (ex-Framer Motion)
- Paiement : Stripe (Payment Links MVP -> Checkout V2)
- Base de donnees : Supabase (PostgreSQL + RLS)
- CRM : Airtable (miroir leads)
- Email : Brevo (sequences + transactionnel)
- Appels IA : VoiceIA.ch
- Alertes : Telegram Bot API
- Analytics : Plausible (privacy-first)
- Deploiement : Vercel

## Offres (NE JAMAIS MODIFIER SANS VALIDATION)
SOLO       : 49 CHF/bien   -> Visite 3D + lien + embed + miniature + QR + 6 mois
PACK IMMO  : 89 CHF/bien   -> Solo + Plan 2D + 5 photos HD + texte IA +
                               dossier Homegate + hebergement 12 mois
PACK AGENCE: 399 CHF/10 biens -> Pack Immo x10 + dashboard + branding agence
REGIE      : Sur mesure     -> Volume illimite + API + white-label + account manager

Upsells :
- Plan 2D seul : +19 CHF
- Staging virtuel IA : +39 CHF
- Video reseaux sociaux : +25 CHF
- Hebergement prolonge : 9 CHF/mois
- Analytics visiteurs : 15 CHF/mois

## Personas
1. Agent immobilier romand (5-30 biens/mois) -> veut aller vite
2. Particulier vendeur -> veut se distinguer sur Homegate
3. Regie / grande agence -> veut du volume et du branding

## Conventions code
- Fichiers : kebab-case
- Composants React : PascalCase
- Variables : camelCase
- Commits : Conventional Commits (feat:, fix:, chore:, docs:)
- Tailwind : trie par prettier-plugin-tailwindcss
- TypeScript : strict, zero "any"
- Pas d'inline styles
- Toutes strings UI dans /content/
- Zero console.log en production
- Zero secret dans le code (tout en .env.local)

## Variables d'environnement requises
# Admin
ADMIN_SECRET_TOKEN=
CRON_SECRET=
# Stripe
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_LINK_AGENCE=
# Supabase
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
# Optionnel
BREVO_API_KEY=
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=

## Notes Payment Links
- Solo (49 CHF) et Pack Immo (89 CHF) : liens hardcodes dans src/content/pricing.ts
- Pack Agence (399 CHF) : env var NEXT_PUBLIC_STRIPE_LINK_AGENCE
- Regie : pas de lien (formulaire contact)
