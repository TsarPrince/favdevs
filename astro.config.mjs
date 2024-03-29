import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { sanityIntegration } from "@sanity/astro";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://favdevs.vercel.app/",
  image: {
    domains: ["source.unsplash.com", "images.unsplash.com"],
  },
  output: "server",
  adapter: vercel(),
  integrations: [
    tailwind(),
    mdx(),
    icon(),
    sitemap(),
    sanityIntegration({
      projectId: "btb9magv",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: true,
      studioBasePath: "/admin",
    }),
    react(),
  ],
});
