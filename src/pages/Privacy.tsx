
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
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>1. Giriş ve Kapsam</h2>
                        <p style={{ marginBottom: '1rem' }}>
                            VocaLearn ("biz", "bizim" veya "şirket") olarak gizliliğinize büyük önem veriyoruz. Bu Gizlilik Politikası, mobil uygulamamızı ve web sitemizi ("Hizmet") kullandığınızda kişisel verilerinizin nasıl toplandığını, kullanıldığını, paylaşıldığını ve korunduğunu açıklar.
                        </p>
                        <p>
                            Hizmetimizi kullanarak, bu politikada belirtilen veri uygulamalarını kabul etmiş olursunuz.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>2. Topladığımız Bilgiler</h2>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#a5b4fc' }}>2.1. Sağladığınız Bilgiler</h3>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Hesap Bilgileri:</strong> Kayıt olurken sağladığınız e-posta adresi, kullanıcı adı ve isteğe bağlı profil fotoğrafı.</li>
                            <li><strong>İletişim Verileri:</strong> Destek ekibimizle iletişime geçtiğinizde sağladığınız bilgiler.</li>
                            <li><strong>Kullanıcı İçeriği:</strong> Oluşturduğunuz veya yüklediğiniz özel kelime listeleri ve notlar.</li>
                        </ul>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#a5b4fc' }}>2.2. Otomatik Toplanan Bilgiler</h3>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Kullanım Verileri:</strong> Hangi dersleri tamamladığınız, uygulama içi aktiviteleriniz, harcadığınız süre ve oyun skorlarınız.</li>
                            <li><strong>Cihaz Bilgileri:</strong> Cihaz modeli, işletim sistemi sürümü, benzersiz cihaz tanımlayıcıları ve IP adresi.</li>
                            <li><strong>Çerezler ve Takip Teknolojileri:</strong> Hizmet performansını analiz etmek için kullanılan anonim veriler.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>3. Bilgilerin Kullanım Amaçları</h2>
                        <p style={{ marginBottom: '1rem' }}>Verilerinizi aşağıdaki amaçlarla işliyoruz:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>Hizmeti sunmak, sürdürmek ve iyileştirmek.</li>
                            <li>Öğrenme deneyiminizi kişiselleştirmek ve size uygun içerikler önermek.</li>
                            <li>Sizi güncellemeler, güvenlik uyarıları ve destek mesajları hakkında bilgilendirmek.</li>
                            <li>Hataları tespit etmek ve teknik sorunları gidermek.</li>
                            <li>Yasal yükümlülüklere uymak ve haklarımızı korumak.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>4. Veri Paylaşımı ve Üçüncü Taraflar</h2>
                        <p style={{ marginBottom: '1rem' }}>
                            Kişisel verilerinizi asla üçüncü taraflara satmayız. Ancak, aşağıdaki durumlarda paylaşım yapılabilir:
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Hizmet Sağlayıcılar:</strong> Veri depolama (örn. Firebase), analiz ve e-posta gönderimi gibi hizmetler aldığımız güvenilir iş ortakları.</li>
                            <li><strong>Yasal Zorunluluklar:</strong> Mahkeme emri veya yasal bir süreç gerektirdiğinde resmi makamlarla.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>5. Kullanıcı Hakları</h2>
                        <p style={{ marginBottom: '1rem' }}>Kullanıcı olarak aşağıdaki haklara sahipsiniz:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>Verilerinize erişme ve kopyasını talep etme.</li>
                            <li>Hatalı verilerin düzeltilmesini isteme.</li>
                            <li>Hesabınızın ve verilerinizin tamamen silinmesini talep etme ("Unutulma Hakkı").</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>6. Veri Güvenliği</h2>
                        <p>
                            Verilerinizi korumak için endüstri standardı şifreleme (SSL/TLS) ve güvenlik protokolleri kullanıyoruz. Ancak, hiçbir dijital platformun %100 güvenli olmadığını hatırlatırız. Hesabınızın güvenliği için güçlü bir şifre kullanmanızı öneririz.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>7. İletişim</h2>
                        <p>
                            Bu politika hakkında sorularınız veya veri talepleriniz için bize ulaşın: <br />
                            <a href="mailto:support@vocalearn.app" style={{ color: '#818cf8', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem' }}>support@vocalearn.app</a>
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
};

export default Privacy;
