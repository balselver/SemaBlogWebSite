// Veteriner demosu: hayalî bir kliniğin hizmetleri, saatleri ve sık sorulan soruları
export interface VetHizmeti {
  baslik: string
  aciklama: string
}

export interface CalismaAraligi {
  acilis: string
  kapanis: string
}

export interface Soru {
  soru: string
  cevap: string
}

export const vetHizmetleri: VetHizmeti[] = [
  { baslik: 'Muayene ve aşı', aciklama: 'Genel sağlık kontrolü, iç-dış parazit uygulaması ve karma aşılar.' },
  { baslik: 'Kısırlaştırma', aciklama: 'Kedi ve köpeklerde güvenli anestezi eşliğinde kısırlaştırma.' },
  { baslik: 'Diş bakımı', aciklama: 'Diş taşı temizliği ve ağız sağlığı kontrolü.' },
  { baslik: 'Laboratuvar ve görüntüleme', aciklama: 'Kan tahlili, ultrason ve röntgenle hızlı teşhis.' },
  { baslik: 'Mikroçip ve pasaport', aciklama: 'Mikroçip uygulaması ve yurt dışı seyahat belgeleri.' },
  { baslik: 'Pet kuaför', aciklama: 'Yıkama, tüy kesimi ve tırnak bakımı.' },
]

// Gün adları ve saatler Date.getDay() sırasıyla: 0 = Pazar … 6 = Cumartesi
export const gunAdlari = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']

// null = o gün kapalı
export const vetSaatleri: (CalismaAraligi | null)[] = [
  null,
  { acilis: '09:00', kapanis: '19:00' },
  { acilis: '09:00', kapanis: '19:00' },
  { acilis: '09:00', kapanis: '19:00' },
  { acilis: '09:00', kapanis: '19:00' },
  { acilis: '09:00', kapanis: '19:00' },
  { acilis: '10:00', kapanis: '17:00' },
]

export const sss: Soru[] = [
  {
    soru: 'Randevusuz gelebilir miyim?',
    cevap: 'Evet, ancak randevulu hastalara öncelik verilir. Beklememek için önceden randevu almanızı öneririz.',
  },
  {
    soru: 'Hangi hayvanlara bakıyorsunuz?',
    cevap: 'Kedi, köpek, kuş ve küçük memeliler (tavşan, hamster, guinea pig).',
  },
  {
    soru: 'Aşı takvimini nasıl takip ederim?',
    cevap: 'İlk muayenede dostunuza bir aşı karnesi açıyoruz ve bir sonraki aşı tarihini SMS ile hatırlatıyoruz.',
  },
  {
    soru: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
    cevap: 'Nakit ve tüm kredi kartları; büyük işlemlerde taksit imkânı vardır.',
  },
]