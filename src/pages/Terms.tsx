
import { motion } from 'framer-motion';

const Terms = () => {
    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '5rem', color: 'white' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ maxWidth: '900px', margin: '0 auto' }}
            >
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Kullanım Koşulları</h1>
                <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>

                <div style={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>1. Sözleşmenin Konusu</h2>
                        <p style={{ marginBottom: '1rem' }}>
                            Bu Kullanım Koşulları ("Koşullar"), VocaLearn uygulamasına ve web sitesine ("Hizmet") erişiminizi ve kullanımınızı düzenler. Hizmeti indirerek, erişerek veya kullanarak, bu Koşullara yasal olarak bağlı kalmayı kabul edersiniz.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>2. Hesap ve Üyelik</h2>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><strong>Hesap Güvenliği:</strong> Hesabınızın ve şifrenizin gizliliğini korumak sizin sorumluluğunuzdadır. Hesabınız altında gerçekleşen tüm işlemlerden siz sorumlu tutulursunuz.</li>
                            <li><strong>Doğru Bilgi:</strong> Kayıt sırasında doğru, güncel ve eksiksiz bilgi sağlamayı kabul edersiniz.</li>
                            <li><strong>Yaş Sınırı:</strong> Bu hizmeti kullanmak için en az 13 yaşında olmanız (veya ülkenizdeki dijital rüşt yaşına sahip olmanız) gerekmektedir.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>3. Kullanım Lisansı ve Kısıtlamalar</h2>
                        <p style={{ marginBottom: '1rem' }}>
                            VocaLearn, size Hizmeti kişisel ve ticari olmayan amaçlarla kullanmanız için sınırlı, geri alınabilir ve devredilemez bir lisans verir. Aşağıdakileri yapmanız yasaktır:
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>Uygulamanın kaynak kodunu değiştirmek, tersine mühendislik yapmak veya kopyalamak.</li>
                            <li>Hizmeti yasa dışı veya yetkisiz bir amaçla kullanmak.</li>
                            <li>Uygulamanın çalışmasını engelleyecek veya sisteme zarar verecek girişimlerde bulunmak (virüs, bot vb.).</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>4. İçerik ve Fikri Mülkiyet</h2>
                        <p style={{ marginBottom: '1rem' }}>
                            Hizmet üzerindeki tüm metinler, grafikler, kullanıcı arayüzleri, ticari markalar, logolar ve kodlar ("İçerik") VocaLearn'e aittir ve telif hakkı yasalarıyla korunmaktadır. Önceden yazılı izin alınmaksızın bu içeriğin herhangi bir kısmını kullanamazsınız.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>5. Premium Hizmetler ve Ödemeler</h2>
                        <p style={{ marginBottom: '1rem' }}>
                            Bazı özellikler ücretli abonelik gerektirebilir ("Premium"). Abonelikler, ödeme döneminin sonunda otomatik olarak yenilenir. İptal işlemini ilgili uygulama mağazası (App Store veya Google Play) üzerinden, dönem bitiminden en az 24 saat önce yapmanız gerekmektedir.
                        </p>
                    </section>

                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>6. Sorumluluk Reddi</h2>
                        <p style={{ marginBottom: '1rem' }}>
                            Hizmet "olduğu gibi" ve "mevcut olduğu şekilde" sunulmaktadır. VocaLearn, hizmetin kesintisiz, hatasız veya virüssüz olacağını garanti etmez. Uygulamayı kullanımınızdan doğabilecek herhangi bir veri kaybı veya zarardan şirketimiz sorumlu değildir.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>7. Değişiklikler</h2>
                        <p>
                            Bu koşulları zaman occasionally güncelleyebiliriz. Önemli değişiklikler olduğunda uygulama üzerinden bildirimde bulunacağız. Hizmeti kullanmaya devam etmeniz, yeni koşulları kabul ettiğiniz anlamına gelir.
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
};

export default Terms;
