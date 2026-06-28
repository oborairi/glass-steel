# Glass Steel Mühendislik — Kurumsal Web Sitesi

Next.js 14 + Tailwind CSS + Framer Motion ile geliştirilmiş, açık/koyu mod destekli kurumsal web sitesi.

## Özellikler
- Açık / koyu mod (tercih hatırlanır)
- Elimko tarzı mega menü (açılır alt menüler)
- Video açılış animasyonu (public/intro.mp4)
- Sayfalar: Anasayfa, Kurumsal, Hizmetler, Projeler, Referanslar, İletişim
- Tamamen responsive (mobil uyumlu)
- Framer Motion ile yumuşak animasyonlar

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda http://localhost:3000 adresini açın.

## Yayına Alma (Vercel)

1. Projeyi GitHub'a yükleyin
2. vercel.com'da GitHub ile giriş yapın
3. "Add New Project" → repo'yu seçin → Deploy
4. Settings → Domains → www.glass-steel.com.tr ekleyin

## Metin / İçerik Düzenleme

İçerikler şu dosyalarda:
- Menü yapısı: `lib/navigation.ts`
- Anasayfa bölümleri: `components/sections/`
- Sayfa içerikleri: `app/[sayfa]/page.tsx`

## Tema Renkleri

`app/globals.css` içindeki `:root` (açık) ve `.dark` (koyu) bloklarından
renk değişkenlerini düzenleyebilirsiniz. Ana vurgu rengi: `--accent`
