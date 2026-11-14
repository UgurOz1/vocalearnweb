import { MARQUEE_BOTTOM, MARQUEE_TOP } from '../data/content';

const Row = ({ items, reverse }: { items: [string, string][]; reverse?: boolean }) => (
    <div className={`marquee-row ${reverse ? 'reverse' : ''}`}>
        {/* Kesintisiz döngü için liste iki kez basılır */}
        {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1}>
                {items.map(([en, tr]) => (
                    <li key={en}>
                        <span className="serif">{en}</span>
                        <em>{tr}</em>
                    </li>
                ))}
            </ul>
        ))}
    </div>
);

const Marquee = () => (
    <section className="marquee" aria-label="Uygulamadaki kelimelerden örnekler">
        <Row items={MARQUEE_TOP} />
        <Row items={MARQUEE_BOTTOM} reverse />
    </section>
);

export default Marquee;
