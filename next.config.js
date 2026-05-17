/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 60 * 60 * 24, // 24 hours
        dangerouslyAllowSVG: true,
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
        domains: ["localhost", "taamco.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "taamco.com",
            },
        ],
    },
    // Reduce JavaScript bundle size
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    experimental: {
        optimizePackageImports: ["@mantine/core", "@mantine/hooks"]
    },
    // Enable gzip compression
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,

    // Add resource hints and preloads
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    {
                        key: "Link",
                        // Preload critical assets
                        value: `
              </assets/fonts/cairo.woff2>; rel=preload; as=font; crossorigin,
              </assets/logo-192x192.png>; rel=preload; as=image
            `
                            .replace(/\s+/g, " ")
                            .trim(),
                    },
                    // Cache control for static assets
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
