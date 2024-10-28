module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    "@jpmorganchase/mosaic-components",
    "@jpmorganchase/mosaic-content-editor-plugin",
    "@jpmorganchase/mosaic-labs-components",
    "@jpmorganchase/mosaic-layouts",
    "@jpmorganchase/mosaic-open-api-component",
    "@jpmorganchase/mosaic-site-components",
    "@jpmorganchase/mosaic-sitemap-component",
    "@jpmorganchase/mosaic-site-middleware",
    "@jpmorganchase/mosaic-theme",
    "@jpmorganchase/mosaic-store",
  ],
  async rewrites() {
    return {
      // These rewrites are checked after headers/redirects
      // and before all files including _next/public files which
      // allows overriding page files
      beforeFiles: [
        { source: "/favicon.ico", destination: "/img/favicon.png" },
        {
          source: "/getting-started/:path*",
          destination: "/salt/getting-started/:path*",
        },
        {
          source: "/components/:path*",
          destination: "/salt/components/:path*",
        },
        {
          source: "/support-and-contributions/:path*",
          destination: "/salt/support-and-contributions/:path*",
        },
      ],
      // These rewrites are checked after pages/public files
      // are checked but before dynamic routes
      afterFiles: [],
    };
  },
  images: {
    remotePatterns: [
      /** Insert the domains where you will load images from */
      /* https://nextjs.org/docs/messages/next-image-unconfigured-host */
    ],
  },
  webpack(config, { isServer }) {
    // Required by MDX-JS
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    for (const rule of config.module.rules) {
      if (rule.oneOf) {
        rule.oneOf.unshift({
          resourceQuery: /raw/,
          type: "asset/source",
        });
      }
    }

    return config;
  },
  env: {},
  async redirects() {
    return [
      {
        source: "/",
        destination: "/salt/index",
        permanent: true,
      },
      {
        source: "/salt",
        destination: "/salt/index",
        permanent: true,
      },
      {
        source: "/salt/theming/:slug*",
        destination: "/salt/themes/:slug*",
        permanent: true,
      },
    ];
  },
};
