/**
 * VoiceIA.ch — Appels IA automatises
 *
 * Utilise pour :
 * - Appels de qualification apres inscription
 * - Relance apres demo sans conversion
 * - Confirmation de rendez-vous
 *
 * Env vars : VOICEIA_API_KEY, VOICEIA_AGENT_ID
 */

const VOICEIA_API = "https://api.voiceia.ch/v1";

function headers() {
  const key = process.env.VOICEIA_API_KEY;
  if (!key) throw new Error("VOICEIA_API_KEY manquant");
  return {
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  };
}

export type CallPurpose =
  | "qualification"
  | "followup-demo"
  | "confirmation-rdv"
  | "relance";

export interface CallRequest {
  phone: string;
  contactName: string;
  companyName?: string;
  purpose: CallPurpose;
  context?: string;
}

export async function initiateCall(req: CallRequest) {
  const agentId = process.env.VOICEIA_AGENT_ID;
  if (!agentId) throw new Error("VOICEIA_AGENT_ID manquant");

  const res = await fetch(`${VOICEIA_API}/calls`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      agent_id: agentId,
      phone_number: req.phone,
      metadata: {
        contact_name: req.contactName,
        company_name: req.companyName ?? "",
        purpose: req.purpose,
        context: req.context ?? "",
      },
    }),
  });

  const data = await res.json();
  return {
    callId: data.id as string,
    status: data.status as string,
  };
}

export async function getCallResult(callId: string) {
  const res = await fetch(`${VOICEIA_API}/calls/${callId}`, {
    headers: headers(),
  });
  const data = await res.json();
  return {
    status: data.status as string,
    duration: data.duration as number,
    outcome: data.outcome as string,
    transcript: data.transcript as string,
    summary: data.summary as string,
  };
}
