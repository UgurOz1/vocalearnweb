import { Mail, MessageCircle } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const Contact = () => {
    return (
        <div className="page-transition">
            <header className="section relative" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
                <ParticleBackground />
                <div className="container relative z-10 text-center">
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.5rem' }}>
                        Bizimle <span className="text-gradient">İletişime Geçin</span>
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
                        Soru, öneri ve destek talepleriniz için bize ulaşabilirsiniz. VocaLearn deneyiminizi iyileştirmek için buradayız.
                    </p>
                </div>
            </header>

            <section className="section" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        {/* Email Card */}
                        <div className="glass hover-lift" style={{
                            padding: '3rem 2rem',
                            borderRadius: '24px',
                            textAlign: 'center',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                        }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '50%',
                                background: 'rgba(99, 102, 241, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                color: '#818cf8',
                                boxShadow: '0 0 20px rgba(99, 102, 241, 0.2)'
                            }}>
                                <Mail size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>E-posta Destek</h3>
                            <p style={{ color: '#94a3b8', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                Her türlü sorunuz ve geri bildiriminiz için bize e-posta gönderebilirsiniz. Size 24 saat içinde dönüş yapacağız.
                            </p>
                            <a href="mailto:uguro9319@gmail.com" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: '#818cf8',
                                fontWeight: 600,
                                fontSize: '1.1rem',
                                textDecoration: 'none',
                                background: 'rgba(99, 102, 241, 0.1)',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '50px',
                                transition: 'all 0.3s ease'
                            }} className="hover:bg-indigo-500/20">
                                uguro9319@gmail.com
                            </a>
                        </div>
                        
                        {/* Information Card */}
                        <div className="glass hover-lift" style={{
                            padding: '3rem 2rem',
                            borderRadius: '24px',
                            textAlign: 'center',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                        }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '50%',
                                background: 'rgba(236, 72, 153, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                color: '#f472b6',
                                boxShadow: '0 0 20px rgba(236, 72, 153, 0.2)'
                            }}>
                                <MessageCircle size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>Geri Bildirim</h3>
                            <p style={{ color: '#94a3b8', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                Uygulamamız hakkındaki düşünceleriniz bizim için çok değerli. Yeni özellik önerileriniz varsa duymak isteriz.
                            </p>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: '#f472b6',
                                fontWeight: 500,
                                fontSize: '0.95rem',
                                background: 'rgba(236, 72, 153, 0.1)',
                                padding: '0.5rem 1rem',
                                borderRadius: '50px'
                            }}>
                                Bizi Geliştirin
                            </span>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
