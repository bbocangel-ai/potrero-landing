import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://potrero.vercel.app',
  build: {
    inlineStylesheets: 'auto',
  },
})
