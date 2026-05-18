"use client";

import { type ReactNode, lazy, Suspense } from "react";

// Lazy-load Lenis so it doesn't block the initial JS parse/execution.
// The smooth scroll enhancement is non-critical for first paint.
const ReactLenis = lazy(() =>
  import("lenis/react").then((m) => ({ default: m.ReactLenis }))
);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<>{children}</>}>
      <ReactLenis root options={{ lerp: 0.08, duration: 1.2 }}>
        {children}
      </ReactLenis>
    </Suspense>
  );
}
