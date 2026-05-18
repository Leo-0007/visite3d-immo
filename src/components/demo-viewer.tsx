"use client";

import { useState, useRef, useEffect } from "react";

export function DemoViewer({ src }: { src: string }) {
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Only start observing visibility when not yet started
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
        <iframe
          src={src}
          width="100%"
          height="500"
          className="block w-full sm:h-[560px]"
          allow="fullscreen; xr-spatial-tracking"
          title="Visite 3D interactive - Appartement demo"
        />
      ) : (
        <button
          type="button"
          aria-label="Lancer la visite 3D interactive"
          onClick={() => setStarted(true)}
          className="w-full h-[500px] sm:h-[560px] flex flex-col items-center justify-center bg-[#0a0f1c] transition-opacity cursor-pointer"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/20 ring-1 ring-blue-400/30 mb-6">
            <svg
              className="h-8 w-8 text-blue-400 ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-lg font-semibold text-white">
            Cliquez pour explorer en 3D
          </p>
          <p className="mt-2 text-sm text-white/30 max-w-xs text-center">
            Maintenez le clic et deplacez la souris pour naviguer
            librement dans l&apos;appartement
          </p>
          {/* Preconnect to splatlabs when the section becomes visible */}
          {isVisible && (
            <link rel="preconnect" href="https://cloud.splatlabs.ai" />
          )}
        </button>
      )}
    </div>
  );
}
