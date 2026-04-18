import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [tailwind()],
  // GitHub Pages URL — se actualiza automáticamente si después comprás dominio propio
  site: 'https://bbocangel-ai.github.io',
  base: '/potrero-landing/',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
})
