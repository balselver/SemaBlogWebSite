// Sektör demoları: sayfası hazır olanlar 'yayinda'
export interface Demo {
  sektor: string
  baslik: string
  aciklama: string
  // Yalnızca bu iki değerden biri olabilir
  durum: 'hazirlaniyor' | 'yayinda'
  // Demo sayfasının adresi
  adres: string
}

export const demolar: Demo[] = [
  {
    sektor: 'Lokanta',
    baslik: 'İki dilli QR menü',
    aciklama: 'Kategorili menü, Türkçe/İngilizce geçiş, tek dokunuşla kategoriye atlama.',
    durum: 'yayinda',
    adres: '/demolar/qr-menu',
  },
  {
    sektor: 'Berber',
    baslik: 'Online randevu',
    aciklama: 'Hizmet, gün ve saat seçimi; dolu saatler kapalı, anında onay.',
    durum: 'yayinda',
    adres: '/demolar/berber',
  },
  {
    sektor: 'Veteriner',
    baslik: 'Klinik tanıtım sitesi',
    aciklama: 'Hizmetler, anlık açık/kapalı durumu, çalışma saatleri ve sık sorulan sorular.',
    durum: 'yayinda',
    adres: '/demolar/veteriner',
  },
]