# PoolFab Türkiye - Deployment Rehberi

Bu rehber PoolFab Türkiye web sitesinin production'a deploy edilmesi için gerekli adımları içerir.

## 🚀 Hızlı Deployment

### 1. Vercel (Önerilen)

```bash
# Vercel CLI yükle
npm install -g vercel

# Deploy
vercel --prod

# Environment variables ayarla
vercel env add VITE_GA_MEASUREMENT_ID
vercel env add VITE_GTM_ID
```

### 2. Netlify

```bash
# Netlify CLI yükle
npm install -g netlify-cli

# Deploy
netlify deploy --prod

# Environment variables ayarla
netlify env:set VITE_GA_MEASUREMENT_ID "GA-XXXXXXXXX"
netlify env:set VITE_GTM_ID "GTM-XXXXXXX"
```

### 3. Docker

```bash
# Docker image oluştur
docker build -t poolfab-turkiye .

# Container çalıştır
docker run -p 3000:80 poolfab-turkiye

# Docker Compose ile
docker-compose up -d
```

## 🔧 Environment Variables

Aşağıdaki environment variables'ları production'da ayarlayın:

```env
# Google Analytics
VITE_GA_MEASUREMENT_ID=GA-XXXXXXXXX

# Google Tag Manager
VITE_GTM_ID=GTM-XXXXXXX

# Site Configuration
VITE_SITE_URL=https://poolfab.com.tr
VITE_SITE_NAME=PoolFab Türkiye

# Contact Information
VITE_CONTACT_PHONE=+90 212 123 45 67
VITE_CONTACT_EMAIL=info@poolfab.com.tr
VITE_CONTACT_ADDRESS=Maslak Mahallesi, Büyükdere Caddesi No:123, Sarıyer/İstanbul

# Social Media
VITE_FACEBOOK_URL=https://www.facebook.com/poolfabturkiye
VITE_INSTAGRAM_URL=https://www.instagram.com/poolfabturkiye
```

## 📁 Gerekli Dosyalar

### Resimler
Aşağıdaki klasörlere resimler eklenmelidir:

```
public/images/
├── pools/
│   ├── lpw-pool-1.jpg
│   ├── lpw-pool-2.jpg
│   ├── flexline-pool-1.jpg
│   └── flexline-pool-2.jpg
├── covrex/
│   ├── covrex-cover-1.jpg
│   └── covrex-cover-2.jpg
├── ofyr/
│   ├── ofyr-kitchen-1.jpg
│   └── ofyr-kitchen-2.jpg
└── showrooms/
    ├── istanbul-showroom-1.jpg
    └── ankara-showroom-1.jpg
```

### Favicon Dosyaları
```
public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
└── android-chrome-512x512.png
```

## 🔍 SEO Kontrol Listesi

### Google Search Console
1. [Google Search Console](https://search.google.com/search-console) hesabı oluştur
2. Site ekle: `https://poolfab.com.tr`
3. Sitemap gönder: `https://poolfab.com.tr/sitemap.xml`
4. robots.txt kontrol et: `https://poolfab.com.tr/robots.txt`

### Google Analytics
1. [Google Analytics](https://analytics.google.com) hesabı oluştur
2. Property oluştur: `poolfab.com.tr`
3. Measurement ID al: `GA-XXXXXXXXX`
4. Environment variable olarak ekle

### Google Tag Manager
1. [Google Tag Manager](https://tagmanager.google.com) hesabı oluştur
2. Container oluştur: `poolfab.com.tr`
3. Container ID al: `GTM-XXXXXXX`
4. Environment variable olarak ekle

## 📊 Performans Optimizasyonu

### Resim Optimizasyonu
```bash
# Resimleri optimize et
npm install -g imagemin-cli

# JPEG optimizasyonu
imagemin public/images/**/*.jpg --out-dir=public/images/optimized --plugin=imagemin-mozjpeg

# PNG optimizasyonu
imagemin public/images/**/*.png --out-dir=public/images/optimized --plugin=imagemin-pngquant
```

### Build Optimizasyonu
```bash
# Production build
pnpm build

# Build analizi
pnpm build --analyze

# Bundle size kontrol
pnpm build --report
```

## 🛡️ Güvenlik Kontrolleri

### SSL Sertifikası
- Let's Encrypt veya Cloudflare SSL kullanın
- HTTPS redirect ayarlayın
- HSTS headers ekleyin

### Security Headers
```nginx
# Nginx konfigürasyonu
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

## 📈 Monitoring

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com) ile site uptime'ını izleyin
- [Pingdom](https://www.pingdom.com) ile performans izleyin

### Error Tracking
- [Sentry](https://sentry.io) ile hata takibi
- [LogRocket](https://logrocket.com) ile kullanıcı deneyimi

## 🔄 CI/CD Pipeline

### GitHub Actions
```yaml
name: Deploy to Production
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '20'
      - run: pnpm install
      - run: pnpm build
      - run: pnpm deploy
```

## 📞 Destek

Deployment sırasında sorun yaşarsanız:

1. **Logs kontrol edin**: `pnpm dev` ile local test
2. **Build kontrol edin**: `pnpm build` ile production build
3. **Environment variables kontrol edin**: Tüm gerekli değişkenler ayarlı mı?
4. **DNS kontrol edin**: Domain doğru yönlendiriliyor mu?

---

**PoolFab Türkiye** - Premium Havuz Çözümleri 🏊‍♂️
