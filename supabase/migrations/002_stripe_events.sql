-- Table idempotence Stripe webhooks
CREATE TABLE stripe_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL,
  processed_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_stripe_events_event_id ON stripe_events(event_id);

ALTER TABLE stripe_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service role full access stripe_events"
  ON stripe_events FOR ALL USING (auth.role() = 'service_role');
