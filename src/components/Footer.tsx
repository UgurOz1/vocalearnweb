
import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer relative z-10">
            <div className="container footer-grid">
                <div>
                    <div className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Zap size={24} className="text-indigo-400" /> VocaLearn
                    </div>
                    <p style={{ maxWidth: '300px', lineHeight: 1.6 }}>
                        Dil öğrenimini oyunlaştırarak herkes için erişilebilir, eğlenceli ve etkili hale getiriyoruz.
                    </p>
                </div>
                <div>
                    <h4 style={{ color: 'white', marginBottom: '1.5rem', fontWeight: 600 }}>Bağlantılar</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link></li>
                        <li><Link to="/#features" className="hover:text-primary transition-colors">Özellikler</Link></li>
                        <li><Link to="/" className="hover:text-primary transition-colors">İletişim</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ color: 'white', marginBottom: '1.5rem', fontWeight: 600 }}>Yasal</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><Link to="/privacy" className="hover:text-primary transition-colors">Gizlilik Politikası</Link></li>
                        <li><Link to="/terms" className="hover:text-primary transition-colors">Kullanım Koşulları</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container" style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
                <p>&copy; {new Date().getFullYear()} VocaLearn. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    );
};

export default Footer;
