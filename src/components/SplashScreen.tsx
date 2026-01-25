import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import './SplashScreen.css';

interface SplashScreenProps {
    onFinish?: () => void;
    embedded?: boolean;
    persistent?: boolean;
}

const SplashScreen = ({ onFinish, embedded = false, persistent = false }: SplashScreenProps) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (persistent) return;

        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onFinish) setTimeout(onFinish, 500);
        }, 2500);

        return () => clearTimeout(timer);
    }, [onFinish, persistent]);

    const vocaLetters = "Voca".split("");
    const learnLetters = "Learn".split("");

    return (
        <motion.div
            className={`splash-screen ${embedded ? 'embedded' : ''}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="splash-logo-container">
                <motion.img
                    src={logo}
                    alt="VocaLearn Logo"
                    className="splash-logo"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                />

                <div className="splash-title-container">
                    {vocaLetters.map((letter, index) => (
                        <motion.span
                            key={`voca-${index}`}
                            className="splash-title"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: [0.2, 0.65, 0.3, 0.9],
                                delay: 0.3 + (index * 0.05)
                            }}
                            style={{ display: 'inline-block' }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                    {learnLetters.map((letter, index) => (
                        <motion.span
                            key={`learn-${index}`}
                            className="splash-title"
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: [0.2, 0.65, 0.3, 0.9],
                                delay: 0.3 + ((vocaLetters.length + index) * 0.05)
                            }}
                            style={{
                                display: 'inline-block',
                                color: '#a78bfa'
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                {embedded && (
                    <motion.p
                        className="splash-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        İngilizce Öğrenmenin Akıllı Yolu
                    </motion.p>
                )}

                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: embedded ? 120 : 180, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                    style={{
                        height: embedded ? '3px' : '4px',
                        background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #a78bfa)',
                        borderRadius: '2px',
                        marginTop: embedded ? '12px' : '20px'
                    }}
                />
            </div>
        </motion.div>
    );
};

export default SplashScreen;
