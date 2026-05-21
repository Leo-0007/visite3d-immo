import { CONTACT_EMAIL } from "@/lib/constants";

const productLinks = [
  { label: "Demo", href: "#demo" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Portails", href: "#portails" },
  { label: "Guide de capture", href: "/guide-capture" },
  { label: "Envoyer", href: "/envoyer" },
];

const legalLinks = [
  { label: "CGV", href: "/cgv" },
  { label: "Confidentialite", href: "/confidentialite" },
];

export function Footer() {
  return (
    <footer className="bg-[#0B1120] pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-bold tracking-[-0.02em] text-white">
              Visite<span className="text-blue-400">3D</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/40">
              Visites 3D navigables pour l&apos;immobilier suisse
            </p>
            <p className="mt-3 text-xs text-white/20">
              Un service SwissEmpire2 S{"à"}rl
            </p>

            {/* Portal compatibility badges */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-white/35">
                Homegate
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-white/35">
                ImmoScout24
              </span>
            </div>
          </div>

          {/* Produit */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
              Produit
            </p>
            <ul className="mt-4 space-y-1">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block py-1 text-sm text-white/30 transition-colors hover:text-white/70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
              L{"é"}gal
            </p>
            <ul className="mt-4 space-y-1">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block py-1 text-sm text-white/30 transition-colors hover:text-white/70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
              Contact
            </p>
            <ul className="mt-4 space-y-1">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-white/30 transition-colors hover:text-white/70"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-12 mb-6 h-px bg-white/[0.06]" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2 text-xs text-white/20 sm:flex-row">
          <p>
            &copy; 2024&ndash;2026 SwissEmpire2 S{"à"}rl &middot;{" "}
            <span aria-label="Suisse">&#127464;&#127469;</span> Moutier, Suisse
          </p>
          <p>Tous droits r{"é"}serv{"é"}s</p>
        </div>
      </div>
    </footer>
  );
}
