// Berber randevu demosu: hayalî bir berberin hizmetleri (fiyatlar örnektir)
export interface BerberHizmeti {
  id: string
  ad: string
  // Dakika cinsinden süre
  sure: number
  fiyat: number
}

export const berberHizmetleri: BerberHizmeti[] = [
  { id: 'sac', ad: 'Saç kesimi', sure: 30, fiyat: 400 },
  { id: 'sakal', ad: 'Sakal tıraşı', sure: 20, fiyat: 250 },
  { id: 'sac-sakal', ad: 'Saç + sakal', sure: 45, fiyat: 600 },
  { id: 'cocuk', ad: 'Çocuk saç kesimi', sure: 20, fiyat: 300 },
  { id: 'cilt', ad: 'Cilt bakımı', sure: 30, fiyat: 450 },
]

// Çalışma saatleri (24 saat biçimi); kapalı gün: 0 = Pazar, Date.getDay() ile aynı sayı
export const calismaSaatleri = {
  acilis: 10,
  kapanis: 20,
  kapaliGun: 0,
}