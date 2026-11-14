import Download from '../sections/Download';
import Faq from '../sections/Faq';
import Hero from '../sections/Hero';
import Levels from '../sections/Levels';
import Marquee from '../sections/Marquee';
import Premium from '../sections/Premium';
import Steps from '../sections/Steps';
import Tour from '../sections/Tour';

const Home = () => (
    <main>
        <Hero />
        <Marquee />
        <Tour />
        <Levels />
        <Steps />
        <Premium />
        <Faq />
        <Download />
    </main>
);

export default Home;
