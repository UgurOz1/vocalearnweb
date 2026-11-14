import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import { STEPS } from '../data/content';

const Steps = () => (
    <section className="steps">
        <div className="container">
            <Reveal className="section-head">
                <span className="eyebrow">Nasıl çalışır</span>
                <h2 className="serif">Az ama her gün.</h2>
            </Reveal>

            <div className="steps-line" aria-hidden="true">
                <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: '0px 0px -20% 0px' }}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                />
            </div>

            <ol className="steps-grid">
                {STEPS.map((s, i) => (
                    <Reveal as="li" key={s.title} delay={0.15 + i * 0.15} className="step">
                        <span className="step-num serif">{String(i + 1).padStart(2, '0')}</span>
                        <h3>{s.title}</h3>
                        <p>{s.body}</p>
                    </Reveal>
                ))}
            </ol>
        </div>
    </section>
);

export default Steps;
