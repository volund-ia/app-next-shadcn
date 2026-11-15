import type { NextConfig } from "next";

// O endereço público do App (APP_URL) muda por ambiente: na Prévia ele precisa
// poder carregar o servidor de desenvolvimento, senão o Next recusa o host.
const hostDoApp = (() => {
  try {
    return process.env.APP_URL ? new URL(process.env.APP_URL).hostname : null;
  } catch {
    return null;
  }
})();

const nextConfig: NextConfig = {
  // A Prévia é o App que a pessoa vê: sem o selo do Next no canto.
  devIndicators: false,
  ...(hostDoApp ? { allowedDevOrigins: [hostDoApp] } : {}),
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
