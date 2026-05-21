# Visite3D Immo

Premier SaaS suisse de visite 3D self-capture pour l'immobilier.
Filmez avec votre smartphone, recevez une visite 3D navigable en 24h.

**Production** : [visite3dimmo.ch](https://visite3dimmo.ch)

## Stack

- **Framework** : Next.js 16 (App Router, TypeScript strict, Turbopack)
- **UI** : Tailwind CSS v4 + shadcn/ui + Motion
- **Paiement** : Stripe (Payment Links MVP)
- **Base de donnees** : Supabase (PostgreSQL + RLS)
- **CRM** : Airtable (miroir leads)
- **Emails** : Brevo (sequences) + templates transactionnels
- **Appels IA** : VoiceIA.ch
- **Alertes** : Telegram Bot API
- **Analytics** : Plausible
- **Deploiement** : Vercel

## Installation

```bash
git clone <repo>
cd visite3d
npm install
cp .env.example .env.local
# Remplir les variables dans .env.local
npm run dev
```

## Variables d'environnement

Voir `.env.example` pour la liste complete. Variables critiques :

| Variable | Service | Requis |
|---|---|---|
| `ADMIN_SECRET_TOKEN` | Auth admin | Oui |
| `CRON_SECRET` | Crons Vercel | Oui |
| `STRIPE_SECRET_KEY` | Paiements | Oui |
| `STRIPE_WEBHOOK_SECRET` | Webhook Stripe | Oui |
| `SUPABASE_URL` | Base de donnees | Oui |
| `SUPABASE_SERVICE_ROLE_KEY` | Base de donnees | Oui |
| `TELEGRAM_BOT_TOKEN` | Alertes | Oui |
| `TELEGRAM_CHAT_ID` | Alertes | Oui |
| `BREVO_API_KEY` | Emails sequences | Optionnel |
| `AIRTABLE_API_KEY` | CRM Airtable | Optionnel |
| `VOICEIA_API_KEY` | Appels IA | Optionnel |

## Scripts

```bash
npm run dev          # Serveur dev (Turbopack)
npm run build        # Build production
npm run start        # Serveur production
npx tsx scripts/check-env.ts  # Verifier les variables
npx tsx scripts/seed.ts       # Donnees de test
```

## Architecture

```
src/
  app/
    page.tsx                    # Landing page
    layout.tsx                  # Layout racine + SEO
    opengraph-image.tsx         # OG image dynamique
    sitemap.ts                  # Sitemap XML
    robots.ts                   # Robots.txt
    guide-capture/              # Guide de filmage
    guide-portails/             # Guide Homegate/ImmoScout24
    confirmation/               # Page post-paiement
    upload/                     # Formulaire envoi video
    envoyer/                    # Alias upload
    cgv/                        # Conditions generales
    confidentialite/            # Politique vie privee
    admin/
      login/                    # Connexion admin
      crm/                      # Dashboard CRM (leads kanban)
      uploads/                  # Gestion commandes
      metrics/                  # Metriques business
    api/
      admin/auth/               # Auth admin
      admin/logout/             # Deconnexion
      stripe/webhook/           # Webhook Stripe
      uploads/                  # CRUD uploads
      crm/leads/                # CRUD leads + import CSV
      webhooks/brevo/           # Events email
      webhooks/voiceia/         # Callbacks appels
      webhooks/cal/             # Bookings Cal.com
      cron/sequences/           # Cron 9h: sequences commerciales
      cron/reminders/           # Cron 10h: rappels livraison
  components/
    marketing/                  # Composants landing page
    layout/                     # Navbar
    shared/                     # Section wrappers
    ui/                         # shadcn/ui
    animations.tsx              # Composants Motion
  content/                      # Donnees statiques (pricing, FAQ, etc.)
  lib/
    stripe.ts                   # Client Stripe
    supabase/server.ts          # Client Supabase service role
    airtable.ts                 # CRUD leads Airtable
    brevo.ts                    # Sequences + transactionnel
    voiceia.ts                  # Appels IA
    telegram.ts                 # Alertes Telegram
    auth.ts                     # Verification admin/cron
    schema.ts                   # JSON-LD schemas
    utils.ts                    # cn() helper
    constants.ts                # Constantes globales
supabase/
  migrations/
    001_initial.sql             # Schema uploads + leads + activities
    002_stripe_events.sql       # Table idempotence Stripe
scripts/
  check-env.ts                  # Verification variables
  seed.ts                       # Donnees de test
vercel.json                     # Crons (9h sequences, 10h reminders)
```

## Offres

| Pack | Prix | Contenu |
|---|---|---|
| Solo | 49 CHF/bien | Visite 3D + lien + embed + QR + 6 mois |
| Pack Immo | 89 CHF/bien | Solo + Plan 2D + photos HD + texte IA + dossier Homegate + 12 mois |
| Pack Agence | 399 CHF/10 biens | Pack Immo x10 + dashboard + branding |
| Regie | Sur mesure | Volume illimite + API + white-label |

## Dashboard admin

Accessible a `/admin/login` avec le token `ADMIN_SECRET_TOKEN`.

- **Commandes** : liste des uploads, actions (traiter/livrer/rejeter), alertes urgence >20h
- **CRM** : kanban leads par statut, scoring, contact rapide
- **Import CSV** : format Swiss-Leads (email,company,contact,phone,city,canton)
- **Metriques** : revenue, commandes, conversion, pipeline, distribution cantons/segments

## Systeme commercial automatise

1. **Import leads** : CSV Swiss-Leads ou creation manuelle
2. **Sequences email** : Brevo cold-agence J0/J3/J7, followup-demo, win-back
3. **Appels IA** : VoiceIA qualification + relance automatique
4. **Scoring** : +5 email ouvert, +15 clic, +20 appel repondu, +25 demo bookee
5. **Alertes** : Telegram temps reel (paiement, upload, hot lead, livraison due)
6. **Crons** : sequences 9h, reminders 10h (Vercel Cron)

## Deploiement

```bash
# Premiere fois
vercel link
vercel env pull .env.local

# Deployer
vercel --prod

# Configurer le webhook Stripe
stripe listen --forward-to https://visite3dimmo.ch/api/stripe/webhook
```

## Supabase

```bash
# Appliquer les migrations
supabase db push

# Ou manuellement dans le SQL Editor Supabase :
# 1. supabase/migrations/001_initial.sql
# 2. supabase/migrations/002_stripe_events.sql
```

## Licence

Propriete de SwissEmpire2 Sarl. Tous droits reserves.
