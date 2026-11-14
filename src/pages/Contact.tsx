import { ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const Contact = () => {
    useEffect(() => {
        const prev = document.title;
        document.title = 'İletişim — VocaLearn';
        return () => { document.title = prev; };
    }, []);

    return (
    <main className="contact">
        <div className="container">
            <Reveal className="legal-head">
                <span className="eyebrow">İletişim</span>
                <h1 className="serif">Bize <em>yaz.</em></h1>
                <p className="section-lead">
                    Soru, öneri ya da bir hata mı buldun? Bize e-posta gönder; genellikle 24 saat içinde
                    dönüş yapıyoruz.
                </p>
            </Reveal>

            <div className="contact-grid">
                <Reveal delay={0.1}>
                    <a className="contact-card" href="mailto:uguro9319@gmail.com">
                        <span className="contact-label">Destek, geri bildirim ve hesap silme</span>
                        <span className="contact-value">uguro9319@gmail.com</span>
                        <span className="contact-note">Uygulamayla ilgili her konu, veri ve hesap silme talepleri için.</span>
                        <ArrowUpRight className="contact-arrow" size={22} />
                    </a>
                </Reveal>
            </div>

            <Reveal delay={0.25} className="contact-links">
                <Link to="/privacy">Gizlilik Politikası</Link>
                <Link to="/terms">Kullanım Koşulları</Link>
                <Link to="/account-deletion">Hesap Silme</Link>
            </Reveal>
        </div>
    </main>
    );
};

export default Contact;
