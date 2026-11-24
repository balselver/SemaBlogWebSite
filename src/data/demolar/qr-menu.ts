// QR menü demosu: hayalî bir lokantanın iki dilli menüsü (fiyatlar örnektir)
export interface Metin {
  tr: string
  en: string
}

// Ürün etiketleri: yalnızca bu iki değer olabilir
export type Etiket = 'aci' | 'vejetaryen'

export interface Urun {
  ad: Metin
  aciklama: Metin
  fiyat: number
  etiketler?: Etiket[]
}

export interface Kategori {
  // Sayfa içi bağlantı için: #corbalar
  id: string
  ad: Metin
  urunler: Urun[]
}

// Etiketlerin ekranda görünen adları
export const etiketAdlari: Record<Etiket, Metin> = {
  aci: { tr: 'Acı', en: 'Spicy' },
  vejetaryen: { tr: 'Vejetaryen', en: 'Vegetarian' },
}

export const kategoriler: Kategori[] = [
  {
    id: 'corbalar',
    ad: { tr: 'Çorbalar', en: 'Soups' },
    urunler: [
      {
        ad: { tr: 'Mercimek çorbası', en: 'Red lentil soup' },
        aciklama: { tr: 'Limon ve kıtır ekmekle', en: 'With lemon and croutons' },
        fiyat: 120,
        etiketler: ['vejetaryen'],
      },
      {
        ad: { tr: 'Yayla çorbası', en: 'Yogurt and mint soup' },
        aciklama: { tr: 'Yoğurt, pirinç ve kuru nane', en: 'Yogurt, rice and dried mint' },
        fiyat: 120,
        etiketler: ['vejetaryen'],
      },
    ],
  },
  {
    id: 'yoresel',
    ad: { tr: 'Yöresel', en: 'Kayseri specials' },
    urunler: [
      {
        ad: { tr: 'Kayseri mantısı', en: 'Kayseri manti' },
        aciklama: {
          tr: 'El açması minik mantı, sarımsaklı yoğurt ve tereyağlı sos',
          en: 'Tiny hand-made dumplings with garlic yogurt and butter sauce',
        },
        fiyat: 320,
      },
      {
        ad: { tr: 'Yağlama', en: 'Yaglama' },
        aciklama: {
          tr: 'Kat kat yufka arasında baharatlı kıyma',
          en: 'Layers of thin flatbread with spiced minced meat',
        },
        fiyat: 340,
      },
      {
        ad: { tr: 'Pastırmalı humus', en: 'Hummus with pastirma' },
        aciklama: {
          tr: 'Sıcak humus üzerinde tereyağında Kayseri pastırması',
          en: 'Warm hummus topped with Kayseri pastirma sautéed in butter',
        },
        fiyat: 280,
      },
    ],
  },
  {
    id: 'kebaplar',
    ad: { tr: 'Kebaplar', en: 'Kebabs' },
    urunler: [
      {
        ad: { tr: 'Adana kebap', en: 'Adana kebab' },
        aciklama: {
          tr: 'Acılı zırh kıyması, közlenmiş biber ve domatesle',
          en: 'Spicy hand-minced lamb with roasted pepper and tomato',
        },
        fiyat: 380,
        etiketler: ['aci'],
      },
      {
        ad: { tr: 'Kuzu şiş', en: 'Lamb shish' },
        aciklama: {
          tr: 'Marine kuzu but, bulgur pilavı eşliğinde',
          en: 'Marinated leg of lamb, served with bulgur pilaf',
        },
        fiyat: 420,
      },
      {
        ad: { tr: 'Tavuk şiş', en: 'Chicken shish' },
        aciklama: {
          tr: 'Yoğurtlu marine, közlenmiş sebzelerle',
          en: 'Yogurt-marinated chicken with roasted vegetables',
        },
        fiyat: 300,
      },
    ],
  },
  {
    id: 'tatlilar',
    ad: { tr: 'Tatlılar', en: 'Desserts' },
    urunler: [
      {
        ad: { tr: 'Künefe', en: 'Kunefe' },
        aciklama: { tr: 'Antep fıstıklı, sıcak servis', en: 'With pistachios, served hot' },
        fiyat: 210,
        etiketler: ['vejetaryen'],
      },
      {
        ad: { tr: 'Fırın sütlaç', en: 'Baked rice pudding' },
        aciklama: { tr: 'Tarçın ile', en: 'With cinnamon' },
        fiyat: 150,
        etiketler: ['vejetaryen'],
      },
    ],
  },
  {
    id: 'icecekler',
    ad: { tr: 'İçecekler', en: 'Drinks' },
    urunler: [
      {
        ad: { tr: 'Ayran', en: 'Ayran' },
        aciklama: { tr: 'Köpüklü yayık ayranı', en: 'Frothy yogurt drink' },
        fiyat: 50,
      },
      {
        ad: { tr: 'Çay', en: 'Turkish tea' },
        aciklama: { tr: 'İnce belli bardakta', en: 'Served in a tulip glass' },
        fiyat: 25,
      },
      {
        ad: { tr: 'Türk kahvesi', en: 'Turkish coffee' },
        aciklama: { tr: 'Lokum ile', en: 'Served with Turkish delight' },
        fiyat: 90,
      },
    ],
  },
]