import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Inline Tailwind CSS into <style> tags -- eliminates the render-blocking
  // CSS <link> request. Ideal for atomic CSS (small bundles) + first-visit LCP.
  experimental: {
    inlineCss: true,
  },

  // Security + performance headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Preconnect to external origins used on the page
          {
            key: "Link",
            value: [
              "<https://cloud.splatlabs.ai>; rel=preconnect",
              "<https://buy.stripe.com>; rel=preconnect",
            ].join(", "),
          },
          // Security headers
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
