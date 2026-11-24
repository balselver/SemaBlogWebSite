// Sektör demoları: 3. aşamada sayfaları yapıldıkça durum 'yayinda' olacak
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
    aciklama: 'Kategorili menü, Türkçe/İngilizce geçiş, fotoğraflı yemek kartları.',
    durum: 'hazirlaniyor',
    adres: '/demolar/qr-menu',
  },
  {
    sektor: 'Berber',
    baslik: 'Online randevu',
    aciklama: 'Hizmet ve saat seçimi, çalışma saatleri, tek dokunuşla arama.',
    durum: 'hazirlaniyor',
    adres: '/demolar/berber',
  },
  {
    sektor: 'Veteriner',
    baslik: 'Klinik tanıtım sitesi',
    aciklama: 'Hizmetler, acil hat, yol tarifi ve çalışma saatleri tek sayfada.',
    durum: 'hazirlaniyor',
    adres: '/demolar/veteriner',
  },
]