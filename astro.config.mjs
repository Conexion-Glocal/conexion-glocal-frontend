import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import alpinejs from "@astrojs/alpinejs";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";

export default defineConfig({
  adapter: node({
    mode: "standalone"
  }),
  integrations: [alpinejs(), icon(), tailwind(), db()],
  output: 'server',
  prefetch: {
    defaultStrategy: 'tap'
  },
  security: {
    checkOrigin: true
  },
  site: 'http://190.121.154.52:4231'
});