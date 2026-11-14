// Sitedeki içerik — rakamlar uygulamanın words_db.json dosyasından alındı (Kasım 2026)

export const STORE_LINKS = {
    ios: 'https://apps.apple.com/tr/app/id6758516433',
    android: 'https://play.google.com/store/apps/details?id=com.uguroz.vocalearn',
};

export const TOTAL_WORDS = 7463;

export type Level = {
    code: string;
    name: string;
    count: number;
    samples: [string, string][];
};

export const LEVELS: Level[] = [
    { code: 'A1', name: 'Başlangıç', count: 574, samples: [['breakfast', 'kahvaltı'], ['windy', 'rüzgarlı'], ['soup', 'çorba']] },
    { code: 'A2', name: 'Temel', count: 639, samples: [['contain', 'içermek'], ['traveller', 'gezgin'], ['apply', 'başvurmak']] },
    { code: 'B1', name: 'Orta', count: 506, samples: [['assist', 'yardım etmek'], ['process', 'süreç'], ['brand', 'marka']] },
    { code: 'B2', name: 'Orta üstü', count: 672, samples: [['exception', 'istisna'], ['preparation', 'hazırlık'], ['outfit', 'kıyafet']] },
    { code: 'C1', name: 'İleri', count: 978, samples: [['remarkable', 'dikkat çekici'], ['glance', 'kısa bakış'], ['commerce', 'ticaret']] },
    { code: 'C2', name: 'Ustalık', count: 270, samples: [['conundrum', 'bilmece'], ['chagrin', 'hayal kırıklığı'], ['grueling', 'çok yorucu']] },
    { code: 'TOEFL', name: 'Sınav', count: 3824, samples: [['misapprehend', 'yanlış anlamak'], ['streamlet', 'küçük dere'], ['adhesion', 'yapışma']] },
];

// Hero'daki dönen kelime kartı
export const HERO_WORDS: { en: string; tr: string; level: string }[] = [
    { en: 'empathy', tr: 'empati', level: 'B2' },
    { en: 'conundrum', tr: 'bilmece', level: 'C2' },
    { en: 'traveller', tr: 'gezgin', level: 'A2' },
    { en: 'remarkable', tr: 'dikkat çekici', level: 'C1' },
    { en: 'pave the way', tr: 'önünü açmak', level: 'C2' },
    { en: 'exception', tr: 'istisna', level: 'B2' },
];

// Kayan kelime şeridi
export const MARQUEE_TOP: [string, string][] = [
    ['grueling', 'çok yorucu'], ['household', 'eve ait'], ['chagrin', 'hayal kırıklığı'], ['assist', 'yardım etmek'],
    ['mountaineer', 'dağcı'], ['disposition', 'mizaç'], ['flour', 'un'], ['contend', 'uğraşmak'], ['windy', 'rüzgarlı'],
];

export const MARQUEE_BOTTOM: [string, string][] = [
    ['ambulate', 'dolaşmak'], ['preach', 'vaaz etmek'], ['labour', 'iş gücü'], ['crumbly', 'ufalanan'], ['amount', 'miktar'],
    ['summary', 'özet'], ['hiss', 'tıslamak'], ['mechanic', 'tamirci'], ['betroth', 'nişanlamak'],
];

export type Tour = {
    key: string;
    img: string;
    alt: string;
    kicker: string;
    title: string;
    body: string;
    points?: string[];
};

export const TOUR: Tour[] = [
    {
        key: 'home',
        img: '/screens/home.webp',
        alt: 'VocaLearn ana sayfa: günün kelimesi ve günlük hedef',
        kicker: 'Ana sayfa',
        title: 'Her gün bir kelime, küçük bir hedef.',
        body: 'Uygulamayı açtığında günün kelimesi seni bekliyor: telaffuzu, örnek cümlesi ve Türkçe karşılığıyla. Altında o günün hedefi ve görevlerin.',
        points: ['Sesli telaffuz', 'Günlük görevler', 'Seri takibi'],
    },
    {
        key: 'quiz',
        img: '/screens/quiz.webp',
        alt: 'VocaLearn quiz ekranı',
        kicker: 'Quiz',
        title: 'Süre işliyor, cevabı biliyor musun?',
        body: 'Seviyeni seç, dört şıktan doğru anlamı bul. Yanlış cevabın hemen yanında doğrusu görünür; her doğru cevap XP olarak hesabına yazılır.',
    },
    {
        key: 'library',
        img: '/screens/library.webp',
        alt: 'VocaLearn kelime kütüphanesi',
        kicker: 'Kelime kütüphanesi',
        title: '7.463 kelime, tek bir arama kutusunda.',
        body: 'A1’den C2’ye ve TOEFL’a kadar bütün kelimeler seviye ve kategoriyle birlikte. Dinle, ara, beğendiklerini kendi listene ekle.',
        points: ['Seviye etiketleri', 'Kendi listelerin', 'Flashcard'],
    },
    {
        key: 'story',
        img: '/screens/story.webp',
        alt: 'VocaLearn seviyeli hikaye okuma ekranı',
        kicker: 'Hikayeler',
        title: 'Kelimeyi cümlenin içinde gör.',
        body: 'Seviyene göre yazılmış kısa hikayeler. Altı çizili kelimeye dokununca anlamı açılır; hikayeyi bitirince kısa bir quiz ile pekiştirirsin.',
    },
    {
        key: 'games',
        img: '/screens/games.webp',
        alt: 'VocaLearn mini oyunlar ekranı',
        kicker: 'Mini oyunlar',
        title: 'Tekrar etmenin sıkıcı olmayan yolu.',
        body: 'Aynı kelimeleri farklı açılardan çalıştıran altı oyun. Her biri başka bir beceriye dokunuyor: hafıza, yazım, dinleme.',
        points: ['Kelime Dedektifi', 'Hafıza Kartları', 'Adam Asmaca', 'Harf Dizme', 'Dinleme Pratiği', 'Kelime Zinciri'],
    },
    {
        key: 'grammar',
        img: '/screens/grammar.webp',
        alt: 'VocaLearn gramer modu',
        kicker: 'Gramer',
        title: 'Kelimeler bir araya gelince.',
        body: 'Konu anlatımlı gramer dersleri, ardından gramer quizi ve karışık kelimelerden doğru cümleyi kurduğun alıştırmalar.',
    },
    {
        key: 'stats',
        img: '/screens/stats.webp',
        alt: 'VocaLearn istatistik ekranı',
        kicker: 'İstatistikler',
        title: 'Nerede güçlüsün, nerede değil?',
        body: 'Toplam soru, başarı oranı ve seviye bazında doğru yüzdelerin tek ekranda. Haftalık liderlik tablosunda diğer öğrencilerle yarışabilirsin.',
    },
];

export const STEPS = [
    {
        title: 'Seviyeni belirle',
        body: '10 soruluk kısa seviye testi nereden başlaman gerektiğini gösterir. Ardından günlük hedefini seçersin.',
    },
    {
        title: 'Her gün biraz',
        body: 'Günde birkaç dakika yeter. Quiz, oyun ve hikayeler aynı kelimeleri farklı yerlerden karşına çıkarır.',
    },
    {
        title: 'Seriyi bozma',
        body: 'Seri, XP ve seviye sistemi ilerlemeni görünür kılar. Seriyi kaçırırsan seri dondurma ile kurtarabilirsin.',
    },
];

export const COMPARISON: { feature: string; free: string | boolean; premium: string | boolean }[] = [
    { feature: 'Kelime kütüphanesi, quiz ve mini oyunlar', free: true, premium: true },
    { feature: 'Günün kelimesi, görevler ve seri', free: true, premium: true },
    { feature: 'Hikayeler', free: 'A1', premium: 'A1 – C2' },
    { feature: 'Gramer dersleri', free: 'A1', premium: 'A1 – C2' },
    { feature: 'Kendi kelime listelerin', free: '2 liste', premium: 'Sınırsız' },
    { feature: 'Can sistemi', free: '5 can, zamanla dolar', premium: 'Can derdi yok' },
    { feature: 'Reklamsız kullanım', free: false, premium: true },
];

export const FAQS = [
    {
        q: 'VocaLearn ücretsiz mi?',
        a: 'Evet. Kelime kütüphanesi, quizler, mini oyunlar ve günlük görevler ücretsiz. Premium; tüm seviyelerdeki hikaye ve gramer derslerini, sınırsız kelime listesini ve reklamsız kullanımı açar.',
    },
    {
        q: 'Hangi cihazlarda kullanabilirim?',
        a: 'VocaLearn iPhone için App Store’da, Android telefonlar için Google Play’de. Aynı hesapla giriş yaptığında ilerlemen cihazlar arasında senkronize olur.',
    },
    {
        q: 'Hangi seviyeler var?',
        a: 'Avrupa Ortak Çerçevesi’ne (CEFR) göre A1, A2, B1, B2, C1 ve C2 seviyeleri, bunlara ek olarak sınava hazırlananlar için ayrı bir TOEFL kelime seti.',
    },
    {
        q: 'Premium aboneliğimi nasıl iptal ederim?',
        a: 'Abonelikler App Store veya Google Play üzerinden yönetilir. İptal etmek için cihazının mağaza ayarlarındaki abonelikler bölümünü kullan; dönem bitmeden en az 24 saat önce iptal etmen gerekir.',
    },
    {
        q: 'Hesabımı ve verilerimi nasıl silerim?',
        a: 'Uygulama içindeki hesap ayarlarından ya da uguro9319@gmail.com adresine e-posta göndererek. Ayrıntılar Hesap Silme sayfasında.',
        link: { to: '/account-deletion', label: 'Hesap Silme sayfası' },
    },
];
