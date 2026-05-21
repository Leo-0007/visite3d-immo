/**
 * Brevo (ex-Sendinblue) — Email sequences + transactionnel
 *
 * Templates IDs (Brevo dashboard) :
 * 1 = upload-received (transactionnel — confirmation commande + instructions)
 * 2 = delivery (visite 3D prete — lien livraison)
 * 3 = upload-reminder (48h sans video — relance)
 *
 * Templates futures (a creer quand sequences actives) :
 * 4+ = cold-agence-j0, cold-agence-j3, cold-agence-j7, followup, demo-confirmation
 *
 * Env var : BREVO_API_KEY
 */

const BREVO_API = "https://api.brevo.com/v3";

function headers() {
  const key = process.env.BREVO_API_KEY;
  if (!key) throw new Error("BREVO_API_KEY manquant");
  return {
    "api-key": key,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

export type SequenceName =
  | "cold-agence"
  | "followup-demo"
  | "win-back";

export async function addContactToBrevo(
  email: string,
  attributes?: Record<string, string>,
  listIds?: number[]
) {
  await fetch(`${BREVO_API}/contacts`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      email,
      attributes: attributes ?? {},
      listIds: listIds ?? [],
      updateEnabled: true,
    }),
  });
}

export async function startSequence(
  email: string,
  sequenceName: SequenceName
) {
  // Ajouter le contact a la liste correspondante pour declencher
  // l'automation dans Brevo
  const listMap: Record<SequenceName, number> = {
    "cold-agence": 1,   // ID de la liste Brevo
    "followup-demo": 2,
    "win-back": 3,
  };

  await addContactToBrevo(email, {}, [listMap[sequenceName]]);
}

export async function pauseSequence(email: string) {
  // Retirer le contact de toutes les listes d'automation
  await fetch(`${BREVO_API}/contacts/${encodeURIComponent(email)}`, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify({ unlinkListIds: [1, 2, 3] }),
  });
}

export async function sendTransactional(
  templateId: number,
  to: string,
  params: Record<string, string>
) {
  const res = await fetch(`${BREVO_API}/smtp/email`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      templateId,
      to: [{ email: to }],
      params,
    }),
  });
  return res.ok;
}

/**
 * Convenience wrappers pour les emails transactionnels courants
 */

export function sendUploadReceived(email: string, address: string) {
  return sendTransactional(1, email, {
    ADDRESS: address,
    DELIVERY_TIME: "24h",
  });
}

export function sendDelivery(
  email: string,
  address: string,
  deliveryUrl: string
) {
  return sendTransactional(2, email, {
    ADDRESS: address,
    DELIVERY_URL: deliveryUrl,
  });
}

export function sendUploadReminder(email: string, address: string) {
  return sendTransactional(3, email, { ADDRESS: address });
}
