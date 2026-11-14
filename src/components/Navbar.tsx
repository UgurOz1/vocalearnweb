import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
    { to: '/#tur', label: 'Uygulama' },
    { to: '/#seviyeler', label: 'Seviyeler' },
    { to: '/#premium', label: 'Premium' },
    { to: '/#sss', label: 'SSS' },
    { to: '/contact', label: 'İletişim' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
    }, [open]);

    return (
        <header className={`nav ${scrolled || open ? 'nav-solid' : ''}`}>
            <div className="container nav-inner">
                <Link to="/" className="brand" aria-label="VocaLearn ana sayfa">
                    <img src="/logo.png" alt="" width={30} height={30} />
                    <span>VocaLearn</span>
                </Link>

                <nav className="nav-links" aria-label="Ana menü">
                    {links.map((l) => (
                        <Link key={l.to} to={l.to}>{l.label}</Link>
                    ))}
                </nav>

                <Link to="/#indir" className="btn btn-light nav-cta">Uygulamayı indir</Link>

                <button
                    className={`burger ${open ? 'is-open' : ''}`}
                    aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    <span />
                    <span />
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.nav
                        className="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        aria-label="Mobil menü"
                    >
                        {links.map((l, i) => (
                            <motion.div
                                key={l.to}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Link to={l.to} className="serif" onClick={() => setOpen(false)}>{l.label}</Link>
                            </motion.div>
                        ))}
                        <Link to="/#indir" onClick={() => setOpen(false)} className="btn btn-light" style={{ marginTop: '1.5rem', alignSelf: 'flex-start' }}>Uygulamayı indir</Link>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
