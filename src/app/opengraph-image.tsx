import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Visite3D Immo — Visites 3D self-capture pour l'immobilier suisse";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0a0f1a 0%, #111827 50%, #0a0f1a 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient orb */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-2px",
            }}
          >
            Visite
          </span>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#60a5fa",
              letterSpacing: "-2px",
            }}
          >
            3D
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "40px",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Visites 3D self-capture pour l&apos;immobilier suisse
        </p>

        {/* Price badges */}
        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              padding: "12px 24px",
            }}
          >
            <span style={{ fontSize: "20px", color: "rgba(255,255,255,0.5)" }}>
              Des
            </span>
            <span style={{ fontSize: "32px", fontWeight: 700, color: "white" }}>
              49 CHF
            </span>
            <span style={{ fontSize: "20px", color: "rgba(255,255,255,0.5)" }}>
              / bien
            </span>
          </div>
        </div>

        {/* Features row */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "32px",
          }}
        >
          {["Livraison 24h", "Compatible Homegate", "Sans materiel pro"].map(
            (text) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#34d399",
                  }}
                />
                <span style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)" }}>
                  {text}
                </span>
              </div>
            )
          )}
        </div>

        {/* Swiss badge */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            right: "40px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          Fait en Suisse
        </div>
      </div>
    ),
    { ...size }
  );
}
