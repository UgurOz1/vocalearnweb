import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Phone from '../components/Phone';
import Reveal from '../components/Reveal';
import { TOUR } from '../data/content';

const ease = [0.22, 1, 0.36, 1] as const;

// Masaüstünde telefon sabit kalır, metin bloklarına göre ekran değişir
const Tour = () => {
    const [active, setActive] = useState(0);
    const refs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
                });
            },
            { rootMargin: '-45% 0px -45% 0px' }
        );
        refs.current.forEach((el) => el && io.observe(el));
        return () => io.disconnect();
    }, []);

    const current = TOUR[active];

    return (
        <section id="tur" className="tour">
            <div className="container">
                <Reveal className="section-head">
                    <span className="eyebrow">Uygulamanın içinden</span>
                    <h2 className="serif">Bir kelimeyi öğrenmenin<br />yedi farklı yolu.</h2>
                </Reveal>

                <div className="tour-grid">
                    <div className="tour-sticky" aria-hidden="true">
                        <div className="tour-phone-wrap">
                            <Phone>
                                <AnimatePresence initial={false} mode="popLayout">
                                    <motion.img
                                        key={current.key}
                                        src={current.img}
                                        alt=""
                                        initial={{ opacity: 0, y: 40, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -30, scale: 0.98 }}
                                        transition={{ duration: 0.6, ease }}
                                    />
                                </AnimatePresence>
                            </Phone>
                            <div className="tour-counter">
                                <span className="serif">{String(active + 1).padStart(2, '0')}</span>
                                <span className="tour-track">
                                    <motion.span
                                        animate={{ scaleY: (active + 1) / TOUR.length }}
                                        transition={{ duration: 0.6, ease }}
                                    />
                                </span>
                                <span className="serif dim">{String(TOUR.length).padStart(2, '0')}</span>
                            </div>
                        </div>
                    </div>

                    <div className="tour-steps">
                        {TOUR.map((t, i) => (
                            <article
                                key={t.key}
                                data-index={i}
                                ref={(el) => { refs.current[i] = el; }}
                                className={`tour-step ${i === active ? 'is-active' : ''}`}
                            >
                                <div className="tour-inline-phone">
                                    <Phone src={t.img} alt={t.alt} />
                                </div>
                                <span className="tour-kicker">{t.kicker}</span>
                                <h3 className="serif">{t.title}</h3>
                                <p>{t.body}</p>
                                {t.points && (
                                    <ul className="tour-points">
                                        {t.points.map((p) => <li key={p}>{p}</li>)}
                                    </ul>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tour;
