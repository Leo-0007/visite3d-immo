/**
 * Telegram Bot API — Alertes commerciales temps reel
 *
 * Env vars : TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
 */

async function sendMessage(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "HTML",
    }),
  });
}

export function alertNewUpload(address: string, pack: string, email: string) {
  return sendMessage(
    `<b>Nouvelle video recue</b>\n\n` +
      `Adresse: ${address}\n` +
      `Pack: ${pack}\n` +
      `Email: ${email}\n\n` +
      `Livraison a effectuer dans 24h.`
  );
}

export function alertNewPayment(amount: string, pack: string, email: string) {
  return sendMessage(
    `<b>Nouveau paiement</b>\n\n` +
      `Montant: ${amount} CHF\n` +
      `Pack: ${pack}\n` +
      `Email: ${email}`
  );
}

export function alertHotLead(
  company: string,
  score: number,
  action: string
) {
  return sendMessage(
    `<b>Lead chaud</b>\n\n` +
      `Entreprise: ${company}\n` +
      `Score: ${score}/100\n` +
      `Action: ${action}`
  );
}

export function alertDeliveryDue(address: string, email: string, hours: number) {
  return sendMessage(
    `<b>Livraison a effectuer</b>\n\n` +
      `Adresse: ${address}\n` +
      `Client: ${email}\n` +
      `Delai restant: ${hours}h`
  );
}
