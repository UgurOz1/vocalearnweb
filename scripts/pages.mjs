// Build sonrası: her alt sayfa için dist/<sayfa>.html üretir.
// GitHub Pages /privacy isteğini privacy.html ile 200 koduyla karşılar
// (yoksa 404.html'e düşüp 404 kodu dönüyordu). İçerik yine React uygulamasıdır.
import { readFileSync, writeFileSync } from 'node:fs';

const SITE = 'https://vocalearnapp.com';
const pages = [
    { path: 'privacy', title: 'Gizlilik Politikası — VocaLearn' },
    { path: 'terms', title: 'Kullanım Koşulları — VocaLearn' },
    { path: 'account-deletion', title: 'Account and Data Deletion — VocaLearn' },
    { path: 'contact', title: 'İletişim — VocaLearn' },
];

const html = readFileSync('dist/index.html', 'utf8');

for (const p of pages) {
    const url = `${SITE}/${p.path}`;
    const out = html
        .replace(/<title>[^<]*<\/title>/, `<title>${p.title}</title>`)
        .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`)
        .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
        .replace(/(<meta name="twitter:url" content=")[^"]*"/, `$1${url}"`);
    writeFileSync(`dist/${p.path}.html`, out);
}

// Bilinmeyen adresler için (eskisi gibi) uygulama açılsın
writeFileSync('dist/404.html', html);
console.log(`Sayfa dosyaları üretildi: ${pages.map((p) => p.path).join(', ')}, 404`);
