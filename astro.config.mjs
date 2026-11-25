// @ts-check
import { defineConfig, envField } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  // Ortam değişkenleri: tanımlı değilse derleme hata verir
  site: 'https://ssb.example',

    integrations: [
    sitemap({
      // Demolar ve KVKK sayfası noindex: arama motorlarına önerilmez
      filter: (sayfa) => !sayfa.includes('/demolar/') && !sayfa.includes('/kvkk'),
    }),
  ],
  env: {
    schema: {
      // Web3Forms erişim anahtarı: herkese açık olabilir, formun hangi e-postaya gideceğini belirler
      PUBLIC_WEB3FORMS_KEY: envField.string({ context: 'client', access: 'public' }),
    },
  },
})