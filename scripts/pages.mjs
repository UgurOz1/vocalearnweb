// Build sonrası: her sayfanın HTML'ini önceden üretir (prerender).
// - React uygulaması build'de bir kez çalıştırılır, çıkan HTML #root'un içine yazılır.
//   Tarayıcıda main.tsx bu HTML'i devralır (hydrate); görünüm aynı kalır.
// - Her sayfa kendi başlık, açıklama ve canonical adresini alır.
// - GitHub Pages /privacy isteğini privacy.html ile 200 koduyla karşılar.
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const SITE = 'https://vocalearnapp.com';
const IOS = 'https://apps.apple.com/tr/app/id6758516433';
const ANDROID = 'https://play.google.com/store/apps/details?id=com.uguroz.vocalearn';

const HOME_DESC =
    'Quiz, mini oyun ve hikayelerle 7.463 İngilizce kelimeyi Türkçe karşılıklarıyla öğren. A1–C2 ve TOEFL. App Store ve Google Play\'de ücretsiz.';

const pages = [
    { route: '/', file: 'index.html', title: 'VocaLearn — İngilizce kelimeleri ezberlemeden öğren', desc: HOME_DESC },
    { route: '/privacy', file: 'privacy.html', title: 'Gizlilik Politikası — VocaLearn', desc: 'VocaLearn uygulamasının hangi verileri topladığı, nasıl kullandığı ve koruduğu.' },
    { route: '/terms', file: 'terms.html', title: 'Kullanım Koşulları — VocaLearn', desc: 'VocaLearn uygulaması ve web sitesinin kullanım koşulları.' },
    { route: '/account-deletion', file: 'account-deletion.html', title: 'Account and Data Deletion — VocaLearn', desc: 'How to request deletion of your VocaLearn account and associated data.' },
    { route: '/contact', file: 'contact.html', title: 'İletişim — VocaLearn', desc: 'VocaLearn ile ilgili soru, öneri ve destek talepleri için iletişim bilgileri.' },
];

// Google için uygulama bilgisi (yalnızca ana sayfada)
const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'MobileApplication',
            name: 'VocaLearn',
            description: HOME_DESC,
            url: `${SITE}/`,
            image: `${SITE}/og-image.png`,
            applicationCategory: 'EducationalApplication',
            operatingSystem: 'iOS, Android',
            inLanguage: 'tr',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
            downloadUrl: [IOS, ANDROID],
            sameAs: [IOS, ANDROID],
        },
        {
            '@type': 'WebSite',
            name: 'VocaLearn',
            url: `${SITE}/`,
            inLanguage: 'tr',
        },
    ],
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const template = readFileSync('dist/index.html', 'utf8');
const { render } = await import(pathToFileURL('dist-ssr/entry-server.js').href);

for (const p of pages) {
    const url = p.route === '/' ? `${SITE}/` : `${SITE}${p.route}`;
    let out = template
        .replace(/<title>[^<]*<\/title>/, `<title>${esc(p.title)}</title>`)
        .replace(/(<meta name="description" content=")[^"]*"/, `$1${esc(p.desc)}"`)
        .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
        .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
        .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${esc(p.title)}"`)
        .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${esc(p.desc)}"`)
        .replace(/(<meta name="twitter:url" content=")[^"]*"/, `$1${url}"`)
        .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${esc(p.title)}"`)
        .replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${esc(p.desc)}"`)
        .replace('<div id="root"></div>', `<div id="root">${render(p.route)}</div>`);

    if (p.route === '/') {
        out = out.replace('</head>', `  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n  </head>`);
    }
    writeFileSync(`dist/${p.file}`, out);
}

// Bilinmeyen adresler: 404 koduyla ana sayfa uygulaması açılsın
writeFileSync('dist/404.html', readFileSync('dist/index.html', 'utf8').replace(/<link rel="canonical"[^>]*>\s*/, ''));

rmSync('dist-ssr', { recursive: true, force: true });
console.log(`Prerender tamam: ${pages.map((p) => p.route).join(', ')} + 404`);
