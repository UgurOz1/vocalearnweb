import { Check, Minus } from 'lucide-react';
import Reveal from '../components/Reveal';
import { COMPARISON } from '../data/content';

const Cell = ({ v }: { v: string | boolean }) => {
    if (v === true) return <Check size={18} strokeWidth={2.4} className="ok" aria-label="Var" />;
    if (v === false) return <Minus size={18} className="no" aria-label="Yok" />;
    return <span>{v}</span>;
};

const Premium = () => (
    <section id="premium" className="premium">
        <div className="container premium-grid">
            <Reveal className="section-head left">
                <span className="eyebrow">Ücretsiz ve Premium</span>
                <h2 className="serif">Ücretsiz başla,<br /><em>istersen</em> genişlet.</h2>
                <p className="section-lead">
                    Uygulamanın büyük kısmı ücretsiz. Premium aylık, 6 aylık ve yıllık planlarla sunuluyor;
                    güncel fiyatları uygulama içinde ve mağaza sayfasında görebilirsin.
                </p>
            </Reveal>

            <Reveal delay={0.1} className="compare">
                <div className="compare-head">
                    <span />
                    <span>Ücretsiz</span>
                    <span className="gold">Premium</span>
                </div>
                {COMPARISON.map((r) => (
                    <div className="compare-row" key={r.feature}>
                        <span className="compare-feature">{r.feature}</span>
                        <span className="compare-cell"><Cell v={r.free} /></span>
                        <span className="compare-cell strong"><Cell v={r.premium} /></span>
                    </div>
                ))}
            </Reveal>
        </div>
    </section>
);

export default Premium;
