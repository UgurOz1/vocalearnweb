# VocaLearn Web

VocaLearn web uygulaması - React + TypeScript + Vite ile geliştirilmiştir.

### 📝 Son Değişiklikler
- **Logo Düzeltmesi:** Logo dosyasının production ortamında görünmemesi sorunu giderildi. Logo `public/logo.png` konumuna taşındı ve statik referans kullanıldı.

## 🚀 GitHub Pages Deployment

Bu proje GitHub Pages üzerinde host edilmektedir.

**Canlı Demo:** https://vocalearnapp.com (Custom Domain)

**Alternatif:** https://uguros1.github.io/vocalearnweb/

### Custom Domain Yapılandırması

`public/CNAME` dosyası custom domain için gerekli yapılandırmayı içerir.

### SEO Dosyaları

- `public/robots.txt` - Arama motoru tarayıcıları için izinler
- `public/sitemap.xml` - Site haritası
- `index.html` - SEO meta tagları (Open Graph, Twitter Card)

### Otomatik Deployment

Proje, `main` branch'e push yapıldığında GitHub Actions ile otomatik olarak deploy edilir.

`.github/workflows/deploy.yml` dosyası deployment sürecini yönetir.

### Manuel Deployment

```bash
# Build al
npm run build

# dist klasörünü GitHub Pages'e deploy et
```

## 🛠️ Geliştirme

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build al
npm run build
```

## React Compiler



The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
