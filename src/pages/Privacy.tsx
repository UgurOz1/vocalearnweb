
import { motion } from 'framer-motion';

const Privacy = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '5rem', color: 'white' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ maxWidth: '900px', margin: '0 auto' }}
            >
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Gizlilik Politikası</h1>
                <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>

                <div style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                    <p style={{ marginBottom: '2rem' }}>
                        VocaLearn ("biz", "bizim" veya "VocaLearn") olarak gizliliğinize büyük önem veriyoruz. Bu Gizlilik Politikası, VocaLearn mobil uygulamasını ve hizmetlerini kullandığınızda verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
                    </p>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>1. Topladığımız Bilgiler</h2>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#a5b4fc' }}>1.1. Sağladığınız Bilgiler:</h3>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Hesap Bilgileri:</strong> Google veya Apple ile giriş yaptığınızda sağladığınız ad, soyad ve e-posta adresi.</li>
                            <li><strong>Profil Verileri:</strong> Uygulama içinde düzenleyebileceğiniz kullanıcı adı ve profil fotoğrafı.</li>
                            <li><strong>Kullanıcı İçeriği:</strong> Oluşturduğunuz özel kelime listeleri ve çalışma notları (bulut tabanlı senkronizasyon için saklanır).</li>
                        </ul>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#a5b4fc' }}>1.2. Otomatik Toplanan Veriler:</h3>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Kullanım Verileri:</strong> Öğrenme ilerlemeniz, tamamlanan kelimeler, sınav skorları ve uygulama içi etkileşimleriniz.</li>
                            <li><strong>Cihaz Bilgileri:</strong> Cihaz modeli, işletim sistemi sürümü, IP adresi ve cihaz tanımlayıcıları (IDFA/AAID).</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>2. Üçüncü Taraf Servisler ve Veri Paylaşımı</h2>
                        <p style={{ marginBottom: '1rem' }}>
                            Hizmet kalitemizi artırmak ve operasyonlarımızı sürdürmek için şu güvenilir iş ortaklarıyla çalışıyoruz:
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Firebase (Google):</strong> Uygulama veritabanı (Firestore), kullanıcı kimlik doğrulama (Auth) ve hata raporlama (Crashlytics) için kullanılır.</li>
                            <li><strong>Google AdMob:</strong> Uygulama içinde reklam sunmak için kullanılır. AdMob, size kişiselleştirilmiş reklamlar göstermek için cihazınızın reklam tanımlayıcısını (IDFA) kullanabilir.</li>
                            <li><strong>RevenueCat:</strong> Uygulama içi satın almaların ve aboneliklerin yönetimi için kullanılır.</li>
                            <li><strong>Apple & Google:</strong> Satın alma işlemleri doğrudan bu platformların ödeme sistemleri üzerinden yapılır; kredi kartı bilgileriniz bizim sunucularımızda asla tutulmaz.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>3. Bilgilerin Kullanım Amaçları</h2>
                        <p style={{ marginBottom: '1rem' }}>Verileriniz şu amaçlarla kullanılır:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>Öğrenme sürecinizi takip etmek ve cihazlar arası senkronizasyon sağlamak.</li>
                            <li>Uygulama performansını analiz etmek ve hataları gidermek.</li>
                            <li>Kişiselleştirilmiş içerik ve motivasyonel bildirimler sunmak.</li>
                            <li>Yasal yükümlülüklere uymak ve güvenliği sağlamak.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>4. Çerezler ve Takip Teknolojileri</h2>
                        <p>
                            Uygulamamız, reklam tanımlayıcıları (IDFA/AAID) kullanarak anonim takip gerçekleştirebilir. Kullanıcılar, cihaz ayarlarından (Ayarlar &gt; Gizlilik &gt; Takip) bu izni istedikleri zaman yönetebilir veya kapatabilirler.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>5. Veri Saklama ve Silme Hakları</h2>
                        <p style={{ marginBottom: '1rem' }}>Verileriniz, hesabınız aktif olduğu sürece saklanır. Kullanıcı olarak şu haklara sahipsiniz:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>Verilerinize erişim talep etme ve kopyasını alma.</li>
                            <li>Hatalı bilgilerin düzeltilmesini isteme.</li>
                            <li><strong>Hesap Silme:</strong> Uygulama içindeki "Ayarlar" menüsünden veya bize e-posta atarak hesabınızın ve tüm verilerinizin kalıcı olarak silinmesini talep edebilirsiniz.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>6. Veri Güvenliği</h2>
                        <p>
                            Verileriniz endüstri standardı olan SSL/TLS şifreleme yöntemleriyle korunmaktadır. Veri güvenliği bizim için en yüksek önceliktir.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>7. İletişim</h2>
                        <p>
                            Gizlilik politikamızla ilgili her türlü soru ve talebiniz için bize ulaşabilirsiniz: <br />
                            <strong>E-posta:</strong> <a href="mailto:support@vocalearnapp.com" style={{ color: '#818cf8', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}>support@vocalearnapp.com</a><br />
                            <strong>Web:</strong> <a href="https://vocalearnapp.com" target="_blank" rel="noopener noreferrer" style={{ color: '#818cf8', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}>https://vocalearnapp.com</a>
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
};

export default Privacy;
