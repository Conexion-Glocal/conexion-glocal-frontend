import { defineConfig } from 'astro/config';

import icon from "astro-icon";

import alpinejs from "@astrojs/alpinejs";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

import netlify from "@astrojs/netlify";

export default defineConfig({
  adapter: netlify(),
  integrations: [alpinejs(), icon(), tailwind()],
  output: 'server',
  prefetch: {
    defaultStrategy: 'tap'
  },
  security: {
    checkOrigin: true
  },
  site: 'http://localhost:4321'
});