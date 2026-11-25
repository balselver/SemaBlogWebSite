// @ts-check
import { defineConfig, envField } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  // Ortam değişkenleri: tanımlı değilse derleme hata verir
  env: {
    schema: {
      // Web3Forms erişim anahtarı: herkese açık olabilir, formun hangi e-postaya gideceğini belirler
      PUBLIC_WEB3FORMS_KEY: envField.string({ context: 'client', access: 'public' }),
    },
  },
})