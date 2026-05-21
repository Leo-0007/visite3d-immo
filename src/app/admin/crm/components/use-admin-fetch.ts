/**
 * Hook utilitaire pour les appels API admin
 * Recupere le token admin du cookie et l'envoie en header
 */

export function getAdminHeaders(): HeadersInit {
  // Cote client, lire le cookie
  const cookies = document.cookie.split(";").reduce(
    (acc, c) => {
      const [key, val] = c.trim().split("=");
      if (key && val) acc[key] = val;
      return acc;
    },
    {} as Record<string, string>
  );

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookies.admin_token ?? ""}`,
  };
}

export async function adminFetch<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, {
    ...options,
    headers: {
      ...getAdminHeaders(),
      ...(options?.headers ?? {}),
    },
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: "Unknown error" }));
    throw new Error(err.error ?? `HTTP ${res.status}`);
  }

  return res.json();
}
