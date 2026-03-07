
import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav glass-nav">
            <div className="container nav-container">
                <Link to="/" className="logo text-gradient" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    <Zap size={24} className="text-indigo-400" />
                    VocaLearn
                </Link>
                <div className="nav-links">
                    <Link to="/#features" className="hover:text-indigo-400 transition-colors" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Özellikler</Link>
                    <Link to="/#what-youll-learn" className="hover:text-indigo-400 transition-colors" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Ne Öğreneceksin?</Link>
                    <Link to="/#how-it-works" className="hover:text-indigo-400 transition-colors" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Nasıl Çalışır?</Link>
                    <Link to="/contact" className="hover:text-indigo-400 transition-colors" style={{ fontSize: '0.9rem', fontWeight: 500 }}>İletişim</Link>
                    <button className="btn btn-primary" onClick={() => alert('Çok yakında App Store ve Google Play\'de!')}>Çok Yakında</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
