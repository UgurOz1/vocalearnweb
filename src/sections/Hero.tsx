import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Phone from '../components/Phone';
import StoreButtons from '../components/StoreButtons';
import { HERO_WORDS, TOTAL_WORDS } from '../data/content';

const ease = [0.22, 1, 0.36, 1] as const;
const WORD_MS = 2800;

const Line = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
    <span className="line-mask">
        <motion.span
            className="line"
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay, ease }}
        >
            {children}
        </motion.span>
    </span>
);

const WordCard = () => {
    const [i, setI] = useState(0);
    const reduce = useReducedMotion();

    useEffect(() => {
        const t = setInterval(() => setI((v) => (v + 1) % HERO_WORDS.length), WORD_MS);
        return () => clearInterval(t);
    }, []);

    const w = HERO_WORDS[i];

    return (
        <motion.div
            className="word-card"
            initial={{ opacity: 0, y: 30, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 1, delay: 0.9, ease }}
        >
            <div className="word-card-top">
                <span>Günün kelimesi</span>
                <AnimatePresence mode="wait">
                    <motion.span
                        key={w.level}
                        className="level-chip"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {w.level}
                    </motion.span>
                </AnimatePresence>
            </div>
            <div className="word-card-body">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={w.en}
                        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14, filter: 'blur(6px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10, filter: 'blur(6px)' }}
                        transition={{ duration: 0.45, ease }}
                    >
                        <div className="word-en serif">{w.en}</div>
                        <div className="word-tr">{w.tr}</div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="word-card-bar">
                <motion.span
                    key={i}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: WORD_MS / 1000, ease: 'linear' }}
                />
            </div>
        </motion.div>
    );
};

const Hero = () => {
    const ref = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();

    // Fareye göre hafif eğim
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
    const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });

    // Kaydırınca arka telefon biraz daha yavaş hareket etsin
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const backY = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const frontY = useTransform(scrollYProgress, [0, 1], [0, -40]);

    const onMove = (e: React.MouseEvent) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
    };
    const onLeave = () => {
        mx.set(0);
        my.set(0);
    };

    return (
        <section className="hero" ref={ref}>
            <div className="hero-glow" aria-hidden="true" />
            <div className="container hero-grid">
                <div className="hero-copy">
                    <motion.div
                        className="eyebrow"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        App Store ve Google Play’de
                    </motion.div>

                    <h1 className="hero-title serif">
                        <Line delay={0.15}>İngilizce kelimeleri</Line>
                        <Line delay={0.28}><em>ezberleme,</em> öğren.</Line>
                    </h1>

                    <motion.p
                        className="hero-lead"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.55, ease }}
                    >
                        VocaLearn; quiz, mini oyun ve kısa hikayelerle {TOTAL_WORDS.toLocaleString('tr-TR')} İngilizce kelimeyi
                        Türkçe karşılıklarıyla öğretir. A1’den C2’ye, TOEFL’a kadar. Günde birkaç dakika yeter.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.7, ease }}
                    >
                        <StoreButtons />
                    </motion.div>

                    <motion.ul
                        className="hero-meta"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <li><strong>7</strong> seviye</li>
                        <li><strong>6</strong> mini oyun</li>
                        <li><strong>Ücretsiz</strong> başla</li>
                    </motion.ul>
                </div>

                <div className="hero-visual" onMouseMove={onMove} onMouseLeave={onLeave}>
                    <motion.div className="hero-tilt" style={{ rotateX: rx, rotateY: ry }}>
                        <motion.div className="hero-phone-back" style={{ y: backY }}>
                            <motion.div
                                initial={{ opacity: 0, x: 40, rotate: 9 }}
                                animate={{ opacity: 1, x: 0, rotate: 6 }}
                                transition={{ duration: 1.2, delay: 0.35, ease }}
                            >
                                <Phone src="/screens/story.webp" alt="Hikaye okuma ekranı" eager />
                            </motion.div>
                        </motion.div>
                        <motion.div className="hero-phone-front" style={{ y: frontY }}>
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.1, delay: 0.2, ease }}
                            >
                                <Phone src="/screens/home.webp" alt="VocaLearn ana sayfa ekranı" eager />
                            </motion.div>
                        </motion.div>
                        <WordCard />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
