import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { FAQS } from '../data/content';

const Faq = () => {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section id="sss" className="faq">
            <div className="container faq-grid">
                <Reveal className="section-head left">
                    <span className="eyebrow">SSS</span>
                    <h2 className="serif">Aklına takılanlar.</h2>
                    <p className="section-lead">
                        Burada cevabını bulamadığın bir şey varsa <Link to="/contact" className="u-link">bize yaz</Link>.
                    </p>
                </Reveal>

                <div className="faq-list">
                    {FAQS.map((f, i) => {
                        const isOpen = open === i;
                        return (
                            <div key={f.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                                <button
                                    className="faq-q"
                                    aria-expanded={isOpen}
                                    onClick={() => setOpen(isOpen ? null : i)}
                                >
                                    <span>{f.q}</span>
                                    <span className="faq-icon" aria-hidden="true" />
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            className="faq-a"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <p>
                                                {f.a}
                                                {f.link && (
                                                    <>
                                                        {' '}
                                                        <Link to={f.link.to} className="u-link">{f.link.label} →</Link>
                                                    </>
                                                )}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Faq;
