import { motion } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
    eyebrow: string;
    title: string;
    updated: ReactNode;
    tocLabel?: string;
    children: ReactNode;
};

type TocItem = { id: string; text: string };

const slug = (s: string, i: number) =>
    `b-${i + 1}-` + s.toLowerCase().replace(/[^a-z0-9çğıöşü]+/gi, '-').replace(/^-|-$/g, '').slice(0, 40);

// Yasal sayfalar için ortak düzen: başlık + metin + (masaüstünde) içindekiler
const LegalPage = ({ eyebrow, title, updated, tocLabel = 'İçindekiler', children }: Props) => {
    const bodyRef = useRef<HTMLDivElement>(null);
    const [toc, setToc] = useState<TocItem[]>([]);
    const [active, setActive] = useState<string | null>(null);

    useEffect(() => {
        const prev = document.title;
        document.title = `${title} — VocaLearn`;
        return () => { document.title = prev; };
    }, [title]);

    useEffect(() => {
        const root = bodyRef.current;
        if (!root) return;
        const heads = Array.from(root.querySelectorAll('h2'));
        const items = heads.map((h, i) => {
            if (!h.id) h.id = slug(h.textContent ?? '', i);
            return { id: h.id, text: h.textContent ?? '' };
        });
        setToc(items);

        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: '-20% 0px -70% 0px' }
        );
        heads.forEach((h) => io.observe(h));
        return () => io.disconnect();
    }, []);

    return (
        <main className="legal">
            <div className="container">
                <motion.header
                    className="legal-head"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="eyebrow">{eyebrow}</span>
                    <h1 className="serif">{title}</h1>
                    <p className="legal-updated">{updated}</p>
                </motion.header>

                {/* İçindekiler sütunu her zaman yer kaplar; liste açıldıktan sonra dolar (kayma olmasın) */}
                <div className="legal-grid">
                    <aside className="legal-toc" aria-label={tocLabel}>
                        <span>{tocLabel}</span>
                        <ul>
                            {toc.map((t) => (
                                <li key={t.id}>
                                    <a href={`#${t.id}`} className={active === t.id ? 'is-active' : ''}>{t.text}</a>
                                </li>
                            ))}
                        </ul>
                    </aside>
                    <motion.div
                        ref={bodyRef}
                        className="prose"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {children}
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default LegalPage;
