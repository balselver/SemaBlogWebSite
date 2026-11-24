// Ana sayfadaki hizmet kartları: metni değiştirmek için yalnızca bu dosyayı düzenleyin
export interface Hizmet {
  baslik: string
  aciklama: string
  // Kartın altında: bu hizmet en çok kimin işine yarar
  kimler: string
}

export const hizmetler: Hizmet[] = [
  {
    baslik: 'Tanıtım sitesi',
    aciklama: 'İşletmenizi, hizmetlerinizi ve adresinizi anlatan, telefonda hızlı açılan modern bir site.',
    kimler: 'Her işletme',
  },
  {
    baslik: 'QR menü',
    aciklama: 'Masadaki QR kodla açılan, Türkçe ve İngilizce, fiyatları kolayca güncellenen dijital menü.',
    kimler: 'Lokanta · kafe · pastane',
  },
  {
    baslik: 'Online randevu',
    aciklama: 'Müşterileriniz uygun saati kendisi seçsin; telefon trafiği azalsın, boş koltuk kalmasın.',
    kimler: 'Berber · kuaför · klinik',
  },
  {
    baslik: "Google'da görünürlük",
    aciklama: 'Google İşletme Profili, harita kaydı ve temel SEO ile "yakınımdaki" aramalarında çıkın.',
    kimler: 'Yeni açılan işletmeler',
  },
  {
    baslik: 'Özel yazılım',
    aciklama: 'Stok, sipariş ya da müşteri takibi için işletmenize özel, üye girişli yönetim paneli.',
    kimler: 'Mağaza · atölye · depo',
  },
  {
    baslik: 'Bakım ve güncelleme',
    aciklama: 'Yayından sonra metin, fotoğraf ve fiyat değişiklikleri; alan adı ve barındırma takibi.',
    kimler: 'Sitesi olan işletmeler',
  },
]