import Reveal from '../components/Reveal';
import StoreButtons from '../components/StoreButtons';

const Download = () => (
    <section id="indir" className="download">
        <div className="container">
            <div className="download-card">
                <div className="download-glow" aria-hidden="true" />
                <Reveal>
                    <img src="/logo.png" alt="" className="download-logo" width={64} height={64} />
                </Reveal>
                <Reveal delay={0.08}>
                    <h2 className="serif">Bugünün kelimesi<br /><em>seni bekliyor.</em></h2>
                </Reveal>
                <Reveal delay={0.16}>
                    <p>VocaLearn’ü indir, seviye testini çöz, ilk kelimeni beş dakika içinde öğren.</p>
                </Reveal>
                <Reveal delay={0.24}>
                    <StoreButtons />
                </Reveal>
            </div>
        </div>
    </section>
);

export default Download;
