import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Reveal from '../components/Reveal';
import { LEVELS } from '../data/content';

const ease = [0.22, 1, 0.36, 1] as const;
const MAX = Math.max(...LEVELS.map((l) => l.count));

const Levels = () => {
    const [active, setActive] = useState(3);
    const lv = LEVELS[active];

    return (
        <section id="seviyeler" className="levels">
            <div className="container">
                <div className="levels-grid">
                    <Reveal className="section-head left">
                        <span className="eyebrow">Seviyeler</span>
                        <h2 className="serif">Nereden başlarsan<br />başla.</h2>
                        <p className="section-lead">
                            Kelimeler Avrupa Ortak Çerçevesi’ne (CEFR) göre ayrıldı. Sınava hazırlananlar için ayrıca
                            akademik bir TOEFL seti var. Bir seviyenin üstüne gel, içinden birkaç kelime gör.
                        </p>

                        <div className="level-sample">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={lv.code}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.35, ease }}
                                >
                                    <div className="level-sample-head">
                                        <span className="level-chip">{lv.code}</span>
                                        <span>{lv.name} · {lv.count.toLocaleString('tr-TR')} kelime</span>
                                    </div>
                                    <ul>
                                        {lv.samples.map(([en, tr]) => (
                                            <li key={en}>
                                                <span className="serif">{en}</span>
                                                <em>{tr}</em>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </Reveal>

                    <ul className="level-list">
                        {LEVELS.map((l, i) => (
                            <li key={l.code}>
                                <button
                                    className={`level-row ${i === active ? 'is-active' : ''}`}
                                    onMouseEnter={() => setActive(i)}
                                    onFocus={() => setActive(i)}
                                    onClick={() => setActive(i)}
                                    aria-pressed={i === active}
                                >
                                    <span className="level-code serif">{l.code}</span>
                                    <span className="level-name">{l.name}</span>
                                    <span className="level-bar">
                                        <motion.span
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: Math.max(l.count / MAX, 0.04) }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.2, delay: 0.1 + i * 0.07, ease }}
                                        />
                                    </span>
                                    <span className="level-count">{l.count.toLocaleString('tr-TR')}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Levels;
