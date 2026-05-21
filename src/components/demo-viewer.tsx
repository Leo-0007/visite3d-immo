"use client";

import { useState, useRef, useEffect } from "react";

export function DemoViewer({ src }: { src: string }) {
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (started || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [started]);

  return (
    <div ref={containerRef} className="relative" style={{ minHeight: 500 }}>
      {started ? (
        <div className="relative overflow-hidden w-full h-[500px] sm:h-[560px]">
          <iframe
            src={src}
            width="100%"
            height="100%"
            className="block w-full h-full"
            allow="fullscreen; xr-spatial-tracking"
            title="Visite 3D interactive - Appartement demo"
          />
          {/* Masquer le branding tiers en bas a droite */}
          <div className="absolute bottom-0 right-0 w-[220px] h-[50px] bg-gradient-to-l from-[#0a0f1c] via-[#0a0f1c]/95 to-transparent pointer-events-none z-10 flex items-center justify-end pr-3">
            <span className="text-[11px] font-medium text-white/30 tracking-wide">
              Visite3D Immo
            </span>
          </div>
          <div className="absolute bottom-0 left-0 w-[60px] h-[50px] bg-gradient-to-r from-[#0a0f1c] to-transparent pointer-events-none z-10" />
        </div>
      ) : (
        <button
          type="button"
          aria-label="Lancer la visite 3D interactive"
          onClick={() => setStarted(true)}
          className="w-full h-[500px] sm:h-[560px] flex flex-col items-center justify-center bg-[var(--v3d-warm-bg)] transition-opacity cursor-pointer"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--v3d-blue)]/10 ring-1 ring-[var(--v3d-blue)]/20 mb-6">
            <svg
              className="h-8 w-8 text-[var(--v3d-blue)] ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-lg font-semibold text-[var(--v3d-text)]">
            Cliquez pour explorer en 3D
          </p>
          <p className="mt-2 text-sm text-[var(--v3d-text-muted)] max-w-xs text-center">
            Maintenez le clic et deplacez la souris pour naviguer
            librement dans l&apos;appartement
          </p>
          {isVisible && (
            <link rel="preconnect" href="https://cloud.splatlabs.ai" />
          )}
        </button>
      )}
    </div>
  );
}
