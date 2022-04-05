import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  buildOptions: {
    site: 'https://themelad.com', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: false, // Generate sitemap (set to "false" to disable)
  },
  integrations: [react()],
});
