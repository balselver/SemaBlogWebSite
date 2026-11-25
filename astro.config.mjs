// @ts-check
import { defineConfig, envField } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  // Sitenin yayındaki adresi: kanonik adres, paylaşım görseli ve site haritası bunu kullanır
  // Alan adı alınınca yalnızca bu satır değişecek
   site: 'https://ssbweb.com.tr',

  integrations: [
    sitemap({
      // Demolar ve KVKK sayfası noindex: arama motorlarına önerilmez
      filter: (sayfa) => !sayfa.includes('/demolar/') && !sayfa.includes('/kvkk'),
    }),
  ],

  // Ortam değişkenleri: tanımlı değilse derleme hata verir
  env: {
    schema: {
      // Web3Forms erişim anahtarı: herkese açık olabilir, formun hangi e-postaya gideceğini belirler
      PUBLIC_WEB3FORMS_KEY: envField.string({ context: 'client', access: 'public' }),
    },
  },
})