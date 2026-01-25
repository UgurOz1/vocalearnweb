
import React, { useEffect, useState } from 'react';

interface NumberTickerProps {
    value: number;
    label: string;
}

const NumberTicker: React.FC<NumberTickerProps> = ({ value, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        if (start === end) return;

        // Animate over 2 seconds
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (easeOutExpo)
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            const currentCount = Math.floor(ease * end);
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [value]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{
                fontSize: '3rem',
                fontWeight: 800,
                background: 'linear-gradient(to right, #818cf8, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem'
            }}>
                {count.toLocaleString()}+
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</p>
        </div>
    );
};

export default NumberTicker;
