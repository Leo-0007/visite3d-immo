-- Visite3D Immo — Schema initial
-- Tables : uploads, leads, lead_activities

-- Table uploads (biens commandes)
CREATE TABLE uploads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  address TEXT NOT NULL,
  pack TEXT NOT NULL CHECK (pack IN (
    'solo', 'pack-immo', 'pack-agence', 'regie'
  )),
  video_url TEXT,
  status TEXT DEFAULT 'received' CHECK (status IN (
    'received', 'validating', 'processing',
    'delivered', 'rejected', 'refund'
  )),
  stripe_payment_id TEXT,
  delivery_url TEXT,
  rejection_reason TEXT,
  retry_count INTEGER DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  delivered_at TIMESTAMPTZ
);

-- Table leads CRM (miroir Airtable pour requetes rapides)
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  airtable_id TEXT UNIQUE,
  email TEXT UNIQUE NOT NULL,
  company_name TEXT,
  contact_name TEXT,
  phone TEXT,
  city TEXT,
  canton TEXT,
  segment TEXT CHECK (segment IN (
    'agence', 'regie', 'courtier', 'particulier', 'promoteur'
  )),
  status TEXT DEFAULT 'new' CHECK (status IN (
    'new', 'contacted', 'qualified',
    'demo', 'won', 'lost', 'unsubscribed'
  )),
  score INTEGER DEFAULT 0 CHECK (score >= 0 AND score <= 100),
  source TEXT DEFAULT 'swiss-leads',
  last_contact_at TIMESTAMPTZ,
  next_action TEXT,
  next_action_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Table activites CRM
CREATE TABLE lead_activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN (
    'email_sent', 'email_opened', 'email_clicked',
    'call_made', 'call_answered', 'call_voicemail',
    'demo_booked', 'payment', 'unsubscribed', 'note'
  )),
  channel TEXT CHECK (channel IN (
    'brevo', 'voiceia', 'cal', 'stripe', 'manual'
  )),
  content TEXT,
  outcome TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes performance
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_score ON leads(score DESC);
CREATE INDEX idx_leads_next_action ON leads(next_action_at);
CREATE INDEX idx_leads_canton ON leads(canton);
CREATE INDEX idx_uploads_status ON uploads(status);
CREATE INDEX idx_uploads_email ON uploads(email);

-- RLS active
ALTER TABLE uploads ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_activities ENABLE ROW LEVEL SECURITY;

-- Politique : service role only pour admin
CREATE POLICY "Service role full access uploads"
  ON uploads FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access leads"
  ON leads FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access activities"
  ON lead_activities FOR ALL USING (
    auth.role() = 'service_role'
  );
