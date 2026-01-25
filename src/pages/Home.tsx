
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart3, BookOpen, BrainCircuit, Check, Download, Flame, Gamepad2, Globe, GraduationCap, Puzzle, Star, Trophy, Users, Zap } from 'lucide-react';
import NumberTicker from '../components/NumberTicker';
import ParticleBackground from '../components/ParticleBackground';
import PhoneMockup from '../components/PhoneMockup';

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const features = [
        {
            icon: <BrainCircuit size={24} />,
            title: 'Seviye Bazlı Öğrenme',
            description: 'A1\'den C2\'ye kadar 6 farklı seviyede, kapsamlı müfredatlarla öğrenme deneyimi.'
        },
        {
            icon: <Gamepad2 size={24} />,
            title: 'Zengin Oyun Kütüphanesi',
            description: 'Adam Asmaca, Bulmaca, Kelime Dedektifi, Hafıza Oyunu ve daha fazlası ile eğlenerek öğren.'
        },
        {
            icon: <BookOpen size={24} />,
            title: 'Kapsamlı Gramer',
            description: 'Sadece kelime değil, detaylı gramer dersleri ve testleri ile dil bilgini güçlendir.'
        },
        {
            icon: <BarChart3 size={24} />,
            title: 'Gelişim Takibi',
            description: 'Detaylı istatistikler ve günlük serilerle ilerlemenizi görselleştirin ve motivasyonunuzu koruyun.'
        },
        {
            icon: <Star size={24} />,
            title: 'Rekabetçi Liderlik',
            description: 'Arkadaşlarınla ve diğer kullanıcılarla yarış, XP kazan ve haftalık liglerde zirveye çık.'
        },
        {
            icon: <Zap size={24} />,
            title: 'Akıllı Tekrar',
            description: 'Algoritmamız, kelimeleri unutmaya başladığın anda sana tekrar hatırlatır.'
        }
    ];

    const steps = [
        {
            title: 'Paketini Seç',
            description: 'Sana uygun seviyeyi ve ilgini çeken konuyu belirle. İster iş ingilizcesi, ister günlük konuşma.'
        },
        {
            title: 'Oyunlarla Öğren',
            description: 'Sıkıcı ezber yöntemlerini unut. Eşleştirme, quiz ve zincir oyunlarıyla kelimeleri doğal bir şekilde öğren.'
        },
        {
            title: 'İlerlemeni İzle',
            description: 'Hangi kelimelerde zorlandığını gör, günlük hedefler ve istatistiklerle eksiklerini tamamla.'
        }
    ];

    const faqs = [
        {
            q: 'Uygulama ücretsiz mi?',
            a: 'Evet, VocaLearn temel özellikleri tamamen ücretsizdir. İleri seviye istatistikler ve reklamsız deneyim için Premium seçeneğimiz mevcuttur.'
        },
        {
            q: 'İnternet bağlantısı gerekli mi?',
            a: 'Uygulamayı indirdikten sonra çoğu özelliği çevrimdışı (offline) olarak kullanabilirsiniz. İlerlemenizi senkronize etmek için arada bir bağlanmanız yeterli.'
        },
        {
            q: 'Kendi kelime listelerimi oluşturabilir miyim?',
            a: 'Evet! "Listelerim" özelliği ile kendi kelime paketlerinizi oluşturabilir, flashcard ve özel quiz modlarıyla çalışabilirsiniz.'
        },
        {
            q: 'Hangi platformlarda var?',
            a: 'Şu an iOS ve Android cihazlar için geliştirilme aşamasındayız. Çok yakında mağazalarda yerimizi alacağız.'
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <header className="section hero-section relative">
                <ParticleBackground />

                {/* Background Elements */}
                <motion.div style={{ y: y1, position: 'absolute', top: '10%', right: '5%', zIndex: -1 }}>
                    <div style={{ width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)' }}></div>
                </motion.div>

                <motion.div style={{ y: y2, position: 'absolute', bottom: '10%', left: '5%', zIndex: -1 }}>
                    <div style={{ width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)' }}></div>
                </motion.div>

                <div className="container hero-grid relative z-10">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                            style={{
                                display: 'inline-block',
                                padding: '0.5rem 1.25rem',
                                marginBottom: '2rem',
                                border: '1px solid rgba(99, 102, 241, 0.3)',
                                borderRadius: '50px',
                                background: 'rgba(99, 102, 241, 0.1)',
                                color: '#a5b4fc',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            🚀 Çok Yakında Mağazalarda
                        </motion.div>

                        <h1 style={{
                            fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                            fontWeight: 800,
                            lineHeight: 1.15,
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.02em'
                        }}>
                            Kelime Hazineni{' '}
                            <motion.span
                                className="text-gradient"
                                initial={{ backgroundPosition: '0% center' }}
                                animate={{ backgroundPosition: '200% center' }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                                style={{
                                    backgroundSize: '200% auto',
                                    display: 'inline'
                                }}
                            >
                                Sınırların Ötesine Taşı
                            </motion.span>
                        </h1>

                        <p style={{
                            fontSize: '1.15rem',
                            color: 'rgba(148, 163, 184, 0.9)',
                            marginBottom: '2.5rem',
                            maxWidth: '520px',
                            lineHeight: 1.7
                        }}>
                            Akıllı tekrar sistemi ve eğlenceli oyunlarla İngilizce kelimeleri <strong style={{ color: '#a5b4fc' }}>3 kat daha hızlı</strong> öğrenin.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary"
                                onClick={() => alert('Çok yakında!')}
                            >
                                Hemen Başla
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-secondary"
                                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Keşfet
                            </motion.button>
                        </div>

                        {/* Social Proof Tags */}
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '1.5rem',
                            paddingTop: '1.5rem',
                            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.95rem' }}>
                                <Users size={18} style={{ color: '#818cf8' }} />
                                <span>10k+ Bekleme Listesi</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.95rem' }}>
                                <Globe size={18} style={{ color: '#818cf8' }} />
                                <span>A1-C2 Seviyeler</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.95rem' }}>
                                <Zap size={18} style={{ color: '#818cf8' }} />
                                <span>Offline Mod</span>
                            </div>
                        </div>

                    </motion.div>

                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                        style={{ perspective: 1000 }}
                    >
                        <PhoneMockup />
                    </motion.div>
                </div>
            </header>

            {/* Stats Counter Section */}
            <div className="stats-section">
                <div className="container stats-grid">
                    <NumberTicker value={15000} label="Kullanıcı Hedefi" />
                    <NumberTicker value={5000} label="Öğretilen Kelime" />
                    <NumberTicker value={120} label="Oyun Modu" />
                </div>
            </div>

            {/* Marquee Section */}
            <div className="py-8 bg-slate-900 border-b border-white/5 overflow-hidden">
                <div className="scroller">
                    <div className="scroller-inner">
                        {["TOEFL", "IELTS", "YDS", "YÖKDİL", "Business English", "Daily Conversation", "Academic Vocabulary", "Travel English", "Medical English"].map((tag, i) => (
                            <span key={i} className="tag">{tag}</span>
                        ))}
                        {["TOEFL", "IELTS", "YDS", "YÖKDİL", "Business English", "Daily Conversation", "Academic Vocabulary", "Travel English", "Medical English"].map((tag, i) => (
                            <span key={`dup-${i}`} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section id="features" className="section relative" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.25rem',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(99, 102, 241, 0.3)',
                            borderRadius: '50px',
                            background: 'rgba(99, 102, 241, 0.1)',
                            color: '#a5b4fc',
                            fontSize: '0.85rem',
                            fontWeight: 500
                        }}>
                            ✨ Özellikler
                        </span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                            Neden VocaLearn?
                        </h2>
                        <p style={{ color: '#94a3b8', maxWidth: '550px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
                            Sadece bir sözlük değil, <strong style={{ color: '#a5b4fc' }}>tam donanımlı dil koçunuz</strong>.
                        </p>
                    </div>

                    <div className="feature-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="icon-box">
                                    {feature.icon}
                                </div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'white' }}>{feature.title}</h3>
                                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section id="how-it-works" className="section" style={{ background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.5) 0%, transparent 50%, rgba(15, 23, 42, 0.5) 100%)', paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.25rem',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(139, 92, 246, 0.3)',
                            borderRadius: '50px',
                            background: 'rgba(139, 92, 246, 0.1)',
                            color: '#c4b5fd',
                            fontSize: '0.85rem',
                            fontWeight: 500
                        }}>
                            🚀 Başlangıç
                        </span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                            Nasıl Çalışır?
                        </h2>
                        <p style={{ color: '#94a3b8', maxWidth: '500px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
                            Karmaşık süreçler yok. <strong style={{ color: '#c4b5fd' }}>Sadece 3 adımda</strong> başla.
                        </p>
                    </div>

                    <div className="steps-grid" style={{ maxWidth: '700px', margin: '0 auto', paddingLeft: '3rem' }}>
                        {steps.map((step, index) => (
                            <div key={index} className="step-card">
                                <span className="step-number">{index + 1}</span>
                                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: '#a5b4fc' }}>{step.title}</h3>
                                <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What You'll Learn Section */}
            <section id="what-youll-learn" className="section" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.08) 50%, rgba(236, 72, 153, 0.05) 100%)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span className="inline-block px-4 py-1.5 mb-4 border border-violet-500/30 rounded-full bg-violet-500/10 text-violet-300 text-sm font-medium">
                            🎯 Öğrenme Yolculuğun
                        </span>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Ne Öğreneceksin?</h2>
                        <p style={{ color: 'var(--color-text-muted)', maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem' }}>
                            VocaLearn ile sadece kelime ezberlemiyorsun, dili gerçekten öğreniyorsun.
                        </p>
                    </div>

                    <div className="learn-grid">
                        {/* Cards here... reused from previous App.tsx but cleaned up for brevity in this tool call, 
                assuming I copied them correctly. I will copy them verbatim to ensure no loss.
            */}
                        {/* Kelime Öğrenme */}
                        <div className="learn-card learn-card-large">
                            <div className="learn-card-icon" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
                                <GraduationCap size={32} />
                            </div>
                            <h3>5000+ Kelime</h3>
                            <p>A1'den C2'ye kadar tüm seviyelerde, kategorize edilmiş binlerce kelime. Her kelime için örnek cümleler, telaffuz ve görsel ipuçları.</p>
                            <div className="learn-card-tags">
                                <span>A1-C2</span>
                                <span>Kategorili</span>
                                <span>Telaffuz</span>
                            </div>
                        </div>

                        {/* Oyunlar */}
                        <div className="learn-card">
                            <div className="learn-card-icon" style={{ background: 'linear-gradient(135deg, #ec4899, #f472b6)' }}>
                                <Puzzle size={28} />
                            </div>
                            <h3>8 Farklı Oyun Modu</h3>
                            <p>Adam Asmaca, Bulmaca, Kelime Dedektifi, Spelling Bee, Dinleme Challenge ve Eşleştirme oyunları.</p>
                        </div>

                        {/* Hikayeler */}
                        <div className="learn-card">
                            <div className="learn-card-icon" style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}>
                                <BookOpen size={28} />
                            </div>
                            <h3>Seviyeli Hikayeler</h3>
                            <p>Seviyene uygun hikayelerle kelimeleri bağlam içinde öğren.</p>
                        </div>

                        {/* İlerleme Takibi */}
                        <div className="learn-card">
                            <div className="learn-card-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #fbbf24)' }}>
                                <BarChart3 size={28} />
                            </div>
                            <h3>İlerleme Takibi</h3>
                            <p>Detaylı istatistiklerle hangi konularda güçlü, hangi konularda eksik olduğunu gör.</p>
                        </div>

                        {/* Başarılar & XP */}
                        <div className="learn-card learn-card-large">
                            <div className="learn-card-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)' }}>
                                <Trophy size={32} />
                            </div>
                            <h3>Rozetler & XP Sistemi</h3>
                            <p>Her aktiviteden XP kazan, level atla ve özel rozetler aç. Günlük görevleri tamamla, başarımları topla ve arkadaşlarınla yarış!</p>
                            <div className="learn-card-tags">
                                <span>🏆 12+ Rozet</span>
                                <span>⭐ XP Sistemi</span>
                                <span>📊 Liderlik</span>
                            </div>
                        </div>

                        {/* Günlük Seriler */}
                        <div className="learn-card">
                            <div className="learn-card-icon" style={{ background: 'linear-gradient(135deg, #ef4444, #f87171)' }}>
                                <Flame size={28} />
                            </div>
                            <h3>Günlük Seriler</h3>
                            <p>Her gün pratik yap, serinizi koruyun ve bonus XP kazanın.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Subscription Section */}
            <section id="premium" className="section relative" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.25rem',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(245, 158, 11, 0.3)',
                            borderRadius: '50px',
                            background: 'rgba(245, 158, 11, 0.1)',
                            color: '#fcd34d',
                            fontSize: '0.85rem',
                            fontWeight: 500
                        }}>
                            👑 Premium
                        </span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                            Sınırları Kaldır
                        </h2>
                        <p style={{ color: '#94a3b8', maxWidth: '550px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
                            VocaLearn ile seviyen ne olursa olsun öğrenmeye devam et.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        maxWidth: '1100px',
                        margin: '0 auto 4rem auto'
                    }}>
                        {/* Monthly Plan */}
                        <div style={{
                            background: 'rgba(15, 23, 42, 0.6)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '24px',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'white' }}>Aylık</h3>
                            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>
                                49.99₺
                            </div>
                            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '2rem' }}>Esnek plan, istediğin zaman iptal et.</p>
                            <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Seç</button>
                        </div>

                        {/* 6 Month Plan */}
                        <div style={{
                            background: 'rgba(15, 23, 42, 0.6)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '24px',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-10px',
                                right: '1.5rem',
                                background: '#10b981',
                                color: 'white',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                padding: '4px 10px',
                                borderRadius: '20px'
                            }}>
                                %15 İNDİRİM
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'white' }}>6 Aylık</h3>
                            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>
                                41.66₺<span style={{ fontSize: '0.9rem', fontWeight: 400, color: '#94a3b8' }}>/ay</span>
                            </div>
                            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '2rem' }}>Toplam 249.99₺ / 6 ayda bir faturalanır.</p>
                            <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>Seç</button>
                        </div>

                        {/* Yearly Plan (Popular) */}
                        <div style={{
                            background: 'linear-gradient(145deg, rgba(30, 27, 75, 0.9), rgba(15, 23, 42, 0.9))',
                            border: '2px solid rgba(245, 158, 11, 0.5)',
                            borderRadius: '24px',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            boxShadow: '0 0 30px rgba(245, 158, 11, 0.15)',
                            transform: 'scale(1.05)',
                            zIndex: 1
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-14px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: '#f59e0b',
                                color: 'black',
                                fontSize: '0.8rem',
                                fontWeight: 800,
                                padding: '6px 16px',
                                borderRadius: '20px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                En Popüler
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fcd34d' }}>Yıllık</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>
                                41.66₺<span style={{ fontSize: '0.9rem', fontWeight: 400, color: '#94a3b8' }}>/ay</span>
                            </div>
                            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', marginBottom: '2rem' }}>Toplam 499.99₺ / yılda bir faturalanır.</p>
                            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: '#f59e0b', color: 'black', border: 'none', fontWeight: 700 }}>3 Gün Ücretsiz Dene</button>
                        </div>
                    </div>

                    {/* Feature Comparison Table */}
                    <div className="glass" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', borderRadius: '1.5rem' }}>
                        <h3 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>Özellik Karşılaştırması</h3>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1rem', fontWeight: 600, color: '#94a3b8' }}>
                            <div>Özellik</div>
                            <div style={{ textAlign: 'center' }}>Ücretsiz</div>
                            <div style={{ textAlign: 'center', color: '#fcd34d' }}>Premium</div>
                        </div>

                        {[
                            { name: 'Oyunlar & Flashcard', free: 'Sınırsız', premium: 'Sınırsız' },
                            { name: 'Hikayeler & Gramer', free: 'Sadece A1', premium: 'Tümü (A1-C2)' },
                            { name: 'Quiz Çözme', free: 'B1+ Günlük 3 Adet', premium: 'Sınırsız' },
                            { name: 'Kelime Listeleri', free: 'Max 2 Liste', premium: 'Sınırsız' },
                            { name: 'Avatarlar', free: '10 Adet', premium: '60+ Adet' },
                            { name: 'Gelişmiş İstatistikler', free: '-', premium: <Check size={18} className="inline text-green-400" /> },
                            { name: 'Reklamsız Deneyim', free: '-', premium: <Check size={18} className="inline text-green-400" /> },
                            { name: 'Çevrimdışı (Offline) Mod', free: '-', premium: <Check size={18} className="inline text-green-400" /> },
                        ].map((row, i) => (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', padding: '1rem 0', borderBottom: i === 7 ? 'none' : '1px solid rgba(255,255,255,0.05)', alignItems: 'center' }}>
                                <div style={{ color: 'white', fontWeight: 500 }}>{row.name}</div>
                                <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.95rem' }}>{row.free}</div>
                                <div style={{ textAlign: 'center', color: 'white', fontWeight: 600, fontSize: '0.95rem' }}>{row.premium}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section" style={{ background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.3) 100%)', paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.25rem',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(236, 72, 153, 0.3)',
                            borderRadius: '50px',
                            background: 'rgba(236, 72, 153, 0.1)',
                            color: '#f9a8d4',
                            fontSize: '0.85rem',
                            fontWeight: 500
                        }}>
                            ❓ SSS
                        </span>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                            Sıkça Sorulan Sorular
                        </h2>
                        <p style={{ color: '#94a3b8', maxWidth: '500px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
                            Merak ettiklerinin cevaplarını burada bulabilirsin.
                        </p>
                    </div>

                    <div className="faq-grid">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item" style={{ cursor: 'default' }}>
                                <h4 style={{ fontWeight: 600, fontSize: '1.05rem', color: 'white', marginBottom: '0.75rem' }}>{faq.q}</h4>
                                <div style={{ color: '#94a3b8', lineHeight: 1.7 }}>
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Download / CTA */}
            <section className="section text-center relative">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
                </div>

                <div className="container glass" style={{ padding: '4rem 2rem', borderRadius: '2rem', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div>
                        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>Öğrenmeye Hazır Mısın?</h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                            VocaLearn ile binlerce kullanıcı arasına katıl ve dil becerilerini bir üst seviyeye taşı.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary"
                                style={{ minWidth: '200px', height: '60px', opacity: 0.8 }}
                                onClick={() => alert('App Store\'da çok yakında!')}
                            >
                                <Download size={20} style={{ marginRight: '0.5rem' }} /> App Store
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary"
                                style={{ minWidth: '200px', height: '60px', background: '#334155', opacity: 0.8 }}
                                onClick={() => alert('Çok yakında yayındayız!')}
                            >
                                <Download size={20} style={{ marginRight: '0.5rem' }} /> Google Play
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
