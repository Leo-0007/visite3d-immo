"use client";

import { useState } from "react";
import {
  Upload,
  Mail,
  Check,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { CONTACT_EMAIL } from "@/lib/constants";
import { FadeIn } from "@/components/animations";

type PackType = "solo" | "pack-immo" | "pack-agence" | "";
type FormStatus = "idle" | "submitting" | "success" | "error";

export function UploadContent() {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pack, setPack] = useState<PackType>("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const isValid = email.includes("@") && address.length > 3 && pack !== "";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;

    setStatus("submitting");

    // MVP : envoyer par mailto avec les infos pre-remplies
    // V2 : API route + Supabase + Uploadthing
    const subject = encodeURIComponent(
      `[UPLOAD] ${pack.toUpperCase()} - ${address}`
    );
    const body = encodeURIComponent(
      `Email client: ${email}\nAdresse du bien: ${address}\nPack: ${pack}\nNotes: ${notes || "Aucune"}\n\n---\nMerci d'envoyer votre video en reponse a cet email ou via WeTransfer.`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("success");
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-8">
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] text-[var(--v3d-text)]">
              Envoyez votre video
            </h1>
            <p className="mt-4 text-base text-[var(--v3d-text-muted)]">
              Remplissez le formulaire, puis envoyez votre video.
              On vous livre en 24h.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <SectionWrapper>
        <FadeIn>
          <div className="mx-auto max-w-lg">
            {status === "success" ? (
              <SuccessState email={email} address={address} />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-[var(--v3d-text-secondary)]"
                  >
                    Votre email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vous@exemple.ch"
                    className="w-full rounded-xl border border-[var(--v3d-warm-border)] bg-white px-4 py-3 text-sm text-[var(--v3d-text)] placeholder:text-[var(--v3d-text-muted)] outline-none focus:border-[var(--v3d-blue)]/40 focus:ring-1 focus:ring-[var(--v3d-blue)]/20 transition-all"
                  />
                </div>

                {/* Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="mb-1.5 block text-sm font-medium text-[var(--v3d-text-secondary)]"
                  >
                    Adresse du bien
                  </label>
                  <input
                    id="address"
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Rue de la Gare 12, 1000 Lausanne"
                    className="w-full rounded-xl border border-[var(--v3d-warm-border)] bg-white px-4 py-3 text-sm text-[var(--v3d-text)] placeholder:text-[var(--v3d-text-muted)] outline-none focus:border-[var(--v3d-blue)]/40 focus:ring-1 focus:ring-[var(--v3d-blue)]/20 transition-all"
                  />
                </div>

                {/* Pack select */}
                <div>
                  <label
                    htmlFor="pack"
                    className="mb-1.5 block text-sm font-medium text-[var(--v3d-text-secondary)]"
                  >
                    Pack commande
                  </label>
                  <select
                    id="pack"
                    required
                    value={pack}
                    onChange={(e) => setPack(e.target.value as PackType)}
                    className="w-full rounded-xl border border-[var(--v3d-warm-border)] bg-white px-4 py-3 text-sm text-[var(--v3d-text)] outline-none focus:border-[var(--v3d-blue)]/40 focus:ring-1 focus:ring-[var(--v3d-blue)]/20 transition-all appearance-none"
                  >
                    <option value="">
                      Selectionnez votre pack
                    </option>
                    <option value="solo">
                      Solo — 49 CHF
                    </option>
                    <option value="pack-immo">
                      Pack Immo — 89 CHF
                    </option>
                    <option value="pack-agence">
                      Pack Agence — 399 CHF
                    </option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label
                    htmlFor="notes"
                    className="mb-1.5 block text-sm font-medium text-[var(--v3d-text-secondary)]"
                  >
                    Informations supplementaires{" "}
                    <span className="text-[var(--v3d-text-muted)]">(optionnel)</span>
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Nombre de pieces, etage, particularites..."
                    className="w-full rounded-xl border border-[var(--v3d-warm-border)] bg-white px-4 py-3 text-sm text-[var(--v3d-text)] placeholder:text-[var(--v3d-text-muted)] outline-none focus:border-[var(--v3d-blue)]/40 focus:ring-1 focus:ring-[var(--v3d-blue)]/20 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!isValid || status === "submitting"}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full rounded-lg py-5 text-sm font-semibold transition-all",
                    isValid
                      ? "bg-[var(--v3d-blue)] text-white hover:bg-[#164060]"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  )}
                >
                  {status === "submitting" ? (
                    "Preparation..."
                  ) : (
                    <>
                      Continuer
                      <ArrowRight
                        className="ml-2 h-4 w-4"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </FadeIn>

        {/* Alternative */}
        <FadeIn delay={0.2}>
          <div className="mx-auto mt-10 max-w-lg border border-[var(--v3d-warm-border)] bg-[var(--v3d-warm-bg)] rounded-xl p-5">
            <div className="flex items-start gap-3">
              <AlertCircle
                className="mt-0.5 h-4 w-4 shrink-0 text-[var(--v3d-text-muted)]"
                aria-hidden="true"
              />
              <div className="text-sm text-[var(--v3d-text-muted)]">
                <p className="font-medium text-[var(--v3d-text-secondary)] mb-1">
                  Vous preferez envoyer directement ?
                </p>
                <p>
                  Envoyez votre video via{" "}
                  <a
                    href="https://wetransfer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--v3d-blue)] underline underline-offset-4 hover:text-[#164060]"
                  >
                    WeTransfer
                  </a>
                  {" "}a {CONTACT_EMAIL} avec en objet : [VOTRE EMAIL] - [ADRESSE DU BIEN]
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>
    </>
  );
}

function SuccessState({
  email,
  address,
}: {
  email: string;
  address: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
        <Check className="h-8 w-8 text-emerald-400" />
      </div>
      <h2 className="text-2xl font-bold text-[var(--v3d-text)]">Formulaire envoye !</h2>
      <p className="mt-3 text-sm text-[var(--v3d-text-secondary)]">
        Envoyez maintenant votre video en reponse a l&apos;email qui vient de
        s&apos;ouvrir, ou via WeTransfer a {CONTACT_EMAIL}.
      </p>

      <div className="mt-8 border border-[var(--v3d-warm-border)] bg-[var(--v3d-warm-bg)] rounded-xl p-5 text-left">
        <p className="text-xs text-[var(--v3d-text-muted)] uppercase tracking-[0.1em] mb-3">
          Recapitulatif
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-[var(--v3d-text-muted)]">Email</span>
            <span className="text-[var(--v3d-text-secondary)]">{email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[var(--v3d-text-muted)]">Adresse</span>
            <span className="text-[var(--v3d-text-secondary)]">{address}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <a
          href="/guide-capture"
          className={cn(
            buttonVariants({ size: "lg" }),
            "bg-[var(--v3d-blue)] hover:bg-[#164060] text-white text-sm font-semibold px-8 py-5 rounded-lg transition-all"
          )}
        >
          Voir le guide de capture
        </a>
        <a
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost", size: "lg" }),
            "border border-[var(--v3d-warm-border)] text-[var(--v3d-text-secondary)] hover:bg-[var(--v3d-warm-bg)] rounded-lg text-sm px-8 py-5 transition-all"
          )}
        >
          Retour a l&apos;accueil
        </a>
      </div>
    </div>
  );
}
