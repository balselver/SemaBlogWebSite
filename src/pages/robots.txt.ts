// botların siteye girince ilk okuduğu dosya
// /robots.txt: arama motoru botlarına kurallar ve site haritasının adresi
// .astro değil .ts: HTML sayfası değil, düz metin dosyası üreten bir endpoint
import type { APIRoute } from 'astro'

export const GET: APIRoute = ({ site }) => {
  // site: astro.config.mjs'teki adres, site haritasının mutlak adresi buradan üretilir
  const siteHaritasi = new URL('sitemap-index.xml', site)

  const metin = `User-agent: *
Allow: /

Sitemap: ${siteHaritasi.href}
`

  return new Response(metin, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}