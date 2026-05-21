import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white">
      {/* Back arrow */}
      <div className="absolute left-6 top-8 sm:left-10 sm:top-10">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-[var(--v3d-text-muted)] transition-colors duration-300 hover:text-[var(--v3d-text)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:-translate-x-1"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          Retour
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <p className="text-[clamp(8rem,20vw,14rem)] font-bold leading-none tracking-tight text-[var(--v3d-warm-border)]">
          404
        </p>

        <div className="-mt-8 sm:-mt-12">
          <h1 className="text-2xl font-bold tracking-[-0.02em] text-[var(--v3d-text)] sm:text-3xl">
            Page introuvable
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[var(--v3d-text-secondary)] sm:text-base">
            La page que vous cherchez n&apos;existe pas ou a été déplacée.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href="/"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-[var(--v3d-blue)] px-8 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#164060]"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/#tarifs"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-[var(--v3d-warm-border)] px-8 text-sm text-[var(--v3d-text-secondary)] transition-all duration-300 hover:bg-[var(--v3d-warm-bg)]"
          >
            Voir nos tarifs
          </Link>
        </div>
      </div>
    </div>
  );
}
