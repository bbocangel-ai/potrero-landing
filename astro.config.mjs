import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://potrerolatam.com',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
})
