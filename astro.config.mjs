// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://songdieu.vn',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [sitemap({ filter: (p) => !p.includes('/lp/'), serialize: (i) => ({ ...i, lastmod: new Date().toISOString() }) })],
  image: { layout: 'constrained' },
  vite: { plugins: [tailwindcss()] },
});