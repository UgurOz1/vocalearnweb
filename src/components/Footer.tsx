import { Link } from 'react-router-dom';
import { STORE_LINKS } from '../data/content';

const Footer = () => (
    <footer className="footer">
        <div className="container footer-grid">
            <div className="footer-brand">
                <Link to="/" className="brand">
                    <img src="/logo.png" alt="" width={30} height={30} />
                    <span>VocaLearn</span>
                </Link>
                <p>Türkçe konuşanlar için İngilizce kelime uygulaması. A1’den C2’ye, TOEFL’a kadar.</p>
            </div>

            <div>
                <h4>Uygulama</h4>
                <ul>
                    <li><a href={STORE_LINKS.ios} target="_blank" rel="noopener noreferrer">App Store</a></li>
                    <li><a href={STORE_LINKS.android} target="_blank" rel="noopener noreferrer">Google Play</a></li>
                    <li><Link to="/#sss">Sıkça sorulanlar</Link></li>
                    <li><Link to="/contact">İletişim</Link></li>
                </ul>
            </div>

            <div>
                <h4>Yasal</h4>
                <ul>
                    <li><Link to="/privacy">Gizlilik Politikası</Link></li>
                    <li><Link to="/terms">Kullanım Koşulları</Link></li>
                    <li><Link to="/account-deletion">Hesap Silme</Link></li>
                </ul>
            </div>
        </div>

        <div className="container footer-bottom">
            <span>© {new Date().getFullYear()} VocaLearn</span>
            <a href="mailto:uguro9319@gmail.com">uguro9319@gmail.com</a>
        </div>
    </footer>
);

export default Footer;
