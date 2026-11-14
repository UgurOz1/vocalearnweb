import { STORE_LINKS } from '../data/content';

const AppleIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
);

const PlayIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.02 13.3l-3.92 2.22-3.52-3.5 3.55-3.52 3.89 2.2a1.49 1.49 0 010 2.6zM1.34.92a1.49 1.49 0 00-.11.57v21.02c0 .22.04.42.12.6l11.16-11.09L1.34.92zm12.2 10.07l3.26-3.24L3.45.2a1.47 1.47 0 00-.95-.18l11.04 10.97zm0 2.07l-11 10.93c.3.04.61-.02.9-.18l13.33-7.54-3.23-3.21z" />
    </svg>
);

type Props = { variant?: 'light' | 'dark' };

const StoreButtons = ({ variant = 'light' }: Props) => {
    const cls = variant === 'dark' ? 'store-btn dark' : 'store-btn';
    return (
        <div className="store-row">
            <a className={cls} href={STORE_LINKS.ios} target="_blank" rel="noopener noreferrer" aria-label="App Store'dan indir">
                <AppleIcon />
                <span>
                    <small>Hemen indir</small>
                    <strong>App Store</strong>
                </span>
            </a>
            <a className={cls} href={STORE_LINKS.android} target="_blank" rel="noopener noreferrer" aria-label="Google Play'den indir">
                <PlayIcon />
                <span>
                    <small>Hemen indir</small>
                    <strong>Google Play</strong>
                </span>
            </a>
        </div>
    );
};

export default StoreButtons;
