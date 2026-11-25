// public/ için PNG görselleri üretir: iPhone simgesi ve paylaşım görseli
// Çalıştırma: npm run gorseller (proje kök klasöründe)
import sharp from 'sharp'

// Marka renkleri (global.css ile aynı)
const renk = {
  orman: '#0F3D2E',
  yaprak: '#1E8A55',
  filiz: '#4BD68A',
  nane: '#F1F5F0',
  koyuKenar: '#2F6B52',
  acikYazi: '#A9CDBA',
}

// Yazı tipleri: bilgisayarda kurulu olanı kullanılır, yoksa sıradakine geçilir
const kodYazi = "'JetBrains Mono', Consolas, 'Courier New', monospace"
const govdeYazi = "'Space Grotesk', 'Segoe UI', Arial, sans-serif"

// 180×180 iPhone ana ekran simgesi: köşeleri iOS kendisi yuvarlar, saydamlık kullanılmaz
const appleSimge = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="${renk.orman}" />
  <polygon points="50,10 84.6,30 84.6,70 50,90 15.4,70 15.4,30" fill="${renk.yaprak}" />
  <text x="50" y="63" text-anchor="middle" font-family="${kodYazi}" font-weight="700" font-size="39" fill="#FFFFFF">s</text>
</svg>`

// 1200×630 paylaşım görseli: koyu zemin, logonun koyu sürümü, iki satır yazı
const paylasimGorseli = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${renk.orman}" />

  <!-- Logo: Logo.astro ile aynı çizim, 2 kat büyütülmüş -->
  <g transform="translate(96 90) scale(2)">
    <path d="M42 6H214M42 94H214" fill="none" stroke="${renk.koyuKenar}" stroke-width="5" stroke-linecap="round" />
    <polyline points="42,6 16,50 42,94" fill="none" stroke="${renk.filiz}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
    <polyline points="214,6 240,50 214,94" fill="none" stroke="${renk.filiz}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" />
    <text x="112" y="67" text-anchor="middle" font-family="${kodYazi}" font-size="50" font-weight="700" fill="#FFFFFF">ssb</text>
    <line x1="196" y1="28" x2="180" y2="72" stroke="${renk.filiz}" stroke-width="8" stroke-linecap="round" />
  </g>

  <text x="128" y="400" font-family="${govdeYazi}" font-size="50" font-weight="700" fill="${renk.nane}">Kayseri'deki işletmelere web sitesi</text>
  <text x="128" y="460" font-family="${kodYazi}" font-size="28" fill="${renk.acikYazi}">Tanıtım sitesi · QR menü · Online randevu</text>

  <!-- Alt kenarda marka yeşili şerit -->
  <rect y="606" width="1200" height="24" fill="${renk.yaprak}" />
</svg>`

// Her SVG'yi PNG'ye çevirip public klasörüne yaz
const gorseller = [
  { dosya: 'public/apple-touch-icon.png', svg: appleSimge },
  { dosya: 'public/og-gorsel.png', svg: paylasimGorseli },
]

for (const { dosya, svg } of gorseller) {
  await sharp(Buffer.from(svg)).png().toFile(dosya)
  console.log(`✓ ${dosya}`)
}