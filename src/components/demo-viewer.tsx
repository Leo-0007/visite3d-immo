"use client";

import { useState } from "react";

export function DemoViewer({ src }: { src: string }) {
  const [started, setStarted] = useState(false);

  return (
    <div className="relative">
      <iframe
        src={src}
        width="100%"
        height="500"
        className="block w-full sm:h-[560px]"
        allow="fullscreen; xr-spatial-tracking"
        loading="lazy"
      />
      {!started && (
        <button
          onClick={() => setStarted(true)}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0a0f1c]/80 backdrop-blur-sm transition-opacity cursor-pointer"
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
            Maintenez le clic et déplacez la souris pour naviguer
            librement dans l&apos;appartement
          </p>
        </button>
      )}
    </div>
  );
}
