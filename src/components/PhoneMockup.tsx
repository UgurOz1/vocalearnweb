import { motion } from 'framer-motion';
import styles from './PhoneMockup.module.css';
import SplashScreen from './SplashScreen';

const PhoneMockup: React.FC = () => {
    return (
        <motion.div
            className={styles.phoneContainer}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Notch and Buttons */}
            <div className={styles.notch}></div>
            <div className={`${styles.btnSide} ${styles.btnVolUp}`}></div>
            <div className={`${styles.btnSide} ${styles.btnVolDown}`}></div>
            <div className={`${styles.btnSide} ${styles.btnPower}`}></div>

            {/* Screen Content */}
            <div className={styles.screen} style={{ position: 'relative', overflow: 'hidden' }}>
                <SplashScreen persistent={true} embedded={true} />
            </div>
        </motion.div>
    );
};

export default PhoneMockup;
