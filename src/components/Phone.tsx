import type { ReactNode } from 'react';

type Props = {
    src?: string;
    alt?: string;
    className?: string;
    children?: ReactNode;
    eager?: boolean;
};

// Gerçek ekran görüntüsü için sade telefon çerçevesi
const Phone = ({ src, alt = '', className = '', children, eager }: Props) => (
    <div className={`phone ${className}`}>
        <div className="phone-screen">
            {children ?? <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} width={600} height={1299} />}
        </div>
    </div>
);

export default Phone;
